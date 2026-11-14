// discord_app/modules/conjure/managed_copy/native/ConjureManagedCopyStatus.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef4131 from "../../intl/ConjureUntranslated.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import useConjureManagedCopy from "../useConjureManagedCopy.tsx";
import conjureManagedCopyStatusText from "../conjureManagedCopyStatusText.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const useConjureManagedCopyDefault = useConjureManagedCopy;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/managed_copy/native/ConjureManagedCopyStatus.tsx");

export default function ConjureManagedCopyStatus(projectId) {
  projectId = projectId.projectId;
  const tmp3 = useConjureManagedCopyDefault(projectId);
  const conjureCopyLastSync = useConjureManagedCopy.useConjureCopyLastSync(projectId);
  if (null == tmp3) {
    return null;
  } else {
    const updatesPaused = tmp3.updatesPaused;
    const obj2 = { spacing: nativeDefault.space.PX_4, children: null };
    const obj3 = { variant: "body-md/medium", color: "text-default", children: null };
    const intl = util.intl;
    obj3.children = intl.string(_modDef4131["+QBNDE"]);
    items = [React3(Text_Text.Text, obj3), ,];
    const obj4 = {
      variant: "body-sm/normal",
      color: "text-subtle",
      children: conjureManagedCopyStatusText.conjureCopySourceLine(tmp3, updatesPaused),
    };
    items[1] = React3(Text_Text.Text, obj4);
    if (updatesPaused) {
      let str = "text-muted";
    } else {
      let status;
      if (conjureCopyLastSync != null) {
        status = conjureCopyLastSync.status;
      }
      str = "text-feedback-critical";
    }
    const obj5 = { variant: "body-sm/normal", color: str, children: null };
    const tmp4Result = conjureManagedCopyStatusText;
    obj5.children = conjureManagedCopyStatusText.conjureCopySyncLine(conjureCopyLastSync, updatesPaused);
    items[2] = React3(Text_Text.Text, obj5);
    obj2.children = items;
    return React4(Stack_Stack.Stack, obj2);
  }
}
