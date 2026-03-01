// Mobile menu toggle functionality
(function() {
    const toggleBtn = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    
    if (toggleBtn && mobileNav) {
        toggleBtn.addEventListener('click', function() {
            if (mobileNav.style.display === 'none' || mobileNav.style.display === '') {
                mobileNav.style.display = 'block';
            } else {
                mobileNav.style.display = 'none';
            }
        });
    }

    // Research tags interactive demo
    const tags = document.querySelectorAll('.research-tag');
    const output = document.getElementById('research-output');
    
    const descriptions = {
        automata: "🧠 **Automata Theory**: Formal languages, computability, and the mathematical foundations of computer science.",
        networks: "📡 **Broadband & Mobile Networks**: Next-gen communication, wireless, and high-speed data systems.",
        software: "🛠️ **Software Engineering**: Methods, tools, and processes for building reliable software.",
        verification: "✅ **Program Testing & Verification**: Ensuring correctness, model checking, and formal verification.",
        robotics: "🤖 **Robotics**: Autonomous systems, perception, and control algorithms.",
        nlp: "🗣️ **Natural Language Processing**: Machines that understand and generate human language.",
        ml: "📊 **Machine Learning**: Algorithms that learn from data – deep learning, reinforcement learning, and more."
    };

    tags.forEach(tag => {
        tag.addEventListener('click', function(e) {
            // Remove active class from all tags
            tags.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tag
            this.classList.add('active');

            const area = this.dataset.area;
            if (area && descriptions[area]) {
                output.innerHTML = `🔬 ${descriptions[area]}`;
            } else {
                output.innerHTML = `✨ Information about ${this.innerText}. (demo)`;
            }
        });
    });

    // Optional: Close mobile menu when window is resized above mobile breakpoint
    window.addEventListener('resize', function() {
        if (window.innerWidth > 800 && mobileNav) {
            mobileNav.style.display = 'none';
        }
    });
})();