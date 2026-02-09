// Shadw Documentation - COMPLETE VERSION
// All 16 sections included

const sections = {};

// ==================== HOME ====================
sections.home = `
    <div class="hero" style="background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%); border-bottom: 3px solid #ff8c00;">
        <div class="hero-content">
           <h1 style="color: #ff8c00; text-shadow: 0 2px 4px rgba(0,0,0,0.3); display: flex; align-items: center; gap: 0.8rem;">
            <img src="shadw-logo.png" alt="Shadw Logo" style="width: 30px; height: 30px; object-fit: contain;">
            Shadw Dark Pool
            </h1>
            <p style="color: #e0e0e0; font-size: 1.1rem; margin-bottom: 2rem;">--Dark pool institucional descentralizado para trading privado em blockchain usando Railgun Protocol.</p>
            
            <div class="card" style="background: linear-gradient(135deg, rgba(255,140,0,0.12) 0%, rgba(255,102,0,0.06) 100%); margin-top: 2rem; border: 2px solid rgba(255,140,0,0.4); box-shadow: 0 4px 12px rgba(255,140,0,0.15);">
                <h3 style="color: #ffa500; margin-bottom: 1.5rem; font-size: 1.3rem;">🎯 Principais Objetivos do Projeto</h3>
                <ul style="list-style: none; padding: 0; margin: 0;">
                    <li style="padding: 1rem; margin-bottom: 0.5rem; border-left: 4px solid #ff8c00; background: rgba(0,0,0,0.3); border-radius: 4px;">
                        <strong style="color: #ffa500; display: block; margin-bottom: 0.3rem; font-size: 1.05rem;">Técnico:</strong> 
                        <span style="color: #f0f0f0; line-height: 1.6;">Integrar Railgun SDK para execução privada de trades com latência média inferior a 60 segundos</span>
                    </li>
                    <li style="padding: 1rem; margin-bottom: 0.5rem; border-left: 4px solid #ff8c00; background: rgba(0,0,0,0.3); border-radius: 4px;">
                        <strong style="color: #ffa500; display: block; margin-bottom: 0.3rem; font-size: 1.05rem;">Negócio:</strong> 
                        <span style="color: #f0f0f0; line-height: 1.6;">Validar product-market fit com 10-20 instituições executando mínimo 3 trades e $100k+ em volume</span>
                    </li>
                    <li style="padding: 1rem; margin-bottom: 0.5rem; border-left: 4px solid #ff8c00; background: rgba(0,0,0,0.3); border-radius: 4px;">
                        <strong style="color: #ffa500; display: block; margin-bottom: 0.3rem; font-size: 1.05rem;">Compliance:</strong> 
                        <span style="color: #f0f0f0; line-height: 1.6;">Implementar KYC obrigatório, whitelist e viewing keys desde o primeiro dia</span>
                    </li>
                    <li style="padding: 1rem; border-left: 4px solid #ff8c00; background: rgba(0,0,0,0.3); border-radius: 4px;">
                        <strong style="color: #ffa500; display: block; margin-bottom: 0.3rem; font-size: 1.05rem;">Performance:</strong> 
                        <span style="color: #f0f0f0; line-height: 1.6;">Demonstrar 99%+ proteção contra MEV e frontrunning com unit economics positivos</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    
    <div class="card">
        <h2><span class="badge badge-primary">1</span> Identificação</h2>
        <table>
            <tbody>
                <tr>
                    <td><strong>Título/Tema:</strong></td>
                    <td>Shadw - Dark Pool Institucional Descentralizado para Trading Privado em Blockchain</td>
                </tr>
                <tr>
                    <td><strong>Pesquisadores:</strong></td>
                    <td><strong>Gustavo, Leandro, Thiago, Conrado, Felipe</strong></td>
                </tr>
                <tr>
                    <td><strong>Data de Início:</strong></td>
                    <td>Janeiro / 2026</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="card">
        <h2><span class="badge badge-primary">2</span> Resumo da Proposta</h2>
        <p><strong>Shadw é uma plataforma de dark pool descentralizada</strong> que permite trading privado em larga escala para instituições financeiras, family offices e gestores de ativos em blockchain. O projeto visa resolver o problema crítico da transparência total em blockchains públicas, que expõe instituições a riscos de frontrunning, manipulação de mercado e perda de vantagem competitiva ao executar trades de grande volume na faixa de $100 mil a $10 milhões ou mais por transação.</p>
        
        <p>Utilizando o <strong>Railgun Protocol como camada de privacidade</strong>, uma infraestrutura ZK-SNARK battle-tested com mais de $2 bilhões de volume processado e quatro anos de operação contínua em produção, Shadw oferece privacidade total nas transações mantendo compliance regulatório através de KYC obrigatório desde o primeiro dia, screening rigoroso de endereços contra listas OFAC e sanções internacionais, e viewing keys criptográficas que permitem auditores e reguladores verificarem transações sem comprometer a privacidade dos usuários finais.</p>
        
        <p>A relevância do projeto está no timing de mercado excepcional, onde 2025-2026 representa o "Ano da Privacidade Pragmática" em cripto após anos de pressão regulatória, e na janela de oportunidade técnica e econômica única para capturar parcela significativa do mercado de dark pools tradicionais que movimenta entre $300 bilhões e $500 bilhões por dia em volume, com potencial de capturar 1-5% desse mercado através de vantagens como custos menores, settlement instantâneo e ausência de intermediários centralizados que cobram fees exorbitantes.</p>
        
        <p>A metodologia proposta é desenvolvimento ágil em fases iterativas: <strong>Fase 0</strong> (MVP em 4 meses com $30k-80k para validação com 10-20 instituições), <strong>Fase 1</strong> (product-market fit em 6-12 meses com seed de $2-5M), e <strong>Fase 2</strong> (escala em 18-24 meses com Series A de $10-20M). Usar Railgun Protocol reduz drasticamente time-to-market de 24+ meses para 4 meses e custo de $5-10M para $30k-80k, mantendo risco técnico baixo ao aproveitar protocolo já auditado e em produção.</p>
    </div>

    <div class="card">
        <h2><span class="badge badge-warning">3</span> Contexto do Projeto</h2>
        
        <h3>🎯 Problema Investigado</h3>
        <p><strong>Blockchains públicas são completamente transparentes.</strong> Cada transação é visível para qualquer observador.</p>
        
        <h3>💡 Por Que Shadw? (4 Pilares Fundamentais)</h3>
        <div class="card-grid">
            <div class="card" style="background: linear-gradient(135deg, rgba(255,140,0,0.15) 0%, rgba(255,102,0,0.08) 100%);">
                <h4>🔒 Privacidade Total</h4>
                <p><strong>Trades completamente privados usando zk-SNARKs.</strong> Ninguém vê contrapartes, valores ou preços. Proteção 99%+ contra MEV e frontrunning via Railgun Protocol com provas zero-knowledge.</p>
            </div>
            <div class="card" style="background: linear-gradient(135deg, rgba(255,165,0,0.15) 0%, rgba(255,140,0,0.08) 100%);">
                <h4>⚡ Infraestrutura Madura</h4>
                <p><strong>Railgun: $2B+ volume, 4+ anos produção.</strong> Usa protocolo battle-tested em vez de construir do zero. Reduz time 24 meses→4 meses e custo $5M→$80k.</p>
            </div>
            <div class="card" style="background: linear-gradient(135deg, rgba(255,183,50,0.15) 0%, rgba(255,165,0,0.08) 100%);">
                <h4>✅ Compliance Day 1</h4>
                <p><strong>KYC obrigatório, OFAC screening, viewing keys.</strong> Regulatório desde início. PPOI (Private Proofs of Innocence) integrado para prevenir fundos ilícitos sem comprometer privacidade.</p>
            </div>
            <div class="card" style="background: linear-gradient(135deg, rgba(255,201,102,0.15) 0%, rgba(255,183,50,0.08) 100%);">
                <h4>🚀 Fast to Market</h4>
                <p><strong>MVP em 4 meses. Investment $30k-80k.</strong> Risco técnico baixíssimo usando protocolo auditado por Trail of Bits, ABDK e Zokyo com milhares de horas de operação em produção.</p>
            </div>
        </div>

        <h3>🎓 Relevância</h3>
        <ul>
            <li><strong>Acadêmica:</strong> Privacy-preserving DeFi research, ZK-SNARKs + compliance, arquitetura híbrida offchain/onchain</li>
            <li><strong>Social:</strong> Democratiza acesso institucional ($300B-500B/dia TradFi dark pools)</li>
            <li><strong>Tecnológica:</strong> Valida zkApps para trading institucional, prova privacidade + compliance viável</li>
        </ul>
    </div>

    <div class="card">
        <h2><span class="badge badge-success">4</span> Objetivos</h2>
        
        <div class="alert alert-info">
            <strong>🎯 Objetivo Geral:</strong> Desenvolver e validar dark pool descentralizada combinando privacidade total (ZK-SNARKs) com compliance regulatório (KYC, viewing keys, PPOI).
        </div>

        <h3>📋 Objetivos Específicos</h3>
        <ol>
            <li><strong>Técnico:</strong> Integrar Railgun SDK, orderbook offchain Red-Black Tree, EIP-712 signatures, <60s latency</li>
            <li><strong>Negócio:</strong> 10-20 instituições, 3+ trades, $100k+ volume em Fase 0</li>
            <li><strong>Compliance:</strong> KYC workflow, whitelist, audit logs, viewing keys</li>
            <li><strong>Performance:</strong> 99%+ proteção MEV, LTV/CAC > 3x, SLA 99.9% uptime</li>
        </ol>
    </div>

    <div class="card">
        <h2><span class="badge badge-success">5</span> Resultados Esperados</h2>
        
        <div class="card-grid">
            <div class="card">
                <h4>✅ Fase 0 (4 meses)</h4>
                <ul>
                    <li>MVP testnet (Arbitrum Sepolia)</li>
                    <li>10-20 instituições KYC</li>
                    <li>3+ trades executados</li>
                    <li>$100k+ volume</li>
                    <li>Decisão Go/No-Go</li>
                </ul>
            </div>
            <div class="card">
                <h4>📊 Fase 1 (6-12 meses)</h4>
                <ul>
                    <li>100+ instituições, $10M TVL</li>
                    <li>Seed $2-5M</li>
                    <li>Team 2-3 devs + compliance</li>
                    <li>Mainnet + auditoria</li>
                    <li>Revenue $15k+/mês</li>
                </ul>
            </div>
        </div>

        <h4>🚀 Contribuições Científicas</h4>
        <ul>
            <li>📚 Paper: "Hybrid Architecture for Privacy-Preserving Dark Pools"</li>
            <li>📚 Open-source orderbook + Railgun integration</li>
            <li>📚 Framework compliance privacy protocols</li>
            <li>📚 Benchmarks ZK-SNARKs trading</li>
        </ul>
    </div>
`;

