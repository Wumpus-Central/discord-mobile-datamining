// === Module 14363: IgnoredUsersList ===

// Module 14363 (IgnoredUsersList)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 589 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import Text from "Text" /* 4441 */;
import SafeAreaPaddingView from "SafeAreaPaddingView" /* 5505 */;
import context from "context" /* 5905 */;
import contextDefault from "context" /* 5905 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 5944 */;
import getBlockedSource from "getBlockedSource" /* 14357 */;
import { ScrollView } from "get ActivityIndicator" /* 17 */;
import closure_4 from "markAllUserIdListsStale" /* 4098 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

require = arg1;
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
    obj4[1] = userIds.map((userId) => callback2(callback(table[14]), { userId }, userId));
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
createCacheKey = { list: null, sectionLabelStyle: null };
createCacheKey = { marginTop: ThemesDefault.space.PX_8, paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: ThemesDefault.space.PX_12, marginBottom: ThemesDefault.space.PX_8 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let obj1 = { marginTop: ThemesDefault.space.PX_12, marginBottom: ThemesDefault.space.PX_8 };
const result = require("set").fileFinishedImporting("modules/user_settings/content_and_social/native/IgnoredUsersList.tsx");

export default function ConnectedIgnoredUsersList() {
  let obj = initialize;
  const items = [closure_4];
  obj = { userIds: obj.useStateFromStoresArray(items, () => ignoredIDs.getIgnoredIDs()) };
  return callback(IgnoredUsersList, obj);
};