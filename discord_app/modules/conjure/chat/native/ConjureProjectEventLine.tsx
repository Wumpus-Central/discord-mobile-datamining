// === Module 17159: ConjureProjectEventLine ===

// Module 17159 (ConjureProjectEventLine)
import c from "c" /* 576 */;
import Text_Text from "Text/Text" /* 5087 */;
import ConjureMessageActionSheet from "ConjureMessageActionSheet" /* 17069 */;
import ConjureSelectedMentionDefault from "ConjureSelectedMention" /* 17072 */;
import useConjureProjectEventLineDefault from "useConjureProjectEventLine" /* 17160 */;
import noop from "module_19" /* 19 */;

require = fn;
function renderMention(arg0, arg1, key) {
  closure_0 = arg0;
  const obj = {
    label: "@" + arg1,
    variant: "text-md/medium",
    onPress() {
      return ConjureMessageActionSheet.openMessageAuthorProfile(closure_0);
    }
  };
  return jsx(ConjureSelectedMentionDefault, {
    label: "@" + arg1,
    variant: "text-md/medium",
    onPress() {
      return ConjureMessageActionSheet.openMessageAuthorProfile(closure_0);
    }
  }, key);
}
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureProjectEventLine.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureProjectEventLine(arg0) {
  const cResult = c.c(2);
  ({ projectId, event } = arg0);
  const tmp4 = useConjureProjectEventLineDefault(projectId, event, renderMention);
  if (cResult[0] !== tmp4) {
    const obj2 = { variant: "text-md/normal", color: "text-default", children: tmp4 };
    const tmp7 = jsx(Text_Text.Text, { variant: "text-md/normal", color: "text-default", children: tmp4 });
    cResult[0] = tmp4;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (function ConjureProjectEventLine(arg0) {
  ({ projectId, event } = arg0);
  const children = useConjureProjectEventLineDefault(projectId, event, renderMention);
  return jsx(Text_Text.Text, { variant: "text-md/normal", color: "text-default", children });
});