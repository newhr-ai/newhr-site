export type Lang = "tr" | "en";

// Route each locale to its own assessment (Turkish translated 2026-06-01).
export const assessmentPath = (lang: Lang) =>
  `https://assessment.newhr.ai/${lang === "tr" ? "tr" : "en"}/assessment`;

// LinkedIn newsletter follow (quiet tertiary link in the hero).
export const newsletterUrl = (lang: Lang) =>
  lang === "en"
    ? "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7464963171129262080"
    : "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7463181925256445953";

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
      eyebrow: "İK'DAN İK'YA",
      heroTitle:
        "AI şirketinize çoktan girdi.<br>Sıra onu yönetmekte, o da İK'da.",
      heroEmphasis: "o da İK'da",
      subline:
        "Çalışanlarınız çoktan kullanıyor, CEO bir plan bekliyor, kararlar İK olmadan alınmaya başladı. Nerede durduğunuzu görün: 8 soru, 5 dakika, size özel rapor.",
      ctaAssessment: "Değerlendirmeye Başla →",
      ctaNewsletter: "Bültene Kaydol →",
      startHint: "Diğer İK liderlerine kıyasla nerede olduğunuzu görün",
      stat1Num: "15+",
      stat1Label: "Yıl İK Tecrübesi",
      stat2Num: "2",
      stat2Label: "Sıfırdan Kurulan Banka İK'sı",
      stat3Num: "1.200+",
      stat3Label: "HR AI Radar Bülten Abonesi",
    },
    programs: {
      eyebrow: "PROGRAMLAR",
      heading: "Dört adım. Ücretsiz başlayın.",
      intro:
        "Ücretsiz başlayın, ihtiyacınız kadar ilerleyin. Her adım bir sonrakini besler.",
      items: [
        {
          number: "01",
          tier: "ÜCRETSİZ",
          title: "HR AI Hazırlık Değerlendirmesi",
          body: "Kendinizin ve şirketinizin nerede olduğunu 5 dakikada görün.",
        },
        {
          number: "02",
          tier: "ÇEKİRDEK",
          title: "Yarım Günlük HR AI Atölyesi",
          body: "Kendi gerçek İK işinizde Ölç, Hedefle, Uygula. Tek oturum.",
        },
        {
          number: "03",
          tier: "GRUP",
          title: "HR AI Grup Programı",
          body: "Farklı şirketlerden İK liderleriyle çok haftalı program. Bekleme listesi açık.",
        },
        {
          number: "04",
          tier: "1:1",
          title: "HR AI Danışmanlığı",
          body: "AI dönüşümünü yöneten İK liderine birebir rehberlik.",
        },
      ],
      cta: "Tüm programları gör →",
      ctaHref: "/programlar/",
    },
    workshop: {
      eyebrow: "OTURUM",
      headline: "Yarım günlük HR AI Atölyesi.",
      intro: "İK ekibinizle, kendi gerçek işiniz üzerinde, tek bir oturumda. Ölçer, hedefler, uygularız.",
      method: [
        {
          label: "ÖLÇ",
          text: "Nerede olduğunuzu ölçeriz. Değerlendirme sonuçlarınızdan başlarız.",
        },
        {
          label: "HEDEFLE",
          text: "Doğru kesiti birlikte seçeriz: AI'ın en çok getiri sağladığı iki üç alan.",
        },
        {
          label: "UYGULA",
          text: "Sürecin içine oturturuz: ekibinizin ertesi sabah kullanacağı prompt setleri ve iş akışları.",
        },
      ],
      details: [
        {
          label: "KİMLER İÇİN",
          text: "AI'ı süreçlerine güvenle taşımak ve bunu kendileri yürütmeyi öğrenmek isteyen İK ve People ekipleri.",
        },
        {
          label: "NE İLE AYRILIRSINIZ",
          text: "Ekibinizin sahiplendiği iki üç çalışan AI iş akışı, bir prompt seti ve net bir sonraki adım.",
        },
        {
          label: "FORMAT",
          text: "Yarım gün, online ya da yerinde, Türkçe veya İngilizce.",
        },
        {
          label: "FİYAT",
          text: "Kısa bir kapsam görüşmesinin ardından, ekip büyüklüğüne göre paylaşılır.",
        },
      ],
      cta: "Ekibinize uygun mu, görüşelim →",
      ctaHref: "mailto:hello@newhr.ai",
    },
    steps: {
      eyebrow: "ATÖLYENİN İÇİ",
      heading: "HR AI Workbench. Ölç, hedefle, uygula.",
      intro: "Yarım günlük atölyenin çalıştığı tek sistem. Kendi süreçlerinizde, sırayla.",
      step1Number: "01. ÖLÇ",
      step1Title: "Nerede olduğunuzu ölçeriz.",
      step1Body:
        "Değerlendirme sonuçlarınızdan başlıyoruz. Ekibinizin AI olgunluğunu süreç ve davranış düzeyinde okuyoruz. Konuşmadan önce veriyle başlıyoruz.",
      step1Link: "Ölç ile başlayın →",
      step2Number: "02. HEDEFLE",
      step2Title: "Doğru kesiti birlikte seçeriz.",
      step2Body:
        "İK süreçlerinizden AI'ın en yüksek getiriyi sağlayacağı iki üç alanı seçiyoruz. Tam liste değil, doğru kesit.",
      step3Number: "03. UYGULA",
      step3Title: "Sürecin içine oturturuz.",
      step3Body:
        "Çalışan playbook'lar ve uygulamalı bir oturumla AI'ı işin içine yerleştiriyoruz. Slayt değil; ekibinizin ertesi sabah kullanacağı prompt setleri ve iş akışları.",
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
      linkedinLabel: "LinkedIn'de görüntüle →",
      sector1: "DİJİTAL BANKA",
      quote1:
        "“Araçları konuşmak için girdik ama asıl keşif, ekip olarak hepimizin AI'a farklı yerden baktığıydı.”",
      name1: "Ilgı Karakuş",
      role1: "People & Culture Senior Manager, Colendibank",
      sector2: "BANKACILIK",
      quote2:
        "“Bizi HR AI'ı konuşmaktan günlük operasyona kurmaya geçiren şey buydu.”",
      name2: "Okan Tunalı",
      role2: "HR Head Turkey, Rabobank",
      sector3: "SİGORTA",
      quote3:
        "“İşe alım, onboarding, performans ve günlük operasyonda gerçek kullanım senaryoları. Teori değil, somut örnekler.”",
      name3: "Barış Özkaner",
      role3: "Head of People & Culture, Polaris",
    },
    assessment: {
      label: "HR AI HAZIRLIK DEĞERLENDİRMESİ · BETA",
      headingPart1: "Buradan başlayın. Kendinizi ve ",
      headingAccent: "şirketinizi",
      headingPart2: " değerlendirin.",
      body: "İlk adım, ve ücretsiz. İki katmanlı bir öz değerlendirme: bir İK profesyoneli olarak kendi AI yetkinliğiniz ve organizasyonunuzun AI olgunluğu, 5 dakikada. Sonuçla birlikte kişisel ve kurumsal yol haritanızı alırsınız.",
      list1: "Kişisel AI hazırlık skorunuz",
      list2: "Şirketinizin AI olgunluk düzeyi",
      list3: "Size özel üç gelişim alanı",
      list4: "Şirketiniz için üç öncelikli aksiyon",
      cardLabel: "DEĞERLENDİRMEYE BAŞLA",
      cardText:
        "5 dakika sürer. Sonuçla birlikte kişisel ve kurumsal yol haritanızı alırsınız.",
      cardCta: "Değerlendirmeye başla →",
      cardNote: "5 dakika · ücretsiz · Beta, geri bildiriminize ihtiyacımız var.",
    },
    about: {
      eyebrow: "HAKKINDA",
      heading: "İK'yı içeriden kurdu. Şimdi AI ile kuruyor.",
      body: "Tolga Temtek 15 yıl İK'nın içinde, her ölçekte çalıştı: BNP Paribas'ta 10.000 kişilik bir banka, Bank of China Türkiye'de sıfırdan kurduğu uluslararası bir banka, ColendiBank'ta baştan kurulan bir dijital banka ve bugün fintech müşterileri. New HR AI, bunun AI'a dönüştüğü yer: uygulamalı, gerçek İK işi üzerinde, teori değil.",
      tags: ["İK için Uygulamalı AI", "HR AI Atölyeleri", "AI Fluency"],
      link: "Tolga Temtek hakkında →",
      linkHref: "/hakkinda/",
      photoChip: "Bir HR AI oturumunda",
      photoPill: "Sahnede · 2025",
    },
    faq: {
      eyebrow: "SIKÇA SORULAN SORULAR",
      heading: "Yazmadan önce merak edilenler.",
      items: [
        {
          q: "Oturum ne kadar sürüyor?",
          a: "Yarım gün, yaklaşık üç ila dört saat. Tek, odaklı bir oturum.",
        },
        {
          q: "Online mı, yerinde mi?",
          a: "İkisi de mümkün. Oturumlar genelde online yapılır; yerinde de mümkün.",
        },
        { q: "Hangi dilde?", a: "Türkçe." },
        {
          q: "Verilerimiz güvende mi?",
          a: "Evet. Kendi gerçek işiniz üzerinde çalışırız; veri paylaşımı ve gizlilik kurallarını baştan birlikte belirleriz.",
        },
        {
          q: "Ücret ne kadar?",
          a: "Kısa ve ücretsiz bir kapsam görüşmesinin ardından, ekip büyüklüğü ve kapsama göre paylaşılır.",
        },
        {
          q: "Nasıl başlıyoruz?",
          a: "Ekibinizi ve AI'dan ne istediğinizi kısaca hello@newhr.ai adresine yazın; size net bir sonraki adımla dönüş yapayım.",
        },
      ],
    },
    newsletter: {
      image: "/images/radar_tr.png",
      imageAlt: "HR AI Radar bülteni",
      description: "HR profesyonelleri için HR AI bülteni. Kritik haberler, pratik yorum. İki haftada bir.",
      line: "1.200+ İK profesyoneli her iki haftada bir okuyor.",
      button: "Bültene kaydol →",
      buttonHref: "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7463181925256445953",
    },
    finalCta: {
      eyebrow: "SONRAKİ ADIM",
      heading: "Ekibinizin ilk AI hamlesini birlikte saptayalım.",
      body: "Başlamanın iki yolu var. 5 dakikalık değerlendirmeyle nerede olduğunuzu görün ya da HR AI sorununuzu yazın, size bir ilk adımla geri döneyim.",
      primaryCta: "Değerlendirmeye başla →",
      secondaryCta: "HR AI sorununuzu yazın →",
      trustLine: "Her mesajı kendim okur, kendim yanıtlarım.",
      mailSubject: "HR AI Projesi",
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
        "AI is already in your company.<br>Leading it lands on HR.",
      heroEmphasis: "lands on HR",
      subline:
        "Your people are already using it, your CEO expects a plan, and the decisions are starting without HR in the room. See where you stand: 8 questions, 5 minutes, a personal report.",
      ctaAssessment: "Take Assessment →",
      ctaNewsletter: "Join the Newsletter →",
      startHint: "See how you compare to other HR leaders",
      stat1Num: "15+",
      stat1Label: "Years in HR",
      stat2Num: "2",
      stat2Label: "Bank HR Functions Built From Scratch",
      stat3Num: "1,200+",
      stat3Label: "HR AI Radar Newsletter Subscribers",
    },
    programs: {
      eyebrow: "PROGRAMS",
      heading: "Four steps. Free to done.",
      intro:
        "Start free, go as far as you need. Each step feeds the next.",
      items: [
        {
          number: "01",
          tier: "FREE",
          title: "HR AI Readiness Assessment",
          body: "See where you and your company stand in 5 minutes.",
        },
        {
          number: "02",
          tier: "CORE",
          title: "Half-Day HR AI Workshop",
          body: "Measure, Target, Apply on your real HR work, in one session.",
        },
        {
          number: "03",
          tier: "COHORT",
          title: "HR AI Cohort",
          body: "A multi-week program with HR leaders from other companies. Waitlist open.",
        },
        {
          number: "04",
          tier: "1:1",
          title: "HR AI Advisory",
          body: "Direct guidance for an HR leader leading an AI shift.",
        },
      ],
      cta: "See all programs →",
      ctaHref: "/en/programs/",
    },
    workshop: {
      eyebrow: "THE WORKSHOP",
      headline: "The half-day HR AI Workshop.",
      intro: "One focused session with your HR team, on your own real work. We measure, target, and apply.",
      method: [
        {
          label: "MEASURE",
          text: "We measure where you are, starting from your assessment results.",
        },
        {
          label: "TARGET",
          text: "We pick the right cut together: the two or three areas where AI pays off most.",
        },
        {
          label: "APPLY",
          text: "We put it into the process: prompt sets and workflows your team runs the next morning.",
        },
      ],
      details: [
        {
          label: "WHO IT'S FOR",
          text: "HR and People teams that want to bring AI into their processes safely, and learn to run it themselves.",
        },
        {
          label: "WHAT YOU LEAVE WITH",
          text: "Two or three working AI workflows your team owns, a prompt set, and a clear next step.",
        },
        {
          label: "FORMAT",
          text: "Half a day, online or on-site, in Turkish or English.",
        },
        {
          label: "PRICING",
          text: "Shared after a short scoping call, based on team size and scope.",
        },
      ],
      cta: "See if your team is a fit →",
      ctaHref: "mailto:hello@newhr.ai",
    },
    steps: {
      eyebrow: "INSIDE THE WORKSHOP",
      heading: "The HR AI Workbench. Measure, target, apply.",
      intro: "The single system the half-day workshop runs on. On your own processes, in order.",
      step1Number: "01. MEASURE",
      step1Title: "We measure where you are.",
      step1Body:
        "We start from your assessment results, reading your team's AI maturity at the process and behaviour level. Data first, conversation second.",
      step1Link: "Start with Measure →",
      step2Number: "02. TARGET",
      step2Title: "We pick the right cut together.",
      step2Body:
        "We choose the two or three HR areas where AI pays off most. Not the full list, the right cut.",
      step3Number: "03. APPLY",
      step3Title: "We embed it in the process.",
      step3Body:
        "Through working playbooks and a hands-on session, we put AI into the work itself. Not slides. Prompt sets and workflows your team runs the next morning.",
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
      linkedinLabel: "View on LinkedIn →",
      sector1: "DIGITAL BANKING",
      quote1:
        "“We came in to talk about tools. The real discovery was that every one of us approached AI from a different place.”",
      name1: "Ilgı Karakuş",
      role1: "People & Culture Senior Manager, Colendibank",
      sector2: "BANKING",
      quote2:
        "“This is what moved us from talking about HR AI to building it into daily operations.”",
      name2: "Okan Tunalı",
      role2: "HR Head Turkey, Rabobank",
      sector3: "INSURANCE",
      quote3:
        "“Real use cases across hiring, onboarding, performance and daily operations. Concrete examples, not theory.”",
      name3: "Barış Özkaner",
      role3: "Head of People & Culture, Polaris",
    },
    assessment: {
      label: "HR AI READINESS ASSESSMENT · BETA",
      headingPart1: "Start here. Assess yourself and ",
      headingAccent: "your company",
      headingPart2: ".",
      body: "Step one, and it's free. A two-layer self-assessment: your own AI readiness as an HR professional, and your organisation's AI maturity, in five minutes. You leave with a personal and an organisational roadmap.",
      list1: "Your personal AI readiness score",
      list2: "Your company's AI maturity level",
      list3: "3 development areas for you",
      list4: "3 priority actions for your company",
      cardLabel: "START THE ASSESSMENT",
      cardText:
        "Takes 5 minutes. You'll receive your personal and organisational roadmap with the results.",
      cardCta: "Start the assessment →",
      cardNote: "5 minutes · free · Beta, we want your feedback.",
    },
    about: {
      eyebrow: "ABOUT",
      heading: "Built HR from the inside. Now building it with AI.",
      body: "Tolga Temtek has spent 15 years inside HR, across every kind of organization: a 10,000-person bank at BNP Paribas, an international bank built from scratch at Bank of China Türkiye, a digital bank launched from zero at ColendiBank, and fintech clients today. New HR AI is where that turns into AI: practical, on real HR work, not theory.",
      tags: ["Applied AI for HR", "HR AI Workshops", "AI Fluency"],
      link: "About Tolga Temtek →",
      linkHref: "/en/about/",
      photoChip: "At an HR AI session",
      photoPill: "On stage · 2025",
    },
    faq: {
      eyebrow: "FAQ",
      heading: "Before you reach out.",
      items: [
        {
          q: "How long is the session?",
          a: "Half a day, about three to four hours. One focused session.",
        },
        {
          q: "Online or on-site?",
          a: "Both work. Sessions usually run online; on-site is also possible.",
        },
        { q: "Which language?", a: "In English." },
        {
          q: "Is our data safe?",
          a: "Yes. We work on your own real material, and we agree the data-sharing and confidentiality rules together up front.",
        },
        {
          q: "What does it cost?",
          a: "Shared after a short, free scoping call, based on team size and scope.",
        },
        {
          q: "How do we get started?",
          a: "Email a short outline of your team and what you want from AI to hello@newhr.ai, and I'll come back to you with a concrete next step.",
        },
      ],
    },
    newsletter: {
      image: "/images/radar_en.png",
      imageAlt: "HR AI Radar newsletter",
      description: "Real AI news for HR professionals. Curated biweekly by New HR AI, no hype, no vendor content.",
      line: "Read by 1,200+ HR professionals every two weeks.",
      button: "Subscribe →",
      buttonHref: "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7464963171129262080",
    },
    finalCta: {
      eyebrow: "NEXT STEP",
      heading: "Let's find your team's first AI move.",
      body: "Two ways to start. Take the 5-minute assessment to see where you stand, or send me your HR AI challenge and I'll write back with a first step.",
      primaryCta: "Take the assessment →",
      secondaryCta: "Email your HR AI challenge →",
      trustLine: "I read and reply to every message myself.",
      mailSubject: "HR AI Challenge",
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
