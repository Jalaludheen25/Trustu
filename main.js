const posts = [
    {
        id: 1,
        author: "Priya S",
        role: "Student",
        time: "09:27:30",
        avatarColor: "bg-blue-500",
        initial: "P",
        content: "Is there anyone who has taken Indo-Arab as CBCS course? Need some guidance about the syllabus.",
        likes: 12,
        responses: 8
    },
    {
        id: 2,
        author: "Arjun K",
        role: "Student",
        time: "09:27:30",
        avatarColor: "bg-indigo-500",
        initial: "A",
        content: "Anyone knows a xerox shop near Noor Nagar? Need to print some documents urgently.",
        likes: 7,
        responses: 3
    }
];

function renderPosts() {
    const container = document.getElementById('feed-container');
    container.innerHTML = posts.map(post => `
        <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full ${post.avatarColor} text-white flex items-center justify-center font-bold text-sm">
                    ${post.initial}
                </div>
                <div class="flex-1">
                    <div class="flex items-center gap-2 mb-1">
                        <h3 class="font-bold text-gray-900 text-sm">${post.author}</h3>
                    </div>
                    <div class="text-xs text-gray-500 mb-2">${post.role} • ${post.time}</div>
                    <p class="text-gray-800 text-sm leading-relaxed mb-4">${post.content}</p>
                    
                    <div class="flex items-center gap-6 text-gray-500 text-xs font-medium">
                        <button class="flex items-center gap-1.5 hover:text-gray-900 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                            </svg>
                            ${post.likes}
                        </button>
                        <button class="flex items-center gap-1.5 hover:text-gray-900 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.698 9-8.25s-4.03-8.25-9-8.25S3 7.402 3 11.95c0 2.409 1.09 4.637 2.82 6.27l-.969 2.658c-.148.406.26.814.65.65l2.658-.969a9.082 9.082 0 002.84.291z" />
                            </svg>
                            Respond (${post.responses})
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderPosts);
