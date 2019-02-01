import { importAll } from '@/utils';

importAll(require.context('.', true, /\.svg$/));