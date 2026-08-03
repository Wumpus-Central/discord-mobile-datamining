import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let c5;
let obj1;
const require = arg1;
({ View: obj1, ScrollView: c3 } = get_ActivityIndicator);
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { scrollContainer: { minHeight: "100%" }, container: { flexGrow: 1, alignItems: "center", justifyContent: "center" }, alertContainer: null, alert: null, alertContent: null, alertTitle: null, alertSubtitle: null, buttonWrapper: null, primaryButtonContainer: null, trailing: null };
createCacheKey = { paddingTop: 80 + require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT };
createCacheKey[2] = createCacheKey;
const merged = Object.assign(require("Themes").shadows.SHADOW_HIGH);
createCacheKey[3] = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.xl, borderWidth: 1, borderColor: require("Themes").colors.INTERACTIVE_BACKGROUND_ACTIVE, alignItems: "center", maxWidth: 290 };
createCacheKey[4] = { paddingVertical: 24, paddingHorizontal: 24, alignItems: "center" };
createCacheKey[5] = { paddingBottom: 8, textAlign: "center" };
obj1 = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.xl, borderWidth: 1, borderColor: require("Themes").colors.INTERACTIVE_BACKGROUND_ACTIVE, alignItems: "center", maxWidth: 290 };
createCacheKey[6] = { paddingBottom: require("Themes").space.PX_16, textAlign: "center" };
createCacheKey[7] = { flexDirection: "row" };
let obj2 = { paddingBottom: require("Themes").space.PX_16, textAlign: "center" };
createCacheKey[8] = { marginBottom: require("Themes").space.PX_12 };
const obj3 = { marginBottom: require("Themes").space.PX_12 };
createCacheKey[9] = { flexGrow: 0, padding: require("Themes").space.PX_16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj4 = { flexGrow: 0, padding: require("Themes").space.PX_16 };
const result = require("jsxProd").fileFinishedImporting("modules/nuf/native/components/NewUserPermissionsOnboarding.android.tsx");

export default function NewUserPermissionsOnboarding(showSkip) {
  let header;
  let loading;
  let onAllow;
  let onDontAllow;
  let subtitle;
  let title;
  let trailing;
  let flag = showSkip.showSkip;
  ({ title, subtitle, header, trailing, loading } = showSkip);
  if (flag === undefined) {
    flag = true;
  }
  ({ onAllow, onDontAllow } = showSkip);
  const tmp = createCacheKey();
  let obj = { contentContainerStyle: tmp.scrollContainer, children: null };
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.alertContainer, children: null };
  const items = [header, ];
  const obj1 = { style: tmp.alert, children: null };
  const obj2 = { style: tmp.alertContent, children: null };
  const items1 = [callback(require(4251) /* Text */.Text, { style: tmp.alertTitle, variant: "heading-lg/bold", color: "text-default", children: title }), callback(require(4251) /* Text */.Text, { style: tmp.alertSubtitle, variant: "text-sm/medium", color: "text-default", children: subtitle }), , ];
  const items2 = [tmp.buttonWrapper, ];
  let primaryButtonContainer = flag;
  if (flag) {
    primaryButtonContainer = tmp.primaryButtonContainer;
  }
  const obj5 = { style: items2, children: null };
  items2[1] = primaryButtonContainer;
  const obj6 = { variant: "primary", size: "md", text: null, onPress: null, loading: null, grow: true };
  const intl = tmp6(1236).intl;
  obj6[2] = intl.string(require(1236) /* getSystemLocale */.t["2nYlT2"]);
  obj6[3] = onAllow;
  obj6[4] = loading;
  obj5[1] = callback(require(4666) /* Button */.Button, obj6);
  items1[2] = callback(closure_2, obj5);
  if (flag) {
    const obj7 = { style: null, children: null };
    obj7[0] = tmp.buttonWrapper;
    const obj8 = { variant: "secondary", text: null, onPress: null, grow: true };
    const intl2 = tmp6(1236).intl;
    obj8[1] = intl2.string(tmp6(1236).t["5Wxrcd"]);
    obj8[2] = onDontAllow;
    obj7[1] = tmp4(tmp6(4666).Button, obj8);
    flag = tmp4(tmp5, obj7);
  }
  const obj9 = { children: null };
  items1[3] = flag;
  obj2[1] = items1;
  obj1[1] = closure_5(closure_2, obj2);
  items[1] = callback(closure_2, obj1);
  obj9[0] = items;
  obj[1] = closure_5(closure_2, obj9);
  obj[1] = callback(closure_2, obj);
  const items3 = [callback(closure_2, obj), callback(closure_2, { style: tmp.trailing, children: trailing })];
  obj[1] = items3;
  return closure_5(closure_3, obj);
};