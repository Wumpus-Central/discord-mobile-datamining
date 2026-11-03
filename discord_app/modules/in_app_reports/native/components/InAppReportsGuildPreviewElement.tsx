// discord_app/modules/in_app_reports/native/components/InAppReportsGuildPreviewElement.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import ColorUtils from "../../../../utils/ColorUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import GuildIcon from "../../../guild/native/GuildIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const GuildIconDefault = GuildIcon;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5141);
let obj2 = {
  container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 },
  borderColor: { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY },
  title: { lineHeight: 16, marginBottom: 8 },
  guildContainer: null,
  guildInfo: null,
};
let obj3 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.guildContainer = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  minHeight: 40,
  borderRadius: nativeDefault.radii.sm,
  borderWidth: 1,
  padding: 12,
};
obj2.guildInfo = { marginLeft: 8 };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/in_app_reports/native/components/InAppReportsGuildPreviewElement.tsx",
);

export default function GuildPreview(guild) {
  guild = guild.guild;
  const tmp = closure_6();
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "body-sm/medium", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t["0ox7Hq"]);
  items = [React4(Text_Text.Text, obj3)];
  const obj4 = { style: null, children: null };
  const items1 = [tmp.guildContainer, { borderColor: ColorUtils.hexWithOpacity(tmp.borderColor.color, 0.08) }];
  obj4.style = items1;
  const obj5 = { size: null, guild: null };
  const hexWithOpacityResult = ColorUtils.hexWithOpacity(tmp.borderColor.color, 0.08);
  obj5.size = GuildIcon.GuildIconSizes.LARGE;
  obj5.guild = guild;
  const items2 = [
    React4(GuildIconDefault, obj5),
    React4(Text_Text.Text, {
      variant: "text-md/semibold",
      color: "mobile-text-heading-primary",
      style: tmp.guildInfo,
      children: guild.name,
    }),
  ];
  obj4.children = items2;
  items[1] = hasOwnProperty(View, obj4);
  obj2.children = items;
  return hasOwnProperty(View, obj2);
}
