// Every user-facing string on the marketing site, both languages.
// Rule: a copy change edits tr and en in the same commit.
// Section order on the home page (28 Sept 2026 redesign): nav, hero (with
// service cards), refs (logo strip), services, quotes, about, contact (form),
// footer. `downloads` feeds the Kaynaklar / Resources page; `research` holds the
// labels of the source list on that page; the sources live in src/data/research.ts.
// Decisions and rationale: Website Project/Website_Approved_Changes.md

export type Lang = "tr" | "en";

export const mailto = (lang: Lang, subject?: string) => {
  const s = subject ?? (lang === "tr" ? "HR AI: ekibimiz için" : "HR AI: for our team");
  return `mailto:hello@newhr.ai?subject=${encodeURIComponent(s)}`;
};

export const assessmentPath = (lang: Lang) =>
  `https://assessment.newhr.ai/${lang}/assessment`;

export const newsletterUrl = (lang: Lang) =>
  lang === "en"
    ? "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7464963171129262080"
    : "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7463181925256445953";

export const linkedin = "https://www.linkedin.com/in/tolgatemtek/";
export const linkedinPosts = "https://www.linkedin.com/in/tolgatemtek/recent-activity/all/";

// Reference strip: order is deliberate (Tolga, 28 Sept 2026). Names render as
// text until each logo file lands in public/logos/refs/<slug>.svg (or .png).
export const references = [
  { name: "Turkcell", slug: "turkcell" },
  { name: "ColendiBank", slug: "colendibank" },
  { name: "Rabobank", slug: "rabobank" },
  { name: "Polaris Broker", slug: "polaris-broker" },
  { name: "Lalive", slug: "lalive" },
  { name: "Hiwell", slug: "hiwell" },
  { name: "Finekra", slug: "finekra" },
  { name: "Inbound Marketing Agency", slug: "inbound-marketing-agency" },
];

