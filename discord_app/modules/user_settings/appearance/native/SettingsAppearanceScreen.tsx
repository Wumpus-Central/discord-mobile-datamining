// discord_app/modules/user_settings/appearance/native/SettingsAppearanceScreen.tsx
import importAllResult from "../../../../../_runtime/00019_noop.js";
import closure_4 from "../../../client_themes/ClientThemesBackgroundStore.tsx";
import closure_5 from "../../SelectivelySyncedUserSettingsStore.tsx";
import closure_6 from "../../ThemeStore.tsx";
import DEFAULT_FONT_SCALE_STORE_STATE from "FontScaleStore.tsx";
import { MobileUserSettings } from "../../core/native/SettingsConstants.tsx";
import { HelpdeskArticles } from "../../../../Constants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import { defaultAreStatesEqual } from "../../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import { useNavigation } from "../../../../design/components/Navigator/native/useNavigation.native.tsx";

const require = arg1;
let c3 = importAllResult;
({ DEFAULT_FONT_SCALE_STORE_STATE: error, useFontScaleStore: closure_8 } = DEFAULT_FONT_SCALE_STORE_STATE);
const memoResult = importAllResult.memo(() => {
  nativeStackNavigation(4992)(() => {
    if (closure_5.shouldSync("appearance")) {
      const userCustomThemes = lib(15264).fetchUserCustomThemes();
      const obj = lib(15264);
    }
  });
  let items = [closure_6, closure_4];
  const stateFromStoresObject =
    require("../../../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStoresObject(
      items,
      () => {
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
      },
    );
  _require = undefined;
  nativeStackNavigation = undefined;
  ({ theme, gradientPresetId } = stateFromStoresObject);
  const tmp3 = callback();
  _require = tmp3;
  let obj = defaultAreStatesEqual;
  nativeStackNavigation =
    require("../../../../design/components/Navigator/native/useNavigation.native.tsx").useNativeStackNavigation();
  let items1 = [nativeStackNavigation, , , ,];
  ({
    fontScale: arr2[1],
    isClassicChatFontScaleEnabled: arr2[2],
    persistedFontScale: arr2[3],
    persistedIsClassicChatFontScaleEnabled: arr2[4],
  } = tmp3);
  const effect = importAllResult.useEffect(() => {
    let obj = lib(closure_1_2[9]);
    if (obj.isAndroid()) {
      if (lib.persistedFontScale === lib.fontScale) {
        if (tmp3.persistedIsClassicChatFontScaleEnabled === tmp3.isClassicChatFontScaleEnabled) {
          nativeStackNavigation.setOptions({ headerRight: "Array" });
        }
      }
      obj = { headerRight: null };
      const intl = tmp(tmp2[11]).intl;
      obj[0] = tmp(tmp2[10]).getRenderHeaderTextButton(intl.string(tmp(tmp2[11]).t["R3BPH+"]), () =>
        closure_1_1(closure_1_2[12]).setCustomFontScale(closure_0.fontScale, closure_0.isClassicChatFontScaleEnabled),
      );
      nativeStackNavigation.setOptions(obj);
      const tmpResult = tmp(tmp2[10]);
    }
  }, items1);
  const effect1 = importAllResult.useEffect(
    () => () => {
      callback(table[13]).batchUpdates(() => state.setState(closure_7));
    },
    [],
  );
  const node = importAllResult.useMemo(() => {
    let obj = lib(11468);
    obj = { sections: null };
    obj = { label: null, settings: null };
    const intl = lib(1114).intl;
    obj[0] = intl.string(lib(1114).t.Ksh3ik);
    const items = [, , , ,];
    ({
      SAME_AS_DEVICE_THEME: arr[0],
      APPEARANCE_THEME_PICKER: arr[1],
      LIGHT_MODE_THEME_PICKER: arr[2],
      DARK_MODE_THEME_PICKER: arr[3],
      SYNC_THEME: arr[4],
    } = constants);
    obj[1] = items;
    const items1 = [obj, , , , , , , ,];
    const items2 = [constants.DEFAULT_GUILD_THEME_PREFERENCE];
    items1[1] = { settings: items2 };
    obj1 = { label: null, settings: null };
    const intl2 = lib(1114).intl;
    obj1[0] = intl2.string(lib(1114).t.i19n5L);
    const items3 = [,];
    ({ ANDROID_FONT_SCALE: arr4[0], ANDROID_CLASSIC_CHAT_FONT_SCALE: arr4[1] } = constants);
    obj1[1] = items3;
    items1[2] = obj1;
    const items4 = [constants.DMS_MESSAGE_PREVIEWS];
    items1[3] = { settings: items4 };
    const items5 = [constants.GAME_MENTIONS_AUTOCOMPLETE];
    items1[4] = { settings: items5 };
    const obj2 = { settings: items6, subLabel: null };
    items6 = [constants.FAVORITES_GUILD_TOGGLE];
    const intl3 = lib(1114).intl;
    const obj3 = { helpCenterLink: nativeStackNavigation(2024).getArticleURL(constants2.FAVORITES_GUILD) };
    obj2[1] = intl3.format(nativeStackNavigation(3225).GR2KOG, obj3);
    items1[5] = obj2;
    const obj4 = { label: null, settings: null };
    const intl4 = lib(1114).intl;
    obj4[0] = intl4.string(lib(1114).t.lEde7i);
    const items7 = [constants.DMS_HAPPENING_NOW_CARDS];
    obj4[1] = items7;
    items1[6] = obj4;
    const obj5 = { label: null, settings: null };
    const intl5 = lib(1114).intl;
    obj5[0] = intl5.string(lib(1114).t["5h0QOP"]);
    const items8 = [constants.EXACT_SEARCH_RESULT_COUNTS];
    obj5[1] = items8;
    items1[7] = obj5;
    const items9 = [constants.TIMESTAMP_HOUR_CYCLE];
    items1[8] = { settings: items9 };
    obj[0] = items1;
    return obj.createList(obj);
  }, []);
  let obj2 = useNavigation;
  return jsx(nativeStackNavigation(14689), { node }, "" + theme + "-" + gradientPresetId);
});
const result = require("set").fileFinishedImporting(
  "modules/user_settings/appearance/native/SettingsAppearanceScreen.tsx",
);

export default memoResult;