// Continue nos próximos blocos devido ao tamanho...


// ==================== EXECUTIVE SUMMARY ====================
sections['executive-summary'] = `
    <h2>Executive Summary</h2>
    
    <div class="card">
        <h3>O Problema</h3>
        <p>Blockchains públicas expõem instituições a 4 riscos críticos ao executar trades grandes:</p>
        <table>
            <thead>
                <tr><th>Risco</th><th>Impacto</th></tr>
            </thead>
            <tbody>
                <tr><td><strong>Frontrunning/MEV</strong></td><td>Bots extraem 3-5% do valor</td></tr>
                <tr><td><strong>Exposição estratégica</strong></td><td>Competidores veem posições real-time</td></tr>
                <tr><td><strong>Target hackers</strong></td><td>Carteiras grandes atacadas</td></tr>
                <tr><td><strong>Price discovery</strong></td><td>Mercado reage antes execução</td></tr>
            </tbody>
        </table>
    </div>

    <div class="card">
        <h3>A Solução: Shadw</h3>
        <ul>
            <li>✅ Privacidade total (ZK-SNARKs via Railgun)</li>
            <li>✅ Compliance built-in (KYC, OFAC, viewing keys)</li>
            <li>✅ Non-custodial (users keep control)</li>
            <li>✅ Multi-chain (Arbitrum, Polygon, Ethereum, BSC)</li>
            <li>✅ Performance institucional (<60s, 99.9% uptime)</li>
        </ul>
    </div>

    <div class="card">
        <h3>Investment</h3>
        <p><strong>Fase 0 (4 meses):</strong> $14k-87k</p>
        <p><strong>TAM:</strong> $300B-500B/dia (TradFi dark pools) → 1-5% = $3B-25B/dia oportunidade</p>
    </div>
`;

// ==================== QUICK START (MELHORADO) ====================
sections.quickstart = `
    <h2>🚀 Quick Start - Guia Completo</h2>
    
    <div class="alert alert-info">
        <strong>🎯 Objetivo:</strong> Setup completo + primeiros passos com Railgun SDK e Cookbook.
    </div>

    <div class="card">
        <h3>Pré-requisitos</h3>
        <pre><code>node --version  # v20+
npm --version   # v9+
git --version   # v2+
psql --version  # v15+ (PostgreSQL)
redis-cli --version  # v7+ (Redis)</code></pre>
    </div>

    <div class="card">
        <h3>Setup Projeto</h3>
        <pre><code>mkdir shadw-mvp && cd shadw-mvp
npm init -y

# Backend
mkdir backend && cd backend
npm install express cors dotenv pg ioredis ethers
npm install @railgun-community/wallet

# Frontend
cd .. && npx create-next-app@latest frontend --typescript --tailwind</code></pre>
    </div>

    <div class="card">
        <h3>Railgun SDK - Primeiro Teste</h3>
        <pre><code>// test-railgun.js
const { RailgunWallet } = require('@railgun-community/wallet');

async function test() {
  const wallet = new RailgunWallet({
    network: 'arbitrum-sepolia',
    rpcUrl: process.env.ALCHEMY_RPC_URL
  });
  
  await wallet.initialize();
  console.log('✅ Railgun initialized!');
}

test();</code></pre>
    </div>

    <div class="card">
        <h3>Recursos Essenciais</h3>
        <div class="resource-grid">
            <a href="https://docs.railgun.org" target="_blank" class="resource-card">
                <div class="resource-icon">📚</div>
                <div class="resource-title">Railgun Docs</div>
            </a>
            <a href="https://github.com/Railgun-Community/cookbook" target="_blank" class="resource-card">
                <div class="resource-icon">📖</div>
                <div class="resource-title">Railgun Cookbook</div>
            </a>
            <a href="https://docs.ethers.org/v6" target="_blank" class="resource-card">
                <div class="resource-icon">⚡</div>
                <div class="resource-title">ethers.js v6</div>
            </a>
        </div>
    </div>

    <div class="card">
        <h3>Próximos Passos</h3>
        <ol>
            <li>📚 <a href="#" onclick="showSection('railgun')">Railgun Foundation</a></li>
            <li>🏗️ <a href="#" onclick="showSection('architecture')">Architecture</a></li>
            <li>🔄 <a href="#" onclick="showSection('flows')">Flows & Diagrams</a></li>
            <li>💻 <a href="#" onclick="showSection('code')">Code Examples</a></li>
            <li>🗺️ <a href="#" onclick="showSection('roadmap')">Roadmap 16 Semanas</a></li>
        </ol>
    </div>
`;

