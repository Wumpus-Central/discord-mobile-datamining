// discord_app/modules/parent_tools/native/FamilyCenterActivityPage.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import SafeAreaPaddingView from "../../../components_native/common/SafeAreaView.tsx";
import useUserIdsForLinkStatus from "../hooks/useUserLinks.tsx";
import RowGroupDefault from "FamilyCenterDataConfirmation.tsx";
import FamilyCenterParentalConsentNoticeDefault from "FamilyCenterParentalConsentNotice.tsx";
import FamilyCenterActivityBannerButtonDefault from "FamilyCenterActivityBanner.tsx";
import FamilyCenterFeatureRowsDefault from "FamilyCenterFeatureRow.tsx";
import FamilyCenterActivityCardPrefaceTextDefault from "FamilyCenterActivityCard.tsx";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
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