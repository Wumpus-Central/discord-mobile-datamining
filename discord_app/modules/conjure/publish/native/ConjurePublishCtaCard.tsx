// === Module 18833: ConjurePublishCtaCard ===

// Module 18833 (ConjurePublishCtaCard)
import Text_Text from "Text/Text" /* 5634 */;
import components_Button_Button from "components/Button/Button" /* 5641 */;
import Stack_Stack from "Stack/Stack" /* 6115 */;
import useConjurePublishActionDefault from "useConjurePublishAction" /* 11469 */;
import useConjureStartPublishDefault from "useConjureStartPublish" /* 18470 */;
import conjurePublishCard from "conjurePublishCard" /* 18647 */;
import ConjureTipInlineCalloutDefault from "ConjureTipInlineCallout" /* 18834 */;
import noop from "module_19" /* 19 */;

require = fn;
function PublishCta(publish) {
  publish = publish.publish;
  closure_0 = useConjureStartPublishDefault(publish.projectId, publish);
  const obj = { text: publish.label, variant: "primary", size: "sm", loading: null, onPress: null };
  let tmp2 = "publishing" === publish.state;
  if (tmp2) {
    tmp2 = !publish.showsProgress;
  }
  obj.loading = tmp2;
  obj.onPress = function onPress() {
    return closure_0("card");
  };
  return React3(Stack_Stack.Stack, { direction: "horizontal", children: React3(components_Button_Button.Button, obj) });
}
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishCtaCard.tsx");

export default function ConjurePublishCtaCard(projectId) {
  projectId = projectId.projectId;
  const tmp3 = useConjurePublishActionDefault(projectId);
  let tmp6Result2 = null;
  if (null != tmp3) {
    tmp6Result2 = null;
    if (obj.isConjurePublishCtaVisible(tmp3, projectId.cta)) {
      const obj2 = { projectId, publish: tmp3 };
      items = [React3(PublishCta, obj2), ];
      let tmp6Result = null;
      if (null != tmp3.failure) {
        const obj3 = { variant: "body-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", children: tmp3.failure };
        tmp6Result = React3(Text_Text.Text, obj3);
      }
      const obj4 = { children: null };
      const obj5 = { spacing: 12, children: null };
      items[1] = tmp6Result;
      obj5.children = items;
      obj4.children = React4(Stack_Stack.Stack, obj5);
      tmp6Result2 = React3(ConjureTipInlineCalloutDefault, obj4);
      const tmpResult = ConjureTipInlineCalloutDefault;
    }
    obj = conjurePublishCard;
  }
  return tmp6Result2;
};