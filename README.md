# ChatApp
## Proje Genel Bakış

Bu proje, React ve TypeScript kullanarak geliştirilmiş bir sohbet uygulamasıdır. Uygulama, kullanıcıların sohbet odalarına giriş yapmalarına, mesaj göndermelerine ve mesajlarını zenginleştirmelerine olanak tanır. Ayrıca, otomatik tamamlama ve görsel ekleme gibi özellikler içerir. Kullanıcılar `/select` komutunu kullanarak bir combo box'tan seçenekler seçebilir ve `/image [numara]` komutu ile rastgele görseller ekleyebilirler.

## Kurulum ve Çalıştırma Talimatları

Projenizi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1. **Depoyu Klonlama:**
   git clone https://github.com/mervetoprak/react-chat-application.git
   cd react-chat-application
2. **Yükleme:**
   npm install
3. **Uygulamayı Başlatma:**
  npm start
4. **Testleri Çalıştırma:**
npm test

**Önemli Tasarım Kararlarının ve Uzlaşmaların Açıklaması**
Bileşen Yapısı: Projede her bileşen, belirli bir işlevi yerine getirecek şekilde tasarlanmıştır (örn. Chat, MessageInput, ComboBox).

Otomatik Tamamlama: MessageInput bileşeninde, kullanıcının yazdığı metne göre öneriler sunmak için bir hook olan useAutoComplete kullanılmıştır. Bu, kullanıcı deneyimini iyileştirmek için etkili bir yöntemdir.

Görsel Ekleme: Mesajlarda /image [numara] komutunu işlemek için ChatMessage bileşeninde bir düzenleme yapılmıştır. Bu, mesajlara görsel eklemeyi basit ve kullanıcı dostu hale getirir.

**Kullanılan Üçüncü Taraf Kütüphaneler**
React: Kullanıcı arayüzünü oluşturmak için temel kütüphane.
TypeScript: JavaScript üzerinde daha sağlam ve hata öncesi geliştirme imkanı tanır.
Styled-components: CSS-in-JS çözümü olarak kullanılmıştır, bu da bileşenler için stil tanımlamalarını daha okunabilir hale getirir.
React Testing Library: Bileşenlerin testlerini yazmak için kullanılmıştır, bu sayede uygulamanın kullanıcı etkileşimlerini test etmek daha kolay hale gelir.

**Karşılaşılan Zorluklar ve Bunların Üstesinden Nasıl Geldiğim**
Otomatik Tamamlama Performansı: Önerilerin anında güncellenmesini sağlamak için performans optimizasyonları yapılmıştır. useAutoComplete hook'u, yazılan metne göre hızlı ve etkili bir şekilde öneri sunar.

Görsel Ekleme Komutu: /image [numara] komutunun doğru şekilde işlenmesini sağlamak için düzenli ifadeler kullanılmıştır. Bu, metin içindeki görsel komutlarını tespit etmek için etkili bir yöntemdir.

socket.io kullanarak real time chat application olması için çabalandı. Ancak proje gecikti ve socket.io ile ilgili bilgisayarda kurulum kısmında eksiklikler ve çakışmalar olduğu için tamamlanamadı.

**Daha Fazla Zamanım Olsaydı Gelecekteki İyileştirmeler İçin Fikirler**
Gelişmiş Arama: Otomatik tamamlama işlevini daha da geliştirerek, arama sonuçlarını daha akıllı hale getirebilirdi. Örneğin, tam anlamıyla bir arama motoru entegre edilebilir.

Kullanıcı Profili: Kullanıcıların profillerini oluşturup yönetebileceği bir özellik eklenebilirdi. Bu, sohbet deneyimini kişiselleştirmeye olanak tanır.

Real-Time Bildirimler: Sohbet uygulamasına gerçek zamanlı bildirimler eklemek, kullanıcı deneyimini artırabilirdi. Socket kullanarak mesajların anında gönderilmesini sağlayabilirdi.

Gelişmiş Görsel İşleme: Görsel yükleme ve önizleme işlevleri eklenerek kullanıcıların mesajlara görsel ekleme sürecini daha da iyileştirebilirsiniz.

Gelişmiş Testler: Uygulamanın farklı senaryolarını kapsayan daha kapsamlı testler yazılabilir. Bu, uygulamanın güvenilirliğini artırabilir.
