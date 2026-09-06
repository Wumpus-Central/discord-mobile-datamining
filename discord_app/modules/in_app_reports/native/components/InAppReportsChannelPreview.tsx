// === Module 9035: InAppReportsChannelPreview ===

// Module 9035 (InAppReportsChannelPreview)
import nativeDefault from "native" /* 576 */;
import GuildIconDefault from "GuildIcon" /* 5584 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, borderColor: null, title: null, itemContainer: null, guildInfo: null, guildName: null, topic: null };
createStyles = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles.borderColor = createStyles;
createStyles.title = { lineHeight: 16, marginBottom: 8 };
createStyles.itemContainer = { minHeight: 40, borderRadius: nativeDefault.radii.sm, borderWidth: 1, padding: 8 };
createStyles.guildInfo = { display: "flex", flexDirection: "row", alignItems: "center" };
createStyles.guildName = { lineHeight: 18, marginStart: 8 };
createStyles.topic = { lineHeight: 20, marginTop: 8 };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsChannelPreview.tsx");

export default function ChannelPreview(stageInstance) {
  stageInstance = stageInstance.stageInstance;
  const tmp = closure_7();
  let obj = stageInstance(504);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(stageInstance.guild_id));
  if (null != stateFromStores) {
    if (null != stageInstance) {
      obj = { style: tmp.container, children: null };
      const tmp2Result = tmp2(4409);
      obj = { style: tmp.title, accessibilityRole: "header", variant: "text-xs/bold", children: null };
      const intl = tmp2(1114).intl;
      obj.children = intl.string(tmp2(1114).t.InbJ8x);
      const items1 = [closure_5(tmp2(4556).Text, obj), ];
      const obj1 = { style: null, children: null };
      const items2 = [tmp.itemContainer, ];
      const obj2 = { borderColor: tmp2(4409).hexWithOpacity(tmp.borderColor.color, 0.08) };
      items2[1] = obj2;
      obj1.style = items2;
      const obj3 = { style: tmp.guildInfo, children: null };
      const obj4 = { guild: stateFromStores, size: null, selected: false };
      const hexWithOpacityResult = tmp2(4409).hexWithOpacity(tmp.borderColor.color, 0.08);
      obj4.size = tmp2(5584).GuildIconSizes.XXSMALL;
      const items3 = [closure_5(GuildIconDefault, obj4), ];
      const obj5 = { style: tmp.guildName, variant: "text-sm/medium", color: "text-default", children: stateFromStores.name };
      items3[1] = closure_5(tmp2(4556).Text, obj5);
      obj3.children = items3;
      const items4 = [closure_6(View, obj3), ];
      const obj6 = { style: tmp.topic, variant: "text-md/bold", color: "mobile-text-heading-primary", children: stageInstance.topic };
      items4[1] = closure_5(tmp2(4556).Text, obj6);
      obj1.children = items4;
      items1[1] = closure_6(View, obj1);
      obj.children = items1;
      return closure_6(View, obj);
    }
  }
  return null;
};