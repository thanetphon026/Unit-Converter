/* ---------- THEME DEFINITIONS ---------- */
const themes = {
  ocean:{ background:'linear-gradient(140deg,#e6f7fb 0%,#d9f1f6 45%,#cfe9ef 100%)',
    glass:'rgba(255,255,255,0.22)', glassBorder:'rgba(255,255,255,0.34)',
    textPrimary:'#0e3a4e', textSecondary:'rgba(14,58,78,0.86)', textMuted:'rgba(14,58,78,0.65)',
    buttonHover:'rgba(255,255,255,0.28)', title1:'#0e3a4e', title2:'#2a6b84', footer:'rgba(0,0,0,0.14)' },
  sunset:{ background:'linear-gradient(140deg,#fff2ea 0%,#ffe6de 50%,#ffd9e8 100%)',
    glass:'rgba(255,255,255,0.20)', glassBorder:'rgba(255,255,255,0.32)',
    textPrimary:'#5b2a00', textSecondary:'rgba(91,42,0,0.86)', textMuted:'rgba(91,42,0,0.65)',
    buttonHover:'rgba(255,255,255,0.26)', title1:'#5b2a00', title2:'#8a4b1a', footer:'rgba(0,0,0,0.14)' },
  forest:{ background:'linear-gradient(140deg,#edf6ed 0%,#e4f1e5 50%,#dcebdd 100%)',
    glass:'rgba(255,255,255,0.22)', glassBorder:'rgba(255,255,255,0.34)',
    textPrimary:'#1f3a16', textSecondary:'rgba(31,58,22,0.86)', textMuted:'rgba(31,58,22,0.65)',
    buttonHover:'rgba(255,255,255,0.28)', title1:'#1f3a16', title2:'#3a6b29', footer:'rgba(0,0,0,0.14)' },
  purple:{ background:'linear-gradient(140deg,#f3eaff 0%,#eadcfb 50%,#e2d0f6 100%)',
    glass:'rgba(255,255,255,0.19)', glassBorder:'rgba(255,255,255,0.30)',
    textPrimary:'#3a1d57', textSecondary:'rgba(58,29,87,0.86)', textMuted:'rgba(58,29,87,0.65)',
    buttonHover:'rgba(255,255,255,0.24)', title1:'#3a1d57', title2:'#6a43a0', footer:'rgba(0,0,0,0.14)' },
  dark:{ background:'linear-gradient(140deg,#1e1e1f 0%,#232427 50%,#272a2e 100%)',
    glass:'rgba(255,255,255,0.10)', glassBorder:'rgba(255,255,255,0.18)',
    textPrimary:'#ffffff', textSecondary:'rgba(255,255,255,0.86)', textMuted:'rgba(255,255,255,0.65)',
    buttonHover:'rgba(255,255,255,0.16)', title1:'#ffffff', title2:'rgba(235,235,240,.92)', footer:'rgba(255,255,255,0.10)' },
  neon:{ background:'linear-gradient(140deg,#111a26 0%,#142233 50%,#17283b 100%)',
    glass:'rgba(0,255,255,0.14)', glassBorder:'rgba(0,255,255,0.32)',
    textPrimary:'#c4f3ff', textSecondary:'rgba(196,243,255,0.9)', textMuted:'rgba(196,243,255,0.7)',
    buttonHover:'rgba(0,255,255,0.22)', title1:'#d9fbff', title2:'#9be8ff', footer:'rgba(255,255,255,0.12)' },
  rose:{ background:'linear-gradient(140deg,#fff1f4 0%,#ffe8ef 50%,#ffe0ea 100%)',
    glass:'rgba(139,90,107,0.14)', glassBorder:'rgba(139,90,107,0.24)',
    textPrimary:'#5b2f3b', textSecondary:'rgba(91,47,59,0.86)', textMuted:'rgba(91,47,59,0.68)',
    buttonHover:'rgba(139,90,107,0.18)', title1:'#5b2f3b', title2:'#7a4350', footer:'rgba(0,0,0,0.14)' },
  mint:{ background:'linear-gradient(140deg,#e9f7f0 0%,#e4f1f4 50%,#e8e9f3 100%)',
    glass:'rgba(44,85,48,0.12)', glassBorder:'rgba(44,85,48,0.20)',
    textPrimary:'#1f3e24', textSecondary:'rgba(31,62,36,0.86)', textMuted:'rgba(31,62,36,0.68)',
    buttonHover:'rgba(44,85,48,0.16)', title1:'#14321b', title2:'#2c5530', footer:'rgba(0,0,0,0.14)' }
};

