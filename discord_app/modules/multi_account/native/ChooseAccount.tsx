// === Module 17980: ChooseAccount ===

// Module 17980 (ChooseAccount)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5959 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const MultiAccountTokenStatus = fn(13962).MultiAccountTokenStatus;
let Constants = fn(13963);
({ MAX_ACCOUNTS: closure_7, MultiAccountSwitchLocation: closure_8 } = Constants);
Constants = fn(1072);
({ AnalyticEvents: closure_9, AuthStates: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.sm, paddingTop: nativeDefault.space.PX_16, margin: nativeDefault.space.PX_16 }, mainCard: null, addAccountLabel: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.sm, paddingTop: nativeDefault.space.PX_16, margin: nativeDefault.space.PX_16 };
obj2.mainCard = { marginVertical: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.sm, flexDirection: "column", alignItems: "stretch", alignSelf: "stretch", display: "flex" };
let obj4 = { marginVertical: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.sm, flexDirection: "column", alignItems: "stretch", alignSelf: "stretch", display: "flex" };
obj2.addAccountLabel = { color: nativeDefault.colors.TEXT_LINK };
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/multi_account/native/ChooseAccount.tsx");

export default function ChooseAccount() {
  closure_2 = async function _handlePressRemove(arg0) {
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
            const intl3 = closure_0(1113).intl;
            obj5.title = intl3.string(closure_0(1113).t.n0Fbg6);
            const intl4 = closure_0(1113).intl;
            let intl = intl4.formatToPlainString;
            let intl2 = closure_0(1113).t.phEQmS;
            if ("0" === closure_0.discriminator) {
              const _HermesInternal2 = HermesInternal;
              let combined = "" + string.username;
            } else {
              const _HermesInternal = HermesInternal;
              combined = "" + string.username + "#" + string.discriminator;
            }
            const obj6 = { username: combined };
            obj5.body = intl(intl2, obj6);
            intl = closure_0(1113).intl;
            obj5.confirmText = intl.string(closure_0(1113).t.N86XcP);
            obj5.confirmColor = closure_0(1187).ButtonColors.RED;
            intl2 = closure_0(1113).intl;
            string = intl2.string;
            obj5.cancelText = string(closure_0(1113).t["ETE/oC"]);
            obj5 = tmp2(5959).confirm(obj5);
            dependencyMap = 1;
            c4 = 1;
            const obj8 = tmp2(5959);
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
            tmp2(5258).hideActionSheet();
            const obj = tmp2(5258);
            tmp5(13966).removeAccount(closure_129_0.id);
            const obj2 = tmp5(13966);
          }
          c4 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
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
  obj3.backgroundImageSource = multiAccountUsers(15683);
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
            closure_1_2(13966).switchAccount(tmp.id, undefined, constants2.CHOOSE_ACCOUNT);
            const obj = closure_1_2(13966);
          }
          return tmp4;
        },
        trailing: null
      };
      let obj2 = {
        accessibilityRole: "button",
        onPress() {
          multiAccountUsers(5258).hideActionSheet();
          let obj = multiAccountUsers(5258);
          const obj3 = { key: "RemoveAccount", options: null, hasIcons: false };
          const obj4 = { label: null, onPress: null };
          const intl = user(1113).intl;
          obj4.label = intl.string(user(1113).t["DSN+hw"]);
          obj4.onPress = function onPress() {
            if (closure_0.tokenStatus === constants.INVALID) {
              closure_0.push(constants4.LOGIN);
              closure_1_1(1252).track(constants3.LOGIN_VIEWED, { source: "choose_account_user_invalid" });
              const obj2 = closure_1_1(1252);
            } else {
              closure_1_2(13966).switchAccount(tmp.id, undefined, constants2.CHOOSE_ACCOUNT);
              const obj = closure_1_2(13966);
            }
            return tmp4;
          };
          const items = [obj4, ];
          const obj5 = { label: null, onPress: null, isDestructive: true };
          const intl2 = user(1113).intl;
          obj5.label = intl2.string(user(1113).t.lSLMaU);
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
          const result = user(7363).showSimpleActionSheet(obj3);
        },
        children: null
      };
      const tmp = multiAccountUsers(17982);
      obj2.children = closure_1_11(user(1187).Icon, { size: user(1187).Icon.Sizes.SMALL_20, source: multiAccountUsers(9100), disableColor: true });
      obj.trailing = closure_1_11(user(6980).PressableOpacity, obj2);
      return closure_1_11(tmp, obj, user.id);
    }),

  ];
  let obj6 = { leading: null, label: null, labelStyle: null, onPress: null };
  const tmp2 = multiAccountUsers(7139);
  obj6.leading = closure_11(require("Form").FormRow.Icon, { themedColor: multiAccountUsers(575).colors.TEXT_LINK, size: require("native").Icon.Sizes.SMALL_20, source: multiAccountUsers(17983) });
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
      closure_0.push(constants2.LOGIN);
      AnalyticsUtilsDefault.track(constants.LOGIN_VIEWED, { source: "choose_account_add_account" });
    }
  };
  items[1] = closure_11(require("Form").FormRow, obj6);
  obj5.children = items;
  obj3.children = closure_12(View, obj5);
  return closure_11(tmp2, obj3);
};