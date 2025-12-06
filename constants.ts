
import { Character, Enemy } from './types';

export const CHARACTERS: Character[] = [
  {
    id: 'TANJIRO',
    name: '카마도 탄지로',
    maxHp: 1000,
    maxSp: 100,
    spRecovery: 25,
    color: 'bg-green-600',
    accentColor: 'border-green-800',
    icon: '🌊',
    description: '물과 해의 호흡. 밸런스형',
    skills: [
      {
        id: 'WATER_WHEEL',
        name: '제2형: 물방아',
        damage: 150,
        cost: 30,
        cooldown: 2000,
        description: '공중제비 베기',
        icon: '💧',
        animationColor: 'bg-blue-500'
      },
      {
        id: 'CONSTANT_FLUX',
        name: '제10형: 생생유전',
        damage: 250,
        cost: 50,
        cooldown: 5000,
        description: '회전할수록 강해지는 참격',
        icon: '🐉',
        animationColor: 'bg-cyan-500'
      },
      {
        id: 'HINOKAMI',
        name: '히노카미 카구라: 원무',
        damage: 550,
        cost: 90,
        cooldown: 12000,
        description: '모두 태우는 태양의 춤',
        icon: '🔥',
        animationColor: 'bg-red-600'
      }
    ]
  },
  {
    id: 'ZENITSU',
    name: '아가츠마 젠이츠',
    maxHp: 800,
    maxSp: 80,
    spRecovery: 20,
    color: 'bg-yellow-400',
    accentColor: 'border-yellow-600',
    icon: '⚡',
    description: '번개의 호흡. 극강의 속도',
    skills: [
      {
        id: 'FLASH',
        name: '제1형: 벽력일섬',
        damage: 180,
        cost: 35,
        cooldown: 3000,
        description: '보이지 않는 신속의 발도',
        icon: '⚡',
        animationColor: 'bg-yellow-300'
      },
      {
        id: 'SIX_FOLD',
        name: '벽력일섬 6연',
        damage: 300,
        cost: 60,
        cooldown: 6000,
        description: '공기를 찢는 6번의 참격',
        icon: '🌪️',
        animationColor: 'bg-yellow-200'
      },
      {
        id: 'GOD_SPEED',
        name: '제7형: 화뢰신',
        damage: 600,
        cost: 100,
        cooldown: 15000,
        description: '뇌신과 같은 속도의 일격',
        icon: '🌩️',
        animationColor: 'bg-white'
      }
    ]
  },
  {
    id: 'INOSUKE',
    name: '하시비라 이노스케',
    maxHp: 1100,
    maxSp: 90,
    spRecovery: 30,
    color: 'bg-blue-400',
    accentColor: 'border-blue-700',
    icon: '🐗',
    description: '짐승의 호흡. 이도류 난무',
    skills: [
      {
        id: 'FANG',
        name: '제3형: 들이받기',
        damage: 160,
        cost: 25,
        cooldown: 2000,
        description: '저돌맹진!',
        icon: '⚔️',
        animationColor: 'bg-blue-300'
      },
      {
        id: 'SLICE',
        name: '제7형: 공간식',
        damage: 320,
        cost: 65,
        cooldown: 7000,
        description: '감각으로 베어낸다',
        icon: '🌀',
        animationColor: 'bg-gray-200'
      },
      {
        id: 'DEVOUR',
        name: '제3형: 뜯어먹기',
        damage: 450,
        cost: 80,
        cooldown: 10000,
        description: '거친 이도류 난무',
        icon: '🦷',
        animationColor: 'bg-blue-600'
      }
    ]
  },
  {
    id: 'RENGOKU',
    name: '렌고쿠 쿄쥬로',
    maxHp: 1200,
    maxSp: 120,
    spRecovery: 20,
    color: 'bg-red-500',
    accentColor: 'border-red-800',
    icon: '🔥',
    description: '화염의 호흡. 압도적 화력',
    skills: [
      {
        id: 'SEA_OF_FIRE',
        name: '제1형: 부지화',
        damage: 180,
        cost: 40,
        cooldown: 3000,
        description: '돌진하며 베기',
        icon: '💥',
        animationColor: 'bg-orange-500'
      },
      {
        id: 'RISING_SCORCHING_SUN',
        name: '제5형: 성염의 파도',
        damage: 350,
        cost: 70,
        cooldown: 7000,
        description: '맹렬한 불꽃의 참격',
        icon: '🌅',
        animationColor: 'bg-orange-400'
      },
      {
        id: 'PURGATORY',
        name: '제9형: 연옥',
        damage: 700,
        cost: 110,
        cooldown: 18000,
        description: '지옥의 업화로 불태운다',
        icon: '🐲',
        animationColor: 'bg-red-700'
      }
    ]
  },
  {
    id: 'GIYU',
    name: '토미오카 기유',
    maxHp: 1100,
    maxSp: 110,
    spRecovery: 35,
    color: 'bg-blue-700',
    accentColor: 'border-blue-900',
    icon: '🌊',
    description: '물의 호흡. 철벽 방어',
    skills: [
      {
        id: 'DROP',
        name: '제7형: 물방울 파문 찌르기',
        damage: 150,
        cost: 25,
        cooldown: 2000,
        description: '가장 빠른 찌르기',
        icon: '💧',
        animationColor: 'bg-blue-400'
      },
      {
        id: 'FLOWING_DANCE',
        name: '제3형: 유유 춤',
        damage: 300,
        cost: 60,
        cooldown: 6000,
        description: '부드럽게 흘려보내며 베기',
        icon: '💃',
        animationColor: 'bg-blue-500'
      },
      {
        id: 'DEAD_CALM',
        name: '제11형: 잔잔한 물결',
        damage: 500,
        cost: 90,
        cooldown: 12000,
        description: '모든 술식을 무화시킨다',
        icon: '🛡️',
        animationColor: 'bg-cyan-300'
      }
    ]
  },
  {
    id: 'TENGEN',
    name: '우즈이 텐겐',
    maxHp: 1300,
    maxSp: 100,
    spRecovery: 25,
    color: 'bg-fuchsia-700',
    accentColor: 'border-fuchsia-900',
    icon: '💎',
    description: '소리의 호흡. 화려한 폭발',
    skills: [
      {
        id: 'ROAR',
        name: '제1형: 굉음',
        damage: 200,
        cost: 45,
        cooldown: 4000,
        description: '폭약을 이용한 강렬한 참격',
        icon: '💣',
        animationColor: 'bg-orange-400'
      },
      {
        id: 'CONSTANT_RESOUNDING',
        name: '제5형: 명현주주',
        damage: 380,
        cost: 75,
        cooldown: 8000,
        description: '회전하며 폭발적인 연격',
        icon: '🎇',
        animationColor: 'bg-pink-500'
      },
      {
        id: 'SCORE',
        name: '악보 완성',
        damage: 600,
        cost: 100,
        cooldown: 15000,
        description: '적의 사각을 꿰뚫는 일격',
        icon: '🎼',
        animationColor: 'bg-pink-400'
      }
    ]
  },
  {
    id: 'MITSURI',
    name: '칸로지 미츠리',
    maxHp: 1150,
    maxSp: 90,
    spRecovery: 25,
    color: 'bg-pink-400',
    accentColor: 'border-green-400',
    icon: '🌸',
    description: '사랑의 호흡. 유연한 채찍',
    skills: [
      {
        id: 'SHIVERS',
        name: '제1형: 첫사랑의 떨림',
        damage: 170,
        cost: 30,
        cooldown: 2500,
        description: '연검의 난무',
        icon: '💓',
        animationColor: 'bg-pink-300'
      },
      {
        id: 'CAT_LOVE',
        name: '제3형: 사랑의 고양이 소나기',
        damage: 320,
        cost: 60,
        cooldown: 6000,
        description: '재빠른 도약 베기',
        icon: '🐱',
        animationColor: 'bg-pink-200'
      },
      {
        id: 'LOVE_SHOWER',
        name: '제5형: 흔들리는 연정',
        damage: 550,
        cost: 95,
        cooldown: 13000,
        description: '피할 수 없는 광범위 난무',
        icon: '🎀',
        animationColor: 'bg-red-300'
      }
    ]
  },
  {
    id: 'OBANAI',
    name: '이구로 오바나이',
    maxHp: 950,
    maxSp: 100,
    spRecovery: 30,
    color: 'bg-indigo-800',
    accentColor: 'border-gray-900',
    icon: '🐍',
    description: '뱀의 호흡. 변칙적인 궤도',
    skills: [
      {
        id: 'COIL',
        name: '제1형: 위네리 베기',
        damage: 160,
        cost: 35,
        cooldown: 3000,
        description: '뱀처럼 휘어지는 검',
        icon: '〰️',
        animationColor: 'bg-purple-300'
      },
      {
        id: 'COIL_CHOKE',
        name: '제5형: 똬리 조이기',
        damage: 340,
        cost: 70,
        cooldown: 7500,
        description: '적을 포위하는 참격',
        icon: '🧣',
        animationColor: 'bg-purple-500'
      },
      {
        id: 'SERPENT',
        name: '제2형: 협두의 독아',
        damage: 580,
        cost: 95,
        cooldown: 14000,
        description: '거대한 뱀 형상의 참격',
        icon: '🐍',
        animationColor: 'bg-white'
      }
    ]
  },
  {
    id: 'MUICHIRO',
    name: '토키토 무이치로',
    maxHp: 900,
    maxSp: 110,
    spRecovery: 40,
    color: 'bg-cyan-200',
    accentColor: 'border-cyan-500',
    icon: '☁️',
    description: '안개의 호흡. 흐릿한 움직임',
    skills: [
      {
        id: 'MIST_SLASH',
        name: '제4형: 수류 물보라',
        damage: 150,
        cost: 25,
        cooldown: 2000,
        description: '부드러운 받아치기',
        icon: '🌫️',
        animationColor: 'bg-gray-100'
      },
      {
        id: 'LAYERS_MIST',
        name: '제2형: 여덟 겹 안개',
        damage: 320,
        cost: 65,
        cooldown: 6500,
        description: '연속 참격',
        icon: '🌫️',
        animationColor: 'bg-gray-200'
      },
      {
        id: 'OBSCURING',
        name: '제7형: 몽롱',
        damage: 600,
        cost: 100,
        cooldown: 14000,
        description: '순식간에 사라져 베어낸다',
        icon: '💨',
        animationColor: 'bg-gray-300'
      }
    ]
  },
  {
    id: 'SHINOBU',
    name: '코쵸우 시노부',
    maxHp: 750,
    maxSp: 120,
    spRecovery: 30,
    color: 'bg-purple-500',
    accentColor: 'border-purple-800',
    icon: '🦋',
    description: '벌레의 호흡. 치명적인 독',
    skills: [
      {
        id: 'BUTTERFLY_DANCE',
        name: '나비의 춤: 장난',
        damage: 130,
        cost: 20,
        cooldown: 1500,
        description: '가볍게 찌르는 독 공격',
        icon: '🦋',
        animationColor: 'bg-purple-400'
      },
      {
        id: 'BEE_STING',
        name: '벌의 춤: 들이쏘기',
        damage: 280,
        cost: 50,
        cooldown: 5000,
        description: '치명적인 찌르기',
        icon: '🐝',
        animationColor: 'bg-yellow-500'
      },
      {
        id: 'CENTIPEDE',
        name: '지네의 춤: 백족 주름',
        damage: 650,
        cost: 100,
        cooldown: 13000,
        description: '사방을 에워싸는 초고속 찌르기',
        icon: '🐛',
        animationColor: 'bg-purple-900'
      }
    ]
  },
  {
    id: 'SANEMI',
    name: '시나즈가와 사네미',
    maxHp: 1100,
    maxSp: 105,
    spRecovery: 25,
    color: 'bg-teal-700',
    accentColor: 'border-green-200',
    icon: '🌪️',
    description: '바람의 호흡. 맹렬한 폭풍',
    skills: [
      {
        id: 'DUST_WHIRLWIND',
        name: '제1형: 진선풍 깎기',
        damage: 190,
        cost: 40,
        cooldown: 3000,
        description: '돌진하며 베어내는 참격',
        icon: '🌪️',
        animationColor: 'bg-teal-400'
      },
      {
        id: 'CLAWS',
        name: '제2형: 조조 과실바람',
        damage: 360,
        cost: 70,
        cooldown: 7500,
        description: '발톱 같은 참격',
        icon: '🦅',
        animationColor: 'bg-teal-200'
      },
      {
        id: 'GALE',
        name: '제9형: 위타천 태풍',
        damage: 620,
        cost: 100,
        cooldown: 16000,
        description: '모든 것을 날려버리는 태풍',
        icon: '🌀',
        animationColor: 'bg-gray-400'
      }
    ]
  },
  {
    id: 'GYOMEI',
    name: '히메지마 교메이',
    maxHp: 1500,
    maxSp: 80,
    spRecovery: 20,
    color: 'bg-stone-600',
    accentColor: 'border-stone-800',
    icon: '📿',
    description: '바위의 호흡. 최강의 주',
    skills: [
      {
        id: 'SERPENTINITE',
        name: '제1형: 사문암 쌍극',
        damage: 220,
        cost: 45,
        cooldown: 4000,
        description: '철퇴와 도끼의 투척',
        icon: '⚒️',
        animationColor: 'bg-stone-500'
      },
      {
        id: 'UPPER_SMASH',
        name: '제2형: 천면 부수기',
        damage: 400,
        cost: 75,
        cooldown: 9000,
        description: '머리 위에서 내려찍기',
        icon: '🔨',
        animationColor: 'bg-stone-400'
      },
      {
        id: 'VOLCANIC_ROCK',
        name: '제5형: 와륜 형부',
        damage: 750,
        cost: 100,
        cooldown: 20000,
        description: '대지를 부수는 연속 공격',
        icon: '🌋',
        animationColor: 'bg-orange-800'
      }
    ]
  }
];

