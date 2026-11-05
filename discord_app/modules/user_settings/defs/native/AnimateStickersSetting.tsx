// === Module 17686: AnimateStickersSetting ===

// Module 17686 (AnimateStickersSetting)
import util from "util" /* 1113 */;
import UserSettings from "UserSettings" /* 4968 */;
import noop from "module_19" /* 19 */;

require = fn;
const StickerAnimationSettings = fn(4971).StickerAnimationSettings;
const SettingBuilders = fn(11737);
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.R5nQkS);
  },
  parent: fn(8578).MobileUserSettings.ACCESSIBILITY,
  useValue: fn(4968).AnimateStickers.useSetting,
  onValueChange: function onAnimateStickerSettingValueChange(arg0) {
    const AnimateStickers = UserSettings.AnimateStickers;
    AnimateStickers.updateSetting(Number(arg0));
  },
  useOptions: function useAnimateStickerSettingOptions() {
    return noop.useMemo(() => {
      const obj = { label: null, value: null };
      const intl = util.intl;
      obj.label = intl.string(util.t["Xp+X2U"]);
      obj.value = constants.ALWAYS_ANIMATE;
      items = [obj, , ];
      const obj2 = { label: null, value: null };
      const intl2 = util.intl;
      obj2.label = intl2.string(util.t.IlLT7e);
      obj2.value = constants.ANIMATE_ON_INTERACTION;
      items[1] = obj2;
      const obj3 = { label: null, value: null };
      const intl3 = util.intl;
      obj3.label = intl3.string(util.t.IGu8x3);
      obj3.value = constants.NEVER_ANIMATE;
      items[2] = obj3;
      return items;
    }, []);
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AnimateStickersSetting.tsx");

export default radio;