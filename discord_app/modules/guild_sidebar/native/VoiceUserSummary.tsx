// === Module 16053: VoiceUserSummary ===

// Module 16053 (VoiceUserSummary)
import react_native from "react-native" /* 17 */;
import native from "native" /* 1188 */;
import useIsUsingClientThemeDefault from "useIsUsingClientTheme" /* 7508 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { direction: native.CutoutDirection.RIGHT, inset: -2 };
let closure_6 = Object.freeze(obj);
let closure_7 = createStyles.createStyles({ container: { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, height: 40 }, containerNoPadding: { flexDirection: "row", alignItems: "center", height: 40 }, iconContainer: { height: 40 }, redesignChannelIcon: { marginRight: 4 }, overflow: { height: 20, paddingHorizontal: 4, paddingVertical: 0, display: "flex", flexDirection: "row", alignItems: "center" }, transparentBorder: { borderColor: "transparent" } });
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((noPadding) => {
  let guildId;
  let items;
  let max;
  let renderIcon;
  let stageIcon;
  let users;
  let obj = guildId(576);
  const cResult = obj.c(22);
  ({ users, max, guildId } = noPadding);
  ({ renderIcon, stageIcon } = noPadding);
  noPadding = noPadding.noPadding;
  const tmp4 = closure_7();
  let transparentBorder = null;
  if (useIsUsingClientThemeDefault()) {
    transparentBorder = tmp4.transparentBorder;
  }
  const tmpResult = guildId(7507);
  const clientThemesOverride = tmpResult.useClientThemesOverride();
  const tmp7 = noPadding ? tmp4.containerNoPadding : tmp4.container;
  if (cResult[0] === tmp7) {
    let tmp8;
    let tmp9;
    if (cResult[1] === clientThemesOverride) {
      tmp8 = cResult[2];
    }
    if (cResult[3] === renderIcon) {
      if (cResult[4] === stageIcon) {
        if (cResult[5] === tmp4.redesignChannelIcon) {
          tmp9 = cResult[6];
        }
        if (cResult[7] === tmp4.overflow) {
          let tmp12;
          let tmp13;
          if (cResult[8] === transparentBorder) {
            tmp12 = cResult[9];
          }
          if (cResult[10] !== guildId) {
            const fn = function v(user, arg1) {
              let tmp2;
              const obj = { user, guildId, size: native.AvatarSizes.XSMALL_20, cutout: tmp2 };
              const CutoutableAvatarImage = native.CutoutableAvatarImage;
              tmp2 = undefined;
              if (!arg1) {
                tmp2 = closure_6;
              }
              return React3(CutoutableAvatarImage, obj);
            };
            cResult[10] = guildId;
            cResult[11] = fn;
            tmp13 = fn;
          } else {
            tmp13 = cResult[11];
          }
          if (cResult[12] === max) {
            if (cResult[13] === tmp4.iconContainer) {
              if (cResult[14] === tmp12) {
                if (cResult[15] === tmp13) {
                  let tmp14;
                  if (cResult[16] === users) {
                    tmp14 = cResult[17];
                  }
                  if (cResult[18] === tmp8) {
                    if (cResult[19] === tmp9) {
                      let tmp17;
                      if (cResult[20] === tmp14) {
                        tmp17 = cResult[21];
                      }
                      return tmp17;
                    }
                  }
                  const obj2 = { style: tmp8, children: items };
                  items = [tmp9, tmp14];
                  const tmp20 = closure_5(View, obj2);
                  cResult[18] = tmp8;
                  cResult[19] = tmp9;
                  cResult[20] = tmp14;
                  cResult[21] = tmp20;
                  tmp17 = tmp20;
                }
              }
            }
          }
          const obj3 = { offsetAmount: -6, style: tmp4.iconContainer, overflowStyle: tmp12, overflowComponent: guildId(1188).OverflowTextSmall, items: users, max, renderItem: tmp13 };
          const SummarizedIconRow = guildId(1188).SummarizedIconRow;
          const tmp16 = closure_4(SummarizedIconRow, obj3);
          cResult[12] = max;
          cResult[13] = tmp4.iconContainer;
          cResult[14] = tmp12;
          cResult[15] = tmp13;
          cResult[16] = users;
          cResult[17] = tmp16;
          tmp14 = tmp16;
        }
        const items1 = [tmp4.overflow, transparentBorder];
        cResult[7] = tmp4.overflow;
        cResult[8] = transparentBorder;
        cResult[9] = items1;
        tmp12 = items1;
      }
    }
    if (renderIcon) {
      let VoiceNormalIcon;
      if (stageIcon) {
        VoiceNormalIcon = guildId(5881).StageIcon;
      }
      const obj4 = { size: "sm", color: "channel-icon", style: tmp4.redesignChannelIcon };
      const tmp10Result = tmp10(VoiceNormalIcon, obj4);
      cResult[3] = renderIcon;
      cResult[4] = stageIcon;
      cResult[5] = tmp4.redesignChannelIcon;
      cResult[6] = tmp10Result;
      tmp9 = tmp10Result;
    }
    VoiceNormalIcon = guildId(5885).VoiceNormalIcon;
  }
  const items2 = [tmp7, clientThemesOverride];
  cResult[0] = tmp7;
  cResult[1] = clientThemesOverride;
  cResult[2] = items2;
  tmp8 = items2;
}) : ((guildId) => {
  let items;
  let items2;
  let max;
  let noPadding;
  let renderIcon;
  let stageIcon;
  let users;
  guildId = guildId.guildId;
  ({ users, max, renderIcon, noPadding, stageIcon } = guildId);
  const tmp = closure_7();
  let transparentBorder = null;
  if (useIsUsingClientThemeDefault()) {
    transparentBorder = tmp.transparentBorder;
  }
  let obj = guildId(7507);
  const obj2 = { style: items, children: null };
  items = [noPadding ? tmp.containerNoPadding : tmp.container, obj.useClientThemesOverride()];
  if (renderIcon) {
    let VoiceNormalIcon;
    if (stageIcon) {
      VoiceNormalIcon = tmp4(5881).StageIcon;
    }
    const obj3 = { size: "sm", color: "channel-icon", style: tmp.redesignChannelIcon };
    const items1 = [closure_4(VoiceNormalIcon, obj3), ];
    const obj4 = {
      offsetAmount: -6,
      style: tmp.iconContainer,
      overflowStyle: items2,
      overflowComponent: guildId(1188).OverflowTextSmall,
      items: users,
      max,
      renderItem(user, arg1) {
          let tmp2;
          const obj = { user, guildId, size: native.AvatarSizes.XSMALL_20, cutout: tmp2 };
          const CutoutableAvatarImage = native.CutoutableAvatarImage;
          tmp2 = undefined;
          if (!arg1) {
            tmp2 = closure_6;
          }
          return React3(CutoutableAvatarImage, obj);
        }
    };
    items2 = [tmp.overflow, transparentBorder];
    const SummarizedIconRow = tmp4(1188).SummarizedIconRow;
    items1[1] = closure_4(SummarizedIconRow, obj4);
    obj2.children = items1;
    return tmp5(tmp6, obj2);
  }
  VoiceNormalIcon = tmp4(5885).VoiceNormalIcon;
}));
const result = size.fileFinishedImporting("modules/guild_sidebar/native/VoiceUserSummary.tsx");

export default memoResult;
export const VOICE_USER_SUMMARY_HEIGHT = 40;