// Timetable data based on your schedule
const timetable = {
    'Monday': [
        { time: '10:30', task: 'Check Emails', type: 'admin' },
        { time: '11:00', task: 'YouTube Content', type: 'youtube' },
        { time: '12:00', task: 'YouTube Content', type: 'youtube' },
        { time: '13:00', task: 'YouTube Content', type: 'youtube' },
        { time: '14:00', task: 'YouTube Content', type: 'youtube' },
        { time: '15:00', task: 'YouTube Content', type: 'youtube' },
        { time: '17:00', task: 'Meditation & Family', type: 'personal' },
        { time: '19:30', task: 'YouTube Content', type: 'youtube' },
        { time: '20:30', task: 'AI Product Idea', type: 'ai-product' }
    ],
    'Tuesday': [
        { time: '10:30', task: 'Check Emails', type: 'admin' },
        { time: '11:00', task: 'Appointments', type: 'appointments' },
        { time: '12:00', task: 'Appointments', type: 'appointments' },
        { time: '13:00', task: 'Appointments', type: 'appointments' },
        { time: '14:00', task: 'Appointments', type: 'appointments' },
        { time: '15:00', task: 'Appointments', type: 'appointments' },
        { time: '17:00', task: 'Meditation & Family', type: 'personal' },
        { time: '19:30', task: 'Appointments', type: 'appointments' },
        { time: '20:30', task: 'AI Product Idea', type: 'ai-product' }
    ],
    'Wednesday': [
        { time: '10:30', task: 'Check Emails', type: 'admin' },
        { time: '11:00', task: 'PODCASTING', type: 'podcast' },
        { time: '12:00', task: 'AI Coaching Calls', type: 'ai-cert' },
        { time: '13:00', task: 'PODCASTING', type: 'podcast' },
        { time: '14:00', task: 'AI Certification', type: 'ai-cert' },
        { time: '15:00', task: 'ICF Coaching', type: 'coaching' },
        { time: '17:00', task: 'Meditation & Family', type: 'personal' },
        { time: '19:30', task: 'AI Certification', type: 'ai-cert' },
        { time: '20:30', task: 'AI Product Idea', type: 'ai-product' }
    ],
    'Thursday': [
        { time: '10:30', task: 'Check Emails', type: 'admin' },
        { time: '11:00', task: 'Appointments', type: 'appointments' },
        { time: '12:00', task: 'Appointments', type: 'appointments' },
        { time: '13:00', task: 'Appointments', type: 'appointments' },
        { time: '14:00', task: 'Appointments', type: 'appointments' },
        { time: '15:00', task: 'Appointments', type: 'appointments' },
        { time: '17:00', task: 'Meditation & Family', type: 'personal' },
        { time: '19:30', task: 'Appointments', type: 'appointments' },
        { time: '20:30', task: 'AI Product Idea', type: 'ai-product' }
    ],
    'Friday': [
        { time: '10:30', task: 'Check Emails', type: 'admin' },
        { time: '11:00', task: 'YouTube Scripting', type: 'youtube' },
        { time: '12:00', task: 'YouTube Scripting', type: 'youtube' },
        { time: '13:00', task: 'YouTube Scripting', type: 'youtube' },
        { time: '14:00', task: 'AI Coaching Calls', type: 'ai-cert' },
        { time: '15:00', task: 'AI Coaching Calls', type: 'ai-cert' },
        { time: '17:00', task: 'Meditation & Family', type: 'personal' },
        { time: '19:30', task: 'YouTube Scripting', type: 'youtube' },
        { time: '20:30', task: 'AI Product Idea', type: 'ai-product' }
    ],
    'Saturday': [
        { time: '10:30', task: 'Check Emails', type: 'admin' },
        { time: '11:00', task: 'Blogging', type: 'blog' },
        { time: '12:00', task: 'Blogging', type: 'blog' },
        { time: '13:00', task: 'YouTube Content', type: 'youtube' },
        { time: '14:00', task: 'AI Certification', type: 'ai-cert' },
        { time: '15:00', task: 'AI Certification', type: 'ai-cert' },
        { time: '17:00', task: 'Meditation & Family', type: 'personal' },
        { time: '20:30', task: 'AI Product Idea', type: 'ai-product' }
    ],
    'Sunday': [
        { time: '10:30', task: 'Check Emails', type: 'admin' },
        { time: '11:00', task: 'Blogging', type: 'blog' },
        { time: '12:00', task: 'Blogging', type: 'blog' },
        { time: '13:00', task: 'YouTube Content', type: 'youtube' },
        { time: '14:00', task: 'AI Certification', type: 'ai-cert' },
        { time: '15:00', task: 'AI Certification', type: 'ai-cert' },
        { time: '17:00', task: 'Meditation & Family', type: 'personal' },
        { time: '20:30', task: 'AI Product Idea', type: 'ai-product' }
    ]
};

