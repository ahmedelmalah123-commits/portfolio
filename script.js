// =============================================
// GLOBAL STATE
// =============================================
let currentLang = localStorage.getItem('lang') || 'en';

// =============================================
// TRANSLATIONS
// =============================================
const translations = {
    'nav-home': { en: 'Home', ar: 'الرئيسية' },
    'nav-about': { en: 'About', ar: 'عني' },
    'nav-skills': { en: 'Skills', ar: 'المهارات' },
    'nav-projects': { en: 'Projects', ar: 'المشاريع' },
    'nav-zainstein': { en: 'Zainstein', ar: 'زينشتاين' },
    'nav-contact': { en: 'Contact', ar: 'تواصل' },
    'hero-name': { en: 'Ahmed<br/>Al MALAH', ar: 'أحمد<br/>الملاح' },
    'hero-role-1': { en: 'Senior Prompt Engineer | Software Developer/Engineer | Advanced AI User', ar: 'مهندس أوامر ذكاء اصطناعي | مطور برمجيات | مستخدم متقدم للذكاء الاصطناعي' },
    'hero-role-2': { en: 'Senior Graphic Designer & Social Media Specialist', ar: 'مصمم جرافيك أول وأخصائي وسائل تواصل اجتماعي' },
    'hero-founder': { en: 'Founder of <span class="neon-red-text" style="font-weight:900; font-family: var(--font-tech);">ZAINSTEIN</span>', ar: 'مؤسس <span class="neon-red-text" style="font-weight:900; font-family: var(--font-tech);">ZAINSTEIN</span>' },
    'hero-tagline': { en: '"Engineering Tomorrow... Today"', ar: '"هندسة المستقبل... اليوم"' },
    'btn-portfolio': { en: 'View Portfolio', ar: 'اعرض أعمالي' },
    'btn-contact': { en: 'Contact Me', ar: 'تواصل معي' },
    'about-title': { en: 'About Ahmed', ar: 'عن أحمد' },
    'about-intro': { en: '<strong style="font-size:1.5rem; color:var(--text-white);">Ahmed Al MALAH</strong><br><span class="neon-red-text" style="font-weight:600;">Senior Prompt Engineer | Software Developer &amp; Engineer | Advanced AI User</span><br><span style="font-size: 0.95em; color: var(--text-muted);">Senior Graphic Designer &amp; Social Media Specialist</span><br>Founder of ZAINSTEIN<br>Computer Science senior student, Alexandria University (Expected Graduation 2026)', ar: '<strong style="font-size:1.5rem; color:var(--text-white);">أحمد الملاح</strong><br><span class="neon-red-text" style="font-weight:600;">مهندس أوامر ذكي | مطور برمجيات | مستخدم متقدم للذكاء الاصطناعي</span><br><span style="font-size: 0.95em; color: var(--text-muted);">مصمم جرافيك أول وأخصائي وسائل تواصل اجتماعي</span><br>مؤسس زينشتاين<br>طالب في السنة النهائية بعلوم الحاسب، جامعة الإسكندرية (تخرج متوقع 2026)' },
    'about-p1': { en: 'As a hybrid software developer and creative designer, my career journey spans 4+ years of building robust software products, advanced AI architectures, and leading high-impact visual campaigns. I fuse the technical rigor of full-stack engineering, prompt design, and QA automation with premium visual design and aesthetic sensibilities.', ar: 'كمزيج يجمع بين تطوير البرمجيات والتصميم الإبداعي، تمتد مسيرتي المهنية لأكثر من 4 سنوات في بناء منتجات برمجية قوية، ومعماريات الذكاء الاصطناعي المتقدمة، وقيادة حملات بصرية عالية التأثير. أدمج الدقة التقنية لهندسة التطبيقات وتصميم الأوامر الذكية وضمان الجودة مع أرقى الجماليات البصرية الفنية.' },
    'about-p2': { en: 'Most recently, I spent 8 months at Ooredoo Qatar driving digital content and led massive creative campaigns across 3 seasons for the Ministry of Youth and Sports (YLY) in Egypt. My approach is simple: engineering tomorrow... today, by building digital experiences that look visually stunning and function flawlessly under scale.', ar: 'مؤخراً قمت بإدارة المحتوى الرقمي لمدة 8 أشهر في أوريدو قطر، وقدت حملات إبداعية ضخمة عبر 3 مواسم لوزارة الشباب والرياضة (YLY) في مصر. نهجي بسيط: هندسة المستقبل... اليوم، من خلال بناء تجارب رقمية تبدو مذهلة بصريًا وتعمل بسلاسة تحت الضغط.' },
    'about-certs-title': { en: 'Certifications & Courses:', ar: 'الشهادات والدورات التدريبية:' },
    'about-cert-1': { en: 'Flutter Development', ar: 'تطوير التطبيقات باستخدام Flutter' },
    'about-cert-2': { en: 'Software Testing & QA Protocols', ar: 'بروتوكولات اختبار البرمجيات وضمان الجودة' },
    'about-cert-3': { en: 'UI/UX Design Masterclass', ar: 'دورة تصميم واجهة وتجربة المستخدم' },
    'about-cert-4': { en: 'Agile Project Management', ar: 'إدارة المشاريع الرشيقة (Agile)' },
    'about-cert-5': { en: 'Google Graphic Design & Adobe Certifications', ar: 'شهادات تصميم الجرافيك من جوجل وأدوبي' },
    'about-cert-6': { en: 'Creativa Scholarship', ar: 'منحة إبداع (Creativa)' },
    'skills-title': { en: 'Capabilities', ar: 'الإمكانيات' },
    'toolkit-title': { en: 'My Toolkit', ar: 'الأدوات والتقنيات' },
    'projects-title': { en: 'My Work', ar: 'أعمالي' },
    'zainstein-title': { en: 'ZAINSTEIN', ar: 'زينشتاين' },
    'zainstein-tagline': { en: '"Engineering Tomorrow... Today"', ar: '"هندسة المستقبل... اليوم"' },
    'zainstein-solutions': { en: 'Enterprise Solutions', ar: 'حلول المؤسسات' },
    'zainstein-impact': { en: 'Impact', ar: 'التأثير' },
    'team-title': { en: 'Leadership Core', ar: 'النواة القيادية' },
    'team-name': { en: 'Ahmed Al Malah', ar: 'أحمد الملاح' },
    'team-role': { en: 'CEO & Founder', ar: 'المدير التنفيذي والمؤسس' },
    'team-desc': { en: 'Ahmed founded ZAINSTEIN to deliver innovative digital products and lead advanced technology projects, fusing engineering rigor with creative ambition.', ar: 'أسس أحمد شركة ZAINSTEIN لتقديم منتجات رقمية مبتكرة وقيادة مشاريع تكنولوجيا متقدمة، دامجاً بين الدقة الهندسية والطموح الإبداعي.' },
    'contact-title': { en: 'Connect', ar: 'تواصل معي' },
    'contact-init': { en: 'Initialize Transmission', ar: 'بدء الإرسال' },
    'contact-name': { en: 'Name', ar: 'الاسم' },
    'contact-email': { en: 'Email', ar: 'البريد الإلكتروني' },
    'contact-msg': { en: 'Message', ar: 'الرسالة' },
    'contact-send': { en: 'Send Message', ar: 'إرسال الرسالة' },
    'footer-tagline': { en: 'Crafted with ❤️ in 2026 — Where code meets creativity', ar: 'صُنع في 2026 — حيث يلتقي الإبداع بالبرمجة' },
    'footer-copy': { en: '&copy; 2026 ZAINSTEIN. All rights reserved.', ar: '&copy; 2026 زينشتاين. جميع الحقوق محفوظة.' },
    'chat-title': { en: 'Ask Ahmed AI', ar: 'مساعد أحمد الذكي' },
    'chat-welcome': { en: "System Online. How can I assist you with Ahmed's portfolio or Zainstein services today?", ar: 'النظام متصل. كيف يمكنني مساعدتك اليوم في معرض أحمد أو خدمات زينشتاين؟' },
    'chat-chip1': { en: 'Who is Ahmed Al-Malah?', ar: 'من هو أحمد الملاح؟' },
    'chat-chip2': { en: 'Tell me about Zainstein.', ar: 'أخبرني عن زينشتاين.' },
    'chat-chip3': { en: 'Can Ahmed build my app?', ar: 'هل يستطيع أحمد بناء تطبيقي؟' },
    'zainstein-tech-services': { en: 'Technology Services', ar: 'خدمات التكنولوجيا' },
    'zainstein-tech-desc': { en: 'Delivering end-to-end digital solutions — from infrastructure to interfaces.', ar: 'تقديم حلول رقمية متكاملة — من البنية التحتية إلى الواجهات.' }
};