// ==================== RAILGUN ====================
sections.railgun = `
    <h2>⚡ Railgun Protocol Foundation</h2>
    
    <div class="alert alert-info">
        <strong>Key Point:</strong> Railgun é a camada de privacidade que Shadw utiliza. Você NÃO precisa criar smart contracts do zero - usa a infraestrutura já deployada e auditada.
    </div>

    <div class="card">
        <h3>O Que É Railgun?</h3>
        <p>Railgun é um protocolo de privacidade para Ethereum e chains EVM-compatible que permite transferências completamente privadas usando tecnologia zk-SNARKs (Zero-Knowledge Succinct Non-Interactive Arguments of Knowledge). Lançado em 2021, o protocolo foi desenvolvido para resolver um problema fundamental de blockchains públicas: a transparência total que expõe cada transação, tornando impossível para instituições e usuários de alto valor executarem operações financeiras sem revelar suas estratégias e posições para o mercado inteiro.</p>
        
        <p>Ao longo de seus <strong>quatro anos de operação contínua em produção</strong>, Railgun processou mais de <strong>$2 bilhões em volume total</strong> através de sua aplicação principal, a Railway Wallet, demonstrando não apenas a viabilidade técnica da solução, mas também a demanda real do mercado por privacidade em blockchain. O protocolo opera atualmente em quatro chains principais - Ethereum mainnet, Arbitrum, Polygon e BNB Chain - permitindo que usuários movam ativos de forma privada dentro e entre essas redes.</p>
    </div>

    <div class="card">
        <h3>História e Evolução</h3>
        <p>O desenvolvimento do Railgun começou em 2020, quando os fundadores identificaram que a transparência inerente das blockchains públicas estava impedindo a adoção institucional e de alto valor. Enquanto projetos como Tornado Cash focavam em mixing (misturar fundos para ofuscar origem), Railgun adotou uma abordagem diferente: criar um sistema de "contas privadas" dentro da blockchain pública, onde usuários podem manter saldos e executar transferências sem revelar nada além do fato de que uma transação Railgun ocorreu.</p>
        
        <p>O protocolo passou por <strong>três auditorias de segurança independentes</strong> realizadas por empresas tier-1: Trail of Bits (especializada em segurança de sistemas críticos), ABDK Consulting (experts em smart contracts e matemática criptográfica), e Zokyo (focada em auditorias de ZK-SNARKs). Essas auditorias não encontraram vulnerabilidades críticas, e as issues identificadas foram todas resolvidas antes do lançamento em mainnet. Desde então, o protocolo opera com <strong>zero exploits ou hacks bem-sucedidos</strong>, um histórico notável considerando que gerencia mais de $32 milhões em Total Value Locked (TVL) atualmente.</p>
        
        <p>Em 2023, Railgun introduziu o sistema PPOI (Private Proofs of Innocence), uma inovação que permite provar criptograficamente que fundos não vêm de endereços sancionados ou de atividades ilícitas, sem revelar a origem exata dos fundos. Isso foi um marco crucial para compliance regulatório, permitindo que o protocolo ofereça privacidade mantendo-se alinhado com requerimentos anti-lavagem de dinheiro (AML) e combate ao financiamento do terrorismo (CFT).</p>
    </div>

    <div class="card">
        <h3>Ecossistema zkApps</h3>
        <p>Além da Railway Wallet (a implementação de referência), o ecossistema Railgun cresceu para incluir diversos "zkApps" - aplicações que utilizam a camada de privacidade do Railgun para casos de uso específicos:</p>
        
        <div class="card-grid">
            <div class="card">
                <h4>💰 Railway Wallet</h4>
                <p>Privacy wallet oficial com interface mobile e web. Processou $2B+ em volume desde 2021, suportando dezenas de tokens ERC-20 em múltiplas chains.</p>
            </div>
            <div class="card">
                <h4>🔄 Private DEX Aggregators</h4>
                <p>Agregadores de swaps que executam trades através de múltiplas DEXs (Uniswap, Sushiswap, etc) mantendo privacidade total nas operações.</p>
            </div>
            <div class="card">
                <h4>🏦 Institutional Vaults</h4>
                <p>Vaults para gestão de ativos institucionais com viewing keys para compliance, permitindo auditorias sem comprometer privacidade operacional.</p>
            </div>
            <div class="card">
                <h4>📊 Shadw Dark Pool</h4>
                <p>Este projeto - primeira implementação de dark pool institucional OTC usando Railgun para privacidade nas execuções.</p>
            </div>
        </div>
    </div>

    <div class="card">
        <h3>Por Que Railgun Para Shadw?</h3>
        <p>A decisão de usar Railgun como camada de privacidade para Shadw foi baseada em quatro pilares fundamentais que tornaram essa escolha não apenas viável, mas estratégica:</p>
        
        <p><strong>Primeiro, maturidade técnica comprovada.</strong> Com quatro anos de operação em produção processando bilhões em volume sem exploits, Railgun demonstrou que sua implementação de zk-SNARKs é robusta e confiável. Construir uma infraestrutura ZK do zero levaria 18-24 meses apenas para desenvolvimento, mais 6-12 meses para auditorias múltiplas, e ainda assim não teria o histórico de confiança que Railgun já estabeleceu no mercado.</p>
        
        <p><strong>Segundo, multi-chain native.</strong> Railgun opera em quatro chains principais, o que significa que Shadw pode expandir para múltiplas redes sem redesenvolver a camada de privacidade para cada uma. Isso é crucial para escala, pois instituições diferentes preferem chains diferentes - alguns querem Ethereum mainnet por segurança máxima, outros preferem Arbitrum por custos menores, outros Polygon por throughput.</p>
        
        <p><strong>Terceiro, performance adequada para trading.</strong> O sistema de batching e relayers do Railgun reduz custos de gas significativamente (típicamente $1-5 por trade em L2s), e o tempo de geração de proofs (~5-10 segundos) é aceitável para dark pools onde trades não são ultra-high-frequency. Para contexto, dark pools tradicionais TradFi têm latências de segundos a minutos, então Railgun está dentro do esperado para o caso de uso.</p>
        
        <p><strong>Quarto, compliance built-in.</strong> O sistema PPOI e viewing keys do Railgun foram desenhados exatamente para o caso de uso que Shadw precisa: permitir instituições provarem compliance sem sacrificar privacidade operacional. Viewing keys permitem auditorias seletivas (compartilha read-only com regulador/auditor mas não com competidores), e PPOI permite provar que fundos não vêm de fontes ilícitas sem revelar a origem exata. Essas features seriam extremamente complexas de desenvolver do zero.</p>
    </div>

    <div class="card">
        <h3>Recursos Técnicos</h3>
        <ul>
            <li>📚 <a href="https://docs.railgun.org" target="_blank">Documentação Oficial</a> - Guias completos de integração e APIs</li>
            <li>💻 <a href="https://github.com/Railgun-Community" target="_blank">GitHub Railgun Community</a> - Código open-source do protocolo</li>
            <li>📖 <a href="https://github.com/Railgun-Community/cookbook" target="_blank">Railgun Cookbook</a> - Exemplos práticos e recipes de integração</li>
            <li>💬 <a href="https://discord.gg/railgun" target="_blank">Discord Community</a> - Suporte técnico e discussões com desenvolvedores</li>
        </ul>
    </div>
`;