// Goals data
const goals = {
    youtube: { current: 5, target: 60, deadline: '2025-12-05' },
    aiCert: { current: 15, target: 100, deadline: '2025-08-30' },
    aiProduct: { current: 25, target: 100, deadline: '2025-10-21' },
    podcast: { current: 0, target: 1, deadline: '2025-08-15' },
    blog: { current: 12, target: 400, deadline: '2025-11-30' }
};

// Daily goals based on current day
const dailyGoals = {
    'Monday': [
        { task: 'Create 3 YouTube video scripts', type: 'youtube', completed: false },
        { task: 'Record 3 YouTube videos', type: 'youtube', completed: false },
        { task: 'Work on AI Product features', type: 'ai-product', completed: false },
        { task: 'Respond to YouTube comments', type: 'youtube', completed: false }
    ],
    'Tuesday': [
        { task: 'Attend scheduled appointments', type: 'appointments', completed: false },
        { task: 'Work on AI Product development', type: 'ai-product', completed: false },
        { task: 'Follow up on client communications', type: 'appointments', completed: false }
    ],
    'Wednesday': [
        { task: 'Record podcast episode', type: 'podcast', completed: false },
        { task: 'Complete AI certification modules', type: 'ai-cert', completed: false },
        { task: 'Conduct AI coaching calls', type: 'ai-cert', completed: false },
        { task: 'ICF coaching session', type: 'coaching', completed: false },
        { task: 'Work on AI Product', type: 'ai-product', completed: false }
    ],
    'Thursday': [
        { task: 'Attend scheduled appointments', type: 'appointments', completed: false },
        { task: 'Work on AI Product development', type: 'ai-product', completed: false },
        { task: 'Prepare for tomorrow\'s content', type: 'youtube', completed: false }
    ],
    'Friday': [
        { task: 'Write YouTube scripts for next week', type: 'youtube', completed: false },
        { task: 'Conduct AI coaching calls', type: 'ai-cert', completed: false },
        { task: 'Work on AI Product features', type: 'ai-product', completed: false },
        { task: 'Plan weekend content', type: 'youtube', completed: false }
    ],
    'Saturday': [
        { task: 'Write 2-3 blog posts', type: 'blog', completed: false },
        { task: 'Create YouTube content', type: 'youtube', completed: false },
        { task: 'Study AI certification materials', type: 'ai-cert', completed: false },
        { task: 'Work on AI Product', type: 'ai-product', completed: false }
    ],
    'Sunday': [
        { task: 'Write 2-3 blog posts', type: 'blog', completed: false },
        { task: 'Create YouTube content', type: 'youtube', completed: false },
        { task: 'Study AI certification materials', type: 'ai-cert', completed: false },
        { task: 'Plan next week\'s schedule', type: 'admin', completed: false },
        { task: 'Work on AI Product', type: 'ai-product', completed: false }
    ]
};

