// === Module 17310: ExistingUserAgeGateConfirm ===

// Module 17310 (ExistingUserAgeGateConfirm)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4560);
let closure_10 = createStyles.createStyles({ container: { padding: 16, flex: 1, alignItems: "center", justifyContent: "center" }, header: { textAlign: "center", marginBottom: 8 }, body: { textAlign: "center", lineHeight: 20, marginBottom: 16 }, buttonWrapper: { width: "100%" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_gate/native/components/ExistingUserAgeGateConfirm.tsx");

export default function ExistingUserAgeGateConfirm(age) {
  const onConfirm = age.onConfirm;
  dependencyMap = undefined;
  closure_3 = async function _handleConfirm() {
    closure_0 = tmp3;
    dependencyMap(true);
    await onConfirm();
    if (1 === tmp7) {
      c3 = 0;
      closure_128_1.pop();
      closure_128_2(false);
      c4 = 3;
    } else if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 !== 2) {
      if (value.shouldShowError) {
        closure_128_1.pop();
      }
      c3 = 0;
    }
    return value;
  };
  const tmp = closure_10();
  let obj = onConfirm(1483);
  importDefault = obj.useNavigation();
  [tmp3, c2] = _slicedToArray(noop.useState(false), 2);
  obj = { top: true, style: tmp.container, children: null };
  obj = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = onConfirm(1114).intl;
  obj.children = intl.format(onConfirm(1114).t.wumolR, { age: age.age });
  const items = [closure_8(onConfirm(4556).Text, obj), , ];
  const obj1 = { style: tmp.body, variant: "text-md/medium", color: "interactive-text-default", children: null };
  const intl2 = onConfirm(1114).intl;
  const obj2 = { helpURL: null };
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  obj2.helpURL = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.AGE_GATE);
  obj1.children = intl2.format(onConfirm(1114).t.n3QjDE, obj2);
  items[1] = closure_8(onConfirm(4556).Text, obj1);
  const obj3 = { style: tmp.buttonWrapper, children: null };
  const obj4 = { loading: tmp3, disabled: tmp3, text: null, onPress: null, grow: true };
  const intl3 = onConfirm(1114).intl;
  obj4.text = intl3.string(onConfirm(1114).t["6tahin"]);
  obj4.onPress = function handleConfirm() {
    const self = this;
    const apply = closure_3.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj3.children = closure_8(onConfirm(4975).Button, obj4);
  items[2] = closure_8(View, obj3);
  obj.children = items;
  return closure_9(onConfirm(7123).SafeAreaPaddingView, obj);
};