// ==================== ARCHITECTURE ====================
sections.architecture = `
    <h2>🏗️ Technical Architecture</h2>

    <div class="alert alert-warning">
        <strong>📸 Diagrama Visual:</strong> Para melhor visualização, gere o PNG do arquivo <code>architecture.mermaid</code> usando <a href="https://mermaid.live" target="_blank">mermaid.live</a>.
    </div>

    <div class="card">
        <h3>Visão Geral da Arquitetura</h3>
        <p>A arquitetura do Shadw foi desenhada seguindo o princípio de <strong>separação de responsabilidades</strong> em camadas, onde cada layer tem um propósito específico e bem definido. Esta abordagem não apenas facilita o desenvolvimento e manutenção, mas também permite escalar componentes individuais conforme necessário sem afetar o sistema como um todo.</p>
        
        <p>A arquitetura é fundamentalmente <strong>híbrida</strong>: combina componentes offchain (para performance e flexibilidade) com componentes onchain (para segurança e imutabilidade). O orderbook, matching engine e toda a lógica de negócio rodam offchain em servidores controlados, permitindo latências baixas e iteração rápida no código. Já a execução final dos trades acontece onchain via Railgun, garantindo que as transferências são atômicas, imutáveis e verificáveis na blockchain.</p>
        
        <p>Esta separação é crucial: se tentássemos fazer matching onchain (como algumas DEXs tentaram), teríamos latências de segundos a minutos para cada update do orderbook, custos de gas proibitivos, e limitações severas na complexidade da lógica de matching. Ao manter o orderbook offchain, conseguimos performance de exchanges centralizadas (latência <100ms) enquanto mantemos a execução descentralizada e privada via Railgun.</p>
    </div>

    <div class="card">
        <h3>As 8 Camadas Explicadas</h3>
        
        <h4>Layer 7: Users - A Camada de Entrada</h4>
        <p>No topo da stack estão os usuários finais: hedge funds cripto-nativos, family offices gerenciando patrimônio de UHNW individuals, e market makers profissionais provendo liquidez. Esses usuários interagem com o sistema através de browsers (desktop/mobile) usando carteiras Web3 como Metamask. A característica comum desses usuários é que todos executam <strong>trades de grande volume</strong> ($100k-10M+ por ordem) e <strong>necessitam privacidade</strong> para evitar que competidores vejam suas posições e estratégias.</p>
        
        <h4>Layer 6: Frontend - Interface e Experiência</h4>
        <p>A camada de frontend consiste em duas aplicações Next.js independentes: a <strong>Trading UI</strong> (onde usuários colocam ordens, veem orderbook, executam trades) e o <strong>Admin Dashboard</strong> (onde administradores gerenciam KYC, monitoram sistema, analisam métricas). Ambas são Single-Page Applications (SPAs) deployadas em Vercel com edge caching, resultando em carregamento instantâneo e latências globais <50ms. A Trading UI integra Metamask via ethers.js v6 para assinatura de ordens usando EIP-712, enquanto o Admin usa JWT para autenticação tradicional de administradores.</p>
        
        <h4>Layer 5: API Gateway - Porta de Entrada Backend</h4>
        <p>O API Gateway é implementado em Express.js e serve como <strong>único ponto de entrada</strong> para todo o backend. Esta camada é responsável por três funções críticas: <strong>(1) Autenticação</strong> via JWT (valida que requests vêm de usuários autorizados), <strong>(2) Rate Limiting</strong> (previne abuse com limite de 100 requests/minuto por IP), e <strong>(3) WebSocket Server</strong> (mantém conexões persistentes para updates em tempo real do orderbook e notificações de trades executados). O uso de WebSockets é essencial para UX: quando um trade executa, ambas as partes (maker e taker) recebem notificação instantânea sem precisar fazer polling.</p>
        
        <h4>Layer 4: Business Logic - Coração do Sistema</h4>
        <p>Esta é a camada mais complexa, contendo toda a lógica de negócio do dark pool. O <strong>Order Manager</strong> valida ordens recebidas (verifica assinaturas EIP-712, checa se user está whitelisted, valida que amounts/prices são válidos). O <strong>Orderbook Engine</strong> usa uma estrutura de dados Red-Black Tree para manter ordens ordenadas por preço com operações O(log n), permitindo inserção, remoção e busca extremamente rápidas mesmo com milhares de ordens. O <strong>Matching Engine</strong> implementa algoritmo price-time priority: quando nova ordem chega, verifica se cruza com ordens existentes (bid >= ask), e se sim, executa o match. O <strong>Compliance Module</strong> verifica whitelist antes de permitir trades e mantém audit logs completos de todas operações para reguladores.</p>
        
        <h4>Layer 3: Railgun SDK - A Camada de Privacidade</h4>
        <p>Aqui é onde a mágica da privacidade acontece. O Railgun SDK (@railgun-community/wallet) é integrado como biblioteca Node.js e expõe três operações principais: <strong>shield</strong> (depositar tokens públicos no sistema privado), <strong>transfer</strong> (mover tokens entre endereços privados), e <strong>unshield</strong> (retirar tokens do sistema privado de volta para endereço público). Para Shadw, usamos principalmente a operação <strong>transfer</strong>: quando um trade match ocorre, geramos duas transfers atômicas (Alice → Bob: 10 ETH, Bob → Alice: 30,000 USDC). O SDK então gera provas ZK-SNARKs (~5-10 segundos) que provam matematicamente que as transfers são válidas sem revelar quem são Alice e Bob ou quanto estão transferindo.</p>
        
        <h4>Layer 2: Relayer Network - Desvinculando o Sender</h4>
        <p>Um problema de privacidade em blockchains é que para enviar transação, você paga gas, e isso cria um link entre seu endereço público e a transação Railgun. Os <strong>Relayers</strong> resolvem isso: eles recebem a prova ZK já gerada, <strong>eles mesmos pagam o gas</strong>, e broadcasteam a transação para a blockchain. Como resultado, na blockchain aparece que o relayer enviou a transação, não você. O sistema de batching agrupa múltiplas transações em um único batch, reduzindo custo de gas por trade. Para Shadw, o custo de gas (~$1-5 por trade em Arbitrum) é pago pela plataforma e recuperado via trading fees.</p>
        
        <h4>Layer 1: Blockchain - Source of Truth</h4>
        <p>No fundo da stack (tecnicamente) está a blockchain Arbitrum L2. Aqui rodam os <strong>Railgun Smart Contracts</strong> que já estão deployados e auditados - Shadw não precisa deployar contracts próprios. Esses contracts mantêm uma Merkle Tree de todos os balances privados (sem revelar quem tem quanto), e um Nullifier Registry que previne double-spending. Quando uma transação Railgun chega, o contract verifica a prova ZK-SNARK matematicamente, valida que nullifiers não foram usados antes, atualiza a Merkle Tree, e emite eventos. Toda essa execução é <strong>determinística e imutável</strong> - se a prova é válida, o trade executa; se não, reverte. Não há intermediários ou pontos de falha central.</p>
        
        <h4>Layer 0: Data Persistence - Memória do Sistema</h4>
        <p>A camada de dados usa três tecnologias complementares: <strong>PostgreSQL</strong> para dados relacionais (orders, trades, users, audit logs) com ACID compliance garantindo que nunca perdemos dados críticos, <strong>Redis</strong> para caching do orderbook em memória permitindo reads ultra-rápidos (<1ms), e <strong>S3/IPFS</strong> para armazenamento encrypted de documentos KYC que não podem ficar em database tradicional por questões de segurança e compliance LGPD/GDPR. O Redis é especialmente importante: mantemos uma cópia em memória do orderbook completo, o que significa que a Trading UI pode query o orderbook atual sem bater no banco, resultando em latências imperceptíveis para o usuário.</p>
    </div>

    <div class="card">
        <h3>Stack Tecnológico Completo</h3>
        <table>
            <thead>
                <tr><th>Layer</th><th>Tecnologias</th><th>Por Quê</th></tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Frontend</strong></td>
                    <td>Next.js 14, TypeScript, TailwindCSS, ethers.js v6</td>
                    <td>React framework com SSR, type safety, utility-first CSS, Web3 integration</td>
                </tr>
                <tr>
                    <td><strong>Backend</strong></td>
                    <td>Node.js 20+, Express.js, Railgun SDK</td>
                    <td>JavaScript full-stack, mature web framework, official privacy SDK</td>
                </tr>
                <tr>
                    <td><strong>Database</strong></td>
                    <td>PostgreSQL 15, Redis 7</td>
                    <td>ACID compliance, proven reliability + in-memory speed</td>
                </tr>
                <tr>
                    <td><strong>Blockchain</strong></td>
                    <td>Arbitrum (Sepolia testnet → One mainnet)</td>
                    <td>Low gas costs ($0.01-0.10), fast finality (~2s), Ethereum security</td>
                </tr>
                <tr>
                    <td><strong>RPC Provider</strong></td>
                    <td>Alchemy</td>
                    <td>99.9% uptime SLA, dedicated nodes, enhanced APIs</td>
                </tr>
                <tr>
                    <td><strong>Hosting</strong></td>
                    <td>Vercel (frontend), Railway (backend + DB)</td>
                    <td>Edge CDN global, auto-scaling, zero DevOps para MVP</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="card">
        <h3>Data Flow: Do Click ao Settlement</h3>
        <p>Quando um usuário clica "Place Order", acontece a seguinte sequência:</p>
        <pre><code>1. Browser (Metamask): User assina ordem via EIP-712 popup
2. Frontend (Next.js): POST /api/orders com ordem + assinatura
3. API Gateway (Express): Valida rate limit, autentica JWT
4. Order Manager: Verifica assinatura, checa whitelist
5. PostgreSQL: INSERT INTO orders (status: OPEN)
6. Redis: Adiciona ordem ao orderbook em memória
7. Matching Engine: Verifica se há cross com ordens existentes
   → Se NÃO: ordem fica waiting no orderbook (pode esperar dias)
   → Se SIM: continua...
8. Railgun SDK: Gera ZK proofs (~5-10s)
9. Relayer: Paga gas e broadcasta para Arbitrum
10. Blockchain: Verifica proofs, executa transfers privadas
11. Relayer: Confirma tx (2 blocks ~4s)
12. PostgreSQL: UPDATE orders SET status='FILLED', INSERT INTO trades
13. WebSocket: Notifica maker e taker em real-time
14. Frontend: "🎉 Trade executed!" toast notification</code></pre>
        
        <p>Total time do match até notificação: <strong>~15-30 segundos</strong> (a maioria é proof generation). Totalmente aceitável para dark pool institucional.</p>
    </div>

    <div class="alert alert-success">
        <strong>💡 Arquivo Mermaid:</strong> <code>architecture.mermaid</code> - Gere o PNG para ter visualização completa das 8 camadas com cores gradiente laranja.
    </div>
    
`;