export const ENEMIES: Enemy[] = [
  {
    id: 'AKAZA',
    name: '상현의 3: 아카자',
    maxHp: 2500,
    color: 'bg-pink-700',
    icon: '❄️',
    skills: [
      { id: 'E1', name: '파괴살: 나침', damage: 80, cost: 0, cooldown: 0, description: '', icon: '', animationColor: 'bg-pink-400' },
      { id: 'E2', name: '파괴살: 멸식', damage: 200, cost: 0, cooldown: 0, description: '', icon: '', animationColor: 'bg-purple-600' }
    ]
  },
  {
    id: 'DOUMA',
    name: '상현의 2: 도우마',
    maxHp: 3000,
    color: 'bg-gray-200 text-black',
    icon: '🪭',
    skills: [
      { id: 'E3', name: '한 맺힌 눈', damage: 90, cost: 0, cooldown: 0, description: '', icon: '', animationColor: 'bg-cyan-200' },
      { id: 'E4', name: '결정의 아이', damage: 180, cost: 0, cooldown: 0, description: '', icon: '', animationColor: 'bg-blue-300' }
    ]
  },
  {
    id: 'KOKUSHIBO',
    name: '상현의 1: 코쿠시보',
    maxHp: 4000,
    color: 'bg-purple-900',
    icon: '🌙',
    skills: [
      { id: 'E5', name: '달의 호흡', damage: 120, cost: 0, cooldown: 0, description: '', icon: '', animationColor: 'bg-yellow-200' },
      { id: 'E6', name: '재액의 달', damage: 300, cost: 0, cooldown: 0, description: '', icon: '', animationColor: 'bg-purple-500' }
    ]
  },
  {
    id: 'HANTENGU',
    name: '상현의 4: 한텐구(조하쿠텐)',
    maxHp: 2200,
    color: 'bg-amber-800',
    icon: '🥁',
    skills: [
      { id: 'E7', name: '목룡', damage: 100, cost: 0, cooldown: 0, description: '', icon: '', animationColor: 'bg-green-800' },
      { id: 'E8', name: '광압명파', damage: 220, cost: 0, cooldown: 0, description: '', icon: '', animationColor: 'bg-yellow-600' }
    ]
  },
  {
    id: 'GYOKKO',
    name: '상현의 5: 굣코',
    maxHp: 1800,
    color: 'bg-teal-600',
    icon: '🏺',
    skills: [
      { id: 'E9', name: '문어항아리', damage: 70, cost: 0, cooldown: 0, description: '', icon: '', animationColor: 'bg-teal-400' },
      { id: 'E10', name: '진살어린', damage: 150, cost: 0, cooldown: 0, description: '', icon: '', animationColor: 'bg-teal-200' }
    ]
  },
  {
    id: 'DAKI_GYUTARO',
    name: '상현의 6: 다키 & 규타로',
    maxHp: 1600,
    color: 'bg-green-900',
    icon: '🕸️',
    skills: [
      { id: 'E11', name: '피의 낫', damage: 80, cost: 0, cooldown: 0, description: '', icon: '', animationColor: 'bg-red-800' },
      { id: 'E12', name: '오비 난무', damage: 160, cost: 0, cooldown: 0, description: '', icon: '', animationColor: 'bg-pink-600' }
    ]
  }
];
