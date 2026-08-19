// === Module 15248: RegisterAgeGate ===

// Module 15248 (RegisterAgeGate)
import ThemesDefault from "Themes" /* 712 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import hasConsented from "hasConsented" /* 5258 */;
import useRegistrationUIStore from "useRegistrationUIStore" /* 15212 */;
import RegistrationTransitionActionTypes from "RegistrationTransitionActionTypes" /* 15213 */;
import { AuthStates } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";
import importDefaultResult from "t" /* 3975 */;
import subtractResult from "module_100" /* 100 */;

const require = fn;
({ updateRegistrationOptions: error, useRegistrationUIStore: closure_8 } = useRegistrationUIStore);
({ RegisterTransitionSteps: c9, RegistrationTransitionActionTypes: c10 } = RegistrationTransitionActionTypes);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createCacheKey = { color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { flex: 1 };
let closure_15 = createCacheKey.createStyles(createCacheKey);
const utcResult = importDefaultResult.utc();
let closure_17 = utcResult.toDate();
const cloneResult = utcResult.clone();
let closure_18 = utcResult.clone().endOf("year").toDate();
const endOfResult = utcResult.clone().endOf("year");
const cloneResult1 = utcResult.clone();
let closure_19 = require("module_100").toDate();
let result = require("obj132").fileFinishedImporting("modules/auth/native/components/RegisterAgeGate.tsx");

export default function RegisterAgeGate() {
  const tmp = callback2();
  let obj = _require(first[12]);
  obj1 = _require(first[13]);
  _require = obj1.useNavigation();
  let obj2 = first1;
  const context = first1.useContext(_require(first[14]).TrackRegistrationContext);
  let obj3 = state;
  const birthday = state.getState().registrationOptions.birthday;
  let tmp5 = null;
  if (null != birthday) {
    tmp5 = null;
    if (context(tmp3[11])(birthday)) {
      tmp5 = birthday;
    }
  }
  const tmp8 = callback(first1.useState(tmp5), 2);
  first = tmp8[0];
  callback = tmp8[1];
  const consent = obj3.getState().registrationOptions.consent;
  let tmp7Result = tmp7(obj2.useState(null != consent && consent), 2);
  first1 = tmp7Result[0];
  closure_5 = tmp7Result[1];
  const items = [first];
  const memo = obj2.useMemo(() => {
    let toDateResult;
    if (first != null) {
      toDateResult = first.toDate();
    }
    return toDateResult;
  }, items);
  tmp7Result = tmp7(obj2.useState(false), 2);
  [tmp14, closure_6] = tmp7Result;
  obj3((submitting) => submitting.submitting);
  let tmp2Result = tmp2(tmp3[15]);
  const items1 = [closure_6];
  const stateFromStores = tmp2Result.useStateFromStores(items1, () => authenticationConsentRequired.getAuthenticationConsentRequired());
  const obj4Result = obj3((errors) => errors.errors);
  let message = context(tmp3[16])("consent", obj4Result);
  if (message == null) {
    message = obj4Result.message;
  }
  let tmp18Result = tmp18(tmp3[17]);
  tmp2Result = tmp2(tmp3[18]);
  tmp18Result(tmp2Result.getPreviousRegistrationTransitionStep(AuthStates.AGE_GATE));
  const items2 = [context];
  const effect = obj2.useEffect(() => {
    context({ step: closure_1_9.AGE_GATE, actionType: closure_1_10.VIEWED });
  }, items2);
  const tmp22 = context(first[11])(first);
  obj = { headerText: null, contentStyle: null, children: null };
  tmp18Result = tmp18(tmp3[20]);
  const intl = tmp2(tmp3[21]).intl;
  obj[0] = intl.string(_require(first[21]).t.NgL2GX);
  obj[1] = tmp.flexGrow;
  obj1 = { style: tmp.inputGroup, children: null };
  obj2 = { label: null, errorMessage: null, children: null };
  const intl2 = tmp2(tmp3[21]).intl;
  obj2[0] = intl2.string(_require(first[21]).t.xNpFJ6);
  let stringResult = null;
  if (!tmp22) {
    stringResult = null;
    if (null != first) {
      const intl3 = tmp2(tmp3[21]).intl;
      stringResult = intl3.string(tmp2(tmp3[21]).t.udnqh6);
    }
  }
  obj2[1] = stringResult;
  let formatResult;
  if (first != null) {
    formatResult = first.format("L");
  }
  obj3 = {
    value: formatResult,
    text: utcResult.format("L"),
    onPress() {
      return authenticationConsentRequired(true);
    },
    accessibilityLabel: null,
    accessibilityHint: null
  };
  const intl4 = tmp2(tmp3[21]).intl;
  obj3[3] = intl4.string(_require(first[21]).t.xNpFJ6);
  const intl5 = tmp2(tmp3[21]).intl;
  obj3[4] = intl5.string(_require(first[21]).t["hZaF/O"]);
  obj2[2] = callback(_require(first[23]).InputButton, obj3);
  obj1[1] = callback(_require(first[22]).Input, obj2);
  const items3 = [callback(closure_5, obj1), , , ];
  const obj4 = {
    consentRequired: Boolean(stateFromStores),
    consent: first1,
    onToggleConsent() {
      return callback3((arg0) => !arg0);
    }
  };
  items3[1] = callback(context(first[24]), obj4);
  const obj5 = { style: tmp.button, children: null };
  const obj6 = {
    size: "lg",
    loading: obj4Result,
    disabled: !tmp22,
    onPress() {
      context(first[19])(null != first, "birthday was not null");
      let obj = { birthday: first, consent: null };
      let tmp4 = first1;
      if (!first1) {
        tmp4 = !stateFromStores;
      }
      obj[1] = tmp4;
      stateFromStores(obj);
      obj = { step: closure_1_9.AGE_GATE, actionType: closure_1_10.SUBMITTED };
      context(obj);
      const result = callback(first[18]).handleRegistrationSubmit(AuthStates.AGE_GATE, callback, context);
      const obj3 = callback(first[18]);
    },
    text: null
  };
  const intl6 = tmp2(tmp3[21]).intl;
  obj6[4] = intl6.string(_require(first[21]).t["825cFy"]);
  obj5[1] = callback(_require(first[25]).Button, obj6);
  items3[2] = callback(closure_5, obj5);
  let tmp26Result = null;
  if (null != message) {
    tmp26Result = null;
    if ("" !== message) {
      const obj7 = { children: null };
      obj7[0] = message;
      tmp26Result = callback(tmp18(tmp3[26]), obj7);
    }
  }
  items3[3] = tmp26Result;
  obj[2] = items3;
  obj[1] = callback2(tmp18Result, obj);
  const items4 = [callback(closure_5, obj), ];
  const obj8 = { modal: true, open: tmp14, title: null, mode: "date", theme: null, date: null, maximumDate: null, minimumDate: null, onConfirm: null, onDateChange: null, onCancel: null, buttonColor: null };
  const tmp18Result1 = context(first[24]);
  const intl7 = tmp2(tmp3[21]).intl;
  obj8[2] = intl7.string(_require(first[21]).t.xNpFJ6);
  const tmp18Result2 = context(first[27]);
  let str3 = "dark";
  if (tmp2Result1.isThemeLight(obj.useThemeContext().theme)) {
    str3 = "light";
  }
  obj8[4] = str3;
  let tmp34 = memo;
  if (memo == null) {
    tmp34 = closure_17;
  }
  const obj9 = { children: null };
  obj8[5] = tmp34;
  obj8[6] = closure_18;
  obj8[7] = closure_19;
  obj8[8] = function onConfirm(arg0) {
    authenticationConsentRequired(false);
    callback2(context(first[10])(arg0));
  };
  obj8[9] = function onDateChange(date) {
    callback2(context(first[10])(date));
  };
  obj8[10] = function onCancel() {
    return authenticationConsentRequired(false);
  };
  obj8[11] = tmp.datePickerButton.color;
  items4[1] = callback(tmp18Result2, obj8);
  obj9[0] = items4;
  return callback2(closure_14, obj9);
};