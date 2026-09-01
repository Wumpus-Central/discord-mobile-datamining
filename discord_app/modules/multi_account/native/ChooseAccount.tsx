// discord_app/modules/multi_account/native/ChooseAccount.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_4 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { MultiAccountTokenStatus } from "../MultiAccountStore.tsx";
import MAX_ACCOUNTS from "../Constants.tsx";
import ME from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import { useNavigation } from "../../../design/components/Navigator/native/useNavigation.native.tsx";
import { useMultiAccountUsers } from "../useMultiAccount.tsx";

const require = arg1;
noopAll;
({ MAX_ACCOUNTS: error, MultiAccountSwitchLocation: closure_8 } = MAX_ACCOUNTS);
({ AnalyticEvents: c9, AuthStates: c10 } = ME);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
createCacheKey = { container: null, mainCard: null, addAccountLabel: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, borderRadius: ThemesDefault.radii.sm, paddingTop: ThemesDefault.space.PX_16, margin: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginVertical: ThemesDefault.space.PX_16, borderRadius: ThemesDefault.radii.sm, flexDirection: "column", alignItems: "stretch", alignSelf: "stretch", display: "flex" };
let obj1 = { marginVertical: ThemesDefault.space.PX_16, borderRadius: ThemesDefault.radii.sm, flexDirection: "column", alignItems: "stretch", alignSelf: "stretch", display: "flex" };
createCacheKey[2] = { color: ThemesDefault.colors.TEXT_LINK };
let closure_13 = createCacheKey.createStyles(createCacheKey);
let obj2 = { color: ThemesDefault.colors.TEXT_LINK };
let result = require("set").fileFinishedImporting("modules/multi_account/native/ChooseAccount.tsx");

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
                intl = tmp31(1236).intl;
                obj1[2] = intl.string(lib(1236).t.N86XcP);
                obj1[3] = lib(1297).ButtonColors.RED;
                intl2 = tmp31(1236).intl;
                string = intl2.string;
                obj1[4] = string(lib(1236).t["ETE/oC"]);
                obj1 = closure_1_1(4858).confirm(obj1);
                dependencyMap = 1;
                c4 = 1;
                const obj8 = closure_1_1(4858);
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
                obj = closure_1_1(4445);
                obj.hideActionSheet();
                obj1 = closure_1_2(11986);
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
  let obj = useNavigation;
  _require = obj.useNavigation();
  obj1 = useMultiAccountUsers;
  const multiAccountUsers = obj1.useMultiAccountUsers().multiAccountUsers;
  obj = { headerText: null, subHeader: null, backgroundImageSource: null, backgroundImageCover: true, contentStyle: null, children: null };
  let intl = require("../../../intl/index.native.tsx").intl;
  obj[0] = intl.string(require("../../../intl/index.native.tsx").t.bVbB63);
  obj = { variant: "text-sm/medium", color: "text-default", children: null };
  let intl2 = require("../../../intl/index.native.tsx").intl;
  obj[2] = intl2.string(require("../../../intl/index.native.tsx").t["0M5fN7"]);
  obj[1] = callback(require("../../../design/components/Text/native/Text.tsx").Text, obj);
  obj[2] = multiAccountUsers(13603);
  obj[4] = tmp.container;
  obj1 = { style: tmp.mainCard, children: null };
  let items = [
    multiAccountUsers.map((id) => {
      let obj = {
        user: id,
        onPressUser() {
          if (arr.tokenStatus === closure_1_6.INVALID) {
            arr = arr.push(closure_1_10.LOGIN);
            closure_1_1(closure_1_3[11]).track(closure_1_9.LOGIN_VIEWED, { source: "choose_account_user_invalid" });
            const obj2 = closure_1_1(closure_1_3[11]);
          } else {
            closure_1_2(closure_1_3[12]).switchAccount(tmp.id, undefined, closure_1_8.CHOOSE_ACCOUNT);
            const obj = closure_1_2(closure_1_3[12]);
          }
          return tmp4;
        },
        trailing: null
      };
      obj = {
        accessibilityRole: "button",
        onPress() {
          let obj = closure_1_1(closure_1_3[16]);
          obj.hideActionSheet();
          obj1 = arr(closure_1_3[17]);
          obj = { key: "RemoveAccount", options: null, hasIcons: false };
          obj = { label: null, onPress: null };
          const intl = arr(closure_1_3[14]).intl;
          obj[0] = intl.string(arr(closure_1_3[14]).t["DSN+hw"]);
          obj[1] = function onPress() {
            if (arr.tokenStatus === closure_1_6.INVALID) {
              arr = arr.push(closure_1_10.LOGIN);
              closure_1_1(closure_1_3[11]).track(closure_1_9.LOGIN_VIEWED, { source: "choose_account_user_invalid" });
              const obj2 = closure_1_1(closure_1_3[11]);
            } else {
              closure_1_2(closure_1_3[12]).switchAccount(tmp.id, undefined, closure_1_8.CHOOSE_ACCOUNT);
              const obj = closure_1_2(closure_1_3[12]);
            }
            return tmp4;
          };
          const items = [obj, ];
          obj1 = { label: null, onPress: null, isDestructive: true };
          const intl2 = arr(closure_1_3[14]).intl;
          obj1[0] = intl2.string(arr(closure_1_3[14]).t.lSLMaU);
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
      obj = { size: arr(closure_1_3[15]).Icon.Sizes.SMALL_20, source: multiAccountUsers(closure_1_3[23]), disableColor: true };
      obj[2] = closure_1_11(id(closure_1_3[15]).Icon, obj);
      obj[2] = closure_1_11(id(closure_1_3[22]).PressableOpacity, obj);
      return closure_1_11(multiAccountUsers(closure_1_3[21]), obj, id.id);
    }),

  ];
  let obj2 = { leading: null, label: null, labelStyle: null, onPress: null };
  const tmp2 = multiAccountUsers(7745);
  obj2[0] = callback(require("../../../design/void/Form/native/index.tsx").FormRow.Icon, { themedColor: multiAccountUsers(712).colors.TEXT_LINK, size: require("../../../design/void/native.tsx").Icon.Sizes.SMALL_20, source: multiAccountUsers(15544) });
  let intl3 = require("../../../intl/index.native.tsx").intl;
  obj2[1] = intl3.string(require("../../../intl/index.native.tsx").t.bPP34Q);
  obj2[2] = tmp.addAccountLabel;
  obj2[3] = function handlePressAddAccount() {
    if (multiAccountUsers.length >= closure_1_7) {
      let obj = { title: null, body: null, isDismissable: true };
      const intl = arr(closure_1_3[14]).intl;
      obj[0] = intl.string(arr(closure_1_3[14]).t.w7wfXi);
      const intl2 = arr(closure_1_3[14]).intl;
      obj = { maxNumAccounts: null };
      obj[0] = tmp;
      obj[1] = intl2.formatToPlainString(arr(closure_1_3[14]).t.WOyelG, obj);
      multiAccountUsers(closure_1_3[13]).show(obj);
      const obj2 = multiAccountUsers(closure_1_3[13]);
    } else {
      arr = arr.push(closure_1_10.LOGIN);
      obj = multiAccountUsers(closure_1_3[11]);
      obj.track(closure_1_9.LOGIN_VIEWED, { source: "choose_account_add_account" });
    }
  };
  items[1] = callback(require("../../../design/void/Form/native/index.tsx").FormRow, obj2);
  obj1[1] = items;
  obj[5] = callback2(View, obj1);
  return callback(tmp2, obj);
};