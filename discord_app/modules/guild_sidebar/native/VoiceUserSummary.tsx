// discord_app/modules/guild_sidebar/native/VoiceUserSummary.tsx
import native from "../../../design/void/native.tsx";
import useIsUsingClientThemeDefault from "../../client_themes/native/useIsUsingClientTheme.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let closure_6 = Object.freeze({ direction: fn(1178).CutoutDirection.RIGHT, inset: -2 });
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({
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
let obj = { direction: fn(1178).CutoutDirection.RIGHT, inset: -2 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/VoiceUserSummary.tsx");

export default noop.memo((guildId) => {
  guildId = guildId.guildId;
  ({ users, max, renderIcon, noPadding, stageIcon } = guildId);
  const tmp = closure_7();
  let transparentBorder = null;
  if (useIsUsingClientThemeDefault()) {
    transparentBorder = tmp.transparentBorder;
  }
  guildId(7872);
  let obj = { style: null, children: null };
  const items = [noPadding ? tmp.containerNoPadding : tmp.container, obj.useClientThemesOverride()];
  obj.style = items;
  if (renderIcon) {
    if (stageIcon) {
      let VoiceNormalIcon = tmp4(5097).StageIcon;
    }
    obj = { size: "sm", color: "channel-icon", style: tmp.redesignChannelIcon };
    const items1 = [closure_4(VoiceNormalIcon, obj)];
    const obj1 = {
      offsetAmount: -6,
      style: tmp.iconContainer,
      overflowStyle: null,
      overflowComponent: null,
      items: null,
      max: null,
      renderItem: null,
    };
    const items2 = [tmp.overflow, transparentBorder];
    obj1.overflowStyle = items2;
    obj1.overflowComponent = tmp4(1178).OverflowTextSmall;
    obj1.items = users;
    obj1.max = max;
    obj1.renderItem = function renderItem(user, arg1) {
      const obj = { user, guildId, size: native.AvatarSizes.XSMALL_20, cutout: null };
      let tmp2;
      if (!arg1) {
        tmp2 = closure_6;
      }
      obj.cutout = tmp2;
      return React4(native.CutoutableAvatarImage, obj);
    };
    items1[1] = closure_4(tmp4(1178).SummarizedIconRow, obj1);
    obj.children = items1;
    return tmp5(tmp6, obj);
  }
  VoiceNormalIcon = tmp4(5101).VoiceNormalIcon;
});
export const VOICE_USER_SUMMARY_HEIGHT = 40;
