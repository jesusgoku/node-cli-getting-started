import chalk from 'chalk';

export default function (messages) {
  console.log(chalk.greenBright(messages.join(' ')));
}
