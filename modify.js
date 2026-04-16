const fs = require('fs');
let code = fs.readFileSync('index.html', 'utf-8');

// 1. replace icon
code = code.replace('<i class="fas fa-snowflake opacity-70 text-highlight"></i> 載入中...', '<i class="fas fa-sun opacity-70 text-highlight"></i> 載入中...');

// 2. replace main tag
const mainStart = code.indexOf('    <!-- 主內容區：背景使用極淺灰白 -->');
const mainEnd = code.indexOf('    </main>') + '    </main>'.length;

const newMain = `    <!-- 主內容區：背景使用極淺灰白 -->
    <main class="flex-grow relative bg-cream pb-20">
        <div class="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5 grayscale-[30%]"></div>
        
        <div class="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-12">
            
            <div class="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">
                
                <!-- 左側：狗狗照片 -->
                <div class="h-64 lg:h-[calc(100vh-140px)] lg:sticky top-28 relative overflow-hidden rounded-2xl shadow-soft group bg-sage-main">
                    <div id="slideshow-container" class="absolute inset-0 w-full h-full">
                        <img src="dog1.png" class="dog-slide absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-100" alt="Dog 1">
                        <img src="dog2.png" class="dog-slide absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-0" alt="Dog 2">
                        <img src="dog3.png" class="dog-slide absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-0" alt="Dog 3">
                        <img src="dog4.png" class="dog-slide absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-0" alt="Dog 4">
                        <img src="dog5.png" class="dog-slide absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-0" alt="Dog 5">
                        <img src="dog6.png" class="dog-slide absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-0" alt="Dog 6">
                    </div>

                    <div class="absolute inset-0 bg-forest-dark/20 z-10 transition-opacity group-hover:bg-forest-dark/5"></div>
                    <div class="absolute bottom-6 left-6 text-white text-left z-20 drop-shadow-md">
                        <h3 class="font-serif text-2xl italic">My Lovely Dogs</h3>
                        <p class="text-sm opacity-90 font-sans tracking-wide">Always by my side.</p>
                    </div>
                </div>

                <!-- 右側：五大區塊 -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">

                    <!-- AI 區 -->
                    <div id="view-ai" class="resource-card p-5 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:-translate-y-1 transition-transform">
                        <div class="flex items-center gap-3 mb-4 border-b border-gray-100 pb-3">
                            <div class="w-8 h-8 rounded-full bg-highlight/10 text-highlight flex items-center justify-center text-sm">
                                <i class="fas fa-robot"></i>
                            </div>
                            <h3 class="font-serif text-lg font-bold text-forest-dark">AI 區</h3>
                        </div>
                        
                        <div class="grid grid-cols-2 gap-3 mb-1">
                            <a href="https://chat.openai.com/" target="_blank" class="card-link">ChatGPT</a>
                            <a href="https://claude.ai/" target="_blank" class="card-link">Claude</a>
                            <a href="https://www.perplexity.ai/" target="_blank" class="card-link">Perplexity</a>
                            <a href="https://makersuite.google.com/" target="_blank" class="card-link">AI Studio</a>
                        </div>

                        <div id="ai-extra" class="grid grid-cols-2 gap-3 hidden mt-2 pb-1">
                            <a href="https://gemini.google.com/" target="_blank" class="card-link">Gemini</a>
                            <a href="https://notebooklm.google.com/" target="_blank" class="card-link">Notebook LM</a>
                            <a href="https://stitch.withgoogle.com/" target="_blank" class="card-link">Stitch</a>
                            <a href="https://app.edcafe.ai/me/home" target="_blank" class="card-link">EDcafe</a>
                        </div>

                        <button id="ai-btn" onclick="toggleMore('ai')" class="mt-auto pt-4 text-highlight text-sm font-bold w-full text-center hover:opacity-80 transition-opacity flex items-center justify-center gap-1 group">
                            查看更多 <i class="fas fa-chevron-down group-hover:translate-y-0.5 transition-transform"></i>
                        </button>
                    </div>

                    <!-- 放鬆區 -->
                    <div id="view-relax" class="resource-card p-5 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:-translate-y-1 transition-transform">
                        <div class="flex items-center gap-3 mb-4 border-b border-gray-100 pb-3">
                            <div class="w-8 h-8 rounded-full bg-highlight/10 text-highlight flex items-center justify-center text-sm">
                                <i class="fas fa-mug-hot"></i>
                            </div>
                            <h3 class="font-serif text-lg font-bold text-forest-dark">放鬆區</h3>
                        </div>
                        
                        <div class="grid grid-cols-2 gap-3 mb-1">
                            <a href="https://www.facebook.com/" target="_blank" class="card-link">Facebook</a>
                            <a href="https://www.instagram.com/" target="_blank" class="card-link">Instagram</a>
                            <a href="https://www.threads.net/" target="_blank" class="card-link">Threads</a>
                            <a href="https://www.youtube.com/" target="_blank" class="card-link">YouTube</a>
                        </div>

                        <div id="relax-extra" class="grid grid-cols-2 gap-3 hidden mt-2 pb-1">
                            <a href="https://94580.net/" target="_blank" class="card-link">94580</a>
                            <a href="https://shopee.tw/" target="_blank" class="card-link">蝦皮購物</a>
                            <a href="https://www.momoshop.com.tw/" target="_blank" class="card-link">Momo購物</a>
                            <a href="https://24h.pchome.com.tw/" target="_blank" class="card-link">PChome 24h</a>
                        </div>

                        <button id="relax-btn" onclick="toggleMore('relax')" class="mt-auto pt-4 text-highlight text-sm font-bold w-full text-center hover:opacity-80 transition-opacity flex items-center justify-center gap-1 group">
                            查看更多 <i class="fas fa-chevron-down group-hover:translate-y-0.5 transition-transform"></i>
                        </button>
                    </div>

                    <!-- 工具區 -->
                    <div id="view-tools" class="resource-card p-5 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:-translate-y-1 transition-transform sm:col-span-2">
                        <div class="flex items-center gap-3 mb-4 border-b border-gray-100 pb-3">
                            <div class="w-8 h-8 rounded-full bg-highlight/10 text-highlight flex items-center justify-center text-sm">
                                <i class="fas fa-wrench"></i>
                            </div>
                            <h3 class="font-serif text-lg font-bold text-forest-dark">工具區</h3>
                        </div>
                        
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-1">
                            <a href="https://drive.google.com/" target="_blank" class="card-link">Google 雲端</a>
                            <a href="https://www.notion.so/" target="_blank" class="card-link">Notion</a>
                            <a href="https://keep.google.com/" target="_blank" class="card-link">Keep</a>
                            <a href="https://calendar.google.com/" target="_blank" class="card-link">Google 日曆</a>
                        </div>

                        <div id="tools-extra" class="grid grid-cols-2 sm:grid-cols-4 gap-3 hidden mt-2 pb-1">
                            <a href="https://mail.google.com/" target="_blank" class="card-link">Gmail</a>
                            <a href="https://translate.google.com/" target="_blank" class="card-link">Google 翻譯</a>
                            <a href="https://github.com/chuoneone?tab=repositories" target="_blank" class="card-link">GitHub</a>
                            <a href="https://docs.google.com/" target="_blank" class="card-link">Google 文件</a>
                            <a href="https://slides.google.com/" target="_blank" class="card-link">Google 簡報</a>
                            <a href="https://sheets.google.com/" target="_blank" class="card-link">Google 試算表</a>
                            <a href="https://forms.google.com/" target="_blank" class="card-link">Google 表單</a>
                            <a href="https://login.microsoftonline.com/" target="_blank" class="card-link">Office 365</a>
                            <a href="https://www.canva.com/zh_tw/" target="_blank" class="card-link">Canva</a>
                            <a href="https://classroom.google.com/" target="_blank" class="card-link">Classroom</a>
                            <a href="https://soundoftext.com/" target="_blank" class="card-link">文字轉語音</a>
                            <a href="https://naozhong.tw/設置計時器-5-分鐘/" target="_blank" class="card-link">線上計時器</a>
                            <a href="https://wordwall.net/" target="_blank" class="card-link">Wordwall</a>
                            <a href="https://quizizz.com/" target="_blank" class="card-link">Quizizz</a>
                            <a href="https://dashboard.blooket.com/" target="_blank" class="card-link">Blooket</a>
                            <a href="https://www.gimkit.com/" target="_blank" class="card-link">Gimkit</a>
                            <a href="https://create.kahoot.it/" target="_blank" class="card-link">Kahoot</a>
                        </div>

                        <button id="tools-btn" onclick="toggleMore('tools')" class="mt-auto pt-4 text-highlight text-sm font-bold w-full text-center hover:opacity-80 transition-opacity flex items-center justify-center gap-1 group">
                            查看更多 <i class="fas fa-chevron-down group-hover:translate-y-0.5 transition-transform"></i>
                        </button>
                    </div>

                    <!-- 教學區 -->
                    <div id="view-teach" class="resource-card p-5 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:-translate-y-1 transition-transform">
                        <div class="flex items-center gap-3 mb-4 border-b border-gray-100 pb-3">
                            <div class="w-8 h-8 rounded-full bg-highlight/10 text-highlight flex items-center justify-center text-sm">
                                <i class="fas fa-chalkboard-teacher"></i>
                            </div>
                            <h3 class="font-serif text-lg font-bold text-forest-dark">教學區</h3>
                        </div>
                        
                        <div class="grid grid-cols-2 gap-3 mb-1">
                            <a href="https://edisc3.hle.com.tw/" target="_blank" class="card-link">翰林電子書</a>
                            <a href="https://nanibox3.oneclass.com.tw/" target="_blank" class="card-link">南一資源</a>
                            <a href="https://digitalmaster.knsh.com.tw/" target="_blank" class="card-link">康軒電子書</a>
                            <a href="https://hanlindigi.hle.com.tw/" target="_blank" class="card-link">翰林平台</a>
                        </div>

                        <div id="teach-extra" class="grid grid-cols-2 gap-3 hidden mt-2 pb-1">
                            <a href="https://mgz.hle.com.tw/" target="_blank" class="card-link">期刊大師</a>
                            <a href="https://emath.math.ncu.edu.tw/" target="_blank" class="card-link">子由數學</a>
                            <a href="https://subjects.modernedu.hk/" target="_blank" class="card-link">數學 App</a>
                            <a href="https://polypad.amplify.com/" target="_blank" class="card-link">Mathigon</a>
                            <a href="https://www.geogebra.org/" target="_blank" class="card-link">繪圖計算機</a>
                            <a href="https://aaclearningbackend.azurewebsites.net/" target="_blank" class="card-link">AAC</a>
                            <a href="https://www.learnmode.net/" target="_blank" class="card-link">學習吧</a>
                            <a href="https://teach.classdojo.com/" target="_blank" class="card-link">ClassDojo</a>
                            <a href="https://sites.google.com/view/specialchu/home" target="_blank" class="card-link">線上學習區</a>
                            <a href="https://toytheater.com/" target="_blank" class="card-link">Toy Theater</a>
                            <a href="https://nanipaper.oneclass.com.tw/" target="_blank" class="card-link">南一出題</a>
                            <a href="https://quiz.knsh.com.tw/" target="_blank" class="card-link">康軒出題</a>
                            <a href="https://testbank.hle.com.tw/" target="_blank" class="card-link">翰林出題</a>
                        </div>

                        <button id="teach-btn" onclick="toggleMore('teach')" class="mt-auto pt-4 text-highlight text-sm font-bold w-full text-center hover:opacity-80 transition-opacity flex items-center justify-center gap-1 group">
                            查看更多 <i class="fas fa-chevron-down group-hover:translate-y-0.5 transition-transform"></i>
                        </button>
                    </div>

                    <!-- 行政區 -->
                    <div id="view-admin" class="resource-card p-5 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:-translate-y-1 transition-transform">
                        <div class="flex items-center gap-3 mb-4 border-b border-gray-100 pb-3">
                            <div class="w-8 h-8 rounded-full bg-highlight/10 text-highlight flex items-center justify-center text-sm">
                                <i class="fas fa-folder-open"></i>
                            </div>
                            <h3 class="font-serif text-lg font-bold text-forest-dark">行政區</h3>
                        </div>
                        
                        <div class="grid grid-cols-2 gap-3 mb-1">
                            <a href="https://www.set.edu.tw/" target="_blank" class="card-link">特通網</a>
                            <a href="https://eschool.hlc.edu.tw/" target="_blank" class="card-link">全誼校務系統</a>
                            <a href="https://news.hlc.edu.tw/" target="_blank" class="card-link">花蓮處務公告</a>
                            <a href="https://srec.hlc.edu.tw/" target="_blank" class="card-link">特教資源網</a>
                        </div>

                        <div id="admin-extra" class="grid grid-cols-2 gap-3 hidden mt-2 pb-1">
                            <a href="https://special.moe.gov.tw/" target="_blank" class="card-link">特教研習</a>
                            <a href="https://www1.inservice.edu.tw/" target="_blank" class="card-link">全國研習</a>
                            <a href="https://drive.google.com/drive/folders/15F9f5dW6PHYode_w1opdEKLYkoNKmnMe" target="_blank" class="card-link">鑑定表單</a>
                            <a href="https://www.irasutoya.com/" target="_blank" class="card-link">Irasutoya</a>
                            <a href="https://www.flaticon.com/" target="_blank" class="card-link">Flaticon</a>
                            <a href="https://chojugiga.com/" target="_blank" class="card-link">鳥獸戲畫</a>
                        </div>

                        <button id="admin-btn" onclick="toggleMore('admin')" class="mt-auto pt-4 text-highlight text-sm font-bold w-full text-center hover:opacity-80 transition-opacity flex items-center justify-center gap-1 group">
                            查看更多 <i class="fas fa-chevron-down group-hover:translate-y-0.5 transition-transform"></i>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </main>`;

