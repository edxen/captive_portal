const addNewText = (value, children) => {
  const translation = Translations.text;
  Object.entries(translation).forEach(([code, text]) => {
    if (!children) translation[code][value] = newText[code][value];
    else {
      Object.entries(newText[code][value]).forEach(([item, text]) => {
        translation[code][value][item] = newText[code][value][item];
      });
    }
  });
  return translation;
};

window.addNewText = addNewText;

const newText = {
  "en": {
    "demo": "Only the following access codes are accepted for demo:"
  },
  "es": {
    "demo": "Solo se aceptan los siguientes códigos de acceso para la demostración:"
  },
  "fr": {
    "demo": "Seuls les codes d'accès suivants sont acceptés pour la démo :"
  },
  "de": {
    "demo": "Nur die folgenden Zugangscodes werden für die Demo akzeptiert:"
  },
  "pt": {
    "demo": "Apenas os seguintes códigos de acesso são aceitos para demonstração:"
  },
  "ru": {
    "demo": "Только следующие коды доступа принимаются для демонстрации:"
  },
  "ar": {
    "demo": "فقط الرموز التالية للوصول مقبولة للعرض التوضيحي:"
  },
  "ja": {
    "demo": "デモ用には次のアクセスコードのみが受け入れられます："
  },
  "ko": {
    "demo": "데모용으로는 다음 액세스 코드만 허용됩니다:"
  },
  "zh-cn": {
    "demo": "仅以下访问代码可用于演示："
  },
  "zh-tw": {
    "demo": "僅接受以下存取代碼進行示範："
  }
};




