// === Module 16279: GuildsBarGuildJoinRequestBadge ===

// Module 16279 (GuildsBarGuildJoinRequestBadge)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4708 */;
import LegacyTokens from "LegacyTokens" /* 5627 */;
import FastImageDefault from "FastImage" /* 5981 */;
import AssetRegistryDefault from "AssetRegistry" /* 11931 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 16280 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 16281 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 16282 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let size;
let size1;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { badgeImageContainer: size, badgeImage: size1 };
size = { position: "absolute", bottom: -3, right: -3, height: 22, width: 22, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 3, borderRadius: 11, justifyContent: "center", alignItems: "center", overflow: "hidden" };
createStyles = createStyles.createStyles;
size1 = { height: 16, width: 16, opacity: LegacyTokens.DARK_1_LIGHT_08 };
let closure_5 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let joinRequestState;
  let style;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(11);
  ({ style, joinRequestState } = arg0);
  const tmp4 = closure_5();
  if (cResult[0] !== joinRequestState) {
    let tmp6;
    if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED === joinRequestState) {
      tmp6 = AssetRegistryDefault2;
    } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED === joinRequestState) {
      tmp6 = AssetRegistryDefault3;
    } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.STARTED === joinRequestState) {
      tmp6 = AssetRegistryDefault4;
    } else {
      tmp6 = null;
      if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED === joinRequestState) {
        tmp6 = AssetRegistryDefault;
      }
    }
    cResult[0] = joinRequestState;
    cResult[1] = tmp6;
    tmp5 = tmp6;
  } else {
    tmp5 = cResult[1];
  }
  let tmp11 = null;
  if (null != tmp5) {
    if (cResult[2] === style) {
      let tmp12;
      if (cResult[3] === tmp4.badgeImageContainer) {
        tmp12 = cResult[4];
      }
      if (cResult[5] === tmp5) {
        let tmp13;
        if (cResult[6] === tmp4.badgeImage) {
          tmp13 = cResult[7];
        }
        if (cResult[8] === tmp12) {
          let tmp17;
          if (cResult[9] === tmp13) {
            tmp17 = cResult[10];
          }
          tmp11 = tmp17;
        }
        const tmp20 = <View pointerEvents="none" style={tmp12}>{tmp13}</View>;
        cResult[8] = tmp12;
        cResult[9] = tmp13;
        cResult[10] = tmp20;
        tmp17 = tmp20;
      }
      const tmp16 = jsx(FastImageDefault, { source: tmp5, style: tmp4.badgeImage });
      cResult[5] = tmp5;
      cResult[6] = tmp4.badgeImage;
      cResult[7] = tmp16;
      tmp13 = tmp16;
    }
    const items = [tmp4.badgeImageContainer, style];
    cResult[2] = style;
    cResult[3] = tmp4.badgeImageContainer;
    cResult[4] = items;
    tmp12 = items;
  }
  return tmp11;
}) : ((joinRequestState) => {
  let tmp4;
  joinRequestState = joinRequestState.joinRequestState;
  const style = joinRequestState.style;
  const tmp = closure_5();
  if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED === joinRequestState) {
    tmp4 = AssetRegistryDefault2;
  } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED === joinRequestState) {
    tmp4 = AssetRegistryDefault3;
  } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.STARTED === joinRequestState) {
    tmp4 = AssetRegistryDefault4;
  } else {
    tmp4 = null;
    if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED === joinRequestState) {
      tmp4 = AssetRegistryDefault;
    }
  }
  let tmp9 = null;
  if (null != tmp4) {
    const items = [tmp.badgeImageContainer, style];
    tmp9 = <View pointerEvents="none" style={items}>{null}</View>;
  }
  return tmp9;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarGuildJoinRequestBadge.tsx");

export default tmp4;