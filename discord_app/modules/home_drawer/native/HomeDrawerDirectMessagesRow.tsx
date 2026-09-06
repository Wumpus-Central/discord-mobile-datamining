// discord_app/modules/home_drawer/native/HomeDrawerDirectMessagesRow.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import HomeDrawerExperiment from "HomeDrawerExperiment.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import HomeDrawerShared from "HomeDrawerShared.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import PresenceStore from "../../../stores/PresenceStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";

require = fn;
function HomeDrawerDMsRow() {
  const tmp = closure_9();
  let obj = initialize;
  const items = [RelationshipStore, PresenceStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    friendIDs = friendIDs.getFriendIDs();
    return friendIDs.filter((item) => status.getStatus(item) !== constants.OFFLINE).length;
  });
  let tmp5 = null;
  if (stateFromStores > 0) {
    obj = { style: tmp.subtitle, children: null };
    obj = { style: tmp.onlineDot };
    const items1 = [React5(View, obj)];
    const obj1 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: null };
    const intl = util.intl;
    const obj2 = { numFriends: stateFromStores };
    obj1.children = intl.format(util.t.N5UIKr, obj2);
    items1[1] = React5(Text_Text.Text, obj1);
    obj.children = items1;
    tmp5 = React6(View, obj);
  }
  const obj3 = { title: null, subtitle: null };
  const obj4 = { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: null };
  const intl2 = util.intl;
  obj4.children = intl2.string(util.t.YUU0RF);
  obj3.title = React5(Text_Text.Text, obj4);
  obj3.subtitle = tmp5;
  return React5(HomeDrawerShared.HomeDrawerSharedItem, obj3);
}
const View = fn(17).View;
const StatusTypes = fn(1074).StatusTypes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
const createStyles = { subtitle: { flexDirection: "row", alignItems: "center", gap: 4 }, onlineDot: null };
let size = {
  width: 8,
  height: 8,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.TEXT_STATUS_ONLINE,
};
createStyles.onlineDot = size;
let closure_9 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerDirectMessagesRow.tsx");

export default function HomeDrawerDMsRowWrapper() {
  const MobileHomeDrawerExperiment = HomeDrawerExperiment.MobileHomeDrawerExperiment;
  let tmp2 = null;
  if (MobileHomeDrawerExperiment.useConfig({ location: "dm-expanded-children" }).enableHome) {
    tmp2 = null;
    if (!tmp) {
      tmp2 = React5(HomeDrawerDMsRow, {});
    }
  }
  return tmp2;
}
