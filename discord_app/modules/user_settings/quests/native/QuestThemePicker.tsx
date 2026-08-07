// discord_app/modules/user_settings/quests/native/QuestThemePicker.tsx
import getSystemLocale from "getSystemLocale";
import get_ActivityIndicator from "Text";
import initialize from "initialize";
import handleThemeChange from "handleThemeChange";
import { LEGACY_STANDARD_BACKGROUND_THEMES as closure_8 } from "ThemeTypes";
import { ThemeTypes } from "sum";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let c4;
let c5;
let unpackModuleId;
let require = arg1;
class QuestThemePicker {
  constructor() {
    tmp = jsxs();
    closure_0 = tmp;
    tmp2 = require("context");
    analyticsLocations = tmp2(require("QUICK_SWITCHER").USER_SETTINGS).analyticsLocations;
    obj = require("getCustomThemesName");
    allMobileThemes = obj.useAllMobileThemes();
    closure_2 = allMobileThemes;
    obj2 = require("initialize");
    items = [];
    items[0] = TouchableOpacity;
    stateFromStores = obj2.useStateFromStores(items, () => token.theme);
    getSystemLocale = stateFromStores;
    obj3 = require("initialize");
    items1 = [];
    items1[0] = TouchableOpacity;
    isSynced = obj3.useStateFromStoresObject(items1, () => ({ isSynced: memo.shouldSync("appearance") })).isSynced;
    useRef = getSystemLocale.useRef(null);
    items2 = [];
    items2[0] = stateFromStores;
    effect = getSystemLocale.useEffect(() => {
      if (null == ref.current) {
        tmp.current = stateFromStores;
      }
    }, items2);
    items3 = [];
    items3[0] = allMobileThemes;
    memo = getSystemLocale.useMemo(() => {
      const items = [, , ];
      ({ LIGHT: arr[0], DARKER: arr[1], MIDNIGHT: arr[2] } = token2);
      return allMobileThemes.filter((type) => {
        let hasItem = type.type === items(outer1_2[13]).ClientThemeType.STANDARD_BACKGROUND_THEME;
        if (hasItem) {
          hasItem = items.includes(type.theme);
        }
        if (hasItem) {
          hasItem = "system" !== type.theme;
        }
        return hasItem;
      });
    }, items3);
    TouchableOpacity = memo;
    obj4 = require("map");
    token = obj4.useToken(require("Themes").colors.BACKGROUND_BASE_LOW, MIDNIGHT.LIGHT);
    TouchableOpacity = token;
    obj5 = require("map");
    token1 = obj5.useToken(require("Themes").colors.BACKGROUND_BASE_LOW, MIDNIGHT.DARKER);
    useToken = token1;
    obj6 = require("map");
    token2 = obj6.useToken(require("Themes").colors.BACKGROUND_BASE_LOW, MIDNIGHT.MIDNIGHT);
    MIDNIGHT = token2;
    items4 = [, , , ];
    items4[0] = memo;
    items4[1] = token;
    items4[2] = token1;
    items4[3] = token2;
    memo1 = getSystemLocale.useMemo(() => {
      let obj = { [outer1_9.LIGHT]: token, [outer1_9.DARKER]: token1, [outer1_9.MIDNIGHT]: token2 };
      return memo.map((theme) => {
        theme = theme.theme;
        obj = obj(outer1_2[15]);
        let str = "#000000";
        if (!obj.isNullOrEmpty(obj[theme])) {
          str = obj[theme];
        }
        obj = { theme: theme.theme, name: theme.getName(), color: str };
        return obj;
      });
    }, items4);
    items5 = [, ];
    items5[0] = analyticsLocations;
    items5[1] = isSynced;
    callback = getSystemLocale.useCallback((arg0) => {
      const found = token1.find((theme) => theme.theme === closure_0);
      if (null != found) {
        tmp(allMobileThemes[16]).handleSaveTheme(found, analyticsLocations, isSynced);
        const obj = tmp(allMobileThemes[16]);
      }
    }, items5);
    f94052 = callback;
    items6 = [];
    items6[0] = callback;
    obj = { style: tmp.themeSection, children: null };
    obj1 = { style: tmp.themeSelector, children: null };
    callback1 = getSystemLocale.useCallback(() => {
      if (null != ref.current) {
        callback(tmp.current);
      }
    }, items6);
    items7 = [, ];
    items7[0] = memo1.map((backgroundColor) => {
      let tmp = backgroundColor;
      let obj = {
        style: tmp.themeOption,
        onPress() {
          return outer1_10(backgroundColor.theme);
        },
        children: null
      };
      const items = [tmp.themeCircle, { backgroundColor: backgroundColor.color }, ];
      let themeCircleSelected = stateFromStores === backgroundColor.theme;
      tmp = outer1_11;
      if (themeCircleSelected) {
        themeCircleSelected = tmp3.themeCircleSelected;
      }
      items[2] = themeCircleSelected;
      const items1 = [callback(isSynced, { style: items }), ];
      obj = { variant: "text-xs/medium", color: "text-muted", style: tmp3.themeLabel, children: backgroundColor.name };
      items1[1] = callback(tmp(allMobileThemes[17]).Text, obj);
      obj[2] = items1;
      return tmp(closure_5, obj, backgroundColor.theme);
    });
    obj2 = { style: tmp.resetButton, onPress: callback1, children: null };
    obj3 = { style: tmp.resetIcon, children: f94052(require("RefreshIcon").RefreshIcon, { size: "sm" }) };
    items8 = [, ];
    items8[0] = f94052(isSynced, obj3);
    obj4 = { variant: "text-xs/medium", color: "text-muted", style: tmp.themeLabel, children: null };
    intl = require("getSystemLocale").intl;
    obj4[3] = intl.string(require("getSystemLocale").t.yBZMsQ);
    items8[1] = f94052(require("Text").Text, obj4);
    obj2[2] = items8;
    items7[1] = jsxs(useRef, obj2);
    obj1[1] = items7;
    obj[1] = jsxs(isSynced, obj1);
    return f94052(isSynced, obj);
  }
}
({ View: c4, TouchableOpacity: c5 } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { themeSection: null, themeSelector: null, themeOption: null, themeCircle: null, themeCircleSelected: null, themeLabel: null, resetButton: null, resetIcon: null };
createCacheKey = { marginBottom: require("Themes").space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", gap: require("Themes").space.PX_12 };
let obj1 = { flexDirection: "row", gap: require("Themes").space.PX_12 };
createCacheKey[2] = { alignItems: "center", gap: require("Themes").space.PX_4 };
let obj2 = { alignItems: "center", gap: require("Themes").space.PX_4 };
createCacheKey[3] = { width: 32, height: 32, borderRadius: require("Themes").radii.round, borderWidth: 2, borderColor: "transparent" };
let obj3 = { width: 32, height: 32, borderRadius: require("Themes").radii.round, borderWidth: 2, borderColor: "transparent" };
createCacheKey[4] = { borderColor: require("Themes").colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT };
createCacheKey[5] = { fontSize: 11 };
const obj4 = { borderColor: require("Themes").colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT };
createCacheKey[6] = { alignItems: "center", gap: require("Themes").space.PX_4 };
let obj5 = { alignItems: "center", gap: require("Themes").space.PX_4 };
createCacheKey[7] = { width: 32, height: 32, borderRadius: require("Themes").radii.round, borderWidth: 2, borderColor: "transparent", justifyContent: "center", alignItems: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj6 = { width: 32, height: 32, borderRadius: require("Themes").radii.round, borderWidth: 2, borderColor: "transparent", justifyContent: "center", alignItems: "center" };
const result = require("initialize").fileFinishedImporting("modules/user_settings/quests/native/QuestThemePicker.tsx");

export default QuestThemePicker;
export { QuestThemePicker };