/* ---------- UNITS ---------- */
const unitDefinitions = {
  length:{ name:'Length (ความยาว)', baseUnit:'meter', units:{
    millimeter:{ name:'Millimeter (มิลลิเมตร, mm)', factor:0.001 },
    centimeter:{ name:'Centimeter (เซนติเมตร, cm)', factor:0.01 },
    meter:{ name:'Meter (เมตร, m)', factor:1 },
    kilometer:{ name:'Kilometer (กิโลเมตร, km)', factor:1000 },
    inch:{ name:'Inch (นิ้ว, in)', factor:0.0254 },
    foot:{ name:'Foot (ฟุต, ft)', factor:0.3048 },
    yard:{ name:'Yard (หลา, yd)', factor:0.9144 },
    mile:{ name:'Mile (ไมล์, mi)', factor:1609.344 }
  }},
  weight:{ name:'Weight (น้ำหนัก)', baseUnit:'kilogram', units:{
    milligram:{ name:'Milligram (มิลลิกรัม, mg)', factor:0.000001 },
    gram:{ name:'Gram (กรัม, g)', factor:0.001 },
    kilogram:{ name:'Kilogram (กิโลกรัม, kg)', factor:1 },
    ton:{ name:'Tonne (ตัน, t)', factor:1000 },
    ounce:{ name:'Ounce (ออนซ์, oz)', factor:0.0283495 },
    pound:{ name:'Pound (ปอนด์, lb)', factor:0.453592 }
  }},
  temperature:{ name:'Temperature (อุณหภูมิ)', baseUnit:'celsius', units:{
    celsius:{ name:'Celsius (เซลเซียส, °C)', factor:1 },
    fahrenheit:{ name:'Fahrenheit (ฟาเรนไฮต์, °F)', factor:1 },
    kelvin:{ name:'Kelvin (เคลวิน, K)', factor:1 }
  }},
  area:{ name:'Area (พื้นที่)', baseUnit:'square_meter', units:{
    square_millimeter:{ name:'Square Millimeter (ตารางมิลลิเมตร, mm²)', factor:0.000001 },
    square_centimeter:{ name:'Square Centimeter (ตารางเซนติเมตร, cm²)', factor:0.0001 },
    square_meter:{ name:'Square Meter (ตารางเมตร, m²)', factor:1 },
    square_kilometer:{ name:'Square Kilometer (ตารางกิโลเมตร, km²)', factor:1000000 },
    rai:{ name:'Rai (ไร่)', factor:1600 },
    acre:{ name:'Acre (เอเคอร์)', factor:4046.86 }
  }},
  volume:{ name:'Volume (ปริมาตร)', baseUnit:'liter', units:{
    milliliter:{ name:'Milliliter (มิลลิลิตร, ml)', factor:0.001 },
    liter:{ name:'Liter (ลิตร, L)', factor:1 },
    cubic_meter:{ name:'Cubic Meter (ลูกบาศก์เมตร, m³)', factor:1000 },
    gallon:{ name:'Gallon (แกลลอน, gal)', factor:3.78541 },
    cup:{ name:'Cup (ถ้วย)', factor:0.236588 }
  }},
  speed:{ name:'Speed (ความเร็ว)', baseUnit:'meter_per_second', units:{
    meter_per_second:{ name:'Meter/Second (เมตร/วินาที, m/s)', factor:1 },
    kilometer_per_hour:{ name:'Kilometer/Hour (กิโลเมตร/ชั่วโมง, km/h)', factor:0.277778 },
    mile_per_hour:{ name:'Mile/Hour (ไมล์/ชั่วโมง, mph)', factor:0.44704 },
    knot:{ name:'Knot (นอต)', factor:0.514444 }
  }},
  time:{ name:'Time (เวลา)', baseUnit:'second', units:{
    millisecond:{ name:'Millisecond (มิลลิวินาที, ms)', factor:0.001 },
    second:{ name:'Second (วินาที, s)', factor:1 },
    minute:{ name:'Minute (นาที, min)', factor:60 },
    hour:{ name:'Hour (ชั่วโมง, h)', factor:3600 },
    day:{ name:'Day (วัน)', factor:86400 },
    week:{ name:'Week (สัปดาห์)', factor:604800 },
    month:{ name:'Month (เดือน)', factor:2629746 },
    year:{ name:'Year (ปี)', factor:31556952 }
  }},
  digital:{ name:'Digital Data (ข้อมูลดิจิทัล)', baseUnit:'byte', units:{
    bit:{ name:'Bit (บิต)', factor:0.125 },
    byte:{ name:'Byte (ไบต์, B)', factor:1 },
    kilobyte:{ name:'Kilobyte (กิโลไบต์, KB)', factor:1024 },
    megabyte:{ name:'Megabyte (เมกะไบต์, MB)', factor:1048576 },
    gigabyte:{ name:'Gigabyte (กิกะไบต์, GB)', factor:1073741824 },
    terabyte:{ name:'Terabyte (เทราไบต์, TB)', factor:1099511627776 }
  }},
  energy:{ name:'Energy (พลังงาน)', baseUnit:'joule', units:{
    joule:{ name:'Joule (จูล, J)', factor:1 },
    kilojoule:{ name:'Kilojoule (กิโลจูล, kJ)', factor:1000 },
    calorie:{ name:'Calorie (แคลอรี่, cal)', factor:4.184 },
    kilocalorie:{ name:'Kilocalorie (กิโลแคลอรี่, kcal)', factor:4184 },
    watt_hour:{ name:'Watt-hour (วัตต์-ชั่วโมง, Wh)', factor:3600 },
    kilowatt_hour:{ name:'Kilowatt-hour (กิโลวัตต์-ชั่วโมง, kWh)', factor:3600000 }
  }},
  pressure:{ name:'Pressure (ความดัน)', baseUnit:'pascal', units:{
    pascal:{ name:'Pascal (ปาสคาล, Pa)', factor:1 },
    kilopascal:{ name:'Kilopascal (กิโลปาสคาล, kPa)', factor:1000 },
    bar:{ name:'Bar (บาร์)', factor:100000 },
    atmosphere:{ name:'Atmosphere (บรรยากาศ, atm)', factor:101325 },
    psi:{ name:'PSI (พีเอสไอ)', factor:6894.76 }
  }}
};

