// discord_app/modules/conjure/history/native/ConjureRestoreProposalCard.tsx
import util from "../../../../intl/index.native.tsx";
import _modDef3868 from "../../intl/ConjureUntranslated.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import ConjureNativeCardSurfaceDefault from "../../shared/native/ConjureNativeCardSurface.tsx";
import ConjureHistoryFormat from "../ConjureHistoryFormat.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/history/native/ConjureRestoreProposalCard.tsx");

export default function ConjureRestoreProposalCard(arg0) {
  ({ proposal, onRestore } = arg0);
  const relative = ConjureHistoryFormat.formatAuthoredAt(proposal.authored_at).relative;
  const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: null };
  const intl = util.intl;
  obj2.children = intl.string(_modDef3868["t+b0rz"]);
  const items = [React3(Text_Text.Text, obj2), ,];
  const items1 = [
    React3(Text_Text.Text, { variant: "text-md/medium", color: "text-default", children: proposal.subject }),
  ];
  let tmp3Result = null;
  if (null != relative) {
    const obj4 = { variant: "text-sm/normal", color: "text-muted", children: relative };
    tmp3Result = React3(Text_Text.Text, obj4);
  }
  items1[1] = tmp3Result;
  items[1] = React4(Stack_Stack.Stack, { direction: "vertical", spacing: 4, children: items1 });
  let tmp3Result2 = null;
  if (null != onRestore) {
    const obj5 = { text: null, variant: "secondary", onPress: null };
    const intl2 = util.intl;
    obj5.text = intl2.string(_modDef3868.H8Jfhu);
    obj5.onPress = onRestore;
    tmp3Result2 = React3(components_Button_Button.Button, obj5);
  }
  const obj3 = { variant: "text-md/medium", color: "text-default", children: proposal.subject };
  const tmp5 = ConjureNativeCardSurfaceDefault;
  items[2] = tmp3Result2;
  return React3(tmp5, { children: React4(Stack_Stack.Stack, { direction: "vertical", spacing: 8, children: items }) });
}
