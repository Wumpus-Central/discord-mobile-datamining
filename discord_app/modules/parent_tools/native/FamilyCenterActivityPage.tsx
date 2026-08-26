// discord_app/modules/parent_tools/native/FamilyCenterActivityPage.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import SafeAreaPaddingView from "../../../components_native/common/SafeAreaView.tsx";
import useUserIdsForLinkStatus from "../hooks/useUserLinks.tsx";
import FamilyCenterParentalConsentNoticeDefault from "FamilyCenterParentalConsentNotice.tsx";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

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
    const items1 = [tmp3(tmp7(14403), {}), tmp3(tmp7(14413), {}), ];
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.dataConfirmation;
    obj2[1] = tmp3(tmp7(11559), {});
    items1[2] = tmp3(tmp6, obj2);
    obj1[0] = items1;
    let tmp3Result = tmp5(closure_6, obj1);
  } else {
    tmp3Result = tmp3(tmp7(14417), {});
  }
  items[1] = tmp3Result;
  obj[1] = items;
  obj[1] = callback(SafeAreaPaddingView.SafeAreaPaddingView, { bottom: true, children: closure_7(closure_3, obj) });
  return callback(closure_4, obj);
};