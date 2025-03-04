<script type="module">
    // Importa las funciones necesarias de Firebase
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
    import { getFirestore, doc, getDoc, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

    // Configuración de Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyAlXcaVddE6t9XKWKTMMvtZLal82K42Jbo",
        authDomain: "misproyectos2025-4db85.firebaseapp.com",
        projectId: "misproyectos2025-4db85",
        storageBucket: "misproyectos2025-4db85.firebasestorage.app",
        messagingSenderId: "423212795986",
        appId: "1:423212795986:web:5ce65055e0b0dc6ee3f78b",
        measurementId: "G-ZJFCHW5732"
    };

    // Inicializa Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    // Referencia al contador de visitas
    const visitCounter = document.getElementById('visit-counter');

    // Función para actualizar el contador
    const updateVisitCount = async () => {
        try {
            // Obtén el documento del contador
            const counterRef = doc(db, 'counters', 'visitCount');
            const counterDoc = await getDoc(counterRef);

            if (counterDoc.exists()) {
                // Si el documento existe, incrementa el contador
                const currentCount = counterDoc.data().count || 0;
                const newCount = currentCount + 1;
                await updateDoc(counterRef, { count: newCount });
                visitCounter.textContent = newCount;
            } else {
                // Si el documento no existe, créalo
                await setDoc(counterRef, { count: 1 });
                visitCounter.textContent = 1;
            }
        } catch (error) {
            console.error('Error al actualizar el contador:', error);
        }
    };

    // Llama a la función para actualizar el contador
    updateVisitCount();
</script>