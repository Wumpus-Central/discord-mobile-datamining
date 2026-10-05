// discord_app/modules/guild_themes/native/GuildThemeNuxActionSheet.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import DismissibleContentConstants from "../../dismissible_content/DismissibleContentConstants.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import _asyncToGenerator_mod from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../_runtime/00019_react.js";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";
import GuildThemeRuntimeStore_mod from "../GuildThemeRuntimeStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let BottomSheet, c5, closure_2, dependencyMap, guildId;

let c10;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let unpackModuleId;
let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
let GuildThemeRuntimeStore = GuildThemeRuntimeStore_mod;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const GuildThemeNuxActionSheet = "GuildThemeNuxActionSheet";
let tmp3 = new LoggerDefault("GuildThemeNuxActionSheet");
let closure_13 = tmp3;
let createStyles = createStyles_mod;
let obj = { container: obj2, title: obj3, description: obj4, options: obj5, warning: obj6, footer: obj7 };
obj2 = { padding: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8, paddingBottom: 0 };
createStyles = createStyles.createStyles;
obj3 = { textAlign: "center", marginBottom: nativeDefault.space.PX_8 };
obj4 = { textAlign: "center", marginBottom: nativeDefault.space.PX_24 };
obj5 = { marginBottom: nativeDefault.space.PX_12 };
obj6 = { marginBottom: nativeDefault.space.PX_12 };
obj7 = { gap: nativeDefault.space.PX_8 };
let closure_14 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let closure_8;
      let ref;
      let stateFromStores;
      let tmp10;
      let tmp11;
      let tmp14;
      let tmp16;
      let tmp17;
      let tmp6;
      const tmp = guildId;
      let obj = guildId(576);
      const cResult = obj.c(63);
      guildId = guildId.guildId;
      const markAsDismissed = guildId.markAsDismissed;
      const tmp4 = closure_14();
      let obj2 = react;
      [tmp6, dependencyMap] = react.useState(guildId(16086).getInitialGuildThemeNuxSelection);
      _slicedToArray(react.useState(guildId(16086).getInitialGuildThemeNuxSelection), 2);
      [r10028, _asyncToGenerator] = react.useState(null);
      _slicedToArray(react.useState(null), 2);
      const tmp8 = _slicedToArray(react.useState(false), 2);
      [r10034, _slicedToArray] = tmp8;
      react = react.useRef(false);
      const tmp9 = tmp6 === guildId(4787).GuildThemeSourcePreference.PERSONAL;
      let closure_6 = tmp9;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [stateFromStores];
        const fn = function v() {
          return stateFromStores.getGuildId();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp10 = items;
        tmp11 = fn;
      } else {
        [tmp10, tmp11] = cResult;
      }
      const tmpResult = tmp(504);
      stateFromStores = tmpResult.useStateFromStores(tmp10, tmp11);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildThemeRuntimeStore];
        cResult[2] = items1;
        tmp14 = items1;
      } else {
        tmp14 = cResult[2];
      }
      if (cResult[3] !== guildId) {
        const fn2 = function k() {
          const guildThemeSnapshot = GuildThemeRuntimeStore.getGuildThemeSnapshot(guildId);
          let tmp2 = null;
          if (null != guildThemeSnapshot) {
            tmp2 = null;
            if (guildThemeSnapshot.enabled) {
              let themeSettings = guildThemeSnapshot.themeSettings;
              if (themeSettings == null) {
                themeSettings = null;
              }
              tmp2 = themeSettings;
            }
          }
          return tmp2;
        };
        const items2 = [guildId];
        cResult[3] = guildId;
        cResult[4] = fn2;
        cResult[5] = items2;
        tmp17 = items2;
        tmp16 = fn2;
      } else {
        tmp16 = cResult[4];
        tmp17 = cResult[5];
      }
      const tmpResult2 = tmp(504);
      const stateFromStores1 = tmpResult2.useStateFromStores(tmp14, tmp16, tmp17);
      if (cResult[6] === guildId) {
        let tmp19;
        let tmp20;
        if (cResult[7] === stateFromStores) {
          tmp19 = cResult[8];
          tmp20 = cResult[9];
        }
        const effect = obj2.useEffect(tmp19, tmp20);
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          class Y {
            constructor(arg0) {
              _asyncToGenerator(null);
              dependencyMap(arg0);
            }
          }
          cResult[10] = Y;
        } else {
          class Y {
            constructor(arg0) {
              _asyncToGenerator(null);
              dependencyMap(arg0);
            }
          }
        }
        if (cResult[11] !== markAsDismissed) {
          class Y {
            constructor(arg0) {
              _asyncToGenerator(null);
              dependencyMap(arg0);
            }
          }
          cResult[11] = markAsDismissed;
          cResult[12] = tmp24;
        } else {
          class Y {
            constructor(arg0) {
              _asyncToGenerator(null);
              dependencyMap(arg0);
            }
          }
        }
        GuildThemeRuntimeStore = tmp24;
        if (cResult[13] === guildId) {
          class Y {
            constructor(arg0) {
              _asyncToGenerator(null);
              dependencyMap(arg0);
            }
          }
        }
        let closure_0 = _asyncToGenerator(async () => {
          let closure_1;
          let obj4;
          let v0;
          let v1;
          if (c5 === 2) {
            c5 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c5 = 2;
              if (0 === v1) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  closure_0 = undefined;
                  if (stateFromStores === closure_0) {
                    v1(true);
                    v0(null);
                    v0 = 1;
                    v1 = 2;
                    c5 = 1;
                    const obj5 = { value: obj4.saveGuildThemeNuxPreference(tmp44, closure_1_6), done: false };
                    obj4 = closure_0(dependencyMap[13]);
                    return obj5;
                  }
                }
              } else if (1 === v1) {
                v0 = 0;
                closure_0 = closure_2;
                logger.error("Failed to save guild theme NUX preference", closure_0);
                const intl = closure_0(dependencyMap[17]).intl;
                v0(intl.string(closure_0(dependencyMap[17]).t.fEptJP));
                v1(false);
                c5 = 3;
                const obj6 = { value: undefined, done: true };
                return obj6;
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                v0 = 0;
                c5 = 3;
                const obj7 = { value, done: true };
                return obj7;
              } else {
                v0 = 0;
                c5.current = true;
                tmp(constants.TAKE_ACTION);
                const obj = markAsDismissed(dependencyMap[16]);
                obj.hideActionSheet(GuildThemeNuxActionSheet);
              }
              c5 = 3;
              return { value: "IconComponent", done: null };
            } catch (tmp36) {
              closure_2 = tmp36;
              if (0 === v0) {
                c5 = 3;
                throw tmp36;
              } else {
                v1 = 1;
              }
            }
          }
        });
        const fn3 = function () {
          return closure_0(...arguments);
        };
        cResult[13] = guildId;
        cResult[14] = tmp9;
        cResult[15] = markAsDismissed;
        cResult[16] = stateFromStores;
        cResult[17] = fn3;
      }
      class Q {
        constructor() {
          if (stateFromStores !== guildId) {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(GuildThemeNuxActionSheet);
          }
        }
      }
      const items3 = [guildId, stateFromStores];
      cResult[6] = guildId;
      cResult[7] = stateFromStores;
      cResult[8] = Q;
      cResult[9] = items3;
      tmp20 = items3;
      tmp19 = Q;
    }
  : (guildId) => {
      let Button;
      let HelpMessage;
      let HelpMessage2;
      let TableRadioGroup;
      let _undefined;
      let _undefined2;
      let c2;
      let c3;
      let c4;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let intl6;
      let intl7;
      let items7;
      let items8;
      let obj11;
      let obj13;
      let obj15;
      let obj7;
      let ref;
      let str;
      let stringResult;
      let tmp5;
      let tmp7;
      let tmp9;
      guildId = guildId.guildId;
      const markAsDismissed = guildId.markAsDismissed;
      dependencyMap = undefined;
      _asyncToGenerator = undefined;
      _slicedToArray = undefined;
      react = undefined;
      let stateFromStores;
      let callback1;
      const tmp = closure_14();
      let tmp2 = guildId;
      const tmp3 = dependencyMap;
      const tmp4 = _slicedToArray(react.useState(guildId(16086).getInitialGuildThemeNuxSelection), 2);
      [tmp5, c2] = tmp4;
      [tmp7, c3] = react.useState(null);
      _slicedToArray(react.useState(null), 2);
      [tmp9, c4] = react.useState(false);
      _slicedToArray(react.useState(false), 2);
      react = react.useRef(false);
      const tmp10 = tmp5 === guildId(4787).GuildThemeSourcePreference.PERSONAL;
      let closure_6 = tmp10;
      let obj = guildId(504);
      const items = [stateFromStores];
      stateFromStores = obj.useStateFromStores(items, () => stateFromStores.getGuildId());
      let obj2 = guildId(504);
      const items1 = [callback1];
      const items2 = [guildId];
      const items3 = [guildId, stateFromStores];
      const stateFromStores1 = obj2.useStateFromStores(
        items1,
        () => {
          const guildThemeSnapshot = GuildThemeRuntimeStore.getGuildThemeSnapshot(guildId);
          let tmp2 = null;
          if (null != guildThemeSnapshot) {
            tmp2 = null;
            if (guildThemeSnapshot.enabled) {
              let themeSettings = guildThemeSnapshot.themeSettings;
              if (themeSettings == null) {
                themeSettings = null;
              }
              tmp2 = themeSettings;
            }
          }
          return tmp2;
        },
        items2,
      );
      const effect = react.useEffect(() => {
        if (stateFromStores !== guildId) {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(GuildThemeNuxActionSheet);
        }
      }, items3);
      const items4 = [markAsDismissed];
      const callback = react.useCallback((arg0) => {
        _undefined2(null);
        _undefined(arg0);
      }, []);
      callback1 = react.useCallback((arg0) => {
        if (!ref.current) {
          tmp.current = true;
          markAsDismissed(arg0);
        }
      }, items4);
      const items5 = [guildId, tmp10, markAsDismissed, stateFromStores];
      const items6 = [callback1];
      const callback2 = react.useCallback(
        _asyncToGenerator(async () => {
          let closure_0;
          let closure_1;
          let obj4;
          let v0;
          let v1;
          if (c5 === 2) {
            c5 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c5 = 2;
              if (0 === v1) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  guildId = tmp4;
                  if (stateFromStores === guildId) {
                    v1(true);
                    v0(null);
                    v0 = 1;
                    v1 = 2;
                    c5 = 1;
                    const obj5 = { value: obj4.saveGuildThemeNuxPreference(tmp44, closure_6), done: false };
                    obj4 = guildId(closure_2[13]);
                    return obj5;
                  }
                }
              } else if (1 === v1) {
                v0 = 0;
                guildId = closure_2;
                logger.error("Failed to save guild theme NUX preference", guildId);
                const intl = guildId(closure_2[17]).intl;
                closure_129_3(intl.string(guildId(closure_2[17]).t.fEptJP));
                closure_129_4(false);
                c5 = 3;
                const obj6 = { value: undefined, done: true };
                return obj6;
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                v0 = 0;
                c5 = 3;
                const obj7 = { value, done: true };
                return obj7;
              } else {
                v0 = 0;
                closure_129_5.current = true;
                closure_129_1(constants.TAKE_ACTION);
                const obj = tmp(closure_2[16]);
                obj.hideActionSheet(GuildThemeNuxActionSheet);
              }
              c5 = 3;
              return { value: "IconComponent", done: null };
            } catch (tmp36) {
              closure_2 = tmp36;
              if (0 === v0) {
                c5 = 3;
                throw tmp36;
              } else {
                v1 = 1;
              }
            }
          }
        }),
        items5,
      );
      const callback3 = react.useCallback(() => {
        callback1(ContentDismissActionType.USER_DISMISS);
      }, items6);
      let intl = guildId(1126).intl;
      const string = intl.string;
      const t = guildId(1126).t;
      if (tmp10) {
        stringResult = string(t.cvoikF);
      } else {
        stringResult = string(t["cY+Oob"]);
      }
      let obj3 = {
        startExpanded: true,
        dismissAccessibilityLabel: intl2.string(tmp2(1126).t.cpT0Cq),
        onDismiss: callback3,
        contentStyles: tmp.container,
        children: items7,
      };
      BottomSheet = tmp2(6645).BottomSheet;
      intl2 = tmp2(1126).intl;
      items7 = [closure_10(markAsDismissed(16087), { themeSettings: stateFromStores1, isPersonal: tmp10 }), , , , , ,];
      let obj4 = {
        accessibilityRole: "header",
        variant: "heading-xl/semibold",
        color: "mobile-text-heading-primary",
        style: tmp.title,
        children: intl3.string(tmp2(1126).t.Q9zFy9),
      };
      const Text = tmp2(4886).Text;
      intl3 = tmp2(1126).intl;
      items7[1] = closure_10(Text, obj4);
      let obj5 = {
        variant: "text-md/normal",
        color: "text-default",
        style: tmp.description,
        children: intl4.string(tmp2(1126).t.XLpBLj),
      };
      const Text2 = tmp2(4886).Text;
      intl4 = tmp2(1126).intl;
      items7[2] = closure_10(Text2, obj5);
      let obj6 = { style: tmp.options, children: closure_11(TableRadioGroup, obj7) };
      obj7 = { hasIcons: false, value: tmp5, onChange: callback, children: items8 };
      TableRadioGroup = tmp2(6072).TableRadioGroup;
      const obj8 = { label: intl5.string(tmp2(1126).t.aN3RNQ), value: tmp2(4787).GuildThemeSourcePreference.GUILD };
      const TableRadioRow = tmp2(6071).TableRadioRow;
      intl5 = tmp2(1126).intl;
      items8 = [closure_10(TableRadioRow, obj8)];
      const obj9 = { label: intl6.string(tmp2(1126).t.js8y7t), value: tmp2(4787).GuildThemeSourcePreference.PERSONAL };
      const TableRadioRow2 = tmp2(6071).TableRadioRow;
      intl6 = tmp2(1126).intl;
      items8[1] = closure_10(TableRadioRow2, obj9);
      items7[3] = closure_10(closure_6, obj6);
      let tmp20Result = null;
      if (tmp10) {
        const obj10 = { style: tmp.warning, children: closure_10(HelpMessage, obj11) };
        obj11 = {
          messageType: tmp2(1188).HelpMessageTypes.WARNING,
          borderRadius: markAsDismissed(587).radii.md,
          children: intl7.string(tmp2(1126).t.tTHQAy),
        };
        HelpMessage = tmp2(1188).HelpMessage;
        intl7 = tmp2(1126).intl;
        tmp20Result = closure_10(tmp22, obj10);
      }
      items7[4] = tmp20Result;
      let tmp20Result2 = null;
      if (null != tmp7) {
        const obj12 = { style: tmp.warning, children: closure_10(HelpMessage2, obj13) };
        obj13 = {
          messageType: tmp2(1188).HelpMessageTypes.ERROR,
          borderRadius: markAsDismissed(587).radii.md,
          children: tmp7,
        };
        HelpMessage2 = tmp2(1188).HelpMessage;
        tmp20Result2 = closure_10(tmp22, obj12);
      }
      items7[5] = tmp20Result2;
      const obj14 = { style: tmp.footer, children: closure_10(Button, obj15) };
      obj15 = { text: stringResult, variant: str, loading: tmp9, disabled: tmp9, onPress: callback2 };
      str = "primary";
      Button = tmp2(5594).Button;
      if (tmp10) {
        str = "secondary";
      }
      items7[6] = closure_10(closure_6, obj14);
      return closure_11(BottomSheet, obj3);
    };
const result = size.fileFinishedImporting("modules/guild_themes/native/GuildThemeNuxActionSheet.tsx");

export default tmp5;
export const GUILD_THEME_NUX_ACTION_SHEET_KEY = "GuildThemeNuxActionSheet";
