// discord_app/modules/auth/native/components/RegisterAgeGate.tsx
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import RegistrationStepsUtils from "../RegistrationStepsUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ConsentStore from "../../../../stores/ConsentStore.tsx";
import hooks_mod from "../../../../../_runtime/metro/04348__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const RegistrationUIStore = fn(16288);
({ updateRegistrationOptions: closure_7, useRegistrationUIStore: closure_8 } = RegistrationUIStore);
const RegistrationConstants = fn(16289);
({ RegisterTransitionSteps: closure_9, RegistrationTransitionActionTypes: c10 } = RegistrationConstants);
const AuthStates = fn(1074).AuthStates;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(4757);
let obj2 = {
  inputGroup: { marginTop: 24, marginBottom: 24 },
  flexGrow: { flexGrow: 1 },
  button: { flexGrow: 0, marginBottom: 4, marginTop: 16, flexDirection: "column" },
  datePickerButton: { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT },
  page: { flex: 1 },
};
let closure_15 = createStyles.createStyles(obj2);
let hooks = hooks_mod;
hooks = hooks.utc();
let closure_17 = hooks.toDate();
hooks = hooks.clone();
let obj3 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
const maximumDate = hooks.endOf("year").toDate();
hooks = hooks.clone();
const endOfResult = hooks.endOf("year");
const minimumDate = hooks.subtract(100, "years").toDate();
const size = fn(2);
let result = size.fileFinishedImporting("modules/auth/native/components/RegisterAgeGate.tsx");

