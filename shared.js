document.querySelectorAll('.copyright-year').forEach(function(el) {
    el.textContent = new Date().getFullYear();
});

document.querySelectorAll('li.has-dropdown > a').forEach(function(link) {
    link.addEventListener('click', function(e) {
        var li = this.closest('li.has-dropdown');
        if (!li.classList.contains('open')) {
            e.preventDefault();
            document.querySelectorAll('li.has-dropdown.open').forEach(function(el) {
                el.classList.remove('open');
            });
            li.classList.add('open');
        }
    });
});

document.addEventListener('click', function(e) {
    if (!e.target.closest('li.has-dropdown')) {
        document.querySelectorAll('li.has-dropdown.open').forEach(function(el) {
            el.classList.remove('open');
        });
    }
});
