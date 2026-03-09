// ==========================================
// 1. マスターデータ（成分・ラベル・ステータス）
// ==========================================

const ingredients = [
    { id: 'pdrn', name: 'PDRN', texture: 'water', time: 0, scores: { moisture: 70, brightening: 30, antiAging: 95, barrier: 85 }, concerns: ['aging', 'barrier', 'texture'], info: 'サーモン由来の再生成分。肌の修復力を高め、内側からパンッとしたハリを与えます。', isTrend: true },
    { id: 'gluta', name: 'グルタチオン', texture: 'water', time: 0, scores: { moisture: 40, brightening: 100, antiAging: 50, barrier: 30 }, concerns: ['brightening'], info: '「白玉点滴」の主成分。強力な抗酸化作用で、くすみを飛ばして透明感を底上げします。', isTrend: true },
    { id: 'spicule', name: 'スピキュール', texture: 'water', time: 2, scores: { moisture: 30, brightening: 50, antiAging: 75, barrier: 40 }, concerns: ['texture', 'pore'], info: '天然の微細針（話題の「リードルショット」などの主成分）。肌にチクチクとした刺激を与え、美容成分の通り道を作ることで浸透を劇的に助けます。', isTrend: true },
    { id: 'exosome', name: 'エクソソーム', texture: 'water', time: 0, scores: { moisture: 65, brightening: 45, antiAging: 100, barrier: 90 }, concerns: ['aging', 'barrier', 'texture'], info: '細胞伝達を担う次世代成分。肌の自己再生能力を呼び覚ます、エイジングケアの決定版。', isTrend: true },
    { id: 'azelaic', name: 'アゼライン酸', texture: 'water', time: 0, scores: { moisture: 20, brightening: 60, antiAging: 30, barrier: 45 }, concerns: ['acne', 'pore'], info: '皮脂トラブルや赤みに強い味方。ニキビ跡や肌のざらつきが気になる方に。', isTrend: true },
    { id: 'retinol', name: 'レチノール', texture: 'oil', time: 2, scores: { moisture: 25, brightening: 45, antiAging: 95, barrier: 15 }, concerns: ['wrinkle', 'aging', 'texture'], info: 'ビタミンA。ターンオーバーを促進し、小じわやキメにアプローチ。夜専用です。' },
    { id: 'vitC', name: 'ビタミンC', texture: 'water', time: 1, scores: { moisture: 35, brightening: 90, antiAging: 55, barrier: 25 }, concerns: ['brightening', 'pore', 'texture'], info: '鮮度の高いピュアビタミン。毛穴を引き締め、紫外線ダメージをブロックします。' },
    { id: 'niacin', name: 'ナイアシン', texture: 'water', time: 0, scores: { moisture: 65, brightening: 65, antiAging: 60, barrier: 75 }, concerns: ['wrinkle', 'brightening', 'barrier'], info: 'シワ改善と美白のマルチプレイヤー。バリア機能を助けるので、守りのケアにも。' },
    { id: 'ceramide', name: 'セラミド', texture: 'oil', time: 0, scores: { moisture: 85, brightening: 10, antiAging: 35, barrier: 100 }, concerns: ['barrier', 'moisture'], info: '肌のバリアを支える必須成分。乾燥から守り、ゆらぎにくい強い肌を作ります。' },
    { id: 'hyalur', name: 'ヒアルロン酸', texture: 'water', time: 0, scores: { moisture: 100, brightening: 15, antiAging: 25, barrier: 55 }, concerns: ['moisture'], info: '圧倒的な保水力。インナードライを解消し、一日中みずみずしい肌をキープ。' },
    { id: 'cica', name: 'CICA', texture: 'water', time: 0, scores: { moisture: 55, brightening: 25, antiAging: 25, barrier: 85 }, concerns: ['acne', 'barrier'], info: 'ツボクサエキス。赤みや炎症を鎮め、肌荒れを防ぐお守り成分です。' },
    { id: 'tranex', name: 'トラネキサム酸', texture: 'water', time: 0, scores: { moisture: 45, brightening: 85, antiAging: 25, barrier: 45 }, concerns: ['brightening', 'acne'], info: 'シミや肝斑の予防に。炎症を抑えながら、透明感のあるトーンへ整えます。' },
    { id: 'pept', name: 'ペプチド', texture: 'water', time: 0, scores: { moisture: 55, brightening: 25, antiAging: 85, barrier: 45 }, concerns: ['wrinkle', 'aging'], info: '肌の構成成分にアプローチ。塗るボトックスとも呼ばれ、ハリと弾力を高めます。' },
    { id: 'panthe', name: 'パンテノール', texture: 'water', time: 0, scores: { moisture: 75, brightening: 20, antiAging: 30, barrier: 95 }, concerns: ['barrier', 'moisture'], info: 'プロビタミンB5。肌を修復し、水分保持能力を高める「潤いのバリア」です。' },
    { id: 'bakuchi', name: 'バクチオール', texture: 'oil', time: 0, scores: { moisture: 45, brightening: 35, antiAging: 80, barrier: 55 }, concerns: ['aging', 'wrinkle'], info: '次世代レチノール。低刺激で日中も使えるため、敏感肌の方のエイジングケアに。' },
    { id: 'galacto', name: 'ガラクトミセス', texture: 'water', time: 0, scores: { moisture: 65, brightening: 55, antiAging: 45, barrier: 55 }, concerns: ['texture', 'brightening'], info: '天然酵母由来。キメを整え、肌トーンを均一に。毛穴の目立たないツヤ肌へ。' },
    { id: 'collagen', name: 'コラーゲン', texture: 'water', time: 0, scores: { moisture: 75, brightening: 15, antiAging: 65, barrier: 35 }, concerns: ['wrinkle', 'moisture'], info: '低分子コラーゲン。肌密度を高め、ふっくらとした若々しい印象を作ります。' },
    { id: 'bifida', name: 'ビフィズス菌', texture: 'water', time: 0, scores: { moisture: 70, brightening: 40, antiAging: 55, barrier: 80 }, concerns: ['barrier', 'texture'], info: '発酵成分。肌の常在菌バランスを整え、外的刺激に負けない健康な肌へ。' },
    { id: 'salicyl', name: 'サリチル酸', texture: 'water', time: 2, scores: { moisture: 15, brightening: 45, antiAging: 25, barrier: 15 }, concerns: ['pore', 'acne'], info: 'BHAの一種。毛穴の奥の皮脂汚れを取り除き、イチゴ鼻やニキビを防ぎます。' },
    { id: 'proteo', name: 'プロテオグリカン', texture: 'water', time: 0, scores: { moisture: 95, brightening: 30, antiAging: 70, barrier: 60 }, concerns: ['moisture', 'aging'], info: 'ヒアルロン酸を超える保水力。ぷるんとしたハリと潤いを長時間持続させます。' }
];