// =============================================
// DATA
// =============================================
const ahmedProjects = [
    { title: {en:'Ooredoo Qatar Mobile App', ar:'تطبيق أوريدو قطر'}, tech: {en:'Flutter, Mobile Architecture', ar:'فلاتر، معمارية الجوال'}, role: {en:'Flutter Developer & Team Lead',ar:'مطور فلاتر وقائد فريق'}, desc: {en:'Unified mobile experience for millions of customers. Delivered early with high user rating.', ar:'تجربة هاتف موحدة لملايين العملاء. تم التسليم مبكراً بتقييم عالي للمستخدم.'}, icon: 'fa-mobile-alt' },
    { title: {en:'Zain Kuwait QA Platform',ar:'منصة ضمان الجودة لزين الكويت'}, tech: {en:'QA Tooling, Automated Testing',ar:'أدوات الجودة والاختبار الآلي'}, role: {en:'Software Tester',ar:'مختبر برمجيات'}, desc: {en:'Comprehensive testing protocol and architecture, reducing bug escape rate significantly.',ar:'بروتوكول اختبار معماري شامل، قلل من معدل هروب الأخطاء بشكل كبير.'}, icon: 'fa-bug' },
    { title: {en:'Vodafone Egypt Portal',ar:'بوابة فودافون مصر'}, tech: {en:'Web Tech, UI/UX',ar:'تقنيات الويب وواجهة المستخدم'}, role: {en:'Software Developer',ar:'مطور برمجيات'}, desc: {en:'Internal associate management and task portal improving user experience and task completion.',ar:'بوابة إدارة المهام الداخلية لتحسين تجربة المستخدم وإنجاز المهام.'}, icon: 'fa-laptop-code' },
    { title: {en:'Google Advanced AI Educator',ar:'معلم ذكاء اصطناعي متقدم - جوجل'}, tech: {en:'AI-Based Tools',ar:'أدوات الذكاء الاصطناعي'}, role: {en:'Certified Educator',ar:'معلم معتمد'}, desc: {en:'Personal graphic design and video projects utilizing state-of-the-art AI generation tools.',ar:'مشاريع تصميم وفيديو شخصية باستخدام أحدث أدوات التوليد بالذكاء الاصطناعي.'}, icon: 'fa-robot' },
    { title: {en:'Al Qalaa Design System',ar:'نظام تصميم القلعة'}, tech: {en:'Figma, UI Prototyping',ar:'Figma وتصميم الواجهات'}, role: {en:'Art Director & UI/UX Designer',ar:'مدير فني ومصمم واجهات'}, desc: {en:'Scalable master design system for corporate products.',ar:'نظام تصميم رئيسي قابل للتطوير لمنتجات الشركات.'}, icon: 'fa-layer-group' },
    { title: {en:'YLY Brand Campaigns',ar:'حملات العلامة التجارية YLY'}, tech: {en:'Social Media Management',ar:'إدارة وسائل التواصل الاجتماعي'}, role: {en:'Social Media & Graphic Design Officer',ar:'مسؤول السوشيال ميديا وتصميم الجرافيك'}, desc: {en:'Designed and managed social media content and visual direction across 3 seasons for Ministry of Youth and Sports.',ar:'تصميم وإدارة محتوى السوشيال ميديا والتوجيه البصري عبر 3 مواسم لوزارة الشباب والرياضة.'}, icon: 'fa-bullhorn' },
    { title: {en:'Ooredoo Qatar Digital Content',ar:'المحتوى الرقمي لأوريدو قطر'}, tech: {en:'Graphic Design, Content Creation',ar:'تصميم جرافيك وإنتاج المحتوى'}, role: {en:'Graphic Designer & Content Creator',ar:'مصمم جرافيك وصانع محتوى'}, desc: {en:'Creative visuals for digital platforms, aligning engaging content with corporate brand identity and social goals.',ar:'عناصر بصرية وإبداعية للمنصات الرقمية، توائم المحتوى الجذاب مع هوية الشركة.'}, icon: 'fa-palette' },
    { title: {en:'Al Ahly Brand Campaign',ar:'حملة العلامة التجارية للأهلي'}, tech: {en:'Graphic Design, Motion Graphics',ar:'تصميم جرافيك وموشن جرافيك'}, role: {en:'Creative Designer',ar:'مصمم إبداعي'}, desc: {en:'Digital asset creation and high-visibility branding with massive engagement and viral reach.',ar:'إنشاء أصول رقمية وعلامة تجارية عالية الوضوح بتفاعل هائل وانتشار واسع.'}, icon: 'fa-star' },
];

