// === Module 16092: VoiceUserSummary ===

// Module 16092 (VoiceUserSummary)
import native from "native" /* 1188 */;
import useIsUsingClientThemeDefault from "useIsUsingClientTheme" /* 7519 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let closure_6 = Object.freeze({ direction: fn(1188).CutoutDirection.RIGHT, inset: -2 });
const createStyles = fn(4896);
let closure_7 = createStyles.createStyles({ container: { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, height: 40 }, containerNoPadding: { flexDirection: "row", alignItems: "center", height: 40 }, iconContainer: { height: 40 }, redesignChannelIcon: { marginRight: 4 }, overflow: { height: 20, paddingHorizontal: 4, paddingVertical: 0, display: "flex", flexDirection: "row", alignItems: "center" }, transparentBorder: { borderColor: "transparent" } });
const ReactCompilerGating = fn(558);
let obj = { direction: fn(1188).CutoutDirection.RIGHT, inset: -2 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/VoiceUserSummary.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((noPadding) => {
  const cResult = guildId(576).c(22);
  ({ users, max, guildId } = noPadding);
  ({ renderIcon, stageIcon } = noPadding);
  const tmp4 = closure_7();
  let transparentBorder = null;
  if (useIsUsingClientThemeDefault()) {
    transparentBorder = tmp4.transparentBorder;
  }
  let obj = guildId(576);
  const clientThemesOverride = guildId(7518).useClientThemesOverride();
  const tmp7 = noPadding.noPadding ? tmp4.containerNoPadding : tmp4.container;
  if (cResult[0] === tmp7) {
    if (cResult[1] === clientThemesOverride) {
      let tmp8 = cResult[2];
    }
    if (cResult[3] === renderIcon) {
      if (cResult[4] === stageIcon) {
        if (cResult[5] === tmp4.redesignChannelIcon) {
          if (cResult[7] === tmp4.overflow) {
            if (cResult[8] === transparentBorder) {
              let tmp13 = cResult[9];
            }
            if (cResult[10] !== guildId) {
              const fn = function v(user, arg1) {
                const obj = { user, guildId, size: native.AvatarSizes.XSMALL_20, cutout: null };
                let tmp2;
                if (!arg1) {
                  tmp2 = closure_6;
                }
                obj.cutout = tmp2;
                return React4(native.CutoutableAvatarImage, obj);
              };
              cResult[10] = guildId;
              cResult[11] = fn;
              let tmp14 = fn;
            } else {
              tmp14 = cResult[11];
            }
            if (cResult[12] === max) {
              if (cResult[13] === tmp4.iconContainer) {
                if (cResult[14] === tmp13) {
                  if (cResult[15] === tmp14) {
                    if (cResult[16] === users) {
                      let tmp15 = cResult[17];
                    }
                    if (cResult[18] === tmp8) {
                      if (cResult[19] === tmp9) {
                        if (cResult[20] === tmp15) {
                          let tmp18 = cResult[21];
                        }
                        return tmp18;
                      }
                    }
                    const obj2 = { style: tmp8, children: null };
                    const items = [tmp9, tmp15];
                    obj2.children = items;
                    const tmp21 = closure_5(View, obj2);
                    cResult[18] = tmp8;
                    cResult[19] = tmp9;
                    cResult[20] = tmp15;
                    cResult[21] = tmp21;
                    tmp18 = tmp21;
                  }
                }
              }
            }
            const obj3 = { offsetAmount: -6, style: tmp4.iconContainer, overflowStyle: tmp13, overflowComponent: guildId(1188).OverflowTextSmall, items: users, max, renderItem: tmp14 };
            const tmp17 = closure_4(guildId(1188).SummarizedIconRow, obj3);
            cResult[12] = max;
            cResult[13] = tmp4.iconContainer;
            cResult[14] = tmp13;
            cResult[15] = tmp14;
            cResult[16] = users;
            cResult[17] = tmp17;
            tmp15 = tmp17;
          }
          const items1 = [tmp4.overflow, transparentBorder];
          cResult[7] = tmp4.overflow;
          cResult[8] = transparentBorder;
          cResult[9] = items1;
          tmp13 = items1;
        }
      }
    }
    if (!renderIcon) {
      const obj4 = { size: "sm", color: "channel-icon", style: tmp4.redesignChannelIcon };
      const tmp10Result = tmp10(guildId(5892).VoiceNormalIcon, obj4);
      cResult[3] = renderIcon;
      cResult[4] = stageIcon;
      stageIcon = tmp4.redesignChannelIcon;
      cResult[5] = stageIcon;
      cResult[6] = tmp10Result;
    }
    const StageIcon = guildId(5888).StageIcon;
  }
  const items2 = [tmp7, clientThemesOverride];
  cResult[0] = tmp7;
  cResult[1] = clientThemesOverride;
  cResult[2] = items2;
  tmp8 = items2;
  const tmpResult = guildId(7518);
}) : ((guildId) => {
  guildId = guildId.guildId;
  ({ users, max, renderIcon, noPadding, stageIcon } = guildId);
  const tmp = closure_7();
  let transparentBorder = null;
  if (useIsUsingClientThemeDefault()) {
    transparentBorder = tmp.transparentBorder;
  }
  const obj2 = { style: null, children: null };
  const items = [noPadding ? tmp.containerNoPadding : tmp.container, guildId(7518).useClientThemesOverride()];
  obj2.style = items;
  if (renderIcon) {
    if (stageIcon) {
      let VoiceNormalIcon = tmp4(5888).StageIcon;
    }
    const obj3 = { size: "sm", color: "channel-icon", style: tmp.redesignChannelIcon };
    const items1 = [closure_4(VoiceNormalIcon, obj3), ];
    const obj4 = { offsetAmount: -6, style: tmp.iconContainer, overflowStyle: null, overflowComponent: null, items: null, max: null, renderItem: null };
    const items2 = [tmp.overflow, transparentBorder];
    obj4.overflowStyle = items2;
    obj4.overflowComponent = tmp4(1188).OverflowTextSmall;
    obj4.items = users;
    obj4.max = max;
    obj4.renderItem = function renderItem(user, arg1) {
      const obj = { user, guildId, size: native.AvatarSizes.XSMALL_20, cutout: null };
      let tmp2;
      if (!arg1) {
        tmp2 = closure_6;
      }
      obj.cutout = tmp2;
      return React4(native.CutoutableAvatarImage, obj);
    };
    items1[1] = closure_4(tmp4(1188).SummarizedIconRow, obj4);
    obj2.children = items1;
    return tmp5(tmp6, obj2);
  }
  VoiceNormalIcon = tmp4(5892).VoiceNormalIcon;
  let obj = guildId(7518);
}));
export const VOICE_USER_SUMMARY_HEIGHT = 40;