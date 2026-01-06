
import { Language, Scheme, Job, Resource } from './types';

export const TRANSLATIONS: Record<string, Record<Language, string>> = {
  welcome: {
    en: "Welcome to Uplift India",
    hi: "अपलिफ्ट इंडिया में आपका स्वागत है",
    ta: "அப்லிஃப்ட் இந்தியாவிற்கு வரவேற்கிறோம்"
  },
  slogan: {
    en: "Together towards No Poverty (SDG 1)",
    hi: "साथ मिलकर गरीबी मुक्त भारत की ओर",
    ta: "வறுமையற்ற இந்தியாவை நோக்கி ஒன்றிணைவோம்"
  },
  loginBtn: {
    en: "Get Started with Phone",
    hi: "फोन के साथ शुरू करें",
    ta: "தொலைபேசி மூலம் தொடங்கவும்"
  },
  home: {
    en: "Home",
    hi: "मुख्य",
    ta: "முகப்பு"
  },
  food: {
    en: "Food & Nutrition",
    hi: "भोजन और पोषण",
    ta: "உணவு மற்றும் ஊட்டச்சத்து"
  },
  health: {
    en: "Healthcare",
    hi: "स्वास्थ्य सेवा",
    ta: "சுகாதார சேவை"
  },
  jobs: {
    en: "Skill & Jobs",
    hi: "कौशल और नौकरी",
    ta: "திறன் மற்றும் வேலைகள்"
  },
  schemes: {
    en: "Govt Schemes",
    hi: "सरकारी योजनाएं",
    ta: "அரசு திட்டங்கள்"
  },
  water: {
    en: "Clean Water",
    hi: "स्वच्छ पानी",
    ta: "சுத்தமான தண்ணீர்"
  },
  assistant: {
    en: "Sahayak (Assistant)",
    hi: "सहायक",
    ta: "சகாயக் (உதவியாளர்)"
  }
};

export const SCHEMES: Scheme[] = [
  {
    id: '1',
    category: 'Money',
    title: { en: "PM-KISAN", hi: "पीएम-किसान", ta: "பிஎம்-கிசான்" },
    description: { 
      en: "Direct income support of ₹6,000 p.a. to farmers.",
      hi: "किसानों को प्रति वर्ष ₹6,000 की प्रत्यक्ष आय सहायता।",
      ta: "விவசாயிகளுக்கு ஆண்டுக்கு ₹6,000 நேரடி வருமான ஆதரவு."
    },
    eligibility: { en: "Landholding farmers", hi: "भूमिधारक किसान", ta: "நிலம் வைத்திருக்கும் விவசாயிகள்" },
    link: "https://pmkisan.gov.in/"
  },
  {
    id: '2',
    category: 'Food',
    title: { en: "PM Garib Kalyan Anna Yojana", hi: "पीएम गरीब कल्याण अन्न योजना", ta: "பிரதான் மந்திரி கரிப் கல்யாண் அன்ன யோஜனா" },
    description: {
      en: "Free food grains to 80 crore people.",
      hi: "80 करोड़ लोगों को मुफ्त खाद्यान्न।",
      ta: "80 கோடி மக்களுக்கு இலவச உணவு தானியங்கள்."
    },
    eligibility: { en: "Ration card holders", hi: "राशन कार्ड धारक", ta: "ரேஷன் கார்டு வைத்திருப்பவர்கள்" },
    link: "https://nfsa.gov.in/"
  },
  {
    id: '3',
    category: 'Job',
    title: { en: "MGNREGA", hi: "मनरेगा", ta: "மகாத்மா காந்தி ஊரக வேலைவாய்ப்பு" },
    description: {
      en: "100 days of guaranteed wage employment.",
      hi: "100 दिनों के गारंटीकृत मजदूरी रोजगार।",
      ta: "100 நாட்கள் உத்தரவாத ஊதிய வேலைவாய்ப்பு."
    },
    eligibility: { en: "Adult rural members", hi: "वयस्क ग्रामीण सदस्य", ta: "வயது வந்த கிராமப்புற உறுப்பினர்கள்" },
    link: "https://nrega.nic.in/"
  }
];

export const JOBS: Job[] = [
  {
    id: 'j1',
    title: { en: "Agricultural Labor", hi: "कृषि मजदूर", ta: "விவசாய தொழிலாளர்" },
    location: { en: "Sonipat, Haryana", hi: "सोनीपत, हरियाणा", ta: "சோனிபட், ஹரியானா" },
    pay: { en: "₹450/day", hi: "₹450/दिन", ta: "₹450/நாள்" },
    type: 'Daily'
  },
  {
    id: 'j2',
    title: { en: "Construction Assistant", hi: "निर्माण सहायक", ta: "கட்டுமான உதவியாளர்" },
    location: { en: "Indore, MP", hi: "इंदौर, मप्र", ta: "இந்தூர், எம்பி" },
    pay: { en: "₹500/day", hi: "₹500/दिन", ta: "₹500/நாள்" },
    type: 'Daily'
  }
];
