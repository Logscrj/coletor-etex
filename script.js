// Database de materiais
const materials = {
    "49060": "PROMASTOP UNICOLLAR EXPORT 2250X50X12MM",
    "50093": "PSEAL- PL-SK 2,5 SK/G str.coil 25m/20mm",
    "81975": "CEDRAL SIDING LISO NATURAL 2M40X0M20X8MM",
    "88043": "SUPERBOARD 2M40X1M20 10MM BORDA RETA",
    "92939": "CH V GYP RU BR12,5-120X180",
    "92940": "CH V GYP RU BR12,5-120X200",
    "92941": "CH V GYP RU BR12,5-120X220",
    "92943": "CH V GYP RU BR12,5-120X240",
    "92946": "CH V GYP RU BR12,5-120X250",
    "92950": "CH V GYP RU BR12,5-120X255",
    "92954": "CH V GYP RU BR12,5-120X260",
    "92955": "CH V GYP RU BR12,5-120X261",
    "92959": "CH V GYP RU BR12,5-120X265",
    "92960": "CH V GYP RU BR12,5-120X266",
    "92964": "CH V GYP RU BR12,5-120X270",
    "92966": "CH V GYP RU BR12,5-120X273",
    "92967": "CH V GYP RU BR12,5-120X275",
    "92970": "CH V GYP RU BR12,5-120X280",
    "92975": "CH V GYP RU BR12,5-120X290",
    "92981": "CH V GYP ST BQ9,5-1243X2510MM",
    "92982": "CH V GYP FGA BR12,5-060X200",
    "92983": "CH V GYP ST BR12,5-120X180",
    "92986": "CH V GYP ST BR12,5-120X200",
    "92989": "CH V GYP ST BR12,5-120X220",
    "92991": "CH V GYP ST BR12,5-120X225",
    "92992": "CH V GYP ST BR12,5-120X230",
    "92993": "CH V GYP ST BR12,5-120X240",
    "92999": "CH V GYP ST BR12,5-120X250",
    "93003": "CH V GYP ST BR12,5-120X255",
    "93008": "CH V GYP ST BR12,5-120X260",
    "93009": "CH V GYP ST BR12,5-120X261",
    "93012": "CH V GYP ST BR12,5-120X264",
    "93013": "CH V GYP ST BR12,5-120X265",
    "93014": "CH V GYP ST BR12,5-120X266",
    "93018": "CH V GYP ST BR12,5-120X270",
    "93022": "CH V GYP ST BR12,5-120X275",
    "93025": "CH V GYP ST BR12,5-120X280",
    "93031": "CH V GYP ST BR12,5-120X290",
    "93035": "CH V GYP ST BR12,5-120X300",
    "93037": "CH V GYP ST BR9,5-120X240",
    "93038": "CP V QUALIGESSOCOLA 20Kg",
    "93041": "CP V QUALIGESSOCOLA 5Kg",
    "93044": "GESSO V QUALIGESSO  60 40Kg",
    "93521": "CP V GYP MASSA PO 20Kg",
    "93522": "CP V GYP COLA 20Kg",
    "93524": "CP V GYP FGA COLA 20Kg",
    "94172": "CH V GYP RU BR12,5-120X210",
    "94443": "CH V GYP ST BR12,5-120X200 (OG)",
    "94444": "CH V GYP ST BR12,5-120X220 (OG)",
    "94458": "CH V GYP ST BR12,5-120X260 (OG)",
    "94460": "CH V GYP ST BR12,5-120X261 (OG)",
    "94461": "CH V GYP ST BR12,5-120X270 (OG)",
    "94462": "CH V GYP ST BR12,5-120X280 (OG)",
    "94463": "CH V GYP ST BR12,5-120X290 (OG)",
    "94474": "CH V GYP ST BR12,5-120X300 (OG)",
    "94476": "CH V GYP RU BR12,5-120X180 (OG)",
    "94477": "CH V GYP RU BR12,5-120X240 (OG)",
    "94478": "CH V GYP RU BR12,5-120X200 (OG)",
    "94479": "CH V GYP RU BR12,5-120X220 (OG)",
    "94500": "CH V GYP RU BR12,5-120X261 (OG)",
    "94501": "CH V GYP RU BR12,5-120X270 (OG)",
    "94520": "CH V GYP RU BR12,5-120X280 (OG)",
    "94521": "CH V GYP RU BR12,5-120X290 (OG)",
    "94522": "CH V GYP RU BR12,5-120X300 (OG)",
    "95762": "CH V GYP RU BR12,5-120X275 (OG)",
    "95763": "CH V GYP ST BR12,5-120X269 (OG)",
    "104772": "CP V GYP MASSA PO 20Kg (OG)",
    "105466": "CH I SOM L5/80 N8 BR 12,5-120X240",
    "105691": "SUPERBOARD SIDING LISO 200X2440X10MM",
    "105693": "SUPERBOARD SIDING MADERA 200X2440X10MM",
    "111551": "PROMASTOP-W 18m-coil 1 pc/box",
    "111746": "CP V GYP MASSA PO 5Kg",
    "112777": "CH I SOM R15N1 BR12,5-120X240 (OG)",
    "112853": "CH I SOM L5/80 N8 BR 12,5-120X240 (OG)",
    "113814": "CH V GYP ST BR12,5-120X250 (OG)",
    "114610": "CH I SOM R15N8 BR12,5-120X240 (OG)",
    "124451": "SUPERBOARD ST BQ  10MM 1200X2400",
    "129051": "CH I GYP FGR LINHO BQ9,5-0,618x1,243CX8",
    "130299": "PROMATECT H 15 mm 1200 x 2400 mm",
    "132059": "PROMATECT H 12 mm 1200 x 2400 mm",
    "133559": "CH I SOM Q8N8 BR 12,5 - 1,20 X 2,40",
    "133846": "CH I GYP AQUABOARD BR12,5-120x240",
    "139483": "Promatect H 2400x1200x10 CS4BA",
    "140358": "CH V GYP ST BR6,4-120X240",
    "140359": "CH V GYP RU BR15-120X240",
    "140363": "CH V GYP RF BR12,5-120X240",
    "140365": "CH V GYP RF BR12,5-120X260",
    "140368": "CH V GYP RF BR12,5-120X280",
    "140370": "CH V GYP RF BR12,5-120X300",
    "140371": "CH V GYP ST BR15,0-120X240",
    "140372": "CH V GYP RF BR15-120X180",
    "140373": "CH V GYP RF BR15-120X240",
    "140374": "CH V GYP ST BQ 9,5 -120X250",
    "140462": "CH V GYP ST BR12,5-120X271",
    "140463": "CH V GYP ST BR15,0-120X180",
    "140464": "CH V GYP RU BR15-120X180",
    "140465": "CH V GYP RU BR12,5-120X271",
    "142084": "SUPERBOARD PRO BR 10MM 120X240",
    "142087": "SUPERBOARD SIDING LISO 200X2440X8MM BR",
    "142089": "SUPERBOARD SIDING MADERA 200X2440X8MM BR",
    "142109": "SUPERBOARD MADERA 1220X2440X8MM BR",
    "142110": "SUPERBOARD MADERA 1220X2440X6MM BR",
    "142676": "SUPERBOARD ST BQ 10MM 1200X3000",
    "142677": "SUPERBOARD PRO BR 8MM 1200X2400",
    "142678": "SUPERBOARD ST BQ 12MM 1200X2400",
    "142680": "SUPERBOARD ST BQ 8MM 1200X2000",
    "142683": "SUPERBOARD ST BQ 8MM 1200X3000",
    "142684": "MULTIPLACA 1240 x 2540 x 4 mm BR",
    "142685": "SUPERBOARD ST BQ 6MM 1200X2400",
    "142686": "SUPERBOARD ST BQ 8MM 1200X2400",
    "142687": "SUPERBOARD ST BQ  10MM 1200X2400",
    "142688": "SUPERBOARD 4PRO 4L 8MM 1200X2400",
    "143015": "SUPERBOARD 4PRO 4L 10MM 1200X2400",
    "143016": "SUPERBOARD ENTREPISO 1220X2440X14 MM BR",
    "143359": "GESSO V QUALIGESSO MULTIUSO 1 KG",
    "143360": "GESSO V QUALIGESSO  60 5Kg",
    "143362": "GESSO V QUALIGESSO  60 20Kg",
    "143720": "CH V GYP ST BR15,0-120X271",
    "145089": "CH V GYP ST BR12,5-120X265 (OG)",
    "145091": "CH V GYP ST BR12,5-120X275 (OG)",
    "145093": "CH V GYP RU BR15-120X180 (OG)",
    "145094": "CH V GYP RU BR12,5-120X250 (OG)",
    "145097": "CH V GYP RF BR12,5-120X180 (OG)",
    "145098": "CH V GYP RF BR12,5-120X240 (OG)",
    "145099": "CH V GYP RF BR15-120X180 (OG)",
    "145100": "CH V GYP ST BQ9,5-1243X2510MM (OG)",
    "145324": "CH I SB SIMP PIEDRA AZTECA AMARILLA 6MM",
    "145875": "CH V GYP ST BR12,5-120X271(OG)",
    "146301": "CH I SOM R15N8 BR12,5-120X240",
    "146303": "CH I SOM R15N1 BR12,5-120X240",
    "147555": "CH V GYP FGA BR12,5-060X200 (OG)",
    "149280": "MASSA PROMAT P/TRATAMENTO DE JUNTAS 20KG",
    "149934": "SUPERBOARD ST BQ 4mm 1220 X 2520",
    "151374": "CP I SB REVESTIMENTO LISO 28,5 KG",
    "154146": "PLACA DURLOCK RH REF 12,5MM 1,20 X 2,4M",
    "156838": "PLACA GYPSUM EST REF 12,5MM 1,20 X 2,4M",
    "157442": "CH V GYP ST BR9,5-120X180",
    "157443": "CH V GYP ST FDV BR9,5-120X180",
    "157499": "CH V GYP RF BR15-120X280",
    "157734": "DEFENTEX SE12,51200*2500x32/P",
    "158404": "CH V GYP RU BR15-120X260",
    "158405": "CH V GYP ST BR15,0-120X260",
    "160254": "SUPERBOARD ST BQ 8MM 1200X2400 (OG)",
    "160285": "CH V GYP RF BR15-120X300",
    "162512": "PROMASPRAY FR P300 20KG",
    "162975": "CH I SOM Q12/25 BQ12,5-120X240",
    "162976": "CH I SOM R12/25 BQ12,5-120X240",
    "162977": "CH I SOM RA8/15 BQ12,5-120X240",
    "163225": "CH V GYP ST BR15,0-120X271 (OG)",
    "163226": "CH I GYP FGR LINHO 9,5-0,618x0,618(OG)",
    "163227": "CH I GYP FGR LINHO 9,5-0,618x1,243(OG)",
    "163228": "CH I GYP FGR LISO 9,5-0,618x0,618 (OG)",
    "163298": "CH I GYP FGR LISO 9,5-0,618x1,243 (OG)",
    "163301": "CH V GYP ST BR12,5-120X292 (OG)",
    "163302": "CH V GYP RF BR15-120X240 (OG)",
    "163303": "CH V GYP RU BR15-120X240 (OG)"
};

