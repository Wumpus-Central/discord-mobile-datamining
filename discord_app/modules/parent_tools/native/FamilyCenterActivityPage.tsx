// === Module 15150: FamilyCenterActivityPage ===

// Module 15150 (FamilyCenterActivityPage)
import nativeDefault from "native" /* 576 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7368 */;
import useUserLinks from "useUserLinks" /* 8923 */;
import FamilyCenterDataConfirmationDefault from "FamilyCenterDataConfirmation" /* 12173 */;
import FamilyCenterParentalConsentNoticeDefault from "FamilyCenterParentalConsentNotice" /* 15151 */;
import FamilyCenterActivityBannerDefault from "FamilyCenterActivityBanner" /* 15153 */;
import FamilyCenterFeatureRowDefault from "FamilyCenterFeatureRow" /* 15163 */;
import FamilyCenterActivityCardDefault from "FamilyCenterActivityCard" /* 15167 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, ScrollView: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { scrollView: { flex: 1 }, dataConfirmation: { marginTop: nativeDefault.space.PX_8 }, container: null };
let obj3 = { marginTop: nativeDefault.space.PX_8 };
obj2.container = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityPage.tsx");

export default function FamilyCenterActivityPage() {
  const tmp = closure_8();
  const obj2 = { style: tmp.scrollView, children: null };
  const activeLinkUserIds = useUserLinks.useActiveLinkUserIds();
  const obj3 = { style: tmp.container, children: null };
  const items = [hasOwnProperty(FamilyCenterParentalConsentNoticeDefault, {}), ];
  if (0 === activeLinkUserIds.length) {
    const obj4 = { children: null };
    const items1 = [hasOwnProperty(FamilyCenterActivityBannerDefault, {}), hasOwnProperty(FamilyCenterFeatureRowDefault, {}), ];
    const obj5 = { style: tmp.dataConfirmation, children: hasOwnProperty(FamilyCenterDataConfirmationDefault, {}) };
    items1[2] = hasOwnProperty(React3, obj5);
    obj4.children = items1;
    let tmp3Result = React5(timestampProducer, obj4);
  } else {
    tmp3Result = hasOwnProperty(FamilyCenterActivityCardDefault, {});
  }
  items[1] = tmp3Result;
  obj3.children = items;
  obj2.children = hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, { bottom: true, children: React5(React3, obj3) });
  return hasOwnProperty(React4, obj2);
};