const zainsteinProjects = [
    { title: {en:'Brand Identity Systems',ar:'أنظمة هوية العلامة التجارية'}, tech: {en:'Adobe Creative Suite',ar:'مجموعة أدوبي الإبداعية'}, role: {en:'Art Direction',ar:'التوجيه الفني'}, desc: {en:'Comprehensive corporate identity design including logo synthesis, typography guidelines, and brand books.',ar:'تصميم شامل لهوية الشركات يتضمن تركيب الشعار وإرشادات الطباعة والكتب التعريفية للعلامة التجارية.'}, icon: 'fa-book-open' },
    { title: {en:'Social Media Strategy',ar:'استراتيجية وسائل التواصل الاجتماعي'}, tech: {en:'Content Planning',ar:'تخطيط المحتوى'}, role: {en:'Digital Marketing',ar:'التسويق الرقمي'}, desc: {en:'End-to-end social media campaign management driving viral engagement and high audience retention.',ar:'إدارة كاملة لحملات وسائل التواصل الاجتماعي لدفع التفاعل والاحتفاظ العالي بالجمهور.'}, icon: 'fa-share-nodes' },
    { title: {en:'UI/UX Web Interfaces',ar:'واجهات المستخدم للويب'}, tech: {en:'Figma, UI Design',ar:'Figma وتصميم الواجهات'}, role: {en:'Product Design',ar:'تصميم المنتج'}, desc: {en:'High-conversion landing pages and application interfaces focused on user experience and modern aesthetics.',ar:'صفحات هبوط عالية التحويل وواجهات تطبيقات تركز على تجربة المستخدم والجماليات الحديثة.'}, icon: 'fa-desktop' },
    { title: {en:'Cinematic Video Editing',ar:'تحرير فيديو سينمائي'}, tech: {en:'DaVinci Resolve, Premiere Pro',ar:'DaVinci Resolve, Premiere Pro'}, role: {en:'Motion Graphics',ar:'موشن جرافيك'}, desc: {en:'Professional color grading, audio mixing, and motion graphics for commercial advertisement.',ar:'تدرج ألوان احترافي ومزج صوتي ورسومات متحركة للإعلانات التجارية.'}, icon: 'fa-film' },
];

// New ZAINSTEIN Technology Services
const zainsteinServices = [
    {
        title: { en: 'Web Development', ar: 'تطوير الويب' },
        role: { en: 'Web Solutions', ar: 'حلول الويب' },
        desc: {
            en: 'Design and development of modern, responsive websites — from high-performance business sites and landing pages to custom web platforms built for scale.',
            ar: 'تصميم وتطوير مواقع الويب الحديثة والمتجاوبة — من مواقع الأعمال عالية الأداء وصفحات الهبوط إلى المنصات المخصصة المبنية للتوسع.'
        },
        icon: 'fa-globe',
        tags: { en: ['HTML / CSS / JS', 'React', 'Next.js', 'SEO', 'Performance'], ar: ['HTML / CSS / JS', 'React', 'Next.js', 'تحسين محركات البحث', 'الأداء'] }
    },
    {
        title: { en: 'Systems Development', ar: 'تطوير الأنظمة' },
        role: { en: 'Custom Digital Systems', ar: 'أنظمة رقمية مخصصة' },
        desc: {
            en: 'Development of tailor-made digital systems for businesses and organizations, including workflow automation and internal management platforms.',
            ar: 'تطوير أنظمة رقمية مخصصة للشركات والمؤسسات، تشمل أتمتة سير العمل ومنصات الإدارة الداخلية.'
        },
        icon: 'fa-server',
        tags: { en: ['Custom Software', 'Automation', 'APIs', 'Database Design'], ar: ['برمجيات مخصصة', 'أتمتة', 'واجهات برمجية', 'تصميم قواعد البيانات'] }
    },
    {
        title: { en: 'Network Systems', ar: 'أنظمة الشبكات' },
        role: { en: 'Infrastructure & Security', ar: 'البنية التحتية والأمن' },
        desc: {
            en: 'Design and implementation of enterprise-grade network systems, secure infrastructure setup, and comprehensive network management solutions.',
            ar: 'تصميم وتنفيذ أنظمة الشبكات على مستوى المؤسسات، وإعداد البنية التحتية الآمنة، وحلول إدارة الشبكات الشاملة.'
        },
        icon: 'fa-network-wired',
        tags: { en: ['Network Design', 'Security', 'Cloud', 'Monitoring'], ar: ['تصميم الشبكات', 'الأمن', 'الحوسبة السحابية', 'المراقبة'] }
    },
    {
        title: { en: 'Accounting Systems', ar: 'أنظمة المحاسبة' },
        role: { en: 'Financial Management', ar: 'الإدارة المالية' },
        desc: {
            en: 'Development and integration of accounting and financial management systems — custom solutions for business operations, financial tracking, and reporting.',
            ar: 'تطوير ودمج أنظمة المحاسبة وإدارة الموارد المالية — حلول مخصصة للعمليات التجارية وتتبع المالية وإعداد التقارير.'
        },
        icon: 'fa-calculator',
        tags: { en: ['Invoicing', 'Reporting', 'ERP Integration', 'Payroll'], ar: ['الفواتير', 'التقارير', 'تكامل ERP', 'كشوف الرواتب'] }
    },
    {
        title: { en: 'Mobile Applications', ar: 'تطبيقات الجوال' },
        role: { en: 'Cross-Platform Apps', ar: 'تطبيقات متعددة المنصات' },
        desc: {
            en: 'Cross-platform mobile app development using Flutter and Dart, delivering native-quality experiences on both iOS and Android from a single codebase.',
            ar: 'تطوير تطبيقات الجوال متعددة المنصات باستخدام Flutter وDart، مع تجربة مستخدم بجودة أصلية على iOS وAndroid من قاعدة كود واحدة.'
        },
        icon: 'fa-mobile-screen-button',
        tags: { en: ['Flutter', 'Dart', 'iOS', 'Android', 'APIs'], ar: ['Flutter', 'Dart', 'iOS', 'Android', 'واجهات برمجية'] }
    },
    {
        title: { en: 'AI & Automation', ar: 'الذكاء الاصطناعي والأتمتة' },
        role: { en: 'Smart Solutions', ar: 'حلول ذكية' },
        desc: {
            en: 'Integration of AI-powered tools and automation pipelines into business workflows, from prompt engineering and AI content generation to intelligent data processing.',
            ar: 'دمج أدوات الذكاء الاصطناعي وخطوط الأتمتة في سير العمل، من هندسة الأوامر وتوليد المحتوى إلى معالجة البيانات الذكية.'
        },
        icon: 'fa-brain',
        tags: { en: ['LLMs', 'Prompt Engineering', 'AI APIs', 'Automation'], ar: ['نماذج اللغة', 'هندسة الأوامر', 'واجهات الذكاء الاصطناعي', 'الأتمتة'] }
    },
];

const zainsteinStats = [
    { label: {en:'Years Experience',ar:'سنوات خبرة'}, count: 4, suffix: '+' },
    { label: {en:'Campaigns Led',ar:'حملات تم قيادتها'}, count: 50, suffix: '+' },
    { label: {en:'Brand Visuals',ar:'تصاميم بصرية'}, count: 500, suffix: '+' },
    { label: {en:'Client Satisfaction',ar:'رضا العملاء'}, count: 99, suffix: '%' },
];

