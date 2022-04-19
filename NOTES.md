movi api nin API KEY : 9a9ead36b4e5088ecd32fb37d4c904ea
# Firebase

Firebase bize kendimiz yazmaya gerek bırakmadan hazır bir backend sağlar.
register ve login gibi authentication işlemleri ve database olarak kullanılıyor genellikle

## Firebase Kullanımı

### REGISTER İŞLEMİ YAPMA

#### 1- firebase consol a gidip yeni bir proje oluştur

#### 2- dosya oluşturup config yapma

- src nin altına auth klasörünü oluştur
- auth içine firebase.js yi oluştur
- https://firebase.google.com/docs/auth/web/start linkine giderek "Kimlik Doğrulama SDK'sını ekleyin ve başlatın" bölmesi altındaki ilk code bloğunu kopyalayıp firbase.js ye yapıştır
- Kendi proje sayfasına git, sol üstteki ayarlar ikon butonuna ve sonrasında çıkan 'Project settings' e tıkla
- Açılan sayfanın altlarındaki code block unda `const firebaseConfig = {buradakiler kopyalanacak}` içindekileri kopyalayıp firebase.js deki `const firebaseConfig = {buraya yapıştırılacak}` içine yapıştır

#### 3- Yeni kullanıcı oluşturma

- firebase in altında `export const createUser = () => {}` yazarak bir func oluşturuyoruz. Bu funcun ister async ile ister then catch ile asynchoronus olması lazım ve **parametre olarak içine email, password, navigate alması lazım.** _ÖRNEĞE BAK_

- https://firebase.google.com/docs/auth/web/start sayfasında "Yeni kullanıcılar kaydolun"/"Sign up new users" bölmesinin altındaki code bloğunun altındakileri kopyalayıp yukarıdaki func un süslü parantezleri içine yapıştırıyoruz. Ama daha önce firebase.js de olan şeyleri (const auth = getAuth(app); gibi ) kopyalamıyoruz. Gerek yok zaten var ve hata verir. (Hoca kopyalanan yerdeki then catch yi async await e çevirip try catch bloğu içine aldı)

- buraya "createUserWithEmailAndPassword" funcunu yapıştırdığımız için import etmemiz lazım. Onun için bunu `import {} from "firebase/auth";` içine ekleyerek import ediyoruz

- Display name in gözükmesi için https://firebase.google.com/docs/auth/web/manage-users sayfasında "Update a user's profile" başlığı altındaki `updateProfile(auth.currentUser, {displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"})` i kopyalıyor ve `await updateProfile(auth.currentUser, {displayName: displayName})` şeklinde değiştirerek try block una ekliyoruz. (Google dan girecek ise buna gerek yok çünkü o otomatik olarak oradan alıyor)

- register işlemi başarılı olduğunda ana sayfamıza gidebilmek için try block unun sonuna (homepage in path ini nasıl belirlediysek) `navigate('/')` veya `navigate('/home')` func unu çağırıyoruz. navigate i kullanabilmek için useNavigat i import etmemize gerek yok çünkü onu parametre olarak verdik. ama home page de useNavigate i import etmeli ve `const navigate = useNavigete()` atamasını yapmalıyız. (navigate i try bloğunun içine koyduğmuz için bu durumda sadece register başarılı ise homepage e gidiriyoruz. hatalı olursa catch e düşecek ve navigate işlemini yapmayacak)

#### 4- Sign-in method u belirleme

- Email ve şifre yöntemiyle kayıt yapılmasına izin vermek için: firebase sitesindeki bu projenin sayfasına gidip soldaki _Build_ altında _Authentication_ tıklıyoruz. Çıkan ekranda _Sign-in method_ a tıklıyoruz ve _Email/Password_ u new provider olarak ekliyoruz ve sonrasında _Email/Password_ u _enable_ ediyoruz

- Aynı yerden *Google* ı da sign in method u olarak ekleyip enable ediyoruz

#### 5- Oluşturulan func u register sayfasında kullanma

- Oluşturup export yaptığımız `createUser` func u kullanmak için register.js ye import ediyoruz

