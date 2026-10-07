// discord_app/modules/user_settings/quests/native/QuestThemePicker.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ClientThemesTypes from "../../../client_themes/ClientThemesTypes.tsx";
import StringUtils from "../../../../utils/StringUtils.tsx";
import UserSettingsAppearanceThemeUtils from "../../appearance/native/UserSettingsAppearanceThemeUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import SelectivelySyncedUserSettingsStore from "../../SelectivelySyncedUserSettingsStore.tsx";
import ThemeStore from "../../ThemeStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, TouchableOpacity: hasOwnProperty } = get_ActivityIndicator);
let closure_8 = fn(1240).LEGACY_STANDARD_BACKGROUND_THEMES;
const ThemeTypes = fn(1096).ThemeTypes;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  themeSection: { marginBottom: nativeDefault.space.PX_8 },
  themeSelector: null,
  themeOption: null,
  themeCircle: null,
  themeCircleSelected: null,
  themeLabel: null,
  resetButton: null,
  resetIcon: null,
};
let obj3 = { marginBottom: nativeDefault.space.PX_8 };
obj2.themeSelector = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
let obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
obj2.themeOption = { alignItems: "center", gap: nativeDefault.space.PX_4 };
let size = {
  width: 32,
  height: 32,
  borderRadius: nativeDefault.radii.round,
  borderWidth: 2,
  borderColor: "transparent",
};
obj2.themeCircle = size;
let obj5 = { alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.themeCircleSelected = { borderColor: nativeDefault.colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT };
obj2.themeLabel = { fontSize: 11 };
let obj6 = { borderColor: nativeDefault.colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT };
obj2.resetButton = { alignItems: "center", gap: nativeDefault.space.PX_4 };
const size1 = {
  width: 32,
  height: 32,
  borderRadius: nativeDefault.radii.round,
  borderWidth: 2,
  borderColor: "transparent",
  justifyContent: "center",
  alignItems: "center",
};
obj2.resetIcon = size1;
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = require("c").c(54);
      const tmp4 = closure_12();
      _require = tmp4;
      let obj = require("c");
      analyticsLocations = analyticsLocations(stateFromStores[11])(
        analyticsLocations(stateFromStores[12]).USER_SETTINGS,
      ).analyticsLocations;
      const tmp6 = analyticsLocations(stateFromStores[11]);
      const allMobileThemes = require("MobileThemesUtils").useAllMobileThemes();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [themeOption];
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
      const obj2 = require("MobileThemesUtils");
      stateFromStores = require("initialize").useStateFromStores(tmp8, S);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        let items1 = [obj3];
        class R {
          constructor() {
            obj = { isSynced: closure_6.shouldSync("appearance") };
            return obj;
          }
        }
        cResult[2] = items1;
        cResult[3] = R;
        let tmp13 = R;
        let tmp12 = items1;
      } else {
        tmp12 = cResult[2];
        tmp13 = cResult[3];
      }
      const tmpResult = require("initialize");
      const isSynced = require("initialize").useStateFromStoresObject(tmp12, tmp13).isSynced;
      isSynced.useRef(null);
      if (cResult[4] !== stateFromStores) {
        const fn = function f() {
          if (null == ref.current) {
            tmp.current = stateFromStores;
          }
        };
        const items2 = [stateFromStores];
        class R {
          constructor() {
            obj = { isSynced: closure_6.shouldSync("appearance") };
            return obj;
          }
        }
        cResult[4] = stateFromStores;
        cResult[5] = fn;
        cResult[6] = items2;
        let tmp16 = items2;
        let tmp15 = fn;
      } else {
        tmp15 = cResult[5];
        tmp16 = cResult[6];
      }
      const effect = isSynced.useEffect(tmp15, tmp16);
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const items3 = [ThemeTypes.LIGHT, ,];
        class R {
          constructor() {
            obj = { isSynced: closure_6.shouldSync("appearance") };
            return obj;
          }
        }
        items3[2] = ThemeTypes.ONYX;
        cResult[7] = items3;
        let tmp18 = items3;
      } else {
        tmp18 = cResult[7];
      }
      closure_5 = tmp18;
      if (cResult[8] !== allMobileThemes) {
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const fn2 = function x(type) {
            let hasItem = type.type === ClientThemesTypes.ClientThemeType.STANDARD_BACKGROUND_THEME;
            if (hasItem) {
              hasItem = closure_5.includes(type.theme);
            }
            if (hasItem) {
              hasItem = "system" !== type.theme;
            }
            return hasItem;
          };
          cResult[10] = fn2;
          class R {
            constructor() {
              obj = { isSynced: closure_6.shouldSync("appearance") };
              return obj;
            }
          }
        }
        class R {
          constructor() {
            obj = { isSynced: closure_6.shouldSync("appearance") };
            return obj;
          }
        }
        cResult[8] = allMobileThemes;
        cResult[9] = tmp21;
      } else {
        class R {
          constructor() {
            obj = { isSynced: closure_6.shouldSync("appearance") };
            return obj;
          }
        }
        const token = tmp(tmp2[16]).useToken(tmp5(tmp2[8]).colors.BACKGROUND_BASE_LOW, ThemeTypes.LIGHT);
        const tmpResult6 = tmp(tmp2[16]);
        const token1 = tmp(tmp2[16]).useToken(tmp5(tmp2[8]).colors.BACKGROUND_BASE_LOW, ThemeTypes.DARK);
        const tmpResult7 = tmp(tmp2[16]);
        const token2 = tmp(tmp2[16]).useToken(tmp5(tmp2[8]).colors.BACKGROUND_BASE_LOW, ThemeTypes.ONYX);
        if (cResult[11] === token1) {
          if (cResult[12] === token) {
            if (cResult[13] === token2) {
              if (cResult[14] === arr5) {
                let arr6 = cResult[15];
              }
              if (cResult[16] === analyticsLocations) {
                if (cResult[17] === isSynced) {
                  themeOption = cResult[18];
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
                    obj = { isSynced: closure_6.shouldSync("appearance") };
                    return obj;
                  }
                }
                if (cResult[29] === stateFromStores) {
                  if (cResult[30] === themeOption) {
                    if (cResult[31] === tmp4.themeCircle) {
                      if (cResult[32] === tmp4.themeCircleSelected) {
                        if (cResult[33] === tmp4.themeLabel) {
                          if (cResult[34] === tmp4.themeOption) {
                            let tmp28 = cResult[35];
                          }
                          const mapped = arr6.map(tmp28);
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
                              obj = { isSynced: closure_6.shouldSync("appearance") };
                              return obj;
                            }
                          }
                          class F {
                            constructor(arg0) {
                              closure_0 = arg0;
                              obj = {
                                style: closure_0.themeOption,
                                onPress() {
                                  return themeOption(backgroundColor.theme);
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
                          ({ themeLabel: tmp3[25], themeOption } = tmp4);
                          cResult[26] = themeOption;
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
                        return themeOption(backgroundColor.theme);
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
                cResult[30] = themeOption;
                cResult[31] = tmp4.themeCircle;
                cResult[32] = tmp4.themeCircleSelected;
                cResult[33] = tmp4.themeLabel;
                cResult[34] = tmp4.themeOption;
                cResult[35] = F;
                tmp28 = F;
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
                  obj = { isSynced: closure_6.shouldSync("appearance") };
                  return obj;
                }
              }
              cResult[16] = analyticsLocations;
              cResult[17] = isSynced;
              cResult[18] = X;
              themeOption = X;
            }
          }
        }
        obj3 = {};
        obj3[tmp23.LIGHT] = token;
        obj3[tmp23.DARK] = token1;
        obj3[tmp23.ONYX] = token2;
        const mapped1 = arr5.map((theme) => {
          theme = theme.theme;
          let str = "#000000";
          if (!obj.isNullOrEmpty(obj3[theme])) {
            str = obj3[theme];
          }
          obj = StringUtils;
          return { theme: theme.theme, name: theme.getName(), color: str };
        });
        cResult[11] = token1;
        cResult[12] = token;
        cResult[13] = token2;
        cResult[14] = cResult[9];
        cResult[15] = mapped1;
        arr6 = mapped1;
        const tmpResult8 = tmp(tmp2[16]);
      }
      const tmpResult5 = require("initialize");
    }
  : () => {
      const tmp = closure_12();
      _require = tmp;
      analyticsLocations = analyticsLocations(allMobileThemes[11])(
        analyticsLocations(allMobileThemes[12]).USER_SETTINGS,
      ).analyticsLocations;
      const tmp2 = analyticsLocations(allMobileThemes[11]);
      allMobileThemes = require("MobileThemesUtils").useAllMobileThemes();
      let obj = require("MobileThemesUtils");
      let items = [token];
      const stateFromStores = require("initialize").useStateFromStores(items, () => token.theme);
      const obj2 = require("initialize");
      let items1 = [memo];
      const isSynced = require("initialize").useStateFromStoresObject(items1, () => ({
        isSynced: memo.shouldSync("appearance"),
      })).isSynced;
      const obj3 = require("initialize");
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
          let hasItem = type.type === items(allMobileThemes[15]).ClientThemeType.STANDARD_BACKGROUND_THEME;
          if (hasItem) {
            hasItem = items.includes(type.theme);
          }
          if (hasItem) {
            hasItem = "system" !== type.theme;
          }
          return hasItem;
        });
      }, items3);
      const ref = stateFromStores.useRef(null);
      token = require("useToken").useToken(
        analyticsLocations(allMobileThemes[8]).colors.BACKGROUND_BASE_LOW,
        token2.LIGHT,
      );
      const obj4 = require("useToken");
      const token1 = require("useToken").useToken(
        analyticsLocations(allMobileThemes[8]).colors.BACKGROUND_BASE_LOW,
        token2.DARK,
      );
      const obj5 = require("useToken");
      token2 = require("useToken").useToken(
        analyticsLocations(allMobileThemes[8]).colors.BACKGROUND_BASE_LOW,
        token2.ONYX,
      );
      const items4 = [memo, token, token1, token2];
      const memo1 = stateFromStores.useMemo(() => {
        let obj = { [closure_2_9.LIGHT]: token, [closure_2_9.DARK]: token1, [closure_2_9.ONYX]: token2 };
        return memo.map((theme) => {
          theme = theme.theme;
          obj = closure_0(allMobileThemes[17]);
          let str = "#000000";
          if (!obj.isNullOrEmpty(obj[theme])) {
            str = obj[theme];
          }
          return { theme: theme.theme, name: theme.getName(), color: str };
        });
      }, items4);
      const items5 = [analyticsLocations, isSynced];
      const callback = stateFromStores.useCallback((arg0) => {
        closure_0 = arg0;
        const found = token1.find((theme) => theme.theme === closure_0);
        if (null != found) {
          UserSettingsAppearanceThemeUtils.handleSaveTheme(found, analyticsLocations, isSynced);
        }
      }, items5);
      const items6 = [callback];
      const obj7 = { style: tmp.themeSection, children: null };
      const obj8 = { style: tmp.themeSelector, children: null };
      const callback1 = stateFromStores.useCallback(() => {
        if (null != ref.current) {
          callback(tmp.current);
        }
      }, items6);
      const items7 = [
        memo1.map((backgroundColor) => {
          const obj = {
            style: backgroundColor.themeOption,
            onPress() {
              return callback(backgroundColor.theme);
            },
            children: null,
          };
          const items = [backgroundColor.themeCircle, { backgroundColor: backgroundColor.color }];
          let themeCircleSelected = stateFromStores === backgroundColor.theme;
          if (themeCircleSelected) {
            themeCircleSelected = tmp3.themeCircleSelected;
          }
          items[2] = themeCircleSelected;
          const items1 = [
            callback(isSynced, { style: items }),
            callback(backgroundColor(allMobileThemes[19]).Text, {
              variant: "text-xs/medium",
              color: "text-muted",
              style: backgroundColor.themeLabel,
              children: backgroundColor.name,
            }),
          ];
          obj.children = items1;
          return closure_1_11(closure_5, obj, backgroundColor.theme);
        }),
      ];
      const obj9 = { style: tmp.resetButton, onPress: callback1, children: null };
      const obj6 = require("useToken");
      const items8 = [
        callback(isSynced, {
          style: tmp.resetIcon,
          children: callback(require("RefreshIcon").RefreshIcon, { size: "sm" }),
        }),
      ];
      const obj11 = { variant: "text-xs/medium", color: "text-muted", style: tmp.themeLabel, children: null };
      const intl = require("util").intl;
      obj11.children = intl.string(require("util").t.yBZMsQ);
      items8[1] = callback(require("Text/Text").Text, obj11);
      obj9.children = items8;
      items7[1] = closure_11(ref, obj9);
      obj8.children = items7;
      obj7.children = closure_11(isSynced, obj8);
      return callback(isSynced, obj7);
    };
size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/quests/native/QuestThemePicker.tsx");

export default tmp4;
export const QuestThemePicker = tmp4;