/* ---------- STATE & DOM SHORTCUTS ---------- */
const qs = id => document.getElementById(id);
let conversionHistory = JSON.parse(localStorage.getItem('conversionHistory')) || [];
let currentCategory = 'length';
const themeSelect = qs('themeSelect');
let currentTheme = localStorage.getItem('selectedTheme');
if (!currentTheme || !themes[currentTheme]) { currentTheme = 'mint'; localStorage.setItem('selectedTheme','mint'); }

const categorySelect = qs('categorySelect');
const fromUnit = qs('fromUnit');
const toUnit = qs('toUnit');
const fromValue = qs('fromValue');
const toValue = qs('toValue');
const resultDisplay = qs('resultDisplay');
const resultText = qs('resultText');
const resultFormula = qs('resultFormula');
const historyList = qs('historyList');

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded', () => {
  themeSelect.value = currentTheme;
  applyTheme();
  updateUnitOptions();
  updateHistoryDisplay();
  renderQuickConversions();

  themeSelect.addEventListener('change', () => { currentTheme = themeSelect.value; localStorage.setItem('selectedTheme', currentTheme); applyTheme(); });
  categorySelect.addEventListener('change', () => { currentCategory = categorySelect.value; updateUnitOptions(); renderQuickConversions(); handleConvert(); });
  fromValue.addEventListener('input', handleConvert);
  fromUnit.addEventListener('change', handleConvert);
  toUnit.addEventListener('change', handleConvert);
  qs('convertBtn').addEventListener('click', handleConvert);
  qs('clearHistory').addEventListener('click', clearHistoryConfirm);
  qs('swapBtn').addEventListener('click', handleSwap);
  qs('exportJSON').addEventListener('click', exportToJSON);
  qs('exportCSV').addEventListener('click', exportToCSV);
  qs('importJSON').addEventListener('click', () => qs('importFile').click());
  qs('importFile').addEventListener('change', importFromJSON);
});

