// discord_common/js/shared/shared-constants/FirstPartyQuestTaskTypes.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";

const obj = { ALL: new Set(["PLAY_ACTIVITY", "PLAY_ON_DESKTOP", "PLAY_ON_PLAYSTATION", "PLAY_ON_XBOX", "STREAM_ON_DESKTOP", "WATCH_VIDEO", "WATCH_VIDEO_ON_MOBILE"]), DESKTOP: null, CONSOLE: null, IN_GAME: null, VIDEO: null };
const set = new Set(["PLAY_ACTIVITY", "PLAY_ON_DESKTOP", "PLAY_ON_PLAYSTATION", "PLAY_ON_XBOX", "STREAM_ON_DESKTOP", "WATCH_VIDEO", "WATCH_VIDEO_ON_MOBILE"]);
obj[1] = new Set(["PLAY_ACTIVITY", "PLAY_ON_DESKTOP", "STREAM_ON_DESKTOP"]);
const set1 = new Set(["PLAY_ACTIVITY", "PLAY_ON_DESKTOP", "STREAM_ON_DESKTOP"]);
obj[2] = new Set(["PLAY_ON_PLAYSTATION", "PLAY_ON_XBOX"]);
const set2 = new Set(["PLAY_ON_PLAYSTATION", "PLAY_ON_XBOX"]);
obj[3] = new Set(["ACHIEVEMENT_IN_ACTIVITY", "ACHIEVEMENT_IN_GAME"]);
const set3 = new Set(["ACHIEVEMENT_IN_ACTIVITY", "ACHIEVEMENT_IN_GAME"]);
obj[4] = new Set(["WATCH_VIDEO", "WATCH_VIDEO_ON_MOBILE"]);
const set4 = new Set(["WATCH_VIDEO", "WATCH_VIDEO_ON_MOBILE"]);
const result = obj132.fileFinishedImporting("../discord_common/js/shared/shared-constants/FirstPartyQuestTaskTypes.tsx");

export const FirstPartyQuestTaskTypes = { STREAM_ON_DESKTOP: "STREAM_ON_DESKTOP", PLAY_ON_DESKTOP: "PLAY_ON_DESKTOP", PLAY_ON_XBOX: "PLAY_ON_XBOX", PLAY_ON_PLAYSTATION: "PLAY_ON_PLAYSTATION", WATCH_VIDEO: "WATCH_VIDEO", WATCH_VIDEO_ON_MOBILE: "WATCH_VIDEO_ON_MOBILE", PLAY_ACTIVITY: "PLAY_ACTIVITY", ACHIEVEMENT_IN_GAME: "ACHIEVEMENT_IN_GAME", ACHIEVEMENT_IN_ACTIVITY: "ACHIEVEMENT_IN_ACTIVITY" };
export const FirstPartyQuestTaskTypesSets = obj;