// === Module 16632: GuildsBarGuildJoinRequestBadge ===

// Module 16632 (GuildsBarGuildJoinRequestBadge)
import nativeDefault from "native" /* 576 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4580 */;
import FastImageDefault from "FastImage" /* 5799 */;
import _modDef12541 from "module_12541" /* 12541 */;
import _modDef16633 from "module_16633" /* 16633 */;
import _modDef16634 from "module_16634" /* 16634 */;
import _modDef16635 from "module_16635" /* 16635 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
let obj2 = { badgeImageContainer: null, badgeImage: null };
let size = { position: "absolute", bottom: -3, right: -3, height: 22, width: 22, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 3, borderRadius: 11, justifyContent: "center", alignItems: "center", overflow: "hidden" };
obj2.badgeImageContainer = size;
const size1 = { height: 16, width: 16, opacity: fn(5653).DARK_1_LIGHT_08 };
obj2.badgeImage = size1;
let closure_5 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarGuildJoinRequestBadge.tsx");

export default function GuildsBarGuildJoinRequestBadge(joinRequestState) {
  joinRequestState = joinRequestState.joinRequestState;
  const tmp = closure_5();
  if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED === joinRequestState) {
    let tmp4 = _modDef16633;
  } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED === joinRequestState) {
    tmp4 = _modDef16634;
  } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.STARTED === joinRequestState) {
    tmp4 = _modDef16635;
  } else {
    tmp4 = null;
    if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED === joinRequestState) {
      tmp4 = _modDef12541;
    }
  }
  let tmp9 = null;
  if (null != tmp4) {
    const obj = { pointerEvents: "none", style: null, children: null };
    const items = [tmp.badgeImageContainer, joinRequestState.style];
    obj.style = items;
    const obj2 = { source: tmp4, style: tmp.badgeImage };
    obj.children = jsx(FastImageDefault, { source: tmp4, style: tmp.badgeImage });
    tmp9 = <View pointerEvents="none" style={null}>{null}</View>;
  }
  return tmp9;
};