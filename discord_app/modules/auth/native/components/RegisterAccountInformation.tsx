// discord_app/modules/auth/native/components/RegisterAccountInformation.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexportDefault from "../../../reanimated/ReanimatedRexport.tsx";
import KeyboardAwareViewDefault from "../../../keyboard/native/KeyboardAwareView.tsx";
import FreeFormErrorLabelDefault from "../../../../design/void/Form/native/FreeFormErrorLabel.tsx";
import useWideAuthViewDefault from "../useWideAuthView.tsx";
import AuthFormViewDefault from "AuthFormView.tsx";
import useInitialRegistrationStepDefault from "../useInitialRegistrationStep.tsx";
import useAuthFlowBackHandlerDefault from "utils/useAuthFlowBackHandler.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ConsentStore from "../../../../stores/ConsentStore.tsx";
import InviteStore from "../../../../stores/InviteStore.tsx";
import DisplayedInviteStore from "../../../../stores/native/DisplayedInviteStore.tsx";

const require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const RegistrationUIStore = fn(15946);
({
  setRegistrationErrors: closure_11,
  updateRegistrationOptions: closure_12,
  useRegistrationUIStore: map1,
} = RegistrationUIStore);
const RegistrationConstants = fn(15947);
({ RegisterTransitionSteps: closure_14, RegistrationTransitionActionTypes: closure_15 } = RegistrationConstants);
const AuthStates = fn(1074).AuthStates;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
let createStyles = fn(4560);
let closure_19 = createStyles.createStyles((arg0) => {
  let obj = { container: null, password: null, button: null, errors: null, page: null };
  obj = { marginTop: nativeDefault.space.PX_24 };
  obj.container = obj;
  obj.password = { marginTop: 24 };
  let num = 50;
  if (arg0) {
    num = 0;
  }
  obj.button = { marginTop: 24, marginBottom: num };
  obj.errors = { marginTop: 4 };
  obj.page = { flex: 1 };
  return obj;
});
createStyles = { layout: null };
const LinearTransition = fn(4296).LinearTransition;
const Easing = fn(4296).Easing;
createStyles.layout = LinearTransition.easing(Easing.inOut(fn(4296).Easing.quad)).duration(300);
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
        obj = { value, done: true };
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
            closure_1 = tmp3;
            closure_0 = tmp7;
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            const obj1 = { step: constants.ACCOUNT_INFORMATION, actionType: constants2.SUBMITTED };
            context(obj1);
            const obj2 = {};
            closure_128_0 = obj2;
            const tmp60 = timestampProducer();
            if (null != tmp60) {
              obj2.username = tmp60;
            }
            importDefault(true);
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj3 = { value: _slicedToArray(), done: false };
            return obj3;
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
          const obj4 = { value, done: true };
          return obj4;
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
            obj = { step: constants.ACCOUNT_INFORMATION, actionType: constants2.INPUT_ERROR, details: null };
            const _Object2 = Object;
            obj.details = Object.keys(closure_128_0);
            closure_129_0(obj);
            c5 = 3;
            const obj5 = { value: undefined, done: true };
            return obj5;
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
  context = noop.useContext(context(15943).TrackRegistrationContext);
  let tmp8 = closure_13((submitting) => submitting.submitting);
  const tmp7 = closure_13((registrationOptions) => registrationOptions.registrationOptions);
  [tmp10, importDefault] = _slicedToArray(noop.useState(false), 2);
  const tmp11 = closure_13((errors) => errors.errors);
  let obj1 = context(504);
  const items = [DisplayedInviteStore];
  dependencyMap = obj1.useStateFromStores(items, () => displayedInviteCode.getDisplayedInviteCode());
  let obj2 = context(504);
  const items1 = [closure_9];
  const stateFromStores = obj2.useStateFromStores(items1, () => {
    let invite = null;
    if (null != closure_2) {
      invite = InviteStore.getInvite(tmp);
    }
    return invite;
  });
  const tmp9 = _slicedToArray(noop.useState(false), 2);
  let obj3 = context(15969);
  const passwordRegistrationStep = obj3.usePasswordRegistrationStep();
  ({
    password,
    validatePassword: _slicedToArray,
    setPassword,
    passwordScore,
    preventSubmitPassword,
  } = passwordRegistrationStep);
  let obj4 = context(15971);
  const usernameRegistrationStep = obj4.useUsernameRegistrationStep(AuthStates.REGISTER_ACCOUNT_INFORMATION);
  ({
    transitionToNextStepOrSubmit: noop,
    username,
    preventSubmitUsername,
    validateUsername: closure_6,
  } = usernameRegistrationStep);
  let obj = {};
  ({ usernameStatus, setUsername } = usernameRegistrationStep);
  const merged = Object.assign(tmp7);
  obj.username = username;
  obj.password = password;
  let code;
  if (stateFromStores != null) {
    code = stateFromStores.code;
  }
  obj.invite = code;
  let tmp5Result = tmp5(504);
  const items2 = [ConsentStore];
  const stateFromStores1 = tmp5Result.useStateFromStores(items2, () => result.getAuthenticationConsentRequired());
  tmp5Result = tmp5(15954);
  obj = { isConsentRequired: true === stateFromStores1 };
  const result = tmp5Result.hasAllRegistrationFieldsCompleted(obj, obj);
  ConsentStore = result;
  const intl = tmp5(1114).intl;
  const string = intl.string;
  const t = tmp5(1114).t;
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
  let tmpResult = useAuthFlowBackHandlerDefault;
  const ref = noop.useRef(null);
  tmpResult(context(15945).getPreviousRegistrationTransitionStep(AuthStates.REGISTER_ACCOUNT_INFORMATION));
  useInitialRegistrationStepDefault(AuthStates.REGISTER_ACCOUNT_INFORMATION);
  const items3 = [context];
  const effect = obj.useEffect(() => {
    context({ step: constants.ACCOUNT_INFORMATION, actionType: constants2.VIEWED });
  }, items3);
  const callback = obj.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current.focus();
    }
  }, []);
  obj1 = { headerText: null, children: null };
  tmpResult = AuthFormViewDefault;
  const intl2 = tmp5(1114).intl;
  obj1.headerText = intl2.string(context(1114).t.jec90v);
  obj2 = { contentContainerStyle: { flexGrow: 1 }, keyboardShouldPersistTaps: "handled", children: null };
  obj3 = {
    style: tmp4.container,
    children: closure_17(tmp5(15972).RegisterUsernameInput, {
      username,
      setUsername,
      onSubmitEditing: callback,
      usernameStatus,
      submitBehavior: "submit",
      autoFocus: true,
    }),
  };
  const items4 = [closure_17(closure_6, obj3), ,];
  obj4 = { style: tmp4.password };
  const merged1 = Object.assign(createStyles);
  let obj5 = {
    ref,
    password,
    onPasswordChange: setPassword,
    onSubmitEditing: handleSubmit,
    passwordScore,
    returnKeyType: null,
  };
  let str = "next";
  if (result) {
    str = "done";
  }
  obj5.returnKeyType = str;
  obj4.children = closure_17(context(15973).RegisterPasswordInput, obj5);
  items4[1] = closure_17(ReanimatedRexportDefault.View, obj4);
  const obj6 = { style: tmp4.button };
  const merged2 = Object.assign(createStyles);
  if (!tmp8) {
    tmp8 = tmp10;
  }
  const obj7 = { size: "lg", loading: tmp8, text: stringResult, onPress: handleSubmit, disabled: null };
  if (!preventSubmitUsername) {
    preventSubmitUsername = preventSubmitPassword;
  }
  obj7.disabled = preventSubmitUsername;
  const items5 = [closure_17(context(4975).Button, obj7)];
  let tmp27Result = null;
  if (null != tmp11.message) {
    tmp27Result = null;
    if ("" !== tmp11.message) {
      const obj8 = { style: tmp4.errors, children: tmp11.message };
      tmp27Result = closure_17(FreeFormErrorLabelDefault, obj8);
    }
  }
  items5[1] = tmp27Result;
  obj6.children = items5;
  items4[2] = closure_18(ReanimatedRexportDefault.View, obj6);
  obj2.children = items4;
  obj1.children = closure_18(obj, obj2);
  tmp27Result = closure_17(tmpResult, obj1);
  let tmp27Result1 = tmp27Result;
  if (!tmp3) {
    const obj9 = { style: tmp4.page, children: tmp27Result };
    tmp27Result1 = closure_17(KeyboardAwareViewDefault, obj9);
  }
  return tmp27Result1;
}
