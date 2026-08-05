import { getSystemLocale } from "../../intl/index.native.tsx";
// discord_app/modules/forums/ForumPlatformUtils.native.tsx
const result = require("set").fileFinishedImporting("modules/forums/ForumPlatformUtils.native.tsx");

export default {
  getForumChannelPermissionText() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.LG9VAi);
  }
};