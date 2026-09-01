// === Module 15546: RegisterIdentityBase ===

// Module 15546 (RegisterIdentityBase)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import useRegistrationUIStore from "useRegistrationUIStore" /* 15537 */;
import RegistrationTransitionActionTypes from "RegistrationTransitionActionTypes" /* 15538 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
function RegisterIdentityBase(inputMode) {
  inputMode = inputMode.inputMode;
  const setInputMode = inputMode.setInputMode;
  dependencyMap = undefined;
  closure_3 = undefined;
  let loginEmail;
  let identityErrorMessage;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  closure_9 = undefined;
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
  function _handleSubmit() {
    const self = this;
    const tmp = lib(function*() {
      if (c4 === 2) {
        c4 = 3;
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
          c4 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_0 = tmp3;
              closure_1_9({});
              obj1 = { step: null, actionType: null };
              let ACCOUNT_IDENTITY = closure_1_12;
              obj1[0] = closure_1_12.ACCOUNT_IDENTITY;
              let items = closure_1_13;
              obj1[1] = closure_1_13.SUBMITTED;
              closure_1_9(obj1);
              if (closure_1_0 === closure_1_0(closure_1_2[18]).PhoneOrEmailSelectorForceMode.EMAIL) {
                const obj2 = { email: null, phoneToken: "Array" };
                obj2[0] = c4;
                closure_1_10(obj2);
                const tmp26 = closure_1_7();
                if (null != tmp26) {
                  const obj3 = { email: null };
                  obj3[0] = tmp26;
                  tmp40(obj3);
                  const obj4 = { step: null, actionType: null, details: null };
                  ACCOUNT_IDENTITY = ACCOUNT_IDENTITY.ACCOUNT_IDENTITY;
                  obj4[0] = ACCOUNT_IDENTITY;
                  obj4[1] = items.INPUT_ERROR;
                  items = ["email"];
                  obj4[2] = items;
                  tmp42(obj4);
                } else {
                  const result = tmp45(tmp46[16]).handleNextOrSubmitRegistration(tmp45(tmp46[12]).AuthStates.REGISTER_IDENTITY, closure_1_2, tmp42);
                  const tmp45Result = tmp45(tmp46[16]);
                }
                c4 = 3;
              } else {
                c3 = 1;
                closure_1_8(true);
                c1 = 2;
                c4 = 1;
                const obj5 = { value: null, done: false };
                obj5[0] = closure_1_6(() => {
                  v2(tmp3(tmp31[18]).PhoneOrEmailSelectorForceMode.EMAIL);
                });
                return obj5;
              }
              tmp40 = closure_1_9;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            callback(false);
            throw closure_2;
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            callback(false);
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c3 = 0;
            callback(false);
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp31) {
          closure_2 = tmp31;
          if (tmp4 === c3) {
            c4 = tmp2;
            throw tmp31;
          } else {
            c1 = tmp;
          }
        }
      }
    });
    closure_10 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  ({ headerText, controlComponent, subheader } = inputMode);
  let obj = inputMode(4935);
  const tmp2 = callback4(45 * Math.min(2, obj.useFontScale()));
  obj1 = inputMode(1499);
  dependencyMap = obj1.useNavigation();
  const tmp5 = callback2((errors) => errors.errors);
  closure_3 = tmp5;
  let obj2 = inputMode(15547);
  const identityRegistrationStep = obj2.useIdentityRegistrationStep(inputMode(691).AuthStates.REGISTER_IDENTITY, inputMode);
  loginEmail = identityRegistrationStep.loginEmail;
  identityErrorMessage = identityRegistrationStep.identityErrorMessage;
  ({ registerAndVerifyPhone: c6, validateEmail: c7 } = identityRegistrationStep);
  ({ setLoginEmail, loginPhone, updateLoginPhone, preventSubmitIdentity, identityError } = identityRegistrationStep);
  const tmp4 = setInputMode(7717)();
  [tmp8, c8] = loginEmail(identityErrorMessage.useState(false), 2);
  closure_9 = identityErrorMessage.useContext(inputMode(15534).TrackRegistrationContext);
  let items = [tmp5.message, identityErrorMessage];
  const memo = identityErrorMessage.useMemo(() => {
    let message = identityErrorMessage;
    if (null == identityErrorMessage) {
      message = lib.message;
    }
    return message;
  }, items);
  const tmp7 = loginEmail(identityErrorMessage.useState(false), 2);
  setInputMode(15552)(inputMode(691).AuthStates.REGISTER_IDENTITY);
  const tmp10 = setInputMode(15552);
  let obj3 = inputMode(15536);
  setInputMode(15553)(obj3.getPreviousRegistrationTransitionStep(inputMode(691).AuthStates.REGISTER_IDENTITY));
  setInputMode(4945)(() => {
    callback({ step: closure_1_12.ACCOUNT_IDENTITY, actionType: closure_1_13.VIEWED });
  });
  obj = { headerText, subHeader: subheader, children: null };
  obj = { style: tmp2.container, contentContainerStyle: tmp2.scrollContent, keyboardShouldPersistTaps: "handled", children: null };
  const items1 = [controlComponent, , , ];
  const tmp12 = setInputMode(15553);
  items1[1] = callback3(inputMode(15554).RegisterPhoneOrEmailInput, { loginPhone, loginEmail, setLoginPhone: updateLoginPhone, setLoginEmail, inputMode, onSubmit: handleSubmit, inputError: identityError, autoFocus: true });
  obj1 = { style: tmp2.button, children: null };
  obj2 = { loading: tmp8, size: "lg", text: null, onPress: null, disabled: null };
  const intl = inputMode(1236).intl;
  obj2[2] = intl.string(inputMode(1236).t.PDTjLN);
  obj2[3] = handleSubmit;
  obj2[4] = preventSubmitIdentity;
  obj1[1] = callback3(inputMode(4928).Button, obj2);
  items1[2] = callback3(c6, obj1);
  let tmp15Result = null;
  if (null != memo) {
    tmp15Result = null;
    if ("" !== memo) {
      obj3 = { style: null, children: null };
      obj3[0] = tmp2.errors;
      obj3[1] = memo;
      tmp15Result = tmp15(tmp3(7714), obj3);
    }
  }
  items1[3] = tmp15Result;
  obj[3] = items1;
  obj[2] = closure_15(c7, obj);
  tmp15Result = tmp15(setInputMode(7745), obj);
  let tmp15Result1 = tmp15Result;
  if (!tmp4) {
    let obj4 = { style: null, children: null };
    obj4[0] = tmp2.page;
    obj4[1] = tmp15Result;
    tmp15Result1 = tmp15(tmp3(6049), obj4);
  }
  return tmp15Result1;
}
({ View: closure_6, ScrollView: error } = get_ActivityIndicator);
({ clearRegistrationErrorMessage: closure_8, setRegistrationErrors: c9, updateRegistrationOptions: c10, useRegistrationUIStore: unpackModuleId } = useRegistrationUIStore);
({ RegisterTransitionSteps: closure_12, RegistrationTransitionActionTypes: map1 } = RegistrationTransitionActionTypes);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let closure_16 = createCacheKey.createStyles((minHeight) => {
  const segmentedControl = { minHeight, marginBottom: 24 };
  return { container: { marginTop: 24, flex: 1 }, page: { flex: 1 }, button: { width: "100%", marginTop: 24 }, errors: { marginTop: 4 }, segmentedControl, scrollContent: { paddingBottom: 128 } };
});
let result = require("set").fileFinishedImporting("modules/auth/native/components/RegisterIdentity.tsx");

export const RegisterIdentity = function RegisterIdentity() {
  let obj = hasItem(4935);
  obj1 = hasItem(15556);
  const deviceCountry = obj1.getDeviceCountry();
  hasItem = null != deviceCountry;
  if (hasItem) {
    const EMAIL_FIRST_COUNTRIES = tmp(15557).EMAIL_FIRST_COUNTRIES;
    hasItem = EMAIL_FIRST_COUNTRIES.has(deviceCountry);
  }
  let items = [hasItem];
  const memo = React.useMemo(() => {
    let obj = { descriptor: null, mode: null };
    const t = hasItem(1236).t;
    if (hasItem) {
      obj[0] = t["w/qqKK"];
      obj[1] = hasItem(7736).PhoneOrEmailSelectorForceMode.EMAIL;
      const items = [obj, ];
      obj = { descriptor: null, mode: null };
      obj[0] = hasItem(1236).t.dEYpSt;
      obj[1] = hasItem(7736).PhoneOrEmailSelectorForceMode.PHONE;
      items[1] = obj;
      let items1 = items;
    } else {
      obj[0] = t.dEYpSt;
      obj[1] = hasItem(7736).PhoneOrEmailSelectorForceMode.PHONE;
      items1 = [obj, ];
      obj = { descriptor: null, mode: null };
      obj[0] = hasItem(1236).t["w/qqKK"];
      obj[1] = hasItem(7736).PhoneOrEmailSelectorForceMode.EMAIL;
      items1[1] = obj;
    }
    return items1;
  }, items);
  const tmp6 = callback(React.useState(memo[0].mode), 2);
  dependencyMap = tmp7;
  let items1 = [tmp6[1], memo];
  callback = React.useCallback((arg0) => {
    closure_1_8();
    dependencyMap(memo[arg0].mode);
  }, items1);
  const tmp3 = callback4(45 * Math.min(2, obj.useFontScale()));
  obj = {
    pageWidth: 0,
    defaultIndex: 0,
    onSetActiveIndex: callback,
    items: memo.map((descriptor) => {
      descriptor = descriptor.descriptor;
      const obj = { id: null, label: null, page: null };
      const intl = hasItem(1236).intl;
      obj[0] = intl.string(descriptor);
      const intl2 = hasItem(1236).intl;
      obj[1] = intl2.string(descriptor);
      return obj;
    })
  };
  const segmentedControlState = hasItem(9260).useSegmentedControlState(obj);
  const items2 = [segmentedControlState, memo];
  obj = {
    inputMode: tmp6[0],
    setInputMode: React.useCallback((arg0) => {
      closure_0 = arg0;
      const findIndexResult = memo.findIndex((mode) => mode.mode === closure_0);
      if (-1 !== findIndexResult) {
        segmentedControlState.setActiveIndex(findIndexResult, false);
      }
    }, items2),
    controlComponent: null,
    headerText: null
  };
  obj1 = { style: tmp3.segmentedControl, children: callback3(tmp(9762).SegmentedControl, { state: segmentedControlState, keyboardShouldPersistTaps: "handled" }) };
  obj[2] = callback3(closure_6, obj1);
  let intl = tmp(1236).intl;
  obj[3] = intl.string(hasItem(1236).t.WEdDgv);
  return callback3(RegisterIdentityBase, obj);
};