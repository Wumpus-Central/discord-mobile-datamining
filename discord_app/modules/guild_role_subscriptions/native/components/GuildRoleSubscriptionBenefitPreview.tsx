// === Module 18001: GuildRoleSubscriptionBenefitPreview ===

// Module 18001 (GuildRoleSubscriptionBenefitPreview)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import native from "native" /* 1188 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4529 */;
import Text_Text from "Text/Text" /* 4892 */;
import useChannelNameDefault from "useChannelName" /* 5049 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5819 */;
import _modDef9615 from "module_9615" /* 9615 */;
import GuildRoleSubscriptionTierTemplatesUtils from "GuildRoleSubscriptionTierTemplatesUtils" /* 15066 */;
import EmojiIconDefault from "EmojiIcon" /* 15073 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const constants = fn(15038).GuildRoleSubscriptionBenefitTypes;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4896);
let closure_7 = createStyles.createStyles({ container: { flexDirection: "row", justifyContent: "flex-start" }, emojiContainer: { width: 24, height: 24, alignSelf: "flex-start", alignItems: "center", justifyContent: "center", marginEnd: 16 }, benefitColumn: { flexDirection: "column", flexGrow: 1, flex: 1, alignItems: "flex-start", justifyContent: "center" }, benefitDescription: { flex: 1, marginTop: 2 }, channelRow: { flexDirection: "row", alignItems: "center", justifyContent: "center" }, channelIcon: { width: 16, height: 16, marginEnd: 8 }, emojiRow: { flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }, emojiColons: { paddingHorizontal: 2 } });
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
              const obj2 = { source: _modDef9615 };
              tmp18 = hasOwnProperty(native.Icon, obj2);
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
                  let tmp21 = cResult[18];
                }
                return tmp21;
              }
            }
          }
          const obj3 = { style: tmp5.container, children: null };
          const items = [tmp8, tmp13, tmp17];
          obj3.children = items;
          const tmp24 = timestampProducer(View, obj3);
          cResult[14] = tmp5.container;
          cResult[15] = tmp8;
          cResult[16] = tmp13;
          cResult[17] = tmp17;
          cResult[18] = tmp24;
          tmp21 = tmp24;
        }
        const obj4 = { style: tmp12, children };
        const tmp16 = hasOwnProperty(View, obj4);
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
    const obj5 = { style: tmp5.emojiContainer, children: tmp6 };
    const tmp11 = hasOwnProperty(View, obj5);
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
}) : ((isInteractive) => {
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
    const obj4 = { source: _modDef9615 };
    tmp4Result = hasOwnProperty(native.Icon, obj4);
  }
  items[2] = tmp4Result;
  obj.children = items;
  return timestampProducer(View, obj);
});
ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
    const obj4 = { style: tmp4.benefitDescription, variant: "text-sm/medium", color: "interactive-text-default", children: benefit.description };
    tmp6 = hasOwnProperty(Text_Text.Text, obj4);
  }
  cResult[0] = benefit.description;
  cResult[1] = tmp4;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : ((benefit) => {
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
  return timestampProducer(closure_8, obj3);
});
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(17);
  ({ benefit, guildId, isInteractive } = arg0);
  const tmp3 = closure_7();
  const channelWithTemplateFallback = GuildRoleSubscriptionTierTemplatesUtils.useChannelWithTemplateFallback(benefit.ref_id);
  const tmp5 = useChannelNameDefault(channelWithTemplateFallback);
  if (cResult[0] !== channelWithTemplateFallback) {
    let channelIcon = null;
    if (null != channelWithTemplateFallback) {
      channelIcon = utils_ChannelUtils.getChannelIcon(channelWithTemplateFallback);
      const tmpResult = utils_ChannelUtils;
    }
    cResult[0] = channelWithTemplateFallback;
    cResult[1] = channelIcon;
    let tmp6 = channelIcon;
  } else {
    tmp6 = cResult[1];
  }
  if (null == channelWithTemplateFallback) {
    let combined = globalThis;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
      const intl = util.intl;
      combined = "[" + intl.string(util.t.bz1PZX) + "]";
      obj3.children = combined;
      const tmp26 = hasOwnProperty(Text_Text.Text, obj3);
      cResult[2] = tmp26;
      const stringResult = intl.string(util.t.bz1PZX);
    }
  } else {
    if (cResult[3] === tmp6) {
      if (cResult[4] === tmp3.channelIcon) {
        let tmp8 = cResult[5];
      }
      if (cResult[6] !== tmp5) {
        const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp5 };
        const tmp13 = hasOwnProperty(Text_Text.Text, obj4);
        cResult[6] = tmp5;
        cResult[7] = tmp13;
        let tmp11 = tmp13;
      } else {
        tmp11 = cResult[7];
      }
      if (cResult[8] === tmp3.channelRow) {
        if (cResult[9] === tmp8) {
          if (cResult[10] === tmp11) {
            let tmp14 = cResult[11];
          }
          if (cResult[12] === benefit) {
            if (cResult[13] === guildId) {
              if (cResult[14] === isInteractive) {
                if (cResult[15] === tmp14) {
                  let tmp18 = cResult[16];
                }
                return tmp18;
              }
            }
          }
          const obj5 = { benefit, guildId, isInteractive, children: tmp14 };
          const tmp21 = hasOwnProperty(closure_9, obj5);
          cResult[12] = benefit;
          cResult[13] = guildId;
          cResult[14] = isInteractive;
          cResult[15] = tmp14;
          cResult[16] = tmp21;
          tmp18 = tmp21;
        }
      }
      const obj6 = { style: tmp3.channelRow, children: null };
      const items = [tmp8, tmp11];
      obj6.children = items;
      const tmp17 = timestampProducer(View, obj6);
      cResult[8] = tmp3.channelRow;
      cResult[9] = tmp8;
      cResult[10] = tmp11;
      cResult[11] = tmp17;
      tmp14 = tmp17;
    }
    const obj7 = { style: tmp3.channelIcon, size: native.Icon.Sizes.CUSTOM, source: tmp6 };
    const tmp10 = hasOwnProperty(native.Icon, obj7);
    cResult[3] = tmp6;
    cResult[4] = tmp3.channelIcon;
    cResult[5] = tmp10;
    tmp8 = tmp10;
  }
}) : ((benefit) => {
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
    tmp9 = hasOwnProperty(closure_9, obj3);
  }
  return tmp9;
});
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
}) : ((benefit) => {
  benefit = benefit.benefit;
  const obj = { benefit, guildId: benefit.guildId, isInteractive: benefit.isInteractive, children: hasOwnProperty(Text_Text.Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: benefit.name }) };
  return hasOwnProperty(closure_9, obj);
});
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
}) : ((benefit) => {
  benefit = benefit.benefit;
  ({ guildId, isInteractive } = benefit);
  const tmp = closure_7();
  const obj = { emoji: benefit.id, guildId, contentStyle: tmp.emojiRow, isInteractive, children: null };
  const items = [hasOwnProperty(Text_Text.Text, { style: tmp.emojiColons, variant: "text-md/medium", color: "text-muted", children: ":" }), hasOwnProperty(Text_Text.Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: benefit.name }), hasOwnProperty(Text_Text.Text, { style: tmp.emojiColons, variant: "text-md/medium", color: "text-muted", children: ":" })];
  obj.children = items;
  return timestampProducer(closure_8, obj);
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitPreview.tsx");

export const GuildRoleSubscriptionBenefitPreview = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
}) : ((arg0) => {
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
});