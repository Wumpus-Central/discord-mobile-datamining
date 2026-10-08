// === Module 6673: UserSettingsConfirmPassword ===

// Module 6673 (UserSettingsConfirmPassword)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5086 */;
import components_Button_Button from "components/Button/Button" /* 5375 */;
import FreeFormInputGroupDefault from "FreeFormInputGroup" /* 6282 */;
import FreeFormErrorLabelDefault from "FreeFormErrorLabel" /* 6613 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 6674 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6675 */;
import UserSettingsAccountUnverifiedHeaderDefault from "UserSettingsAccountUnverifiedHeader" /* 6677 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1389 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const UserSettingsSections = fn(1085).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { background: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, container: { paddingVertical: 12, paddingHorizontal: 16 }, title: { textAlign: "center" }, prompt: { marginTop: 8, lineHeight: 18, textAlign: "center" }, input: { marginTop: 24 }, redesignInput: null, button: null, hint: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.redesignInput = { borderRadius: nativeDefault.radii.lg };
obj2.button = { marginTop: 16 };
let obj4 = { borderRadius: nativeDefault.radii.lg };
obj2.hint = { color: nativeDefault.unsafe_rawColors.RED_400 };
const __initData = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
class UserSettingsConfirmPasswordInner {
  constructor(arg0) {
    ({ onSubmit, onSuccess, onError, parentLoading } = global);
    if (parentLoading === undefined) {
      parentLoading = false;
    }
    ({ hideUnverifiedBanner, style } = global);
    if (hideUnverifiedBanner === undefined) {
      hideUnverifiedBanner = false;
    }
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
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
          return { value: "IconComponent", done: null };
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
              tmp4(tmp75[15]).captureException(closure_128_1);
              const intl = closure_0(tmp75[16]).intl;
              if (closure_128_1.message !== intl.string(closure_0(tmp75[16]).t.N2yb9a)) {
                const v6OrEarlierAPIError = new closure_0(tmp75[14]).V6OrEarlierAPIError(closure_128_1);
                closure_129_5(v6OrEarlierAPIError);
              }
              if (closure_129_2 != null) {
                closure_129_2();
              }
              const obj4 = tmp4(tmp75[15]);
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
                const v6OrEarlierAPIError1 = new closure_0(tmp75[14]).V6OrEarlierAPIError(closure_128_0);
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
    tmp = closure_12();
    imperativeHandle = closure_5.useImperativeHandle(global.ref, () => ({}));
    tmp3 = onSubmit;
    tmp4 = onError;
    obj = onSubmit(onError[12]);
    items = [];
    items[0] = closure_8;
    stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
    tmp6 = closure_4(closure_5.useState(false), 2);
    [tmp7, closure_3] = tmp6;
    tmp8 = closure_4(closure_5.useState(""), 2);
    first = tmp8[0];
    closure_4 = first;
    tmp10 = closure_4(closure_5.useState(null), 2);
    [obj2, closure_5] = tmp10;
    effect = closure_5.useEffect(() => {
      const result = UserSettingsUtils.trackUserSettingsPaneViewed({ destinationPane: constants.ACCOUNT_CONFIRM_PASSWORD });
    }, []);
    tmp13Result = null;
    if (null != stateFromStores) {
      tmp13 = jsxs;
      obj1 = { style: null, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, children: null };
      items1 = [, ];
      items1[0] = tmp.background;
      items1[1] = style;
      obj1.style = items1;
      tmp15 = null;
      tmp14 = ScrollView;
      if (!hideUnverifiedBanner) {
        tmp16 = jsx;
        tmp17 = onSuccess;
        tmp15 = jsx(onSuccess(tmp4[17]), {});
      }
      handleSubmit = function handleSubmit() {
        const self = this;
        const apply = closure_6.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      items2 = [, ];
      items2[0] = tmp15;
      tmp18 = closure_6;
      obj11 = { style: null, children: null };
      obj11.style = tmp.container;
      tmp19 = jsx;
      obj12 = { style: null, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
      obj12.style = tmp.title;
      intl = tmp3(tmp4[16]).intl;
      obj12.children = intl.string(tmp3(tmp4[16]).t["x+d9t3"]);
      items3 = [, , , , ];
      items3[0] = jsx(tmp3(tmp4[18]).Text, obj12);
      obj13 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
      obj13.style = tmp.prompt;
      intl2 = tmp3(tmp4[16]).intl;
      obj13.children = intl2.string(tmp3(tmp4[16]).t.vaZmAx);
      items3[1] = jsx(tmp3(tmp4[18]).Text, obj13);
      tmp20 = onSuccess;
      obj14 = { style: null, textStyle: null, label: null, textContentType: "password", keyboardType: "default", secureTextEntry: true, value: null, onChangeText: null, onSubmitEditing: null, error: null, returnKeyType: "done", autoCapitalize: "none", autoFocus: true };
      ({ input: obj7.style, redesignInput: obj7.textStyle } = tmp);
      tmp21 = onSuccess(tmp4[19]);
      intl3 = tmp3(tmp4[16]).intl;
      obj14.label = intl3.string(tmp3(tmp4[16]).t["CIGa+7"]);
      obj14.value = first;
      obj14.onChangeText = tmp8[1];
      obj14.onSubmitEditing = handleSubmit;
      fieldMessage = undefined;
      if (obj2 != null) {
        str = "password";
        fieldMessage = obj2.getFieldMessage("password");
      }
      obj14.error = fieldMessage;
      items3[2] = tmp19(tmp21, obj14);
      tmp19Result = null;
      if (null != obj2) {
        str2 = "password";
        tmp19Result = null;
        if (null == obj2.getFieldMessage("password")) {
          obj15 = { style: null, children: null };
          obj15.style = tmp.hint;
          obj15.children = obj2.message;
          tmp19Result = tmp19(tmp20(tmp4[20]), obj15);
        }
      }
      items3[3] = tmp19Result;
      obj16 = { style: null, children: null };
      obj16.style = tmp.button;
      obj17 = { variant: "primary", size: "lg", text: null, onPress: null, loading: null };
      intl4 = tmp3(tmp4[16]).intl;
      obj17.text = intl4.string(tmp3(tmp4[16]).t.i4jeWR);
      obj17.onPress = handleSubmit;
      if (!tmp7) {
        tmp7 = parentLoading;
      }
      obj17.loading = tmp7;
      obj16.children = tmp19(tmp3(tmp4[21]).Button, obj17);
      items3[4] = tmp19(tmp18, obj16);
      obj11.children = items3;
      items2[1] = tmp13(tmp18, obj11);
      obj1.children = items2;
      tmp13Result = tmp13(tmp14, obj1);
    }
    return tmp13Result;
  }
}
let obj5 = { color: nativeDefault.unsafe_rawColors.RED_400 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/account/native/UserSettingsConfirmPassword.tsx");

export default UserSettingsConfirmPasswordInner;
export const UserSettingsConfirmPasswordWrapped = ReactCompilerGating.isReactCompilerEnabled() ? (function UserSettingsConfirmPasswordWrapped() {
  const cResult = c.c(2);
  const settingNavigationRoute = useSettingNavigationRoute.useSettingNavigationRoute();
  if (cResult[0] !== settingNavigationRoute.params) {
    const obj3 = {};
    const merged = Object.assign(settingNavigationRoute.params);
    const tmp8 = collapsed(UserSettingsConfirmPasswordInner, obj3);
    cResult[0] = settingNavigationRoute.params;
    cResult[1] = tmp8;
    let tmp3 = tmp8;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function UserSettingsConfirmPasswordWrapped() {
  const merged = Object.assign(useSettingNavigationRoute.useSettingNavigationRoute().params);
  return collapsed(UserSettingsConfirmPasswordInner, {});
});