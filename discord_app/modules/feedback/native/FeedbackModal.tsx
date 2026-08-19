// === Module 10833: FeedbackForm ===

// Module 10833 (FeedbackForm)
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

let require = fn;
function FeedbackForm(result) {
  result = result.result;
  require = result;
  ({ trackReport: importDefault, titleLabel, descriptionLabel, hideHelpdeskLink } = result);
  const tmp = callback3();
  const reason = result.reason;
  const tmp2 = callback(React.useState(""), 2);
  const first = tmp2[0];
  let label;
  if (reason != null) {
    label = reason.label;
  }
  let obj = { value: label, title: null, disabled: true };
  if (titleLabel == null) {
    const intl = tmp6(tmp7[6]).intl;
    titleLabel = intl.string(tmp6(tmp7[6]).t.vcqwCj);
  }
  obj[1] = titleLabel;
  const items = [callback(require(first[5]).FormInput, obj, "channel-input"), callback(require(first[5]).FormDivider, {}), ];
  obj = { value: first, title: null, onChange: null, multiline: true, numberOfLines: 4, autoCorrect: true };
  if (descriptionLabel == null) {
    const intl2 = tmp6(tmp7[6]).intl;
    descriptionLabel = intl2.string(tmp6(tmp7[6]).t.h95hcn);
  }
  obj = { children: null };
  obj[1] = descriptionLabel;
  obj[2] = tmp2[1];
  items[2] = callback(require(first[5]).FormInput, obj);
  obj[0] = items;
  const items1 = [callback2(require(first[5]).FormSection, obj), ];
  obj1 = { style: tmp.bottomContainer, children: null };
  let tmp8Result = !hideHelpdeskLink;
  if (!hideHelpdeskLink) {
    const obj2 = { style: null, variant: "text-xs/medium", color: "text-muted", children: null };
    obj2[0] = tmp.helpDeskLabel;
    const intl3 = tmp6(tmp7[6]).intl;
    const obj3 = { helpdeskURL: null };
    let obj6 = importDefault(tmp7[8]);
    obj3[0] = obj6.getSubmitRequestURL();
    obj2[3] = intl3.format(tmp6(tmp7[6]).t.ybi2tD, obj3);
    tmp8Result = callback(tmp6(tmp7[7]).Text, obj2);
  }
  const items2 = [tmp8Result, ];
  const obj4 = { style: tmp.submitButton, children: null };
  let tmp13 = null == first;
  if (!tmp13) {
    tmp13 = "" === first;
  }
  const obj5 = { keyboardShouldPersistTaps: "handled", children: null };
  obj6 = { disabled: tmp13, text: null, onPress: null };
  const intl4 = tmp6(tmp7[6]).intl;
  obj6[1] = intl4.string(require(first[6]).t.geKm7t);
  obj6[2] = function onPress() {
    let arr = importDefault(first[10]);
    arr = arr.pop();
    const obj = {};
    const merged = Object.assign(closure_0);
    obj.feedback = first;
    callback(obj);
  };
  obj4[1] = callback(require(first[9]).Button, obj6);
  items2[1] = callback(closure_5, obj4);
  obj1[1] = items2;
  items1[1] = callback2(closure_5, obj1);
  obj5[1] = items1;
  return callback2(closure_6, obj5);
}
({ View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = createCacheKey.createStyles({ helpDeskLabel: { lineHeight: 16, marginTop: 8 }, bottomContainer: { paddingHorizontal: 16 }, submitButton: { marginTop: 24, marginBottom: 24 } });
let result = require("obj132").fileFinishedImporting("modules/feedback/native/FeedbackModal.tsx");

export default function FeedbackModal(result) {
  const _require = result;
  result = result.result;
  importDefault = result;
  const trackReport = result.trackReport;
  closure_3 = React.useRef({ result, trackReport });
  const effect = React.useEffect(() => {
    closure_3.current = { result: closure_1, trackReport };
  });
  const callback = React.useCallback(() => {
    let arr = result(trackReport[10]);
    arr = arr.pop();
    const current = ref.current;
    current.trackReport(current.result);
  }, []);
  const obj = { title: null, headerLeft: null, render: null };
  const intl = _require(trackReport[6]).intl;
  obj[0] = intl.string(_require(trackReport[6]).t["dBx+Cn"]);
  obj[1] = _require(trackReport[12]).getHeaderCloseButton(callback);
  obj[2] = function render() {
    const merged = Object.assign(closure_0);
    return closure_1_7(FeedbackForm, {});
  };
  obj[0] = obj;
  obj[1] = obj;
  return callback2(_require(trackReport[11]).Navigator, obj);
};