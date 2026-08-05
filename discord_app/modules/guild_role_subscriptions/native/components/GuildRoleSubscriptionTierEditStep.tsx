import { SafeAreaPaddingView } from "../../../../components_native/common/SafeAreaView.tsx";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { useSafeAreaInsets } from "../../../safe_area/useSafeAreaInsets.native.tsx";
import { FormSeparator } from "FormSeparator.tsx";
// discord_app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierEditStep.tsx
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let closure_6;
let error;
const require = arg1;
function Header(arg0) {
  let description;
  let title;
  ({ description, title } = arg0);
  const tmp = createCacheKey();
  let obj = { top: true, style: tmp.headerContainer, children: null };
  obj = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title };
  const items = [callback(Text /* Text */.Text, obj), , ];
  obj = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default", children: description };
  items[1] = callback(Text /* Text */.Text, obj);
  items[2] = callback(FormSeparator, { style: tmp.separator });
  obj[2] = items;
  return callback2(SafeAreaPaddingView /* SafeAreaPaddingView */.SafeAreaPaddingView, obj);
}
function Footer(arg0) {
  let canProceedToNextStep;
  let nextStep;
  let onProceed;
  let submitting;
  ({ canProceedToNextStep, nextStep, onProceed, submitting } = arg0);
  if (null == nextStep) {
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    let stringResult = intl2.string(getSystemLocale /* getSystemLocale */.t["4cAsqe"]);
    let tmp5 = require;
  } else {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    stringResult = intl.string(getSystemLocale /* getSystemLocale */.t["bm6P5/"]);
    tmp5 = require;
  }
  let obj = { style: null, children: null };
  const items = [createCacheKey().footerContainer, ];
  obj = { paddingBottom: useSafeAreaInsets().bottom };
  items[1] = obj;
  obj[0] = items;
  obj = { loading: submitting, disabled: !canProceedToNextStep, text: stringResult, onPress: onProceed };
  obj[1] = callback(tmp5(4695).Button, obj);
  return callback(closure_4, obj);
}
({ View: c4, ScrollView: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, scrollContainer: null, headerContainer: null, title: null, subtitle: null, separator: null, footerContainer: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, height: "100%" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexGrow: 1 };
createCacheKey[2] = { position: "relative", paddingTop: 48, paddingBottom: 8, paddingHorizontal: 16, alignItems: "center" };
createCacheKey[3] = { marginTop: 12, textAlign: "center" };
createCacheKey[4] = { marginTop: 8, textAlign: "center" };
createCacheKey[5] = { marginTop: 24 };
createCacheKey[6] = { width: "100%", padding: 16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierEditStep.tsx");

export default function GuildRoleSubscriptionTierEditStep(scrollable) {
  const merged = Object.assign(scrollable, Object.create(null));
  let navigation;
  let nextStep;
  let onProceed;
  const tmp2 = createCacheKey();
  let obj = navigation(onProceed[11]);
  navigation = obj.useNavigation();
  nextStep = merged.nextStep;
  onProceed = merged.onProceed;
  const items = [navigation, nextStep, onProceed];
  const callback = React.useCallback(() => {
    if (null != onProceed) {
      tmp();
    } else if (null != nextStep) {
      navigation.push(tmp2);
    }
  }, items);
  if (false !== scrollable.scrollable) {
    obj = { style: null, children: null };
    obj[0] = tmp2.container;
    obj = {};
    const merged1 = Object.assign(merged);
    const items1 = [callback(Header, obj), , ];
    const obj1 = { keyboardShouldPersistTaps: "handled", showsVerticalScrollIndicator: false, alwaysBounceVertical: false, contentContainerStyle: null, children: null };
    const items2 = [tmp2.scrollContainer];
    obj1[3] = items2;
    obj1[4] = merged.children;
    items1[1] = callback(closure_5, obj1);
    const obj2 = {};
    const merged2 = Object.assign(merged);
    obj2.onProceed = callback;
    items1[2] = callback(Footer, obj2);
    obj[1] = items1;
    let obj3 = obj;
  } else {
    obj3 = { style: null, children: null };
    obj3[0] = tmp2.container;
    const obj4 = {};
    const merged3 = Object.assign(merged);
    const items3 = [callback(Header, obj4), merged.children, ];
    const obj5 = {};
    const merged4 = Object.assign(merged);
    obj5.onProceed = callback;
    items3[2] = callback(Footer, obj5);
    obj3[1] = items3;
  }
  return closure_7(closure_4, obj3);
};