// === Module 15915: RegisterIdentity ===

// Module 15915 (RegisterIdentity)
import intl3 from "intl" /* 1126 */;
import PhoneOrEmailUtils from "PhoneOrEmailUtils" /* 6458 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import RegistrationUIStore from "RegistrationUIStore" /* 15906 */;
import RegistrationConstants from "RegistrationConstants" /* 15907 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c1, c4, dependencyMap, descriptor;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
function RegisterIdentityBase(inputMode) {
  let Button;
  let _undefined;
  let _undefined2;
  let _undefined3;
  let c6;
  let c7;
  let c8;
  let controlComponent;
  let headerText;
  let identityError;
  let intl;
  let items1;
  let loginPhone;
  let obj6;
  let obj8;
  let preventSubmitIdentity;
  let setLoginEmail;
  let subheader;
  let tmp18;
  let tmp8;
  let updateLoginPhone;
  inputMode = inputMode.inputMode;
  const setInputMode = inputMode.setInputMode;
  dependencyMap = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  function handleSubmit() {
    return obj(...arguments);
  }
  let obj = function _handleSubmit() {
    let email;
    obj = _asyncToGenerator(async () => {
      let closure_0;
      if (c4 === 2) {
        c4 = 3;
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
              const obj4 = { step: constants.ACCOUNT_IDENTITY, actionType: constants2.SUBMITTED };
              closure_2_9(obj4);
              if (inputMode === tmp(closure_2[18]).PhoneOrEmailSelectorForceMode.EMAIL) {
                const obj5 = { email, phoneToken: "Array" };
                closure_1_10(obj5);
                const tmp23 = _undefined2();
                if (null != tmp23) {
                  const obj6 = { email: tmp23 };
                  closure_1_9(obj6);
                  const obj7 = { step: constants.ACCOUNT_IDENTITY, actionType: constants2.INPUT_ERROR, details: ["email"] };
                  closure_2_9(obj7);
                } else {
                  const tmp43Result = tmp(closure_2[16]);
                  const result = tmp43Result.handleNextOrSubmitRegistration(tmp(tmp44[12]).AuthStates.REGISTER_IDENTITY, closure_2_2, closure_2_9);
                }
                c4 = 3;
                const obj8 = { value: tmp26, done: true };
                return obj8;
              } else {
                c3 = 1;
                _undefined3(true);
                c1 = 2;
                c4 = 1;
                const obj9 = {
                  value: _undefined(() => {
                              closure_1_1(closure_0(closure_2[18]).PhoneOrEmailSelectorForceMode.EMAIL);
                            }),
                  done: false
                };
                return obj9;
              }
            }
          } else if (1 === tmp4) {
            c3 = 0;
            closure_128_8(false);
            throw closure_2;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_8(false);
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
            closure_128_8(false);
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp29) {
          closure_2 = tmp29;
          if (0 === c3) {
            c4 = 3;
            throw tmp29;
          } else {
            c1 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = dependencyMap;
  ({ headerText, controlComponent, subheader } = inputMode);
  obj = inputMode(5609);
  const tmp2 = closure_16(45 * min(2, obj.useFontScale()));
  const tmp3 = setInputMode;
  const tmp4 = setInputMode(6439)();
  let obj2 = inputMode(1490);
  dependencyMap = obj2.useNavigation();
  const tmp5 = closure_11((errors) => errors.errors);
  let message = tmp5;
  let obj3 = inputMode(15916);
  const identityRegistrationStep = obj3.useIdentityRegistrationStep(inputMode(1105).AuthStates.REGISTER_IDENTITY, inputMode);
  const loginEmail = identityRegistrationStep.loginEmail;
  const identityErrorMessage = identityRegistrationStep.identityErrorMessage;
  ({ registerAndVerifyPhone: c6, validateEmail: c7 } = identityRegistrationStep);
  ({ setLoginEmail, loginPhone, updateLoginPhone, preventSubmitIdentity, identityError } = identityRegistrationStep);
  [tmp8, c8] = loginEmail(identityErrorMessage.useState(false), 2);
  const tmp7 = loginEmail(identityErrorMessage.useState(false), 2);
  let closure_9 = identityErrorMessage.useContext(inputMode(15903).TrackRegistrationContext);
  const items = [tmp5.message, identityErrorMessage];
  const memo = identityErrorMessage.useMemo(() => {
    message = identityErrorMessage;
    if (null == identityErrorMessage) {
      message = message.message;
    }
    return message;
  }, items);
  const tmp10 = setInputMode(15921);
  tmp10(inputMode(1105).AuthStates.REGISTER_IDENTITY);
  const tmp12 = setInputMode(15922);
  let obj4 = inputMode(15905);
  tmp12(obj4.getPreviousRegistrationTransitionStep(inputMode(1105).AuthStates.REGISTER_IDENTITY));
  setInputMode(5597)(() => {
    obj = { step: constants.ACCOUNT_IDENTITY, actionType: map1.VIEWED };
    closure_9(obj);
  });
  let obj5 = { headerText, subHeader: subheader, children: closure_15(tmp18, obj6) };
  obj6 = { style: tmp2.container, contentContainerStyle: tmp2.scrollContent, keyboardShouldPersistTaps: "handled", children: items1 };
  items1 = [controlComponent, , , ];
  const tmp16 = setInputMode(6467);
  items1[1] = closure_14(inputMode(15923).RegisterPhoneOrEmailInput, { loginPhone, loginEmail, setLoginPhone: updateLoginPhone, setLoginEmail, inputMode, onSubmit: handleSubmit, inputError: identityError, autoFocus: true });
  let obj7 = { style: tmp2.button, children: closure_14(Button, obj8) };
  obj8 = { loading: tmp8, size: "lg", text: intl.string(inputMode(1126).t.PDTjLN), onPress: handleSubmit, disabled: preventSubmitIdentity };
  Button = inputMode(5601).Button;
  intl = inputMode(1126).intl;
  items1[2] = closure_14(c6, obj7);
  let tmp15Result = null;
  tmp18 = c7;
  if (null != memo) {
    tmp15Result = null;
    if ("" !== memo) {
      let obj9 = { style: tmp2.errors, children: memo };
      tmp15Result = closure_14(tmp3(6435), obj9);
    }
  }
  items1[3] = tmp15Result;
  const tmp15Result3 = closure_14(tmp16, obj5);
  let tmp15Result4 = tmp15Result3;
  if (!tmp4) {
    const obj10 = { style: tmp2.page, children: tmp15Result3 };
    tmp15Result4 = closure_14(tmp3(6544), obj10);
  }
  return tmp15Result4;
}
({ View: metroRequire, ScrollView: metroImportDefault } = react_native);
({ clearRegistrationErrorMessage: metroImportAll, setRegistrationErrors: c9, updateRegistrationOptions: c10, useRegistrationUIStore: unpackModuleId } = RegistrationUIStore);
({ RegisterTransitionSteps: closure_12, RegistrationTransitionActionTypes: map1 } = RegistrationConstants);
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let closure_16 = createStyles.createStyles((minHeight) => {
  const obj = { container: { marginTop: 24, flex: 1 }, page: { flex: 1 }, button: { width: "100%", marginTop: 24 }, errors: { marginTop: 4 }, segmentedControl: obj2, scrollContent: { paddingBottom: 128 } };
  return obj;
});
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let arr;
  let first;
  let segmentedControlState;
  let tmp10;
  let obj = arr(segmentedControlState[26]);
  const cResult = obj.c(16);
  const obj2 = arr(segmentedControlState[8]);
  const tmp4 = closure_16(45 * min(2, obj2.useFontScale()));
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = arr(segmentedControlState[27]);
    const deviceCountry = tmpResult.getDeviceCountry();
    let hasItem = null != deviceCountry;
    if (hasItem) {
      const EMAIL_FIRST_COUNTRIES = tmp(tmp2[28]).EMAIL_FIRST_COUNTRIES;
      hasItem = EMAIL_FIRST_COUNTRIES.has(deviceCountry);
    }
    cResult[0] = hasItem;
    first = hasItem;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let items1;
    const obj3 = { descriptor: null, mode: null };
    const t = tmp(tmp2[22]).t;
    if (first) {
      obj3.descriptor = t["w/qqKK"];
      obj3.mode = arr(segmentedControlState[18]).PhoneOrEmailSelectorForceMode.EMAIL;
      const items = [obj3, ];
      items[1] = { descriptor: arr(segmentedControlState[22]).t.dEYpSt, mode: arr(segmentedControlState[18]).PhoneOrEmailSelectorForceMode.PHONE };
      items1 = items;
      const obj4 = { descriptor: arr(segmentedControlState[22]).t.dEYpSt, mode: arr(segmentedControlState[18]).PhoneOrEmailSelectorForceMode.PHONE };
    } else {
      obj3.descriptor = t.dEYpSt;
      obj3.mode = arr(segmentedControlState[18]).PhoneOrEmailSelectorForceMode.PHONE;
      items1 = [obj3, ];
      items1[1] = { descriptor: arr(segmentedControlState[22]).t["w/qqKK"], mode: arr(segmentedControlState[18]).PhoneOrEmailSelectorForceMode.EMAIL };
      const obj5 = { descriptor: arr(segmentedControlState[22]).t["w/qqKK"], mode: arr(segmentedControlState[18]).PhoneOrEmailSelectorForceMode.EMAIL };
    }
    cResult[1] = items1;
    arr = items1;
  } else {
    arr = cResult[1];
  }
  [tmp10, importDefault] = react.useState(arr[0].mode);
  _slicedToArray(react.useState(arr[0].mode), 2);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor(arg0) {
        metroImportAll();
        importDefault(arr[arg0].mode);
      }
    }
    cResult[2] = I;
  } else {
    class I {
      constructor(arg0) {
        metroImportAll();
        importDefault(arr[arg0].mode);
      }
    }
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor(arg0) {
        metroImportAll();
        importDefault(arr[arg0].mode);
      }
    }
    tmp13[2] = I;
    tmp13[3] = arr.map((descriptor) => {
      let intl;
      let intl2;
      descriptor = descriptor.descriptor;
      const obj = { id: intl.string(descriptor), label: intl2.string(descriptor), page: null };
      intl = arr(segmentedControlState[22]).intl;
      intl2 = arr(segmentedControlState[22]).intl;
      return obj;
    });
    cResult[3] = tmp13;
  } else {
    class I {
      constructor(arg0) {
        metroImportAll();
        importDefault(arr[arg0].mode);
      }
    }
  }
  const tmpResult2 = arr(segmentedControlState[29]);
  segmentedControlState = tmpResult2.useSegmentedControlState(tmp13);
  if (cResult[4] !== segmentedControlState) {
    class I {
      constructor(arg0) {
        metroImportAll();
        importDefault(arr[arg0].mode);
      }
    }
    cResult[4] = segmentedControlState;
    cResult[5] = tmp16;
  } else {
    class I {
      constructor(arg0) {
        metroImportAll();
        importDefault(arr[arg0].mode);
      }
    }
  }
  if (cResult[6] !== segmentedControlState) {
    class I {
      constructor(arg0) {
        metroImportAll();
        importDefault(arr[arg0].mode);
      }
    }
    const obj6 = { state: segmentedControlState, keyboardShouldPersistTaps: "handled" };
    cResult[6] = segmentedControlState;
    cResult[7] = closure_14(arr(segmentedControlState[30]).SegmentedControl, obj6);
    const tmp18 = closure_14(arr(segmentedControlState[30]).SegmentedControl, obj6);
  } else {
    class I {
      constructor(arg0) {
        metroImportAll();
        importDefault(arr[arg0].mode);
      }
    }
  }
  if (cResult[8] === tmp4.segmentedControl) {
    let tmp21;
    class I {
      constructor(arg0) {
        metroImportAll();
        importDefault(arr[arg0].mode);
      }
    }
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor(arg0) {
          metroImportAll();
          importDefault(arr[arg0].mode);
        }
      }
      const stringResult = obj10.string(arr(segmentedControlState[22]).t.WEdDgv);
      cResult[11] = stringResult;
      tmp21 = stringResult;
    } else {
      class I {
        constructor(arg0) {
          metroImportAll();
          importDefault(arr[arg0].mode);
        }
      }
    }
    if (cResult[12] === tmp16) {
      class I {
        constructor(arg0) {
          metroImportAll();
          importDefault(arr[arg0].mode);
        }
      }
    }
    const obj7 = { inputMode: tmp10, setInputMode: tmp16, controlComponent: tmp19, headerText: tmp21 };
    cResult[12] = tmp16;
    cResult[13] = tmp10;
    cResult[14] = tmp19;
    cResult[15] = closure_14(RegisterIdentityBase, obj7);
    const tmp26 = closure_14(RegisterIdentityBase, obj7);
  }
  const obj8 = { style: tmp4.segmentedControl, children: tmp17 };
  cResult[8] = tmp4.segmentedControl;
  cResult[9] = tmp17;
  cResult[10] = closure_14(closure_6, obj8);
  const tmp20 = closure_14(closure_6, obj8);
}) : (() => {
  let closure_2;
  let hasItem;
  let intl;
  let obj5;
  let obj = hasItem(5609);
  const tmp3 = closure_16(45 * min(2, obj.useFontScale()));
  let obj2 = hasItem(15924);
  const deviceCountry = obj2.getDeviceCountry();
  hasItem = null != deviceCountry;
  if (hasItem) {
    const EMAIL_FIRST_COUNTRIES = tmp(15925).EMAIL_FIRST_COUNTRIES;
    hasItem = EMAIL_FIRST_COUNTRIES.has(deviceCountry);
  }
  let items = [hasItem];
  const memo = react.useMemo(() => {
    let items1;
    const obj = { descriptor: null, mode: null };
    const t = intl3.t;
    if (hasItem) {
      obj.descriptor = t["w/qqKK"];
      obj.mode = PhoneOrEmailUtils.PhoneOrEmailSelectorForceMode.EMAIL;
      const items = [obj, ];
      items[1] = { descriptor: intl3.t.dEYpSt, mode: PhoneOrEmailUtils.PhoneOrEmailSelectorForceMode.PHONE };
      items1 = items;
      const obj2 = { descriptor: intl3.t.dEYpSt, mode: PhoneOrEmailUtils.PhoneOrEmailSelectorForceMode.PHONE };
    } else {
      obj.descriptor = t.dEYpSt;
      obj.mode = PhoneOrEmailUtils.PhoneOrEmailSelectorForceMode.PHONE;
      items1 = [obj, ];
      items1[1] = { descriptor: intl3.t["w/qqKK"], mode: PhoneOrEmailUtils.PhoneOrEmailSelectorForceMode.EMAIL };
      const obj3 = { descriptor: intl3.t["w/qqKK"], mode: PhoneOrEmailUtils.PhoneOrEmailSelectorForceMode.EMAIL };
    }
    return items1;
  }, items);
  const tmp6 = _slicedToArray(react.useState(memo[0].mode), 2);
  dependencyMap = tmp8;
  let items1 = [tmp6[1], memo];
  const first = tmp6[0];
  const callback = react.useCallback((arg0) => {
    metroImportAll();
    closure_2(memo[arg0].mode);
  }, items1);
  const tmpResult = hasItem(9317);
  let obj3 = {
    pageWidth: 0,
    defaultIndex: 0,
    onSetActiveIndex: callback,
    items: memo.map((descriptor) => {
      let intl;
      let intl2;
      descriptor = descriptor.descriptor;
      const obj = { id: intl.string(descriptor), label: intl2.string(descriptor), page: null };
      intl = hasItem(closure_2[22]).intl;
      intl2 = hasItem(closure_2[22]).intl;
      return obj;
    })
  };
  const segmentedControlState = tmpResult.useSegmentedControlState(obj3);
  const items2 = [segmentedControlState, memo];
  const obj4 = {
    inputMode: first,
    setInputMode: react.useCallback((arg0) => {
      let closure_0 = arg0;
      const findIndexResult = memo.findIndex((mode) => mode.mode === closure_0);
      if (-1 !== findIndexResult) {
        segmentedControlState.setActiveIndex(findIndexResult, false);
      }
    }, items2),
    controlComponent: closure_14(closure_6, obj5),
    headerText: intl.string(hasItem(1126).t.WEdDgv)
  };
  obj5 = { style: tmp3.segmentedControl, children: closure_14(hasItem(9318).SegmentedControl, { state: segmentedControlState, keyboardShouldPersistTaps: "handled" }) };
  intl = tmp(1126).intl;
  return closure_14(RegisterIdentityBase, obj4);
});
let result = size.fileFinishedImporting("modules/auth/native/components/RegisterIdentity.tsx");

export const RegisterIdentity = tmp6;