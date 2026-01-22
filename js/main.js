// Shared UI Functionality

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons({ strokeWidth: 1.5 });
    }

    // Profile Modal Functionality
    initProfileModal();

    // Detail Modal Functionality (for accommodation.html)
    initDetailModal();

    // Registration Tab Switching (for registration.html)
    initRegistrationTabs();

    // Feed Functionality (for index.html)
    initFeed();
});

// Profile Modal
function initProfileModal() {
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
}

// Detail Modal (for accommodation.html)
function initDetailModal() {
    const detailModal = document.getElementById('detailModal');

    if (!detailModal) return;

    // Make openModal and closeModal globally available
    window.openModal = function () {
        detailModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    };

    window.closeModal = function () {
        detailModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    };

    // Close modal when clicking outside
    detailModal.addEventListener('click', function (e) {
        if (e.target === detailModal) {
            window.closeModal();
        }
    });

    // Close modal on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            window.closeModal();
        }
    });
}

// Registration Tab Switching and Validation
function initRegistrationTabs() {
    const phoneTab = document.getElementById('phoneTab');
    const emailTab = document.getElementById('emailTab');

    if (!phoneTab || !emailTab) return;

    let currentTab = 'phone';

    window.switchTab = function (tab) {
        currentTab = tab;
        const phoneForm = document.getElementById('phoneForm');
        const emailForm = document.getElementById('emailForm');

        if (tab === 'phone') {
            phoneTab.className = 'flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all bg-white shadow-sm text-brand-dark';
            emailTab.className = 'flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all text-brand-medium hover:text-brand-dark';
            phoneForm.classList.remove('hidden');
            emailForm.classList.add('hidden');
        } else {
            emailTab.className = 'flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all bg-white shadow-sm text-brand-dark';
            phoneTab.className = 'flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all text-brand-medium hover:text-brand-dark';
            emailForm.classList.remove('hidden');
            phoneForm.classList.add('hidden');
        }
    };

    window.validatePhone = function (input) {
        input.value = input.value.replace(/[^0-9]/g, '');
        const phoneNumber = input.value;
        const sendBtn = document.getElementById('phoneSendOtp');
        const errorEl = document.getElementById('phoneError');

        if (phoneNumber.length === 10) {
            sendBtn.disabled = false;
            errorEl.classList.add('hidden');
        } else {
            sendBtn.disabled = true;
            if (phoneNumber.length > 0 && phoneNumber.length < 10) {
                errorEl.classList.remove('hidden');
            } else {
                errorEl.classList.add('hidden');
            }
        }
    };

    window.validateEmail = function (input) {
        const email = input.value;
        const sendBtn = document.getElementById('emailSendOtp');
        const errorEl = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(email)) {
            sendBtn.disabled = false;
            errorEl.classList.add('hidden');
        } else {
            sendBtn.disabled = true;
            if (email.length > 0) {
                errorEl.classList.remove('hidden');
            } else {
                errorEl.classList.add('hidden');
            }
        }
    };

    // Form submission handlers
    const phoneForm = document.getElementById('phoneForm');
    const emailForm = document.getElementById('emailForm');

    if (phoneForm) {
        phoneForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const phoneNumber = document.getElementById('phoneNumber').value;
            if (phoneNumber.length === 10) {
                localStorage.setItem('loginMethod', 'phone');
                localStorage.setItem('loginValue', phoneNumber);
                window.location.href = 'verify-otp.html';
            }
        });
    }

    if (emailForm) {
        emailForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = document.getElementById('emailAddress').value;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailRegex.test(email)) {
                localStorage.setItem('loginMethod', 'email');
                localStorage.setItem('loginValue', email);
                window.location.href = 'verify-otp.html';
            }
        });
    }
}

// Feed Functionality (placeholder for future implementation)
function initFeed() {
    const feedContainer = document.getElementById('feed-container');

    if (!feedContainer) return;

    // Feed functionality can be added here in the future
}
