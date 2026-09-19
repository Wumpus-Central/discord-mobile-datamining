// === Module 18181: GuildRoleSubscriptionTierEditStep ===

// Module 18181 (GuildRoleSubscriptionTierEditStep)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import useNavigation from "useNavigation" /* 1484 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import Text_Text from "Text/Text" /* 4752 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7363 */;
import FormSeparatorDefault from "FormSeparator" /* 15481 */;
import noop from "module_19" /* 19 */;

require = fn;
function Header(arg0) {
  ({ description, title } = arg0);
  const tmp = closure_8();
  const obj = { top: true, style: tmp.headerContainer, children: null };
  const items = [timestampProducer(Text_Text.Text, { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title }), timestampProducer(Text_Text.Text, { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default", children: description }), timestampProducer(FormSeparatorDefault, { style: tmp.separator })];
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
  const obj = { style: null, children: null };
  const items = [closure_8().footerContainer, ];
  const tmp = closure_8();
  items[1] = { paddingBottom: useSafeAreaInsetsDefault().bottom };
  obj.style = items;
  obj.children = timestampProducer(tmp5(5186).Button, { loading: submitting, disabled: !canProceedToNextStep, text: stringResult, onPress: onProceed });
  return timestampProducer(React4, obj);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, height: "100%" }, scrollContainer: { flexGrow: 1 }, headerContainer: { position: "relative", paddingTop: 48, paddingBottom: 8, paddingHorizontal: 16, alignItems: "center" }, title: { marginTop: 12, textAlign: "center" }, subtitle: { marginTop: 8, textAlign: "center" }, separator: { marginTop: 24 }, footerContainer: { width: "100%", padding: 16 } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierEditStep.tsx");

export default function GuildRoleSubscriptionTierEditStep(scrollable) {
  const merged = Object.assign(scrollable, Object.assign({ scrollable: 0 }));
  const tmp2 = closure_8();
  const navigation = useNavigation.useNavigation();
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
    const obj2 = { style: tmp2.container, children: null };
    const obj3 = {};
    const merged1 = Object.assign(merged);
    const items1 = [timestampProducer(Header, obj3), , ];
    const obj4 = { keyboardShouldPersistTaps: "handled", showsVerticalScrollIndicator: false, alwaysBounceVertical: false, contentContainerStyle: null, children: null };
    const items2 = [tmp2.scrollContainer];
    obj4.contentContainerStyle = items2;
    obj4.children = merged.children;
    items1[1] = timestampProducer(hasOwnProperty, obj4);
    const obj5 = {};
    const merged2 = Object.assign(merged);
    obj5.onProceed = callback;
    items1[2] = timestampProducer(Footer, obj5);
    obj2.children = items1;
    let obj6 = obj2;
  } else {
    obj6 = { style: tmp2.container, children: null };
    const obj7 = {};
    const merged3 = Object.assign(merged);
    const items3 = [timestampProducer(Header, obj7), merged.children, ];
    const obj8 = {};
    const merged4 = Object.assign(merged);
    obj8.onProceed = callback;
    items3[2] = timestampProducer(Footer, obj8);
    obj6.children = items3;
  }
  return React5(React4, obj6);
};