// Sources referenced in Tolga's LinkedIn posts, shown on the Kaynaklar /
// Resources page (Research.astro). One entry per source, both languages.
//
// TO ADD A SOURCE (after a new post):
//   1. Copy one entry below and paste it at the top of its category.
//   2. Fill id (short-slug), type (what the document is), category (the
//      HR question it answers, drives the filter), titleTr (short Turkish
//      title, Title Case), publisher, title (original language), year,
//      url (publisher's own page), desc.tr and desc.en (max 160 chars, what
//      it is and why it matters for HR, no statistics), postUrl (the LinkedIn
//      post where the source was used, if any).
//   3. npm run build, then commit and push.
// category (filter): risk | mevzuat | getiri | adaptasyon | ornek | kurs
// type (label):      rapor | arastirma | dava | mevzuat | egitim | haber |
//                    makale | basin | cerceve | politika | kurs
// year may be "" for ongoing courses.

export type ResearchCategory =
  | "risk"
  | "mevzuat"
  | "getiri"
  | "adaptasyon"
  | "ornek"
  | "kurs";

export type ResearchType =
  | "rapor"
  | "arastirma"
  | "dava"
  | "mevzuat"
  | "egitim"
  | "haber"
  | "makale"
  | "basin"
  | "cerceve"
  | "politika"
  | "kurs";

export interface ResearchItem {
  id: string;
  type: ResearchType;
  category: ResearchCategory;
  /** Short Turkish title, Title Case. The TR page shows it as the heading. */
  titleTr: string;
  publisher: string;
  /** Original title, shown as the heading on EN and as a subline on TR. */
  title: string;
  year: string;
  url: string;
  desc: { tr: string; en: string };
  /** LinkedIn post where this source was used. */
  postUrl?: string;
  post?: number;
}

