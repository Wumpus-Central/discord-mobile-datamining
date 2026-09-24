// === Module 13296: InAppReportsGuildDiscoveryPreviewElement ===

// Module 13296 (InAppReportsGuildDiscoveryPreviewElement)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import GuildRecordUtils from "GuildRecordUtils" /* 2058 */;
import ColorUtils from "ColorUtils" /* 4678 */;
import Text_Text from "Text/Text" /* 4825 */;
import GuildIconDefault from "GuildIcon" /* 5889 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 7312 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4821 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4829);
let obj2 = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, borderColor: { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY }, title: { textTransform: "uppercase", lineHeight: 16, marginBottom: 8 }, itemContainer: null, guildInfo: null, guildName: null, guildIcon: null };
let obj3 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.itemContainer = { minHeight: 40, borderRadius: nativeDefault.radii.sm, borderWidth: 1, padding: 8 };
obj2.guildInfo = { display: "flex", flexDirection: "row", alignItems: "center" };
obj2.guildName = { lineHeight: 18, marginStart: 8 };
let size = { borderRadius: nativeDefault.radii.xs, width: 18, height: 18 };
obj2.guildIcon = size;
let closure_7 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsGuildDiscoveryPreviewElement.tsx");

export default function GuildDiscoveryPreviewElement(guild) {
  guild = guild.guild;
  const tmp = closure_7();
  const typeConsolidationEyebrow = useTypeConsolidationTextTransform.useTypeConsolidationEyebrow("InAppReportsGuildDiscoveryPreview", "text-xs/bold");
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj4 = { style: tmp.container, children: null };
  const obj5 = { style: null, accessibilityRole: "header", variant: typeConsolidationEyebrow.variant, children: null };
  const items1 = [tmp.title, typeConsolidationEyebrow.style];
  obj5.style = items1;
  const intl = util.intl;
  obj5.children = intl.string(util.t.nTe4HC);
  const items2 = [hasOwnProperty(Text_Text.Text, obj5), ];
  const obj6 = { style: null, children: null };
  const items3 = [tmp.itemContainer, { borderColor: ColorUtils.hexWithOpacity(tmp.borderColor.color, 0.08) }];
  obj6.style = items3;
  const obj7 = { style: tmp.guildInfo, children: null };
  const obj8 = { style: tmp.guildIcon, guild: null, animate: null };
  const hexWithOpacityResult = ColorUtils.hexWithOpacity(tmp.borderColor.color, 0.08);
  const tmp5 = GuildIconDefault;
  obj8.guild = GuildRecordUtils.fromClientDiscoverableGuild(guild);
  obj8.animate = !stateFromStores;
  const items4 = [hasOwnProperty(tmp5, obj8), hasOwnProperty(Text_Text.Text, { style: tmp.guildName, variant: "text-sm/medium", color: "text-default", children: guild.name })];
  obj7.children = items4;
  obj6.children = timestampProducer(View, obj7);
  items2[1] = hasOwnProperty(View, obj6);
  obj4.children = items2;
  return timestampProducer(View, obj4);
};