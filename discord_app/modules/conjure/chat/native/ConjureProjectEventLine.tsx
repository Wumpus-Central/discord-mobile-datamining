// discord_app/modules/conjure/chat/native/ConjureProjectEventLine.tsx
import c from "../../../../../_runtime/00576_c.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ConjureMessageActionSheet from "ConjureMessageActionSheet.tsx";
import ConjureSelectedMentionDefault from "ConjureSelectedMention.tsx";
import useConjureProjectEventLineDefault from "../useConjureProjectEventLine.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function renderMention(arg0, arg1, key) {
  closure_0 = arg0;
  const obj = {
    label: "@" + arg1,
    variant: "text-md/medium",
    onPress() {
      return ConjureMessageActionSheet.openMessageAuthorProfile(closure_0);
    },
  };
  return jsx(
    ConjureSelectedMentionDefault,
    {
      label: "@" + arg1,
      variant: "text-md/medium",
      onPress() {
        return ConjureMessageActionSheet.openMessageAuthorProfile(closure_0);
      },
    },
    key,
  );
}
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureProjectEventLine.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureProjectEventLine(arg0) {
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
    }
  : function ConjureProjectEventLine(arg0) {
      ({ projectId, event } = arg0);
      const children = useConjureProjectEventLineDefault(projectId, event, renderMention);
      return jsx(Text_Text.Text, { variant: "text-md/normal", color: "text-default", children });
    };
