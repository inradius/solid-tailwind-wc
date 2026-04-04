import { ViteFilemanager } from 'filemanager-plugin';

const vitePluginFileManager = (copy?: {
  items?:
    | {
        source: string;
        destination: string;
        name?: string | undefined;
      }[]
    | undefined;
}) =>
  ViteFilemanager({
    customHooks: [
      {
        hookName: 'closeBundle',
        commands: { copy }
      }
    ]
  });

export default vitePluginFileManager;
