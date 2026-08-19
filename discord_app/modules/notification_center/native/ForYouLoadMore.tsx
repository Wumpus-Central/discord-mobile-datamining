// === Module 15703: ForYouLoadMore ===

// Module 15703 (ForYouLoadMore)
import noopAll from "noop" /* 19 */;
import defaultAreStatesEqual from "defaultAreStatesEqual" /* 647 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 4745 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import _validate from "_validate" /* 4801 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
noopAll;
({ ActivityIndicator: obj1, View: c3 } = get_ActivityIndicator);
let closure_6 = createCacheKey.createStyles({ container: { alignItems: "center", flexDirection: "row", justifyContent: "center", marginTop: 8, marginBottom: 24, marginHorizontal: 16, height: 42 } });
const result = require("obj132").fileFinishedImporting("modules/notification_center/native/ForYouLoadMore.tsx");

export const ForYouLoadMore = function ForYouLoadMore(onPressLoad) {
  const items = [closure_4];
  let obj = { style: callback().container, children: null };
  if (obj.useStateFromStores(items, () => loading.loading)) {
    let tmp4Result = <closure_2 />;
  } else {
    obj = { variant: "secondary", grow: true, size: "md", text: null, onPress: null };
    const intl = getSystemLocale.intl;
    obj[3] = intl.string(getSystemLocale.t["Q/LSXp"]);
    obj[4] = onPressLoad.onPressLoad;
    tmp4Result = jsx(Button.Button, { variant: "secondary", grow: true, size: "md", text: null, onPress: null });
  }
  obj[1] = tmp4Result;
  return <closure_3 style={callback().container}>{null}</closure_3>;
};