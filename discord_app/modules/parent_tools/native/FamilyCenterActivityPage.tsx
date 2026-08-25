// === Module 14327: FamilyCenterActivityPage ===

// Module 14327 (FamilyCenterActivityPage)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import SafeAreaPaddingView from "SafeAreaPaddingView" /* 5434 */;
import useUserIdsForLinkStatus from "useUserIdsForLinkStatus" /* 7480 */;
import FamilyCenterParentalConsentNoticeDefault from "FamilyCenterParentalConsentNotice" /* 14328 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

require = arg1;
noopAll;
({ View: c3, ScrollView: c4 } = get_ActivityIndicator);
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
createCacheKey = { scrollView: { flex: 1 }, dataConfirmation: null, container: null };
createCacheKey = { marginTop: ThemesDefault.space.PX_8 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_16 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let obj1 = { paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_16 };
const result = require("set").fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityPage.tsx");

export default function FamilyCenterActivityPage() {
  const tmp = callback2();
  let obj = useUserIdsForLinkStatus;
  obj = { style: tmp.scrollView, children: null };
  const activeLinkUserIds = obj.useActiveLinkUserIds();
  obj = { style: tmp.container, children: null };
  const items = [callback(FamilyCenterParentalConsentNoticeDefault, {}), ];
  if (0 === activeLinkUserIds.length) {
    obj1 = { children: null };
    const items1 = [tmp3(tmp7(14330), {}), tmp3(tmp7(14340), {}), ];
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.dataConfirmation;
    obj2[1] = tmp3(tmp7(11487), {});
    items1[2] = tmp3(tmp6, obj2);
    obj1[0] = items1;
    let tmp3Result = tmp5(closure_6, obj1);
  } else {
    tmp3Result = tmp3(tmp7(14344), {});
  }
  items[1] = tmp3Result;
  obj[1] = items;
  obj[1] = callback(SafeAreaPaddingView.SafeAreaPaddingView, { bottom: true, children: closure_7(closure_3, obj) });
  return callback(closure_4, obj);
};