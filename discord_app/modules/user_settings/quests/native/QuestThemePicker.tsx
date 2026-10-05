// discord_app/modules/user_settings/quests/native/QuestThemePicker.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../discord_common/js/shared/Constants.tsx";
import ClientThemesConstants from "../../../client_themes/ClientThemesConstants.tsx";
import ClientThemesTypes from "../../../client_themes/ClientThemesTypes.tsx";
import StringUtils from "../../../../utils/StringUtils.tsx";
import UserSettingsAppearanceThemeUtils from "../../appearance/native/UserSettingsAppearanceThemeUtils.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import SelectivelySyncedUserSettingsStore_mod from "../../SelectivelySyncedUserSettingsStore.tsx";
import ThemeStore_mod from "../../ThemeStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, closure_0, handleSaveThemeResult, obj1, theme, tmp3;

let c10;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let size;
let size1;
let unpackModuleId;
({ View: closure_4, TouchableOpacity: hasOwnProperty } = react_native);
let SelectivelySyncedUserSettingsStore = SelectivelySyncedUserSettingsStore_mod;
let ThemeStore = ThemeStore_mod;
let closure_8 = ClientThemesConstants.LEGACY_STANDARD_BACKGROUND_THEMES;
const ThemeTypes = Constants.ThemeTypes;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  themeSection: obj2,
  themeSelector: obj3,
  themeOption: obj4,
  themeCircle: size,
  themeCircleSelected: obj5,
  themeLabel: { fontSize: 11 },
  resetButton: obj6,
  resetIcon: size1,
};
obj2 = { marginBottom: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
obj4 = { alignItems: "center", gap: nativeDefault.space.PX_4 };
size = { width: 32, height: 32, borderRadius: nativeDefault.radii.round, borderWidth: 2, borderColor: "transparent" };
obj5 = { borderColor: nativeDefault.colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT };
obj6 = { alignItems: "center", gap: nativeDefault.space.PX_4 };
size1 = {
  width: 32,
  height: 32,
  borderRadius: nativeDefault.radii.round,
  borderWidth: 2,
  borderColor: "transparent",
  justifyContent: "center",
  alignItems: "center",
};
let closure_12 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let analyticsLocations;
      let arr5;
      let closure_6;
      let closure_7;
      let stateFromStores;
      let tmp12;
      let tmp13;
      let tmp15;
      let tmp16;
      let tmp18;
      let tmp8;
      let tmp9;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(54);
      const tmp4 = closure_12();
      _require = tmp4;
      const tmp6 = analyticsLocations(stateFromStores[11]);
      analyticsLocations = tmp6(analyticsLocations(stateFromStores[12]).USER_SETTINGS).analyticsLocations;
      let obj2 = require("MobileThemesUtils");
      const allMobileThemes = obj2.useAllMobileThemes();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [ThemeStore];
        class S {
          constructor() {
            return closure_7.theme;
          }
        }
        cResult[0] = items;
        cResult[1] = S;
        tmp8 = items;
      } else {
        [tmp8, tmp9] = cResult;
      }
      const tmpResult = tmp(stateFromStores[14]);
      stateFromStores = tmpResult.useStateFromStores(tmp8, S);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        let items1 = [SelectivelySyncedUserSettingsStore];
        class R {
          constructor() {
            const obj = { isSynced: closure_6.shouldSync("appearance") };
            return obj;
          }
        }
        cResult[2] = items1;
        cResult[3] = R;
        tmp13 = R;
        tmp12 = items1;
      } else {
        tmp12 = cResult[2];
        tmp13 = cResult[3];
      }
      const tmpResult5 = tmp(stateFromStores[14]);
      const isSynced = tmpResult5.useStateFromStoresObject(tmp12, tmp13).isSynced;
      const ref = isSynced.useRef(null);
      const obj5 = isSynced;
      if (cResult[4] !== stateFromStores) {
        const fn = function f() {
          if (null == ref.current) {
            tmp.current = stateFromStores;
          }
        };
        const items2 = [stateFromStores];
        class R {
          constructor() {
            const obj = { isSynced: closure_6.shouldSync("appearance") };
            return obj;
          }
        }
        cResult[4] = stateFromStores;
        cResult[5] = fn;
        cResult[6] = items2;
        tmp16 = items2;
        tmp15 = fn;
      } else {
        tmp15 = cResult[5];
        tmp16 = cResult[6];
      }
      const effect = obj5.useEffect(tmp15, tmp16);
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const items3 = [ThemeTypes.LIGHT, ,];
        class R {
          constructor() {
            const obj = { isSynced: closure_6.shouldSync("appearance") };
            return obj;
          }
        }
        items3[2] = ThemeTypes.ONYX;
        cResult[7] = items3;
        tmp18 = items3;
      } else {
        tmp18 = cResult[7];
      }
      let closure_5 = tmp18;
      if (cResult[8] !== allMobileThemes) {
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const fn2 = function x(type) {
            const hasItem =
              type.type === ClientThemesTypes.ClientThemeType.STANDARD_BACKGROUND_THEME &&
              closure_5.includes(type.theme) &&
              "system" !== type.theme;
            return hasItem;
          };
          cResult[10] = fn2;
          class R {
            constructor() {
              const obj = { isSynced: closure_6.shouldSync("appearance") };
              return obj;
            }
          }
        }
        class R {
          constructor() {
            const obj = { isSynced: closure_6.shouldSync("appearance") };
            return obj;
          }
        }
        cResult[8] = allMobileThemes;
        cResult[9] = tmp21;
        arr5 = tmp21;
      } else {
        arr5 = cResult[9];
      }
      const tmpResult6 = tmp(stateFromStores[16]);
      const token = tmpResult6.useToken(tmp5(tmp2[8]).colors.BACKGROUND_BASE_LOW, ThemeTypes.LIGHT);
      const tmpResult7 = tmp(stateFromStores[16]);
      const token1 = tmpResult7.useToken(tmp5(tmp2[8]).colors.BACKGROUND_BASE_LOW, ThemeTypes.DARK);
      const tmpResult8 = tmp(stateFromStores[16]);
      const token2 = tmpResult8.useToken(tmp5(tmp2[8]).colors.BACKGROUND_BASE_LOW, ThemeTypes.ONYX);
      if (cResult[11] === token1) {
        if (cResult[12] === token) {
          if (cResult[13] === token2) {
            let arr6;
            if (cResult[14] === arr5) {
              arr6 = cResult[15];
            }
            if (cResult[16] === analyticsLocations) {
              let tmp27;
              if (cResult[17] === isSynced) {
                tmp27 = cResult[18];
              }
              ThemeStore = tmp27;
              class X {
                constructor(arg0) {
                  closure_0 = arg0;
                  found = closure_8.find((theme) => theme.theme === closure_0);
                  if (null != found) {
                    tmp2 = closure_0;
                    tmp3 = closure_2;
                    obj = closure_0(closure_2[18]);
                    tmp4 = analyticsLocations;
                    tmp5 = isSynced;
                    handleSaveThemeResult = obj.handleSaveTheme(found, analyticsLocations, isSynced);
                  }
                  return;
                }
              }
              class R {
                constructor() {
                  const obj = { isSynced: closure_6.shouldSync("appearance") };
                  return obj;
                }
              }
              if (cResult[29] === stateFromStores) {
                if (cResult[30] === tmp27) {
                  if (cResult[31] === tmp4.themeCircle) {
                    if (cResult[32] === tmp4.themeCircleSelected) {
                      if (cResult[33] === tmp4.themeLabel) {
                        let tmp29;
                        if (cResult[34] === tmp4.themeOption) {
                          tmp29 = cResult[35];
                        }
                        const mapped = arr6.map(tmp29);
                        class X {
                          constructor(arg0) {
                            closure_0 = arg0;
                            found = closure_8.find((theme) => theme.theme === closure_0);
                            if (null != found) {
                              tmp2 = closure_0;
                              tmp3 = closure_2;
                              obj = closure_0(closure_2[18]);
                              tmp4 = analyticsLocations;
                              tmp5 = isSynced;
                              handleSaveThemeResult = obj.handleSaveTheme(found, analyticsLocations, isSynced);
                            }
                            return;
                          }
                        }
                        class R {
                          constructor() {
                            const obj = { isSynced: closure_6.shouldSync("appearance") };
                            return obj;
                          }
                        }
                        class F {
                          constructor(arg0) {
                            closure_0 = arg0;
                            obj = {
                              style: closure_0.themeOption,
                              onPress() {
                                return closure_7(backgroundColor.theme);
                              },
                              children: null,
                            };
                            tmp3 = closure_0;
                            tmp4 = closure_1_10;
                            items = [, ,];
                            items[0] = closure_0.themeCircle;
                            items[1] = { backgroundColor: arg0.color };
                            themeCircleSelected = closure_2 === arg0.theme;
                            tmp = closure_1_11;
                            tmp2 = closure_5;
                            tmp5 = closure_4;
                            if (themeCircleSelected) {
                              themeCircleSelected = tmp3.themeCircleSelected;
                            }
                            items[2] = themeCircleSelected;
                            items1 = [,];
                            items1[0] = tmp4(tmp5, { style: items });
                            obj1 = {
                              variant: "text-xs/medium",
                              color: "text-muted",
                              style: tmp3.themeLabel,
                              children: arg0.name,
                            };
                            items1[1] = tmp4(closure_0(closure_2[19]).Text, obj1);
                            obj.children = items1;
                            return tmp(tmp2, obj, arg0.theme);
                          }
                        }
                        cResult[23] = tmp4.themeCircle;
                        cResult[24] = tmp4.themeCircleSelected;
                        cResult[25] = tmp4.themeLabel;
                        cResult[26] = tmp4.themeOption;
                        cResult[27] = arr6;
                        cResult[28] = mapped;
                      }
                    }
                  }
                }
              }
              class F {
                constructor(arg0) {
                  closure_0 = arg0;
                  obj = {
                    style: closure_0.themeOption,
                    onPress() {
                      return closure_7(backgroundColor.theme);
                    },
                    children: null,
                  };
                  tmp3 = closure_0;
                  tmp4 = closure_1_10;
                  items = [, ,];
                  items[0] = closure_0.themeCircle;
                  items[1] = { backgroundColor: arg0.color };
                  themeCircleSelected = closure_2 === arg0.theme;
                  tmp = closure_1_11;
                  tmp2 = closure_5;
                  tmp5 = closure_4;
                  if (themeCircleSelected) {
                    themeCircleSelected = tmp3.themeCircleSelected;
                  }
                  items[2] = themeCircleSelected;
                  items1 = [,];
                  items1[0] = tmp4(tmp5, { style: items });
                  obj1 = {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    style: tmp3.themeLabel,
                    children: arg0.name,
                  };
                  items1[1] = tmp4(closure_0(closure_2[19]).Text, obj1);
                  obj.children = items1;
                  return tmp(tmp2, obj, arg0.theme);
                }
              }
              cResult[29] = stateFromStores;
              cResult[30] = tmp27;
              cResult[31] = tmp4.themeCircle;
              cResult[32] = tmp4.themeCircleSelected;
              cResult[33] = tmp4.themeLabel;
              cResult[34] = tmp4.themeOption;
              cResult[35] = F;
              tmp29 = F;
            }
            class X {
              constructor(arg0) {
                closure_0 = arg0;
                found = closure_8.find((theme) => theme.theme === closure_0);
                if (null != found) {
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  obj = closure_0(closure_2[18]);
                  tmp4 = analyticsLocations;
                  tmp5 = isSynced;
                  handleSaveThemeResult = obj.handleSaveTheme(found, analyticsLocations, isSynced);
                }
                return;
              }
            }
            class R {
              constructor() {
                const obj = { isSynced: closure_6.shouldSync("appearance") };
                return obj;
              }
            }
            cResult[16] = analyticsLocations;
            cResult[17] = isSynced;
            cResult[18] = X;
            tmp27 = X;
          }
        }
      }
      SelectivelySyncedUserSettingsStore = {
        [ThemeTypes.LIGHT]: token,
        [ThemeTypes.DARK]: token1,
        [ThemeTypes.ONYX]: token2,
      };
      const mapped1 = arr5.map((theme) => {
        theme = theme.theme;
        let str = "#000000";
        const obj = StringUtils;
        if (!obj.isNullOrEmpty(closure_6[theme])) {
          str = closure_6[theme];
        }
        const obj2 = { theme: theme.theme, name: theme.getName(), color: str };
        return obj2;
      });
      cResult[11] = token1;
      cResult[12] = token;
      cResult[13] = token2;
      cResult[14] = arr5;
      cResult[15] = mapped1;
      arr6 = mapped1;
    }
  : () => {
      let allMobileThemes;
      let analyticsLocations;
      let intl;
      let items7;
      let items8;
      let memo;
      let obj8;
      let token;
      let token2;
      let tmp = closure_12();
      _require = tmp;
      const tmp2 = analyticsLocations(allMobileThemes[11]);
      analyticsLocations = tmp2(analyticsLocations(allMobileThemes[12]).USER_SETTINGS).analyticsLocations;
      let obj = require("MobileThemesUtils");
      allMobileThemes = obj.useAllMobileThemes();
      let obj2 = require("get initialized");
      let items = [token];
      const stateFromStores = obj2.useStateFromStores(items, () => token.theme);
      let items1 = [memo];
      const obj3 = require("get initialized");
      const isSynced = obj3.useStateFromStoresObject(items1, () => {
        const obj = { isSynced: memo.shouldSync("appearance") };
        return obj;
      }).isSynced;
      const ref = stateFromStores.useRef(null);
      const items2 = [stateFromStores];
      const effect = stateFromStores.useEffect(() => {
        if (null == ref.current) {
          tmp.current = stateFromStores;
        }
      }, items2);
      const items3 = [allMobileThemes];
      memo = stateFromStores.useMemo(() => {
        const items = [, ,];
        ({ LIGHT: arr[0], DARK: arr[1], ONYX: arr[2] } = ThemeTypes);
        return allMobileThemes.filter((type) => {
          const hasItem =
            type.type === closure_2_0(allMobileThemes[15]).ClientThemeType.STANDARD_BACKGROUND_THEME &&
            items.includes(type.theme) &&
            "system" !== type.theme;
          return hasItem;
        });
      }, items3);
      const obj4 = require("useToken");
      token = obj4.useToken(analyticsLocations(allMobileThemes[8]).colors.BACKGROUND_BASE_LOW, token2.LIGHT);
      const obj5 = require("useToken");
      const token1 = obj5.useToken(analyticsLocations(allMobileThemes[8]).colors.BACKGROUND_BASE_LOW, token2.DARK);
      const obj6 = require("useToken");
      token2 = obj6.useToken(analyticsLocations(allMobileThemes[8]).colors.BACKGROUND_BASE_LOW, token2.ONYX);
      const items4 = [memo, token, token1, token2];
      const memo1 = stateFromStores.useMemo(() => {
        let obj = { [closure_2_9.LIGHT]: token, [closure_2_9.DARK]: token1, [closure_2_9.ONYX]: token2 };
        return memo.map((theme) => {
          theme = theme.theme;
          obj = closure_2_0(allMobileThemes[17]);
          let str = "#000000";
          const tmp = obj;
          if (!obj.isNullOrEmpty(obj[theme])) {
            str = tmp[theme];
          }
          const obj2 = { theme: theme.theme, name: theme.getName(), color: str };
          return obj2;
        });
      }, items4);
      const items5 = [analyticsLocations, isSynced];
      const callback = stateFromStores.useCallback((arg0) => {
        closure_0 = arg0;
        const found = token1.find((theme) => theme.theme === closure_0);
        if (null != found) {
          const obj = UserSettingsAppearanceThemeUtils;
          obj.handleSaveTheme(found, analyticsLocations, isSynced);
        }
      }, items5);
      const items6 = [callback];
      const obj7 = { style: tmp.themeSection, children: closure_11(isSynced, obj8) };
      obj8 = { style: tmp.themeSelector, children: items7 };
      const callback1 = stateFromStores.useCallback(() => {
        if (null != ref.current) {
          callback(tmp.current);
        }
      }, items6);
      items7 = [
        memo1.map((backgroundColor) => {
          let items1;
          const items = [backgroundColor.themeCircle, { backgroundColor: backgroundColor.color }];
          const themeCircleSelected = stateFromStores === backgroundColor.theme && tmp3.themeCircleSelected;
          const obj = {
            style: backgroundColor.themeOption,
            onPress() {
              return callback(backgroundColor.theme);
            },
            children: items1,
          };
          items[2] = themeCircleSelected;
          items1 = [callback(isSynced, { style: items })];
          const obj2 = {
            variant: "text-xs/medium",
            color: "text-muted",
            style: backgroundColor.themeLabel,
            children: backgroundColor.name,
          };
          items1[1] = callback(backgroundColor(allMobileThemes[19]).Text, obj2);
          return closure_1_11(ref, obj, backgroundColor.theme);
        }),
      ];
      const obj9 = { style: tmp.resetButton, onPress: callback1, children: items8 };
      items8 = [,];
      const obj10 = { style: tmp.resetIcon, children: callback(require("RefreshIcon").RefreshIcon, { size: "sm" }) };
      items8[0] = callback(isSynced, obj10);
      const obj11 = {
        variant: "text-xs/medium",
        color: "text-muted",
        style: tmp.themeLabel,
        children: intl.string(require("intl").t.yBZMsQ),
      };
      const Text = require("Text/Text").Text;
      intl = require("intl").intl;
      items8[1] = callback(Text, obj11);
      items7[1] = closure_11(ref, obj9);
      return callback(isSynced, obj7);
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/user_settings/quests/native/QuestThemePicker.tsx");

export default tmp5;
export const QuestThemePicker = tmp5;