const skillsData = [
    { 
        category: {en:'Engine / Development',ar:'التطوير والبرمجة'}, 
        items: [
            {en:'Flutter & Mobile Apps',ar:'فلاتر وتطبيقات الجوال', percent: 95, logos: ['devicon-flutter-plain colored', 'devicon-android-plain colored']},
            {en:'Frontend (HTML, CSS, JS)',ar:'تطوير الواجهات الامامية', percent: 95, logos: ['devicon-html5-plain colored', 'devicon-css3-plain colored', 'devicon-javascript-plain colored']}, 
            {en:'React & Vite',ar:'رياكت وڤيت', percent: 90, logos: ['devicon-react-original colored', 'devicon-vite-original colored']},
            {en:'Prompt Engineering & AI',ar:'هندسة الأوامر والذكاء الاصطناعي', percent: 97, logos: ['fas fa-brain neon-red-text']}
        ], 
        icon: 'fa-code' 
    },
    { 
        category: {en:'Testing & QA',ar:'الاختبار وضمان الجودة'}, 
        items: [
            {en:'Manual & Automated Testing',ar:'الاختبار اليدوي والآلي', percent: 90, logos: ['fas fa-vial neon-red-text']}, 
            {en:'Quality Assurance',ar:'ضمان الجودة', percent: 95, logos: ['fas fa-check-double neon-red-text']}
        ], 
        icon: 'fa-bug' 
    },
    { 
        category: {en:'Design & UI/UX',ar:'التصميم وتجربة المستخدم'}, 
        items: [
            {en:'UI/UX & Graphic Design',ar:'تصميم الواجهات وتجربة المستخدم', percent: 98, logos: ['devicon-figma-plain colored', 'devicon-xd-plain colored']}, 
            {en:'Photoshop / Illustrator',ar:'فوتوشوب / اليستريتور', percent: 95, logos: ['devicon-photoshop-plain colored', 'devicon-illustrator-plain colored']}
        ], 
        icon: 'fa-bezier-curve' 
    }
];

const toolkitData = [
    {en: 'HTML5', ar: 'HTML5', logo: 'devicon-html5-plain colored'},
    {en: 'CSS3', ar: 'CSS3', logo: 'devicon-css3-plain colored'},
    {en: 'JavaScript', ar: 'جافاسكربت', logo: 'devicon-javascript-plain colored'},
    {en: 'React', ar: 'رياكت', logo: 'devicon-react-original colored'},
    {en: 'Git', ar: 'Git', logo: 'devicon-git-plain colored'},
    {en: 'VS Code', ar: 'VS Code', logo: 'devicon-vscode-plain colored'},
    {en: 'Photoshop', ar: 'فوتوشوب', logo: 'devicon-photoshop-plain colored'},
    {en: 'QA Tools', ar: 'أدوات الجودة', logo: 'fas fa-shield-halved neon-red-text'}
];

// =============================================
// LANGUAGE
// =============================================
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    const isAr = lang === 'ar';
    document.documentElement.dir = isAr ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[key] && translations[key][lang]) {
            el.innerHTML = translations[key][lang];
        }
    });

    // Toggle .en-text / .ar-text visibility
    document.querySelectorAll('.en-text').forEach(el => el.style.display = isAr ? 'none' : '');
    document.querySelectorAll('.ar-text').forEach(el => el.style.display = isAr ? '' : 'none');

    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) langBtn.innerText = isAr ? 'ع | EN' : 'EN | ع';

    const chatInput = document.getElementById('chat-input');
    if (chatInput) chatInput.placeholder = isAr ? 'اكتب أمرًا...' : 'Type a command...';

    renderSkills();
    renderToolkit();
    renderProjects();
    renderStats();
    renderServices();
}

// =============================================
// DEVICE DETECTION
// =============================================
function detectDevice() {
    const w = window.innerWidth;
    const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    const html = document.documentElement;

    html.classList.remove('device-mobile', 'device-tablet', 'device-desktop');

    if (w <= 767 || (isTouch && w <= 900)) {
        html.classList.add('device-mobile');
        html.dataset.device = 'mobile';
        // Reduce spider canvas nodes on mobile
        document.documentElement.style.setProperty('--canvas-node-divisor', '30000');
    } else if (w <= 1099 || (isTouch && w <= 1200)) {
        html.classList.add('device-tablet');
        html.dataset.device = 'tablet';
        document.documentElement.style.setProperty('--canvas-node-divisor', '18000');
    } else {
        html.classList.add('device-desktop');
        html.dataset.device = 'desktop';
        document.documentElement.style.setProperty('--canvas-node-divisor', '14000');
    }
}


// =============================================
document.addEventListener('DOMContentLoaded', () => {
    // Custom cursor
    initCustomCursor();

    // Device detection
    detectDevice();
    window.addEventListener('resize', detectDevice);

    // Language
    setLanguage(currentLang);

    const langToggleBtn = document.getElementById('lang-toggle');
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            setLanguage(currentLang === 'en' ? 'ar' : 'en');
        });
    }

    // Theme
    const themeToggle = document.getElementById('theme-toggle');
    const rootEl = document.documentElement;
    if (localStorage.getItem('theme') === 'light') {
        rootEl.classList.add('light-mode');
        if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            rootEl.classList.toggle('light-mode');
            const isLight = rootEl.classList.contains('light-mode');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
            themeToggle.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        });
    }

    // ── GoTS Cinematic Intro (always on fresh session) ──
    const hasSeenIntro = sessionStorage.getItem('gots-intro-seen');
    if (!hasSeenIntro) {
        runGoTSIntro();
    } else {
        const introEl = document.getElementById('intro-sequence');
        if (introEl) introEl.style.display = 'none';
        document.body.classList.remove('no-scroll');
        afterIntroInit();
    }

    // Contact form
    const form = document.querySelector('.cinematic-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('.submit-btn');
            btn.innerHTML = '<i class="fas fa-check"></i> Message Sent';
            btn.style.borderLeftColor = '#2a7a2a';
            btn.style.color = '#2a7a2a';
        });
    }
    initSoundSystem();
});

// =============================================
// CUSTOM CURSOR
// =============================================
function initCustomCursor() {
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');
    if (!cursor || !follower) return;

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', e => {
        mouseX = e.clientX; mouseY = e.clientY;
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });

    function animateFollower() {
        followerX += (mouseX - followerX) * 0.12;
        followerY += (mouseY - followerY) * 0.12;
        follower.style.left = followerX + 'px';
        follower.style.top = followerY + 'px';
        requestAnimationFrame(animateFollower);
    }
    animateFollower();

    document.querySelectorAll('a, button, .chip, .nav-link, .skill-card-3d').forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
}

