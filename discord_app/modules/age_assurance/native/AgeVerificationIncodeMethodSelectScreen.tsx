// discord_app/modules/age_assurance/native/AgeVerificationIncodeMethodSelectScreen.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ThemeStore from "../../user_settings/ThemeStore.tsx";

const require = globalThis.__r;

const require = fn;
const VerificationMethod = fn(7852).VerificationMethod;
let closure_8 = fn(7855).buildIncodeParamsInjection;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4829);
let closure_11 = createStyles.createStyles({
  container: { alignSelf: "stretch" },
  header: { textAlign: "center" },
  loadingContainer: { flex: 1, alignSelf: "stretch" },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationIncodeMethodSelectScreen.tsx");

export default function AgeVerificationIncodeMethodSelectScreen(onMethodSelected) {
  onMethodSelected = onMethodSelected.onMethodSelected;
  const trustedOrigin = onMethodSelected.trustedOrigin;
  dependencyMap = undefined;
  asyncGeneratorStep = undefined;
  _slicedToArray = undefined;
  [tmp2, c2] = noop.useState(false);
  const tmp = _slicedToArray(noop.useState(false), 2);
  [tmp4, c3] = noop.useState(false);
  const tmp5 = closure_11();
  _require = asyncGeneratorStep(async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1 = tmp8;
            closure_129_0 = closure_0;
            closure_129_1 = undefined;
            closure_129_2 = undefined;
            tmp4(true);
            tmp36(false);
            c4 = 2;
            c5 = 3;
            c6 = 1;
            const obj5 = { value: closure_0(tmp4[8]).requestIncodeMethodSession(closure_0), done: false };
            return obj5;
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
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_129_1 = value;
            if (null != closure_129_1) {
              const obj7 = {
                apiUrl: closure_129_1.apiUrl,
                sessionToken: closure_129_1.sessionToken,
                consentId: closure_129_1.consentId,
                interviewId: closure_129_1.interviewId,
                theme: theme.theme,
                method: closure_129_0,
              };
              closure_129_2 = closure_2_8(obj7, closure_1);
              closure_0(closure_129_2);
              c4 = 1;
            }
          }
          tmp36(true);
          c4 = 0;
          tmp4(false);
          c6 = 3;
          const obj = { value: undefined, done: true };
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
  _slicedToArray = noop.useCallback(function () {
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
  let obj2 = { children: null };
  if (tmp2) {
    const obj3 = {
      align: "center",
      justify: "center",
      spacing: 16,
      style: tmp5.loadingContainer,
      children: closure_9(tmp7(5884).ActivityIndicator, { size: "large" }),
    };
    obj2.children = closure_9(tmp7(5272).Stack, obj3);
    obj.children = closure_9(ModalContent, obj2);
    let tmp11 = obj;
  } else {
    let obj4 = { align: "stretch", spacing: 24, style: tmp5.container, children: null };
    let obj5 = { align: "center", justify: "center", spacing: 16, children: null };
    const items1 = [closure_9(tmp7(7864).ShieldSpotIllustration, { height: 100, width: 177 })];
    let obj6 = { align: "center", justify: "center", spacing: 8, children: null };
    let obj7 = {
      accessibilityRole: "header",
      variant: "heading-xl/bold",
      color: "mobile-text-heading-primary",
      style: tmp5.header,
      children: null,
    };
    const intl = tmp7(1115).intl;
    obj7.children = intl.string(trustedOrigin(3038).eZvwAe);
    const items2 = [closure_9(tmp7(4825).Text, obj7)];
    const obj8 = { variant: "text-md/medium", color: "text-strong", style: tmp5.header, children: null };
    const intl2 = tmp7(1115).intl;
    obj8.children = intl2.string(trustedOrigin(3038)["5yWXmT"]);
    items2[1] = closure_9(tmp7(4825).Text, obj8);
    obj6.children = items2;
    items1[1] = closure_10(tmp7(5272).Stack, obj6);
    obj5.children = items1;
    const items3 = [closure_10(tmp7(5272).Stack, obj5), ,];
    if (tmp6Result) {
      const obj9 = { variant: "text-sm/medium", color: "text-feedback-critical", style: tmp5.header, children: null };
      const intl3 = tmp7(1115).intl;
      obj9.children = intl3.string(tmp7(1115).t.c6kn6F);
      tmp6Result = closure_9(tmp7(4825).Text, obj9);
    }
    items3[1] = tmp6Result;
    const obj10 = { hasIcons: false, children: null };
    const obj11 = { arrow: true, label: null, subLabel: null, onPress: null };
    const intl4 = tmp7(1115).intl;
    obj11.label = intl4.string(trustedOrigin(3038).rgXXcW);
    const intl5 = tmp7(1115).intl;
    obj11.subLabel = intl5.string(trustedOrigin(3038).fm7qBC);
    obj11.onPress = function onPress() {
      closure_4(VerificationMethod.FACIAL_AGE_ESTIMATION);
    };
    const items4 = [closure_9(tmp7(5912).TableRow, obj11)];
    const obj12 = { arrow: true, label: null, subLabel: null, onPress: null };
    const intl6 = tmp7(1115).intl;
    obj12.label = intl6.string(trustedOrigin(3038)["NeVlw/"]);
    const intl7 = tmp7(1115).intl;
    obj12.subLabel = intl7.string(trustedOrigin(3038).ARmJ0M);
    obj12.onPress = function onPress() {
      closure_4(VerificationMethod.ID_VERIFICATION);
    };
    items4[1] = closure_9(tmp7(5912).TableRow, obj12);
    obj10.children = items4;
    items3[2] = closure_10(tmp7(5994).TableRowGroup, obj10);
    obj4.children = items3;
    obj2.children = closure_10(tmp7(5272).Stack, obj4);
    obj.children = closure_9(ModalContent, obj2);
    tmp11 = obj;
  }
  return closure_9(require("ModalScreen").ModalScreen, tmp11);
}
