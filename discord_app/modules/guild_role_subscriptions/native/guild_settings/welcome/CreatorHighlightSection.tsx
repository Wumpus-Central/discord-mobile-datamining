// discord_app/modules/guild_role_subscriptions/native/guild_settings/welcome/CreatorHighlightSection.tsx
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import intl5 from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import LinkingDefault from "../../../../../lib/native/Linking.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import AssetRegistryDefault from "../../../../../../_runtime/09904_AssetRegistry.js";
import EmojiIconDefault from "../../components/EmojiIcon.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import react_native from "../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap, highlightedCreators;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
({ View: closure_4, FlatList: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  horizontalContainer: { flexDirection: "row" },
  serverSubscriberCount: { marginTop: 8 },
  subscriberCountContainer: obj2,
  subscriberCount: obj3,
  subscriberCountIcon: { marginStart: 8, marginEnd: 6, marginVertical: 4, alignSelf: "center" },
  cardContainer: obj4,
  cardHeaderContainer: { flex: 1, justifyContent: "flex-start", alignItems: "flex-start" },
  guildIcon: { width: 60, height: 60, borderRadius: 6, marginEnd: 16 },
  ownerQuote: { marginTop: 24 },
  ownerUsername: { marginTop: 8 },
  premiumEmojisTitle: { marginTop: 32, textTransform: "uppercase" },
  viewServerButtonContainer: { flex: 1, justifyContent: "flex-end" },
  viewServerButton: obj5,
  emojiSectionContainer: { flex: 1, justifyContent: "flex-start", alignItems: "flex-start" },
  emojiContainer: obj6,
  emojiListItem: { marginHorizontal: 8 },
  emoji: { height: 24, width: 24, marginVertical: 8 },
};
obj2 = {
  alignItems: "center",
  backgroundColor: nativeDefault.unsafe_rawColors.BRAND_530,
  paddingEnd: 8,
  borderRadius: nativeDefault.radii.xs,
  overflow: "hidden",
};
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.unsafe_rawColors.BRAND_630, paddingHorizontal: 8, paddingVertical: 4 };
obj4 = {
  width: 276,
  marginEnd: 12,
  paddingHorizontal: 24,
  paddingVertical: 16,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
};
obj5 = { width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, marginTop: 16 };
obj6 = {
  width: "100%",
  marginTop: 8,
  paddingHorizontal: 8,
  justifyContent: "space-around",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
  alignItems: "center",
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
};
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let intl;
      let items;
      let style;
      let subscriberCount;
      const obj = react2;
      const cResult = obj.c(14);
      ({ subscriberCount, style } = arg0);
      const tmp4 = closure_8();
      if (cResult[0] === style) {
        if (cResult[1] === tmp4.horizontalContainer) {
          let tmp5;
          if (cResult[2] === tmp4.subscriberCountContainer) {
            tmp5 = cResult[3];
          }
          if (cResult[4] === tmp4.subscriberCount) {
            let tmp6;
            let tmp9;
            let tmp14;
            if (cResult[5] === subscriberCount) {
              tmp6 = cResult[6];
            }
            if (cResult[7] !== tmp4.subscriberCountIcon) {
              const obj2 = {
                size: native.Icon.Sizes.SMALL,
                color: nativeDefault.unsafe_rawColors.WHITE,
                style: tmp4.subscriberCountIcon,
                source: AssetRegistryDefault,
              };
              const Icon = native.Icon;
              const tmp12 = metroRequire(Icon, obj2);
              cResult[7] = tmp4.subscriberCountIcon;
              cResult[8] = tmp12;
              tmp9 = tmp12;
            } else {
              tmp9 = cResult[8];
            }
            const _Symbol = Symbol;
            if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
              const obj3 = {
                variant: "text-sm/normal",
                color: "text-overlay-light",
                children: intl.string(intl5.t["3NNXPW"]),
              };
              const Text = Text_Text.Text;
              intl = intl5.intl;
              const tmp16 = metroRequire(Text, obj3);
              cResult[9] = tmp16;
              tmp14 = tmp16;
            } else {
              tmp14 = cResult[9];
            }
            if (cResult[10] === tmp5) {
              if (cResult[11] === tmp6) {
                let tmp17;
                if (cResult[12] === tmp9) {
                  tmp17 = cResult[13];
                }
                return tmp17;
              }
            }
            const obj4 = { style: tmp5, children: items };
            items = [tmp6, tmp9, tmp14];
            const tmp20 = metroImportDefault(React3, obj4);
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
          const tmp8 = metroRequire(Text_Text.Text, obj5);
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
      let intl;
      let items;
      let items1;
      let style;
      let subscriberCount;
      ({ subscriberCount, style } = arg0);
      const tmp = closure_8();
      const obj = { style: items, children: items1 };
      items = [, ,];
      ({ horizontalContainer: arr[0], subscriberCountContainer: arr[1] } = tmp);
      items[2] = style;
      items1 = [, ,];
      const obj2 = {
        style: tmp.subscriberCount,
        variant: "text-sm/medium",
        color: "text-overlay-light",
        children: subscriberCount,
      };
      items1[0] = metroRequire(Text_Text.Text, obj2);
      const obj3 = {
        size: native.Icon.Sizes.SMALL,
        color: nativeDefault.unsafe_rawColors.WHITE,
        style: tmp.subscriberCountIcon,
        source: AssetRegistryDefault,
      };
      const Icon = native.Icon;
      items1[1] = metroRequire(Icon, obj3);
      const obj4 = { variant: "text-sm/normal", color: "text-overlay-light", children: intl.string(intl5.t["3NNXPW"]) };
      const Text = Text_Text.Text;
      intl = intl5.intl;
      items1[2] = metroRequire(Text, obj4);
      return metroImportDefault(React3, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (highlightedCreatorGuild) => {
      let closure_0;
      let details;
      let emojisToShow;
      let guildAvatarUrl;
      let guildName;
      let intl3;
      let items;
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let items6;
      let notShownEmojiCount;
      let quote;
      let quote_attribution;
      let quote_attribution_title;
      let stringResult1;
      let subscriberCount;
      let viewServerButton;
      let viewServerButtonContainer;
      let obj = require("react");
      const cResult = obj.c(58);
      highlightedCreatorGuild = highlightedCreatorGuild.highlightedCreatorGuild;
      const tmp4 = closure_8();
      _require = tmp4;
      const obj2 = require("useTypeConsolidationTextTransform");
      const typeConsolidationEyebrow = obj2.useTypeConsolidationEyebrow("CreatorHighlightSection", "text-xs/semibold");
      const guild_id = highlightedCreatorGuild.guild_id;
      ({ quote, quote_attribution, quote_attribution_title } = highlightedCreatorGuild);
      const tmp7 = guild_id(17905)(guild_id, 3, 60);
      dependencyMap = tmp7;
      const hasAllImperativeDetails = tmp7.hasAllImperativeDetails;
      if (cResult[0] === tmp7.details) {
        let tmp9;
        if (cResult[1] === hasAllImperativeDetails) {
          tmp9 = cResult[2];
        }
        if (tmp8) {
          let tmp65;
          let tmp68;
          const _Symbol2 = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp67 = closure_6(guild_id(17877), {});
            cResult[3] = tmp67;
            tmp65 = tmp67;
          } else {
            tmp65 = cResult[3];
          }
          if (cResult[4] !== tmp4.cardContainer) {
            const obj3 = { style: tmp4.cardContainer, children: tmp65 };
            const tmp71 = closure_6(closure_4, obj3);
            cResult[4] = tmp4.cardContainer;
            cResult[5] = tmp71;
            tmp68 = tmp71;
          } else {
            tmp68 = cResult[5];
          }
          return tmp68;
        } else if (hasAllImperativeDetails) {
          let tmp11;
          ({ guildName, guildAvatarUrl, subscriberCount, emojisToShow, notShownEmojiCount } = tmp7.details);
          const cardContainer = tmp4.cardContainer;
          if (cResult[6] !== guildAvatarUrl) {
            const obj4 = { uri: guildAvatarUrl };
            cResult[6] = guildAvatarUrl;
            cResult[7] = obj4;
            tmp11 = obj4;
          } else {
            tmp11 = cResult[7];
          }
          if (cResult[8] === tmp4.guildIcon) {
            let tmp12;
            let tmp15;
            if (cResult[9] === tmp11) {
              tmp12 = cResult[10];
            }
            if (cResult[11] !== guildName) {
              const obj5 = {
                variant: "heading-md/extrabold",
                color: "mobile-text-heading-primary",
                lineClamp: 1,
                lineBreakMode: "tail",
                children: guildName,
              };
              const tmp17 = closure_6(require("Text/Text").Text, obj5);
              cResult[11] = guildName;
              cResult[12] = tmp17;
              tmp15 = tmp17;
            } else {
              tmp15 = cResult[12];
            }
            if (cResult[13] === tmp4.serverSubscriberCount) {
              let tmp18;
              if (cResult[14] === subscriberCount) {
                tmp18 = cResult[15];
              }
              if (cResult[16] === tmp4.cardHeaderContainer) {
                if (cResult[17] === tmp15) {
                  let tmp23;
                  if (cResult[18] === tmp18) {
                    tmp23 = cResult[19];
                  }
                  if (cResult[20] === tmp4.horizontalContainer) {
                    if (cResult[21] === tmp12) {
                      let tmp27;
                      if (cResult[22] === tmp23) {
                        tmp27 = cResult[23];
                      }
                      if (cResult[24] === quote) {
                        let tmp31;
                        if (cResult[25] === tmp4.ownerQuote) {
                          tmp31 = cResult[26];
                        }
                        if (cResult[27] === quote_attribution) {
                          let tmp35;
                          if (cResult[28] === quote_attribution_title) {
                            tmp35 = cResult[29];
                          }
                          if (cResult[30] === tmp4.ownerUsername) {
                            let tmp39;
                            if (cResult[31] === tmp35) {
                              tmp39 = cResult[32];
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
                                              let tmp42;
                                              let tmp51;
                                              if (cResult[42] === tmp4.premiumEmojisTitle) {
                                                tmp42 = cResult[43];
                                              }
                                              const _Symbol = Symbol;
                                              ({ viewServerButtonContainer, viewServerButton } = tmp4);
                                              if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
                                                const intl4 = tmp(1126).intl;
                                                const stringResult = intl4.string(require("intl").t.mQ2IGa);
                                                cResult[44] = stringResult;
                                                tmp51 = stringResult;
                                              } else {
                                                tmp51 = cResult[44];
                                              }
                                              if (cResult[45] === tmp9) {
                                                let tmp53;
                                                if (cResult[46] === tmp4.viewServerButton) {
                                                  tmp53 = cResult[47];
                                                }
                                                if (cResult[48] === tmp4.viewServerButtonContainer) {
                                                  let tmp56;
                                                  if (cResult[49] === tmp53) {
                                                    tmp56 = cResult[50];
                                                  }
                                                  if (cResult[51] === tmp4.cardContainer) {
                                                    if (cResult[52] === tmp39) {
                                                      if (cResult[53] === tmp42) {
                                                        if (cResult[54] === tmp56) {
                                                          if (cResult[55] === tmp27) {
                                                            let tmp60;
                                                            if (cResult[56] === tmp31) {
                                                              tmp60 = cResult[57];
                                                            }
                                                            return tmp60;
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                  const obj6 = { style: cardContainer, children: items };
                                                  items = [tmp27, tmp31, tmp39, tmp42, tmp56];
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
                                              const tmp55 = closure_6(require("BaseTextButton").BaseTextButton, obj8);
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
                            let tmp45Result = null != emojisToShow && emojisToShow.length > 0;
                            if (tmp45Result) {
                              const obj9 = { style: tmp4.emojiSectionContainer, children: items2 };
                              const obj10 = {
                                style: items1,
                                variant: typeConsolidationEyebrow.variant,
                                color: "text-default",
                                children: intl3.string(require("intl").t.wg53L8),
                              };
                              items1 = [tmp4.premiumEmojisTitle, typeConsolidationEyebrow.style];
                              const Text = tmp(4886).Text;
                              intl3 = tmp(1126).intl;
                              items2 = [closure_6(Text, obj10)];
                              const obj11 = { style: items3, children: items4 };
                              items3 = [,];
                              ({ horizontalContainer: arr5[0], emojiContainer: arr5[1] } = tmp4);
                              items4 = [
                                emojisToShow.map((id) => {
                                  let items;
                                  const obj = { style: items, size: 24, id: id.id, guildId: guild_id };
                                  items = [,];
                                  ({ emoji: arr[0], emojiListItem: arr[1] } = closure_0);
                                  return metroRequire(EmojiIconDefault, obj, id.id);
                                }),
                              ];
                              let tmp47Result = null != notShownEmojiCount;
                              if (tmp47Result) {
                                const _HermesInternal = HermesInternal;
                                const obj12 = {
                                  style: tmp4.emojiListItem,
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: "+" + notShownEmojiCount,
                                };
                                const Text2 = tmp(4886).Text;
                                tmp47Result = closure_6(Text2, obj12);
                              }
                              items4[1] = tmp47Result;
                              items2[1] = closure_7(closure_4, obj11);
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
                          const tmp41 = closure_6(require("Text/Text").Text, obj13);
                          cResult[30] = tmp4.ownerUsername;
                          cResult[31] = tmp35;
                          cResult[32] = tmp41;
                          tmp39 = tmp41;
                        }
                        const intl = tmp(1126).intl;
                        const format = intl.format;
                        const obj14 = { attributionName: quote_attribution, attributionTitle: stringResult1 };
                        stringResult1 = quote_attribution_title;
                        const m0b6Kj = tmp(1126).t.m0b6Kj;
                        if (quote_attribution_title == null) {
                          const intl2 = tmp(1126).intl;
                          stringResult1 = intl2.string(tmp(1126).t.pclUFJ);
                        }
                        const formatResult = format(m0b6Kj, obj14);
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
                      const tmp33 = closure_6(require("Text/Text").Text, obj15);
                      cResult[24] = quote;
                      cResult[25] = tmp4.ownerQuote;
                      cResult[26] = tmp33;
                      tmp31 = tmp33;
                    }
                  }
                  const obj16 = { style: tmp4.horizontalContainer, children: items5 };
                  items5 = [tmp12, tmp23];
                  const tmp30 = closure_7(closure_4, obj16);
                  cResult[20] = tmp4.horizontalContainer;
                  cResult[21] = tmp12;
                  cResult[22] = tmp23;
                  cResult[23] = tmp30;
                  tmp27 = tmp30;
                }
              }
              const obj17 = { style: tmp4.cardHeaderContainer, children: items6 };
              items6 = [tmp15, tmp18];
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
          const tmp14 = closure_6(guild_id(5974), obj19);
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
            const obj = LinkingDefault;
            obj.openURL(storePageUrl);
          }
        }
      };
      cResult[0] = tmp7.details;
      cResult[1] = hasAllImperativeDetails;
      cResult[2] = fn;
      tmp9 = fn;
    }
  : (highlightedCreatorGuild) => {
      let BaseTextButton;
      let closure_0;
      let emojisToShow;
      let format;
      let guildAvatarUrl;
      let guildName;
      let intl3;
      let intl4;
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let items6;
      let items7;
      let m0b6Kj;
      let notShownEmojiCount;
      let obj12;
      let obj18;
      let obj6;
      let quote;
      let quote_attribution;
      let subscriberCount;
      highlightedCreatorGuild = highlightedCreatorGuild.highlightedCreatorGuild;
      const tmp = closure_8();
      _require = tmp;
      let obj = require("useTypeConsolidationTextTransform");
      const typeConsolidationEyebrow = obj.useTypeConsolidationEyebrow("CreatorHighlightSection", "text-xs/semibold");
      const guild_id = highlightedCreatorGuild.guild_id;
      let quote_attribution_title = highlightedCreatorGuild.quote_attribution_title;
      ({ quote, quote_attribution } = highlightedCreatorGuild);
      const tmp6 = guild_id(17905)(guild_id, 3, 60);
      dependencyMap = tmp6;
      const hasAllImperativeDetails = tmp6.hasAllImperativeDetails;
      let items = [hasAllImperativeDetails, tmp6];
      if (tmp6.isLoading) {
        const obj2 = { style: tmp.cardContainer, children: closure_6(guild_id(17877), {}) };
        return closure_6(closure_4, obj2);
      } else if (hasAllImperativeDetails) {
        const details = tmp6.details;
        ({ subscriberCount, emojisToShow, notShownEmojiCount } = details);
        const obj3 = { style: tmp.cardContainer, children: items3 };
        const obj4 = { style: tmp.horizontalContainer, children: items1 };
        ({ guildName, guildAvatarUrl } = details);
        const obj5 = { style: tmp.guildIcon, source: obj6 };
        obj6 = { uri: guildAvatarUrl };
        items1 = [closure_6(guild_id(5974), obj5)];
        const obj7 = { style: tmp.cardHeaderContainer, children: items2 };
        const obj8 = {
          variant: "heading-md/extrabold",
          color: "mobile-text-heading-primary",
          lineClamp: 1,
          lineBreakMode: "tail",
          children: guildName,
        };
        items2 = [closure_6(require("Text/Text").Text, obj8)];
        let tmp11Result = null != subscriberCount;
        if (tmp11Result) {
          const obj9 = { subscriberCount, style: tmp.serverSubscriberCount };
          tmp11Result = closure_6(closure_9, obj9);
        }
        items2[1] = tmp11Result;
        items1[1] = closure_7(closure_4, obj7);
        items3 = [closure_7(closure_4, obj4), , , ,];
        const obj10 = { style: tmp.ownerQuote, variant: "text-md/normal", color: "text-default", children: quote };
        items3[1] = closure_6(require("Text/Text").Text, obj10);
        const obj11 = {
          style: tmp.ownerUsername,
          variant: "text-sm/normal",
          color: "text-default",
          lineClamp: 1,
          lineBreakMode: "tail",
          children: format(m0b6Kj, obj12),
        };
        const Text = tmp2(4886).Text;
        const intl = tmp2(1126).intl;
        format = intl.format;
        obj12 = { attributionName: quote_attribution, attributionTitle: quote_attribution_title };
        m0b6Kj = tmp2(1126).t.m0b6Kj;
        if (quote_attribution_title == null) {
          const intl2 = tmp2(1126).intl;
          quote_attribution_title = intl2.string(tmp2(1126).t.pclUFJ);
        }
        items3[2] = closure_6(Text, obj11);
        let tmp9Result = null != emojisToShow && emojisToShow.length > 0;
        if (tmp9Result) {
          const obj13 = { style: tmp.emojiSectionContainer, children: items5 };
          const obj14 = {
            style: items4,
            variant: typeConsolidationEyebrow.variant,
            color: "text-default",
            children: intl3.string(require("intl").t.wg53L8),
          };
          items4 = [tmp.premiumEmojisTitle, typeConsolidationEyebrow.style];
          const Text2 = tmp2(4886).Text;
          intl3 = tmp2(1126).intl;
          items5 = [closure_6(Text2, obj14)];
          const obj15 = { style: items6, children: items7 };
          items6 = [,];
          ({ horizontalContainer: arr7[0], emojiContainer: arr7[1] } = tmp);
          items7 = [
            emojisToShow.map((id) => {
              let items;
              const obj = { style: items, size: 24, id: id.id, guildId: guild_id };
              items = [,];
              ({ emoji: arr[0], emojiListItem: arr[1] } = closure_0);
              return metroRequire(EmojiIconDefault, obj, id.id);
            }),
          ];
          let tmp11Result2 = null != notShownEmojiCount;
          if (tmp11Result2) {
            const _HermesInternal = HermesInternal;
            const obj16 = {
              style: tmp.emojiListItem,
              variant: "text-sm/semibold",
              color: "text-default",
              children: "+" + notShownEmojiCount,
            };
            const Text3 = tmp2(4886).Text;
            tmp11Result2 = closure_6(Text3, obj16);
          }
          items7[1] = tmp11Result2;
          items5[1] = closure_7(closure_4, obj15);
          tmp9Result = closure_7(closure_4, obj13);
        }
        items3[3] = tmp9Result;
        const obj17 = { style: tmp.viewServerButtonContainer, children: closure_6(BaseTextButton, obj18) };
        obj18 = {
          pillStyle: tmp.viewServerButton,
          text: intl4.string(require("intl").t.mQ2IGa),
          onPress: tmp7,
          shrink: true,
        };
        BaseTextButton = tmp2(5595).BaseTextButton;
        intl4 = tmp2(1126).intl;
        items3[4] = closure_6(closure_4, obj17);
        return closure_7(closure_4, obj3);
      } else {
        return null;
      }
    };
function renderItem(highlightedCreatorGuild) {
  const obj = { highlightedCreatorGuild: highlightedCreatorGuild.item };
  return metroRequire(closure_10, obj);
}
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (highlightedCreators) => {
      let first;
      let tmp3;
      const obj = react2;
      const cResult = obj.c(3);
      highlightedCreators = highlightedCreators.highlightedCreators;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n(guild_id) {
          return guild_id.guild_id;
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== highlightedCreators) {
        const obj2 = { data: highlightedCreators, horizontal: true, keyExtractor: first, renderItem };
        const tmp7 = metroRequire(hasOwnProperty, obj2);
        cResult[1] = highlightedCreators;
        cResult[2] = tmp7;
        tmp3 = tmp7;
      } else {
        tmp3 = cResult[2];
      }
      return tmp3;
    }
  : (data) => {
      const obj = {
        data: data.highlightedCreators,
        horizontal: true,
        keyExtractor(guild_id) {
          return guild_id.guild_id;
        },
        renderItem,
      };
      return metroRequire(hasOwnProperty, obj);
    };
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/welcome/CreatorHighlightSection.tsx",
);

export default tmp5;
