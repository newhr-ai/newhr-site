export type Lang = "tr" | "en";

// Route each locale to its own assessment (Turkish translated 2026-06-01).
export const assessmentPath = (lang: Lang) =>
  `https://assessment.newhr.ai/${lang === "tr" ? "tr" : "en"}/assessment`;

// LinkedIn newsletter follow (quiet tertiary link in the hero).
export const newsletterUrl =
  "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7463181925256445953";

export const strings = {
  tr: {
    site: {
      title: "New HR AI",
    },
    nav: {
      yaklasim: "Yaklaşım",
      hakkinda: "Hakkında",
      referanslar: "Ne diyorlar",
      iletisim: "İletişim",
      assessmentCta: "Değerlendirmeye Başla",
    },
    hero: {
      eyebrow: "UYGULANABİLİR AI YETKİNLİĞİ. İK'DAN İK'YA.",
      heroTitle:
        "İK ekibiniz hayata geçirdiği tek bir AI iş akışını söyleyemiyorsa, AI'ı uygulamıyorsunuz. İzliyorsunuz.",
      heroEmphasis: "İzliyorsunuz",
      subline:
        "Gerçek AI kullanım örnekleri, yarım günlük tek bir oturumda İK işinize yerleşir. İki bankada fonksiyonu yöneten bir İK liderinden, bir yazılım firmasından değil.",
      ctaAssessment: "Değerlendirmeye Başla →",
      ctaNewsletter: "Bültene Kaydol →",
      stat1Num: "15+",
      stat1Label: "Yıl İK Tecrübesi",
      stat2Num: "2",
      stat2Label: "Bankanın İK'sını Sıfırdan Kurdu",
      stat3Num: "13",
      stat3Label: "Organizasyon",
    },
    steps: {
      eyebrow: "NASIL ÇALIŞIR",
      heading: "HR AI Workbench. Fikirden uygulamaya üç adım.",
      intro: "Tek bir sistem. Ölç. Hedefle. Uygula.",
      step1Number: "01. ÖLÇ",
      step1Title: "Nerede olduğunuzu ölçeriz.",
      step1Body:
        "HR AI Maturity Audit ile ekibinizi süreç ve davranış düzeyinde ölçeriz. Konuşmayla değil, veriyle başlarız. İlk adımınız bu, ve aşağıdaki değerlendirmedir.",
      step1Link: "Ölç ile başlayın →",
      step2Number: "02. HEDEFLE",
      step2Title: "Doğru kesiti birlikte seçeriz.",
      step2Body:
        "AI'ın en yüksek getiriyi sağlayacağı iki üç İK alanını seçeriz. Uzun bir liste değil. Doğru kesit.",
      step3Number: "03. UYGULA",
      step3Title: "Sürece gömeriz.",
      step3Body:
        "Çalışan playbook'lar ve uygulamalı bir oturumla AI'ı işin içine koyarız. Slayt değil. Ekibinizin ertesi sabah kullanacağı prompt setleri ve iş akışları.",
    },
    offer: {
      eyebrow: "OTURUM",
      heading: "Workbench: İK ekibiniz için yarım günlük bir çalışma oturumu.",
      items: [
        {
          label: "Kimler için",
          text: "Bankacılık, fintech ve büyüme dönemindeki şirketlerin İK ekipleri.",
        },
        {
          label: "Oturumda ne olur",
          text: "Ölç, Hedefle ve Uygula adımlarını gerçek İK işiniz üzerinde, canlı ve tek bir oturumda uygulamalı yürütürüz.",
        },
        {
          label: "Ne ile çıkarsınız",
          text: "Ekibinizin sahiplendiği iki üç çalışan AI iş akışı, bir prompt seti ve net bir sonraki adım.",
        },
        {
          label: "Format",
          text: "Yarım gün, online veya yerinde, Türkçe veya İngilizce.",
        },
      ],
      caption:
        "Fiyat, ekip büyüklüğü ve kapsama göre kısa bir görüşme sonrası paylaşılır.",
      cta: "Ekibinize uygun mu, görelim →",
    },
    testimonials: {
      eyebrow: "NE DİYORLAR",
      heading: "İK liderleri oturumdan sonra ne diyor.",
      sector1: "DİJİTAL BANKA",
      quote1:
        "“Araçları konuşmaya gelmiştik. Asıl keşif, her birimizin AI'a farklı bir yerden baktığıydı.”",
      name1: "Ilgı Karakuş",
      role1: "People & Culture Senior Manager, Colendibank",
      sector2: "BANKACILIK",
      quote2:
        "“HR AI'ı işimize entegre edip gündelik operasyona taşımanın zamanı.”",
      name2: "Okan Tunalı",
      role2: "HR Head Turkey, Rabobank",
      sector3: "SİGORTA",
      quote3:
        "“İşe alımdan oryantasyona, performanstan gündelik operasyona, somut örnekleri ve gerçek kullanım senaryolarını birlikte çalıştık.”",
      name3: "Barış Özkaner",
      role3: "Head of People & Culture, Polaris",
    },
    assessment: {
      label: "HR AI FLUENCY DEĞERLENDİRMESİ · BETA",
      headingPart1: "Ölç adımıyla başlayın. Kendinizi ve şirketinizi",
      headingAccent: "değerlendirin.",
      body: "Bu, Workbench'in birinci adımıdır. İki katmanlı bir öz değerlendirme: beş dakikada hem kendi AI yetkinliğinizi hem kurumunuzun AI olgunluğunu ölçün.",
      list1: "Kişisel AI Fluency skorunuz",
      list2: "Şirketinizin AI olgunluk düzeyi",
      list3: "Size özel üç gelişim alanı",
      list4: "Şirketiniz için üç öncelikli aksiyon",
      cardLabel: "DEĞERLENDİRMEYE BAŞLA",
      cardText:
        "5 dakika sürer. Sonuçla birlikte kişisel ve kurumsal yol haritanızı alırsınız.",
      cardCta: "Değerlendirmeyi başlatın →",
      cardNote: "5 dakika sürer. Beta: erken kullanıcı geri bildirimi istiyoruz.",
    },
    about: {
      eyebrow: "HAKKINDA",
      heading: "NEW HR AI'ın arkasındaki kişi",
      body: "Tolga Temtek, Bank of China Türkiye ve Colendi Bank'ta İK fonksiyonunu sıfırdan kuran 15+ yıllık bir İK liderdir. NEW HR AI, bu pratiğin AI çağına taşınmış halidir.",
      link: "Tolga Temtek hakkında →",
    },
    faq: {
      eyebrow: "SIKÇA SORULAN SORULAR",
      heading: "Yazmadan önce merak edilenler.",
      items: [
        { q: "Oturum ne kadar sürer?", a: "Yarım gün." },
        {
          q: "Online mı, yerinde mi?",
          a: "Varsayılan online. Talebe göre yerinde.",
        },
        { q: "Türkçe mi, İngilizce mi?", a: "İkisi de." },
        {
          q: "Verimiz güvende mi?",
          a: "Kullanım örneklerinizi, verinizi kendi ortamınızdan çıkarmadan çalışırız.",
        },
        {
          q: "Nasıl başlarız?",
          a: "Değerlendirmeyi çözün, ardından kısa bir kapsam görüşmesi ayarlarız.",
        },
        {
          q: "Maliyeti nedir?",
          a: "Fiyat, ekip büyüklüğü ve kapsama göre kısa bir görüşme sonrası paylaşılır.",
        },
      ],
    },
    finalCta: {
      eyebrow: "SONRAKİ ADIM",
      heading: "Ekibinizin ilk AI hamlesini birlikte bulalım.",
      body: "Tolga ile kısa bir tanışma. Ücretsiz, taahhüt yok. İK ekibiniz için somut bir sonraki adımla ayrılırsınız.",
      cta: "Tolga ile görüşme ayarlayın →",
      trustLine: "Online · Türkçe veya İngilizce",
      mailSubject: "NEW HR AI — Tanışma görüşmesi",
    },
    footer: {
      tagline: "İK'DAN İK'YA.",
      pagesLabel: "SAYFALAR",
      home: "Ana Sayfa",
      workbench: "Workbench",
      assessment: "Değerlendirme",
      about: "Hakkında",
      contact: "İletişim",
      contactLabel: "İLETİŞİM",
      copyright: "© 2026 NEW HR AI",
      mantra: "İK'da uygulanabilir AI için.",
    },
  },

  en: {
    site: {
      title: "New HR AI",
    },
    nav: {
      yaklasim: "Approach",
      hakkinda: "About",
      referanslar: "What they say",
      iletisim: "Contact",
      assessmentCta: "Take Assessment",
    },
    hero: {
      eyebrow: "AI FOR HR. BY HR.",
      heroTitle:
        "If your HR team can't name one AI workflow they shipped, you're watching. Not adopting.",
      heroEmphasis: "watching",
      subline:
        "Real AI use cases, built into your HR work in one half-day session. From an HR leader who ran the function at two banks, not a software vendor.",
      ctaAssessment: "Take Assessment →",
      ctaNewsletter: "Join the Newsletter →",
      stat1Num: "15+",
      stat1Label: "Years in HR",
      stat2Num: "2",
      stat2Label: "Banks' HR Built From Scratch",
      stat3Num: "13",
      stat3Label: "Organizations I Worked For",
    },
    steps: {
      eyebrow: "HOW IT WORKS",
      heading: "The HR AI Workbench. Three steps from idea to application.",
      intro: "One named system. Measure. Target. Apply.",
      step1Number: "01. MEASURE",
      step1Title: "We measure where you are.",
      step1Body:
        "With the HR AI Maturity Audit we measure your team at the process and behaviour layer. We start with data, not conversation. This is your first step, and it is the assessment below.",
      step1Link: "Start with Measure →",
      step2Number: "02. TARGET",
      step2Title: "We pick the right cut together.",
      step2Body:
        "We choose the two or three HR areas where AI delivers the highest return. Not a full list. The right cut.",
      step3Number: "03. APPLY",
      step3Title: "We embed it in the process.",
      step3Body:
        "Through working playbooks and a hands-on session, we put AI into the work itself. Not slides. Usable prompt sets and workflows your team runs the next morning.",
    },
    offer: {
      eyebrow: "THE SESSION",
      heading: "The Workbench: a half-day working session for your HR team.",
      items: [
        {
          label: "Who it's for",
          text: "HR and People teams in banking, fintech and scaling companies.",
        },
        {
          label: "What happens",
          text: "We run Measure, Target and Apply live, on your real HR work, in one focused session.",
        },
        {
          label: "What you leave with",
          text: "Two or three working AI workflows your team owns, a prompt set, and a clear next step.",
        },
        {
          label: "Format",
          text: "Half a day, online or on-site, in Turkish or English.",
        },
      ],
      caption:
        "Pricing shared after a short scoping call, based on team size and scope.",
      cta: "See if your team is a fit →",
    },
    testimonials: {
      eyebrow: "WHAT THEY SAY",
      heading: "What HR leaders say after the session.",
      sector1: "DIGITAL BANKING",
      quote1:
        "“We came in to talk about tools. The real discovery was that each of us approached AI from a different place.”",
      name1: "Ilgı Karakuş",
      role1: "People & Culture Senior Manager, Colendibank",
      sector2: "BANKING",
      quote2:
        "“It's time to integrate HR AI into our work and bring it into daily operations.”",
      name2: "Okan Tunalı",
      role2: "HR Head Turkey, Rabobank",
      sector3: "INSURANCE",
      quote3:
        "“From hiring and onboarding to performance and daily operations, we walked through concrete examples and real use cases together.”",
      name3: "Barış Özkaner",
      role3: "Head of People & Culture, Polaris",
    },
    assessment: {
      label: "HR AI FLUENCY ASSESSMENT · BETA",
      headingPart1: "Start with Measure. Assess yourself and",
      headingAccent: "your company.",
      body: "This is step one of the Workbench. A two-layer self-assessment: measure your own AI fluency and your organisation's AI maturity in five minutes.",
      list1: "Your personal AI Fluency score",
      list2: "Your company's AI maturity level",
      list3: "3 development areas for you",
      list4: "3 priority actions for your company",
      cardLabel: "START THE ASSESSMENT",
      cardText:
        "Takes 5 minutes. You'll receive your personal and organisational roadmap with the results.",
      cardCta: "Start the assessment →",
      cardNote: "Takes 5 minutes. Beta: we want early user feedback.",
    },
    about: {
      eyebrow: "ABOUT",
      heading: "The person behind NEW HR AI",
      body: "Tolga Temtek is a 15+ year HR leader who built the HR function from scratch at Bank of China Türkiye and Colendi Bank. NEW HR AI is that practice, carried into the AI era.",
      link: "About Tolga Temtek →",
    },
    faq: {
      eyebrow: "FAQ",
      heading: "Before you reach out.",
      items: [
        { q: "How long is the session?", a: "Half a day." },
        {
          q: "Online or on-site?",
          a: "Online by default. On-site on request.",
        },
        { q: "Turkish or English?", a: "Both." },
        {
          q: "Is our data safe?",
          a: "We work on your use cases without taking your data out of your own environment.",
        },
        {
          q: "How do we start?",
          a: "Take the assessment, then we book a short scoping call.",
        },
        {
          q: "What does it cost?",
          a: "Pricing after a short scoping call, based on team size and scope.",
        },
      ],
    },
    finalCta: {
      eyebrow: "NEXT STEP",
      heading: "Let's find your team's first AI move.",
      body: "A short intro with Tolga. Free, no obligation. You leave with a concrete next step for your HR team.",
      cta: "Book a meeting with Tolga →",
      trustLine: "Online · Turkish or English",
      mailSubject: "NEW HR AI — Intro meeting",
    },
    footer: {
      tagline: "AI FOR HR. BY HR.",
      pagesLabel: "PAGES",
      home: "Home",
      workbench: "Workbench",
      assessment: "Assessment",
      about: "About",
      contact: "Contact",
      contactLabel: "CONTACT",
      copyright: "© 2026 NEW HR AI",
      mantra: "Built for practical AI adoption in HR.",
    },
  },
} as const;