const concernLabels = { wrinkle: 'シワ', aging: 'ハリ', texture: 'キメ', brightening: '美白', pore: '毛穴', acne: '肌荒れ', moisture: '乾燥', barrier: 'バリア' };

const compatibilityMap = {
    'aha_bha-retinol': { status: 'ng', title: '絶対NG！', detail: '強い成分同士で肌への負担が大きすぎます。バリア機能が壊れる恐れも。' },
    'aha_bha-vitC': { status: 'caution', title: '慎重に選んで', detail: 'どちらも酸性のため、刺激が出やすいです。使うなら朝夜で分けて。' },
    'retinol-vitC': { status: 'caution', title: '時間差で使って', detail: '朝ビタミンC、夜レチノールが理想。同時に使うと酸化により効果が半減します。' }
};

const statusLabels = { ok: 'CHECK OK', caution: 'CAUTION', ng: 'DANGER' };

// ==========================================
// 2. 状態管理と初期化
// ==========================================

let selected = [];
let myChart = null;

// 悩みフィルター生成
const filterContainer = document.getElementById('filter-container');
Object.keys(concernLabels).forEach(key => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.innerText = concernLabels[key];
    btn.onclick = () => toggleFilter(key, btn);
    filterContainer.appendChild(btn);
});

// 成分ボタン生成
// 成分ボタン生成（最新のトレンドバッジ対応版）
const grid = document.getElementById('ingredient-grid');