- Kullanıcı oluşturma formu submit edildiğinde çalışacak olun `handleSubmit` func unun içine `createUser(email, password, displayName navigate)` funcunu yapıştırıyoruz

- Artık register yapabiliriz. Register yaptğımızda kullanıcı mail i, şifresi, adı ve soyadı kayıtlı oluyar ve submit olduğunda doğrudan homepage e gidiyor

### LOGIN İŞLEMİ YAPMA 

#### 1- Login func u oluşturma

- firebase.js nin içine `export const signIn = () => {}` yazıp login func u oluşturuyoruz.

#### 2- Login func unun içini doldurma

- https://firebase.google.com/docs/auth/web/start sayfasında "Mevcut kullanıcılarda oturum açın"/"Sign in existing users" bölmesinin altındaki code bloğunun altındakileri kopyalayıp yukarıdaki func un süslü parantezleri içine yapıştırıyoruz.Ama daha önce firebase.js de olan şeyleri (const auth = getAuth(app); gibi ) kopyalamıyoruz. Gerek yok zaten var ve hata verir. (Hoca kopyalanan yerdeki then catch yi async await e çevirip try catch bloğu içine aldı)

- buraya "signInWithEmailAndPassword" funcunu yapıştırdığımız için import etmemiz lazım. Onun için bunu `import {} from "firebase/auth";` içine ekleyerek import ediyoruz

- register işlemi başarılı olduğunda ana sayfamıza gidebilmek için try block unun sonuna (homepage in path ini nasıl belirlediysek) `navigate('/')` veya `navigate('/home')` func unu çağırıyoruz. navigate i kullanabilmek için useNavigat i import etmemize gerek yok çünkü onu parametre olarak verdik. ama home page de useNavigate i import etmeli ve `const navigate = useNavigete()` atamasını yapmalıyız. (navigate i try bloğunun içine koyduğmuz için bu durumda sadece register başarılı ise homepage e gidiriyoruz. hatalı olursa catch e düşecek ve navigate işlemini yapmayacak)

#### 3- Oluşturulan func u login sayfasında kullanma

- Oluşturup export yaptığımız `signIn` func u kullanmak için login.js ye import ediyoruz

- Kullanıcı login formu submit edildiğinde çalışacak olun `handleSubmit` func unun içine `signIn(email, password, navigate)` funcunu yapıştırıyoruz

- Artık login yapabiliriz. Login submit olduğunda doğrudan homepage e gidiyor

### LOGOUT İŞLEMİ YAPMA

#### 1- Logout func u oluşturma

- firebase.js nin içine `export const logOut = () => {}` yazıp logout func u oluşturuyoruz.

#### 2- Login func unun içini doldurma
- `import {} from "firebase/auth";` içine `signOut` ekleyerek import ediyoruz
- tanımladığımız `logOut`func unun süslü parantezleri içine (yukarıda import ettiğimiz) `signOut(auth)`yazıyoruz 

#### 3- Oluşturulan logOut() func unu navbar da kullanma

- `logOut`funcunu Navbar component ına import edip `onClick={logOut}` şeklinde *Logout* butonunun onClick ine veriyoruz 

### USER OBSERVER TANIMLAMA

Amacı: User hala signin mi onu kontrol ediyor. User login olduktan sonra bunu userObserver dan aldığımız bir user ı içine alıp context e tutacağız ve kullanıcıyı takip edeceğiz. logout func u çalıştığında user ımız silinecek. user varsa navbar da *Kullanıcı adı* ve *Logout* butonu gözükecek, yoksa *Login* ve *Register* butonları gözükecek.

#### 1-  func oluşturup içini doldurma 
- firebase.js nin içine `export const userObserver = () => {}` yazıp func u oluşturup import ediyoruz ve içine context te oluşturacağımız *setCurrentUser* statenini parametre olarak atıyoruz

- https://firebase.google.com/docs/auth/web/start  sayfasında "Set an authentication state observer and get user data" başlığı altındaki code block undakileri kopyalayıp func un süslü parantezleri içine yapıştırıyoruz. Ama daha önceden alınan şeyleri koplayalamiyoruz. ve burada olan `onAuthStateChanged` funcunu yukarıdan import ediyoruz 

