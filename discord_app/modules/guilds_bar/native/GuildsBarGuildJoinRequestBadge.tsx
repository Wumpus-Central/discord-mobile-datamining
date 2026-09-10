// === Module 16381: GuildsBarGuildJoinRequestBadge ===

// Module 16381 (GuildsBarGuildJoinRequestBadge)
import nativeDefault from "native" /* 576 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4429 */;
import FastImageDefault from "FastImage" /* 5637 */;
import _modDef12359 from "module_12359" /* 12359 */;
import _modDef16382 from "module_16382" /* 16382 */;
import _modDef16383 from "module_16383" /* 16383 */;
import _modDef16384 from "module_16384" /* 16384 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4605);
const createStyles = { badgeImageContainer: null, badgeImage: null };
let size = { position: "absolute", bottom: -3, right: -3, height: 22, width: 22, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 3, borderRadius: 11, justifyContent: "center", alignItems: "center", overflow: "hidden" };
createStyles.badgeImageContainer = size;
const size1 = { height: 16, width: 16, opacity: fn(5491).DARK_1_LIGHT_08 };
createStyles.badgeImage = size1;
let closure_5 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarGuildJoinRequestBadge.tsx");

export default function GuildsBarGuildJoinRequestBadge(joinRequestState) {
  joinRequestState = joinRequestState.joinRequestState;
  const tmp = closure_5();
  if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED === joinRequestState) {
    let tmp4 = _modDef16382;
  } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED === joinRequestState) {
    tmp4 = _modDef16383;
  } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.STARTED === joinRequestState) {
    tmp4 = _modDef16384;
  } else {
    tmp4 = null;
    if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED === joinRequestState) {
      tmp4 = _modDef12359;
    }
  }
  let tmp9 = null;
  if (null != tmp4) {
    let obj = { pointerEvents: "none", style: null, children: null };
    const items = [tmp.badgeImageContainer, joinRequestState.style];
    obj.style = items;
    obj = { source: tmp4, style: tmp.badgeImage };
    obj.children = jsx(FastImageDefault, { source: tmp4, style: tmp.badgeImage });
    tmp9 = <View source={tmp4} style={tmp.badgeImage} />;
  }
  return tmp9;
};