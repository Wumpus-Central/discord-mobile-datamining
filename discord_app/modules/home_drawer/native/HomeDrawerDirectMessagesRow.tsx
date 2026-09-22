// === Module 16660: HomeDrawerDirectMessagesRow ===

// Module 16660 (HomeDrawerDirectMessagesRow)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import HomeDrawerExperiment from "HomeDrawerExperiment" /* 4620 */;
import Text_Text from "Text/Text" /* 4753 */;
import HomeDrawerShared from "HomeDrawerShared" /* 16656 */;
import noop from "module_19" /* 19 */;
import PresenceStore from "PresenceStore" /* 4797 */;
import RelationshipStore from "RelationshipStore" /* 4406 */;

require = fn;
function HomeDrawerDMsRow() {
  const tmp = closure_9();
  const items = [RelationshipStore, PresenceStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    friendIDs = friendIDs.getFriendIDs();
    return friendIDs.filter((item) => status.getStatus(item) !== constants.OFFLINE).length;
  });
  let tmp5 = null;
  if (stateFromStores > 0) {
    const obj2 = { style: tmp.subtitle, children: null };
    const obj3 = { style: tmp.onlineDot };
    const items1 = [React5(View, obj3), ];
    const obj4 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: null };
    const intl = util.intl;
    const obj5 = { numFriends: stateFromStores };
    obj4.children = intl.format(util.t.N5UIKr, obj5);
    items1[1] = React5(Text_Text.Text, obj4);
    obj2.children = items1;
    tmp5 = React6(View, obj2);
  }
  const obj6 = { title: null, subtitle: null };
  const obj7 = { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: null };
  const intl2 = util.intl;
  obj7.children = intl2.string(util.t.YUU0RF);
  obj6.title = React5(Text_Text.Text, obj7);
  obj6.subtitle = tmp5;
  return React5(HomeDrawerShared.HomeDrawerSharedItem, obj6);
}
const View = fn(17).View;
const StatusTypes = fn(1074).StatusTypes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4757);
let obj2 = { subtitle: { flexDirection: "row", alignItems: "center", gap: 4 }, onlineDot: null };
let size = { width: 8, height: 8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.TEXT_STATUS_ONLINE };
obj2.onlineDot = size;
let closure_9 = createStyles.createStyles(obj2);
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
};