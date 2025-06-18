import Image from "next/image";
import styles from "./page.module.css";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


export default function Home() {
 

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <article className={styles.article}>
          <header className={styles.header}>
            <h1 className={styles.title}>RGB++ Guide</h1>
            <div className={styles.metadata}>
              <time>Last edited: June 16, 2025 3:43 PM</time>
            </div>
          </header>

          <section className={styles.section}>
            <h2>Introduction</h2>
            <h3>What is RGB++</h3>
            <p>
              The RGB++ Protocol is a simple protocol that enhances Bitcoin
              Layer 1 programmability by establishing a binding between Bitcoin
              UTXOs and Turing-complete CKB Scripts. This binding creates a
              powerful bridge between Bitcoin's security and CKB's
              programmability.
            </p>
            <p>
              At its core, RGB++ Protocol uses a specific Bitcoin UTXO as a
              single-use seal - a cryptographic commitment that can only be used
              once, leveraging Bitcoin's inherent UTXO properties. This UTXO,
              along with its corresponding CKB cells, serves as the
              cryptographic proof, or the commitment, of ownership for RGB++
              assets. When a single-use seal is consumed, the ownership of the
              RGB++ asset is guaranteed to be transferred to the new UTXO or the
              wallet controlling it.
            </p>
            <p>
              The protocol employs CKB Cells to represent RGB++ asset ownership
              relationships, establishing an isomorphic binding with Bitcoin
              UTXOs. In this architecture, CKB serves dual roles: as a public
              database for assets and as an off-chain pre-settlement layer.
            </p>
            <p>
              RGB++ Protocol bridges Bitcoin's security with CKB's programmability, enabling sophisticated applications directly on Bitcoin. Developers can now create advanced smart contracts that power decentralized applications, from IDO platforms to liquid staking pools, and more.
            </p>
            <p>
              For more detailed information, please refer to the{" "}
              <a href="https://talk.nervos.org/t/rgb-protocol-light-paper-translation/7790">
                RGB++ Protocol Light Paper
              </a>{" "}
              or its{" "}
              <a href="https://talk.nervos.org/t/rgb-protocol-light-paper/7733">
                Chinese version
              </a>
              .
            </p>
          </section>

          <section className={styles.section}>
            <h2>Resources</h2>
            <h3>Protocol Overview</h3>
            <ul>
              <li>
                <a href="https://talk.nervos.org/t/rgb-protocol-light-paper-translation/7790">
                  RGB++ Protocol Light Paper
                </a>{" "}
                (English)
              </li>
              <li>
                <a href="https://talk.nervos.org/t/rgb-protocol-light-paper/7733">
                  RGB++ Protocol Light Paper
                </a>{" "}
                (中文)
              </li>
            </ul>

            <h3>Infrastructure</h3>
            <ul>
              <li>
                <a href="https://explorer.rgbpp.io/">RGB++ Explorer</a> - Block
                explorer for RGB++ transactions and assets
              </li>
              <li>
                <a href="https://github.com/RGBPlusPlus/btc-assets-api">
                  btc-assets-api
                </a>{" "}
                - API service for BTC/RGB++ asset management and transaction
                processing
              </li>
            </ul>

            <h3>Core Components</h3>
            <h4>RGB++ Script</h4>
            <p>
              Core contracts that implement the RGB++ protocol, including the
              RGB++ lock script for asset ownership and BTC time lock for
              cross-chain security.
            </p>
            <ul>
              <li>
                <a href="https://github.com/RGBPlusPlus/RGBPlusPlus-design/blob/main/docs/lockscript-design-prd-en.md">
                  RGB++ Script Standard
                </a>{" "}
                (English)
              </li>
              <li>
                <a href="https://github.com/RGBPlusPlus/RGBPlusPlus-design/blob/main/docs/lockscript-design-prd-cn.md">
                  RGB++ Script Standard
                </a>{" "}
                (中文)
              </li>
              <li>
                <a href="https://github.com/RGBPlusPlus/rgbpp">
                  RGB++ Script Repository
                </a>
              </li>
            </ul>

            <h4>CKB Bitcoin SPV</h4>
            <p>
              Light client implementation that enables CKB to verify Bitcoin
              transactions, providing a secure bridge between Bitcoin and CKB
              networks.
            </p>
            <ul>
              <li>
                <a href="https://github.com/RGBPlusPlus/ckb-bitcoin-spv/blob/master/docs/Design.md">
                  CKB Bitcoin SPV Design
                </a>
              </li>
              <li>
                <a href="https://github.com/RGBPlusPlus/ckb-bitcoin-spv-contracts">
                  CKB Bitcoin SPV Contracts
                </a>
              </li>
              <li>
                <a href="https://github.com/RGBPlusPlus/ckb-bitcoin-spv">
                  Bitcoin SPV library
                </a>
              </li>
              <li>
                <a href="https://github.com/RGBPlusPlus/ckb-bitcoin-spv-service">
                  CKB Bitcoin SPV Service
                </a>
              </li>
            </ul>

            <h3>Development Tools</h3>
            <ul>
              <li>
                <a href="https://github.com/ckb-devrel/ccc/tree/rgbpp-sdk">
                  RGB++ SDK (Primary) - TypeScript/JavaScript
                </a>
              </li>
              <li>
                <a href="https://github.com/RGBPlusPlus/rgbpp-sdk">
                  RGB++ SDK (Legacy) - TypeScript/JavaScript
                </a>
              </li>
            </ul>

            <h3>Community Resources</h3>
            <ul>
              <li>
                <a href="https://talk.nervos.org/t/rgb-rgb-ckb/7791/1">
                  从 RGB 到 RGB++：CKB如何赋能比特币生态资产协议
                </a>
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Core Concepts</h2>
            <p>
              As the name suggests, RGB++ protocol is inspired by the{" "}
              <a href="https://docs.rgb.info/">RGB protocol</a>. RGB++ inherits
              the core concepts from it, while leveraging CKB's unique
              advantages to enhance and extend these concepts.
            </p>
            <p>
              The following are the core concepts of the RGB++ protocol and key
              differences from the RGB protocol.
            </p>

            <h3>Single-Use Seal</h3>
            <p>
              Single-use seals are a cryptographic mechanism that locks a seal
              on a message, ensuring that the message can only be read or used
              once. The RGB++ protocol leverages Bitcoin UTXOs' inherent
              single-use property to implement this sealing mechanism.
            </p>
            <p>
              Through the use of single-use seals, the RGB++ protocol creates
              assets that are cryptographically bound to specific Bitcoin UTXOs.
              The ownership of these corresponding UTXOs directly establishes
              ownership of the RGB++ issued assets. To transfer a RGB++ asset,
              the holder must spend their corresponding UTXO, which effectively
              consumes the single-use seal and ensures the asset can only be
              transferred once.
            </p>
            <p>
              For a comprehensive explanation of single-use seals, please refer
              to this{" "}
              <a href="https://petertodd.org/2016/state-machine-consensus-building-blocks#uniqueness-and-single-use-seals">
                technical article
              </a>
              .
            </p>

            <h3>Blockchain-Enhanced State Validation</h3>
            <p>
              The concept of creating and managing assets on Bitcoin has been a
              long-standing pursuit in the cryptocurrency space. While Bitcoin's
              UTXO model provides a robust foundation for value transfer, its
              intentionally limited scripting system falls short in implementing
              the sophisticated security validations required for complex asset
              management, thus creating a need for complementary off-chain smart
              contract solutions.
            </p>
            <p>
              The RGB protocol employs client-side validation, where transaction
              verification doesn't require scanning the entire blockchain to
              collect contract state changes. Instead, it only needs a series of
              relevant Bitcoin transactions, the RGB transactions committed by
              these Bitcoin transactions, and their block inclusion proofs
              (based on Merkle proofs from block headers). This approach
              significantly reduces the cost of verifying a specific state of a
              contract. However, this design presents challenges for ordinary
              users: when using simple client applications, they often lack the
              capability or resources to maintain complete transaction
              histories, making it difficult to provide transaction proofs to
              their counterparts.
            </p>
            <p>
              RGB++ takes a different approach by leveraging CKB's
              Turing-complete script system to implement asset security checks.
              This design offers a more straightforward and accessible
              verification process for all users. By enforcing security checks
              on-chain, RGB++ eliminates the need for complex client-side
              validation while maintaining system transparency. Users only need
              to verify relevant transactions on CKB to confirm the correctness
              of RGB++ transaction state calculations, significantly reducing
              the burden on end users.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Typical Transaction Flow</h2>
            <p>
              As defined by the protocol, each RGB++ transaction generates a
              pair of corresponding transactions: one on the Bitcoin and one on
              the CKB.
            </p>
            <p>The following is a typical transaction flow:</p>
            <div className={styles.imageContainer}>
              <Image
                src="https://raw.githubusercontent.com/RGBPlusPlus/RGBPlusPlus-design/main/docs/assets/wp-tx-general.png"
                alt="RGB++ Transaction Flow"
                width={800}
                height={400}
                className={styles.image}
              />
            </div>

            <h3>1. Off-chain pre-computation</h3>
            <p>
              Let's assume <code>btc_utxo#1</code> is the single-use seal that
              will be consumed in this RGB++ transaction, while{" "}
              <code>btc_utxo#2</code> will serve as the new single-use seal
              after the transaction completes.
            </p>
            <p>
              In parallel, the CKB cell(s) that are isomorphically bound to{" "}
              <code>btc_utxo#1</code> are selected as inputs for the CKB
              transaction <code>CKB_TX_B</code>. The output(s) of{" "}
              <code>CKB_TX_B</code> will maintain the latest state of the RGB++
              asset.
            </p>
            <p>
              It's important to note that during the off-chain pre-computation
              phase, the Bitcoin transaction has not yet been submitted, so the
              transaction id component of <code>btc_utxo#2</code> is not yet
              available. In this case, a placeholder value is used as a
              temporary substitute.
            </p>
            <p>The commitment is computed using the following formula:</p>
            <SyntaxHighlighter language="javascript" style={oneDark} customStyle={{borderRadius:8, fontSize:'0.95em', margin:'1em 0'}}>
              {`commitment = hash(CKB_TX_B | btc_utxo#1 | btc_utxo#2)`}
            </SyntaxHighlighter>
            <p>
              In practice, the <code>btc_utxo#1</code> and{" "}
              <code>btc_utxo#2</code> are encoded within the RGB++ Script
              arguments of <code>CKB_TX_B</code>, establishing a secure binding
              between Bitcoin UTXOs and CKB cells.
            </p>
            <p>
              For detailed implementation, please refer to the{" "}
              <a href="https://github.com/RGBPlusPlus/rgbpp/blob/main/contracts/rgbpp-lock/src/main.rs#L209-L252">
                RGB++ Script
              </a>
              .
            </p>

            <h3>2. Bitcoin Transaction Submission</h3>
            <p>
              In this phase, the actual Bitcoin transaction{" "}
              <code>Bitcoin_TX_A</code> is submitted. The transaction's input
              consumes <code>btc_utxo#1</code>, while its two outputs serve
              distinct purposes: the first output uses an <code>OP_RETURN</code>{" "}
              script to store the commitment calculated in the previous phase,
              and the second output creates <code>btc_utxo#2</code>.
            </p>

            <h3>3. CKB Transaction Submission</h3>
            <p>
              In this phase, the CKB transaction <code>CKB_TX_B</code> is
              submitted, with the RGB++ asset's latest state recorded in{" "}
              <code>CKB_TX_B.output.data</code> field.
            </p>
            <p>
              Consequently, <code>btc_utxo#2</code> becomes the new single-use
              seal required for initiating the next state change, while{" "}
              <code>CKB_TX_B.output</code> represents the current state of the
              RGB++ asset.
            </p>

            <h3>4. On-chain Verification</h3>
            <p>In this phase, the following checks are performed:</p>
            <ul>
              <li>UTXOs related to Bitcoin validations are spent only once;</li>
              <li>
                A lightweight client on CKB confirms the existence of this
                Bitcoin transaction on the Bitcoin blockchain;
              </li>
              <li>
                The Bitcoin transaction is submitted as a witness in the CKB
                transaction;
              </li>
              <li>
                CKB ensures that the Bitcoin transaction has spent the correct
                UTXO;
              </li>
              <li>
                CKB validates that the Bitcoin transaction commits to the
                correct commitment;
              </li>
              <li>
                Finally, CKB confirms that the state transition on CKB complies
                with the predefined contract rules.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Core Components</h2>
            <h3>RGB++ Scripts</h3>
            <p>
              As described in the Typical Transaction Flow section, isomorphic
              binding requires that RGB++ transactions must be submitted on the
              Bitcoin chain, and that users utilize single-use seals on Bitcoin
              to describe operations on RGB++ cells. The transaction process
              follows these steps: first, the user constructs the CKB raw
              transaction and the RGB++ commitment; then, submits Bitcoin
              transaction that contains the commitment; and finally, submits the
              final CKB transaction.
            </p>
            <p>
              The ownership of Bitcoin UTXOs is encoded in the lock script of
              RGB++ Cells, specified by the combination of the Bitcoin
              transaction ID and output index.
            </p>
            <p>
              Regarding the commitment calculation, it encompasses the first{" "}
              <code>N</code> consecutive inputs and outputs, where{" "}
              <code>N</code> must include all inputs and outputs with non-null{" "}
              <code>Type</code> scripts. Any additional inputs and outputs with
              null <code>Type</code> scripts that follow these first{" "}
              <code>N</code> elements can be included in the CKB transaction
              without affecting the commitment. This design allows for flexible
              transaction fee adjustments while maintaining the integrity of the
              commitment.
            </p>
            <p>The protocol implements two key contracts:</p>
            <ol>
              <li>
              <code>RGBPP_lock</code>: A specialized contract that manages the unlocking mechanism for RGB++ Cells, ensuring secure and controlled access to the assets.
                <div className={styles.code}>
                  <SyntaxHighlighter language="typescript" style={oneDark} customStyle={{borderRadius:8, fontSize:'0.95em', margin:'1em 0'}}>
                    {`
RGBPP_lock: 
  code_hash: 
    RGBPP_lock 
  args: 
    out_index | %bitcoin_tx%
                  `}
                  </SyntaxHighlighter>
                </div>
                <ul>
                  <li>
                    The combination of <code>out_index</code> and{" "}
                    <code>bitcoin_tx</code> uniquely identifies the Bitcoin UTXO
                    that owns this Cell.
                  </li>
                </ul>
              </li>
              <li>
                <code>BTC_TIME_lock</code>: A time-based locking contract that
                enforces a predetermined block confirmation period when assets
                are transferred from Bitcoin Layer 1 to Layer 2, providing
                additional security for cross-layer transactions.
                <div className={styles.code}>
                  <SyntaxHighlighter language="bash" style={oneDark} customStyle={{borderRadius:8, fontSize:'0.95em', margin:'1em 0'}}>
                    {`
BTC_TIME_lock:
    args: lock_script | after | %new_bitcoin_tx%
                  `}
                  </SyntaxHighlighter>
                </div>
                <ul>
                  <li>
                    <code>lock_script</code> is the owner of the cell once the
                    time lock is unlocked;
                  </li>
                  <li>
                    <code>after</code> enforces a minimum block confirmation
                    threshold that must be met before the new_bitcoin_tx can be
                    unlocked.
                  </li>
                </ul>
              </li>
            </ol>

            <p>
              Both the <code>RGBPP_lock</code> and <code>BTC_TIME_lock</code>{" "}
              contracts require access to Bitcoin light client data, which is
              identified by the associated contract's <code>type_hash</code>. To
              eliminate hardcoded dependencies and enhance configurability, the
              protocol introduces the concept of Config Cell as a flexible
              solution for managing these configuration parameters. The
              following is the structure of the Config Cell:
            </p>

            <SyntaxHighlighter language="typescript" style={oneDark} customStyle={{borderRadius:8, fontSize:'0.95em', margin:'1em 0'}}>
              {`struct RGBPPConfig {
  version: Uint16,
  // Type hash of bitcoin light client
  bitcoin_lc_type_hash: Byte32,
  // Type hash of bitcoin time lock contract
  bitcoin_time_lock_type_hash: Byte32,
}`}
            </SyntaxHighlighter>

            <p>
              During contract deployment, the transaction outputs must include
              both the contract code cell and its corresponding config cell to
              ensure proper initialization. The following is an example of the
              deployment transaction:
            </p>

            <SyntaxHighlighter language="bash" style={oneDark} customStyle={{borderRadius:8, fontSize:'0.95em', margin:'1em 0'}}>
              {`# BTC_TIME_lock
inputs: any cells
outputs:
  BTC_TIME_lock code cell
  time_lock_config cell
# ...

# RGBPP_lock
inputs: any cells
outputs:
  RGBPP_lock code cell
  rgb_lock_config cell
# ...`}
            </SyntaxHighlighter>

            <p>The configuration cell is loaded using the following steps:</p>

            <ol>
              <li>
                <code>load_script</code> finds the current contract's{" "}
                <code>type_hash</code>
              </li>
              <li>
                It then locates the cell dep with a matching{" "}
                <code>type_hash</code> and an
                <code>out_point.index</code> of 1
              </li>
              <li>
                The data of this cell dep is loaded to obtain the global
                configuration
              </li>
            </ol>

            <p>
              During the <code>RGBPP_Lock</code> unlocking process, the SPV
              cells are consulted to verify the existence of the corresponding
              Bitcoin transaction, while the commitment is recalculated and
              validated against the commitment stored in the Bitcoin
              transaction's
              <code>OP_RETURN</code> field, along with additional security
              checks.
            </p>
            <p>The following figure demonstrates the unlocking process.</p>
            <div className={styles.imageContainer}>
              <Image
                src="https://raw.githubusercontent.com/utxostack/RGBPlusPlus-design/refs/heads/main/docs/assets/lock-verify.png"
                alt="RGB++ Transaction Lock Verification"
                width={800}
                height={400}
                className={styles.image}
              />
            </div>
            <p>
              The <code>BTC_TIME_lock</code> unlocking process is
              straightforward, as its behavior is explicitly expressed by the
              arguments in its lock script.
            </p>

            <p>
              For a comprehensive understanding of the protocol design, please
              refer to the{" "}
              <a href="https://github.com/RGBPlusPlus/RGBPlusPlus-design/blob/main/docs/lockscript-design-prd-en.md">
                RGB++ Script Standard
              </a>{" "}
              or its{" "}
              <a href="https://github.com/RGBPlusPlus/RGBPlusPlus-design/blob/main/docs/lockscript-design-prd-cn.md">
                Chinese version
              </a>
              . The complete implementation can be found in the{" "}
              <a href="https://github.com/RGBPlusPlus/rgbpp">
                RGB++ Script repository
              </a>
              .
            </p>

            <h3>SPV Service</h3>
            <p>
              Within the programmable layer of RGB++, a Bitcoin SPV light client
              maintains a synchronized record of Bitcoin block headers, enabling
              smart contracts to access and verify Bitcoin blockchain data,
              including historical transaction records, block difficulty,
              network hash rate, current block height, timestamps, and detailed
              transaction information, thereby providing a secure and efficient
              bridge between Bitcoin and CKB networks.
            </p>
            <p>SPV Service on CKB does the following:</p>
            <ol>
              <li>Prove if a header belongs to the Bitcoin chain</li>
              <li>Prove if a transaction is in a Bitcoin block</li>
            </ol>
            <p>To achieve this, CKB Bitcoin SPV Service does the following:</p>
            <ol>
              <li>
                Synchronizes Bitcoin headers to to Bitcoin SPV clients running
                on the CKB chain
              </li>
              <li>
                Generate proofs for Bitcoin transactions so that they can be
                verified on CKB
              </li>
            </ol>
            <p>
              Given on-chain verification comes with resource constraints, such
              as the inability to afford 100 MiB of storage or 30 seconds of
              computation on CKB, the MMR is introduced to address this issue by
              only saving the MMR root of Bitcoin headers on CKB. MMR provides a
              compact representation of the entire header chain with efficient
              verification capabilities, making it ideal for
              resource-constrained environments.
            </p>
            <p>
              Also, Merkle proof is used to verify that a transaction - or
              specifically, its hash - was included in a given block.
            </p>
            <p>
              For detailed technical design, please refer to the{" "}
              <a href="https://github.com/RGBPlusPlus/ckb-bitcoin-spv/blob/master/docs/Design.md">
                CKB Bitcoin SPV Design
              </a>
              .
            </p>
            <h3>SPV Type Script</h3>
            <p>
              A Bitcoin SPV on CKB consists of cells that are managed by the CKB
              Bitcoin SPV Type Script and identified by the script arguments. A
              Bitcoin SPV instance is a collection of cells. It contains two
              types of cells: SPV info cell and SPV client cell:
            </p>
            <ol>
              <li>SPV Client Cell</li>
                <ul>
                  <li>
                    A cell is identified as an SPV client cell if its type
                    script matches the SPV type script.
                  </li>
                  <li>
                    SPV client cells store the Bitcoin state. Each Bitcoin SPV
                    instance includes a minimum of three SPV client cells.
                  </li>
                    <SyntaxHighlighter language="yaml" style={oneDark} customStyle={{borderRadius:8, fontSize:'0.95em', margin:'1em 0'}}>
                      {`Client Cell:
    Type Script:
        code hash: "..."
        hash type: "type"
        args: "typeid + clients count + flags"
    Data:
        - id
        - btc tip block hash
        - btc headers mmr root
        - target adjust info`}
                    </SyntaxHighlighter>
                </ul>

              <li>SPV Info Cell</li>
                <ul>
                  <li>
                    The SPV info cell stores the basic information of the
                    current Bitcoin SPV instance, such as{" "}
                    <code>tip_client_id</code>.
                  </li>
                  <li>
                    Each Bitcoin SPV instance contains only one SPV info cell.
                  </li>
                    <SyntaxHighlighter language="yaml" style={oneDark} customStyle={{borderRadius:8, fontSize:'0.95em', margin:'1em 0'}}>
                      {`Info Cell:
    Type Script:
        code hash: "..."
        hash type: "type"
        args: "typeid + clients count + flags"
    Data:
        - tip client cell id`}
                    </SyntaxHighlighter>
                </ul>
            </ol>
            <p>
              The SPV cells are initialized in a single transaction, resulting
              in one SPV info cell and a minimum of three SPV client cells. The
              cells must be arranged consecutively, with the SPV info cell
              positioned first, followed by the SPV client cells in ascending
              order of their IDs. Upon initialization, all client cells must
              contain identical data.
            </p>
            <p>
              The SPV client cell with an ID matching the{" "}
              <code>tip_client_id</code> in the SPV info cell contains the most
              recent data, while the next cell in sequence holds the oldest
              data. This arrangement forms a ring structure where the sequence
              wraps around from the last cell back to the first cell. During
              updates, new data is written to the cell currently holding the
              oldest data, and the <code>tip_client_id</code> in the SPV info
              cell is updated to point to this newly updated cell, effectively
              marking it as the new "latest data" holder.
            </p>
            <h3>RGB++ SDK</h3>
            <p>
              At its core, the RGB++ SDK is focused on verifying and recording
              RGB++ asset ownership. In a regular BTC transaction, once the
              transaction is signed with a private key and broadcast to the
              network, it is considered complete after being validated and
              confirmed by most BTC nodes.
            </p>
            <p>
              However, with RGB++'s isomorphic binding, the consumption and
              generation of bound UTXOs and CKB Cells must maintain atomicity.
              It relies on btc-assets-api and SPV Service to faithfully
              synchronize RGB++ asset transaction information from BTC to CKB,
              while recording the resulting ownership changes in CKB Cells.
            </p>
            <p>
              That's where the RGB++ SDK comes in. It can be understood as a
              wallet operating within the RGB++ protocol semantics, capable of
              managing assets on both BTC and CKB chains, thereby facilitating
              RGB++ asset operations. Beyond basic BTC/CKB private key signature
              verification, the RGB++ SDK extends the signature verification
              process for RGB++ assets from the BTC chain to the CKB chain
              through the SPV Service and RGB++ contracts. From this
              perspective, the RGB++ SDK also provides the functionality of an
              RGB++ asset signature verifier.
            </p>
            <p>
              At the implementation level, the RGB++ SDK extensively utilizes
              ccc, the standard CKB JavaScript/TypeScript SDK, for core
              functionalities such as transaction assembly, signing, and
              submission.
            </p>
            <p>The following are the two SDK repositories:</p>
            <ul>
              <li>
                Actively developed (recommended):{" "}
                <a href="https://github.com/ckb-devrel/ccc/tree/rgbpp-sdk">
                  https://github.com/ckb-devrel/ccc/tree/rgbpp-sdk
                </a>{" "}
                (TypeScript)
              </li>
              <li>
                Continuously maintained:{" "}
                <a href="https://github.com/RGBPlusPlus/rgbpp-sdk">
                  https://github.com/RGBPlusPlus/rgbpp-sdk
                </a>{" "}
                (TypeScript)
              </li>
            </ul>
            <h3>btc-assets-api</h3>
            <p>
              This is a service that retrieves BTC/RGB++ information/assets and
              processes transactions with these assets. 
              </p>
            <p>Basically, it does the following:</p>
            <ol>
              <li>
                Blockchain Information Retrieval: Access to Bitcoin chain data
                including blocks, headers, transactions, addresses, and RGB++
                assets.
              </li>
              <li>Transaction Handling.</li>
              <li>
                Transaction Queue Management: Automated processing of RGB++
                asset workflows through scheduled cron jobs.
              </li>
            </ol>
            <p>
              The btc-assets-api requires an access token for authentication.
              Testnet users can generate a token directly via the{" "}
              <code>token/generate</code> API endpoint. The public testnet
              endpoint can be found in the{" "}
              <a href="https://github.com/RGBPlusPlus/btc-assets-api">
                btc-assets-api
              </a>{" "}
              repository.
            </p>
            <p>
              Mainnet access is restricted to whitelisted users. Please contact
              us to request an access token.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Quick Start</h2>
            <p>
              Before you start, refer to the btc-assets-api section to apply for
              an access token.
            </p>

            <h3>UDT</h3>
            <p>
              In CKB, custom tokens are implemented as User-Defined Tokens
              (UDTs). The CKB core team has established a minimal standard for
              UDTs called xUDT (extensible UDT). In this section, we demonstrate
              the RGB++ protocol by issuing a RGB++ token using the pre-deployed
              xUDT Script.
            </p>
            <p>
              For a comprehensive guide on issuing fungible tokens on CKB,
              please refer to the tutorial:{" "}
              <a href="https://docs.nervos.org/docs/dapp/create-token">
                Create a Fungible Token
              </a>
              . The following discussion will focus on the RGB++-specific
              aspects of the token issuance process.
            </p>
            <p>
              The complete implementation is available in the{" "}
              <a href="https://github.com/ckb-devrel/ccc/tree/rgbpp-sdk/packages/rgbpp/src/examples/udt">
                RGB++ SDK repository
              </a>
              .
            </p>

            <h4>Issuance</h4>
            <p>Let's walk through the issuance process step by step.</p>
            <p>
              The process begins by selecting a UTXO (or automatically creating
              one with the dust limit value of 546 satoshis if not provided) to
              serve as the initial single-use seal.
            </p>
            <p>
              Subsequently, we create a CKB cell with its lock script set to the
              RGB++ lock script, using the UTXO as its argument. This
              configuration represents the user's intent to issue a RGB++ xUDT
              token, which will only be fulfilled after the initial UTXO is
              spent.
            </p>
            <p>
              Next, a partial CKB transaction is constructed using the CKB cell
              and xUDT script information. Based on this, the commitment is
              calculated and the Bitcoin transaction is assembled, which is then
              submitted to the network.
            </p>
            <p>
              The Bitcoin transaction's confirmation status is periodically
              checked through the SPV service. Upon confirmation, we acquire the
              new single-use seal - a UTXO also with the dust limit value of 546
              satoshis - which represents ownership of the issued RGB++ xUDT
              token. The transaction ID of this UTXO is used to replace the
              placeholder value in the RGB++ lock script, enabling the assembly
              of the final CKB transaction.
            </p>
            <p>
              The final CKB transaction is then submitted to the network,
              completing the token issuance process.
            </p>
            <p>The following is the code for the issuance process.</p>
            <SyntaxHighlighter language="javascript" style={oneDark} customStyle={{borderRadius:8, fontSize:'0.95em', margin:'1em 0'}}>
              {`async function issueUdt({
  udtScriptInfo,
  utxoSeal,
}: {
  udtScriptInfo: ScriptInfo;
  utxoSeal?: UtxoSeal;
}) {
  // Initialize the RGB++ environment
  const {
    rgbppBtcWallet, rgbppUdtClient, utxoBasedAccountAddress, ckbRgbppUnlockSinger,
  } = initializeRgbppEnv();

  // Prepare the initial single-use seal and corresponding RGB++ cells
  if (!utxoSeal) {
    utxoSeal = await rgbppBtcWallet.prepareUtxoSeal();
  }
  const rgbppIssuanceCells = await prepareRgbppCells(utxoSeal, rgbppUdtClient);

  // Construct the partial CKB transaction
  const ckbPartialTx = await rgbppUdtClient.issuanceCkbPartialTx({
    token: udtToken,
    amount: issuanceAmount,
    rgbppLiveCells: rgbppIssuanceCells,
    udtScriptInfo,
  });
  console.log("Unique ID of issued xUDT token", ckbPartialTx.outputs[0].type!.args);

  // Build and submit the Bitcoin transaction
  const { psbt, indexedCkbPartialTx } = await rgbppBtcWallet.buildPsbt({
    ckbPartialTx,
    ckbClient,
    rgbppUdtClient,
    btcChangeAddress: utxoBasedAccountAddress,
    receiverBtcAddresses: [utxoBasedAccountAddress],
  });
  const btcTxId = await rgbppBtcWallet.signAndSendTx(psbt);

  const ckbPartialTxInjected = await rgbppUdtClient.injectTxIdToRgbppCkbTx(
    indexedCkbPartialTx,
    btcTxId,
  );
  // Polling the SPV service to wait for the Bitcoin transaction to be confirmed to construct the witness
  const rgbppSignedCkbTx = await ckbRgbppUnlockSinger.signTransaction(ckbPartialTxInjected);

  // Build and submit the final CKB transaction
  await rgbppSignedCkbTx.completeFeeBy(ckbSigner);
  const ckbFinalTx = await ckbSigner.signTransaction(rgbppSignedCkbTx);
  const txHash = await ckbSigner.client.sendTransaction(ckbFinalTx);
  await ckbRgbppUnlockSinger.client.waitTransaction(txHash);
}


issueUdt({
  udtScriptInfo: {
    name: ccc.KnownScript.XUdt,
    script: await ccc.Script.fromKnownScript(
      ckbClient,
      ccc.KnownScript.XUdt,
      "",
    ),
    cellDep: (await ckbClient.getKnownScript(ccc.KnownScript.XUdt)).cellDeps[0]
      .cellDep,
  },
});`}
            </SyntaxHighlighter>
            <p>
              For practical examples of RGB++ xUDT issuance, please refer to
              these transactions:
            </p>
            <ul>
              <li>
                <a href="https://mempool.space/tx/4cc01a7f14b1196b5be149f3c7a1d3742e6c5c60f1097641ad9eeb64ff83d44d">
                  Bitcoin Transaction: RGB++ xUDT Issuance
                </a>
              </li>
              <li>
                <a href="https://explorer.nervos.org/transaction/0x2d1426fcd4bff7cc7d19ea674dee1ec2e855db0c1648db0b3a222d641055f104">
                  CKB Transaction: RGB++ xUDT Issuance
                </a>
              </li>
            </ul>
            <h4>Transfer on BTC</h4>
            <p>
              The process of transferring RGB++ xUDT tokens on Bitcoin follows a
              similar pattern to the issuance process. Key points to note:
            </p>
            <ul>
              <li>
                The unique ID of issued xUDT token, obtained during issuance, is
                used to construct the xUDT script that identifies the token.
              </li>
              <li>
                The partial CKB transaction assembly is simplified through ccc:
                by providing the xUDT script, ccc automatically handles the
                input construction.
              </li>
            </ul>
            <p>The following is the code for the transfer process.</p>
            <SyntaxHighlighter language="javascript" style={oneDark} customStyle={{borderRadius:8, fontSize:'0.95em', margin:'1em 0'}}>
              {`async function transferUdt({
  udtScriptInfo,
  receivers,
}: {
  udtScriptInfo: ScriptInfo;
  receivers: RgbppBtcReceiver[];
}) {
  // ...

  const udt = new ccc.udt.Udt(
    udtScriptInfo.cellDep.outPoint,
    udtScriptInfo.script,
  );
  // Complete the outputs
  let { res: tx } = await udt.transfer(
    ckbSigner as unknown as ccc.Signer,
    receivers.map((receiver) => ({
      to: rgbppUdtClient.buildPseudoRgbppLockScript(),
      amount: ccc.fixedPointFrom(receiver.amount),
    })),
  );
  // Auto complete the xUDT inputs
  const txWithInputs = await udt.completeChangeToLock(
    tx,
    ckbRgbppUnlockSinger,
    rgbppUdtClient.buildPseudoRgbppLockScript(),
  );

  // the rest is the same as the issuance process...
}

transferUdt({
  udtScriptInfo: {
    name: ccc.KnownScript.XUdt,
    script: await ccc.Script.fromKnownScript(
      ckbClient,
      ccc.KnownScript.XUdt,
      "<unique id of issued xUDT token>",
    ),
    cellDep: (await ckbClient.getKnownScript(ccc.KnownScript.XUdt)).cellDeps[0]
      .cellDep,
  },
  receivers: [
    {
      amount: "<amount of xUDT token to transfer>",
      to: "<receiver's BTC address>",
    },
  ],
});`}
            </SyntaxHighlighter>
            <p>
              For practical examples of RGB++ xUDT transfer, please refer to
              these transactions:
            </p>
            <ul>
              <li>
                <a href="https://mempool.space/tx/505c74a073fc2cfab003b516e95fd0523dfa91e4f7ccca0c02db60c3cabd9383">
                  Bitcoin Transaction: RGB++ xUDT Transfer
                </a>
              </li>
              <li>
                <a href="https://explorer.nervos.org/transaction/0x38b8d1a37300fc0d389554ab9028e20321d5a46c6727ee7e2fa5728801a34c3c">
                  CKB Transaction: RGB++ xUDT Transfer
                </a>
              </li>
            </ul>

            <h4>Leap to CKB</h4>
            <p>
              The process of leaping xUDT from Bitcoin to CKB follows almost the
              same pattern as the regular transfer process, with one key
              distinction: after the leap, the lock script changes from{" "}
              <code>RGBPP_Lock</code> to <code>BTC_TIME_lock</code>.
            </p>
            <p>The following is the code for the leap process.</p>
            <SyntaxHighlighter language="javascript" style={oneDark} customStyle={{borderRadius:8, fontSize:'0.95em', margin:'1em 0'}}>
              {`async function btcUdtToCkb({
  udtScriptInfo,
  receivers,
}: {
  udtScriptInfo: ScriptInfo;
  receivers: { address: string; amount: bigint }[];
}) {
  // ...

  const udt = new ccc.udt.Udt(
    udtScriptInfo.cellDep.outPoint,
    udtScriptInfo.script,
  );

  let { res: tx } = await udt.transfer(
    ckbSigner as unknown as ccc.Signer,
    await Promise.all(
      receivers.map(async (receiver) => ({
        // build the BTC_TIME_lock script
        to: await rgbppUdtClient.buildBtcTimeLockScript(receiver.address),
        amount: ccc.fixedPointFrom(receiver.amount),
      })),
    ),
  );

  // the rest is the same as the transfer process...
}

btcUdtToCkb({
    udtScriptInfo: {
        name: ccc.KnownScript.XUdt,
        script: await ccc.Script.fromKnownScript(
        ckbClient,
        ccc.KnownScript.XUdt,
        "<unique id of issued xUDT token>",
        ),
        cellDep: (await ckbClient.getKnownScript(ccc.KnownScript.XUdt)).cellDeps[0]
        .cellDep,
    },
    receivers: [
    {
      address: "<receiver's CKB address>",
      amount: "<amount of xUDT token to leap>",
    },
  ],
});`}
            </SyntaxHighlighter>

            <p>
              For practical examples of RGB++ xUDT leap, please refer to
              these transactions:
            </p>
            <ul>
              <li>
                <a href="https://mempool.space/tx/76e0495834225675038fe4d90c826e3ab33058c9d921b1615eca234eff7eb125">
                  Bitcoin Transaction: RGB++ xUDT Leap
                </a>
              </li>
              <li>
                <a href="https://explorer.nervos.org/transaction/0xbf357ba27be87b368ba27e83a60bc4f0e32810634100dc5b2da3e93a4b9ca7fa">
                  CKB Transaction: RGB++ xUDT Leap
                </a>
              </li>
            </ul>
            <h4>Unlocking the BTC_TIME_lock</h4>
            <p>
              This process is relatively straightforward. We wait for the
              required number of confirmations (default is 6) before unlocking
              the <code>BTC_TIME_lock</code>. After unlocking, the xUDT becomes
              a standard CKB asset, with its ownership logic governed by the
              lock script specified in the <code>BTC_TIME_lock</code> arguments.
              Notably, this process does not require any Bitcoin transaction.
            </p>
            <p>The following is the code for the unlocking process.</p>
            <SyntaxHighlighter language="javascript" style={oneDark} customStyle={{borderRadius:8, fontSize:'0.95em', margin:'1em 0'}}>
              {`async function unlockBtcTimeLock(btcTimeLockArgs: string) {
  // ...

  const tx = ccc.Transaction.default();
  const btcTimeLockCells = await collectBtcTimeLockCells(
    btcTimeLockArgs,
    rgbppUdtClient,
  );
  // Complete the inputs and outputs
  btcTimeLockCells.forEach((cell) => {
    const cellInput = ccc.CellInput.from({
      previousOutput: cell.outPoint,
    });
    cellInput.completeExtraInfos(ckbClient);
    tx.inputs.push(cellInput);
    tx.addOutput(
      {
        lock: parseBtcTimeLockArgs(cell.cellOutput.lock.args).lock,
        type: cell.cellOutput.type,
        capacity: cell.cellOutput.capacity,
      },
      cell.outputData,
    );
  });

  // Monitor the SPV service until the Bitcoin transaction achieves the required confirmation threshold for witness construction
  for await (const btcTimeLockCell of btcTimeLockCells) {
    const { btcTxId, confirmations } = parseBtcTimeLockArgs(
      btcTimeLockCell.cellOutput.lock.args,
    );
    const spvProof = await pollForSpvProof(
      rgbppBtcWallet,
      btcTxId,
      confirmations,
    );
    tx.cellDeps.push(
      ccc.CellDep.from({
        outPoint: spvProof.spvClientOutpoint,
        depType: "code",
      }),
    );
    tx.witnesses.push(buildBtcTimeUnlockWitness(spvProof.proof));
  }

  // Build and submit the final CKB transaction
  await tx.completeFeeBy(ckbSigner);
  const signedTx = await ckbSigner.signTransaction(tx);
  const txHash = await ckbSigner.client.sendTransaction(signedTx);
  await ckbSigner.client.waitTransaction(txHash);
}

unlockBtcTimeLock(
  "<btc time lock args>",
)`}
            </SyntaxHighlighter>
            <p>
              For a practical example of unlocking the BTC_TIME_lock, please
              refer to this transaction:
            </p>
            <ul>
              <li>
                <a href="https://explorer.nervos.org/transaction/0x8a6d5d952614c583722052ec5d58dc8a2acf3e96f8c11825385cf4317abdba9d">
                  CKB Transaction: RGB++ xUDT Unlock
                </a>
              </li>
            </ul>
          </section>
          <section className={styles.section}>
            <h2>Glossary</h2>
            <h3>UTXO</h3>
            <p>
              A Bitcoin Unspent Transaction Output. It is defined by a
              transaction hash and a vout index which, collectively, constitute
              an outpoint.
            </p>
            <h3>CKB Cell</h3>
            <p>
              Cells are the primary state units in CKB, within them users can
              include arbitrary states. All data on Nervos CKB is stored in
              Cells.
            </p>
            <p>
              A Cell has 4 fields: <code>capacity</code>, <code>data</code>,{" "}
              <code>type</code> and <code>lock</code>.
            </p>
            <p>
              For a detailed explanation of the Cell Model, please refer to this{" "}
              <a href="https://docs.nervos.org/docs/tech-explanation/cell-model">
                document
              </a>
              .
            </p>
            <h3>Isomorphic Binding</h3>
            <p>
              A one-to-one mapping mechanism in RGB++ that links Bitcoin UTXOs
              to CKB Cells, enabling ownership synchronization through Bitcoin's
              UTXO locks while maintaining state in CKB's Cell data and type
              fields. This binding allows for Turing-complete Bitcoin UTXO
              transactions validated by CKB Cells.
            </p>
            <h3>CKB Script</h3>
            <p>
              A Script in CKB is a binary executable that can be executed
              on-chain. It is a program that runs on a virtual machine powered
              by the RISC-V instruction set, called the CKB-VM, and can perform
              arbitrary logic to guard and protect your Cells. You can think of
              it as smart contract.
            </p>
            <p>There're two main types of Scripts:</p>
            <ul>
              <li>
                <a href="https://docs.nervos.org/docs/tech-explanation/lock-script">
                  Lock Script
                </a>
                : A required Script controlling the ownership and access to a
                Cell, ensuring only authorized users can spend/consume the Cell.
              </li>
              <li>
                <a href="https://docs.nervos.org/docs/tech-explanation/type-script">
                  Type Script
                </a>
                : An optional Script dictating how a Cell can be used or
                modified in a transaction.
              </li>
            </ul>
            <h3>xUDT Script</h3>
            <p>
              <a href="https://docs.nervos.org/docs/common-scripts/xudt">
                Extensible UDT(xUDT)
              </a>{" "}
              is the User-Defined-Token(fungible token) Script implementation on
              CKB. You can think of it as the ERC-20 smart contract on Ethereum.
            </p>
            <div className={styles.imageContainer}>
           
              <img
                src={
                  "https://docs.nervos.org/img/how-ckb-works/structure-of-script.png"
                }
                width={800}
                height={400}
                alt="structure of script"
                className={styles.image}
              />
            </div>
            <h3>SPV</h3>
            <p>
              <a href="https://developer.bitcoin.org/devguide/operating_modes.html#simplified-payment-verification-spv">
                Simple Payment Verification (SPV)
              </a>{" "}
              allows a transaction receiver to confirm that the sender has
              control of the source funds of the payment they are offering,
              without needing to download the entire blockchain. This is
              achieved using Merkle proofs.
            </p>
            <p>
              Refer to the{" "}
              <a href="https://bitcoin.org/bitcoin.pdf">Bitcoin whitepaper</a>{" "}
              for more details.
            </p>
            <h3>MMR</h3>
            <p>
              A{" "}
              <a href="https://github.com/opentimestamps/opentimestamps-server/blob/master/doc/merkle-mountain-range.md">
                Merkle Mountain Range (MMR){" "}
              </a>
              is a binary hash tree data structure designed to allow efficient
              appending of new leaves while maintaining the integrity of the
              existing nodes.
            </p>
            <p>
              A MMR proof can be utilized to verify whether a specific item is
              included in the MMR root.
            </p>
            <h3>Merkle Root</h3>
            <p>
              A{" "}
              <a href="https://developer.bitcoin.org/reference/block_chain.html#merkle-trees">
                merkle root
              </a>{" "}
              is created by hashing together pairs of TXIDs to get a short and
              unique fingerprint for all the transactions in a block.
            </p>
            <p>
              This merkle root is placed in a block header to prevent the
              contents of the block from being tampered with later on.
            </p>
            <h3>OP_RETURN</h3>
            <p>
              The <code>OP_RETURN</code> standard locking script just contains
              the <code>OP_RETURN</code> opcode followed by one or more data
              pushes.
            </p>
            <SyntaxHighlighter language="bash" style={oneDark} customStyle={{borderRadius:8, fontSize:'0.95em', margin:'1em 0'}}>
              {`OP_RETURN
OP_PUSHBYTES_11
68656c6c6f20776f726c64`}
            </SyntaxHighlighter>
            <p>
              The standard <code>OP_RETURN</code> script has a maximum size
              limit of 83 bytes. However, there is an ongoing discussion and
              corresponding pull request to relax these standardness
              restrictions.
            </p>
            <p>For more information, please refer to:</p>
            <ul>
              <li>
                <a href="https://learnmeabitcoin.com/technical/script/return/">
                  OP_RETURN
                </a>
              </li>
              <li>
                <a href="https://github.com/bitcoin/bitcoin/pull/32359">
                  Bitcoin Core Pull Request #32359
                </a>
              </li>
            </ul>
          </section>
        </article>
      </main>
    </div>
  );
}
