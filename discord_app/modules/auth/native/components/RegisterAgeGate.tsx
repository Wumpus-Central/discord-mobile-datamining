// === Module 15982: RegisterAgeGate ===

// Module 15982 (RegisterAgeGate)
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 576 */;
import RegistrationStepsUtils from "RegistrationStepsUtils" /* 15945 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConsentStore from "ConsentStore" /* 6595 */;
import hooks from "module_4153" /* 4153 */;

require = fn;
const View = fn(17).View;
const RegistrationUIStore = fn(15946);
({ updateRegistrationOptions: closure_7, useRegistrationUIStore: closure_8 } = RegistrationUIStore);
const RegistrationConstants = fn(15947);
({ RegisterTransitionSteps: closure_9, RegistrationTransitionActionTypes: c10 } = RegistrationConstants);
const AuthStates = fn(1074).AuthStates;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
fn(4560);
let createStyles = { inputGroup: { marginTop: 24, marginBottom: 24 }, flexGrow: { flexGrow: 1 }, button: { flexGrow: 0, marginBottom: 4, marginTop: 16, flexDirection: "column" }, datePickerButton: null, page: null };
createStyles = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createStyles.datePickerButton = createStyles;
createStyles.page = { flex: 1 };
let closure_15 = createStyles.createStyles(createStyles);
hooks = hooks.utc();
let closure_17 = hooks.toDate();
hooks = hooks.clone();
const maximumDate = hooks.endOf("year").toDate();
hooks = hooks.clone();
const endOfResult = hooks.endOf("year");
const minimumDate = hooks.subtract(100, "years").toDate();
const size = fn(2);
let result = size.fileFinishedImporting("modules/auth/native/components/RegisterAgeGate.tsx");

