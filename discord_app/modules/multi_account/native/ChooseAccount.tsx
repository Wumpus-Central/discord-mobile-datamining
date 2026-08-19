// === Module 15216: ChooseAccount ===

// Module 15216 (ChooseAccount)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { MultiAccountTokenStatus } from "initialize" /* 11585 */;
import MAX_ACCOUNTS from "MAX_ACCOUNTS" /* 11586 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
noopAll;
({ MAX_ACCOUNTS: error, MultiAccountSwitchLocation: closure_8 } = MAX_ACCOUNTS);
({ AnalyticEvents: c9, AuthStates: c10 } = ME);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, borderRadius: ThemesDefault.radii.sm, paddingTop: ThemesDefault.space.PX_16, margin: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginVertical: ThemesDefault.space.PX_16, borderRadius: ThemesDefault.radii.sm, flexDirection: "column", alignItems: "stretch", alignSelf: "stretch", display: "flex" };
createCacheKey[2] = { color: ThemesDefault.colors.TEXT_LINK };
let closure_13 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/multi_account/native/ChooseAccount.tsx");

export default function ChooseAccount() {
  function _handlePressRemove() {
    const self = this;
    const tmp = closure_1_4((arg0) => {
      closure_0 = arg0;
      c3 = 0;
      c4 = 0;
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
            return { value: "HermesInternal", done: "HermesInternal" };
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
                closure_2 = tmp5;
                closure_1 = tmp2;
                let string = lib;
                obj1 = { title: null, body: null, confirmText: null, confirmColor: null, cancelText: null, isDismissable: true };
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
                intl = lib(1236).intl;
                obj1[2] = intl.string(lib(1236).t.N86XcP);
                obj1[3] = lib(1297).ButtonColors.RED;
                intl2 = lib(1236).intl;
                string = intl2.string;
                obj1[4] = string(lib(1236).t["ETE/oC"]);
                obj1 = closure_1_1(4656).confirm(obj1);
                dependencyMap = 1;
                c4 = 1;
                const obj8 = closure_1_1(4656);
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
                obj = closure_1_1(4342);
                obj.hideActionSheet();
                obj1 = closure_1_2(11589);
                obj1.removeAccount(lib.id);
              }
              c4 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } catch (tmp23) {
            c4 = tmp;
            throw tmp23;
          }
        }
      })();
    });
    closure_2 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback3();
  let obj = _require(1500);
  _require = obj.useNavigation();
  obj1 = _require(15217);
  const multiAccountUsers = obj1.useMultiAccountUsers().multiAccountUsers;
  obj = { headerText: null, subHeader: null, backgroundImageSource: null, backgroundImageCover: true, contentStyle: null, children: null };
  let intl = _require(1236).intl;
  obj[0] = intl.string(_require(1236).t.bVbB63);
  obj = { variant: "text-sm/medium", color: "text-default", children: null };
  let intl2 = _require(1236).intl;
  obj[2] = intl2.string(_require(1236).t["0M5fN7"]);
  obj[1] = callback(_require(4734).Text, obj);
  obj[2] = multiAccountUsers(13324);
  obj[4] = tmp.container;
  obj1 = { style: tmp.mainCard, children: null };
  let items = [
    multiAccountUsers.map((item, index) => {
      let obj = { size: arr(dependencyMap[15]).Icon.Sizes.SMALL_20, source: multiAccountUsers(dependencyMap[23]), disableColor: true };
      obj[2] = closure_1_11(item(dependencyMap[15]).Icon, obj);
      obj[2] = closure_1_11(item(dependencyMap[22]).PressableOpacity, obj);
      return closure_1_11(multiAccountUsers(dependencyMap[21]), obj, item.id);
    }),

  ];
  let obj2 = { leading: null, label: null, labelStyle: null, onPress: null };
  const tmp2 = multiAccountUsers(8609);
  obj2[0] = callback(_require(8083).FormRow.Icon, { themedColor: multiAccountUsers(712).colors.TEXT_LINK, size: _require(1297).Icon.Sizes.SMALL_20, source: multiAccountUsers(15219) });
  let intl3 = _require(1236).intl;
  obj2[1] = intl3.string(_require(1236).t.bPP34Q);
  obj2[2] = tmp.addAccountLabel;
  obj2[3] = function handlePressAddAccount() {
    if (multiAccountUsers.length >= closure_1_7) {
      let obj = { title: null, body: null, isDismissable: true };
      const intl = arr(dependencyMap[14]).intl;
      obj[0] = intl.string(arr(dependencyMap[14]).t.w7wfXi);
      const intl2 = arr(dependencyMap[14]).intl;
      obj = { maxNumAccounts: null };
      obj[0] = tmp;
      obj[1] = intl2.formatToPlainString(arr(dependencyMap[14]).t.WOyelG, obj);
      multiAccountUsers(dependencyMap[13]).show(obj);
      const obj2 = multiAccountUsers(dependencyMap[13]);
    } else {
      arr = arr.push(closure_1_10.LOGIN);
      obj = multiAccountUsers(dependencyMap[11]);
      obj.track(closure_1_9.LOGIN_VIEWED, { source: "choose_account_add_account" });
    }
  };
  items[1] = callback(_require(8083).FormRow, obj2);
  obj1[1] = items;
  obj[5] = callback2(View, obj1);
  return callback(tmp2, obj);
};