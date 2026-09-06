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
fn(4560);
let createStyles = {
  container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 },
  borderColor: null,
  title: null,
  guildContainer: null,
  guildInfo: null,
};
createStyles = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles.borderColor = createStyles;
createStyles.title = { lineHeight: 16, marginBottom: 8 };
createStyles.guildContainer = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  minHeight: 40,
  borderRadius: nativeDefault.radii.sm,
  borderWidth: 1,
  padding: 12,
};
createStyles.guildInfo = { marginLeft: 8 };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/in_app_reports/native/components/InAppReportsGuildPreviewElement.tsx",
);

export default function GuildPreview(guild) {
  guild = guild.guild;
  const tmp = closure_6();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.title, accessibilityRole: "header", variant: "text-xs/bold", children: null };
  const intl = util.intl;
  const hexWithOpacityResult = obj.hexWithOpacity(tmp.borderColor.color, 0.08);
  obj.children = intl.string(util.t["0ox7Hq"]).toUpperCase();
  const items = [React4(Text_Text.Text, obj)];
  const obj1 = { style: null, children: null };
  const items1 = [tmp.guildContainer, { borderColor: hexWithOpacityResult }];
  obj1.style = items1;
  const obj2 = { size: null, guild: null };
  const str = intl.string(util.t["0ox7Hq"]);
  obj2.size = GuildIcon.GuildIconSizes.LARGE;
  obj2.guild = guild;
  const items2 = [
    React4(GuildIconDefault, obj2),
    React4(Text_Text.Text, {
      variant: "text-md/semibold",
      color: "mobile-text-heading-primary",
      style: tmp.guildInfo,
      children: guild.name,
    }),
  ];
  obj1.children = items2;
  items[1] = hasOwnProperty(View, obj1);
  obj.children = items;
  return hasOwnProperty(View, obj);
}