/* ---------- THEME APPLY ---------- */
function applyTheme(){
  const t = themes[currentTheme];
  const root = document.documentElement;
  document.body.style.background = t.background;
  root.style.setProperty('--glass-bg', t.glass);
  root.style.setProperty('--glass-border', t.glassBorder);
  root.style.setProperty('--text-primary', t.textPrimary);
  root.style.setProperty('--text-secondary', t.textSecondary);
  root.style.setProperty('--text-muted', t.textMuted);
  root.style.setProperty('--button-hover', t.buttonHover);
  root.style.setProperty('--title-grad-1', t.title1 || '#fff');
  root.style.setProperty('--title-grad-2', t.title2 || 'rgba(255,255,255,.9)');
  root.style.setProperty('--footer-bg', t.footer || 'rgba(0,0,0,0.14)');
  themeSelect.style.color = t.textPrimary;
}

/* ---------- CATEGORY & UNITS ---------- */
function updateUnitOptions(){
  const units = unitDefinitions[currentCategory].units;
  fromUnit.innerHTML = ''; toUnit.innerHTML = '';
  Object.entries(units).forEach(([key, u]) => { fromUnit.add(new Option(u.name, key)); toUnit.add(new Option(u.name, key)); });
  if (fromUnit.options.length>0) fromUnit.selectedIndex = 0;
  if (toUnit.options.length>1) toUnit.selectedIndex = 1;
}

/* ---------- CONVERSION ---------- */
function handleConvert(){
  const v = parseFloat(fromValue.value);
  if (isNaN(v) || fromValue.value===''){ toValue.value=''; resultDisplay.classList.add('hidden'); return; }
  const r = convertUnits(v, fromUnit.value, toUnit.value, currentCategory);
  toValue.value = r.toFixed(6).replace(/\.?0+$/,'');
  const fromName = unitDefinitions[currentCategory].units[fromUnit.value].name;
  const toName = unitDefinitions[currentCategory].units[toUnit.value].name;
  resultText.textContent = `${v} ${fromName} = ${toValue.value} ${toName}`;
  resultFormula.textContent = `${unitDefinitions[currentCategory].name}`;
  resultDisplay.classList.remove('hidden');
  addToHistory({ category:currentCategory, from:{ value:v, unit:fromUnit.value, name:fromName }, to:{ value:parseFloat(toValue.value), unit:toUnit.value, name:toName }, timestamp:new Date().toLocaleString('th-TH') });
}

function convertUnits(value, fromKey, toKey, category){
  if (category==='temperature'){ return convertTemperature(value, fromKey, toKey); }
  const d = unitDefinitions[category].units;
  return (value * d[fromKey].factor) / d[toKey].factor;
}

