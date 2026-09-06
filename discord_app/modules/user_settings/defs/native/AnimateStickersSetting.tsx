// discord_app/modules/user_settings/defs/native/AnimateStickersSetting.tsx
import util from "../../../../intl/index.native.tsx";
import UserSettings from "../../UserSettings.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const StickerAnimationSettings = fn(1938).StickerAnimationSettings;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.R5nQkS);
  },
  parent: fn(7975).MobileUserSettings.ACCESSIBILITY,
  useValue: fn(1935).AnimateStickers.useSetting,
  onValueChange: function onAnimateStickerSettingValueChange(arg0) {
    const AnimateStickers = UserSettings.AnimateStickers;
    AnimateStickers.updateSetting(Number(arg0));
  },
  useOptions: function useAnimateStickerSettingOptions() {
    return noop.useMemo(() => {
      let obj = { label: null, value: null };
      const intl = util.intl;
      obj.label = intl.string(util.t["Xp+X2U"]);
      obj.value = constants.ALWAYS_ANIMATE;
      const items = [obj, ,];
      obj = { label: null, value: null };
      const intl2 = util.intl;
      obj.label = intl2.string(util.t.IlLT7e);
      obj.value = constants.ANIMATE_ON_INTERACTION;
      items[1] = obj;
      obj = { label: null, value: null };
      const intl3 = util.intl;
      obj.label = intl3.string(util.t.IGu8x3);
      obj.value = constants.NEVER_ANIMATE;
      items[2] = obj;
      return items;
    }, []);
  },
};
SettingBuilders = SettingBuilders.createRadio(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AnimateStickersSetting.tsx");

export default SettingBuilders;
