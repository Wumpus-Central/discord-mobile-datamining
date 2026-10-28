// discord_app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitPreview.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import UnicodeEmojisDefault from "../../../emojis/UnicodeEmojis.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import ChevronSmallRightIcon from "../../../../design/components/Icon/native/redesign/generated/ChevronSmallRightIcon.tsx";
import utils_ChannelUtils from "../../../../utils/native/ChannelUtils.tsx";
import TextIcon2 from "../../../../design/components/Icon/native/redesign/generated/TextIcon.tsx";
import GuildRoleSubscriptionTierTemplatesUtils from "../../tier_templates/GuildRoleSubscriptionTierTemplatesUtils.tsx";
import EmojiIconDefault from "EmojiIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const constants = fn(16833).GuildRoleSubscriptionBenefitTypes;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5004);
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
  channelIcon: { marginEnd: 8 },
  emojiRow: { flexDirection: "row", justifyContent: "flex-start", alignItems: "center" },
  emojiColons: { paddingHorizontal: 2 },
});
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function BaseBenefitRow(arg0) {
      const cResult = c.c(19);
      ({ emoji, children, contentStyle, guildId, isInteractive } = arg0);
      const tmp5 = closure_7();
      if (cResult[0] === emoji) {
        if (cResult[1] === guildId) {
          let tmp6 = cResult[2];
        }
        if (cResult[3] === tmp5.emojiContainer) {
          if (cResult[4] === tmp6) {
            let tmp8 = cResult[5];
          }
          if (cResult[6] === contentStyle) {
            if (cResult[7] === tmp5.benefitColumn) {
              let tmp12 = cResult[8];
            }
            if (cResult[9] === children) {
              if (cResult[10] === tmp12) {
                let tmp13 = cResult[11];
              }
              if (cResult[12] !== tmp4) {
                let tmp18 = true === tmp4;
                if (tmp18) {
                  tmp18 = hasOwnProperty(ChevronSmallRightIcon.ChevronSmallRightIcon, { size: "md" });
                }
                cResult[12] = tmp4;
                cResult[13] = tmp18;
                let tmp17 = tmp18;
              } else {
                tmp17 = cResult[13];
              }
              if (cResult[14] === tmp5.container) {
                if (cResult[15] === tmp8) {
                  if (cResult[16] === tmp13) {
                    if (cResult[17] === tmp17) {
                      let tmp20 = cResult[18];
                    }
                    return tmp20;
                  }
                }
              }
              const obj2 = { style: tmp5.container, children: null };
              const items = [tmp8, tmp13, tmp17];
              obj2.children = items;
              const tmp23 = timestampProducer(View, obj2);
              cResult[14] = tmp5.container;
              cResult[15] = tmp8;
              cResult[16] = tmp13;
              cResult[17] = tmp17;
              cResult[18] = tmp23;
              tmp20 = tmp23;
            }
            const obj3 = { style: tmp12, children };
            const tmp16 = hasOwnProperty(View, obj3);
            cResult[9] = children;
            cResult[10] = tmp12;
            cResult[11] = tmp16;
            tmp13 = tmp16;
          }
          const items1 = [tmp5.benefitColumn, contentStyle];
          cResult[6] = contentStyle;
          cResult[7] = tmp5.benefitColumn;
          cResult[8] = items1;
          tmp12 = items1;
        }
        const obj4 = { style: tmp5.emojiContainer, children: tmp6 };
        const tmp11 = hasOwnProperty(View, obj4);
        cResult[3] = tmp5.emojiContainer;
        cResult[4] = tmp6;
        cResult[5] = tmp11;
        tmp8 = tmp11;
      }
      const tmp7 = hasOwnProperty(EmojiIconDefault, { guildId, id: emoji });
      cResult[0] = emoji;
      cResult[1] = guildId;
      cResult[2] = tmp7;
      tmp6 = tmp7;
    }
  : function BaseBenefitRow(isInteractive) {
      let flag = isInteractive.isInteractive;
      ({ emoji, children, contentStyle, guildId } = isInteractive);
      if (flag === undefined) {
        flag = true;
      }
      const tmp = closure_7();
      const obj = { style: tmp.container, children: null };
      const items = [
        hasOwnProperty(View, {
          style: tmp.emojiContainer,
          children: hasOwnProperty(EmojiIconDefault, { guildId, id: emoji }),
        }),
        ,
      ];
      const obj3 = { style: null, children };
      const items1 = [tmp.benefitColumn, contentStyle];
      obj3.style = items1;
      items[1] = hasOwnProperty(View, obj3);
      let tmp4Result = true === flag;
      if (tmp4Result) {
        tmp4Result = hasOwnProperty(ChevronSmallRightIcon.ChevronSmallRightIcon, { size: "md" });
      }
      items[2] = tmp4Result;
      obj.children = items;
      return timestampProducer(View, obj);
    };
ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function DescriptiveBenefitRow(arg0) {
      const cResult = c.c(12);
      ({ benefit, children, guildId, isInteractive } = arg0);
      const tmp4 = closure_7();
      if (cResult[0] === benefit.description) {
        if (cResult[1] === tmp4) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] === benefit.emoji_id) {
          if (cResult[4] === benefit.emoji_name) {
            let tmp8 = cResult[5];
          }
          if (cResult[6] === children) {
            if (cResult[7] === tmp5) {
              if (cResult[8] === tmp8) {
                if (cResult[9] === guildId) {
                  if (cResult[10] === isInteractive) {
                    let tmp11 = cResult[11];
                  }
                  return tmp11;
                }
              }
            }
          }
          const obj2 = { emoji: tmp8, guildId, isInteractive, children: null };
          const items = [children, tmp5];
          obj2.children = items;
          const tmp14 = timestampProducer(closure_8, obj2);
          cResult[6] = children;
          cResult[7] = tmp5;
          cResult[8] = tmp8;
          cResult[9] = guildId;
          cResult[10] = isInteractive;
          cResult[11] = tmp14;
          tmp11 = tmp14;
        }
        let emoji_id = benefit.emoji_id;
        if (emoji_id == null) {
          let str = "";
          if (null != benefit.emoji_name) {
            str = UnicodeEmojisDefault.convertSurrogateToName(benefit.emoji_name, false);
          }
          emoji_id = str;
        }
        cResult[3] = benefit.emoji_id;
        cResult[4] = benefit.emoji_name;
        cResult[5] = emoji_id;
        tmp8 = emoji_id;
      }
      let tmp6 = null;
      if (null != benefit.description) {
        const obj4 = {
          style: tmp4.benefitDescription,
          variant: "text-sm/medium",
          color: "interactive-text-default",
          children: benefit.description,
        };
        tmp6 = hasOwnProperty(Text_Text.Text, obj4);
      }
      cResult[0] = benefit.description;
      cResult[1] = tmp4;
      cResult[2] = tmp6;
      tmp5 = tmp6;
    }
  : function DescriptiveBenefitRow(benefit) {
      benefit = benefit.benefit;
      ({ children, guildId, isInteractive } = benefit);
      let tmp2 = null;
      if (null != benefit.description) {
        const obj = {
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
      const obj3 = { emoji: emoji_id, guildId, isInteractive, children: null };
      const items = [children, tmp2];
      obj3.children = items;
      return timestampProducer(closure_8, obj3);
    };
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ChannelBenefitRow(arg0) {
      const cResult = c.c(15);
      ({ benefit, guildId, isInteractive } = arg0);
      const tmp4 = closure_7();
      const channelWithTemplateFallback = GuildRoleSubscriptionTierTemplatesUtils.useChannelWithTemplateFallback(
        benefit.ref_id,
      );
      const tmp6 = useChannelNameDefault(channelWithTemplateFallback);
      if (null == channelWithTemplateFallback) {
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
          const intl = util.intl;
          const _HermesInternal = HermesInternal;
          obj3.children = "[" + intl.string(util.t.bz1PZX) + "]";
          const tmp24 = hasOwnProperty(Text_Text.Text, obj3);
          cResult[0] = tmp24;
          let first = tmp24;
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
            const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp6 };
            const tmp12 = hasOwnProperty(Text_Text.Text, obj4);
            cResult[4] = tmp6;
            cResult[5] = tmp12;
            let tmp10 = tmp12;
          } else {
            tmp10 = cResult[5];
          }
          if (cResult[6] === tmp4.channelRow) {
            if (cResult[7] === tmp7) {
              if (cResult[8] === tmp10) {
                let tmp13 = cResult[9];
              }
              if (cResult[10] === benefit) {
                if (cResult[11] === guildId) {
                  if (cResult[12] === isInteractive) {
                    if (cResult[13] === tmp13) {
                      let tmp17 = cResult[14];
                    }
                    return tmp17;
                  }
                }
              }
              const obj5 = { benefit, guildId, isInteractive, children: tmp13 };
              const tmp20 = hasOwnProperty(closure_9, obj5);
              cResult[10] = benefit;
              cResult[11] = guildId;
              cResult[12] = isInteractive;
              cResult[13] = tmp13;
              cResult[14] = tmp20;
              tmp17 = tmp20;
            }
          }
          const obj6 = { style: tmp25, children: null };
          const items = [tmp7, tmp10];
          obj6.children = items;
          const tmp16 = timestampProducer(View, obj6);
          cResult[6] = tmp4.channelRow;
          cResult[7] = tmp7;
          cResult[8] = tmp10;
          cResult[9] = tmp16;
          tmp13 = tmp16;
        }
        let TextIcon = utils_ChannelUtils.getChannelIconComponent(channelWithTemplateFallback);
        if (TextIcon == null) {
          TextIcon = TextIcon2.TextIcon;
        }
        const obj7 = { style: tmp4.channelIcon, size: "xs" };
        const tmp9 = hasOwnProperty(TextIcon, obj7);
        cResult[1] = channelWithTemplateFallback;
        cResult[2] = tmp4.channelIcon;
        cResult[3] = tmp9;
        tmp7 = tmp9;
        const tmpResult = utils_ChannelUtils;
      }
    }
  : function ChannelBenefitRow(benefit) {
      benefit = benefit.benefit;
      ({ guildId, isInteractive } = benefit);
      const tmp = closure_7();
      const channelWithTemplateFallback = GuildRoleSubscriptionTierTemplatesUtils.useChannelWithTemplateFallback(
        benefit.ref_id,
      );
      if (null == channelWithTemplateFallback) {
        const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
        const intl = util.intl;
        const _HermesInternal = HermesInternal;
        obj2.children = "[" + intl.string(util.t.bz1PZX) + "]";
        let tmp9Result = hasOwnProperty(Text_Text.Text, obj2);
      } else {
        const obj3 = { benefit, guildId, isInteractive, children: null };
        const obj4 = { style: tmp.channelRow, children: null };
        let TextIcon = utils_ChannelUtils.getChannelIconComponent(channelWithTemplateFallback);
        if (TextIcon == null) {
          TextIcon = TextIcon2.TextIcon;
        }
        const obj5 = { style: tmp.channelIcon, size: "xs" };
        const items = [hasOwnProperty(TextIcon, obj5)];
        const obj6 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp5 };
        items[1] = hasOwnProperty(Text_Text.Text, obj6);
        obj4.children = items;
        obj3.children = timestampProducer(View, obj4);
        tmp9Result = hasOwnProperty(closure_9, obj3);
        const tmp2Result = utils_ChannelUtils;
      }
      return tmp9Result;
    };
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function IntangibleBenefitRow(arg0) {
      const cResult = c.c(7);
      ({ benefit, guildId, isInteractive } = arg0);
      if (cResult[0] !== benefit.name) {
        const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: benefit.name };
        const tmp6 = hasOwnProperty(Text_Text.Text, obj2);
        cResult[0] = benefit.name;
        cResult[1] = tmp6;
        let tmp4 = tmp6;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === benefit) {
        if (cResult[3] === guildId) {
          if (cResult[4] === isInteractive) {
            if (cResult[5] === tmp4) {
              let tmp7 = cResult[6];
            }
            return tmp7;
          }
        }
      }
      const tmp8 = hasOwnProperty(closure_9, { benefit, guildId, isInteractive, children: tmp4 });
      cResult[2] = benefit;
      cResult[3] = guildId;
      cResult[4] = isInteractive;
      cResult[5] = tmp4;
      cResult[6] = tmp8;
      tmp7 = tmp8;
    }
  : function IntangibleBenefitRow(benefit) {
      benefit = benefit.benefit;
      const obj = {
        benefit,
        guildId: benefit.guildId,
        isInteractive: benefit.isInteractive,
        children: hasOwnProperty(Text_Text.Text, {
          variant: "text-md/semibold",
          color: "mobile-text-heading-primary",
          children: benefit.name,
        }),
      };
      return hasOwnProperty(closure_9, obj);
    };
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function EmojiBenefitRow(arg0) {
      const cResult = c.c(14);
      ({ benefit, guildId, isInteractive } = arg0);
      const tmp4 = closure_7();
      if (cResult[0] !== tmp4.emojiColons) {
        const obj2 = { style: tmp4.emojiColons, variant: "text-md/medium", color: "text-muted", children: ":" };
        const tmp7 = hasOwnProperty(Text_Text.Text, obj2);
        cResult[0] = tmp4.emojiColons;
        cResult[1] = tmp7;
        let tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== benefit.name) {
        const obj3 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: benefit.name };
        const tmp10 = hasOwnProperty(Text_Text.Text, obj3);
        cResult[2] = benefit.name;
        cResult[3] = tmp10;
        let tmp8 = tmp10;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] !== tmp4.emojiColons) {
        const obj4 = { style: tmp4.emojiColons, variant: "text-md/medium", color: "text-muted", children: ":" };
        const tmp13 = hasOwnProperty(Text_Text.Text, obj4);
        cResult[4] = tmp4.emojiColons;
        cResult[5] = tmp13;
        let tmp11 = tmp13;
      } else {
        tmp11 = cResult[5];
      }
      if (cResult[6] === benefit.id) {
        if (cResult[7] === guildId) {
          if (cResult[8] === isInteractive) {
            if (cResult[9] === tmp4.emojiRow) {
              if (cResult[10] === tmp5) {
                if (cResult[11] === tmp8) {
                  if (cResult[12] === tmp11) {
                    let tmp14 = cResult[13];
                  }
                  return tmp14;
                }
              }
            }
          }
        }
      }
      const obj5 = { emoji: benefit.id, guildId, contentStyle: tmp4.emojiRow, isInteractive, children: null };
      const items = [tmp5, tmp8, tmp11];
      obj5.children = items;
      const tmp15 = timestampProducer(closure_8, obj5);
      cResult[6] = benefit.id;
      cResult[7] = guildId;
      cResult[8] = isInteractive;
      cResult[9] = tmp4.emojiRow;
      cResult[10] = tmp5;
      cResult[11] = tmp8;
      cResult[12] = tmp11;
      cResult[13] = tmp15;
      tmp14 = tmp15;
    }
  : function EmojiBenefitRow(benefit) {
      benefit = benefit.benefit;
      ({ guildId, isInteractive } = benefit);
      const tmp = closure_7();
      const obj = { emoji: benefit.id, guildId, contentStyle: tmp.emojiRow, isInteractive, children: null };
      const items = [
        hasOwnProperty(Text_Text.Text, {
          style: tmp.emojiColons,
          variant: "text-md/medium",
          color: "text-muted",
          children: ":",
        }),
        hasOwnProperty(Text_Text.Text, {
          variant: "text-md/semibold",
          color: "mobile-text-heading-primary",
          children: benefit.name,
        }),
        hasOwnProperty(Text_Text.Text, {
          style: tmp.emojiColons,
          variant: "text-md/medium",
          color: "text-muted",
          children: ":",
        }),
      ];
      obj.children = items;
      return timestampProducer(closure_8, obj);
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitPreview.tsx",
);

