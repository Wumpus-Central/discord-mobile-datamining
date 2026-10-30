// === Module 12740: ConjurePublishScheduleProposalCard ===

// Module 12740 (ConjurePublishScheduleProposalCard)
import util from "util" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import Text_Text from "Text/Text" /* 5619 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import Stack_Stack from "Stack/Stack" /* 6022 */;
import ConjureNativeCardSurfaceDefault from "ConjureNativeCardSurface" /* 12442 */;
import useConjurePublishScheduleProposalDefault from "useConjurePublishScheduleProposal" /* 12741 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish_schedule/native/ConjurePublishScheduleProposalCard.tsx");

export default function ConjurePublishScheduleProposalCard(arg0) {
  ({ projectId, proposal, current } = arg0);
  const tmp3 = useConjurePublishScheduleProposalDefault(projectId, proposal, current);
  const obj = { variant: "text-sm/semibold", color: "text-muted", children: null };
  const intl = util.intl;
  obj.children = intl.string(_modDef3865.ZtfX9V);
  const items = [React3(Text_Text.Text, obj), , ];
  const items1 = [React3(Text_Text.Text, { variant: "text-md/medium", color: "text-default", children: tmp3.summary }), , , , ];
  let tmp4Result = null;
  if (null != tmp3.firstPublish) {
    const obj3 = { variant: "text-sm/normal", color: "text-muted", children: tmp3.firstPublish };
    tmp4Result = React3(Text_Text.Text, obj3);
  }
  items1[1] = tmp4Result;
  const obj4 = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl2 = util.intl;
  obj4.children = intl2.string(_modDef3865.cxNHma);
  items1[2] = React3(Text_Text.Text, obj4);
  let tmp4Result4 = null;
  if ("on" === tmp3.status) {
    const obj5 = { variant: "text-sm/normal", color: "text-default", accessibilityRole: "alert", children: null };
    const intl3 = util.intl;
    obj5.children = intl3.string(_modDef3865.k4IRsm);
    tmp4Result4 = React3(Text_Text.Text, obj5);
  }
  items1[3] = tmp4Result4;
  let tmp4Result5 = null;
  if ("error" === tmp3.status) {
    const obj6 = { variant: "text-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", children: tmp3.error };
    tmp4Result5 = React3(Text_Text.Text, obj6);
  }
  items1[4] = tmp4Result5;
  items[1] = React4(Stack_Stack.Stack, { direction: "vertical", spacing: 4, children: items1 });
  let tmp4Result6 = null;
  if (null != tmp3.onTurnOn) {
    const obj7 = { text: null, variant: "secondary", loading: null, disabled: null, onPress: null };
    const intl4 = util.intl;
    obj7.text = intl4.string(_modDef3865.EuhBSG);
    obj7.loading = "sending" === tmp3.status;
    obj7.disabled = "sending" === tmp3.status;
    obj7.onPress = tmp3.onTurnOn;
    tmp4Result6 = React3(components_Button_Button.Button, obj7);
  }
  const obj2 = { variant: "text-md/medium", color: "text-default", children: tmp3.summary };
  const tmp5 = ConjureNativeCardSurfaceDefault;
  items[2] = tmp4Result6;
  return React3(tmp5, { children: React4(Stack_Stack.Stack, { direction: "vertical", spacing: 8, children: items }) });
};