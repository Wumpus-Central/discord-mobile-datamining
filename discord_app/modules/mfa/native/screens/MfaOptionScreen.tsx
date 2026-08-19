// discord_app/modules/mfa/native/screens/MfaOptionScreen.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import SafeAreaPaddingView from "../../../../components_native/common/SafeAreaView.tsx";
import useWideAuthViewDefault from "../../../auth/native/useWideAuthView.tsx";
import BackgroundImageDefault from "../../../auth/native/components/atoms/BackgroundImage.tsx";
import _modDef15125 from "../MfaScreenUtils.tsx";
import BackButtonDefault from "../components/BackButton.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";

const ScrollView = get_ActivityIndicator.ScrollView;
({ jsx: c4, jsxs: c5, Fragment: closure_6 } = jsxProd);
const result = obj132.fileFinishedImporting("modules/mfa/native/screens/MfaOptionScreen.tsx");

export default function MFAOptionScreen(arg0) {
  ({ headerImage, subtitle, screenProps, error } = arg0);
  ({ headerText, input, submit, mfaMethod, content } = arg0);
  const tmp3 = useWideAuthViewDefault();
  let obj = _modDef15125;
  const screenStyles = obj.useScreenStyles(tmp3);
  const first = screenProps.mfaChallenge.methods[0];
  let type;
  if (first != null) {
    type = first.type;
  }
  obj = { style: screenStyles.mfaContainerHeader, spacing: 4, children: null };
  let tmp9 = null != headerImage;
  if (tmp9) {
    tmp9 = headerImage;
  }
  const items = [tmp9, callback(Text.Text, { variant: "heading-xl/extrabold", style: screenStyles.mfaContainerHeaderText, children: headerText }), , ];
  let tmp10Result = null != subtitle;
  if (tmp10Result) {
    const obj2 = { variant: "heading-sm/normal", color: "text-default", children: null };
    obj2[2] = subtitle;
    tmp10Result = callback(Text.Text, obj2);
  }
  items[2] = tmp10Result;
  tmp10Result = null != error;
  if (tmp10Result) {
    const obj3 = { variant: "text-sm/normal", color: "text-feedback-critical", children: null };
    obj3[2] = error;
    tmp10Result = callback(Text.Text, obj3);
  }
  let tmp10Result1 = type === mfaMethod;
  const obj4 = { children: null };
  items[3] = tmp10Result;
  obj[2] = items;
  const items1 = [callback(Stack.Stack, obj), input];
  obj4[0] = items1;
  const items2 = [callback(Stack.Stack, obj4), content, ];
  const obj5 = { style: screenStyles.submit, children: null };
  const items3 = [submit, ];
  if (tmp10Result1) {
    const obj6 = { props: null };
    obj6[0] = screenProps;
    tmp10Result1 = callback(BackButtonDefault, obj6);
  }
  items3[1] = tmp10Result1;
  obj5[1] = items3;
  items2[2] = callback(Stack.Stack, obj5);
  obj[3] = items2;
  const tmp7Result = callback(SafeAreaPaddingView.SafeAreaPaddingView, obj);
  const children = [callback(BackgroundImageDefault, { backgroundImageCover: false }), ];
  let tmp10Result2 = tmp7Result;
  if (tmp3) {
    const obj7 = { keyboardShouldPersistTaps: "handled", children: null };
    obj7[1] = tmp7Result;
    tmp10Result2 = callback(ScrollView, obj7);
  }
  children[1] = tmp10Result2;
  return callback(closure_6, { children });
};