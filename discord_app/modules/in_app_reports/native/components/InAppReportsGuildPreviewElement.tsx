// === Module 13203: InAppReportsGuildPreviewElement ===

// Module 13203 (InAppReportsGuildPreviewElement)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import ColorUtils from "ColorUtils" /* 4606 */;
import Text_Text from "Text/Text" /* 4753 */;
import GuildIcon from "GuildIcon" /* 5803 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 7226 */;
import noop from "module_19" /* 19 */;

const GuildIconDefault = GuildIcon;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4757);
let obj2 = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, borderColor: { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY }, title: { lineHeight: 16, marginBottom: 8 }, guildContainer: null, guildInfo: null };
let obj3 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.guildContainer = { flexDirection: "row", alignItems: "center", justifyContent: "flex-start", minHeight: 40, borderRadius: nativeDefault.radii.sm, borderWidth: 1, padding: 12 };
obj2.guildInfo = { marginLeft: 8 };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsGuildPreviewElement.tsx");

export default function GuildPreview(guild) {
  guild = guild.guild;
  const tmp = closure_6();
  const typeConsolidationEyebrow = useTypeConsolidationTextTransform.useTypeConsolidationEyebrow("InAppReportsGuildPreview", "text-xs/bold");
  const obj3 = { style: tmp.container, children: null };
  if (null != typeConsolidationEyebrow.style) {
    const items = [tmp.title, typeConsolidationEyebrow.style];
    let title = items;
  } else {
    title = tmp.title;
  }
  const obj4 = { style: title, accessibilityRole: "header", variant: typeConsolidationEyebrow.variant, children: null };
  if (null != typeConsolidationEyebrow.style) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t["0ox7Hq"]);
  } else {
    const intl = util.intl;
    stringResult = intl.string(util.t["0ox7Hq"]).toUpperCase();
    const str = intl.string(util.t["0ox7Hq"]);
  }
  obj4.children = stringResult;
  const items1 = [React4(Text_Text.Text, obj4), ];
  const obj5 = { style: null, children: null };
  const items2 = [tmp.guildContainer, { borderColor: ColorUtils.hexWithOpacity(tmp.borderColor.color, 0.08) }];
  obj5.style = items2;
  const obj6 = { size: null, guild: null };
  const hexWithOpacityResult = ColorUtils.hexWithOpacity(tmp.borderColor.color, 0.08);
  obj6.size = GuildIcon.GuildIconSizes.LARGE;
  obj6.guild = guild;
  const items3 = [React4(GuildIconDefault, obj6), React4(Text_Text.Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp.guildInfo, children: guild.name })];
  obj5.children = items3;
  items1[1] = hasOwnProperty(View, obj5);
  obj3.children = items1;
  return hasOwnProperty(View, obj3);
};