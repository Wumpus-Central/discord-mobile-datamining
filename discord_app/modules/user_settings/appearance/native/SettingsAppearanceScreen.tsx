import importAllResult from "noop";
import isSyncedModeThemesEnabled from "isSyncedModeThemesEnabled";
import initialize from "initialize";
import handleThemeChange from "handleThemeChange";
import DEFAULT_FONT_SCALE_STORE_STATE from "DEFAULT_FONT_SCALE_STORE_STATE";
import { MobileSetting } from "MobileSetting";
import { jsx } from "jsxProd";

let error;
let metroImportAll;
const require = arg1;
let c3 = importAllResult;
({ DEFAULT_FONT_SCALE_STORE_STATE: error, useFontScaleStore: metroImportAll } = DEFAULT_FONT_SCALE_STORE_STATE);
const memoResult = importAllResult.memo(() => {
  let gradientPresetId;
  let theme;
  nativeStackNavigation(4620)(() => {
    if (initialize.shouldSync("appearance")) {
      const userCustomThemes = _undefined(14300).fetchUserCustomThemes();
      const obj = _undefined(14300);
    }
  });
  let items = [handleThemeChange, isSyncedModeThemesEnabled];
  const stateFromStoresObject = _require(647).useStateFromStoresObject(items, () => {
    const obj = { theme: theme.theme, gradientPresetId: null };
    gradientPreset = gradientPreset.gradientPreset;
    let str;
    if (gradientPreset != null) {
      str = gradientPreset.id;
    }
    if (str == null) {
      str = "";
    }
    obj[1] = str;
    return obj;
  });
  _require = undefined;
  nativeStackNavigation = undefined;
  ({ theme, gradientPresetId } = stateFromStoresObject);
  const tmp3 = callback();
  _require = tmp3;
  let obj = _require(647);
  nativeStackNavigation = _require(1480).useNativeStackNavigation();
  let items1 = [nativeStackNavigation, , , , ];
  ({ fontScale: arr2[1], isClassicChatFontScaleEnabled: arr2[2], persistedFontScale: arr2[3], persistedIsClassicChatFontScaleEnabled: arr2[4] } = tmp3);
  const effect = importAllResult.useEffect(() => {
    let obj = _undefined(outer1_2[8]);
    if (obj.isAndroid()) {
      if (_undefined.persistedFontScale === _undefined.fontScale) {
        if (tmp3.persistedIsClassicChatFontScaleEnabled === tmp3.isClassicChatFontScaleEnabled) {
          nativeStackNavigation.setOptions({ headerRight: "r" });
        }
      }
      obj = { headerRight: null };
      const intl = tmp(tmp2[10]).intl;
      obj[0] = tmp(tmp2[9]).getRenderHeaderTextButton(intl.string(tmp(tmp2[10]).t["R3BPH+"]), () => outer1_1(outer1_2[11]).setCustomFontScale(closure_0.fontScale, closure_0.isClassicChatFontScaleEnabled));
      nativeStackNavigation.setOptions(obj);
      const tmpResult = tmp(tmp2[9]);
    }
  }, items1);
  const effect1 = importAllResult.useEffect(() => () => {
    callback(table[12]).batchUpdates(() => state.setState(closure_7));
  }, []);
  const node = importAllResult.useMemo(() => {
    let obj = _undefined(10133);
    obj = { sections: null };
    const items = [constants.MOBILE_VISUAL_REFRESH];
    const items1 = [{ settings: items }, , , , , , , , ];
    obj = { label: null, settings: null };
    const intl = _undefined(1236).intl;
    obj[0] = intl.string(_undefined(1236).t.Ksh3ik);
    const items2 = [, , , , ];
    ({ SAME_AS_DEVICE_THEME: arr3[0], APPEARANCE_THEME_PICKER: arr3[1], LIGHT_MODE_THEME_PICKER: arr3[2], DARK_MODE_THEME_PICKER: arr3[3], SYNC_THEME: arr3[4] } = constants);
    obj[1] = items2;
    items1[1] = obj;
    const items3 = [constants.DEFAULT_GUILD_THEME_PREFERENCE];
    items1[2] = { settings: items3 };
    const obj1 = { label: null, settings: null };
    const intl2 = _undefined(1236).intl;
    obj1[0] = intl2.string(_undefined(1236).t.i19n5L);
    const items4 = [, ];
    ({ ANDROID_FONT_SCALE: arr5[0], ANDROID_CLASSIC_CHAT_FONT_SCALE: arr5[1] } = constants);
    obj1[1] = items4;
    items1[3] = obj1;
    const items5 = [constants.DMS_MESSAGE_PREVIEWS];
    items1[4] = { settings: items5 };
    const items6 = [constants.GAME_MENTIONS_AUTOCOMPLETE];
    items1[5] = { settings: items6 };
    const obj2 = { label: null, settings: null };
    const intl3 = _undefined(1236).intl;
    obj2[0] = intl3.string(_undefined(1236).t.lEde7i);
    const items7 = [constants.DMS_HAPPENING_NOW_CARDS];
    obj2[1] = items7;
    items1[6] = obj2;
    const obj3 = { label: null, settings: null };
    const intl4 = _undefined(1236).intl;
    obj3[0] = intl4.string(_undefined(1236).t["5h0QOP"]);
    const items8 = [constants.EXACT_SEARCH_RESULT_COUNTS];
    obj3[1] = items8;
    items1[7] = obj3;
    const items9 = [constants.TIMESTAMP_HOUR_CYCLE];
    items1[8] = { settings: items9 };
    obj[0] = items1;
    return obj.createList(obj);
  }, []);
  let obj2 = _require(1480);
  return jsx(nativeStackNavigation(13697), { node }, "" + theme + "-" + gradientPresetId);
});
const result = require("initialize").fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceScreen.tsx");

export default memoResult;