// =============================================
// CINEMATIC INTRO SEQUENCE
// =============================================
function runIntroSequence() {
    // Start other systems in background (except scrollReveal — wait until intro ends)
    initNavbar();
    init3DCards();
    initChatbot();
    spawnParticles();

    const photoBlock = document.getElementById('intro-photo-block');
    const nameBlock = document.getElementById('intro-name-block');
    const logoBlock = document.getElementById('intro-logo-block');
    const zainsLogo = document.getElementById('intro-zain-logo');
    const logoGlowRing = logoBlock ? logoBlock.querySelector('.logo-glow-ring') : null;
    const logoSweep  = logoBlock ? logoBlock.querySelector('.logo-light-sweep') : null;
    const nameStreak = photoBlock ? photoBlock.querySelector('.name-light-streak') : null;
    const welcomeBlock = document.getElementById('intro-welcome-block');
    const typingTextEl = document.getElementById('intro-typing-text');
    const taglineEl = document.getElementById('intro-tagline');

    // Intro particle canvas
    initIntroParticles();

    // ---- Timeline ----

    // t=0.1s — Photo appears
    setTimeout(() => {
        if (photoBlock) photoBlock.classList.add('reveal');
    }, 100);

    // t=0.5s — Name appears + streak
    setTimeout(() => {
        if (nameBlock) {
            nameBlock.classList.add('reveal');
            setTimeout(() => {
                if (nameStreak) nameStreak.classList.add('sweep');
            }, 300);
        }
    }, 500);

    // t=0.8s — Logo appears + ring + sweep + settle
    setTimeout(() => {
        if (logoBlock) logoBlock.classList.add('reveal');
        setTimeout(() => {
            if (zainsLogo) zainsLogo.classList.add('settle');
            if (logoGlowRing) logoGlowRing.classList.add('expand');
        }, 100);
        setTimeout(() => {
            if (logoSweep) logoSweep.classList.add('sweep');
        }, 500);
        setTimeout(() => {
            if (zainsLogo) {
                zainsLogo.classList.remove('settle');
                zainsLogo.classList.add('stable');
            }
        }, 1200);
    }, 800);

    // t=1.8s — Welcome typing
    setTimeout(() => {
        if (welcomeBlock) welcomeBlock.classList.add('reveal');
        const isAr = currentLang === 'ar';
        const msg = isAr
            ? 'مرحباً بكم في بورتفوليو أحمد الملاح'
            : "Welcome to Ahmed Al-Malah's Portfolio";
        typeText(typingTextEl, msg, 45, () => {
            // After typing done — show tagline
            setTimeout(() => {
                if (taglineEl) taglineEl.classList.add('reveal');
            }, 200);
        });
    }, 1800);

    // t=4.5s — Fade out intro, reveal main site
    setTimeout(() => {
        const introEl = document.getElementById('intro-sequence');
        if (introEl) {
            introEl.style.opacity = '0';
            introEl.style.transition = 'opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1)';
            setTimeout(() => {
                introEl.style.display = 'none';
                document.body.classList.remove('no-scroll');
                initScrollReveal();
            }, 1200);
        }
    }, 4500);
}

// Typing animation helper
function typeText(el, text, speed, onDone) {
    if (!el) { if (onDone) onDone(); return; }
    el.textContent = '';
    let i = 0;
    const isRTL = document.documentElement.dir === 'rtl';
    if (isRTL) el.style.direction = 'rtl';

    const tick = () => {
        if (i < text.length) {
            el.textContent += text[i];
            i++;
            setTimeout(tick, speed);
        } else {
            if (onDone) onDone();
        }
    };
    tick();
}

