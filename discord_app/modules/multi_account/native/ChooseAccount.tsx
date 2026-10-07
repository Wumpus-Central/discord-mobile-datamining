// === Module 15910: ChooseAccount ===

// Module 15910 (ChooseAccount)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5715 */;
import MultiAccountActionCreatorsAll from "MultiAccountActionCreators" /* 12074 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const MultiAccountTokenStatus = fn(12071).MultiAccountTokenStatus;
let Constants = fn(12072);
({ MAX_ACCOUNTS: closure_7, MultiAccountSwitchLocation: closure_8 } = Constants);
Constants = fn(1085);
({ AnalyticEvents: closure_9, AuthStates: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.sm, paddingTop: nativeDefault.space.PX_16, margin: nativeDefault.space.PX_16 }, mainCard: null, addAccountLabel: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.sm, paddingTop: nativeDefault.space.PX_16, margin: nativeDefault.space.PX_16 };
obj2.mainCard = { marginVertical: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.sm, flexDirection: "column", alignItems: "stretch", alignSelf: "stretch", display: "flex" };
let obj4 = { marginVertical: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.sm, flexDirection: "column", alignItems: "stretch", alignSelf: "stretch", display: "flex" };
obj2.addAccountLabel = { color: nativeDefault.colors.TEXT_LINK };
let closure_13 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { color: nativeDefault.colors.TEXT_LINK };
const size = fn(2);
let result = size.fileFinishedImporting("modules/multi_account/native/ChooseAccount.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = navigation(576).c(29);
  closure_13();
  let obj = navigation(576);
  navigation = navigation(1490).useNavigation();
  let obj2 = navigation(1490);
  const multiAccountUsers = navigation(15911).useMultiAccountUsers().multiAccountUsers;
  if (cResult[0] !== navigation) {
    const fn = function s(tokenStatus) {
      if (tokenStatus.tokenStatus === MultiAccountTokenStatus.INVALID) {
        navigation.push(constants3.LOGIN);
        AnalyticsUtilsDefault.track(constants2.LOGIN_VIEWED, { source: "choose_account_user_invalid" });
      } else {
        MultiAccountActionCreatorsAll.switchAccount(tokenStatus.id, undefined, constants.CHOOSE_ACCOUNT);
      }
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  closure_2 = tmp6;
  if (cResult[2] === multiAccountUsers.length) {
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      closure_129_0 = asyncGeneratorStep(async (arg0) => {
        if (c4 === 2) {
          c4 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
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
            if (0 === dependencyMap) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                let string = navigation;
                closure_129_0 = navigation;
                let obj5 = { title: null, body: null, confirmText: null, confirmColor: null, cancelText: null, isDismissable: true };
                const intl3 = navigation(1126).intl;
                obj5.title = intl3.string(navigation(1126).t.n0Fbg6);
                const intl4 = navigation(1126).intl;
                let intl = intl4.formatToPlainString;
                let intl2 = navigation(1126).t.phEQmS;
                if ("0" === navigation.discriminator) {
                  const _HermesInternal2 = HermesInternal;
                  let combined = "" + string.username;
                } else {
                  const _HermesInternal = HermesInternal;
                  combined = "" + string.username + "#" + string.discriminator;
                }
                const obj6 = { username: combined };
                obj5.body = intl(intl2, obj6);
                intl = navigation(1126).intl;
                obj5.confirmText = intl.string(navigation(1126).t.N86XcP);
                obj5.confirmColor = navigation(1188).ButtonColors.RED;
                intl2 = navigation(1126).intl;
                string = intl2.string;
                obj5.cancelText = string(navigation(1126).t["ETE/oC"]);
                obj5 = tmp2(5715).confirm(obj5);
                dependencyMap = 1;
                c4 = 1;
                const obj8 = tmp2(5715);
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              if (value) {
                tmp2(4860).hideActionSheet();
                const obj = tmp2(4860);
                tmp5(12074).removeAccount(closure_129_0.id);
                const obj2 = tmp5(12074);
              }
              c4 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp23) {
            c4 = tmp;
            throw tmp23;
          }
        }
      });
      function handlePressRemove() {
        const self = this;
        const apply = navigation.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      cResult[5] = handlePressRemove;
      let tmp9 = handlePressRemove;
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
          obj2 = closure_0(closure_3[19]);
          obj1 = { key: "RemoveAccount", options: null, hasIcons: false };
          obj6 = { label: null, onPress: null };
          intl = closure_0(closure_3[16]).intl;
          obj6.label = intl.string(closure_0(closure_3[16]).t["DSN+hw"]);
          obj6.onPress = function onPress() {
            return closure_2(closure_0);
          };
          items = [, ];
          items[0] = obj6;
          obj7 = { label: null, onPress: null, isDestructive: true };
          intl2 = closure_0(closure_3[16]).intl;
          obj7.label = intl2.string(closure_0(closure_3[16]).t.lSLMaU);
          obj7.onPress = function onPress() {
            return closure_3(closure_0);
          };
          items[1] = obj7;
          obj1.options = items;
          result = obj2.showSimpleActionSheet(obj1);
          return;
        }
      }
      cResult[6] = tmp6;
      cResult[7] = C;
    } else {
      class C {
        constructor(arg0) {
          closure_0 = arg0;
          obj = multiAccountUsers(closure_3[18]);
          hideActionSheetResult = obj.hideActionSheet();
          obj2 = closure_0(closure_3[19]);
          obj1 = { key: "RemoveAccount", options: null, hasIcons: false };
          obj6 = { label: null, onPress: null };
          intl = closure_0(closure_3[16]).intl;
          obj6.label = intl.string(closure_0(closure_3[16]).t["DSN+hw"]);
          obj6.onPress = function onPress() {
            return closure_2(closure_0);
          };
          items = [, ];
          items[0] = obj6;
          obj7 = { label: null, onPress: null, isDestructive: true };
          intl2 = closure_0(closure_3[16]).intl;
          obj7.label = intl2.string(closure_0(closure_3[16]).t.lSLMaU);
          obj7.onPress = function onPress() {
            return closure_3(closure_0);
          };
          items[1] = obj7;
          obj1.options = items;
          result = obj2.showSimpleActionSheet(obj1);
          return;
        }
      }
    }
    asyncGeneratorStep = C;
    const _Symbol2 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor(arg0) {
          closure_0 = arg0;
          obj = multiAccountUsers(closure_3[18]);
          hideActionSheetResult = obj.hideActionSheet();
          obj2 = closure_0(closure_3[19]);
          obj1 = { key: "RemoveAccount", options: null, hasIcons: false };
          obj6 = { label: null, onPress: null };
          intl = closure_0(closure_3[16]).intl;
          obj6.label = intl.string(closure_0(closure_3[16]).t["DSN+hw"]);
          obj6.onPress = function onPress() {
            return closure_2(closure_0);
          };
          items = [, ];
          items[0] = obj6;
          obj7 = { label: null, onPress: null, isDestructive: true };
          intl2 = closure_0(closure_3[16]).intl;
          obj7.label = intl2.string(closure_0(closure_3[16]).t.lSLMaU);
          obj7.onPress = function onPress() {
            return closure_3(closure_0);
          };
          items[1] = obj7;
          obj1.options = items;
          result = obj2.showSimpleActionSheet(obj1);
          return;
        }
      }
      const stringResult = obj4.string(tmp(1126).t.bVbB63);
      cResult[8] = stringResult;
    } else {
      class C {
        constructor(arg0) {
          closure_0 = arg0;
          obj = multiAccountUsers(closure_3[18]);
          hideActionSheetResult = obj.hideActionSheet();
          obj2 = closure_0(closure_3[19]);
          obj1 = { key: "RemoveAccount", options: null, hasIcons: false };
          obj6 = { label: null, onPress: null };
          intl = closure_0(closure_3[16]).intl;
          obj6.label = intl.string(closure_0(closure_3[16]).t["DSN+hw"]);
          obj6.onPress = function onPress() {
            return closure_2(closure_0);
          };
          items = [, ];
          items[0] = obj6;
          obj7 = { label: null, onPress: null, isDestructive: true };
          intl2 = closure_0(closure_3[16]).intl;
          obj7.label = intl2.string(closure_0(closure_3[16]).t.lSLMaU);
          obj7.onPress = function onPress() {
            return closure_3(closure_0);
          };
          items[1] = obj7;
          obj1.options = items;
          result = obj2.showSimpleActionSheet(obj1);
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
          obj2 = closure_0(closure_3[19]);
          obj1 = { key: "RemoveAccount", options: null, hasIcons: false };
          obj6 = { label: null, onPress: null };
          intl = closure_0(closure_3[16]).intl;
          obj6.label = intl.string(closure_0(closure_3[16]).t["DSN+hw"]);
          obj6.onPress = function onPress() {
            return closure_2(closure_0);
          };
          items = [, ];
          items[0] = obj6;
          obj7 = { label: null, onPress: null, isDestructive: true };
          intl2 = closure_0(closure_3[16]).intl;
          obj7.label = intl2.string(closure_0(closure_3[16]).t.lSLMaU);
          obj7.onPress = function onPress() {
            return closure_3(closure_0);
          };
          items[1] = obj7;
          obj1.options = items;
          result = obj2.showSimpleActionSheet(obj1);
          return;
        }
      }
      let obj5 = { variant: "text-sm/medium", color: "text-default", children: null };
      let intl = tmp(1126).intl;
      obj5.children = intl.string(tmp(1126).t["0M5fN7"]);
      const tmp15 = closure_11(tmp(4892).Text, obj5);
      cResult[9] = tmp15;
    } else {
      class C {
        constructor(arg0) {
          closure_0 = arg0;
          obj = multiAccountUsers(closure_3[18]);
          hideActionSheetResult = obj.hideActionSheet();
          obj2 = closure_0(closure_3[19]);
          obj1 = { key: "RemoveAccount", options: null, hasIcons: false };
          obj6 = { label: null, onPress: null };
          intl = closure_0(closure_3[16]).intl;
          obj6.label = intl.string(closure_0(closure_3[16]).t["DSN+hw"]);
          obj6.onPress = function onPress() {
            return closure_2(closure_0);
          };
          items = [, ];
          items[0] = obj6;
          obj7 = { label: null, onPress: null, isDestructive: true };
          intl2 = closure_0(closure_3[16]).intl;
          obj7.label = intl2.string(closure_0(closure_3[16]).t.lSLMaU);
          obj7.onPress = function onPress() {
            return closure_3(closure_0);
          };
          items[1] = obj7;
          obj1.options = items;
          result = obj2.showSimpleActionSheet(obj1);
          return;
        }
      }
    }
    if (cResult[10] === C) {
      class C {
        constructor(arg0) {
          closure_0 = arg0;
          obj = multiAccountUsers(closure_3[18]);
          hideActionSheetResult = obj.hideActionSheet();
          obj2 = closure_0(closure_3[19]);
          obj1 = { key: "RemoveAccount", options: null, hasIcons: false };
          obj6 = { label: null, onPress: null };
          intl = closure_0(closure_3[16]).intl;
          obj6.label = intl.string(closure_0(closure_3[16]).t["DSN+hw"]);
          obj6.onPress = function onPress() {
            return closure_2(closure_0);
          };
          items = [, ];
          items[0] = obj6;
          obj7 = { label: null, onPress: null, isDestructive: true };
          intl2 = closure_0(closure_3[16]).intl;
          obj7.label = intl2.string(closure_0(closure_3[16]).t.lSLMaU);
          obj7.onPress = function onPress() {
            return closure_3(closure_0);
          };
          items[1] = obj7;
          obj1.options = items;
          result = obj2.showSimpleActionSheet(obj1);
          return;
        }
      }
    }
    if (cResult[14] === C) {
      class C {
        constructor(arg0) {
          closure_0 = arg0;
          obj = multiAccountUsers(closure_3[18]);
          hideActionSheetResult = obj.hideActionSheet();
          obj2 = closure_0(closure_3[19]);
          obj1 = { key: "RemoveAccount", options: null, hasIcons: false };
          obj6 = { label: null, onPress: null };
          intl = closure_0(closure_3[16]).intl;
          obj6.label = intl.string(closure_0(closure_3[16]).t["DSN+hw"]);
          obj6.onPress = function onPress() {
            return closure_2(closure_0);
          };
          items = [, ];
          items[0] = obj6;
          obj7 = { label: null, onPress: null, isDestructive: true };
          intl2 = closure_0(closure_3[16]).intl;
          obj7.label = intl2.string(closure_0(closure_3[16]).t.lSLMaU);
          obj7.onPress = function onPress() {
            return closure_3(closure_0);
          };
          items[1] = obj7;
          obj1.options = items;
          result = obj2.showSimpleActionSheet(obj1);
          return;
        }
      }
      const mapped = multiAccountUsers.map(R);
      cResult[10] = C;
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
                  return closure_2(closure_0);
                },
          trailing: null
        };
        tmp = multiAccountUsers(closure_3[21]);
        obj1 = {
          accessibilityRole: "button",
          onPress() {
                  return closure_4(closure_0);
                },
          children: null
        };
        obj4 = { size: closure_0(closure_3[17]).Icon.Sizes.SMALL_20, source: multiAccountUsers(closure_3[23]), disableColor: true };
        obj1.children = closure_1_11(closure_0(closure_3[17]).Icon, obj4);
        obj.trailing = closure_1_11(closure_0(closure_3[22]).PressableOpacity, obj1);
        return closure_1_11(tmp, obj, arg0.id);
      }
    }
    cResult[14] = C;
    cResult[15] = tmp6;
    cResult[16] = R;
  }
  class I {
    constructor() {
      if (multiAccountUsers.length >= MAX_ACCOUNTS) {
        tmp9 = closure_1;
        tmp10 = closure_3;
        obj2 = closure_1(closure_3[15]);
        obj1 = { title: null, body: null, isDismissable: true };
        tmp11 = closure_0;
        intl = closure_0(closure_3[16]).intl;
        obj1.title = intl.string(closure_0(closure_3[16]).t.w7wfXi);
        intl2 = closure_0(closure_3[16]).intl;
        obj5 = { maxNumAccounts: null };
        obj5.maxNumAccounts = tmp;
        obj1.body = intl2.formatToPlainString(closure_0(closure_3[16]).t.WOyelG, obj5);
        showResult = obj2.show(obj1);
      } else {
        tmp2 = closure_0;
        tmp3 = AuthStates;
        arr = closure_0.push(AuthStates.LOGIN);
        tmp5 = closure_1;
        tmp6 = closure_3;
        obj = closure_1(closure_3[13]);
        tmp7 = AnalyticEvents;
        trackResult = obj.track(AnalyticEvents.LOGIN_VIEWED, { source: "choose_account_add_account" });
      }
      return;
    }
  }
  cResult[2] = multiAccountUsers.length;
  cResult[3] = navigation;
  cResult[4] = I;
  let obj3 = navigation(15911);
}) : (() => {
  closure_2 = async function _handlePressRemove2(arg0) {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let string = closure_0;
            closure_129_0 = closure_0;
            let obj5 = { title: null, body: null, confirmText: null, confirmColor: null, cancelText: null, isDismissable: true };
            const intl3 = closure_0(1126).intl;
            obj5.title = intl3.string(closure_0(1126).t.n0Fbg6);
            const intl4 = closure_0(1126).intl;
            let intl = intl4.formatToPlainString;
            let intl2 = closure_0(1126).t.phEQmS;
            if ("0" === closure_0.discriminator) {
              const _HermesInternal2 = HermesInternal;
              let combined = "" + string.username;
            } else {
              const _HermesInternal = HermesInternal;
              combined = "" + string.username + "#" + string.discriminator;
            }
            const obj6 = { username: combined };
            obj5.body = intl(intl2, obj6);
            intl = closure_0(1126).intl;
            obj5.confirmText = intl.string(closure_0(1126).t.N86XcP);
            obj5.confirmColor = closure_0(1188).ButtonColors.RED;
            intl2 = closure_0(1126).intl;
            string = intl2.string;
            obj5.cancelText = string(closure_0(1126).t["ETE/oC"]);
            obj5 = tmp2(5715).confirm(obj5);
            dependencyMap = 1;
            c4 = 1;
            const obj8 = tmp2(5715);
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          if (value) {
            tmp2(4860).hideActionSheet();
            const obj = tmp2(4860);
            tmp5(12074).removeAccount(closure_129_0.id);
            const obj2 = tmp5(12074);
          }
          c4 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp23) {
        c4 = tmp;
        throw tmp23;
      }
    }
  };
  let tmp = closure_13();
  _require = require("useNavigation").useNavigation();
  let obj = require("useNavigation");
  const multiAccountUsers = require("useMultiAccount").useMultiAccountUsers().multiAccountUsers;
  let obj3 = { headerText: null, subHeader: null, backgroundImageSource: null, backgroundImageCover: true, contentStyle: null, children: null };
  let obj2 = require("useMultiAccount");
  let intl = require("util").intl;
  obj3.headerText = intl.string(require("util").t.bVbB63);
  let obj4 = { variant: "text-sm/medium", color: "text-default", children: null };
  let intl2 = require("util").intl;
  obj4.children = intl2.string(require("util").t["0M5fN7"]);
  obj3.subHeader = closure_11(require("Text/Text").Text, obj4);
  obj3.backgroundImageSource = multiAccountUsers(13693);
  obj3.contentStyle = tmp.container;
  let obj5 = { style: tmp.mainCard, children: null };
  let items = [
    multiAccountUsers.map((user) => {
      let obj = {
        user,
        onPressUser() {
          if (user.tokenStatus === constants.INVALID) {
            user.push(constants4.LOGIN);
            multiAccountUsers(1252).track(constants3.LOGIN_VIEWED, { source: "choose_account_user_invalid" });
            const obj2 = multiAccountUsers(1252);
          } else {
            closure_1_2(12074).switchAccount(tmp.id, undefined, constants2.CHOOSE_ACCOUNT);
            const obj = closure_1_2(12074);
          }
          return tmp4;
        },
        trailing: null
      };
      let obj2 = {
        accessibilityRole: "button",
        onPress() {
          multiAccountUsers(4860).hideActionSheet();
          let obj = multiAccountUsers(4860);
          const obj3 = { key: "RemoveAccount", options: null, hasIcons: false };
          const obj4 = { label: null, onPress: null };
          const intl = user(1126).intl;
          obj4.label = intl.string(user(1126).t["DSN+hw"]);
          obj4.onPress = function onPress() {
            if (closure_0.tokenStatus === constants.INVALID) {
              closure_0.push(constants4.LOGIN);
              closure_1_1(1252).track(constants3.LOGIN_VIEWED, { source: "choose_account_user_invalid" });
              const obj2 = closure_1_1(1252);
            } else {
              closure_1_2(12074).switchAccount(tmp.id, undefined, constants2.CHOOSE_ACCOUNT);
              const obj = closure_1_2(12074);
            }
            return tmp4;
          };
          const items = [obj4, ];
          const obj5 = { label: null, onPress: null, isDestructive: true };
          const intl2 = user(1126).intl;
          obj5.label = intl2.string(user(1126).t.lSLMaU);
          obj5.onPress = function onPress() {
            return (function handlePressRemove(arg0) {
              const self = this;
              const apply = closure_1_2.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })(closure_0);
          };
          items[1] = obj5;
          obj3.options = items;
          const result = user(6700).showSimpleActionSheet(obj3);
        },
        children: null
      };
      const tmp = multiAccountUsers(15912);
      obj2.children = closure_1_11(user(1188).Icon, { size: user(1188).Icon.Sizes.SMALL_20, source: multiAccountUsers(9325), disableColor: true });
      obj.trailing = closure_1_11(user(5916).PressableOpacity, obj2);
      return closure_1_11(tmp, obj, user.id);
    }),

  ];
  let obj6 = { leading: null, label: null, labelStyle: null, onPress: null };
  const tmp2 = multiAccountUsers(6467);
  obj6.leading = closure_11(require("Form").FormRow.Icon, { themedColor: multiAccountUsers(587).colors.TEXT_LINK, size: require("native").Icon.Sizes.SMALL_20, source: multiAccountUsers(15913) });
  let intl3 = require("util").intl;
  obj6.label = intl3.string(require("util").t.bPP34Q);
  obj6.labelStyle = tmp.addAccountLabel;
  obj6.onPress = function handlePressAddAccount() {
    if (multiAccountUsers.length >= React5) {
      const obj3 = { title: null, body: null, isDismissable: true };
      const intl = util.intl;
      obj3.title = intl.string(util.t.w7wfXi);
      const intl2 = util.intl;
      const obj4 = { maxNumAccounts: tmp };
      obj3.body = intl2.formatToPlainString(util.t.WOyelG, obj4);
      actions_AlertActionCreatorsDefault.show(obj3);
    } else {
      closure_0.push(constants3.LOGIN);
      AnalyticsUtilsDefault.track(constants2.LOGIN_VIEWED, { source: "choose_account_add_account" });
    }
  };
  items[1] = closure_11(require("Form").FormRow, obj6);
  obj5.children = items;
  obj3.children = closure_12(View, obj5);
  return closure_11(tmp2, obj3);
});