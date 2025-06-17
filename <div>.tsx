<div>
       
<div class="container">
  <h1 class="page-title">RGB++ Guide</h1>
  <div class="page-content">
    <h1>Introduction</h1>
    <h2>What is RGB++?</h2>
    <p>The RGB++ Protocol is a simple protocol that enhances Bitcoin Layer 1 programmability by establishing a binding between Bitcoin UTXOs and Turing-complete CKB Scripts. This binding creates a powerful bridge between Bitcoin&apos;s security and CKB&apos;s programmability.</p>
    <p>At its core, RGB++ Protocol uses a specific Bitcoin UTXO as a <em>single-use seal</em> - a cryptographic commitment that can only be used once, leveraging Bitcoin&apos;s inherent UTXO properties. This UTXO, along with its corresponding CKB cells, serves as the cryptographic proof, or the <em>commitment</em>, of ownership for RGB++ assets. When a single-use seal is consumed, the ownership of the RGB++ asset is guaranteed to be transferred to the new UTXO or the wallet controlling it.</p>
    <p>The protocol employs CKB Cells to represent RGB++ asset ownership relationships, establishing an isomorphic binding with Bitcoin UTXOs. In this architecture, CKB serves dual roles: as a public database for assets and as an off-chain pre-settlement layer.</p>
    <p>With RGB++ Protocol, users can seamlessly issue Layer 2 assets on CKB and transfer them between Bitcoin and CKB networks, combining Bitcoin&apos;s security with CKB&apos;s programmability.</p>
    <p>For more detailed information, please refer to the <a href="https://github.com/RGBPlusPlus/RGBPlusPlus-design/blob/main/docs/light-paper-en.md">RGB++ Protocol Light Paper</a> or its <a href="https://github.com/RGBPlusPlus/RGBPlusPlus-design/blob/main/docs/light-paper-cn.md">Chinese version</a>.</p>
    <h2>How to Use RGB++?</h2>
    <p>To use RGB++, you need to:</p>
    <ol className="numbered-list" start={1}>
      <li>Have a Bitcoin wallet with UTXOs</li>
      <li>Have a CKB wallet with some CKB for transaction fees</li>
      <li>Use a compatible wallet that supports RGB++ Protocol</li>
    </ol>
    <p>The basic workflow is:</p>
    <ol className="numbered-list" start={1}>
      <li>Issue RGB++ assets on CKB</li>
      <li>Transfer assets between Bitcoin and CKB networks</li>
      <li>Manage your RGB++ assets using compatible wallets</li>
    </ol>
    <h2>Compatible Wallets</h2>
    <p>Currently, the following wallets support RGB++ Protocol:</p>
    <ul className="bulleted-list">
      <li>JoyID Wallet</li>
      <li>UniSat Wallet</li>
      <li>More wallets coming soon...</li>
    </ul>
    <h2>Resources</h2>
    <ul className="bulleted-list">
      <li><a href="https://github.com/RGBPlusPlus/RGBPlusPlus-design">RGB++ Protocol Design Repository</a></li>
      <li><a href="https://github.com/RGBPlusPlus/RGBPlusPlus-design/blob/main/docs/light-paper-en.md">RGB++ Protocol Light Paper</a></li>
      <li><a href="https://github.com/RGBPlusPlus/RGBPlusPlus-design/blob/main/docs/technical-spec-en.md">RGB++ Protocol Technical Specification</a></li>
      <li><a href="https://github.com/RGBPlusPlus/RGBPlusPlus-design/blob/main/docs/light-paper-cn.md">RGB++ Protocol Light Paper (Chinese)</a></li>
      <li><a href="https://github.com/RGBPlusPlus/RGBPlusPlus-design/blob/main/docs/technical-spec-cn.md">RGB++ Protocol Technical Specification (Chinese)</a></li>
    </ul>
    <h2>Community</h2>
    <p>Join our community to learn more about RGB++ Protocol:</p>
    <ul className="bulleted-list">
      <li><a href="https://t.me/rgbplusplus">Telegram Group</a></li>
      <li><a href="https://twitter.com/RGBPlusPlus">Twitter</a></li>
      <li><a href="https://github.com/RGBPlusPlus">GitHub</a></li>
    </ul>
    <h2>Contributing</h2>
    <p>We welcome contributions to the RGB++ Protocol! Please check out our <a href="https://github.com/RGBPlusPlus/RGBPlusPlus-design/blob/main/CONTRIBUTING.md">Contributing Guidelines</a> for more information.</p>
    <h2>License</h2>
    <p>RGB++ Protocol is released under the <a href="https://github.com/RGBPlusPlus/RGBPlusPlus-design/blob/main/LICENSE">MIT License</a>.</p>
  </div>
</div>
</div>
