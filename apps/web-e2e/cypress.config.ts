/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: { default: 'nx run web:start' },
    }),
    baseUrl: 'http://localhost:3000',
  },
});
