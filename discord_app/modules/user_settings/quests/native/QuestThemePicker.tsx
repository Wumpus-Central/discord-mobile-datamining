// discord_app/modules/user_settings/quests/native/QuestThemePicker.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import initialize from "../../SelectivelySyncedUserSettingsStore.tsx";
import handleThemeChange from "../../ThemeStore.tsx";
import { LEGACY_STANDARD_BACKGROUND_THEMES as closure_8 } from "../../../client_themes/ClientThemesConstants.tsx";
import { ThemeTypes } from "../../../../../discord_common/js/shared/Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
class QuestThemePicker {
  constructor() {
    tmp = closure_12();
    closure_0 = tmp;
    tmp2 = require("context");
    analyticsLocations = tmp2(require("QUICK_SWITCHER").USER_SETTINGS).analyticsLocations;
    obj = require("getCustomThemesName");
    allMobileThemes = obj.useAllMobileThemes();
    closure_2 = allMobileThemes;
    obj2 = require("initialize");
    items = [];
    items[0] = closure_7;
    stateFromStores = obj2.useStateFromStores(items, () => token.theme);
    closure_3 = stateFromStores;
    obj3 = require("initialize");
    items1 = [];
    items1[0] = closure_6;
    isSynced = obj3.useStateFromStoresObject(items1, () => ({ isSynced: memo.shouldSync("appearance") })).isSynced;
    closure_5 = closure_3.useRef(null);
    items2 = [];
    items2[0] = stateFromStores;
    effect = closure_3.useEffect(() => {
      if (null == ref.current) {
        tmp.current = stateFromStores;
      }
    }, items2);
    items3 = [];
    items3[0] = allMobileThemes;
    memo = closure_3.useMemo(() => {
      const items = [, , ];
      ({ LIGHT: arr[0], DARKER: arr[1], MIDNIGHT: arr[2] } = token2);
      return allMobileThemes.filter((item, index) => {
        let hasItem = item.type === items(allMobileThemes[13]).ClientThemeType.STANDARD_BACKGROUND_THEME;
        if (hasItem) {
          hasItem = items.includes(item.theme);
        }
        if (hasItem) {
          hasItem = "system" !== item.theme;
        }
        return hasItem;
      });
    }, items3);
    closure_6 = memo;
    obj4 = require("map");
    token = obj4.useToken(require("Themes").colors.BACKGROUND_BASE_LOW, closure_9.LIGHT);
    closure_7 = token;
    obj5 = require("map");
    token1 = obj5.useToken(require("Themes").colors.BACKGROUND_BASE_LOW, closure_9.DARKER);
    closure_8 = token1;
    obj6 = require("map");
    token2 = obj6.useToken(require("Themes").colors.BACKGROUND_BASE_LOW, closure_9.MIDNIGHT);
    closure_9 = token2;
    items4 = [, , , ];
    items4[0] = memo;
    items4[1] = token;
    items4[2] = token1;
    items4[3] = token2;
    memo1 = closure_3.useMemo(() => memo.map((item, index) => {
      const theme = item.theme;
      obj = obj(allMobileThemes[15]);
      let str = "#000000";
      if (!obj.isNullOrEmpty(obj[theme])) {
        str = obj[theme];
      }
      obj = { theme: item.theme, name: item.getName(), color: str };
      return obj;
    }), items4);
    items5 = [, ];
    items5[0] = analyticsLocations;
    items5[1] = isSynced;
    callback = closure_3.useCallback((arg0) => {
      const lib = arg0;
      const found = token1.find((item, index) => item.theme === closure_0);
      if (null != found) {
        lib(allMobileThemes[16]).handleSaveTheme(found, analyticsLocations, isSynced);
        const obj = lib(allMobileThemes[16]);
      }
    }, items5);
    closure_10 = callback;
    items6 = [];
    items6[0] = callback;
    obj = { style: tmp.themeSection, children: null };
    obj1 = { style: tmp.themeSelector, children: null };
    callback1 = closure_3.useCallback(() => {
      if (null != ref.current) {
        callback(tmp.current);
      }
    }, items6);
    items7 = [, ];
    items7[0] = memo1.map((item, index) => {
      const lib = item;
      let obj = {
        style: lib.themeOption,
        onPress() {
          return callback(item.theme);
        },
        children: null
      };
      const items = [lib.themeCircle, { backgroundColor: item.color }, ];
      let themeCircleSelected = stateFromStores === item.theme;
      if (themeCircleSelected) {
        themeCircleSelected = tmp3.themeCircleSelected;
      }
      items[2] = themeCircleSelected;
      const items1 = [callback(isSynced, { style: items }), ];
      obj = { variant: "text-xs/medium", color: "text-muted", style: tmp3.themeLabel, children: item.name };
      items1[1] = callback(lib(allMobileThemes[17]).Text, obj);
      obj[2] = items1;
      return closure_1_11(closure_5, obj, item.theme);
    });
    obj2 = { style: tmp.resetButton, onPress: callback1, children: null };
    obj3 = { style: tmp.resetIcon, children: closure_10(require("RefreshIcon").RefreshIcon, { size: "sm" }) };
    items8 = [, ];
    items8[0] = closure_10(isSynced, obj3);
    obj4 = { variant: "text-xs/medium", color: "text-muted", style: tmp.themeLabel, children: null };
    intl = require("getSystemLocale").intl;
    obj4[3] = intl.string(require("getSystemLocale").t.yBZMsQ);
    items8[1] = closure_10(require("Text").Text, obj4);
    obj2[2] = items8;
    items7[1] = jsxs(closure_5, obj2);
    obj1[1] = items7;
    obj[1] = jsxs(isSynced, obj1);
    return closure_10(isSynced, obj);
  }
}
({ View: c4, TouchableOpacity: c5 } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
const createCacheKey = { marginBottom: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", gap: ThemesDefault.space.PX_12 };
createCacheKey[2] = { alignItems: "center", gap: ThemesDefault.space.PX_4 };
createCacheKey[3] = { width: 32, height: 32, borderRadius: ThemesDefault.radii.round, borderWidth: 2, borderColor: "transparent" };
createCacheKey[4] = { borderColor: ThemesDefault.colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT };
createCacheKey[5] = { fontSize: 11 };
createCacheKey[6] = { alignItems: "center", gap: ThemesDefault.space.PX_4 };
createCacheKey[7] = { width: 32, height: 32, borderRadius: ThemesDefault.radii.round, borderWidth: 2, borderColor: "transparent", justifyContent: "center", alignItems: "center" };
let closure_12 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/user_settings/quests/native/QuestThemePicker.tsx");

export default QuestThemePicker;
export { QuestThemePicker };