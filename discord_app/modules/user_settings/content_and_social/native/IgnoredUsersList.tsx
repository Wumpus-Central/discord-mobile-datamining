// === Module 14808: IgnoredUsersList ===

// Module 14808 (IgnoredUsersList)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import Text_Text from "Text/Text" /* 4556 */;
import TableRowGroup from "TableRowGroup" /* 5687 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7123 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 7162 */;
import Blocked from "Blocked" /* 14802 */;
import IgnoredUserRowDefault from "IgnoredUserRow" /* 14809 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;

const useAnalyticsLocationsDefault = useAnalyticsLocations;

require = fn;
function IgnoredUsersList(userIds) {
  userIds = userIds.userIds;
  const tmp = closure_7();
  useAnalyticsLocationsDefault;
  if (0 === userIds.length) {
    let obj = { Illustration: Blocked.Blocked, body: null };
    const intl = util.intl;
    obj.body = intl.string(util.t.PYrWFW);
    let tmp7 = hasOwnProperty(native.EmptyState, obj);
  } else {
    obj = { value: tmp4, children: null };
    obj = { bottom: true, style: tmp.list, children: null };
    const obj1 = { children: null };
    const obj2 = { style: tmp.sectionLabelStyle, variant: "text-sm/semibold", color: "text-default", children: null };
    const intl2 = util.intl;
    const obj3 = { numberOfIgnoredUsers: userIds.length };
    obj2.children = intl2.formatToPlainString(util.t.iNKUhU, obj3);
    const items = [hasOwnProperty(Text_Text.Text, obj2), ];
    const obj4 = { hasIcons: true, children: userIds.map((userId) => closure_1_5(IgnoredUserRowDefault, { userId }, userId)) };
    const intl3 = util.intl;
    items[1] = hasOwnProperty(TableRowGroup.TableRowGroup, obj4, intl3.string(util.t["93ZDWE"]));
    obj1.children = items;
    obj.children = timestampProducer(ScrollView, obj1);
    obj.children = hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, obj);
    tmp7 = hasOwnProperty(useAnalyticsLocations.AnalyticsLocationProvider, obj);
  }
  return tmp7;
}
const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { list: null, sectionLabelStyle: null };
createStyles = { marginTop: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.list = createStyles;
createStyles.sectionLabelStyle = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_8 };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/IgnoredUsersList.tsx");

export default function ConnectedIgnoredUsersList() {
  let obj = initialize;
  const items = [RelationshipStore];
  obj = { userIds: obj.useStateFromStoresArray(items, () => ignoredIDs.getIgnoredIDs()) };
  return hasOwnProperty(IgnoredUsersList, obj);
};