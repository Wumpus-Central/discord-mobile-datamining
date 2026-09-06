// === Module 17733: GuildRoleSubscriptionTierEditStep ===

// Module 17733 (GuildRoleSubscriptionTierEditStep)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import useNavigation from "useNavigation" /* 1483 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import Text_Text from "Text/Text" /* 4556 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7123 */;
import FormSeparatorDefault from "FormSeparator" /* 15217 */;
import noop from "module_19" /* 19 */;

require = fn;
function Header(arg0) {
  ({ description, title } = arg0);
  const tmp = closure_8();
  let obj = { top: true, style: tmp.headerContainer, children: null };
  obj = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title };
  const items = [timestampProducer(Text_Text.Text, obj), , ];
  obj = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default", children: description };
  items[1] = timestampProducer(Text_Text.Text, obj);
  items[2] = timestampProducer(FormSeparatorDefault, { style: tmp.separator });
  obj.children = items;
  return React5(common_SafeAreaView.SafeAreaPaddingView, obj);
}
function Footer(arg0) {
  ({ canProceedToNextStep, nextStep, onProceed, submitting } = arg0);
  if (null == nextStep) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t["4cAsqe"]);
    let tmp5 = require;
  } else {
    const intl = util.intl;
    stringResult = intl.string(util.t["bm6P5/"]);
    tmp5 = require;
  }
  let obj = { style: null, children: null };
  const items = [closure_8().footerContainer, ];
  obj = { paddingBottom: useSafeAreaInsetsDefault().bottom };
  items[1] = obj;
  obj.style = items;
  obj = { loading: submitting, disabled: !canProceedToNextStep, text: stringResult, onPress: onProceed };
  obj.children = timestampProducer(tmp5(4975).Button, obj);
  return timestampProducer(React4, obj);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { container: null, scrollContainer: null, headerContainer: null, title: null, subtitle: null, separator: null, footerContainer: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, height: "100%" };
createStyles.container = createStyles;
createStyles.scrollContainer = { flexGrow: 1 };
createStyles.headerContainer = { position: "relative", paddingTop: 48, paddingBottom: 8, paddingHorizontal: 16, alignItems: "center" };
createStyles.title = { marginTop: 12, textAlign: "center" };
createStyles.subtitle = { marginTop: 8, textAlign: "center" };
createStyles.separator = { marginTop: 24 };
createStyles.footerContainer = { width: "100%", padding: 16 };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierEditStep.tsx");

export default function GuildRoleSubscriptionTierEditStep(scrollable) {
  const merged = Object.assign(scrollable, Object.assign({ scrollable: 0 }));
  const tmp2 = closure_8();
  let obj = useNavigation;
  const navigation = obj.useNavigation();
  const nextStep = merged.nextStep;
  const onProceed = merged.onProceed;
  const items = [navigation, nextStep, onProceed];
  const callback = noop.useCallback(() => {
    if (null != onProceed) {
      tmp();
    } else if (null != nextStep) {
      navigation.push(tmp2);
    }
  }, items);
  if (false !== scrollable.scrollable) {
    obj = { style: tmp2.container, children: null };
    obj = {};
    const merged1 = Object.assign(merged);
    const items1 = [timestampProducer(Header, obj), , ];
    const obj1 = { keyboardShouldPersistTaps: "handled", showsVerticalScrollIndicator: false, alwaysBounceVertical: false, contentContainerStyle: null, children: null };
    const items2 = [tmp2.scrollContainer];
    obj1.contentContainerStyle = items2;
    obj1.children = merged.children;
    items1[1] = timestampProducer(hasOwnProperty, obj1);
    const obj2 = {};
    const merged2 = Object.assign(merged);
    obj2.onProceed = callback;
    items1[2] = timestampProducer(Footer, obj2);
    obj.children = items1;
    let obj3 = obj;
  } else {
    obj3 = { style: tmp2.container, children: null };
    const obj4 = {};
    const merged3 = Object.assign(merged);
    const items3 = [timestampProducer(Header, obj4), merged.children, ];
    const obj5 = {};
    const merged4 = Object.assign(merged);
    obj5.onProceed = callback;
    items3[2] = timestampProducer(Footer, obj5);
    obj3.children = items3;
  }
  return React5(React4, obj3);
};