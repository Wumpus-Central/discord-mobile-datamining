// discord_app/modules/auth/native/components/RegisterAccountInformation.tsx
import ThemesDefault from "Themes" /* 712 */;
import _modDef4115 from "module_4115" /* 4115 */;
import useWideAuthViewDefault from "useWideAuthView" /* 8582 */;
import useInitialRegistrationStepDefault from "useInitialRegistrationStep" /* 15227 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_8 from "hasConsented" /* 5258 */;
import closure_9 from "updateInvite" /* 4359 */;
import closure_10 from "getDisplayedInviteCode" /* 8923 */;
import useRegistrationUIStore from "useRegistrationUIStore" /* 15212 */;
import RegistrationTransitionActionTypes from "RegistrationTransitionActionTypes" /* 15213 */;
import { AuthStates } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import { LinearTransition, Easing } from "module_4115" /* 4115 */;

const require = arg1;
({ View: closure_6, ScrollView: error } = get_ActivityIndicator);
({ setRegistrationErrors: unpackModuleId, updateRegistrationOptions: closure_12, useRegistrationUIStore: map1 } = useRegistrationUIStore);
({ RegisterTransitionSteps: closure_14, RegistrationTransitionActionTypes: closure_15 } = RegistrationTransitionActionTypes);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
let closure_19 = createCacheKey.createStyles((arg0) => {
  let obj = { container: null, password: null, button: null, errors: null, page: null };
  obj = { marginTop: ThemesDefault.space.PX_24 };
  obj[0] = obj;
  obj[1] = { marginTop: 24 };
  let num = 50;
  if (arg0) {
    num = 0;
  }
  obj[2] = { marginTop: 24, marginBottom: num };
  obj[3] = { marginTop: 4 };
  obj[4] = { flex: 1 };
  return obj;
});
createCacheKey = { layout: null };
createCacheKey[0] = require("module_300");
const easingResult = LinearTransition.easing(Easing.inOut(require("module_4115").Easing.quad));
let result = require("set").fileFinishedImporting("modules/auth/native/components/RegisterAccountInformation.tsx");

