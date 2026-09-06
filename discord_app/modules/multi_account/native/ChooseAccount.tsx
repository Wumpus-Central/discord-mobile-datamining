// discord_app/modules/multi_account/native/ChooseAccount.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import actions_AlertActionCreatorsDefault from "../../../actions/native/AlertActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const MultiAccountTokenStatus = fn(12413).MultiAccountTokenStatus;
let Constants = fn(12414);
({ MAX_ACCOUNTS: closure_7, MultiAccountSwitchLocation: closure_8 } = Constants);
Constants = fn(1074);
({ AnalyticEvents: closure_9, AuthStates: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
fn(4560);
let createStyles = { container: null, mainCard: null, addAccountLabel: null };
createStyles = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderRadius: nativeDefault.radii.sm,
  paddingTop: nativeDefault.space.PX_16,
  margin: nativeDefault.space.PX_16,
};
createStyles.container = createStyles;
createStyles.mainCard = {
  marginVertical: nativeDefault.space.PX_16,
  borderRadius: nativeDefault.radii.sm,
  flexDirection: "column",
  alignItems: "stretch",
  alignSelf: "stretch",
  display: "flex",
};
let obj1 = {
  marginVertical: nativeDefault.space.PX_16,
  borderRadius: nativeDefault.radii.sm,
  flexDirection: "column",
  alignItems: "stretch",
  alignSelf: "stretch",
  display: "flex",
};
createStyles.addAccountLabel = { color: nativeDefault.colors.TEXT_LINK };
let closure_13 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/multi_account/native/ChooseAccount.tsx");

export default function ChooseAccount() {
  closure_2 = async function _handlePressRemove(arg0, value) {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
          } else {
            let string = closure_0;
            closure_129_0 = closure_0;
            let obj1 = {
              title: null,
              body: null,
              confirmText: null,
              confirmColor: null,
              cancelText: null,
              isDismissable: true,
            };
            const intl3 = closure_0(1114).intl;
            obj1.title = intl3.string(closure_0(1114).t.n0Fbg6);
            const intl4 = closure_0(1114).intl;
            let intl = intl4.formatToPlainString;
            let intl2 = closure_0(1114).t.phEQmS;
            if ("0" === closure_0.discriminator) {
              const _HermesInternal2 = HermesInternal;
              let combined = "" + string.username;
            } else {
              const _HermesInternal = HermesInternal;
              combined = "" + string.username + "#" + string.discriminator;
            }
            const obj2 = { username: combined };
            obj1.body = intl(intl2, obj2);
            intl = tmp30(1114).intl;
            obj1.confirmText = intl.string(closure_0(1114).t.N86XcP);
            obj1.confirmColor = closure_0(1178).ButtonColors.RED;
            intl2 = tmp30(1114).intl;
            string = intl2.string;
            obj1.cancelText = string(closure_0(1114).t["ETE/oC"]);
            obj1 = tmp2(4905).confirm(obj1);
            dependencyMap = 1;
            c4 = 1;
            const obj8 = tmp2(4905);
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          if (value) {
            obj = tmp2(4527);
            obj.hideActionSheet();
            obj1 = tmp5(12417);
            obj1.removeAccount(closure_129_0.id);
          }
          c4 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp23) {
        c4 = tmp;
        throw tmp23;
      }
    }
  };
  const tmp = closure_13();
  let obj = require("useNavigation");
  _require = obj.useNavigation();
  let obj1 = require("useMultiAccount");
  const multiAccountUsers = obj1.useMultiAccountUsers().multiAccountUsers;
  obj = {
    headerText: null,
    subHeader: null,
    backgroundImageSource: null,
    backgroundImageCover: true,
    contentStyle: null,
    children: null,
  };
  let intl = require("util").intl;
  obj.headerText = intl.string(require("util").t.bVbB63);
  obj = { variant: "text-sm/medium", color: "text-default", children: null };
  let intl2 = require("util").intl;
  obj.children = intl2.string(require("util").t["0M5fN7"]);
  obj.subHeader = closure_11(require("Text/Text").Text, obj);
  obj.backgroundImageSource = multiAccountUsers(13864);
  obj.contentStyle = tmp.container;
  obj1 = { style: tmp.mainCard, children: null };
  let items = [
    multiAccountUsers.map((user) => {
      let obj = {
        user,
        onPressUser() {
          if (user.tokenStatus === constants.INVALID) {
            user.push(constants4.LOGIN);
            multiAccountUsers(1242).track(constants3.LOGIN_VIEWED, { source: "choose_account_user_invalid" });
            const obj2 = multiAccountUsers(1242);
          } else {
            closure_1_2(12417).switchAccount(tmp.id, undefined, constants2.CHOOSE_ACCOUNT);
            const obj = closure_1_2(12417);
          }
          return tmp4;
        },
        trailing: null,
      };
      obj = {
        accessibilityRole: "button",
        onPress() {
          let obj = multiAccountUsers(4527);
          obj.hideActionSheet();
          user(7195);
          obj = { key: "RemoveAccount", options: null, hasIcons: false };
          obj = { label: null, onPress: null };
          const intl = user(1114).intl;
          obj.label = intl.string(user(1114).t["DSN+hw"]);
          obj.onPress = function onPress() {
            if (closure_0.tokenStatus === constants.INVALID) {
              closure_0.push(constants4.LOGIN);
              closure_1_1(1242).track(constants3.LOGIN_VIEWED, { source: "choose_account_user_invalid" });
              const obj2 = closure_1_1(1242);
            } else {
              closure_1_2(12417).switchAccount(tmp.id, undefined, constants2.CHOOSE_ACCOUNT);
              const obj = closure_1_2(12417);
            }
            return tmp4;
          };
          const items = [obj];
          const obj1 = { label: null, onPress: null, isDestructive: true };
          const intl2 = user(1114).intl;
          obj1.label = intl2.string(user(1114).t.lSLMaU);
          obj1.onPress = function onPress() {
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
          items[1] = obj1;
          obj.options = items;
          const result = obj1.showSimpleActionSheet(obj);
        },
        children: null,
      };
      obj = { size: user(1178).Icon.Sizes.SMALL_20, source: multiAccountUsers(9800), disableColor: true };
      obj.children = closure_1_11(user(1178).Icon, obj);
      obj.trailing = closure_1_11(user(5123).PressableOpacity, obj);
      return closure_1_11(multiAccountUsers(15952), obj, user.id);
    }),
  ];
  let obj2 = { leading: null, label: null, labelStyle: null, onPress: null };
  const tmp2 = multiAccountUsers(6972);
  obj2.leading = closure_11(require("Form").FormRow.Icon, {
    themedColor: multiAccountUsers(576).colors.TEXT_LINK,
    size: require("native").Icon.Sizes.SMALL_20,
    source: multiAccountUsers(15953),
  });
  let intl3 = require("util").intl;
  obj2.label = intl3.string(require("util").t.bPP34Q);
  obj2.labelStyle = tmp.addAccountLabel;
  obj2.onPress = function handlePressAddAccount() {
    if (multiAccountUsers.length >= React5) {
      let obj = { title: null, body: null, isDismissable: true };
      const intl = util.intl;
      obj.title = intl.string(util.t.w7wfXi);
      const intl2 = util.intl;
      obj = { maxNumAccounts: tmp };
      obj.body = intl2.formatToPlainString(util.t.WOyelG, obj);
      actions_AlertActionCreatorsDefault.show(obj);
    } else {
      closure_0.push(constants2.LOGIN);
      obj = AnalyticsUtilsDefault;
      obj.track(constants.LOGIN_VIEWED, { source: "choose_account_add_account" });
    }
  };
  items[1] = closure_11(require("Form").FormRow, obj2);
  obj1.children = items;
  obj.children = closure_12(View, obj1);
  return closure_11(tmp2, obj);
}
