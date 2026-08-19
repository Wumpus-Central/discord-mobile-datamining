// === Module 14229: FamilyCenterActivityPage ===

// Module 14229 (FamilyCenterActivityPage)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import SafeAreaPaddingView from "SafeAreaPaddingView" /* 6803 */;
import useUserIdsForLinkStatus from "useUserIdsForLinkStatus" /* 7621 */;
import RowGroupDefault from "RowGroup" /* 11106 */;
import FamilyCenterParentalConsentNoticeDefault from "FamilyCenterParentalConsentNotice" /* 14230 */;
import FamilyCenterActivityBannerButtonDefault from "FamilyCenterActivityBannerButton" /* 14232 */;
import FamilyCenterFeatureRowsDefault from "FamilyCenterFeatureRows" /* 14242 */;
import FamilyCenterActivityCardPrefaceTextDefault from "FamilyCenterActivityCardPrefaceText" /* 14246 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
({ View: c3, ScrollView: c4 } = get_ActivityIndicator);
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
const createCacheKey = { marginTop: ThemesDefault.space.PX_8 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_16 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityPage.tsx");

export default function FamilyCenterActivityPage() {
  const tmp = callback2();
  let obj = { style: tmp.scrollView, children: null };
  const activeLinkUserIds = obj.useActiveLinkUserIds();
  obj = { style: tmp.container, children: null };
  const items = [callback(FamilyCenterParentalConsentNoticeDefault, {}), ];
  if (0 === activeLinkUserIds.length) {
    obj1 = { children: null };
    const items1 = [callback(FamilyCenterActivityBannerButtonDefault, {}), callback(FamilyCenterFeatureRowsDefault, {}), ];
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.dataConfirmation;
    obj2[1] = callback(RowGroupDefault, {});
    items1[2] = callback(closure_3, obj2);
    obj1[0] = items1;
    let tmp3Result = callback(closure_6, obj1);
  } else {
    tmp3Result = callback(FamilyCenterActivityCardPrefaceTextDefault, {});
  }
  items[1] = tmp3Result;
  obj[1] = items;
  obj[1] = callback(SafeAreaPaddingView.SafeAreaPaddingView, { bottom: true, children: callback(closure_3, obj) });
  return callback(closure_4, obj);
};