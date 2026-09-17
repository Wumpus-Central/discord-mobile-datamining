// discord_app/modules/parent_tools/native/FamilyCenterActivityPage.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import common_SafeAreaView from "../../../components_native/common/SafeAreaView.tsx";
import useUserLinks from "../hooks/useUserLinks.tsx";
import FamilyCenterDataConfirmationDefault from "FamilyCenterDataConfirmation.tsx";
import FamilyCenterParentalConsentNoticeDefault from "FamilyCenterParentalConsentNotice.tsx";
import FamilyCenterActivityBannerDefault from "FamilyCenterActivityBanner.tsx";
import FamilyCenterFeatureRowDefault from "FamilyCenterFeatureRow.tsx";
import FamilyCenterActivityCardDefault from "FamilyCenterActivityCard.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, ScrollView: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4640);
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
  const items = [hasOwnProperty(FamilyCenterParentalConsentNoticeDefault, {})];
  if (0 === activeLinkUserIds.length) {
    const obj4 = { children: null };
    const items1 = [
      hasOwnProperty(FamilyCenterActivityBannerDefault, {}),
      hasOwnProperty(FamilyCenterFeatureRowDefault, {}),
    ];
    const obj5 = { style: tmp.dataConfirmation, children: hasOwnProperty(FamilyCenterDataConfirmationDefault, {}) };
    items1[2] = hasOwnProperty(React3, obj5);
    obj4.children = items1;
    let tmp3Result = React5(timestampProducer, obj4);
  } else {
    tmp3Result = hasOwnProperty(FamilyCenterActivityCardDefault, {});
  }
  items[1] = tmp3Result;
  obj3.children = items;
  obj2.children = hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, {
    bottom: true,
    children: React5(React3, obj3),
  });
  return hasOwnProperty(React4, obj2);
}
