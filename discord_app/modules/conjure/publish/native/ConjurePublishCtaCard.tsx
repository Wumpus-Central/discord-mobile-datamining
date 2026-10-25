// === Module 12490: ConjurePublishCtaCard ===

// Module 12490 (ConjurePublishCtaCard)
import c from "c" /* 576 */;
import Text_Text from "Text/Text" /* 5234 */;
import components_Button_Button from "components/Button/Button" /* 5244 */;
import Stack_Stack from "Stack/Stack" /* 5977 */;
import useConjurePublishAction from "useConjurePublishAction" /* 11874 */;
import ConjurePublishSheetDefault from "ConjurePublishSheet" /* 12287 */;
import conjurePublishCard from "conjurePublishCard" /* 12305 */;
import ConjureTipInlineCalloutDefault from "ConjureTipInlineCallout" /* 12491 */;
import ConjurePublishRatingDefault from "ConjurePublishRating" /* 12492 */;
import noop from "module_19" /* 19 */;

const useConjurePublishActionDefault = useConjurePublishAction;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? (function PublishCta(projectId) {
  const cResult = projectId(576).c(7);
  projectId = projectId.projectId;
  const publish = projectId.publish;
  const context = noop.useContext(projectId(11874).ConjurePublishActionContext);
  if (cResult[0] === context) {
    if (cResult[1] === projectId) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] === publish.label) {
      if (cResult[4] === tmp5) {
        if (cResult[5] === tmp6) {
          let tmp7 = cResult[6];
        }
        return tmp7;
      }
    }
    const obj2 = { direction: "horizontal", children: null };
    const obj3 = { text: publish.label, variant: "primary", size: "sm", loading: tmp5, onPress: tmp6 };
    obj2.children = closure_4(tmp(5244).Button, obj3);
    const tmp9 = closure_4(tmp(5977).Stack, obj2);
    cResult[3] = publish.label;
    cResult[4] = tmp5;
    cResult[5] = tmp6;
    cResult[6] = tmp9;
    tmp7 = tmp9;
  }
  const fn = function u() {
    if (null != context) {
      ConjurePublishSheetDefault(projectId, tmp.guildId, "card");
    }
  };
  cResult[0] = context;
  cResult[1] = projectId;
  cResult[2] = fn;
  tmp6 = fn;
  const obj = projectId(576);
}) : (function PublishCta(arg0) {
  ({ projectId: require, publish } = arg0);
  closure_1 = noop.useContext(useConjurePublishAction.ConjurePublishActionContext);
  const obj = { text: publish.label, variant: "primary", size: "sm", loading: null, onPress: null };
  let publishing = publish.publishing;
  if (publishing) {
    publishing = !publish.showsProgress;
  }
  obj.loading = publishing;
  obj.onPress = function onPress() {
    if (null != closure_1) {
      ConjurePublishSheetDefault(require, tmp.guildId, "card");
    }
  };
  return closure_4(Stack_Stack.Stack, { direction: "horizontal", children: closure_4(components_Button_Button.Button, obj) });
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishCtaCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePublishCtaCard(arg0) {
  const cResult = c.c(5);
  ({ projectId, turnId, cta } = arg0);
  const tmp5 = useConjurePublishActionDefault(projectId);
  if (cResult[0] === cta) {
    if (cResult[1] === projectId) {
      if (cResult[2] === tmp5) {
        if (cResult[3] === turnId) {
          let tmp6 = cResult[4];
        }
        return tmp6;
      }
    }
  }
  let tmp8Result4 = null;
  if (null != tmp5) {
    tmp8Result4 = null;
    if (tmpResult.isConjurePublishCtaVisible(tmp5, cta)) {
      const obj2 = { projectId, publish: tmp5 };
      const items = [React4(closure_6, obj2), , ];
      let tmp8Result = null;
      if (null != tmp5.failure) {
        const obj3 = { variant: "text-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", children: tmp5.failure };
        tmp8Result = React4(Text_Text.Text, obj3);
      }
      items[1] = tmp8Result;
      let tmp8Result3 = null;
      if (null != turnId) {
        const obj4 = { projectId, turnId, cta, status: tmp5.status };
        tmp8Result3 = React4(ConjurePublishRatingDefault, obj4, turnId);
      }
      const obj5 = { children: null };
      const obj6 = { spacing: 12, children: null };
      items[2] = tmp8Result3;
      obj6.children = items;
      obj5.children = hasOwnProperty(Stack_Stack.Stack, obj6);
      tmp8Result4 = React4(ConjureTipInlineCalloutDefault, obj5);
      const tmp4Result = ConjureTipInlineCalloutDefault;
    }
    tmpResult = conjurePublishCard;
  }
  cResult[0] = cta;
  cResult[1] = projectId;
  cResult[2] = tmp5;
  cResult[3] = turnId;
  cResult[4] = tmp8Result4;
  tmp6 = tmp8Result4;
}) : (function ConjurePublishCtaCard(arg0) {
  ({ projectId, turnId, cta } = arg0);
  const tmp3 = useConjurePublishActionDefault(projectId);
  let tmp6Result4 = null;
  if (null != tmp3) {
    tmp6Result4 = null;
    if (obj.isConjurePublishCtaVisible(tmp3, cta)) {
      const obj2 = { projectId, publish: tmp3 };
      const items = [React4(closure_6, obj2), , ];
      let tmp6Result = null;
      if (null != tmp3.failure) {
        const obj3 = { variant: "text-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", children: tmp3.failure };
        tmp6Result = React4(Text_Text.Text, obj3);
      }
      items[1] = tmp6Result;
      let tmp6Result3 = null;
      if (null != turnId) {
        const obj4 = { projectId, turnId, cta, status: tmp3.status };
        tmp6Result3 = React4(ConjurePublishRatingDefault, obj4, turnId);
      }
      const obj5 = { children: null };
      const obj6 = { spacing: 12, children: null };
      items[2] = tmp6Result3;
      obj6.children = items;
      obj5.children = hasOwnProperty(Stack_Stack.Stack, obj6);
      tmp6Result4 = React4(ConjureTipInlineCalloutDefault, obj5);
      const tmpResult = ConjureTipInlineCalloutDefault;
    }
    obj = conjurePublishCard;
  }
  return tmp6Result4;
});