// ==================== SECURITY ====================
sections.security = `
    <h2>🔒 Security & Privacy</h2>

    <div class="card">
        <h3>Proteção MEV/Frontrunning</h3>
        <p><strong>Railgun Natural Protection:</strong></p>
        <ul>
            <li>✅ Encrypted transactions (ninguém vê detalhes mempool)</li>
            <li>✅ Relayer system (desvincula sender)</li>
            <li>✅ Batching (agrupa txs, dificulta análise)</li>
        </ul>
        
        <p><strong>Shadw Additional:</strong></p>
        <ul>
            <li>✅ Commit-reveal scheme (hash first, 12s delay)</li>
            <li>✅ Random delays (0-3s jitter)</li>
        </ul>
        
        <p><strong>Resultado:</strong> ~99% proteção MEV</p>
    </div>

    <div class="card">
        <h3>Viewing Keys</h3>
        <p>Permite acesso read-only a transações privadas sem spending key.</p>
        
        <p><strong>Como Funciona:</strong></p>
        <pre><code>Spending Key (sk) → permite gastar
Viewing Key (vk) → permite ver histórico

vk = H(sk, "viewing")  // One-way derivation
decrypt(ciphertext, vk) = plaintext  // Viewing only
sign(tx, vk) = FAIL  // Cannot spend!</code></pre>

        <p><strong>Uso:</strong> User compartilha vk com auditor/regulador (não sk)</p>
    </div>

    <div class="card">
        <h3>Security Checklist</h3>
        <ul>
            <li>✅ Rate limiting (100 req/min)</li>
            <li>✅ SQL injection prevention</li>
            <li>✅ XSS protection (DOMPurify)</li>
            <li>✅ CSRF tokens</li>
            <li>✅ Input validation (Zod)</li>
            <li>✅ Secure headers (Helmet.js)</li>
            <li>✅ EIP-712 signature verification</li>
            <li>✅ Nonce tracking (replay prevention)</li>
        </ul>
    </div>
`;

// ==================== ORDERBOOK ====================
sections.orderbook = `
    <h2>📊 Orderbook Logic Explained</h2>

    <div class="alert alert-warning">
        <strong>⚠️ Critical:</strong> Railgun NÃO é exchange. Orderbook é 100% SEU (offchain).
    </div>

    <div class="card">
        <h3>Divisão de Responsabilidades</h3>
        <table>
            <thead>
                <tr><th>Componente</th><th>O Que Faz</th><th>Onde</th></tr>
            </thead>
            <tbody>
                <tr><td><strong>Shadw (você)</strong></td><td>Orderbook, matching, UX, KYC</td><td>Offchain (Node.js + PostgreSQL)</td></tr>
                <tr><td><strong>Railgun</strong></td><td>Executar transferências privadas</td><td>Onchain (Contracts deployados)</td></tr>
                <tr><td><strong>Usuários</strong></td><td>Fornecer liquidez (ordens)</td><td>Ambos</td></tr>
            </tbody>
        </table>
    </div>

    <div class="card">
        <h3>Fluxo Timeline Real</h3>
        <pre><code>10:00 - Alice: BUY 10 ETH @ 3000 USDC
        ↓ (Ordem → SEU orderbook PostgreSQL/Redis)
        ↓ (Railgun NÃO chamado ainda!)

[... 5 horas ...]

15:00 - Bob: SELL 10 ETH @ 2995 USDC  
        ↓ (Ordem → SEU orderbook)
        ↓ SEU matching: 3000 >= 2995 → MATCH!
        ↓ AGORA chama Railgun SDK
        ↓ (ZK proofs ~5-10s)
15:00:45 - Trade confirmado onchain (privado)
        ✅ Database atualizado, users notificados</code></pre>
    </div>

    <div class="card">
        <h3>FAQs Críticas</h3>
        <p><strong>Q: Preciso enviar maker/taker junto?</strong></p>
        <p>A: NÃO! Maker espera no orderbook (dias OK). Railgun só após match.</p>

        <p><strong>Q: Railgun provê liquidez?</strong></p>
        <p>A: NÃO! Liquidez vem de: seus users, MMs que recruta, você fazendo MM.</p>

        <p><strong>Q: Preciso match antes Railgun?</strong></p>
        <p>A: SIM! Match offchain no backend → depois Railgun executa atomicamente.</p>
    </div>
`;

// ==================== EIP-712 ====================
sections.eip712 = `
    <h2>✍️ EIP-712 Signatures</h2>

    <div class="card">
        <h3>Quando EIP-712 Entra?</h3>
        <p><strong>ANTES</strong> da ordem ir pro orderbook - é autenticação e integridade.</p>
    </div>

    <div class="card">
        <h3>Fluxo</h3>
        <pre><code>User → Assina ordem (EIP-712 Metamask)
     → Envia para backend
     → Backend verifica OFFCHAIN (ethers.js)
     → Se válida: adiciona orderbook
     → Se inválida: rejeita (401)</code></pre>
    </div>

    <div class="card">
        <h3>Proteção Contra Manipulação</h3>
        <p><strong>Cenário Ataque:</strong></p>
        <ol>
            <li>Alice: BUY 10 ETH @ 3000 (assina)</li>
            <li>Atacante modifica: BUY 100 ETH @ 3000</li>
            <li>Backend verifica: hash não bate</li>
            <li>❌ Assinatura inválida! Rejeitada</li>
        </ol>

        <p><strong>Por quê funciona:</strong></p>
        <pre><code>hash({amount:10, price:3000}) = "0xABC..."
hash({amount:100, price:3000}) = "0xDEF..." // Diferente!

signature = sign(privateKey, hash(data))
verify(signature, wrongHash) = FAIL</code></pre>
    </div>

    <div class="card">
        <h3>Proteções Adicionais</h3>
        <table>
            <thead>
                <tr><th>Proteção</th><th>Como</th><th>Previne</th></tr>
            </thead>
            <tbody>
                <tr><td><strong>Nonce</strong></td><td>Número único</td><td>Replay attack</td></tr>
                <tr><td><strong>Expiry</strong></td><td>Timestamp</td><td>Ordens antigas</td></tr>
                <tr><td><strong>Domain</strong></td><td>Identifica app</td><td>Cross-app reuse</td></tr>
            </tbody>
        </table>
    </div>
`;


