// === Module 15176: QuestThemePicker ===

// Module 15176 (QuestThemePicker)
import nativeDefault from "native" /* 576 */;
import UserSettingsAppearanceThemeUtils from "UserSettingsAppearanceThemeUtils" /* 15177 */;
import noop from "module_19" /* 19 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1184 */;
import ThemeStore from "ThemeStore" /* 1183 */;

require = fn;
class QuestThemePicker {
  constructor() {
    tmp = closure_12();
    closure_0 = tmp;
    tmp2 = analyticsLocations(closure_2[9]);
    analyticsLocations = tmp2(analyticsLocations(closure_2[10]).USER_SETTINGS).analyticsLocations;
    obj = closure_0(closure_2[11]);
    allMobileThemes = obj.useAllMobileThemes();
    closure_2 = allMobileThemes;
    obj2 = closure_0(closure_2[12]);
    items = [];
    items[0] = closure_7;
    stateFromStores = obj2.useStateFromStores(items, () => token.theme);
    closure_3 = stateFromStores;
    obj3 = closure_0(closure_2[12]);
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
      ({ LIGHT: arr[0], DARKER: arr[1], MIDNIGHT: arr[2] } = ThemeTypes);
      return allMobileThemes.filter((type) => {
        let hasItem = type.type === items(allMobileThemes[13]).ClientThemeType.STANDARD_BACKGROUND_THEME;
        if (hasItem) {
          hasItem = items.includes(type.theme);
        }
        if (hasItem) {
          hasItem = "system" !== type.theme;
        }
        return hasItem;
      });
    }, items3);
    closure_6 = memo;
    obj4 = closure_0(closure_2[14]);
    token = obj4.useToken(analyticsLocations(closure_2[8]).colors.BACKGROUND_BASE_LOW, closure_9.LIGHT);
    closure_7 = token;
    obj5 = closure_0(closure_2[14]);
    token1 = obj5.useToken(analyticsLocations(closure_2[8]).colors.BACKGROUND_BASE_LOW, closure_9.DARKER);
    closure_8 = token1;
    obj6 = closure_0(closure_2[14]);
    token2 = obj6.useToken(analyticsLocations(closure_2[8]).colors.BACKGROUND_BASE_LOW, closure_9.MIDNIGHT);
    closure_9 = token2;
    items4 = [, , , ];
    items4[0] = memo;
    items4[1] = token;
    items4[2] = token1;
    items4[3] = token2;
    memo1 = closure_3.useMemo(() => {
      let obj = { [closure_2_9.LIGHT]: token, [closure_2_9.DARKER]: token1, [closure_2_9.MIDNIGHT]: token2 };
      return memo.map((theme) => {
        theme = theme.theme;
        obj = closure_0(allMobileThemes[15]);
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
    callback = closure_3.useCallback((arg0) => {
      closure_0 = arg0;
      const found = token1.find((theme) => theme.theme === closure_0);
      if (null != found) {
        UserSettingsAppearanceThemeUtils.handleSaveTheme(found, analyticsLocations, isSynced);
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
    items7[0] = memo1.map((backgroundColor) => {
      let obj = {
        style: backgroundColor.themeOption,
        onPress() {
          return callback(backgroundColor.theme);
        },
        children: null
      };
      const items = [backgroundColor.themeCircle, { backgroundColor: backgroundColor.color }, ];
      let themeCircleSelected = stateFromStores === backgroundColor.theme;
      if (themeCircleSelected) {
        themeCircleSelected = tmp3.themeCircleSelected;
      }
      items[2] = themeCircleSelected;
      const items1 = [callback(isSynced, { style: items }), ];
      obj = { variant: "text-xs/medium", color: "text-muted", style: tmp3.themeLabel, children: backgroundColor.name };
      items1[1] = callback(backgroundColor(allMobileThemes[17]).Text, obj);
      obj.children = items1;
      return closure_1_11(closure_5, obj, backgroundColor.theme);
    });
    obj2 = { style: tmp.resetButton, onPress: callback1, children: null };
    obj3 = { style: tmp.resetIcon, children: closure_10(closure_0(closure_2[18]).RefreshIcon, { size: "sm" }) };
    items8 = [, ];
    items8[0] = closure_10(isSynced, obj3);
    obj4 = { variant: "text-xs/medium", color: "text-muted", style: tmp.themeLabel, children: null };
    intl = closure_0(closure_2[19]).intl;
    obj4.children = intl.string(closure_0(closure_2[19]).t.yBZMsQ);
    items8[1] = closure_10(closure_0(closure_2[17]).Text, obj4);
    obj2.children = items8;
    items7[1] = jsxs(closure_5, obj2);
    obj1.children = items7;
    obj.children = jsxs(isSynced, obj1);
    return closure_10(isSynced, obj);
  }
}
get_ActivityIndicator = fn(17);
({ View: closure_4, TouchableOpacity: hasOwnProperty } = get_ActivityIndicator);
let closure_8 = fn(1230).LEGACY_STANDARD_BACKGROUND_THEMES;
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
fn(4560);
let createStyles = { themeSection: null, themeSelector: null, themeOption: null, themeCircle: null, themeCircleSelected: null, themeLabel: null, resetButton: null, resetIcon: null };
createStyles = { marginBottom: nativeDefault.space.PX_8 };
createStyles.themeSection = createStyles;
createStyles.themeSelector = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
let obj1 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
createStyles.themeOption = { alignItems: "center", gap: nativeDefault.space.PX_4 };
let size = { width: 32, height: 32, borderRadius: nativeDefault.radii.round, borderWidth: 2, borderColor: "transparent" };
createStyles.themeCircle = size;
let obj2 = { alignItems: "center", gap: nativeDefault.space.PX_4 };
createStyles.themeCircleSelected = { borderColor: nativeDefault.colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT };
createStyles.themeLabel = { fontSize: 11 };
let obj3 = { borderColor: nativeDefault.colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT };
createStyles.resetButton = { alignItems: "center", gap: nativeDefault.space.PX_4 };
const size1 = { width: 32, height: 32, borderRadius: nativeDefault.radii.round, borderWidth: 2, borderColor: "transparent", justifyContent: "center", alignItems: "center" };
createStyles.resetIcon = size1;
let closure_12 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/quests/native/QuestThemePicker.tsx");

export default QuestThemePicker;
export { QuestThemePicker };