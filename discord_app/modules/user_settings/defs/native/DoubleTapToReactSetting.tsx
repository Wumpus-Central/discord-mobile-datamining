// discord_app/modules/user_settings/defs/native/DoubleTapToReactSetting.tsx
import util from "../../../../intl/index.native.tsx";
import UserSettings from "../../UserSettings.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["4qhAjx"]);
  },
  parent: SettingsConstants.MobileUserSettings.CHAT,
  useValue() {
    const DoubleTapReactionEmoji = UserSettings.DoubleTapReactionEmoji;
    return !DoubleTapReactionEmoji.useSetting().disableDoubleTap;
  },
  onValueChange(disableDoubleTap) {
    const DoubleTapReactionEmoji = UserSettings.DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.getSetting();
    const DoubleTapReactionEmoji2 = UserSettings.DoubleTapReactionEmoji;
    const obj = { disableDoubleTap: !disableDoubleTap, emojiId: null, emojiName: null, animated: null };
    let emojiId;
    if (setting != null) {
      emojiId = setting.emojiId;
    }
    obj.emojiId = emojiId;
    let emojiName;
    if (setting != null) {
      emojiName = setting.emojiName;
    }
    obj.emojiName = emojiName;
    let animated;
    if (setting != null) {
      animated = setting.animated;
    }
    obj.animated = animated;
    DoubleTapReactionEmoji2.updateSetting(obj);
  },
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DoubleTapToReactSetting.tsx");

export default toggle;