export const researchItems: ResearchItem[] = [
  {
    id: "mckinsey-state-of-organizations-2026",
    type: "rapor",
    category: "getiri",
    titleTr: "Kurumları Yeniden Şekillendiren Üç Güç",
    publisher: "McKinsey & Company",
    title: "The State of Organizations 2026: Three tectonic forces that are reshaping organizations",
    year: "2026",
    url: "https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/the-state-of-organizations",
    desc: {
      tr: "McKinsey'nin kurumları yeniden şekillendiren üç büyük güç üzerine raporu. Organizasyon tasarımı ve liderlik gündemi için başvuru kaynağı.",
      en: "McKinsey's report on three forces reshaping organizations. A reference point for organization design and leadership priorities.",
    },
  },
  {
    id: "forrester-tei-workday-people-analytics",
    type: "rapor",
    category: "getiri",
    titleTr: "Workday People Analytics'in Ekonomik Etkisi",
    publisher: "Forrester Consulting",
    title: "The Total Economic Impact of Workday Prism Analytics and People Analytics",
    year: "2025",
    url: "https://tei.forrester.com/go/workday/PrismandPeopleAnalytics?lang=en-us",
    desc: {
      tr: "Forrester'ın Workday Prism Analytics ve People Analytics için ekonomik etki çalışması. Workday'in sipariş ettiği, tedarikçi destekli bir çalışma.",
      en: "Forrester's economic impact study of Workday Prism Analytics and People Analytics. Commissioned by Workday, so a vendor-commissioned study.",
    },
  },
  {
    id: "pwc-ai-performance-study-2026",
    type: "rapor",
    category: "getiri",
    titleTr: "AI Yatırımından Getiri Nasıl Elde Ediliyor",
    publisher: "PwC",
    title: "Decoding ROI from AI",
    year: "2026",
    url: "https://www.pwc.com/gx/en/issues/technology/ai-performance.html",
    desc: {
      tr: "PwC'nin şirketlerin yapay zekâ yatırımından nasıl getiri elde ettiğini inceleyen 2026 AI Performance Study çalışması.",
      en: "PwC's 2026 AI Performance Study on how companies turn their AI investment into returns.",
    },
  },
  {
    id: "google-ai-economy-atlas",
    type: "rapor",
    category: "ornek",
    titleTr: "AI Hangi Meslek ve Görevlerde Kullanılıyor",
    publisher: "Google",
    title: "AI & Economy ATLAS v1.0: Mapping Gemini Usage in the Economy",
    year: "2026",
    url: "https://ai.google/static/documents/GoogleATLASv1.pdf",
    desc: {
      tr: "Google'ın Gemini kullanım verisinden yola çıkarak yapay zekânın hangi meslek ve görevlerde kullanıldığını haritalayan çalışması.",
      en: "Google's study mapping which occupations and tasks AI is used for, based on Gemini usage data.",
    },
  },
  {
    id: "jpmorgan-human-capital-factor",
    type: "arastirma",
    category: "getiri",
    titleTr: "İnsan Sermayesi ve Şirket Performansı",
    publisher: "Irrational Capital, J.P. Morgan",
    title: "J.P. Morgan Research on the Human Capital Factor",
    year: "2021-2025",
    url: "https://www.irrational.capital/jp-morgan-research",
    desc: {
      tr: "İnsan sermayesi ile şirket performansı ilişkisine dair J.P. Morgan notları. Sayfa, bu ölçümü satan Irrational Capital'e ait.",
      en: "J.P. Morgan notes on human capital and company performance. The page belongs to Irrational Capital, the vendor that sells this measure.",
    },
  },
  {
    id: "conference-board-ai-career-coaching",
    type: "arastirma",
    category: "ornek",
    titleTr: "Kariyer Koçluğunda AI'ın Payı ve İnsanın Yeri",
    publisher: "The Conference Board",
    title: "AI Can Provide 90% of Career Coaching, But Humans Still Matter",
    year: "2025",
    url: "https://www.conference-board.org/press/ai-can-provide-career-coaching-but-humans-still-matter",
    desc: {
      tr: "Yapay zekânın kariyer koçluğunda neleri üstlenebileceğini ve insan koçların nerede gerekli kaldığını inceleyen araştırmanın özeti.",
      en: "Summary of research on which parts of career coaching AI can take on and where human coaches are still needed.",
    },
  },
  {
    id: "stanford-algorithmic-monocultures-hiring",
    type: "arastirma",
    category: "risk",
    titleTr: "İşe Alımda Algoritmik Tekleşme",
    publisher: "Stanford University (arXiv)",
    title: "Algorithmic Monocultures in Hiring",
    year: "2026",
    url: "https://arxiv.org/abs/2605.27371",
    desc: {
      tr: "Stanford araştırmacılarının, birçok işverenin aynı tedarikçinin işe alım algoritmasını kullanmasının adaylara etkisini inceleyen makalesi.",
      en: "Stanford researchers' paper on what happens to applicants when many employers use the same vendor's hiring algorithm.",
    },
  },
  {
    id: "atlassian-ai-honesty-backfiring",
    type: "arastirma",
    category: "adaptasyon",
    titleTr: "AI Kullandığını Söylemek Neden Ters Tepiyor",
    publisher: "Atlassian Teamwork Lab",
    title: "New research shows honesty about AI use at work is backfiring",
    year: "2026",
    url: "https://www.atlassian.com/blog/ai-at-work/new-research-shows-honesty-about-ai-use-at-work-is-backfiring",
    desc: {
      tr: "İş yerinde yapay zekâ kullandığını açıkça söylemenin çalışanların nasıl değerlendirildiğine etkisini inceleyen Atlassian araştırması.",
      en: "Atlassian research on how disclosing AI use at work affects the way colleagues judge an employee.",
    },
  },
  {
    id: "glean-work-ai-index-2026",
    type: "arastirma",
    category: "getiri",
    titleTr: "AI'ın Kazandırdığı Zaman ve Kontrol Yükü",
    publisher: "Glean Work AI Institute",
    title: "Work AI Index 2026",
    year: "2026",
    url: "https://www.glean.com/work-ai-institute/work-ai-index",
    desc: {
      tr: "Yapay zekânın iş yerinde kazandırdığı zamanı ve çıktıyı kontrol etmek için harcanan emeği inceleyen endeks. Glean destekli bir çalışma.",
      en: "An index on the time AI saves at work and the effort spent checking its output. Sponsored by Glean.",
    },
  },
  {
    id: "kpmg-ut-austin-early-career-ai",
    type: "arastirma",
    category: "adaptasyon",
    titleTr: "Kariyer Başında AI Kullanımı ve Performans",
    publisher: "KPMG US, UT Austin McCombs",
    title: "Shaping early career success in the age of AI",
    year: "2026",
    url: "https://kpmg.com/us/en/media/news/shaping-early-career-success-in-the-age-of-ai.html",
    desc: {
      tr: "Kariyerinin başındaki çalışanların yapay zekâyı yönlendirme ve değerlendirme biçiminin performanslarına etkisini inceleyen çalışma.",
      en: "A study of how the way early-career employees direct and evaluate AI shapes their performance.",
    },
  },
  {
    id: "prosci-change-management-best-practices",
    type: "arastirma",
    category: "adaptasyon",
    titleTr: "Değişim Yönetiminde En İyi Uygulamalar",
    publisher: "Prosci",
    title: "Best Practices in Change Management",
    year: "2026",
    url: "https://www.prosci.com/blog/change-management-best-practices",
    postUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7510687561061679106/",
    desc: {
      tr: "Prosci'nin uzun soluklu araştırma serisinden değişim yönetimi en iyi uygulamaları. Üst yönetim sponsorluğu ve yönetici desteğine odaklanıyor.",
      en: "Change management best practices from Prosci's long-running research series, with a focus on executive sponsorship and manager support.",
    },
  },
  {
    id: "mobley-v-workday-agent-theory",
    type: "dava",
    category: "risk",
    titleTr: "Mobley v. Workday: Tedarikçi de Sorumlu Tutulabilir",
    publisher: "Seyfarth Shaw",
    title: "Mobley v. Workday: Court Holds AI Service Providers Could Be Directly Liable for Employment Discrimination Under Agent Theory",
    year: "2024",
    url: "https://www.seyfarth.com/news-insights/mobley-v-workday-court-holds-ai-service-providers-could-be-directly-liable-for-employment-discrimination-under-agent-theory.html",
    desc: {
      tr: "Mobley v. Workday davasında yapay zekâ hizmet sağlayıcılarının işverenin temsilcisi olarak doğrudan sorumlu tutulabileceği kararının hukuki analizi.",
      en: "Legal analysis of the Mobley v. Workday ruling that AI service providers could be directly liable as an employer's agent.",
    },
  },
  {
    id: "mobley-v-workday-june-2026-ruling",
    type: "dava",
    category: "risk",
    titleTr: "Mobley v. Workday: Haziran 2026 Kararı",
    publisher: "Duane Morris",
    title: "California Federal Court Grants In Part And Denies In Part Workday's Motion To Dismiss In Mobley v. Workday",
    year: "2026",
    url: "https://blogs.duanemorris.com/classactiondefense/2026/06/24/california-federal-court-grants-in-part-and-denies-in-part-workdays-motion-to-dismiss-in-mobley-v-workday/",
    desc: {
      tr: "Mobley v. Workday davasında Haziran 2026'da Workday'in davanın düşürülmesi talebini kısmen kabul, kısmen reddeden kararın özeti.",
      en: "Summary of the June 2026 ruling that granted in part and denied in part Workday's motion to dismiss in Mobley v. Workday.",
    },
  },
  {
    id: "meta-ai-layoff-lawsuit",
    type: "dava",
    category: "risk",
    titleTr: "Meta Çalışanlarından AI Destekli İşten Çıkarma Davası",
    publisher: "CBS News",
    title: "26 Meta workers sue over alleged AI-aided layoffs targeting employees on medical or family leave",
    year: "2026",
    url: "https://www.cbsnews.com/news/26-meta-workers-sue-ai-aided-layoffs-medical-family-leave/",
    desc: {
      tr: "CBS News haberi. 26 Meta çalışanı, işten çıkarma seçiminde yapay zekâ kullanıldığını ve izindeki çalışanların etkilendiğini iddia ederek dava açtı.",
      en: "CBS News report. 26 Meta employees have sued, alleging that AI was used to pick layoffs and that workers on leave were affected.",
    },
  },
  {
    id: "california-sb-947-bill",
    type: "mevzuat",
    category: "risk",
    titleTr: "Kaliforniya SB 947: Robot Patron Yok Yasası",
    publisher: "California Legislature",
    title: "SB 947 No Robo Bosses Act",
    year: "2026",
    url: "https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260SB947",
    postUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7511377792698273792/",
    desc: {
      tr: "Kaliforniya'nın SB 947 No Robo Bosses Act yasasının metni ve yasama süreci. İş yerinde otomatik karar sistemlerinde insan denetimini konu alıyor.",
      en: "Text and legislative history of California SB 947, the No Robo Bosses Act, on human oversight of automated decision systems at work.",
    },
  },
  {
    id: "california-sb-947-signed",
    type: "mevzuat",
    category: "risk",
    titleTr: "SB 947 Yasalaştı: Newsom İmzaladı",
    publisher: "California State Senate",
    title: "Newsom signs McNerney's No Robo Bosses Act",
    year: "2026",
    url: "https://sd05.senate.ca.gov/news/newsom-signs-mcnerneys-no-robo-bosses-act-2026-requiring-human-oversight-ai-workplace",
    postUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7511377792698273792/",
    desc: {
      tr: "Senatör Jerry McNerney'in, Vali Newsom'un No Robo Bosses Act yasasını imzaladığını duyuran açıklaması.",
      en: "Senator Jerry McNerney's announcement that Governor Newsom signed the No Robo Bosses Act.",
    },
  },
  {
    id: "eu-ai-omnibus-in-force",
    type: "mevzuat",
    category: "mevzuat",
    titleTr: "AB AI Omnibus Yürürlükte",
    publisher: "European Commission",
    title: "AI Omnibus enters into force",
    year: "2026",
    url: "https://digital-strategy.ec.europa.eu/en/news/ai-omnibus-enters-force",
    desc: {
      tr: "Avrupa Komisyonu'nun AI Omnibus düzenlemesinin yürürlüğe girdiğini duyuran sayfası. Yüksek riskli sistem kurallarının yeni tarihlerini veriyor.",
      en: "European Commission notice that the AI Omnibus has entered into force, with the new dates for high-risk AI rules.",
    },
  },
  {
    id: "dla-piper-digital-ai-omnibus",
    type: "mevzuat",
    category: "mevzuat",
    titleTr: "Yüksek Riskli AI Yükümlülüklerinin Ertelenmesi: İstihdam Açısından",
    publisher: "DLA Piper",
    title: "The Digital AI Omnibus: Proposed deferral of high risk AI obligations under the AI Act",
    year: "2026",
    url: "https://knowledge.dlapiper.com/dlapiperknowledge/globalemploymentlatestdevelopments/2026/The-Digital-AI-Omnibus-Proposed-deferral-of-high-risk-AI-obligations-under-the-AI-Act",
    desc: {
      tr: "AB Yapay Zekâ Yasası'ndaki yüksek riskli sistem yükümlülüklerinin ertelenmesini istihdam hukuku açısından ele alan analiz.",
      en: "Employment law analysis of the deferral of high-risk system obligations under the EU AI Act.",
    },
  },
  {
    id: "cac-anthropomorphic-ai-measures-text",
    type: "mevzuat",
    category: "mevzuat",
    titleTr: "Çin: İnsansı AI Etkileşim Hizmetleri Tedbirleri",
    publisher: "Cyberspace Administration of China (CAC)",
    title: "Interim Measures for the Management of Anthropomorphic AI Interactive Services",
    year: "2026",
    url: "https://www.cac.gov.cn/2026-04/10/c_1777558395078289.htm",
    desc: {
      tr: "Çin'in insansı yapay zekâ etkileşim hizmetlerine dair geçici tedbirlerinin resmi Çince metni. CAC ve dört kurum yayımladı.",
      en: "Official Chinese text of China's interim measures on anthropomorphic AI interaction services, issued by the CAC and four other agencies.",
    },
  },
  {
    id: "china-anthropomorphic-ai-measures",
    type: "mevzuat",
    category: "mevzuat",
    titleTr: "Çin'in İnsansı AI Düzenlemesinin Hukuki Analizi",
    publisher: "Bird & Bird",
    title: "China's New Regulations on AI Anthropomorphic Interactive Services",
    year: "2026",
    url: "https://www.twobirds.com/en/insights/2026/china/china's-new-regulations-on-ai-anthropomorphic-interactive-services",
    desc: {
      tr: "Çin'in insansı yapay zekâ etkileşim hizmetlerine dair geçici tedbirlerinin hukuki analizi. Tedbirler 15 Temmuz 2026'da yürürlüğe girdi.",
      en: "Legal analysis of China's interim measures on anthropomorphic AI interaction services, which took effect on 15 July 2026.",
    },
  },
  {
    id: "singapore-teo-cos-2026",
    type: "politika",
    category: "adaptasyon",
    titleTr: "Singapur'un Dijital Çağ Yetkinlik Politikası",
    publisher: "Singapore Government",
    title: "Building Singapore's Capability Advantage in a Digital Age",
    year: "2026",
    url: "https://www.csa.gov.sg/news-events/speeches/minister-josephine-teo-committee-of-supply-2026-speech-building-singapore-s-capability-advantage-in-a-digital-age/",
    desc: {
      tr: "Singapur Bakanı Josephine Teo'nun 2026 bütçe görüşmeleri konuşması. Dijital çağda iş gücü yetkinliği politikalarını anlatıyor.",
      en: "Minister Josephine Teo's Committee of Supply 2026 speech on workforce capability policy in the digital age.",
    },
  },
  {
    id: "zapier-ai-fluency-rubric",
    type: "egitim",
    category: "adaptasyon",
    titleTr: "Zapier'in İşe Alımda AI Yetkinlik Çıtası",
    publisher: "Zapier",
    title: "Raising the AI fluency bar for every Zapier hire",
    year: "2026",
    url: "https://zapier.com/blog/raising-ai-fluency-bar-in-hiring/",
    desc: {
      tr: "Zapier'in işe alımda kullandığı AI Fluency Rubric'in ikinci versiyonunu ve adaylardan beklediği yapay zekâ yetkinliğini anlatan yazı.",
      en: "Zapier's post on version 2 of the AI Fluency Rubric it uses in hiring and the AI skills it expects from candidates.",
    },
  },
  {
    id: "anthropic-ai-fluency",
    type: "cerceve",
    category: "adaptasyon",
    titleTr: "AI Yetkinliği Çerçevesi",
    publisher: "Anthropic Academy",
    title: "AI Fluency: Framework & Foundations",
    year: "",
    url: "https://anthropic.skilljar.com/ai-fluency-framework-foundations",
    desc: {
      tr: "Anthropic Academy'nin ücretsiz kursu. Yapay zekâ ile etkili, verimli ve sorumlu çalışmanın temel çerçevesini anlatıyor.",
      en: "A free Anthropic Academy course on a framework for working with AI effectively, efficiently and responsibly.",
    },
  },
  {
    id: "anthropic-claude-101",
    type: "kurs",
    category: "kurs",
    titleTr: "Claude ile Başlangıç",
    publisher: "Anthropic Academy",
    title: "Claude 101",
    year: "",
    url: "https://anthropic.skilljar.com/claude-101",
    desc: {
      tr: "Anthropic Academy'nin Claude'u günlük işlerde kullanmaya başlamak için hazırladığı giriş kursu.",
      en: "Anthropic Academy's introductory course on getting started with Claude for everyday work.",
    },
  },
  {
    id: "anthropic-claude-cowork",
    type: "kurs",
    category: "kurs",
    titleTr: "Claude Cowork'e Giriş",
    publisher: "Anthropic Academy",
    title: "Introduction to Claude Cowork",
    year: "",
    url: "https://anthropic.skilljar.com/introduction-to-claude-cowork",
    desc: {
      tr: "Anthropic Academy'nin Claude Cowork'e giriş kursu.",
      en: "Anthropic Academy's introductory course on Claude Cowork.",
    },
  },
  {
    id: "anthropic-ai-capabilities-limitations",
    type: "kurs",
    category: "kurs",
    titleTr: "AI'ın Yapabildikleri ve Sınırları",
    publisher: "Anthropic Academy",
    title: "AI Capabilities and Limitations",
    year: "",
    url: "https://anthropic.skilljar.com/ai-capabilities-and-limitations",
    desc: {
      tr: "Anthropic Academy'nin yapay zekânın neyi iyi yaptığını ve sınırlarının nerede olduğunu anlatan kursu.",
      en: "Anthropic Academy's course on what AI does well and where its limits are.",
    },
  },
  {
    id: "scs-ai-skills-pathway",
    type: "kurs",
    category: "kurs",
    titleTr: "Singapur AI Yetkinlik Yolu",
    publisher: "Singapore Computer Society",
    title: "SCS Skills Pathway for AI",
    year: "2026",
    url: "https://skillspathway.scs.org.sg/ai/",
    desc: {
      tr: "Singapore Computer Society'nin yapay zekâ yetkinlik yolu. İş profesyonelleri için AI Bilingual ve teknik uzmanlar için AI Technical Specialist kolları var.",
      en: "The Singapore Computer Society's AI skills pathway, with an AI Bilingual track for business professionals and an AI Technical Specialist track.",
    },
  },
  {
    id: "cornerstone-byoai-shadow-ai",
    type: "makale",
    category: "mevzuat",
    titleTr: "İK'da Gölge AI ve BYOAI Riskleri",
    publisher: "Cornerstone OnDemand",
    title: "BYOAI and Shadow AI in HR: Risks, Realities and What to Do Next",
    year: "2026",
    url: "https://www.cornerstoneondemand.com/resources/article/byoai-and-shadow-ai-in-hr-risks-realities-and-what-to-do-next/",
    desc: {
      tr: "Çalışanların kendi yapay zekâ araçlarını işe getirmesi (BYOAI) ile gölge yapay zekâ arasındaki farkı ve İK için riskleri anlatan makale.",
      en: "Article on the difference between bringing your own AI (BYOAI) and shadow AI, and what the risks mean for HR.",
    },
  },
  {
    id: "dbs-icoach",
    type: "basin",
    category: "ornek",
    titleTr: "DBS'in Tüm Çalışanlara Açık AI Koçu",
    publisher: "DBS",
    title: "DBS launches Gen AI-powered coaching tool to future-proof its workforce",
    year: "2025",
    url: "https://www.dbs.com/newsroom/DBS_launches_Gen_AI_powered_coaching_tool_to_future_proof_its_workforce",
    desc: {
      tr: "DBS'in Marshall Goldsmith ile geliştirdiği, tüm çalışanlara açık üretken yapay zekâ koçluk aracı iCoach'u duyuran basın bülteni.",
      en: "DBS press release launching iCoach, a generative AI coaching tool built with Marshall Goldsmith and open to all employees.",
    },
  },
];
