// === Module 6496: UserSettingsConfirmPassword ===

// Module 6496 (UserSettingsConfirmPassword)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl5 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import FreeFormInputGroupDefault from "FreeFormInputGroup" /* 6104 */;
import FreeFormErrorLabelDefault from "FreeFormErrorLabel" /* 6435 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 6497 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6498 */;
import UserSettingsAccountUnverifiedHeaderDefault from "UserSettingsAccountUnverifiedHeader" /* 6501 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c4, closure_2;

let c10;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
let react = react_mod;
({ View: metroRequire, ScrollView: metroImportDefault } = react_native);
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { background: obj2, container: { paddingVertical: 12, paddingHorizontal: 16 }, title: { textAlign: "center" }, prompt: { marginTop: 8, lineHeight: 18, textAlign: "center" }, input: { marginTop: 24 }, redesignInput: obj3, button: { marginTop: 16 }, hint: obj4 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.lg };
obj4 = { color: nativeDefault.unsafe_rawColors.RED_400 };
let closure_12 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const obj2 = useSettingNavigationRoute;
  const settingNavigationRoute = obj2.useSettingNavigationRoute();
  if (cResult[0] !== settingNavigationRoute.params) {
    const obj3 = {};
    const merged = Object.assign(settingNavigationRoute.params);
    const tmp8 = authStore(map1, obj3);
    cResult[0] = settingNavigationRoute.params;
    cResult[1] = tmp8;
    tmp3 = tmp8;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => {
  const obj = useSettingNavigationRoute;
  const obj2 = {};
  const merged = Object.assign(obj.useSettingNavigationRoute().params);
  return authStore(map1, obj2);
});
const forwardRefResult = react.forwardRef((arg0, arg1) => {
  let Button;
  let _undefined;
  let c3;
  let c5;
  let currentUser;
  let fieldMessage;
  let hideUnverifiedBanner;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let items2;
  let items3;
  let obj18;
  let obj2;
  let parentLoading;
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
  let value;
  react = undefined;
  let obj = function _handleSubmit() {
    obj = _asyncToGenerator(async function() {
      let closure_1;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          let closure_0;
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
              closure_0 = undefined;
              _undefined(true);
              c3 = 2;
              c4 = 3;
              c5 = 1;
              const obj5 = { value: require(_slicedToArray), done: false };
              return obj5;
            }
          } else if (1 === c4) {
            c3 = 0;
            closure_129_3(false);
            throw closure_2;
          } else {
            if (2 === c4) {
              c3 = 1;
              const obj4 = closure_2(closure_2[15]);
              obj4.captureException(closure_2);
              const message = tmp.message;
              const intl = closure_0(closure_2[16]).intl;
              if (message !== intl.string(closure_0(closure_2[16]).t.N2yb9a)) {
                const self3 = this;
                const self4 = this;
                const v6OrEarlierAPIError = new closure_0(closure_2[14]).V6OrEarlierAPIError(tmp);
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
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_0 = value;
              if (null == closure_0) {
                if (closure_129_2 != null) {
                  closure_129_2();
                }
                c3 = 0;
                closure_129_3(false);
                c5 = 3;
                const obj7 = { value: undefined, done: true };
                return obj7;
              } else {
                if (closure_0.status >= 400) {
                  if (closure_0.status <= 599) {
                    const self = this;
                    const self2 = this;
                    const v6OrEarlierAPIError1 = new closure_0(closure_2[14]).V6OrEarlierAPIError(closure_0);
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
                closure_129_1();
                c3 = 1;
              }
            }
            c3 = 0;
            closure_129_3(false);
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp67) {
          closure_2 = tmp67;
          if (0 === c3) {
            c5 = 3;
            throw tmp67;
          } else if (1 === tmp69) {
            c4 = 1;
          } else {
            c4 = 2;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_12();
  const imperativeHandle = react.useImperativeHandle(arg1, () => ({}));
  obj = get_initialized;
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  [tmp7, c3] = value(react.useState(false), 2);
  const tmp6 = value(react.useState(false), 2);
  const tmp8 = value(react.useState(""), 2);
  value = tmp8[0];
  const tmp10 = tmp8[1];
  [obj2, c5] = value(react.useState(null), 2);
  const tmp11 = value(react.useState(null), 2);
  const effect = react.useEffect(() => {
    obj = UserSettingsUtils;
    const obj2 = { destinationPane: constants.ACCOUNT_CONFIRM_PASSWORD };
    const result = obj.trackUserSettingsPaneViewed(obj2);
  }, []);
  let tmp14Result = null;
  if (null != stateFromStores) {
    let obj3 = { style: items1, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, children: items2 };
    items1 = [tmp.background, style];
    let tmp16 = null;
    if (!hideUnverifiedBanner) {
      tmp16 = closure_10(UserSettingsAccountUnverifiedHeaderDefault, {});
    }
    function handleSubmit() {
      return obj(...arguments);
    }
    items2 = [tmp16, ];
    let obj4 = { style: tmp.container, children: items3 };
    let obj5 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(intl5.t["x+d9t3"]) };
    const Text = Text_Text.Text;
    intl = intl5.intl;
    items3 = [closure_10(Text, obj5), , , , ];
    let obj6 = { style: tmp.prompt, variant: "text-sm/medium", color: "text-default", children: intl2.string(intl5.t.vaZmAx) };
    const Text2 = Text_Text.Text;
    intl2 = intl5.intl;
    items3[1] = closure_10(Text2, obj6);
    ({ input: obj7.style, redesignInput: obj7.textStyle } = tmp);
    const obj8 = { style: null, textStyle: null, label: intl3.string(intl5.t["CIGa+7"]), textContentType: "password", keyboardType: "default", secureTextEntry: true, value, onChangeText: tmp10, onSubmitEditing: handleSubmit, error: fieldMessage, returnKeyType: "done", autoCapitalize: "none", autoFocus: true };
    const tmp22 = FreeFormInputGroupDefault;
    intl3 = intl5.intl;
    fieldMessage = undefined;
    if (obj2 != null) {
      fieldMessage = obj2.getFieldMessage("password");
    }
    items3[2] = closure_10(tmp22, obj8);
    let tmp20Result = null;
    if (null != obj2) {
      tmp20Result = null;
      if (null == obj2.getFieldMessage("password")) {
        const obj9 = { style: tmp.hint, children: obj2.message };
        tmp20Result = closure_10(FreeFormErrorLabelDefault, obj9);
      }
    }
    items3[3] = tmp20Result;
    const obj10 = { style: tmp.button, children: closure_10(Button, obj18) };
    obj18 = { variant: "primary", size: "lg", text: intl4.string(intl5.t.i4jeWR), onPress: handleSubmit, loading: tmp7 };
    Button = components_Button_Button.Button;
    intl4 = intl5.intl;
    items3[4] = closure_10(obj, obj10);
    items2[1] = closure_11(obj, obj4);
    tmp14Result = closure_11(closure_7, obj3);
  }
  return tmp14Result;
});
const map1 = forwardRefResult;
let result = size.fileFinishedImporting("modules/user_settings/account/native/UserSettingsConfirmPassword.tsx");

export default forwardRefResult;
export const UserSettingsConfirmPasswordWrapped = tmp5;