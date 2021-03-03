import { DI_TYPES } from 'consts';

export type DITypes = typeof DI_TYPES[keyof typeof DI_TYPES];