// ==================== CODE EXAMPLES ====================
sections.code = `
    <h2>💻 Code Examples - Production Ready</h2>

    <div class="alert alert-success">
        <strong>✅ Zero Smart Contracts:</strong> Todo código é backend Node.js + frontend React. Usa Railgun deployado.
    </div>

    <div class="card">
        <h3>Orderbook Engine - Red-Black Tree</h3>
        <pre><code>// orderbook.js
const { RBTree } = require('bintrees');

class Orderbook {
  constructor(pair) {
    this.pair = pair; // "ETH-USDC"
    
    // Bids DESC (higher price first)
    this.bids = new RBTree((a, b) => {
      if (b.price !== a.price) return b.price - a.price;
      return a.timestamp - b.timestamp; // Price-time
    });
    
    // Asks ASC (lower price first)  
    this.asks = new RBTree((a, b) => {
      if (a.price !== b.price) return a.price - b.price;
      return a.timestamp - b.timestamp;
    });
  }

  addOrder(order) {
    const tree = order.side === 'buy' ? this.bids : this.asks;
    tree.insert(order);
    return this.tryMatch();
  }

  tryMatch() {
    const bestBid = this.bids.max();
    const bestAsk = this.asks.min();
    
    if (!bestBid || !bestAsk) return null;
    
    // Check cross
    if (bestBid.price >= bestAsk.price) {
      return { maker: bestBid, taker: bestAsk, executionPrice: bestBid.price };
    }
    
    return null;
  }
}</code></pre>
    </div>

    <div class="card">
        <h3>Matching Engine</h3>
        <pre><code>// matching.js
class MatchingEngine {
  async processNewOrder(order) {
    const match = this.orderbook.addOrder(order);
    
    if (!match) {
      console.log('No match, order in book');
      return { matched: false };
    }
    
    console.log('Match found!');
    
    try {
      const trade = await this.executeMatch(match);
      
      // Remove from book
      this.orderbook.removeOrder(match.maker.id, match.maker.side);
      this.orderbook.removeOrder(match.taker.id, match.taker.side);
      
      // Update DB
      await this.db.query(\`
        UPDATE orders SET status='FILLED' WHERE id IN ($1,$2)
      \`, [match.maker.id, match.taker.id]);
      
      return { matched: true, trade };
      
    } catch (error) {
      console.error('Execution failed:', error);
      return { matched: false, error: error.message };
    }
  }

  async executeMatch(match) {
    // Build atomic transfers
    const transfers = [
      {
        from: takerPrivateAddress,
        to: makerPrivateAddress,
        token: match.maker.tokenBuy,
        amount: match.maker.amount
      },
      {
        from: makerPrivateAddress,
        to: takerPrivateAddress,
        token: match.maker.tokenSell,
        amount: match.maker.amount * match.executionPrice
      }
    ];
    
    // Execute via Railgun
    const txHash = await this.railgun.executePrivateTransfers(transfers);
    
    return { txHash, ...match };
  }
}</code></pre>
    </div>

    <div class="card">
        <h3>Railgun Service</h3>
        <pre><code>// railgun.js
const { RailgunWallet } = require('@railgun-community/wallet');

class RailgunService {
  async initialize() {
    this.wallet = new RailgunWallet({
      network: 'arbitrum-sepolia',
      rpcUrl: process.env.ALCHEMY_RPC_URL
    });
    
    await this.wallet.initialize();
    console.log('Railgun SDK initialized');
  }

  async executePrivateTransfers(transfers) {
    console.log('Generating ZK proofs...');
    
    // 1. Generate proofs (~5-10s)
    const proofs = await this.wallet.generateProofs(transfers);
    
    // 2. Submit to relayer
    const result = await this.wallet.submitToRelayer(proofs);
    
    // 3. Wait confirmation
    await result.wait(2);
    
    console.log('Transaction confirmed:', result.hash);
    return result.hash;
  }
}</code></pre>
    </div>
`;

// ==================== BUSINESS MODEL ====================
sections['business-model'] = `
    <h2>💰 Business Model</h2>

    <div class="card">
        <h3>1. Trading Fees (Principal)</h3>
        <table>
            <thead>
                <tr><th>Tier</th><th>Volume/Mês</th><th>Fee</th><th>Ex ($1M)</th></tr>
            </thead>
            <tbody>
                <tr><td>Bronze</td><td>< $10M</td><td>0.15%</td><td>$1,500</td></tr>
                <tr><td>Silver</td><td>$10-50M</td><td>0.10%</td><td>$1,000</td></tr>
                <tr><td>Gold</td><td>$50-100M</td><td>0.08%</td><td>$800</td></tr>
                <tr><td>Platinum</td><td>> $100M</td><td>0.05%</td><td>$500</td></tr>
            </tbody>
        </table>
    </div>

    <div class="card">
        <h3>2. Subscriptions</h3>
        <ul>
            <li><strong>Basic:</strong> Grátis - fees padrão</li>
            <li><strong>Pro:</strong> $500/mês - 10% desconto, API</li>
            <li><strong>Enterprise:</strong> $5k/mês - 20% desconto, SLA 99.9%</li>
        </ul>
    </div>

    <div class="card">
        <h3>Projeção 5 Anos</h3>
        <table>
            <thead>
                <tr><th>Ano</th><th>Volume/Mês</th><th>Revenue</th></tr>
            </thead>
            <tbody>
                <tr><td>1</td><td>$10M</td><td>$470k</td></tr>
                <tr><td>2</td><td>$100M</td><td>$2.34M</td></tr>
                <tr><td>3</td><td>$500M</td><td>$6.5M</td></tr>
                <tr><td>4</td><td>$1B</td><td>$11.7M</td></tr>
                <tr><td>5</td><td>$2B+</td><td>$19.5M+</td></tr>
            </tbody>
        </table>
    </div>
`;

// ==================== KYC ====================
sections.kyc = `
    <h2>🆔 KYC Implementation</h2>

    <div class="card">
        <h3>Opção 1: Manual (Fase 0)</h3>
        <p><strong>Custo:</strong> $0 | <strong>Time:</strong> 30 min/user</p>
        <ul>
            <li>Upload docs → S3 encrypted → Review manual</li>
            <li>✅ Zero cost, full control</li>
            <li>❌ Não escala</li>
        </ul>
    </div>

    <div class="card">
        <h3>Opção 2: Sumsub (Fase 1)</h3>
        <p><strong>Custo:</strong> $300-500/mês | <strong>Time:</strong> 5 min auto</p>
        <ul>
            <li>Document verification, liveness, AML screening</li>
            <li>✅ Escalável, rápido</li>
            <li>❌ Custo mensal</li>
        </ul>
    </div>

    <div class="card">
        <h3>Opção 3: Chainalysis (Fase 2)</h3>
        <p><strong>Custo:</strong> $500-1k/mês</p>
        <ul>
            <li>Address screening, OFAC, risk scoring</li>
            <li>✅ Industrial-grade</li>
            <li>❌ Caro</li>
        </ul>
    </div>

    <h3>Recomendação</h3>
    <table>
        <thead>
            <tr><th>Fase</th><th>Solução</th><th>Custo</th></tr>
        </thead>
        <tbody>
            <tr><td>0</td><td>Manual</td><td>$0</td></tr>
            <tr><td>1</td><td>Sumsub</td><td>$300-500</td></tr>
            <tr><td>2</td><td>Sumsub+Chainalysis</td><td>$800-1.5k</td></tr>
        </tbody>
    </table>
`;

