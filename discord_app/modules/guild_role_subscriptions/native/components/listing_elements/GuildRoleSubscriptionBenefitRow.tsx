// discord_app/modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionBenefitRow.tsx
import c from "../../../../../../_runtime/00576_c.js";
import native from "../../../../../design/void/native.tsx";
import UnicodeEmojisDefault from "../../../../emojis/UnicodeEmojis.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import useChannelNameDefault from "../../../../channel/useChannelName.tsx";
import EmojiIconDefault from "../EmojiIcon.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4890);
let closure_7 = createStyles.createStyles({
  container: { flexDirection: "row", justifyContent: "flex-start" },
  textContainer: { flex: 1, justifyContent: "center" },
  description: { marginTop: 2 },
  channelTitle: { flexDirection: "row", alignItems: "center" },
  channelIcon: { width: 16, height: 16, marginEnd: 8 },
});
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
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
          const obj4 = {
            style: tmp4.description,
            variant: "text-sm/normal",
            color: "interactive-text-default",
            children: description,
          };
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
    }
  : (description) => {
      description = description.description;
      ({ emojiId, guildId, title } = description);
      const tmp = closure_7();
      const obj = { style: tmp.container, children: null };
      const items = [
        hasOwnProperty(EmojiIconDefault, { guildId, id: emojiId, size: 22, fontSize: 18 }),
        hasOwnProperty(native.Spacer, { size: 16 }),
      ];
      const obj2 = { style: tmp.textContainer, children: null };
      const items1 = [title];
      let tmp4Result = null;
      if (null != description) {
        const obj3 = {
          style: tmp.description,
          variant: "text-sm/normal",
          color: "interactive-text-default",
          children: description,
        };
        tmp4Result = hasOwnProperty(Text_Text.Text, obj3);
      }
      items1[1] = tmp4Result;
      obj2.children = items1;
      items[2] = timestampProducer(View, obj2);
      obj.children = items;
      return timestampProducer(View, obj);
    };
fn(558);
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (benefit) => {
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
        const fn = function f() {
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
      const tmp10 = useChannelNameDefault(stateFromStores);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
        const intl = tmp(1126).intl;
        const _HermesInternal = HermesInternal;
        obj2.children = "[" + intl.string(tmp(1126).t.bz1PZX) + "]";
        const tmp13 = closure_5(tmp(4886).Text, obj2);
        cResult[4] = tmp13;
        let tmp11 = tmp13;
      } else {
        tmp11 = cResult[4];
      }
      if (null == stateFromStores) {
        if (cResult[16] !== benefit) {
          if (null != benefit.emoji_id) {
            let str3 = benefit.emoji_id;
          } else {
            str3 = "";
            if (null != benefit.emoji_name) {
              str3 = UnicodeEmojisDefault.convertSurrogateToName(benefit.emoji_name, false);
              const tmp9Result = UnicodeEmojisDefault;
            }
          }
          cResult[16] = benefit;
          cResult[17] = str3;
        } else {
          if (cResult[18] === benefit.description) {
            if (cResult[19] === guildId) {
              if (cResult[20] === tmp27) {
                if (cResult[21] === tmp11) {
                  let tmp29 = cResult[22];
                }
                return tmp29;
              }
            }
          }
          const obj3 = { emojiId: cResult[17], guildId, title: tmp11, description: benefit.description };
          const tmp32 = closure_5(closure_8, obj3);
          cResult[18] = benefit.description;
          cResult[19] = guildId;
          cResult[20] = cResult[17];
          cResult[21] = tmp11;
          cResult[22] = tmp32;
          tmp29 = tmp32;
        }
      } else {
        ({ channelTitle: channelTitle2, channelIcon } = channelTitle);
        if (cResult[5] !== stateFromStores) {
          const channelIcon1 = tmp(5812).getChannelIcon(stateFromStores);
          cResult[5] = stateFromStores;
          cResult[6] = channelIcon1;
          let tmp14 = channelIcon1;
          const tmpResult2 = tmp(5812);
        } else {
          tmp14 = cResult[6];
        }
        if (cResult[7] === channelTitle.channelIcon) {
          if (cResult[8] === tmp14) {
            let tmp16 = cResult[9];
          }
          if (cResult[10] !== tmp10) {
            const obj4 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: tmp10 };
            const tmp21 = closure_5(tmp(4886).Text, obj4);
            cResult[10] = tmp10;
            cResult[11] = tmp21;
            let tmp19 = tmp21;
          } else {
            tmp19 = cResult[11];
          }
          if (cResult[12] === channelTitle.channelTitle) {
            if (cResult[13] === tmp16) {
            }
          }
          const obj5 = { style: channelTitle2, children: null };
          channelTitle2 = [tmp16, tmp19];
          obj5.children = channelTitle2;
          const tmp25 = closure_6(View, obj5);
          channelTitle = channelTitle.channelTitle;
          cResult[12] = channelTitle;
          cResult[13] = tmp16;
          cResult[14] = tmp19;
          cResult[15] = tmp25;
        }
        const obj6 = { style: channelIcon, size: tmp(1188).Icon.Sizes.CUSTOM, source: tmp14 };
        const tmp18 = closure_5(tmp(1188).Icon, obj6);
        cResult[7] = channelTitle.channelIcon;
        cResult[8] = tmp14;
        cResult[9] = tmp18;
        tmp16 = tmp18;
      }
      const tmpResult = benefit(504);
    }
  : (benefit) => {
      benefit = benefit.benefit;
      const tmp = closure_7();
      const items = [ChannelStore];
      const items1 = [benefit.ref_id];
      const stateFromStores = benefit(504).useStateFromStores(
        items,
        () => ChannelStore.getChannel(benefit.ref_id),
        items1,
      );
      const obj = benefit(504);
      const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
      const intl = benefit(1126).intl;
      obj2.children = "[" + intl.string(benefit(1126).t.bz1PZX) + "]";
      let tmp8 = closure_5(benefit(4886).Text, obj2);
      if (null != stateFromStores) {
        const obj3 = { style: tmp.channelTitle, children: null };
        const obj4 = {
          style: tmp.channelIcon,
          size: tmp2(1188).Icon.Sizes.CUSTOM,
          source: tmp2(5812).getChannelIcon(stateFromStores),
        };
        const items2 = [closure_5(tmp2(1188).Icon, obj4)];
        const obj5 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: tmp6 };
        items2[1] = closure_5(tmp2(4886).Text, obj5);
        obj3.children = items2;
        tmp8 = closure_6(View, obj3);
        const tmp2Result = tmp2(5812);
      }
      if (null != benefit.emoji_id) {
        let str = benefit.emoji_id;
      } else {
        str = "";
        if (null != benefit.emoji_name) {
          str = UnicodeEmojisDefault.convertSurrogateToName(benefit.emoji_name, false);
          const tmp5Result = UnicodeEmojisDefault;
        }
      }
      return closure_5(closure_8, {
        emojiId: str,
        guildId: benefit.guildId,
        title: tmp8,
        description: benefit.description,
      });
    };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionBenefitRow.tsx",
);

