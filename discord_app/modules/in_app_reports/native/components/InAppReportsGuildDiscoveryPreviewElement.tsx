// === Module 15405: InAppReportsGuildDiscoveryPreviewElement ===

// Module 15405 (InAppReportsGuildDiscoveryPreviewElement)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import GuildRecordUtils from "GuildRecordUtils" /* 5006 */;
import ColorUtils from "ColorUtils" /* 5140 */;
import Text_Text from "Text/Text" /* 5763 */;
import GuildIconDefault from "GuildIcon" /* 7101 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5144 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5143);
let obj2 = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, borderColor: { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY }, title: { lineHeight: 16, marginBottom: 8 }, itemContainer: null, guildInfo: null, guildName: null, guildIcon: null };
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
  items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { style: tmp.title, accessibilityRole: "header", variant: "body-sm/medium", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t.nTe4HC);
  const items1 = [hasOwnProperty(Text_Text.Text, obj4), ];
  const obj5 = { style: null, children: null };
  const items2 = [tmp.itemContainer, { borderColor: ColorUtils.hexWithOpacity(tmp.borderColor.color, 0.08) }];
  obj5.style = items2;
  const obj6 = { style: tmp.guildInfo, children: null };
  const obj7 = { style: tmp.guildIcon, guild: null, animate: null };
  const hexWithOpacityResult = ColorUtils.hexWithOpacity(tmp.borderColor.color, 0.08);
  const tmp4 = GuildIconDefault;
  obj7.guild = GuildRecordUtils.fromClientDiscoverableGuild(guild);
  obj7.animate = !stateFromStores;
  const items3 = [hasOwnProperty(tmp4, obj7), hasOwnProperty(Text_Text.Text, { style: tmp.guildName, variant: "body-sm/medium", color: "text-default", children: guild.name })];
  obj6.children = items3;
  obj5.children = timestampProducer(View, obj6);
  items1[1] = hasOwnProperty(View, obj5);
  obj3.children = items1;
  return timestampProducer(View, obj3);
};