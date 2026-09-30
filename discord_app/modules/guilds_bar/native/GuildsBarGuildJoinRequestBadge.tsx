// === Module 16140: GuildsBarGuildJoinRequestBadge ===

// Module 16140 (GuildsBarGuildJoinRequestBadge)
import nativeDefault from "native" /* 576 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4688 */;
import FastImageDefault from "FastImage" /* 6095 */;
import _modDef11975 from "module_11975" /* 11975 */;
import _modDef16141 from "module_16141" /* 16141 */;
import _modDef16142 from "module_16142" /* 16142 */;
import _modDef16143 from "module_16143" /* 16143 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4866);
let obj2 = { badgeImageContainer: null, badgeImage: null };
let size = { position: "absolute", bottom: -3, right: -3, height: 22, width: 22, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 3, borderRadius: 11, justifyContent: "center", alignItems: "center", overflow: "hidden" };
obj2.badgeImageContainer = size;
const size1 = { height: 16, width: 16, opacity: fn(5950).DARK_1_LIGHT_08 };
obj2.badgeImage = size1;
let closure_5 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarGuildJoinRequestBadge.tsx");

export default function GuildsBarGuildJoinRequestBadge(joinRequestState) {
  joinRequestState = joinRequestState.joinRequestState;
  const tmp = closure_5();
  if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED === joinRequestState) {
    let tmp4 = _modDef16141;
  } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED === joinRequestState) {
    tmp4 = _modDef16142;
  } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.STARTED === joinRequestState) {
    tmp4 = _modDef16143;
  } else {
    tmp4 = null;
    if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED === joinRequestState) {
      tmp4 = _modDef11975;
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