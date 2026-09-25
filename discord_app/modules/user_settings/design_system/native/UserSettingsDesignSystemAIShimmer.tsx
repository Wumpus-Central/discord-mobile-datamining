// === Module 15387: UserSettingsDesignSystemAIShimmer ===

// Module 15387 (UserSettingsDesignSystemAIShimmer)
import Text_Text from "Text/Text" /* 4825 */;
import Stack_Stack from "Stack/Stack" /* 5272 */;
import components_Button_Button from "components/Button/Button" /* 5274 */;
import Card from "Card" /* 5914 */;
import AIShimmer from "AIShimmer" /* 13663 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function Picker(arg0) {
  ({ options, value: require, onChange: dependencyMap } = arg0);
  return closure_6(closure_5, {
    style: closure_8().buttonRow,
    children: options.map((text) => {
      closure_0 = text;
      let str = "secondary";
      if (text === closure_0) {
        str = "primary";
      }
      return closure_1_6(components_Button_Button.Button, {
        size: "sm",
        variant: str,
        text,
        onPress() {
          return dependencyMap(closure_0);
        }
      }, text);
    })
  });
}
function Stage(children) {
  return timestampProducer(hasOwnProperty, { style: closure_8().stage, children: children.children });
}
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4829);
let closure_8 = createStyles.createStyles({ container: { padding: 16 }, buttonRow: { flexDirection: "row", flexWrap: "wrap", gap: 8 }, stage: { minHeight: 28, justifyContent: "center" } });
const text = ["Reading the channel", "Finding the highlights", "Writing it up"];
const options = ["text-xs/normal", "text-sm/normal", "text-md/normal", "text-lg/semibold"];
const options2 = ["text-default", "text-subtle"];
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemAIShimmer.tsx");

export default function UserSettingsDesignSystemAIShimmer() {
  const tmp = closure_8();
  const ref = noop.useRef(null);
  const tmp3 = _slicedToArray(noop.useState("text-md/normal"), 2);
  const first = tmp3[0];
  const tmp5 = _slicedToArray(noop.useState("text-default"), 2);
  const first1 = tmp5[0];
  const tmp7 = _slicedToArray(noop.useState("text-subtle"), 2);
  const first2 = tmp7[0];
  const obj = { contentContainerStyle: tmp.container, children: null };
  const obj2 = { spacing: 24, children: null };
  const obj3 = { children: null };
  const obj4 = { children: null };
  const items = [timestampProducer(Text_Text.Text, { variant: "text-lg/bold", children: "Variant" }), timestampProducer(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "Any Mana text variant. The glyph band scales with the font size. Default `text-md/normal`." }), timestampProducer(Picker, { options, value: first, onChange: tmp3[1] }), ];
  const obj6 = { children: timestampProducer(AIShimmer.AIShimmer, { text, variant: first }) };
  items[3] = timestampProducer(Stage, obj6);
  obj4.children = items;
  obj3.children = React5(Stack_Stack.Stack, obj4);
  const items1 = [timestampProducer(Card.Card, obj3), , ];
  const obj8 = { children: null };
  const obj9 = { children: null };
  const items2 = [timestampProducer(Text_Text.Text, { variant: "text-lg/bold", children: "Colors" }), timestampProducer(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "The text and moving glyph band can use different colors." }), timestampProducer(Text_Text.Text, { variant: "text-md/medium", children: "Text color" }), timestampProducer(Picker, { options: options2, value: first1, onChange: tmp5[1] }), timestampProducer(Text_Text.Text, { variant: "text-md/medium", children: "Glyph color" }), timestampProducer(Picker, { options: options2, value: first2, onChange: tmp7[1] }), ];
  const obj12 = { children: timestampProducer(AIShimmer.AIShimmer, { text, color: first1, glyphColor: first2 }) };
  items2[6] = timestampProducer(Stage, obj12);
  obj9.children = items2;
  obj8.children = React5(Stack_Stack.Stack, obj9);
  items1[1] = timestampProducer(Card.Card, obj8);
  const obj14 = { children: null };
  const obj15 = { children: null };
  const items3 = [timestampProducer(Text_Text.Text, { variant: "text-lg/bold", children: "Manual Trigger" }), React5(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: ["`delay=", null, "` turns off automatic changes. Use play() to run the next animation."] }), , ];
  const obj16 = { style: tmp.buttonRow, children: null };
  const items4 = [
    timestampProducer(components_Button_Button.Button, {
      size: "sm",
      variant: "secondary",
      text: "play()",
      onPress() {
        const current = ref.current;
        let playResult;
        if (current != null) {
          playResult = current.play();
        }
        return playResult;
      }
    }),
    timestampProducer(components_Button_Button.Button, {
      size: "sm",
      variant: "secondary",
      text: "stop()",
      onPress() {
        const current = ref.current;
        let stopResult;
        if (current != null) {
          stopResult = current.stop();
        }
        return stopResult;
      }
    })
  ];
  obj16.children = items4;
  items3[2] = React5(hasOwnProperty, obj16);
  const obj19 = { children: timestampProducer(AIShimmer.AIShimmer, { ref, text, delay: null }) };
  items3[3] = timestampProducer(Stage, obj19);
  obj15.children = items3;
  obj14.children = React5(Stack_Stack.Stack, obj15);
  items1[2] = timestampProducer(Card.Card, obj14);
  obj2.children = items1;
  obj.children = React5(Stack_Stack.Stack, obj2);
  return timestampProducer(React4, obj);
};