function convertTemperature(value, from, to){
  let c = (from==='celsius') ? value : (from==='fahrenheit' ? (value-32)*5/9 : value-273.15);
  return (to==='celsius') ? c : (to==='fahrenheit') ? c*9/5+32 : c+273.15;
}

/* ---------- HISTORY ---------- */
function addToHistory(conv){
  conversionHistory.unshift(conv);
  if (conversionHistory.length>3) conversionHistory = conversionHistory.slice(0,3);
  localStorage.setItem('conversionHistory', JSON.stringify(conversionHistory));
  updateHistoryDisplay();
}

function updateHistoryDisplay(){
  if (!conversionHistory.length){
    historyList.innerHTML = `<div class="text-dynamic-muted text-center py-8">No conversion history yet <span class="text-dynamic-secondary">(ยังไม่มีประวัติการแปลง)</span></div>`;
    return;
  }
  historyList.innerHTML = conversionHistory.map(i=>`
    <div class="history-item bg-white/10 p-2 sm:p-3 rounded-lg cursor-pointer hover:bg-white/20"
         onclick="loadFromHistory('${i.from.unit}','${i.to.unit}','${i.category}',${i.from.value})">
      <div class="text-dynamic-primary text-xs sm:text-sm font-medium break-words">${i.from.value} ${i.from.name}</div>
      <div class="text-dynamic-secondary text-xs break-words">= ${i.to.value} ${i.to.name}</div>
      <div class="text-dynamic-muted text-xs mt-1">${i.timestamp}</div>
    </div>`).join('');
}

function loadFromHistory(fromKey, toKey, category, value){
  categorySelect.value = category; currentCategory = category; updateUnitOptions();
  fromUnit.value = fromKey; toUnit.value = toKey; fromValue.value = value; handleConvert();
}

function clearHistoryConfirm(){
  if (confirm('Do you want to clear all conversion history?\n(คุณต้องการล้างประวัติการแปลงทั้งหมดหรือไม่?)')){
    conversionHistory = []; localStorage.setItem('conversionHistory', JSON.stringify(conversionHistory)); updateHistoryDisplay();
  }
}

/* ---------- UI ACTIONS ---------- */
function handleSwap(){
  const a = fromUnit.value, av = fromValue.value, bv = toValue.value;
  fromUnit.value = toUnit.value; toUnit.value = a; fromValue.value = bv || av; handleConvert();
  const btn = document.getElementById('swapBtn'); btn.style.transform='scale(0.9) rotate(180deg)'; setTimeout(()=>btn.style.transform='',200);
}

