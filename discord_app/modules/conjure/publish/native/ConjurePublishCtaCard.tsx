// === Module 13750: ConjurePublishCtaCard ===

// Module 13750 (ConjurePublishCtaCard)
import Text_Text from "Text/Text" /* 5929 */;
import components_Button_Button from "components/Button/Button" /* 5936 */;
import Stack_Stack from "Stack/Stack" /* 6337 */;
import useConjurePublishActionDefault from "useConjurePublishAction" /* 13162 */;
import conjurePublishEval from "conjurePublishEval" /* 13164 */;
import useConjureStartPublishDefault from "useConjureStartPublish" /* 13171 */;
import conjurePublishCard from "conjurePublishCard" /* 13568 */;
import ConjureTipInlineCalloutDefault from "ConjureTipInlineCallout" /* 13751 */;
import ConjurePublishRatingDefault from "ConjurePublishRating" /* 13752 */;
import noop from "module_19" /* 19 */;

require = fn;
function PublishCta(publish) {
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
}
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishCtaCard.tsx");

export default function ConjurePublishCtaCard(arg0) {
  ({ projectId, turnId, cta } = arg0);
  const tmp3 = useConjurePublishActionDefault(projectId);
  conjurePublishEval;
  let tmp8Result4 = null;
  if (null != tmp3) {
    tmp8Result4 = null;
    if (tmp4Result.isConjurePublishCtaVisible(tmp3, cta)) {
      const obj = { projectId, publish: tmp3 };
      items = [React3(PublishCta, obj), , ];
      let tmp8Result = null;
      if (null != tmp3.failure) {
        const obj2 = { variant: "body-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", children: tmp3.failure };
        tmp8Result = React3(Text_Text.Text, obj2);
      }
      items[1] = tmp8Result;
      let tmp8Result3 = null;
      if (null != turnId) {
        tmp8Result3 = null;
        if (!tmp6) {
          const obj3 = { projectId, turnId, cta, status: tmp3.status, placement: "publish_card" };
          tmp8Result3 = React3(ConjurePublishRatingDefault, obj3, turnId);
        }
      }
      const obj4 = { children: null };
      const obj5 = { spacing: 12, children: null };
      items[2] = tmp8Result3;
      obj5.children = items;
      obj4.children = React4(Stack_Stack.Stack, obj5);
      tmp8Result4 = React3(ConjureTipInlineCalloutDefault, obj4);
      const tmpResult = ConjureTipInlineCalloutDefault;
    }
    tmp4Result = conjurePublishCard;
  }
  return tmp8Result4;
};