// === Module 11986: FeedbackModal ===

// Module 11986 (FeedbackModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5032 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

let require = fn;
function FeedbackForm(result) {
  result = result.result;
  const require = result;
  ({ trackReport: importDefault, titleLabel, descriptionLabel, hideHelpdeskLink } = result);
  value = undefined;
  const tmp = closure_9();
  const reason = result.reason;
  [value, obj2.onChange] = noop.useState("");
  let label;
  if (reason != null) {
    label = reason.label;
  }
  let obj = { value: label, title: null, disabled: true };
  if (titleLabel == null) {
    const intl = tmp6(tmp7[6]).intl;
    titleLabel = intl.string(tmp6(tmp7[6]).t.vcqwCj);
  }
  obj.title = titleLabel;
  const items = [closure_7(require("Form").FormInput, obj, "channel-input"), closure_7(require("Form").FormDivider, {}), ];
  const obj2 = { value, title: null, onChange: null, multiline: true, numberOfLines: 4, autoCorrect: true };
  if (descriptionLabel == null) {
    const intl2 = tmp6(tmp7[6]).intl;
    descriptionLabel = intl2.string(tmp6(tmp7[6]).t.h95hcn);
  }
  const obj3 = { children: null };
  obj2.title = descriptionLabel;
  items[2] = closure_7(require("Form").FormInput, obj2);
  obj3.children = items;
  const items1 = [closure_8(require("Form").FormSection, obj3), ];
  const obj4 = { style: tmp.bottomContainer, children: null };
  let tmp8Result = !hideHelpdeskLink;
  if (!hideHelpdeskLink) {
    const obj5 = { style: tmp.helpDeskLabel, variant: "text-xs/medium", color: "text-muted", children: null };
    const intl3 = tmp6(tmp7[6]).intl;
    const obj6 = { helpdeskURL: require("HelpdeskUtils").getSubmitRequestURL() };
    obj5.children = intl3.format(tmp6(tmp7[6]).t.ybi2tD, obj6);
    tmp8Result = closure_7(tmp6(tmp7[7]).Text, obj5);
    const obj7 = require("HelpdeskUtils");
  }
  const items2 = [tmp8Result, ];
  const obj8 = { style: tmp.submitButton, children: null };
  let tmp13 = null == value;
  if (!tmp13) {
    tmp13 = "" === value;
  }
  const obj9 = { keyboardShouldPersistTaps: "handled", children: null };
  const obj10 = { disabled: tmp13, text: null, onPress: null };
  const intl4 = tmp6(tmp7[6]).intl;
  obj10.text = intl4.string(require("util").t.geKm7t);
  obj10.onPress = function onPress() {
    ModalActionCreatorsDefault.pop();
    const obj = {};
    const merged = Object.assign(result);
    obj.feedback = feedback;
    closure_1_1(obj);
  };
  obj8.children = closure_7(require("components/Button/Button").Button, obj10);
  items2[1] = closure_7(closure_5, obj8);
  obj4.children = items2;
  items1[1] = closure_8(closure_5, obj4);
  obj9.children = items1;
  return closure_8(closure_6, obj9);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4829);
let closure_9 = createStyles.createStyles({ helpDeskLabel: { lineHeight: 16, marginTop: 8 }, bottomContainer: { paddingHorizontal: 16 }, submitButton: { marginTop: 24, marginBottom: 24 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/feedback/native/FeedbackModal.tsx");

export default function FeedbackModal(result) {
  _require = result;
  result = result.result;
  importDefault = result;
  const trackReport = result.trackReport;
  noop.useRef({ result, trackReport });
  const effect = noop.useEffect(() => {
    closure_3.current = { result, trackReport };
  });
  const callback = noop.useCallback(() => {
    ModalActionCreatorsDefault.pop();
    const current = ref.current;
    current.trackReport(current.result);
  }, []);
  const obj = { initialRouteName: "Feedback", screens: null };
  const obj2 = { Feedback: null };
  const obj3 = { title: null, headerLeft: null, render: null };
  const intl = require("util").intl;
  obj3.title = intl.string(require("util").t["dBx+Cn"]);
  obj3.headerLeft = require("NavigatorHeader").getHeaderCloseButton(callback);
  obj3.render = function render() {
    const merged = Object.assign(closure_0);
    return React5(FeedbackForm, {});
  };
  obj2.Feedback = obj3;
  obj.screens = obj2;
  return closure_7(require("Navigator").Navigator, obj);
};