import { useReadingTimePlugin, removeReadingTimePlugin, } from "@vuepress/plugin-reading-time";
export const ReadingTimeMagicPlugin = ({ wordPerMinute = 300, locales = {
    "/": {
        less1Minute: "小于一分钟",
        time: "阅读时长",
    },
}, }) => {
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
