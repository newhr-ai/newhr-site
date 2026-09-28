// Every user-facing string on the marketing site, both languages.
// Rule: a copy change edits tr and en in the same commit.
// Section order on the home page: nav, hero, refs, quotes, services, approach,
// assessment, about, faq, contact, footer. `downloads` feeds the Kaynak page.

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

// Relationship labels are deliberate: training client, session participants
// (named testimonials), HR-partner clients (TT & HR Partners), former employers
// (About only). No endorsement language anywhere.
export const strings = {
  tr: {
    site: {
      title: "New HR AI",
    },
    nav: {
      services: "Hizmetler",
      approach: "Yaklaşım",
      refs: "Referanslar",
      about: "Hakkında",
      resources: "Kaynak",
      contact: "İletişim",
      cta: "Bize yazın",
    },
    hero: {
      eyebrow: "Kurumsal İK ekipleri için",
      title: "Yapay zekayı İK ekibinizin günlük işine taşıyoruz.",
      emphasis: "günlük işine",
      lead:
        "Kurumsal İK ekipleri için eğitim, workshop ve bire bir danışmanlık. Ekibinizin kendi süreçleri ve kendi vakaları üzerinde, Türkçe veya İngilizce. Karşınızda bir yazılım satıcısı değil, 15 yılı İK'nın içinde geçmiş bir uygulayıcı var.",
      cta: "Bize yazın →",
      secondary: "Önce 5 dakikalık ücretsiz değerlendirmeyi yapın →",
      note: "hello@newhr.ai · Türkçe ve İngilizce",
    },
    refs: {
      eyebrow: "Referanslar",
      heading: "Birlikte çalıştığımız ekipler.",
      lead: "Turkcell Organizasyonel Gelişim ekibi için eğitim programı, 2026.",
      leadNote: "Organizasyonel Gelişim ekibi için eğitim programı, 2026.",
      trainedLabel: "Eğitim verdiğimiz kurum",
      trained: ["Turkcell"],
      sessionsLabel: "Oturumlarımıza katılan İK liderleri",
      sessions: ["ColendiBank", "Rabobank Türkiye", "Polaris"],
      partnerLabel: "İK ortağı olarak çalıştığımız şirketler",
      partnerNote: "TT & HR Partners üzerinden",
      partners: ["Hiwell", "Finekra"],
      quotesLink: "Ne dediklerini okuyun ↓",
    },
    quotes: {
      eyebrow: "Oturum sonrası",
      heading: "Oturumlardan sonra ne diyorlar.",
      linkedin: "LinkedIn'de görüntüle →",
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
      difference:
        "Eğitim, ekibin tamamına ortak bir zemin kazandırır. Workshop, küçük bir ekiple tek bir süreç üzerinde çalışır. Danışmanlık, bu işi yöneten liderle birebir ilerler.",
      whoLabel: "Kimin için",
      whatLabel: "Ne olur",
      leaveLabel: "Çalışma sonunda",
      formatLabel: "Format",
      items: [
        {
          num: "01",
          title: "Kurumsal eğitim",
          who: "Yapay zekayı ekip genelinde aynı seviyeye getirmek isteyen İK yönetimi.",
          what: "İK ekibinizin tamamı için tasarlanan yapay zeka eğitimi. Ortak bir dil, aynı araçlar, işe alımdan performansa kendi süreçlerinizden örnekler. Ekip büyüklüğüne göre gruplar halinde.",
          leave: "Ekipte ortak bir dil ve araç seti; her katılımcının kendi işinde denediği örnekler.",
          subject: "Kurumsal eğitim: ekibimiz için",
        },
        {
          num: "02",
          title: "HR AI Workshop",
          who: "Belirli bir İK sürecini hemen ele almak isteyen küçük ekipler.",
          what: "Tek bir uygulamalı çalışma oturumu. Masaya gerçek bir İK işi koyar, Ölç, Hedefle, Uygula adımlarıyla üzerinde birlikte çalışırız. Konuşmak değil, yapmak.",
          leave: "Kendi sürecinizde denenmiş iş akışı taslakları, bir prompt seti ve birlikte belirlenmiş bir sonraki adım.",
          subject: "HR AI Workshop: ekibimiz için",
        },
        {
          num: "03",
          title: "Bire bir danışmanlık",
          who: "AI dönüşümünü yöneten İK direktörü, İKBP lideri, L&D veya OD yöneticisi.",
          what: "Birebir çalışma: öncelikleri netleştirmek, ekibe ne götüreceğinize karar vermek, ilk adımları planlamak. Kapsam ve ritim ihtiyaca göre.",
          leave: "Kendi kurumunuz için netleşmiş öncelikler ve sıradaki adımın tarifi.",
          subject: "Bire bir danışmanlık",
        },
      ],
      format: "Online veya yerinde · Türkçe veya İngilizce",
      cardCta: "Bunun için yazın →",
      caption:
        "Fiyat ve süre, ekip büyüklüğü ve kapsama göre kısa bir görüşme sonrasında paylaşılır.",
    },
    approach: {
      eyebrow: "Yaklaşım",
      heading: "Ölç, hedefle, uygula.",
      intro: "Eğitimde de workshopta da aynı yöntem. Kendi süreçlerinizde, sırayla.",
      steps: [
        {
          num: "01",
          title: "Ölç",
          body: "Nerede olduğunuzdan başlarız. Ekibin yapay zekayı bugün nasıl kullandığını süreç ve davranış düzeyinde okuruz; konuşmadan önce veriye bakarız.",
        },
        {
          num: "02",
          title: "Hedefle",
          body: "Doğru kesiti birlikte seçeriz: İK süreçlerinizden yapay zekanın en çok işe yarayacağı iki üç alan. Tam liste değil, doğru kesit.",
        },
        {
          num: "03",
          title: "Uygula",
          body: "Sürecin içine oturturuz. Ekibinizin ertesi gün deneyebileceği prompt setleri ve iş akışı taslakları; slayt değil.",
        },
      ],
    },
    assessment: {
      eyebrow: "Ücretsiz değerlendirme",
      heading: "Nerede durduğunuzu 5 dakikada görün.",
      body: "İki katmanlı bir öz değerlendirme: bir İK profesyoneli olarak kendi hazırlığınız ve organizasyonunuzun durumu. Sonuçla birlikte kişisel ve kurumsal bir yol haritası alırsınız. Beta; geri bildiriminize ihtiyacımız var.",
      cta: "Değerlendirmeye başla →",
      note: "8 soru · 5 dakika · ücretsiz",
    },
    about: {
      eyebrow: "Hakkında",
      heading: "İK'nın içinden geliyorum. Yapay zekayı da içeriden getiriyorum.",
      body:
        "15 yıl İK'nın içindeydim: bankacılık, fintech ve startup ortamlarında. İki bankada İK fonksiyonunu sıfırdan kurdum. ICF eğitimli yönetici koçuyum. New HR AI'da yaptığım iş, bu tecrübeyi İK ekiplerinin yapay zekayı kendi işlerinde kullanmasına çevirmek: uygulamalı, gerçek vakalar üzerinde, teori değil.",
      trust: "Eğitimi veren, sizinle görüşen ve mesajınızı yanıtlayan aynı kişi.",
      careerLabel: "Kariyer",
      career: [
        { org: "TEB", role: "10.000 kişilik organizasyon, İK iş ortağı" },
        { org: "Bank of China Türkiye", role: "Türkiye'ye girişte sıfırdan kurulan İK, İK Başkanı" },
        { org: "ColendiBank", role: "Lisanslama ve lansman döneminde kurulan İK, People & Culture Direktörü" },
      ],
      careerNote: "Görev alınan kurumlar; müşteri ilişkisi değildir.",
      tags: ["İK için uygulamalı yapay zeka", "Eğitim ve workshop", "ICF eğitimli koç"],
      captionSub: "Kurucu, New HR AI · Paris",
      link: "LinkedIn'de Tolga Temtek →",
      photoAlt: "Tolga Temtek",
      stat1: "15+",
      stat1Label: "yıl İK'nın içinde",
      stat2: "2",
      stat2Label: "sıfırdan kurulan banka İK'sı",
      stat3: "TR · EN",
      stat3Label: "iki dilde eğitim ve danışmanlık",
    },
    faq: {
      eyebrow: "Sıkça sorulanlar",
      heading: "Yazmadan önce merak edilenler.",
      items: [
        {
          q: "Eğitim mi, workshop mu?",
          a: "Ekibin tamamına ortak bir zemin kazandırmak istiyorsanız eğitim. Belirli bir süreci küçük bir ekiple hemen ele almak istiyorsanız workshop. Emin değilseniz yazın; birlikte karar veririz.",
        },
        {
          q: "Ne kadar sürüyor?",
          a: "Ekibe, formata ve kapsama göre birlikte belirleriz. Workshop tek bir uygulamalı oturumdur; eğitim ekip büyüklüğüne göre gruplar halinde planlanır.",
        },
        {
          q: "Online mı, yerinde mi?",
          a: "İkisi de mümkün. Oturumlar genelde online yapılır; yerinde de mümkün.",
        },
        { q: "Hangi dilde?", a: "Türkçe veya İngilizce." },
        {
          q: "Verilerimiz güvende mi?",
          a: "Kendi gerçek işiniz üzerinde çalışırız; veri paylaşımı ve gizlilik kurallarını baştan birlikte belirleriz.",
        },
        {
          q: "Ücret ne kadar?",
          a: "Kısa ve ücretsiz bir kapsam görüşmesinin ardından, ekip büyüklüğü ve kapsama göre paylaşılır.",
        },
      ],
    },
    contact: {
      eyebrow: "Sonraki adım",
      heading: "Ekibinizi ve ihtiyacınızı yazın.",
      body: "hello@newhr.ai adresine kısa bir e-posta yeterli. Mesajınızı kendim okur, ekibinize uygun bir sonraki adım önerisiyle dönerim; gerekirse kısa bir kapsam görüşmesi ayarlarız.",
      helpsLabel: "Yazmanız işi hızlandırır",
      helps: [
        "Ekibiniz kaç kişi, hangi roller",
        "Yapay zekayı bugün nasıl kullanıyorsunuz",
        "Ne bekliyorsunuz",
        "Tercih ettiğiniz dil ve format",
      ],
      cta: "hello@newhr.ai'ye yazın →",
      secondary: "Önce değerlendirmeyi yapın →",
      trust: "Her mesajı kendim okur, kendim yanıtlarım.",
      langLine: "Hizmetler Türkçe ve İngilizce.",
      newsletter: "HR AI Radar: İK profesyonelleri için iki haftada bir yapay zeka bülteni, LinkedIn'de.",
      newsletterCta: "Bültene kaydol →",
    },
    footer: {
      tagline: "İK'dan İK'ya.",
      pages: "Sayfalar",
      home: "Ana sayfa",
      resources: "Kaynak",
      privacy: "Gizlilik",
      contactLabel: "İletişim",
      copyright: "© 2026 New HR AI",
      mantra: "İK'da uygulanabilir yapay zeka için.",
    },
    consent: {
      text: "Sitenin nasıl kullanıldığını anlamak için çerez kullanıyoruz.",
      privacy: "Gizlilik",
      accept: "Kabul et",
      decline: "Reddet",
    },
    downloads: {
      eyebrow: "KAYNAK",
      title: "Kaynak",
      sub: "İK profesyonelleri için ücretsiz yapay zeka kaynakları.",
      // Featured: links out to the assessment (no email gate).
      assessmentEyebrow: "DEĞERLENDİRME",
      assessmentTitle: "İK Yapay Zeka Hazırlık Değerlendirmesi",
      assessmentDesc:
        "Kendinizin ve şirketinizin yapay zekaya ne kadar hazır olduğunu 5 dakikada görün. Sonuçla birlikte size özel bir yol haritası alın.",
      assessmentCta: "Değerlendirmeye Başla →",
      // Downloadable, email-gated resources.
      resourcesHeading: "İndirilebilir kaynaklar",
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
  },

  en: {
    site: {
      title: "New HR AI",
    },
    nav: {
      services: "Services",
      approach: "Approach",
      refs: "References",
      about: "About",
      resources: "Resources",
      contact: "Contact",
      cta: "Write to us",
    },
    hero: {
      eyebrow: "For corporate HR teams",
      title: "We bring AI into your HR team's everyday work.",
      emphasis: "everyday work",
      lead:
        "Training, workshops and one-to-one advisory for corporate HR teams. Built around your own processes and cases, in Turkish or English, and led by someone who spent 15 years working inside HR, not selling software.",
      cta: "Write to us →",
      secondary: "Or take the free 5-minute assessment first →",
      note: "hello@newhr.ai · Turkish and English",
    },
    refs: {
      eyebrow: "References",
      heading: "Teams we have worked with.",
      lead: "Training programme for Turkcell's Organisational Development team, 2026.",
      leadNote: "Training programme for the Organisational Development team, 2026.",
      trainedLabel: "Training client",
      trained: ["Turkcell"],
      sessionsLabel: "HR leaders who joined our sessions",
      sessions: ["ColendiBank", "Rabobank Türkiye", "Polaris"],
      partnerLabel: "Companies served as HR partner",
      partnerNote: "through TT & HR Partners",
      partners: ["Hiwell", "Finekra"],
      quotesLink: "Read what they say ↓",
    },
    quotes: {
      eyebrow: "After the session",
      heading: "What HR leaders say after a session.",
      linkedin: "View on LinkedIn →",
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
      difference:
        "Training gives the whole team a shared foundation. A workshop takes one process and works on it with a small team. Advisory is one-to-one with the leader driving the change.",
      whoLabel: "Who it is for",
      whatLabel: "What happens",
      leaveLabel: "At the end of the work",
      formatLabel: "Format",
      items: [
        {
          num: "01",
          title: "Corporate training",
          who: "HR leaders who want the whole team on the same footing with AI.",
          what: "AI training designed for your whole HR team: a shared vocabulary, the same tools, and examples drawn from your own processes, from hiring to performance reviews. Delivered in groups sized to your team.",
          leave: "A shared language and toolset across the team, and examples each participant has tried on their own work.",
          subject: "Corporate training: for our team",
        },
        {
          num: "02",
          title: "HR AI Workshop",
          who: "Small teams that want to get to grips with one specific HR process right away.",
          what: "One hands-on working session. We put a real piece of HR work on the table and work through it together using Measure, Target, Apply. Doing, not talking.",
          leave: "Draft workflows tested on your own process, a prompt set and a next step agreed together.",
          subject: "HR AI Workshop: for our team",
        },
        {
          num: "03",
          title: "One-to-one advisory",
          who: "The HR director, HRBP lead, or L&D or OD manager driving the AI shift.",
          what: "Working directly with you: clarifying priorities, deciding what to bring to the team, planning the first steps. Scope and rhythm depend on what you need.",
          leave: "Clear priorities for your own organisation and a defined next step.",
          subject: "One-to-one advisory",
        },
      ],
      format: "Online or on-site · Turkish or English",
      cardCta: "Ask about this →",
      caption:
        "Pricing and duration are shared after a short call, based on team size and scope.",
    },
    approach: {
      eyebrow: "Approach",
      heading: "Measure, target, apply.",
      intro: "The same method in training and in workshops, applied to your own processes, step by step.",
      steps: [
        {
          num: "01",
          title: "Measure",
          body: "We start from where you are: how the team actually uses AI today, in its processes and day-to-day habits. Evidence before opinions.",
        },
        {
          num: "02",
          title: "Target",
          body: "We choose the focus together: the two or three areas of your HR work where AI is most likely to pay off. Not the whole list, the right few.",
        },
        {
          num: "03",
          title: "Apply",
          body: "We build it into the process: prompt sets and draft workflows your team can try the next day. Not slides.",
        },
      ],
    },
    assessment: {
      eyebrow: "Free assessment",
      heading: "See where you stand in 5 minutes.",
      body: "A two-layer self-assessment: your own readiness as an HR professional and where your organisation stands. You get a personal and an organisational roadmap with the results. Beta; we want your feedback.",
      cta: "Start the assessment →",
      note: "8 questions · 5 minutes · free",
    },
    about: {
      eyebrow: "About",
      heading: "I come from inside HR. I bring AI in the same way.",
      body:
        "I spent 15 years inside HR, in banking, fintech and startups, and built the HR function of two banks from zero. I am an ICF-trained executive coach. At New HR AI, my work is turning that experience into HR teams that use AI in their own jobs: hands-on, on real cases, not theory.",
      trust: "The person who runs the training, talks to you and answers your email is the same person.",
      careerLabel: "Career",
      career: [
        { org: "TEB", role: "10,000-person organisation, HR business partner" },
        { org: "Bank of China Türkiye", role: "HR built from scratch for the bank's entry into Türkiye, Head of HR" },
        { org: "ColendiBank", role: "HR built during licensing and launch, People & Culture Director" },
      ],
      careerNote: "Former employers, not client relationships.",
      tags: ["Applied AI for HR", "Training and workshops", "ICF-trained coach"],
      captionSub: "Founder, New HR AI · Paris",
      link: "Tolga Temtek on LinkedIn →",
      photoAlt: "Tolga Temtek",
      stat1: "15+",
      stat1Label: "years inside HR",
      stat2: "2",
      stat2Label: "bank HR functions built from zero",
      stat3: "TR · EN",
      stat3Label: "training and advisory in two languages",
    },
    faq: {
      eyebrow: "Before you write",
      heading: "Questions people ask first.",
      items: [
        {
          q: "Training or workshop?",
          a: "Training if you want to give the whole team a shared foundation. A workshop if you want to tackle one specific process now, with a small team. Not sure? Write to us and we will work it out together.",
        },
        {
          q: "How long does it take?",
          a: "We agree that together, based on the team, the format and the scope. A workshop is a single hands-on session; training is planned in groups sized to your team.",
        },
        {
          q: "Online or on-site?",
          a: "Both work. Sessions usually run online; on-site is also possible.",
        },
        { q: "Which language?", a: "Turkish or English." },
        {
          q: "Is our data safe?",
          a: "We work on your own real material and agree the data-sharing and confidentiality rules together up front.",
        },
        {
          q: "What does it cost?",
          a: "Shared after a short, free scoping call, based on team size and scope.",
        },
      ],
    },
    contact: {
      eyebrow: "Next step",
      heading: "Tell me about your team and what you need.",
      body: "A short email to hello@newhr.ai is all it takes. I read every message myself and reply with a next step that fits your team. If it helps, we set up a short scoping call.",
      helpsLabel: "It helps to include",
      helps: [
        "How many people, which roles",
        "How your team uses AI today",
        "What you expect",
        "Your preferred language and format",
      ],
      cta: "Write to hello@newhr.ai →",
      secondary: "Take the assessment first →",
      trust: "I read and answer every message myself.",
      langLine: "Services in Turkish and English.",
      newsletter: "HR AI Radar: a biweekly AI newsletter for HR professionals, on LinkedIn.",
      newsletterCta: "Subscribe →",
    },
    footer: {
      tagline: "AI for HR. By HR.",
      pages: "Pages",
      home: "Home",
      resources: "Resources",
      privacy: "Privacy",
      contactLabel: "Contact",
      copyright: "© 2026 New HR AI",
      mantra: "Built for practical AI adoption in HR.",
    },
    consent: {
      text: "We use cookies to understand how this site is used.",
      privacy: "Privacy",
      accept: "Accept",
      decline: "Decline",
    },
    downloads: {
      eyebrow: "RESOURCES",
      title: "Resources",
      sub: "Free AI resources for HR professionals.",
      // Featured: links out to the assessment (no email gate).
      assessmentEyebrow: "ASSESSMENT",
      assessmentTitle: "HR AI Readiness Assessment",
      assessmentDesc:
        "See how ready you and your company are for AI in 5 minutes, and leave with a roadmap tailored to you.",
      assessmentCta: "Take the Assessment →",
      // Downloadable, email-gated resources.
      resourcesHeading: "Downloadable resources",
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
  },
};
