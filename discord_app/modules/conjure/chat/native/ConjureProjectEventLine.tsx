// === Module 12289: ConjureProjectEventLine ===

// Module 12289 (ConjureProjectEventLine)
import c from "c" /* 576 */;
import Text_Text from "Text/Text" /* 5216 */;
import ConjureMessageActionSheet from "ConjureMessageActionSheet" /* 12278 */;
import ConjureSelectedMentionDefault from "ConjureSelectedMention" /* 12281 */;
import useConjureProjectEventLineDefault from "useConjureProjectEventLine" /* 12290 */;
import useConjureRemixSettingsRequestDefault from "useConjureRemixSettingsRequest" /* 12292 */;
import ConjureSettingsRequestCardDefault from "ConjureSettingsRequestCard" /* 12294 */;
import noop from "module_19" /* 19 */;

require = fn;
function renderMention(arg0, arg1, arg2) {
  closure_0 = arg0;
  const obj = {
    label: "@" + arg1,
    variant: "text-md/medium",
    onPress() {
      return ConjureMessageActionSheet.openMessageAuthorProfile(closure_0);
    }
  };
  return closure_3(ConjureSelectedMentionDefault, obj, arg2);
}
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureProjectEventLine.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureProjectEventLine(arg0) {
  const cResult = c.c(8);
  ({ projectId, event } = arg0);
  const tmp5 = useConjureProjectEventLineDefault(projectId, event, renderMention);
  const tmp6 = useConjureRemixSettingsRequestDefault(projectId, event);
  if (cResult[0] !== tmp5) {
    const obj2 = { variant: "text-md/normal", color: "text-default", children: tmp5 };
    const tmp9 = React3(Text_Text.Text, obj2);
    cResult[0] = tmp5;
    cResult[1] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === projectId) {
    if (cResult[3] === tmp6) {
      let tmp10 = cResult[4];
    }
    if (cResult[5] === tmp7) {
      if (cResult[6] === tmp10) {
        let tmp13 = cResult[7];
      }
      return tmp13;
    }
    const obj3 = { children: null };
    const items = [tmp7, tmp10];
    obj3.children = items;
    const tmp16 = hasOwnProperty(React4, obj3);
    cResult[5] = tmp7;
    cResult[6] = tmp10;
    cResult[7] = tmp16;
    tmp13 = tmp16;
  }
  let tmp11 = null;
  if (null != tmp6) {
    const obj4 = { projectId, request: tmp6, notifyAgent: false };
    tmp11 = React3(ConjureSettingsRequestCardDefault, obj4);
  }
  cResult[2] = projectId;
  cResult[3] = tmp6;
  cResult[4] = tmp11;
  tmp10 = tmp11;
}) : (function ConjureProjectEventLine(arg0) {
  ({ projectId, event } = arg0);
  const tmp4 = useConjureRemixSettingsRequestDefault(projectId, event);
  const children = [React3(Text_Text.Text, { variant: "text-md/normal", color: "text-default", children: useConjureProjectEventLineDefault(projectId, event, renderMention) }), ];
  let tmp7Result = null;
  if (null != tmp4) {
    const obj = { projectId, request: tmp4, notifyAgent: false };
    tmp7Result = React3(ConjureSettingsRequestCardDefault, obj);
  }
  children[1] = tmp7Result;
  return hasOwnProperty(React4, { children });
});