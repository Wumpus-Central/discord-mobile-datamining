// discord_app/modules/auth/native/components/RegisterUsernameInput.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import CircleErrorIcon from "../../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import useFocusRefOnNavigationDefault from "../../../../design/components/Navigator/native/useFocusRefOnNavigation.tsx";
import UniqueUsernamesTypes from "../../../unique_usernames/UniqueUsernamesTypes.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = ["username"];
let closure_4 = ["username"];
const RegistrationUIStore = fn(16348);
({ setRegistrationErrors: closure_8, useRegistrationUIStore: closure_9 } = RegistrationUIStore);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(5092);
let closure_13 = createStyles.createStyles({ status: { width: "90%" }, inputHint: { width: "100%" } });
let obj2 = { entering: null, exiting: null };
const FadeIn = fn(4850).FadeIn;
obj2.entering = FadeIn.duration(300);
const FadeOut = fn(4850).FadeOut;
obj2.exiting = FadeOut.duration(300);
let obj3 = { layout: null };
const LinearTransition = fn(4850).LinearTransition;
const Easing = fn(4850).Easing;
obj3.layout = LinearTransition.easing(Easing.inOut(fn(4850).Easing.quad)).duration(300);
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? function UsernameStatusMessage(arg0) {
      const cResult = c.c(12);
      ({ usernameStatus, isUsernameFocused } = arg0);
      const tmp4 = closure_13();
      let type;
      if (usernameStatus != null) {
        type = usernameStatus.type;
      }
      if (type === UniqueUsernamesTypes.NameValidationState.ERROR) {
        const _Symbol2 = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          obj2 = { size: "xs", color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
          const tmp35 = collapsed(CircleErrorIcon.CircleErrorIcon, obj2);
          cResult[0] = tmp35;
          let first = tmp35;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === tmp4.status) {
          if (cResult[2] === usernameStatus.message) {
            let tmp36 = cResult[3];
          }
          return tmp36;
        }
        obj3 = { direction: "horizontal", spacing: 4, align: "flex-start", children: null };
        const items = [first];
        const obj4 = { variant: "text-xs/medium", color: "text-feedback-critical", style: tmp4.status };
        const merged = Object.assign(obj2);
        const merged1 = Object.assign(obj3);
        obj4.animated = true;
        obj4.children = usernameStatus.message;
        items[1] = collapsed(Text_Text.Text, obj4);
        obj3.children = items;
        const tmp45 = closure_1_11(Stack_Stack.Stack, obj3);
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
            if (cResult[4] !== usernameStatus.message) {
              const obj5 = {
                variant: "text-xs/medium",
                color: "text-feedback-positive",
                children: usernameStatus.message,
              };
              const tmp21 = collapsed(Text_Text.Text, obj5);
              cResult[4] = usernameStatus.message;
              cResult[5] = tmp21;
              let tmp19 = tmp21;
            } else {
              tmp19 = cResult[5];
            }
            if (cResult[6] === tmp4.status) {
              if (cResult[7] === tmp19) {
                let tmp22 = cResult[8];
              }
              return tmp22;
            }
            const obj6 = {};
            const merged2 = Object.assign(obj2);
            const merged3 = Object.assign(obj3);
            obj6.style = tmp4.status;
            obj6.variant = "text-xs/medium";
            obj6.animated = true;
            obj6.children = tmp19;
            const tmp30 = collapsed(Text_Text.Text, obj6);
            cResult[6] = tmp4.status;
            cResult[7] = tmp19;
            cResult[8] = tmp30;
            tmp22 = tmp30;
          }
        }
        if (isUsernameFocused) {
          const _Symbol = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = util.intl;
            const stringResult = intl.string(util.t.y7LSyU);
            cResult[9] = stringResult;
            let tmp8 = stringResult;
          } else {
            tmp8 = cResult[9];
          }
          if (cResult[10] !== tmp4.inputHint) {
            const obj7 = {};
            const merged4 = Object.assign(obj2);
            const merged5 = Object.assign(obj3);
            obj7.style = tmp4.inputHint;
            obj7.variant = "text-xs/medium";
            obj7.color = "text-muted";
            obj7.animated = true;
            obj7.children = tmp8;
            const tmp18 = collapsed(Text_Text.Text, obj7);
            cResult[10] = tmp4.inputHint;
            cResult[11] = tmp18;
            let tmp10 = tmp18;
          } else {
            tmp10 = cResult[11];
          }
          return tmp10;
        } else {
          return null;
        }
      }
    }
  : function UsernameStatusMessage(arg0) {
      ({ usernameStatus, isUsernameFocused } = arg0);
      const tmp = closure_13();
      let type;
      if (usernameStatus != null) {
        type = usernameStatus.type;
      }
      if (type === UniqueUsernamesTypes.NameValidationState.ERROR) {
        obj2 = { direction: "horizontal", spacing: 4, align: "flex-start", children: null };
        obj3 = { size: "xs", color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
        const items = [collapsed(CircleErrorIcon.CircleErrorIcon, obj3)];
        const obj4 = { variant: "text-xs/medium", color: "text-feedback-critical", style: tmp.status };
        const merged = Object.assign(obj2);
        const merged1 = Object.assign(obj3);
        obj4.animated = true;
        obj4.children = usernameStatus.message;
        items[1] = collapsed(Text_Text.Text, obj4);
        obj2.children = items;
        let tmp6 = closure_1_11(Stack_Stack.Stack, obj2);
      } else {
        if (isUsernameFocused) {
          let type1;
          if (usernameStatus != null) {
            type1 = usernameStatus.type;
          }
          if (type1 === UniqueUsernamesTypes.NameValidationState.AVAILABLE) {
            const obj5 = {};
            const merged2 = Object.assign(obj2);
            const merged3 = Object.assign(obj3);
            obj5.style = tmp.status;
            obj5.variant = "text-xs/medium";
            obj5.animated = true;
            const obj6 = {
              variant: "text-xs/medium",
              color: "text-feedback-positive",
              children: usernameStatus.message,
            };
            obj5.children = collapsed(Text_Text.Text, obj6);
            tmp6 = collapsed(Text_Text.Text, obj5);
          }
        }
        tmp6 = null;
        if (isUsernameFocused) {
          const obj = {};
          const merged4 = Object.assign(obj2);
          const merged5 = Object.assign(obj3);
          obj.style = tmp.inputHint;
          obj.variant = "text-xs/medium";
          obj.color = "text-muted";
          obj.animated = true;
          const intl = util.intl;
          obj.children = intl.string(util.t.y7LSyU);
          tmp6 = collapsed(Text_Text.Text, obj);
        }
      }
      return tmp6;
    };
ReactCompilerGating = fn(558);
const easingResult = LinearTransition.easing(Easing.inOut(fn(4850).Easing.quad));
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/RegisterUsernameInput.tsx");

export const RegisterUsernameInput = ReactCompilerGating.isReactCompilerEnabled()
  ? function RegisterUsernameInput(arg0) {
      const cResult = setUsername(576).c(23);
      ({ username, setUsername } = arg0);
      ({ usernameStatus, onSubmitEditing, submitBehavior, autoFocus } = arg0);
      const ref = noop.useRef(null);
      if (autoFocus == null) {
        autoFocus = false;
      }
      if (cResult[0] !== autoFocus) {
        obj3 = { inputRef: ref, enabled: autoFocus };
        cResult[0] = autoFocus;
        cResult[1] = obj3;
        let tmp5 = obj3;
      } else {
        tmp5 = cResult[1];
      }
      useFocusRefOnNavigationDefault(tmp5);
      const obj = setUsername(576);
      [r10034, importDefault] = noop.useState(true);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor(arg0) {
            return arg0.errors;
          }
        }
        cResult[2] = U;
      } else {
        class U {
          constructor(arg0) {
            return arg0.errors;
          }
        }
      }
      const tmp9 = closure_9(U);
      dependencyMap = tmp9;
      if (cResult[3] === tmp9) {
        class U {
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
          let tmp15 = stringResult1;
          const tmp14 = stringResult;
        } else {
          class H {
            constructor() {
              tmp = closure_1(true);
              return;
            }
          }
          tmp15 = cResult[9];
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
          const tmp18 = isAndroidResult;
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
        if (undefined === setUsername(14960).NameValidationState.ERROR) {
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
        const obj6 = {
          ref,
          label: tmp14,
          accessibilityHint: tmp15,
          onChange: L,
          autoCorrect: false,
          secureTextEntry: tmp18,
          keyboardType: null,
          value: null,
          onSubmitEditing: null,
          returnKeyType: "next",
          autoComplete: "username",
          textContentType: "username",
          autoCapitalize: "none",
          onFocus: null,
          onBlur: null,
          clearable: true,
          status: null,
          submitBehavior: null,
        };
        const TextInput = setUsername(6285).TextInput;
        if (tmpResult.isAndroid()) {
          class H {
            constructor() {
              tmp = closure_1(true);
              return;
            }
          }
        }
        obj6.keyboardType = "default";
        obj6.value = username;
        obj6.onSubmitEditing = onSubmitEditing;
        obj6.onFocus = H;
        obj6.onBlur = tmp13;
        obj6.status = undefined;
        obj6.submitBehavior = submitBehavior;
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
        tmpResult = setUsername(1382);
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
      const tmp7 = _slicedToArray(noop.useState(true), 2);
    }
  : function RegisterUsernameInput(setUsername) {
      setUsername = setUsername.setUsername;
      ({ usernameStatus, autoFocus } = setUsername);
      importDefault = undefined;
      dependencyMap = undefined;
      ({ username, onSubmitEditing, submitBehavior } = setUsername);
      const ref = noop.useRef(null);
      obj2 = { inputRef: ref, enabled: null };
      if (autoFocus == null) {
        autoFocus = false;
      }
      obj2.enabled = autoFocus;
      useFocusRefOnNavigationDefault(obj2);
      const tmp5 = _slicedToArray(noop.useState(true), 2);
      importDefault = tmp6;
      const tmp7 = closure_9((errors) => errors.errors);
      dependencyMap = tmp7;
      const items = [tmp7, setUsername];
      const items1 = [tmp5[1]];
      const callback = noop.useCallback((str) => {
        if (null != user.username) {
          const username = user.username;
          closure_2_8(_objectWithoutProperties(user, closure_4));
        }
        setUsername(str.toLowerCase());
      }, items);
      const items2 = [tmp5[1]];
      const callback1 = noop.useCallback(() => {
        closure_1(true);
      }, items1);
      const callback2 = noop.useCallback(() => {
        closure_1(false);
      }, items2);
      obj3 = {
        ref,
        label: null,
        accessibilityHint: null,
        onChange: null,
        autoCorrect: false,
        secureTextEntry: null,
        keyboardType: null,
        value: null,
        onSubmitEditing: null,
        returnKeyType: "next",
        autoComplete: "username",
        textContentType: "username",
        autoCapitalize: "none",
        onFocus: null,
        onBlur: null,
        clearable: true,
        status: null,
        submitBehavior: null,
      };
      const intl = setUsername(1126).intl;
      obj3.label = intl.string(setUsername(1126).t.IEpCBQ);
      const intl2 = setUsername(1126).intl;
      obj3.accessibilityHint = intl2.string(setUsername(1126).t["47dcUZ"]);
      obj3.onChange = callback;
      const tmp14 = setUsername;
      obj3.secureTextEntry = setUsername(1382).isAndroid();
      const obj4 = setUsername(1382);
      let str = "default";
      if (obj5.isAndroid()) {
        str = "visible-password";
      }
      obj3.keyboardType = str;
      obj3.value = username;
      obj3.onSubmitEditing = onSubmitEditing;
      obj3.onFocus = callback1;
      obj3.onBlur = callback2;
      let type;
      if (usernameStatus != null) {
        type = usernameStatus.type;
      }
      let str2;
      if (type === tmp14(14960).NameValidationState.ERROR) {
        str2 = "error";
      }
      const obj6 = { children: null };
      obj3.status = str2;
      obj3.submitBehavior = submitBehavior;
      const items3 = [
        closure_10(setUsername(6285).TextInput, obj3),
        closure_10(closure_16, { usernameStatus, isUsernameFocused: tmp5[0] }),
      ];
      obj6.children = items3;
      return closure_11(closure_12, obj6);
    };
