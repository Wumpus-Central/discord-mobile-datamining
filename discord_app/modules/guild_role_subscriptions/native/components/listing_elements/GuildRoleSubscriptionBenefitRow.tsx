// === Module 17108: GuildRoleSubscriptionBenefitRow ===

// Module 17108 (GuildRoleSubscriptionBenefitRow)
import c from "c" /* 576 */;
import native from "native" /* 1199 */;
import Text_Text from "Text/Text" /* 5271 */;
import useChannelNameDefault from "useChannelName" /* 5641 */;
import EmojiIconDefault from "EmojiIcon" /* 17106 */;
import GuildRoleSubscriptionBenefitUtils from "GuildRoleSubscriptionBenefitUtils" /* 17109 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4857 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5005);
let closure_7 = createStyles.createStyles({ container: { flexDirection: "row", justifyContent: "flex-start" }, textContainer: { flex: 1, justifyContent: "center" }, description: { marginTop: 2 }, channelTitle: { flexDirection: "row", alignItems: "center" }, channelIcon: { width: 16, height: 16, marginEnd: 8 } });
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function BenefitRow(arg0) {
  const cResult = c.c(15);
  ({ emojiId, guildId, title, description } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] === emojiId) {
    if (cResult[1] === guildId) {
      let tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp10 = hasOwnProperty(native.Spacer, { size: 16 });
      cResult[3] = tmp10;
      let tmp8 = tmp10;
    } else {
      tmp8 = cResult[3];
    }
    if (cResult[4] === description) {
      if (cResult[5] === tmp4.description) {
        let tmp11 = cResult[6];
      }
      if (cResult[7] === tmp4.textContainer) {
        if (cResult[8] === tmp11) {
          if (cResult[9] === title) {
            let tmp14 = cResult[10];
          }
          if (cResult[11] === tmp4.container) {
            if (cResult[12] === tmp5) {
              if (cResult[13] === tmp14) {
                let tmp18 = cResult[14];
              }
              return tmp18;
            }
          }
          const obj2 = { style: tmp4.container, children: null };
          const items = [tmp5, tmp8, tmp14];
          obj2.children = items;
          const tmp21 = timestampProducer(View, obj2);
          cResult[11] = tmp4.container;
          cResult[12] = tmp5;
          cResult[13] = tmp14;
          cResult[14] = tmp21;
          tmp18 = tmp21;
        }
      }
      const obj3 = { style: tmp4.textContainer, children: null };
      const items1 = [title, tmp11];
      obj3.children = items1;
      const tmp17 = timestampProducer(View, obj3);
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
}) : (function BenefitRow(description) {
  description = description.description;
  ({ emojiId, guildId, title } = description);
  const tmp = closure_7();
  const obj = { style: tmp.container, children: null };
  const items = [hasOwnProperty(EmojiIconDefault, { guildId, id: emojiId, size: 22, fontSize: 18 }), hasOwnProperty(native.Spacer, { size: 16 }), ];
  const obj2 = { style: tmp.textContainer, children: null };
  const items1 = [title, ];
  let tmp4Result = null;
  if (null != description) {
    const obj3 = { style: tmp.description, variant: "text-sm/normal", color: "interactive-text-default", children: description };
    tmp4Result = hasOwnProperty(Text_Text.Text, obj3);
  }
  items1[1] = tmp4Result;
  obj2.children = items1;
  items[2] = timestampProducer(View, obj2);
  obj.children = items;
  return timestampProducer(View, obj);
});
fn(558);
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelBenefitRow(benefit) {
  const cResult = benefit(576).c(23);
  benefit = benefit.benefit;
  const guildId = benefit.guildId;
  let channelTitle = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== benefit.ref_id) {
    const fn = function h() {
      return ChannelStore.getChannel(benefit.ref_id);
    };
    const items1 = [benefit.ref_id];
    cResult[1] = benefit.ref_id;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = benefit(576);
  const stateFromStores = benefit(504).useStateFromStores(first, tmp6, tmp7);
  const tmp9 = useChannelNameDefault(stateFromStores);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
    const intl = tmp(1125).intl;
    const _HermesInternal = HermesInternal;
    obj2.children = "[" + intl.string(tmp(1125).t.bz1PZX) + "]";
    const tmp12 = closure_5(tmp(5271).Text, obj2);
    cResult[4] = tmp12;
    let tmp10 = tmp12;
  } else {
    tmp10 = cResult[4];
  }
  if (null == stateFromStores) {
    if (cResult[16] !== benefit) {
      const benefitEmojiId = tmp(17109).getBenefitEmojiId(benefit);
      cResult[16] = benefit;
      cResult[17] = benefitEmojiId;
      let tmp26 = benefitEmojiId;
      const tmpResult3 = tmp(17109);
    } else {
      tmp26 = cResult[17];
    }
    if (cResult[18] === benefit.description) {
      if (cResult[19] === guildId) {
        if (cResult[20] === tmp26) {
          if (cResult[21] === tmp10) {
            let tmp28 = cResult[22];
          }
          return tmp28;
        }
      }
    }
    const obj3 = { emojiId: tmp26, guildId, title: tmp10, description: benefit.description };
    const tmp31 = closure_5(closure_8, obj3);
    cResult[18] = benefit.description;
    cResult[19] = guildId;
    cResult[20] = tmp26;
    cResult[21] = tmp10;
    cResult[22] = tmp31;
    tmp28 = tmp31;
  } else {
    ({ channelTitle: channelTitle2, channelIcon } = channelTitle);
    if (cResult[5] !== stateFromStores) {
      const channelIcon1 = tmp(8561).getChannelIcon(stateFromStores);
      cResult[5] = stateFromStores;
      cResult[6] = channelIcon1;
      let tmp13 = channelIcon1;
      const tmpResult4 = tmp(8561);
    } else {
      tmp13 = cResult[6];
    }
    if (cResult[7] === channelTitle.channelIcon) {
      if (cResult[8] === tmp13) {
        let tmp15 = cResult[9];
      }
      if (cResult[10] !== tmp9) {
        const obj4 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: tmp9 };
        const tmp20 = closure_5(tmp(5271).Text, obj4);
        cResult[10] = tmp9;
        cResult[11] = tmp20;
        let tmp18 = tmp20;
      } else {
        tmp18 = cResult[11];
      }
      if (cResult[12] === channelTitle.channelTitle) {
        if (cResult[13] === tmp15) {
        }
      }
      const obj5 = { style: channelTitle2, children: null };
      channelTitle2 = [tmp15, tmp18];
      obj5.children = channelTitle2;
      const tmp24 = closure_6(View, obj5);
      channelTitle = channelTitle.channelTitle;
      cResult[12] = channelTitle;
      cResult[13] = tmp15;
      cResult[14] = tmp18;
      cResult[15] = tmp24;
    }
    const obj6 = { style: channelIcon, size: tmp(1199).Icon.Sizes.CUSTOM, source: tmp13 };
    const tmp17 = closure_5(tmp(1199).Icon, obj6);
    cResult[7] = channelTitle.channelIcon;
    cResult[8] = tmp13;
    cResult[9] = tmp17;
    tmp15 = tmp17;
  }
  const tmpResult = benefit(504);
}) : (function ChannelBenefitRow(benefit) {
  benefit = benefit.benefit;
  const tmp = closure_7();
  const items = [ChannelStore];
  const items1 = [benefit.ref_id];
  const stateFromStores = benefit(504).useStateFromStores(items, () => ChannelStore.getChannel(benefit.ref_id), items1);
  const obj = benefit(504);
  const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = benefit(1125).intl;
  obj2.children = "[" + intl.string(benefit(1125).t.bz1PZX) + "]";
  let tmp7 = closure_5(benefit(5271).Text, obj2);
  if (null != stateFromStores) {
    const obj3 = { style: tmp.channelTitle, children: null };
    const obj4 = { style: tmp.channelIcon, size: tmp2(1199).Icon.Sizes.CUSTOM, source: tmp2(8561).getChannelIcon(stateFromStores) };
    const items2 = [closure_5(tmp2(1199).Icon, obj4), ];
    const obj5 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: tmp5 };
    items2[1] = closure_5(tmp2(5271).Text, obj5);
    obj3.children = items2;
    tmp7 = closure_6(View, obj3);
    const tmp2Result = tmp2(8561);
  }
  const obj6 = { emojiId: null, guildId: null, title: null, description: null };
  tmp5 = useChannelNameDefault(stateFromStores);
  obj6.emojiId = benefit(17109).getBenefitEmojiId(benefit);
  obj6.guildId = benefit.guildId;
  obj6.title = tmp7;
  obj6.description = benefit.description;
  return closure_5(closure_8, obj6);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionBenefitRow.tsx");

export const ChannelBenefitRow = tmp4;
export const IntangibleBenefitRow = ReactCompilerGating.isReactCompilerEnabled() ? (function IntangibleBenefitRow(arg0) {
  const cResult = c.c(9);
  ({ benefit, guildId } = arg0);
  if (cResult[0] !== benefit) {
    const benefitEmojiId = GuildRoleSubscriptionBenefitUtils.getBenefitEmojiId(benefit);
    cResult[0] = benefit;
    cResult[1] = benefitEmojiId;
    let tmp4 = benefitEmojiId;
    const tmpResult = GuildRoleSubscriptionBenefitUtils;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== benefit.name) {
    const obj2 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: benefit.name };
    const tmp8 = hasOwnProperty(Text_Text.Text, obj2);
    cResult[2] = benefit.name;
    cResult[3] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] === benefit.description) {
    if (cResult[5] === guildId) {
      if (cResult[6] === tmp4) {
        if (cResult[7] === tmp6) {
          let tmp9 = cResult[8];
        }
        return tmp9;
      }
    }
  }
  const tmp10 = hasOwnProperty(closure_8, { emojiId: tmp4, guildId, title: tmp6, description: benefit.description });
  cResult[4] = benefit.description;
  cResult[5] = guildId;
  cResult[6] = tmp4;
  cResult[7] = tmp6;
  cResult[8] = tmp10;
  tmp9 = tmp10;
  const obj3 = { emojiId: tmp4, guildId, title: tmp6, description: benefit.description };
}) : (function IntangibleBenefitRow(benefit) {
  benefit = benefit.benefit;
  const obj = { emojiId: GuildRoleSubscriptionBenefitUtils.getBenefitEmojiId(benefit), guildId: benefit.guildId, title: hasOwnProperty(Text_Text.Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: benefit.name }), description: benefit.description };
  return hasOwnProperty(closure_8, obj);
});