// Estado da aplicação
let currentScanner = null;
let currentMaterial = null;
let inventoryData = [];

// Inicializar a aplicação
window.onload = function() {
    loadInventoryData();
    updateStats();
    renderInventoryTable();
    
    // Definir data atual como padrão
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('countDate').value = today;
};

// Alternar entrada manual
function toggleManualInput() {
    const manualInput = document.getElementById('manualInput');
    manualInput.style.display = manualInput.style.display === 'none' ? 'block' : 'none';
    
    if (manualInput.style.display === 'block') {
        document.getElementById('qrCodeInput').focus();
    }
}

// Processar código QR
function processQRCode(qrCode) {
    if (!qrCode || qrCode.length < 3) {
        showError('Código QR inválido. Deve ter pelo menos 3 dígitos.');
        return;
    }

    // Extrair quantidade e código do material
    let expectedQuantity, materialCode;
    
    if (qrCode.length >= 6) {
        // Formato: quantidade + código (ex: 6092983 = 60 + 92983)
        expectedQuantity = parseInt(qrCode.substring(0, 2));
        materialCode = qrCode.substring(2);
    } else {
        // Apenas código do material
        expectedQuantity = 0;
        materialCode = qrCode;
    }

    // Buscar material no banco de dados
    const materialName = materials[materialCode];
    
    if (!materialName) {
        showError(`Material com código ${materialCode} não encontrado no banco de dados.`);
        return;
    }

    // Armazenar dados do material atual
    currentMaterial = {
        code: materialCode,
        name: materialName,
        expectedQuantity: expectedQuantity
    };

    // Mostrar informações do material
    showMaterialInfo(currentMaterial);
    
    // Mostrar formulário de contagem
    document.getElementById('countingForm').style.display = 'block';
    document.getElementById('countedQuantity').focus();
    
    // Limpar entrada manual
    document.getElementById('qrCodeInput').value = '';
}

