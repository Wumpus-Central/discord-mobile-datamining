// === Module 12967: ConjureRestoreProposalCard ===

// Module 12967 (ConjureRestoreProposalCard)
import util from "util" /* 1113 */;
import _modDef4024 from "module_4024" /* 4024 */;
import Text_Text from "Text/Text" /* 5781 */;
import components_Button_Button from "components/Button/Button" /* 5788 */;
import Stack_Stack from "Stack/Stack" /* 6185 */;
import ConjureNativeCardSurfaceDefault from "ConjureNativeCardSurface" /* 12306 */;
import ConjureHistoryFormat from "ConjureHistoryFormat" /* 12355 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/history/native/ConjureRestoreProposalCard.tsx");

export default function ConjureRestoreProposalCard(arg0) {
  ({ proposal, onRestore } = arg0);
  const relative = ConjureHistoryFormat.formatAuthoredAt(proposal.authored_at).relative;
  const obj2 = { variant: "body-sm/semibold", color: "text-muted", children: null };
  const intl = util.intl;
  obj2.children = intl.string(_modDef4024["t+b0rz"]);
  items = [React3(Text_Text.Text, obj2), , ];
  const items1 = [React3(Text_Text.Text, { variant: "body-md/medium", color: "text-default", children: proposal.subject }), ];
  let tmp3Result = null;
  if (null != relative) {
    const obj4 = { variant: "body-sm/normal", color: "text-muted", children: relative };
    tmp3Result = React3(Text_Text.Text, obj4);
  }
  items1[1] = tmp3Result;
  items[1] = React4(Stack_Stack.Stack, { direction: "vertical", spacing: 4, children: items1 });
  let tmp3Result2 = null;
  if (null != onRestore) {
    const obj5 = { text: null, variant: "secondary", onPress: null };
    const intl2 = util.intl;
    obj5.text = intl2.string(_modDef4024.H8Jfhu);
    obj5.onPress = onRestore;
    tmp3Result2 = React3(components_Button_Button.Button, obj5);
  }
  const obj3 = { variant: "body-md/medium", color: "text-default", children: proposal.subject };
  const tmp5 = ConjureNativeCardSurfaceDefault;
  items[2] = tmp3Result2;
  return React3(tmp5, { children: React4(Stack_Stack.Stack, { direction: "vertical", spacing: 8, children: items }) });
};