const Translations = {
  languages: {
    'en': 'English',
    'es': 'ESPAÑOL',
    'fr': 'FRANÇAIS',
    'de': 'DEUTSCH',
    'pt': 'PORTUGUÊS',
    'ru': 'РУССКИЙ',
    'ar': 'العربية',
    'ja': '日本語',
    'ko': '한국어',
    'zh-cn': '简体中文',
    'zh-tw': '繁體中文',
  },
  text: {
    "en": {
      "demo": "Only the following access codes are accepted for demo:",
      "title": "DisCafe Captive Portal",
      "welcome": "Welcome to DisCafe",
      "connect": "Connect",
      "loading": "Loading...",
      "please_wait_connect": "Please wait while we connect you...",
      "please_wait": "Please wait...",
      "footer": "Coffee right? © 2023 Edxen. All nights we serve.",
      "connected": {
        "success": "You are now connected!",
        "details": "Enjoy your coffee time more while you browse using our complimentary internet access!",
        "duration": "Duration",
        "time": {
          "minute": "minute",
          "minutes": "minutes"
        },
        "remaining_time": "Remaining Time",
        "expire": "Disconnect",
        "confirm_label": "Are you sure",
        "confirm": "Confirm",
        "cancel": "Cancel"
      },
      "access_code": {
        "instructions": "Please approach the counter with your receipt to get an access code to avail our complimentary internet access",
        "label": "Access Code",
        "placeholder": "Enter access code here"
      },
      "reconnected": {
        "welcome": "Welcome back!",
        "details": "You are currently connected to our complimentary internet. Enjoy browsing!"
      },
      "error": {
        "access_code_blank": "Access code is blank",
        "access_code_invalid": "Invalid access code",
        "not_available": "This page is not available",
        "connection_expired": "Your last connection has already expired",
        "connection_disconnected": "Your last connection has been disconnected"
      }
    },
    "es": {
      "demo": "Solo se aceptan los siguientes códigos de acceso para la demostración:",
      "title": "Portal cautivo de DisCafe",
      "welcome": "Bienvenido a DisCafe",
      "connect": "Conectar",
      "loading": "Cargando...",
      "please_wait_connect": "Espere mientras lo conectamos...",
      "please_wait": "Espere...",
      "footer": "¿Café, verdad? © 2023 Edxen. Todas las noches servimos.",
      "connected": {
        "success": "¡Ahora estás conectado!",
        "details": "¡Disfruta más de tu tiempo de café mientras navegas usando nuestro acceso a internet gratuito!",
        "remaining_time": "Tiempo restante",
        "expire": "Desconectar",
        "confirm_label": "¿Estás seguro?",
        "confirm": "Confirmar",
        "cancel": "Cancelar",
        "duration": "Duración",
        "time": {
          "minute": "minuto",
          "minutes": "minutos"
        }
      },
      "access_code": {
        "instructions": "Por favor, acércate al mostrador con tu recibo para obtener un código de acceso y disfrutar de nuestro acceso gratuito a internet",
        "label": "Código de acceso",
        "placeholder": "Ingrese el código de acceso aquí"
      },
      "error": {
        "access_code_blank": "El código de acceso está en blanco",
        "access_code_invalid": "Código de acceso no válido",
        "not_available": "Esta página no está disponible",
        "connection_expired": "Tu última conexión ya ha expirado",
        "connection_disconnected": "Tu última conexión ha sido desconectada"
      },
      "reconnected": {
        "welcome": "¡Bienvenido de nuevo!",
        "details": "Actualmente estás conectado a nuestra internet de cortesía. ¡Disfruta navegando!"
      }
    },
    "fr": {
      "demo": "Seuls les codes d'accès suivants sont acceptés pour la démo :",
      "title": "Portail captif DisCafe",
      "welcome": "Bienvenue chez DisCafe",
      "connect": "Connecter",
      "loading": "Chargement...",
      "please_wait_connect": "Veuillez patienter pendant que nous vous connectons...",
      "please_wait": "Veuillez patienter...",
      "footer": "Du café, n'est-ce pas ? © 2023 Edxen. Toutes les nuits, nous servons.",
      "connected": {
        "success": "Vous êtes maintenant connecté(e)!",
        "details": "Profitez davantage de votre temps café tout en naviguant avec notre accès Internet gratuit !",
        "remaining_time": "Temps restant",
        "expire": "Déconnecter",
        "confirm_label": "Êtes-vous sûr(e) ?",
        "confirm": "Confirmer",
        "cancel": "Annuler",
        "duration": "Durée",
        "time": {
          "minute": "minute",
          "minutes": "minutes"
        }
      },
      "access_code": {
        "instructions": "Veuillez vous rendre au comptoir avec votre reçu pour obtenir un code d'accès afin de profiter de notre accès gratuit à Internet",
        "label": "Code d’accès",
        "placeholder": "Entrez le code d’accès ici"
      },
      "error": {
        "access_code_blank": "Le code d’accès est vide",
        "access_code_invalid": "Code d’accès non valide",
        "not_available": "Cette page n’est pas disponible",
        "connection_expired": "Votre dernière connexion a déjà expiré",
        "connection_disconnected": "Votre dernière connexion a été déconnectée"
      },
      "reconnected": {
        "welcome": "Bienvenue de retour !",
        "details": "Vous êtes actuellement connecté à notre Internet gratuit. Profitez de la navigation !"
      }
    },
    "de": {
      "demo": "Nur die folgenden Zugangscodes werden für die Demo akzeptiert:",
      "title": "DisCafe Captive Portal",
      "welcome": "Willkommen bei DisCafe",
      "connect": "Verbinden",
      "loading": "Laden...",
      "please_wait_connect": "Bitte warten Sie, während wir Sie verbinden...",
      "please_wait": "Bitte warten...",
      "footer": "Kaffee, richtig? © 2023 Edxen. Jede Nacht servieren wir.",
      "connected": {
        "success": "Sie sind jetzt verbunden!",
        "details": "Genießen Sie Ihre Kaffeepause noch mehr, während Sie unser kostenloses Internet nutzen!",
        "remaining_time": "Verbleibende Zeit",
        "expire": "Trennen",
        "confirm_label": "Bist du sicher?",
        "confirm": "Bestätigen",
        "cancel": "Abbrechen",
        "duration": "Dauer",
        "time": {
          "minute": "Minute",
          "minutes": "Minuten"
        }
      },
      "access_code": {
        "instructions": "Bitte kommen Sie mit Ihrem Beleg zum Schalter, um einen Zugangscode für unseren kostenlosen Internetzugang zu erhalten",
        "label": "Zugangscode",
        "placeholder": "Geben Sie hier den Zugangscode ein"
      },
      "error": {
        "access_code_blank": "Zugangscode ist leer",
        "access_code_invalid": "Ungültiger Zugangscode",
        "not_available": "Diese Seite ist nicht verfügbar",
        "connection_expired": "Ihre letzte Verbindung ist bereits abgelaufen",
        "connection_disconnected": "Ihre letzte Verbindung wurde getrennt"
      },
      "reconnected": {
        "welcome": "Willkommen zurück!",
        "details": "Sie sind derzeit mit unserem kostenlosen Internet verbunden. Viel Spaß beim Surfen!"
      }
    },
    "pt": {
      "demo": "Apenas os seguintes códigos de acesso são aceitos para demonstração:",
      "title": "Portal Cativo DisCafe",
      "welcome": "Bem-vindo ao DisCafe",
      "connect": "Conectar",
      "loading": "Carregando...",
      "please_wait_connect": "Aguarde enquanto conectamos você...",
      "please_wait": "Aguarde...",
      "footer": "Café, não é? © 2023 Edxen. Todas as noites servimos.",
      "connected": {
        "success": "Você está conectado agora!",
        "details": "Aproveite mais o seu tempo de café enquanto navega usando nosso acesso à internet gratuito!",
        "remaining_time": "Tempo restante",
        "expire": "Desconectar",
        "confirm_label": "Tem certeza?",
        "confirm": "Confirmar",
        "cancel": "Cancelar",
        "duration": "Duração",
        "time": {
          "minute": "minuto",
          "minutes": "minutos"
        }
      },
      "access_code": {
        "instructions": "Por favor, dirija-se ao balcão com o seu recibo para obter um código de acesso para usufruir do nosso acesso gratuito à internet",
        "label": "Código de acesso",
        "placeholder": "Insira o código de acesso aqui"
      },
      "error": {
        "access_code_blank": "O código de acesso está em branco",
        "access_code_invalid": "Código de acesso inválido",
        "not_available": "Esta página não está disponível",
        "connection_expired": "Sua última conexão já expirou",
        "connection_disconnected": "Sua última conexão foi desconectada"
      },
      "reconnected": {
        "welcome": "Bem-vindo de volta!",
        "details": "Atualmente está conectado à nossa internet gratuita. Aproveite a navegação!"
      }
    },
    "ru": {
      "demo": "Только следующие коды доступа принимаются для демонстрации:",
      "title": "Захватывающий портал DisCafe",
      "welcome": "Добро пожаловать в DisCafe",
      "connect": "Подключиться",
      "loading": "Загрузка...",
      "please_wait_connect": "Подождите, пока мы вас подключим...",
      "please_wait": "Пожалуйста, подождите...",
      "footer": "Кофе, верно? © 2023 Edxen. Мы обслуживаем каждую ночь.",
      "connected": {
        "success": "Теперь вы подключены!",
        "details": "Наслаждайтесь больше временем кофе, пока вы пользуетесь нашим бесплатным доступом в Интернет!",
        "remaining_time": "Оставшееся время",
        "expire": "Отключиться",
        "confirm_label": "Вы уверены?",
        "confirm": "Подтвердить",
        "cancel": "Отмена",
        "duration": "Продолжительность",
        "time": {
          "minute": "минута",
          "minutes": "минут"
        }
      },
      "access_code": {
        "instructions": "Пожалуйста, подойдите к прилавку с чеком, чтобы получить код доступа к нашему бесплатному доступу в Интернет",
        "label": "Код доступа",
        "placeholder": "Введите код доступа здесь"
      },
      "error": {
        "access_code_blank": "Код доступа пуст",
        "access_code_invalid": "Недействительный код доступа",
        "not_available": "Эта страница недоступна",
        "connection_expired": "Ваш последний сеанс уже истек",
        "connection_disconnected": "Ваш последний сеанс был отключен"
      },
      "reconnected": {
        "welcome": "С возвращением!",
        "details": "Вы в данный момент подключены к нашему бесплатному интернету. Наслаждайтесь просмотром!"
      }
    },
    "ar": {
      "demo": "فقط الرموز التالية للوصول مقبولة للعرض التوضيحي:",
      "title": "بوابة DisCafe للأسرى",
      "welcome": "مرحبًا بك في DisCafe",
      "connect": "الاتصال",
      "loading": "جار التحميل...",
      "please_wait_connect": "يرجى الانتظار بينما نقوم بالاتصال بك...",
      "please_wait": "الرجاء الانتظار...",
      "footer": "قهوة، صحيح؟ © 2023 Edxen. كل ليلة نقدم فيها الخدمة.",
      "connected": {
        "success": "أنت متصل الآن!",
        "details": "استمتع بوقت قهوتك أكثر أثناء تصفحك باستخدام إنترنتنا المجاني!",
        "remaining_time": "الوقت المتبقي",
        "expire": "انقطاع",
        "confirm_label": "هل أنت متأكد؟",
        "confirm": "تأكيد",
        "cancel": "إلغاء",
        "duration": "المدة",
        "time": {
          "minute": "دقيقة",
          "minutes": "دقائق"
        }
      },
      "access_code": {
        "instructions": "يرجى الاقتراب من الكاونتر مع إيصالك للحصول على رمز الوصول إلى الإنترنت المجاني الخاص بنا",
        "label": "رمز الوصول",
        "placeholder": "أدخل رمز الوصول هنا"
      },
      "error": {
        "access_code_blank": "رمز الوصول فارغ",
        "access_code_invalid": "رمز الوصول غير صالح",
        "not_available": "هذه الصفحة غير متوفرة",
        "connection_expired": "انتهت صلاحية اتصالك الأخير بالفعل",
        "connection_disconnected": "تم فصل اتصالك الأخير"
      },
      "reconnected": {
        "welcome": "مرحبا بعودتك!",
        "details": "أنت متصل حاليًا بإنترنتنا المجانية. استمتع بالتصفح!"
      }
    },
    "ja": {
      "demo": "デモ用には次のアクセスコードのみが受け入れられます：",
      "title": "DisCafe キャプティブポータル",
      "welcome": "DisCafe へようこそ",
      "connect": "接続",
      "loading": "読み込み中...",
      "please_wait_connect": "接続中ですのでお待ちください...",
      "please_wait": "お待ちください...",
      "footer": "コーヒーですよね？© 2023 Edxen. 毎晩、サービスしています。",
      "connected": {
        "success": "接続されました！",
        "details": "無料のインターネットアクセスを使用してブラウズする間、コーヒータイムをより楽しんでください！",
        "remaining_time": "残り時間",
        "expire": "切断",
        "confirm_label": "本当によろしいですか？",
        "confirm": "確認",
        "cancel": "キャンセル",
        "duration": "期間",
        "time": {
          "minute": "分",
          "minutes": "分"
        }
      },
      "access_code": {
        "instructions": "領収書を持ってカウンターにお越しください。当社の無料インターネットアクセスを利用するためのアクセスコードを取得してください",
        "label": "アクセスコード",
        "placeholder": "ここにアクセスコードを入力してください"
      },
      "error": {
        "access_code_blank": "アクセスコードが空白です",
        "access_code_invalid": "無効なアクセスコード",
        "not_available": "このページは利用できません",
        "connection_expired": "前回の接続はすでに期限切れです",
        "connection_disconnected": "前回の接続が切断されました"
      },
      "reconnected": {
        "welcome": "おかえりなさい！",
        "details": "現在、当社の無料インターネットに接続されています。ブラウジングをお楽しみください！"
      }
    },
    "ko": {
      "demo": "데모용으로는 다음 액세스 코드만 허용됩니다:",
      "title": "디스카페 포로 포털",
      "welcome": "디스카페에 오신 것을 환영합니다",
      "connect": "연결",
      "loading": "로딩 중...",
      "please_wait_connect": "연결하는 동안 잠시만 기다려주세요...",
      "please_wait": "기다려주세요...",
      "footer": "커피, 맞죠? © 2023 Edxen. 매일 밤 우리는 서빙합니다.",
      "connected": {
        "success": "이제 연결되었습니다!",
        "details": "무료 인터넷을 사용하여 브라우징하는 동안 커피 시간을 더 즐기세요!",
        "remaining_time": "남은 시간",
        "expire": "연결 끊기",
        "confirm_label": "확실합니까?",
        "confirm": "확인",
        "cancel": "취소",
        "duration": "기간",
        "time": {
          "minute": "분",
          "minutes": "분"
        }
      },
      "access_code": {
        "instructions": "영수증과 함께 카운터에 가서 당사의 무료 인터넷 액세스를 얻을 수 있는 액세스 코드를 받아주세요",
        "label": "액세스 코드",
        "placeholder": "여기에 액세스 코드를 입력하세요"
      },
      "error": {
        "access_code_blank": "액세스 코드가 비어 있습니다",
        "access_code_invalid": "잘못된 액세스 코드",
        "not_available": "이 페이지를 사용할 수 없습니다",
        "connection_expired": "최근 연결이 이미 만료되었습니다",
        "connection_disconnected": "최근 연결이 해제되었습니다"
      },
      "reconnected": {
        "welcome": "다시 오신 것을 환영합니다!",
        "details": "현재 당사의 무료 인터넷에 연결되어 있습니다. 즐거운 브라우징하세요!"
      }
    },
    "zh-cn": {
      "demo": "仅以下访问代码可用于演示：",
      "title": "DisCafe 囚禁门户",
      "welcome": "欢迎来到 DisCafe",
      "connect": "连接",
      "loading": "载入中...",
      "please_wait_connect": "请等待我们为您建立连接...",
      "please_wait": "请稍候...",
      "footer": "咖啡，对吧？© 2023 Edxen。我们每天晚上提供服务。",
      "connected": {
        "success": "您现在已连接！",
        "details": "在使用我们的免费互联网访问时更好地享受您的咖啡时间！",
        "remaining_time": "剩余时间",
        "expire": "断开连接",
        "confirm_label": "你确定吗？",
        "confirm": "确认",
        "cancel": "取消",
        "duration": "持续时间",
        "time": {
          "minute": "分钟",
          "minutes": "分钟"
        }
      },
      "access_code": {
        "instructions": "请携带收据前往柜台获取访问代码，以使用我们的免费互联网接入",
        "label": "访问代码",
        "placeholder": "在此输入访问代码"
      },
      "error": {
        "access_code_blank": "访问代码为空",
        "access_code_invalid": "无效的访问代码",
        "not_available": "此页面不可用",
        "connection_expired": "您的上次连接已经过期",
        "connection_disconnected": "您的上次连接已断开"
      },
      "reconnected": {
        "welcome": "欢迎回来！",
        "details": "您当前连接到我们的免费互联网。享受浏览吧！"
      }
    },
    "zh-tw": {
      "demo": "僅接受以下存取代碼進行示範：",
      "title": "DisCafe 囚禁入口網站",
      "welcome": "歡迎來到 DisCafe",
      "connect": "連接",
      "loading": "載入中...",
      "please_wait_connect": "請等待我們為您建立連線...",
      "please_wait": "請稍候...",
      "footer": "咖啡，對吧？© 2023 Edxen。我們每天晚上提供服務。",
      "connected": {
        "success": "您現在已連接！",
        "details": "在使用我們的免費網際網路訪問時更多地享受您的咖啡時間！",
        "remaining_time": "剩餘時間",
        "expire": "中斷連線",
        "confirm_label": "您確定嗎？",
        "confirm": "確認",
        "cancel": "取消",
        "duration": "持續時間",
        "time": {
          "minute": "分鐘",
          "minutes": "分鐘"
        }
      },
      "access_code": {
        "instructions": "請攜帶收據前往櫃檯取得存取代碼，以使用我們的免費網際網路存取",
        "label": "存取代碼",
        "placeholder": "在此輸入存取代碼"
      },
      "error": {
        "access_code_blank": "存取代碼為空白",
        "access_code_invalid": "無效的存取代碼",
        "not_available": "此頁面無法使用",
        "connection_expired": "您的上次連線已過期",
        "connection_disconnected": "您的上次連線已中斷"
      },
      "reconnected": {
        "welcome": "歡迎回來！",
        "details": "您目前連線到我們的免費網路。享受瀏覽吧！"
      }
    }
  }
};

window.translations = Translations.text;

export default Translations;