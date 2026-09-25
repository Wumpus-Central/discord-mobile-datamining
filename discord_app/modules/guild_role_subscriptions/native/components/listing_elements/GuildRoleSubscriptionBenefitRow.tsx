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
  const obj = { style: tmp.container, children: null };
  const items = [
    hasOwnProperty(EmojiIconDefault, { guildId, id: emojiId, size: 22, fontSize: 18 }),
    hasOwnProperty(native.Spacer, { size: 16 }),
  ];
  const obj2 = { style: tmp.textContainer, children: null };
  const items1 = [title];
  let tmp4Result = null;
  if (null != description) {
    const obj3 = {
      style: tmp.description,
      variant: "text-sm/normal",
      color: "interactive-text-default",
      children: description,
    };
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
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4829);
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
  const items = [ChannelStore];
  const items1 = [benefit.ref_id];
  const stateFromStores = benefit(504).useStateFromStores(items, () => ChannelStore.getChannel(benefit.ref_id), items1);
  const obj = benefit(504);
  const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = benefit(1115).intl;
  obj2.children = "[" + intl.string(benefit(1115).t.bz1PZX) + "]";
  let tmp8 = closure_5(benefit(4825).Text, obj2);
  if (null != stateFromStores) {
    const obj3 = { style: tmp.channelTitle, children: null };
    const obj4 = {
      style: tmp.channelIcon,
      size: tmp2(1177).Icon.Sizes.CUSTOM,
      source: tmp2(5328).getChannelIcon(stateFromStores),
    };
    const items2 = [closure_5(tmp2(1177).Icon, obj4)];
    const obj5 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: tmp6 };
    items2[1] = closure_5(tmp2(4825).Text, obj5);
    obj3.children = items2;
    tmp8 = closure_6(View, obj3);
    const tmp2Result = tmp2(5328);
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
      str = UnicodeEmojisDefault.convertSurrogateToName(benefit.emoji_name, false);
    }
  }
  const obj2 = {
    emojiId: str,
    guildId: benefit.guildId,
    title: hasOwnProperty(Text_Text.Text, {
      variant: "text-md/medium",
      color: "mobile-text-heading-primary",
      children: benefit.name,
    }),
    description: benefit.description,
  };
  return hasOwnProperty(BenefitRow, obj2);
};
