// discord_app/modules/notifications/settings/utils/notificationSettingsPresetUtils.tsx
import Constants from "../../../../Constants.tsx";
import util from "../../../../intl/index.native.tsx";
import ReadStateConstants from "../../../read_states/ReadStateConstants.tsx";
import _mod5021 from "module_5021" /* 5021 */;
import size from "../../../../../_runtime/metro/00002__.js";

function presetFromSettings(stateFromStores, UserGuildSettingsStore) {
  const items = [UserGuildSettingsStore, stateFromStores];
  const match = _mod5021.match(items);
  const items1 = [UserNotificationSettings.ALL_MESSAGES, UnreadSetting.ALL_MESSAGES];
  const items2 = [UserNotificationSettings.ONLY_MENTIONS, UnreadSetting.UNSET];
  const withResult = match.with(items1, () => constants.ALL_MESSAGES);
  const items3 = [UserNotificationSettings.ONLY_MENTIONS, UnreadSetting.ONLY_MENTIONS];
  const withResult1 = match.with(items1, () => constants.ALL_MESSAGES).with(items2, () => constants.MENTIONS);
  const items4 = [UserNotificationSettings.NO_MESSAGES, UnreadSetting.UNSET];
  const withResult2 = match
    .with(items1, () => constants.ALL_MESSAGES)
    .with(items2, () => constants.MENTIONS)
    .with(items3, () => constants.MENTIONS);
  const items5 = [UserNotificationSettings.NO_MESSAGES, UnreadSetting.ONLY_MENTIONS];
  const withResult3 = match
    .with(items1, () => constants.ALL_MESSAGES)
    .with(items2, () => constants.MENTIONS)
    .with(items3, () => constants.MENTIONS)
    .with(items4, () => constants.NOTHING);
  return match
    .with(items1, () => constants.ALL_MESSAGES)
    .with(items2, () => constants.MENTIONS)
    .with(items3, () => constants.MENTIONS)
    .with(items4, () => constants.NOTHING)
    .with(items5, () => constants.NOTHING)
    .otherwise(() => constants.CUSTOM);
}
const UserNotificationSettings = Constants.UserNotificationSettings;
const UnreadSetting = ReadStateConstants.UnreadSetting;
const Presets = {
  ALL_MESSAGES: "all_messages",
  HYBRID: "hybrid",
  MENTIONS: "mentions",
  NOTHING: "nothing",
  CUSTOM: "custom",
};
const result = size.fileFinishedImporting("modules/notifications/settings/utils/notificationSettingsPresetUtils.tsx");

export { Presets };
export { presetFromSettings };
export const webPresetFromSettings = function webPresetFromSettings(guildUnreadSetting, UserGuildSettingsStore) {
  if (guildUnreadSetting === UnreadSetting.ALL_MESSAGES) {
    if (UserGuildSettingsStore === UserNotificationSettings.ONLY_MENTIONS) {
      let HYBRID = obj.HYBRID;
    }
    return HYBRID;
  }
  HYBRID = presetFromSettings(guildUnreadSetting, UserGuildSettingsStore);
};
export const presetName = function presetName(tmp4Result5) {
  const match = _mod5021.match(tmp4Result5);
  const withResult = match.with(obj.ALL_MESSAGES, () => {
    const intl = util.intl;
    return intl.string(util.t.hZrr6k);
  });
  const withResult1 = match
    .with(obj.ALL_MESSAGES, () => {
      const intl = util.intl;
      return intl.string(util.t.hZrr6k);
    })
    .with(obj.HYBRID, () => {
      const intl = util.intl;
      return intl.string(util.t.JzbSEY);
    });
  const withResult2 = match
    .with(obj.ALL_MESSAGES, () => {
      const intl = util.intl;
      return intl.string(util.t.hZrr6k);
    })
    .with(obj.HYBRID, () => {
      const intl = util.intl;
      return intl.string(util.t.JzbSEY);
    })
    .with(obj.MENTIONS, () => {
      const intl = util.intl;
      return intl.string(util.t.y59NJm);
    });
  const withResult3 = match
    .with(obj.ALL_MESSAGES, () => {
      const intl = util.intl;
      return intl.string(util.t.hZrr6k);
    })
    .with(obj.HYBRID, () => {
      const intl = util.intl;
      return intl.string(util.t.JzbSEY);
    })
    .with(obj.MENTIONS, () => {
      const intl = util.intl;
      return intl.string(util.t.y59NJm);
    })
    .with(obj.NOTHING, () => {
      const intl = util.intl;
      return intl.string(util.t["pGn/bJ"]);
    });
  return match
    .with(obj.ALL_MESSAGES, () => {
      const intl = util.intl;
      return intl.string(util.t.hZrr6k);
    })
    .with(obj.HYBRID, () => {
      const intl = util.intl;
      return intl.string(util.t.JzbSEY);
    })
    .with(obj.MENTIONS, () => {
      const intl = util.intl;
      return intl.string(util.t.y59NJm);
    })
    .with(obj.NOTHING, () => {
      const intl = util.intl;
      return intl.string(util.t["pGn/bJ"]);
    })
    .with(obj.CUSTOM, () => {
      const intl = util.intl;
      return intl.string(util.t["32yow9"]);
    })
    .exhaustive();
};
export const arePresetSettingsUnset = function arePresetSettingsUnset(arg0, arg1) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = arg0 !== UnreadSetting.UNSET;
  }
  if (!tmp) {
    let tmp4 = null != arg1;
    if (tmp4) {
      tmp4 = arg1 !== UserNotificationSettings.NULL;
    }
    tmp = tmp4;
  }
  return !tmp;
};
