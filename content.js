// Shadw Documentation - Working Version
const sections = {};

sections.home = `
    <div class="hero">
        <div class="hero-content">
            <h1>Shadw Dark Pool</h1>
            <p>Dark pool institucional descentralizado para trading privado em blockchain usando Railgun Protocol.</p>
            <div class="hero-stats">
                <div class="stat">
                    <div class="stat-value">4 meses</div>
                    <div class="stat-label">Time to MVP</div>
                </div>
                <div class="stat">
                    <div class="stat-value">$30k-80k</div>
                    <div class="stat-label">Investment</div>
                </div>
                <div class="stat">
                    <div class="stat-value">Baixo</div>
                    <div class="stat-label">Risco Técnico</div>
                </div>
            </div>
        </div>
    </div>

    <div class="card">
        <h2><span class="badge badge-primary">1</span> Identificação</h2>
        <table>
            <tbody>
                <tr>
                    <td><strong>Título:</strong></td>
                    <td>Shadw - Dark Pool Institucional Descentralizado para Trading Privado</td>
                </tr>
                <tr>
                    <td><strong>Pesquisadores:</strong></td>
                    <td><strong>Gustavo, Leandro, Thiago, Conrado, Felipe</strong></td>
                </tr>
                <tr>
                    <td><strong>Data Início:</strong></td>
                    <td>Janeiro / 2026</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="card">
        <h2><span class="badge badge-primary">2</span> Resumo da Proposta</h2>
        <p><strong>Shadw é uma plataforma de dark pool descentralizada</strong> que permite trading privado em larga escala para instituições financeiras, family offices e gestores de ativos. Resolve o problema de transparência total em blockchains públicas que expõe instituições a riscos de frontrunning e manipulação de mercado.</p>
        
        <p>Utiliza <strong>Railgun Protocol</strong> (ZK-SNARK, $2B+ volume) como camada de privacidade, mantendo compliance via KYC obrigatório e viewing keys. Metodologia: Fase 0 (MVP 4 meses, $30k-80k), Fase 1 (PMF 6-12 meses, $2-5M seed), Fase 2 (escala 18-24 meses, $10-20M Series A).</p>
    </div>

    <div class="card">
        <h2><span class="badge badge-warning">3</span> Contexto do Projeto</h2>
        
        <h3>🎯 Problema Investigado</h3>
        <div class="card-grid">
            <div class="card" style="background: linear-gradient(135deg, rgba(255,140,0,0.15) 0%, rgba(255,102,0,0.08) 100%);">
                <h4>⚡ Frontrunning/MEV</h4>
                <p>Bots detectam trades e executam antes (perda 3-5% slippage)</p>
            </div>
            <div class="card" style="background: linear-gradient(135deg, rgba(255,165,0,0.15) 0%, rgba(255,140,0,0.08) 100%);">
                <h4>🎯 Exposição Estratégica</h4>
                <p>Competidores monitoram posições em tempo real</p>
            </div>
            <div class="card" style="background: linear-gradient(135deg, rgba(255,183,50,0.15) 0%, rgba(255,165,0,0.08) 100%);">
                <h4>🎣 Target Ataques</h4>
                <p>Carteiras grandes viram alvos de phishing/exploits</p>
            </div>
            <div class="card" style="background: linear-gradient(135deg, rgba(255,201,102,0.15) 0%, rgba(255,183,50,0.08) 100%);">
                <h4>📉 Price Discovery</h4>
                <p>Mercado reage antes da execução completa</p>
            </div>
        </div>

        <h3>🎓 Relevância</h3>
        <ul>
            <li><strong>Acadêmica:</strong> Privacy-preserving DeFi research, ZK-SNARKs + compliance</li>
            <li><strong>Social:</strong> Democratiza acesso institucional ($300B-500B/dia TradFi)</li>
            <li><strong>Tecnológica:</strong> Valida zkApps para trading institucional</li>
        </ul>
    </div>

    <div class="card">
        <h2><span class="badge badge-success">4</span> Objetivos</h2>
        
        <div class="alert alert-info">
            <strong>🎯 Objetivo Geral:</strong> Desenvolver dark pool descentralizada combinando privacidade total (ZK-SNARKs) com compliance regulatório (KYC, viewing keys).
        </div>

        <h3>📋 Específicos</h3>
        <ol>
            <li><strong>Técnico:</strong> Integrar Railgun SDK, orderbook offchain, EIP-712, <60s latency</li>
            <li><strong>Negócio:</strong> 10-20 instituições, 3+ trades, $100k+ volume</li>
            <li><strong>Compliance:</strong> KYC workflow, whitelist, audit logs, viewing keys</li>
            <li><strong>Performance:</strong> 99%+ proteção MEV, economics positivos, 99.9% uptime</li>
        </ol>
    </div>

    <div class="card">
        <h2><span class="badge badge-success">5</span> Resultados Esperados</h2>
        
        <div class="card-grid">
            <div class="card">
                <h4>✅ Fase 0 (4 meses)</h4>
                <ul>
                    <li>MVP testnet</li>
                    <li>10-20 instituições KYC</li>
                    <li>3+ trades executados</li>
                    <li>$100k+ volume</li>
                    <li>Go/No-Go decision</li>
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
    </div>

    <h2>Por Que Shadw?</h2>
    <div class="card-grid">
        <div class="card" style="background: linear-gradient(135deg, rgba(255,140,0,0.15) 0%, rgba(255,102,0,0.08) 100%);">
            <h3>🔒 Privacidade Total</h3>
            <p>Trades privados via zk-SNARKs. 99%+ proteção MEV.</p>
        </div>
        <div class="card" style="background: linear-gradient(135deg, rgba(255,165,0,0.15) 0%, rgba(255,140,0,0.08) 100%);">
            <h3>⚡ Infraestrutura Mature</h3>
            <p>Railgun: $2B+ volume, 4 anos. Time 24m→4m, custo $5M→$80k.</p>
        </div>
        <div class="card" style="background: linear-gradient(135deg, rgba(255,183,50,0.15) 0%, rgba(255,165,0,0.08) 100%);">
            <h3>✅ Compliance Day 1</h3>
            <p>KYC, OFAC screening, viewing keys, PPOI.</p>
        </div>
        <div class="card" style="background: linear-gradient(135deg, rgba(255,201,102,0.15) 0%, rgba(255,183,50,0.08) 100%);">
            <h3>🚀 Fast to Market</h3>
            <p>MVP 4 meses. $30k-80k. Risco baixo.</p>
        </div>
    </div>
`;

