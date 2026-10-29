// === Module 12583: ConjurePublishCtaCard ===

// Module 12583 (ConjurePublishCtaCard)
import c from "c" /* 576 */;
import Text_Text from "Text/Text" /* 5271 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import Stack_Stack from "Stack/Stack" /* 6015 */;
import useConjurePublishActionDefault from "useConjurePublishAction" /* 11857 */;
import useConjureStartPublishDefault from "useConjureStartPublish" /* 12244 */;
import conjurePublishCard from "conjurePublishCard" /* 12392 */;
import ConjureTipInlineCalloutDefault from "ConjureTipInlineCallout" /* 12584 */;
import ConjurePublishRatingDefault from "ConjurePublishRating" /* 12585 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_5 = ReactCompilerGating.isReactCompilerEnabled() ? (function PublishCta(publish) {
  const cResult = c.c(6);
  publish = publish.publish;
  const tmp4 = useConjureStartPublishDefault(publish.projectId, publish);
  closure_0 = tmp4;
  if (cResult[0] !== tmp4) {
    const fn = function n() {
      return closure_0("card");
    };
    cResult[0] = tmp4;
    cResult[1] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === publish.label) {
    if (cResult[3] === tmp5) {
      if (cResult[4] === tmp6) {
        let tmp7 = cResult[5];
      }
      return tmp7;
    }
  }
  const obj2 = { direction: "horizontal", children: React3(components_Button_Button.Button, { text: publish.label, variant: "primary", size: "sm", loading: publish.publishing && !publish.showsProgress, onPress: tmp6 }) };
  const tmp8 = React3(Stack_Stack.Stack, obj2);
  cResult[2] = publish.label;
  cResult[3] = publish.publishing && !publish.showsProgress;
  cResult[4] = tmp6;
  cResult[5] = tmp8;
  tmp7 = tmp8;
  const obj3 = { text: publish.label, variant: "primary", size: "sm", loading: publish.publishing && !publish.showsProgress, onPress: tmp6 };
}) : (function PublishCta(publish) {
  publish = publish.publish;
  closure_0 = useConjureStartPublishDefault(publish.projectId, publish);
  const obj = { text: publish.label, variant: "primary", size: "sm", loading: null, onPress: null };
  let publishing = publish.publishing;
  if (publishing) {
    publishing = !publish.showsProgress;
  }
  obj.loading = publishing;
  obj.onPress = function onPress() {
    return closure_0("card");
  };
  return React3(Stack_Stack.Stack, { direction: "horizontal", children: React3(components_Button_Button.Button, obj) });
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
      const items = [React3(closure_5, obj2), , ];
      let tmp8Result = null;
      if (null != tmp5.failure) {
        const obj3 = { variant: "text-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", children: tmp5.failure };
        tmp8Result = React3(Text_Text.Text, obj3);
      }
      items[1] = tmp8Result;
      let tmp8Result3 = null;
      if (null != turnId) {
        const obj4 = { projectId, turnId, cta, status: tmp5.status };
        tmp8Result3 = React3(ConjurePublishRatingDefault, obj4, turnId);
      }
      const obj5 = { children: null };
      const obj6 = { spacing: 12, children: null };
      items[2] = tmp8Result3;
      obj6.children = items;
      obj5.children = React4(Stack_Stack.Stack, obj6);
      tmp8Result4 = React3(ConjureTipInlineCalloutDefault, obj5);
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
      const items = [React3(closure_5, obj2), , ];
      let tmp6Result = null;
      if (null != tmp3.failure) {
        const obj3 = { variant: "text-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", children: tmp3.failure };
        tmp6Result = React3(Text_Text.Text, obj3);
      }
      items[1] = tmp6Result;
      let tmp6Result3 = null;
      if (null != turnId) {
        const obj4 = { projectId, turnId, cta, status: tmp3.status };
        tmp6Result3 = React3(ConjurePublishRatingDefault, obj4, turnId);
      }
      const obj5 = { children: null };
      const obj6 = { spacing: 12, children: null };
      items[2] = tmp6Result3;
      obj6.children = items;
      obj5.children = React4(Stack_Stack.Stack, obj6);
      tmp6Result4 = React3(ConjureTipInlineCalloutDefault, obj5);
      const tmpResult = ConjureTipInlineCalloutDefault;
    }
    obj = conjurePublishCard;
  }
  return tmp6Result4;
});