// Weekly goals
const weeklyGoals = [
    { task: 'Upload 3 YouTube videos', type: 'youtube', completed: false },
    { task: 'Complete 5 hours of AI certification study', type: 'ai-cert', completed: false },
    { task: 'Record and publish 1 podcast episode', type: 'podcast', completed: false },
    { task: 'Write 10 blog posts', type: 'blog', completed: false },
    { task: 'Develop 2 new AI Product features', type: 'ai-product', completed: false },
    { task: 'Conduct 3 AI coaching calls', type: 'ai-cert', completed: false }
];

// Monthly goals
const monthlyGoals = [
    { task: 'Upload 12 YouTube videos', type: 'youtube', completed: false },
    { task: 'Complete 20% of AI certification', type: 'ai-cert', completed: false },
    { task: 'Record 4 podcast episodes', type: 'podcast', completed: false },
    { task: 'Write 40 blog posts', type: 'blog', completed: false },
    { task: 'Complete AI Product MVP milestone', type: 'ai-product', completed: false },
    { task: 'Conduct 12 AI coaching calls', type: 'ai-cert', completed: false }
];

// Initialize dashboard
function initDashboard() {
    updateDateTime();
    updateCurrentTask();
    updateGoalsProgress();
    loadDailyGoals();
    loadWeeklyGoals();
    loadMonthlyGoals();
    
    // Update time every minute
    setInterval(updateDateTime, 60000);
    // Update current task every minute
    setInterval(updateCurrentTask, 60000);
}

// Update date and time
function updateDateTime() {
    const now = new Date();
    
    // Update current time
    const timeString = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
    });
    document.getElementById('current-time').textContent = timeString;
    
    // Update current date
    const dateString = now.toLocaleDateString('en-US', { 
        weekday: 'long',
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    document.getElementById('current-date').textContent = dateString;
    
    // Update week number
    const weekNumber = getWeekNumber(now);
    document.getElementById('current-week').textContent = `Week ${weekNumber}`;
}

// Get week number
function getWeekNumber(date) {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

// Update current and next task
function updateCurrentTask() {
    const now = new Date();
    const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' });
    const currentTime = now.getHours() * 100 + now.getMinutes();
    
    const todaySchedule = timetable[currentDay] || [];
    
    let currentTask = null;
    let nextTask = null;
    
    for (let i = 0; i < todaySchedule.length; i++) {
        const taskTime = parseInt(todaySchedule[i].time.replace(':', ''));
        
        if (currentTime >= taskTime) {
            currentTask = todaySchedule[i];
            nextTask = todaySchedule[i + 1] || null;
        } else {
            if (!currentTask) {
                nextTask = todaySchedule[i];
            }
            break;
        }
    }
    
    // Update current task
    const currentTaskElement = document.getElementById('current-task');
    if (currentTask) {
        currentTaskElement.textContent = `${currentTask.time} - ${currentTask.task}`;
    } else {
        currentTaskElement.textContent = 'No current task scheduled';
    }
    
    // Update next task
    const nextTaskElement = document.getElementById('next-task');
    if (nextTask) {
        nextTaskElement.textContent = `${nextTask.time} - ${nextTask.task}`;
    } else {
        nextTaskElement.textContent = 'No more tasks today';
    }
}

// Update goals progress
function updateGoalsProgress() {
    // YouTube
    const youtubePercent = Math.round((goals.youtube.current / goals.youtube.target) * 100);
    document.getElementById('youtube-progress').style.width = youtubePercent + '%';
    document.getElementById('youtube-current').textContent = goals.youtube.current;
    
    // AI Certification
    document.getElementById('ai-cert-progress').style.width = goals.aiCert.current + '%';
    document.getElementById('ai-cert-current').textContent = goals.aiCert.current;
    
    // AI Product
    document.getElementById('ai-product-progress').style.width = goals.aiProduct.current + '%';
    document.getElementById('ai-product-current').textContent = goals.aiProduct.current;
    
    // Podcast
    const podcastPercent = goals.podcast.current > 0 ? 100 : 0;
    document.getElementById('podcast-progress').style.width = podcastPercent + '%';
    document.getElementById('podcast-current').textContent = goals.podcast.current;
    
    // Blog
