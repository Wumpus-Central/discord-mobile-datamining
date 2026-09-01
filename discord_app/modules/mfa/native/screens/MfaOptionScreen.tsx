// === Module 15270: MFAOptionScreen ===

// Module 15270 (MFAOptionScreen)
import noopAll from "noop" /* 19 */;
import Text from "Text" /* 4474 */;
import Stack from "Stack" /* 4926 */;
import SafeAreaPaddingView from "SafeAreaPaddingView" /* 5553 */;
import useWideAuthViewDefault from "useWideAuthView" /* 7717 */;
import BackgroundImageDefault from "BackgroundImage" /* 7748 */;
import context from "context" /* 15268 */;
import _modDef15271 from "module_15271" /* 15271 */;
import { ScrollView } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5, Fragment: closure_6 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/mfa/native/screens/MfaOptionScreen.tsx");

export default function MFAOptionScreen(arg0) {
  ({ headerImage, subtitle, error } = arg0);
  ({ headerText, input, submit, mfaMethod, content } = arg0);
  let obj = context;
  const tmp4 = useWideAuthViewDefault();
  obj1 = _modDef15271;
  const screenStyles = obj1.useScreenStyles(tmp4);
  const first = obj.useMfaChallenge().mfaChallenge.methods[0];
  let type;
  if (first != null) {
    type = first.type;
  }
  obj = { bottom: !tmp4, top: !tmp4, style: screenStyles.contentContainer, children: null };
  obj = { style: screenStyles.mfaContainerHeader, spacing: 4, children: null };
  let tmp9 = null != headerImage;
  if (tmp9) {
    tmp9 = headerImage;
  }
  const items = [tmp9, , , ];
  obj1 = { variant: "heading-xl/extrabold", style: screenStyles.mfaContainerHeaderText, children: headerText };
  items[1] = callback(Text.Heading, obj1);
  let tmp10Result = null != subtitle;
  if (tmp10Result) {
    const obj2 = { variant: "heading-sm/normal", color: "text-default", children: null };
    obj2[2] = subtitle;
    tmp10Result = tmp10(tmp(4474).Text, obj2);
  }
  items[2] = tmp10Result;
  tmp10Result = null != error;
  if (tmp10Result) {
    const obj3 = { variant: "text-sm/normal", color: "text-feedback-critical", children: null };
    obj3[2] = error;
    tmp10Result = tmp10(tmp(4474).Text, obj3);
  }
  let tmp10Result1 = type === mfaMethod;
  const obj4 = { children: null };
  items[3] = tmp10Result;
  obj[2] = items;
  const items1 = [closure_5(Stack.Stack, obj), input];
  obj4[0] = items1;
  const items2 = [closure_5(Stack.Stack, obj4), content, ];
  const obj5 = { style: screenStyles.submit, children: null };
  const items3 = [submit, ];
  if (tmp10Result1) {
    tmp10Result1 = tmp10(tmp3(15272), {});
  }
  items3[1] = tmp10Result1;
  obj5[1] = items3;
  items2[2] = closure_5(Stack.Stack, obj5);
  obj[3] = items2;
  const tmp8Result = closure_5(SafeAreaPaddingView.SafeAreaPaddingView, obj);
  const children = [callback(BackgroundImageDefault, { backgroundImageCover: false }), ];
  let tmp10Result2 = tmp8Result;
  if (tmp4) {
    const obj6 = { keyboardShouldPersistTaps: "handled", children: null };
    obj6[1] = tmp8Result;
    tmp10Result2 = tmp10(ScrollView, obj6);
  }
  children[1] = tmp10Result2;
  return closure_5(closure_6, { children });
};