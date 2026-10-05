// discord_app/modules/guild_role_subscriptions/native/guild_settings/welcome/CreatorHighlightSection.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import LinkingDefault from "../../../../../lib/native/Linking.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import _modDef9904 from "../../../../../../_runtime/metro/09904__.js";
import EmojiIconDefault from "../../components/EmojiIcon.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, FlatList: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  horizontalContainer: { flexDirection: "row" },
  serverSubscriberCount: { marginTop: 8 },
  subscriberCountContainer: {
    alignItems: "center",
    backgroundColor: nativeDefault.unsafe_rawColors.BRAND_530,
    paddingEnd: 8,
    borderRadius: nativeDefault.radii.xs,
    overflow: "hidden",
  },
  subscriberCount: null,
  subscriberCountIcon: null,
  cardContainer: null,
  cardHeaderContainer: null,
  guildIcon: null,
  ownerQuote: null,
  ownerUsername: null,
  premiumEmojisTitle: null,
  viewServerButtonContainer: null,
  viewServerButton: null,
  emojiSectionContainer: null,
  emojiContainer: null,
  emojiListItem: null,
  emoji: null,
};
let obj3 = {
  alignItems: "center",
  backgroundColor: nativeDefault.unsafe_rawColors.BRAND_530,
  paddingEnd: 8,
  borderRadius: nativeDefault.radii.xs,
  overflow: "hidden",
};
obj2.subscriberCount = {
  backgroundColor: nativeDefault.unsafe_rawColors.BRAND_630,
  paddingHorizontal: 8,
  paddingVertical: 4,
};
obj2.subscriberCountIcon = { marginStart: 8, marginEnd: 6, marginVertical: 4, alignSelf: "center" };
let obj4 = { backgroundColor: nativeDefault.unsafe_rawColors.BRAND_630, paddingHorizontal: 8, paddingVertical: 4 };
obj2.cardContainer = {
  width: 276,
  marginEnd: 12,
  paddingHorizontal: 24,
  paddingVertical: 16,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
};
obj2.cardHeaderContainer = { flex: 1, justifyContent: "flex-start", alignItems: "flex-start" };
obj2.guildIcon = { width: 60, height: 60, borderRadius: 6, marginEnd: 16 };
obj2.ownerQuote = { marginTop: 24 };
obj2.ownerUsername = { marginTop: 8 };
obj2.premiumEmojisTitle = { marginTop: 32, textTransform: "uppercase" };
obj2.viewServerButtonContainer = { flex: 1, justifyContent: "flex-end" };
let obj5 = {
  width: 276,
  marginEnd: 12,
  paddingHorizontal: 24,
  paddingVertical: 16,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
};
obj2.viewServerButton = { width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, marginTop: 16 };
obj2.emojiSectionContainer = { flex: 1, justifyContent: "flex-start", alignItems: "flex-start" };
let obj6 = { width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, marginTop: 16 };
obj2.emojiContainer = {
  width: "100%",
  marginTop: 8,
  paddingHorizontal: 8,
  justifyContent: "space-around",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
  alignItems: "center",
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
};
obj2.emojiListItem = { marginHorizontal: 8 };
obj2.emoji = { height: 24, width: 24, marginVertical: 8 };
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(14);
      ({ subscriberCount, style } = arg0);
      const tmp4 = closure_8();
      if (cResult[0] === style) {
        if (cResult[1] === tmp4.horizontalContainer) {
          if (cResult[2] === tmp4.subscriberCountContainer) {
            let tmp5 = cResult[3];
          }
          if (cResult[4] === tmp4.subscriberCount) {
            if (cResult[5] === subscriberCount) {
              let tmp6 = cResult[6];
            }
            if (cResult[7] !== tmp4.subscriberCountIcon) {
              const obj2 = {
                size: native.Icon.Sizes.SMALL,
                color: nativeDefault.unsafe_rawColors.WHITE,
                style: tmp4.subscriberCountIcon,
                source: _modDef9904,
              };
              const tmp12 = timestampProducer(native.Icon, obj2);
              cResult[7] = tmp4.subscriberCountIcon;
              cResult[8] = tmp12;
              let tmp9 = tmp12;
            } else {
              tmp9 = cResult[8];
            }
            const _Symbol = Symbol;
            if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
              const obj3 = { variant: "text-sm/normal", color: "text-overlay-light", children: null };
              const intl = util.intl;
              obj3.children = intl.string(util.t["3NNXPW"]);
              const tmp16 = timestampProducer(Text_Text.Text, obj3);
              cResult[9] = tmp16;
              let tmp14 = tmp16;
            } else {
              tmp14 = cResult[9];
            }
            if (cResult[10] === tmp5) {
              if (cResult[11] === tmp6) {
                if (cResult[12] === tmp9) {
                  let tmp17 = cResult[13];
                }
                return tmp17;
              }
            }
            const obj4 = { style: tmp5, children: null };
            const items = [tmp6, tmp9, tmp14];
            obj4.children = items;
            const tmp20 = React5(React4, obj4);
            cResult[10] = tmp5;
            cResult[11] = tmp6;
            cResult[12] = tmp9;
            cResult[13] = tmp20;
            tmp17 = tmp20;
          }
          const obj5 = {
            style: tmp4.subscriberCount,
            variant: "text-sm/medium",
            color: "text-overlay-light",
            children: subscriberCount,
          };
          const tmp8 = timestampProducer(Text_Text.Text, obj5);
          cResult[4] = tmp4.subscriberCount;
          cResult[5] = subscriberCount;
          cResult[6] = tmp8;
          tmp6 = tmp8;
        }
      }
      const items1 = [, ,];
      ({ horizontalContainer: arr[0], subscriberCountContainer: arr[1] } = tmp4);
      items1[2] = style;
      cResult[0] = style;
      cResult[1] = tmp4.horizontalContainer;
      cResult[2] = tmp4.subscriberCountContainer;
      cResult[3] = items1;
      tmp5 = items1;
    }
  : (arg0) => {
      ({ subscriberCount, style } = arg0);
      const tmp = closure_8();
      const obj = { style: null, children: null };
      const items = [, ,];
      ({ horizontalContainer: arr[0], subscriberCountContainer: arr[1] } = tmp);
      items[2] = style;
      obj.style = items;
      const items1 = [
        timestampProducer(Text_Text.Text, {
          style: tmp.subscriberCount,
          variant: "text-sm/medium",
          color: "text-overlay-light",
          children: subscriberCount,
        }),
        timestampProducer(native.Icon, {
          size: native.Icon.Sizes.SMALL,
          color: nativeDefault.unsafe_rawColors.WHITE,
          style: tmp.subscriberCountIcon,
          source: _modDef9904,
        }),
      ];
      const obj4 = { variant: "text-sm/normal", color: "text-overlay-light", children: null };
      const intl = util.intl;
      obj4.children = intl.string(util.t["3NNXPW"]);
      items1[2] = timestampProducer(Text_Text.Text, obj4);
      obj.children = items1;
      return React5(React4, obj);
    };
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (highlightedCreatorGuild) => {
      const cResult = require("c").c(58);
      highlightedCreatorGuild = highlightedCreatorGuild.highlightedCreatorGuild;
      const tmp4 = closure_8();
      _require = tmp4;
      let obj = require("c");
      const typeConsolidationEyebrow = require("useTypeConsolidationTextTransform").useTypeConsolidationEyebrow(
        "CreatorHighlightSection",
        "text-xs/semibold",
      );
      const guild_id = highlightedCreatorGuild.guild_id;
      ({ quote, quote_attribution, quote_attribution_title } = highlightedCreatorGuild);
      const tmp7 = guild_id(17905)(guild_id, 3, 60);
      dependencyMap = tmp7;
      const hasAllImperativeDetails = tmp7.hasAllImperativeDetails;
      if (cResult[0] === tmp7.details) {
        if (cResult[1] === hasAllImperativeDetails) {
          let tmp9 = cResult[2];
        }
        if (tmp8) {
          const _Symbol2 = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp67 = closure_6(tmp6(17877), {});
            cResult[3] = tmp67;
            let tmp65 = tmp67;
          } else {
            tmp65 = cResult[3];
          }
          if (cResult[4] !== tmp4.cardContainer) {
            const obj3 = { style: tmp4.cardContainer, children: tmp65 };
            const tmp71 = closure_6(closure_4, obj3);
            cResult[4] = tmp4.cardContainer;
            cResult[5] = tmp71;
            let tmp68 = tmp71;
          } else {
            tmp68 = cResult[5];
          }
          return tmp68;
        } else if (hasAllImperativeDetails) {
          ({ guildName, guildAvatarUrl, subscriberCount, emojisToShow, notShownEmojiCount } = tmp7.details);
          if (cResult[6] !== guildAvatarUrl) {
            const obj4 = { uri: guildAvatarUrl };
            cResult[6] = guildAvatarUrl;
            cResult[7] = obj4;
            let tmp11 = obj4;
          } else {
            tmp11 = cResult[7];
          }
          if (cResult[8] === tmp4.guildIcon) {
            if (cResult[9] === tmp11) {
              let tmp12 = cResult[10];
            }
            if (cResult[11] !== guildName) {
              const obj5 = {
                variant: "heading-md/extrabold",
                color: "mobile-text-heading-primary",
                lineClamp: 1,
                lineBreakMode: "tail",
                children: guildName,
              };
              const tmp17 = closure_6(tmp(4886).Text, obj5);
              cResult[11] = guildName;
              cResult[12] = tmp17;
              let tmp15 = tmp17;
            } else {
              tmp15 = cResult[12];
            }
            if (cResult[13] === tmp4.serverSubscriberCount) {
              if (cResult[14] === subscriberCount) {
                let tmp18 = cResult[15];
              }
              if (cResult[16] === tmp4.cardHeaderContainer) {
                if (cResult[17] === tmp15) {
                  if (cResult[18] === tmp18) {
                    let tmp23 = cResult[19];
                  }
                  if (cResult[20] === tmp4.horizontalContainer) {
                    if (cResult[21] === tmp12) {
                      if (cResult[22] === tmp23) {
                        let tmp27 = cResult[23];
                      }
                      if (cResult[24] === quote) {
                        if (cResult[25] === tmp4.ownerQuote) {
                          let tmp31 = cResult[26];
                        }
                        if (cResult[27] === quote_attribution) {
                          if (cResult[28] === quote_attribution_title) {
                            let tmp35 = cResult[29];
                          }
                          if (cResult[30] === tmp4.ownerUsername) {
                            if (cResult[31] === tmp35) {
                              let tmp39 = cResult[32];
                            }
                            if (cResult[33] === emojisToShow) {
                              if (cResult[34] === typeConsolidationEyebrow) {
                                if (cResult[35] === guild_id) {
                                  if (cResult[36] === notShownEmojiCount) {
                                    if (cResult[37] === tmp4.emoji) {
                                      if (cResult[38] === tmp4.emojiContainer) {
                                        if (cResult[39] === tmp4.emojiListItem) {
                                          if (cResult[40] === tmp4.emojiSectionContainer) {
                                            if (cResult[41] === tmp4.horizontalContainer) {
                                              if (cResult[42] === tmp4.premiumEmojisTitle) {
                                                let tmp42 = cResult[43];
                                              }
                                              const _Symbol = Symbol;
                                              ({ viewServerButtonContainer, viewServerButton } = tmp4);
                                              if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
                                                const intl4 = tmp(1126).intl;
                                                const stringResult = intl4.string(tmp(1126).t.mQ2IGa);
                                                cResult[44] = stringResult;
                                                let tmp51 = stringResult;
                                              } else {
                                                tmp51 = cResult[44];
                                              }
                                              if (cResult[45] === tmp9) {
                                                if (cResult[46] === tmp4.viewServerButton) {
                                                  let tmp53 = cResult[47];
                                                }
                                                if (cResult[48] === tmp4.viewServerButtonContainer) {
                                                  if (cResult[49] === tmp53) {
                                                    let tmp56 = cResult[50];
                                                  }
                                                  if (cResult[51] === tmp4.cardContainer) {
                                                    if (cResult[52] === tmp39) {
                                                      if (cResult[53] === tmp42) {
                                                        if (cResult[54] === tmp56) {
                                                          if (cResult[55] === tmp27) {
                                                            if (cResult[56] === tmp31) {
                                                              let tmp60 = cResult[57];
                                                            }
                                                            return tmp60;
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                  const obj6 = { style: tmp4.cardContainer, children: null };
                                                  let items = [tmp27, tmp31, tmp39, tmp42, tmp56];
                                                  obj6.children = items;
                                                  const tmp63 = closure_7(closure_4, obj6);
                                                  cResult[51] = tmp4.cardContainer;
                                                  cResult[52] = tmp39;
                                                  cResult[53] = tmp42;
                                                  cResult[54] = tmp56;
                                                  cResult[55] = tmp27;
                                                  cResult[56] = tmp31;
                                                  cResult[57] = tmp63;
                                                  tmp60 = tmp63;
                                                }
                                                const obj7 = { style: viewServerButtonContainer, children: tmp53 };
                                                const tmp59 = closure_6(closure_4, obj7);
                                                cResult[48] = tmp4.viewServerButtonContainer;
                                                cResult[49] = tmp53;
                                                cResult[50] = tmp59;
                                                tmp56 = tmp59;
                                              }
                                              const obj8 = {
                                                pillStyle: viewServerButton,
                                                text: tmp51,
                                                onPress: tmp9,
                                                shrink: true,
                                              };
                                              const tmp55 = closure_6(tmp(5595).BaseTextButton, obj8);
                                              cResult[45] = tmp9;
                                              cResult[46] = tmp4.viewServerButton;
                                              cResult[47] = tmp55;
                                              tmp53 = tmp55;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            let tmp45Result = null != emojisToShow;
                            if (tmp45Result) {
                              tmp45Result = emojisToShow.length > 0;
                            }
                            if (tmp45Result) {
                              const obj9 = { style: tmp4.emojiSectionContainer, children: null };
                              const obj10 = { style: null, variant: null, color: "text-default", children: null };
                              const items1 = [tmp4.premiumEmojisTitle, typeConsolidationEyebrow.style];
                              obj10.style = items1;
                              obj10.variant = typeConsolidationEyebrow.variant;
                              const intl3 = tmp(1126).intl;
                              obj10.children = intl3.string(tmp(1126).t.wg53L8);
                              const items2 = [closure_6(tmp(4886).Text, obj10)];
                              const obj11 = { style: null, children: null };
                              const items3 = [,];
                              ({ horizontalContainer: arr5[0], emojiContainer: arr5[1] } = tmp4);
                              obj11.style = items3;
                              const items4 = [
                                emojisToShow.map((id) => {
                                  const obj = { style: null, size: 24, id: id.id, guildId: guild_id };
                                  const items = [,];
                                  ({ emoji: arr[0], emojiListItem: arr[1] } = closure_0);
                                  obj.style = items;
                                  return timestampProducer(EmojiIconDefault, obj, id.id);
                                }),
                              ];
                              let tmp47Result = null != notShownEmojiCount;
                              if (tmp47Result) {
                                const obj12 = {
                                  style: tmp4.emojiListItem,
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: null,
                                };
                                const _HermesInternal = HermesInternal;
                                obj12.children = "+" + notShownEmojiCount;
                                tmp47Result = closure_6(tmp(4886).Text, obj12);
                              }
                              items4[1] = tmp47Result;
                              obj11.children = items4;
                              items2[1] = closure_7(closure_4, obj11);
                              obj9.children = items2;
                              tmp45Result = closure_7(closure_4, obj9);
                            }
                            cResult[33] = emojisToShow;
                            cResult[34] = typeConsolidationEyebrow;
                            cResult[35] = guild_id;
                            cResult[36] = notShownEmojiCount;
                            cResult[37] = tmp4.emoji;
                            cResult[38] = tmp4.emojiContainer;
                            cResult[39] = tmp4.emojiListItem;
                            cResult[40] = tmp4.emojiSectionContainer;
                            cResult[41] = tmp4.horizontalContainer;
                            cResult[42] = tmp4.premiumEmojisTitle;
                            cResult[43] = tmp45Result;
                            tmp42 = tmp45Result;
                          }
                          const obj13 = {
                            style: tmp34,
                            variant: "text-sm/normal",
                            color: "text-default",
                            lineClamp: 1,
                            lineBreakMode: "tail",
                            children: tmp35,
                          };
                          const tmp41 = closure_6(tmp(4886).Text, obj13);
                          cResult[30] = tmp4.ownerUsername;
                          cResult[31] = tmp35;
                          cResult[32] = tmp41;
                          tmp39 = tmp41;
                        }
                        const intl = tmp(1126).intl;
                        const obj14 = { attributionName: quote_attribution, attributionTitle: null };
                        let stringResult1 = quote_attribution_title;
                        if (quote_attribution_title == null) {
                          const intl2 = tmp(1126).intl;
                          stringResult1 = intl2.string(tmp(1126).t.pclUFJ);
                        }
                        obj14.attributionTitle = stringResult1;
                        const formatResult = intl.format(tmp(1126).t.m0b6Kj, obj14);
                        cResult[27] = quote_attribution;
                        cResult[28] = quote_attribution_title;
                        cResult[29] = formatResult;
                        tmp35 = formatResult;
                      }
                      const obj15 = {
                        style: tmp4.ownerQuote,
                        variant: "text-md/normal",
                        color: "text-default",
                        children: quote,
                      };
                      const tmp33 = closure_6(tmp(4886).Text, obj15);
                      cResult[24] = quote;
                      cResult[25] = tmp4.ownerQuote;
                      cResult[26] = tmp33;
                      tmp31 = tmp33;
                    }
                  }
                  const obj16 = { style: tmp4.horizontalContainer, children: null };
                  const items5 = [tmp12, tmp23];
                  obj16.children = items5;
                  const tmp30 = closure_7(closure_4, obj16);
                  cResult[20] = tmp4.horizontalContainer;
                  cResult[21] = tmp12;
                  cResult[22] = tmp23;
                  cResult[23] = tmp30;
                  tmp27 = tmp30;
                }
              }
              const obj17 = { style: tmp4.cardHeaderContainer, children: null };
              const items6 = [tmp15, tmp18];
              obj17.children = items6;
              const tmp26 = closure_7(closure_4, obj17);
              cResult[16] = tmp4.cardHeaderContainer;
              cResult[17] = tmp15;
              cResult[18] = tmp18;
              cResult[19] = tmp26;
              tmp23 = tmp26;
            }
            let tmp20 = null != subscriberCount;
            if (tmp20) {
              const obj18 = { subscriberCount, style: tmp4.serverSubscriberCount };
              tmp20 = closure_6(closure_9, obj18);
            }
            cResult[13] = tmp4.serverSubscriberCount;
            cResult[14] = subscriberCount;
            cResult[15] = tmp20;
            tmp18 = tmp20;
          }
          const obj19 = { style: tmp4.guildIcon, source: tmp11 };
          const tmp14 = closure_6(tmp6(5974), obj19);
          cResult[8] = tmp4.guildIcon;
          cResult[9] = tmp11;
          cResult[10] = tmp14;
          tmp12 = tmp14;
        } else {
          return null;
        }
      }
      const fn = function n() {
        if (hasAllImperativeDetails) {
          const storePageUrl = details.details.storePageUrl;
          if (null != storePageUrl) {
            LinkingDefault.openURL(storePageUrl);
          }
        }
      };
      cResult[0] = tmp7.details;
      cResult[1] = hasAllImperativeDetails;
      cResult[2] = fn;
      tmp9 = fn;
      const obj2 = require("useTypeConsolidationTextTransform");
    }
  : (highlightedCreatorGuild) => {
      highlightedCreatorGuild = highlightedCreatorGuild.highlightedCreatorGuild;
      const tmp = closure_8();
      _require = tmp;
      const typeConsolidationEyebrow = require("useTypeConsolidationTextTransform").useTypeConsolidationEyebrow(
        "CreatorHighlightSection",
        "text-xs/semibold",
      );
      const guild_id = highlightedCreatorGuild.guild_id;
      let quote_attribution_title = highlightedCreatorGuild.quote_attribution_title;
      ({ quote, quote_attribution } = highlightedCreatorGuild);
      const tmp6 = guild_id(17905)(guild_id, 3, 60);
      dependencyMap = tmp6;
      const hasAllImperativeDetails = tmp6.hasAllImperativeDetails;
      let items = [hasAllImperativeDetails, tmp6];
      if (tmp6.isLoading) {
        const obj2 = { style: tmp.cardContainer, children: closure_6(tmp5(17877), {}) };
        return closure_6(closure_4, obj2);
      } else if (hasAllImperativeDetails) {
        const details = tmp6.details;
        ({ subscriberCount, emojisToShow, notShownEmojiCount } = details);
        const obj3 = { style: tmp.cardContainer, children: null };
        const obj4 = { style: tmp.horizontalContainer, children: null };
        ({ guildName, guildAvatarUrl } = details);
        const obj5 = { style: tmp.guildIcon, source: null };
        const obj6 = { uri: guildAvatarUrl };
        obj5.source = obj6;
        const items1 = [closure_6(tmp5(5974), obj5)];
        const obj7 = { style: tmp.cardHeaderContainer, children: null };
        const obj8 = {
          variant: "heading-md/extrabold",
          color: "mobile-text-heading-primary",
          lineClamp: 1,
          lineBreakMode: "tail",
          children: guildName,
        };
        const items2 = [closure_6(tmp2(4886).Text, obj8)];
        let tmp11Result = null != subscriberCount;
        if (tmp11Result) {
          const obj9 = { subscriberCount, style: tmp.serverSubscriberCount };
          tmp11Result = closure_6(closure_9, obj9);
        }
        items2[1] = tmp11Result;
        obj7.children = items2;
        items1[1] = closure_7(closure_4, obj7);
        obj4.children = items1;
        const items3 = [closure_7(closure_4, obj4), , , ,];
        const obj10 = { style: tmp.ownerQuote, variant: "text-md/normal", color: "text-default", children: quote };
        items3[1] = closure_6(tmp2(4886).Text, obj10);
        const obj11 = {
          style: tmp.ownerUsername,
          variant: "text-sm/normal",
          color: "text-default",
          lineClamp: 1,
          lineBreakMode: "tail",
          children: null,
        };
        const intl = tmp2(1126).intl;
        const obj12 = { attributionName: quote_attribution, attributionTitle: null };
        if (quote_attribution_title == null) {
          const intl2 = tmp2(1126).intl;
          quote_attribution_title = intl2.string(tmp2(1126).t.pclUFJ);
        }
        obj12.attributionTitle = quote_attribution_title;
        obj11.children = intl.format(tmp2(1126).t.m0b6Kj, obj12);
        items3[2] = closure_6(tmp2(4886).Text, obj11);
        let tmp9Result = null != emojisToShow;
        if (tmp9Result) {
          tmp9Result = emojisToShow.length > 0;
        }
        if (tmp9Result) {
          const obj13 = { style: tmp.emojiSectionContainer, children: null };
          const obj14 = { style: null, variant: null, color: "text-default", children: null };
          const items4 = [tmp.premiumEmojisTitle, typeConsolidationEyebrow.style];
          obj14.style = items4;
          obj14.variant = typeConsolidationEyebrow.variant;
          const intl3 = tmp2(1126).intl;
          obj14.children = intl3.string(tmp2(1126).t.wg53L8);
          const items5 = [closure_6(tmp2(4886).Text, obj14)];
          const obj15 = { style: null, children: null };
          const items6 = [,];
          ({ horizontalContainer: arr7[0], emojiContainer: arr7[1] } = tmp);
          obj15.style = items6;
          const items7 = [
            emojisToShow.map((id) => {
              const obj = { style: null, size: 24, id: id.id, guildId: guild_id };
              const items = [,];
              ({ emoji: arr[0], emojiListItem: arr[1] } = closure_0);
              obj.style = items;
              return timestampProducer(EmojiIconDefault, obj, id.id);
            }),
          ];
          let tmp11Result2 = null != notShownEmojiCount;
          if (tmp11Result2) {
            const obj16 = {
              style: tmp.emojiListItem,
              variant: "text-sm/semibold",
              color: "text-default",
              children: null,
            };
            const _HermesInternal = HermesInternal;
            obj16.children = "+" + notShownEmojiCount;
            tmp11Result2 = closure_6(tmp2(4886).Text, obj16);
          }
          items7[1] = tmp11Result2;
          obj15.children = items7;
          items5[1] = closure_7(closure_4, obj15);
          obj13.children = items5;
          tmp9Result = closure_7(closure_4, obj13);
        }
        items3[3] = tmp9Result;
        const obj17 = { style: tmp.viewServerButtonContainer, children: null };
        const obj18 = { pillStyle: tmp.viewServerButton, text: null, onPress: null, shrink: true };
        const intl4 = tmp2(1126).intl;
        obj18.text = intl4.string(tmp2(1126).t.mQ2IGa);
        obj18.onPress = tmp7;
        obj17.children = closure_6(tmp2(5595).BaseTextButton, obj18);
        items3[4] = closure_6(closure_4, obj17);
        obj3.children = items3;
        return closure_7(closure_4, obj3);
      } else {
        return null;
      }
      let obj = require("useTypeConsolidationTextTransform");
    };
function renderItem(highlightedCreatorGuild) {
  return timestampProducer(closure_10, { highlightedCreatorGuild: highlightedCreatorGuild.item });
}
ReactCompilerGating = fn(558);
let obj7 = {
  width: "100%",
  marginTop: 8,
  paddingHorizontal: 8,
  justifyContent: "space-around",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
  alignItems: "center",
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
};
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/welcome/CreatorHighlightSection.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (highlightedCreators) => {
      const cResult = c.c(3);
      highlightedCreators = highlightedCreators.highlightedCreators;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n(guild_id) {
          return guild_id.guild_id;
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== highlightedCreators) {
        const obj2 = { data: highlightedCreators, horizontal: true, keyExtractor: first, renderItem };
        const tmp7 = timestampProducer(hasOwnProperty, obj2);
        cResult[1] = highlightedCreators;
        cResult[2] = tmp7;
        let tmp3 = tmp7;
      } else {
        tmp3 = cResult[2];
      }
      return tmp3;
    }
  : (data) =>
      timestampProducer(hasOwnProperty, {
        data: data.highlightedCreators,
        horizontal: true,
        keyExtractor(guild_id) {
          return guild_id.guild_id;
        },
        renderItem,
      });
