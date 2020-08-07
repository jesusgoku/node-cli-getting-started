#!/usr/bin/env node

import { Command } from 'commander';

import pkg from '../package.json';
import helloCommand from './commands/hello';
import echoCommand from './commands/echo';

const program = new Command();

program.version(pkg.version);

program.command('hello <name>').action(helloCommand);
program.command('echo <messages...>').action(echoCommand);

program.parse(process.argv);