export default function RegisterAgeGate() {
  const tmp = closure_15();
  let obj = require("native");
  let obj1 = require("useNavigation");
  _require = obj1.useNavigation();
  let obj2 = first1;
  const context = first1.useContext(require("Auth").TrackRegistrationContext);
  let obj3 = state;
  birthday = state.getState().registrationOptions.birthday;
  let tmp5 = null;
  if (null != birthday) {
    tmp5 = null;
    if (context(tmp3[11])(birthday)) {
      tmp5 = birthday;
    }
  }
  const tmp8 = _slicedToArray(first1.useState(tmp5), 2);
  birthday = tmp8[0];
  _slicedToArray = tmp8[1];
  const consent = obj3.getState().registrationOptions.consent;
  let tmp7Result = tmp7(obj2.useState(null != consent && consent), 2);
  first1 = tmp7Result[0];
  closure_5 = tmp7Result[1];
  const items = [birthday];
  const memo = obj2.useMemo(() => {
    let toDateResult;
    if (first != null) {
      toDateResult = first.toDate();
    }
    return toDateResult;
  }, items);
  tmp7Result = tmp7(obj2.useState(false), 2);
  [tmp14, ConsentStore] = tmp7Result;
  obj3((submitting) => submitting.submitting);
  let tmp2Result = tmp2(tmp3[15]);
  const items1 = [ConsentStore];
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
    context({ step: constants.AGE_GATE, actionType: constants2.VIEWED });
  }, items2);
  const tmp22 = context(birthday[11])(birthday);
  obj = { style: tmp.page, children: null };
  obj = { headerText: null, contentStyle: null, children: null };
  tmp18Result = tmp18(tmp3[20]);
  const intl = tmp2(tmp3[21]).intl;
  obj.headerText = intl.string(require("util").t.NgL2GX);
  obj.contentStyle = tmp.flexGrow;
  obj1 = { style: tmp.inputGroup, children: null };
  obj2 = { label: null, errorMessage: null, children: null };
  const intl2 = tmp2(tmp3[21]).intl;
  obj2.label = intl2.string(require("util").t.xNpFJ6);
  let stringResult = null;
  if (!tmp22) {
    stringResult = null;
    if (null != birthday) {
      const intl3 = tmp2(tmp3[21]).intl;
      stringResult = intl3.string(tmp2(tmp3[21]).t.udnqh6);
    }
  }
  obj2.errorMessage = stringResult;
  let formatResult;
  if (birthday != null) {
    formatResult = birthday.format("L");
  }
  obj3 = {
    value: formatResult,
    text: hooks.format("L"),
    onPress() {
      return authenticationConsentRequired(true);
    },
    accessibilityLabel: null,
    accessibilityHint: null
  };
  const intl4 = tmp2(tmp3[21]).intl;
  obj3.accessibilityLabel = intl4.string(require("util").t.xNpFJ6);
  const intl5 = tmp2(tmp3[21]).intl;
  obj3.accessibilityHint = intl5.string(require("util").t["hZaF/O"]);
  obj2.children = closure_12(require("native").InputButton, obj3);
  obj1.children = closure_12(require("Input").Input, obj2);
  const items3 = [closure_12(closure_5, obj1), , , ];
  const obj4 = {
    consentRequired: Boolean(stateFromStores),
    consent: first1,
    onToggleConsent() {
      return closure_5((arg0) => !arg0);
    }
  };
  items3[1] = closure_12(context(birthday[24]), obj4);
  const obj5 = { style: tmp.button, children: null };
  const obj6 = {
    size: "lg",
    loading: obj4Result,
    disabled: !tmp22,
    onPress() {
      _modDef38(null != birthday, "birthday was not null");
      let obj = { birthday, consent: null };
      let tmp4 = first1;
      if (!first1) {
        tmp4 = !stateFromStores;
      }
      obj.consent = tmp4;
      React5(obj);
      obj = { step: constants.AGE_GATE, actionType: constants2.SUBMITTED };
      context(obj);
      const result = RegistrationStepsUtils.handleRegistrationSubmit(AuthStates.AGE_GATE, closure_0, context);
    },
    text: null
  };
  const intl6 = tmp2(tmp3[21]).intl;
  obj6.text = intl6.string(require("util").t["825cFy"]);
  obj5.children = closure_12(require("components/Button/Button").Button, obj6);
  items3[2] = closure_12(closure_5, obj5);
  let tmp26Result = null;
  if (null != message) {
    tmp26Result = null;
    if ("" !== message) {
      const obj7 = { children: message };
      tmp26Result = tmp26(tmp18(tmp3[26]), obj7);
    }
  }
  items3[3] = tmp26Result;
  obj.children = items3;
  obj.children = closure_13(tmp18Result, obj);
  const items4 = [closure_12(closure_5, obj), ];
  const obj8 = { modal: true, open: tmp14, title: null, mode: "date", theme: null, date: null, maximumDate: null, minimumDate: null, onConfirm: null, onDateChange: null, onCancel: null, buttonColor: null };
  const tmp18Result1 = context(birthday[24]);
  const tmp23 = !tmp22;
  const tmp25 = closure_14;
  const tmp9 = null != consent && consent;
  const intl7 = tmp2(tmp3[21]).intl;
  obj8.title = intl7.string(require("util").t.xNpFJ6);
  const tmp18Result2 = context(birthday[27]);
  let str3 = "dark";
  if (tmp2Result1.isThemeLight(obj.useThemeContext().theme)) {
    str3 = "light";
  }
  obj8.theme = str3;
  let tmp34 = memo;
  if (memo == null) {
    tmp34 = closure_17;
  }
  const obj9 = { children: null };
  obj8.date = tmp34;
  obj8.maximumDate = maximumDate;
  obj8.minimumDate = minimumDate;
  obj8.onConfirm = function onConfirm(arg0) {
    authenticationConsentRequired(false);
    closure_3(hooks(arg0));
  };
  obj8.onDateChange = function onDateChange(date) {
    closure_3(hooks(date));
  };
  obj8.onCancel = function onCancel() {
    return authenticationConsentRequired(false);
  };
  obj8.buttonColor = tmp.datePickerButton.color;
  items4[1] = closure_12(tmp18Result2, obj8);
  obj9.children = items4;
  return closure_13(tmp25, obj9);
};