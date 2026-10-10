// === Module 11926: PollCreationInputError ===

// Module 11926 (PollCreationInputError)
import nativeDefault from "native" /* 587 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4828 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { flexDirection: "row", alignItems: "center", marginTop: -10 }, icon: { alignSelf: "center", marginRight: 5, color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { alignSelf: "center", marginRight: 5, color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
let size = fn(2);
const result = size.fileFinishedImporting("modules/polls/native/PollCreationInputError.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function PollCreationInputError(message) {
  const cResult = message(576).c(11);
  message = message.message;
  const tmp4 = closure_6();
  if (cResult[0] !== message) {
    const fn = function u() {
      let tmp2 = null != message;
      if (tmp2) {
        tmp2 = "" !== message;
      }
      if (tmp2) {
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(message);
      }
    };
    const items = [message];
    cResult[0] = message;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp6 = items;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const effect = noop.useEffect(tmp5, tmp6);
  if (cResult[3] !== tmp4.icon) {
    const size = { width: 16, height: 16, style: tmp4.icon };
    const tmp10 = closure_4(tmp(1200).WarningCircle, size);
    cResult[3] = tmp4.icon;
    cResult[4] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[4];
  }
  if (cResult[5] !== message) {
    const obj2 = { variant: "text-xs/medium", color: "text-feedback-critical", children: message };
    const tmp13 = closure_4(tmp(5088).Text, obj2);
    cResult[5] = message;
    cResult[6] = tmp13;
    let tmp11 = tmp13;
  } else {
    tmp11 = cResult[6];
  }
  if (cResult[7] === tmp4.container) {
    if (cResult[8] === tmp8) {
      if (cResult[9] === tmp11) {
        let tmp14 = cResult[10];
      }
      return tmp14;
    }
  }
  const obj3 = { style: tmp4.container, children: null };
  const items1 = [tmp8, tmp11];
  obj3.children = items1;
  const tmp15 = closure_5(View, obj3);
  cResult[7] = tmp4.container;
  cResult[8] = tmp8;
  cResult[9] = tmp11;
  cResult[10] = tmp15;
  tmp14 = tmp15;
  const obj = message(576);
}) : (function PollCreationInputError(message) {
  message = message.message;
  const tmp = closure_6();
  const items = [message];
  const effect = noop.useEffect(() => {
    let tmp2 = null != message;
    if (tmp2) {
      tmp2 = "" !== message;
    }
    if (tmp2) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(message);
    }
  }, items);
  const obj = { style: tmp.container, children: null };
  const size = { width: 16, height: 16, style: tmp.icon };
  const items1 = [closure_4(message(1200).WarningCircle, size), closure_4(message(5088).Text, { variant: "text-xs/medium", color: "text-feedback-critical", children: message })];
  obj.children = items1;
  return closure_5(View, obj);
});