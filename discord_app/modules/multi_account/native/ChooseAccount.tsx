import closure_4 from "ME";
import "Text";
import { View } from "showSimpleActionSheet";
import { MultiAccountTokenStatus } from "initialize";
import MAX_ACCOUNTS from "MAX_ACCOUNTS";
import ME from "ME";
import jsxProd from "AccountStatusIcon";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let closure_12;
let error;
let metroImportAll;
let unpackModuleId;
const require = arg1;
({ MAX_ACCOUNTS: error, MultiAccountSwitchLocation: metroImportAll } = MAX_ACCOUNTS);
({ AnalyticEvents: c9, AuthStates: c10 } = ME);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
createCacheKey = { container: null, mainCard: null, addAccountLabel: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, borderRadius: require("Themes").radii.sm, paddingTop: require("Themes").space.PX_16, margin: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginVertical: require("Themes").space.PX_16, borderRadius: require("Themes").radii.sm, flexDirection: "column", alignItems: "stretch", alignSelf: "stretch", display: "flex" };
let obj1 = { marginVertical: require("Themes").space.PX_16, borderRadius: require("Themes").radii.sm, flexDirection: "column", alignItems: "stretch", alignSelf: "stretch", display: "flex" };
createCacheKey[2] = { color: require("Themes").colors.TEXT_LINK };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { color: require("Themes").colors.TEXT_LINK };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/multi_account/native/ChooseAccount.tsx");

