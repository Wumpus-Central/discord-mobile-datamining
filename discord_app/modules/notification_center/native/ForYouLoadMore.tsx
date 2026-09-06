// discord_app/modules/notification_center/native/ForYouLoadMore.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import defaultAreStatesEqual from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../NotificationCenterItemsStore.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ ActivityIndicator: obj1, View: c3 } = get_ActivityIndicator);
let closure_6 = createCacheKey.createStyles({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 8,
    marginBottom: 24,
    marginHorizontal: 16,
    height: 42,
  },
});
const result = require("set").fileFinishedImporting("modules/notification_center/native/ForYouLoadMore.tsx");

export const ForYouLoadMore = function ForYouLoadMore(onPressLoad) {
  let obj = defaultAreStatesEqual;
  const items = [closure_4];
  obj = { style: callback().container, children: null };
  if (obj.useStateFromStores(items, () => loading.loading)) {
    let tmp4Result = tmp4(closure_2, {});
  } else {
    obj = { variant: "secondary", grow: true, size: "md", text: null, onPress: null };
    const intl = tmp2(1114).intl;
    obj[3] = intl.string(tmp2(1114).t["Q/LSXp"]);
    obj[4] = onPressLoad.onPressLoad;
    tmp4Result = tmp4(tmp2(4975).Button, obj);
  }
  obj[1] = tmp4Result;
  return <closure_3 style={callback().container}>{null}</closure_3>;
};
