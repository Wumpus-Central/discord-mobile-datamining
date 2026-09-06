// === Module 5691: ChangeEmailWarning ===

// Module 5691 (ChangeEmailWarning)
import nativeDefault from "native" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const hcArticle = fn(5684).COMMON_SCAMS_EDUCATION_HC_ARTICLE;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = { container: null, title: null, body: null, buttonContainer: null };
createStyles = { flex: 1, padding: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "center" };
createStyles.container = createStyles;
createStyles.title = { marginTop: nativeDefault.space.PX_16 };
let obj1 = { marginTop: nativeDefault.space.PX_16 };
createStyles.body = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
let obj2 = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
createStyles.buttonContainer = { flexDirection: "row", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 };
let closure_11 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/verification/native/components/ChangeEmailWarning.tsx");

export default function ChangeEmailWarning(changeEmailReason) {
  changeEmailReason = changeEmailReason.changeEmailReason;
  const tmp = closure_11();
  let obj = changeEmailReason(1483);
  const navigation = obj.useNavigation();
  let obj1 = changeEmailReason(504);
  const items = [UserStore];
  const items1 = [navigation, changeEmailReason];
  const stateFromStores = obj1.useStateFromStores(items, () => currentUser.getCurrentUser());
  let tmp7 = null;
  if (null != stateFromStores) {
    obj = { keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, children: null };
    obj = { style: tmp.container, children: null };
    const items2 = [closure_9(tmp2(5692).TrafficConeSpotIllustration, {}), , , ];
    obj1 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    const intl = tmp2(1114).intl;
    obj1.children = intl.string(tmp2(1114).t.hhR7gX);
    items2[1] = closure_9(tmp2(4556).Text, obj1);
    const obj2 = { style: tmp.body, accessibilityRole: "header", variant: "text-md/normal", color: "mobile-text-heading-primary", children: null };
    const intl2 = tmp2(1114).intl;
    const obj3 = { hcArticle };
    const items3 = [intl2.format(tmp2(1114).t.rqWXUf, obj3), "\n\n", ];
    const intl3 = tmp2(1114).intl;
    items3[2] = intl3.string(tmp2(1114).t["3LW10C"]);
    obj2.children = items3;
    items2[2] = closure_10(tmp2(4556).Text, obj2);
    const obj4 = { style: tmp.buttonContainer, children: null };
    const obj5 = { size: "md", variant: "tertiary", text: null, onPress: null, shrink: true };
    const intl4 = tmp2(1114).intl;
    obj5.text = intl4.string(tmp2(1114).t.rwTBFs);
    obj5.onPress = tmp6;
    const items4 = [closure_9(tmp2(4975).Button, obj5), ];
    const obj6 = { size: "md", variant: "primary", text: null, onPress: null, shrink: true };
    const intl5 = tmp2(1114).intl;
    obj6.text = intl5.string(tmp2(1114).t["ETE/oC"]);
    obj6.onPress = function onPress() {
      return navigation(dependencyMap[16]).close();
    };
    items4[1] = closure_9(tmp2(4975).Button, obj6);
    obj4.children = items4;
    items2[3] = closure_10(closure_4, obj4);
    obj.children = items2;
    obj.children = closure_10(closure_4, obj);
    tmp7 = closure_9(closure_5, obj);
  }
  return tmp7;
};