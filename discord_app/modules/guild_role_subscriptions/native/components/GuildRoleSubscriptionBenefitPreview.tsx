// discord_app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitPreview.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { GuildRoleSubscriptionBenefitTypes as closure_4 } from "MAX_SUBSCRIPTION_TIERS";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../../_runtime/10711_registerAsset.js";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { Button } from "../../../../design/void/native.tsx";
import { parseRawEmojiObject } from "../../../emojis/UnicodeEmojis.tsx";
import { getUsedTemplateChannelsForGuild } from "../../tier_templates/GuildRoleSubscriptionTierTemplatesUtils.tsx";
import { EmojiIcon } from "EmojiIcon.tsx";

let c5;
let closure_6;
const require = arg1;
function BaseBenefitRow(isInteractive) {
  let children;
  let contentStyle;
  let emoji;
  let guildId;
  let flag = isInteractive.isInteractive;
  ({ emoji, children, contentStyle, guildId } = isInteractive);
  if (flag === undefined) {
    flag = true;
  }
  const tmp = callback3();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.emojiContainer, children: callback(EmojiIcon, { guildId, id: emoji }) };
  const items = [callback(View, obj), , ];
  const items1 = [tmp.benefitColumn, contentStyle];
  items[1] = callback(View, { style: items1, children });
  let tmp4Result = true === flag;
  if (tmp4Result) {
    obj = { source: null };
    obj[0] = registerAsset;
    tmp4Result = callback(Button /* Button */.Icon, obj);
  }
  items[2] = tmp4Result;
  obj[1] = items;
  return closure_6(View, obj);
}
function DescriptiveBenefitRow(benefit) {
  let children;
  let guildId;
  let isInteractive;
  benefit = benefit.benefit;
  ({ children, guildId, isInteractive } = benefit);
  let tmp2 = null;
  if (null != benefit.description) {
    const obj = { style: null, variant: "text-sm/medium", color: "interactive-text-default", children: null };
    obj[0] = tmp.benefitDescription;
    obj[3] = benefit.description;
    tmp2 = callback(Text /* Text */.Text, obj);
  }
  let emoji = benefit.emoji_id;
  if (emoji == null) {
    let str = "";
    if (null != benefit.emoji_name) {
      str = parseRawEmojiObject.convertSurrogateToName(benefit.emoji_name, false);
      const obj2 = parseRawEmojiObject;
    }
    emoji = str;
  }
  children = [, ];
  children[0] = children;
  children[1] = tmp2;
  return callback2(BaseBenefitRow, { emoji, guildId, isInteractive, children });
}
function ChannelBenefitRow(benefit) {
  let guildId;
  let isInteractive;
  benefit = benefit.benefit;
  ({ guildId, isInteractive } = benefit);
  const tmp = callback3();
  let obj = getUsedTemplateChannelsForGuild /* getUsedTemplateChannelsForGuild */;
  const channelWithTemplateFallback = obj.useChannelWithTemplateFallback(benefit.ref_id);
  let channelIcon = null;
  if (null != channelWithTemplateFallback) {
    channelIcon = tmp2(4745).getChannelIcon(channelWithTemplateFallback);
    const tmp2Result = tmp2(4745);
  }
  if (null == channelWithTemplateFallback) {
    obj = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
    const intl = tmp2(1236).intl;
    const _HermesInternal = HermesInternal;
    obj[2] = "[" + intl.string(tmp2(1236).t.bz1PZX) + "]";
    let tmp9 = callback(tmp2(4281).Text, obj);
  } else {
    obj = { benefit: null, guildId: null, isInteractive: null, children: null };
    obj[0] = benefit;
    obj[1] = guildId;
    obj[2] = isInteractive;
    const obj1 = { style: null, children: null };
    obj1[0] = tmp.channelRow;
    const obj2 = { style: null, size: null, source: null };
    obj2[0] = tmp.channelIcon;
    obj2[1] = tmp2(1297).Icon.Sizes.CUSTOM;
    obj2[2] = channelIcon;
    const items = [callback(tmp2(1297).Icon, obj2), ];
    const obj3 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
    obj3[2] = tmp5;
    items[1] = callback(tmp2(4281).Text, obj3);
    obj1[1] = items;
    obj[3] = callback2(View, obj1);
    tmp9 = callback(DescriptiveBenefitRow, obj);
  }
  return tmp9;
}
function IntangibleBenefitRow(benefit) {
  benefit = benefit.benefit;
  obj = { benefit, guildId: benefit.guildId, isInteractive: benefit.isInteractive, children: callback(Text /* Text */.Text, obj) };
  obj = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: benefit.name };
  return callback(DescriptiveBenefitRow, obj);
}
function EmojiBenefitRow(benefit) {
  let guildId;
  let isInteractive;
  benefit = benefit.benefit;
  ({ guildId, isInteractive } = benefit);
  const tmp = callback3();
  let obj = { emoji: benefit.id, guildId, contentStyle: tmp.emojiRow, isInteractive, children: null };
  obj = { style: tmp.emojiColons, variant: "text-md/medium", color: "text-muted", children: ":" };
  const items = [callback(Text /* Text */.Text, obj), , ];
  obj = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: benefit.name };
  items[1] = callback(Text /* Text */.Text, obj);
  items[2] = callback(Text /* Text */.Text, { style: tmp.emojiColons, variant: "text-md/medium", color: "text-muted", children: ":" });
  obj[4] = items;
  return callback2(BaseBenefitRow, obj);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ container: { flexDirection: "row", justifyContent: "flex-start" }, emojiContainer: { width: 24, height: 24, alignSelf: "flex-start", alignItems: "center", justifyContent: "center", marginEnd: 16 }, benefitColumn: { flexDirection: "column", flexGrow: 1, flex: 1, alignItems: "flex-start", justifyContent: "center" }, benefitDescription: { flex: 1, marginTop: 2 }, channelRow: { flexDirection: "row", alignItems: "center", justifyContent: "center" }, channelIcon: { width: 16, height: 16, marginEnd: 8 }, emojiRow: { flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }, emojiColons: { paddingHorizontal: 2 } });
const result = require("MAX_SUBSCRIPTION_TIERS").fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitPreview.tsx");

export const GuildRoleSubscriptionBenefitPreview = function GuildRoleSubscriptionBenefitPreview(arg0) {
  let benefit;
  let guildId;
  let isInteractive;
  ({ benefit, guildId, isInteractive } = arg0);
  if ("roles" in benefit) {
    let obj = { benefit: null, guildId: null, isInteractive: null };
    obj[0] = benefit;
    obj[1] = guildId;
    obj[2] = isInteractive;
    let tmp4 = callback(EmojiBenefitRow, obj);
  } else if (benefit.ref_type === constants.CHANNEL) {
    obj = { benefit: null, guildId: null, isInteractive: null };
    obj[0] = benefit;
    obj[1] = guildId;
    obj[2] = isInteractive;
    tmp4 = callback(ChannelBenefitRow, obj);
  } else {
    obj = { benefit: null, guildId: null, isInteractive: null };
    obj[0] = benefit;
    obj[1] = guildId;
    obj[2] = isInteractive;
    tmp4 = callback(IntangibleBenefitRow, obj);
  }
  return tmp4;
};