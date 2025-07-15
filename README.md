# 🏗️ Coletor Etex - Sistema de Controle de Estoque

![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-deployed-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![HTML5](https://img.shields.io/badge/HTML5-CSS3-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## 📱 **Demonstração Online**

🌐 **Acesse o sistema:** [https://SEU-USUARIO.github.io/coletor-etex](https://SEU-USUARIO.github.io/coletor-etex)

> **Substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub**

## 🎯 **Sobre o Projeto**

O **Coletor Etex** é um sistema web moderno para controle de estoque através de QR Codes. Desenvolvido especificamente para gerenciar materiais de construção, oferece uma interface intuitiva e funcionalidades avançadas para contagem e auditoria de estoque.

### **Características Principais:**
- 📱 **Interface Responsiva** - Funciona perfeitamente em smartphones e tablets
- 🎨 **Design Moderno** - Cores corporativas Etex (laranja #ff6b35 e preto #1a1a1a)
- 📊 **Relatórios em Tempo Real** - Estatísticas instantâneas de contagem
- 💾 **Armazenamento Local** - Dados salvos no navegador automaticamente
- 📤 **Exportação Excel** - Baixe relatórios em formato CSV

## 🚀 **Funcionalidades**

### **1. Leitura de QR Codes**
- Scanner de câmera integrado
- Entrada manual como alternativa
- Detecção automática de código e quantidade

### **2. Processamento Inteligente**
- Extração automática de quantidade esperada
- Busca instantânea na base de dados de materiais
- Cálculo automático de diferenças

### **3. Interface de Contagem**
- Formulário intuitivo para inserir quantidade contada
- Seleção de data da contagem
- Validação de dados em tempo real

### **4. Relatórios e Estatísticas**
- Total de itens contados
- Contagens realizadas no dia
- Número de diferenças encontradas
- Tabela detalhada com histórico completo

### **5. Exportação de Dados**
- Exportação em formato CSV (compatível com Excel)
- Dados organizados por data
- Informações completas de cada contagem

## 🔧 **Como Usar**

### **Método 1: Scanner QR Code**
1. Clique em **"📷 Iniciar Scanner"**
2. Aponte a câmera para o QR Code
3. O sistema detectará automaticamente o código
4. Digite a quantidade contada
5. Selecione a data e clique em **"💾 Salvar"**

### **Método 2: Entrada Manual**
1. Clique em **"⌨️ Entrada Manual"**
2. Digite o código (ex: `6092983`)
3. O sistema identificará: 60 unidades do material 92983
4. Complete a contagem normalmente

## 📊 **Formato dos QR Codes**

O sistema processa QR Codes no seguinte formato:

```
QR Code: 6092983
├── Quantidade: 60 (primeiros 2 dígitos)
└── Código: 92983 (demais dígitos)
```

### **Exemplos:**
| QR Code | Quantidade | Código | Material |
|---------|------------|--------|----------|
| `6092983` | 60 | 92983 | CH V GYP ST BR12,5-120X180 |
| `4549060` | 45 | 49060 | PROMASTOP UNICOLLAR EXPORT |
| `2593044` | 25 | 93044 | GESSO V QUALIGESSO 60 40Kg |

## 🗃️ **Base de Dados**

O sistema possui uma base de dados integrada com mais de **400 materiais** cadastrados, incluindo:

- **Chapas de Gesso** (GYP)
- **Superboard** (Placas cimentícias)
- **Promatect** (Proteção contra incêndio)
- **Cedral** (Revestimentos)
- **Acessórios** e complementos

## 💻 **Tecnologias Utilizadas**

- **HTML5** - Estrutura da aplicação
- **CSS3** - Estilização e design responsivo
- **JavaScript ES6** - Lógica da aplicação
- **jsQR** - Biblioteca para leitura de QR Codes
- **LocalStorage** - Armazenamento local dos dados
- **GitHub Pages** - Hospedagem gratuita

## 🛠️ **Instalação Local**

### **Pré-requisitos:**
- Navegador web moderno
- Conexão com internet (para carregar bibliotecas)

### **Passos:**
1. Clone o repositório:
```bash
git clone https://github.com/SEU-USUARIO/coletor-etex.git
```

2. Navegue até o diretório:
```bash
cd coletor-etex
```

3. Abra o arquivo `index.html` no navegador

## 📱 **Compatibilidade**

### **Navegadores Suportados:**
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 11+
- ✅ Edge 79+

### **Dispositivos:**
- ✅ Desktop/Laptop
- ✅ Tablets
- ✅ Smartphones Android
- ✅ Smartphones iOS

## 🔒 **Privacidade e Segurança**

- **Dados Locais:** Todas as informações são armazenadas localmente no navegador
- **Sem Servidor:** Não há envio de dados para servidores externos
- **Código Aberto:** Todo o código é transparente e auditável

## 📈 **Roadmap**

### **Próximas Versões:**
- [ ] Sincronização com servidor
- [ ] Autenticação de usuários
- [ ] Relatórios avançados
- [ ] Integração com sistemas ERP
- [ ] Backup automático na nuvem

## 🤝 **Contribuindo**

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adicionar nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📞 **Suporte**

Para suporte técnico ou dúvidas:
- 📧 Email: [seu-email@empresa.com](mailto:seu-email@empresa.com)
- 🐛 Issues: [GitHub Issues](https://github.com/SEU-USUARIO/coletor-etex/issues)

## 📄 **Licença**

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🏆 **Créditos**

- **Desenvolvido por:** [Seu Nome]
- **Empresa:** Etex
- **Bibliotecas:** jsQR, GitHub Pages

---

<div align="center">
  <strong>🏗️ Feito com ❤️ para otimizar o controle de estoque</strong>
</div>

---

### **📊 Estatísticas do Projeto**

![GitHub repo size](https://img.shields.io/github/repo-size/SEU-USUARIO/coletor-etex)
![GitHub last commit](https://img.shields.io/github/last-commit/SEU-USUARIO/coletor-etex)
![GitHub issues](https://img.shields.io/github/issues/SEU-USUARIO/coletor-etex)

### **🌟 Dê uma estrela se este projeto te ajudou!**
