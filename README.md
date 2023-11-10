# EchoBot - A Telegram forwarding bot

EchoBot is a simple Telegram bot, written in Typescript, that forwards messages between two chats. It can be configured for one-way or bidirectional message forwarding and allows targeting specific threads in a group chat.

## Prerequisites

- Node.js v18. Install via [nvm](https://github.com/nvm-sh/nvm) for best results.
- [pnpm](https://pnpm.io/) for package management. Install globally with `npm i -g pnpm`.

## Getting Started

1. Clone the repository.
2. Set up your `.env` file based on the template provided below.
3. Install dependencies with `pnpm i`.
4. Start the bot with `pnpm start`.

## Configuration

Create a `.env` file in the root of your project and provide the necessary values as shown in the table below:

| Key              | Value                                                                          |
| ---------------- | ------------------------------------------------------------------------------ |
| BOT_TOKEN        | The bot token from Telegram. Obtain from [BotFather](https://t.me/botfather).  |
| SOURCE_CHAT_ID   | The ID of the source chat from which messages will be forwarded.               |
| SOURCE_THREAD_ID | The thread ID within the source chat, if targeting a specific thread.          |
| TARGET_CHAT_ID   | The ID of the target chat to which messages will be forwarded.                 |
| TARGET_THREAD_ID | The thread ID within the target chat, if targeting a specific thread.          |
| BIDIRECTIONAL    | Set to `true` to enable bidirectional message forwarding. Defaults to `false`. |

Note: Replace the placeholder values with your actual data.

## Installation

```bash
pnpm install
```

### Usage

```bash
pnpm start
```

## Contributing

Feel free to submit pull requests or create issues for bugs and feature requests.

## Support

For help and support, please create an issue in the repository.
