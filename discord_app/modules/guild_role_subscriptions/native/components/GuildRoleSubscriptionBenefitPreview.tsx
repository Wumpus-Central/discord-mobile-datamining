// === Module 18001: GuildRoleSubscriptionBenefitPreview ===

// Module 18001 (GuildRoleSubscriptionBenefitPreview)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4529 */;
import Text_Text from "Text/Text" /* 4892 */;
import useChannelNameDefault from "useChannelName" /* 5049 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5819 */;
import AssetRegistryDefault from "AssetRegistry" /* 9615 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 15038 */;
import GuildRoleSubscriptionTierTemplatesUtils from "GuildRoleSubscriptionTierTemplatesUtils" /* 15066 */;
import EmojiIconDefault from "EmojiIcon" /* 15073 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
const constants = GuildRoleSubscriptionsConstants.GuildRoleSubscriptionBenefitTypes;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ container: { flexDirection: "row", justifyContent: "flex-start" }, emojiContainer: { width: 24, height: 24, alignSelf: "flex-start", alignItems: "center", justifyContent: "center", marginEnd: 16 }, benefitColumn: { flexDirection: "column", flexGrow: 1, flex: 1, alignItems: "flex-start", justifyContent: "center" }, benefitDescription: { flex: 1, marginTop: 2 }, channelRow: { flexDirection: "row", alignItems: "center", justifyContent: "center" }, channelIcon: { width: 16, height: 16, marginEnd: 8 }, emojiRow: { flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }, emojiColons: { paddingHorizontal: 2 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let contentStyle;
  let emoji;
  let guildId;
  let isInteractive;
  let items;
  const obj = react2;
  const cResult = obj.c(19);
  ({ emoji, children, contentStyle, guildId, isInteractive } = arg0);
  const tmp5 = closure_7();
  if (cResult[0] === emoji) {
    let tmp6;
    if (cResult[1] === guildId) {
      tmp6 = cResult[2];
    }
    if (cResult[3] === tmp5.emojiContainer) {
      let tmp8;
      if (cResult[4] === tmp6) {
        tmp8 = cResult[5];
      }
      if (cResult[6] === contentStyle) {
        let tmp12;
        if (cResult[7] === tmp5.benefitColumn) {
          tmp12 = cResult[8];
        }
        if (cResult[9] === children) {
          let tmp13;
          let tmp17;
          if (cResult[10] === tmp12) {
            tmp13 = cResult[11];
          }
          if (cResult[12] !== (undefined === isInteractive || isInteractive)) {
            let tmp18 = true === tmp4;
            if (tmp18) {
              const obj2 = { source: AssetRegistryDefault };
              const Icon = native.Icon;
              tmp18 = hasOwnProperty(Icon, obj2);
            }
            cResult[12] = undefined === isInteractive || isInteractive;
            cResult[13] = tmp18;
            tmp17 = tmp18;
          } else {
            tmp17 = cResult[13];
          }
          if (cResult[14] === tmp5.container) {
            if (cResult[15] === tmp8) {
              if (cResult[16] === tmp13) {
                let tmp21;
                if (cResult[17] === tmp17) {
                  tmp21 = cResult[18];
                }
                return tmp21;
              }
            }
          }
          const obj3 = { style: tmp5.container, children: items };
          items = [tmp8, tmp13, tmp17];
          const tmp24 = metroRequire(View, obj3);
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
  let children;
  let contentStyle;
  let emoji;
  let guildId;
  let items;
  let items1;
  let flag = isInteractive.isInteractive;
  ({ emoji, children, contentStyle, guildId } = isInteractive);
  if (flag === undefined) {
    flag = true;
  }
  const tmp = closure_7();
  const obj = { style: tmp.container, children: items };
  items = [, , ];
  const obj2 = { style: tmp.emojiContainer, children: hasOwnProperty(EmojiIconDefault, { guildId, id: emoji }) };
  items[0] = hasOwnProperty(View, obj2);
  const obj3 = { style: items1, children };
  items1 = [tmp.benefitColumn, contentStyle];
  items[1] = hasOwnProperty(View, obj3);
  let tmp4Result = true === flag;
  if (tmp4Result) {
    const obj4 = { source: AssetRegistryDefault };
    const Icon = native.Icon;
    tmp4Result = hasOwnProperty(Icon, obj4);
  }
  items[2] = tmp4Result;
  return metroRequire(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let benefit;
  let children;
  let guildId;
  let isInteractive;
  let items;
  const obj = react2;
  const cResult = obj.c(12);
  ({ benefit, children, guildId, isInteractive } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] === benefit.description) {
    let tmp5;
    if (cResult[1] === tmp4) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === benefit.emoji_id) {
      let tmp8;
      if (cResult[4] === benefit.emoji_name) {
        tmp8 = cResult[5];
      }
      if (cResult[6] === children) {
        if (cResult[7] === tmp5) {
          if (cResult[8] === tmp8) {
            if (cResult[9] === guildId) {
              let tmp11;
              if (cResult[10] === isInteractive) {
                tmp11 = cResult[11];
              }
              return tmp11;
            }
          }
        }
      }
      const obj2 = { emoji: tmp8, guildId, isInteractive, children: items };
      items = [children, tmp5];
      const tmp14 = metroRequire(closure_8, obj2);
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
        const obj3 = UnicodeEmojisDefault;
        str = obj3.convertSurrogateToName(benefit.emoji_name, false);
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
  let children;
  let guildId;
  let isInteractive;
  let items;
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
      const obj2 = UnicodeEmojisDefault;
      str = obj2.convertSurrogateToName(benefit.emoji_name, false);
    }
    emoji_id = str;
  }
  const obj3 = { emoji: emoji_id, guildId, isInteractive, children: items };
  items = [children, tmp2];
  return metroRequire(closure_8, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let benefit;
  let guildId;
  let intl;
  let isInteractive;
  let items;
  let tmp19;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(17);
  ({ benefit, guildId, isInteractive } = arg0);
  const tmp4 = closure_7();
  const obj2 = GuildRoleSubscriptionTierTemplatesUtils;
  const channelWithTemplateFallback = obj2.useChannelWithTemplateFallback(benefit.ref_id);
  const tmp6 = useChannelNameDefault(channelWithTemplateFallback);
  if (cResult[0] !== channelWithTemplateFallback) {
    let channelIcon = null;
    if (null != channelWithTemplateFallback) {
      const tmpResult = utils_ChannelUtils;
      channelIcon = tmpResult.getChannelIcon(channelWithTemplateFallback);
    }
    cResult[0] = channelWithTemplateFallback;
    cResult[1] = channelIcon;
    tmp7 = channelIcon;
  } else {
    tmp7 = cResult[1];
  }
  if (null == channelWithTemplateFallback) {
    let tmp24;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: "[" + intl.string(intl2.t.bz1PZX) + "]" };
      const Text = Text_Text.Text;
      intl = intl2.intl;
      const _HermesInternal = HermesInternal;
      const tmp26 = hasOwnProperty(Text, obj3);
      cResult[2] = tmp26;
      tmp24 = tmp26;
    } else {
      tmp24 = cResult[2];
    }
    tmp19 = tmp24;
  } else {
    if (cResult[3] === tmp7) {
      let tmp9;
      let tmp12;
      if (cResult[4] === tmp4.channelIcon) {
        tmp9 = cResult[5];
      }
      if (cResult[6] !== tmp6) {
        const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp6 };
        const tmp14 = hasOwnProperty(Text_Text.Text, obj4);
        cResult[6] = tmp6;
        cResult[7] = tmp14;
        tmp12 = tmp14;
      } else {
        tmp12 = cResult[7];
      }
      if (cResult[8] === tmp4.channelRow) {
        if (cResult[9] === tmp9) {
          let tmp15;
          if (cResult[10] === tmp12) {
            tmp15 = cResult[11];
          }
          if (cResult[12] === benefit) {
            if (cResult[13] === guildId) {
              if (cResult[14] === isInteractive) {
                if (cResult[15] === tmp15) {
                  tmp19 = cResult[16];
                }
              }
            }
          }
          const obj5 = { benefit, guildId, isInteractive, children: tmp15 };
          const tmp22 = hasOwnProperty(closure_9, obj5);
          cResult[12] = benefit;
          cResult[13] = guildId;
          cResult[14] = isInteractive;
          cResult[15] = tmp15;
          cResult[16] = tmp22;
          tmp19 = tmp22;
        }
      }
      const obj6 = { style: tmp4.channelRow, children: items };
      items = [tmp9, tmp12];
      const tmp18 = metroRequire(View, obj6);
      cResult[8] = tmp4.channelRow;
      cResult[9] = tmp9;
      cResult[10] = tmp12;
      cResult[11] = tmp18;
      tmp15 = tmp18;
    }
    const obj7 = { style: tmp4.channelIcon, size: native.Icon.Sizes.CUSTOM, source: tmp7 };
    const Icon = native.Icon;
    const tmp11 = hasOwnProperty(Icon, obj7);
    cResult[3] = tmp7;
    cResult[4] = tmp4.channelIcon;
    cResult[5] = tmp11;
    tmp9 = tmp11;
  }
  return tmp19;
}) : ((benefit) => {
  let guildId;
  let intl;
  let isInteractive;
  let items;
  let obj4;
  let tmp9;
  benefit = benefit.benefit;
  ({ guildId, isInteractive } = benefit);
  const tmp = closure_7();
  const obj = GuildRoleSubscriptionTierTemplatesUtils;
  const channelWithTemplateFallback = obj.useChannelWithTemplateFallback(benefit.ref_id);
  let channelIcon = null;
  const tmp5 = useChannelNameDefault(channelWithTemplateFallback);
  if (null != channelWithTemplateFallback) {
    const tmp2Result = utils_ChannelUtils;
    channelIcon = tmp2Result.getChannelIcon(channelWithTemplateFallback);
  }
  if (null == channelWithTemplateFallback) {
    const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: "[" + intl.string(intl2.t.bz1PZX) + "]" };
    const Text = Text_Text.Text;
    intl = intl2.intl;
    const _HermesInternal = HermesInternal;
    tmp9 = hasOwnProperty(Text, obj2);
  } else {
    const obj3 = { benefit, guildId, isInteractive, children: metroRequire(View, obj4) };
    obj4 = { style: tmp.channelRow, children: items };
    const obj5 = { style: tmp.channelIcon, size: native.Icon.Sizes.CUSTOM, source: channelIcon };
    const Icon = native.Icon;
    items = [hasOwnProperty(Icon, obj5), ];
    const obj6 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp5 };
    items[1] = hasOwnProperty(Text_Text.Text, obj6);
    tmp9 = hasOwnProperty(closure_9, obj3);
  }
  return tmp9;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let benefit;
  let guildId;
  let isInteractive;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(7);
  ({ benefit, guildId, isInteractive } = arg0);
  if (cResult[0] !== benefit.name) {
    const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: benefit.name };
    const tmp6 = hasOwnProperty(Text_Text.Text, obj2);
    cResult[0] = benefit.name;
    cResult[1] = tmp6;
    tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === benefit) {
    if (cResult[3] === guildId) {
      if (cResult[4] === isInteractive) {
        let tmp7;
        if (cResult[5] === tmp4) {
          tmp7 = cResult[6];
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
  let obj2;
  benefit = benefit.benefit;
  const obj = { benefit, guildId: benefit.guildId, isInteractive: benefit.isInteractive, children: hasOwnProperty(Text_Text.Text, obj2) };
  obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: benefit.name };
  return hasOwnProperty(closure_9, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let benefit;
  let guildId;
  let isInteractive;
  let items;
  let tmp11;
  let tmp5;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(14);
  ({ benefit, guildId, isInteractive } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] !== tmp4.emojiColons) {
    const obj2 = { style: tmp4.emojiColons, variant: "text-md/medium", color: "text-muted", children: ":" };
    const tmp7 = hasOwnProperty(Text_Text.Text, obj2);
    cResult[0] = tmp4.emojiColons;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== benefit.name) {
    const obj3 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: benefit.name };
    const tmp10 = hasOwnProperty(Text_Text.Text, obj3);
    cResult[2] = benefit.name;
    cResult[3] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== tmp4.emojiColons) {
    const obj4 = { style: tmp4.emojiColons, variant: "text-md/medium", color: "text-muted", children: ":" };
    const tmp13 = hasOwnProperty(Text_Text.Text, obj4);
    cResult[4] = tmp4.emojiColons;
    cResult[5] = tmp13;
    tmp11 = tmp13;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] === benefit.id) {
    if (cResult[7] === guildId) {
      if (cResult[8] === isInteractive) {
        if (cResult[9] === tmp4.emojiRow) {
          if (cResult[10] === tmp5) {
            if (cResult[11] === tmp8) {
              let tmp14;
              if (cResult[12] === tmp11) {
                tmp14 = cResult[13];
              }
              return tmp14;
            }
          }
        }
      }
    }
  }
  const obj5 = { emoji: benefit.id, guildId, contentStyle: tmp4.emojiRow, isInteractive, children: items };
  items = [tmp5, tmp8, tmp11];
  const tmp15 = metroRequire(closure_8, obj5);
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
  let guildId;
  let isInteractive;
  let items;
  benefit = benefit.benefit;
  ({ guildId, isInteractive } = benefit);
  const tmp = closure_7();
  const obj = { emoji: benefit.id, guildId, contentStyle: tmp.emojiRow, isInteractive, children: items };
  items = [, , ];
  const obj2 = { style: tmp.emojiColons, variant: "text-md/medium", color: "text-muted", children: ":" };
  items[0] = hasOwnProperty(Text_Text.Text, obj2);
  const obj3 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: benefit.name };
  items[1] = hasOwnProperty(Text_Text.Text, obj3);
  const obj4 = { style: tmp.emojiColons, variant: "text-md/medium", color: "text-muted", children: ":" };
  items[2] = hasOwnProperty(Text_Text.Text, obj4);
  return metroRequire(closure_8, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let benefit;
  let guildId;
  let isInteractive;
  let tmp3;
  const obj = react2;
  const cResult = obj.c(12);
  ({ benefit, guildId, isInteractive } = arg0);
  if ("roles" in benefit) {
    if (cResult[0] === benefit) {
      if (cResult[1] === guildId) {
        let tmp11;
        if (cResult[2] === isInteractive) {
          tmp11 = cResult[3];
        }
        tmp3 = tmp11;
      }
    }
    const obj2 = { benefit, guildId, isInteractive };
    const tmp14 = hasOwnProperty(closure_12, obj2);
    cResult[0] = benefit;
    cResult[1] = guildId;
    cResult[2] = isInteractive;
    cResult[3] = tmp14;
    tmp11 = tmp14;
  } else if (benefit.ref_type === constants.CHANNEL) {
    if (cResult[4] === benefit) {
      if (cResult[5] === guildId) {
        let tmp7;
        if (cResult[6] === isInteractive) {
          tmp7 = cResult[7];
        }
        tmp3 = tmp7;
      }
    }
    const obj3 = { benefit, guildId, isInteractive };
    const tmp10 = hasOwnProperty(closure_10, obj3);
    cResult[4] = benefit;
    cResult[5] = guildId;
    cResult[6] = isInteractive;
    cResult[7] = tmp10;
    tmp7 = tmp10;
  } else {
    if (cResult[8] === benefit) {
      if (cResult[9] === guildId) {
        if (cResult[10] === isInteractive) {
          tmp3 = cResult[11];
        }
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
  return tmp3;
}) : ((arg0) => {
  let benefit;
  let guildId;
  let isInteractive;
  let tmp4;
  ({ benefit, guildId, isInteractive } = arg0);
  if ("roles" in benefit) {
    const obj2 = { benefit, guildId, isInteractive };
    tmp4 = hasOwnProperty(closure_12, obj2);
  } else if (benefit.ref_type === constants.CHANNEL) {
    const obj3 = { benefit, guildId, isInteractive };
    tmp4 = hasOwnProperty(closure_10, obj3);
  } else {
    const obj = { benefit, guildId, isInteractive };
    tmp4 = hasOwnProperty(closure_11, obj);
  }
  return tmp4;
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitPreview.tsx");

export const GuildRoleSubscriptionBenefitPreview = tmp4;