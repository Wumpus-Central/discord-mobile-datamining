import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import _validate from "_validate";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let obj1;
const require = arg1;
({ ActivityIndicator: obj1, View: c3 } = get_ActivityIndicator);
let closure_6 = createCacheKey.createStyles({ container: { alignItems: "center", flexDirection: "row", justifyContent: "center", marginTop: 8, marginBottom: 24, marginHorizontal: 16, height: 42 } });
const result = require("_validate").fileFinishedImporting("modules/notification_center/native/ForYouLoadMore.tsx");

export const ForYouLoadMore = function ForYouLoadMore(onPressLoad) {
  let obj = require(647) /* defaultAreStatesEqual */;
  const items = [_validate];
  obj = { style: callback().container, children: null };
  if (obj.useStateFromStores(items, () => loading.loading)) {
    let tmp4Result = tmp4(closure_2, {});
  } else {
    obj = { variant: "secondary", grow: true, size: "md", text: null, onPress: null };
    const intl = tmp2(1236).intl;
    obj[3] = intl.string(tmp2(1236).t["Q/LSXp"]);
    obj[4] = onPressLoad.onPressLoad;
    tmp4Result = tmp4(tmp2(4695).Button, obj);
  }
  obj[1] = tmp4Result;
  return <closure_3 style={callback().container}>{null}</closure_3>;
};