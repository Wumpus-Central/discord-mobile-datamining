// discord_app/modules/user_settings/content_and_social/native/IgnoredUsersList.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Button from "../../../../design/void/native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import TableRowGroupTitle from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import SafeAreaPaddingView from "../../../../components_native/common/SafeAreaView.tsx";
import context from "../../../app_analytics/useAnalyticsLocations.tsx";
import contextDefault from "../../../app_analytics/useAnalyticsLocations.tsx";
import getBlockedSource from "../../../../design/components/Illustration/native/redesign/generated/Blocked.tsx";
import { ScrollView } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import markAllUserIdListsStale from "../../../../stores/RelationshipStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
function IgnoredUsersList(userIds) {
  userIds = userIds.userIds;
  const tmp = callback3();
  contextDefault;
  if (0 === userIds.length) {
    let obj = { Illustration: null, body: null };
    obj[0] = getBlockedSource.Blocked;
    const intl = getSystemLocale.intl;
    obj[1] = intl.string(getSystemLocale.t.PYrWFW);
    let tmp7 = callback(Button.EmptyState, obj);
  } else {
    obj = { value: null, children: null };
    obj[0] = tmp4;
    obj = { bottom: true, style: null, children: null };
    obj[1] = tmp.list;
    obj1 = { children: null };
    const obj2 = { style: null, variant: "text-sm/semibold", color: "text-default", children: null };
    obj2[0] = tmp.sectionLabelStyle;
    const intl2 = getSystemLocale.intl;
    const obj3 = { numberOfIgnoredUsers: null };
    obj3[0] = userIds.length;
    obj2[3] = intl2.formatToPlainString(getSystemLocale.t.iNKUhU, obj3);
    const items = [callback(Text.Text, obj2), ];
    const obj4 = { hasIcons: true, children: null };
    obj4[1] = userIds.map((item, index) => callback2(callback(table[14]), { userId: item }, item));
    const intl3 = getSystemLocale.intl;
    items[1] = callback(TableRowGroupTitle.TableRowGroup, obj4, intl3.string(getSystemLocale.t["93ZDWE"]));
    obj1[0] = items;
    obj[2] = callback2(ScrollView, obj1);
    obj[1] = callback(SafeAreaPaddingView.SafeAreaPaddingView, obj);
    tmp7 = callback(context.AnalyticsLocationProvider, obj);
  }
  return tmp7;
}
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const createCacheKey = { marginTop: ThemesDefault.space.PX_8, paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: ThemesDefault.space.PX_12, marginBottom: ThemesDefault.space.PX_8 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/user_settings/content_and_social/native/IgnoredUsersList.tsx");

export default function ConnectedIgnoredUsersList() {
  let obj = initialize;
  const items = [closure_4];
  obj = { userIds: obj.useStateFromStoresArray(items, () => ignoredIDs.getIgnoredIDs()) };
  return callback(IgnoredUsersList, obj);
};