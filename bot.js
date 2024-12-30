import path from 'path';
import figlet from 'figlet';
import gradient from 'gradient-string';
import inquirer from 'inquirer';
import chalk from 'chalk';
import Table from 'cli-table3';

async function displayMenu() {
    const options = [
        'Launch Token And Buy',
        'Generate New Wallets',
        'Generate Vanity Wallet',
        'Check Wallet Balances',
        'Recover SOL from Subwallets',
        'Fund Wallets',
        'Sell Tokens from All Subwallets',
        'Sell Tokens from Specific Wallet',
        'Sell Tokens from All Wallets (Sell All)',
        'Sell % from All Wallets',
        'Dump All Raydium',
        'Start Bumping',
        'Start Trading for Wallets',
        'Exit',
    ];

    const table = new Table({
        head: [chalk.cyan('Options'), chalk.cyan('Description')],
        colWidths: [10, 40],
    });

    options.forEach((option, index) => {
        table.push([chalk.yellowBright(index + 1), chalk.white(option)]);
    });

    console.log('\n' + table.toString());

    const { choice } = await inquirer.prompt([
        {
            type: 'input',
            name: 'choice',
            message: chalk.green('Enter the number of your choice:'),
            validate: (input) => {
                const numChoice = parseInt(input, 10);
                if (numChoice >= 1 && numChoice <= options.length) {
                    return true;
                }
                return chalk.red('Please enter a valid number.');
            },
        },
    ]);

    const optionIndex = parseInt(choice, 10) - 1;

    try {
        switch (options[optionIndex]) {
            case 'Launch Token And Buy':
                console.log(chalk.yellow('Simulating Launch Token And Buy...'));
                await displayMenu(); // Loops back to the main menu
                break;
            case 'Generate New Wallets':
                console.log(chalk.yellow('Simulating Generate New Wallets...'));
                break;
            case 'Generate Vanity Wallet':
                console.log(chalk.yellow('Simulating Generate Vanity Wallet...'));
                break;
            case 'Check Wallet Balances':
                console.log(chalk.yellow('Simulating Check Wallet Balances...'));
                break;
            case 'Recover SOL from Subwallets':
                console.log(chalk.yellow('Simulating Recover SOL from Subwallets...'));
                break;
            case 'Fund Wallets':
                console.log(chalk.yellow('Simulating Fund Wallets...'));
                break;
            case 'Sell Tokens from All Subwallets':
                console.log(chalk.yellow('Simulating Sell Tokens from All Subwallets...'));
                break;
            case 'Sell Tokens from Specific Wallet':
                console.log(chalk.yellow('Simulating Sell Tokens from Specific Wallet...'));
                break;
            case 'Sell Tokens from All Wallets (Sell All)':
                console.log(chalk.yellow('Simulating Sell Tokens from All Wallets...'));
                break;
            case 'Sell % from All Wallets':
                console.log(chalk.yellow('Simulating Sell % from All Wallets...'));
                break;
            case 'Dump All Raydium':
                console.log(chalk.yellow('Simulating Dump All Raydium...'));
                break;
            case 'Start Bumping':
                console.log(chalk.yellow('Simulating Start Bumping...'));
                break;
            case 'Start Trading for Wallets':
                console.log(chalk.yellow('Simulating Start Trading for Wallets...'));
                break;
            case 'Exit':
                console.log(chalk.yellow('Exiting...'));
                return;
            default:
                console.log(chalk.red('Invalid option. Please try again.'));
                break;
        }
    } catch (err) {
        console.error(chalk.red('An error occurred during the selected operation:'), err);
    }

    await displayMenu();
}

// Start the bot
async function startBot() {
    console.log(chalk.blueBright('Starting the bot...'));

    // Display logo with gradient
    const logo = figlet.textSync('pumpXtools', { horizontalLayout: 'full' });
    const gradientText = gradient(['orange', 'yellow', 'white'])(logo);
    console.log(gradientText);

    // Add Telegram link and simulation message
    console.log(chalk.yellowBright('\nThis is a simulation version.'));
    console.log(
        chalk.green('DM ') +
        chalk.cyan('@hsebu21') +
        chalk.green(' on Telegram to get your license key.\n')
    );

    await displayMenu();
}

startBot();