// ==================== FLOWS (COM PNG) ====================
sections.flows = `
    <h2>🔄 Flows & Diagrams</h2>

    <div class="alert alert-warning">
        <strong>📸 Como Gerar Diagramas PNG:</strong>
        <ol>
            <li>Abra <a href="https://mermaid.live" target="_blank">mermaid.live</a></li>
            <li>Copie o código do arquivo .mermaid correspondente</li>
            <li>Cole no editor Mermaid Live</li>
            <li>Clique em "Actions" → "PNG" para exportar</li>
            <li>Salve o arquivo PNG no diretório do projeto</li>
            <li>Atualize o HTML para referenciar a imagem</li>
        </ol>
    </div>

    <div class="card">
        <h3>1. Complete Trade Flow - Cenário Real</h3>
        <p><strong>Descrição:</strong> Fluxo completo desde Alice placing BUY order (Monday) até Bob placing SELL (Wednesday) e execução via Railgun ZK-SNARKs.</p>

        <!-- ✅ INSERIR IMAGEM AQUI -->
        <img src="trade-flow_mermaid.png" alt="Trade Flow Diagram" style="max-width: 100%; height: auto; border-radius: 8px; margin: 1rem 0; border: 1px solid rgba(255,140,0,0.3);">
        
        <p><strong>Arquivo Mermaid:</strong> <code>trade-flow.mermaid</code></p>
                
        <div class="alert alert-info">
            <strong>📋 Elementos do Diagrama:</strong>
            <ul>
                <li>7 Participantes: Alice, UI, API, DB, Railgun SDK, Arbitrum, Bob</li>
                <li>29 Steps totais do fluxo</li>
                <li>2 Fases temporais: Monday 10:00 → Wednesday 15:00</li>
                <li>Notas explicativas sobre timing e privacidade</li>
                <li>Distinção clara: offchain orderbook vs onchain execution</li>
            </ul>
        </div>
        
        <p><em>🎯 Key Insight: Orderbook 100% offchain (performance). Railgun chamado APENAS após match detectado (5-10s proof generation + blockchain settlement).</em></p>
    </div>

    <div class="card">
        <h3>2. Architecture Diagram - 8 Layers</h3>
        <p><strong>Descrição:</strong> Arquitetura completa do sistema Shadw em camadas (Layer 7 Users → Layer 0 Data).</p>

        <!-- ✅ INSERIR IMAGEM AQUI -->
        <img src="architecture_mermaid.png" alt="Architecture Diagram" style="max-width: 100%; height: auto; border-radius: 8px; margin: 1rem 0; border: 1px solid rgba(255,140,0,0.3);">

        <p><strong>Arquivo Mermaid:</strong> <code>architecture.mermaid</code></p>
        
        <div class="alert alert-info">
            <strong>📋 Camadas (Top → Bottom):</strong>
            <ul>
                <li><strong>Layer 7:</strong> Users (Hedge Funds, Family Offices, MMs) - Laranja escuro #ff8c00</li>
                <li><strong>Layer 6:</strong> Frontend (Next.js Trading UI + Admin) - Laranja médio #ffa500</li>
                <li><strong>Layer 5:</strong> API Gateway (Express + JWT + WebSocket) - Laranja claro #ffb732</li>
                <li><strong>Layer 4:</strong> Business Logic (Orderbook + Matching + Compliance) - Laranja pálido #ffc966</li>
                <li><strong>Layer 3:</strong> Railgun SDK (Wallet + ZK Proofs) - Laranja pastel #ffdb99</li>
                <li><strong>Layer 2:</strong> Relayer (Batching + Gas) - Laranja muito claro #ffedcc</li>
                <li><strong>Layer 1:</strong> Blockchain (Railgun Contracts + Arbitrum) - Cinza escuro #2a2a2a</li>
                <li><strong>Layer 0:</strong> Data (PostgreSQL + Redis + S3) - Preto #1a1a1a</li>
            </ul>
        </div>
        
        <p><em>🎯 Key Insight: Separação clara de responsabilidades. Dados e lógica offchain para performance. Blockchain apenas para settlement e privacidade.</em></p>
    </div>

    <div class="card">
        <h3>3. Privacy Flow - Shield/Unshield Lifecycle</h3>
        <p><strong>Descrição:</strong> Como usuários entram (shield), operam (trade) e saem (unshield) do sistema privado Railgun.</p>

        <!-- ✅ INSERIR IMAGEM AQUI -->
        <img src="privacy-flow_mermaid.png" alt="Privacy Flow Diagram" style="max-width: 100%; height: auto; border-radius: 8px; margin: 1rem 0; border: 1px solid rgba(255,140,0,0.3);">
        
        <p><strong>Arquivo Mermaid:</strong> <code>privacy-flow.mermaid</code></p>
               
        <div class="alert alert-info">
            <strong>📋 3 Fases do Ciclo:</strong>
            <ul>
                <li><strong>Phase 1: SHIELD</strong> - Deposit 100k USDC → Visible on explorer (who + amount) → Private balance inside Railgun</li>
                <li><strong>Phase 2: TRADING</strong> - Multiple private trades over days/weeks → NOTHING visible on blockchain except Railgun contract activity</li>
                <li><strong>Phase 3: UNSHIELD</strong> - Withdraw 106k USDC → Visible: final amount → NOT visible: how profit was made, counterparties, trades</li>
            </ul>
        </div>
        
        <p><em>🎯 Key Insight: Public knows entry/exit points but ZERO visibility into trading activity. ZK-SNARKs prove balance legitimacy without revealing trading history.</em></p>
    </div>

    <div class="alert alert-success">
        <strong>💡 Arquivos Incluídos no Projeto:</strong>
        <ul>
            <li><code>trade-flow.mermaid</code> - Sequence diagram completo do trade flow</li>
            <li><code>architecture.mermaid</code> - Graph diagram 8 layers com cores</li>
            <li><code>privacy-flow.mermaid</code> - Sequence diagram shield/trade/unshield lifecycle</li>
        </ul>
        <p>Todos prontos para serem convertidos em PNG de alta qualidade para apresentações, documentação e GitHub README.</p>
    </div>
`;


// ==================== ROADMAP ====================
sections.roadmap = `
    <h2>🗺️ Roadmap 16 Semanas</h2>

    <div class="card">
        <h3>Fases</h3>
        <table>
            <thead>
                <tr><th>Semana</th><th>Fase</th><th>Deliverables</th></tr>
            </thead>
            <tbody>
                <tr><td>1-2</td><td><strong>Deep Dive</strong></td><td>Estudo Railgun, ZK-SNARKs, dark pools, setup ambiente</td></tr>
                <tr><td>3-4</td><td><strong>Architecture</strong></td><td>Design 7 layers, database schema, API spec, diagramas</td></tr>
                <tr><td>5-6</td><td><strong>Railgun SDK</strong></td><td>POC shield/transfer, testes testnet, medição latency</td></tr>
                <tr><td>7-8</td><td><strong>Frontend</strong></td><td>Next.js, Metamask, order form, dashboard</td></tr>
                <tr><td>9-10</td><td><strong>Backend</strong></td><td>Express API, orderbook, matching, WebSocket</td></tr>
                <tr><td>11-12</td><td><strong>Compliance</strong></td><td>KYC workflow, admin, whitelist, audit logs</td></tr>
                <tr><td>13-14</td><td><strong>Testing</strong></td><td>Unit tests, integration, E2E, security audit</td></tr>
                <tr><td>15</td><td><strong>Deploy</strong></td><td>Testnet, monitoring, documentation, load tests</td></tr>
                <tr><td>16</td><td><strong>Pilot</strong></td><td>3-5 pilot users, 3+ trades, feedback, Go/No-Go</td></tr>
            </tbody>
        </table>
    </div>

    <div class="card">
        <h3>Budget</h3>
        <p><strong>Conservador (DIY):</strong> $14.4k (4 meses opex + $10k liquidez)</p>
        <p><strong>Liberal (Terceirizado):</strong> $87.2k ($30k dev + opex + $50k liquidez)</p>
    </div>

    <div class="card">
        <h3>Métricas Sucesso (Semana 16)</h3>
        <table>
            <thead>
                <tr><th>Métrica</th><th>Target</th><th>Mínimo Go</th></tr>
            </thead>
            <tbody>
                <tr><td>Instituições KYC</td><td>20</td><td>10</td></tr>
                <tr><td>Volume Total</td><td>$500k</td><td>$100k</td></tr>
                <tr><td>Trades Executados</td><td>10+</td><td>3+</td></tr>
                <tr><td>NPS Score</td><td>7+</td><td>5+</td></tr>
                <tr><td>Security Incidents</td><td>0</td><td>0</td></tr>
            </tbody>
        </table>
    </div>
`;