export const ChannelBenefitRow = tmp4;
export const IntangibleBenefitRow = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(9);
      ({ benefit, guildId } = arg0);
      if (cResult[0] !== benefit) {
        if (null != benefit.emoji_id) {
          let str = benefit.emoji_id;
        } else {
          str = "";
          if (null != benefit.emoji_name) {
            str = UnicodeEmojisDefault.convertSurrogateToName(benefit.emoji_name, false);
          }
        }
        cResult[0] = benefit;
        cResult[1] = str;
      } else {
        if (cResult[2] !== benefit.name) {
          const obj3 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: benefit.name };
          const tmp10 = hasOwnProperty(Text_Text.Text, obj3);
          cResult[2] = benefit.name;
          cResult[3] = tmp10;
          let tmp8 = tmp10;
        } else {
          tmp8 = cResult[3];
        }
        if (cResult[4] === benefit.description) {
          if (cResult[5] === guildId) {
            if (cResult[6] === tmp4) {
              if (cResult[7] === tmp8) {
                let tmp11 = cResult[8];
              }
              return tmp11;
            }
          }
        }
        const obj4 = { emojiId: cResult[1], guildId, title: tmp8, description: benefit.description };
        const tmp14 = hasOwnProperty(closure_8, obj4);
        cResult[4] = benefit.description;
        cResult[5] = guildId;
        cResult[6] = cResult[1];
        cResult[7] = tmp8;
        cResult[8] = tmp14;
        tmp11 = tmp14;
      }
    }
  : (benefit) => {
      benefit = benefit.benefit;
      if (null != benefit.emoji_id) {
        let str = benefit.emoji_id;
      } else {
        str = "";
        if (null != benefit.emoji_name) {
          str = UnicodeEmojisDefault.convertSurrogateToName(benefit.emoji_name, false);
        }
      }
      const obj2 = {
        emojiId: str,
        guildId: benefit.guildId,
        title: hasOwnProperty(Text_Text.Text, {
          variant: "text-md/medium",
          color: "mobile-text-heading-primary",
          children: benefit.name,
        }),
        description: benefit.description,
      };
      return hasOwnProperty(closure_8, obj2);
    };
