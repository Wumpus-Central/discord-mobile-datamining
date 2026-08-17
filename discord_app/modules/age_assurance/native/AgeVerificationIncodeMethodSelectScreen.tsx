// discord_app/modules/age_assurance/native/AgeVerificationIncodeMethodSelectScreen.tsx
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import closure_6 from "handleThemeChange" /* 1302 */;
import { VerificationMethod } from "set" /* 5427 */;
import { buildIncodeParamsInjection as closure_8 } from "AGE_VERIFICATION_INCODE_PATH" /* 5429 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import { ModalContent } from "../../../design/components/Modal/native/ModalContent.native.tsx";
import { ModalScreen } from "../../../design/components/Modal/native/ModalScreen.native.tsx";

const require = arg1;
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_11 = createCacheKey.createStyles({ container: { alignSelf: "stretch" }, header: { textAlign: "center" }, loadingContainer: { flex: 1, alignSelf: "stretch" } });
const result = require("set").fileFinishedImporting("modules/age_assurance/native/AgeVerificationIncodeMethodSelectScreen.tsx");

export default function AgeVerificationIncodeMethodSelectScreen(onMethodSelected) {
  onMethodSelected = onMethodSelected.onMethodSelected;
  let _require = onMethodSelected;
  const trustedOrigin = onMethodSelected.trustedOrigin;
  dependencyMap = undefined;
  let callback;
  let callback2;
  [tmp2, c2] = callback2(React.useState(false), 2);
  const tmp = callback2(React.useState(false), 2);
  [tmp4, c3] = callback2(React.useState(false), 2);
  const tmp5 = callback4();
  _require = undefined;
  _require = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp4;
              closure_1 = tmp8;
              closure_1 = undefined;
              closure_2 = undefined;
              closure_1_2(true);
              closure_1_3(false);
              c4 = 2;
              let obj2 = callback(table[8]);
              c5 = 3;
              c6 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj2.requestIncodeMethodSession(callback);
              return obj1;
            }
          } else if (1 === tmp8) {
            c4 = 0;
            closure_1_2(false);
            throw closure_3;
          } else {
            if (2 === tmp8) {
              c4 = 1;
              closure_1_3(true);
              c4 = 0;
              closure_1_2(false);
              c6 = 3;
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 0;
              closure_1_2(false);
              c6 = 3;
              obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              closure_1 = arg1;
              if (null != closure_1) {
                const obj3 = { apiUrl: null, sessionToken: null, consentId: null, interviewId: null, theme: null, method: null };
                obj3[0] = closure_1.apiUrl;
                obj3[1] = closure_1.sessionToken;
                obj3[2] = closure_1.consentId;
                obj3[3] = closure_1.interviewId;
                obj3[4] = closure_2_6.theme;
                obj3[5] = callback;
                closure_2 = closure_2_8(obj3, closure_1_1);
                callback(closure_2);
                c4 = 1;
              }
            }
            closure_1_3(true);
            c4 = 0;
            closure_1_2(false);
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = undefined;
            return obj;
          }
        } catch (tmp36) {
          closure_3 = tmp36;
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
    })();
  });
  const items = [onMethodSelected, trustedOrigin];
  callback2 = React.useCallback(function() {
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
  const ModalContent = _ModalContent.ModalContent;
  obj = { children: null };
  if (tmp2) {
    obj = { align: "center", justify: "center", spacing: 16, style: null, children: null };
    obj[3] = tmp5.loadingContainer;
    obj[4] = tmp6(tmp7(5446).ActivityIndicator, { size: "large" });
    obj[0] = tmp6(tmp7(4733).Stack, obj);
    obj[0] = tmp6(ModalContent, obj);
    let tmp11 = obj;
  } else {
    obj1 = { align: "stretch", spacing: 24, style: null, children: null };
    obj1[2] = tmp5.container;
    let obj2 = { align: "center", justify: "center", spacing: 16, children: null };
    const items1 = [tmp6(tmp7(5447).ShieldSpotIllustration, { height: 100, width: 177 }), ];
    let obj3 = { align: "center", justify: "center", spacing: 8, children: null };
    const obj4 = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: null, children: null };
    obj4[3] = tmp5.header;
    const intl = tmp7(1236).intl;
    obj4[4] = intl.string(trustedOrigin(2853).eZvwAe);
    const items2 = [tmp6(tmp7(4734).Text, obj4), ];
    const obj5 = { variant: "text-md/medium", color: "text-strong", style: null, children: null };
    obj5[2] = tmp5.header;
    const intl2 = tmp7(1236).intl;
    obj5[3] = intl2.string(trustedOrigin(2853)["5yWXmT"]);
    items2[1] = tmp6(tmp7(4734).Text, obj5);
    obj3[3] = items2;
    items1[1] = callback3(tmp7(4733).Stack, obj3);
    obj2[3] = items1;
    const items3 = [callback3(tmp7(4733).Stack, obj2), , ];
    if (tmp6Result) {
      const obj6 = { variant: "text-sm/medium", color: "text-feedback-critical", style: null, children: null };
      obj6[2] = tmp5.header;
      const intl3 = tmp7(1236).intl;
      obj6[3] = intl3.string(tmp7(1236).t.c6kn6F);
      tmp6Result = tmp6(tmp7(4734).Text, obj6);
    }
    items3[1] = tmp6Result;
    const obj7 = { hasIcons: false, children: null };
    const obj8 = { arrow: true, label: null, subLabel: null, onPress: null };
    const intl4 = tmp7(1236).intl;
    obj8[1] = intl4.string(trustedOrigin(2853).rgXXcW);
    const intl5 = tmp7(1236).intl;
    obj8[2] = intl5.string(trustedOrigin(2853).fm7qBC);
    obj8[3] = function onPress() {
      callback(closure_1_7.FACIAL_AGE_ESTIMATION);
    };
    const items4 = [tmp6(tmp7(6291).TableRow, obj8), ];
    const obj9 = { arrow: true, label: null, subLabel: null, onPress: null };
    const intl6 = tmp7(1236).intl;
    obj9[1] = intl6.string(trustedOrigin(2853)["NeVlw/"]);
    const intl7 = tmp7(1236).intl;
    obj9[2] = intl7.string(trustedOrigin(2853).ARmJ0M);
    obj9[3] = function onPress() {
      callback(closure_1_7.ID_VERIFICATION);
    };
    items4[1] = tmp6(tmp7(6291).TableRow, obj9);
    obj7[1] = items4;
    items3[2] = callback3(tmp7(6286).TableRowGroup, obj7);
    obj1[3] = items3;
    obj[0] = callback3(tmp7(4733).Stack, obj1);
    obj[0] = tmp6(ModalContent, obj);
    tmp11 = obj;
  }
  return closure_9(_ModalScreen.ModalScreen, tmp11);
};