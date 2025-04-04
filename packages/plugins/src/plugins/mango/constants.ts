import { PublicKey } from '@solana/web3.js';

export const platformId = 'mango';
export const yieldFanPlatformId = 'yieldfan';

export const banksKey = `banks`;
export const rootBankPrefix = `${platformId}-rootBank`;
export const groupPrefix = `${platformId}-group`;
export const boostBanksKey = 'boost-banks';

export const mangoV4Pid = new PublicKey(
  '4MangoMjqJ2firMokCjjGgoK8d4MXcrgL7XJaL3w6fVg'
);

export const redeemProgramId = new PublicKey(
  'mv3ekLzLbnVPNxjSKvqBpU3ZeZXPQdEC3bp5MDEBG68'
);

export const boostProgramId = new PublicKey(
  'zF2vSz6V9g1YHGmfrzsY497NJzbRr84QUrPry4bLQ25'
);
