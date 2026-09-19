// === Module 16293: RegisterAccountInformation ===

// Module 16293 (RegisterAccountInformation)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4492 */;
import KeyboardAwareViewDefault from "KeyboardAwareView" /* 5790 */;
import FreeFormErrorLabelDefault from "FreeFormErrorLabel" /* 7179 */;
import useWideAuthViewDefault from "useWideAuthView" /* 7182 */;
import AuthFormViewDefault from "AuthFormView" /* 7210 */;
import useInitialRegistrationStepDefault from "useInitialRegistrationStep" /* 16286 */;
import useAuthFlowBackHandlerDefault from "useAuthFlowBackHandler" /* 16287 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConsentStore from "ConsentStore" /* 6831 */;
import InviteStore from "InviteStore" /* 4740 */;
import DisplayedInviteStore from "DisplayedInviteStore" /* 9018 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const RegistrationUIStore = fn(16271);
({ setRegistrationErrors: closure_11, updateRegistrationOptions: closure_12, useRegistrationUIStore: map1 } = RegistrationUIStore);
const RegistrationConstants = fn(16272);
({ RegisterTransitionSteps: closure_14, RegistrationTransitionActionTypes: closure_15 } = RegistrationConstants);
const AuthStates = fn(1074).AuthStates;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
const createStyles = fn(4756);
let closure_19 = createStyles.createStyles((arg0) => {
  const obj = { container: { marginTop: nativeDefault.space.PX_24 }, password: { marginTop: 24 }, button: null, errors: null, page: null };
  let num = 50;
  if (arg0) {
    num = 0;
  }
  obj.button = { marginTop: 24, marginBottom: num };
  obj.errors = { marginTop: 4 };
  obj.page = { flex: 1 };
  return obj;
});
let obj2 = { layout: null };
const LinearTransition = fn(4492).LinearTransition;
const Easing = fn(4492).Easing;
obj2.layout = LinearTransition.easing(Easing.inOut(fn(4492).Easing.quad)).duration(300);
const size = fn(2);
let result = size.fileFinishedImporting("modules/auth/native/components/RegisterAccountInformation.tsx");

export default function RegisterAccountInformation() {
  closure_9 = async function _handleSubmit() {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj2 = { value, done: true };
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
            closure_1 = tmp3;
            closure_0 = tmp7;
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            const obj4 = { step: constants.ACCOUNT_INFORMATION, actionType: constants2.SUBMITTED };
            context(obj4);
            const obj5 = {};
            closure_128_0 = obj5;
            const tmp60 = timestampProducer();
            if (null != tmp60) {
              obj5.username = tmp60;
            }
            importDefault(true);
            c3 = 1;
            c4 = 2;
            c5 = 1;
            obj6 = { value: _slicedToArray(), done: false };
            return obj6;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_129_1(false);
          throw closure_2;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_129_1(false);
          c5 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          closure_128_1 = value;
          if (null != closure_128_1) {
            closure_128_0.password = closure_128_1;
          }
          c3 = 0;
          closure_129_1(false);
          const _Object = Object;
          if (Object.keys(closure_128_0).length > 0) {
            closure_1_11(closure_128_0);
            const obj = { step: constants.ACCOUNT_INFORMATION, actionType: constants2.INPUT_ERROR, details: null };
            const _Object2 = Object;
            obj.details = Object.keys(closure_128_0);
            closure_129_0(obj);
            c5 = 3;
            const obj8 = { value: undefined, done: true };
            return obj8;
          } else {
            closure_1_12(closure_129_7);
            closure_129_5(closure_129_8);
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        }
      } catch (tmp44) {
        closure_2 = tmp44;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp44;
        } else {
          c4 = tmp;
        }
      }
    }
  };
  const tmp3 = useWideAuthViewDefault();
  const tmp4 = closure_19(tmp3);
  context = noop.useContext(context(16268).TrackRegistrationContext);
  let tmp8 = closure_13((submitting) => submitting.submitting);
  const tmp7 = closure_13((registrationOptions) => registrationOptions.registrationOptions);
  [tmp10, importDefault] = noop.useState(false);
  const tmp11 = closure_13((errors) => errors.errors);
  obj2 = context(504);
  const items = [DisplayedInviteStore];
  dependencyMap = obj2.useStateFromStores(items, () => displayedInviteCode.getDisplayedInviteCode());
  const tmp9 = _slicedToArray(noop.useState(false), 2);
  const items1 = [closure_9];
  const stateFromStores = context(504).useStateFromStores(items1, () => {
    let invite = null;
    if (null != closure_2) {
      invite = InviteStore.getInvite(tmp);
    }
    return invite;
  });
  let obj3 = context(504);
  const ref = noop.useRef(null);
  const passwordRegistrationStep = context(16294).usePasswordRegistrationStep();
  ({ password, validatePassword: _slicedToArray, setPassword, passwordScore, preventSubmitPassword } = passwordRegistrationStep);
  let obj4 = context(16294);
  const usernameRegistrationStep = context(16296).useUsernameRegistrationStep(AuthStates.REGISTER_ACCOUNT_INFORMATION);
  ({ transitionToNextStepOrSubmit: noop, username, preventSubmitUsername, validateUsername: closure_6 } = usernameRegistrationStep);
  let obj6 = {};
  ({ usernameStatus, setUsername } = usernameRegistrationStep);
  const merged = Object.assign(tmp7);
  obj6.username = username;
  obj6.password = password;
  let code;
  if (stateFromStores != null) {
    code = stateFromStores.code;
  }
  obj6.invite = code;
  let obj5 = context(16296);
  const items2 = [ConsentStore];
  const stateFromStores1 = context(504).useStateFromStores(items2, () => result.getAuthenticationConsentRequired());
  const tmp5Result = context(504);
  const result = context(16279).hasAllRegistrationFieldsCompleted(obj6, { isConsentRequired: true === stateFromStores1 });
  ConsentStore = result;
  const intl = tmp5(1115).intl;
  const string = intl.string;
  const t = tmp5(1115).t;
  if (result) {
    let stringResult = string(t["825cFy"]);
  } else {
    stringResult = string(t.PDTjLN);
  }
  function handleSubmit() {
    const self = this;
    const apply = closure_9.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let obj7 = { isConsentRequired: true === stateFromStores1 };
  const tmp5Result3 = context(16279);
  const tmpResult = useAuthFlowBackHandlerDefault;
  tmpResult(context(16270).getPreviousRegistrationTransitionStep(AuthStates.REGISTER_ACCOUNT_INFORMATION));
  useInitialRegistrationStepDefault(AuthStates.REGISTER_ACCOUNT_INFORMATION);
  const items3 = [context];
  const effect = noop.useEffect(() => {
    context({ step: constants.ACCOUNT_INFORMATION, actionType: constants2.VIEWED });
  }, items3);
  const callback = noop.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current.focus();
    }
  }, []);
  let obj8 = { headerText: null, children: null };
  const tmp5Result4 = context(16270);
  const intl2 = tmp5(1115).intl;
  obj8.headerText = intl2.string(context(1115).t.jec90v);
  const obj9 = { contentContainerStyle: { flexGrow: 1 }, keyboardShouldPersistTaps: "handled", children: null };
  const tmpResult2 = AuthFormViewDefault;
  const items4 = [closure_17(closure_6, { style: tmp4.container, children: closure_17(context(16297).RegisterUsernameInput, { username, setUsername, onSubmitEditing: callback, usernameStatus, submitBehavior: "submit", autoFocus: true }) }), , ];
  const obj11 = { style: tmp4.password };
  const merged1 = Object.assign(obj2);
  const obj12 = { ref, password, onPasswordChange: setPassword, onSubmitEditing: handleSubmit, passwordScore, returnKeyType: null };
  let str = "next";
  if (result) {
    str = "done";
  }
  obj12.returnKeyType = str;
  obj11.children = closure_17(context(16298).RegisterPasswordInput, obj12);
  items4[1] = closure_17(ReanimatedRexportDefault.View, obj11);
  const obj13 = { style: tmp4.button };
  const merged2 = Object.assign(obj2);
  if (!tmp8) {
    tmp8 = tmp10;
  }
  const obj14 = { size: "lg", loading: tmp8, text: stringResult, onPress: handleSubmit, disabled: null };
  if (!preventSubmitUsername) {
    preventSubmitUsername = preventSubmitPassword;
  }
  obj14.disabled = preventSubmitUsername;
  const items5 = [closure_17(context(5186).Button, obj14), ];
  let tmp27Result = null;
  if (null != tmp11.message) {
    tmp27Result = null;
    if ("" !== tmp11.message) {
      const obj15 = { style: tmp4.errors, children: tmp11.message };
      tmp27Result = closure_17(FreeFormErrorLabelDefault, obj15);
    }
  }
  items5[1] = tmp27Result;
  obj13.children = items5;
  items4[2] = closure_18(ReanimatedRexportDefault.View, obj13);
  obj9.children = items4;
  obj8.children = closure_18(obj6, obj9);
  const tmp27Result3 = closure_17(tmpResult2, obj8);
  let tmp27Result4 = tmp27Result3;
  if (!tmp3) {
    const obj16 = { style: tmp4.page, children: tmp27Result3 };
    tmp27Result4 = closure_17(KeyboardAwareViewDefault, obj16);
  }
  return tmp27Result4;
};