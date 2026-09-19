// discord_app/modules/user_settings/account/native/UserSettingsConfirmPassword.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import FreeFormInputGroupDefault from "../../../../design/void/Form/native/FreeFormInputGroup.tsx";
import FreeFormErrorLabelDefault from "../../../../design/void/Form/native/FreeFormErrorLabel.tsx";
import useSettingNavigationRoute from "../../core/native/useSettingNavigationRoute.tsx";
import UserSettingsUtils from "../../../../utils/UserSettingsUtils.tsx";
import UserSettingsAccountUnverifiedHeaderDefault from "UserSettingsAccountUnverifiedHeader.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const UserSettingsSections = fn(1074).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4756);
let obj = {
  background: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
  container: { paddingVertical: 12, paddingHorizontal: 16 },
  title: { textAlign: "center" },
  prompt: { marginTop: 8, lineHeight: 18, textAlign: "center" },
  input: { marginTop: 24 },
  redesignInput: null,
  button: null,
  hint: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.redesignInput = { borderRadius: nativeDefault.radii.lg };
obj.button = { marginTop: 16 };
let obj4 = { borderRadius: nativeDefault.radii.lg };
obj.hint = { color: nativeDefault.unsafe_rawColors.RED_400 };
let closure_12 = createStyles.createStyles(obj);
const forwardRefResult = noop.forwardRef((arg0, arg1) => {
  ({ onSubmit: require, onSuccess: importDefault, onError: dependencyMap, parentLoading } = arg0);
  if (parentLoading === undefined) {
    parentLoading = false;
  }
  ({ hideUnverifiedBanner, style } = arg0);
  if (hideUnverifiedBanner === undefined) {
    hideUnverifiedBanner = false;
  }
  c3 = undefined;
  value = undefined;
  noop = undefined;
  closure_6 = async function _handleSubmit() {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = tmp8;
            closure_128_0 = undefined;
            asyncGeneratorStep(true);
            c3 = 2;
            c4 = 3;
            c5 = 1;
            const obj5 = { value: _require(_slicedToArray), done: false };
            return obj5;
          }
        } else if (1 === tmp8) {
          c3 = 0;
          closure_129_3(false);
          throw tmp75;
        } else {
          if (2 === tmp8) {
            c3 = 1;
            closure_128_1 = tmp75;
            tmp4(tmp75[13]).captureException(closure_128_1);
            const intl = closure_0(tmp75[14]).intl;
            if (closure_128_1.message !== intl.string(closure_0(tmp75[14]).t.N2yb9a)) {
              const v6OrEarlierAPIError = new closure_0(tmp75[12]).V6OrEarlierAPIError(closure_128_1);
              closure_129_5(v6OrEarlierAPIError);
            }
            if (closure_129_2 != null) {
              closure_129_2();
            }
            const obj4 = tmp4(tmp75[13]);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_3(false);
            c5 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_128_0 = value;
            if (null == closure_128_0) {
              if (closure_129_2 != null) {
                closure_129_2();
              }
              c3 = 0;
              closure_129_3(false);
              c5 = 3;
              const obj7 = { value: undefined, done: true };
              return obj7;
            } else {
              if (closure_128_0.status < 400) {
                closure_129_1();
                c3 = 1;
              }
              const v6OrEarlierAPIError1 = new closure_0(tmp75[12]).V6OrEarlierAPIError(closure_128_0);
              closure_129_5(v6OrEarlierAPIError1);
              if (closure_129_2 != null) {
                closure_129_2();
              }
              c3 = 0;
              closure_129_3(false);
              c5 = 3;
              const obj = { value: undefined, done: true };
              return obj;
            }
          }
          c3 = 0;
          closure_129_3(false);
          c5 = 3;
        }
      } catch (tmp75) {
        if (tmp5 === c3) {
          c5 = tmp3;
          throw tmp75;
        } else if (tmp2 === tmp77) {
          c4 = tmp2;
        } else {
          c4 = tmp;
        }
      }
    }
  };
  const tmp = closure_12();
  const imperativeHandle = noop.useImperativeHandle(arg1, () => ({}));
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  [tmp7, c3] = value(noop.useState(false), 2);
  const tmp8 = value(noop.useState(""), 2);
  value = tmp8[0];
  const tmp6 = value(noop.useState(false), 2);
  [obj2, c5] = value(noop.useState(null), 2);
  const effect = noop.useEffect(() => {
    const result = UserSettingsUtils.trackUserSettingsPaneViewed({
      destinationPane: constants.ACCOUNT_CONFIRM_PASSWORD,
    });
  }, []);
  let tmp13Result = null;
  if (null != stateFromStores) {
    let obj3 = { style: null, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, children: null };
    const items1 = [tmp.background, style];
    obj3.style = items1;
    let tmp15 = null;
    if (!hideUnverifiedBanner) {
      tmp15 = closure_10(UserSettingsAccountUnverifiedHeaderDefault, {});
    }
    function handleSubmit() {
      const self = this;
      const apply = closure_6.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    const items2 = [tmp15];
    let obj4 = { style: tmp.container, children: null };
    let obj5 = {
      style: tmp.title,
      accessibilityRole: "header",
      variant: "heading-xl/extrabold",
      color: "mobile-text-heading-primary",
      children: null,
    };
    let intl = util.intl;
    obj5.children = intl.string(util.t["x+d9t3"]);
    const items3 = [closure_10(Text_Text.Text, obj5), , , ,];
    let obj6 = { style: tmp.prompt, variant: "text-sm/medium", color: "text-default", children: null };
    const intl2 = util.intl;
    obj6.children = intl2.string(util.t.vaZmAx);
    items3[1] = closure_10(Text_Text.Text, obj6);
    const obj8 = {
      style: null,
      textStyle: null,
      label: null,
      textContentType: "password",
      keyboardType: "default",
      secureTextEntry: true,
      value: null,
      onChangeText: null,
      onSubmitEditing: null,
      error: null,
      returnKeyType: "done",
      autoCapitalize: "none",
      autoFocus: true,
    };
    ({ input: obj7.style, redesignInput: obj7.textStyle } = tmp);
    const intl3 = util.intl;
    obj8.label = intl3.string(util.t["CIGa+7"]);
    obj8.value = value;
    obj8.onChangeText = tmp8[1];
    obj8.onSubmitEditing = handleSubmit;
    let fieldMessage;
    if (obj2 != null) {
      fieldMessage = obj2.getFieldMessage("password");
    }
    obj8.error = fieldMessage;
    items3[2] = closure_10(FreeFormInputGroupDefault, obj8);
    let tmp19Result = null;
    if (null != obj2) {
      tmp19Result = null;
      if (null == obj2.getFieldMessage("password")) {
        const obj9 = { style: tmp.hint, children: obj2.message };
        tmp19Result = closure_10(FreeFormErrorLabelDefault, obj9);
      }
    }
    items3[3] = tmp19Result;
    const obj10 = { style: tmp.button, children: null };
    const obj18 = { variant: "primary", size: "lg", text: null, onPress: null, loading: null };
    const intl4 = util.intl;
    obj18.text = intl4.string(util.t.i4jeWR);
    obj18.onPress = handleSubmit;
    obj18.loading = tmp7;
    obj10.children = closure_10(components_Button_Button.Button, obj18);
    items3[4] = closure_10(closure_6, obj10);
    obj4.children = items3;
    items2[1] = closure_11(closure_6, obj4);
    obj3.children = items2;
    tmp13Result = closure_11(closure_7, obj3);
  }
  return tmp13Result;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/account/native/UserSettingsConfirmPassword.tsx");

export default forwardRefResult;
export const UserSettingsConfirmPasswordWrapped = function UserSettingsConfirmPasswordWrapped() {
  const merged = Object.assign(useSettingNavigationRoute.useSettingNavigationRoute().params);
  return closure_1_10(forwardRefResult, {});
};