/* ---------- QUICK CONVERSIONS ---------- */
const quickData = {
  length:[
    { from:'meter', to:'centimeter', value:1, en:'1 m → cm', th:'(1 เมตร → เซนติเมตร)' },
    { from:'kilometer', to:'mile', value:1, en:'1 km → mi', th:'(1 กิโลเมตร → ไมล์)' },
    { from:'inch', to:'centimeter', value:1, en:'1 in → cm', th:'(1 นิ้ว → เซนติเมตร)' },
    { from:'foot', to:'meter', value:1, en:'1 ft → m', th:'(1 ฟุต → เมตร)' }
  ],
  weight:[
    { from:'kilogram', to:'pound', value:1, en:'1 kg → lb', th:'(1 กิโลกรัม → ปอนด์)' },
    { from:'gram', to:'ounce', value:100, en:'100 g → oz', th:'(100 กรัม → ออนซ์)' },
    { from:'ton', to:'kilogram', value:1, en:'1 t → kg', th:'(1 ตัน → กิโลกรัม)' },
    { from:'pound', to:'kilogram', value:1, en:'1 lb → kg', th:'(1 ปอนด์ → กิโลกรัม)' }
  ],
  temperature:[
    { from:'celsius', to:'fahrenheit', value:0, en:'0 °C → °F', th:'(0 องศาเซลเซียส → ฟาเรนไฮต์)' },
    { from:'celsius', to:'fahrenheit', value:100, en:'100 °C → °F', th:'(100 องศาเซลเซียส → ฟาเรนไฮต์)' },
    { from:'fahrenheit', to:'celsius', value:32, en:'32 °F → °C', th:'(32 ฟาเรนไฮต์ → เซลเซียส)' },
    { from:'kelvin', to:'celsius', value:273, en:'273 K → °C', th:'(273 เคลวิน → เซลเซียส)' }
  ],
  area:[
    { from:'square_meter', to:'square_centimeter', value:1, en:'1 m² → cm²', th:'(1 ตารางเมตร → ตารางเซนติเมตร)' },
    { from:'rai', to:'square_meter', value:1, en:'1 rai → m²', th:'(1 ไร่ → ตารางเมตร)' },
    { from:'acre', to:'rai', value:1, en:'1 acre → rai', th:'(1 เอเคอร์ → ไร่)' },
    { from:'square_kilometer', to:'rai', value:1, en:'1 km² → rai', th:'(1 ตารางกิโลเมตร → ไร่)' }
  ],
  volume:[
    { from:'liter', to:'milliliter', value:1, en:'1 L → ml', th:'(1 ลิตร → มิลลิลิตร)' },
    { from:'gallon', to:'liter', value:1, en:'1 gal → L', th:'(1 แกลลอน → ลิตร)' },
    { from:'cubic_meter', to:'liter', value:1, en:'1 m³ → L', th:'(1 ลูกบาศก์เมตร → ลิตร)' },
    { from:'cup', to:'milliliter', value:1, en:'1 cup → ml', th:'(1 ถ้วย → มิลลิลิตร)' }
  ],
  speed:[
    { from:'kilometer_per_hour', to:'meter_per_second', value:100, en:'100 km/h → m/s', th:'(100 กิโลเมตร/ชั่วโมง → เมตร/วินาที)' },
    { from:'mile_per_hour', to:'kilometer_per_hour', value:60, en:'60 mph → km/h', th:'(60 ไมล์/ชั่วโมง → กิโลเมตร/ชั่วโมง)' },
    { from:'knot', to:'kilometer_per_hour', value:10, en:'10 kn → km/h', th:'(10 นอต → กิโลเมตร/ชั่วโมง)' },
    { from:'meter_per_second', to:'kilometer_per_hour', value:10, en:'10 m/s → km/h', th:'(10 เมตร/วินาที → กิโลเมตร/ชั่วโมง)' }
  ],
  time:[
    { from:'hour', to:'minute', value:1, en:'1 hr → min', th:'(1 ชั่วโมง → นาที)' },
    { from:'day', to:'hour', value:1, en:'1 day → hr', th:'(1 วัน → ชั่วโมง)' },
    { from:'week', to:'day', value:1, en:'1 wk → days', th:'(1 สัปดาห์ → วัน)' },
    { from:'year', to:'day', value:1, en:'1 yr → days', th:'(1 ปี → วัน)' }
  ],
  digital:[
    { from:'gigabyte', to:'megabyte', value:1, en:'1 GB → MB', th:'(1 กิกะไบต์ → เมกะไบต์)' },
    { from:'megabyte', to:'kilobyte', value:1, en:'1 MB → KB', th:'(1 เมกะไบต์ → กิโลไบต์)' },
    { from:'terabyte', to:'gigabyte', value:1, en:'1 TB → GB', th:'(1 เทราไบต์ → กิกะไบต์)' },
    { from:'byte', to:'bit', value:1, en:'1 B → bit', th:'(1 ไบต์ → บิต)' }
  ],
  energy:[
    { from:'kilocalorie', to:'joule', value:1, en:'1 kcal → J', th:'(1 กิโลแคลอรี่ → จูล)' },
    { from:'kilowatt_hour', to:'joule', value:1, en:'1 kWh → J', th:'(1 กิโลวัตต์-ชั่วโมง → จูล)' },
    { from:'calorie', to:'joule', value:100, en:'100 cal → J', th:'(100 แคลอรี่ → จูล)' },
    { from:'kilojoule', to:'calorie', value:1, en:'1 kJ → cal', th:'(1 กิโลจูล → แคลอรี่)' }
  ],
  pressure:[
    { from:'bar', to:'pascal', value:1, en:'1 bar → Pa', th:'(1 บาร์ → ปาสคาล)' },
    { from:'atmosphere', to:'pascal', value:1, en:'1 atm → Pa', th:'(1 บรรยากาศ → ปาสคาล)' },
    { from:'psi', to:'pascal', value:1, en:'1 PSI → Pa', th:'(1 พีเอสไอ → ปาสคาล)' },
    { from:'kilopascal', to:'pascal', value:1, en:'1 kPa → Pa', th:'(1 กิโลปาสคาล → ปาสคาล)' }
] };