sections['business-model'] = `
    <h2>💰 Business Model - Como Ganhar Dinheiro</h2>
    
    <div class="card">
        <h3>1. Trading Fees (Principal)</h3>
        <table>
            <thead>
                <tr><th>Tier</th><th>Volume Mensal</th><th>Fee</th><th>Ex ($1M trade)</th></tr>
            </thead>
            <tbody>
                <tr><td><strong>Bronze</strong></td><td>< $10M</td><td>0.15%</td><td>$1,500</td></tr>
                <tr><td><strong>Silver</strong></td><td>$10M-$50M</td><td>0.10%</td><td>$1,000</td></tr>
                <tr><td><strong>Gold</strong></td><td>$50M-$100M</td><td>0.08%</td><td>$800</td></tr>
                <tr><td><strong>Platinum</strong></td><td>> $100M</td><td>0.05%</td><td>$500</td></tr>
            </tbody>
        </table>
        <p><strong>Projeções:</strong> Fase 0: $150 | Ano 1: $180k | Ano 5: $8.4M+</p>
    </div>

    <div class="card">
        <h3>2. Subscriptions</h3>
        <ul>
            <li><strong>Basic:</strong> Grátis - fees padrão</li>
            <li><strong>Pro:</strong> $500/mês - 10% desconto, API, priority support</li>
            <li><strong>Enterprise:</strong> $5k/mês - 20% desconto, dedicated relayer, SLA 99.9%</li>
        </ul>
        <p><strong>Target Ano 2:</strong> 20 Pro + 5 Enterprise = $420k ARR</p>
    </div>

    <div class="card">
        <h3>3. Market Making</h3>
        <p>Shadw opera como MM, captura spread 0.1-0.3%</p>
        <p><strong>Exemplo:</strong> $1M/dia × 0.2% = $2k/dia = $60k/mês</p>
    </div>

    <h3>📊 Projeção 5 Anos</h3>
    <table>
        <thead>
            <tr><th>Ano</th><th>Volume/Mês</th><th>Trading Fees</th><th>Subs</th><th>Total</th></tr>
        </thead>
        <tbody>
            <tr><td><strong>1</strong></td><td>$10M</td><td>$180k</td><td>$50k</td><td><strong>$470k</strong></td></tr>
            <tr><td><strong>2</strong></td><td>$100M</td><td>$1.2M</td><td>$420k</td><td><strong>$2.34M</strong></td></tr>
            <tr><td><strong>3</strong></td><td>$500M</td><td>$4.5M</td><td>$800k</td><td><strong>$6.5M</strong></td></tr>
            <tr><td><strong>4</strong></td><td>$1B</td><td>$8.4M</td><td>$1.5M</td><td><strong>$11.7M</strong></td></tr>
            <tr><td><strong>5</strong></td><td>$2B+</td><td>$15M+</td><td>$2M</td><td><strong>$19.5M+</strong></td></tr>
        </tbody>
    </table>

    <div class="alert alert-success">
        <strong>💰 Bottom Line:</strong> Modelo viável, múltiplas revenue streams. Breakeven 12-18 meses.
    </div>
`;

