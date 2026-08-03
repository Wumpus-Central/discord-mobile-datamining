import "noop";
import { ScrollView } from "get ActivityIndicator";
import upsertRelationship from "upsertRelationship";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
function IgnoredUsersList(userIds) {
  userIds = userIds.userIds;
  const tmp = createCacheKey();
  importDefault(5581);
  if (0 === userIds.length) {
    let obj = { Illustration: null, body: null };
    obj[0] = require(13919) /* getBlockedSource */.Blocked;
    const intl = require(1236) /* getSystemLocale */.intl;
    obj[1] = intl.string(require(1236) /* getSystemLocale */.t.PYrWFW);
    let tmp7 = callback(require(1297) /* Button */.EmptyState, obj);
  } else {
    obj = { value: null, children: null };
    obj[0] = tmp4;
    obj = { bottom: true, style: null, children: null };
    obj[1] = tmp.list;
    const obj1 = { children: null };
    const obj2 = { style: null, variant: "text-sm/semibold", color: "text-default", children: null };
    obj2[0] = tmp.sectionLabelStyle;
    const intl2 = require(1236) /* getSystemLocale */.intl;
    const obj3 = { numberOfIgnoredUsers: null };
    obj3[0] = userIds.length;
    obj2[3] = intl2.formatToPlainString(require(1236) /* getSystemLocale */.t.iNKUhU, obj3);
    const items = [callback(require(4251) /* Text */.Text, obj2), ];
    const obj4 = { hasIcons: true, children: null };
    obj4[1] = userIds.map((userId) => callback2(callback(table[14]), { userId }, userId));
    const intl3 = require(1236) /* getSystemLocale */.intl;
    items[1] = callback(require(5620) /* TableRowGroupTitle */.TableRowGroup, obj4, intl3.string(require(1236) /* getSystemLocale */.t["93ZDWE"]));
    obj1[0] = items;
    obj[2] = callback2(ScrollView, obj1);
    obj[1] = callback(require(5243) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj);
    tmp7 = callback(require(5581) /* context */.AnalyticsLocationProvider, obj);
  }
  return tmp7;
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { list: null, sectionLabelStyle: null };
createCacheKey = { marginTop: require("Themes").space.PX_8, paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: require("Themes").space.PX_12, marginBottom: require("Themes").space.PX_8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { marginTop: require("Themes").space.PX_12, marginBottom: require("Themes").space.PX_8 };
const result = require("upsertRelationship").fileFinishedImporting("modules/user_settings/content_and_social/native/IgnoredUsersList.tsx");

export default function ConnectedIgnoredUsersList() {
  let obj = require(589) /* initialize */;
  const items = [upsertRelationship];
  obj = { userIds: obj.useStateFromStoresArray(items, () => ignoredIDs.getIgnoredIDs()) };
  return callback(IgnoredUsersList, obj);
};