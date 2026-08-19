// discord_app/modules/forums/ForumPlatformUtils.native.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../intl/index.native.tsx";

const result = obj132.fileFinishedImporting("modules/forums/ForumPlatformUtils.native.tsx");

export default {
  getForumChannelPermissionText() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.LG9VAi);
  }
};