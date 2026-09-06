// discord_app/modules/feedback/native/FeedbackModal.tsx
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

let require = fn;
function FeedbackForm(result) {
  result = result.result;
  const require = result;
  ({ trackReport: importDefault, titleLabel, descriptionLabel, hideHelpdeskLink } = result);
  const tmp = closure_9();
  const reason = result.reason;
  const tmp2 = _slicedToArray(noop.useState(""), 2);
  value = tmp2[0];
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
  const items = [
    closure_7(require("Form").FormInput, obj, "channel-input"),
    closure_7(require("Form").FormDivider, {}),
  ];
  obj = { value, title: null, onChange: null, multiline: true, numberOfLines: 4, autoCorrect: true };
  if (descriptionLabel == null) {
    const intl2 = tmp6(tmp7[6]).intl;
    descriptionLabel = intl2.string(tmp6(tmp7[6]).t.h95hcn);
  }
  obj = { children: null, title: descriptionLabel, onChange: tmp2[1] };
  items[2] = closure_7(require("Form").FormInput, obj);
  obj.children = items;
  const items1 = [closure_8(require("Form").FormSection, obj)];
  const obj1 = { style: tmp.bottomContainer, children: null };
  let tmp8Result = !hideHelpdeskLink;
  if (!hideHelpdeskLink) {
    const obj2 = { style: tmp.helpDeskLabel, variant: "text-xs/medium", color: "text-muted", children: null };
    const intl3 = tmp6(tmp7[6]).intl;
    const obj3 = { helpdeskURL: null };
    let obj6 = require("HelpdeskUtils");
    obj3.helpdeskURL = obj6.getSubmitRequestURL();
    obj2.children = intl3.format(tmp6(tmp7[6]).t.ybi2tD, obj3);
    tmp8Result = tmp8(tmp6(tmp7[7]).Text, obj2);
  }
  const items2 = [tmp8Result];
  const obj4 = { style: tmp.submitButton, children: null };
  let tmp13 = null == value;
  if (!tmp13) {
    tmp13 = "" === value;
  }
  const obj5 = { keyboardShouldPersistTaps: "handled", children: null };
  obj6 = { disabled: tmp13, text: null, onPress: null };
  const intl4 = tmp6(tmp7[6]).intl;
  obj6.text = intl4.string(require("util").t.geKm7t);
  obj6.onPress = function onPress() {
    let arr = ModalActionCreatorsDefault;
    arr = arr.pop();
    const obj = {};
    const merged = Object.assign(result);
    obj.feedback = feedback;
    closure_1_1(obj);
  };
  obj4.children = closure_7(require("components/Button/Button").Button, obj6);
  items2[1] = closure_7(closure_5, obj4);
  obj1.children = items2;
  items1[1] = closure_8(closure_5, obj1);
  obj5.children = items1;
  return closure_8(closure_6, obj5);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles({
  helpDeskLabel: { lineHeight: 16, marginTop: 8 },
  bottomContainer: { paddingHorizontal: 16 },
  submitButton: { marginTop: 24, marginBottom: 24 },
});
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
    let arr = ModalActionCreatorsDefault;
    arr = arr.pop();
    const current = ref.current;
    current.trackReport(current.result);
  }, []);
  let obj = { initialRouteName: "Feedback", screens: null };
  obj = { Feedback: null };
  obj = { title: null, headerLeft: null, render: null };
  const intl = require("util").intl;
  obj.title = intl.string(require("util").t["dBx+Cn"]);
  obj.headerLeft = require("NavigatorHeader").getHeaderCloseButton(callback);
  obj.render = function render() {
    const merged = Object.assign(closure_0);
    return React5(FeedbackForm, {});
  };
  obj.Feedback = obj;
  obj.screens = obj;
  return closure_7(require("Navigator").Navigator, obj);
}
