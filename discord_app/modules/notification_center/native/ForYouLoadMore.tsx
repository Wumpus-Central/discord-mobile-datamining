// discord_app/modules/notification_center/native/ForYouLoadMore.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import defaultAreStatesEqual from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Button from "../../../design/components/Button/native/Button.native.tsx";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import _validate from "../NotificationCenterItemsStore.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

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