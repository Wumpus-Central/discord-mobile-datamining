// === Module 15082: SettingsAppearanceScreen ===

// Module 15082 (SettingsAppearanceScreen)
import useStateFromStores from "useStateFromStores" /* 573 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import _modDef3367 from "module_3367" /* 3367 */;
import useMountEffectDefault from "useMountEffect" /* 5590 */;
import HeaderShared from "HeaderShared" /* 7498 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import SettingLayoutDefault from "SettingLayout" /* 14499 */;
import noop from "module_19" /* 19 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4697 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1194 */;
import ThemeStore from "ThemeStore" /* 1193 */;

const require = globalThis.__r;

require = fn;
function getAppearanceSettings() {
  const obj = { label: null, settings: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.Ksh3ik);
  const items = [, , , , ];
  ({ SAME_AS_DEVICE_THEME: arr[0], APPEARANCE_THEME_PICKER: arr[1], LIGHT_MODE_THEME_PICKER: arr[2], DARK_MODE_THEME_PICKER: arr[3], SYNC_THEME: arr[4] } = MobileUserSettings);
  obj.settings = items;
  const items1 = [obj, , , , , , , , ];
  const obj2 = { settings: null };
  const items2 = [MobileUserSettings.DEFAULT_GUILD_THEME_PREFERENCE];
  obj2.settings = items2;
  items1[1] = obj2;
  const obj3 = { label: null, settings: null };
  const intl2 = util.intl;
  obj3.label = intl2.string(util.t.i19n5L);
  const items3 = [, ];
  ({ ANDROID_FONT_SCALE: arr4[0], ANDROID_CLASSIC_CHAT_FONT_SCALE: arr4[1] } = MobileUserSettings);
  obj3.settings = items3;
  items1[2] = obj3;
  const obj4 = { settings: null };
  const items4 = [MobileUserSettings.DMS_MESSAGE_PREVIEWS];
  obj4.settings = items4;
  items1[3] = obj4;
  const obj5 = { settings: null };
  const items5 = [MobileUserSettings.GAME_MENTIONS_AUTOCOMPLETE];
  obj5.settings = items5;
  items1[4] = obj5;
  const obj6 = { settings: null, subLabel: null };
  const items6 = [MobileUserSettings.FAVORITES_GUILD_TOGGLE];
  obj6.settings = items6;
  const intl3 = util.intl;
  const obj7 = { helpCenterLink: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.FAVORITES_GUILD) };
  obj6.subLabel = intl3.format(_modDef3367.GR2KOG, obj7);
  items1[5] = obj6;
  const obj9 = { label: null, settings: null };
  const intl4 = util.intl;
  obj9.label = intl4.string(util.t.lEde7i);
  const items7 = [MobileUserSettings.DMS_HAPPENING_NOW_CARDS];
  obj9.settings = items7;
  items1[6] = obj9;
  const obj10 = { label: null, settings: null };
  const intl5 = util.intl;
  obj10.label = intl5.string(util.t["5h0QOP"]);
  const items8 = [MobileUserSettings.EXACT_SEARCH_RESULT_COUNTS];
  obj10.settings = items8;
  items1[7] = obj10;
  const obj11 = { settings: null };
  const items9 = [MobileUserSettings.TIMESTAMP_HOUR_CYCLE];
  obj11.settings = items9;
  items1[8] = obj11;
  return items1;
}
const FontScaleStore = fn(15083);
({ DEFAULT_FONT_SCALE_STORE_STATE: closure_7, useFontScaleStore: closure_8 } = FontScaleStore);
const MobileUserSettings = fn(7634).MobileUserSettings;
const HelpdeskArticles = fn(1085).HelpdeskArticles;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(9);
  const tmp2 = closure_8();
  _require = tmp2;
  let obj = require("c");
  const nativeStackNavigation = require("useNavigation").useNativeStackNavigation();
  if (cResult[0] === nativeStackNavigation) {
    if (cResult[1] === tmp2.fontScale) {
      if (cResult[2] === tmp2.isClassicChatFontScaleEnabled) {
        if (cResult[3] === tmp2.persistedFontScale) {
          if (cResult[4] === tmp2.persistedIsClassicChatFontScaleEnabled) {
            let tmp4 = cResult[5];
            let tmp5 = cResult[6];
          }
          const effect = noop.useEffect(tmp4, tmp5);
          const _Symbol = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const fn2 = function l() {
              return () => {
                closure_1_0(closure_1_2[15]).batchUpdates(() => state.setState(closure_1_7));
              };
            };
            const items = [];
            cResult[7] = fn2;
            cResult[8] = items;
            let tmp9 = items;
            let tmp8 = fn2;
          } else {
            tmp8 = cResult[7];
            tmp9 = cResult[8];
          }
          const effect1 = noop.useEffect(tmp8, tmp9);
        }
      }
    }
  }
  const fn = function s() {
    if (obj.isAndroid()) {
      if (closure_0.persistedFontScale === closure_0.fontScale) {
        if (closure_0.persistedIsClassicChatFontScaleEnabled === closure_0.isClassicChatFontScaleEnabled) {
          nativeStackNavigation.setOptions({ headerRight: "r" });
        }
      }
      const obj2 = { headerRight: null };
      const intl = util.intl;
      obj2.headerRight = HeaderShared.getRenderHeaderTextButton(intl.string(util.t["R3BPH+"]), () => nativeStackNavigation(dependencyMap[14]).setCustomFontScale(closure_1_0.fontScale, closure_1_0.isClassicChatFontScaleEnabled));
      nativeStackNavigation.setOptions(obj2);
      const tmpResult = HeaderShared;
    }
    obj = PlatformUtils;
  };
  const items1 = [nativeStackNavigation, , , , ];
  ({ fontScale: arr[1], isClassicChatFontScaleEnabled: arr[2], persistedFontScale: arr[3], persistedIsClassicChatFontScaleEnabled: arr[4] } = tmp2);
  cResult[0] = nativeStackNavigation;
  cResult[1] = tmp2.fontScale;
  cResult[2] = tmp2.isClassicChatFontScaleEnabled;
  cResult[3] = tmp2.persistedFontScale;
  cResult[4] = tmp2.persistedIsClassicChatFontScaleEnabled;
  cResult[5] = fn;
  cResult[6] = items1;
  tmp5 = items1;
  tmp4 = fn;
  let obj2 = require("useNavigation");
}) : (() => {
  const tmp = closure_8();
  _require = tmp;
  const nativeStackNavigation = require("useNavigation").useNativeStackNavigation();
  const items = [nativeStackNavigation, , , , ];
  ({ fontScale: arr[1], isClassicChatFontScaleEnabled: arr[2], persistedFontScale: arr[3], persistedIsClassicChatFontScaleEnabled: arr[4] } = tmp);
  const effect = noop.useEffect(() => {
    if (obj.isAndroid()) {
      if (closure_0.persistedFontScale === closure_0.fontScale) {
        if (closure_0.persistedIsClassicChatFontScaleEnabled === closure_0.isClassicChatFontScaleEnabled) {
          nativeStackNavigation.setOptions({ headerRight: "r" });
        }
      }
      const obj2 = { headerRight: null };
      const intl = util.intl;
      obj2.headerRight = HeaderShared.getRenderHeaderTextButton(intl.string(util.t["R3BPH+"]), () => nativeStackNavigation(dependencyMap[14]).setCustomFontScale(closure_1_0.fontScale, closure_1_0.isClassicChatFontScaleEnabled));
      nativeStackNavigation.setOptions(obj2);
      const tmpResult = HeaderShared;
    }
    obj = PlatformUtils;
  }, items);
  const effect1 = noop.useEffect(() => () => {
    closure_1_0(closure_1_2[15]).batchUpdates(() => state.setState(closure_1_7));
  }, []);
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceScreen.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      if (SelectivelySyncedUserSettingsStore.shouldSync("appearance")) {
        const userCustomThemes = require("SavedCustomThemeActionCreators").fetchUserCustomThemes();
        const obj = require("SavedCustomThemeActionCreators");
      }
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  useMountEffectDefault(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ThemeStore, ClientThemesBackgroundStore];
    const fn2 = function o() {
      const obj = { theme: theme.theme, gradientPresetId: null };
      gradientPreset = gradientPreset.gradientPreset;
      let str;
      if (gradientPreset != null) {
        str = gradientPreset.id;
      }
      if (str == null) {
        str = "";
      }
      obj.gradientPresetId = str;
      return obj;
    };
    cResult[1] = items;
    cResult[2] = fn2;
    let tmp8 = fn2;
    let tmp7 = items;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
  }
  const stateFromStoresObject = useStateFromStores.useStateFromStoresObject(tmp7, tmp8);
  ({ theme, gradientPresetId } = stateFromStoresObject);
  closure_12();
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { sections: getAppearanceSettings() };
    const list = SettingBuilders.createList(obj2);
    cResult[3] = list;
    let tmp13 = list;
    const tmpResult2 = SettingBuilders;
  } else {
    tmp13 = cResult[3];
  }
  const combined = "" + theme + "-" + gradientPresetId;
  if (cResult[4] !== combined) {
    const obj3 = { node: tmp13 };
    const tmp19 = jsx(SettingLayoutDefault, { node: tmp13 }, combined);
    cResult[4] = combined;
    cResult[5] = tmp19;
    let tmp17 = tmp19;
  } else {
    tmp17 = cResult[5];
  }
  return tmp17;
}) : (() => {
  useMountEffectDefault(() => {
    if (SelectivelySyncedUserSettingsStore.shouldSync("appearance")) {
      const userCustomThemes = require("SavedCustomThemeActionCreators").fetchUserCustomThemes();
      const obj = require("SavedCustomThemeActionCreators");
    }
  });
  const items = [ThemeStore, ClientThemesBackgroundStore];
  const stateFromStoresObject = useStateFromStores.useStateFromStoresObject(items, () => {
    const obj = { theme: theme.theme, gradientPresetId: null };
    gradientPreset = gradientPreset.gradientPreset;
    let str;
    if (gradientPreset != null) {
      str = gradientPreset.id;
    }
    if (str == null) {
      str = "";
    }
    obj.gradientPresetId = str;
    return obj;
  });
  ({ theme, gradientPresetId } = stateFromStoresObject);
  closure_12();
  const node = noop.useMemo(() => {
    const obj = require("SettingBuilders");
    return obj.createList({ sections: getAppearanceSettings() });
  }, []);
  return jsx(SettingLayoutDefault, { node }, "" + theme + "-" + gradientPresetId);
}));