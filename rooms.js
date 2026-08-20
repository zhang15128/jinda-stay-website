const roomTranslations = {
  ja: {
    back: "戻る",
    changeSearch: "検索を変更",
    kicker: "部屋選択",
    availableRooms: "選択可能な部屋",
    chooseRoom: "部屋タイプを選択",
    checkIn: "チェックイン",
    stayUntil: "宿泊最終日",
    checkout: "退室",
    checkoutTime: "翌日10:00",
    capacity: "定員",
    people: "名",
    reserveOn: "予約サイトへ",
    footerReserve: "予約",
    footerProperties: "宿泊施設",
    footerGuide: "宿泊ガイド",
    footerContact: "お問い合わせ",
    contactTitle: "お問い合わせ",
    noRooms: "客室情報は準備中です。所在地と入室方法は宿泊ガイドでご確認いただけます。",
  },
  en: {
    back: "Back",
    changeSearch: "Change Search",
    kicker: "ROOM SELECTION",
    availableRooms: "AVAILABLE ROOMS",
    chooseRoom: "Choose a room type",
    checkIn: "Check-in",
    stayUntil: "Stay until",
    checkout: "Check-out",
    checkoutTime: "10:00 next morning",
    capacity: "Capacity",
    people: "guests",
    reserveOn: "Reserve on",
    footerReserve: "Reservation",
    footerProperties: "Properties",
    footerGuide: "Stay Guide",
    footerContact: "Contact",
    contactTitle: "Contact us",
    noRooms: "Room information is being prepared. You can still view the location and entry instructions in the stay guide.",
  },
  zhHant: {
    back: "返回",
    changeSearch: "修改搜尋",
    kicker: "房型選擇",
    availableRooms: "可選房型",
    chooseRoom: "選擇房型",
    checkIn: "入住時間",
    stayUntil: "入住到",
    checkout: "退房",
    checkoutTime: "隔天早上10點",
    capacity: "可住",
    people: "人",
    reserveOn: "前往預訂",
    footerReserve: "預訂",
    footerProperties: "住宿據點",
    footerGuide: "入住指南",
    footerContact: "聯絡我們",
    contactTitle: "聯絡我們",
    noRooms: "房型資訊仍在準備中，您可先在入住指南查看位置與入室方式。",
  },
  zhHans: {
    back: "返回",
    changeSearch: "修改搜索",
    kicker: "房型选择",
    availableRooms: "可选房型",
    chooseRoom: "选择房型",
    checkIn: "入住时间",
    stayUntil: "入住到",
    checkout: "退房",
    checkoutTime: "隔天早上10点",
    capacity: "可住",
    people: "人",
    reserveOn: "前往预订",
    footerReserve: "预订",
    footerProperties: "住宿据点",
    footerGuide: "入住指南",
    footerContact: "联系我们",
    contactTitle: "联系我们",
    noRooms: "房型信息仍在准备中，您可先在入住指南查看位置与入室方式。",
  },
  ko: {
    back: "뒤로",
    changeSearch: "검색 변경",
    kicker: "객실 선택",
    availableRooms: "선택 가능한 객실",
    chooseRoom: "객실 타입 선택",
    checkIn: "체크인",
    stayUntil: "숙박 종료일",
    checkout: "체크아웃",
    checkoutTime: "다음 날 오전 10시",
    capacity: "정원",
    people: "명",
    reserveOn: "예약하기",
    footerReserve: "예약",
    footerProperties: "숙소",
    footerGuide: "입주 가이드",
    footerContact: "문의",
    contactTitle: "문의",
    noRooms: "객실 정보는 준비 중입니다. 숙박 가이드에서 위치와 입실 방법을 먼저 확인할 수 있습니다.",
  },
  vi: {
    back: "Quay lại",
    changeSearch: "Đổi tìm kiếm",
    kicker: "CHỌN PHÒNG",
    availableRooms: "PHÒNG HIỆN CÓ",
    chooseRoom: "Chọn loại phòng",
    checkIn: "Nhận phòng",
    stayUntil: "Lưu trú đến",
    checkout: "Trả phòng",
    checkoutTime: "10:00 sáng hôm sau",
    capacity: "Sức chứa",
    people: "khách",
    reserveOn: "Đặt qua",
    footerReserve: "Đặt phòng",
    footerProperties: "Nơi lưu trú",
    footerGuide: "Hướng dẫn nhận phòng",
    footerContact: "Liên hệ",
    contactTitle: "Liên hệ với chúng tôi",
    noRooms: "Thông tin phòng đang được chuẩn bị. Bạn vẫn có thể xem vị trí và hướng dẫn vào phòng trong hướng dẫn lưu trú.",
  },
  hi: {
    back: "वापस",
    changeSearch: "खोज बदलें",
    kicker: "कमरा चुनें",
    availableRooms: "उपलब्ध कमरे",
    chooseRoom: "कमरे का प्रकार चुनें",
    checkIn: "चेक-इन",
    stayUntil: "यहाँ तक ठहरें",
    checkout: "चेक-आउट",
    checkoutTime: "अगली सुबह 10:00 बजे",
    capacity: "क्षमता",
    people: "अतिथि",
    reserveOn: "यहाँ बुक करें",
    footerReserve: "बुकिंग",
    footerProperties: "ठहरने की जगहें",
    footerGuide: "चेक-इन गाइड",
    footerContact: "संपर्क",
    contactTitle: "हमसे संपर्क करें",
    noRooms: "कमरे की जानकारी तैयार की जा रही है। ठहरने की गाइड में स्थान और प्रवेश निर्देश अभी देखे जा सकते हैं।",
  },
};

