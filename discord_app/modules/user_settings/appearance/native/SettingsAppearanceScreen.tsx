// discord_app/modules/user_settings/appearance/native/SettingsAppearanceScreen.tsx
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ClientThemesBackgroundStore from "../../../client_themes/ClientThemesBackgroundStore.tsx";
import SelectivelySyncedUserSettingsStore from "../../SelectivelySyncedUserSettingsStore.tsx";
import ThemeStore from "../../ThemeStore.tsx";

require = fn;
const FontScaleStore = fn(15263);
({ DEFAULT_FONT_SCALE_STORE_STATE: closure_7, useFontScaleStore: closure_8 } = FontScaleStore);
const MobileUserSettings = fn(7975).MobileUserSettings;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceScreen.tsx");

export default noop.memo(() => {
  nativeStackNavigation(4992)(() => {
    if (SelectivelySyncedUserSettingsStore.shouldSync("appearance")) {
      const userCustomThemes = closure_0(15264).fetchUserCustomThemes();
      const obj = closure_0(15264);
    }
  });
  let items = [ThemeStore, ClientThemesBackgroundStore];
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
  let items1 = [nativeStackNavigation, , , ,];
  ({
    fontScale: arr2[1],
    isClassicChatFontScaleEnabled: arr2[2],
    persistedFontScale: arr2[3],
    persistedIsClassicChatFontScaleEnabled: arr2[4],
  } = tmp3);
  const effect = noop.useEffect(() => {
    let obj = PlatformUtils;
    if (obj.isAndroid()) {
      if (closure_0.persistedFontScale === closure_0.fontScale) {
        if (tmp3.persistedIsClassicChatFontScaleEnabled === tmp3.isClassicChatFontScaleEnabled) {
          nativeStackNavigation.setOptions({ headerRight: "Array" });
        }
      }
      obj = { headerRight: null };
      const intl = tmp(1114).intl;
      obj.headerRight = tmp(7863).getRenderHeaderTextButton(intl.string(tmp(1114).t["R3BPH+"]), () =>
        nativeStackNavigation(10120).setCustomFontScale(
          closure_1_0.fontScale,
          closure_1_0.isClassicChatFontScaleEnabled,
        ),
      );
      nativeStackNavigation.setOptions(obj);
      const tmpResult = tmp(7863);
    }
  }, items1);
  const effect1 = noop.useEffect(
    () => () => {
      closure_1_0(dependencyMap[13]).batchUpdates(() => state.setState(closure_1_7));
    },
    [],
  );
  const node = noop.useMemo(() => {
    closure_0(11468);
    let obj = { sections: null };
    obj = { label: null, settings: null };
    const intl = closure_0(1114).intl;
    obj.label = intl.string(closure_0(1114).t.Ksh3ik);
    const items = [, , , ,];
    ({
      SAME_AS_DEVICE_THEME: arr[0],
      APPEARANCE_THEME_PICKER: arr[1],
      LIGHT_MODE_THEME_PICKER: arr[2],
      DARK_MODE_THEME_PICKER: arr[3],
      SYNC_THEME: arr[4],
    } = constants);
    obj.settings = items;
    const items1 = [obj, , , , , , , ,];
    const obj1 = { settings: null };
    const items2 = [constants.DEFAULT_GUILD_THEME_PREFERENCE];
    obj1.settings = items2;
    items1[1] = obj1;
    const obj2 = { label: null, settings: null };
    const intl2 = closure_0(1114).intl;
    obj2.label = intl2.string(closure_0(1114).t.i19n5L);
    const items3 = [,];
    ({ ANDROID_FONT_SCALE: arr4[0], ANDROID_CLASSIC_CHAT_FONT_SCALE: arr4[1] } = constants);
    obj2.settings = items3;
    items1[2] = obj2;
    const obj3 = { settings: null };
    const items4 = [constants.DMS_MESSAGE_PREVIEWS];
    obj3.settings = items4;
    items1[3] = obj3;
    const obj4 = { settings: null };
    const items5 = [constants.GAME_MENTIONS_AUTOCOMPLETE];
    obj4.settings = items5;
    items1[4] = obj4;
    const obj5 = { settings: null, subLabel: null };
    const items6 = [constants.FAVORITES_GUILD_TOGGLE];
    obj5.settings = items6;
    const intl3 = closure_0(1114).intl;
    const obj6 = { helpCenterLink: null };
    let obj9 = nativeStackNavigation(2024);
    obj6.helpCenterLink = obj9.getArticleURL(constants2.FAVORITES_GUILD);
    obj5.subLabel = intl3.format(nativeStackNavigation(3225).GR2KOG, obj6);
    items1[5] = obj5;
    const obj7 = { label: null, settings: null };
    const intl4 = closure_0(1114).intl;
    obj7.label = intl4.string(closure_0(1114).t.lEde7i);
    const items7 = [constants.DMS_HAPPENING_NOW_CARDS];
    obj7.settings = items7;
    items1[6] = obj7;
    const obj8 = { label: null, settings: null };
    const intl5 = closure_0(1114).intl;
    obj8.label = intl5.string(closure_0(1114).t["5h0QOP"]);
    const items8 = [constants.EXACT_SEARCH_RESULT_COUNTS];
    obj8.settings = items8;
    items1[7] = obj8;
    obj9 = { settings: null };
    const items9 = [constants.TIMESTAMP_HOUR_CYCLE];
    obj9.settings = items9;
    items1[8] = obj9;
    obj.sections = items1;
    return obj.createList(obj);
  }, []);
  let obj2 = require("useNavigation");
  return jsx(nativeStackNavigation(14689), { node }, "" + theme + "-" + gradientPresetId);
});
