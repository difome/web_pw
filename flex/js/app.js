document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function(e) {
            console.log('Перехід за адресою: ' + this.getAttribute('href'));

        });
    });
});