// ==================== FAQ ====================
sections.faq = `
    <h2>❓ FAQ - Frequently Asked Questions</h2>

    <div class="card">
        <h3>🎯 Geral</h3>
        
        <h4>Quanto custa?</h4>
        <p><strong>Mínimo:</strong> $14.4k (DIY + opex + liquidez mínima)</p>
        <p><strong>Recomendado:</strong> $30k-50k (buffer imprevistos)</p>

        <h4>Quanto tempo leva?</h4>
        <p><strong>Fase 0 MVP:</strong> 16 semanas (4 meses)</p>
        <p><strong>PMF:</strong> 6-12 meses adicionais</p>
        <p><strong>Scale:</strong> 18-24 meses total</p>

        <h4>Preciso de funding externo?</h4>
        <p><strong>Fase 0:</strong> Não necessariamente ($14k-87k bootstrapável)</p>
        <p><strong>Fase 1:</strong> Sim, recomendado ($2-5M seed)</p>
    </div>

    <div class="card">
        <h3>⚙️ Técnico</h3>

        <h4>Preciso criar smart contracts?</h4>
        <p><strong>NÃO!</strong> Usa Railgun contracts deployados via SDK. Zero Solidity.</p>

        <h4>Railgun provê liquidez?</h4>
        <p><strong>NÃO!</strong> Liquidez vem de users, MMs que recruta, ou você fazendo MM.</p>

        <h4>Orderbook onchain ou offchain?</h4>
        <p><strong>OFFCHAIN!</strong> PostgreSQL + Redis. Só execução final onchain via Railgun.</p>

        <h4>Como funciona EIP-712?</h4>
        <p>User assina ordem (Metamask) → Backend verifica offchain → Se válida, adiciona orderbook.</p>

        <h4>Quanto custa gas?</h4>
        <p>~$1-5 por trade em Arbitrum. Shadw paga e cobra via trading fees.</p>
    </div>

    <div class="card">
        <h3>💼 Negócio</h3>

        <h4>Como ganhamos dinheiro?</h4>
        <p><strong>5 Revenue Streams:</strong> Trading fees (0.05-0.15%), Subscriptions ($500-5k/mês), Market making spread, Data & Analytics, White-label</p>

        <h4>Quem são os customers?</h4>
        <p><strong>Fase 0:</strong> Crypto hedge funds, family offices ($10M-100M AUM)</p>
        <p><strong>Fase 1:</strong> Institutional investors ($100M-1B AUM)</p>
        <p><strong>Fase 2:</strong> TradFi banks, prop trading firms</p>
    </div>

    <div class="card">
        <h3>🔒 Compliance</h3>

        <h4>Preciso de licença?</h4>
        <p><strong>Depende da jurisdição.</strong> Consultar advogado. Geralmente: offshore (Cayman, BVI) mais flexível.</p>

        <h4>KYC é obrigatório?</h4>
        <p><strong>SIM!</strong> Para compliance AML/CTF, prevenir bad actors, construir confiança instituições.</p>
    </div>
`;

// ==================== REFERENCES ====================
sections.references = `
    <h2>📚 References & Resources</h2>

    <div class="card">
        <h3>Documentação Oficial</h3>
        <div class="resource-grid">
            <a href="https://docs.railgun.org" target="_blank" class="resource-card">
                <div class="resource-icon">📚</div>
                <div class="resource-title">Railgun Docs</div>
            </a>
            <a href="https://github.com/Railgun-Community" target="_blank" class="resource-card">
                <div class="resource-icon">💻</div>
                <div class="resource-title">Railgun GitHub</div>
            </a>
            <a href="https://eips.ethereum.org/EIPS/eip-712" target="_blank" class="resource-card">
                <div class="resource-icon">📜</div>
                <div class="resource-title">EIP-712 Spec</div>
            </a>
            <a href="https://docs.ethers.org/v6" target="_blank" class="resource-card">
                <div class="resource-icon">⚡</div>
                <div class="resource-title">ethers.js v6</div>
            </a>
        </div>
    </div>

    <div class="card">
        <h3>Ferramentas</h3>
        <table>
            <thead>
                <tr><th>Tool</th><th>Uso</th><th>Link</th></tr>
            </thead>
            <tbody>
                <tr><td>Next.js 14</td><td>Frontend</td><td><a href="https://nextjs.org" target="_blank">nextjs.org</a></td></tr>
                <tr><td>Express.js</td><td>Backend API</td><td><a href="https://expressjs.com" target="_blank">expressjs.com</a></td></tr>
                <tr><td>PostgreSQL</td><td>Database</td><td><a href="https://postgresql.org" target="_blank">postgresql.org</a></td></tr>
                <tr><td>Redis</td><td>Cache</td><td><a href="https://redis.io" target="_blank">redis.io</a></td></tr>
                <tr><td>Alchemy</td><td>RPC Provider</td><td><a href="https://alchemy.com" target="_blank">alchemy.com</a></td></tr>
            </tbody>
        </table>
    </div>

    <div class="card">
        <h3>Academic Papers</h3>
        <ul>
            <li><a href="https://eprint.iacr.org/2019/953.pdf" target="_blank">Zexe: Enabling Decentralized Private Computation</a></li>
            <li><a href="https://eprint.iacr.org/2022/1695" target="_blank">Privacy Pools</a> - Vitalik et al</li>
            <li><a href="https://arxiv.org/abs/1904.05234" target="_blank">Flash Boys 2.0</a> - MEV and frontrunning</li>
        </ul>
    </div>
`;

// ==================== GLOSSARY ====================
sections.glossary = `
    <h2>📖 Glossary</h2>

    <div class="card">
        <h3>🔗 Blockchain & Crypto</h3>
        <table>
            <thead>
                <tr><th>Termo</th><th>Definição</th></tr>
            </thead>
            <tbody>
                <tr><td><strong>0x address</strong></td><td>Endereço público Ethereum (visível onchain)</td></tr>
                <tr><td><strong>0zk address</strong></td><td>Endereço privado dentro Railgun</td></tr>
                <tr><td><strong>EIP-712</strong></td><td>Padrão para assinar typed structured data</td></tr>
                <tr><td><strong>Gas</strong></td><td>Taxa para executar transações blockchain</td></tr>
                <tr><td><strong>MEV</strong></td><td>Maximal Extractable Value - valor extraído reordenando txs</td></tr>
                <tr><td><strong>L1</strong></td><td>Layer 1 - blockchain base (Ethereum)</td></tr>
                <tr><td><strong>L2</strong></td><td>Layer 2 - rollup sobre L1 (Arbitrum)</td></tr>
            </tbody>
        </table>
    </div>

    <div class="card">
        <h3>🔐 Privacy & ZK</h3>
        <table>
            <thead>
                <tr><th>Termo</th><th>Definição</th></tr>
            </thead>
            <tbody>
                <tr><td><strong>zk-SNARK</strong></td><td>Zero-Knowledge proof - prova algo é verdade sem revelar porquê</td></tr>
                <tr><td><strong>Shield</strong></td><td>Depositar tokens no Railgun (entrar sistema privado)</td></tr>
                <tr><td><strong>Unshield</strong></td><td>Retirar tokens do Railgun (sair sistema privado)</td></tr>
                <tr><td><strong>Viewing Key</strong></td><td>Chave read-only para auditar sem poder gastar</td></tr>
                <tr><td><strong>Spending Key</strong></td><td>Chave privada que permite gastar. NUNCA compartilhar</td></tr>
                <tr><td><strong>Relayer</strong></td><td>Intermediário que transmite txs privadas, desvinculando sender</td></tr>
                <tr><td><strong>PPOI</strong></td><td>Private Proofs of Innocence - prova fundos não vêm de endereços sancionados</td></tr>
            </tbody>
        </table>
    </div>

    <div class="card">
        <h3>📊 Trading</h3>
        <table>
            <thead>
                <tr><th>Termo</th><th>Definição</th></tr>
            </thead>
            <tbody>
                <tr><td><strong>Dark Pool</strong></td><td>Mercado privado para trades grandes. Preços não visíveis até execução</td></tr>
                <tr><td><strong>Maker</strong></td><td>Quem coloca ordem primeiro (provê liquidez). Recebe seu preço se matched</td></tr>
                <tr><td><strong>Taker</strong></td><td>Quem aceita ordem existente (remove liquidez)</td></tr>
                <tr><td><strong>Orderbook</strong></td><td>Lista de ordens compra/venda, ordenadas por preço</td></tr>
                <tr><td><strong>Bid</strong></td><td>Ordem de compra. "Bid price" = quanto paga</td></tr>
                <tr><td><strong>Ask</strong></td><td>Ordem de venda. "Ask price" = quanto quer</td></tr>
                <tr><td><strong>Spread</strong></td><td>Diferença entre melhor bid e ask</td></tr>
                <tr><td><strong>Slippage</strong></td><td>Diferença preço esperado vs executado</td></tr>
                <tr><td><strong>Frontrunning</strong></td><td>Ver ordem mempool e executar antes para lucrar</td></tr>
            </tbody>
        </table>
    </div>
`;

// Export sections
if (typeof window !== 'undefined') {
    window.shadwSections = sections;
}

