// === Module 15082: SettingsAppearanceScreen ===

// Module 15082 (SettingsAppearanceScreen)
import Fragment from "Fragment" /* 21 */;
import useStateFromStores from "useStateFromStores" /* 573 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl6 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import _modDef3367 from "module_3367" /* 3367 */;
import useMountEffectDefault from "useMountEffect" /* 5590 */;
import HeaderShared from "HeaderShared" /* 7498 */;
import SettingsConstants from "SettingsConstants" /* 7634 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import SettingLayoutDefault from "SettingLayout" /* 14499 */;
import react from "react" /* 19 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4697 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1194 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import FontScaleStore from "FontScaleStore" /* 15083 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, gradientPreset;

let metroImportAll;
let metroImportDefault;
function getAppearanceSettings() {
  let GR2KOG;
  let format;
  let intl;
  let intl2;
  let intl4;
  let intl5;
  let items;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj7;
  let obj8;
  const obj = { label: intl.string(intl6.t.Ksh3ik), settings: items };
  intl = intl6.intl;
  items = [, , , , ];
  ({ SAME_AS_DEVICE_THEME: arr[0], APPEARANCE_THEME_PICKER: arr[1], LIGHT_MODE_THEME_PICKER: arr[2], DARK_MODE_THEME_PICKER: arr[3], SYNC_THEME: arr[4] } = MobileUserSettings);
  const items1 = [obj, , , , , , , , ];
  const obj2 = { settings: items2 };
  items2 = [MobileUserSettings.DEFAULT_GUILD_THEME_PREFERENCE];
  items1[1] = obj2;
  const obj3 = { label: intl2.string(intl6.t.i19n5L), settings: items3 };
  intl2 = intl6.intl;
  items3 = [, ];
  ({ ANDROID_FONT_SCALE: arr4[0], ANDROID_CLASSIC_CHAT_FONT_SCALE: arr4[1] } = MobileUserSettings);
  items1[2] = obj3;
  const obj4 = { settings: items4 };
  items4 = [MobileUserSettings.DMS_MESSAGE_PREVIEWS];
  items1[3] = obj4;
  const obj5 = { settings: items5 };
  items5 = [MobileUserSettings.GAME_MENTIONS_AUTOCOMPLETE];
  items1[4] = obj5;
  const obj6 = { settings: items6, subLabel: format(GR2KOG, obj7) };
  items6 = [MobileUserSettings.FAVORITES_GUILD_TOGGLE];
  const intl3 = intl6.intl;
  format = intl3.format;
  obj7 = { helpCenterLink: obj8.getArticleURL(HelpdeskArticles.FAVORITES_GUILD) };
  GR2KOG = _modDef3367.GR2KOG;
  items1[5] = obj6;
  obj8 = HelpdeskUtilsDefault;
  const obj9 = { label: intl4.string(intl6.t.lEde7i), settings: items7 };
  intl4 = intl6.intl;
  items7 = [MobileUserSettings.DMS_HAPPENING_NOW_CARDS];
  items1[6] = obj9;
  const obj10 = { label: intl5.string(intl6.t["5h0QOP"]), settings: items8 };
  intl5 = intl6.intl;
  items8 = [MobileUserSettings.EXACT_SEARCH_RESULT_COUNTS];
  items1[7] = obj10;
  const obj11 = { settings: items9 };
  items9 = [MobileUserSettings.TIMESTAMP_HOUR_CYCLE];
  items1[8] = obj11;
  return items1;
}
({ DEFAULT_FONT_SCALE_STORE_STATE: metroImportDefault, useFontScaleStore: metroImportAll } = FontScaleStore);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const HelpdeskArticles = Constants.HelpdeskArticles;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_0;
  let obj = require("react");
  const cResult = obj.c(9);
  const tmp2 = closure_8();
  _require = tmp2;
  let obj2 = require("useNavigation");
  const nativeStackNavigation = obj2.useNativeStackNavigation();
  if (cResult[0] === nativeStackNavigation) {
    if (cResult[1] === tmp2.fontScale) {
      if (cResult[2] === tmp2.isClassicChatFontScaleEnabled) {
        if (cResult[3] === tmp2.persistedFontScale) {
          let tmp4;
          let tmp5;
          let tmp9;
          let tmp8;
          if (cResult[4] === tmp2.persistedIsClassicChatFontScaleEnabled) {
            tmp4 = cResult[5];
            tmp5 = cResult[6];
          }
          const effect = react.useEffect(tmp4, tmp5);
          const _Symbol = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const fn2 = function l() {
              return () => {
                let state;
                const obj = closure_1_0(closure_1_2[15]);
                obj.batchUpdates(() => state.setState(closure_1_7));
              };
            };
            const items = [];
            cResult[7] = fn2;
            cResult[8] = items;
            tmp9 = items;
            tmp8 = fn2;
          } else {
            tmp8 = cResult[7];
            tmp9 = cResult[8];
          }
          const effect1 = react.useEffect(tmp8, tmp9);
        }
      }
    }
  }
  const fn = function s() {
    let getRenderHeaderTextButton;
    let intl;
    let obj = PlatformUtils;
    if (obj.isAndroid()) {
      if (closure_0.persistedFontScale === closure_0.fontScale) {
        if (closure_0.persistedIsClassicChatFontScaleEnabled === closure_0.isClassicChatFontScaleEnabled) {
          nativeStackNavigation.setOptions({ headerRight: "r" });
        }
      }
      const setOptions = nativeStackNavigation.setOptions;
      const obj2 = {
        headerRight: getRenderHeaderTextButton(intl.string(intl6.t["R3BPH+"]), () => {
            const obj = nativeStackNavigation(dependencyMap[14]);
            return obj.setCustomFontScale(closure_1_0.fontScale, closure_1_0.isClassicChatFontScaleEnabled);
          })
      };
      getRenderHeaderTextButton = HeaderShared.getRenderHeaderTextButton;
      HeaderShared;
      intl = intl6.intl;
      setOptions(obj2);
    }
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
}) : (() => {
  let closure_0;
  const tmp = closure_8();
  _require = tmp;
  let obj = require("useNavigation");
  const nativeStackNavigation = obj.useNativeStackNavigation();
  const items = [nativeStackNavigation, , , , ];
  ({ fontScale: arr[1], isClassicChatFontScaleEnabled: arr[2], persistedFontScale: arr[3], persistedIsClassicChatFontScaleEnabled: arr[4] } = tmp);
  const effect = react.useEffect(() => {
    let getRenderHeaderTextButton;
    let intl;
    let obj = PlatformUtils;
    if (obj.isAndroid()) {
      if (closure_0.persistedFontScale === closure_0.fontScale) {
        if (closure_0.persistedIsClassicChatFontScaleEnabled === closure_0.isClassicChatFontScaleEnabled) {
          nativeStackNavigation.setOptions({ headerRight: "r" });
        }
      }
      const setOptions = nativeStackNavigation.setOptions;
      const obj2 = {
        headerRight: getRenderHeaderTextButton(intl.string(intl6.t["R3BPH+"]), () => {
            const obj = nativeStackNavigation(dependencyMap[14]);
            return obj.setCustomFontScale(closure_1_0.fontScale, closure_1_0.isClassicChatFontScaleEnabled);
          })
      };
      getRenderHeaderTextButton = HeaderShared.getRenderHeaderTextButton;
      HeaderShared;
      intl = intl6.intl;
      setOptions(obj2);
    }
  }, items);
  const effect1 = react.useEffect(() => () => {
    let state;
    const obj = closure_1_0(closure_1_2[15]);
    obj.batchUpdates(() => state.setState(closure_1_7));
  }, []);
});
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let gradientPresetId;
  let theme;
  let tmp13;
  let tmp18;
  let tmp7;
  let tmp8;
  let obj = react2;
  const cResult = obj.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      if (SelectivelySyncedUserSettingsStore.shouldSync("appearance")) {
        const obj = require("SavedCustomThemeActionCreators");
        const userCustomThemes = obj.fetchUserCustomThemes();
      }
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  useMountEffectDefault(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ThemeStore, ClientThemesBackgroundStore];
    const fn2 = function o() {
      let str;
      gradientPreset = gradientPreset.gradientPreset;
      const obj = { theme: theme.theme, gradientPresetId: str };
      str = undefined;
      if (gradientPreset != null) {
        str = gradientPreset.id;
      }
      if (str == null) {
        str = "";
      }
      return obj;
    };
    cResult[1] = items;
    cResult[2] = fn2;
    tmp8 = fn2;
    tmp7 = items;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
  }
  const tmpResult = useStateFromStores;
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp7, tmp8);
  ({ theme, gradientPresetId } = stateFromStoresObject);
  closure_12();
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { sections: getAppearanceSettings() };
    const createList = SettingBuilders.createList;
    SettingBuilders;
    const list = createList(obj2);
    cResult[3] = list;
    tmp13 = list;
  } else {
    tmp13 = cResult[3];
  }
  const combined = "" + theme + "-" + gradientPresetId;
  if (cResult[4] !== combined) {
    const tmp20 = jsx(SettingLayoutDefault, { node: tmp13 }, combined);
    cResult[4] = combined;
    cResult[5] = tmp20;
    tmp18 = tmp20;
  } else {
    tmp18 = cResult[5];
  }
  return tmp18;
}) : (() => {
  let gradientPresetId;
  let theme;
  useMountEffectDefault(() => {
    if (SelectivelySyncedUserSettingsStore.shouldSync("appearance")) {
      const obj = require("SavedCustomThemeActionCreators");
      const userCustomThemes = obj.fetchUserCustomThemes();
    }
  });
  let obj = useStateFromStores;
  const items = [ThemeStore, ClientThemesBackgroundStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let str;
    gradientPreset = gradientPreset.gradientPreset;
    const obj = { theme: theme.theme, gradientPresetId: str };
    str = undefined;
    if (gradientPreset != null) {
      str = gradientPreset.id;
    }
    if (str == null) {
      str = "";
    }
    return obj;
  });
  ({ theme, gradientPresetId } = stateFromStoresObject);
  closure_12();
  const node = react.useMemo(() => {
    const obj = require("SettingBuilders");
    const obj2 = { sections: getAppearanceSettings() };
    return obj.createList(obj2);
  }, []);
  SettingLayoutDefault;
  return <tmp5 key={"" + theme + "-" + gradientPresetId} node={node} />;
}));
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceScreen.tsx");

export default memoResult;