// discord_app/modules/guild_sidebar/native/VoiceUserSummary.tsx
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import importAllResult from "noop";
import createCacheKey from "createCacheKey";
import { useIsUsingClientTheme } from "../../client_themes/native/useIsUsingClientTheme.tsx";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = Object.freeze({ direction: require("Button").CutoutDirection.RIGHT, inset: -2 });
let closure_7 = createCacheKey.createStyles({ container: { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, height: 40 }, containerNoPadding: { flexDirection: "row", alignItems: "center", height: 40 }, iconContainer: { height: 40 }, redesignChannelIcon: { marginRight: 4 }, overflow: { height: 20, paddingHorizontal: 4, paddingVertical: 0, display: "flex", flexDirection: "row", alignItems: "center" }, transparentBorder: { borderColor: "transparent" } });
let obj = { direction: require("Button").CutoutDirection.RIGHT, inset: -2 };
const memoResult = importAllResult.memo((guildId) => {
  let max;
  let noPadding;
  let renderIcon;
  let stageIcon;
  let users;
  guildId = guildId.guildId;
  ({ users, max, renderIcon, noPadding, stageIcon } = guildId);
  const tmp = callback();
  let transparentBorder = null;
  if (useIsUsingClientTheme()) {
    transparentBorder = tmp.transparentBorder;
  }
  let obj = guildId(8462);
  obj = { style: null, children: null };
  const items = [noPadding ? tmp.containerNoPadding : tmp.container, obj.useClientThemesOverride()];
  obj[0] = items;
  if (renderIcon) {
    if (stageIcon) {
      let VoiceNormalIcon = tmp4(4888).StageIcon;
    }
    obj = { size: "sm", color: "channel-icon", style: null };
    obj[2] = tmp.redesignChannelIcon;
    const items1 = [tmp7(VoiceNormalIcon, obj), ];
    const obj1 = { offsetAmount: -6, style: null, overflowStyle: null, overflowComponent: null, items: null, max: null, renderItem: null };
    obj1[1] = tmp.iconContainer;
    const items2 = [tmp.overflow, transparentBorder];
    obj1[2] = items2;
    obj1[3] = tmp4(1297).OverflowTextSmall;
    obj1[4] = users;
    obj1[5] = max;
    obj1[6] = function renderItem(user) {
      const obj = { user, guildId, size: null, cutout: null };
      obj[2] = guildId(outer1_2[3]).AvatarSizes.XSMALL_20;
      let tmp2;
      if (!arg1) {
        tmp2 = outer1_6;
      }
      obj[3] = tmp2;
      return outer1_4(guildId(outer1_2[3]).CutoutableAvatarImage, obj);
    };
    items1[1] = tmp7(tmp4(1297).SummarizedIconRow, obj1);
    obj[1] = items1;
    return tmp5(tmp6, obj);
  }
  VoiceNormalIcon = tmp4(4892).VoiceNormalIcon;
});
const result = require("jsxProd").fileFinishedImporting("modules/guild_sidebar/native/VoiceUserSummary.tsx");

export default memoResult;
export const VOICE_USER_SUMMARY_HEIGHT = 40;