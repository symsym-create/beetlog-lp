/* phones.js — inject app UI mocks into phone shells */

const STATUS_BAR = `
  <div class="screen-status">
    <span>9:41</span>
    <span class="ss-r">
      <svg viewBox="0 0 18 12" fill="currentColor"><rect x="0" y="6" width="3" height="6" rx=".5"/><rect x="4" y="4" width="3" height="8" rx=".5"/><rect x="8" y="2" width="3" height="10" rx=".5"/><rect x="12" y="0" width="3" height="12" rx=".5"/></svg>
      <svg viewBox="0 0 24 12" fill="none" stroke="currentColor" stroke-width="1"><rect x=".5" y="1.5" width="20" height="9" rx="2"/><rect x="2" y="3" width="15" height="6" rx="1" fill="currentColor"/><rect x="21.5" y="4.5" width="1.5" height="3" rx=".5" fill="currentColor"/></svg>
    </span>
  </div>
`;

const SCREENS = {
  home: `
    ${STATUS_BAR}
    <div class="screen-hd">
      <h4>個体一覧</h4>
      <div class="sh-act" aria-hidden="true">+</div>
    </div>
    <div class="screen-search">
      <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="7" cy="7" r="5"/><path d="m11 11 3 3"/></svg>
      <span>種・血統で検索</span>
    </div>
    <div class="screen-chips">
      <span class="chip is-on">すべて 24</span>
      <span class="chip">国産オオ</span>
      <span class="chip">ヘラクレス</span>
      <span class="chip">ニジイロ</span>
    </div>
    <div class="screen-list">
      <div class="li-card">
        <div class="li-thumb"></div>
        <div class="li-body">
          <div class="li-name">国産オオクワガタ<span class="li-size">82.4mm</span></div>
          <div class="li-meta"><span>YG ✕ 能勢</span><span>CBF1</span></div>
        </div>
        <span class="li-tag is-male">♂</span>
      </div>
      <div class="li-card">
        <div class="li-thumb li-thumb--2"></div>
        <div class="li-body">
          <div class="li-name">ヘラクレス<span class="li-size">156mm</span></div>
          <div class="li-meta"><span>グアドループ</span><span>F4</span></div>
        </div>
        <span class="li-tag is-male">♂</span>
      </div>
      <div class="li-card">
        <div class="li-thumb li-thumb--3"></div>
        <div class="li-body">
          <div class="li-name">ニジイロクワガタ<span class="li-size">54.8mm</span></div>
          <div class="li-meta"><span>クイーンズランド</span><span>WF2</span></div>
        </div>
        <span class="li-tag">産卵中</span>
      </div>
      <div class="li-card">
        <div class="li-thumb li-thumb--4"></div>
        <div class="li-body">
          <div class="li-name">国産オオクワガタ<span class="li-size">48.2mm</span></div>
          <div class="li-meta"><span>YG</span><span>CBF1</span></div>
        </div>
        <span class="li-tag">♀</span>
      </div>
    </div>
  `,
  list: null, // alias to home
  breed: `
    ${STATUS_BAR}
    <div class="screen-hd">
      <h4>産卵セット</h4>
      <div class="sh-act" aria-hidden="true">+</div>
    </div>
    <div class="breed-summary">
      <div class="bs-title">SET-024 / 国産オオクワガタ</div>
      <div class="bs-stats">
        <div class="bs-cell">
          <div class="bs-k">産卵</div>
          <div class="bs-v">18<small>個</small></div>
        </div>
        <div class="bs-cell">
          <div class="bs-k">幼虫</div>
          <div class="bs-v">14<small>頭</small></div>
        </div>
        <div class="bs-cell">
          <div class="bs-k">日数</div>
          <div class="bs-v">42<small>日</small></div>
        </div>
      </div>
    </div>
    <div class="timeline">
      <div class="tl-item">
        <div class="tl-day">D+42</div>
        <div class="tl-body">
          <strong>割り出し予定</strong>
          <em>明日 / マット交換も</em>
        </div>
      </div>
      <div class="tl-item">
        <div class="tl-day">D+35</div>
        <div class="tl-body">
          <strong>産卵確認 +4</strong>
          累計 18 個 / 産卵木 B
        </div>
      </div>
      <div class="tl-item">
        <div class="tl-day">D+28</div>
        <div class="tl-body">
          <strong>産卵確認 +6</strong>
          累計 14 個
        </div>
      </div>
      <div class="tl-item">
        <div class="tl-day">D+14</div>
        <div class="tl-body">
          <strong>ペア投入</strong>
          ♂82.4 ✕ ♀48.2
        </div>
      </div>
    </div>
  `,
  tag: `
    ${STATUS_BAR}
    <div class="screen-hd">
      <h4>販売札</h4>
      <div class="sh-act" aria-hidden="true">↓</div>
    </div>
    <div class="screen--tag">
      <div class="tag-card">
        <div class="tag-mark">BeetLog Certified</div>
        <div class="tag-species">国産オオクワガタ ♂</div>
        <div class="tag-sci">Dorcus hopei binodulosus</div>
        <div class="tag-rows">
          <div class="tag-row"><span>サイズ</span><span>82.4 mm</span></div>
          <div class="tag-row"><span>血統</span><span>YG ✕ 能勢</span></div>
          <div class="tag-row"><span>累代</span><span>CBF1</span></div>
          <div class="tag-row"><span>羽化</span><span>2026.04</span></div>
          <div class="tag-row"><span>個体ID</span><span>BL-2604-082</span></div>
        </div>
        <div class="tag-foot">
          <div class="tag-price"><small>¥</small>38,000</div>
          <div class="tag-qr"></div>
        </div>
      </div>
    </div>
  `,
};

// Real screen images (when available) — override the HTML mocks
const SCREEN_IMAGES = {
  home:   'assets/screens/home.png',
  list:   'assets/screens/home.png',
  detail: 'assets/screens/individual-detail.png',
  breed:  'assets/screens/breed-list.png',
  tag:    'assets/screens/tag-template.png',
};

document.querySelectorAll('[data-phone]').forEach(el => {
  const key = el.dataset.phone === 'list' ? 'home' : el.dataset.phone;
  const realKey = el.dataset.phone;
  const cap = el.querySelector('.phone-cap');

  const screen = document.createElement('div');
  screen.className = 'screen' + (key === 'breed' ? ' screen--breed' : '');

  // Prefer a real screenshot if we have one
  const imgSrc = SCREEN_IMAGES[realKey] || SCREEN_IMAGES[key];
  if (imgSrc) {
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = '';
    img.className = 'screen-img';
    screen.appendChild(img);
  } else {
    const html = SCREENS[key];
    if (!html) return;
    screen.innerHTML = html;
  }

  el.appendChild(screen);
  if (cap) el.appendChild(cap);
});
