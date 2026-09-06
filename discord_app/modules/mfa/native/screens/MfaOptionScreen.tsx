// discord_app/modules/mfa/native/screens/MfaOptionScreen.tsx
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import useWideAuthViewDefault from "../../../auth/native/useWideAuthView.tsx";
import BackgroundImageDefault from "../../../auth/native/components/atoms/BackgroundImage.tsx";
import common_SafeAreaView from "../../../../components_native/common/SafeAreaView.tsx";
import MfaScreenUtilsDefault from "../MfaScreenUtils.tsx";
import BackButtonDefault from "../components/BackButton.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

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
  let obj = MfaScreenUtilsDefault;
  const screenStyles = obj.useScreenStyles(tmp3);
  const first = screenProps.mfaChallenge.methods[0];
  let type;
  if (first != null) {
    type = first.type;
  }
  const rect = { bottom: !tmp3, top: !tmp3, style: screenStyles.contentContainer, children: null };
  obj = { style: screenStyles.mfaContainerHeader, spacing: 4, children: null };
  let tmp9 = null != headerImage;
  if (tmp9) {
    tmp9 = headerImage;
  }
  const items = [tmp9, , ,];
  obj = { variant: "heading-xl/extrabold", style: screenStyles.mfaContainerHeaderText, children: headerText };
  items[1] = React4(Text_Text.Heading, obj);
  let tmp10Result = null != subtitle;
  if (tmp10Result) {
    const obj1 = { variant: "heading-sm/normal", color: "text-default", children: subtitle };
    tmp10Result = React4(Text_Text.Text, obj1);
  }
  items[2] = tmp10Result;
  tmp10Result = null != error;
  if (tmp10Result) {
    const obj2 = { variant: "text-sm/normal", color: "text-feedback-critical", children: error };
    tmp10Result = React4(Text_Text.Text, obj2);
  }
  let tmp10Result1 = type === mfaMethod;
  const obj3 = { children: null };
  items[3] = tmp10Result;
  obj.children = items;
  const items1 = [hasOwnProperty(Stack_Stack.Stack, obj), input];
  obj3.children = items1;
  const items2 = [hasOwnProperty(Stack_Stack.Stack, obj3), content];
  const obj4 = { style: screenStyles.submit, children: null };
  const items3 = [submit];
  if (tmp10Result1) {
    const obj5 = { props: screenProps };
    tmp10Result1 = React4(BackButtonDefault, obj5);
  }
  items3[1] = tmp10Result1;
  obj4.children = items3;
  items2[2] = hasOwnProperty(Stack_Stack.Stack, obj4);
  rect.children = items2;
  const tmp7Result = hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, rect);
  const children = [React4(BackgroundImageDefault, { backgroundImageCover: false })];
  let tmp10Result2 = tmp7Result;
  if (tmp3) {
    const obj6 = { keyboardShouldPersistTaps: "handled", children: tmp7Result };
    tmp10Result2 = React4(ScrollView, obj6);
  }
  children[1] = tmp10Result2;
  return hasOwnProperty(timestampProducer, { children });
}
