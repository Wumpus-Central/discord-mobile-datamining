// discord_app/modules/guilds_bar/native/GuildsBarGuildJoinRequestBadge.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import MemberVerificationTypes from "../../guild_member_verification/MemberVerificationTypes.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import _modDef12289 from "../../../../_runtime/metro/12289__.js";
import _modDef16299 from "../../../../_runtime/metro/16299__.js";
import _modDef16300 from "../../../../_runtime/metro/16300__.js";
import _modDef16301 from "../../../../_runtime/metro/16301__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
const createStyles = { badgeImageContainer: null, badgeImage: null };
let size = {
  position: "absolute",
  bottom: -3,
  right: -3,
  height: 22,
  width: 22,
  borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderWidth: 3,
  borderRadius: 11,
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
};
createStyles.badgeImageContainer = size;
const size1 = { height: 16, width: 16, opacity: fn(5441).DARK_1_LIGHT_08 };
createStyles.badgeImage = size1;
let closure_5 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarGuildJoinRequestBadge.tsx");

export default function GuildsBarGuildJoinRequestBadge(joinRequestState) {
  joinRequestState = joinRequestState.joinRequestState;
  const tmp = closure_5();
  if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED === joinRequestState) {
    let tmp4 = _modDef16299;
  } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED === joinRequestState) {
    tmp4 = _modDef16300;
  } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.STARTED === joinRequestState) {
    tmp4 = _modDef16301;
  } else {
    tmp4 = null;
    if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED === joinRequestState) {
      tmp4 = _modDef12289;
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
}
