// discord_app/modules/age_assurance/native/AgeVerificationIncodeMethodSelectScreen.tsx
import set from "set";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "TableRowInner";
import handleThemeChange from "handleThemeChange";
import { VerificationMethod } from "set";
import { buildIncodeParamsInjection as closure_9 } from "AGE_VERIFICATION_INCODE_PATH";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let unpackModuleId;
const require = arg1;
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { container: null, content: null, loadingOverlay: null };
createCacheKey = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: require("Themes").space.PX_16 };
let obj1 = { padding: require("Themes").space.PX_16 };
createCacheKey[2] = { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
const result = require("noop").fileFinishedImporting("modules/age_assurance/native/AgeVerificationIncodeMethodSelectScreen.tsx");

export default function AgeVerificationIncodeMethodSelectScreen(onMethodSelected) {
  let c2;
  let c3;
  let tmp2;
  let tmp4;
  onMethodSelected = onMethodSelected.onMethodSelected;
  let _require = onMethodSelected;
  const trustedOrigin = onMethodSelected.trustedOrigin;
  let dependencyMap;
  let callback;
  let callback2;
  [tmp2, c2] = callback2(React.useState(false), 2);
  const tmp = callback2(React.useState(false), 2);
  [tmp4, c3] = callback2(React.useState(false), 2);
  const tmp5 = createCacheKey();
  _require = undefined;
  _require = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
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
          return { value: "HermesInternal", done: null };
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
              let closure_2 = tmp4;
              let closure_1 = tmp8;
              closure_1 = undefined;
              closure_2 = undefined;
              outer1_2(true);
              outer1_3(false);
              let c4 = 2;
              let obj2 = callback(table[10]);
              c5 = 3;
              c6 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = obj2.requestIncodeMethodSession(callback);
              return obj1;
            }
          } else if (1 === tmp8) {
            c4 = 0;
            outer1_2(false);
            throw set;
          } else {
            if (2 === tmp8) {
              c4 = 1;
              outer1_3(true);
              c4 = 0;
              outer1_2(false);
              c6 = 3;
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 0;
              outer1_2(false);
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
                obj3[4] = outer2_7.theme;
                obj3[5] = callback;
                closure_2 = outer2_9(obj3, outer1_1);
                callback(closure_2);
                c4 = 1;
              }
            }
            outer1_3(true);
            c4 = 0;
            outer1_2(false);
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = undefined;
            return obj;
          }
        } catch (tmp36) {
          set = tmp36;
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
  let obj = { style: null, children: null };
  if (tmp2) {
    obj[0] = tmp5.loadingOverlay;
    obj[1] = tmp6(_require("../../../design/components/ActivityIndicator/native/ActivityIndicator.native.tsx").ActivityIndicator, {});
    let tmp12 = obj;
  } else {
    obj[0] = tmp5.container;
    obj = { spacing: 16, style: null, children: null };
    obj[1] = tmp5.content;
    obj = { variant: "heading-lg/bold", color: "text-strong", children: null };
    const intl = _require("../../../intl/index.native.tsx").intl;
    obj[2] = intl.string(trustedOrigin(2803).eZvwAe);
    const items1 = [tmp6(_require("../../../design/components/Text/native/Text.tsx").Heading, obj), , , ];
    let obj1 = { variant: "text-md/normal", color: "text-muted", children: null };
    const intl2 = _require("../../../intl/index.native.tsx").intl;
    obj1[2] = intl2.string(trustedOrigin(2803)["5yWXmT"]);
    items1[1] = tmp6(_require("../../../design/components/Text/native/Text.tsx").Text, obj1);
    if (tmp6Result) {
      let obj2 = { variant: "text-sm/medium", color: "text-feedback-critical", children: null };
      const intl3 = tmp9(1236).intl;
      obj2[2] = intl3.string(tmp9(1236).t.c6kn6F);
      tmp6Result = tmp6(tmp9(4281).Text, obj2);
    }
    items1[2] = tmp6Result;
    let obj3 = { hasIcons: false, children: null };
    const obj4 = { arrow: true, label: null, subLabel: null, onPress: null };
    const intl4 = tmp9(1236).intl;
    obj4[1] = intl4.string(trustedOrigin(2803).rgXXcW);
    const intl5 = tmp9(1236).intl;
    obj4[2] = intl5.string(trustedOrigin(2803).fm7qBC);
    obj4[3] = function onPress() {
      callback(outer1_8.FACIAL_AGE_ESTIMATION);
    };
    const items2 = [tmp6(_require("../../../design/components/TableRow/native/TableRow.native.tsx").TableRow, obj4), ];
    const obj5 = { arrow: true, label: null, subLabel: null, onPress: null };
    const intl6 = tmp9(1236).intl;
    obj5[1] = intl6.string(trustedOrigin(2803)["NeVlw/"]);
    const intl7 = tmp9(1236).intl;
    obj5[2] = intl7.string(trustedOrigin(2803).ARmJ0M);
    obj5[3] = function onPress() {
      callback(outer1_8.ID_VERIFICATION);
    };
    items2[1] = tmp6(_require("../../../design/components/TableRow/native/TableRow.native.tsx").TableRow, obj5);
    obj3[1] = items2;
    items1[3] = closure_11(_require("../../../design/components/TableRow/native/TableRowGroup.native.tsx").TableRowGroup, obj3);
    obj[2] = items1;
    obj[1] = closure_11(_require("../../../design/components/Stack/native/Stack.native.tsx").Stack, obj);
    tmp12 = obj;
  }
  return closure_10(View, tmp12);
};