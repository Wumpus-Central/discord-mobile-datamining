// === Module 9038: InAppReportsGuildDiscoveryPreviewElement ===

// Module 9038 (InAppReportsGuildDiscoveryPreviewElement)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import GuildRecordUtils from "GuildRecordUtils" /* 1971 */;
import ColorUtils from "ColorUtils" /* 4409 */;
import Text_Text from "Text/Text" /* 4556 */;
import GuildIconDefault from "GuildIcon" /* 5584 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
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
  let obj = initialize;
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.title, accessibilityRole: "header", variant: "text-xs/bold", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.nTe4HC);
  const items1 = [hasOwnProperty(Text_Text.Text, obj), ];
  const obj1 = { style: null, children: null };
  const items2 = [tmp.itemContainer, { borderColor: obj1.hexWithOpacity(tmp.borderColor.color, 0.08) }];
  obj1.style = items2;
  const obj2 = { style: tmp.guildInfo, children: null };
  const obj3 = { style: tmp.guildIcon, guild: null, animate: null };
  const hexWithOpacityResult = obj1.hexWithOpacity(tmp.borderColor.color, 0.08);
  const tmp4 = GuildIconDefault;
  obj3.guild = GuildRecordUtils.fromClientDiscoverableGuild(guild);
  obj3.animate = !stateFromStores;
  const items3 = [hasOwnProperty(tmp4, obj3), hasOwnProperty(Text_Text.Text, { style: tmp.guildName, variant: "text-sm/medium", color: "text-default", children: guild.name })];
  obj2.children = items3;
  obj1.children = timestampProducer(View, obj2);
  items1[1] = hasOwnProperty(View, obj1);
  obj.children = items1;
  return timestampProducer(View, obj);
};