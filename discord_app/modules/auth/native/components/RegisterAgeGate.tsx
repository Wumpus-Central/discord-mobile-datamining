// discord_app/modules/auth/native/components/RegisterAgeGate.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import RegistrationStepsUtils from "../RegistrationStepsUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import ConsentStore from "../../../../stores/ConsentStore.tsx";
import RegistrationUIStore from "../RegistrationUIStore.tsx";
import RegistrationConstants from "../../RegistrationConstants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import module_4467_mod from "../../../../../_runtime/metro/04467__.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, navigation;

let c10;
let c9;
let closure_12;
let closure_14;
let map1;
let metroImportAll;
let metroImportDefault;
let obj2;
const View = react_native.View;
({ updateRegistrationOptions: metroImportDefault, useRegistrationUIStore: metroImportAll } = RegistrationUIStore);
({ RegisterTransitionSteps: c9, RegistrationTransitionActionTypes: c10 } = RegistrationConstants);
const AuthStates = Constants.AuthStates;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let obj = {
  inputGroup: { marginTop: 24, marginBottom: 24 },
  flexGrow: { flexGrow: 1 },
  button: { flexGrow: 0, marginBottom: 4, marginTop: 16, flexDirection: "column" },
  datePickerButton: obj2,
  page: { flex: 1 },
};
obj2 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_15 = createStyles.createStyles(obj);
let module_4467 = module_4467_mod;
module_4467 = module_4467.utc();
let closure_17 = module_4467.toDate();
module_4467 = module_4467.clone();
const endOfResult = module_4467.endOf("year");
const maximumDate = endOfResult.toDate();
module_4467 = module_4467.clone();
const subtractResult = module_4467.subtract(100, "years");
const minimumDate = subtractResult.toDate();
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let authenticationConsentRequired;
      let closure_3;
      let closure_5;
      let first;
      let first1;
      let first2;
      let tmp14;
      let tmp27;
      let tmp28;
      let tmp32;
      let tmp34;
      let tmp38;
      let tmp39;
      let obj = navigation(first1[13]);
      const cResult = obj.c(78);
      let tmp4 = closure_15();
      let obj2 = navigation(first1[14]);
      const theme = obj2.useThemeContext().theme;
      let obj3 = navigation(first1[15]);
      const tmp = navigation;
      navigation = obj3.useNavigation();
      const context = first2.useContext(navigation(first1[16]).TrackRegistrationContext);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const birthday = closure_8.getState().registrationOptions.birthday;
        let tmp10 = null;
        if (null != birthday) {
          tmp10 = null;
          if (context(first1[11])(birthday)) {
            tmp10 = birthday;
          }
        }
        cResult[0] = tmp10;
        first = tmp10;
      } else {
        first = cResult[0];
      }
      [first1, _slicedToArray] = first2.useState(first);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const consent = closure_8.getState().registrationOptions.consent;
        cResult[1] = null != consent && consent;
        tmp14 = tmp17;
      } else {
        tmp14 = cResult[1];
      }
      [first2, closure_5] = first2.useState(tmp14);
      if (cResult[2] !== first1) {
        let toDateResult;
        if (first1 != null) {
          toDateResult = first1.toDate();
        }
        cResult[2] = first1;
        cResult[3] = toDateResult;
      }
      [r10081, ConsentStore] = first2.useState(false);
      _slicedToArray(first2.useState(false), 2);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class J {
          constructor(submitting) {
            return submitting.submitting;
          }
        }
        cResult[4] = J;
      } else {
        class J {
          constructor(submitting) {
            return submitting.submitting;
          }
        }
      }
      closure_8(J);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class J {
          constructor(submitting) {
            return submitting.submitting;
          }
        }
        const items = [ConsentStore];
        class H {
          constructor() {
            return ConsentStore.getAuthenticationConsentRequired();
          }
        }
        cResult[5] = items;
        cResult[6] = H;
        tmp28 = H;
        tmp27 = items;
      } else {
        class J {
          constructor(submitting) {
            return submitting.submitting;
          }
        }
        tmp28 = cResult[6];
      }
      const tmpResult = tmp(first1[17]);
      const stateFromStores = tmpResult.useStateFromStores(tmp27, tmp28);
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class Z {
          constructor(errors) {
            return errors.errors;
          }
        }
        cResult[7] = Z;
        class H {
          constructor() {
            return ConsentStore.getAuthenticationConsentRequired();
          }
        }
      } else {
        class Z {
          constructor(errors) {
            return errors.errors;
          }
        }
      }
      const tmp25Result = closure_8(tmp30);
      if (cResult[8] !== tmp25Result) {
        class Z {
          constructor(errors) {
            return errors.errors;
          }
        }
        const tmp33 = context(first1[18])("consent", tmp25Result);
        class H {
          constructor() {
            return ConsentStore.getAuthenticationConsentRequired();
          }
        }
        cResult[8] = tmp25Result;
        cResult[9] = tmp33;
        tmp32 = tmp33;
      } else {
        class Z {
          constructor(errors) {
            return errors.errors;
          }
        }
      }
      if (tmp32 == null) {
        class Z {
          constructor(errors) {
            return errors.errors;
          }
        }
      }
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        class Z {
          constructor(errors) {
            return errors.errors;
          }
        }
        const previousRegistrationTransitionStep = obj7.getPreviousRegistrationTransitionStep(AuthStates.AGE_GATE);
        class H {
          constructor() {
            return ConsentStore.getAuthenticationConsentRequired();
          }
        }
        cResult[10] = previousRegistrationTransitionStep;
        tmp34 = previousRegistrationTransitionStep;
      } else {
        class Z {
          constructor(errors) {
            return errors.errors;
          }
        }
      }
      context(first1[20])(tmp34);
      if (cResult[11] !== context) {
        class Z {
          constructor(errors) {
            return errors.errors;
          }
        }
        const items1 = [context];
        class H {
          constructor() {
            return ConsentStore.getAuthenticationConsentRequired();
          }
        }
        cResult[11] = context;
        cResult[12] = items1;
        cResult[13] = tmp40;
        tmp39 = tmp40;
        tmp38 = items1;
      } else {
        class Z {
          constructor(errors) {
            return errors.errors;
          }
        }
        tmp39 = cResult[13];
      }
      const effect = obj4.useEffect(tmp39, tmp38);
      if (cResult[14] !== first1) {
        class Z {
          constructor(errors) {
            return errors.errors;
          }
        }
        cResult[14] = first1;
        class H {
          constructor() {
            return ConsentStore.getAuthenticationConsentRequired();
          }
        }
        cResult[15] = tmp43;
      } else {
        class Z {
          constructor(errors) {
            return errors.errors;
          }
        }
      }
      if (cResult[16] === first1) {
        class Z {
          constructor(errors) {
            return errors.errors;
          }
        }
      }
      function it() {
        let tmp4;
        _modDef38(null != first1, "birthday was not null");
        const obj = { birthday: first1, consent: tmp4 };
        tmp4 = first2 || !stateFromStores;
        metroImportDefault(obj);
        const obj2 = { step: constants.AGE_GATE, actionType: constants2.SUBMITTED };
        context(obj2);
        const obj3 = RegistrationStepsUtils;
        const result = obj3.handleRegistrationSubmit(AuthStates.AGE_GATE, navigation, context);
      }
      cResult[16] = first1;
      cResult[17] = first2;
      cResult[18] = stateFromStores;
      cResult[19] = navigation;
      cResult[20] = context;
      cResult[21] = it;
    }
  : () => {
      let Button;
      let Input;
      let InputButton;
      let authenticationConsentRequired;
      let birthday;
      let closure_0;
      let closure_3;
      let first1;
      let intl;
      let intl2;
      let intl4;
      let intl5;
      let intl6;
      let intl7;
      let items3;
      let obj12;
      let obj6;
      let obj8;
      let obj9;
      let str3;
      let stringResult;
      let tmp14;
      let tmp18Result4;
      let tmp34;
      const tmp = closure_15();
      let obj = require("native");
      const theme = obj.useThemeContext().theme;
      let obj2 = require("useNavigation");
      _require = obj2.useNavigation();
      let obj3 = first1;
      const context = first1.useContext(require("Auth").TrackRegistrationContext);
      const useState = first1.useState;
      birthday = closure_8.getState().registrationOptions.birthday;
      let tmp5 = null;
      if (null != birthday) {
        tmp5 = null;
        if (context(birthday[11])(birthday)) {
          tmp5 = birthday;
        }
      }
      [birthday, _slicedToArray] = useState(tmp5);
      const useState2 = obj3.useState;
      const consent = closure_8.getState().registrationOptions.consent;
      const tmp9 = null != consent && consent;
      const tmp7Result = _slicedToArray(useState2(tmp9), 2);
      first1 = tmp7Result[0];
      let closure_5 = tmp7Result[1];
      const items = [birthday];
      const memo = obj3.useMemo(() => {
        let toDateResult;
        if (first != null) {
          toDateResult = first.toDate();
        }
        return toDateResult;
      }, items);
      [tmp14, ConsentStore] = _slicedToArray(obj3.useState(false), 2);
      _slicedToArray(obj3.useState(false), 2);
      const items1 = [ConsentStore];
      const obj4Result = closure_8((submitting) => submitting.submitting);
      const tmp2Result = require("get initialized");
      const stateFromStores = tmp2Result.useStateFromStores(items1, () =>
        ConsentStore.getAuthenticationConsentRequired(),
      );
      const obj4Result2 = closure_8((errors) => errors.errors);
      let message = context(tmp3[18])("consent", obj4Result2);
      if (message == null) {
        message = obj4Result2.message;
      }
      const tmp18Result = context(birthday[20]);
      const tmp2Result3 = require("RegistrationStepsUtils");
      tmp18Result(tmp2Result3.getPreviousRegistrationTransitionStep(AuthStates.AGE_GATE));
      const items2 = [context];
      const effect = obj3.useEffect(() => {
        const obj = { step: constants.AGE_GATE, actionType: constants2.VIEWED };
        context(obj);
      }, items2);
      const tmp22 = context(birthday[11])(birthday);
      const obj5 = { style: tmp.page, children: closure_13(tmp18Result4, obj6) };
      obj6 = { headerText: intl.string(require("intl").t.NgL2GX), contentStyle: tmp.flexGrow, children: items3 };
      const tmp23 = !tmp22;
      tmp18Result4 = context(birthday[28]);
      intl = tmp2(tmp3[22]).intl;
      const obj7 = { style: tmp.inputGroup, children: closure_12(Input, obj8) };
      obj8 = {
        label: intl2.string(require("intl").t.xNpFJ6),
        errorMessage: stringResult,
        children: closure_12(InputButton, obj9),
      };
      Input = tmp2(tmp3[24]).Input;
      intl2 = tmp2(tmp3[22]).intl;
      stringResult = null;
      if (!tmp22) {
        stringResult = null;
        if (null != birthday) {
          const intl3 = tmp2(tmp3[22]).intl;
          stringResult = intl3.string(tmp2(tmp3[22]).t.udnqh6);
        }
      }
      let formatResult;
      InputButton = tmp2(tmp3[23]).InputButton;
      if (birthday != null) {
        formatResult = birthday.format("L");
      }
      obj9 = {
        value: formatResult,
        text: module_4467.format("L"),
        onPress() {
          return ConsentStore(true);
        },
        accessibilityLabel: intl4.string(require("intl").t.xNpFJ6),
        accessibilityHint: intl5.string(require("intl").t["hZaF/O"]),
      };
      intl4 = tmp2(tmp3[22]).intl;
      intl5 = tmp2(tmp3[22]).intl;
      items3 = [closure_12(closure_5, obj7), , ,];
      const obj10 = {
        consentRequired: Boolean(stateFromStores),
        consent: first1,
        onToggleConsent() {
          return closure_5((arg0) => !arg0);
        },
      };
      const tmp18Result5 = context(birthday[25]);
      items3[1] = closure_12(tmp18Result5, obj10);
      const obj11 = { style: tmp.button, children: closure_12(Button, obj12) };
      obj12 = {
        size: "lg",
        loading: obj4Result,
        disabled: tmp23,
        onPress() {
          let tmp4;
          _modDef38(null != birthday, "birthday was not null");
          const obj = { birthday, consent: tmp4 };
          tmp4 = first1 || !stateFromStores;
          metroImportDefault(obj);
          const obj2 = { step: constants.AGE_GATE, actionType: constants2.SUBMITTED };
          context(obj2);
          const obj3 = RegistrationStepsUtils;
          const result = obj3.handleRegistrationSubmit(AuthStates.AGE_GATE, closure_0, context);
        },
        text: intl6.string(require("intl").t["825cFy"]),
      };
      Button = tmp2(tmp3[26]).Button;
      intl6 = tmp2(tmp3[22]).intl;
      items3[2] = closure_12(closure_5, obj11);
      let tmp26Result = null;
      if (null != message) {
        tmp26Result = null;
        if ("" !== message) {
          const obj13 = { children: message };
          tmp26Result = closure_12(tmp18(tmp3[27]), obj13);
        }
      }
      items3[3] = tmp26Result;
      const items4 = [closure_12(closure_5, obj5)];
      const obj14 = {
        modal: true,
        open: tmp14,
        title: intl7.string(require("intl").t.xNpFJ6),
        mode: "date",
        theme: str3,
        date: tmp34,
        maximumDate,
        minimumDate,
        onConfirm(arg0) {
          ConsentStore(false);
          closure_3(module_4467(arg0));
        },
        onDateChange(date1) {
          closure_3(module_4467(date1));
        },
        onCancel() {
          return ConsentStore(false);
        },
        buttonColor: tmp.datePickerButton.color,
      };
      const tmp18Result6 = context(birthday[30]);
      intl7 = tmp2(tmp3[22]).intl;
      str3 = "dark";
      const tmp2Result4 = require("shared");
      if (tmp2Result4.isThemeLight(theme)) {
        str3 = "light";
      }
      tmp34 = memo;
      if (memo == null) {
        tmp34 = closure_17;
      }
      const obj15 = { children: items4 };
      items4[1] = closure_12(tmp18Result6, obj14);
      return closure_13(closure_14, obj15);
    };
let result = size.fileFinishedImporting("modules/auth/native/components/RegisterAgeGate.tsx");

export default tmp5;
