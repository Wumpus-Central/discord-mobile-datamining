// discord_app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitTableRow.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import GuildRoleSubscriptionTierTemplatesUtils from "../../tier_templates/GuildRoleSubscriptionTierTemplatesUtils.tsx";
import EmojiIconDefault from "EmojiIcon.tsx";
import GuildRoleSubscriptionBenefitUtils from "GuildRoleSubscriptionBenefitUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function ChannelBenefitLabel(benefit) {
  const tmp = closure_7();
  const channelWithTemplateFallback = GuildRoleSubscriptionTierTemplatesUtils.useChannelWithTemplateFallback(
    benefit.benefit.ref_id,
  );
  if (null == channelWithTemplateFallback) {
    const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
    const intl = util.intl;
    const _HermesInternal = HermesInternal;
    obj2.children = "[" + intl.string(util.t.bz1PZX) + "]";
    let tmp8 = hasOwnProperty(Text_Text.Text, obj2);
  } else {
    const obj3 = { style: tmp.channelLabel, children: null };
    const obj4 = { style: tmp.channelIcon, size: "xs", color: "interactive-text-default" };
    const items = [GuildRoleSubscriptionBenefitUtils.renderChannelIcon(channelWithTemplateFallback, obj4)];
    const obj5 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: tmp5 };
    items[1] = hasOwnProperty(Text_Text.Text, obj5);
    obj3.children = items;
    tmp8 = timestampProducer(View, obj3);
    const tmp2Result = GuildRoleSubscriptionBenefitUtils;
  }
  return tmp8;
}
const View = fn(17).View;
const constants = fn(17125).GuildRoleSubscriptionBenefitTypes;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5009);
let obj2 = {
  channelLabel: { flexDirection: "row", alignItems: "center" },
  channelIcon: { marginEnd: nativeDefault.space.PX_4 },
};
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitTableRow.tsx",
);

export default function GuildRoleSubscriptionBenefitTableRow(benefit) {
  benefit = benefit.benefit;
  ({ guildId, onPress, disabled, start, end } = benefit);
  if (benefit.ref_type === constants.CHANNEL) {
    const obj = { benefit };
    let name = hasOwnProperty(ChannelBenefitLabel, obj);
  } else {
    name = benefit.name;
  }
  const obj2 = {
    start,
    end,
    icon: null,
    label: null,
    subLabel: null,
    subLabelLineClamp: 3,
    arrow: true,
    onPress: null,
    disabled: null,
  };
  const obj3 = { guildId, id: null };
  const tmp4 = EmojiIconDefault;
  obj3.id = GuildRoleSubscriptionBenefitUtils.getBenefitEmojiId(benefit);
  obj2.icon = hasOwnProperty(tmp4, obj3);
  obj2.label = name;
  const description = benefit.description;
  obj2.subLabel = description;
  obj2.onPress = onPress;
  obj2.disabled = disabled;
  return hasOwnProperty(TableRow.TableRow, obj2);
}
