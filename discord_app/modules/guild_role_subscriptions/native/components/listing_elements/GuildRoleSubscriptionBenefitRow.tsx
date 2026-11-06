// === Module 17493: GuildRoleSubscriptionBenefitRow ===

// Module 17493 (GuildRoleSubscriptionBenefitRow)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import Text_Text from "Text/Text" /* 5781 */;
import useChannelNameDefault from "useChannelName" /* 5806 */;
import EmojiIconDefault from "EmojiIcon" /* 17491 */;
import GuildRoleSubscriptionBenefitUtils from "GuildRoleSubscriptionBenefitUtils" /* 17494 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 5019 */;

require = fn;
function BenefitRow(description) {
  description = description.description;
  ({ emojiId, guildId, title } = description);
  const tmp = closure_7();
  const obj = { style: tmp.container, children: null };
  items = [hasOwnProperty(EmojiIconDefault, { guildId, id: emojiId, size: 22, fontSize: 18 }), hasOwnProperty(native.Spacer, { size: 16 }), ];
  const obj2 = { style: tmp.textContainer, children: null };
  const items1 = [title, ];
  let tmp4Result = null;
  if (null != description) {
    const obj3 = { style: tmp.description, variant: "body-sm/normal", color: "interactive-text-default", children: description };
    tmp4Result = hasOwnProperty(Text_Text.Text, obj3);
  }
  items1[1] = tmp4Result;
  obj2.children = items1;
  items[2] = timestampProducer(View, obj2);
  obj.children = items;
  return timestampProducer(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5170);
let obj2 = { container: { flexDirection: "row", justifyContent: "flex-start" }, textContainer: { flex: 1, justifyContent: "center" }, description: { marginTop: 2 }, channelTitle: { flexDirection: "row", alignItems: "center" }, channelIcon: { marginEnd: nativeDefault.space.PX_8 } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionBenefitRow.tsx");

export function ChannelBenefitRow(benefit) {
  benefit = benefit.benefit;
  const tmp = closure_7();
  items = [ChannelStore];
  const items1 = [benefit.ref_id];
  const stateFromStores = benefit(504).useStateFromStores(items, () => ChannelStore.getChannel(benefit.ref_id), items1);
  const obj = benefit(504);
  const obj2 = { variant: "body-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = benefit(1113).intl;
  obj2.children = "[" + intl.string(benefit(1113).t.bz1PZX) + "]";
  let tmp7 = closure_5(benefit(5781).Text, obj2);
  if (null != stateFromStores) {
    const obj3 = { style: tmp.channelTitle, children: null };
    const obj4 = { style: tmp.channelIcon, size: "xs", color: "interactive-text-default" };
    const items2 = [tmp2(17494).renderChannelIcon(stateFromStores, obj4), ];
    const obj5 = { variant: "body-md/medium", color: "mobile-text-heading-primary", children: tmp5 };
    items2[1] = closure_5(tmp2(5781).Text, obj5);
    obj3.children = items2;
    tmp7 = closure_6(View, obj3);
    const tmp2Result = tmp2(17494);
  }
  const obj6 = { emojiId: null, guildId: null, title: null, description: null };
  tmp5 = useChannelNameDefault(stateFromStores);
  obj6.emojiId = benefit(17494).getBenefitEmojiId(benefit);
  obj6.guildId = benefit.guildId;
  obj6.title = tmp7;
  obj6.description = benefit.description;
  return closure_5(BenefitRow, obj6);
}
export function IntangibleBenefitRow(benefit) {
  benefit = benefit.benefit;
  const obj = { emojiId: GuildRoleSubscriptionBenefitUtils.getBenefitEmojiId(benefit), guildId: benefit.guildId, title: hasOwnProperty(Text_Text.Text, { variant: "body-md/medium", color: "mobile-text-heading-primary", children: benefit.name }), description: benefit.description };
  return hasOwnProperty(BenefitRow, obj);
}