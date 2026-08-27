// === Module 16801: ExistingUserAgeGateConfirm ===

// Module 16801 (ExistingUserAgeGateConfirm)
import combinedDefault from "combined" /* 1995 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { HelpdeskArticles } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

const require = arg1;
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles({ container: { padding: 16, flex: 1, alignItems: "center", justifyContent: "center" }, header: { textAlign: "center", marginBottom: 8 }, body: { textAlign: "center", lineHeight: 20, marginBottom: 16 }, buttonWrapper: { width: "100%" } });
const result = require("set").fileFinishedImporting("modules/age_gate/native/components/ExistingUserAgeGateConfirm.tsx");

export default function ExistingUserAgeGateConfirm(age) {
  const onConfirm = age.onConfirm;
  importDefault = undefined;
  dependencyMap = undefined;
  function _handleConfirm() {
    const self = this;
    const tmp = _handleConfirm(function*() {
      closure_0 = tmp3;
      closure_1_2(true);
      c3 = 1;
      yield closure_1_0();
      if (1 === tmp7) {
        c3 = 0;
        arr = arr.pop();
        callback(false);
        c4 = 3;
      } else if (arg0 === 1) {
        c4 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        if (arg1.shouldShowError) {
          arr = arr.pop();
        }
        c3 = 0;
      }
      c3 = 0;
      return arg1;
    });
    closure_3 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback4();
  let obj = onConfirm(1500);
  importDefault = obj.useNavigation();
  [tmp3, c2] = callback(React.useState(false), 2);
  obj = { top: true, style: tmp.container, children: null };
  obj = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = onConfirm(1236).intl;
  obj[3] = intl.format(onConfirm(1236).t.wumolR, { age: age.age });
  const items = [callback2(onConfirm(4441).Text, obj), , ];
  obj1 = { style: tmp.body, variant: "text-md/medium", color: "interactive-text-default", children: null };
  const intl2 = onConfirm(1236).intl;
  const obj2 = { helpURL: null };
  const tmp2 = callback(React.useState(false), 2);
  obj2[0] = combinedDefault.getArticleURL(HelpdeskArticles.AGE_GATE);
  obj1[3] = intl2.format(onConfirm(1236).t.n3QjDE, obj2);
  items[1] = callback2(onConfirm(4441).Text, obj1);
  const obj3 = { style: tmp.buttonWrapper, children: null };
  const obj4 = { loading: tmp3, disabled: tmp3, text: null, onPress: null, grow: true };
  const intl3 = onConfirm(1236).intl;
  obj4[2] = intl3.string(onConfirm(1236).t["6tahin"]);
  obj4[3] = function handleConfirm() {
    const self = this;
    const apply = _handleConfirm.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj3[1] = callback2(onConfirm(4880).Button, obj4);
  items[2] = callback2(View, obj3);
  obj[2] = items;
  return callback3(onConfirm(5505).SafeAreaPaddingView, obj);
};