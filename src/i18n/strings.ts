export type Lang = "tr" | "en";

// Turkish assessment not translated yet — both locales point to the English assessment for now.
export const assessmentPath = (_lang: Lang) =>
  "https://assessment.newhr.ai/en/assessment";

export const strings = {
  tr: {
    site: {
      title: "New HR AI",
    },
    nav: {
      yaklasim: "Yaklaşım",
      hakkinda: "Hakkında",
      referanslar: "Referanslar",
      iletisim: "İletişim",
      assessmentCta: "Değerlendirmeye Başla",
    },
    hero: {
      eyebrow: "AI FOR HR. BY HR.",
      heroTitle: "İK ekibinizin devreye aldığı tek bir AI süreci bile yoksa, AI dönüşümünün parçası değilsiniz. Sadece izliyorsunuz.",
      lead1: "Her hafta gerçek uygulanabilir HR örnek uygulamaları.",
      lead2: "Eğitimden işe alıma. Vendor satışı değil, pratik.",
      ctaPrimary: "Bültene Kaydol →",
      ctaSecondary: "Değerlendirmeye Başla →",
      stat1Num: "15+",
      stat1Label: "Yıl İK Tecrübesi",
      stat2Num: "2",
      stat2Label: "Bankanın İK'sını Sıfırdan Kurdu",
      stat3Num: "13",
      stat3Label: "Organizasyon",
    },
    steps: {
      eyebrow: "NASIL ÇALIŞIR",
      heading: "Üç adımda uygulamaya geçin.",
      step1Number: "01 — ÖLÇÜM",
      step1Title: "Mevcut seviyeyi ölçeriz.",
      step1Body:
        "HR AI Maturity Audit ile ekibinizin mevcut seviyesini süreç ve davranış düzeyinde ölçüyoruz. Konuşmadan önce veriyle başlıyoruz.",
      step2Number: "02 — HEDEFLEME",
      step2Title: "Doğru kesiti birlikte seçeriz.",
      step2Body:
        "İK süreçlerinizden AI'ın en yüksek getiriyi sağlayacağı iki ya da üç alanı birlikte seçiyoruz. Tam liste değil, doğru kesit.",
      step3Number: "03 — UYGULAMA",
      step3Title: "Sürecin içine oturturuz.",
      step3Body:
        "Çalışan playbook'lar ve atölyelerle AI'ı sürecin içine oturtuyoruz. Slayt değil, kullanılabilir prompt setleri ve iş akışları.",
    },
    testimonials: {
      eyebrow: "REFERANSLAR",
      heading: "HR AI Demolardan Yorumlar",
      sector1: "DİJİTAL BANKA",
      quote1:
        "“Araçları konuşmak için girdik ama asıl keşif, ekip olarak hepimizin AI'a farklı yerden baktığıydı.”",
      name1: "Ilgı Karakuş",
      role1: "People & Culture Senior Manager, Colendibank",
      sector2: "BANKACILIK",
      quote2:
        "“HR AI'ı kendi işimize entegre edip günlük operasyona yansıtma zamanı.”",
      name2: "Okan Tunalı",
      role2: "HR Head Turkey, Rabobank",
      sector3: "SİGORTA",
      quote3:
        "“İşe alımdan onboarding'e, performans süreçlerinden günlük operasyonlara kadar birçok başlıkta somut örnekleri ve gerçek kullanım senaryolarını birlikte değerlendirdik.”",
      name3: "Barış Özkane",
      role3: "Head of People & Culture, Polaris",
      linkedIn: "LinkedIn'de gör →",
    },
    assessment: {
      label: "HR AI FLUENCY ASSESSMENT · BETA",
      headingPart1: "Kendinizi ve şirketinizi",
      headingAccent: "değerlendirin.",
      body: "İki katmanlı bir öz değerlendirme. Bir İK profesyoneli olarak kendi AI yetkinliğinizi ve organizasyonunuzun AI olgunluğunu 5 dakika içinde ölçün.",
      list1: "Kişisel AI Fluency skorunuz",
      list2: "Şirketinizin AI olgunluk seviyesi",
      list3: "Kendiniz için 3 gelişim alanı",
      list4: "Şirketiniz için 3 öncelikli aksiyon",
      cardLabel: "DEĞERLENDİRMEYE BAŞLA",
      cardText:
        "5 dakika sürer. Sonuçla birlikte kişisel ve kurumsal yol haritanızı alırsınız.",
      cardCta: "Değerlendirmeye başla →",
      cardNote: "Beta sürüm: erken kullanıcı geri bildirimine ihtiyacımız var.",
    },
    about: {
      eyebrow: "HAKKINDA",
      heading: "NEW HR AI'ın arkasındaki kişi",
      body: "Tolga Temtek, Bank of China Türkiye ve Colendi Bank'ta İK fonksiyonunu sıfırdan kuran 15+ yıllık bir İK lideri. NEW HR AI, bu pratiğin AI dönemine taşınmış halidir.",
      link: "Tolga Temtek hakkında →",
    },
    finalCta: {
      eyebrow: "SONRAKİ ADIM",
      heading: "Şirketiniz için doğru AI başlangıç noktasını birlikte belirleyelim.",
      body: "Şirketinizi, mevcut AI kullanımınızı ve çözmek istediğiniz alanları paylaşın. İlk değerlendirmeyi birlikte yapalım.",
      cta: "Durumunuzu paylaşın →",
      mailSubject: "NEW HR AI — Durum paylaşımı",
    },
    footer: {
      tagline: "AI FOR HR. BY HR.",
      pagesLabel: "SAYFALAR",
      home: "Ana Sayfa",
      assessment: "Assessment",
      about: "Hakkında",
      contact: "İletişim",
      contactLabel: "İLETİŞİM",
      copyright: "© 2026 NEW HR AI",
      mantra: "Built for practical AI adoption in HR.",
    },
  },

  en: {
    site: {
      title: "New HR AI",
    },
    nav: {
      yaklasim: "Approach",
      hakkinda: "About",
      referanslar: "References",
      iletisim: "Contact",
      assessmentCta: "Take Assessment",
    },
    hero: {
      eyebrow: "AI FOR HR. BY HR.",
      heroTitle: "If your HR team can't name one AI workflow they shipped, you're watching. Not adopting.",
      lead1: "Real examples. Senior HR operator. One workflow at a time.",
      lead2: "Not theory. Not vendor pitches.",
      ctaPrimary: "Join the Newsletter →",
      ctaSecondary: "Take Assessment →",
      stat1Num: "15+",
      stat1Label: "Years in HR",
      stat2Num: "2",
      stat2Label: "Banks' HR Built From Scratch",
      stat3Num: "13",
      stat3Label: "Organizations I Worked For",
    },
    steps: {
      eyebrow: "HOW IT WORKS",
      heading: "Three steps from idea to application.",
      step1Number: "01 — MEASURE",
      step1Title: "We measure where you are.",
      step1Body:
        "With the HR AI Maturity Audit we measure your team's current level at the process and behaviour layer. We start with data, not conversation.",
      step2Number: "02 — TARGET",
      step2Title: "We pick the right cut together.",
      step2Body:
        "We pick the two or three HR areas where AI will deliver the highest return. Not a full list — the right cut.",
      step3Number: "03 — APPLY",
      step3Title: "We embed it in the process.",
      step3Body:
        "Through working playbooks and workshops, we embed AI in the process itself. Not slides — usable prompt sets and workflows.",
    },
    testimonials: {
      eyebrow: "REFERENCES",
      heading: "What HR Leaders Said After the Demo",
      sector1: "DIGITAL BANKING",
      quote1:
        "“We came in to talk about tools, but the real discovery was that every one of us looked at AI from a different angle.”",
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
      name3: "Barış Özkane",
      role3: "Head of People & Culture, Polaris",
      linkedIn: "View on LinkedIn →",
    },
    assessment: {
      label: "HR AI FLUENCY ASSESSMENT · BETA",
      headingPart1: "Assess yourself and",
      headingAccent: "your company.",
      body: "A two-layer self-assessment. As an HR professional, measure your own AI fluency and your organisation's AI maturity in five minutes.",
      list1: "Your personal AI Fluency score",
      list2: "Your company's AI maturity level",
      list3: "3 development areas for you",
      list4: "3 priority actions for your company",
      cardLabel: "START THE ASSESSMENT",
      cardText:
        "Takes 5 minutes. You'll receive your personal and organisational roadmap with the results.",
      cardCta: "Start the assessment →",
      cardNote: "Beta release: we need early user feedback.",
    },
    about: {
      eyebrow: "ABOUT",
      heading: "The person behind NEW HR AI",
      body: "Tolga Temtek is a 15+ year HR leader who built the HR function from scratch at Bank of China Türkiye and Colendi Bank. NEW HR AI is that practice, carried into the AI era.",
      link: "About Tolga Temtek →",
    },
    finalCta: {
      eyebrow: "NEXT STEP",
      heading: "Let's find the right AI starting point for your company.",
      body: "Share your company, your current AI use, and the areas you want to tackle. We'll run the first assessment together.",
      cta: "Share your situation →",
      mailSubject: "NEW HR AI — Situation share",
    },
    footer: {
      tagline: "AI FOR HR. BY HR.",
      pagesLabel: "PAGES",
      home: "Home",
      assessment: "Assessment",
      about: "About",
      contact: "Contact",
      contactLabel: "CONTACT",
      copyright: "© 2026 NEW HR AI",
      mantra: "Built for practical AI adoption in HR.",
    },
  },
} as const;
