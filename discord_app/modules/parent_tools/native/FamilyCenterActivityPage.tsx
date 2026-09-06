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
fn(4560);
let createStyles = { scrollView: { flex: 1 }, dataConfirmation: null, container: null };
createStyles = { marginTop: nativeDefault.space.PX_8 };
createStyles.dataConfirmation = createStyles;
createStyles.container = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityPage.tsx");

export default function FamilyCenterActivityPage() {
  const tmp = closure_8();
  let obj = { style: tmp.scrollView, children: null };
  const activeLinkUserIds = obj.useActiveLinkUserIds();
  obj = { style: tmp.container, children: null };
  const items = [hasOwnProperty(FamilyCenterParentalConsentNoticeDefault, {})];
  if (0 === activeLinkUserIds.length) {
    const obj1 = { children: null };
    const items1 = [
      hasOwnProperty(FamilyCenterActivityBannerDefault, {}),
      hasOwnProperty(FamilyCenterFeatureRowDefault, {}),
    ];
    const obj2 = { style: tmp.dataConfirmation, children: hasOwnProperty(FamilyCenterDataConfirmationDefault, {}) };
    items1[2] = hasOwnProperty(React3, obj2);
    obj1.children = items1;
    let tmp3Result = React5(timestampProducer, obj1);
  } else {
    tmp3Result = hasOwnProperty(FamilyCenterActivityCardDefault, {});
  }
  items[1] = tmp3Result;
  obj.children = items;
  obj.children = hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, {
    bottom: true,
    children: React5(React3, obj),
  });
  return hasOwnProperty(React4, obj);
}
