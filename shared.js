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

// E-Mail-Adressen erst zur Laufzeit zusammensetzen, damit sie im HTML-Quelltext
// nicht im Klartext für Bots auslesbar sind, für Besucher aber normal anklickbar bleiben.
document.querySelectorAll('.email-link').forEach(function(el) {
    var email = el.dataset.user + '@' + el.dataset.domain;
    var a = document.createElement('a');
    a.href = 'mailto:' + email;
    a.textContent = email;
    if (el.getAttribute('style')) a.setAttribute('style', el.getAttribute('style'));
    el.replaceWith(a);
});

// FAQ- / Akkordeon-Elemente (wiederverwendet auf faq.html und ueber-mich.html)
document.querySelectorAll('.faq-frage').forEach(function(btn) {
    btn.addEventListener('click', function() {
        var antwort = this.nextElementSibling;
        var istOffen = this.classList.contains('offen');
        var gruppe = this.closest('.faq-liste');
        if (gruppe) {
            gruppe.querySelectorAll('.faq-frage').forEach(function(b) {
                b.classList.remove('offen');
                b.setAttribute('aria-expanded', 'false');
                b.nextElementSibling.classList.remove('offen');
            });
        }
        if (!istOffen) {
            this.classList.add('offen');
            this.setAttribute('aria-expanded', 'true');
            antwort.classList.add('offen');
        }
    });
});
