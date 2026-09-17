// discord_app/modules/auth/native/components/RegisterIdentity.tsx
import util from "../../../../intl/index.native.tsx";
import PhoneOrEmailUtils from "../../../phone/PhoneOrEmailUtils.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function RegisterIdentityBase(inputMode) {
  inputMode = inputMode.inputMode;
  const setInputMode = inputMode.setInputMode;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  function handleSubmit() {
    const self = this;
    const apply = closure_10.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  closure_10 = async function _handleSubmit() {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1_9({});
            const obj4 = { step: null, actionType: null };
            let ACCOUNT_IDENTITY = constants;
            obj4.step = constants.ACCOUNT_IDENTITY;
            let items = constants2;
            obj4.actionType = constants2.SUBMITTED;
            React7(obj4);
            if (inputMode === tmp3(tmp31[18]).PhoneOrEmailSelectorForceMode.EMAIL) {
              const obj5 = { email, phoneToken: "a" };
              closure_1_10(obj5);
              const tmp26 = React5();
              if (null != tmp26) {
                const obj6 = { email: tmp26 };
                closure_1_9(obj6);
                const obj7 = { step: null, actionType: null, details: null };
                ACCOUNT_IDENTITY = ACCOUNT_IDENTITY.ACCOUNT_IDENTITY;
                obj7.step = ACCOUNT_IDENTITY;
                obj7.actionType = items.INPUT_ERROR;
                items = ["email"];
                obj7.details = items;
                React7(obj7);
              } else {
                const result = tmp3(tmp31[16]).handleNextOrSubmitRegistration(
                  tmp3(tmp31[12]).AuthStates.REGISTER_IDENTITY,
                  dependencyMap,
                  React7,
                );
                const tmp44Result = tmp3(tmp31[16]);
              }
              c4 = 3;
            } else {
              c3 = 1;
              React6(true);
              c1 = 2;
              c4 = 1;
              const obj8 = {
                value: timestampProducer(() => {
                  closure_1_1(closure_0(closure_2[18]).PhoneOrEmailSelectorForceMode.EMAIL);
                }),
                done: false,
              };
              return obj8;
            }
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_128_8(false);
          throw tmp31;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_128_8(false);
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c3 = 0;
          closure_128_8(false);
          c4 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp31) {
        if (tmp4 === c3) {
          c4 = tmp2;
          throw tmp31;
        } else {
          c1 = tmp;
        }
      }
    }
  };
  ({ headerText, controlComponent, subheader } = inputMode);
  const tmp2 = closure_16(45 * Math.min(2, inputMode(5069).useFontScale()));
  let obj = inputMode(5069);
  const tmp4 = setInputMode(7056)();
  dependencyMap = inputMode(1484).useNavigation();
  const tmp5 = closure_11((errors) => errors.errors);
  let message = tmp5;
  let obj2 = inputMode(1484);
  const identityRegistrationStep = inputMode(16108).useIdentityRegistrationStep(
    inputMode(1094).AuthStates.REGISTER_IDENTITY,
    inputMode,
  );
  const loginEmail = identityRegistrationStep.loginEmail;
  const identityErrorMessage = identityRegistrationStep.identityErrorMessage;
  ({ registerAndVerifyPhone: c6, validateEmail: c7 } = identityRegistrationStep);
  ({ setLoginEmail, loginPhone, updateLoginPhone, preventSubmitIdentity, identityError } = identityRegistrationStep);
  let obj3 = inputMode(16108);
  [tmp8, c8] = loginEmail(identityErrorMessage.useState(false), 2);
  closure_9 = identityErrorMessage.useContext(inputMode(16095).TrackRegistrationContext);
  let items = [tmp5.message, identityErrorMessage];
  const memo = identityErrorMessage.useMemo(() => {
    message = identityErrorMessage;
    if (null == identityErrorMessage) {
      message = message.message;
    }
    return message;
  }, items);
  const tmp7 = loginEmail(identityErrorMessage.useState(false), 2);
  setInputMode(16113)(inputMode(1094).AuthStates.REGISTER_IDENTITY);
  const tmp10 = setInputMode(16113);
  const tmp12 = setInputMode(16114);
  tmp12(inputMode(16097).getPreviousRegistrationTransitionStep(inputMode(1094).AuthStates.REGISTER_IDENTITY));
  setInputMode(5079)(() => {
    closure_9({ step: constants.ACCOUNT_IDENTITY, actionType: constants2.VIEWED });
  });
  let obj5 = { headerText, subHeader: subheader, children: null };
  let obj6 = {
    style: tmp2.container,
    contentContainerStyle: tmp2.scrollContent,
    keyboardShouldPersistTaps: "handled",
    children: null,
  };
  const items1 = [controlComponent, , ,];
  let obj4 = inputMode(16097);
  items1[1] = closure_14(inputMode(16115).RegisterPhoneOrEmailInput, {
    loginPhone,
    loginEmail,
    setLoginPhone: updateLoginPhone,
    setLoginEmail,
    inputMode,
    onSubmit: handleSubmit,
    inputError: identityError,
    autoFocus: true,
  });
  let obj7 = { style: tmp2.button, children: null };
  let obj8 = { loading: tmp8, size: "lg", text: null, onPress: null, disabled: null };
  const intl = inputMode(1115).intl;
  obj8.text = intl.string(inputMode(1115).t.PDTjLN);
  obj8.onPress = handleSubmit;
  obj8.disabled = preventSubmitIdentity;
  obj7.children = closure_14(inputMode(5062).Button, obj8);
  items1[2] = closure_14(c6, obj7);
  let tmp15Result = null;
  if (null != memo) {
    tmp15Result = null;
    if ("" !== memo) {
      const obj9 = { style: tmp2.errors, children: memo };
      tmp15Result = closure_14(tmp3(7053), obj9);
    }
  }
  items1[3] = tmp15Result;
  obj6.children = items1;
  obj5.children = closure_15(c7, obj6);
  const tmp15Result3 = closure_14(setInputMode(7084), obj5);
  let tmp15Result4 = tmp15Result3;
  if (!tmp4) {
    const obj10 = { style: tmp2.page, children: tmp15Result3 };
    tmp15Result4 = closure_14(tmp3(5666), obj10);
  }
  return tmp15Result4;
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const RegistrationUIStore = fn(16098);
({
  clearRegistrationErrorMessage: closure_8,
  setRegistrationErrors: closure_9,
  updateRegistrationOptions: c10,
  useRegistrationUIStore: closure_11,
} = RegistrationUIStore);
const RegistrationConstants = fn(16099);
({ RegisterTransitionSteps: closure_12, RegistrationTransitionActionTypes: map1 } = RegistrationConstants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4640);
let closure_16 = createStyles.createStyles((minHeight) => {
  const obj = {
    container: { marginTop: 24, flex: 1 },
    page: { flex: 1 },
    button: { width: "100%", marginTop: 24 },
    errors: { marginTop: 4 },
    segmentedControl: { minHeight, marginBottom: 24 },
    scrollContent: { paddingBottom: 128 },
  };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/auth/native/components/RegisterIdentity.tsx");

export const RegisterIdentity = function RegisterIdentity() {
  let obj = hasItem(5069);
  const tmp3 = closure_16(45 * Math.min(2, hasItem(5069).useFontScale()));
  const deviceCountry = hasItem(16117).getDeviceCountry();
  hasItem = null != deviceCountry;
  if (hasItem) {
    const EMAIL_FIRST_COUNTRIES = tmp(16118).EMAIL_FIRST_COUNTRIES;
    hasItem = EMAIL_FIRST_COUNTRIES.has(deviceCountry);
  }
  let items = [hasItem];
  const memo = noop.useMemo(() => {
    const obj = { descriptor: null, mode: null };
    const t = util.t;
    if (hasItem) {
      obj.descriptor = t["w/qqKK"];
      obj.mode = PhoneOrEmailUtils.PhoneOrEmailSelectorForceMode.EMAIL;
      const items = [obj];
      const obj2 = { descriptor: util.t.dEYpSt, mode: PhoneOrEmailUtils.PhoneOrEmailSelectorForceMode.PHONE };
      items[1] = obj2;
      let items1 = items;
    } else {
      obj.descriptor = t.dEYpSt;
      obj.mode = PhoneOrEmailUtils.PhoneOrEmailSelectorForceMode.PHONE;
      items1 = [obj];
      const obj3 = { descriptor: util.t["w/qqKK"], mode: PhoneOrEmailUtils.PhoneOrEmailSelectorForceMode.EMAIL };
      items1[1] = obj3;
    }
    return items1;
  }, items);
  const tmp6 = _slicedToArray(noop.useState(memo[0].mode), 2);
  dependencyMap = tmp7;
  let items1 = [tmp6[1], memo];
  const callback = noop.useCallback((arg0) => {
    React6();
    dependencyMap(memo[arg0].mode);
  }, items1);
  let obj2 = hasItem(16117);
  const tmpResult = hasItem(9943);
  const segmentedControlState = tmpResult.useSegmentedControlState({
    pageWidth: 0,
    defaultIndex: 0,
    onSetActiveIndex: callback,
    items: memo.map((descriptor) => {
      descriptor = descriptor.descriptor;
      const obj = { id: null, label: null, page: null };
      const intl = hasItem(1115).intl;
      obj.id = intl.string(descriptor);
      const intl2 = hasItem(1115).intl;
      obj.label = intl2.string(descriptor);
      return obj;
    }),
  });
  const items2 = [segmentedControlState, memo];
  const obj4 = {
    inputMode: tmp6[0],
    setInputMode: noop.useCallback((arg0) => {
      closure_0 = arg0;
      const findIndexResult = memo.findIndex((mode) => mode.mode === closure_0);
      if (-1 !== findIndexResult) {
        segmentedControlState.setActiveIndex(findIndexResult, false);
      }
    }, items2),
    controlComponent: null,
    headerText: null,
  };
  let obj3 = {
    pageWidth: 0,
    defaultIndex: 0,
    onSetActiveIndex: callback,
    items: memo.map((descriptor) => {
      descriptor = descriptor.descriptor;
      const obj = { id: null, label: null, page: null };
      const intl = hasItem(1115).intl;
      obj.id = intl.string(descriptor);
      const intl2 = hasItem(1115).intl;
      obj.label = intl2.string(descriptor);
      return obj;
    }),
  };
  obj4.controlComponent = closure_14(closure_6, {
    style: tmp3.segmentedControl,
    children: closure_14(hasItem(9944).SegmentedControl, {
      state: segmentedControlState,
      keyboardShouldPersistTaps: "handled",
    }),
  });
  let intl = tmp(1115).intl;
  obj4.headerText = intl.string(hasItem(1115).t.WEdDgv);
  return closure_14(RegisterIdentityBase, obj4);
};
