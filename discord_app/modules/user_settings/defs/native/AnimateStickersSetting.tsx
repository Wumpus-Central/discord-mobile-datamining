// === Module 15256: AnimateStickersSetting ===

// Module 15256 (AnimateStickersSetting)
import react2 from "react" /* 576 */;
import intl4 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2028 */;
import StickersConstants from "StickersConstants" /* 2031 */;
import SettingsConstants from "SettingsConstants" /* 7645 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11142 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const StickerAnimationSettings = StickersConstants.StickerAnimationSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let intl;
  let intl2;
  let intl3;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { label: intl.string(intl4.t["Xp+X2U"]), value: StickerAnimationSettings.ALWAYS_ANIMATE };
    intl = intl4.intl;
    const items = [obj2, , ];
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
}) : (() => react.useMemo(() => {
  let intl;
  let intl2;
  let intl3;
  const obj = { label: intl.string(intl4.t["Xp+X2U"]), value: constants.ALWAYS_ANIMATE };
  intl = intl4.intl;
  const items = [obj, , ];
  const obj2 = { label: intl2.string(intl4.t.IlLT7e), value: constants.ANIMATE_ON_INTERACTION };
  intl2 = intl4.intl;
  items[1] = obj2;
  const obj3 = { label: intl3.string(intl4.t.IGu8x3), value: constants.NEVER_ANIMATE };
  intl3 = intl4.intl;
  items[2] = obj3;
  return items;
}, []));
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
  useOptions: tmp2
};
const radio = SettingBuilders.createRadio(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AnimateStickersSetting.tsx");

export default radio;