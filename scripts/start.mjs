// Serve a pasta dist na porta do ambiente (Railway define PORT). Funciona igual em Windows e Linux.
import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';

const porta = process.env.PORT || '3000';
const serve = createRequire(import.meta.url).resolve('serve/build/main.js');
spawn(process.execPath, [serve, '-s', 'dist', '-l', `tcp://0.0.0.0:${porta}`], { stdio: 'inherit' }).on('exit', (c) => process.exit(c ?? 0));
