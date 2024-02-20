import type { Plugin } from "@vuepress/core";
import type { ReadingTimePluginOptions } from "@vuepress/plugin-reading-time";
interface ReadingTimePluginMagicOptions extends ReadingTimePluginOptions {
}
export declare const ReadingTimeMagicPlugin: ({ wordPerMinute, locales, }: ReadingTimePluginMagicOptions) => Plugin;
export {};