sections.kyc = `
    <h2>🆔 KYC Implementation</h2>
    
    <div class="alert alert-info">
        <strong>Overview:</strong> KYC obrigatório para compliance. 3 opções por fase de maturidade.
    </div>

    <div class="card">
        <h3>Opção 1: Manual (Fase 0)</h3>
        <p><strong>Custo:</strong> $0 | <strong>Time:</strong> 30 min/user</p>
        <p><strong>Processo:</strong> Upload docs → S3 encrypted → Review manual → Approve/Reject</p>
        <p>✅ Zero cost | ❌ Não escala</p>
    </div>

    <div class="card">
        <h3>Opção 2: Sumsub (Fase 1)</h3>
        <p><strong>Custo:</strong> $300-500/mês | <strong>Time:</strong> 5 min/user auto</p>
        <p><strong>Features:</strong> Document verification, liveness detection, AML screening, risk scoring</p>
        <p>✅ Escalável, rápido | ❌ Custo mensal</p>
    </div>

    <div class="card">
        <h3>Opção 3: Chainalysis (Fase 2)</h3>
        <p><strong>Custo:</strong> $500-1k/mês | <strong>Uso:</strong> Address screening blockchain</p>
        <p><strong>Features:</strong> Monitor suspeitos, detect mixers/ransomware, OFAC screening, real-time alerts</p>
        <p>✅ Industrial-grade | ❌ Caro</p>
    </div>

    <h3>Recomendação</h3>
    <table>
        <thead>
            <tr><th>Fase</th><th>Solução</th><th>Custo</th><th>Justificativa</th></tr>
        </thead>
        <tbody>
            <tr><td><strong>0</strong></td><td>Manual</td><td>$0</td><td>10-20 users, validação</td></tr>
            <tr><td><strong>1</strong></td><td>Sumsub</td><td>$300-500</td><td>100+ users, escalar</td></tr>
            <tr><td><strong>2</strong></td><td>Sumsub+Chainalysis</td><td>$800-1.5k</td><td>1000+ users, institucional</td></tr>
        </tbody>
    </table>
`;

