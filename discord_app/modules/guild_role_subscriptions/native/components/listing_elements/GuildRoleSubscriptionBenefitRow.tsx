// discord_app/modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionBenefitRow.tsx
import native from "../../../../../design/void/native.tsx";
import UnicodeEmojisDefault from "../../../../emojis/UnicodeEmojis.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import EmojiIconDefault from "../EmojiIcon.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";

require = fn;
function BenefitRow(description) {
  description = description.description;
  ({ emojiId, guildId, title } = description);
  const tmp = closure_7();
  let obj = { style: tmp.container, children: null };
  const items = [
    hasOwnProperty(EmojiIconDefault, { guildId, id: emojiId, size: 22, fontSize: 18 }),
    hasOwnProperty(native.Spacer, { size: 16 }),
  ];
  obj = { style: tmp.textContainer, children: null };
  const items1 = [title];
  let tmp4Result = null;
  if (null != description) {
    obj = {
      style: tmp.description,
      variant: "text-sm/normal",
      color: "interactive-text-default",
      children: description,
    };
    tmp4Result = hasOwnProperty(Text_Text.Text, obj);
  }
  items1[1] = tmp4Result;
  obj.children = items1;
  items[2] = timestampProducer(View, obj);
  obj.children = items;
  return timestampProducer(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({
  container: { flexDirection: "row", justifyContent: "flex-start" },
  textContainer: { flex: 1, justifyContent: "center" },
  description: { marginTop: 2 },
  channelTitle: { flexDirection: "row", alignItems: "center" },
  channelIcon: { width: 16, height: 16, marginEnd: 8 },
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionBenefitRow.tsx",
);

export const ChannelBenefitRow = function ChannelBenefitRow(benefit) {
  benefit = benefit.benefit;
  const tmp = closure_7();
  let obj = benefit(504);
  const items = [ChannelStore];
  const items1 = [benefit.ref_id];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(benefit.ref_id), items1);
  obj = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = benefit(1114).intl;
  obj.children = "[" + intl.string(benefit(1114).t.bz1PZX) + "]";
  let tmp8 = closure_5(benefit(4556).Text, obj);
  if (null != stateFromStores) {
    obj = { style: tmp.channelTitle, children: null };
    const obj1 = {
      style: tmp.channelIcon,
      size: tmp2(1178).Icon.Sizes.CUSTOM,
      source: tmp2(5028).getChannelIcon(stateFromStores),
    };
    const items2 = [closure_5(tmp2(1178).Icon, obj1)];
    const obj2 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: tmp6 };
    items2[1] = closure_5(tmp2(4556).Text, obj2);
    obj.children = items2;
    tmp8 = closure_6(View, obj);
    const tmp2Result = tmp2(5028);
  }
  if (null != benefit.emoji_id) {
    let str = benefit.emoji_id;
  } else {
    str = "";
    if (null != benefit.emoji_name) {
      str = UnicodeEmojisDefault.convertSurrogateToName(benefit.emoji_name, false);
      const tmp5Result = UnicodeEmojisDefault;
    }
  }
  return closure_5(BenefitRow, {
    emojiId: str,
    guildId: benefit.guildId,
    title: tmp8,
    description: benefit.description,
  });
};
export const IntangibleBenefitRow = function IntangibleBenefitRow(benefit) {
  benefit = benefit.benefit;
  if (null != benefit.emoji_id) {
    let str = benefit.emoji_id;
  } else {
    str = "";
    if (null != benefit.emoji_name) {
      let obj = UnicodeEmojisDefault;
      str = obj.convertSurrogateToName(benefit.emoji_name, false);
    }
  }
  obj = { emojiId: str, guildId: benefit.guildId, title: null, description: benefit.description };
  obj = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: benefit.name };
  obj.title = hasOwnProperty(Text_Text.Text, obj);
  return hasOwnProperty(BenefitRow, obj);
};
