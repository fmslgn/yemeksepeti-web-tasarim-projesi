document.addEventListener('DOMContentLoaded', function() { // Sayfa yüklendiğinde çalışacak ana fonksiyon
  const root = document.getElementById('root'); // Ana içerik alanını seçer
  root.innerHTML = `
    <header class="header">
      <div class="logo">YemekSepeti</div>
      <nav class="nav">
        <a href="#">Ana Sayfa</a>
        <a href="#">Restoranlar</a>
        <a href="#">Kategoriler</a>
        <a href="#">Hakkımızda</a>
      </nav>
    </header>
    <main>
      <section class="hero">
        <h1>Lezzetin Kapında <span class="highlight">Hızlı Teslimatla!</span></h1>
        <p>En sevdiğin restoranlardan binlerce lezzeti kapına kadar getiriyoruz</p>
        <div class="search-bar">
          <input type="text" placeholder="Konum seçin"> <!-- Kullanıcıdan konum girişi alınır -->
          <input type="text" placeholder="Restoran veya yemek ara..."> <!-- Restoran/yemek arama kutusu -->
          <button>Ara</button> <!-- Arama butonu -->
        </div>
      </section>
      <!-- Diğer bölümler (Kategoriler, Popüler Lezzetler, Restoranlar, Özellikler) buraya eklenecek -->
      <section class="categories">
        <h2>Popüler Kategoriler</h2>
        <div class="category-list">
          <div class="category">🍕 Pizza</div> <!-- Pizza kategorisi -->
          <div class="category">☕ Kahve</div> <!-- Kahve kategorisi -->
          <div class="category">🥩 Et Yemekleri</div> <!-- Et yemekleri kategorisi -->
          <div class="category">🍔 Burger</div> <!-- Burger kategorisi -->
          <div class="category">🍪 Tatlı</div> <!-- Tatlı kategorisi -->
          <div class="category">🥗 Salata</div> <!-- Salata kategorisi -->
          <div class="category">🥣 Çorba</div> <!-- Çorba kategorisi -->
          <div class="category">🍦 Dondurma</div> <!-- Dondurma kategorisi -->
        </div>
      </section>
      <section class="popular-foods">
        <h2>Popüler Lezzetler</h2>
        <div class="food-list">
          <div class="food-card">
            <img src="assets/margherita-pizza.jpg" alt="Margherita Pizza"> <!-- Pizza görseli -->
            <div class="food-info">
              <div class="food-title">Margherita Pizza</div> <!-- Yemek adı -->
              <div class="food-restaurant">İtalyan Lezzeti</div> <!-- Restoran adı -->
              <div class="food-price">45₺ <span class="food-original-price">60₺</span></div> <!-- Fiyat -->
            </div>
          </div>
          <div class="food-card">
            <img src="assets/cheeseburger-menu.jpg" alt="Cheeseburger Menu"> <!-- Burger görseli -->
            <div class="food-info">
              <div class="food-title">Cheeseburger Menu</div>
              <div class="food-restaurant">Burger House</div>
              <div class="food-price">35₺</div>
            </div>
          </div>
          <!-- Diğer popüler yemekler buraya eklenebilir -->
        </div>
      </section>
      <section class="featured-restaurants">
        <h2>Öne Çıkan Restoranlar</h2>
        <div class="restaurant-list">
          <div class="restaurant-card">
            <img src="assets/pizza-palace.jpg" alt="Pizza Palace"> <!-- Restoran görseli -->
            <div class="restaurant-info">
              <div class="restaurant-title">Pizza Palace</div>
              <div class="restaurant-cuisine">İtalyan Mutfağı</div>
              <div class="restaurant-rating">4.8 ⭐</div>
            </div>
          </div>
          <div class="restaurant-card">
            <img src="assets/burger-station.jpg" alt="Burger Station">
            <div class="restaurant-info">
              <div class="restaurant-title">Burger Station</div>
              <div class="restaurant-cuisine">Fast Food</div>
              <div class="restaurant-rating">4.6 ⭐</div>
            </div>
          </div>
          <!-- Diğer restoranlar buraya eklenebilir -->
        </div>
      </section>
      <section class="cities">
        <h2>Türkiye'nin her şehrindeyiz!</h2>
        <div class="city-list">
          <div class="city-card">
            <img src="assets/ankara.jpg" alt="Ankara"> <!-- Şehir görseli -->
            <div class="city-label">Ankara</div> <!-- Şehir adı -->
          </div>
          <div class="city-card">
            <img src="assets/antalya.jpg" alt="Antalya">
            <div class="city-label">Antalya</div>
          </div>
          <div class="city-card">
            <img src="assets/kastamonu-cide.jpg" alt="Kastamonu Cide">
            <div class="city-label">Kastamonu Cide</div>
          </div>
          <div class="city-card">
            <img src="assets/istanbul.jpg" alt="İstanbul">
            <div class="city-label">İstanbul</div>
          </div>
        </div>
      </section>
      <section class="features">
        <h2>Neden YemekSepeti?</h2>
        <div class="feature-list">
          <div class="feature">
            <div class="feature-icon">⏱️</div> <!-- Hızlı teslimat simgesi -->
            <div class="feature-title">Hızlı Teslimat</div>
            <div class="feature-desc">Ortalama 30 dakikada kapınızda</div>
          </div>
          <div class="feature">
            <div class="feature-icon">🔒</div> <!-- Güvenli ödeme simgesi -->
            <div class="feature-title">Güvenli Ödeme</div>
            <div class="feature-desc">SSL sertifikası ile korumalı</div>
          </div>
          <div class="feature">
            <div class="feature-icon">🚚</div> <!-- Ücretsiz kargo simgesi -->
            <div class="feature-title">Ücretsiz Kargo</div>
            <div class="feature-desc">50₺ üzeri siparişlerde</div>
          </div>
          <div class="feature">
            <div class="feature-icon">⭐</div> <!-- Kalite garantisi simgesi -->
            <div class="feature-title">Kalite Garantisi</div>
            <div class="feature-desc">5 yıldızlı müşteri memnuniyeti</div>
          </div>
        </div>
      </section>
    </main>
    <footer class="footer">
      <div>© 2025 YemekSepeti. Tüm hakları saklıdır.</div>
    </footer>
  `;

  // Şehir kartlarına tıklama işlevi ekle
  document.querySelectorAll('.city-card').forEach(function(card) { // Tüm şehir kartlarını seçer
    const label = card.querySelector('.city-label'); // Karttaki şehir adını bulur
    if(label && label.textContent.trim() === 'Kastamonu Cide') { // Sadece Kastamonu Cide için tıklanabilirlik ekler
      card.style.cursor = 'pointer'; // İmleci el simgesi yapar
      card.addEventListener('click', function() { // Tıklanınca şehir detay sayfasını açar
        root.innerHTML = `
          <header class="header">
            <div class="logo">YemekSepeti</div>
            <nav class="nav">
              <a href="#" id="back-home">Ana Sayfa</a>
            </nav>
          </header>
          <main>
            <section class="city-hero">
              <h1>Kastamonu Cide Online Yemek Siparişi</h1>
            </section>
            <div class="breadcrumb">
              <a href="#" id="breadcrumb-home">Anasayfa</a> <span>›</span> <span>Kastamonu Cide</span>
            </div>
            <h2 class="city-rest-title">Tüm Restoranlar</h2>
            <div class="city-rest-list">
              <div class="city-rest-card">
                <div class="city-rest-badges">
                  <span class="badge badge-red">Seçili ürünlerde %30</span>
                  <span class="badge badge-pink">YeClub Restoranı</span>
                </div>
                <img src="assets/cetinin-dunyasi.jpg" alt="Çetinin Dünyası">
                <div class="city-rest-info">
                  <div class="city-rest-name">Çetinin Dünyası</div>
                  <div class="city-rest-desc">120 TL minimum • Köfte</div>
                  <div class="city-rest-rating"><span class="star">★</span> 1.2 (5)</div>
                </div>
              </div>
              <div class="city-rest-card">
                <div class="city-rest-badges">
                  <span class="badge badge-red">Tüm ürünlerde %20</span>
                </div>
                <img src="assets/tata-kunefe.jpg" alt="Tata Künefe">
                <div class="city-rest-info">
                  <div class="city-rest-name">Tata Künefe</div>
                  <div class="city-rest-desc">0 TL minimum • Künefe</div>
                  <div class="city-rest-rating"><span class="star">★</span> 4.4 (3000+)</div>
                </div>
              </div>
              <div class="city-rest-card">
                <div class="city-rest-badges">
                  <span class="badge badge-red">Tüm ürünlerde %15</span>
                  <span class="badge badge-pink">YeClub Restoranı</span>
                </div>
                <img src="assets/di-doner.jpg" alt="Di Döner">
                <div class="city-rest-info">
                  <div class="city-rest-name">Di Döner</div>
                  <div class="city-rest-desc">120 TL minimum • Tost & Sandviç</div>
                  <div class="city-rest-rating"><span class="star">★</span> 4.3 (1000+)</div>
                </div>
              </div>
            </div>
          </main>
          <footer class="footer">
            <div>© 2025 YemekSepeti. Tüm hakları saklıdır.</div>
          </footer>
        `;
        // Geri dönüş için anasayfa linklerine tekrar event ekle
        document.getElementById('back-home').onclick = document.getElementById('breadcrumb-home').onclick = function(e) { // Anasayfaya dönmek için
          e.preventDefault();
          location.reload(); // Sayfayı yeniler ve ana sayfaya döner
        };
      });
    }
  });
});