export const strings = {
  tr: {
    site: {
      title: "New HR AI",
    },
    nav: {
      services: "Hizmetler",
      servicesMenu: [
        { label: "Kurumsal eğitim ve workshop", href: "#hizmetler" },
        { label: "HR AI proje danışmanlığı", href: "#hizmetler" },
        { label: "Konuşmalar", href: "#hizmetler" },
        { label: "Paydaş Yönetimi Atölyesi", href: "#hizmetler" },
      ],
      about: "Hakkımızda",
      resources: "Kaynaklar",
      cta: "İletişime geçin",
      menu: "Menü",
      close: "Kapat",
    },
    hero: {
      titleLine1: "Yapay zekâyı İK'nın gündeminden",
      titleLine2: "işine taşıyoruz.",
      lead: "İK ekiplerinin yapay zekâ yetkinliğini kendi süreçleri üzerinde geliştiriyoruz.",
      cta: "İletişime geçin →",
      cardsLabel: "Hizmetler",
      cards: [
        { num: "01", title: "Kurumsal eğitim ve workshop", img: "/images/illustrations/card-1-egitim-workshop.jpg" },
        { num: "02", title: "HR AI proje danışmanlığı", img: "/images/illustrations/card-2-proje-danismanligi.jpg" },
        { num: "03", title: "Konuşmalar", img: "/images/illustrations/card-3-konusmalar.jpg" },
      ],
    },
    refs: {
      eyebrow: "Referanslar",
      note: "Referanslarımız; HR as a Service, İK danışmanlığı ve eğitim çalışmalarımızı kapsamaktadır.",
      marqueeLabel: "Referans şeridi; üzerine gelince veya odaklanınca durur",
    },
    quotes: {
      heading: "Oturumlardan sonra ne diyorlar.",
      linkedin: "LinkedIn'de görüntüle →",
      items: [
        {
          sector: "Dijital banka",
          quote: "Araçları konuşmak için girdik ama asıl keşif, ekip olarak hepimizin AI'a farklı yerden baktığıydı.",
          name: "Ilgı Karakuş",
          role: "People & Culture Senior Manager, ColendiBank",
        },
        {
          sector: "Bankacılık",
          quote: "Bizi HR AI'ı konuşmaktan günlük operasyona kurmaya geçiren şey buydu.",
          name: "Okan Tunalı",
          role: "HR Head Turkey, Rabobank",
        },
        {
          sector: "Sigorta",
          quote: "İşe alım, onboarding, performans ve günlük operasyonda gerçek kullanım senaryoları. Teori değil, somut örnekler.",
          name: "Barış Özkaner",
          role: "Head of People & Culture, Polaris",
        },
      ],
    },
    services: {
      eyebrow: "Hizmetler",
      heading: "Üç çalışma biçimi.",
      intro:
        "İhtiyaca göre birini ya da birkaçını birlikte seçeriz. Kapsam, süre ve fiyat kısa bir görüşmede belirlenir.",
      items: [
        {
          num: "01",
          title: "Kurumsal eğitim ve workshop",
          quote: "Ekibimiz yapay zekâyı İK işlerinde kullanmak istiyor.",
          body: [
            "ChatGPT, Claude veya Gemini’yi kendi İK senaryolarınız üzerinden çalışırız. Anlatımı uygulamayla birleştirir, ekibinizin günlük işlerinde kullanabileceği örnekler geliştiririz.",
            "Kurumsal lisansınız varsa çalışmayı kullandığınız platforma göre şekillendiririz.",
          ],
        },
        {
          num: "02",
          title: "HR AI proje danışmanlığı",
          quote: "Hayata geçirmek istediğimiz bir HR AI projesi var.",
          body: [
            "Projenin kapsamını ve nasıl ilerleyeceğini birlikte netleştiririz. İlk denemeden uygulamaya kadar, İK ihtiyaçları ve projede yer alan ekiplerle çalışırız.",
          ],
        },
        {
          num: "03",
          title: "Konuşmalar",
          quote: "İK’da yapay zekâyı ekibimizin gündemine taşımak istiyoruz.",
          body: [
            "İK buluşmaları, liderlik toplantıları ve şirket içi etkinlikler için; yapay zekânın İK’daki kullanım alanlarını ve ortaya çıkardığı soruları somut örneklerle ele alırım.",
          ],
        },
      ],
      format: "Online veya yerinde · Türkçe veya İngilizce",
      cardCta: "İletişime geçin →",
      caption:
        "Fiyat ve süre, ekip büyüklüğü ve kapsama göre kısa bir görüşme sonrasında paylaşılır.",
    },
    about: {
      eyebrow: "Hakkımızda",
      heading: "Her gelişmeyi takip etmek zorunda değilsiniz.",
      body: [
        "İK’nın günlük temposunda yeni yapay zekâ araçlarını takip etmek, denemek ve hangisinin işinize yarayacağını anlamak için zaman bulmak kolay değil. Ben odağımı buna ayırıyorum. Araçları İK senaryolarında deniyor, öğrendiklerimi süzerek paylaşıyor ve işe yarayanları ekibinizin ihtiyaçlarına birlikte uyarlıyoruz.",
        "15 yılı aşkın İK kariyerimde TEB’de yetenek yönetimi, eğitim, İK projeleri ve İK iş ortaklığı alanlarında çalıştım. Bank of China Türkiye ve ColendiBank’ta İK fonksiyonlarını sıfırdan kurdum ve yönettim. Bugün bu deneyimle İK ekiplerinin yapay zekâyı kendi işlerinde kullanmasına destek oluyorum.",
      ],
      name: "Tolga Temtek",
      photoAlt: "Tolga Temtek bir eğitimde, ekranın önünde konuşurken",
      linkedinAria: "Tolga Temtek, LinkedIn profili",
      stat1: "15+ yıl",
      stat1Label: "İK deneyimi",
      stat2: "2 banka",
      stat2Label: "Sıfırdan kurulan ve yönetilen İK fonksiyonu",
      postsLink: "LinkedIn yazılarım ↗",
      newsletterLink: "Bültenim ↗",
    },
    contact: {
      eyebrow: "İletişim",
      heading: "İhtiyacınızı konuşalım.",
      lead: "Eğitim, danışmanlık veya konuşma talebinizi kısaca paylaşın.",
      name: "Ad soyad",
      email: "E-posta",
      org: "Kurum",
      message: "Mesajınız",
      messagePlaceholder: "Bir eğitim, HR AI projesi veya konuşma daveti hakkında yazabilirsiniz.",
      required: "zorunlu",
      submit: "Mesajı gönder",
      sending: "Gönderiliyor…",
      privacyPre: "Bilgileriniz yalnızca size dönüş yapmak için kullanılır. ",
      privacyLink: "Gizlilik",
      altPre: "Doğrudan e-posta da gönderebilirsiniz: ",
      success: "Mesajınız ulaştı. Teşekkürler.",
      invalid: "Lütfen zorunlu alanları doldurun ve e-posta adresinizi kontrol edin.",
      errorPre: "Mesajınız gönderilemedi. Lütfen tekrar deneyin veya ",
      errorPost: " adresine yazın.",
    },
    footer: {
      sloganAlt: "newhr.ai · İK liderlerinin yapay zekâ yetkinliğini geliştiriyoruz.",
      services: "Hizmetler",
      about: "Hakkımızda",
      resources: "Kaynaklar",
      privacy: "Gizlilik",
      copyright: "© 2026 New HR AI",
    },
    consent: {
      text: "Sitenin nasıl kullanıldığını anlamak için çerez kullanıyoruz.",
      privacy: "Gizlilik",
      accept: "Kabul et",
      decline: "Reddet",
    },
    downloads: {
      eyebrow: "KAYNAKLAR",
      title: "Yazdıklarımın kaynağı burada.",
      sub: "İK ve yapay zekâ üzerine yazarken dayandığım raporlar, araştırmalar, davalar ve mevzuat. Birincil kaynaklar ve onları yorumlayan analizler bir arada, her biri yayımlandığı sayfaya bağlı.",
      // Featured: links out to the assessment (no email gate).
      assessmentEyebrow: "DEĞERLENDİRME",
      assessmentTitle: "İK Yapay Zekâ Hazırlık Değerlendirmesi",
      assessmentDesc:
        "Kendinizin ve şirketinizin yapay zekâya ne kadar hazır olduğunu 5 dakikada görün. Sonuçla birlikte size özel bir yol haritası alın.",
      assessmentCta: "Değerlendirmeye Başla →",
      // Downloadable, email-gated resources.
      resourcesHeading: "İndirilebilir kaynaklar",
      // Slim dataset strip at the bottom of the page; the form opens on click.
      ownData: "Kendi verim",
      stripCta: "İndir →",
      formHeading: "E-posta adresiniz",
      nameLabel: "İsim (isteğe bağlı)",
      namePlaceholder: "Adınız",
      emailLabel: "İş e-postanız",
      emailPlaceholder: "siz@sirket.com",
      submit: "Dosyayı İndir →",
      invalidEmail: "Lütfen geçerli bir e-posta adresi girin.",
      successHeading: "İşte dosyanız.",
      successNote:
        "İndirme otomatik başlamalı. Başlamazsa aşağıdaki düğmeyi kullanın.",
      downloadCta: "Dosyayı indir →",
      privacyNotePre: "E-postanızı ",
      privacyNoteLink: "gizlilik politikamız",
      privacyNotePost: " doğrultusunda kullanırız. Dilediğiniz zaman çıkabilirsiniz.",
      // The resource list. To add a file later: drop it in public/downloads/,
      // add an entry here (and the EN one), redeploy. `file`/`fileName` are the
      // single source of truth per resource.
      resources: [
        {
          title: "Mayıs 2026 · 1426 HR İlanı Datası",
          desc: "Mayıs 2026'da toplanan 1.426 İK ilanının yapılandırılmış verisi.",
          meta: "Excel · ücretsiz",
          file: "/downloads/hr-ilan-datasi-mayis-2026.xlsx",
          fileName: "hr-ilan-datasi-mayis-2026.xlsx",
        },
      ],
    },
    research: {
      // Filter bar above the list.
      filterLabel: "Konuya göre filtrele",
      all: "Tümü",
      cta: "Kaynağa git →",
      post: "Bu kaynağı kullandığım yazı →",
      // Screen reader only, appended to the title / post links.
      newTab: "(yeni sekmede açılır)",
      newTabLinkedIn: "(LinkedIn, yeni sekmede açılır)",
      // Filter groups. Keys match `category` on each item; the HR question the
      // source answers. Group order lives in Research.astro.
      categories: {
        risk: "İşe alım ve çalışan kararlarında risk",
        mevzuat: "Mevzuat ve yönetişim",
        getiri: "AI'dan getiri ve iş etkisi",
        adaptasyon: "Ekip adaptasyonu ve yetkinlik",
        ornek: "İK'da kullanım örnekleri",
        kurs: "Ücretsiz kurslar",
      },
      // Document type, shown in the small line above each title. Keys match `type`.
      types: {
        rapor: "Rapor",
        arastirma: "Araştırma",
        dava: "Dava",
        mevzuat: "Mevzuat",
        egitim: "Eğitim",
        haber: "Haber",
        makale: "Makale",
        basin: "Basın bülteni",
        cerceve: "Çerçeve",
        politika: "Politika",
        kurs: "Kurs",
      },
    },
  },

  en: {
    site: {
      title: "New HR AI",
    },
    nav: {
      services: "Services",
      servicesMenu: [
        { label: "Corporate training and workshops", href: "#hizmetler" },
        { label: "HR AI project advisory", href: "#hizmetler" },
        { label: "Talks", href: "#hizmetler" },
        { label: "Stakeholder Management Workshop", href: "#hizmetler" },
      ],
      about: "About",
      resources: "Resources",
      cta: "Get in touch",
      menu: "Menu",
      close: "Close",
    },
    hero: {
      titleLine1: "We move AI from HR's agenda",
      titleLine2: "into HR's work.",
      lead: "We build HR teams' AI capability on their own processes.",
      cta: "Get in touch →",
      cardsLabel: "Services",
      cards: [
        { num: "01", title: "Corporate training and workshops", img: "/images/illustrations/card-1-egitim-workshop.jpg" },
        { num: "02", title: "HR AI project advisory", img: "/images/illustrations/card-2-proje-danismanligi.jpg" },
        { num: "03", title: "Talks", img: "/images/illustrations/card-3-konusmalar.jpg" },
      ],
    },
    refs: {
      eyebrow: "References",
      note: "Our references cover HR as a Service, HR consulting and training work.",
      marqueeLabel: "Reference strip; pauses on hover or focus",
    },
    quotes: {
      heading: "What HR leaders say after a session.",
      linkedin: "View on LinkedIn →",
      items: [
        {
          sector: "Digital banking",
          quote: "We came in to talk about tools. The real discovery was that every one of us approached AI from a different place.",
          name: "Ilgı Karakuş",
          role: "People & Culture Senior Manager, ColendiBank",
        },
        {
          sector: "Banking",
          quote: "This is what moved us from talking about HR AI to building it into daily operations.",
          name: "Okan Tunalı",
          role: "HR Head Turkey, Rabobank",
        },
        {
          sector: "Insurance",
          quote: "Real use cases across hiring, onboarding, performance and daily operations. Concrete examples, not theory.",
          name: "Barış Özkaner",
          role: "Head of People & Culture, Polaris",
        },
      ],
    },
    services: {
      eyebrow: "Services",
      heading: "Three ways to work together.",
      intro:
        "We choose one or more together, depending on what your team needs. Scope, duration and pricing are agreed on a short call.",
      items: [
        {
          num: "01",
          title: "Corporate training and workshops",
          quote: "Our team wants to use AI in its HR work.",
          body: [
            "We work with ChatGPT, Claude or Gemini on your own HR scenarios. We combine explanation with hands-on practice and build examples your team can use in its daily work.",
            "If you have an enterprise licence, we shape the work around the platform you already use.",
          ],
        },
        {
          num: "02",
          title: "HR AI project advisory",
          quote: "We have an HR AI project we want to bring to life.",
          body: [
            "We define the project's scope and the way forward together. From the first pilot to rollout, we work with HR's needs and the teams involved in the project.",
          ],
        },
        {
          num: "03",
          title: "Talks",
          quote: "We want to put AI in HR on our team's agenda.",
          body: [
            "For HR meetups, leadership meetings and internal events: I take on where AI is used in HR and the questions it raises, with concrete examples.",
          ],
        },
      ],
      format: "Online or on-site · Turkish or English",
      cardCta: "Get in touch →",
      caption:
        "Pricing and duration are shared after a short call, based on team size and scope.",
    },
    about: {
      eyebrow: "About",
      heading: "You don't have to follow every development.",
      body: [
        "In the daily pace of HR, it is hard to find the time to follow new AI tools, try them and work out which ones will actually help. I make that my focus. I test the tools on HR scenarios, distil what I learn, and together we adapt what works to your team's needs.",
        "In more than 15 years in HR, I worked at TEB in talent management, training, HR projects and HR business partnering. At Bank of China Türkiye and ColendiBank I built the HR function from scratch and led it. Today I use that experience to help HR teams use AI in their own work.",
      ],
      name: "Tolga Temtek",
      photoAlt: "Tolga Temtek speaking in front of a screen during a training session",
      linkedinAria: "Tolga Temtek on LinkedIn",
      stat1: "15+ years",
      stat1Label: "in HR",
      stat2: "2 banks",
      stat2Label: "HR functions built from scratch and led",
      postsLink: "My LinkedIn posts ↗",
      newsletterLink: "My newsletter ↗",
    },
    contact: {
      eyebrow: "Contact",
      heading: "Let's talk about what you need.",
      lead: "Tell us briefly about a training, advisory or talk request.",
      name: "Full name",
      email: "Email",
      org: "Company",
      message: "Your message",
      messagePlaceholder: "You can write about a training, an HR AI project or a speaking invitation.",
      required: "required",
      submit: "Send message",
      sending: "Sending…",
      privacyPre: "We use your details only to get back to you. ",
      privacyLink: "Privacy",
      altPre: "You can also email us directly: ",
      success: "Your message has arrived. Thank you.",
      invalid: "Please fill in the required fields and check your email address.",
      errorPre: "Your message could not be sent. Please try again or write to ",
      errorPost: ".",
    },
    footer: {
      sloganAlt: "newhr.ai",
      services: "Services",
      about: "About",
      resources: "Resources",
      privacy: "Privacy",
      copyright: "© 2026 New HR AI",
    },
    consent: {
      text: "We use cookies to understand how this site is used.",
      privacy: "Privacy",
      accept: "Accept",
      decline: "Decline",
    },
    downloads: {
      eyebrow: "RESOURCES",
      title: "The sources behind my posts.",
      sub: "The reports, research, court cases and regulation I rely on when writing about HR and AI. Primary sources and the analyses that interpret them, each linked to where it was published.",
      // Featured: links out to the assessment (no email gate).
      assessmentEyebrow: "ASSESSMENT",
      assessmentTitle: "HR AI Readiness Assessment",
      assessmentDesc:
        "See how ready you and your company are for AI in 5 minutes, and leave with a roadmap tailored to you.",
      assessmentCta: "Take the Assessment →",
      // Downloadable, email-gated resources.
      resourcesHeading: "Downloadable resources",
      // Slim dataset strip at the bottom of the page; the form opens on click.
      ownData: "My own data",
      stripCta: "Download →",
      formHeading: "Your email address",
      nameLabel: "Name (optional)",
      namePlaceholder: "Your name",
      emailLabel: "Work email",
      emailPlaceholder: "you@company.com",
      submit: "Download list →",
      invalidEmail: "Please enter a valid email address.",
      successHeading: "Here's your download.",
      successNote:
        "Your download should start automatically. If it doesn't, use the button below.",
      downloadCta: "Download the file →",
      privacyNotePre: "We use your email per our ",
      privacyNoteLink: "privacy policy",
      privacyNotePost: ". You can unsubscribe anytime.",
      // The resource list. To add a file later: drop it in public/downloads/,
      // add an entry here (and the TR one), redeploy. `file`/`fileName` are the
      // single source of truth per resource.
      resources: [
        {
          title: "May 2026 · 1,426 HR Job Postings Dataset",
          desc: "Structured data from 1,426 HR job postings collected in May 2026.",
          meta: "Excel · free",
          file: "/downloads/hr-ilan-datasi-mayis-2026.xlsx",
          fileName: "hr-ilan-datasi-mayis-2026.xlsx",
        },
      ],
    },
    research: {
      // Filter bar above the list.
      filterLabel: "Filter by topic",
      all: "All",
      cta: "Go to source →",
      post: "The post where I used this (in Turkish) →",
      // Screen reader only, appended to the title / post links.
      newTab: "(opens in a new tab)",
      newTabLinkedIn: "(LinkedIn, opens in a new tab)",
      // Filter groups. Keys match `category` on each item; the HR question the
      // source answers. Group order lives in Research.astro.
      categories: {
        risk: "Risk in hiring and employee decisions",
        mevzuat: "Regulation and governance",
        getiri: "Return on AI and business impact",
        adaptasyon: "Team adoption and capability",
        ornek: "HR use cases",
        kurs: "Free courses",
      },
      // Document type, shown in the small line above each title. Keys match `type`.
      types: {
        rapor: "Report",
        arastirma: "Research",
        dava: "Court case",
        mevzuat: "Regulation",
        egitim: "Training",
        haber: "News",
        makale: "Article",
        basin: "Press release",
        cerceve: "Framework",
        politika: "Policy",
        kurs: "Course",
      },
    },
  },
};
