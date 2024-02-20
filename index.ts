import type { Plugin } from "@vuepress/core";
import type { ReadingTimePluginOptions } from "@vuepress/plugin-reading-time";
import {
  useReadingTimePlugin,
  removeReadingTimePlugin,
} from "@vuepress/plugin-reading-time";

interface ReadingTimePluginMagicOptions extends ReadingTimePluginOptions {}

export const ReadingTimeMagicPlugin = ({
  wordPerMinute = 300,
  locales = "zh-CN",
}: ReadingTimePluginMagicOptions): Plugin => {
  return (app) => {
    removeReadingTimePlugin(app);

    useReadingTimePlugin(app, {
      wordPerMinute,
      locales,
    });

    return {
      name: "vuepress-plugin-reading-time-magic",
    };
  };
};
