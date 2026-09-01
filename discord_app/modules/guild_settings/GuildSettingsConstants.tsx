// discord_app/modules/guild_settings/GuildSettingsConstants.tsx
import set from "../../../_runtime/00002_set.js";
import getSystemLocale from "../../intl/index.native.tsx";

const obj = {
  afk_channel_id() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.KuYcnU);
  },
  public_updates_channel_id() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.vAyDGU);
  },
  safety_alerts_channel_id() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.sMkYE8);
  },
  system_channel_id() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.NASFnq);
  },
};
const result = set.fileFinishedImporting("modules/guild_settings/GuildSettingsConstants.tsx");

export const MAX_SUBCATEGORIES = 5;
export const MAX_KEYWORDS = 10;
export const MAX_KEYWORD_LENGTH = 30;
export const GuildSettingsRoleEditSections = {
  DISPLAY: 0,
  [0]: "DISPLAY",
  PERMISSIONS: 1,
  [1]: "PERMISSIONS",
  MEMBERS: 2,
  [2]: "MEMBERS",
  VERIFICATIONS: 3,
  [3]: "VERIFICATIONS",
};
export const ERROR_KEY_TO_LABEL_FUNC = obj;
export const getSettingsErrorMessage = function getSettingsErrorMessage(arg0) {
  if (0 === Object.keys(arg0).length) {
    return null;
  } else {
    const _Object = Object;
    const first = Object.keys(arg0)[0];
    let tmp2Result;
    if (obj[first] != null) {
      tmp2Result = tmp2();
    }
    if (null != tmp2Result) {
      const _HermesInternal = HermesInternal;
      let combined = "(" + tmp2Result + ") " + arg0[first];
    } else {
      combined = arg0[first];
    }
    return combined;
  }
};
export const VANITY_URL_INVITE_ENDPOINT = "https://discord.gg";