// Mostrar informações do material
function showMaterialInfo(material) {
    const materialInfo = document.getElementById('materialInfo');
    materialInfo.innerHTML = `
        <div class="material-info">
            <h3>Material Identificado</h3>
            <p><strong>Código:</strong> ${material.code}</p>
            <p><strong>Descrição:</strong> ${material.name}</p>
            <p><strong>Quantidade Esperada:</strong> ${material.expectedQuantity}</p>
        </div>
    `;
}

// Mostrar erro
function showError(message) {
    const materialInfo = document.getElementById('materialInfo');
    materialInfo.innerHTML = `
        <div class="error">
            <strong>❌ Erro:</strong> ${message}
        </div>
    `;
    
    setTimeout(() => {
        materialInfo.innerHTML = '';
    }, 5000);
}

// Mostrar sucesso
function showSuccess(message) {
    const materialInfo = document.getElementById('materialInfo');
    materialInfo.innerHTML = `
        <div class="success">
            <strong>✅ Sucesso:</strong> ${message}
        </div>
    `;
    
    setTimeout(() => {
        materialInfo.innerHTML = '';
    }, 3000);
}

// Salvar contagem
function saveCount() {
    const countedQuantity = parseInt(document.getElementById('countedQuantity').value);
    const countDate = document.getElementById('countDate').value;
    
    if (!currentMaterial) {
        showError('Nenhum material foi identificado.');
        return;
    }
    
    if (isNaN(countedQuantity) || countedQuantity < 0) {
        showError('Quantidade contada deve ser um número válido.');
        return;
    }
    
    if (!countDate) {
        showError('Data da contagem é obrigatória.');
        return;
    }
    
    // Calcular diferença
    const difference = countedQuantity - currentMaterial.expectedQuantity;
    
    // Criar registro de contagem
    const countRecord = {
        id: Date.now(),
        date: countDate,
        code: currentMaterial.code,
        name: currentMaterial.name,
        expectedQuantity: currentMaterial.expectedQuantity,
        countedQuantity: countedQuantity,
        difference: difference,
        timestamp: new Date().toISOString()
    };
    
    // Adicionar ao array de inventário
    inventoryData.push(countRecord);
    
    // Salvar no localStorage
    saveInventoryData();
    
    // Atualizar interface
    updateStats();
    renderInventoryTable();
    
    // Mostrar sucesso
    showSuccess(`Contagem salva com sucesso! Diferença: ${difference > 0 ? '+' : ''}${difference}`);
    
    // Limpar formulário
    clearForm();
}

