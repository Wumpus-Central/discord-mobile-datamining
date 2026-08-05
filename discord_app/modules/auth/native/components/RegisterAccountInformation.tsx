// discord_app/modules/auth/native/components/RegisterAccountInformation.tsx
import updateInvite from "updateInvite";
import _slicedToArray from "_slicedToArray";
import trackRegTransition from "trackRegTransition";
import get_ActivityIndicator from "usePasswordRegistrationStep";
import hasConsented from "hasConsented";
import closure_9 from "updateInvite";
import getDisplayedInviteCode from "getDisplayedInviteCode";
import useRegistrationUIStore from "useRegistrationUIStore";
import RegistrationTransitionActionTypes from "RegistrationTransitionActionTypes";
import { AuthStates } from "ME";
import jsxProd from "useAuthFlowBackHandler";
import createCacheKey from "createCacheKey";
import { LinearTransition } from "module_4146";
import { Easing } from "module_4146";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { ReanimatedRexport } from "../../../reanimated/ReanimatedRexport.tsx";
import { useInitialRegistrationStep } from "../useInitialRegistrationStep.tsx";
import { useWideAuthView } from "../useWideAuthView.tsx";

let closure_12;
let closure_14;
let closure_15;
let closure_17;
let closure_18;
let closure_6;
let error;
let map1;
let unpackModuleId;
const require = arg1;
({ View: closure_6, ScrollView: error } = get_ActivityIndicator);
({ setRegistrationErrors: unpackModuleId, updateRegistrationOptions: closure_12, useRegistrationUIStore: map1 } = useRegistrationUIStore);
({ RegisterTransitionSteps: closure_14, RegistrationTransitionActionTypes: closure_15 } = RegistrationTransitionActionTypes);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
let closure_19 = createCacheKey.createStyles((arg0) => {
  let obj = { container: null, password: null, button: null, errors: null, page: null };
  obj = { marginTop: Themes.space.PX_24 };
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
const easingResult = LinearTransition.easing(Easing.inOut(require("module_4146").Easing.quad));
let result = require("noop").fileFinishedImporting("modules/auth/native/components/RegisterAccountInformation.tsx");

export default function RegisterAccountInformation() {
  let _slicedToArray;
  let trackRegTransition;
  let closure_6;
  let importDefault;
  let password;
  let passwordScore;
  let preventSubmitPassword;
  let preventSubmitUsername;
  let setPassword;
  let setUsername;
  let tmp10;
  let username;
  let usernameStatus;
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
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
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
              const obj1 = { step: null, actionType: null };
              obj1[0] = outer1_14.ACCOUNT_INFORMATION;
              obj1[1] = outer1_15.SUBMITTED;
              outer1_0(obj1);
              obj2 = {};
              const tmp61 = outer1_6();
              if (null != tmp61) {
                obj2.username = tmp61;
              }
              outer1_1(true);
              let c3 = 1;
              v0 = 2;
              v02 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = v0();
              return obj3;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            outer1_1(false);
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
              outer1_11(obj2);
              obj = { step: null, actionType: null, details: null };
              obj[0] = outer1_14.ACCOUNT_INFORMATION;
              obj[1] = outer1_15.INPUT_ERROR;
              const _Object2 = Object;
              obj[2] = Object.keys(obj2);
              obj2(obj);
              v02 = 3;
              const obj5 = { value: null, done: true };
              obj5[0] = undefined;
              return obj5;
            } else {
              outer1_12(closure_7);
              v02(hasConsented);
              v02 = 3;
              return { value: "HermesInternal", done: null };
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
    const _handleSubmit = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  const tmp3 = useWideAuthView();
  const tmp4 = callback4(tmp3);
  let obj = React;
  context = React.useContext(context(14975).TrackRegistrationContext);
  let tmp8 = callback2((submitting) => submitting.submitting);
  const tmp7 = callback2((registrationOptions) => registrationOptions.registrationOptions);
  [tmp10, importDefault] = callback(React.useState(false), 2);
  const tmp11 = callback2((errors) => errors.errors);
  let obj1 = context(589);
  const items = [getDisplayedInviteCode];
  const dependencyMap = obj1.useStateFromStores(items, () => displayedInviteCode.getDisplayedInviteCode());
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
  let obj3 = context(15000);
  const passwordRegistrationStep = obj3.usePasswordRegistrationStep();
  ({ password, validatePassword: _slicedToArray, setPassword, passwordScore, preventSubmitPassword } = passwordRegistrationStep);
  let obj4 = context(15002);
  const usernameRegistrationStep = obj4.useUsernameRegistrationStep(AuthStates.REGISTER_ACCOUNT_INFORMATION);
  ({ transitionToNextStepOrSubmit: trackRegTransition, username, preventSubmitUsername, validateUsername: closure_6 } = usernameRegistrationStep);
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
  const items2 = [hasConsented];
  const stateFromStores1 = tmp5Result.useStateFromStores(items2, () => authenticationConsentRequired.getAuthenticationConsentRequired());
  tmp5Result = tmp5(14985);
  obj = { isConsentRequired: true === stateFromStores1 };
  const result = tmp5Result.hasAllRegistrationFieldsCompleted(obj, obj);
  hasConsented = result;
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
  let tmpResult = tmp(14993);
  const tmp9 = callback(React.useState(false), 2);
  tmpResult(context(14976).getPreviousRegistrationTransitionStep(AuthStates.REGISTER_ACCOUNT_INFORMATION));
  useInitialRegistrationStep(AuthStates.REGISTER_ACCOUNT_INFORMATION);
  const items3 = [context];
  const effect = obj.useEffect(() => {
    context({ step: outer1_14.ACCOUNT_INFORMATION, actionType: outer1_15.VIEWED });
  }, items3);
  callback = obj.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current.focus();
    }
  }, []);
  obj1 = { headerText: null, children: null };
  tmpResult = tmp(8310);
  const intl2 = tmp5(1236).intl;
  obj1[0] = intl2.string(context(1236).t.jec90v);
  obj2 = { contentContainerStyle: { flexGrow: 1 }, keyboardShouldPersistTaps: "handled", children: null };
  obj3 = { style: tmp4.container, children: callback3(tmp5(15003).RegisterUsernameInput, { username, setUsername, onSubmitEditing: callback, usernameStatus, submitBehavior: "submit", autoFocus: true }) };
  const items4 = [callback3(closure_6, obj3), , ];
  obj4 = { style: tmp4.password };
  const merged1 = Object.assign(createCacheKey);
  let obj5 = { ref, password, onPasswordChange: setPassword, onSubmitEditing: handleSubmit, passwordScore, returnKeyType: null };
  let str = "next";
  if (result) {
    str = "done";
  }
  obj5[5] = str;
  obj4.children = callback3(context(15004).RegisterPasswordInput, obj5);
  items4[1] = callback3(ReanimatedRexport.View, obj4);
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
  const items5 = [callback3(context(4695).Button, obj7), ];
  let tmp27Result = null;
  if (null != tmp11.message) {
    tmp27Result = null;
    if ("" !== tmp11.message) {
      const obj8 = { style: null, children: null };
      obj8[0] = tmp4.errors;
      obj8[1] = tmp11.message;
      tmp27Result = tmp27(tmp(8280), obj8);
    }
  }
  items5[1] = tmp27Result;
  obj6.children = items5;
  items4[2] = closure_18(ReanimatedRexport.View, obj6);
  obj2[2] = items4;
  obj1[1] = closure_18(obj, obj2);
  tmp27Result = tmp27(tmpResult, obj1);
  let tmp27Result1 = tmp27Result;
  if (!tmp3) {
    const obj9 = { style: null, children: null };
    obj9[0] = tmp4.page;
    obj9[1] = tmp27Result;
    tmp27Result1 = tmp27(tmp(5733), obj9);
  }
  return tmp27Result1;
};