function renderQuickConversions(){
  const list = quickData[currentCategory] || [];
  const el = document.getElementById('quickConversions');
  el.innerHTML = list.map(item=>{
    const res = convertUnits(item.value, item.from, item.to, currentCategory);
    const out = (res < 0.01 && res !== 0) ? res.toExponential(2) : res.toFixed(2).replace(/\.00$/,'');
    return `
      <button class="bg-white/10 hover:bg-white/20 text-dynamic-primary text-xs sm:text-sm p-2 sm:p-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              data-from="${item.from}" data-to="${item.to}" data-value="${item.value}">
        <div class="quick-label-en">${item.en}</div>
        <div class="quick-label-th text-dynamic-secondary">${item.th}</div>
        <div class="text-dynamic-secondary text-xs sm:text-sm mt-1">${out}</div>
      </button>`;
  }).join('');
  el.onclick = (e)=>{
    const btn = e.target.closest('button[data-from]');
    if(!btn) return;
    fromUnit.value = btn.dataset.from;
    toUnit.value = btn.dataset.to;
    fromValue.value = btn.dataset.value;
    handleConvert();
  };
}

/* ---------- EXPORT / IMPORT ---------- */
function exportToJSON(){
  const data = { history:conversionHistory, exportDate:new Date().toISOString(), version:'1.0' };
  downloadBlob(JSON.stringify(data,null,2), `unit-converter-history-${dateStr()}.json`, 'application/json');
}
function exportToCSV(){
  const headers = ['Date/Time (วันที่เวลา)','Category (ประเภท)','From (จาก)','Value (ค่า)','To (เป็น)','Result (ผลลัพธ์)'];
  const rows = conversionHistory.map(i=>[`"${i.timestamp}"`,`"${unitDefinitions[i.category].name}"`,`"${i.from.name}"`,i.from.value,`"${i.to.name}"`,i.to.value].join(','));
  const csv = [headers.join(','), ...rows].join('\n');
  downloadBlob('\ufeff'+csv, `unit-converter-history-${dateStr()}.csv`, 'text/csv;charset=utf-8;');
}
function downloadBlob(content, filename, type){
  const blob = new Blob([content], { type }); const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url);
}
function dateStr(){ return new Date().toISOString().split('T')[0]; }

function importFromJSON(ev){
  const file = ev.target.files[0]; if (!file) return;
  const reader = new FileReader();
  reader.onload = (e)=>{
    try{
      const data = JSON.parse(e.target.result);
      if (Array.isArray(data.history)){
        conversionHistory = data.history; localStorage.setItem('conversionHistory', JSON.stringify(conversionHistory)); updateHistoryDisplay(); alert('นำเข้าข้อมูลสำเร็จ!');
      } else alert('รูปแบบไฟล์ไม่ถูกต้อง');
    }catch{ alert('เกิดข้อผิดพลาดในการอ่านไฟล์'); }
  };
  reader.readAsText(file); ev.target.value = '';
}

