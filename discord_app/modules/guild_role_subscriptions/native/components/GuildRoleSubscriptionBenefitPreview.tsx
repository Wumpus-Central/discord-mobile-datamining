// discord_app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitPreview.tsx
import native from "../../../../design/void/native.tsx";
import UnicodeEmojisDefault from "../../../emojis/UnicodeEmojis.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import _modDef9939 from "../../../../../_runtime/metro/09939__.js";
import GuildRoleSubscriptionTierTemplatesUtils from "../../tier_templates/GuildRoleSubscriptionTierTemplatesUtils.tsx";
import EmojiIconDefault from "EmojiIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function BaseBenefitRow(isInteractive) {
  let flag = isInteractive.isInteractive;
  ({ emoji, children, contentStyle, guildId } = isInteractive);
  if (flag === undefined) {
    flag = true;
  }
  const tmp = closure_7();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.emojiContainer, children: hasOwnProperty(EmojiIconDefault, { guildId, id: emoji }) };
  const items = [hasOwnProperty(View, obj), ,];
  obj = { style: null, children };
  const items1 = [tmp.benefitColumn, contentStyle];
  obj.style = items1;
  items[1] = hasOwnProperty(View, obj);
  let tmp4Result = true === flag;
  if (tmp4Result) {
    const obj1 = { source: _modDef9939 };
    tmp4Result = hasOwnProperty(native.Icon, obj1);
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
    let obj = {
      style: tmp.benefitDescription,
      variant: "text-sm/medium",
      color: "interactive-text-default",
      children: benefit.description,
    };
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
  obj = { emoji: emoji_id, guildId, isInteractive, children: null };
  const items = [children, tmp2];
  obj.children = items;
  return timestampProducer(BaseBenefitRow, obj);
}
function ChannelBenefitRow(benefit) {
  benefit = benefit.benefit;
  ({ guildId, isInteractive } = benefit);
  const tmp = closure_7();
  let obj = GuildRoleSubscriptionTierTemplatesUtils;
  const channelWithTemplateFallback = obj.useChannelWithTemplateFallback(benefit.ref_id);
  let channelIcon = null;
  if (null != channelWithTemplateFallback) {
    channelIcon = tmp2(5028).getChannelIcon(channelWithTemplateFallback);
    const tmp2Result = tmp2(5028);
  }
  if (null == channelWithTemplateFallback) {
    obj = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
    const intl = tmp2(1114).intl;
    const _HermesInternal = HermesInternal;
    obj.children = "[" + intl.string(tmp2(1114).t.bz1PZX) + "]";
    let tmp9 = hasOwnProperty(tmp2(4556).Text, obj);
  } else {
    obj = { benefit, guildId, isInteractive, children: null };
    const obj1 = { style: tmp.channelRow, children: null };
    const obj2 = { style: tmp.channelIcon, size: tmp2(1178).Icon.Sizes.CUSTOM, source: channelIcon };
    const items = [hasOwnProperty(tmp2(1178).Icon, obj2)];
    const obj3 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp5 };
    items[1] = hasOwnProperty(tmp2(4556).Text, obj3);
    obj1.children = items;
    obj.children = timestampProducer(View, obj1);
    tmp9 = hasOwnProperty(DescriptiveBenefitRow, obj);
  }
  return tmp9;
}
function IntangibleBenefitRow(benefit) {
  benefit = benefit.benefit;
  let obj = { benefit, guildId: benefit.guildId, isInteractive: benefit.isInteractive, children: null };
  obj = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: benefit.name };
  obj.children = hasOwnProperty(Text_Text.Text, obj);
  return hasOwnProperty(DescriptiveBenefitRow, obj);
}
function EmojiBenefitRow(benefit) {
  benefit = benefit.benefit;
  ({ guildId, isInteractive } = benefit);
  const tmp = closure_7();
  let obj = { emoji: benefit.id, guildId, contentStyle: tmp.emojiRow, isInteractive, children: null };
  obj = { style: tmp.emojiColons, variant: "text-md/medium", color: "text-muted", children: ":" };
  const items = [hasOwnProperty(Text_Text.Text, obj), ,];
  obj = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: benefit.name };
  items[1] = hasOwnProperty(Text_Text.Text, obj);
  items[2] = hasOwnProperty(Text_Text.Text, {
    style: tmp.emojiColons,
    variant: "text-md/medium",
    color: "text-muted",
    children: ":",
  });
  obj.children = items;
  return timestampProducer(BaseBenefitRow, obj);
}
const View = fn(17).View;
const constants = fn(15205).GuildRoleSubscriptionBenefitTypes;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({
  container: { flexDirection: "row", justifyContent: "flex-start" },
  emojiContainer: {
    width: 24,
    height: 24,
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "center",
    marginEnd: 16,
  },
  benefitColumn: { flexDirection: "column", flexGrow: 1, flex: 1, alignItems: "flex-start", justifyContent: "center" },
  benefitDescription: { flex: 1, marginTop: 2 },
  channelRow: { flexDirection: "row", alignItems: "center", justifyContent: "center" },
  channelIcon: { width: 16, height: 16, marginEnd: 8 },
  emojiRow: { flexDirection: "row", justifyContent: "flex-start", alignItems: "center" },
  emojiColons: { paddingHorizontal: 2 },
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitPreview.tsx",
);

export const GuildRoleSubscriptionBenefitPreview = function GuildRoleSubscriptionBenefitPreview(arg0) {
  ({ benefit, guildId, isInteractive } = arg0);
  if ("roles" in benefit) {
    let obj = { benefit, guildId, isInteractive };
    let tmp4 = hasOwnProperty(EmojiBenefitRow, obj);
  } else if (benefit.ref_type === constants.CHANNEL) {
    obj = { benefit, guildId, isInteractive };
    tmp4 = hasOwnProperty(ChannelBenefitRow, obj);
  } else {
    obj = { benefit, guildId, isInteractive };
    tmp4 = hasOwnProperty(IntangibleBenefitRow, obj);
  }
  return tmp4;
};
