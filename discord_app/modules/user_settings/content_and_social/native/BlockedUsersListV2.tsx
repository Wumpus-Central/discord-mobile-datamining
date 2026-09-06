// discord_app/modules/user_settings/content_and_social/native/BlockedUsersListV2.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import common_SafeAreaView from "../../../../components_native/common/SafeAreaView.tsx";
import useAnalyticsLocations from "../../../app_analytics/useAnalyticsLocations.tsx";
import Blocked from "../../../../design/components/Illustration/native/redesign/generated/Blocked.tsx";
import BlockedUserRowV2Default from "BlockedUserRowV2.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";

const useAnalyticsLocationsDefault = useAnalyticsLocations;

require = fn;
function BlockedUsersList(userIds) {
  userIds = userIds.userIds;
  const tmp = closure_7();
  useAnalyticsLocationsDefault;
  if (0 === userIds.length) {
    let obj = { Illustration: Blocked.Blocked, body: null };
    const intl = util.intl;
    obj.body = intl.string(util.t.nnsFif);
    let tmp7 = hasOwnProperty(native.EmptyState, obj);
  } else {
    obj = { value: tmp4, children: null };
    obj = { bottom: true, style: tmp.list, children: null };
    const obj1 = { children: null };
    const obj2 = { style: tmp.sectionLabelStyle, variant: "text-sm/semibold", color: "text-default", children: null };
    const intl2 = util.intl;
    const obj3 = { numberOfBlockedUsers: userIds.length };
    obj2.children = intl2.formatToPlainString(util.t["c+JVEB"], obj3);
    const items = [hasOwnProperty(Text_Text.Text, obj2)];
    const obj4 = {
      hasIcons: true,
      children: userIds.map((userId) => closure_1_5(BlockedUserRowV2Default, { userId }, userId)),
    };
    const intl3 = util.intl;
    items[1] = hasOwnProperty(TableRowGroup.TableRowGroup, obj4, intl3.string(util.t.PFOUKW));
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
createStyles = { flex: 1, paddingTop: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.list = createStyles;
createStyles.sectionLabelStyle = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_8 };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/BlockedUsersListV2.tsx");

export default function ConnectedBlockedUsersList() {
  let obj = initialize;
  const items = [RelationshipStore];
  obj = { userIds: obj.useStateFromStoresArray(items, () => blockedIDs.getBlockedIDs()) };
  return hasOwnProperty(BlockedUsersList, obj);
}