export default function RegisterAgeGate() {
  const tmp = closure_15();
  let obj = require("native");
  _require = require("useNavigation").useNavigation();
  const context = first1.useContext(require("Auth").TrackRegistrationContext);
  birthday = state.getState().registrationOptions.birthday;
  let tmp5 = null;
  if (null != birthday) {
    tmp5 = null;
    if (context(tmp3[11])(birthday)) {
      tmp5 = birthday;
    }
  }
  [birthday, _slicedToArray] = first1.useState(tmp5);
  const consent = state.getState().registrationOptions.consent;
  [first1, closure_5] = first1.useState(null != consent && consent);
  const items = [birthday];
  const memo = obj3.useMemo(() => {
    let toDateResult;
    if (first != null) {
      toDateResult = first.toDate();
    }
    return toDateResult;
  }, items);
  let obj2 = require("useNavigation");
  const tmp9 = null != consent && consent;
  [tmp14, ConsentStore] = first1.useState(false);
  const tmp7Result2 = _slicedToArray(first1.useState(false), 2);
  const obj4Result = state((submitting) => submitting.submitting);
  const items1 = [ConsentStore];
  const stateFromStores = require("initialize").useStateFromStores(items1, () =>
    authenticationConsentRequired.getAuthenticationConsentRequired(),
  );
  const obj4Result2 = state((errors) => errors.errors);
  let message = context(tmp3[16])("consent", obj4Result2);
  if (message == null) {
    message = obj4Result2.message;
  }
  const tmp2Result = require("initialize");
  const tmp18Result = context(birthday[17]);
  tmp18Result(require("RegistrationStepsUtils").getPreviousRegistrationTransitionStep(AuthStates.AGE_GATE));
  const items2 = [context];
  const effect = obj3.useEffect(() => {
    context({ step: constants.AGE_GATE, actionType: constants2.VIEWED });
  }, items2);
  const tmp22 = context(birthday[11])(birthday);
  const obj5 = { style: tmp.page, children: null };
  const obj6 = { headerText: null, contentStyle: null, children: null };
  const tmp23 = !tmp22;
  const tmp2Result3 = require("RegistrationStepsUtils");
  const intl = tmp2(tmp3[21]).intl;
  obj6.headerText = intl.string(require("util").t.NgL2GX);
  obj6.contentStyle = tmp.flexGrow;
  const obj7 = { style: tmp.inputGroup, children: null };
  const obj8 = { label: null, errorMessage: null, children: null };
  const intl2 = tmp2(tmp3[21]).intl;
  obj8.label = intl2.string(require("util").t.xNpFJ6);
  let stringResult = null;
  if (!tmp22) {
    stringResult = null;
    if (null != birthday) {
      const intl3 = tmp2(tmp3[21]).intl;
      stringResult = intl3.string(tmp2(tmp3[21]).t.udnqh6);
    }
  }
  obj8.errorMessage = stringResult;
  let formatResult;
  if (birthday != null) {
    formatResult = birthday.format("L");
  }
  const obj9 = {
    value: formatResult,
    text: hooks.format("L"),
    onPress() {
      return authenticationConsentRequired(true);
    },
    accessibilityLabel: null,
    accessibilityHint: null,
  };
  const intl4 = tmp2(tmp3[21]).intl;
  obj9.accessibilityLabel = intl4.string(require("util").t.xNpFJ6);
  const intl5 = tmp2(tmp3[21]).intl;
  obj9.accessibilityHint = intl5.string(require("util").t["hZaF/O"]);
  obj8.children = closure_12(require("native").InputButton, obj9);
  obj7.children = closure_12(require("Input").Input, obj8);
  const items3 = [closure_12(closure_5, obj7), , ,];
  const obj10 = { consentRequired: null, consent: null, onToggleConsent: null };
  const tmp18Result4 = context(birthday[20]);
  obj10.consentRequired = Boolean(stateFromStores);
  obj10.consent = first1;
  obj10.onToggleConsent = function onToggleConsent() {
    return closure_5((arg0) => !arg0);
  };
  items3[1] = closure_12(context(birthday[24]), obj10);
  const obj11 = { style: tmp.button, children: null };
  const obj12 = {
    size: "lg",
    loading: obj4Result,
    disabled: tmp23,
    onPress() {
      _modDef38(null != birthday, "birthday was not null");
      const obj = { birthday, consent: null };
      let tmp4 = first1;
      if (!first1) {
        tmp4 = !stateFromStores;
      }
      obj.consent = tmp4;
      React5(obj);
      context({ step: constants.AGE_GATE, actionType: constants2.SUBMITTED });
      const result = RegistrationStepsUtils.handleRegistrationSubmit(AuthStates.AGE_GATE, closure_0, context);
      const obj2 = { step: constants.AGE_GATE, actionType: constants2.SUBMITTED };
    },
    text: null,
  };
  const intl6 = tmp2(tmp3[21]).intl;
  obj12.text = intl6.string(require("util").t["825cFy"]);
  obj11.children = closure_12(require("components/Button/Button").Button, obj12);
  items3[2] = closure_12(closure_5, obj11);
  let tmp26Result = null;
  if (null != message) {
    tmp26Result = null;
    if ("" !== message) {
      const obj13 = { children: message };
      tmp26Result = closure_12(tmp18(tmp3[26]), obj13);
    }
  }
  items3[3] = tmp26Result;
  obj6.children = items3;
  obj5.children = closure_13(tmp18Result4, obj6);
  const items4 = [closure_12(closure_5, obj5)];
  const obj14 = {
    modal: true,
    open: tmp14,
    title: null,
    mode: "date",
    theme: null,
    date: null,
    maximumDate: null,
    minimumDate: null,
    onConfirm: null,
    onDateChange: null,
    onCancel: null,
    buttonColor: null,
  };
  const tmp18Result5 = context(birthday[24]);
  const intl7 = tmp2(tmp3[21]).intl;
  obj14.title = intl7.string(require("util").t.xNpFJ6);
  const tmp18Result6 = context(birthday[27]);
  let str3 = "dark";
  if (tmp2Result4.isThemeLight(obj.useThemeContext().theme)) {
    str3 = "light";
  }
  obj14.theme = str3;
  let tmp34 = memo;
  if (memo == null) {
    tmp34 = closure_17;
  }
  const obj15 = { children: null };
  obj14.date = tmp34;
  obj14.maximumDate = maximumDate;
  obj14.minimumDate = minimumDate;
  obj14.onConfirm = function onConfirm(arg0) {
    authenticationConsentRequired(false);
    closure_3(hooks(arg0));
  };
  obj14.onDateChange = function onDateChange(date1) {
    closure_3(hooks(date1));
  };
  obj14.onCancel = function onCancel() {
    return authenticationConsentRequired(false);
  };
  obj14.buttonColor = tmp.datePickerButton.color;
  items4[1] = closure_12(tmp18Result6, obj14);
  obj15.children = items4;
  return closure_13(closure_14, obj15);
}