sections.flows = `
    <h2>🔄 Flows & Diagrams</h2>

    <div class="card">
        <h3>1. Complete Trade Flow</h3>
        <div class="mermaid">
sequenceDiagram
    participant Alice
    participant UI
    participant API
    participant DB
    participant RG as Railgun
    participant Bob

    Note over Alice,Bob: Segunda 10:00
    Alice->>UI: BUY 10 ETH @ 3000
    UI->>API: Sign + POST
    API->>DB: INSERT OPEN
    
    Note over DB: Waiting...
    
    Note over Alice,Bob: Quarta 15:00
    Bob->>UI: SELL 10 ETH @ 2995
    UI->>API: Sign + POST
    API->>DB: INSERT
    
    Note over API: MATCH! 3000>=2995
    API->>RG: ZK proofs
    RG->>API: Confirmed
    API->>DB: UPDATE FILLED
    API-->>Alice: Complete!
    API-->>Bob: Complete!
        </div>
    </div>

    <div class="card">
        <h3>2. Architecture (8 Layers)</h3>
        <div class="mermaid">
graph TB
    U[Users] --> F[Frontend]
    F --> API[Express API]
    API --> B[Orderbook+Matching]
    B --> R[Railgun SDK]
    R --> RE[Relayer]
    RE --> BC[Blockchain]
    B --> D[(Database)]
    
    style U fill:#ff8c00
    style F fill:#ffa500
    style API fill:#ffb732
    style B fill:#ffc966
    style R fill:#ffdb99
    style RE fill:#ffedcc
    style BC fill:#2a2a2a
    style D fill:#1a1a1a
        </div>
    </div>

    <div class="card">
        <h3>3. Privacy Flow</h3>
        <div class="mermaid">
sequenceDiagram
    participant User
    participant RG as Railgun
    participant Chain

    Note over User,Chain: SHIELD
    User->>RG: Deposit 100k
    RG->>Chain: Public TX
    Chain-->>User: Private!
    
    Note over User,Chain: TRADE
    User->>RG: Private trades
    
    Note over User,Chain: UNSHIELD
    User->>RG: Withdraw 150k
    RG->>Chain: Public TX
    Chain-->>User: Done!
        </div>
    </div>

    <div class="alert alert-info">
        <strong>💡 Key:</strong> Railgun called ONLY after match offchain. Critical for performance.
    </div>
`;

sections.architecture = `
    <h2>🏗️ Architecture</h2>

    <div class="card">
        <h3>Diagrama Completo (8 Layers)</h3>
        <div class="mermaid">
graph TB
    subgraph L7["LAYER 7: USERS"]
        U1[Hedge Funds]
        U2[Family Offices]
    end
    
    subgraph L6["LAYER 6: FRONTEND"]
        F1[Trading UI]
        F2[Admin]
    end
    
    subgraph L5["LAYER 5: API"]
        A1[Express]
        A2[Auth]
    end
    
    subgraph L4["LAYER 4: BUSINESS"]
        B1[Orderbook]
        B2[Matching]
    end
    
    subgraph L3["LAYER 3: RAILGUN"]
        R1[SDK]
    end
    
    subgraph L2["LAYER 2: RELAYER"]
        RE1[Batching]
    end
    
    subgraph L1["LAYER 1: BLOCKCHAIN"]
        BC1[Arbitrum]
    end
    
    subgraph L0["LAYER 0: DATA"]
        D1[(PostgreSQL)]
        D2[(Redis)]
    end
    
    U1 --> F1
    U2 --> F1
    F1 --> A1
    F2 --> A1
    A1 --> A2
    A2 --> B1
    B1 --> B2
    B2 --> R1
    R1 --> RE1
    RE1 --> BC1
    B1 --> D1
    B2 --> D2
    
    style U1 fill:#ff8c00,color:#000
    style U2 fill:#ff8c00,color:#000
    style F1 fill:#ffa500,color:#000
    style F2 fill:#ffa500,color:#000
    style A1 fill:#ffb732,color:#000
    style A2 fill:#ffb732,color:#000
    style B1 fill:#ffc966,color:#000
    style B2 fill:#ffc966,color:#000
    style R1 fill:#ffdb99,color:#000
    style RE1 fill:#ffedcc,color:#000
    style BC1 fill:#2a2a2a,color:#ff8c00
    style D1 fill:#1a1a1a,color:#ff8c00
    style D2 fill:#1a1a1a,color:#ff8c00
        </div>
    </div>

    <div class="card">
        <h3>Stack Tecnológico</h3>
        <table>
            <thead>
                <tr><th>Layer</th><th>Tech</th></tr>
            </thead>
            <tbody>
                <tr><td><strong>Frontend</strong></td><td>Next.js 14, TypeScript, TailwindCSS</td></tr>
                <tr><td><strong>Backend</strong></td><td>Node.js 20+, Express, Railgun SDK</td></tr>
                <tr><td><strong>Database</strong></td><td>PostgreSQL 15 + Redis 7</td></tr>
                <tr><td><strong>Blockchain</strong></td><td>Arbitrum (testnet: Sepolia, mainnet: One)</td></tr>
                <tr><td><strong>RPC</strong></td><td>Alchemy (99.9% SLA)</td></tr>
                <tr><td><strong>Host</strong></td><td>Vercel (frontend) + Railway (backend)</td></tr>
            </tbody>
        </table>
    </div>
`;

