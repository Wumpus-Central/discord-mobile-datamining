// === Module 12733: ConjurePublishCtaCard ===

// Module 12733 (ConjurePublishCtaCard)
import Text_Text from "Text/Text" /* 5619 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import Stack_Stack from "Stack/Stack" /* 6022 */;
import useConjurePublishActionDefault from "useConjurePublishAction" /* 12400 */;
import useConjureStartPublishDefault from "useConjureStartPublish" /* 12405 */;
import conjurePublishCard from "conjurePublishCard" /* 12541 */;
import ConjureTipInlineCalloutDefault from "ConjureTipInlineCallout" /* 12734 */;
import ConjurePublishRatingDefault from "ConjurePublishRating" /* 12735 */;
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
  let tmp6Result4 = null;
  if (null != tmp3) {
    tmp6Result4 = null;
    if (obj.isConjurePublishCtaVisible(tmp3, cta)) {
      const obj2 = { projectId, publish: tmp3 };
      const items = [React3(PublishCta, obj2), , ];
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
};