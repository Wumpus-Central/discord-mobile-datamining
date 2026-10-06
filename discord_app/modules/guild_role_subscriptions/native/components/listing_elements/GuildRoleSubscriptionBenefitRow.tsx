// === Module 15075: GuildRoleSubscriptionBenefitRow ===

// Module 15075 (GuildRoleSubscriptionBenefitRow)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import native from "native" /* 1188 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4529 */;
import Text_Text from "Text/Text" /* 4892 */;
import useChannelNameDefault from "useChannelName" /* 5049 */;
import EmojiIconDefault from "EmojiIcon" /* 15073 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ container: { flexDirection: "row", justifyContent: "flex-start" }, textContainer: { flex: 1, justifyContent: "center" }, description: { marginTop: 2 }, channelTitle: { flexDirection: "row", alignItems: "center" }, channelIcon: { width: 16, height: 16, marginEnd: 8 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let description;
  let emojiId;
  let guildId;
  let items;
  let items1;
  let title;
  const obj = react2;
  const cResult = obj.c(15);
  ({ emojiId, guildId, title, description } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] === emojiId) {
    let tmp5;
    let tmp8;
    if (cResult[1] === guildId) {
      tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp10 = hasOwnProperty(native.Spacer, { size: 16 });
      cResult[3] = tmp10;
      tmp8 = tmp10;
    } else {
      tmp8 = cResult[3];
    }
    if (cResult[4] === description) {
      let tmp11;
      if (cResult[5] === tmp4.description) {
        tmp11 = cResult[6];
      }
      if (cResult[7] === tmp4.textContainer) {
        if (cResult[8] === tmp11) {
          let tmp14;
          if (cResult[9] === title) {
            tmp14 = cResult[10];
          }
          if (cResult[11] === tmp4.container) {
            if (cResult[12] === tmp5) {
              let tmp18;
              if (cResult[13] === tmp14) {
                tmp18 = cResult[14];
              }
              return tmp18;
            }
          }
          const obj2 = { style: tmp4.container, children: items };
          items = [tmp5, tmp8, tmp14];
          const tmp21 = metroRequire(View, obj2);
          cResult[11] = tmp4.container;
          cResult[12] = tmp5;
          cResult[13] = tmp14;
          cResult[14] = tmp21;
          tmp18 = tmp21;
        }
      }
      const obj3 = { style: tmp4.textContainer, children: items1 };
      items1 = [title, tmp11];
      const tmp17 = metroRequire(View, obj3);
      cResult[7] = tmp4.textContainer;
      cResult[8] = tmp11;
      cResult[9] = title;
      cResult[10] = tmp17;
      tmp14 = tmp17;
    }
    let tmp12 = null;
    if (null != description) {
      const obj4 = { style: tmp4.description, variant: "text-sm/normal", color: "interactive-text-default", children: description };
      tmp12 = hasOwnProperty(Text_Text.Text, obj4);
    }
    cResult[4] = description;
    cResult[5] = tmp4.description;
    cResult[6] = tmp12;
    tmp11 = tmp12;
  }
  const tmp6 = hasOwnProperty(EmojiIconDefault, { guildId, id: emojiId, size: 22, fontSize: 18 });
  cResult[0] = emojiId;
  cResult[1] = guildId;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : ((description) => {
  let emojiId;
  let guildId;
  let items;
  let items1;
  let title;
  description = description.description;
  ({ emojiId, guildId, title } = description);
  const tmp = closure_7();
  const obj = { style: tmp.container, children: items };
  items = [hasOwnProperty(EmojiIconDefault, { guildId, id: emojiId, size: 22, fontSize: 18 }), hasOwnProperty(native.Spacer, { size: 16 }), ];
  const obj2 = { style: tmp.textContainer, children: items1 };
  items1 = [title, ];
  let tmp4Result = null;
  if (null != description) {
    const obj3 = { style: tmp.description, variant: "text-sm/normal", color: "interactive-text-default", children: description };
    tmp4Result = hasOwnProperty(Text_Text.Text, obj3);
  }
  items1[1] = tmp4Result;
  items[2] = metroRequire(View, obj2);
  return metroRequire(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((benefit) => {
  let channelIcon;
  let channelTitle;
  let first;
  let intl;
  let items2;
  let tmp12;
  let tmp27;
  let tmp7;
  let tmp8;
  const obj = benefit(576);
  const cResult = obj.c(23);
  benefit = benefit.benefit;
  const guildId = benefit.guildId;
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== benefit.ref_id) {
    const fn = function f() {
      return ChannelStore.getChannel(benefit.ref_id);
    };
    const items1 = [benefit.ref_id];
    cResult[1] = benefit.ref_id;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = benefit(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  const tmp11 = useChannelNameDefault(stateFromStores);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: "[" + intl.string(benefit(1126).t.bz1PZX) + "]" };
    const Text = tmp(4892).Text;
    intl = tmp(1126).intl;
    const _HermesInternal = HermesInternal;
    const tmp14 = closure_5(Text, obj2);
    cResult[4] = tmp14;
    tmp12 = tmp14;
  } else {
    tmp12 = cResult[4];
  }
  if (null != stateFromStores) {
    let tmp15;
    ({ channelTitle, channelIcon } = tmp4);
    if (cResult[5] !== stateFromStores) {
      const tmpResult2 = benefit(5819);
      const channelIcon1 = tmpResult2.getChannelIcon(stateFromStores);
      cResult[5] = stateFromStores;
      cResult[6] = channelIcon1;
      tmp15 = channelIcon1;
    } else {
      tmp15 = cResult[6];
    }
    if (cResult[7] === tmp4.channelIcon) {
      let tmp17;
      let tmp20;
      if (cResult[8] === tmp15) {
        tmp17 = cResult[9];
      }
      if (cResult[10] !== tmp11) {
        const obj3 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: tmp11 };
        const tmp22 = closure_5(benefit(4892).Text, obj3);
        cResult[10] = tmp11;
        cResult[11] = tmp22;
        tmp20 = tmp22;
      } else {
        tmp20 = cResult[11];
      }
      if (cResult[12] === tmp4.channelTitle) {
        if (cResult[13] === tmp17) {
          let tmp23;
          if (cResult[14] === tmp20) {
            tmp23 = cResult[15];
          }
          tmp12 = tmp23;
        }
      }
      const obj4 = { style: channelTitle, children: items2 };
      items2 = [tmp17, tmp20];
      const tmp26 = closure_6(View, obj4);
      cResult[12] = tmp4.channelTitle;
      cResult[13] = tmp17;
      cResult[14] = tmp20;
      cResult[15] = tmp26;
      tmp23 = tmp26;
    }
    const obj5 = { style: channelIcon, size: benefit(1188).Icon.Sizes.CUSTOM, source: tmp15 };
    const Icon = tmp(1188).Icon;
    const tmp19 = closure_5(Icon, obj5);
    cResult[7] = tmp4.channelIcon;
    cResult[8] = tmp15;
    cResult[9] = tmp19;
    tmp17 = tmp19;
  }
  if (cResult[16] !== benefit) {
    let str3;
    if (null != benefit.emoji_id) {
      str3 = benefit.emoji_id;
    } else {
      str3 = "";
      if (null != benefit.emoji_name) {
        const tmp10Result = UnicodeEmojisDefault;
        str3 = tmp10Result.convertSurrogateToName(benefit.emoji_name, false);
      }
    }
    cResult[16] = benefit;
    cResult[17] = str3;
    tmp27 = str3;
  } else {
    tmp27 = cResult[17];
  }
  if (cResult[18] === benefit.description) {
    if (cResult[19] === guildId) {
      if (cResult[20] === tmp27) {
        let tmp28;
        if (cResult[21] === tmp12) {
          tmp28 = cResult[22];
        }
        return tmp28;
      }
    }
  }
  const obj6 = { emojiId: tmp27, guildId, title: tmp12, description: benefit.description };
  const tmp29 = closure_5(closure_8, obj6);
  cResult[18] = benefit.description;
  cResult[19] = guildId;
  cResult[20] = tmp27;
  cResult[21] = tmp12;
  cResult[22] = tmp29;
  tmp28 = tmp29;
}) : ((benefit) => {
  let intl;
  let items2;
  let str;
  let tmp2Result;
  benefit = benefit.benefit;
  const guildId = benefit.guildId;
  const tmp = closure_7();
  const items = [ChannelStore];
  const items1 = [benefit.ref_id];
  const obj = benefit(504);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(benefit.ref_id), items1);
  const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: "[" + intl.string(benefit(1126).t.bz1PZX) + "]" };
  const tmp6 = useChannelNameDefault(stateFromStores);
  const Text = benefit(4892).Text;
  intl = benefit(1126).intl;
  let tmp8 = closure_5(Text, obj2);
  if (null != stateFromStores) {
    const obj3 = { style: tmp.channelTitle, children: items2 };
    const obj4 = { style: tmp.channelIcon, size: benefit(1188).Icon.Sizes.CUSTOM, source: tmp2Result.getChannelIcon(stateFromStores) };
    const Icon = tmp2(1188).Icon;
    tmp2Result = benefit(5819);
    items2 = [closure_5(Icon, obj4), ];
    const obj5 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: tmp6 };
    items2[1] = closure_5(benefit(4892).Text, obj5);
    tmp8 = closure_6(View, obj3);
  }
  if (null != benefit.emoji_id) {
    str = benefit.emoji_id;
  } else {
    str = "";
    if (null != benefit.emoji_name) {
      const tmp5Result = UnicodeEmojisDefault;
      str = tmp5Result.convertSurrogateToName(benefit.emoji_name, false);
    }
  }
  const obj6 = { emojiId: str, guildId, title: tmp8, description: benefit.description };
  return closure_5(closure_8, obj6);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let benefit;
  let guildId;
  let tmp4;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(9);
  ({ benefit, guildId } = arg0);
  if (cResult[0] !== benefit) {
    let str;
    if (null != benefit.emoji_id) {
      str = benefit.emoji_id;
    } else {
      str = "";
      if (null != benefit.emoji_name) {
        const obj2 = UnicodeEmojisDefault;
        str = obj2.convertSurrogateToName(benefit.emoji_name, false);
      }
    }
    cResult[0] = benefit;
    cResult[1] = str;
    tmp4 = str;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== benefit.name) {
    const obj3 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: benefit.name };
    const tmp9 = hasOwnProperty(Text_Text.Text, obj3);
    cResult[2] = benefit.name;
    cResult[3] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === benefit.description) {
    if (cResult[5] === guildId) {
      if (cResult[6] === tmp4) {
        let tmp10;
        if (cResult[7] === tmp7) {
          tmp10 = cResult[8];
        }
        return tmp10;
      }
    }
  }
  const obj4 = { emojiId: tmp4, guildId, title: tmp7, description: benefit.description };
  const tmp11 = hasOwnProperty(closure_8, obj4);
  cResult[4] = benefit.description;
  cResult[5] = guildId;
  cResult[6] = tmp4;
  cResult[7] = tmp7;
  cResult[8] = tmp11;
  tmp10 = tmp11;
}) : ((benefit) => {
  let obj3;
  let str;
  benefit = benefit.benefit;
  const guildId = benefit.guildId;
  if (null != benefit.emoji_id) {
    str = benefit.emoji_id;
  } else {
    str = "";
    if (null != benefit.emoji_name) {
      const obj = UnicodeEmojisDefault;
      str = obj.convertSurrogateToName(benefit.emoji_name, false);
    }
  }
  const obj2 = { emojiId: str, guildId, title: hasOwnProperty(Text_Text.Text, obj3), description: benefit.description };
  obj3 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: benefit.name };
  return hasOwnProperty(closure_8, obj2);
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionBenefitRow.tsx");

export const ChannelBenefitRow = tmp4;
export const IntangibleBenefitRow = tmp5;