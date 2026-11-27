// === Module 16882: SettingsAppearanceScreen ===

// Module 16882 (SettingsAppearanceScreen)
import util from "util" /* 1112 */;
import PlatformUtils from "PlatformUtils" /* 1379 */;
import HeaderShared from "HeaderShared" /* 9005 */;
import noop from "module_19" /* 19 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5067 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1192 */;
import ThemeStore from "ThemeStore" /* 1191 */;

const require = globalThis.__r;

require = fn;
const FontScaleStore = fn(16883);
({ DEFAULT_FONT_SCALE_STORE_STATE: metroImportDefault, useFontScaleStore: closure_8 } = FontScaleStore);
const MobileUserSettings = fn(9556).MobileUserSettings;
const HelpdeskArticles = fn(1071).HelpdeskArticles;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceScreen.tsx");

export default noop.memo(function SettingsAppearanceScreen() {
  nativeStackNavigation(5604)(() => {
    if (SelectivelySyncedUserSettingsStore.shouldSync("appearance")) {
      const userCustomThemes = closure_0(16884).fetchUserCustomThemes();
      const obj = closure_0(16884);
    }
  });
  items = [ThemeStore, ClientThemesBackgroundStore];
  const stateFromStoresObject = require("useStateFromStores").useStateFromStoresObject(items, () => {
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
  const tmp3 = closure_8();
  _require = tmp3;
  let obj = require("useStateFromStores");
  nativeStackNavigation = require("useNavigation").useNativeStackNavigation();
  let items1 = [nativeStackNavigation, , , , ];
  ({ fontScale: arr2[1], isClassicChatFontScaleEnabled: arr2[2], persistedFontScale: arr2[3], persistedIsClassicChatFontScaleEnabled: arr2[4] } = tmp3);
  const effect = noop.useEffect(() => {
    if (obj.isAndroid()) {
      if (closure_0.persistedFontScale === closure_0.fontScale) {
        if (closure_0.persistedIsClassicChatFontScaleEnabled === closure_0.isClassicChatFontScaleEnabled) {
          nativeStackNavigation.setOptions({ headerRight: "top" });
        }
      }
      const obj2 = { headerRight: null };
      const intl = util.intl;
      obj2.headerRight = HeaderShared.getRenderHeaderTextButton(intl.string(util.t["R3BPH+"]), () => nativeStackNavigation(6125).setCustomFontScale(closure_1_0.fontScale, closure_1_0.isClassicChatFontScaleEnabled));
      nativeStackNavigation.setOptions(obj2);
      const tmpResult = HeaderShared;
    }
    obj = PlatformUtils;
  }, items1);
  const effect1 = noop.useEffect(() => () => {
    closure_1_0(dependencyMap[13]).batchUpdates(() => state.setState(closure_1_7));
  }, []);
  const node = noop.useMemo(() => {
    const obj2 = { sections: null };
    const obj3 = { label: null, settings: null };
    const intl = closure_0(1112).intl;
    obj3.label = intl.string(closure_0(1112).t.Ksh3ik);
    items = [, , , , ];
    ({ SAME_AS_DEVICE_THEME: arr[0], APPEARANCE_THEME_PICKER: arr[1], LIGHT_MODE_THEME_PICKER: arr[2], DARK_MODE_THEME_PICKER: arr[3], SYNC_THEME: arr[4] } = constants);
    obj3.settings = items;
    const items1 = [obj3, , , , , , , ];
    const obj4 = { label: null, settings: null };
    const intl2 = closure_0(1112).intl;
    obj4.label = intl2.string(closure_0(1112).t.i19n5L);
    const items2 = [, ];
    ({ ANDROID_FONT_SCALE: arr3[0], ANDROID_CLASSIC_CHAT_FONT_SCALE: arr3[1] } = constants);
    obj4.settings = items2;
    items1[1] = obj4;
    const obj5 = { settings: null };
    const items3 = [constants.DMS_MESSAGE_PREVIEWS];
    obj5.settings = items3;
    items1[2] = obj5;
    const obj6 = { settings: null };
    const items4 = [constants.GAME_MENTIONS_AUTOCOMPLETE];
    obj6.settings = items4;
    items1[3] = obj6;
    const obj7 = { settings: null, subLabel: null };
    const items5 = [constants.FAVORITES_GUILD_TOGGLE];
    obj7.settings = items5;
    const intl3 = closure_0(1112).intl;
    const obj8 = { helpCenterLink: null };
    const obj = closure_0(11970);
    obj8.helpCenterLink = nativeStackNavigation(2188).getArticleURL(constants2.FAVORITES_GUILD);
    obj7.subLabel = intl3.format(nativeStackNavigation(3857).GR2KOG, obj8);
    items1[4] = obj7;
    const obj10 = { label: null, settings: null };
    const intl4 = closure_0(1112).intl;
    obj10.label = intl4.string(closure_0(1112).t.lEde7i);
    const items6 = [constants.DMS_HAPPENING_NOW_CARDS];
    obj10.settings = items6;
    items1[5] = obj10;
    const obj11 = { label: null, settings: null };
    const intl5 = closure_0(1112).intl;
    obj11.label = intl5.string(closure_0(1112).t["5h0QOP"]);
    const items7 = [constants.EXACT_SEARCH_RESULT_COUNTS];
    obj11.settings = items7;
    items1[6] = obj11;
    const obj12 = { settings: null };
    const items8 = [constants.TIMESTAMP_HOUR_CYCLE];
    obj12.settings = items8;
    items1[7] = obj12;
    obj2.sections = items1;
    return obj.createList(obj2);
  }, []);
  let obj2 = require("useNavigation");
  return jsx(nativeStackNavigation(16197), { node }, "" + theme + "-" + gradientPresetId);
});