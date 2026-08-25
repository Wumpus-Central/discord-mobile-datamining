// === Module 14821: radio ===

// Module 14821 (radio)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4070 */;
import closure_2 from "noop" /* 19 */;
import { StickerAnimationSettings } from "STICKER_PICKER_TAB_PANEL_ID" /* 4073 */;
import createToggle from "createToggle" /* 10516 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.R5nQkS);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCESSIBILITY,
  useValue: require("explicitContentFromProto").AnimateStickers.useSetting,
  onValueChange: function onAnimateStickerSettingValueChange(arg0) {
    const AnimateStickers = explicitContentFromProto.AnimateStickers;
    AnimateStickers.updateSetting(Number(arg0));
  },
  useOptions: function useAnimateStickerSettingOptions() {
    return React.useMemo(() => {
      let obj = { label: null, value: null };
      const intl = callback(1236).intl;
      obj[0] = intl.string(callback(1236).t["Xp+X2U"]);
      obj[1] = constants.ALWAYS_ANIMATE;
      const items = [obj, , ];
      obj = { label: null, value: null };
      const intl2 = callback(1236).intl;
      obj[0] = intl2.string(callback(1236).t.IlLT7e);
      obj[1] = constants.ANIMATE_ON_INTERACTION;
      items[1] = obj;
      obj = { label: null, value: null };
      const intl3 = callback(1236).intl;
      obj[0] = intl3.string(callback(1236).t.IGu8x3);
      obj[1] = constants.NEVER_ANIMATE;
      items[2] = obj;
      return items;
    }, []);
  }
};
createToggle = createToggle.createRadio(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/AnimateStickersSetting.tsx");

export default createToggle;