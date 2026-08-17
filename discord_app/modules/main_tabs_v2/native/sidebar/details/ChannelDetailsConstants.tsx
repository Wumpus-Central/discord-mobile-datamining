// discord_app/modules/main_tabs_v2/native/sidebar/details/ChannelDetailsConstants.tsx
import set from "set" /* 2 */;
import MessageEmbedTypes from "MessageEmbedTypes" /* 8507 */;

const sum = MessageEmbedTypes.SEARCH_BAR_HEIGHT + 40;
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsConstants.tsx");

export const ChannelDetailsNavigatorScreens = { DETAILS: "root", MUTE: "mute", THREADS: "threads", SETTINGS: "settings", PINNED_MESSAGES: "pinned-messages" };
export const ChannelDetailsButtonTypes = { SEARCH: "search", MUTE: "mute", THREADS: "threads", SETTINGS: "settings", MORE: "more" };
export const CHANNEL_DETAILS_MARGIN = 16;
export const CHANNEL_DETAILS_TOP_MARGIN = 24;
export const CHANNEL_DETAILS_BODY_TOP_MARGIN = 20;
export const CHANNEL_DETAILS_SEARCH_HEIGHT = sum;
export const BUTTON_DEFAULT_HEIGHT = 120;
export const CHANNEL_TOPIC_LINE_CLAMP = 3;
export const DESCRIPTION_HORIZONTAL_MARGIN = 24;
export const SPRING_CHANNEL_DETAILS = { mass: 1, damping: 30, stiffness: 300 };
export const SPRING_CHANNEL_HEADER = { mass: 1, damping: 80, stiffness: 1280 };