// === Module 9107: InAppReportsGuildDiscoveryPreviewElement ===

// Module 9107 (InAppReportsGuildDiscoveryPreviewElement)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import GuildRecordUtils from "GuildRecordUtils" /* 1971 */;
import ColorUtils from "ColorUtils" /* 4454 */;
import Text_Text from "Text/Text" /* 4601 */;
import GuildIconDefault from "GuildIcon" /* 5634 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 7031 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4597 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4605);
let createStyles = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, borderColor: null, title: null, itemContainer: null, guildInfo: null, guildName: null, guildIcon: null };
createStyles = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles.borderColor = createStyles;
createStyles.title = { textTransform: "uppercase", lineHeight: 16, marginBottom: 8 };
createStyles.itemContainer = { minHeight: 40, borderRadius: nativeDefault.radii.sm, borderWidth: 1, padding: 8 };
createStyles.guildInfo = { display: "flex", flexDirection: "row", alignItems: "center" };
createStyles.guildName = { lineHeight: 18, marginStart: 8 };
let size = { borderRadius: nativeDefault.radii.xs, width: 18, height: 18 };
createStyles.guildIcon = size;
let closure_7 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsGuildDiscoveryPreviewElement.tsx");

export default function GuildDiscoveryPreviewElement(guild) {
  guild = guild.guild;
  const tmp = closure_7();
  let obj = useTypeConsolidationTextTransform;
  const typeConsolidationEyebrow = obj.useTypeConsolidationEyebrow("InAppReportsGuildDiscoveryPreview", "text-xs/bold");
  let obj1 = initialize;
  const items = [AccessibilityStore];
  const stateFromStores = obj1.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj2 = ColorUtils;
  obj = { style: tmp.container, children: null };
  obj = { style: null, accessibilityRole: "header", variant: typeConsolidationEyebrow.variant, children: null };
  const items1 = [tmp.title, typeConsolidationEyebrow.style];
  obj.style = items1;
  const intl = util.intl;
  obj.children = intl.string(util.t.nTe4HC);
  const items2 = [hasOwnProperty(Text_Text.Text, obj), ];
  obj1 = { style: null, children: null };
  const items3 = [tmp.itemContainer, { borderColor: obj2.hexWithOpacity(tmp.borderColor.color, 0.08) }];
  obj1.style = items3;
  obj2 = { style: tmp.guildInfo, children: null };
  const obj3 = { style: tmp.guildIcon, guild: null, animate: null };
  const hexWithOpacityResult = obj2.hexWithOpacity(tmp.borderColor.color, 0.08);
  const tmp5 = GuildIconDefault;
  obj3.guild = GuildRecordUtils.fromClientDiscoverableGuild(guild);
  obj3.animate = !stateFromStores;
  const items4 = [hasOwnProperty(tmp5, obj3), hasOwnProperty(Text_Text.Text, { style: tmp.guildName, variant: "text-sm/medium", color: "text-default", children: guild.name })];
  obj2.children = items4;
  obj1.children = timestampProducer(View, obj2);
  items2[1] = hasOwnProperty(View, obj1);
  obj.children = items2;
  return timestampProducer(View, obj);
};