// Intro particle canvas
function initIntroParticles() {
    const canvas = document.getElementById('intro-particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const particles = [];
    for (let i = 0; i < 60; i++) {
        particles.push({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            r: Math.random() * 1.5 + 0.5,
            vx: (Math.random() - 0.5) * 0.4,
            vy: -Math.random() * 0.5 - 0.2,
            o: Math.random() * 0.5 + 0.1,
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255,26,26,${p.o})`;
            ctx.fill();
            p.x += p.vx; p.y += p.vy;
            if (p.y < 0) p.y = canvas.height;
            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
        });
        requestAnimationFrame(draw);
    }
    draw();
}

// =============================================
// SPIDER CANVAS BACKGROUND
// =============================================
function initSpiderCanvas() {
    const canvas = document.getElementById('spider-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height;
    let nodes = [];
    const connectionDistance = 150;
    let mouse = { x: -1000, y: -1000 };

    function resize() { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; }
    window.addEventListener('resize', resize);
    resize();

    document.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

    const numNodes = Math.floor((window.innerWidth * window.innerHeight) / 14000);
    for (let i = 0; i < numNodes; i++) {
        nodes.push({ x: Math.random() * width, y: Math.random() * height, vx: (Math.random()-0.5)*0.4, vy: (Math.random()-0.5)*0.4 });
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < nodes.length; i++) {
            let n = nodes[i];
            n.x += n.vx; n.y += n.vy;
            if (n.x < 0) n.x = width; if (n.x > width) n.x = 0;
            if (n.y < 0) n.y = height; if (n.y > height) n.y = 0;

            const dx = mouse.x - n.x, dy = mouse.y - n.y;
            const dist = Math.sqrt(dx*dx + dy*dy);
            if (dist < 180) {
                const force = (180 - dist) / 180;
                n.x -= (dx/dist) * force * 1.8;
                n.y -= (dy/dist) * force * 1.8;
                ctx.beginPath(); ctx.arc(n.x, n.y, 2 + force*2, 0, Math.PI*2);
                ctx.fillStyle = `rgba(255,26,26,${force*0.7})`; ctx.fill();
            }

            for (let j = i+1; j < nodes.length; j++) {
                let n2 = nodes[j];
                const ddx = n.x-n2.x, ddy = n.y-n2.y;
                const ddist = Math.sqrt(ddx*ddx + ddy*ddy);
                if (ddist < connectionDistance) {
                    const opacity = 1 - (ddist/connectionDistance);
                    ctx.beginPath(); ctx.moveTo(n.x, n.y); ctx.lineTo(n2.x, n2.y);
                    const nearMouse = dist < 180 && Math.sqrt(Math.pow(mouse.x-n2.x,2)+Math.pow(mouse.y-n2.y,2)) < 180;
                    ctx.strokeStyle = nearMouse ? `rgba(255,26,26,${opacity*0.8})` : `rgba(255,26,26,${opacity*0.15})`;
                    ctx.lineWidth = nearMouse ? opacity*1.5 : opacity*0.4;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(draw);
    }
    draw();
}

// =============================================
// AMBIENT LEAF DRIFTING SYSTEM (3D DEPTH OF FIELD)
// =============================================
function spawnParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    container.innerHTML = '';

    const maxLeaves = 40; // elegant density of falling leaves

    const mapleSvg = `
        <svg viewBox="0 0 24 24">
            <path d="M12,2A1,1,0,0,0,11.2,2.6L9.4,5.3,7.5,3.4A1,1,0,0,0,5.8,4.1l.6,3.4L3.1,6.8a1,1,0,0,0-1,1.7l3,2.4-2.8,1.4a1,1,0,0,0-.4,1.4A1,1,0,0,0,2.6,14l3.2.6L4.1,17.4A1,1,0,0,0,5.5,18.8l2.6-1.8L8,19.8A1,1,0,0,0,9.4,21l1.8-2.6.6,3.2a1,1,0,0,0,2,0l.6-3.2L16.2,21A1,1,0,0,0,17.6,19.8l-.1-2.8,2.6,1.8A1,1,0,0,0,21.5,17.4l-1.7-2.8,3.2-.6a1,1,0,0,0,.7-.3,1,1,0,0,0-.3-1.5l-2.8-1.4,3-2.4a1,1,0,0,0-1-1.7l-3.3.7.6-3.4A1,1,0,0,0,18.2,3.4l-1.9,1.9L14.5,2.6A1,1,0,0,0,13.7,2.1Z"/>
        </svg>`;

    for (let i = 0; i < maxLeaves; i++) {
        const leaf = document.createElement('div');
        leaf.className = 'leaf-particle';
        leaf.innerHTML = mapleSvg;
        
        // Randomize maple leaf shades of red (crimson, deep red, gold-red, etc.)
        const reds = ['var(--neon-red)', '#8B0000', '#A61C1C', '#8C1414', '#5C0A0A'];
        leaf.style.color = reds[Math.floor(Math.random() * reds.length)];

        // Set size & depth of fieldcam blur
        const depth = Math.random();
        let scale = 0.5 + Math.random() * 0.8;
        let blurVal = 0;
        let delay = Math.random() * -25; // negative delay so they start already scattered
        let duration = 12 + Math.random() * 8; // swaying and falling time
        let zIndex = 12;

        if (depth < 0.25) {
            // Far background: small, slow, slightly blurred
            scale = 0.35 + Math.random() * 0.25;
            blurVal = 1;
            duration += 6;
            zIndex = 5;
        } else if (depth > 0.85) {
            // Foreground: huge, fast, highly blurred (cinematic closeup!)
            scale = 1.35 + Math.random() * 0.6;
            blurVal = 3.5;
            duration -= 4;
            zIndex = 20;
        }

        const size = 22 * scale;
        leaf.style.width = size + 'px';
        leaf.style.height = size + 'px';
        leaf.style.left = Math.random() * 100 + 'vw';
        leaf.style.zIndex = zIndex;
        
        // Apply CSS animation properties directly
        leaf.style.animation = `fallAndSway ${duration}s linear infinite`;
        leaf.style.animationDelay = `${delay}s`;
        
        if (blurVal > 0) {
            leaf.style.filter = `blur(${blurVal}px)`;
        }

        container.appendChild(leaf);
    }
}

// =============================================
// NAVBAR
// =============================================
function initNavbar() {
    const nav = document.getElementById('navbar');
    if (!nav) return;

    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 50);
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const isOpen = navLinks.style.display === 'flex';
            if (isOpen) {
                navLinks.style.display = 'none';
            } else {
                Object.assign(navLinks.style, {
                    display: 'flex', flexDirection: 'column',
                    position: 'absolute', top: '100%', left: '0',
                    width: '100%', background: 'rgba(5,5,8,0.97)',
                    padding: '20px', alignItems: 'center', gap: '15px',
                    zIndex: '999', borderBottom: '1px solid var(--glass-border)',
                });
            }
        });

        // Close on link click
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => { navLinks.style.display = 'none'; });
        });
    }
}

// =============================================
// SCROLL REVEAL
// =============================================
function initScrollReveal() {
    // Reveal [data-reveal] elements on scroll
    const reveals = document.querySelectorAll('[data-reveal]');
    const sectionEls = document.querySelectorAll('section');

    // Instant reveal for elements already in viewport on load
    reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('revealed');
            el.classList.add('is-revealed');
            el.classList.add('in-view');
        }
    });

    sectionEls.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('in-view');
        }
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                entry.target.classList.add('is-revealed');
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });

    reveals.forEach(el => observer.observe(el));
    sectionEls.forEach(el => observer.observe(el));

    // Stagger toolkit items
    const toolkitObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const items = entry.target.querySelectorAll('.toolkit-item');
                items.forEach((item, i) => {
                    setTimeout(() => item.classList.add('visible'), i * 80);
                });
                toolkitObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05 });

    const toolkit = document.getElementById('toolkit-container');
    if (toolkit) toolkitObserver.observe(toolkit);
}


// =============================================
// RENDER SKILLS
// =============================================
function renderSkills() {
    const container = document.getElementById('skills-container');
    const skillsSec = document.getElementById('skills');
    const parentRevealed = skillsSec && skillsSec.classList.contains('is-revealed');
    if (!container) return;
    container.innerHTML = '';
    skillsData.forEach((skillSet, i) => {
        const card = document.createElement('div');
        card.className = 'skill-card-3d';
        card.setAttribute('data-reveal', 'fade-up');
        if (parentRevealed) card.classList.add('is-revealed');
        card.style.transitionDelay = `${i * 0.15}s`;

        const itemsHtml = skillSet.items.map(item => `
            <li class="skill-item-bar" style="margin-bottom: 1.2rem; position: relative;">
                <div class="skill-info" style="display: flex; justify-content: space-between; font-size: 0.9rem; font-weight: 500; margin-bottom: 6px; color: var(--text-white); align-items: center;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 1.15rem; display: flex; gap: 4px;">
                            ${item.logos.map(l => `<i class="${l}"></i>`).join('')}
                        </span>
                        <span>${item[currentLang]}</span>
                    </div>
                    <span class="neon-red-text">${item.percent}%</span>
                </div>
                <div class="progress-bar-bg" style="width: 100%; height: 8px; background: rgba(255, 255, 255, 0.1); border-radius: 4px; overflow: hidden; position: relative; box-shadow: inset 0 1px 3px rgba(0,0,0,0.5);">
                    <div class="progress-bar-fill" style="--percent: ${item.percent}%;"></div>
                </div>
            </li>
        `).join('');
        card.innerHTML = `
            <div class="skill-card-inner">
                <div class="skill-card-front float-anim">
                    <i class="fas ${skillSet.icon} skill-icon-large"></i>
                    <h3 class="skill-category-title">${skillSet.category[currentLang]}</h3>
                    <p style="color:var(--text-muted);font-size:0.85rem;">${currentLang==='en'?'Hover to Inspect':'مرر للاستكشاف'}</p>
                </div>
                <div class="skill-card-back">
                    <h4 class="neon-red-text" style="margin-bottom:1.5rem;border-bottom:1px solid var(--neon-red);padding-bottom:0.5rem;">${skillSet.category[currentLang]}</h4>
                    <ul class="skill-list" style="padding: 0; list-style: none;">${itemsHtml}</ul>
                </div>
            </div>`;
        container.appendChild(card);
    });
}

function renderToolkit() {
    const container = document.getElementById('toolkit-container');
    const skillsSec = document.getElementById('skills');
    const parentRevealed = skillsSec && skillsSec.classList.contains('is-revealed');
    if (!container) return;
    container.innerHTML = '';
    toolkitData.forEach((item, i) => {
        const chip = document.createElement('div');
        chip.className = 'toolkit-item';
        chip.setAttribute('data-reveal', 'fade-up');
        if (parentRevealed) chip.classList.add('is-revealed');
        chip.style.transitionDelay = `${i * 0.08}s`;
        
        if (document.documentElement.dir === 'rtl') {
            chip.innerHTML = `<span>${item[currentLang]}</span> <i class="${item.logo}" style="margin-right:8px; font-size:1.15rem; vertical-align:middle;"></i>`;
        } else {
            chip.innerHTML = `<i class="${item.logo}" style="margin-right:8px; font-size:1.15rem; vertical-align:middle;"></i> <span>${item[currentLang]}</span>`;
        }
        container.appendChild(chip);
    });
}

// =============================================
// RENDER PROJECTS
// =============================================
function renderProjects() {
    const ahmedContainer = document.getElementById('ahmed-projects-container');
    const zainContainer = document.getElementById('zainstein-projects-container');
    if (ahmedContainer) ahmedContainer.innerHTML = '';
    if (zainContainer) zainContainer.innerHTML = '';

    const makeCard = (proj, i, container) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'project-card-wrapper';
        wrapper.setAttribute('data-reveal', 'fade-up');
        wrapper.style.transitionDelay = `${i * 0.08}s`;
        const card = document.createElement('div');
        card.className = 'project-card-3d';
        card.innerHTML = `
            <i class="fas ${proj.icon} project-icon"></i>
            <h3 class="project-title">${proj.title[currentLang]}</h3>
            <p class="project-role">${proj.role[currentLang]}</p>
            <p class="project-desc">${proj.desc[currentLang]}</p>`;
        wrapper.appendChild(card); container.appendChild(wrapper);
    };

    if (ahmedContainer) ahmedProjects.forEach((p, i) => makeCard(p, i, ahmedContainer));
    if (zainContainer)  zainsteinProjects.forEach((p, i) => makeCard(p, i, zainContainer));
}

// =============================================
// RENDER STATS
// =============================================
function renderStats() {
    const container = document.getElementById('stats-container');
    if (!container) return;
    container.innerHTML = '';
    zainsteinStats.forEach(stat => {
        const div = document.createElement('div');
        div.className = 'stat-item';
        div.innerHTML = `
            <div class="stat-number glow-red-text" data-target="${stat.count}">0</div>
            <div class="stat-suffix glow-red-text" style="font-size:1.5rem;font-weight:bold;line-height:0;margin-bottom:1rem;">${stat.suffix}</div>
            <div class="stat-label">${stat.label[currentLang]}</div>`;
        container.appendChild(div);
    });

    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            document.querySelectorAll('.stat-number').forEach(num => {
                const target = +num.getAttribute('data-target');
                let count = 0;
                const inc = Math.max(1, target / 50);
                const update = () => {
                    count += inc;
                    if (count < target) { num.innerText = Math.ceil(count); requestAnimationFrame(update); }
                    else { num.innerText = target; }
                };
                update();
            });
            observer.disconnect();
        }
    });
    observer.observe(container);
}

// =============================================
// RENDER SERVICES (Zainstein Tech Services)
// =============================================
function renderServices() {
    const container = document.getElementById('zainstein-services-container');
    if (!container) return;
    container.innerHTML = '';

    zainsteinServices.forEach((svc, i) => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.setAttribute('data-reveal', 'fade-up');
        card.style.transitionDelay = `${i * 0.07}s`;

        const tagsHtml = (svc.tags[currentLang] || []).map(tag =>
            `<span class="service-tag">${tag}</span>`
        ).join('');

        card.innerHTML = `
            <i class="fas ${svc.icon} service-card-icon"></i>
            <h3 class="service-card-title">${svc.title[currentLang]}</h3>
            <p class="service-card-role">${svc.role[currentLang]}</p>
            <p class="service-card-desc">${svc.desc[currentLang]}</p>
            <div class="service-card-tags">${tagsHtml}</div>`;
        container.appendChild(card);
    });
}

// =============================================
// TOUCH TAP-TO-FLIP SKILL CARDS
// =============================================
function initTouchFlip() {
    const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    if (!isTouch) return;
    document.querySelectorAll('.skill-card-3d').forEach(card => {
        let flipped = false;
        card.addEventListener('click', () => {
            flipped = !flipped;
            card.classList.toggle('flipped', flipped);
            card.querySelector('.skill-card-inner').style.transform =
                flipped ? 'rotateY(180deg) scale(1.03)' : '';
        });
    });
}

// =============================================
// 3D CARD HOVER
// =============================================

function init3DCards() {
    const wrappers = document.querySelectorAll('.project-card-wrapper, .about-content');
    wrappers.forEach(wrapper => {
        const card = wrapper.querySelector('.project-card-3d') || wrapper;
        if (!card) return;
        wrapper.addEventListener('mousemove', e => {
            const rect = wrapper.getBoundingClientRect();
            const x = e.clientX - rect.left, y = e.clientY - rect.top;
            const cx = rect.width/2, cy = rect.height/2;
            const rotX = ((y-cy)/cy) * -8, rotY = ((x-cx)/cx) * 8;
            card.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
            card.style.boxShadow = `${-rotY}px ${rotX}px 35px rgba(139,0,0,0.25), 0 10px 40px rgba(0,0,0,0.95)`;
        });
        wrapper.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateX(0) rotateY(0)';
            card.style.boxShadow = ''; /* Restore stylesheet shadow */
        });
    });
}

// =============================================
// AI CHATBOT
// =============================================
function initChatbot() {
    const btn = document.getElementById('chatbot-btn');
    const panel = document.getElementById('chatbot-panel');
    const close = document.getElementById('close-chatbot');
    const input = document.getElementById('chat-input');
    const send = document.getElementById('chat-send');
    const body = document.getElementById('chatbot-body');
    const chips = document.querySelectorAll('.chip');
    if (!btn || !panel) return;

    const togglePanel = () => {
        panel.classList.toggle('hidden');
        if (!panel.classList.contains('hidden') && input) input.focus();
    };
    btn.addEventListener('click', togglePanel);
    if (close) close.addEventListener('click', () => panel.classList.add('hidden'));

    const responses = {
        'arabic_greeting': 'مرحباً بك! أنا المساعد الذكي الخاص بأحمد. كيف يمكنني مساعدتك برؤية أعمال التصميم الرسومي وإدارة وسائل التواصل الاجتماعي؟',
        'who': 'Ahmed Al MALAH is a Senior Graphic Designer & Social Media Specialist, Senior Prompt Engineer, Software Developer/Engineer, and Advanced AI User. He has 4+ years of experience and is the Founder of ZAINSTEIN.',
        'education': 'Ahmed is a Senior Computer Science student at Alexandria University, expected to graduate in 2026.',
        'skills': 'Ahmed is highly proficient in Adobe Creative Suite, Flutter, UI/UX Design, and advanced AI Tools.',
        'experience': 'Ahmed worked at Ooredoo Qatar for 8 months and led creative campaigns for YLY across 3 seasons.',
        'certificates': 'He holds Google & Adobe Graphic Design certificates, the Creativa Scholarship, and is a Google Advanced AI Teacher.',
        'contact': 'Reach Ahmed at engmala7112004@gmail.com, +20 106 756 8065, or @ENG_MALA7 on social media.',
        'zainstein': 'ZAINSTEIN is Ahmed\'s brand delivering brand identity, social media strategy, UI/UX, and cinematic video editing services.',
        'default': 'Try asking "Who is Ahmed?", "What are his skills?", "Tell me about Zainstein", or say "مرحبا".'
    };

    const analyze = (text) => {
        const t = text.toLowerCase();
        if (t.includes('مرحبا') || t.includes('اهلا') || t.includes('سلام')) return responses.arabic_greeting;
        if (t.includes('zainstein') || t.includes('زين')) return responses.zainstein;
        if (t.includes('who') || t.includes('ahmed')) return responses.who;
        if (t.includes('edu') || t.includes('university')) return responses.education;
        if (t.includes('skill') || t.includes('adobe')) return responses.skills;
        if (t.includes('exp') || t.includes('work') || t.includes('ooredoo')) return responses.experience;
        if (t.includes('cert') || t.includes('google')) return responses.certificates;
        if (t.includes('contact') || t.includes('email') || t.includes('hire')) return responses.contact;
        return responses.default;
    };

    const appendMsg = (text, isUser=false) => {
        if (!body) return;
        const div = document.createElement('div');
        div.className = `chat-msg ${isUser ? 'user-msg' : 'ai-msg'}`;
        div.innerHTML = `<div class="msg-content">${text}</div>`;
        const suggestions = body.querySelector('.suggestions');
        if (suggestions) body.insertBefore(div, suggestions);
        else body.appendChild(div);
        body.scrollTop = body.scrollHeight;
    };

    const handleSend = (text) => {
        if (!text.trim()) return;
        appendMsg(text, true);
        if (input) input.value = '';
        setTimeout(() => appendMsg(analyze(text), false), 650);
    };

    if (send) send.addEventListener('click', () => handleSend(input.value.trim()));
    if (input) input.addEventListener('keypress', e => { if (e.key === 'Enter') handleSend(input.value.trim()); });
    chips.forEach(chip => chip.addEventListener('click', () => handleSend(chip.innerText)));
}

// =============================================
// FEUDAL JAPAN IMMERSIVE SFX SYSTEM
// =============================================
function initSoundSystem() {
    const windHowl = document.getElementById('sfx-wind-howl');
    const katanaSwoosh = document.getElementById('sfx-katana-swoosh');
    const bambooChime = document.getElementById('sfx-bamboo-chime');

    if (!windHowl || !katanaSwoosh || !bambooChime) return;

    // Set volumes for a comfortable mix
    windHowl.volume = 0.15;
    katanaSwoosh.volume = 0.35;
    bambooChime.volume = 0.45;

    // Start background wind ambience on first user interaction (browser security policy)
    const startAmbience = () => {
        windHowl.play().catch(() => {});
        document.removeEventListener('click', startAmbience);
        document.removeEventListener('scroll', startAmbience);
        document.removeEventListener('touchstart', startAmbience);
    };
    document.addEventListener('click', startAmbience);
    document.addEventListener('scroll', startAmbience);
    document.addEventListener('touchstart', startAmbience);

    // Play swoosh sound on button and interactive hover
    const playSwoosh = () => {
        katanaSwoosh.currentTime = 0;
        katanaSwoosh.play().catch(() => {});
    };
    document.querySelectorAll('.btn, .nav-links a, .theme-toggle, .chatbot-toggle-btn').forEach(btn => {
        btn.addEventListener('mouseenter', playSwoosh);
    });

    // Play bamboo chime sound on card flips and clicks
    const playChime = () => {
        bambooChime.currentTime = 0;
        bambooChime.play().catch(() => {});
    };
    document.querySelectorAll('.skill-card-3d, .project-card-3d, .service-card').forEach(card => {
        card.addEventListener('click', playChime);
        card.addEventListener('mouseenter', playChime);
    });
}

// =============================================
// GHOST OF TSUSHIMA — CINEMATIC INTRO CONTROLLER
// =============================================

function runGoTSIntro() {
    const intro   = document.getElementById('intro-sequence');
    const chars   = document.querySelectorAll('.gots-kanji-char');
    if (!intro) { unlockBody(); return; }

    // Check if already seen this session
    if (sessionStorage.getItem('gots-intro-seen')) {
        intro.style.display = 'none';
        unlockBody();
        return;
    }

    // Lock scrolling while intro plays
    document.body.classList.add('no-scroll');

    // Stamp each of the three Kanji characters (武, 士, 道) sequentially
    // 武 at 1.7s, 士 at 2.0s, 道 at 2.3s
    const stampDelays = [1700, 2000, 2300];
    chars.forEach((char, i) => {
        if (stampDelays[i] !== undefined) {
            setTimeout(() => {
                char.classList.add('stamp');
            }, stampDelays[i]);
        }
    });

    // Trigger Samurai Silhouette Katana Strike & swoosh SFX at exactly 3.8s
    setTimeout(() => {
        const samurai = document.getElementById('gots-samurai-strike');
        if (samurai) {
            samurai.classList.add('strike-active');
        }
        const katanaSwoosh = document.getElementById('sfx-katana-swoosh');
        if (katanaSwoosh) {
            katanaSwoosh.volume = 0.5;
            katanaSwoosh.currentTime = 0;
            katanaSwoosh.play().catch(() => {});
        }
    }, 3800);

    // Auto-exit after full sequence (6.5s total)
    const autoExit = setTimeout(() => exitIntro(intro), 6500);

    // Store the timeout so skip can clear it
    intro._autoExit = autoExit;
}

function exitIntro(intro) {
    if (!intro) intro = document.getElementById('intro-sequence');
    if (!intro || intro.classList.contains('exit')) return;

    if (intro._autoExit) clearTimeout(intro._autoExit);

    intro.classList.add('exit');

    setTimeout(() => {
        intro.style.display = 'none';
        unlockBody();
        sessionStorage.setItem('gots-intro-seen', '1');
        afterIntroInit();
    }, 950);
}

// All site init that runs after intro ends
function afterIntroInit() {
    initNavbar();
    init3DCards();
    initTouchFlip();
    initChatbot();
    initScrollReveal();
    initSoundSystem();
    initAvatarToggle();
}

function initAvatarToggle() {
    const container = document.getElementById('hero-portrait-container');
    const toggleBtn = document.getElementById('avatar-toggle-btn');
    const humanImg = document.querySelector('.portrait-human');
    const samuraiImg = document.querySelector('.portrait-samurai');
    const overlay = document.getElementById('portrait-slash-overlay');
    const sfxKatana = document.getElementById('sfx-katana-swoosh');

    if (!container || !toggleBtn || !humanImg || !samuraiImg || !overlay) return;

    toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // prevent card/container mousemove issues

        // Play swoosh sound
        if (sfxKatana) {
            sfxKatana.currentTime = 0;
            sfxKatana.play().catch(() => {});
        }

        // Trigger red slash-flash overlay animation
        overlay.classList.remove('active');
        void overlay.offsetWidth; // trigger reflow
        overlay.classList.add('active');

        // Swap the avatars after a tiny delay (during the peak of the flash)
        setTimeout(() => {
            const isSamurai = humanImg.classList.contains('hidden-avatar');
            if (isSamurai) {
                humanImg.classList.remove('hidden-avatar');
                samuraiImg.classList.add('hidden-avatar');
                toggleBtn.querySelector('.toggle-icon').innerText = '誉';
            } else {
                humanImg.classList.add('hidden-avatar');
                samuraiImg.classList.remove('hidden-avatar');
                toggleBtn.querySelector('.toggle-icon').innerText = '侍';
            }
        }, 120);
    });
}

function skipIntro() {
    const intro = document.getElementById('intro-sequence');
    exitIntro(intro);
}

function unlockBody() {
    document.body.classList.remove('no-scroll');
}

// Boot the intro immediately on script load
(function() {
    // Clear old cyberpunk intro session key (migration)
    sessionStorage.removeItem('intro-shown');

    const intro = document.getElementById('intro-sequence');
    if (!intro) { return; }

    if (sessionStorage.getItem('gots-intro-seen')) {
        intro.style.display = 'none';
    }
    // runGoTSIntro() will be called from DOMContentLoaded
})();

