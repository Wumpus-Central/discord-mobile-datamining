// discord_app/modules/auth/native/components/RegisterUsernameInput.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../../intl/index.native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import CircleErrorIcon2 from "../../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import useFocusRefOnNavigationDefault from "../../../../design/components/Navigator/native/useFocusRefOnNavigation.tsx";
import UniqueUsernamesTypes from "../../../unique_usernames/UniqueUsernamesTypes.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import RegistrationUIStore from "../RegistrationUIStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let dependencyMap, importDefault, tmp2;

let FadeIn;
let FadeOut;
let c10;
let c9;
let closure_12;
let easingResult;
let metroImportAll;
let unpackModuleId;
let closure_3 = ["username"];
let closure_4 = ["username"];
({ setRegistrationErrors: metroImportAll, useRegistrationUIStore: c9 } = RegistrationUIStore);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let closure_13 = createStyles.createStyles({ status: { width: "90%" }, inputHint: { width: "100%" } });
let obj = { entering: FadeIn.duration(300), exiting: FadeOut.duration(300) };
FadeIn = ReanimatedRexport.FadeIn;
FadeOut = ReanimatedRexport.FadeOut;
let obj2 = { layout: easingResult.duration(300) };
const LinearTransition = ReanimatedRexport.LinearTransition;
const easing = LinearTransition.easing;
const Easing = ReanimatedRexport.Easing;
easingResult = easing(Easing.inOut(ReanimatedRexport.Easing.quad));
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let isUsernameFocused;
      let items;
      let usernameStatus;
      obj = react2;
      const cResult = obj.c(12);
      ({ usernameStatus, isUsernameFocused } = arg0);
      const tmp4 = closure_13();
      let type;
      if (usernameStatus != null) {
        type = usernameStatus.type;
      }
      if (type === UniqueUsernamesTypes.NameValidationState.ERROR) {
        let first;
        const _Symbol2 = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          obj2 = { size: "xs", color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
          const CircleErrorIcon = CircleErrorIcon2.CircleErrorIcon;
          const tmp35 = authStore(CircleErrorIcon, obj2);
          cResult[0] = tmp35;
          first = tmp35;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === tmp4.status) {
          let tmp36;
          if (cResult[2] === usernameStatus.message) {
            tmp36 = cResult[3];
          }
          return tmp36;
        }
        const obj3 = { direction: "horizontal", spacing: 4, align: "flex-start", children: items };
        items = [first];
        const Stack = Stack_Stack.Stack;
        const obj4 = {
          variant: "text-xs/medium",
          color: "text-feedback-critical",
          style: tmp4.status,
          animated: true,
          children: usernameStatus.message,
        };
        const Text3 = Text_Text.Text;
        const merged = Object.assign(obj);
        const merged1 = Object.assign(obj2);
        items[1] = authStore(Text3, obj4);
        const tmp45 = unpackModuleId(Stack, obj3);
        cResult[1] = tmp4.status;
        cResult[2] = usernameStatus.message;
        cResult[3] = tmp45;
        tmp36 = tmp45;
      } else {
        if (isUsernameFocused) {
          let type1;
          if (usernameStatus != null) {
            type1 = usernameStatus.type;
          }
          if (type1 === UniqueUsernamesTypes.NameValidationState.AVAILABLE) {
            let tmp19;
            if (cResult[4] !== usernameStatus.message) {
              const obj5 = {
                variant: "text-xs/medium",
                color: "text-feedback-positive",
                children: usernameStatus.message,
              };
              const tmp21 = authStore(Text_Text.Text, obj5);
              cResult[4] = usernameStatus.message;
              cResult[5] = tmp21;
              tmp19 = tmp21;
            } else {
              tmp19 = cResult[5];
            }
            if (cResult[6] === tmp4.status) {
              let tmp22;
              if (cResult[7] === tmp19) {
                tmp22 = cResult[8];
              }
              return tmp22;
            }
            const obj6 = { style: tmp4.status, variant: "text-xs/medium", animated: true, children: tmp19 };
            const Text2 = Text_Text.Text;
            const merged2 = Object.assign(obj);
            const merged3 = Object.assign(obj2);
            const tmp30 = authStore(Text2, obj6);
            cResult[6] = tmp4.status;
            cResult[7] = tmp19;
            cResult[8] = tmp30;
            tmp22 = tmp30;
          }
        }
        if (isUsernameFocused) {
          let tmp8;
          let tmp10;
          const _Symbol = Symbol;
          const inputHint = tmp4.inputHint;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = intl3.intl;
            const stringResult = intl.string(intl3.t.y7LSyU);
            cResult[9] = stringResult;
            tmp8 = stringResult;
          } else {
            tmp8 = cResult[9];
          }
          if (cResult[10] !== tmp4.inputHint) {
            const obj7 = {
              style: inputHint,
              variant: "text-xs/medium",
              color: "text-muted",
              animated: true,
              children: tmp8,
            };
            const Text = Text_Text.Text;
            const merged4 = Object.assign(obj);
            const merged5 = Object.assign(obj2);
            const tmp18 = authStore(Text, obj7);
            cResult[10] = tmp4.inputHint;
            cResult[11] = tmp18;
            tmp10 = tmp18;
          } else {
            tmp10 = cResult[11];
          }
          return tmp10;
        } else {
          return null;
        }
      }
    }
  : (arg0) => {
      let intl;
      let isUsernameFocused;
      let items;
      let obj6;
      let tmp6;
      let usernameStatus;
      ({ usernameStatus, isUsernameFocused } = arg0);
      const tmp = closure_13();
      let type;
      if (usernameStatus != null) {
        type = usernameStatus.type;
      }
      if (type === UniqueUsernamesTypes.NameValidationState.ERROR) {
        obj2 = { direction: "horizontal", spacing: 4, align: "flex-start", children: items };
        const Stack = Stack_Stack.Stack;
        const obj3 = { size: "xs", color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
        const CircleErrorIcon = CircleErrorIcon2.CircleErrorIcon;
        items = [authStore(CircleErrorIcon, obj3)];
        const obj4 = {
          variant: "text-xs/medium",
          color: "text-feedback-critical",
          style: tmp.status,
          animated: true,
          children: usernameStatus.message,
        };
        const Text3 = Text_Text.Text;
        const merged = Object.assign(obj);
        const merged1 = Object.assign(obj2);
        items[1] = authStore(Text3, obj4);
        tmp6 = unpackModuleId(Stack, obj2);
      } else {
        if (isUsernameFocused) {
          let type1;
          if (usernameStatus != null) {
            type1 = usernameStatus.type;
          }
          if (type1 === UniqueUsernamesTypes.NameValidationState.AVAILABLE) {
            const obj5 = {
              style: tmp.status,
              variant: "text-xs/medium",
              animated: true,
              children: authStore(Text_Text.Text, obj6),
            };
            const Text2 = Text_Text.Text;
            const merged2 = Object.assign(obj);
            const merged3 = Object.assign(obj2);
            obj6 = { variant: "text-xs/medium", color: "text-feedback-positive", children: usernameStatus.message };
            tmp6 = authStore(Text2, obj5);
          }
        }
        tmp6 = null;
        if (isUsernameFocused) {
          obj = {
            style: tmp.inputHint,
            variant: "text-xs/medium",
            color: "text-muted",
            animated: true,
            children: intl.string(intl3.t.y7LSyU),
          };
          const Text = Text_Text.Text;
          const merged4 = Object.assign(obj);
          const merged5 = Object.assign(obj2);
          intl = intl3.intl;
          tmp6 = authStore(Text, obj);
        }
      }
      return tmp6;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let autoFocus;
      let onSubmitEditing;
      let setUsername;
      let submitBehavior;
      let tmp5;
      let user;
      let username;
      let usernameStatus;
      obj = setUsername(576);
      const cResult = obj.c(23);
      ({ username, setUsername } = arg0);
      ({ usernameStatus, onSubmitEditing, submitBehavior, autoFocus } = arg0);
      const ref = react.useRef(null);
      if (autoFocus == null) {
        autoFocus = false;
      }
      if (cResult[0] !== autoFocus) {
        const obj3 = { inputRef: ref, enabled: autoFocus };
        cResult[0] = autoFocus;
        cResult[1] = obj3;
        tmp5 = obj3;
      } else {
        tmp5 = cResult[1];
      }
      useFocusRefOnNavigationDefault(tmp5);
      [r10034, importDefault] = react.useState(true);
      _slicedToArray(react.useState(true), 2);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        class A {
          constructor(arg0) {
            return arg0.errors;
          }
        }
        cResult[2] = A;
      } else {
        class A {
          constructor(arg0) {
            return arg0.errors;
          }
        }
      }
      const tmp9 = closure_9(A);
      dependencyMap = tmp9;
      if (cResult[3] === tmp9) {
        class A {
          constructor(arg0) {
            return arg0.errors;
          }
        }
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          class H {
            constructor() {
              tmp = closure_1(true);
              return;
            }
          }
          cResult[6] = H;
        } else {
          class H {
            constructor() {
              tmp = closure_1(true);
              return;
            }
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          class H {
            constructor() {
              tmp = closure_1(true);
              return;
            }
          }
          cResult[7] = tmp13;
        } else {
          class H {
            constructor() {
              tmp = closure_1(true);
              return;
            }
          }
        }
        const _Symbol3 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          class H {
            constructor() {
              tmp = closure_1(true);
              return;
            }
          }
          const stringResult = obj4.string(setUsername(1126).t.IEpCBQ);
          const intl = setUsername(1126).intl;
          const stringResult1 = intl.string(setUsername(1126).t["47dcUZ"]);
          cResult[8] = stringResult;
          cResult[9] = stringResult1;
        } else {
          class H {
            constructor() {
              tmp = closure_1(true);
              return;
            }
          }
        }
        const _Symbol4 = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          class H {
            constructor() {
              tmp = closure_1(true);
              return;
            }
          }
          const isAndroidResult = obj5.isAndroid();
          cResult[10] = isAndroidResult;
        } else {
          class H {
            constructor() {
              tmp = closure_1(true);
              return;
            }
          }
        }
        if (usernameStatus != null) {
          class H {
            constructor() {
              tmp = closure_1(true);
              return;
            }
          }
        }
        if (undefined === setUsername(14516).NameValidationState.ERROR) {
          class H {
            constructor() {
              tmp = closure_1(true);
              return;
            }
          }
        }
        if (cResult[11] === L) {
          class H {
            constructor() {
              tmp = closure_1(true);
              return;
            }
          }
        }
        const TextInput = setUsername(6098).TextInput;
        const str = "default";
        const tmpResult = setUsername(1369);
        if (tmpResult.isAndroid()) {
          class H {
            constructor() {
              tmp = closure_1(true);
              return;
            }
          }
        }
        class L {
          constructor(arg0) {
            tmp = closure_2;
            if (null != closure_2.username) {
              username = tmp.username;
              tmp2 = closure_5;
              tmp3 = closure_3;
              tmp4 = setRegistrationErrors;
              tmp5 = setRegistrationErrors(closure_5(tmp, closure_3));
            }
            tmp6 = setUsername(arg0.toLowerCase());
            return;
          }
        }
        cResult[11] = L;
        cResult[12] = onSubmitEditing;
        cResult[13] = submitBehavior;
        cResult[14] = undefined;
        cResult[15] = username;
        cResult[16] = tmp24;
      }
      class L {
        constructor(arg0) {
          tmp = closure_2;
          if (null != closure_2.username) {
            username = tmp.username;
            tmp2 = closure_5;
            tmp3 = closure_3;
            tmp4 = setRegistrationErrors;
            tmp5 = setRegistrationErrors(closure_5(tmp, closure_3));
          }
          tmp6 = setUsername(arg0.toLowerCase());
          return;
        }
      }
      cResult[3] = tmp9;
      cResult[4] = setUsername;
      cResult[5] = L;
    }
  : (setUsername) => {
      let autoFocus;
      let closure_1;
      let intl;
      let intl2;
      let items3;
      let obj4;
      let onSubmitEditing;
      let str;
      let str2;
      let submitBehavior;
      let user;
      let username;
      let usernameStatus;
      setUsername = setUsername.setUsername;
      ({ usernameStatus, autoFocus } = setUsername);
      importDefault = undefined;
      dependencyMap = undefined;
      ({ username, onSubmitEditing, submitBehavior } = setUsername);
      const ref = react.useRef(null);
      obj2 = { inputRef: ref, enabled: autoFocus };
      const tmp3 = useFocusRefOnNavigationDefault;
      if (autoFocus == null) {
        autoFocus = false;
      }
      tmp3(obj2);
      const tmp5 = _slicedToArray(react.useState(true), 2);
      importDefault = tmp7;
      const first = tmp5[0];
      const tmp8 = closure_9((errors) => errors.errors);
      dependencyMap = tmp8;
      const items = [tmp8, setUsername];
      const items1 = [tmp5[1]];
      const callback = react.useCallback((str) => {
        if (null != user.username) {
          const username = user.username;
          metroImportAll(_objectWithoutProperties(user, closure_4));
        }
        setUsername(str.toLowerCase());
      }, items);
      const items2 = [tmp5[1]];
      const callback1 = react.useCallback(() => {
        closure_1(true);
      }, items1);
      const callback2 = react.useCallback(() => {
        closure_1(false);
      }, items2);
      const obj3 = {
        ref,
        label: intl.string(setUsername(1126).t.IEpCBQ),
        accessibilityHint: intl2.string(setUsername(1126).t["47dcUZ"]),
        onChange: callback,
        autoCorrect: false,
        secureTextEntry: obj4.isAndroid(),
        keyboardType: str,
        value: username,
        onSubmitEditing,
        returnKeyType: "next",
        autoComplete: "username",
        textContentType: "username",
        autoCapitalize: "none",
        onFocus: callback1,
        onBlur: callback2,
        clearable: true,
        status: str2,
        submitBehavior,
      };
      const TextInput = setUsername(6098).TextInput;
      intl = setUsername(1126).intl;
      intl2 = setUsername(1126).intl;
      str = "default";
      obj4 = setUsername(1369);
      const obj5 = setUsername(1369);
      const tmp15 = setUsername;
      if (obj5.isAndroid()) {
        str = "visible-password";
      }
      let type;
      if (usernameStatus != null) {
        type = usernameStatus.type;
      }
      str2 = undefined;
      if (type === tmp15(14516).NameValidationState.ERROR) {
        str2 = "error";
      }
      const obj6 = { children: items3 };
      items3 = [closure_10(TextInput, obj3), closure_10(closure_16, { usernameStatus, isUsernameFocused: first })];
      return closure_11(closure_12, obj6);
    };
const result = size.fileFinishedImporting("modules/auth/native/components/RegisterUsernameInput.tsx");

export const RegisterUsernameInput = tmp4;
