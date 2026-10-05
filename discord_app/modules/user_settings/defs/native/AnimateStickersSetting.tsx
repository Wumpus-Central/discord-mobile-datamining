// discord_app/modules/user_settings/defs/native/AnimateStickersSetting.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import intl4 from "../../../../intl/index.native.tsx";
import UserSettings from "../../UserSettings.tsx";
import StickersConstants from "../../../stickers/StickersConstants.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const StickerAnimationSettings = StickersConstants.StickerAnimationSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let intl;
      let intl2;
      let intl3;
      const obj = react2;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { label: intl.string(intl4.t["Xp+X2U"]), value: StickerAnimationSettings.ALWAYS_ANIMATE };
        intl = intl4.intl;
        const items = [obj2, ,];
        const obj3 = { label: intl2.string(intl4.t.IlLT7e), value: StickerAnimationSettings.ANIMATE_ON_INTERACTION };
        intl2 = intl4.intl;
        items[1] = obj3;
        const obj4 = { label: intl3.string(intl4.t.IGu8x3), value: StickerAnimationSettings.NEVER_ANIMATE };
        intl3 = intl4.intl;
        items[2] = obj4;
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () =>
      react.useMemo(() => {
        let intl;
        let intl2;
        let intl3;
        const obj = { label: intl.string(intl4.t["Xp+X2U"]), value: constants.ALWAYS_ANIMATE };
        intl = intl4.intl;
        const items = [obj, ,];
        const obj2 = { label: intl2.string(intl4.t.IlLT7e), value: constants.ANIMATE_ON_INTERACTION };
        intl2 = intl4.intl;
        items[1] = obj2;
        const obj3 = { label: intl3.string(intl4.t.IGu8x3), value: constants.NEVER_ANIMATE };
        intl3 = intl4.intl;
        items[2] = obj3;
        return items;
      }, []);
let obj = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(intl4.t.R5nQkS);
  },
  parent: MobileUserSettings.ACCESSIBILITY,
  useValue: UserSettings.AnimateStickers.useSetting,
  onValueChange: function onAnimateStickerSettingValueChange(arg0) {
    const AnimateStickers = UserSettings.AnimateStickers;
    AnimateStickers.updateSetting(Number(arg0));
  },
  useOptions: tmp2,
};
const radio = SettingBuilders.createRadio(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AnimateStickersSetting.tsx");

export default radio;