// Limpar formulário
function clearForm() {
    document.getElementById('countedQuantity').value = '';
    document.getElementById('countingForm').style.display = 'none';
    document.getElementById('materialInfo').innerHTML = '';
    currentMaterial = null;
}

// Atualizar estatísticas
function updateStats() {
    const totalItems = inventoryData.length;
    
    // Contagens de hoje
    const today = new Date().toISOString().split('T')[0];
    const totalToday = inventoryData.filter(item => item.date === today).length;
    
    // Total de diferenças
    const totalDifferences = inventoryData.filter(item => item.difference !== 0).length;
    
    document.getElementById('totalItems').textContent = totalItems;
    document.getElementById('totalToday').textContent = totalToday;
    document.getElementById('totalDifference').textContent = totalDifferences;
}

// Renderizar tabela de inventário
function renderInventoryTable() {
    const tbody = document.getElementById('inventoryBody');
    tbody.innerHTML = '';
    
    // Ordenar por data mais recente
    const sortedData = [...inventoryData].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    
    sortedData.forEach(item => {
        const row = document.createElement('tr');
        
        // Classe para diferença
        let diffClass = 'difference-zero';
        if (item.difference > 0) diffClass = 'difference-positive';
        if (item.difference < 0) diffClass = 'difference-negative';
        
        row.innerHTML = `
            <td>${formatDate(item.date)}</td>
            <td>${item.code}</td>
            <td>${item.name}</td>
            <td>${item.expectedQuantity}</td>
            <td>${item.countedQuantity}</td>
            <td class="${diffClass}">${item.difference > 0 ? '+' : ''}${item.difference}</td>
        `;
        
        tbody.appendChild(row);
    });
}