export default function ChooseAccount() {
  function _handlePressRemove() {
    const self = this;
    const tmp = outer1_4((arg0) => {
      let closure_0 = arg0;
      let c3 = 0;
      let c4 = 0;
      return (function*(arg0) {
        if (c4 === 2) {
          c4 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
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
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let closure_2 = tmp5;
                let closure_1 = tmp2;
                let string = lib;
                let obj1 = { title: null, body: null, confirmText: null, confirmColor: null, cancelText: null, isDismissable: true };
                const intl3 = lib(1236).intl;
                obj1[0] = intl3.string(lib(1236).t.n0Fbg6);
                const intl4 = lib(1236).intl;
                let intl = intl4.formatToPlainString;
                let intl2 = lib(1236).t.phEQmS;
                if ("0" === lib.discriminator) {
                  const _HermesInternal2 = HermesInternal;
                  let combined = "" + string.username;
                } else {
                  const _HermesInternal = HermesInternal;
                  combined = "" + string.username + "#" + string.discriminator;
                }
                const obj2 = { username: null };
                obj2[0] = combined;
                obj1[1] = intl(intl2, obj2);
                intl = tmp31(1236).intl;
                obj1[2] = intl.string(lib(1236).t.N86XcP);
                obj1[3] = lib(1297).ButtonColors.RED;
                intl2 = tmp31(1236).intl;
                string = intl2.string;
                obj1[4] = string(lib(1236).t["ETE/oC"]);
                obj1 = outer1_1(4533).confirm(obj1);
                dependencyMap = 1;
                c4 = 1;
                const obj8 = outer1_1(4533);
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            } else {
              if (arg1) {
                obj = outer1_1(4161);
                obj.hideActionSheet();
                obj1 = outer1_2(11525);
                obj1.removeAccount(lib.id);
              }
              c4 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp23) {
            c4 = tmp;
            throw tmp23;
          }
        }
      })();
    });
    const _handlePressRemove = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = createCacheKey();
  let obj = _require(1480);
  _require = obj.useNavigation();
  let obj1 = _require(14882);
  const multiAccountUsers = obj1.useMultiAccountUsers().multiAccountUsers;
  obj = { headerText: null, subHeader: null, backgroundImageSource: null, backgroundImageCover: true, contentStyle: null, children: null };
  let intl = _require(1236).intl;
  obj[0] = intl.string(_require(1236).t.bVbB63);
  obj = { variant: "text-sm/medium", color: "text-default", children: null };
  let intl2 = _require(1236).intl;
  obj[2] = intl2.string(_require(1236).t["0M5fN7"]);
  obj[1] = callback(_require(4189).Text, obj);
  obj[2] = multiAccountUsers(13022);
  obj[4] = tmp.container;
  obj1 = { style: tmp.mainCard, children: null };
  let items = [
    multiAccountUsers.map((id) => {
      let obj = {
        user: id,
        onPressUser() {
          if (arr.tokenStatus === outer1_6.INVALID) {
            arr = arr.push(outer1_10.LOGIN);
            outer1_1(outer1_3[11]).track(outer1_9.LOGIN_VIEWED, { source: "choose_account_user_invalid" });
            const obj2 = outer1_1(outer1_3[11]);
          } else {
            outer1_2(outer1_3[12]).switchAccount(tmp.id, undefined, outer1_8.CHOOSE_ACCOUNT);
            const obj = outer1_2(outer1_3[12]);
          }
          return tmp4;
        },
        trailing: null
      };
      obj = {
        accessibilityRole: "button",
        onPress() {
          let obj = outer1_1(outer1_3[16]);
          obj.hideActionSheet();
          let obj1 = arr(outer1_3[17]);
          obj = { key: "RemoveAccount", options: null, hasIcons: false };
          obj = { label: null, onPress: null };
          const intl = arr(outer1_3[14]).intl;
          obj[0] = intl.string(arr(outer1_3[14]).t["DSN+hw"]);
          obj[1] = function onPress() {
            if (arr.tokenStatus === outer1_6.INVALID) {
              arr = arr.push(outer1_10.LOGIN);
              outer1_1(outer1_3[11]).track(outer1_9.LOGIN_VIEWED, { source: "choose_account_user_invalid" });
              const obj2 = outer1_1(outer1_3[11]);
            } else {
              outer1_2(outer1_3[12]).switchAccount(tmp.id, undefined, outer1_8.CHOOSE_ACCOUNT);
              const obj = outer1_2(outer1_3[12]);
            }
            return tmp4;
          };
          const items = [obj, ];
          obj1 = { label: null, onPress: null, isDestructive: true };
          const intl2 = arr(outer1_3[14]).intl;
          obj1[0] = intl2.string(arr(outer1_3[14]).t.lSLMaU);
          obj1[1] = function onPress() {
            return (function handlePressRemove(closure_0) {
              const self = this;
              const apply = closure_2.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })(closure_0);
          };
          items[1] = obj1;
          obj[1] = items;
          const result = obj1.showSimpleActionSheet(obj);
        },
        children: null
      };
      obj = { size: null, source: null, disableColor: true };
      obj[0] = id(outer1_3[15]).Icon.Sizes.SMALL_20;
      obj[1] = multiAccountUsers(outer1_3[23]);
      obj[2] = outer1_11(id(outer1_3[15]).Icon, obj);
      obj[2] = outer1_11(id(outer1_3[22]).PressableOpacity, obj);
      return outer1_11(multiAccountUsers(outer1_3[21]), obj, id.id);
    }),

  ];
  let obj2 = { leading: null, label: null, labelStyle: null, onPress: null };
  let obj3 = { themedColor: null, size: null, source: null };
  obj3[0] = multiAccountUsers(712).colors.TEXT_LINK;
  obj3[1] = _require(1297).Icon.Sizes.SMALL_20;
  obj3[2] = multiAccountUsers(14884);
  obj2[0] = callback(_require(7639).FormRow.Icon, obj3);
  let intl3 = _require(1236).intl;
  obj2[1] = intl3.string(_require(1236).t.bPP34Q);
  obj2[2] = tmp.addAccountLabel;
  obj2[3] = function handlePressAddAccount() {
    if (multiAccountUsers.length >= outer1_7) {
      let obj = { title: null, body: null, isDismissable: true };
      const intl = arr(outer1_3[14]).intl;
      obj[0] = intl.string(arr(outer1_3[14]).t.w7wfXi);
      const intl2 = arr(outer1_3[14]).intl;
      obj = { maxNumAccounts: null };
      obj[0] = tmp;
      obj[1] = intl2.formatToPlainString(arr(outer1_3[14]).t.WOyelG, obj);
      multiAccountUsers(outer1_3[13]).show(obj);
      const obj2 = multiAccountUsers(outer1_3[13]);
    } else {
      arr = arr.push(outer1_10.LOGIN);
      obj = multiAccountUsers(outer1_3[11]);
      obj.track(outer1_9.LOGIN_VIEWED, { source: "choose_account_add_account" });
    }
  };
  items[1] = callback(_require(7639).FormRow, obj2);
  obj1[1] = items;
  obj[5] = callback2(View, obj1);
  return callback(multiAccountUsers(9224), obj);
};