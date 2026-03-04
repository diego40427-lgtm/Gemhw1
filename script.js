function toggleAnswer(id) {
    const element = document.getElementById(id);
    const btn = document.getElementById('btn-' + id);
    
    if (element.classList.contains('show')) {
        element.classList.remove('show');
        btn.textContent = '顯示解答';
        btn.classList.replace('bg-indigo-600', 'bg-slate-900');
    } else {
        element.classList.add('show');
        btn.textContent = '隱藏解答';
        btn.classList.replace('bg-slate-900', 'bg-indigo-600');
    }
}