ingredients.forEach(item => {
    const btn = document.createElement('button');
    btn.className = 'ingredient-btn';
    
    // 1. トレンドフラグがある場合、バッジを先に作る
    if (item.isTrend) {
        btn.classList.add('is-trend');
        const badge = document.createElement('span');
        badge.className = 'trend-badge';
        badge.innerText = 'HOT'; 
        btn.appendChild(badge); // ボタンの中にバッジを入れる
    }
    
    // 2. 成分名のテキストを追加（innerTextの代わり！）
    const nameText = document.createTextNode(item.name);
    btn.appendChild(nameText); // バッジを消さずにテキストを追加
    
    // 3. クリックイベント（これは以前と同じ）
    btn.onclick = () => handleSelect(item.id, btn);
    
    grid.appendChild(btn);
});

// AM/PM切り替えイベント（リアルタイム判定用）
document.getElementById('mode-toggle').addEventListener('change', () => {
    if (selected.length === 2) checkCompatibility();
});

updateHistoryUI();

// ==========================================
// 3. ロジック関数
// ==========================================

function toggleFilter(concernId, btn) {
    const isActive = btn.classList.contains('active');
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.ingredient-btn').forEach(b => b.classList.remove('highlight'));
    if (!isActive) {
        btn.classList.add('active');
        ingredients.forEach((ing, i) => { if (ing.concerns.includes(concernId)) grid.children[i].classList.add('highlight'); });
    }
}

function handleSelect(id, btn) {
    if (selected.includes(id)) {
        selected = selected.filter(i => i !== id);
        btn.classList.remove('selected');
        document.getElementById('result-container').classList.add('hidden');
    } else {
        if (selected.length >= 2) {
            selected = [];
            document.querySelectorAll('.ingredient-btn').forEach(b => b.classList.remove('selected'));
        }
        selected.push(id);
        btn.classList.add('selected');
    }
    if (selected.length === 2) checkCompatibility();
}

function checkCompatibility() {
    const sorted = [...selected].sort();
    const key = sorted.join('-');
    const ing1 = ingredients.find(i => i.id === selected[0]);
    const ing2 = ingredients.find(i => i.id === selected[1]);
    const isPM = document.getElementById('mode-toggle').checked;

    // 1. 基本相性
    let baseResult = compatibilityMap[key] || { status: 'ok', title: '安定のペア', detail: '安心してお使いいただけます。' };

    // 2. 時間帯チェック
    let timeWarning = "";
    if (!isPM) {
        if (ing1.time === 2) timeWarning += `・${ing1.name}は夜専用です。<br>`;
        if (ing2.time === 2) timeWarning += `・${ing2.name}は夜専用です。<br>`;
    }

    let finalResult = { ...baseResult };

    if (timeWarning) {
        finalResult.status = 'ng';
        finalResult.title = '朝の使用は控えて';
        finalResult.detail = `【成分の注意】<br>${timeWarning}紫外線で肌を傷める可能性があります。<br><br>【ペアの相性】<br>${baseResult.detail}`;
    } else {
        finalResult.detail = `${baseResult.detail}`;
    }

    displayResult(finalResult, getOrder(ing1, ing2), getSynergy(ing1, ing2), ing1, ing2);
}

// ==========================================
// 4. UI表示関数
// ==========================================

