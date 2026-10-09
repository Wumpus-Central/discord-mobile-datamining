// === Module 15631: AnimateStickersSetting ===

// Module 15631 (AnimateStickersSetting)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import UserSettings from "UserSettings" /* 2041 */;
import noop from "module_19" /* 19 */;

require = fn;
const StickerAnimationSettings = fn(2044).StickerAnimationSettings;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(10629);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAnimateStickerSettingOptions() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { label: null, value: null };
    const intl = util.intl;
    obj2.label = intl.string(util.t["Xp+X2U"]);
    obj2.value = StickerAnimationSettings.ALWAYS_ANIMATE;
    const items = [obj2, , ];
    const obj3 = { label: null, value: null };
    const intl2 = util.intl;
    obj3.label = intl2.string(util.t.IlLT7e);
    obj3.value = StickerAnimationSettings.ANIMATE_ON_INTERACTION;
    items[1] = obj3;
    const obj4 = { label: null, value: null };
    const intl3 = util.intl;
    obj4.label = intl3.string(util.t.IGu8x3);
    obj4.value = StickerAnimationSettings.NEVER_ANIMATE;
    items[2] = obj4;
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function useAnimateStickerSettingOptions() {
  return noop.useMemo(() => {
    const obj = { label: null, value: null };
    const intl = util.intl;
    obj.label = intl.string(util.t["Xp+X2U"]);
    obj.value = constants.ALWAYS_ANIMATE;
    const items = [obj, , ];
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
});
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.R5nQkS);
  },
  parent: fn(7974).MobileUserSettings.ACCESSIBILITY,
  useValue: fn(2041).AnimateStickers.useSetting,
  onValueChange: function onAnimateStickerSettingValueChange(arg0) {
    const AnimateStickers = UserSettings.AnimateStickers;
    AnimateStickers.updateSetting(Number(arg0));
  },
  useOptions: ReactCompilerGating.isReactCompilerEnabled() ? (function useAnimateStickerSettingOptions() {
    const cResult = c.c(1);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { label: null, value: null };
      const intl = util.intl;
      obj2.label = intl.string(util.t["Xp+X2U"]);
      obj2.value = StickerAnimationSettings.ALWAYS_ANIMATE;
      const items = [obj2, , ];
      const obj3 = { label: null, value: null };
      const intl2 = util.intl;
      obj3.label = intl2.string(util.t.IlLT7e);
      obj3.value = StickerAnimationSettings.ANIMATE_ON_INTERACTION;
      items[1] = obj3;
      const obj4 = { label: null, value: null };
      const intl3 = util.intl;
      obj4.label = intl3.string(util.t.IGu8x3);
      obj4.value = StickerAnimationSettings.NEVER_ANIMATE;
      items[2] = obj4;
      cResult[0] = items;
      let first = items;
    } else {
      first = cResult[0];
    }
    return first;
  }) : (function useAnimateStickerSettingOptions() {
    return noop.useMemo(() => {
      const obj = { label: null, value: null };
      const intl = util.intl;
      obj.label = intl.string(util.t["Xp+X2U"]);
      obj.value = constants.ALWAYS_ANIMATE;
      const items = [obj, , ];
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
  })
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AnimateStickersSetting.tsx");

export default radio;