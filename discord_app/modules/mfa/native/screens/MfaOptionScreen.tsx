// === Module 15761: MfaOptionScreen ===

// Module 15761 (MfaOptionScreen)
import Text_Text from "Text/Text" /* 4632 */;
import Stack_Stack from "Stack/Stack" /* 5054 */;
import useWideAuthViewDefault from "useWideAuthView" /* 7045 */;
import BackgroundImageDefault from "BackgroundImage" /* 7076 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7226 */;
import MfaScreenUtilsDefault from "MfaScreenUtils" /* 15762 */;
import BackButtonDefault from "BackButton" /* 15763 */;
import noop from "module_19" /* 19 */;

require = fn;
const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/mfa/native/screens/MfaOptionScreen.tsx");

export default function MFAOptionScreen(arg0) {
  ({ headerImage, subtitle, screenProps, error } = arg0);
  ({ headerText, input, submit, mfaMethod, content } = arg0);
  const tmp3 = useWideAuthViewDefault();
  const screenStyles = MfaScreenUtilsDefault.useScreenStyles(tmp3);
  const first = screenProps.mfaChallenge.methods[0];
  let type;
  if (first != null) {
    type = first.type;
  }
  const rect = { bottom: !tmp3, top: !tmp3, style: screenStyles.contentContainer, children: null };
  const obj2 = { style: screenStyles.mfaContainerHeader, spacing: 4, children: null };
  let tmp9 = null != headerImage;
  if (tmp9) {
    tmp9 = headerImage;
  }
  const items = [tmp9, React4(Text_Text.Heading, { variant: "heading-xl/extrabold", style: screenStyles.mfaContainerHeaderText, children: headerText }), , ];
  let tmp10Result = null != subtitle;
  if (tmp10Result) {
    const obj4 = { variant: "heading-sm/normal", color: "text-default", children: subtitle };
    tmp10Result = React4(Text_Text.Text, obj4);
  }
  items[2] = tmp10Result;
  let tmp10Result4 = null != error;
  if (tmp10Result4) {
    const obj5 = { variant: "text-sm/normal", color: "text-feedback-critical", children: error };
    tmp10Result4 = React4(Text_Text.Text, obj5);
  }
  let tmp10Result5 = type === mfaMethod;
  const obj6 = { children: null };
  items[3] = tmp10Result4;
  obj2.children = items;
  const items1 = [hasOwnProperty(Stack_Stack.Stack, obj2), input];
  obj6.children = items1;
  const items2 = [hasOwnProperty(Stack_Stack.Stack, obj6), content, ];
  const obj7 = { style: screenStyles.submit, children: null };
  const items3 = [submit, ];
  if (tmp10Result5) {
    const obj8 = { props: screenProps };
    tmp10Result5 = React4(BackButtonDefault, obj8);
  }
  items3[1] = tmp10Result5;
  obj7.children = items3;
  items2[2] = hasOwnProperty(Stack_Stack.Stack, obj7);
  rect.children = items2;
  const tmp7Result = hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, rect);
  const children = [React4(BackgroundImageDefault, { backgroundImageCover: false }), ];
  let tmp10Result6 = tmp7Result;
  if (tmp3) {
    const obj9 = { keyboardShouldPersistTaps: "handled", children: tmp7Result };
    tmp10Result6 = React4(ScrollView, obj9);
  }
  children[1] = tmp10Result6;
  return hasOwnProperty(timestampProducer, { children });
};