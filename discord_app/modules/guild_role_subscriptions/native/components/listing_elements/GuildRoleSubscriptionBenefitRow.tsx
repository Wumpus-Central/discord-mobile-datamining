// discord_app/modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionBenefitRow.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import Button from "../../../../../design/void/native.tsx";
import parseRawEmojiObjectDefault from "../../../../emojis/UnicodeEmojis.tsx";
import Text from "../../../../../design/components/Text/native/Text.tsx";
import EmojiIconDefault from "../EmojiIcon.tsx";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../../../../stores/ChannelStore.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function BenefitRow(description) {
  description = description.description;
  ({ emojiId, guildId, title } = description);
  const tmp = callback3();
  let obj = { style: tmp.container, children: null };
  const items = [callback(EmojiIconDefault, { guildId, id: emojiId, size: 22, fontSize: 18 }), callback(Button.Spacer, { size: 16 }), ];
  obj = { style: tmp.textContainer, children: null };
  const items1 = [title, ];
  let tmp4Result = null;
  if (null != description) {
    obj = { style: null, variant: "text-sm/normal", color: "interactive-text-default", children: null };
    obj[0] = tmp.description;
    obj[3] = description;
    tmp4Result = callback(Text.Text, obj);
  }
  items1[1] = tmp4Result;
  obj[1] = items1;
  items[2] = closure_6(View, obj);
  obj[1] = items;
  return closure_6(View, obj);
}
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ container: { flexDirection: "row", justifyContent: "flex-start" }, textContainer: { flex: 1, justifyContent: "center" }, description: { marginTop: 2 }, channelTitle: { flexDirection: "row", alignItems: "center" }, channelIcon: { width: 16, height: 16, marginEnd: 8 } });
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionBenefitRow.tsx");

export const ChannelBenefitRow = function ChannelBenefitRow(benefit) {
  benefit = benefit.benefit;
  const tmp = callback3();
  let obj = benefit(589);
  const items = [closure_4];
  const items1 = [benefit.ref_id];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_4.getChannel(benefit.ref_id), items1);
  obj = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = benefit(1236).intl;
  obj[2] = "[" + intl.string(benefit(1236).t.bz1PZX) + "]";
  let tmp8 = callback(benefit(4376).Text, obj);
  if (null != stateFromStores) {
    obj = { style: null, children: null };
    obj[0] = tmp.channelTitle;
    obj1 = { style: null, size: null, source: null };
    obj1[0] = tmp.channelIcon;
    obj1[1] = tmp2(1297).Icon.Sizes.CUSTOM;
    obj1[2] = tmp2(4866).getChannelIcon(stateFromStores);
    const items2 = [tmp7(tmp2(1297).Icon, obj1), ];
    const obj2 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
    obj2[2] = tmp6;
    items2[1] = tmp7(tmp2(4376).Text, obj2);
    obj[1] = items2;
    tmp8 = callback2(View, obj);
    const tmp2Result = tmp2(4866);
  }
  if (null != benefit.emoji_id) {
    let str = benefit.emoji_id;
  } else {
    str = "";
    if (null != benefit.emoji_name) {
      str = parseRawEmojiObjectDefault.convertSurrogateToName(benefit.emoji_name, false);
      const tmp5Result = parseRawEmojiObjectDefault;
    }
  }
  return callback(BenefitRow, { emojiId: str, guildId: benefit.guildId, title: tmp8, description: benefit.description });
};
export const IntangibleBenefitRow = function IntangibleBenefitRow(benefit) {
  benefit = benefit.benefit;
  if (null != benefit.emoji_id) {
    let str = benefit.emoji_id;
  } else {
    str = "";
    if (null != benefit.emoji_name) {
      let obj = parseRawEmojiObjectDefault;
      str = obj.convertSurrogateToName(benefit.emoji_name, false);
    }
  }
  obj = { emojiId: str, guildId: benefit.guildId, title: tmp(Text.Text, obj), description: benefit.description };
  obj = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: benefit.name };
  return closure_5(BenefitRow, obj);
};