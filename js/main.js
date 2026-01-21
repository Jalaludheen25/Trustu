// Shared UI Functionality

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons({ strokeWidth: 1.5 });
    }

    // Profile Modal Functionality
    const profileModal = document.getElementById('profileModal');
    const myProfileBtn = document.getElementById('myProfileBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalOverlay = document.getElementById('modalOverlay');
    const updateProfileBtn = document.getElementById('updateProfileBtn');
    const logOutBtn = document.getElementById('logOutBtn');

    if (myProfileBtn && profileModal) {
        myProfileBtn.addEventListener('click', () => {
            profileModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            profileModal.classList.add('hidden');
            document.body.style.overflow = '';
        });
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', () => {
            profileModal.classList.add('hidden');
            document.body.style.overflow = '';
        });
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && profileModal && !profileModal.classList.contains('hidden')) {
            profileModal.classList.add('hidden');
            document.body.style.overflow = '';
        }
    });

    // Update Profile button action
    if (updateProfileBtn) {
        updateProfileBtn.addEventListener('click', () => {
            alert('Profile updated successfully!');
            profileModal.classList.add('hidden');
            document.body.style.overflow = '';
        });
    }

    // Log Out button action
    if (logOutBtn) {
        logOutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (confirm('Are you sure you want to log out?')) {
                localStorage.clear();
                window.location.replace('login.html');
            }
        });
    }
});
