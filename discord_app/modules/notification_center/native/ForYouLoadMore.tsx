// === Module 16266: ForYouLoadMore ===

// Module 16266 (ForYouLoadMore)
import noopAll from "noop" /* 19 */;
import defaultAreStatesEqual from "defaultAreStatesEqual" /* 644 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_4 from "_validate" /* 7393 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
noopAll;
({ ActivityIndicator: obj1, View: c3 } = get_ActivityIndicator);
let closure_6 = createCacheKey.createStyles({ container: { alignItems: "center", flexDirection: "row", justifyContent: "center", marginTop: 8, marginBottom: 24, marginHorizontal: 16, height: 42 } });
const result = require("set").fileFinishedImporting("modules/notification_center/native/ForYouLoadMore.tsx");

export const ForYouLoadMore = function ForYouLoadMore(onPressLoad) {
  let obj = defaultAreStatesEqual;
  const items = [closure_4];
  obj = { style: callback().container, children: null };
  if (obj.useStateFromStores(items, () => loading.loading)) {
    let tmp4Result = tmp4(closure_2, {});
  } else {
    obj = { variant: "secondary", grow: true, size: "md", text: null, onPress: null };
    const intl = tmp2(1233).intl;
    obj[3] = intl.string(tmp2(1233).t["Q/LSXp"]);
    obj[4] = onPressLoad.onPressLoad;
    tmp4Result = tmp4(tmp2(4928).Button, obj);
  }
  obj[1] = tmp4Result;
  return <closure_3 style={callback().container}>{null}</closure_3>;
};