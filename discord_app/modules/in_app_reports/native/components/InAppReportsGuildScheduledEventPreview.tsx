// === Module 13204: InAppReportsGuildScheduledEventPreview ===

// Module 13204 (InAppReportsGuildScheduledEventPreview)
import nativeDefault from "native" /* 576 */;
import GuildIconDefault from "GuildIcon" /* 5803 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2064 */;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4757);
let obj2 = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, borderColor: { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY }, title: { lineHeight: 16, marginBottom: 8 }, itemContainer: null, guildInfo: null, guildName: null, eventName: null };
let obj3 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.itemContainer = { minHeight: 40, borderRadius: nativeDefault.radii.sm, borderWidth: 1, padding: 8 };
obj2.guildInfo = { display: "flex", flexDirection: "row", alignItems: "center" };
obj2.guildName = { lineHeight: 18, marginStart: 8 };
obj2.eventName = { lineHeight: 20, marginTop: 8 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsGuildScheduledEventPreview.tsx");

export default function GuildScheduledEventPreview(event) {
  event = event.event;
  const tmp = closure_7();
  const items = [GuildStore];
  const stateFromStores = event(504).useStateFromStores(items, () => GuildStore.getGuild(event.guild_id));
  if (null == stateFromStores) {
    return null;
  } else {
    const obj2 = { style: tmp.container, children: null };
    const tmp2Result = tmp2(4606);
    const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "text-xs/bold", children: null };
    const intl = tmp2(1115).intl;
    obj3.children = intl.string(tmp2(1115).t.SDTOL7);
    const items1 = [closure_5(tmp2(4753).Text, obj3), ];
    const obj4 = { style: null, children: null };
    const items2 = [tmp.itemContainer, ];
    const obj5 = { borderColor: tmp2(4606).hexWithOpacity(tmp.borderColor.color, 0.08) };
    items2[1] = obj5;
    obj4.style = items2;
    const obj6 = { style: tmp.guildInfo, children: null };
    const obj7 = { guild: stateFromStores, size: null, selected: false };
    const hexWithOpacityResult = tmp2(4606).hexWithOpacity(tmp.borderColor.color, 0.08);
    obj7.size = tmp2(5803).GuildIconSizes.XXSMALL;
    const items3 = [closure_5(GuildIconDefault, obj7), ];
    const obj8 = { style: tmp.guildName, variant: "text-sm/medium", color: "text-default", children: stateFromStores.name };
    items3[1] = closure_5(tmp2(4753).Text, obj8);
    obj6.children = items3;
    const items4 = [closure_6(View, obj6), ];
    const obj9 = { style: tmp.eventName, variant: "text-md/bold", color: "mobile-text-heading-primary", children: event.name };
    items4[1] = closure_5(tmp2(4753).Text, obj9);
    obj4.children = items4;
    items1[1] = closure_6(View, obj4);
    obj2.children = items1;
    return closure_6(View, obj2);
  }
  const obj = event(504);
};