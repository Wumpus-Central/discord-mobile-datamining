// discord_app/modules/game_profile/native/components/GameProfileAnnouncements.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import DateUtils from "../../../../utils/DateUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import CustomMarkupAll from "../../../markup/CustomMarkup.native.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import useIsWindowLargeDefault from "../../../screen/native/useIsWindowLarge.tsx";
import GameProfileAnalyticUtils from "../../GameProfileAnalyticUtils.tsx";
import GameProfileActionCreatorsDefault from "../../GameProfileActionCreators.native.tsx";
import GameProfileSkeleton from "GameProfileSkeleton.tsx";
import GameProfileSkeletonCardRowDefault from "GameProfileSkeletonCardRow.tsx";
import AnnouncementMessageUtils from "../../AnnouncementMessageUtils.tsx";
import ImageWithPlaceholder from "../../../../components_native/common/ImageWithPlaceholder.tsx";
import ReactionIcon from "../../../../design/components/Icon/native/redesign/generated/ReactionIcon.tsx";
import navigateToGameAnnouncementDefault from "../../navigateToGameAnnouncement.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const GameProfileSkeletonDefault = GameProfileSkeleton;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire } = get_ActivityIndicator);
const MAX_VISIBLE_ANNOUNCEMENTS = fn(8919).MAX_VISIBLE_ANNOUNCEMENTS;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let c10 = 120;
let c11 = 160;
const PlatformUtils = fn(1382);
let closure_13 = null;
const createStyles = fn(5092);
let obj = {
  smallCardsScroller: { marginHorizontal: -nativeDefault.space.PX_16, overflow: "visible" },
  skeletonCardsScroller: null,
  smallCardsContainer: null,
  skeletonCardsContainer: null,
  card: null,
  cardBody: null,
  smallCardMedia: null,
  mediaImage: null,
  metadataRow: null,
  reactionInfo: null,
  embedContentArea: null,
  embedAuthorRow: null,
  embedAuthorIcon: null,
  embedProviderIcon: null,
  embedMedia: null,
  pollAnswers: null,
  pollAnswerOption: null,
  pollMoreOptions: null,
  skeletonCard: null,
  skeletonCardLarge: null,
  skeletonAnimationRoot: null,
  skeletonCardImage: null,
  skeletonCardBody: null,
  skeletonCardContent: null,
  skeletonCardMetadata: null,
};
let obj4 = { marginHorizontal: -nativeDefault.space.PX_16, overflow: "visible" };
obj.skeletonCardsScroller = { marginHorizontal: -nativeDefault.space.PX_16 };
let obj5 = { marginHorizontal: -nativeDefault.space.PX_16 };
obj.smallCardsContainer = {
  flexDirection: "row",
  gap: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_16,
};
let obj6 = { flexDirection: "row", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
obj.skeletonCardsContainer = { paddingHorizontal: nativeDefault.space.PX_16 };
let obj7 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj.card = {
  flexDirection: "column",
  borderRadius: nativeDefault.radii.lg,
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  width: 160,
};
let obj8 = {
  flexDirection: "column",
  borderRadius: nativeDefault.radii.lg,
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  width: 160,
};
obj.cardBody = {
  flex: 1,
  flexDirection: "column",
  gap: nativeDefault.space.PX_4,
  overflow: "hidden",
  padding: nativeDefault.space.PX_12,
};
obj.smallCardMedia = { height: 120, overflow: "hidden", flexShrink: 0 };
obj.mediaImage = { width: "100%", height: "100%", resizeMode: "cover" };
let obj9 = {
  flex: 1,
  flexDirection: "column",
  gap: nativeDefault.space.PX_4,
  overflow: "hidden",
  padding: nativeDefault.space.PX_12,
};
obj.metadataRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, marginTop: "auto" };
let obj10 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, marginTop: "auto" };
obj.reactionInfo = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let obj11 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.embedContentArea = {
  flex: 1,
  gap: nativeDefault.space.PX_4,
  borderLeftWidth: 4,
  borderLeftColor: nativeDefault.colors.BORDER_SUBTLE,
  borderTopLeftRadius: nativeDefault.radii.xs,
  borderBottomLeftRadius: nativeDefault.radii.xs,
  paddingLeft: nativeDefault.space.PX_8,
};
let obj12 = {
  flex: 1,
  gap: nativeDefault.space.PX_4,
  borderLeftWidth: 4,
  borderLeftColor: nativeDefault.colors.BORDER_SUBTLE,
  borderTopLeftRadius: nativeDefault.radii.xs,
  borderBottomLeftRadius: nativeDefault.radii.xs,
  paddingLeft: nativeDefault.space.PX_8,
};
obj.embedAuthorRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let size = { width: 20, height: 20, borderRadius: nativeDefault.radii.round };
obj.embedAuthorIcon = size;
obj.embedProviderIcon = { width: 16, height: 16 };
let obj13 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.embedMedia = { overflow: "hidden", borderRadius: nativeDefault.radii.sm, aspectRatio: 1.7777777777777777 };
let obj15 = { flexDirection: "column", gap: nativeDefault.space.PX_4, flex: 1 };
obj.pollAnswers = obj15;
let obj14 = { overflow: "hidden", borderRadius: nativeDefault.radii.sm, aspectRatio: 1.7777777777777777 };
obj.pollAnswerOption = {
  paddingVertical: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
let obj16 = {
  paddingVertical: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
obj.pollMoreOptions = { paddingHorizontal: nativeDefault.space.PX_12 };
obj.skeletonCard = { height: 282 };
obj.skeletonCardLarge = { height: 264 };
obj.skeletonAnimationRoot = { flex: 1 };
obj.skeletonCardImage = { width: "100%" };
let obj17 = { paddingHorizontal: nativeDefault.space.PX_12 };
obj.skeletonCardBody = { gap: nativeDefault.space.PX_8 };
const size1 = { height: nativeDefault.space.PX_48, borderRadius: nativeDefault.radii.xs, width: "88%" };
obj.skeletonCardContent = size1;
const size2 = {
  width: "60%",
  height: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.xs,
  marginTop: "auto",
};
obj.skeletonCardMetadata = size2;
let closure_15 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_16 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function GameProfileAnnouncementCardSkeleton(arg0) {
        const cResult = c.c(25);
        ({ index, isWindowLarge } = arg0);
        const tmp4 = closure_15();
        const tmp5 = isWindowLarge ? tmp4.skeletonCardLarge : tmp4.skeletonCard;
        if (cResult[0] === tmp4.card) {
          if (cResult[1] === tmp5) {
            let tmp6 = cResult[2];
          }
          const result = index * GameProfileSkeleton.SKELETON_CARD_ANIMATION_DELAY_MS;
          if (cResult[3] === tmp4.skeletonCardImage) {
            if (cResult[4] === tmp4.smallCardMedia) {
              let tmp8 = cResult[5];
            }
            if (cResult[6] === tmp4.cardBody) {
              if (cResult[7] === tmp4.skeletonCardBody) {
                let tmp12 = cResult[8];
              }
              if (cResult[9] !== tmp4.skeletonCardContent) {
                const obj2 = { style: tmp4.skeletonCardContent };
                const tmp16 = onPress(GameProfileSkeletonDefault, obj2);
                cResult[9] = tmp4.skeletonCardContent;
                cResult[10] = tmp16;
                let tmp13 = tmp16;
              } else {
                tmp13 = cResult[10];
              }
              if (cResult[11] !== tmp4.skeletonCardMetadata) {
                const obj3 = { style: tmp4.skeletonCardMetadata };
                const tmp20 = onPress(GameProfileSkeletonDefault, obj3);
                cResult[11] = tmp4.skeletonCardMetadata;
                cResult[12] = tmp20;
                let tmp17 = tmp20;
              } else {
                tmp17 = cResult[12];
              }
              if (cResult[13] === tmp12) {
                if (cResult[14] === tmp13) {
                  if (cResult[15] === tmp17) {
                    let tmp21 = cResult[16];
                  }
                  if (cResult[17] === tmp4.skeletonAnimationRoot) {
                    if (cResult[18] === result) {
                      if (cResult[19] === tmp8) {
                        if (cResult[20] === tmp21) {
                          let tmp25 = cResult[21];
                        }
                        if (cResult[22] === tmp6) {
                          if (cResult[23] === tmp25) {
                            let tmp28 = cResult[24];
                          }
                          return tmp28;
                        }
                        const obj4 = { style: tmp6, children: tmp25 };
                        const tmp31 = onPress(hasOwnProperty, obj4);
                        cResult[22] = tmp6;
                        cResult[23] = tmp25;
                        cResult[24] = tmp31;
                        tmp28 = tmp31;
                      }
                    }
                  }
                  const obj5 = { animationDelayMs: result, style: tmp4.skeletonAnimationRoot, children: null };
                  const items = [tmp8, tmp21];
                  obj5.children = items;
                  const tmp27 = options(GameProfileSkeleton.GameProfileSkeletonContainer, obj5);
                  cResult[17] = tmp4.skeletonAnimationRoot;
                  cResult[18] = result;
                  cResult[19] = tmp8;
                  cResult[20] = tmp21;
                  cResult[21] = tmp27;
                  tmp25 = tmp27;
                }
              }
              const obj6 = { style: tmp12, children: null };
              const items1 = [tmp13, tmp17];
              obj6.children = items1;
              const tmp24 = options(hasOwnProperty, obj6);
              cResult[13] = tmp12;
              cResult[14] = tmp13;
              cResult[15] = tmp17;
              cResult[16] = tmp24;
              tmp21 = tmp24;
            }
            const items2 = [,];
            ({ cardBody: arr3[0], skeletonCardBody: arr3[1] } = tmp4);
            cResult[6] = tmp4.cardBody;
            cResult[7] = tmp4.skeletonCardBody;
            cResult[8] = items2;
            tmp12 = items2;
          }
          const obj7 = { style: null };
          const items3 = [,];
          ({ smallCardMedia: arr2[0], skeletonCardImage: arr2[1] } = tmp4);
          obj7.style = items3;
          const tmp11 = onPress(GameProfileSkeletonDefault, obj7);
          cResult[3] = tmp4.skeletonCardImage;
          cResult[4] = tmp4.smallCardMedia;
          cResult[5] = tmp11;
          tmp8 = tmp11;
        }
        const items4 = [tmp4.card, tmp5];
        cResult[0] = tmp4.card;
        cResult[1] = tmp5;
        cResult[2] = items4;
        tmp6 = items4;
      }
    : function GameProfileAnnouncementCardSkeleton(arg0) {
        ({ index, isWindowLarge } = arg0);
        const tmp = closure_15();
        const items = [tmp.card];
        const obj = { style: items, children: null };
        items[1] = isWindowLarge ? tmp.skeletonCardLarge : tmp.skeletonCard;
        const obj2 = {
          animationDelayMs: index * GameProfileSkeleton.SKELETON_CARD_ANIMATION_DELAY_MS,
          style: tmp.skeletonAnimationRoot,
          children: null,
        };
        const obj3 = { style: null };
        const items1 = [,];
        ({ smallCardMedia: arr2[0], skeletonCardImage: arr2[1] } = tmp);
        obj3.style = items1;
        const items2 = [onPress(GameProfileSkeletonDefault, obj3)];
        const obj4 = { style: null, children: null };
        const items3 = [,];
        ({ cardBody: arr4[0], skeletonCardBody: arr4[1] } = tmp);
        obj4.style = items3;
        const items4 = [
          onPress(GameProfileSkeletonDefault, { style: tmp.skeletonCardContent }),
          onPress(GameProfileSkeletonDefault, { style: tmp.skeletonCardMetadata }),
        ];
        obj4.children = items4;
        items2[1] = options(hasOwnProperty, obj4);
        obj2.children = items2;
        obj.children = options(GameProfileSkeleton.GameProfileSkeletonContainer, obj2);
        return onPress(hasOwnProperty, obj);
      },
);
ReactCompilerGating = fn(558);
let closure_17 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function GameProfileAnnouncementsSkeleton() {
        const cResult = require("c").c(6);
        const tmp4 = closure_15();
        const tmp6 = useIsWindowLargeDefault();
        _require = tmp6;
        ({ skeletonCardsScroller, skeletonCardsContainer } = tmp4);
        if (cResult[0] !== tmp6) {
          const _Array = Array;
          const arr = Array.from({ length: 3 }, (arg0, index) => onPress(closure_16, { index, isWindowLarge }, index));
          cResult[0] = tmp6;
          cResult[1] = arr;
          let tmp7 = arr;
        } else {
          tmp7 = cResult[1];
        }
        if (cResult[2] === tmp4.skeletonCardsContainer) {
          if (cResult[3] === tmp4.skeletonCardsScroller) {
            if (cResult[4] === tmp7) {
              let tmp10 = cResult[5];
            }
            return tmp10;
          }
        }
        const obj = require("c");
        const tmp = _require;
        const tmp11 = onPress(tmp(8948).GameProfileSectionSkeleton, {
          showViewAllSkeleton: true,
          skeletonTitleWidth: 200,
          children: onPress(GameProfileSkeletonCardRowDefault, {
            style: skeletonCardsScroller,
            contentContainerStyle: skeletonCardsContainer,
            children: tmp7,
          }),
        });
        cResult[2] = tmp4.skeletonCardsContainer;
        cResult[3] = tmp4.skeletonCardsScroller;
        cResult[4] = tmp7;
        cResult[5] = tmp11;
        tmp10 = tmp11;
        const obj2 = {
          showViewAllSkeleton: true,
          skeletonTitleWidth: 200,
          children: onPress(GameProfileSkeletonCardRowDefault, {
            style: skeletonCardsScroller,
            contentContainerStyle: skeletonCardsContainer,
            children: tmp7,
          }),
        };
      }
    : function GameProfileAnnouncementsSkeleton() {
        const tmp = closure_15();
        _require = useIsWindowLargeDefault();
        const obj = { showViewAllSkeleton: true, skeletonTitleWidth: 200, children: null };
        const obj2 = {
          style: tmp.skeletonCardsScroller,
          contentContainerStyle: tmp.skeletonCardsContainer,
          children: Array.from({ length: 3 }, (arg0, index) => onPress(closure_16, { index, isWindowLarge }, index)),
        };
        obj.children = onPress(GameProfileSkeletonCardRowDefault, obj2);
        return onPress(require("GameProfileSection").GameProfileSectionSkeleton, obj);
      },
);
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? function EmbedAnnouncementCard(message) {
      const cResult = c.c(79);
      message = message.message;
      onPress = message.onPress;
      ({ guildId, channelId } = message);
      const tmp4 = closure_15();
      if (cResult[0] === channelId) {
        if (cResult[1] === guildId) {
          if (cResult[2] === message) {
            if (cResult[3] === onPress) {
              if (cResult[4] === tmp4) {
                let tmp5 = cResult[5];
                let tmp6 = cResult[6];
                let tmp7 = cResult[7];
                let tmp8 = cResult[8];
                let tmp9 = cResult[9];
                let tmp10 = cResult[10];
                let tmp11 = cResult[11];
                let tmp12 = cResult[12];
                let tmp13 = cResult[13];
                let tmp14 = cResult[14];
                let tmp15 = cResult[15];
                let tmp16 = cResult[16];
                let tmp17 = cResult[17];
                let tmp18 = cResult[18];
                let tmp19 = cResult[19];
                let tmp20 = cResult[20];
              }
              const _Symbol = Symbol;
              if (tmp12 !== Symbol.for("react.early_return_sentinel")) {
                return tmp12;
              } else {
                if (cResult[43] === tmp8.providerIconUrl) {
                  if (cResult[44] === tmp4.embedProviderIcon) {
                    let tmp69 = cResult[45];
                  }
                  let str4 = "";
                  if (null != tmp8.providerName) {
                    const _HermesInternal = HermesInternal;
                    str4 = "" + tmp8.providerName + " \u00B7 ";
                  }
                  if (cResult[46] !== message.timestamp) {
                    const _Date = Date;
                    const date = new Date(message.timestamp);
                    const dateFormatResult = DateUtils.dateFormat(date, "LL");
                    cResult[46] = message.timestamp;
                    cResult[47] = dateFormatResult;
                    let tmp75 = dateFormatResult;
                    const tmpResult = DateUtils;
                  } else {
                    tmp75 = cResult[47];
                  }
                  if (cResult[48] === str4) {
                    if (cResult[49] === tmp75) {
                      let tmp81 = cResult[50];
                    }
                    if (cResult[51] === message.reactionCount) {
                      if (cResult[52] === tmp4.reactionInfo) {
                        let tmp84 = cResult[53];
                      }
                      if (cResult[54] === tmp4.metadataRow) {
                        if (cResult[55] === tmp69) {
                          if (cResult[56] === tmp81) {
                            if (cResult[57] === tmp84) {
                              let tmp98 = cResult[58];
                            }
                            if (cResult[59] === tmp5) {
                              if (cResult[60] === tmp9) {
                                if (cResult[61] === tmp98) {
                                  if (cResult[62] === tmp13) {
                                    if (cResult[63] === tmp14) {
                                      if (cResult[64] === tmp15) {
                                        if (cResult[65] === tmp16) {
                                          let tmp102 = cResult[66];
                                        }
                                        if (cResult[67] === tmp6) {
                                          if (cResult[68] === tmp102) {
                                            if (cResult[69] === tmp17) {
                                              if (cResult[70] === tmp18) {
                                                let tmp105 = cResult[71];
                                              }
                                              if (cResult[72] === tmp7) {
                                                if (cResult[73] === tmp10) {
                                                  if (cResult[74] === tmp11) {
                                                    if (cResult[75] === tmp105) {
                                                      if (cResult[76] === tmp19) {
                                                        if (cResult[77] === tmp20) {
                                                          let tmp108 = cResult[78];
                                                        }
                                                        return tmp108;
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                              const obj3 = {
                                                style: tmp19,
                                                onPress: tmp20,
                                                accessibilityRole: tmp10,
                                                accessibilityLabel: tmp11,
                                                children: tmp105,
                                              };
                                              const tmp110 = onPress(tmp7, obj3);
                                              cResult[72] = tmp7;
                                              cResult[73] = tmp10;
                                              cResult[74] = tmp11;
                                              cResult[75] = tmp105;
                                              cResult[76] = tmp19;
                                              cResult[77] = tmp20;
                                              cResult[78] = tmp110;
                                              tmp108 = tmp110;
                                            }
                                          }
                                        }
                                        const obj4 = { style: tmp17, children: null };
                                        const items = [tmp18, tmp102];
                                        obj4.children = items;
                                        const tmp107 = options(tmp6, obj4);
                                        cResult[67] = tmp6;
                                        cResult[68] = tmp102;
                                        cResult[69] = tmp17;
                                        cResult[70] = tmp18;
                                        cResult[71] = tmp107;
                                        tmp105 = tmp107;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            const obj5 = { style: tmp9, children: null };
                            const items1 = [tmp13, tmp14, tmp15, tmp16, tmp98];
                            obj5.children = items1;
                            const tmp104 = options(tmp5, obj5);
                            cResult[59] = tmp5;
                            cResult[60] = tmp9;
                            cResult[61] = tmp98;
                            cResult[62] = tmp13;
                            cResult[63] = tmp14;
                            cResult[64] = tmp15;
                            cResult[65] = tmp16;
                            cResult[66] = tmp104;
                            tmp102 = tmp104;
                          }
                        }
                      }
                      const obj6 = { style: tmp111, children: null };
                      const items2 = [tmp69, tmp81, tmp84];
                      obj6.children = items2;
                      const tmp101 = options(hasOwnProperty, obj6);
                      cResult[54] = tmp4.metadataRow;
                      cResult[55] = tmp69;
                      cResult[56] = tmp81;
                      cResult[57] = tmp84;
                      cResult[58] = tmp101;
                      tmp98 = tmp101;
                    }
                    let tmp86Result = message.reactionCount > 0;
                    if (tmp86Result) {
                      const obj7 = { style: tmp4.reactionInfo, children: null };
                      const obj8 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
                      const items3 = [onPress(ReactionIcon.ReactionIcon, obj8)];
                      let tmp91 = null != obj15;
                      if (tmp91) {
                        tmp91 = obj15.locale === util.intl.currentLocale;
                      }
                      if (!tmp91) {
                        const obj9 = { locale: util.intl.currentLocale, format: null };
                        const _Intl = Intl;
                        const numberFormat = new Intl.NumberFormat(util.intl.currentLocale);
                        obj9.format = numberFormat;
                        obj15 = obj9;
                      }
                      const obj10 = { variant: "text-xs/medium", color: "text-muted", children: null };
                      const format = obj15.format;
                      obj10.children = format.format(message.reactionCount);
                      items3[1] = onPress(Text_Text.Text, obj10);
                      obj7.children = items3;
                      tmp86Result = options(hasOwnProperty, obj7);
                    }
                    cResult[51] = message.reactionCount;
                    cResult[52] = tmp4.reactionInfo;
                    cResult[53] = tmp86Result;
                    tmp84 = tmp86Result;
                  }
                  const obj11 = { variant: "text-xs/medium", color: "text-muted", children: null };
                  const items4 = [str4, tmp75];
                  obj11.children = items4;
                  const tmp83 = options(Text_Text.Text, obj11);
                  cResult[48] = str4;
                  cResult[49] = tmp75;
                  cResult[50] = tmp83;
                  tmp81 = tmp83;
                }
                let tmp71 = null != tmp8.providerIconUrl;
                if (tmp71) {
                  const obj12 = { source: null, style: null };
                  const obj13 = { uri: tmp8.providerIconUrl };
                  obj12.source = obj13;
                  obj12.style = tmp4.embedProviderIcon;
                  tmp71 = onPress(FastImageDefault, obj12);
                }
                cResult[43] = tmp8.providerIconUrl;
                cResult[44] = tmp4.embedProviderIcon;
                cResult[45] = tmp71;
                tmp69 = tmp71;
              }
            }
          }
        }
      }
      if (null == parser) {
        parser = CustomMarkupAll.getParser();
      }
      const obj14 = { guildId, channelId, mentionPillOffsetY: num };
      const media = message.media;
      let proxyUrl;
      if (media != null) {
        proxyUrl = media.proxyUrl;
      }
      if (proxyUrl == null) {
        const media2 = message.media;
        let url;
        if (media2 != null) {
          url = media2.url;
        }
        proxyUrl = url;
      }
      if (cResult[21] !== proxyUrl) {
        let posterUrl = null;
        if (null != proxyUrl) {
          posterUrl = AnnouncementMessageUtils.getPosterUrl(proxyUrl, c11, c10);
          const tmpResult2 = AnnouncementMessageUtils;
        }
        cResult[21] = proxyUrl;
        cResult[22] = posterUrl;
        let tmp26 = posterUrl;
      } else {
        tmp26 = cResult[22];
      }
      if (tmp26 == null) {
        tmp26 = proxyUrl;
      }
      const embedSource = message.embedSource;
      let tmp30;
      let tmp31;
      let tmp32;
      let cardBody;
      let tmp34;
      let tmp35;
      let tmp36;
      let tmp37;
      let tmp38 = null;
      let title;
      let str;
      let tmp40;
      let tmp41;
      let tmp42;
      let tmp43;
      if (null != embedSource) {
        if (cResult[23] !== embedSource.color) {
          let tmp45;
          if (null != embedSource.color) {
            obj15 = { borderLeftColor: embedSource.color };
            tmp45 = obj15;
          }
          cResult[23] = embedSource.color;
          cResult[24] = tmp45;
          let tmp44 = tmp45;
        } else {
          tmp44 = cResult[24];
        }
        if (cResult[25] === message.id) {
          if (cResult[26] === onPress) {
            let tmp48 = cResult[27];
          }
          if (cResult[28] !== embedSource.url) {
            let tmp51 = null != embedSource.url;
            if (tmp51) {
              const obj16 = { variant: "text-xs/medium", color: "text-link", lineClamp: 1, children: embedSource.url };
              tmp51 = onPress(Text_Text.Text, obj16);
            }
            cResult[28] = embedSource.url;
            cResult[29] = tmp51;
            let tmp50 = tmp51;
          } else {
            tmp50 = cResult[29];
          }
          if (cResult[30] === tmp44) {
            if (cResult[31] === tmp4.embedContentArea) {
              let tmp53 = cResult[32];
            }
            if (cResult[33] === embedSource.authorIconUrl) {
              if (cResult[34] === embedSource.authorName) {
                if (cResult[35] === tmp4.embedAuthorIcon) {
                  if (cResult[36] === tmp4.embedAuthorRow) {
                    let tmp54 = cResult[37];
                  }
                  if (cResult[38] === message.media) {
                    if (cResult[39] === tmp26) {
                      if (cResult[40] === tmp4.embedMedia) {
                        if (cResult[41] === tmp4.mediaImage) {
                          let tmp61 = cResult[42];
                        }
                        let tmp64 = null != message.title;
                        if (tmp64) {
                          const obj17 = {
                            variant: "text-md/semibold",
                            color: "mobile-text-heading-primary",
                            lineClamp: 2,
                            children: tmp23(message.title, true, obj14),
                          };
                          tmp64 = onPress(Text_Text.Text, obj17);
                        }
                        let tmp66 = message.body.length > 0;
                        if (tmp66) {
                          const obj18 = {
                            variant: "text-sm/medium",
                            color: "text-default",
                            lineClamp: 3,
                            children: tmp23(message.body, true, obj14),
                          };
                          tmp66 = onPress(Text_Text.Text, obj18);
                        }
                        str = "button";
                        tmp34 = tmp66;
                        tmp30 = tmp48;
                        tmp31 = tmp47;
                        tmp32 = tmp50;
                        cardBody = tmp4.cardBody;
                        tmp35 = tmp64;
                        tmp36 = tmp61;
                        tmp37 = tmp54;
                        tmp38 = forResult;
                        title = message.title;
                        tmp40 = tmp53;
                        tmp41 = tmp46;
                        tmp42 = hasOwnProperty;
                        tmp43 = hasOwnProperty;
                      }
                    }
                  }
                  let tmp62 = null != message.media && null != tmp26;
                  if (tmp62) {
                    const obj19 = { style: tmp4.embedMedia, children: null };
                    const obj20 = {
                      uri: tmp26,
                      placeholder: message.media.placeholder,
                      placeholderVersion: message.media.placeholderVersion,
                      style: tmp4.mediaImage,
                    };
                    obj19.children = onPress(ImageWithPlaceholder.ImageWithPlaceholder, obj20);
                    tmp62 = onPress(hasOwnProperty, obj19);
                  }
                  cResult[38] = message.media;
                  cResult[39] = tmp26;
                  cResult[40] = tmp4.embedMedia;
                  cResult[41] = tmp4.mediaImage;
                  cResult[42] = tmp62;
                  tmp61 = tmp62;
                }
              }
            }
            let tmp56Result = null != embedSource.authorName;
            if (tmp56Result) {
              const obj21 = { style: tmp4.embedAuthorRow, children: null };
              let tmp57 = null != embedSource.authorIconUrl;
              if (tmp57) {
                const obj22 = { source: null, style: null };
                const obj23 = { uri: embedSource.authorIconUrl };
                obj22.source = obj23;
                obj22.style = tmp4.embedAuthorIcon;
                tmp57 = onPress(FastImageDefault, obj22);
              }
              const items5 = [tmp57];
              const obj24 = {
                variant: "text-xs/semibold",
                color: "text-strong",
                lineClamp: 1,
                children: embedSource.authorName,
              };
              items5[1] = onPress(Text_Text.Text, obj24);
              obj21.children = items5;
              tmp56Result = options(hasOwnProperty, obj21);
            }
            cResult[33] = embedSource.authorIconUrl;
            cResult[34] = embedSource.authorName;
            cResult[35] = tmp4.embedAuthorIcon;
            cResult[36] = tmp4.embedAuthorRow;
            cResult[37] = tmp56Result;
            tmp54 = tmp56Result;
          }
          const items6 = [tmp4.embedContentArea, tmp44];
          cResult[30] = tmp44;
          cResult[31] = tmp4.embedContentArea;
          cResult[32] = items6;
          tmp53 = items6;
        }
        const fn = function _() {
          return onPress(message.id);
        };
        cResult[25] = message.id;
        cResult[26] = onPress;
        cResult[27] = fn;
        tmp48 = fn;
      }
      cResult[0] = channelId;
      cResult[1] = guildId;
      cResult[2] = message;
      cResult[3] = onPress;
      cResult[4] = tmp4;
      cResult[5] = tmp43;
      cResult[6] = tmp42;
      cResult[7] = tmp41;
      cResult[8] = embedSource;
      cResult[9] = tmp40;
      cResult[10] = str;
      cResult[11] = title;
      cResult[12] = tmp38;
      cResult[13] = tmp37;
      cResult[14] = tmp36;
      cResult[15] = tmp35;
      cResult[16] = tmp34;
      cResult[17] = cardBody;
      cResult[18] = tmp32;
      cResult[19] = tmp31;
      cResult[20] = tmp30;
      tmp20 = tmp30;
      tmp19 = tmp31;
      tmp18 = tmp32;
      tmp17 = cardBody;
      tmp16 = tmp34;
      tmp15 = tmp35;
      tmp14 = tmp36;
      tmp13 = tmp37;
      tmp12 = tmp38;
      tmp11 = title;
      tmp10 = str;
      tmp9 = tmp40;
      tmp7 = tmp41;
      tmp6 = tmp42;
      tmp5 = tmp43;
      tmp8 = embedSource;
      forResult = Symbol.for("react.early_return_sentinel");
    }
  : function EmbedAnnouncementCard(message) {
      message = message.message;
      onPress = message.onPress;
      ({ guildId, channelId } = message);
      const tmp = closure_15();
      if (null == parser) {
        parser = CustomMarkupAll.getParser();
      }
      const obj2 = { guildId, channelId, mentionPillOffsetY: num };
      const media = message.media;
      let proxyUrl;
      if (media != null) {
        proxyUrl = media.proxyUrl;
      }
      if (proxyUrl == null) {
        const media2 = message.media;
        let url;
        if (media2 != null) {
          url = media2.url;
        }
        proxyUrl = url;
      }
      let posterUrl = null;
      if (null != proxyUrl) {
        posterUrl = AnnouncementMessageUtils.getPosterUrl(proxyUrl, c11, c10);
      }
      if (posterUrl == null) {
        posterUrl = proxyUrl;
      }
      const embedSource = message.embedSource;
      if (null == embedSource) {
        return null;
      } else {
        let tmp12;
        if (null != embedSource.color) {
          const obj4 = { borderLeftColor: embedSource.color };
          tmp12 = obj4;
        }
        const obj5 = {
          style: tmp.card,
          onPress() {
            return onPress(message.id);
          },
          accessibilityRole: "button",
          accessibilityLabel: message.title,
          children: null,
        };
        const obj6 = { style: tmp.cardBody, children: null };
        let tmp13Result = null != embedSource.url;
        if (tmp13Result) {
          const obj7 = { variant: "text-xs/medium", color: "text-link", lineClamp: 1, children: embedSource.url };
          tmp13Result = tmp13(Text_Text.Text, obj7);
        }
        const items = [tmp13Result];
        const obj8 = { style: null, children: null };
        const items1 = [tmp.embedContentArea, tmp12];
        obj8.style = items1;
        let tmp15Result = null != embedSource.authorName;
        if (tmp15Result) {
          const obj9 = { style: tmp.embedAuthorRow, children: null };
          let tmp13Result6 = null != embedSource.authorIconUrl;
          if (tmp13Result6) {
            const obj10 = { source: null, style: null };
            const obj11 = { uri: embedSource.authorIconUrl };
            obj10.source = obj11;
            obj10.style = tmp.embedAuthorIcon;
            tmp13Result6 = tmp13(FastImageDefault, obj10);
          }
          const items2 = [tmp13Result6];
          const obj12 = {
            variant: "text-xs/semibold",
            color: "text-strong",
            lineClamp: 1,
            children: embedSource.authorName,
          };
          items2[1] = tmp13(Text_Text.Text, obj12);
          obj9.children = items2;
          tmp15Result = options(hasOwnProperty, obj9);
        }
        const items3 = [tmp15Result, , , ,];
        let tmp13Result7 = null != message.media && null != posterUrl;
        if (tmp13Result7) {
          const obj13 = { style: tmp.embedMedia, children: null };
          const obj14 = {
            uri: posterUrl,
            placeholder: message.media.placeholder,
            placeholderVersion: message.media.placeholderVersion,
            style: tmp.mediaImage,
          };
          obj13.children = tmp13(ImageWithPlaceholder.ImageWithPlaceholder, obj14);
          tmp13Result7 = tmp13(hasOwnProperty, obj13);
        }
        items3[1] = tmp13Result7;
        let tmp13Result8 = null != message.title;
        if (tmp13Result8) {
          obj15 = {
            variant: "text-md/semibold",
            color: "mobile-text-heading-primary",
            lineClamp: 2,
            children: tmp4(message.title, true, obj2),
          };
          tmp13Result8 = tmp13(Text_Text.Text, obj15);
        }
        items3[2] = tmp13Result8;
        let tmp13Result9 = message.body.length > 0;
        if (tmp13Result9) {
          const obj16 = {
            variant: "text-sm/medium",
            color: "text-default",
            lineClamp: 3,
            children: tmp4(message.body, true, obj2),
          };
          tmp13Result9 = tmp13(Text_Text.Text, obj16);
        }
        items3[3] = tmp13Result9;
        const obj17 = { style: tmp.metadataRow, children: null };
        let tmp13Result10 = null != embedSource.providerIconUrl;
        if (tmp13Result10) {
          const obj18 = { source: null, style: null };
          const obj19 = { uri: embedSource.providerIconUrl };
          obj18.source = obj19;
          obj18.style = tmp.embedProviderIcon;
          tmp13Result10 = tmp13(FastImageDefault, obj18);
        }
        const items4 = [tmp13Result10, ,];
        let str2 = "";
        if (null != embedSource.providerName) {
          const _HermesInternal = HermesInternal;
          str2 = "" + embedSource.providerName + " \u00B7 ";
        }
        const obj20 = { variant: "text-xs/medium", color: "text-muted", children: null };
        const items5 = [str2];
        const _Date = Date;
        const date = new Date(message.timestamp);
        items5[1] = DateUtils.dateFormat(date, "LL");
        obj20.children = items5;
        items4[1] = options(Text_Text.Text, obj20);
        let tmp15Result2 = message.reactionCount > 0;
        if (tmp15Result2) {
          const obj21 = { style: tmp.reactionInfo, children: null };
          const obj22 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
          const items6 = [tmp13(ReactionIcon.ReactionIcon, obj22)];
          let tmp49 = null != obj15;
          if (tmp49) {
            tmp49 = obj15.locale === util.intl.currentLocale;
          }
          if (!tmp49) {
            const obj23 = { locale: util.intl.currentLocale, format: null };
            const _Intl = Intl;
            const numberFormat = new Intl.NumberFormat(util.intl.currentLocale);
            obj23.format = numberFormat;
            obj15 = obj23;
          }
          const obj24 = { variant: "text-xs/medium", color: "text-muted", children: null };
          const format = obj15.format;
          obj24.children = format.format(message.reactionCount);
          items6[1] = tmp13(Text_Text.Text, obj24);
          obj21.children = items6;
          tmp15Result2 = options(hasOwnProperty, obj21);
        }
        items4[2] = tmp15Result2;
        obj17.children = items4;
        items3[4] = options(hasOwnProperty, obj17);
        obj8.children = items3;
        items[1] = options(hasOwnProperty, obj8);
        obj6.children = items;
        obj5.children = options(hasOwnProperty, obj6);
        return onPress(timestampProducer, obj5);
      }
    };
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? function MessageAnnouncementCard(message) {
      const cResult = c.c(56);
      message = message.message;
      onPress = message.onPress;
      ({ guildId, channelId } = message);
      const tmp4 = closure_15();
      if (cResult[0] === channelId) {
        if (cResult[1] === guildId) {
          if (cResult[2] === message.body) {
            if (cResult[3] === message.id) {
              if (cResult[4] === message.media) {
                if (cResult[5] === message.title) {
                  if (cResult[6] === onPress) {
                    if (cResult[7] === tmp4.card) {
                      if (cResult[8] === tmp4.cardBody) {
                        if (cResult[9] === tmp4.mediaImage) {
                          if (cResult[10] === tmp4.smallCardMedia) {
                            let tmp5 = cResult[11];
                            let tmp6 = cResult[12];
                            let cardBody = cResult[13];
                            let tmp7 = cResult[14];
                            let tmp8 = cResult[15];
                            let tmp9 = cResult[16];
                            let tmp10 = cResult[17];
                            let str = cResult[18];
                            let tmp11 = cResult[19];
                            let tmp12 = cResult[20];
                          }
                          if (cResult[31] !== message.timestamp) {
                            const _Date = Date;
                            const date = new Date(message.timestamp);
                            const dateFormatResult = DateUtils.dateFormat(date, "LL");
                            cResult[31] = message.timestamp;
                            cResult[32] = dateFormatResult;
                            let tmp32 = dateFormatResult;
                            const tmpResult = DateUtils;
                          } else {
                            tmp32 = cResult[32];
                          }
                          if (cResult[33] !== tmp32) {
                            const obj3 = { variant: "text-xs/medium", color: "text-muted", children: tmp32 };
                            const tmp41 = onPress(Text_Text.Text, obj3);
                            cResult[33] = tmp32;
                            cResult[34] = tmp41;
                            let tmp39 = tmp41;
                          } else {
                            tmp39 = cResult[34];
                          }
                          if (cResult[35] === message.reactionCount) {
                            if (cResult[36] === tmp4.reactionInfo) {
                              let tmp42 = cResult[37];
                            }
                            if (cResult[38] === tmp4.metadataRow) {
                              if (cResult[39] === tmp39) {
                                if (cResult[40] === tmp42) {
                                  let tmp58 = cResult[41];
                                }
                                if (cResult[42] === tmp5) {
                                  if (cResult[43] === cardBody) {
                                    if (cResult[44] === tmp58) {
                                      if (cResult[45] === tmp7) {
                                        if (cResult[46] === tmp8) {
                                          let tmp62 = cResult[47];
                                        }
                                        if (cResult[48] === tmp6) {
                                          if (cResult[49] === tmp62) {
                                            if (cResult[50] === tmp9) {
                                              if (cResult[51] === tmp10) {
                                                if (cResult[52] === str) {
                                                  if (cResult[53] === tmp11) {
                                                    if (cResult[54] === tmp12) {
                                                      let tmp65 = cResult[55];
                                                    }
                                                    return tmp65;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                        const obj4 = {
                                          style: tmp9,
                                          onPress: tmp10,
                                          accessibilityRole: str,
                                          accessibilityLabel: tmp11,
                                          children: null,
                                        };
                                        const items = [tmp12, tmp62];
                                        obj4.children = items;
                                        const tmp67 = options(tmp6, obj4);
                                        cResult[48] = tmp6;
                                        cResult[49] = tmp62;
                                        cResult[50] = tmp9;
                                        cResult[51] = tmp10;
                                        cResult[52] = str;
                                        cResult[53] = tmp11;
                                        cResult[54] = tmp12;
                                        cResult[55] = tmp67;
                                        tmp65 = tmp67;
                                      }
                                    }
                                  }
                                }
                                const obj5 = { style: cardBody, children: null };
                                const items1 = [tmp7, tmp8, tmp58];
                                obj5.children = items1;
                                const tmp64 = options(tmp5, obj5);
                                cResult[42] = tmp5;
                                cResult[43] = cardBody;
                                cResult[44] = tmp58;
                                cResult[45] = tmp7;
                                cResult[46] = tmp8;
                                cResult[47] = tmp64;
                                tmp62 = tmp64;
                              }
                            }
                            const obj6 = { style: tmp4.metadataRow, children: null };
                            const items2 = [tmp39, tmp42];
                            obj6.children = items2;
                            const tmp61 = options(hasOwnProperty, obj6);
                            cResult[38] = tmp4.metadataRow;
                            cResult[39] = tmp39;
                            cResult[40] = tmp42;
                            cResult[41] = tmp61;
                            tmp58 = tmp61;
                          }
                          let tmp44Result = message.reactionCount > 0;
                          if (tmp44Result) {
                            const obj7 = { style: tmp4.reactionInfo, children: null };
                            const obj8 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
                            const items3 = [onPress(ReactionIcon.ReactionIcon, obj8)];
                            let tmp50 = null != obj15;
                            if (tmp50) {
                              tmp50 = obj15.locale === util.intl.currentLocale;
                            }
                            if (!tmp50) {
                              const obj9 = { locale: util.intl.currentLocale, format: null };
                              const _Intl = Intl;
                              const numberFormat = new Intl.NumberFormat(util.intl.currentLocale);
                              obj9.format = numberFormat;
                              obj15 = obj9;
                            }
                            const obj10 = { variant: "text-xs/medium", color: "text-muted", children: null };
                            const format = obj15.format;
                            obj10.children = format.format(message.reactionCount);
                            items3[1] = onPress(Text_Text.Text, obj10);
                            obj7.children = items3;
                            tmp44Result = options(hasOwnProperty, obj7);
                          }
                          cResult[35] = message.reactionCount;
                          cResult[36] = tmp4.reactionInfo;
                          cResult[37] = tmp44Result;
                          tmp42 = tmp44Result;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (null == parser) {
        parser = CustomMarkupAll.getParser();
      }
      const obj11 = { guildId, channelId, mentionPillOffsetY: num };
      const media = message.media;
      let proxyUrl;
      if (media != null) {
        proxyUrl = media.proxyUrl;
      }
      if (proxyUrl == null) {
        const media2 = message.media;
        let url;
        if (media2 != null) {
          url = media2.url;
        }
        proxyUrl = url;
      }
      if (cResult[21] !== proxyUrl) {
        let posterUrl = null;
        if (null != proxyUrl) {
          posterUrl = AnnouncementMessageUtils.getPosterUrl(proxyUrl, c11, c10);
          const tmpResult2 = AnnouncementMessageUtils;
        }
        cResult[21] = proxyUrl;
        cResult[22] = posterUrl;
        let tmp17 = posterUrl;
      } else {
        tmp17 = cResult[22];
      }
      if (tmp17 == null) {
        tmp17 = proxyUrl;
      }
      const card = tmp4.card;
      if (cResult[23] === message.id) {
        if (cResult[24] === onPress) {
          let tmp22 = cResult[25];
        }
        const title = message.title;
        if (cResult[26] === message.media) {
          if (cResult[27] === tmp17) {
            if (cResult[28] === tmp4.mediaImage) {
              if (cResult[29] === tmp4.smallCardMedia) {
                let tmp23 = cResult[30];
              }
              let tmp28 = null != message.title;
              if (tmp28) {
                const obj12 = {
                  variant: "text-md/semibold",
                  color: "mobile-text-heading-primary",
                  lineClamp: 2,
                  children: tmp14(message.title, true, obj11),
                };
                tmp28 = onPress(Text_Text.Text, obj12);
              }
              let tmp30 = message.body.length > 0;
              if (tmp30) {
                const obj13 = {
                  variant: "text-sm/medium",
                  color: "text-default",
                  lineClamp: 3,
                  children: tmp14(message.body, true, obj11),
                };
                tmp30 = onPress(Text_Text.Text, obj13);
              }
              cResult[0] = channelId;
              cResult[1] = guildId;
              cResult[2] = message.body;
              cResult[3] = message.id;
              cResult[4] = message.media;
              cResult[5] = message.title;
              cResult[6] = onPress;
              cResult[7] = tmp4.card;
              cResult[8] = tmp4.cardBody;
              cResult[9] = tmp4.mediaImage;
              cResult[10] = tmp4.smallCardMedia;
              cResult[11] = hasOwnProperty;
              cResult[12] = timestampProducer;
              class I {
                constructor() {
                  return onPress(message.id);
                }
              }
              cResult[14] = tmp28;
              cResult[15] = tmp30;
              cResult[16] = card;
              cResult[17] = tmp22;
              cResult[18] = "button";
              cResult[19] = title;
              cResult[20] = tmp23;
              tmp8 = tmp30;
              tmp12 = tmp23;
              tmp11 = title;
              str = "button";
              tmp10 = tmp22;
              tmp9 = card;
              tmp7 = tmp28;
              cardBody = tmp4.cardBody;
              tmp6 = timestampProducer;
              tmp5 = hasOwnProperty;
            }
          }
        }
        let tmp24 = null != message.media && null != tmp17;
        if (tmp24) {
          const obj14 = { style: tmp4.smallCardMedia, children: null };
          obj15 = {
            uri: tmp17,
            placeholder: message.media.placeholder,
            placeholderVersion: message.media.placeholderVersion,
            style: tmp4.mediaImage,
          };
          obj14.children = onPress(ImageWithPlaceholder.ImageWithPlaceholder, obj15);
          tmp24 = onPress(hasOwnProperty, obj14);
        }
        cResult[26] = message.media;
        cResult[27] = tmp17;
        cResult[28] = tmp4.mediaImage;
        cResult[29] = tmp4.smallCardMedia;
        cResult[30] = tmp24;
        tmp23 = tmp24;
      }
      class I {
        constructor() {
          return onPress(message.id);
        }
      }
      cResult[23] = message.id;
      cResult[24] = onPress;
      cResult[25] = I;
      tmp22 = I;
    }
  : function MessageAnnouncementCard(message) {
      message = message.message;
      onPress = message.onPress;
      ({ guildId, channelId } = message);
      const tmp = closure_15();
      if (null == parser) {
        parser = CustomMarkupAll.getParser();
      }
      const obj2 = { guildId, channelId, mentionPillOffsetY: num };
      const media = message.media;
      let proxyUrl;
      if (media != null) {
        proxyUrl = media.proxyUrl;
      }
      if (proxyUrl == null) {
        const media2 = message.media;
        let url;
        if (media2 != null) {
          url = media2.url;
        }
        proxyUrl = url;
      }
      let posterUrl = null;
      if (null != proxyUrl) {
        posterUrl = AnnouncementMessageUtils.getPosterUrl(proxyUrl, c11, c10);
      }
      if (posterUrl == null) {
        posterUrl = proxyUrl;
      }
      const obj4 = {
        style: tmp.card,
        onPress() {
          return onPress(message.id);
        },
        accessibilityRole: "button",
        accessibilityLabel: message.title,
        children: null,
      };
      let tmp14 = null != message.media;
      if (tmp14) {
        tmp14 = null != posterUrl;
      }
      if (tmp14) {
        const obj5 = { style: tmp.smallCardMedia, children: null };
        const obj6 = {
          uri: posterUrl,
          placeholder: message.media.placeholder,
          placeholderVersion: message.media.placeholderVersion,
          style: tmp.mediaImage,
        };
        obj5.children = onPress(ImageWithPlaceholder.ImageWithPlaceholder, obj6);
        tmp14 = onPress(hasOwnProperty, obj5);
      }
      const items = [tmp14];
      const obj7 = { style: tmp.cardBody, children: null };
      let tmp20 = null != message.title;
      if (tmp20) {
        const obj8 = {
          variant: "text-md/semibold",
          color: "mobile-text-heading-primary",
          lineClamp: 2,
          children: tmp4(message.title, true, obj2),
        };
        tmp20 = onPress(Text_Text.Text, obj8);
      }
      const items1 = [tmp20, ,];
      let tmp24 = message.body.length > 0;
      if (tmp24) {
        const obj9 = {
          variant: "text-sm/medium",
          color: "text-default",
          lineClamp: 3,
          children: tmp4(message.body, true, obj2),
        };
        tmp24 = onPress(Text_Text.Text, obj9);
      }
      items1[1] = tmp24;
      const obj10 = { style: tmp.metadataRow, children: null };
      const obj11 = { variant: "text-xs/medium", color: "text-muted", children: null };
      const obj12 = DateUtils;
      obj11.children = obj12.dateFormat(new Date(message.timestamp), "LL");
      const items2 = [onPress(Text_Text.Text, obj11)];
      let tmp12Result = message.reactionCount > 0;
      if (tmp12Result) {
        const obj13 = { style: tmp.reactionInfo, children: null };
        const obj14 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
        const items3 = [tmp28(ReactionIcon.ReactionIcon, obj14)];
        let tmp35 = null != obj15;
        if (tmp35) {
          tmp35 = obj15.locale === util.intl.currentLocale;
        }
        if (!tmp35) {
          obj15 = { locale: util.intl.currentLocale, format: null };
          const _Intl = Intl;
          const numberFormat = new Intl.NumberFormat(util.intl.currentLocale);
          obj15.format = numberFormat;
        }
        const obj16 = { variant: "text-xs/medium", color: "text-muted", children: null };
        const format = obj15.format;
        obj16.children = format.format(message.reactionCount);
        items3[1] = tmp28(Text_Text.Text, obj16);
        obj13.children = items3;
        tmp12Result = options(hasOwnProperty, obj13);
      }
      items2[1] = tmp12Result;
      obj10.children = items2;
      items1[2] = options(hasOwnProperty, obj10);
      obj7.children = items1;
      items[1] = options(hasOwnProperty, obj7);
      obj4.children = items;
      return options(timestampProducer, obj4);
    };
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PollAnnouncementCard(message) {
      const cResult = message(576).c(56);
      message = message.message;
      let str = message.onPress;
      const tmp4 = closure_15();
      importAll = tmp4;
      const poll = message.poll;
      if (null == poll) {
        return null;
      } else {
        if (cResult[0] === message.id) {
          if (cResult[1] === str) {
            if (cResult[2] === poll.answers) {
              if (cResult[3] === poll.question.text) {
                if (cResult[4] === tmp4.card) {
                  if (cResult[5] === tmp4.cardBody) {
                    if (cResult[6] === tmp4.pollAnswerOption) {
                      if (cResult[7] === tmp4.pollAnswers) {
                        if (cResult[27] === cResult[11]) {
                          if (cResult[28] === tmp4.pollMoreOptions) {
                            let tmp37 = cResult[29];
                          }
                          if (cResult[30] === tmp5) {
                            if (cResult[31] === tmp9) {
                              if (cResult[32] === tmp10) {
                                if (cResult[33] === tmp37) {
                                  let tmp40 = cResult[34];
                                }
                                if (cResult[35] === message.timestamp) {
                                  if (cResult[36] === poll) {
                                    let tmp44 = cResult[37];
                                  }
                                  if (cResult[38] !== tmp44) {
                                    const obj2 = { variant: "text-xs/medium", color: "text-muted", children: tmp44 };
                                    const tmp53 = onPress(tmp(5088).Text, obj2);
                                    cResult[38] = tmp44;
                                    cResult[39] = tmp53;
                                    let tmp51 = tmp53;
                                  } else {
                                    tmp51 = cResult[39];
                                  }
                                  if (cResult[40] === tmp4.metadataRow) {
                                    if (cResult[41] === tmp51) {
                                      let tmp54 = cResult[42];
                                    }
                                    if (cResult[43] === tmp6) {
                                      if (cResult[44] === tmp40) {
                                        if (cResult[45] === tmp54) {
                                          if (cResult[46] === tmp11) {
                                            if (cResult[47] === tmp12) {
                                              let tmp58 = cResult[48];
                                            }
                                            if (cResult[49] === tmp7) {
                                              if (cResult[50] === tmp58) {
                                                if (cResult[51] === tmp13) {
                                                  if (cResult[52] === tmp14) {
                                                    if (cResult[53] === tmp15) {
                                                      if (cResult[54] === tmp16) {
                                                        let tmp61 = cResult[55];
                                                      }
                                                      return tmp61;
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                            const obj3 = {
                                              style: tmp13,
                                              onPress: tmp14,
                                              accessibilityRole: tmp15,
                                              accessibilityLabel: tmp16,
                                              children: tmp58,
                                            };
                                            const tmp63 = onPress(tmp7, obj3);
                                            cResult[49] = tmp7;
                                            cResult[50] = tmp58;
                                            cResult[51] = tmp13;
                                            cResult[52] = tmp14;
                                            cResult[53] = tmp15;
                                            cResult[54] = tmp16;
                                            cResult[55] = tmp63;
                                            tmp61 = tmp63;
                                          }
                                        }
                                      }
                                    }
                                    const obj4 = { style: tmp11, children: null };
                                    const items = [tmp12, tmp40, tmp54];
                                    obj4.children = items;
                                    const tmp60 = closure_9(tmp6, obj4);
                                    cResult[43] = tmp6;
                                    cResult[44] = tmp40;
                                    cResult[45] = tmp54;
                                    cResult[46] = tmp11;
                                    cResult[47] = tmp12;
                                    cResult[48] = tmp60;
                                    tmp58 = tmp60;
                                  }
                                  const obj5 = { style: tmp43, children: tmp51 };
                                  const tmp57 = onPress(closure_5, obj5);
                                  cResult[40] = tmp4.metadataRow;
                                  cResult[41] = tmp51;
                                  cResult[42] = tmp57;
                                  tmp54 = tmp57;
                                }
                                const intl2 = tmp(1126).intl;
                                const obj6 = { createdAt: null, expiryLabel: null };
                                const _Date = Date;
                                const date = new Date(message.timestamp);
                                obj6.createdAt = date;
                                obj6.expiryLabel = tmp(8955).getPollExpiryLabel(poll);
                                const formatResult = intl2.format(tmp(1126).t.t0FTsH, obj6);
                                cResult[35] = message.timestamp;
                                cResult[36] = poll;
                                cResult[37] = formatResult;
                                tmp44 = formatResult;
                                const tmpResult = tmp(8955);
                              }
                            }
                          }
                          const obj7 = { style: tmp9, children: null };
                          const items1 = [tmp10, tmp37];
                          obj7.children = items1;
                          const tmp42 = closure_9(tmp5, obj7);
                          cResult[30] = tmp5;
                          cResult[31] = tmp9;
                          cResult[32] = tmp10;
                          cResult[33] = tmp37;
                          cResult[34] = tmp42;
                          tmp40 = tmp42;
                        }
                        let tmp38 = tmp8 > 0;
                        if (tmp38) {
                          const obj8 = {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            style: tmp4.pollMoreOptions,
                            children: null,
                          };
                          const intl = tmp(1126).intl;
                          const obj9 = { count: tmp8 };
                          obj8.children = intl.format(tmp(1126).t["mv/nIa"], obj9);
                          tmp38 = onPress(tmp(5088).Text, obj8);
                        }
                        cResult[27] = cResult[11];
                        cResult[28] = tmp4.pollMoreOptions;
                        cResult[29] = tmp38;
                        tmp37 = tmp38;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        const answers = poll.answers;
        num = 3;
        let num2 = 0;
        const substr = answers.slice(0, 3);
        const diff = poll.answers.length - substr.length;
        const card = tmp4.card;
        if (cResult[20] === message.id) {
          if (cResult[21] === str) {
            let tmp19 = cResult[22];
          }
          const text = poll.question.text;
          const cardBody = tmp4.cardBody;
          if (cResult[23] !== poll.question.text) {
            const obj10 = {
              variant: "text-md/semibold",
              color: "mobile-text-heading-primary",
              children: poll.question.text,
            };
            const tmp23 = onPress(tmp(5088).Text, obj10);
            cResult[23] = poll.question.text;
            cResult[24] = tmp23;
            let tmp21 = tmp23;
          } else {
            tmp21 = cResult[24];
          }
          const pollAnswers = tmp4.pollAnswers;
          if (cResult[25] !== tmp4.pollAnswerOption) {
            class L {
              constructor(arg0) {
                tmp = jsx;
                obj = { style: closure_2.pollAnswerOption, children: null };
                tmp2 = View;
                str = message.poll_media.text;
                if (str == null) {
                  str = "";
                }
                obj.children = tmp(closure_0(closure_3[16]).Text, {
                  variant: "text-sm/medium",
                  color: "text-default",
                  lineClamp: 1,
                  children: str,
                });
                return tmp(tmp2, obj, message.answer_id);
              }
            }
            cResult[25] = tmp4.pollAnswerOption;
            cResult[26] = L;
          } else {
            class L {
              constructor(arg0) {
                tmp = jsx;
                obj = { style: closure_2.pollAnswerOption, children: null };
                tmp2 = View;
                str = message.poll_media.text;
                if (str == null) {
                  str = "";
                }
                obj.children = tmp(closure_0(closure_3[16]).Text, {
                  variant: "text-sm/medium",
                  color: "text-default",
                  lineClamp: 1,
                  children: str,
                });
                return tmp(tmp2, obj, message.answer_id);
              }
            }
          }
          const mapped = substr.map(L);
          cResult[num2] = message.id;
          cResult[1] = str;
          num2 = 2;
          cResult[2] = poll.answers;
          cResult[num] = poll.question.text;
          cResult[4] = tmp4.card;
          cResult[5] = tmp4.cardBody;
          cResult[6] = tmp4.pollAnswerOption;
          cResult[7] = tmp4.pollAnswers;
          cResult[8] = closure_5;
          cResult[9] = closure_5;
          cResult[10] = closure_6;
          cResult[11] = diff;
          cResult[12] = pollAnswers;
          cResult[13] = mapped;
          cResult[14] = cardBody;
          cResult[15] = tmp21;
          cResult[16] = card;
          cResult[17] = tmp19;
          str = "button";
          cResult[18] = "button";
          num = 19;
          cResult[19] = text;
        }
        const fn = function v() {
          return str(message.id);
        };
        cResult[20] = message.id;
        cResult[21] = str;
        cResult[22] = fn;
        tmp19 = fn;
      }
      let obj = message(576);
    }
  : function PollAnnouncementCard(message) {
      message = message.message;
      onPress = message.onPress;
      const tmp = closure_15();
      const pollAnswerOption = tmp;
      const poll = message.poll;
      if (null == poll) {
        return null;
      } else {
        const answers = poll.answers;
        const substr = answers.slice(0, 3);
        const diff = poll.answers.length - substr.length;
        const obj2 = {
          style: tmp.card,
          onPress() {
            return onPress(message.id);
          },
          accessibilityRole: "button",
          accessibilityLabel: poll.question.text,
          children: null,
        };
        const obj3 = { style: tmp.cardBody, children: null };
        const obj4 = {
          variant: "text-md/semibold",
          color: "mobile-text-heading-primary",
          children: poll.question.text,
        };
        const items = [onPress(message(5088).Text, obj4), ,];
        const obj5 = { style: tmp.pollAnswers, children: null };
        const items1 = [
          substr.map((poll_media) => {
            const obj = { style: pollAnswerOption.pollAnswerOption, children: null };
            let str = poll_media.poll_media.text;
            if (str == null) {
              str = "";
            }
            obj.children = onPress(Text_Text.Text, {
              variant: "text-sm/medium",
              color: "text-default",
              lineClamp: 1,
              children: str,
            });
            return onPress(hasOwnProperty, obj, poll_media.answer_id);
          }),
        ];
        let tmp9Result = diff > 0;
        if (tmp9Result) {
          let obj = { variant: "text-xs/medium", color: "text-muted", style: tmp.pollMoreOptions, children: null };
          const intl = tmp13(1126).intl;
          const obj6 = { count: diff };
          obj.children = intl.format(tmp13(1126).t["mv/nIa"], obj6);
          tmp9Result = tmp9(tmp13(5088).Text, obj);
        }
        items1[1] = tmp9Result;
        obj5.children = items1;
        items[1] = closure_9(closure_5, obj5);
        const obj7 = { style: tmp.metadataRow, children: null };
        const obj8 = { variant: "text-xs/medium", color: "text-muted", children: null };
        const intl2 = tmp13(1126).intl;
        const obj9 = { createdAt: null, expiryLabel: null };
        const _Date = Date;
        const date = new Date(message.timestamp);
        obj9.createdAt = date;
        obj9.expiryLabel = message(8955).getPollExpiryLabel(poll);
        obj8.children = intl2.format(message(1126).t.t0FTsH, obj9);
        obj7.children = onPress(message(5088).Text, obj8);
        items[2] = onPress(closure_5, obj7);
        obj3.children = items;
        obj2.children = closure_9(closure_5, obj3);
        return onPress(closure_6, obj2);
      }
    };
ReactCompilerGating = fn(558);
let closure_21 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function AnnouncementCard(message) {
        const cResult = c.c(6);
        if (null != message.message.poll) {
          if (cResult[0] !== message) {
            const obj2 = {};
            const merged = Object.assign(message);
            const tmp23 = onPress(closure_20, obj2);
            cResult[0] = message;
            cResult[1] = tmp23;
          }
        } else if (null != message.message.embedSource) {
          if (cResult[2] !== message) {
            const obj3 = {};
            const merged1 = Object.assign(message);
            const tmp15 = onPress(closure_18, obj3);
            cResult[2] = message;
            cResult[3] = tmp15;
          }
        } else {
          if (cResult[4] !== message) {
            const obj4 = {};
            const merged2 = Object.assign(message);
            const tmp8 = onPress(closure_19, obj4);
            cResult[4] = message;
            cResult[5] = tmp8;
            let tmp2 = tmp8;
          } else {
            tmp2 = cResult[5];
          }
          return tmp2;
        }
      }
    : function AnnouncementCard(message) {
        if (null != message.message.poll) {
          const obj2 = {};
          const merged = Object.assign(message);
          let tmp6 = onPress(closure_20, obj2);
        } else if (null != message.message.embedSource) {
          const obj3 = {};
          const merged1 = Object.assign(message);
          tmp6 = onPress(closure_18, obj3);
        } else {
          const obj = {};
          const merged2 = Object.assign(message);
          tmp6 = onPress(closure_19, obj);
        }
        return tmp6;
      },
);
ReactCompilerGating = fn(558);
let obj18 = { gap: nativeDefault.space.PX_8 };
size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileAnnouncements.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GameProfileAnnouncements(gameId) {
      const cResult = gameId(trackAction[10]).c(36);
      gameId = gameId.gameId;
      const invite = gameId.invite;
      const closeModal = gameId.closeModal;
      trackAction = gameId.trackAction;
      const scrollY = gameId.scrollY;
      const tmp4 = closure_15();
      const analyticsLocations = invite(trackAction[21])().analyticsLocations;
      const tmp5 = invite(trackAction[22])(gameId, guildId);
      ({ messages, channelId } = tmp5);
      guildId = tmp5.guildId;
      if (cResult[0] === analyticsLocations) {
        if (cResult[1] === channelId) {
          if (cResult[2] === closeModal) {
            if (cResult[3] === gameId) {
              if (cResult[4] === guildId) {
                if (cResult[5] === invite) {
                  if (cResult[6] === scrollY) {
                    if (cResult[7] === trackAction) {
                      let tmp6 = cResult[8];
                    }
                    if (cResult[9] === analyticsLocations) {
                      if (cResult[10] === channelId) {
                        if (cResult[11] === closeModal) {
                          if (cResult[12] === gameId) {
                            if (cResult[13] === guildId) {
                              if (cResult[14] === invite) {
                                if (cResult[15] === scrollY) {
                                  if (cResult[16] === trackAction) {
                                    let tmp7 = cResult[17];
                                  }
                                  onPress = tmp7;
                                  class T {
                                    constructor(arg0) {
                                      tmp = invite;
                                      id = undefined;
                                      if (invite != null) {
                                        guild = tmp.guild;
                                        if (guild != null) {
                                          id = guild.id;
                                        }
                                      }
                                      if (id == null) {
                                        id = guildId;
                                      }
                                      tmp3 = null != id;
                                      if (tmp3) {
                                        tmp4 = channelId;
                                        tmp3 = null != channelId;
                                      }
                                      if (tmp3) {
                                        tmp5 = gameId;
                                        tmp6 = trackAction;
                                        tmp7 = closure_0;
                                        tmp8 = closure_3;
                                        tmp9 = trackAction(
                                          closure_0(closure_3[23]).GameProfileTrackActionActions.AnnouncementsItem,
                                        );
                                        tmp10 = closure_1;
                                        obj = closure_1(closure_3[24]);
                                        obj1 = { gameId: null, channelId: null, initialScrollOffset: null };
                                        tmp11 = gameId;
                                        obj1.gameId = gameId;
                                        tmp12 = channelId;
                                        obj1.channelId = channelId;
                                        tmp13 = scrollY;
                                        obj1.initialScrollOffset = scrollY.get();
                                        result = obj.setGameProfilePendingReturn(obj1);
                                        tmp15 = closeModal;
                                        tmp16 = closeModal();
                                        obj4 = {
                                          invite: null,
                                          guildId: null,
                                          channelId: null,
                                          messageId: null,
                                          analyticsLocationStack: null,
                                        };
                                        obj4.invite = tmp;
                                        obj4.guildId = id;
                                        obj4.channelId = channelId;
                                        obj4.messageId = gameId;
                                        tmp17 = analyticsLocations;
                                        obj4.analyticsLocationStack = analyticsLocations;
                                        tmp18 = closure_1(closure_3[25])(obj4);
                                      }
                                      return;
                                    }
                                  }
                                  if (null != channelId) {
                                    if (0 !== messages.length) {
                                      const _Symbol = Symbol;
                                      class T {
                                        constructor(arg0) {
                                          tmp = invite;
                                          id = undefined;
                                          if (invite != null) {
                                            guild = tmp.guild;
                                            if (guild != null) {
                                              id = guild.id;
                                            }
                                          }
                                          if (id == null) {
                                            id = guildId;
                                          }
                                          tmp3 = null != id;
                                          if (tmp3) {
                                            tmp4 = channelId;
                                            tmp3 = null != channelId;
                                          }
                                          if (tmp3) {
                                            tmp5 = gameId;
                                            tmp6 = trackAction;
                                            tmp7 = closure_0;
                                            tmp8 = closure_3;
                                            tmp9 = trackAction(
                                              closure_0(closure_3[23]).GameProfileTrackActionActions.AnnouncementsItem,
                                            );
                                            tmp10 = closure_1;
                                            obj = closure_1(closure_3[24]);
                                            obj1 = { gameId: null, channelId: null, initialScrollOffset: null };
                                            tmp11 = gameId;
                                            obj1.gameId = gameId;
                                            tmp12 = channelId;
                                            obj1.channelId = channelId;
                                            tmp13 = scrollY;
                                            obj1.initialScrollOffset = scrollY.get();
                                            result = obj.setGameProfilePendingReturn(obj1);
                                            tmp15 = closeModal;
                                            tmp16 = closeModal();
                                            obj4 = {
                                              invite: null,
                                              guildId: null,
                                              channelId: null,
                                              messageId: null,
                                              analyticsLocationStack: null,
                                            };
                                            obj4.invite = tmp;
                                            obj4.guildId = id;
                                            obj4.channelId = channelId;
                                            obj4.messageId = gameId;
                                            tmp17 = analyticsLocations;
                                            obj4.analyticsLocationStack = analyticsLocations;
                                            tmp18 = closure_1(closure_3[25])(obj4);
                                          }
                                          return;
                                        }
                                      }
                                      if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                                        const string = gameId(trackAction[6]).intl.string;
                                        class T {
                                          constructor(arg0) {
                                            tmp = invite;
                                            id = undefined;
                                            if (invite != null) {
                                              guild = tmp.guild;
                                              if (guild != null) {
                                                id = guild.id;
                                              }
                                            }
                                            if (id == null) {
                                              id = guildId;
                                            }
                                            tmp3 = null != id;
                                            if (tmp3) {
                                              tmp4 = channelId;
                                              tmp3 = null != channelId;
                                            }
                                            if (tmp3) {
                                              tmp5 = gameId;
                                              tmp6 = trackAction;
                                              tmp7 = closure_0;
                                              tmp8 = closure_3;
                                              tmp9 = trackAction(
                                                closure_0(closure_3[23]).GameProfileTrackActionActions
                                                  .AnnouncementsItem,
                                              );
                                              tmp10 = closure_1;
                                              obj = closure_1(closure_3[24]);
                                              obj1 = { gameId: null, channelId: null, initialScrollOffset: null };
                                              tmp11 = gameId;
                                              obj1.gameId = gameId;
                                              tmp12 = channelId;
                                              obj1.channelId = channelId;
                                              tmp13 = scrollY;
                                              obj1.initialScrollOffset = scrollY.get();
                                              result = obj.setGameProfilePendingReturn(obj1);
                                              tmp15 = closeModal;
                                              tmp16 = closeModal();
                                              obj4 = {
                                                invite: null,
                                                guildId: null,
                                                channelId: null,
                                                messageId: null,
                                                analyticsLocationStack: null,
                                              };
                                              obj4.invite = tmp;
                                              obj4.guildId = id;
                                              obj4.channelId = channelId;
                                              obj4.messageId = gameId;
                                              tmp17 = analyticsLocations;
                                              obj4.analyticsLocationStack = analyticsLocations;
                                              tmp18 = closure_1(closure_3[25])(obj4);
                                            }
                                            return;
                                          }
                                        }
                                        cResult[19] = tmp10;
                                        let tmp9 = tmp10;
                                      } else {
                                        tmp9 = cResult[19];
                                      }
                                      if (cResult[20] === channelId) {
                                        if (cResult[21] === guildId) {
                                          if (cResult[22] === tmp7) {
                                            if (cResult[23] === messages) {
                                              if (cResult[29] === tmp4.smallCardsContainer) {
                                                if (cResult[30] === tmp4.smallCardsScroller) {
                                                  if (cResult[31] === tmp13) {
                                                    let tmp17 = cResult[32];
                                                  }
                                                  if (cResult[33] === tmp6) {
                                                    if (cResult[34] === tmp17) {
                                                      let tmp19 = cResult[35];
                                                    }
                                                    return tmp19;
                                                  }
                                                  class T {
                                                    constructor(arg0) {
                                                      tmp = invite;
                                                      id = undefined;
                                                      if (invite != null) {
                                                        guild = tmp.guild;
                                                        if (guild != null) {
                                                          id = guild.id;
                                                        }
                                                      }
                                                      if (id == null) {
                                                        id = guildId;
                                                      }
                                                      tmp3 = null != id;
                                                      if (tmp3) {
                                                        tmp4 = channelId;
                                                        tmp3 = null != channelId;
                                                      }
                                                      if (tmp3) {
                                                        tmp5 = gameId;
                                                        tmp6 = trackAction;
                                                        tmp7 = closure_0;
                                                        tmp8 = closure_3;
                                                        tmp9 = trackAction(
                                                          closure_0(closure_3[23]).GameProfileTrackActionActions
                                                            .AnnouncementsItem,
                                                        );
                                                        tmp10 = closure_1;
                                                        obj = closure_1(closure_3[24]);
                                                        obj1 = {
                                                          gameId: null,
                                                          channelId: null,
                                                          initialScrollOffset: null,
                                                        };
                                                        tmp11 = gameId;
                                                        obj1.gameId = gameId;
                                                        tmp12 = channelId;
                                                        obj1.channelId = channelId;
                                                        tmp13 = scrollY;
                                                        obj1.initialScrollOffset = scrollY.get();
                                                        result = obj.setGameProfilePendingReturn(obj1);
                                                        tmp15 = closeModal;
                                                        tmp16 = closeModal();
                                                        obj4 = {
                                                          invite: null,
                                                          guildId: null,
                                                          channelId: null,
                                                          messageId: null,
                                                          analyticsLocationStack: null,
                                                        };
                                                        obj4.invite = tmp;
                                                        obj4.guildId = id;
                                                        obj4.channelId = channelId;
                                                        obj4.messageId = gameId;
                                                        tmp17 = analyticsLocations;
                                                        obj4.analyticsLocationStack = analyticsLocations;
                                                        tmp18 = closure_1(closure_3[25])(obj4);
                                                      }
                                                      return;
                                                    }
                                                  }
                                                  let obj2 = { title: tmp9, onPressViewAll: tmp6, children: tmp17 };
                                                  class D {
                                                    constructor(arg0) {
                                                      obj = { message: gameId, onPress: closure_8, guildId, channelId };
                                                      return jsx(closure_21, obj, gameId.id);
                                                    }
                                                  }
                                                  cResult[33] = tmp6;
                                                  cResult[34] = tmp17;
                                                  cResult[35] = tmp20;
                                                  tmp19 = tmp20;
                                                }
                                              }
                                              class T {
                                                constructor(arg0) {
                                                  tmp = invite;
                                                  id = undefined;
                                                  if (invite != null) {
                                                    guild = tmp.guild;
                                                    if (guild != null) {
                                                      id = guild.id;
                                                    }
                                                  }
                                                  if (id == null) {
                                                    id = guildId;
                                                  }
                                                  tmp3 = null != id;
                                                  if (tmp3) {
                                                    tmp4 = channelId;
                                                    tmp3 = null != channelId;
                                                  }
                                                  if (tmp3) {
                                                    tmp5 = gameId;
                                                    tmp6 = trackAction;
                                                    tmp7 = closure_0;
                                                    tmp8 = closure_3;
                                                    tmp9 = trackAction(
                                                      closure_0(closure_3[23]).GameProfileTrackActionActions
                                                        .AnnouncementsItem,
                                                    );
                                                    tmp10 = closure_1;
                                                    obj = closure_1(closure_3[24]);
                                                    obj1 = { gameId: null, channelId: null, initialScrollOffset: null };
                                                    tmp11 = gameId;
                                                    obj1.gameId = gameId;
                                                    tmp12 = channelId;
                                                    obj1.channelId = channelId;
                                                    tmp13 = scrollY;
                                                    obj1.initialScrollOffset = scrollY.get();
                                                    result = obj.setGameProfilePendingReturn(obj1);
                                                    tmp15 = closeModal;
                                                    tmp16 = closeModal();
                                                    obj4 = {
                                                      invite: null,
                                                      guildId: null,
                                                      channelId: null,
                                                      messageId: null,
                                                      analyticsLocationStack: null,
                                                    };
                                                    obj4.invite = tmp;
                                                    obj4.guildId = id;
                                                    obj4.channelId = channelId;
                                                    obj4.messageId = gameId;
                                                    tmp17 = analyticsLocations;
                                                    obj4.analyticsLocationStack = analyticsLocations;
                                                    tmp18 = closure_1(closure_3[25])(obj4);
                                                  }
                                                  return;
                                                }
                                              }
                                              let obj3 = {
                                                showsHorizontalScrollIndicator: false,
                                                style: tmp11,
                                                contentContainerStyle: tmp12,
                                                decelerationRate: "fast",
                                                snapToInterval: 172,
                                                snapToStart: false,
                                                snapToEnd: false,
                                                children: cResult[24],
                                              };
                                              class D {
                                                constructor(arg0) {
                                                  obj = { message: gameId, onPress: closure_8, guildId, channelId };
                                                  return jsx(closure_21, obj, gameId.id);
                                                }
                                              }
                                              cResult[29] = tmp4.smallCardsContainer;
                                              cResult[30] = tmp4.smallCardsScroller;
                                              cResult[31] = cResult[24];
                                              cResult[32] = tmp18;
                                              tmp17 = tmp18;
                                            }
                                          }
                                        }
                                      }
                                      if (cResult[25] === channelId) {
                                        if (cResult[26] === guildId) {
                                          if (cResult[27] === tmp7) {
                                            let tmp14 = cResult[28];
                                          }
                                          const mapped = messages.map(tmp14);
                                          class T {
                                            constructor(arg0) {
                                              tmp = invite;
                                              id = undefined;
                                              if (invite != null) {
                                                guild = tmp.guild;
                                                if (guild != null) {
                                                  id = guild.id;
                                                }
                                              }
                                              if (id == null) {
                                                id = guildId;
                                              }
                                              tmp3 = null != id;
                                              if (tmp3) {
                                                tmp4 = channelId;
                                                tmp3 = null != channelId;
                                              }
                                              if (tmp3) {
                                                tmp5 = gameId;
                                                tmp6 = trackAction;
                                                tmp7 = closure_0;
                                                tmp8 = closure_3;
                                                tmp9 = trackAction(
                                                  closure_0(closure_3[23]).GameProfileTrackActionActions
                                                    .AnnouncementsItem,
                                                );
                                                tmp10 = closure_1;
                                                obj = closure_1(closure_3[24]);
                                                obj1 = { gameId: null, channelId: null, initialScrollOffset: null };
                                                tmp11 = gameId;
                                                obj1.gameId = gameId;
                                                tmp12 = channelId;
                                                obj1.channelId = channelId;
                                                tmp13 = scrollY;
                                                obj1.initialScrollOffset = scrollY.get();
                                                result = obj.setGameProfilePendingReturn(obj1);
                                                tmp15 = closeModal;
                                                tmp16 = closeModal();
                                                obj4 = {
                                                  invite: null,
                                                  guildId: null,
                                                  channelId: null,
                                                  messageId: null,
                                                  analyticsLocationStack: null,
                                                };
                                                obj4.invite = tmp;
                                                obj4.guildId = id;
                                                obj4.channelId = channelId;
                                                obj4.messageId = gameId;
                                                tmp17 = analyticsLocations;
                                                obj4.analyticsLocationStack = analyticsLocations;
                                                tmp18 = closure_1(closure_3[25])(obj4);
                                              }
                                              return;
                                            }
                                          }
                                          cResult[20] = channelId;
                                          cResult[21] = guildId;
                                          class D {
                                            constructor(arg0) {
                                              obj = { message: gameId, onPress: closure_8, guildId, channelId };
                                              return jsx(closure_21, obj, gameId.id);
                                            }
                                          }
                                          cResult[23] = messages;
                                          cResult[24] = mapped;
                                        }
                                      }
                                      class D {
                                        constructor(arg0) {
                                          obj = { message: gameId, onPress: closure_8, guildId, channelId };
                                          return jsx(closure_21, obj, gameId.id);
                                        }
                                      }
                                      cResult[25] = channelId;
                                      cResult[26] = guildId;
                                      cResult[27] = tmp7;
                                      cResult[28] = D;
                                      tmp14 = D;
                                    }
                                  }
                                  return null;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    class T {
                      constructor(arg0) {
                        tmp = invite;
                        id = undefined;
                        if (invite != null) {
                          guild = tmp.guild;
                          if (guild != null) {
                            id = guild.id;
                          }
                        }
                        if (id == null) {
                          id = guildId;
                        }
                        tmp3 = null != id;
                        if (tmp3) {
                          tmp4 = channelId;
                          tmp3 = null != channelId;
                        }
                        if (tmp3) {
                          tmp5 = gameId;
                          tmp6 = trackAction;
                          tmp7 = closure_0;
                          tmp8 = closure_3;
                          tmp9 = trackAction(closure_0(closure_3[23]).GameProfileTrackActionActions.AnnouncementsItem);
                          tmp10 = closure_1;
                          obj = closure_1(closure_3[24]);
                          obj1 = { gameId: null, channelId: null, initialScrollOffset: null };
                          tmp11 = gameId;
                          obj1.gameId = gameId;
                          tmp12 = channelId;
                          obj1.channelId = channelId;
                          tmp13 = scrollY;
                          obj1.initialScrollOffset = scrollY.get();
                          result = obj.setGameProfilePendingReturn(obj1);
                          tmp15 = closeModal;
                          tmp16 = closeModal();
                          obj4 = {
                            invite: null,
                            guildId: null,
                            channelId: null,
                            messageId: null,
                            analyticsLocationStack: null,
                          };
                          obj4.invite = tmp;
                          obj4.guildId = id;
                          obj4.channelId = channelId;
                          obj4.messageId = gameId;
                          tmp17 = analyticsLocations;
                          obj4.analyticsLocationStack = analyticsLocations;
                          tmp18 = closure_1(closure_3[25])(obj4);
                        }
                        return;
                      }
                    }
                    cResult[9] = analyticsLocations;
                    cResult[10] = channelId;
                    cResult[11] = closeModal;
                    cResult[12] = gameId;
                    cResult[13] = guildId;
                    cResult[14] = invite;
                    cResult[15] = scrollY;
                    cResult[16] = trackAction;
                    cResult[17] = T;
                    tmp7 = T;
                  }
                }
              }
            }
          }
        }
      }
      const fn = function l() {
        let id;
        if (invite != null) {
          guild = invite.guild;
          if (guild != null) {
            id = guild.id;
          }
        }
        if (id == null) {
          id = guildId;
        }
        let tmp3 = null != id;
        if (tmp3) {
          tmp3 = null != channelId;
        }
        if (tmp3) {
          trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.Announcements);
          const obj2 = { gameId, channelId, initialScrollOffset: scrollY.get() };
          const result = GameProfileActionCreatorsDefault.setGameProfilePendingReturn(obj2);
          closeModal();
          const obj3 = { invite, guildId: id, channelId, analyticsLocationStack: analyticsLocations };
          navigateToGameAnnouncementDefault(obj3);
        }
      };
      cResult[0] = analyticsLocations;
      cResult[1] = channelId;
      cResult[2] = closeModal;
      cResult[3] = gameId;
      cResult[4] = guildId;
      cResult[5] = invite;
      cResult[6] = scrollY;
      cResult[7] = trackAction;
      cResult[8] = fn;
      tmp6 = fn;
    }
  : function GameProfileAnnouncements(gameId) {
      gameId = gameId.gameId;
      const invite = gameId.invite;
      const closeModal = gameId.closeModal;
      const trackAction = gameId.trackAction;
      const scrollY = gameId.scrollY;
      channelId = undefined;
      let guildId;
      const analyticsLocations = invite(trackAction[21])().analyticsLocations;
      const tmp4 = invite(trackAction[22])(gameId, guildId);
      ({ messages, channelId } = tmp4);
      guildId = tmp4.guildId;
      const items = [trackAction, scrollY, closeModal, invite, guildId, channelId, analyticsLocations, gameId];
      ({ loading, hasFetched } = tmp4);
      const items1 = [trackAction, scrollY, closeModal, invite, guildId, channelId, analyticsLocations, gameId];
      const callback = scrollY.useCallback(() => {
        let id;
        if (invite != null) {
          guild = invite.guild;
          if (guild != null) {
            id = guild.id;
          }
        }
        if (id == null) {
          id = guildId;
        }
        let tmp3 = null != id;
        if (tmp3) {
          tmp3 = null != channelId;
        }
        if (tmp3) {
          trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.Announcements);
          const obj2 = { gameId, channelId, initialScrollOffset: scrollY.get() };
          const result = GameProfileActionCreatorsDefault.setGameProfilePendingReturn(obj2);
          closeModal();
          const obj3 = { invite, guildId: id, channelId, analyticsLocationStack: analyticsLocations };
          navigateToGameAnnouncementDefault(obj3);
        }
      }, items);
      onPress = scrollY.useCallback((messageId) => {
        let id;
        if (invite != null) {
          guild = invite.guild;
          if (guild != null) {
            id = guild.id;
          }
        }
        if (id == null) {
          id = guildId;
        }
        let tmp3 = null != id;
        if (tmp3) {
          tmp3 = null != channelId;
        }
        if (tmp3) {
          trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.AnnouncementsItem);
          const obj2 = { gameId, channelId, initialScrollOffset: scrollY.get() };
          const result = GameProfileActionCreatorsDefault.setGameProfilePendingReturn(obj2);
          closeModal();
          const obj3 = { invite, guildId: id, channelId, messageId, analyticsLocationStack: analyticsLocations };
          navigateToGameAnnouncementDefault(obj3);
        }
      }, items1);
      if (!hasFetched) {
        if (gameId.hasDiscordWebsite) {
          let tmp6 = onPress(closure_17, {});
        }
        return tmp6;
      }
      tmp6 = null;
      if (null != channelId) {
        tmp6 = null;
        if (0 !== messages.length) {
          let obj = { title: null, onPressViewAll: null, children: null };
          const intl = gameId(tmp3[6]).intl;
          obj.title = intl.string(gameId(tmp3[6]).t.B0BV3Y);
          obj.onPressViewAll = callback;
          let obj3 = {
            showsHorizontalScrollIndicator: false,
            style: null,
            contentContainerStyle: null,
            decelerationRate: "fast",
            snapToInterval: 172,
            snapToStart: false,
            snapToEnd: false,
            children: null,
          };
          ({ smallCardsScroller: obj2.style, smallCardsContainer: obj2.contentContainerStyle } = tmp);
          const tmp2Result = tmp2(tmp3[13]);
          obj3.children = messages.map((message) =>
            onPress(closure_21, { message, onPress, guildId, channelId }, message.id),
          );
          obj.children = onPress(tmp2(tmp3[26]), obj3);
          tmp6 = onPress(tmp2Result, obj);
          const tmp2Result2 = tmp2(tmp3[26]);
        }
      }
      tmp = closure_15();
    };