const languageSelect = document.querySelector("#languageSelect");
const languageWrap = document.querySelector(".language-wrap");
const languageTrigger = document.querySelector(".language-trigger");
const languageCurrent = document.querySelector(".language-current");
const languageOptions = [...document.querySelectorAll("[data-language-option]")];
const propertyTitle = document.querySelector("#propertyTitle");
const roomGrid = document.querySelector("#roomGrid");
const checkInSummary = document.querySelector("#checkInSummary");
const stayUntilSummary = document.querySelector("#stayUntilSummary");
const checkoutSummary = document.querySelector("#checkoutSummary");
const params = new URLSearchParams(window.location.search);
const properties = window.JINDA_DATA.properties;

let currentProperty =
  properties.find((property) => property.id === params.get("property")) || properties[0];

function addDays(dateString, days) {
  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day + days);
  const nextYear = date.getFullYear();
  const nextMonth = String(date.getMonth() + 1).padStart(2, "0");
  const nextDay = String(date.getDate()).padStart(2, "0");
  return `${nextYear}-${nextMonth}-${nextDay}`;
}

function getLanguage() {
  const requestedLanguage = params.get("lang") || localStorage.getItem("jindaLanguage") || "ja";
  return roomTranslations[requestedLanguage] ? requestedLanguage : "ja";
}

function setRoomLanguage(language) {
  const resolvedLanguage = roomTranslations[language] ? language : "ja";
  const dictionary = roomTranslations[resolvedLanguage];
  localStorage.setItem("jindaLanguage", resolvedLanguage);
  languageSelect.value = resolvedLanguage;
  syncLanguagePicker(resolvedLanguage);
  document.documentElement.lang =
    resolvedLanguage === "zhHant" ? "zh-Hant" : resolvedLanguage === "zhHans" ? "zh-CN" : resolvedLanguage;

  document.querySelectorAll("[data-room-i18n]").forEach((node) => {
    const key = node.dataset.roomI18n;
    if (dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  renderRoomPage(resolvedLanguage);
  params.set("lang", resolvedLanguage);
  window.history.replaceState(null, "", `${window.location.pathname}?${params.toString()}`);
}

function syncLanguagePicker(language) {
  const selectedOption = languageSelect.querySelector(`option[value="${language}"]`);
  languageCurrent.textContent = selectedOption?.textContent || language;
  languageOptions.forEach((option) => {
    const isSelected = option.dataset.languageOption === language;
    option.setAttribute("aria-selected", String(isSelected));
  });
}

function setLanguageMenuOpen(isOpen) {
  languageWrap.classList.toggle("is-open", isOpen);
  languageTrigger.setAttribute("aria-expanded", String(isOpen));
}

function renderRoomPage(language) {
  const dictionary = roomTranslations[language] || roomTranslations.ja;
  const checkIn = params.get("checkin") || "2026-08-03";
  const stayUntil = params.get("until") || "2026-08-08";
  const checkout = params.get("checkout") || addDays(stayUntil, 1);

  propertyTitle.textContent = getPropertyName(currentProperty, language);
  checkInSummary.textContent = `${dictionary.checkIn}: ${checkIn}`;
  stayUntilSummary.textContent = `${dictionary.stayUntil}: ${stayUntil}`;
  checkoutSummary.textContent = `${dictionary.checkout}: ${checkout} ${dictionary.checkoutTime}`;

  roomGrid.innerHTML = "";
  if (!currentProperty.rooms.length) {
    const emptyState = document.createElement("p");
    emptyState.className = "room-empty-state";
    emptyState.textContent = dictionary.noRooms;
    roomGrid.append(emptyState);
    return;
  }

  currentProperty.rooms.forEach((room) => {
    const article = document.createElement("article");
    article.className = "room-card";
    const otaButtons = window.JINDA_DATA.otaPlatforms
      .map((platform) => {
        const href = buildOtaUrl(currentProperty.otaLinks[platform.id], {
          checkIn,
          checkout,
          roomId: room.id,
          propertyId: currentProperty.id,
        });
        return `<a href="${href}" target="_blank" rel="noopener noreferrer">${dictionary.reserveOn} ${getLocalizedName(platform, language)}</a>`;
      })
      .join("");

    article.innerHTML = `
      <div>
        <p>${currentProperty.area}</p>
        <h3>${getRoomName(room, language)}</h3>
        <span>${dictionary.capacity}: ${room.capacity}${dictionary.people}</span>
      </div>
      <div class="ota-actions">${otaButtons}</div>
    `;
    roomGrid.append(article);
  });
}

function buildOtaUrl(baseUrl, details) {
  const url = new URL(baseUrl, window.location.href);
  url.searchParams.set("checkin", details.checkIn);
  url.searchParams.set("checkout", details.checkout);
  url.searchParams.set("room", details.roomId);
  url.searchParams.set("property", details.propertyId);
  return url.toString();
}

function getRoomName(room, language) {
  return room.names?.[language] || room.name;
}

function getPropertyName(property, language) {
  return property.names?.[language] || property.name;
}

function getLocalizedName(item, language) {
  return item.names?.[language] || item.name;
}

languageSelect.addEventListener("change", (event) => {
  setRoomLanguage(event.target.value);
});

languageTrigger.addEventListener("click", () => {
  setLanguageMenuOpen(!languageWrap.classList.contains("is-open"));
});

languageOptions.forEach((option) => {
  option.addEventListener("click", () => {
    setRoomLanguage(option.dataset.languageOption);
    setLanguageMenuOpen(false);
  });
});

document.addEventListener("click", (event) => {
  if (!languageWrap.contains(event.target)) {
    setLanguageMenuOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setLanguageMenuOpen(false);
  }
});

setRoomLanguage(getLanguage());
