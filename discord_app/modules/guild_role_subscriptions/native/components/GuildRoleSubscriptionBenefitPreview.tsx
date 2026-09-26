// === Module 17584: GuildRoleSubscriptionBenefitPreview ===

// Module 17584 (GuildRoleSubscriptionBenefitPreview)
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4483 */;
import Text_Text from "Text/Text" /* 4832 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5335 */;
import _modDef9396 from "module_9396" /* 9396 */;
import GuildRoleSubscriptionTierTemplatesUtils from "GuildRoleSubscriptionTierTemplatesUtils" /* 14780 */;
import EmojiIconDefault from "EmojiIcon" /* 14787 */;
import noop from "module_19" /* 19 */;

require = fn;
function BaseBenefitRow(isInteractive) {
  let flag = isInteractive.isInteractive;
  ({ emoji, children, contentStyle, guildId } = isInteractive);
  if (flag === undefined) {
    flag = true;
  }
  const tmp = closure_7();
  const obj = { style: tmp.container, children: null };
  const items = [hasOwnProperty(View, { style: tmp.emojiContainer, children: hasOwnProperty(EmojiIconDefault, { guildId, id: emoji }) }), , ];
  const obj3 = { style: null, children };
  const items1 = [tmp.benefitColumn, contentStyle];
  obj3.style = items1;
  items[1] = hasOwnProperty(View, obj3);
  let tmp4Result = true === flag;
  if (tmp4Result) {
    const obj4 = { source: _modDef9396 };
    tmp4Result = hasOwnProperty(native.Icon, obj4);
  }
  items[2] = tmp4Result;
  obj.children = items;
  return timestampProducer(View, obj);
}
function DescriptiveBenefitRow(benefit) {
  benefit = benefit.benefit;
  ({ children, guildId, isInteractive } = benefit);
  let tmp2 = null;
  if (null != benefit.description) {
    const obj = { style: tmp.benefitDescription, variant: "text-sm/medium", color: "interactive-text-default", children: benefit.description };
    tmp2 = hasOwnProperty(Text_Text.Text, obj);
  }
  let emoji_id = benefit.emoji_id;
  if (emoji_id == null) {
    let str = "";
    if (null != benefit.emoji_name) {
      str = UnicodeEmojisDefault.convertSurrogateToName(benefit.emoji_name, false);
    }
    emoji_id = str;
  }
  const obj3 = { emoji: emoji_id, guildId, isInteractive, children: null };
  const items = [children, tmp2];
  obj3.children = items;
  return timestampProducer(BaseBenefitRow, obj3);
}
function ChannelBenefitRow(benefit) {
  benefit = benefit.benefit;
  ({ guildId, isInteractive } = benefit);
  const tmp = closure_7();
  const channelWithTemplateFallback = GuildRoleSubscriptionTierTemplatesUtils.useChannelWithTemplateFallback(benefit.ref_id);
  let channelIcon = null;
  if (null != channelWithTemplateFallback) {
    channelIcon = utils_ChannelUtils.getChannelIcon(channelWithTemplateFallback);
    const tmp2Result = utils_ChannelUtils;
  }
  if (null == channelWithTemplateFallback) {
    const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
    const intl = util.intl;
    const _HermesInternal = HermesInternal;
    obj2.children = "[" + intl.string(util.t.bz1PZX) + "]";
    let tmp9 = hasOwnProperty(Text_Text.Text, obj2);
  } else {
    const obj3 = { benefit, guildId, isInteractive, children: null };
    const obj4 = { style: tmp.channelRow, children: null };
    const obj5 = { style: tmp.channelIcon, size: native.Icon.Sizes.CUSTOM, source: channelIcon };
    const items = [hasOwnProperty(native.Icon, obj5), ];
    const obj6 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp5 };
    items[1] = hasOwnProperty(Text_Text.Text, obj6);
    obj4.children = items;
    obj3.children = timestampProducer(View, obj4);
    tmp9 = hasOwnProperty(DescriptiveBenefitRow, obj3);
  }
  return tmp9;
}
function IntangibleBenefitRow(benefit) {
  benefit = benefit.benefit;
  const obj = { benefit, guildId: benefit.guildId, isInteractive: benefit.isInteractive, children: hasOwnProperty(Text_Text.Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: benefit.name }) };
  return hasOwnProperty(DescriptiveBenefitRow, obj);
}
function EmojiBenefitRow(benefit) {
  benefit = benefit.benefit;
  ({ guildId, isInteractive } = benefit);
  const tmp = closure_7();
  const obj = { emoji: benefit.id, guildId, contentStyle: tmp.emojiRow, isInteractive, children: null };
  const items = [hasOwnProperty(Text_Text.Text, { style: tmp.emojiColons, variant: "text-md/medium", color: "text-muted", children: ":" }), hasOwnProperty(Text_Text.Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: benefit.name }), hasOwnProperty(Text_Text.Text, { style: tmp.emojiColons, variant: "text-md/medium", color: "text-muted", children: ":" })];
  obj.children = items;
  return timestampProducer(BaseBenefitRow, obj);
}
const View = fn(17).View;
const constants = fn(14752).GuildRoleSubscriptionBenefitTypes;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4836);
let closure_7 = createStyles.createStyles({ container: { flexDirection: "row", justifyContent: "flex-start" }, emojiContainer: { width: 24, height: 24, alignSelf: "flex-start", alignItems: "center", justifyContent: "center", marginEnd: 16 }, benefitColumn: { flexDirection: "column", flexGrow: 1, flex: 1, alignItems: "flex-start", justifyContent: "center" }, benefitDescription: { flex: 1, marginTop: 2 }, channelRow: { flexDirection: "row", alignItems: "center", justifyContent: "center" }, channelIcon: { width: 16, height: 16, marginEnd: 8 }, emojiRow: { flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }, emojiColons: { paddingHorizontal: 2 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitPreview.tsx");

export const GuildRoleSubscriptionBenefitPreview = function GuildRoleSubscriptionBenefitPreview(arg0) {
  ({ benefit, guildId, isInteractive } = arg0);
  if ("roles" in benefit) {
    const obj2 = { benefit, guildId, isInteractive };
    let tmp4 = hasOwnProperty(EmojiBenefitRow, obj2);
  } else if (benefit.ref_type === constants.CHANNEL) {
    const obj3 = { benefit, guildId, isInteractive };
    tmp4 = hasOwnProperty(ChannelBenefitRow, obj3);
  } else {
    const obj = { benefit, guildId, isInteractive };
    tmp4 = hasOwnProperty(IntangibleBenefitRow, obj);
  }
  return tmp4;
};