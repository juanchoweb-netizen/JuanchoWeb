
        document.addEventListener('DOMContentLoaded', function() {
            const accordionHeaders = document.querySelectorAll('.accordion-header');
            
            accordionHeaders.forEach(header => {
                header.addEventListener('click', function() {
                    const accordion = this.parentElement;
                    accordion.classList.toggle('active');
                    
                    // Cerrar otros acordeones al abrir uno nuevo
                    if (accordion.classList.contains('active')) {
                        document.querySelectorAll('.accordion').forEach(item => {
                            if (item !== accordion && item.classList.contains('active')) {
                                item.classList.remove('active');
                            }
                        });
                    }
                });
            });
        });