// Formatar data
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
}

// Salvar dados no localStorage
function saveInventoryData() {
    try {
        localStorage.setItem('coletorEtexInventory', JSON.stringify(inventoryData));
    } catch (error) {
        console.error('Erro ao salvar dados:', error);
    }
}

// Carregar dados do localStorage
function loadInventoryData() {
    try {
        const data = localStorage.getItem('coletorEtexInventory');
        if (data) {
            inventoryData = JSON.parse(data);
        }
    } catch (error) {
        console.error('Erro ao carregar dados:', error);
        inventoryData = [];
    }
}

// Exportar para Excel
function exportToExcel() {
    if (inventoryData.length === 0) {
        showError('Nenhum dado para exportar.');
        return;
    }
    
    // Criar conteúdo CSV
    let csvContent = 'Data,Código,Material,Qtd. Esperada,Qtd. Contada,Diferença\n';
    
    inventoryData.forEach(item => {
        const row = [
            formatDate(item.date),
            item.code,
            `"${item.name}"`,
            item.expectedQuantity,
            item.countedQuantity,
            item.difference
        ].join(',');
        csvContent += row + '\n';
    });
    
    // Criar e baixar arquivo
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `coletor_etex_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showSuccess('Dados exportados com sucesso!');
}

// Limpar todos os dados
function clearData() {
    if (confirm('Tem certeza que deseja limpar todos os dados? Esta ação não pode ser desfeita.')) {
        inventoryData = [];
        saveInventoryData();
        updateStats();
        renderInventoryTable();
        showSuccess('Todos os dados foram limpos.');
    }
}

// Iniciar scanner QR
function startScanner() {
    const video = document.getElementById('qrVideo');
    const canvas = document.getElementById('qrCanvas');
    const context = canvas.getContext('2d');
    
    if (currentScanner) {
        stopScanner();
        return;
    }
    
    // Verificar suporte do navegador
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        showError('Seu navegador não suporta acesso à câmera. Use a entrada manual.');
        return;
    }
    
    navigator.mediaDevices.getUserMedia({ 
        video: { 
            facingMode: 'environment',
            width: { ideal: 1280 },
            height: { ideal: 720 }
        } 
    })
    .then(stream => {
        video.srcObject = stream;
        video.style.display = 'block';
        video.play();
        
        currentScanner = stream;
        
        // Iniciar detecção
        const scanInterval = setInterval(() => {
            if (video.readyState === video.HAVE_ENOUGH_DATA) {
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                
                const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                const code = jsQR(imageData.data, imageData.width, imageData.height);
                
                if (code) {
                    processQRCode(code.data);
                    clearInterval(scanInterval);
                    stopScanner();
                }
            }
        }, 300);
        
        // Parar scanner após 30 segundos
        setTimeout(() => {
            clearInterval(scanInterval);
            stopScanner();
        }, 30000);
    })
    .catch(error => {
        console.error('Erro ao acessar câmera:', error);
        showError('Erro ao acessar a câmera. Verifique as permissões ou use a entrada manual.');
    });
}

// Parar scanner
function stopScanner() {
    const video = document.getElementById('qrVideo');
    
    if (currentScanner) {
        currentScanner.getTracks().forEach(track => track.stop());
        currentScanner = null;
    }
    
    video.style.display = 'none';
    video.srcObject = null;
}
