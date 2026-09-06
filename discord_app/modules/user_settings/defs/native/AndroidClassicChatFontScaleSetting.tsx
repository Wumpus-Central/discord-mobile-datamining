// discord_app/modules/user_settings/defs/native/AndroidClassicChatFontScaleSetting.tsx
import util from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import _mod4184 from "../../../../../_runtime/metro/04184__.js";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import FontScaleStore from "../../appearance/native/FontScaleStore.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const useFontScaleStore = FontScaleStore.useFontScaleStore;
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.gFob3e);
  },
  parent: SettingsConstants.MobileUserSettings.APPEARANCE,
  useValue: function useClassicChatFontScaleValue() {
    return useFontScaleStore(
      (isClassicChatFontScaleEnabled) => isClassicChatFontScaleEnabled.isClassicChatFontScaleEnabled,
      _mod4184.shallow,
    );
  },
  onValueChange: function onClassicChatFontScaleChange(isClassicChatFontScaleEnabled) {
    _require = isClassicChatFontScaleEnabled;
    return require("ReactBatchUpdates").batchUpdates(() =>
      useFontScaleStore.setState({ isClassicChatFontScaleEnabled }),
    );
  },
  useDescription: function useClassicChatFontScaleDescription() {
    const intl = util.intl;
    return intl.string(util.t.OU3q8a);
  },
  usePredicate: PlatformUtils.isAndroid,
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidClassicChatFontScaleSetting.tsx");

export default toggle;
