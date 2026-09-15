// discord_app/modules/age_gate/native/components/ExistingUserAgeGateConfirm.tsx
import HelpdeskUtilsDefault from "../../../../utils/HelpdeskUtils.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4639);
let closure_10 = createStyles.createStyles({
  container: { padding: 16, flex: 1, alignItems: "center", justifyContent: "center" },
  header: { textAlign: "center", marginBottom: 8 },
  body: { textAlign: "center", lineHeight: 20, marginBottom: 16 },
  buttonWrapper: { width: "100%" },
});
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
  importDefault = onConfirm(1484).useNavigation();
  const obj = onConfirm(1484);
  [tmp3, c2] = noop.useState(false);
  const obj2 = { top: true, style: tmp.container, children: null };
  const obj3 = {
    style: tmp.header,
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = onConfirm(1115).intl;
  obj3.children = intl.format(onConfirm(1115).t.wumolR, { age: age.age });
  const items = [closure_8(onConfirm(4635).Text, obj3), ,];
  const obj4 = { style: tmp.body, variant: "text-md/medium", color: "interactive-text-default", children: null };
  const intl2 = onConfirm(1115).intl;
  const obj5 = { helpURL: null };
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  obj5.helpURL = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.AGE_GATE);
  obj4.children = intl2.format(onConfirm(1115).t.n3QjDE, obj5);
  items[1] = closure_8(onConfirm(4635).Text, obj4);
  const obj7 = { style: tmp.buttonWrapper, children: null };
  const obj8 = { loading: tmp3, disabled: tmp3, text: null, onPress: null, grow: true };
  const intl3 = onConfirm(1115).intl;
  obj8.text = intl3.string(onConfirm(1115).t["6tahin"]);
  obj8.onPress = function handleConfirm() {
    const self = this;
    const apply = closure_3.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj7.children = closure_8(onConfirm(5059).Button, obj8);
  items[2] = closure_8(View, obj7);
  obj2.children = items;
  return closure_9(onConfirm(7230).SafeAreaPaddingView, obj2);
}
