# CSS Kararları

## 1. Breakpoint Seçimi
640px ve 1024px breakpoint değerlerini seçtim çünkü içerik bu genişliklerde doğal olarak düzen değiştiriyor. 
640px sonrası tablet görünümünde boşluklar artıyor ve navigasyon daha rahat okunuyor. 
1024px sonrası masaüstünde içerik ortalanarak daha dengeli bir yerleşim sağlanıyor.

## 2. Layout Tercihleri
Header bölümünde Flexbox kullandım çünkü navigasyon elemanlarını tek eksende hizalamak daha kolaydır.
Proje kartları için Grid kullandım çünkü iki boyutlu bir kart düzeni gerekiyordu.
Grid yapısında repeat(auto-fit, minmax(280px, 1fr)) kullanarak kartların ekran genişliğine göre otomatik yerleşmesini sağladım.

## 3. Design Tokens
Renk, spacing ve tipografi değerlerini tokens.css dosyasında topladım.
Bu yaklaşım tasarım tutarlılığı sağlar ve değişikliklerin tek noktadan yapılmasına imkan verir.
Fluid typography için clamp() kullanarak yazı boyutlarının ekran genişliğine göre akıcı değişmesini sağladım.

## 4. Responsive Stratejiler
Mobile-first yaklaşımı uyguladım ve temel stilleri mobil ekranlara göre yazdım.
Tablet ve masaüstü düzenleri için min-width media query kullandım.
Görsellerde max-width: 100% kullanarak taşma problemlerini engelledim ve ekran boyutuna uyum sağladım.