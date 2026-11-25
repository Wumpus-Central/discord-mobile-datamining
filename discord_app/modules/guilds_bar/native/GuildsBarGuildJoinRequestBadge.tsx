// === Module 18029: GuildsBarGuildJoinRequestBadge ===

// Module 18029 (GuildsBarGuildJoinRequestBadge)
import nativeDefault from "native" /* 575 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 5048 */;
import FastImageDefault from "FastImage" /* 5699 */;
import _modDef13184 from "module_13184" /* 13184 */;
import _modDef18030 from "module_18030" /* 18030 */;
import _modDef18031 from "module_18031" /* 18031 */;
import _modDef18032 from "module_18032" /* 18032 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5012);
let obj2 = { badgeImageContainer: null, badgeImage: null };
let size = { position: "absolute", bottom: -3, right: -3, height: 22, width: 22, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 3, borderRadius: 11, justifyContent: "center", alignItems: "center", overflow: "hidden" };
obj2.badgeImageContainer = size;
const size1 = { height: 16, width: 16, opacity: fn(6837).DARK_1_LIGHT_08 };
obj2.badgeImage = size1;
let closure_5 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarGuildJoinRequestBadge.tsx");

export default function GuildsBarGuildJoinRequestBadge(joinRequestState) {
  joinRequestState = joinRequestState.joinRequestState;
  const tmp = closure_5();
  if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED === joinRequestState) {
    let tmp4 = _modDef18030;
  } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED === joinRequestState) {
    tmp4 = _modDef18031;
  } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.STARTED === joinRequestState) {
    tmp4 = _modDef18032;
  } else {
    tmp4 = null;
    if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED === joinRequestState) {
      tmp4 = _modDef13184;
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