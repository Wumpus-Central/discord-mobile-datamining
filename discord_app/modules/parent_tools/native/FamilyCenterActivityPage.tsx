// discord_app/modules/parent_tools/native/FamilyCenterActivityPage.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let c5;
let closure_6;
let error;
const require = arg1;
({ View: c3, ScrollView: c4 } = get_ActivityIndicator);
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
createCacheKey = { scrollView: { flex: 1 }, dataConfirmation: null, container: null };
createCacheKey = { marginTop: require("Themes").space.PX_8 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { paddingHorizontal: require("Themes").space.PX_16, paddingBottom: require("Themes").space.PX_16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { paddingHorizontal: require("Themes").space.PX_16, paddingBottom: require("Themes").space.PX_16 };
const result = require("jsxProd").fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityPage.tsx");

export default function FamilyCenterActivityPage() {
  const tmp = createCacheKey();
  let obj = require(7259) /* useUserIdsForLinkStatus */;
  obj = { style: tmp.scrollView, children: null };
  const activeLinkUserIds = obj.useActiveLinkUserIds();
  obj = { style: tmp.container, children: null };
  const items = [callback(importDefault(14023), {}), ];
  if (0 === activeLinkUserIds.length) {
    const obj1 = { children: null };
    const items1 = [tmp3(tmp7(14025), {}), tmp3(tmp7(14035), {}), ];
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.dataConfirmation;
    obj2[1] = tmp3(tmp7(11238), {});
    items1[2] = tmp3(tmp6, obj2);
    obj1[0] = items1;
    let tmp3Result = tmp5(closure_6, obj1);
  } else {
    tmp3Result = tmp3(tmp7(14039), {});
  }
  items[1] = tmp3Result;
  obj[1] = items;
  obj[1] = callback(require(5272) /* SafeAreaPaddingView */.SafeAreaPaddingView, { bottom: true, children: closure_7(closure_3, obj) });
  return callback(closure_4, obj);
};