// === Module 9126: InAppReportsGuildPreviewElement ===

// Module 9126 (InAppReportsGuildPreviewElement)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ColorUtils from "ColorUtils" /* 4456 */;
import Text_Text from "Text/Text" /* 4602 */;
import GuildIcon from "GuildIcon" /* 5635 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 7052 */;
import noop from "module_19" /* 19 */;

const GuildIconDefault = GuildIcon;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4606);
let createStyles = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, borderColor: null, title: null, guildContainer: null, guildInfo: null };
createStyles = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles.borderColor = createStyles;
createStyles.title = { lineHeight: 16, marginBottom: 8 };
createStyles.guildContainer = { flexDirection: "row", alignItems: "center", justifyContent: "flex-start", minHeight: 40, borderRadius: nativeDefault.radii.sm, borderWidth: 1, padding: 12 };
createStyles.guildInfo = { marginLeft: 8 };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsGuildPreviewElement.tsx");

export default function GuildPreview(guild) {
  guild = guild.guild;
  const tmp = closure_6();
  let obj = useTypeConsolidationTextTransform;
  const typeConsolidationEyebrow = obj.useTypeConsolidationEyebrow("InAppReportsGuildPreview", "text-xs/bold");
  let obj1 = ColorUtils;
  obj = { style: tmp.container, children: null };
  if (null != typeConsolidationEyebrow.style) {
    const items = [tmp.title, typeConsolidationEyebrow.style];
    let title = items;
  } else {
    title = tmp.title;
  }
  obj = { style: title, accessibilityRole: "header", variant: typeConsolidationEyebrow.variant, children: null };
  if (null != typeConsolidationEyebrow.style) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t["0ox7Hq"]);
  } else {
    const intl = util.intl;
    stringResult = intl.string(util.t["0ox7Hq"]).toUpperCase();
    const str = intl.string(util.t["0ox7Hq"]);
  }
  obj.children = stringResult;
  const items1 = [React4(Text_Text.Text, obj), ];
  obj1 = { style: null, children: null };
  const items2 = [tmp.guildContainer, { borderColor: obj1.hexWithOpacity(tmp.borderColor.color, 0.08) }];
  obj1.style = items2;
  const obj2 = { size: null, guild: null };
  const hexWithOpacityResult = obj1.hexWithOpacity(tmp.borderColor.color, 0.08);
  obj2.size = GuildIcon.GuildIconSizes.LARGE;
  obj2.guild = guild;
  const items3 = [React4(GuildIconDefault, obj2), React4(Text_Text.Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp.guildInfo, children: guild.name })];
  obj1.children = items3;
  items1[1] = hasOwnProperty(View, obj1);
  obj.children = items1;
  return hasOwnProperty(View, obj);
};