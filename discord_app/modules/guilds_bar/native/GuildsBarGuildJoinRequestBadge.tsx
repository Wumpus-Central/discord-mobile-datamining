// === Module 16539: GuildsBarGuildJoinRequestBadge ===

// Module 16539 (GuildsBarGuildJoinRequestBadge)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4902 */;
import FastImageDefault from "FastImage" /* 6164 */;
import _modDef12004 from "module_12004" /* 12004 */;
import _modDef16540 from "module_16540" /* 16540 */;
import _modDef16541 from "module_16541" /* 16541 */;
import _modDef16542 from "module_16542" /* 16542 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let obj2 = { badgeImageContainer: null, badgeImage: null };
let size = { position: "absolute", bottom: -3, right: -3, height: 22, width: 22, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 3, borderRadius: 11, justifyContent: "center", alignItems: "center", overflow: "hidden" };
obj2.badgeImageContainer = size;
const size1 = { height: 16, width: 16, opacity: fn(5974).DARK_1_LIGHT_08 };
obj2.badgeImage = size1;
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarGuildJoinRequestBadge.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildsBarGuildJoinRequestBadge(arg0) {
  const cResult = c.c(11);
  ({ style, joinRequestState } = arg0);
  const tmp4 = closure_5();
  if (cResult[0] !== joinRequestState) {
    if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED === joinRequestState) {
      let tmp6 = _modDef16540;
    } else {
      if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED === joinRequestState) {
        tmp6 = _modDef16541;
      } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.STARTED !== joinRequestState) {
        tmp6 = null;
        if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED === joinRequestState) {
          tmp6 = _modDef12004;
        }
      }
      tmp6 = _modDef16542;
    }
    cResult[0] = joinRequestState;
    cResult[1] = tmp6;
  } else if (null == cResult[1]) {
    return null;
  } else {
    if (cResult[2] === style) {
      if (cResult[3] === tmp4.badgeImageContainer) {
        let tmp13 = cResult[4];
      }
      if (cResult[5] === tmp5) {
        if (cResult[6] === tmp4.badgeImage) {
          let tmp14 = cResult[7];
        }
        if (cResult[8] === tmp13) {
        }
        const obj2 = { pointerEvents: "none", style: tmp13, children: tmp14 };
        const tmp21 = <View pointerEvents="none" style={tmp13}>{tmp14}</View>;
        cResult[8] = tmp13;
        cResult[9] = tmp14;
        cResult[10] = tmp21;
      }
      const obj3 = { source: tmp5, style: tmp4.badgeImage };
      const tmp17 = jsx(FastImageDefault, { source: tmp5, style: tmp4.badgeImage });
      cResult[5] = tmp5;
      cResult[6] = tmp4.badgeImage;
      cResult[7] = tmp17;
      tmp14 = tmp17;
    }
    const items = [tmp4.badgeImageContainer, style];
    cResult[2] = style;
    cResult[3] = tmp4.badgeImageContainer;
    cResult[4] = items;
    tmp13 = items;
  }
}) : (function GuildsBarGuildJoinRequestBadge(joinRequestState) {
  joinRequestState = joinRequestState.joinRequestState;
  const tmp = closure_5();
  if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED === joinRequestState) {
    let tmp4 = _modDef16540;
  } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED === joinRequestState) {
    tmp4 = _modDef16541;
  } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.STARTED === joinRequestState) {
    tmp4 = _modDef16542;
  } else {
    tmp4 = null;
    if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED === joinRequestState) {
      tmp4 = _modDef12004;
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
});