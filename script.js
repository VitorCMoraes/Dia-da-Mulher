document.addEventListener('DOMContentLoaded', function() {
    // Animate elements when they come into view
    const animateOnScroll = function() {
        const cards = document.querySelectorAll('.quality-card, .memory-card, .message-content');
        
        cards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (cardPosition < screenPosition) {
                card.style.opacity = 1;
                card.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state for animation
    const cards = document.querySelectorAll('.quality-card, .memory-card, .message-content');
    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Run animation on load and scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load

    // Add smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add special message functionality
    const addSpecialMessage = function() {
        // Create button element
        const specialBtn = document.createElement('button');
        specialBtn.textContent = '💌 Clique para uma mensagem especial';
        specialBtn.classList.add('special-message-btn');
        
        // Add button styles
        specialBtn.style.display = 'block';
        specialBtn.style.margin = '30px auto 0';
        specialBtn.style.padding = '12px 25px';
        specialBtn.style.backgroundColor = 'var(--primary-color)';
        specialBtn.style.color = 'white';
        specialBtn.style.border = 'none';
        specialBtn.style.borderRadius = '50px';
        specialBtn.style.fontFamily = 'var(--font-body)';
        specialBtn.style.fontSize = '1rem';
        specialBtn.style.cursor = 'pointer';
        specialBtn.style.transition = 'all 0.3s ease';
        
        // Add hover effect
        specialBtn.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'var(--secondary-color)';
            this.style.transform = 'scale(1.05)';
        });
        
        specialBtn.addEventListener('mouseout', function() {
            this.style.backgroundColor = 'var(--primary-color)';
            this.style.transform = 'scale(1)';
        });
        
        // Add click event
        specialBtn.addEventListener('click', function() {
            // Create modal
            const modal = document.createElement('div');
            modal.classList.add('special-modal');
            
            // Style modal
            modal.style.position = 'fixed';
            modal.style.top = '0';
            modal.style.left = '0';
            modal.style.width = '100%';
            modal.style.height = '100%';
            modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            modal.style.display = 'flex';
            modal.style.alignItems = 'center';
            modal.style.justifyContent = 'center';
            modal.style.zIndex = '1000';
            modal.style.opacity = '0';
            modal.style.transition = 'opacity 0.3s ease';
            
            // Create modal content
            const modalContent = document.createElement('div');
            modalContent.classList.add('modal-content');
            
            // Style modal content
            modalContent.style.backgroundColor = 'white';
            modalContent.style.padding = '40px';
            modalContent.style.borderRadius = '10px';
            modalContent.style.maxWidth = '500px';
            modalContent.style.textAlign = 'center';
            modalContent.style.position = 'relative';
            modalContent.style.transform = 'scale(0.8)';
            modalContent.style.transition = 'transform 0.3s ease';
            
            // Add close button
            const closeBtn = document.createElement('button');
            closeBtn.innerHTML = '&times;';
            closeBtn.style.position = 'absolute';
            closeBtn.style.top = '10px';
            closeBtn.style.right = '15px';
            closeBtn.style.border = 'none';
            closeBtn.style.background = 'none';
            closeBtn.style.fontSize = '24px';
            closeBtn.style.cursor = 'pointer';
            closeBtn.style.color = 'var(--dark-color)';
            
            // Add message content
            const messageTitle = document.createElement('h3');
            messageTitle.textContent = 'Você é Incrível!';
            messageTitle.style.color = 'var(--primary-color)';
            messageTitle.style.marginBottom = '20px';
            messageTitle.style.fontFamily = 'var(--font-heading)';
            messageTitle.style.fontSize = '2rem';
            
            const messageText = document.createElement('p');
            messageText.innerHTML = 'Neste Dia das Mulheres, quero que saiba que sua força, coragem e bondade iluminam o mundo ao seu redor. Você é uma inspiração para todos que têm o privilégio de conhecê-la.<br><br>Nunca se esqueça do impacto positivo que você tem na vida dos outros!';
            messageText.style.fontSize = '1.1rem';
            messageText.style.lineHeight = '1.8';
            
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.fontSize = '50px';
            heart.style.margin = '20px 0';
            heart.style.animation = 'heartbeat 1.5s infinite';
            
            // Create heartbeat animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes heartbeat {
                    0% { transform: scale(1); }
                    25% { transform: scale(1.1); }
                    50% { transform: scale(1); }
                    75% { transform: scale(1.1); }
                    100% { transform: scale(1); }
                }
            `;
            document.head.appendChild(style);
            
            // Assemble modal
            modalContent.appendChild(closeBtn);
            modalContent.appendChild(messageTitle);
            modalContent.appendChild(messageText);
            modalContent.appendChild(heart);
            modal.appendChild(modalContent);
            document.body.appendChild(modal);
            
            // Show modal with animation
            setTimeout(() => {
                modal.style.opacity = '1';
                modalContent.style.transform = 'scale(1)';
            }, 10);
            
            // Close modal on button click
            closeBtn.addEventListener('click', function() {
                modal.style.opacity = '0';
                modalContent.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    document.body.removeChild(modal);
                }, 300);
            });
            
            // Close modal when clicking outside
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.style.opacity = '0';
                    modalContent.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        document.body.removeChild(modal);
                    }, 300);
                }
            });
        });
        
        // Add button to the message section
        const messageSection = document.querySelector('.message-content');
        messageSection.appendChild(specialBtn);
    };
    
    // Initialize special message button
    addSpecialMessage();
});