export const GuildRoleSubscriptionBenefitPreview = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildRoleSubscriptionBenefitPreview(arg0) {
      const cResult = c.c(12);
      ({ benefit, guildId, isInteractive } = arg0);
      if ("roles" in benefit) {
        if (cResult[0] === benefit) {
          if (cResult[1] === guildId) {
          }
        }
        const obj2 = { benefit, guildId, isInteractive };
        const tmp15 = hasOwnProperty(closure_12, obj2);
        cResult[0] = benefit;
        cResult[1] = guildId;
        cResult[2] = isInteractive;
        cResult[3] = tmp15;
      } else if (benefit.ref_type === constants.CHANNEL) {
        if (cResult[4] === benefit) {
          if (cResult[5] === guildId) {
          }
        }
        const obj3 = { benefit, guildId, isInteractive };
        const tmp10 = hasOwnProperty(closure_10, obj3);
        cResult[4] = benefit;
        cResult[5] = guildId;
        cResult[6] = isInteractive;
        cResult[7] = tmp10;
      } else {
        if (cResult[8] === benefit) {
          if (cResult[9] === guildId) {
            if (cResult[10] === isInteractive) {
              let tmp3 = cResult[11];
            }
            return tmp3;
          }
        }
        const obj4 = { benefit, guildId, isInteractive };
        const tmp6 = hasOwnProperty(closure_11, obj4);
        cResult[8] = benefit;
        cResult[9] = guildId;
        cResult[10] = isInteractive;
        cResult[11] = tmp6;
        tmp3 = tmp6;
      }
    }
  : function GuildRoleSubscriptionBenefitPreview(arg0) {
      ({ benefit, guildId, isInteractive } = arg0);
      if ("roles" in benefit) {
        const obj2 = { benefit, guildId, isInteractive };
        let tmp4 = hasOwnProperty(closure_12, obj2);
      } else if (benefit.ref_type === constants.CHANNEL) {
        const obj3 = { benefit, guildId, isInteractive };
        tmp4 = hasOwnProperty(closure_10, obj3);
      } else {
        const obj = { benefit, guildId, isInteractive };
        tmp4 = hasOwnProperty(closure_11, obj);
      }
      return tmp4;
    };
