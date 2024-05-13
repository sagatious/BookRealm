
    // Popup functionality
        const popupLinks = document.querySelectorAll('.popup-link');
        const popupContainer = document.querySelector('.popup-container');
        const popups = document.querySelectorAll('.popup');
        const popupCloseButtons = document.querySelectorAll('.popup-close');

        popupLinks.forEach((link, index) => {
            link.addEventListener('click', () => {
                popups[index].style.display = 'block';
                popupContainer.style.display = 'block';
            });
        });

        popupCloseButtons.forEach((button) => {
            button.addEventListener('click', () => {
                popups.forEach((popup) => {
                    popup.style.display = 'none';
                });
                popupContainer.style.display = 'none';
            });
        });
    