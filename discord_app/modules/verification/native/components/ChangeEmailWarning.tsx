// discord_app/modules/verification/native/components/ChangeEmailWarning.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ConstantsIOS from "../../../../ConstantsIOS.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const hcArticle = fn(5769).COMMON_SCAMS_EDUCATION_HC_ARTICLE;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4639);
const obj2 = {
  container: { flex: 1, padding: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "center" },
  title: null,
  body: null,
  buttonContainer: null,
};
let obj3 = { flex: 1, padding: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "center" };
obj2.title = { marginTop: nativeDefault.space.PX_16 };
let obj4 = { marginTop: nativeDefault.space.PX_16 };
obj2.body = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
let obj5 = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
obj2.buttonContainer = { flexDirection: "row", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 };
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/verification/native/components/ChangeEmailWarning.tsx");

export default function ChangeEmailWarning(changeEmailReason) {
  changeEmailReason = changeEmailReason.changeEmailReason;
  const tmp = closure_11();
  const navigation = changeEmailReason(1484).useNavigation();
  const obj = changeEmailReason(1484);
  const items = [UserStore];
  const items1 = [navigation, changeEmailReason];
  const stateFromStores = changeEmailReason(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  let tmp7 = null;
  if (null != stateFromStores) {
    const obj3 = { keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, children: null };
    const obj4 = { style: tmp.container, children: null };
    const items2 = [closure_9(tmp2(5777).TrafficConeSpotIllustration, {}), , ,];
    const obj5 = {
      style: tmp.title,
      accessibilityRole: "header",
      variant: "heading-xl/extrabold",
      color: "mobile-text-heading-primary",
      children: null,
    };
    const intl = tmp2(1115).intl;
    obj5.children = intl.string(tmp2(1115).t.hhR7gX);
    items2[1] = closure_9(tmp2(4635).Text, obj5);
    const obj6 = {
      style: tmp.body,
      accessibilityRole: "header",
      variant: "text-md/normal",
      color: "mobile-text-heading-primary",
      children: null,
    };
    const intl2 = tmp2(1115).intl;
    const obj7 = { hcArticle };
    const items3 = [intl2.format(tmp2(1115).t.rqWXUf, obj7), "\n\n"];
    const intl3 = tmp2(1115).intl;
    items3[2] = intl3.string(tmp2(1115).t["3LW10C"]);
    obj6.children = items3;
    items2[2] = closure_10(tmp2(4635).Text, obj6);
    const obj8 = { style: tmp.buttonContainer, children: null };
    const obj9 = { size: "md", variant: "tertiary", text: null, onPress: null, shrink: true };
    const intl4 = tmp2(1115).intl;
    obj9.text = intl4.string(tmp2(1115).t.rwTBFs);
    obj9.onPress = tmp6;
    const items4 = [closure_9(tmp2(5059).Button, obj9)];
    const obj10 = { size: "md", variant: "primary", text: null, onPress: null, shrink: true };
    const intl5 = tmp2(1115).intl;
    obj10.text = intl5.string(tmp2(1115).t["ETE/oC"]);
    obj10.onPress = function onPress() {
      return navigation(dependencyMap[16]).close();
    };
    items4[1] = closure_9(tmp2(5059).Button, obj10);
    obj8.children = items4;
    items2[3] = closure_10(closure_4, obj8);
    obj4.children = items2;
    obj3.children = closure_10(closure_4, obj4);
    tmp7 = closure_9(closure_5, obj3);
  }
  return tmp7;
}
