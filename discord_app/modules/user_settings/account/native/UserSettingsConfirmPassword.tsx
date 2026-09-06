// === Module 6993: UserSettingsConfirmPassword ===

// Module 6993 (UserSettingsConfirmPassword)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import FreeFormInputGroupDefault from "FreeFormInputGroup" /* 6605 */;
import FreeFormErrorLabelDefault from "FreeFormErrorLabel" /* 6941 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 6994 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6995 */;
import UserSettingsAccountUnverifiedHeaderDefault from "UserSettingsAccountUnverifiedHeader" /* 6998 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const UserSettingsSections = fn(1074).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
fn(4560);
let obj = { background: null, container: null, title: null, prompt: null, input: null, redesignInput: null, button: null, hint: null };
obj = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.background = obj;
obj.container = { paddingVertical: 12, paddingHorizontal: 16 };
obj.title = { textAlign: "center" };
obj.prompt = { marginTop: 8, lineHeight: 18, textAlign: "center" };
obj.input = { marginTop: 24 };
const createStyles = { borderRadius: nativeDefault.radii.lg };
obj.redesignInput = createStyles;
obj.button = { marginTop: 16 };
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
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_0 = tmp8;
            closure_128_0 = undefined;
            asyncGeneratorStep(true);
            c3 = 2;
            c4 = 3;
            c5 = 1;
            const obj1 = { value: _require(_slicedToArray), done: false };
            return obj1;
          }
        } else if (1 === tmp8) {
          c3 = 0;
          closure_129_3(false);
          throw tmp75;
        } else {
          if (2 === tmp8) {
            c3 = 1;
            closure_128_1 = tmp75;
            let obj3 = tmp4(tmp75[13]);
            obj3.captureException(closure_128_1);
            const intl = closure_0(tmp75[14]).intl;
            if (closure_128_1.message !== intl.string(closure_0(tmp75[14]).t.N2yb9a)) {
              const v6OrEarlierAPIError = new closure_0(tmp75[12]).V6OrEarlierAPIError(closure_128_1);
              closure_129_5(v6OrEarlierAPIError);
            }
            if (closure_129_2 != null) {
              closure_129_2();
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_3(false);
            c5 = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            closure_128_0 = value;
            if (null == closure_128_0) {
              if (closure_129_2 != null) {
                closure_129_2();
              }
              c3 = 0;
              closure_129_3(false);
              c5 = 3;
              obj3 = { value: undefined, done: true };
              return obj3;
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
              obj = { value: undefined, done: true };
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
  let obj = initialize;
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  [tmp7, c3] = value(noop.useState(false), 2);
  const tmp8 = value(noop.useState(""), 2);
  value = tmp8[0];
  const tmp6 = value(noop.useState(false), 2);
  [obj2, c5] = value(noop.useState(null), 2);
  const effect = noop.useEffect(() => {
    const obj = { destinationPane: constants.ACCOUNT_CONFIRM_PASSWORD };
    const result = obj.trackUserSettingsPaneViewed(obj);
  }, []);
  let tmp13Result = null;
  if (null != stateFromStores) {
    obj = { style: null, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, children: null };
    const items1 = [tmp.background, style];
    obj.style = items1;
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
    const items2 = [tmp15, ];
    obj = { style: tmp.container, children: null };
    let obj1 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    let intl = util.intl;
    obj1.children = intl.string(util.t["x+d9t3"]);
    const items3 = [closure_10(Text_Text.Text, obj1), , , , ];
    obj2 = { style: tmp.prompt, variant: "text-sm/medium", color: "text-default", children: null };
    const intl2 = util.intl;
    obj2.children = intl2.string(util.t.vaZmAx);
    items3[1] = closure_10(Text_Text.Text, obj2);
    let obj3 = { style: null, textStyle: null, label: null, textContentType: "password", keyboardType: "default", secureTextEntry: true, value: null, onChangeText: null, onSubmitEditing: null, error: null, returnKeyType: "done", autoCapitalize: "none", autoFocus: true };
    ({ input: obj7.style, redesignInput: obj7.textStyle } = tmp);
    const intl3 = util.intl;
    obj3.label = intl3.string(util.t["CIGa+7"]);
    obj3.value = value;
    obj3.onChangeText = tmp8[1];
    obj3.onSubmitEditing = handleSubmit;
    let fieldMessage;
    if (obj1 != null) {
      fieldMessage = obj1.getFieldMessage("password");
    }
    obj3.error = fieldMessage;
    items3[2] = closure_10(FreeFormInputGroupDefault, obj3);
    let tmp19Result = null;
    if (null != obj1) {
      tmp19Result = null;
      if (null == obj1.getFieldMessage("password")) {
        const obj4 = { style: tmp.hint, children: obj1.message };
        tmp19Result = closure_10(FreeFormErrorLabelDefault, obj4);
      }
    }
    items3[3] = tmp19Result;
    const obj5 = { style: tmp.button, children: null };
    const obj6 = { variant: "primary", size: "lg", text: null, onPress: null, loading: null };
    const intl4 = util.intl;
    obj6.text = intl4.string(util.t.i4jeWR);
    obj6.onPress = handleSubmit;
    obj6.loading = tmp7;
    obj5.children = closure_10(components_Button_Button.Button, obj6);
    items3[4] = closure_10(closure_6, obj5);
    obj.children = items3;
    items2[1] = closure_11(closure_6, obj);
    obj.children = items2;
    tmp13Result = closure_11(closure_7, obj);
  }
  return tmp13Result;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/account/native/UserSettingsConfirmPassword.tsx");

export default forwardRefResult;
export const UserSettingsConfirmPasswordWrapped = function UserSettingsConfirmPasswordWrapped() {
  const obj = {};
  const merged = Object.assign(obj.useSettingNavigationRoute().params);
  return closure_1_10(forwardRefResult, obj);
};