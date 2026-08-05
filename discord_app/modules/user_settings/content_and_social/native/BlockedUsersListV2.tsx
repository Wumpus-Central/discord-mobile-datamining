// discord_app/modules/user_settings/content_and_social/native/BlockedUsersListV2.tsx
import "noop";
import { ScrollView } from "get ActivityIndicator";
import upsertRelationship from "upsertRelationship";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
function BlockedUsersList(userIds) {
  userIds = userIds.userIds;
  const tmp = createCacheKey();
  require("../../../app_analytics/useAnalyticsLocations.tsx");
  if (0 === userIds.length) {
    let obj = { Illustration: null, body: null };
    obj[0] = require("../../../../design/components/Illustration/native/redesign/generated/Blocked.tsx") /* getBlockedSource */.Blocked;
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[1] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.nnsFif);
    let tmp7 = callback(require("../../../../design/void/native.tsx") /* Button */.EmptyState, obj);
  } else {
    obj = { value: null, children: null };
    obj[0] = tmp4;
    obj = { bottom: true, style: null, children: null };
    obj[1] = tmp.list;
    const obj1 = { children: null };
    const obj2 = { style: null, variant: "text-sm/semibold", color: "text-default", children: null };
    obj2[0] = tmp.sectionLabelStyle;
    const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    const obj3 = { numberOfBlockedUsers: null };
    obj3[0] = userIds.length;
    obj2[3] = intl2.formatToPlainString(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["c+JVEB"], obj3);
    const items = [callback(require("../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj2), ];
    const obj4 = { hasIcons: true, children: null };
    obj4[1] = userIds.map((userId) => callback2(callback(table[14]), { userId }, userId));
    const intl3 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    items[1] = callback(require("../../../../design/components/TableRow/native/TableRowGroup.native.tsx") /* TableRowGroupTitle */.TableRowGroup, obj4, intl3.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.PFOUKW));
    obj1[0] = items;
    obj[2] = callback2(ScrollView, obj1);
    obj[1] = callback(require("../../../../components_native/common/SafeAreaView.tsx") /* SafeAreaPaddingView */.SafeAreaPaddingView, obj);
    tmp7 = callback(require("../../../app_analytics/useAnalyticsLocations.tsx") /* context */.AnalyticsLocationProvider, obj);
  }
  return tmp7;
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { list: null, sectionLabelStyle: null };
createCacheKey = { flex: 1, paddingTop: require("Themes").space.PX_8, paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: require("Themes").space.PX_12, marginBottom: require("Themes").space.PX_8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { marginTop: require("Themes").space.PX_12, marginBottom: require("Themes").space.PX_8 };
const result = require("upsertRelationship").fileFinishedImporting("modules/user_settings/content_and_social/native/BlockedUsersListV2.tsx");

export default function ConnectedBlockedUsersList() {
  let obj = require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
  const items = [upsertRelationship];
  obj = { userIds: obj.useStateFromStoresArray(items, () => blockedIDs.getBlockedIDs()) };
  return callback(BlockedUsersList, obj);
};