code = code.substring(0, mainStart) + newMain + code.substring(mainEnd);

// 3. script js replacement
const jsStartStr = '            // --- 備忘錄核心邏輯 ---';
const jsEndStr = '            setInterval(updateCountdown, 60000);';
const jsStartIdx = code.indexOf(jsStartStr);
const jsEndIdx = code.indexOf(jsEndStr) + jsEndStr.length;

const newJs = `            // --- 展開查看更多功能 ---
            window.toggleMore = function(id) {
                const container = document.getElementById(id + '-extra');
                const btn = document.getElementById(id + '-btn');
                if (container.classList.contains('hidden')) {
                    container.classList.remove('hidden');
                    btn.innerHTML = '收起 <i class="fas fa-chevron-up group-hover:-translate-y-0.5 transition-transform"></i>';
                } else {
                    container.classList.add('hidden');
                    btn.innerHTML = '查看更多 <i class="fas fa-chevron-down group-hover:translate-y-0.5 transition-transform"></i>';
                }
            };

            // --- 倒數計時功能 ---
            function updateCountdown() {
                const countdownElement = document.getElementById('nav-countdown'); 
                if (!countdownElement) return;
                
                // 設定暑假日期
                const targetDate = new Date('2026-07-01');
                const today = new Date();
                const diffTime = targetDate - today;
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                let countdownText = '';
                if (diffDays > 0) {
                    countdownText = \`暑假倒數 \${diffDays} 天\`;
                } else if (diffDays === 0) {
                    countdownText = \`暑假就是今天！🎉\`;
                } else {
                    countdownText = \`假期愉快！\`;
                }
                countdownElement.innerHTML = \`<i class="fas fa-sun text-highlight"></i> \${countdownText}\`;
            }
            updateCountdown();
            setInterval(updateCountdown, 60000);`;

code = code.substring(0, jsStartIdx) + newJs + code.substring(jsEndIdx);

fs.writeFileSync('index.html', code);