- `onAuthStateChanged` func u bize otomatik bir user döndürüyor. biz de bunun içinin if else kurup (bunlar zaten copy past te var) if in içine user varsa deyip (yani `if(user)` user ı  *setCurrentUser* state inin  içine `setCurrentUser(user)` koyarak kullanıcımızı atıyoruz. else block unun içine ise (yani user yoksa) `setCurrentUser(false)` diyerek kullanıcımızın olmamasını false olarak atıyoruz. 
#### 2-  func un context te çağırılması 

- Daha sonra bu ``userObserver`` func u context i oluşturan compenent içinde çağırılıyor ve içine kullanıcı stateni düzenleyen ``setCurrentUser`` state i ``uuseEffect(() => { userObserver(setCurrentUser)}, [])`` şeklinde atanıyor 
- Böyle yaparak firebase den elde edilen user context te oluşturulan ``currentUser`` state ine atandı

.... son kısım eksik kaldı

# .env 

### Kullanma Sebebi

Gizli kalması gereken codları saklamak için 

Biz uygulamalarımızı github gibi herkesin ulaşabileceği public yerlere koyuyoruz. Onda bulunan firebase veya diğer başka yerlerden aldığımız API KEY ler herkesin ulaşamaması gereken bilgiler

Bu bilgileri .env içine atıyoruz. Bu bilgilere ulaşacak yerler oralardan alıyor. Ama .env dosyası gitignore içinde default yeraldığı için herkes göremiyor

.env içindeki keylerimize `process.env `ile ulaşıyoruz

ÖRNEK: 
- public alandaki dosyada api key imiz `apiKey: "AIzaSyDDnANQcU3-0NQL3rryYz2neEy6U1T8vCw"` şeklinde yer alırsa güvenlik açığı olur. 
- Onun yerine bu api key i .env içine `REACT_APP_apiKey=AIzaSyDDnANQcU3-0NQL3rryYz2neEy6U1T8vCw` şeklinde kaydediyoruz
- public dosyaya ise `process.env `ile `apiKey: process.env.REACT_APP_apiKey` şeklinde çağırıyoruz 

- `REACT_APP_apiKey` isimlendirmesinde de `REACT_APP_` i aynen yazmak zorundayken `apikey` kısmını biz belirliyoruz

# React Toastify

## Ne işe Yarar

alert in kazık gibi uyarılarının yerine configure edebileceğimiz güzel görünümlü uyarılar sağlıyor

## Kullanımı 

### 1- Yüklenmesi 

``yarn add react-toastify``

### 2- index.js import etme

 index.js ye ``import "react-toastify/dist/ReactToastify.css";`` şeklinde import et

### 3- <ToastContainer /> ı kullanma 

dom ağacının en tepelerinde bir yerde en mantıklısı App.js de  <ToastContainer /> ı kullanmak lazım

App.js nin üstünde ``import { ToastContainer } from "react-toastify";`` şeklinde import et

App.js companent inin içine <ToastContainer /> ı yapıştır

### 4- toastify dosyası oluşturma 

src>helpers in altında ``ToastNotify.js`` dosyası oluşturup içini bu örnekteki funclarla veya react toastify ın sayfasından alıp modify edeceğin funclarla doldur

### 5- funcları import edip kullanma

funcları kullanacağın yere import edip kullan



# Antr parantez Notlar

-- Bootstrap ı paket olarak yüklediği için index.js nin üst kısmına `import "bootstrap/dist/css/bootstrap.css";` şeklinde bootstrap ı import ediyor
-- "Context kullanıyorsak useState i kullanmamıza gerek yok. Bütün stateleri onun içine atarız" **mantığı yanlış**. Çünkü context teki state değişince bütün app render eder. Sadece global stateleri onda tutuyoruz ve *olabildiğince stateleri local de tanımlamaya çalşmalıyız*
-- <Link to='/home'> ve `navigate('/home')` aynı işlemi yapıyorlar ve hangi url ye gitmemiz gerektiğini söylüyor. Ama <Link> kendisi bir div iken `navigate()` bir button veya div in içine yazılıyor
-- <Route path="/" element={<Main />} /> ise bir url ye tıkladığımızda _hangi sayfanın render edileceğini söylüyor_
--
