// discord_app/modules/guild_sidebar/native/VoiceUserSummary.tsx
import useIsUsingClientThemeDefault from "../../client_themes/native/useIsUsingClientTheme.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../_runtime/00019_noop.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = Object.freeze({ direction: require("Button").CutoutDirection.RIGHT, inset: -2 });
let closure_7 = createCacheKey.createStyles({
  container: { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, height: 40 },
  containerNoPadding: { flexDirection: "row", alignItems: "center", height: 40 },
  iconContainer: { height: 40 },
  redesignChannelIcon: { marginRight: 4 },
  overflow: {
    height: 20,
    paddingHorizontal: 4,
    paddingVertical: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  transparentBorder: { borderColor: "transparent" },
});
let obj = { direction: require("Button").CutoutDirection.RIGHT, inset: -2 };
const memoResult = importAllResult.memo((guildId) => {
  guildId = guildId.guildId;
  ({ users, max, renderIcon, noPadding, stageIcon } = guildId);
  const tmp = callback();
  let transparentBorder = null;
  if (useIsUsingClientThemeDefault()) {
    transparentBorder = tmp.transparentBorder;
  }
  let obj = guildId(7872);
  obj = { style: null, children: null };
  const items = [noPadding ? tmp.containerNoPadding : tmp.container, obj.useClientThemesOverride()];
  obj[0] = items;
  if (renderIcon) {
    if (stageIcon) {
      let VoiceNormalIcon = tmp4(5097).StageIcon;
    }
    obj = { size: "sm", color: "channel-icon", style: null };
    obj[2] = tmp.redesignChannelIcon;
    const items1 = [tmp7(VoiceNormalIcon, obj)];
    obj1 = {
      offsetAmount: -6,
      style: null,
      overflowStyle: null,
      overflowComponent: null,
      items: null,
      max: null,
      renderItem: null,
    };
    obj1[1] = tmp.iconContainer;
    const items2 = [tmp.overflow, transparentBorder];
    obj1[2] = items2;
    obj1[3] = tmp4(1178).OverflowTextSmall;
    obj1[4] = users;
    obj1[5] = max;
    obj1[6] = function renderItem(user) {
      const obj = { user, guildId, size: guildId(closure_1_2[3]).AvatarSizes.XSMALL_20, cutout: null };
      let tmp2;
      if (!arg1) {
        tmp2 = closure_1_6;
      }
      obj[3] = tmp2;
      return closure_1_4(guildId(closure_1_2[3]).CutoutableAvatarImage, obj);
    };
    items1[1] = tmp7(tmp4(1178).SummarizedIconRow, obj1);
    obj[1] = items1;
    return tmp5(tmp6, obj);
  }
  VoiceNormalIcon = tmp4(5101).VoiceNormalIcon;
});
const result = require("set").fileFinishedImporting("modules/guild_sidebar/native/VoiceUserSummary.tsx");

export default memoResult;
export const VOICE_USER_SUMMARY_HEIGHT = 40;