export default function RegisterAccountInformation() {
  function _handleSubmit() {
    const self = this;
    const tmp = ref(function*() {
      if (v02 === 2) {
        v02 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          v02 = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              v02 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v02 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let callback = tmp3;
              let obj2 = tmp7;
              obj2 = undefined;
              callback = undefined;
              obj1 = { step: null, actionType: null };
              obj1[0] = closure_1_14.ACCOUNT_INFORMATION;
              obj1[1] = closure_1_15.SUBMITTED;
              closure_1_0(obj1);
              obj2 = {};
              const tmp61 = closure_1_6();
              if (null != tmp61) {
                obj2.username = tmp61;
              }
              closure_1_1(true);
              c3 = 1;
              v0 = 2;
              v02 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = v0();
              return obj3;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            closure_1_1(false);
            throw closure_2;
          } else if (arg0 === 1) {
            v02 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            callback(false);
            v02 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            callback = arg1;
            if (null != callback) {
              obj2.password = callback;
            }
            c3 = 0;
            callback(false);
            const _Object = Object;
            if (Object.keys(obj2).length > 0) {
              closure_1_11(obj2);
              obj = { step: null, actionType: null, details: null };
              obj[0] = closure_1_14.ACCOUNT_INFORMATION;
              obj[1] = closure_1_15.INPUT_ERROR;
              const _Object2 = Object;
              obj[2] = Object.keys(obj2);
              obj2(obj);
              v02 = 3;
              const obj5 = { value: null, done: true };
              obj5[0] = undefined;
              return obj5;
            } else {
              closure_1_12(closure_7);
              v02(closure_8);
              v02 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          }
        } catch (tmp44) {
          closure_2 = tmp44;
          if (tmp4 === c3) {
            v02 = tmp2;
            throw tmp44;
          } else {
            v0 = tmp;
          }
        }
      }
    });
    closure_9 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  const tmp3 = useWideAuthViewDefault();
  const tmp4 = callback4(tmp3);
  let obj = React;
  context = React.useContext(context(15210).TrackRegistrationContext);
  let tmp8 = callback2((submitting) => submitting.submitting);
  const tmp7 = callback2((registrationOptions) => registrationOptions.registrationOptions);
  [tmp10, importDefault] = callback(React.useState(false), 2);
  const tmp11 = callback2((errors) => errors.errors);
  obj1 = context(589);
  const items = [closure_10];
  dependencyMap = obj1.useStateFromStores(items, () => displayedInviteCode.getDisplayedInviteCode());
  let obj2 = context(589);
  const items1 = [_handleSubmit];
  const stateFromStores = obj2.useStateFromStores(items1, () => {
    let invite = null;
    if (null != closure_2) {
      invite = _handleSubmit.getInvite(tmp);
    }
    return invite;
  });
  const ref = React.useRef(null);
  let obj3 = context(15235);
  const passwordRegistrationStep = obj3.usePasswordRegistrationStep();
  ({ password, validatePassword: closure_4, setPassword, passwordScore, preventSubmitPassword } = passwordRegistrationStep);
  let obj4 = context(15237);
  const usernameRegistrationStep = obj4.useUsernameRegistrationStep(AuthStates.REGISTER_ACCOUNT_INFORMATION);
  ({ transitionToNextStepOrSubmit: closure_5, username, preventSubmitUsername, validateUsername: closure_6 } = usernameRegistrationStep);
  obj = {};
  ({ usernameStatus, setUsername } = usernameRegistrationStep);
  const merged = Object.assign(tmp7);
  obj.username = username;
  obj.password = password;
  let code;
  if (stateFromStores != null) {
    code = stateFromStores.code;
  }
  obj.invite = code;
  let tmp5Result = tmp5(589);
  const items2 = [result];
  const stateFromStores1 = tmp5Result.useStateFromStores(items2, () => authenticationConsentRequired.getAuthenticationConsentRequired());
  tmp5Result = tmp5(15220);
  obj = { isConsentRequired: true === stateFromStores1 };
  result = tmp5Result.hasAllRegistrationFieldsCompleted(obj, obj);
  const intl = tmp5(1236).intl;
  const string = intl.string;
  const t = tmp5(1236).t;
  if (result) {
    let stringResult = string(t["825cFy"]);
  } else {
    stringResult = string(t.PDTjLN);
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
  let tmpResult = tmp(15228);
  const tmp9 = callback(React.useState(false), 2);
  tmpResult(context(15211).getPreviousRegistrationTransitionStep(AuthStates.REGISTER_ACCOUNT_INFORMATION));
  useInitialRegistrationStepDefault(AuthStates.REGISTER_ACCOUNT_INFORMATION);
  const items3 = [context];
  const effect = obj.useEffect(() => {
    context({ step: closure_1_14.ACCOUNT_INFORMATION, actionType: closure_1_15.VIEWED });
  }, items3);
  callback = obj.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current.focus();
    }
  }, []);
  obj1 = { headerText: null, children: null };
  tmpResult = tmp(8609);
  const intl2 = tmp5(1236).intl;
  obj1[0] = intl2.string(context(1236).t.jec90v);
  obj2 = { contentContainerStyle: { flexGrow: 1 }, keyboardShouldPersistTaps: "handled", children: null };
  obj3 = { style: tmp4.container, children: callback3(tmp5(15238).RegisterUsernameInput, { username, setUsername, onSubmitEditing: callback, usernameStatus, submitBehavior: "submit", autoFocus: true }) };
  const items4 = [callback3(closure_6, obj3), , ];
  obj4 = { style: tmp4.password };
  const merged1 = Object.assign(createCacheKey);
  let obj5 = { ref, password, onPasswordChange: setPassword, onSubmitEditing: handleSubmit, passwordScore, returnKeyType: null };
  let str = "next";
  if (result) {
    str = "done";
  }
  obj5[5] = str;
  obj4.children = callback3(context(15239).RegisterPasswordInput, obj5);
  items4[1] = callback3(_modDef4115.View, obj4);
  const obj6 = { style: tmp4.button };
  const merged2 = Object.assign(createCacheKey);
  if (!tmp8) {
    tmp8 = tmp10;
  }
  const obj7 = { size: "lg", loading: tmp8, text: stringResult, onPress: handleSubmit, disabled: null };
  if (!preventSubmitUsername) {
    preventSubmitUsername = preventSubmitPassword;
  }
  obj7[4] = preventSubmitUsername;
  const items5 = [callback3(context(4745).Button, obj7), ];
  let tmp27Result = null;
  if (null != tmp11.message) {
    tmp27Result = null;
    if ("" !== tmp11.message) {
      const obj8 = { style: null, children: null };
      obj8[0] = tmp4.errors;
      obj8[1] = tmp11.message;
      tmp27Result = tmp27(tmp(8579), obj8);
    }
  }
  items5[1] = tmp27Result;
  obj6.children = items5;
  items4[2] = closure_18(_modDef4115.View, obj6);
  obj2[2] = items4;
  obj1[1] = closure_18(obj, obj2);
  tmp27Result = tmp27(tmpResult, obj1);
  let tmp27Result1 = tmp27Result;
  if (!tmp3) {
    const obj9 = { style: null, children: null };
    obj9[0] = tmp4.page;
    obj9[1] = tmp27Result;
    tmp27Result1 = tmp27(tmp(6551), obj9);
  }
  return tmp27Result1;
};