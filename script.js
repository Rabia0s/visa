window.addEventListener('load', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if(name && email && message) {
          alert('Mesajınız başarıyla gönderildi!');
          // Formu sıfırla
          document.getElementById('contact-form').reset();
        } else {
          alert('Lütfen tüm alanları doldurun.');
        }
    });

    // Animasyonun başladığı her noktada tetiklenecek kod
    document.getElementById('moving-text').addEventListener('animationiteration', function() {
        console.log("Yazı tekrar başladı!");
        // Burada animasyon tekrar başladığında yapılacak işlemleri yazabilirsiniz.
    });
});
