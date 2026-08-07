// discord_app/modules/user_settings/account/native/UserSettingsConfirmPassword.tsx
import ME from "ME";
import _slicedToArray from "_slicedToArray";
import importAllResult from "Button";
import get_ActivityIndicator from "module_8405";
import mergeGuildAvatar from "mergeGuildAvatar";
import { UserSettingsSections } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { FreeFormInputGroup } from "../../../../design/void/Form/native/FreeFormInputGroup.tsx";
import { useSettingNavigationRoute } from "../../core/native/useSettingNavigationRoute.tsx";
import { handleOpenEmailVerification } from "UserSettingsAccountUnverifiedHeader.tsx";

let c10;
let closure_6;
let error;
let unpackModuleId;
const require = arg1;
let c5 = importAllResult;
({ View: closure_6, ScrollView: error } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let obj = { background: null, container: null, title: null, prompt: null, input: null, redesignInput: null, button: null, hint: null };
obj = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
obj[0] = obj;
obj[1] = { paddingVertical: 12, paddingHorizontal: 16 };
obj[2] = { textAlign: "center" };
obj[3] = { marginTop: 8, lineHeight: 18, textAlign: "center" };
obj[4] = { marginTop: 24 };
createCacheKey = { borderRadius: require("Themes").radii.lg };
obj[5] = createCacheKey;
obj[6] = { marginTop: 16 };
obj[7] = { color: require("Themes").unsafe_rawColors.RED_400 };
let closure_12 = createCacheKey.createStyles(obj);
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  let c3;
  let c5;
  let dependencyMap;
  let hideUnverifiedBanner;
  let importDefault;
  let obj2;
  let parentLoading;
  let require;
  let style;
  let tmp7;
  ({ onSubmit: require, onSuccess: importDefault, onError: dependencyMap, parentLoading } = arg0);
  if (parentLoading === undefined) {
    parentLoading = false;
  }
  ({ hideUnverifiedBanner, style } = arg0);
  if (hideUnverifiedBanner === undefined) {
    hideUnverifiedBanner = false;
  }
  c3 = undefined;
  let first;
  function _handleSubmit() {
    const self = this;
    const tmp = _undefined(function*() {
      if (v02 === 2) {
        v02 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          v02 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              v02 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v02 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let lib = tmp4;
              let closure_0 = tmp8;
              closure_0 = undefined;
              v0(true);
              v0 = 2;
              c4 = 3;
              v02 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = outer1_0(c4);
              return obj1;
            }
          } else if (1 === tmp8) {
            v0 = 0;
            v0(false);
            throw callback;
          } else {
            if (2 === tmp8) {
              v0 = 1;
              lib = callback;
              let obj3 = outer1_1(outer1_2[13]);
              obj3.captureException(lib);
              const intl = outer1_0(outer1_2[14]).intl;
              if (lib.message !== intl.string(outer1_0(outer1_2[14]).t.N2yb9a)) {
                const v6OrEarlierAPIError = new outer1_0(outer1_2[12]).V6OrEarlierAPIError(outer1_1);
                v02(v6OrEarlierAPIError);
              }
              if (outer1_2 != null) {
                outer1_2();
              }
            } else if (arg0 === 1) {
              v02 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 0;
              v0(false);
              v02 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              closure_0 = arg1;
              if (null == closure_0) {
                if (callback != null) {
                  callback();
                }
                v0 = 0;
                v0(false);
                v02 = 3;
                obj3 = { value: null, done: true };
                obj3[0] = undefined;
                return obj3;
              } else {
                if (closure_0.status < 400) {
                  lib();
                  v0 = 1;
                }
                const v6OrEarlierAPIError1 = new outer1_0(outer1_2[12]).V6OrEarlierAPIError(closure_0);
                v02(v6OrEarlierAPIError1);
                if (callback != null) {
                  callback();
                }
                v0 = 0;
                v0(false);
                v02 = 3;
                obj = { value: null, done: true };
                obj[0] = undefined;
                return obj;
              }
            }
            v0 = 0;
            v0(false);
            v02 = 3;
          }
        } catch (tmp75) {
          callback = tmp75;
          if (tmp5 === v0) {
            v02 = tmp3;
            throw tmp75;
          } else if (tmp2 === tmp77) {
            c4 = tmp2;
          } else {
            c4 = tmp;
          }
        }
      }
    });
    const _handleSubmit = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback2();
  const imperativeHandle = importAllResult.useImperativeHandle(ref, () => ({}));
  let obj = initialize;
  const items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  [tmp7, c3] = first(undefined.useState(false), 2);
  const tmp8 = first(undefined.useState(""), 2);
  first = tmp8[0];
  const tmp6 = first(undefined.useState(false), 2);
  [obj2, c5] = first(undefined.useState(null), 2);
  const effect = importAllResult.useEffect(() => {
    let obj = callback(table[11]);
    obj = { destinationPane: constants.ACCOUNT_CONFIRM_PASSWORD };
    const result = obj.trackUserSettingsPaneViewed(obj);
  }, []);
  let tmp13Result = null;
  if (null != stateFromStores) {
    obj = { style: null, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, children: null };
    const items1 = [tmp.background, style];
    obj[0] = items1;
    let tmp15 = null;
    if (!hideUnverifiedBanner) {
      tmp15 = callback(handleOpenEmailVerification, {});
    }
    function handleSubmit() {
      const self = this;
      const apply = _handleSubmit.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    const items2 = [tmp15, ];
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    let obj1 = { style: null, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    obj1[0] = tmp.title;
    let intl = tmp3(1236).intl;
    obj1[4] = intl.string(tmp3(1236).t["x+d9t3"]);
    const items3 = [callback(tmp3(4298).Text, obj1), , , , ];
    obj2 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
    obj2[0] = tmp.prompt;
    const intl2 = tmp3(1236).intl;
    obj2[3] = intl2.string(tmp3(1236).t.vaZmAx);
    items3[1] = callback(tmp3(4298).Text, obj2);
    let obj3 = { style: null, textStyle: null, label: null, textContentType: "password", keyboardType: "default", secureTextEntry: true, value: null, onChangeText: null, onSubmitEditing: null, error: null, returnKeyType: "done", autoCapitalize: "none", autoFocus: true };
    ({ input: obj7[0], redesignInput: obj7[1] } = tmp);
    const intl3 = tmp3(1236).intl;
    obj3[2] = intl3.string(tmp3(1236).t["CIGa+7"]);
    obj3[6] = first;
    obj3[7] = tmp8[1];
    obj3[8] = handleSubmit;
    let fieldMessage;
    if (obj1 != null) {
      fieldMessage = obj1.getFieldMessage("password");
    }
    obj3[9] = fieldMessage;
    items3[2] = callback(FreeFormInputGroup, obj3);
    let tmp19Result = null;
    if (null != obj1) {
      tmp19Result = null;
      if (null == obj1.getFieldMessage("password")) {
        const obj4 = { style: null, children: null };
        obj4[0] = tmp.hint;
        obj4[1] = obj1.message;
        tmp19Result = tmp19(tmp20(8409), obj4);
      }
    }
    items3[3] = tmp19Result;
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.button;
    const obj6 = { variant: "primary", size: "lg", text: null, onPress: null, loading: null };
    const intl4 = tmp3(1236).intl;
    obj6[2] = intl4.string(tmp3(1236).t.i4jeWR);
    obj6[3] = handleSubmit;
    obj6[4] = tmp7;
    obj5[1] = callback(tmp3(4712).Button, obj6);
    items3[4] = callback(_handleSubmit, obj5);
    obj[1] = items3;
    items2[1] = closure_11(_handleSubmit, obj);
    obj[3] = items2;
    tmp13Result = tmp13(closure_7, obj);
    const tmp14 = closure_7;
    tmp20 = importDefault;
    const tmp21 = FreeFormInputGroup;
  }
  return tmp13Result;
});
let obj2 = { color: require("Themes").unsafe_rawColors.RED_400 };
let result = require("noop").fileFinishedImporting("modules/user_settings/account/native/UserSettingsConfirmPassword.tsx");

export default forwardRefResult;
export const UserSettingsConfirmPasswordWrapped = function UserSettingsConfirmPasswordWrapped() {
  let obj = useSettingNavigationRoute;
  obj = {};
  const merged = Object.assign(obj.useSettingNavigationRoute().params);
  return callback(closure_13, obj);
};