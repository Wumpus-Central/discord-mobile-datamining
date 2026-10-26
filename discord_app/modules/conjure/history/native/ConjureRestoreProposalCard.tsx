// === Module 12496: ConjureRestoreProposalCard ===

// Module 12496 (ConjureRestoreProposalCard)
import c from "c" /* 576 */;
import util from "util" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import Text_Text from "Text/Text" /* 5234 */;
import components_Button_Button from "components/Button/Button" /* 5244 */;
import Stack_Stack from "Stack/Stack" /* 5977 */;
import ConjureNativeCardSurfaceDefault from "ConjureNativeCardSurface" /* 11819 */;
import ConjureHistoryFormat from "ConjureHistoryFormat" /* 11879 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/history/native/ConjureRestoreProposalCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureRestoreProposalCard(arg0) {
  const cResult = c.c(15);
  ({ proposal, onRestore } = arg0);
  if (cResult[0] !== proposal.authored_at) {
    const formatAuthoredAtResult = ConjureHistoryFormat.formatAuthoredAt(proposal.authored_at);
    cResult[0] = proposal.authored_at;
    cResult[1] = formatAuthoredAtResult;
    let tmp4 = formatAuthoredAtResult;
    const tmpResult = ConjureHistoryFormat;
  } else {
    tmp4 = cResult[1];
  }
  const relative = tmp4.relative;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    const intl = util.intl;
    obj2.children = intl.string(_modDef3830["t+b0rz"]);
    const tmp9 = React3(Text_Text.Text, obj2);
    cResult[2] = tmp9;
    let tmp6 = tmp9;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== proposal.subject) {
    const obj3 = { variant: "text-md/medium", color: "text-default", children: proposal.subject };
    const tmp12 = React3(Text_Text.Text, obj3);
    cResult[3] = proposal.subject;
    cResult[4] = tmp12;
    let tmp10 = tmp12;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== relative) {
    let tmp14 = null;
    if (null != relative) {
      const obj4 = { variant: "text-sm/normal", color: "text-muted", children: relative };
      tmp14 = React3(Text_Text.Text, obj4);
    }
    cResult[5] = relative;
    cResult[6] = tmp14;
    let tmp13 = tmp14;
  } else {
    tmp13 = cResult[6];
  }
  if (cResult[7] === tmp10) {
    if (cResult[8] === tmp13) {
      let tmp16 = cResult[9];
    }
    if (cResult[10] !== onRestore) {
      let tmp19 = null;
      if (null != onRestore) {
        const obj5 = { text: null, variant: "secondary", onPress: null };
        const intl2 = util.intl;
        obj5.text = intl2.string(_modDef3830.H8Jfhu);
        obj5.onPress = onRestore;
        tmp19 = React3(components_Button_Button.Button, obj5);
      }
      cResult[10] = onRestore;
      cResult[11] = tmp19;
      let tmp18 = tmp19;
    } else {
      tmp18 = cResult[11];
    }
    if (cResult[12] === tmp16) {
      if (cResult[13] === tmp18) {
        let tmp22 = cResult[14];
      }
      return tmp22;
    }
    const obj6 = { children: null };
    const obj7 = { direction: "vertical", spacing: 8, children: null };
    const items = [tmp6, tmp16, tmp18];
    obj7.children = items;
    obj6.children = React4(Stack_Stack.Stack, obj7);
    const tmp27 = React3(ConjureNativeCardSurfaceDefault, obj6);
    cResult[12] = tmp16;
    cResult[13] = tmp18;
    cResult[14] = tmp27;
    tmp22 = tmp27;
  }
  const obj8 = { direction: "vertical", spacing: 4, children: null };
  const items1 = [tmp10, tmp13];
  obj8.children = items1;
  const tmp17 = React4(Stack_Stack.Stack, obj8);
  cResult[7] = tmp10;
  cResult[8] = tmp13;
  cResult[9] = tmp17;
  tmp16 = tmp17;
}) : (function ConjureRestoreProposalCard(arg0) {
  ({ proposal, onRestore } = arg0);
  const relative = ConjureHistoryFormat.formatAuthoredAt(proposal.authored_at).relative;
  const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: null };
  const intl = util.intl;
  obj2.children = intl.string(_modDef3830["t+b0rz"]);
  const items = [React3(Text_Text.Text, obj2), , ];
  const items1 = [React3(Text_Text.Text, { variant: "text-md/medium", color: "text-default", children: proposal.subject }), ];
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
    obj5.text = intl2.string(_modDef3830.H8Jfhu);
    obj5.onPress = onRestore;
    tmp3Result2 = React3(components_Button_Button.Button, obj5);
  }
  const obj3 = { variant: "text-md/medium", color: "text-default", children: proposal.subject };
  const tmp5 = ConjureNativeCardSurfaceDefault;
  items[2] = tmp3Result2;
  return React3(tmp5, { children: React4(Stack_Stack.Stack, { direction: "vertical", spacing: 8, children: items }) });
});