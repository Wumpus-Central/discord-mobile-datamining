import "noop";
import { View } from "get ActivityIndicator";
import ensureGuildLoaded from "ensureGuildLoaded";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
function BenefitRow(description) {
  let emojiId;
  let guildId;
  let title;
  description = description.description;
  ({ emojiId, guildId, title } = description);
  const tmp = callback3();
  let obj = { style: tmp.container, children: null };
  const items = [callback(importDefault(14376), { guildId, id: emojiId, size: 22, fontSize: 18 }), callback(require(1297) /* Button */.Spacer, { size: 16 }), ];
  obj = { style: tmp.textContainer, children: null };
  const items1 = [title, ];
  let tmp4Result = null;
  if (null != description) {
    obj = { style: null, variant: "text-sm/normal", color: "interactive-text-default", children: null };
    obj[0] = tmp.description;
    obj[3] = description;
    tmp4Result = callback(require(4281) /* Text */.Text, obj);
  }
  items1[1] = tmp4Result;
  obj[1] = items1;
  items[2] = closure_6(View, obj);
  obj[1] = items;
  return closure_6(View, obj);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ container: { flexDirection: "row", justifyContent: "flex-start" }, textContainer: { flex: 1, justifyContent: "center" }, description: { marginTop: 2 }, channelTitle: { flexDirection: "row", alignItems: "center" }, channelIcon: { width: 16, height: 16, marginEnd: 8 } });
const result = require("ensureGuildLoaded").fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionBenefitRow.tsx");

export const ChannelBenefitRow = function ChannelBenefitRow(benefit) {
  benefit = benefit.benefit;
  const tmp = callback3();
  let obj = benefit(589);
  const items = [ensureGuildLoaded];
  const items1 = [benefit.ref_id];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getChannel(benefit.ref_id), items1);
  obj = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = benefit(1236).intl;
  obj[2] = "[" + intl.string(benefit(1236).t.bz1PZX) + "]";
  let tmp8 = callback(benefit(4281).Text, obj);
  if (null != stateFromStores) {
    obj = { style: null, children: null };
    obj[0] = tmp.channelTitle;
    const obj1 = { style: null, size: null, source: null };
    obj1[0] = tmp.channelIcon;
    obj1[1] = tmp2(1297).Icon.Sizes.CUSTOM;
    obj1[2] = tmp2(4745).getChannelIcon(stateFromStores);
    const items2 = [tmp7(tmp2(1297).Icon, obj1), ];
    const obj2 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
    obj2[2] = tmp6;
    items2[1] = tmp7(tmp2(4281).Text, obj2);
    obj[1] = items2;
    tmp8 = callback2(View, obj);
    const tmp2Result = tmp2(4745);
  }
  if (null != benefit.emoji_id) {
    let str = benefit.emoji_id;
  } else {
    str = "";
    if (null != benefit.emoji_name) {
      str = importDefault(3926).convertSurrogateToName(benefit.emoji_name, false);
      const tmp5Result = importDefault(3926);
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
      let obj = importDefault(3926);
      str = obj.convertSurrogateToName(benefit.emoji_name, false);
    }
  }
  obj = { emojiId: str, guildId: benefit.guildId, title: tmp(require(4281) /* Text */.Text, obj), description: benefit.description };
  obj = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: benefit.name };
  return closure_5(BenefitRow, obj);
};