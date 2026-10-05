// discord_app/modules/multi_account/native/ChooseAccount.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl5 from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import actions_AlertActionCreatorsDefault from "../../../actions/native/AlertActionCreators.tsx";
import MultiAccountStore from "../MultiAccountStore.tsx";
import MultiAccountActionCreatorsAll from "../MultiAccountActionCreators.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../_runtime/00019_react.js";
import Constants_mod from "../Constants.tsx";
import Constants_mod2 from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c3, c4, closure_0, dependencyMap, hideActionSheetResult, navigation, obj1;

let c10;
let c9;
let closure_12;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
const View = react_native.View;
const MultiAccountTokenStatus = MultiAccountStore.MultiAccountTokenStatus;
let Constants = Constants_mod2;
({ MAX_ACCOUNTS: metroImportDefault, MultiAccountSwitchLocation: metroImportAll } = Constants);
Constants = Constants_mod2;
({ AnalyticEvents: c9, AuthStates: c10 } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, mainCard: obj3, addAccountLabel: obj4 };
obj2 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderRadius: nativeDefault.radii.sm,
  paddingTop: nativeDefault.space.PX_16,
  margin: nativeDefault.space.PX_16,
};
createStyles = createStyles.createStyles;
obj3 = {
  marginVertical: nativeDefault.space.PX_16,
  borderRadius: nativeDefault.radii.sm,
  flexDirection: "column",
  alignItems: "stretch",
  alignSelf: "stretch",
  display: "flex",
};
obj4 = { color: nativeDefault.colors.TEXT_LINK };
let closure_13 = createStyles(obj);
const tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_3;
      let intl;
      let obj4;
      let tmp6;
      let tmp = navigation;
      let obj = navigation(576);
      const cResult = obj.c(29);
      const tmp4 = closure_13();
      let obj2 = navigation(1490);
      navigation = obj2.useNavigation();
      let obj3 = navigation(15872);
      const multiAccountUsers = obj3.useMultiAccountUsers().multiAccountUsers;
      if (cResult[0] !== navigation) {
        const fn = function s(tokenStatus) {
          if (tokenStatus.tokenStatus === MultiAccountTokenStatus.INVALID) {
            navigation.push(constants2.LOGIN);
            const obj2 = AnalyticsUtilsDefault;
            obj2.track(constants.LOGIN_VIEWED, { source: "choose_account_user_invalid" });
          } else {
            const obj = MultiAccountActionCreatorsAll;
            obj.switchAccount(tokenStatus.id, undefined, metroImportAll.CHOOSE_ACCOUNT);
          }
        };
        cResult[0] = navigation;
        cResult[1] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[1];
      }
      let closure_2 = tmp6;
      if (cResult[2] === multiAccountUsers.length) {
        let tmp9;
        let tmp11;
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          _require = C(function* (arg0) {
            let closure_1;
            let formatToPlainString;
            let intl;
            let intl2;
            let intl3;
            let obj6;
            let phEQmS;
            closure_0 = arg0;
            if (c4 === 2) {
              c4 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj3 = { value, done: true };
                return obj3;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                c4 = 2;
                if (0 === c3) {
                  if (arg0 === 1) {
                    c4 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c4 = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else {
                    let combined;
                    const obj5 = {
                      title: intl3.string(closure_0(c3[16]).t.n0Fbg6),
                      body: formatToPlainString(phEQmS, obj6),
                      confirmText: intl.string(closure_0(c3[16]).t.N86XcP),
                      confirmColor: closure_0(c3[17]).ButtonColors.RED,
                      cancelText: intl2.string(closure_0(c3[16]).t["ETE/oC"]),
                      isDismissable: true,
                    };
                    const _confirm = tmp(c3[15]).confirm;
                    const tmp29 = tmp(c3[15]);
                    intl3 = closure_0(c3[16]).intl;
                    const intl4 = closure_0(c3[16]).intl;
                    formatToPlainString = intl4.formatToPlainString;
                    phEQmS = closure_0(c3[16]).t.phEQmS;
                    if ("0" === closure_0.discriminator) {
                      const _HermesInternal2 = HermesInternal;
                      combined = "" + closure_0.username;
                    } else {
                      const _HermesInternal = HermesInternal;
                      combined = "" + closure_0.username + "#" + closure_0.discriminator;
                    }
                    obj6 = { username: combined };
                    intl = closure_0(c3[16]).intl;
                    intl2 = closure_0(c3[16]).intl;
                    c3 = 1;
                    c4 = 1;
                    const obj7 = { value: _confirm(obj5), done: false };
                    return obj7;
                  }
                } else if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj8 = { value, done: true };
                  return obj8;
                } else {
                  if (value) {
                    const obj = tmp(c3[18]);
                    obj.hideActionSheet();
                    const obj2 = tmp4(c3[14]);
                    obj2.removeAccount(closure_0.id);
                  }
                  c4 = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp22) {
                c4 = 3;
                throw tmp22;
              }
            }
          });
          function handlePressRemove() {
            return closure_0(...arguments);
          }
          cResult[5] = handlePressRemove;
          tmp9 = handlePressRemove;
        } else {
          tmp9 = cResult[5];
        }
        dependencyMap = tmp9;
        if (cResult[6] !== tmp6) {
          class C {
            constructor(arg0) {
              closure_0 = arg0;
              obj = multiAccountUsers(closure_3[18]);
              hideActionSheetResult = obj.hideActionSheet();
              tmp2 = closure_0(closure_3[19]);
              obj1 = { key: "RemoveAccount", options: null, hasIcons: false };
              obj5 = { label: null, onPress: null };
              showSimpleActionSheet = tmp2.showSimpleActionSheet;
              intl = closure_0(closure_3[16]).intl;
              obj5.label = intl.string(closure_0(closure_3[16]).t["DSN+hw"]);
              obj5.onPress = function onPress() {
                return closure_2(closure_0);
              };
              items = [,];
              items[0] = obj5;
              obj6 = { label: null, onPress: null, isDestructive: true };
              intl2 = closure_0(closure_3[16]).intl;
              obj6.label = intl2.string(closure_0(closure_3[16]).t.lSLMaU);
              obj6.onPress = function onPress() {
                return closure_3(closure_0);
              };
              items[1] = obj6;
              obj1.options = items;
              result = showSimpleActionSheet(obj1);
              return;
            }
          }
          cResult[6] = tmp6;
          cResult[7] = C;
          tmp11 = C;
        } else {
          class C {
            constructor(arg0) {
              closure_0 = arg0;
              obj = multiAccountUsers(closure_3[18]);
              hideActionSheetResult = obj.hideActionSheet();
              tmp2 = closure_0(closure_3[19]);
              obj1 = { key: "RemoveAccount", options: null, hasIcons: false };
              obj5 = { label: null, onPress: null };
              showSimpleActionSheet = tmp2.showSimpleActionSheet;
              intl = closure_0(closure_3[16]).intl;
              obj5.label = intl.string(closure_0(closure_3[16]).t["DSN+hw"]);
              obj5.onPress = function onPress() {
                return closure_2(closure_0);
              };
              items = [,];
              items[0] = obj5;
              obj6 = { label: null, onPress: null, isDestructive: true };
              intl2 = closure_0(closure_3[16]).intl;
              obj6.label = intl2.string(closure_0(closure_3[16]).t.lSLMaU);
              obj6.onPress = function onPress() {
                return closure_3(closure_0);
              };
              items[1] = obj6;
              obj1.options = items;
              result = showSimpleActionSheet(obj1);
              return;
            }
          }
        }
        C = tmp11;
        const _Symbol2 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          class C {
            constructor(arg0) {
              closure_0 = arg0;
              obj = multiAccountUsers(closure_3[18]);
              hideActionSheetResult = obj.hideActionSheet();
              tmp2 = closure_0(closure_3[19]);
              obj1 = { key: "RemoveAccount", options: null, hasIcons: false };
              obj5 = { label: null, onPress: null };
              showSimpleActionSheet = tmp2.showSimpleActionSheet;
              intl = closure_0(closure_3[16]).intl;
              obj5.label = intl.string(closure_0(closure_3[16]).t["DSN+hw"]);
              obj5.onPress = function onPress() {
                return closure_2(closure_0);
              };
              items = [,];
              items[0] = obj5;
              obj6 = { label: null, onPress: null, isDestructive: true };
              intl2 = closure_0(closure_3[16]).intl;
              obj6.label = intl2.string(closure_0(closure_3[16]).t.lSLMaU);
              obj6.onPress = function onPress() {
                return closure_3(closure_0);
              };
              items[1] = obj6;
              obj1.options = items;
              result = showSimpleActionSheet(obj1);
              return;
            }
          }
          cResult[8] = obj4.string(tmp(1126).t.bVbB63);
          const stringResult = obj4.string(tmp(1126).t.bVbB63);
        } else {
          class C {
            constructor(arg0) {
              closure_0 = arg0;
              obj = multiAccountUsers(closure_3[18]);
              hideActionSheetResult = obj.hideActionSheet();
              tmp2 = closure_0(closure_3[19]);
              obj1 = { key: "RemoveAccount", options: null, hasIcons: false };
              obj5 = { label: null, onPress: null };
              showSimpleActionSheet = tmp2.showSimpleActionSheet;
              intl = closure_0(closure_3[16]).intl;
              obj5.label = intl.string(closure_0(closure_3[16]).t["DSN+hw"]);
              obj5.onPress = function onPress() {
                return closure_2(closure_0);
              };
              items = [,];
              items[0] = obj5;
              obj6 = { label: null, onPress: null, isDestructive: true };
              intl2 = closure_0(closure_3[16]).intl;
              obj6.label = intl2.string(closure_0(closure_3[16]).t.lSLMaU);
              obj6.onPress = function onPress() {
                return closure_3(closure_0);
              };
              items[1] = obj6;
              obj1.options = items;
              result = showSimpleActionSheet(obj1);
              return;
            }
          }
        }
        const _Symbol3 = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          class C {
            constructor(arg0) {
              closure_0 = arg0;
              obj = multiAccountUsers(closure_3[18]);
              hideActionSheetResult = obj.hideActionSheet();
              tmp2 = closure_0(closure_3[19]);
              obj1 = { key: "RemoveAccount", options: null, hasIcons: false };
              obj5 = { label: null, onPress: null };
              showSimpleActionSheet = tmp2.showSimpleActionSheet;
              intl = closure_0(closure_3[16]).intl;
              obj5.label = intl.string(closure_0(closure_3[16]).t["DSN+hw"]);
              obj5.onPress = function onPress() {
                return closure_2(closure_0);
              };
              items = [,];
              items[0] = obj5;
              obj6 = { label: null, onPress: null, isDestructive: true };
              intl2 = closure_0(closure_3[16]).intl;
              obj6.label = intl2.string(closure_0(closure_3[16]).t.lSLMaU);
              obj6.onPress = function onPress() {
                return closure_3(closure_0);
              };
              items[1] = obj6;
              obj1.options = items;
              result = showSimpleActionSheet(obj1);
              return;
            }
          }
          let obj5 = { variant: "text-sm/medium", color: "text-default", children: intl.string(tmp(1126).t["0M5fN7"]) };
          const Text = tmp(4886).Text;
          intl = tmp(1126).intl;
          const tmp15 = closure_11(Text, obj5);
          cResult[9] = tmp15;
        } else {
          class C {
            constructor(arg0) {
              closure_0 = arg0;
              obj = multiAccountUsers(closure_3[18]);
              hideActionSheetResult = obj.hideActionSheet();
              tmp2 = closure_0(closure_3[19]);
              obj1 = { key: "RemoveAccount", options: null, hasIcons: false };
              obj5 = { label: null, onPress: null };
              showSimpleActionSheet = tmp2.showSimpleActionSheet;
              intl = closure_0(closure_3[16]).intl;
              obj5.label = intl.string(closure_0(closure_3[16]).t["DSN+hw"]);
              obj5.onPress = function onPress() {
                return closure_2(closure_0);
              };
              items = [,];
              items[0] = obj5;
              obj6 = { label: null, onPress: null, isDestructive: true };
              intl2 = closure_0(closure_3[16]).intl;
              obj6.label = intl2.string(closure_0(closure_3[16]).t.lSLMaU);
              obj6.onPress = function onPress() {
                return closure_3(closure_0);
              };
              items[1] = obj6;
              obj1.options = items;
              result = showSimpleActionSheet(obj1);
              return;
            }
          }
        }
        if (cResult[10] === tmp11) {
          class C {
            constructor(arg0) {
              closure_0 = arg0;
              obj = multiAccountUsers(closure_3[18]);
              hideActionSheetResult = obj.hideActionSheet();
              tmp2 = closure_0(closure_3[19]);
              obj1 = { key: "RemoveAccount", options: null, hasIcons: false };
              obj5 = { label: null, onPress: null };
              showSimpleActionSheet = tmp2.showSimpleActionSheet;
              intl = closure_0(closure_3[16]).intl;
              obj5.label = intl.string(closure_0(closure_3[16]).t["DSN+hw"]);
              obj5.onPress = function onPress() {
                return closure_2(closure_0);
              };
              items = [,];
              items[0] = obj5;
              obj6 = { label: null, onPress: null, isDestructive: true };
              intl2 = closure_0(closure_3[16]).intl;
              obj6.label = intl2.string(closure_0(closure_3[16]).t.lSLMaU);
              obj6.onPress = function onPress() {
                return closure_3(closure_0);
              };
              items[1] = obj6;
              obj1.options = items;
              result = showSimpleActionSheet(obj1);
              return;
            }
          }
        }
        if (cResult[14] === tmp11) {
          class C {
            constructor(arg0) {
              closure_0 = arg0;
              obj = multiAccountUsers(closure_3[18]);
              hideActionSheetResult = obj.hideActionSheet();
              tmp2 = closure_0(closure_3[19]);
              obj1 = { key: "RemoveAccount", options: null, hasIcons: false };
              obj5 = { label: null, onPress: null };
              showSimpleActionSheet = tmp2.showSimpleActionSheet;
              intl = closure_0(closure_3[16]).intl;
              obj5.label = intl.string(closure_0(closure_3[16]).t["DSN+hw"]);
              obj5.onPress = function onPress() {
                return closure_2(closure_0);
              };
              items = [,];
              items[0] = obj5;
              obj6 = { label: null, onPress: null, isDestructive: true };
              intl2 = closure_0(closure_3[16]).intl;
              obj6.label = intl2.string(closure_0(closure_3[16]).t.lSLMaU);
              obj6.onPress = function onPress() {
                return closure_3(closure_0);
              };
              items[1] = obj6;
              obj1.options = items;
              result = showSimpleActionSheet(obj1);
              return;
            }
          }
          const mapped = multiAccountUsers.map(R);
          cResult[10] = tmp11;
          cResult[11] = tmp6;
          cResult[12] = multiAccountUsers;
          cResult[13] = mapped;
        }
        class R {
          constructor(arg0) {
            closure_0 = arg0;
            obj = {
              user: arg0,
              onPressUser() {
                return closure_2(user);
              },
              trailing: null,
            };
            tmp = multiAccountUsers(closure_3[21]);
            obj1 = {
              accessibilityRole: "button",
              onPress() {
                return C(user);
              },
              children: null,
            };
            PressableOpacity = closure_0(closure_3[22]).PressableOpacity;
            obj4 = { size: null, source: null, disableColor: true };
            Icon = closure_0(closure_3[17]).Icon;
            obj4.size = closure_0(closure_3[17]).Icon.Sizes.SMALL_20;
            obj4.source = multiAccountUsers(closure_3[23]);
            obj1.children = closure_1_11(Icon, obj4);
            obj.trailing = closure_1_11(PressableOpacity, obj1);
            return closure_1_11(tmp, obj, arg0.id);
          }
        }
        cResult[14] = tmp11;
        cResult[15] = tmp6;
        cResult[16] = R;
      }
      class I {
        constructor() {
          let intl;
          let intl2;
          let obj3;
          if (multiAccountUsers.length >= metroImportDefault) {
            const obj2 = {
              title: intl.string(intl5.t.w7wfXi),
              body: intl2.formatToPlainString(intl5.t.WOyelG, obj3),
              isDismissable: true,
            };
            const show = actions_AlertActionCreatorsDefault.show;
            actions_AlertActionCreatorsDefault;
            intl = intl5.intl;
            intl2 = intl5.intl;
            obj3 = { maxNumAccounts: tmp };
            show(obj2);
          } else {
            navigation.push(constants2.LOGIN);
            const obj = AnalyticsUtilsDefault;
            obj.track(constants.LOGIN_VIEWED, { source: "choose_account_add_account" });
          }
        }
      }
      cResult[2] = multiAccountUsers.length;
      cResult[3] = navigation;
      cResult[4] = I;
    }
  : () => {
      let Icon;
      let Text;
      let intl;
      let intl2;
      let intl3;
      let items;
      let obj4;
      let obj5;
      let obj7;
      let obj = function _handlePressRemove2() {
        obj = _asyncToGenerator(async (arg0) => {
          let closure_1;
          let closure_2;
          let formatToPlainString;
          let intl;
          let intl2;
          let intl3;
          let obj6;
          let phEQmS;
          closure_0 = arg0;
          if (c4 === 2) {
            c4 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c4 = 2;
              if (0 === c3) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  let combined;
                  const obj5 = {
                    title: intl3.string(closure_0(c3[16]).t.n0Fbg6),
                    body: formatToPlainString(phEQmS, obj6),
                    confirmText: intl.string(closure_0(c3[16]).t.N86XcP),
                    confirmColor: closure_0(c3[17]).ButtonColors.RED,
                    cancelText: intl2.string(closure_0(c3[16]).t["ETE/oC"]),
                    isDismissable: true,
                  };
                  const _confirm = tmp(c3[15]).confirm;
                  const tmp29 = tmp(c3[15]);
                  intl3 = closure_0(c3[16]).intl;
                  const intl4 = closure_0(c3[16]).intl;
                  formatToPlainString = intl4.formatToPlainString;
                  phEQmS = closure_0(c3[16]).t.phEQmS;
                  if ("0" === closure_0.discriminator) {
                    const _HermesInternal2 = HermesInternal;
                    combined = "" + closure_0.username;
                  } else {
                    const _HermesInternal = HermesInternal;
                    combined = "" + closure_0.username + "#" + closure_0.discriminator;
                  }
                  obj6 = { username: combined };
                  intl = closure_0(c3[16]).intl;
                  intl2 = closure_0(c3[16]).intl;
                  c3 = 1;
                  c4 = 1;
                  const obj7 = { value: _confirm(obj5), done: false };
                  return obj7;
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj8 = { value, done: true };
                return obj8;
              } else {
                if (value) {
                  obj = tmp(c3[18]);
                  obj.hideActionSheet();
                  const obj2 = tmp4(c3[14]);
                  obj2.removeAccount(closure_0.id);
                }
                c4 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp22) {
              c4 = 3;
              throw tmp22;
            }
          }
        });
        return obj(...arguments);
      };
      let tmp = closure_13();
      obj = require("useNavigation");
      _require = obj.useNavigation();
      let obj2 = require("useMultiAccount");
      const multiAccountUsers = obj2.useMultiAccountUsers().multiAccountUsers;
      let obj3 = {
        headerText: intl.string(require("intl").t.bVbB63),
        subHeader: closure_11(Text, obj4),
        backgroundImageSource: multiAccountUsers(13677),
        backgroundImageCover: true,
        contentStyle: tmp.container,
        children: closure_12(View, obj5),
      };
      const tmp2 = multiAccountUsers(6460);
      intl = require("intl").intl;
      obj4 = { variant: "text-sm/medium", color: "text-default", children: intl2.string(require("intl").t["0M5fN7"]) };
      Text = require("Text/Text").Text;
      intl2 = require("intl").intl;
      obj5 = { style: tmp.mainCard, children: items };
      items = [
        multiAccountUsers.map((user) => {
          let Icon;
          let PressableOpacity;
          let constants4;
          let obj2;
          let obj3;
          obj = {
            user,
            onPressUser() {
              if (user.tokenStatus === constants.INVALID) {
                user.push(constants4.LOGIN);
                const obj2 = multiAccountUsers(closure_1_3[13]);
                obj2.track(constants3.LOGIN_VIEWED, { source: "choose_account_user_invalid" });
              } else {
                obj = closure_1_2(closure_1_3[14]);
                obj.switchAccount(tmp.id, undefined, constants2.CHOOSE_ACCOUNT);
              }
              return tmp4;
            },
            trailing: closure_1_11(PressableOpacity, obj2),
          };
          const tmp = multiAccountUsers(dependencyMap[21]);
          obj2 = {
            accessibilityRole: "button",
            onPress() {
              let intl;
              let intl2;
              let items;
              obj = multiAccountUsers(closure_1_3[18]);
              obj.hideActionSheet();
              let obj2 = { key: "RemoveAccount", options: items, hasIcons: false };
              const obj3 = {
                label: intl.string(user(closure_1_3[16]).t["DSN+hw"]),
                onPress() {
                  if (tokenStatus.tokenStatus === constants.INVALID) {
                    user.push(constants4.LOGIN);
                    const obj2 = closure_1_1(closure_1_3[13]);
                    obj2.track(constants3.LOGIN_VIEWED, { source: "choose_account_user_invalid" });
                  } else {
                    obj = closure_1_2(closure_1_3[14]);
                    obj.switchAccount(tmp.id, undefined, constants2.CHOOSE_ACCOUNT);
                  }
                  return tmp4;
                },
              };
              const showSimpleActionSheet = user(closure_1_3[19]).showSimpleActionSheet;
              user(closure_1_3[19]);
              intl = user(closure_1_3[16]).intl;
              items = [obj3];
              const obj4 = {
                label: intl2.string(user(closure_1_3[16]).t.lSLMaU),
                onPress() {
                  function handlePressRemove(tokenStatus) {
                    return closure_1_2(...arguments);
                  }
                  return handlePressRemove(tokenStatus);
                },
                isDestructive: true,
              };
              intl2 = user(closure_1_3[16]).intl;
              items[1] = obj4;
              const result = showSimpleActionSheet(obj2);
            },
            children: closure_1_11(Icon, obj3),
          };
          PressableOpacity = user(dependencyMap[22]).PressableOpacity;
          obj3 = {
            size: user(dependencyMap[17]).Icon.Sizes.SMALL_20,
            source: multiAccountUsers(dependencyMap[23]),
            disableColor: true,
          };
          Icon = user(dependencyMap[17]).Icon;
          return closure_1_11(tmp, obj, user.id);
        }),
      ];
      let obj6 = {
        leading: closure_11(Icon, obj7),
        label: intl3.string(require("intl").t.bPP34Q),
        labelStyle: tmp.addAccountLabel,
        onPress: function handlePressAddAccount() {
          let intl;
          let intl2;
          let obj3;
          if (multiAccountUsers.length >= metroImportDefault) {
            const obj2 = {
              title: intl.string(intl5.t.w7wfXi),
              body: intl2.formatToPlainString(intl5.t.WOyelG, obj3),
              isDismissable: true,
            };
            const show = actions_AlertActionCreatorsDefault.show;
            actions_AlertActionCreatorsDefault;
            intl = intl5.intl;
            intl2 = intl5.intl;
            obj3 = { maxNumAccounts: tmp };
            show(obj2);
          } else {
            closure_0.push(constants2.LOGIN);
            obj = AnalyticsUtilsDefault;
            obj.track(constants.LOGIN_VIEWED, { source: "choose_account_add_account" });
          }
        },
      };
      const FormRow = require("Form").FormRow;
      obj7 = {
        themedColor: multiAccountUsers(587).colors.TEXT_LINK,
        size: require("native").Icon.Sizes.SMALL_20,
        source: multiAccountUsers(15874),
      };
      Icon = require("Form").FormRow.Icon;
      intl3 = require("intl").intl;
      items[1] = closure_11(FormRow, obj6);
      return closure_11(tmp2, obj3);
    };
let result = size.fileFinishedImporting("modules/multi_account/native/ChooseAccount.tsx");

export default tmp7;
