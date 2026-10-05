// discord_app/modules/user_settings/voice/native/UserSettingsVoiceConstants.tsx
import Constants from "../../../../Constants.tsx";
import HelpdeskUtils from "../../../../utils/HelpdeskUtils.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const HelpdeskArticles = Constants.HelpdeskArticles;
const combined =
  "" +
  HelpdeskUtils.getArticleURL(HelpdeskArticles.VOICE_VIDEO_TROUBLESHOOTING) +
  "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm";
const result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceConstants.tsx");

export const USER_SETTINGS_VOICE_GUILD_URL = combined;
