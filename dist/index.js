"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadingTimeMagicPlugin = void 0;
const plugin_reading_time_1 = require("@vuepress/plugin-reading-time");
const ReadingTimeMagicPlugin = ({ wordPerMinute = 300, locales = "zh-CN", }) => {
    return (app) => {
        (0, plugin_reading_time_1.removeReadingTimePlugin)(app);
        (0, plugin_reading_time_1.useReadingTimePlugin)(app, {
            wordPerMinute,
            locales,
        });
        return {
            name: "vuepress-plugin-reading-time-magic",
        };
    };
};
exports.ReadingTimeMagicPlugin = ReadingTimeMagicPlugin;