function displayResult(res, order, synergy, ing1, ing2) {
    const card = document.getElementById('result-container');
    const titleEl = document.getElementById('result-title');
    const detailEl = document.getElementById('result-detail');
    const statusEl = document.getElementById('result-status');
    const tagContainer = document.getElementById('concern-tags');
    
    // バッジとタイトルの更新
    statusEl.innerText = statusLabels[res.status];
    statusEl.className = `status-badge bg-${res.status}`;
    titleEl.innerText = res.title;
    titleEl.className = `result-main-title color-${res.status}`;
    
    tagContainer.innerHTML = '';
    document.getElementById('deep-dive-content').innerHTML = `<strong>${ing1.name}:</strong> ${ing1.info}<br><br><strong>${ing2.name}:</strong> ${ing2.info}`;
    
    if (res.status === 'ng' && titleEl.innerText === '朝の使用は控えて') {
        // 時間帯警告の場合
        detailEl.innerHTML = res.detail;
        document.querySelector('.chart-wrapper').style.display = 'none';
    } else if (res.status === 'ng') {
        // 通常の相性NGの場合
        detailEl.innerHTML = `【ペアの相性】<br>${res.detail}`;
        document.querySelector('.chart-wrapper').style.display = 'none';
    } else {
        // OKまたはCautionの場合
        detailEl.innerHTML = `<strong>【お手入れの順序】</strong><br>${order}<br><br>【ペアの相性】<br>${res.detail}`;
        document.querySelector('.chart-wrapper').style.display = 'block';
        displayChart(synergy);
        [...new Set([...ing1.concerns, ...ing2.concerns])].forEach(c => {
            const span = document.createElement('span');
            span.className = 'tag' + (ing1.concerns.includes(c) && ing2.concerns.includes(c) ? ' match' : '');
            span.innerText = (ing1.concerns.includes(c) && ing2.concerns.includes(c) ? '✨ ' : '#') + concernLabels[c];
            tagContainer.appendChild(span);
        });
    }
    card.classList.remove('hidden');
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ヘルパー関数
function getOrder(i1, i2) { return (i1.texture==='water'&&i2.texture==='oil') ? `${i1.name} → ${i2.name}` : (i1.texture==='oil'&&i2.texture==='water') ? `${i2.name} → ${i1.name}` : "テクスチャーの軽い順に"; }
function getSynergy(i1, i2) { return { moisture: i1.scores.moisture + i2.scores.moisture, brightening: i1.scores.brightening + i2.scores.brightening, antiAging: i1.scores.antiAging + i2.scores.antiAging, barrier: i1.scores.barrier + i2.scores.barrier }; }

function displayChart(data) {
    const ctx = document.getElementById('compatibilityChart').getContext('2d');
    if (myChart) myChart.destroy();
    myChart = new Chart(ctx, {
        type: 'radar',
        data: { labels: ['保湿', '美白', 'ハリ', 'バリア'], datasets: [{ data: [data.moisture, data.brightening, data.antiAging, data.barrier], backgroundColor: 'rgba(212, 163, 115, 0.2)', borderColor: '#d4a373', borderWidth: 2, pointRadius: 0 }] },
        options: { scales: { r: { min: 0, max: 200, ticks: { display: false } } }, plugins: { legend: { display: false } } }
    });
}

// 画像保存・解説・履歴
document.getElementById('save-image-btn').onclick = () => {
    html2canvas(document.getElementById('result-container'), { backgroundColor: '#f9f5f2' }).then(c => {
        const a = document.createElement('a'); a.download = 'cosme-oracle.png'; a.href = c.toDataURL(); a.click();
    });
};
document.getElementById('deep-dive-btn').onclick = () => document.getElementById('deep-dive-content').classList.toggle('hidden');
document.getElementById('add-routine-btn').onclick = () => {
    const ing1 = ingredients.find(i => i.id === selected[0]);
    const ing2 = ingredients.find(i => i.id === selected[1]);
    const history = JSON.parse(localStorage.getItem('routineHistory') || '[]');
    history.unshift({ date: new Date().toLocaleDateString(), pair: `${ing1.name} & ${ing2.name}` });
    localStorage.setItem('routineHistory', JSON.stringify(history.slice(0, 8)));
    updateHistoryUI();
};
function updateHistoryUI() {
    const history = JSON.parse(localStorage.getItem('routineHistory') || '[]');
    document.getElementById('routine-history').innerHTML = history.map(h => `<div class="history-item"><span>${h.date}</span><strong>${h.pair}</strong></div>`).join('');
}