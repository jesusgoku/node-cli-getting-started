# NODE CLI: Getting Started

Make an cli command with Node.JS

## Install

```bash
# Install global with yarn
yarn global add node-cli-getting-started

# Install global with npm
npm install -g node-cli-getting-started

# Install locally with yarn
yarn add node-cli-getting-started

# Install locally with npm
node install --save node-cli-getting-started
```

## Usage

```bash
# Display help with available commands
ncgt --help

# Display version of command
ncgt --version

# Run "hello" command
ncgt hello <name>

# Run "echo" command
ncgt echo <messages...>
```

## Release

```bash
# Check next release is correct
yarn run release --dry-run

# Make next release
yarn run release

# Push code to remote and publish to registry
git push --follow-tags origin master && yarn publish --non-interactive
```
