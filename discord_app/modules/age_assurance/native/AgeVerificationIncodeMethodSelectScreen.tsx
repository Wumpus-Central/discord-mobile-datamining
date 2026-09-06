// === Module 8416: AgeVerificationIncodeMethodSelectScreen ===

// Module 8416 (AgeVerificationIncodeMethodSelectScreen)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1183 */;

const require = fn;
const VerificationMethod = fn(8412).VerificationMethod;
let closure_8 = fn(8414).buildIncodeParamsInjection;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4560);
let closure_11 = createStyles.createStyles({ container: { alignSelf: "stretch" }, header: { textAlign: "center" }, loadingContainer: { flex: 1, alignSelf: "stretch" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationIncodeMethodSelectScreen.tsx");

export default function AgeVerificationIncodeMethodSelectScreen(onMethodSelected) {
  onMethodSelected = onMethodSelected.onMethodSelected;
  const trustedOrigin = onMethodSelected.trustedOrigin;
  dependencyMap = undefined;
  asyncGeneratorStep = undefined;
  _slicedToArray = undefined;
  [tmp2, c2] = _slicedToArray(noop.useState(false), 2);
  const tmp = _slicedToArray(noop.useState(false), 2);
  [tmp4, c3] = _slicedToArray(noop.useState(false), 2);
  const tmp5 = closure_11();
  _require = asyncGeneratorStep(async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp8;
            closure_129_0 = closure_0;
            closure_129_1 = undefined;
            closure_129_2 = undefined;
            tmp4(true);
            tmp36(false);
            c4 = 2;
            let obj2 = closure_0(tmp4[8]);
            c5 = 3;
            c6 = 1;
            const obj1 = { value: obj2.requestIncodeMethodSession(closure_0), done: false };
            return obj1;
          }
        } else if (1 === tmp8) {
          c4 = 0;
          tmp4(false);
          throw tmp36;
        } else {
          if (2 === tmp8) {
            c4 = 1;
            tmp36(true);
            c4 = 0;
            tmp4(false);
            c6 = 3;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            tmp4(false);
            c6 = 3;
            obj2 = { value, done: true };
            return obj2;
          } else {
            closure_129_1 = value;
            if (null != closure_129_1) {
              const obj3 = { apiUrl: closure_129_1.apiUrl, sessionToken: closure_129_1.sessionToken, consentId: closure_129_1.consentId, interviewId: closure_129_1.interviewId, theme: theme.theme, method: closure_129_0 };
              closure_129_2 = closure_2_8(obj3, closure_1);
              closure_0(closure_129_2);
              c4 = 1;
            }
          }
          tmp36(true);
          c4 = 0;
          tmp4(false);
          c6 = 3;
          obj = { value: undefined, done: true };
          return obj;
        }
      } catch (tmp36) {
        if (tmp5 === c4) {
          c6 = tmp3;
          throw tmp36;
        } else if (tmp2 === tmp38) {
          c5 = tmp2;
        } else {
          c5 = tmp;
        }
      }
    }
  });
  const items = [onMethodSelected, trustedOrigin];
  _slicedToArray = noop.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
  let obj = { children: null };
  const ModalContent = require("ModalContent").ModalContent;
  obj = { children: null };
  if (tmp2) {
    obj = { align: "center", justify: "center", spacing: 16, style: tmp5.loadingContainer, children: closure_9(tmp7(5577).ActivityIndicator, { size: "large" }) };
    obj.children = closure_9(tmp7(4973).Stack, obj);
    obj.children = closure_9(ModalContent, obj);
    let tmp11 = obj;
  } else {
    let obj1 = { align: "stretch", spacing: 24, style: tmp5.container, children: null };
    let obj2 = { align: "center", justify: "center", spacing: 16, children: null };
    const items1 = [closure_9(tmp7(5692).ShieldSpotIllustration, { height: 100, width: 177 }), ];
    let obj3 = { align: "center", justify: "center", spacing: 8, children: null };
    const obj4 = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp5.header, children: null };
    const intl = tmp7(1114).intl;
    obj4.children = intl.string(trustedOrigin(2946).eZvwAe);
    const items2 = [closure_9(tmp7(4556).Text, obj4), ];
    const obj5 = { variant: "text-md/medium", color: "text-strong", style: tmp5.header, children: null };
    const intl2 = tmp7(1114).intl;
    obj5.children = intl2.string(trustedOrigin(2946)["5yWXmT"]);
    items2[1] = closure_9(tmp7(4556).Text, obj5);
    obj3.children = items2;
    items1[1] = closure_10(tmp7(4973).Stack, obj3);
    obj2.children = items1;
    const items3 = [closure_10(tmp7(4973).Stack, obj2), , ];
    if (tmp6Result) {
      const obj6 = { variant: "text-sm/medium", color: "text-feedback-critical", style: tmp5.header, children: null };
      const intl3 = tmp7(1114).intl;
      obj6.children = intl3.string(tmp7(1114).t.c6kn6F);
      tmp6Result = closure_9(tmp7(4556).Text, obj6);
    }
    items3[1] = tmp6Result;
    const obj7 = { hasIcons: false, children: null };
    const obj8 = { arrow: true, label: null, subLabel: null, onPress: null };
    const intl4 = tmp7(1114).intl;
    obj8.label = intl4.string(trustedOrigin(2946).rgXXcW);
    const intl5 = tmp7(1114).intl;
    obj8.subLabel = intl5.string(trustedOrigin(2946).fm7qBC);
    obj8.onPress = function onPress() {
      closure_4(VerificationMethod.FACIAL_AGE_ESTIMATION);
    };
    const items4 = [closure_9(tmp7(5605).TableRow, obj8), ];
    const obj9 = { arrow: true, label: null, subLabel: null, onPress: null };
    const intl6 = tmp7(1114).intl;
    obj9.label = intl6.string(trustedOrigin(2946)["NeVlw/"]);
    const intl7 = tmp7(1114).intl;
    obj9.subLabel = intl7.string(trustedOrigin(2946).ARmJ0M);
    obj9.onPress = function onPress() {
      closure_4(VerificationMethod.ID_VERIFICATION);
    };
    items4[1] = closure_9(tmp7(5605).TableRow, obj9);
    obj7.children = items4;
    items3[2] = closure_10(tmp7(5687).TableRowGroup, obj7);
    obj1.children = items3;
    obj.children = closure_10(tmp7(4973).Stack, obj1);
    obj.children = closure_9(ModalContent, obj);
    tmp11 = obj;
  }
  return closure_9(require("ModalScreen").ModalScreen, tmp11);
};