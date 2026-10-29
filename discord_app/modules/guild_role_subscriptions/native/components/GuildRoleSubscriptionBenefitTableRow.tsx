// discord_app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitTableRow.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import GuildRoleSubscriptionTierTemplatesUtils from "../../tier_templates/GuildRoleSubscriptionTierTemplatesUtils.tsx";
import EmojiIconDefault from "EmojiIcon.tsx";
import GuildRoleSubscriptionBenefitUtils from "GuildRoleSubscriptionBenefitUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const constants = fn(17071).GuildRoleSubscriptionBenefitTypes;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5005);
let obj2 = {
  channelLabel: { flexDirection: "row", alignItems: "center" },
  channelIcon: { marginEnd: nativeDefault.space.PX_4 },
};
let closure_7 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ChannelBenefitLabel(benefit) {
      const cResult = c.c(10);
      const tmp4 = closure_7();
      const channelWithTemplateFallback = GuildRoleSubscriptionTierTemplatesUtils.useChannelWithTemplateFallback(
        benefit.benefit.ref_id,
      );
      const tmp6 = useChannelNameDefault(channelWithTemplateFallback);
      if (null == channelWithTemplateFallback) {
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
          const intl = util.intl;
          const _HermesInternal = HermesInternal;
          obj3.children = "[" + intl.string(util.t.bz1PZX) + "]";
          const tmp19 = hasOwnProperty(Text_Text.Text, obj3);
          cResult[0] = tmp19;
          let first = tmp19;
        } else {
          first = cResult[0];
        }
        return first;
      } else {
        if (cResult[1] === channelWithTemplateFallback) {
          if (cResult[2] === tmp4.channelIcon) {
            let tmp7 = cResult[3];
          }
          if (cResult[4] !== tmp6) {
            const obj4 = {
              variant: "text-md/semibold",
              color: "mobile-text-heading-primary",
              lineClamp: 1,
              children: tmp6,
            };
            const tmp11 = hasOwnProperty(Text_Text.Text, obj4);
            cResult[4] = tmp6;
            cResult[5] = tmp11;
            let tmp9 = tmp11;
          } else {
            tmp9 = cResult[5];
          }
          if (cResult[6] === tmp4.channelLabel) {
            if (cResult[7] === tmp7) {
              if (cResult[8] === tmp9) {
                let tmp12 = cResult[9];
              }
              return tmp12;
            }
          }
          const obj5 = { style: tmp20, children: null };
          const items = [tmp7, tmp9];
          obj5.children = items;
          const tmp15 = timestampProducer(View, obj5);
          cResult[6] = tmp4.channelLabel;
          cResult[7] = tmp7;
          cResult[8] = tmp9;
          cResult[9] = tmp15;
          tmp12 = tmp15;
        }
        const obj6 = { style: tmp4.channelIcon, size: "xs", color: "interactive-text-default" };
        const renderChannelIconResult = GuildRoleSubscriptionBenefitUtils.renderChannelIcon(
          channelWithTemplateFallback,
          obj6,
        );
        cResult[1] = channelWithTemplateFallback;
        cResult[2] = tmp4.channelIcon;
        cResult[3] = renderChannelIconResult;
        tmp7 = renderChannelIconResult;
        const tmpResult = GuildRoleSubscriptionBenefitUtils;
      }
    }
  : function ChannelBenefitLabel(benefit) {
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
        const obj5 = {
          variant: "text-md/semibold",
          color: "mobile-text-heading-primary",
          lineClamp: 1,
          children: tmp5,
        };
        items[1] = hasOwnProperty(Text_Text.Text, obj5);
        obj3.children = items;
        tmp8 = timestampProducer(View, obj3);
        const tmp2Result = GuildRoleSubscriptionBenefitUtils;
      }
      return tmp8;
    };
ReactCompilerGating = fn(558);
let obj3 = { marginEnd: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitTableRow.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildRoleSubscriptionBenefitTableRow(arg0) {
      const cResult = c.c(15);
      ({ guildId, benefit, onPress, disabled, start, end } = arg0);
      if (cResult[0] !== benefit) {
        if (benefit.ref_type === constants.CHANNEL) {
          const obj2 = { benefit };
          let name = hasOwnProperty(closure_8, obj2);
        } else {
          name = benefit.name;
        }
        cResult[0] = benefit;
        cResult[1] = name;
      } else {
        if (cResult[2] !== benefit) {
          const benefitEmojiId = GuildRoleSubscriptionBenefitUtils.getBenefitEmojiId(benefit);
          cResult[2] = benefit;
          cResult[3] = benefitEmojiId;
          let tmp9 = benefitEmojiId;
          const tmpResult = GuildRoleSubscriptionBenefitUtils;
        } else {
          tmp9 = cResult[3];
        }
        if (cResult[4] === guildId) {
          if (cResult[5] === tmp9) {
            let tmp11 = cResult[6];
          }
          const description = benefit.description;
          if (cResult[7] === disabled) {
            if (cResult[8] === end) {
              if (cResult[9] === tmp4) {
                if (cResult[10] === onPress) {
                  if (cResult[11] === start) {
                    if (cResult[12] === tmp11) {
                      if (cResult[13] === description) {
                        let tmp16 = cResult[14];
                      }
                      return tmp16;
                    }
                  }
                }
              }
            }
          }
          const obj3 = {
            start,
            end,
            icon: tmp11,
            label: tmp4,
            subLabel: description,
            subLabelLineClamp: 3,
            arrow: true,
            onPress,
            disabled,
          };
          const tmp18 = hasOwnProperty(TableRow.TableRow, obj3);
          cResult[7] = disabled;
          cResult[8] = end;
          cResult[9] = tmp4;
          cResult[10] = onPress;
          cResult[11] = start;
          cResult[12] = tmp11;
          cResult[13] = description;
          cResult[14] = tmp18;
          tmp16 = tmp18;
        }
        const obj4 = { guildId, id: tmp9 };
        const tmp14 = hasOwnProperty(EmojiIconDefault, obj4);
        cResult[4] = guildId;
        cResult[5] = tmp9;
        cResult[6] = tmp14;
        tmp11 = tmp14;
      }
    }
  : function GuildRoleSubscriptionBenefitTableRow(benefit) {
      benefit = benefit.benefit;
      ({ guildId, onPress, disabled, start, end } = benefit);
      if (benefit.ref_type === constants.CHANNEL) {
        const obj = { benefit };
        let name = hasOwnProperty(closure_8, obj);
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
    };