sections.quickstart = `
    <h2>🚀 Quick Start</h2>
    
    <div class="alert alert-warning">
        <strong>⚠️ Importante:</strong> Projeto não tem repo público ainda. Comandos são estrutura sugerida.
    </div>

    <div class="card">
        <h3>Setup</h3>
        <div class="code-header">
            <span>bash</span>
            <button class="copy-btn" onclick="copyCode(this)">Copy</button>
        </div>
        <pre><code class="language-bash"># Criar projeto
mkdir shadw-mvp && cd shadw-mvp
npm init -y
git init

# Estrutura
mkdir -p frontend backend docs</code></pre>
    </div>

    <div class="card">
        <h3>Próximos Passos</h3>
        <ol>
            <li>📚 Leia <a href="#" onclick="showSection('railgun')">Railgun Foundation</a></li>
            <li>🏗️ Estude <a href="#" onclick="showSection('architecture')">Architecture</a></li>
            <li>🔄 Analise <a href="#" onclick="showSection('flows')">Flows</a></li>
            <li>💻 Veja <a href="#" onclick="showSection('code')">Code Examples</a></li>
            <li>🗺️ Siga <a href="#" onclick="showSection('roadmap')">Roadmap 16 Semanas</a></li>
        </ol>
    </div>
`;

sections.railgun = `
    <h2>⚡ Railgun Protocol</h2>
    
    <div class="alert alert-info">
        <strong>Key:</strong> Railgun é a camada de privacidade. Você NÃO cria contracts - usa os já deployados.
    </div>

    <div class="card">
        <h3>O Que É</h3>
        <ul>
            <li><strong>TVL:</strong> $32M+</li>
            <li><strong>Volume:</strong> $2B+ all-time</li>
            <li><strong>Chains:</strong> Ethereum, Arbitrum, Polygon, BSC</li>
            <li><strong>Idade:</strong> 4+ anos produção</li>
            <li><strong>Audits:</strong> Trail of Bits, ABDK, Zokyo</li>
        </ul>
    </div>

    <div class="card">
        <h3>zkApps Usando Railgun</h3>
        <div class="card-grid">
            <div class="card">
                <h4>💰 Railway Wallet</h4>
                <p>Privacy wallet oficial ($2B+ volume)</p>
            </div>
            <div class="card">
                <h4>🔄 DEX Aggregators</h4>
                <p>Swaps privados entre DEXs</p>
            </div>
            <div class="card">
                <h4>🏦 Institutional Vaults</h4>
                <p>Gestão ativos privados</p>
            </div>
            <div class="card">
                <h4>📊 Shadw Dark Pool</h4>
                <p>Este projeto - OTC trading</p>
            </div>
        </div>
    </div>

    <div class="card">
        <h3>Por Que Railgun?</h3>
        <ul>
            <li>✅ <strong>Maturidade:</strong> 4 anos, $2B+ volume</li>
            <li>✅ <strong>Multi-chain:</strong> 4 chains (Ethereum, Arbitrum, Polygon, BSC)</li>
            <li>✅ <strong>Performance:</strong> Gas ~$1-5/trade</li>
            <li>✅ <strong>Compliance:</strong> PPOI, viewing keys built-in</li>
        </ul>
    </div>
`;

// Export
if (typeof window !== 'undefined') {
    window.shadwSections = sections;
}
