/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // getstartedSidebar: [{type: 'autogenerated', dirName: '.'}],

  getstartedSidebar: [
    {
      type: "doc",
      id: "intro",
      label: "Why Hyperlane",
    },
    {
      type: "doc",
      id: "your-first-message",
      label: "Send your first message",
    },
    {
      type: "doc",
      id: "deploy-hyperlane",
      label: "Deploy Hyperlane to a new chain",
    },
    {
      type: "doc",
      id: "explorer",
      label: "Using the explorer",
    },
    {
      type: "doc",
      id: "faq",
      label: "FAQ",
    },
  ],
  referenceSidebar: [
    {
      type: "category",
      label: "General Message Passing",
      link: {
        type: 'doc',
        id: 'reference/messaging/messaging-interface',
      },
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "reference/messaging/send",
          label: "Send a message",
        },
        {
          type: "doc",
          id: "reference/messaging/receive",
          label: "Receive a message",
        },
      ],
    },
    {
      type: "category",
      label: "Post-Dispatch Hooks",
      link: {
        type: 'doc',
        id: 'reference/hooks/overview',
      },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "reference/hooks/interchain-gas",
          label: "Interchain Gas",
        },
        {
          type: "doc",
          id: "reference/hooks/op-stack",
          label: "OP Stack",
        },
      ],
    },
    {
      type: "category",
      label: "Interchain Security Modules",
      link: {
        type: 'doc',
        id: 'reference/ISM/specify-your-ISM',
      },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "reference/ISM/ISM-interface",
          label: "ISM Interface",
        },
        {
          type: "doc",
          id: "reference/ISM/multisig-ISM-interface",
          label: "Multisig ISM Interface",
        },
        {
          type: "doc",
          id: "reference/ISM/routing-ISM-interface",
          label: "Routing ISM Interface",
        },
        {
          type: "doc",
          id: "reference/ISM/aggregation-ISM-interface",
          label: "Aggregation ISM Interface",
        },
      ],
    },
    {
      type: "category",
      label: "Libraries",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "reference/libraries/mailboxclient",
          label: "Mailbox Client",
        },
        {
          type: "doc",
          id: "reference/libraries/router",
          label: "Router",
        },
      ],
    },
    {
      type: "category",
      label: "Applications",
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "reference/applications/warp-routes",
          label: "Warp Routes",
        },
      ],
    },
    {
      type: "doc",
      id: "reference/contract-addresses",
      label: "Addresses",
    },
    {
      type: "doc",
      id: "reference/glossary",
      label: "Glossary",
    },
  ],

  protocolSidebar: [
    {
      type: "doc",
      id: "protocol/protocol-overview",
      label: "Overview",
    },
    {
      type: "doc",
      id: "protocol/mailbox",
      label: "Mailbox",
    },
    {
      type: "doc",
      id: "protocol/warp-routes",
      label: "Warp Routes",
    },
    {
      type: "category",
      label: "Interchain Security Modules",
      link: {
        type: "generated-index",
        description: "ISMs 💪🔒",
      },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "protocol/ISM/multisig-ISM",
          label: "Multisig",
        },
        {
          type: "doc",
          id: "protocol/ISM/routing-ISM",
          label: "Routing",
        },
        {
          type: "doc",
          id: "protocol/ISM/aggregation-ISM",
          label: "Aggregation",
        },
      ],
    },
    {
      type: "category",
      label: "Agents",
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "protocol/agents/validators",
          label: "Validators",
        },
        {
          type: "doc",
          id: "protocol/agents/relayer",
          label: "Relayer",
        },
        {
          type: "doc",
          id: "protocol/agents/watchtowers",
          label: "Watchtowers",
        },
      ],
    },
    {
      type: "doc",
      id: "protocol/economic-security",
      label: "Economic Security",
    },
    {
      type: "doc",
      id: "protocol/components",
      label: "Components",
    },
  ],

  guidesSidebar: [
    {
      type: "doc",
      id: "guides/v2-to-v3-migration",
      label: "v2 to v3 Migration",
    },
    {
      type: "category",
      label: "Interchain Gas",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "guides/IGP/manually-paying-interchain-gas",
          label: "Pay manually",
        },
        {
          type: "doc",
          id: "guides/IGP/automatically-paying-interchain-gas",
          label: "Auto pay gas",
        },
        {
          type: "doc",
          id: "guides/IGP/choosing-IGP-contract",
          label: "Choose IGP contract",
        },
      ],
    },
    {
      type: "doc",
      id: "guides/deploy-warp-route",
      label: "Deploy Warp Route",
    },
    {
      type: "doc",
      id: "guides/create-your-own-ISM",
      label: "Create your own ISM",
    },
    {
      type: "category",
      label: "Developer Tips",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "guides/developer-tips/unit-testing",
          label: "Unit Testing",
        },
        {
          type: "doc",
          id: "guides/developer-tips/explorer-debugging",
          label: "Explorer Debugging",
        },
        {
          type: 'doc',
          id: 'guides/latencies',
          label: 'Latencies',
        },
        {
          type: 'doc',
          id: 'guides/token-faucets',
          label: 'Token Faucets',
        },
      ],
    },
    {
      type: "category",
      label: "Ecosystems",
      link: {
        type: "generated-index",
        description:
          "Hyperlane can be deployed to virtually any chain, with implementations for major ecosystems and execution environments live.",
      },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "guides/ecosystems/celestia",
          label: "Celestia",
        },
        {
          type: "doc",
          id: "guides/ecosystems/cosmos",
          label: "Cosmos",
        },
        {
          type: "doc",
          id: "guides/ecosystems/evm",
          label: "EVM",
        },
        {
          type: "doc",
          id: "guides/ecosystems/solana",
          label: "Solana",
        },
        {
          type: "doc",
          id: "guides/ecosystems/move",
          label: "Move",
        },
        {
          type: "doc",
          id: "guides/ecosystems/fuel",
          label: "Fuel",
        },
      ],
    },
  ],

  operateSidebar: [
    {
      type: "doc",
      id: "operate/run-validators",
      label: "Run Validators",
    },
    {
      type: "doc",
      id: "operate/run-relayer",
      label: "Run Relayers",
    },
    {
      type: "doc",
      id: "operate/set-up-agent-keys",
      label: "Agent Keys",
    },
    {
      type: "doc",
      id: "operate/agent-config",
      label: "Agent Config",
    },
    {
      type: "doc",
      id: "operate/run-docker-compose",
      label: "Run Docker Compose",
    },
  ],
};

module.exports = sidebars;
