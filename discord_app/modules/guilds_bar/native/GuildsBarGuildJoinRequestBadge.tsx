// === Module 18696: GuildsBarGuildJoinRequestBadge ===

// Module 18696 (GuildsBarGuildJoinRequestBadge)
import nativeDefault from "native" /* 575 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 5174 */;
import FastImageDefault from "FastImage" /* 5842 */;
import _modDef14070 from "module_14070" /* 14070 */;
import _modDef18697 from "module_18697" /* 18697 */;
import _modDef18698 from "module_18698" /* 18698 */;
import _modDef18699 from "module_18699" /* 18699 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5140);
let obj2 = { badgeImageContainer: null, badgeImage: null };
let size = { position: "absolute", bottom: -3, right: -3, height: 22, width: 22, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 3, borderRadius: 11, justifyContent: "center", alignItems: "center", overflow: "hidden" };
obj2.badgeImageContainer = size;
const size1 = { height: 16, width: 16, opacity: fn(6833).DARK_1_LIGHT_08 };
obj2.badgeImage = size1;
let closure_5 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarGuildJoinRequestBadge.tsx");

export default function GuildsBarGuildJoinRequestBadge(joinRequestState) {
  joinRequestState = joinRequestState.joinRequestState;
  const tmp = closure_5();
  if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED === joinRequestState) {
    let tmp4 = _modDef18697;
  } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED === joinRequestState) {
    tmp4 = _modDef18698;
  } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.STARTED === joinRequestState) {
    tmp4 = _modDef18699;
  } else {
    tmp4 = null;
    if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED === joinRequestState) {
      tmp4 = _modDef14070;
    }
  }
  let tmp9 = null;
  if (null != tmp4) {
    const obj = { pointerEvents: "none", style: null, children: null };
    items = [tmp.badgeImageContainer, joinRequestState.style];
    obj.style = items;
    const obj2 = { source: tmp4, style: tmp.badgeImage };
    obj.children = jsx(FastImageDefault, { source: tmp4, style: tmp.badgeImage });
    tmp9 = <View pointerEvents="none" style={null}>{null}</View>;
  }
  return tmp9;
};