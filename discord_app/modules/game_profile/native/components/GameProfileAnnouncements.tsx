// === Module 8404: GameProfileAnnouncements ===

// Module 8404 (GameProfileAnnouncements)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import DateUtils from "DateUtils" /* 4552 */;
import Text_Text from "Text/Text" /* 4886 */;
import CustomMarkupAll from "CustomMarkup" /* 5784 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6433 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8319 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8325 */;
import GameProfileSkeleton from "GameProfileSkeleton" /* 8386 */;
import GameProfileSkeletonCardRowDefault from "GameProfileSkeletonCardRow" /* 8405 */;
import AnnouncementMessageUtils from "AnnouncementMessageUtils" /* 8406 */;
import ImageWithPlaceholder from "ImageWithPlaceholder" /* 8409 */;
import ReactionIcon from "ReactionIcon" /* 8411 */;
import navigateToGameAnnouncementDefault from "navigateToGameAnnouncement" /* 8416 */;
import noop from "module_19" /* 19 */;

const GameProfileSkeletonDefault = GameProfileSkeleton;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire, Pressable: closure_7 } = get_ActivityIndicator);
const MAX_VISIBLE_ANNOUNCEMENTS = fn(8358).MAX_VISIBLE_ANNOUNCEMENTS;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let c11 = 120;
let c12 = 160;
const PlatformUtils = fn(1369);
let closure_14 = null;
const createStyles = fn(4890);
let obj = { smallCardsScroller: { marginHorizontal: -nativeDefault.space.PX_16, overflow: "visible" }, skeletonCardsScroller: null, smallCardsContainer: null, skeletonCardsContainer: null, card: null, cardBody: null, smallCardMedia: null, mediaImage: null, metadataRow: null, reactionInfo: null, embedContentArea: null, embedAuthorRow: null, embedAuthorIcon: null, embedProviderIcon: null, embedMedia: null, pollAnswers: null, pollAnswerOption: null, pollMoreOptions: null, skeletonCard: null, skeletonCardLarge: null, skeletonAnimationRoot: null, skeletonCardImage: null, skeletonCardBody: null, skeletonCardContent: null, skeletonCardMetadata: null };
let obj4 = { marginHorizontal: -nativeDefault.space.PX_16, overflow: "visible" };
obj.skeletonCardsScroller = { marginHorizontal: -nativeDefault.space.PX_16 };
let obj5 = { marginHorizontal: -nativeDefault.space.PX_16 };
obj.smallCardsContainer = { flexDirection: "row", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
let obj6 = { flexDirection: "row", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
obj.skeletonCardsContainer = { paddingHorizontal: nativeDefault.space.PX_16 };
let obj7 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj.card = { flexDirection: "column", borderRadius: nativeDefault.radii.lg, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, width: 160 };
let obj8 = { flexDirection: "column", borderRadius: nativeDefault.radii.lg, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, width: 160 };
obj.cardBody = { flex: 1, flexDirection: "column", gap: nativeDefault.space.PX_4, overflow: "hidden", padding: nativeDefault.space.PX_12 };
obj.smallCardMedia = { height: 120, overflow: "hidden", flexShrink: 0 };
obj.mediaImage = { width: "100%", height: "100%", resizeMode: "cover" };
let obj9 = { flex: 1, flexDirection: "column", gap: nativeDefault.space.PX_4, overflow: "hidden", padding: nativeDefault.space.PX_12 };
obj.metadataRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, marginTop: "auto" };
let obj10 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, marginTop: "auto" };
obj.reactionInfo = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let obj11 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.embedContentArea = { flex: 1, gap: nativeDefault.space.PX_4, borderLeftWidth: 4, borderLeftColor: nativeDefault.colors.BORDER_SUBTLE, borderTopLeftRadius: nativeDefault.radii.xs, borderBottomLeftRadius: nativeDefault.radii.xs, paddingLeft: nativeDefault.space.PX_8 };
let obj12 = { flex: 1, gap: nativeDefault.space.PX_4, borderLeftWidth: 4, borderLeftColor: nativeDefault.colors.BORDER_SUBTLE, borderTopLeftRadius: nativeDefault.radii.xs, borderBottomLeftRadius: nativeDefault.radii.xs, paddingLeft: nativeDefault.space.PX_8 };
obj.embedAuthorRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let size = { width: 20, height: 20, borderRadius: nativeDefault.radii.round };
obj.embedAuthorIcon = size;
obj.embedProviderIcon = { width: 16, height: 16 };
let obj13 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.embedMedia = { overflow: "hidden", borderRadius: nativeDefault.radii.sm, aspectRatio: 1.7777777777777777 };
let obj15 = { flexDirection: "column", gap: nativeDefault.space.PX_4, flex: 1 };
obj.pollAnswers = obj15;
let obj14 = { overflow: "hidden", borderRadius: nativeDefault.radii.sm, aspectRatio: 1.7777777777777777 };
obj.pollAnswerOption = { paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let obj16 = { paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj.pollMoreOptions = { paddingHorizontal: nativeDefault.space.PX_12 };
obj.skeletonCard = { height: 282 };
obj.skeletonCardLarge = { height: 264 };
obj.skeletonAnimationRoot = { flex: 1 };
obj.skeletonCardImage = { width: "100%" };
let obj17 = { paddingHorizontal: nativeDefault.space.PX_12 };
obj.skeletonCardBody = { gap: nativeDefault.space.PX_8 };
const size1 = { height: nativeDefault.space.PX_48, borderRadius: nativeDefault.radii.xs, width: "88%" };
obj.skeletonCardContent = size1;
const size2 = { width: "60%", height: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.xs, marginTop: "auto" };
obj.skeletonCardMetadata = size2;
let closure_16 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_17 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(25);
  ({ index, isWindowLarge } = arg0);
  const tmp4 = closure_16();
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
          const tmp16 = options(GameProfileSkeletonDefault, obj2);
          cResult[9] = tmp4.skeletonCardContent;
          cResult[10] = tmp16;
          let tmp13 = tmp16;
        } else {
          tmp13 = cResult[10];
        }
        if (cResult[11] !== tmp4.skeletonCardMetadata) {
          const obj3 = { style: tmp4.skeletonCardMetadata };
          const tmp20 = options(GameProfileSkeletonDefault, obj3);
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
                  const tmp31 = options(timestampProducer, obj4);
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
            const tmp27 = v65535(GameProfileSkeleton.GameProfileSkeletonContainer, obj5);
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
        const tmp24 = v65535(timestampProducer, obj6);
        cResult[13] = tmp12;
        cResult[14] = tmp13;
        cResult[15] = tmp17;
        cResult[16] = tmp24;
        tmp21 = tmp24;
      }
      const items2 = [, ];
      ({ cardBody: arr3[0], skeletonCardBody: arr3[1] } = tmp4);
      cResult[6] = tmp4.cardBody;
      cResult[7] = tmp4.skeletonCardBody;
      cResult[8] = items2;
      tmp12 = items2;
    }
    const obj7 = { style: null };
    const items3 = [, ];
    ({ smallCardMedia: arr2[0], skeletonCardImage: arr2[1] } = tmp4);
    obj7.style = items3;
    const tmp11 = options(GameProfileSkeletonDefault, obj7);
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
}) : ((arg0) => {
  ({ index, isWindowLarge } = arg0);
  const tmp = closure_16();
  const items = [tmp.card, ];
  const obj = { style: items, children: null };
  items[1] = isWindowLarge ? tmp.skeletonCardLarge : tmp.skeletonCard;
  const obj2 = { animationDelayMs: index * GameProfileSkeleton.SKELETON_CARD_ANIMATION_DELAY_MS, style: tmp.skeletonAnimationRoot, children: null };
  const obj3 = { style: null };
  const items1 = [, ];
  ({ smallCardMedia: arr2[0], skeletonCardImage: arr2[1] } = tmp);
  obj3.style = items1;
  const items2 = [options(GameProfileSkeletonDefault, obj3), ];
  const obj4 = { style: null, children: null };
  const items3 = [, ];
  ({ cardBody: arr4[0], skeletonCardBody: arr4[1] } = tmp);
  obj4.style = items3;
  const items4 = [options(GameProfileSkeletonDefault, { style: tmp.skeletonCardContent }), options(GameProfileSkeletonDefault, { style: tmp.skeletonCardMetadata })];
  obj4.children = items4;
  items2[1] = v65535(timestampProducer, obj4);
  obj2.children = items2;
  obj.children = v65535(GameProfileSkeleton.GameProfileSkeletonContainer, obj2);
  return options(timestampProducer, obj);
}));
ReactCompilerGating = fn(558);
let closure_18 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(6);
  const tmp4 = closure_16();
  const tmp6 = useIsWindowLargeDefault();
  _require = tmp6;
  ({ skeletonCardsScroller, skeletonCardsContainer } = tmp4);
  if (cResult[0] !== tmp6) {
    const _Array = Array;
    const arr = Array.from({ length: 3 }, (arg0, index) => options(closure_17, { index, isWindowLarge }, index));
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
  const tmp11 = closure_9(tmp(8388).GameProfileSectionSkeleton, { showViewAllSkeleton: true, skeletonTitleWidth: 200, children: closure_9(GameProfileSkeletonCardRowDefault, { style: skeletonCardsScroller, contentContainerStyle: skeletonCardsContainer, children: tmp7 }) });
  cResult[2] = tmp4.skeletonCardsContainer;
  cResult[3] = tmp4.skeletonCardsScroller;
  cResult[4] = tmp7;
  cResult[5] = tmp11;
  tmp10 = tmp11;
  const obj2 = { showViewAllSkeleton: true, skeletonTitleWidth: 200, children: closure_9(GameProfileSkeletonCardRowDefault, { style: skeletonCardsScroller, contentContainerStyle: skeletonCardsContainer, children: tmp7 }) };
}) : (() => {
  const tmp = closure_16();
  _require = useIsWindowLargeDefault();
  const obj = { showViewAllSkeleton: true, skeletonTitleWidth: 200, children: null };
  const obj2 = { style: tmp.skeletonCardsScroller, contentContainerStyle: tmp.skeletonCardsContainer, children: Array.from({ length: 3 }, (arg0, index) => options(closure_17, { index, isWindowLarge }, index)) };
  obj.children = closure_9(GameProfileSkeletonCardRowDefault, obj2);
  return closure_9(require("GameProfileSection").GameProfileSectionSkeleton, obj);
}));
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((message) => {
  const cResult = c.c(79);
  message = message.message;
  onPress = message.onPress;
  ({ guildId, channelId } = message);
  const tmp4 = closure_16();
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
                let tmp70 = cResult[45];
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
                let tmp76 = dateFormatResult;
                const tmpResult = DateUtils;
              } else {
                tmp76 = cResult[47];
              }
              if (cResult[48] === str4) {
                if (cResult[49] === tmp76) {
                  let tmp82 = cResult[50];
                }
                if (cResult[51] === message.reactionCount) {
                  if (cResult[52] === tmp4.reactionInfo) {
                    let tmp85 = cResult[53];
                  }
                  if (cResult[54] === tmp4.metadataRow) {
                    if (cResult[55] === tmp70) {
                      if (cResult[56] === tmp82) {
                        if (cResult[57] === tmp85) {
                          let tmp99 = cResult[58];
                        }
                        if (cResult[59] === tmp5) {
                          if (cResult[60] === tmp9) {
                            if (cResult[61] === tmp99) {
                              if (cResult[62] === tmp13) {
                                if (cResult[63] === tmp14) {
                                  if (cResult[64] === tmp15) {
                                    if (cResult[65] === tmp16) {
                                      let tmp103 = cResult[66];
                                    }
                                    if (cResult[67] === tmp6) {
                                      if (cResult[68] === tmp103) {
                                        if (cResult[69] === tmp17) {
                                          if (cResult[70] === tmp18) {
                                            let tmp106 = cResult[71];
                                          }
                                          if (cResult[72] === tmp7) {
                                            if (cResult[73] === tmp10) {
                                              if (cResult[74] === tmp11) {
                                                if (cResult[75] === tmp106) {
                                                  if (cResult[76] === tmp19) {
                                                    if (cResult[77] === tmp20) {
                                                      let tmp109 = cResult[78];
                                                    }
                                                    return tmp109;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          const obj3 = { style: tmp19, onPress: tmp20, accessibilityRole: tmp10, accessibilityLabel: tmp11, children: tmp106 };
                                          const tmp111 = options(tmp7, obj3);
                                          cResult[72] = tmp7;
                                          cResult[73] = tmp10;
                                          cResult[74] = tmp11;
                                          cResult[75] = tmp106;
                                          cResult[76] = tmp19;
                                          cResult[77] = tmp20;
                                          cResult[78] = tmp111;
                                          tmp109 = tmp111;
                                        }
                                      }
                                    }
                                    const obj4 = { style: tmp17, children: null };
                                    const items = [tmp18, tmp103];
                                    obj4.children = items;
                                    const tmp108 = v65535(tmp6, obj4);
                                    cResult[67] = tmp6;
                                    cResult[68] = tmp103;
                                    cResult[69] = tmp17;
                                    cResult[70] = tmp18;
                                    cResult[71] = tmp108;
                                    tmp106 = tmp108;
                                  }
                                }
                              }
                            }
                          }
                        }
                        const obj5 = { style: tmp9, children: null };
                        const items1 = [tmp13, tmp14, tmp15, tmp16, tmp99];
                        obj5.children = items1;
                        const tmp105 = v65535(tmp5, obj5);
                        cResult[59] = tmp5;
                        cResult[60] = tmp9;
                        cResult[61] = tmp99;
                        cResult[62] = tmp13;
                        cResult[63] = tmp14;
                        cResult[64] = tmp15;
                        cResult[65] = tmp16;
                        cResult[66] = tmp105;
                        tmp103 = tmp105;
                      }
                    }
                  }
                  const obj6 = { style: tmp112, children: null };
                  const items2 = [tmp70, tmp82, tmp85];
                  obj6.children = items2;
                  const tmp102 = v65535(timestampProducer, obj6);
                  cResult[54] = tmp4.metadataRow;
                  cResult[55] = tmp70;
                  cResult[56] = tmp82;
                  cResult[57] = tmp85;
                  cResult[58] = tmp102;
                  tmp99 = tmp102;
                }
                let tmp87Result = message.reactionCount > 0;
                if (tmp87Result) {
                  const obj7 = { style: tmp4.reactionInfo, children: null };
                  const obj8 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
                  const items3 = [options(ReactionIcon.ReactionIcon, obj8), ];
                  let tmp92 = null != obj15;
                  if (tmp92) {
                    tmp92 = obj15.locale === util.intl.currentLocale;
                  }
                  if (!tmp92) {
                    const obj9 = { locale: util.intl.currentLocale, format: null };
                    const _Intl = Intl;
                    const numberFormat = new Intl.NumberFormat(util.intl.currentLocale);
                    obj9.format = numberFormat;
                    obj15 = obj9;
                  }
                  const obj10 = { variant: "text-xs/medium", color: "text-muted", children: null };
                  const format = obj15.format;
                  obj10.children = format.format(message.reactionCount);
                  items3[1] = options(Text_Text.Text, obj10);
                  obj7.children = items3;
                  tmp87Result = v65535(timestampProducer, obj7);
                }
                cResult[51] = message.reactionCount;
                cResult[52] = tmp4.reactionInfo;
                cResult[53] = tmp87Result;
                tmp85 = tmp87Result;
              }
              const obj11 = { variant: "text-xs/medium", color: "text-muted", children: null };
              const items4 = [str4, tmp76];
              obj11.children = items4;
              const tmp84 = v65535(Text_Text.Text, obj11);
              cResult[48] = str4;
              cResult[49] = tmp76;
              cResult[50] = tmp84;
              tmp82 = tmp84;
            }
            let tmp72 = null != tmp8.providerIconUrl;
            if (tmp72) {
              const obj12 = { source: null, style: null };
              const obj13 = { uri: tmp8.providerIconUrl };
              obj12.source = obj13;
              obj12.style = tmp4.embedProviderIcon;
              tmp72 = options(hasOwnProperty, obj12);
            }
            cResult[43] = tmp8.providerIconUrl;
            cResult[44] = tmp4.embedProviderIcon;
            cResult[45] = tmp72;
            tmp70 = tmp72;
          }
        }
      }
    }
  }
  if (null == parser) {
    parser = CustomMarkupAll.getParser();
  }
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
      posterUrl = AnnouncementMessageUtils.getPosterUrl(proxyUrl, c12, c11);
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
  let tmp39;
  let str;
  let tmp40;
  let tmp41;
  let tmp42;
  let tmp43;
  if (null != embedSource) {
    if (cResult[23] !== embedSource.color) {
      if (null != embedSource.color) {
        obj15 = { borderLeftColor: embedSource.color };
        class M {
          constructor() {
            return onPress(message.id);
          }
        }
      }
      class M {
        constructor() {
          return onPress(message.id);
        }
      }
      cResult[23] = embedSource.color;
      cResult[24] = undefined;
      let tmp44 = tmp45;
    } else {
      tmp44 = cResult[24];
    }
    if (cResult[25] === message.id) {
      if (cResult[26] === onPress) {
        let tmp48 = cResult[27];
      }
      class M {
        constructor() {
          return onPress(message.id);
        }
      }
      if (cResult[28] !== embedSource.url) {
        let tmp52 = null != embedSource.url;
        if (tmp52) {
          class M {
            constructor() {
              return onPress(message.id);
            }
          }
          tmp52 = options(Text_Text.Text, { variant: "text-xs/medium", color: "text-link", lineClamp: 1, children: null });
          const obj16 = { variant: "text-xs/medium", color: "text-link", lineClamp: 1, children: null };
        }
        class M {
          constructor() {
            return onPress(message.id);
          }
        }
        cResult[28] = embedSource.url;
        cResult[29] = tmp52;
        let tmp51 = tmp52;
      } else {
        tmp51 = cResult[29];
      }
      if (cResult[30] === tmp44) {
        if (cResult[31] === tmp4.embedContentArea) {
          let tmp54 = cResult[32];
        }
        if (cResult[33] === embedSource.authorIconUrl) {
          if (cResult[34] === embedSource.authorName) {
            if (cResult[35] === tmp4.embedAuthorIcon) {
              if (cResult[36] === tmp4.embedAuthorRow) {
                let tmp55 = cResult[37];
              }
              if (cResult[38] === message.media) {
                if (cResult[39] === tmp26) {
                  if (cResult[40] === tmp4.embedMedia) {
                    if (cResult[41] === tmp4.mediaImage) {
                      let tmp63 = cResult[42];
                    }
                    class M {
                      constructor() {
                        return onPress(message.id);
                      }
                    }
                    let tmp67 = message.body.length > 0;
                    if (tmp67) {
                      const obj17 = { variant: "text-sm/medium", color: "text-default", lineClamp: 3, children: null };
                      class M {
                        constructor() {
                          return onPress(message.id);
                        }
                      }
                      obj17.children = tmp23(message.body, true, obj14);
                      tmp67 = options(Text_Text.Text, obj17);
                    }
                    str = "button";
                    tmp34 = tmp67;
                    tmp30 = tmp48;
                    tmp31 = tmp47;
                    tmp32 = tmp51;
                    cardBody = tmp4.cardBody;
                    tmp35 = null != message.title;
                    tmp36 = tmp63;
                    tmp37 = tmp55;
                    tmp38 = forResult;
                    tmp39 = tmp49;
                    tmp40 = tmp54;
                    tmp41 = tmp46;
                    tmp42 = timestampProducer;
                    tmp43 = timestampProducer;
                    const tmp66 = null != message.title;
                  }
                }
              }
              class M {
                constructor() {
                  return onPress(message.id);
                }
              }
              if (tmp64) {
                const obj18 = { style: null, children: null };
                class M {
                  constructor() {
                    return onPress(message.id);
                  }
                }
                const obj19 = { uri: tmp26, placeholder: message.media.placeholder, placeholderVersion: message.media.placeholderVersion, style: tmp4.mediaImage };
                obj18.children = options(ImageWithPlaceholder.ImageWithPlaceholder, obj19);
                tmp64 = options(timestampProducer, obj18);
              }
              cResult[38] = message.media;
              cResult[39] = tmp26;
              cResult[40] = tmp4.embedMedia;
              cResult[41] = tmp4.mediaImage;
              cResult[42] = tmp64;
              tmp63 = tmp64;
            }
          }
        }
        class M {
          constructor() {
            return onPress(message.id);
          }
        }
        if (tmp57Result) {
          const obj20 = { style: tmp4.embedAuthorRow, children: null };
          class M {
            constructor() {
              return onPress(message.id);
            }
          }
          if (tmp58) {
            class M {
              constructor() {
                return onPress(message.id);
              }
            }
            const obj21 = { uri: embedSource.authorIconUrl };
            tmp61[0] = obj21;
            tmp61[1] = tmp4.embedAuthorIcon;
            tmp58 = options(hasOwnProperty, tmp61);
          }
          const items5 = [tmp58, ];
          const obj22 = { variant: "text-xs/semibold", color: "text-strong", lineClamp: 1, children: embedSource.authorName };
          items5[1] = options(Text_Text.Text, obj22);
          obj20.children = items5;
          tmp57Result = v65535(timestampProducer, obj20);
        }
        cResult[33] = embedSource.authorIconUrl;
        cResult[34] = embedSource.authorName;
        cResult[35] = tmp4.embedAuthorIcon;
        cResult[36] = tmp4.embedAuthorRow;
        cResult[37] = tmp57Result;
        tmp55 = tmp57Result;
      }
      const items6 = [tmp4.embedContentArea, tmp44];
      cResult[30] = tmp44;
      cResult[31] = tmp4.embedContentArea;
      cResult[32] = items6;
      tmp54 = items6;
    }
    class M {
      constructor() {
        return onPress(message.id);
      }
    }
    cResult[25] = message.id;
    cResult[26] = onPress;
    cResult[27] = M;
    tmp48 = M;
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
  cResult[11] = tmp39;
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
  tmp11 = tmp39;
  tmp10 = str;
  tmp9 = tmp40;
  tmp7 = tmp41;
  tmp6 = tmp42;
  tmp5 = tmp43;
  tmp8 = embedSource;
  forResult = Symbol.for("react.early_return_sentinel");
  obj14 = { guildId, channelId, mentionPillOffsetY: num };
  tmp23 = parser;
}) : ((message) => {
  message = message.message;
  onPress = message.onPress;
  ({ guildId, channelId } = message);
  const tmp = closure_16();
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
    posterUrl = AnnouncementMessageUtils.getPosterUrl(proxyUrl, c12, c11);
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
      children: null
    };
    const obj6 = { style: tmp.cardBody, children: null };
    let tmp13Result = null != embedSource.url;
    if (tmp13Result) {
      const obj7 = { variant: "text-xs/medium", color: "text-link", lineClamp: 1, children: embedSource.url };
      tmp13Result = options(Text_Text.Text, obj7);
    }
    const items = [tmp13Result, ];
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
        tmp13Result6 = options(hasOwnProperty, obj10);
      }
      const items2 = [tmp13Result6, ];
      const obj12 = { variant: "text-xs/semibold", color: "text-strong", lineClamp: 1, children: embedSource.authorName };
      items2[1] = options(Text_Text.Text, obj12);
      obj9.children = items2;
      tmp15Result = v65535(timestampProducer, obj9);
    }
    const items3 = [tmp15Result, , , , ];
    let tmp13Result7 = null != message.media && null != posterUrl;
    if (tmp13Result7) {
      const obj13 = { style: tmp.embedMedia, children: null };
      const obj14 = { uri: posterUrl, placeholder: message.media.placeholder, placeholderVersion: message.media.placeholderVersion, style: tmp.mediaImage };
      obj13.children = options(ImageWithPlaceholder.ImageWithPlaceholder, obj14);
      tmp13Result7 = options(timestampProducer, obj13);
    }
    items3[1] = tmp13Result7;
    let tmp13Result8 = null != message.title;
    if (tmp13Result8) {
      obj15 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 2, children: tmp4(message.title, true, obj2) };
      tmp13Result8 = options(Text_Text.Text, obj15);
    }
    items3[2] = tmp13Result8;
    let tmp13Result9 = message.body.length > 0;
    if (tmp13Result9) {
      const obj16 = { variant: "text-sm/medium", color: "text-default", lineClamp: 3, children: tmp4(message.body, true, obj2) };
      tmp13Result9 = options(Text_Text.Text, obj16);
    }
    items3[3] = tmp13Result9;
    const obj17 = { style: tmp.metadataRow, children: null };
    let tmp13Result10 = null != embedSource.providerIconUrl;
    if (tmp13Result10) {
      const obj18 = { source: null, style: null };
      const obj19 = { uri: embedSource.providerIconUrl };
      obj18.source = obj19;
      obj18.style = tmp.embedProviderIcon;
      tmp13Result10 = options(hasOwnProperty, obj18);
    }
    const items4 = [tmp13Result10, , ];
    let str2 = "";
    if (null != embedSource.providerName) {
      const _HermesInternal = HermesInternal;
      str2 = "" + embedSource.providerName + " \u00B7 ";
    }
    const obj20 = { variant: "text-xs/medium", color: "text-muted", children: null };
    const items5 = [str2, ];
    const _Date = Date;
    const date = new Date(message.timestamp);
    items5[1] = DateUtils.dateFormat(date, "LL");
    obj20.children = items5;
    items4[1] = v65535(Text_Text.Text, obj20);
    let tmp15Result2 = message.reactionCount > 0;
    if (tmp15Result2) {
      const obj21 = { style: tmp.reactionInfo, children: null };
      const obj22 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
      const items6 = [options(ReactionIcon.ReactionIcon, obj22), ];
      let tmp47 = null != obj15;
      if (tmp47) {
        tmp47 = obj15.locale === util.intl.currentLocale;
      }
      if (!tmp47) {
        const obj23 = { locale: util.intl.currentLocale, format: null };
        const _Intl = Intl;
        const numberFormat = new Intl.NumberFormat(util.intl.currentLocale);
        obj23.format = numberFormat;
        obj15 = obj23;
      }
      const obj24 = { variant: "text-xs/medium", color: "text-muted", children: null };
      const format = obj15.format;
      obj24.children = format.format(message.reactionCount);
      items6[1] = options(Text_Text.Text, obj24);
      obj21.children = items6;
      tmp15Result2 = v65535(timestampProducer, obj21);
    }
    items4[2] = tmp15Result2;
    obj17.children = items4;
    items3[4] = v65535(timestampProducer, obj17);
    obj8.children = items3;
    items[1] = v65535(timestampProducer, obj8);
    obj6.children = items;
    obj5.children = v65535(timestampProducer, obj6);
    return options(React5, obj5);
  }
});
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((message) => {
  const cResult = c.c(56);
  message = message.message;
  onPress = message.onPress;
  ({ guildId, channelId } = message);
  const tmp4 = closure_16();
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
                        let tmp7 = cResult[13];
                        let tmp8 = cResult[14];
                        let tmp9 = cResult[15];
                        let tmp10 = cResult[16];
                        let tmp11 = cResult[17];
                        let str = cResult[18];
                        let tmp12 = cResult[19];
                        let tmp13 = cResult[20];
                      }
                      if (cResult[31] !== message.timestamp) {
                        const _Date = Date;
                        const date = new Date(message.timestamp);
                        const dateFormatResult = DateUtils.dateFormat(date, "LL");
                        cResult[31] = message.timestamp;
                        cResult[32] = dateFormatResult;
                        let tmp33 = dateFormatResult;
                        const tmpResult = DateUtils;
                      } else {
                        tmp33 = cResult[32];
                      }
                      if (cResult[33] !== tmp33) {
                        const obj3 = { variant: "text-xs/medium", color: "text-muted", children: tmp33 };
                        const tmp42 = options(Text_Text.Text, obj3);
                        cResult[33] = tmp33;
                        cResult[34] = tmp42;
                        let tmp40 = tmp42;
                      } else {
                        tmp40 = cResult[34];
                      }
                      if (cResult[35] === message.reactionCount) {
                        if (cResult[36] === tmp4.reactionInfo) {
                          let tmp43 = cResult[37];
                        }
                        if (cResult[38] === tmp4.metadataRow) {
                          if (cResult[39] === tmp40) {
                            if (cResult[40] === tmp43) {
                              let tmp59 = cResult[41];
                            }
                            if (cResult[42] === tmp5) {
                              if (cResult[43] === tmp7) {
                                if (cResult[44] === tmp59) {
                                  if (cResult[45] === tmp8) {
                                    if (cResult[46] === tmp9) {
                                      let tmp63 = cResult[47];
                                    }
                                    if (cResult[48] === tmp6) {
                                      if (cResult[49] === tmp63) {
                                        if (cResult[50] === tmp10) {
                                          if (cResult[51] === tmp11) {
                                            if (cResult[52] === str) {
                                              if (cResult[53] === tmp12) {
                                                if (cResult[54] === tmp13) {
                                                  let tmp66 = cResult[55];
                                                }
                                                return tmp66;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                    const obj4 = { style: tmp10, onPress: tmp11, accessibilityRole: str, accessibilityLabel: tmp12, children: null };
                                    const items = [tmp13, tmp63];
                                    obj4.children = items;
                                    const tmp68 = v65535(tmp6, obj4);
                                    cResult[48] = tmp6;
                                    cResult[49] = tmp63;
                                    cResult[50] = tmp10;
                                    cResult[51] = tmp11;
                                    cResult[52] = str;
                                    cResult[53] = tmp12;
                                    cResult[54] = tmp13;
                                    cResult[55] = tmp68;
                                    tmp66 = tmp68;
                                  }
                                }
                              }
                            }
                            const obj5 = { style: tmp7, children: null };
                            const items1 = [tmp8, tmp9, tmp59];
                            obj5.children = items1;
                            const tmp65 = v65535(tmp5, obj5);
                            cResult[42] = tmp5;
                            cResult[43] = tmp7;
                            cResult[44] = tmp59;
                            cResult[45] = tmp8;
                            cResult[46] = tmp9;
                            cResult[47] = tmp65;
                            tmp63 = tmp65;
                          }
                        }
                        const obj6 = { style: tmp4.metadataRow, children: null };
                        const items2 = [tmp40, tmp43];
                        obj6.children = items2;
                        const tmp62 = v65535(timestampProducer, obj6);
                        cResult[38] = tmp4.metadataRow;
                        cResult[39] = tmp40;
                        cResult[40] = tmp43;
                        cResult[41] = tmp62;
                        tmp59 = tmp62;
                      }
                      let tmp45Result = message.reactionCount > 0;
                      if (tmp45Result) {
                        const obj7 = { style: tmp4.reactionInfo, children: null };
                        const obj8 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
                        const items3 = [options(ReactionIcon.ReactionIcon, obj8), ];
                        let tmp51 = null != obj15;
                        if (tmp51) {
                          tmp51 = obj15.locale === util.intl.currentLocale;
                        }
                        if (!tmp51) {
                          const obj9 = { locale: util.intl.currentLocale, format: null };
                          const _Intl = Intl;
                          const numberFormat = new Intl.NumberFormat(util.intl.currentLocale);
                          obj9.format = numberFormat;
                          obj15 = obj9;
                        }
                        const obj10 = { variant: "text-xs/medium", color: "text-muted", children: null };
                        const format = obj15.format;
                        obj10.children = format.format(message.reactionCount);
                        items3[1] = options(Text_Text.Text, obj10);
                        obj7.children = items3;
                        tmp45Result = v65535(timestampProducer, obj7);
                      }
                      cResult[35] = message.reactionCount;
                      cResult[36] = tmp4.reactionInfo;
                      cResult[37] = tmp45Result;
                      tmp43 = tmp45Result;
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
      posterUrl = AnnouncementMessageUtils.getPosterUrl(proxyUrl, c12, c11);
      const tmpResult2 = AnnouncementMessageUtils;
    }
    cResult[21] = proxyUrl;
    cResult[22] = posterUrl;
    let tmp18 = posterUrl;
  } else {
    tmp18 = cResult[22];
  }
  if (tmp18 == null) {
    tmp18 = proxyUrl;
  }
  const card = tmp4.card;
  if (cResult[23] === message.id) {
    if (cResult[24] === onPress) {
      let tmp23 = cResult[25];
    }
    const title = message.title;
    if (cResult[26] === message.media) {
      if (cResult[27] === tmp18) {
        if (cResult[28] === tmp4.mediaImage) {
          if (cResult[29] === tmp4.smallCardMedia) {
            let tmp24 = cResult[30];
          }
          const cardBody = tmp4.cardBody;
          let tmp29 = null != message.title;
          if (tmp29) {
            const obj12 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 2, children: tmp15(message.title, true, obj11) };
            tmp29 = options(Text_Text.Text, obj12);
          }
          let tmp31 = message.body.length > 0;
          if (tmp31) {
            const obj13 = { variant: "text-sm/medium", color: "text-default", lineClamp: 3, children: tmp15(message.body, true, obj11) };
            tmp31 = options(Text_Text.Text, obj13);
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
          cResult[11] = timestampProducer;
          cResult[12] = React5;
          cResult[13] = cardBody;
          cResult[14] = tmp29;
          cResult[15] = tmp31;
          cResult[16] = card;
          cResult[17] = tmp23;
          cResult[18] = "button";
          cResult[19] = title;
          cResult[20] = tmp24;
          tmp9 = tmp31;
          tmp13 = tmp24;
          tmp12 = title;
          str = "button";
          tmp11 = tmp23;
          tmp10 = card;
          tmp8 = tmp29;
          tmp7 = cardBody;
          tmp6 = React5;
          tmp5 = timestampProducer;
        }
      }
    }
    let tmp25 = null != message.media && null != tmp18;
    if (tmp25) {
      const obj14 = { style: tmp4.smallCardMedia, children: null };
      obj15 = { uri: tmp18, placeholder: message.media.placeholder, placeholderVersion: message.media.placeholderVersion, style: tmp4.mediaImage };
      obj14.children = options(ImageWithPlaceholder.ImageWithPlaceholder, obj15);
      tmp25 = options(timestampProducer, obj14);
    }
    cResult[26] = message.media;
    cResult[27] = tmp18;
    cResult[28] = tmp4.mediaImage;
    cResult[29] = tmp4.smallCardMedia;
    cResult[30] = tmp25;
    tmp24 = tmp25;
  }
  const fn = function f() {
    return onPress(message.id);
  };
  cResult[23] = message.id;
  cResult[24] = onPress;
  cResult[25] = fn;
  tmp23 = fn;
}) : ((message) => {
  message = message.message;
  onPress = message.onPress;
  ({ guildId, channelId } = message);
  const tmp = closure_16();
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
    posterUrl = AnnouncementMessageUtils.getPosterUrl(proxyUrl, c12, c11);
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
    children: null
  };
  let tmp14 = null != message.media;
  if (tmp14) {
    tmp14 = null != posterUrl;
  }
  if (tmp14) {
    const obj5 = { style: tmp.smallCardMedia, children: null };
    const obj6 = { uri: posterUrl, placeholder: message.media.placeholder, placeholderVersion: message.media.placeholderVersion, style: tmp.mediaImage };
    obj5.children = options(ImageWithPlaceholder.ImageWithPlaceholder, obj6);
    tmp14 = options(timestampProducer, obj5);
  }
  const items = [tmp14, ];
  const obj7 = { style: tmp.cardBody, children: null };
  let tmp20 = null != message.title;
  if (tmp20) {
    const obj8 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 2, children: tmp4(message.title, true, obj2) };
    tmp20 = options(Text_Text.Text, obj8);
  }
  const items1 = [tmp20, , ];
  let tmp24 = message.body.length > 0;
  if (tmp24) {
    const obj9 = { variant: "text-sm/medium", color: "text-default", lineClamp: 3, children: tmp4(message.body, true, obj2) };
    tmp24 = options(Text_Text.Text, obj9);
  }
  items1[1] = tmp24;
  const obj10 = { style: tmp.metadataRow, children: null };
  const obj11 = { variant: "text-xs/medium", color: "text-muted", children: null };
  const obj12 = DateUtils;
  obj11.children = obj12.dateFormat(new Date(message.timestamp), "LL");
  const items2 = [options(Text_Text.Text, obj11), ];
  let tmp12Result = message.reactionCount > 0;
  if (tmp12Result) {
    const obj13 = { style: tmp.reactionInfo, children: null };
    const obj14 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
    const items3 = [options(ReactionIcon.ReactionIcon, obj14), ];
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
    items3[1] = options(Text_Text.Text, obj16);
    obj13.children = items3;
    tmp12Result = v65535(timestampProducer, obj13);
  }
  items2[1] = tmp12Result;
  obj10.children = items2;
  items1[2] = v65535(timestampProducer, obj10);
  obj7.children = items1;
  items[1] = v65535(timestampProducer, obj7);
  obj4.children = items;
  return v65535(React5, obj4);
});
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? ((message) => {
  const cResult = message(576).c(56);
  message = message.message;
  let str = message.onPress;
  const tmp4 = closure_16();
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
                                const tmp53 = closure_9(tmp(4886).Text, obj2);
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
                                        const obj3 = { style: tmp13, onPress: tmp14, accessibilityRole: tmp15, accessibilityLabel: tmp16, children: tmp58 };
                                        const tmp63 = closure_9(tmp7, obj3);
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
                                const tmp60 = closure_10(tmp6, obj4);
                                cResult[43] = tmp6;
                                cResult[44] = tmp40;
                                cResult[45] = tmp54;
                                cResult[46] = tmp11;
                                cResult[47] = tmp12;
                                cResult[48] = tmp60;
                                tmp58 = tmp60;
                              }
                              const obj5 = { style: tmp43, children: tmp51 };
                              const tmp57 = closure_9(closure_6, obj5);
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
                            obj6.expiryLabel = tmp(8406).getPollExpiryLabel(poll);
                            const formatResult = intl2.format(tmp(1126).t.t0FTsH, obj6);
                            cResult[35] = message.timestamp;
                            cResult[36] = poll;
                            cResult[37] = formatResult;
                            tmp44 = formatResult;
                            const tmpResult = tmp(8406);
                          }
                        }
                      }
                      const obj7 = { style: tmp9, children: null };
                      const items1 = [tmp10, tmp37];
                      obj7.children = items1;
                      const tmp42 = closure_10(tmp5, obj7);
                      cResult[30] = tmp5;
                      cResult[31] = tmp9;
                      cResult[32] = tmp10;
                      cResult[33] = tmp37;
                      cResult[34] = tmp42;
                      tmp40 = tmp42;
                    }
                    let tmp38 = tmp8 > 0;
                    if (tmp38) {
                      const obj8 = { variant: "text-xs/medium", color: "text-muted", style: tmp4.pollMoreOptions, children: null };
                      const intl = tmp(1126).intl;
                      const obj9 = { count: tmp8 };
                      obj8.children = intl.format(tmp(1126).t["mv/nIa"], obj9);
                      tmp38 = closure_9(tmp(4886).Text, obj8);
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
        const obj10 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: poll.question.text };
        const tmp23 = closure_9(tmp(4886).Text, obj10);
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
            obj.children = tmp(closure_0(closure_3[16]).Text, { variant: "text-sm/medium", color: "text-default", lineClamp: 1, children: str });
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
            obj.children = tmp(closure_0(closure_3[16]).Text, { variant: "text-sm/medium", color: "text-default", lineClamp: 1, children: str });
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
      cResult[8] = closure_6;
      cResult[9] = closure_6;
      cResult[10] = closure_7;
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
}) : ((message) => {
  message = message.message;
  onPress = message.onPress;
  const tmp = closure_16();
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
      children: null
    };
    const obj3 = { style: tmp.cardBody, children: null };
    const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: poll.question.text };
    const items = [closure_9(message(4886).Text, obj4), , ];
    const obj5 = { style: tmp.pollAnswers, children: null };
    const items1 = [
      substr.map((poll_media) => {
          const obj = { style: pollAnswerOption.pollAnswerOption, children: null };
          let str = poll_media.poll_media.text;
          if (str == null) {
            str = "";
          }
          obj.children = options(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", lineClamp: 1, children: str });
          return options(timestampProducer, obj, poll_media.answer_id);
        }),

    ];
    let tmp9Result = diff > 0;
    if (tmp9Result) {
      let obj = { variant: "text-xs/medium", color: "text-muted", style: tmp.pollMoreOptions, children: null };
      const intl = tmp13(1126).intl;
      const obj6 = { count: diff };
      obj.children = intl.format(tmp13(1126).t["mv/nIa"], obj6);
      tmp9Result = closure_9(tmp13(4886).Text, obj);
    }
    items1[1] = tmp9Result;
    obj5.children = items1;
    items[1] = closure_10(closure_6, obj5);
    const obj7 = { style: tmp.metadataRow, children: null };
    const obj8 = { variant: "text-xs/medium", color: "text-muted", children: null };
    const intl2 = tmp13(1126).intl;
    const obj9 = { createdAt: null, expiryLabel: null };
    const _Date = Date;
    const date = new Date(message.timestamp);
    obj9.createdAt = date;
    obj9.expiryLabel = message(8406).getPollExpiryLabel(poll);
    obj8.children = intl2.format(message(1126).t.t0FTsH, obj9);
    obj7.children = closure_9(message(4886).Text, obj8);
    items[2] = closure_9(closure_6, obj7);
    obj3.children = items;
    obj2.children = closure_10(closure_6, obj3);
    return closure_9(closure_7, obj2);
  }
});
ReactCompilerGating = fn(558);
let closure_22 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((message) => {
  const cResult = c.c(6);
  if (null != message.message.poll) {
    if (cResult[0] !== message) {
      const obj2 = {};
      const merged = Object.assign(message);
      const tmp23 = options(closure_21, obj2);
      cResult[0] = message;
      cResult[1] = tmp23;
    }
  } else if (null != message.message.embedSource) {
    if (cResult[2] !== message) {
      const obj3 = {};
      const merged1 = Object.assign(message);
      const tmp15 = options(closure_19, obj3);
      cResult[2] = message;
      cResult[3] = tmp15;
    }
  } else {
    if (cResult[4] !== message) {
      const obj4 = {};
      const merged2 = Object.assign(message);
      const tmp8 = options(closure_20, obj4);
      cResult[4] = message;
      cResult[5] = tmp8;
      let tmp2 = tmp8;
    } else {
      tmp2 = cResult[5];
    }
    return tmp2;
  }
}) : ((message) => {
  if (null != message.message.poll) {
    const obj2 = {};
    const merged = Object.assign(message);
    let tmp6 = options(closure_21, obj2);
  } else if (null != message.message.embedSource) {
    const obj3 = {};
    const merged1 = Object.assign(message);
    tmp6 = options(closure_19, obj3);
  } else {
    const obj = {};
    const merged2 = Object.assign(message);
    tmp6 = options(closure_20, obj);
  }
  return tmp6;
}));
ReactCompilerGating = fn(558);
let obj18 = { gap: nativeDefault.space.PX_8 };
size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileAnnouncements.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((gameId) => {
  const cResult = gameId(trackAction[10]).c(36);
  gameId = gameId.gameId;
  const invite = gameId.invite;
  const closeModal = gameId.closeModal;
  trackAction = gameId.trackAction;
  const scrollY = gameId.scrollY;
  const tmp4 = closure_16();
  const analyticsLocations = invite(trackAction[20])().analyticsLocations;
  const tmp5 = invite(trackAction[21])(gameId, onPress);
  ({ messages, channelId } = tmp5);
  const guildId = tmp5.guildId;
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
                                    tmp9 = trackAction(closure_0(closure_3[22]).GameProfileTrackActionActions.AnnouncementsItem);
                                    tmp10 = closure_1;
                                    obj = closure_1(closure_3[23]);
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
                                    obj4 = { invite: null, guildId: null, channelId: null, messageId: null, analyticsLocationStack: null };
                                    obj4.invite = tmp;
                                    obj4.guildId = id;
                                    obj4.channelId = channelId;
                                    obj4.messageId = gameId;
                                    tmp17 = analyticsLocations;
                                    obj4.analyticsLocationStack = analyticsLocations;
                                    tmp18 = closure_1(closure_3[24])(obj4);
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
                                        tmp9 = trackAction(closure_0(closure_3[22]).GameProfileTrackActionActions.AnnouncementsItem);
                                        tmp10 = closure_1;
                                        obj = closure_1(closure_3[23]);
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
                                        obj4 = { invite: null, guildId: null, channelId: null, messageId: null, analyticsLocationStack: null };
                                        obj4.invite = tmp;
                                        obj4.guildId = id;
                                        obj4.channelId = channelId;
                                        obj4.messageId = gameId;
                                        tmp17 = analyticsLocations;
                                        obj4.analyticsLocationStack = analyticsLocations;
                                        tmp18 = closure_1(closure_3[24])(obj4);
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
                                          tmp9 = trackAction(closure_0(closure_3[22]).GameProfileTrackActionActions.AnnouncementsItem);
                                          tmp10 = closure_1;
                                          obj = closure_1(closure_3[23]);
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
                                          obj4 = { invite: null, guildId: null, channelId: null, messageId: null, analyticsLocationStack: null };
                                          obj4.invite = tmp;
                                          obj4.guildId = id;
                                          obj4.channelId = channelId;
                                          obj4.messageId = gameId;
                                          tmp17 = analyticsLocations;
                                          obj4.analyticsLocationStack = analyticsLocations;
                                          tmp18 = closure_1(closure_3[24])(obj4);
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
                                                    tmp9 = trackAction(closure_0(closure_3[22]).GameProfileTrackActionActions.AnnouncementsItem);
                                                    tmp10 = closure_1;
                                                    obj = closure_1(closure_3[23]);
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
                                                    obj4 = { invite: null, guildId: null, channelId: null, messageId: null, analyticsLocationStack: null };
                                                    obj4.invite = tmp;
                                                    obj4.guildId = id;
                                                    obj4.channelId = channelId;
                                                    obj4.messageId = gameId;
                                                    tmp17 = analyticsLocations;
                                                    obj4.analyticsLocationStack = analyticsLocations;
                                                    tmp18 = closure_1(closure_3[24])(obj4);
                                                  }
                                                  return;
                                                }
                                              }
                                              let obj2 = { title: tmp9, onPressViewAll: tmp6, children: tmp17 };
                                              class D {
                                                constructor(arg0) {
                                                  obj = { message: gameId, onPress: closure_8, guildId, channelId };
                                                  return jsx(closure_22, obj, gameId.id);
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
                                                tmp9 = trackAction(closure_0(closure_3[22]).GameProfileTrackActionActions.AnnouncementsItem);
                                                tmp10 = closure_1;
                                                obj = closure_1(closure_3[23]);
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
                                                obj4 = { invite: null, guildId: null, channelId: null, messageId: null, analyticsLocationStack: null };
                                                obj4.invite = tmp;
                                                obj4.guildId = id;
                                                obj4.channelId = channelId;
                                                obj4.messageId = gameId;
                                                tmp17 = analyticsLocations;
                                                obj4.analyticsLocationStack = analyticsLocations;
                                                tmp18 = closure_1(closure_3[24])(obj4);
                                              }
                                              return;
                                            }
                                          }
                                          let obj3 = { showsHorizontalScrollIndicator: false, style: tmp11, contentContainerStyle: tmp12, decelerationRate: "fast", snapToInterval: 172, snapToStart: false, snapToEnd: false, children: cResult[24] };
                                          class D {
                                            constructor(arg0) {
                                              obj = { message: gameId, onPress: closure_8, guildId, channelId };
                                              return jsx(closure_22, obj, gameId.id);
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
                                            tmp9 = trackAction(closure_0(closure_3[22]).GameProfileTrackActionActions.AnnouncementsItem);
                                            tmp10 = closure_1;
                                            obj = closure_1(closure_3[23]);
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
                                            obj4 = { invite: null, guildId: null, channelId: null, messageId: null, analyticsLocationStack: null };
                                            obj4.invite = tmp;
                                            obj4.guildId = id;
                                            obj4.channelId = channelId;
                                            obj4.messageId = gameId;
                                            tmp17 = analyticsLocations;
                                            obj4.analyticsLocationStack = analyticsLocations;
                                            tmp18 = closure_1(closure_3[24])(obj4);
                                          }
                                          return;
                                        }
                                      }
                                      cResult[20] = channelId;
                                      cResult[21] = guildId;
                                      class D {
                                        constructor(arg0) {
                                          obj = { message: gameId, onPress: closure_8, guildId, channelId };
                                          return jsx(closure_22, obj, gameId.id);
                                        }
                                      }
                                      cResult[23] = messages;
                                      cResult[24] = mapped;
                                    }
                                  }
                                  class D {
                                    constructor(arg0) {
                                      obj = { message: gameId, onPress: closure_8, guildId, channelId };
                                      return jsx(closure_22, obj, gameId.id);
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
                      tmp9 = trackAction(closure_0(closure_3[22]).GameProfileTrackActionActions.AnnouncementsItem);
                      tmp10 = closure_1;
                      obj = closure_1(closure_3[23]);
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
                      obj4 = { invite: null, guildId: null, channelId: null, messageId: null, analyticsLocationStack: null };
                      obj4.invite = tmp;
                      obj4.guildId = id;
                      obj4.channelId = channelId;
                      obj4.messageId = gameId;
                      tmp17 = analyticsLocations;
                      obj4.analyticsLocationStack = analyticsLocations;
                      tmp18 = closure_1(closure_3[24])(obj4);
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
}) : ((gameId) => {
  gameId = gameId.gameId;
  const invite = gameId.invite;
  const closeModal = gameId.closeModal;
  const trackAction = gameId.trackAction;
  const scrollY = gameId.scrollY;
  channelId = undefined;
  onPress = undefined;
  const analyticsLocations = invite(trackAction[20])().analyticsLocations;
  const tmp4 = invite(trackAction[21])(gameId, onPress);
  ({ messages, channelId } = tmp4);
  const guildId = tmp4.guildId;
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
      let tmp6 = closure_9(closure_18, {});
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
      let obj3 = { showsHorizontalScrollIndicator: false, style: null, contentContainerStyle: null, decelerationRate: "fast", snapToInterval: 172, snapToStart: false, snapToEnd: false, children: null };
      ({ smallCardsScroller: obj2.style, smallCardsContainer: obj2.contentContainerStyle } = tmp);
      const tmp2Result = tmp2(tmp3[13]);
      obj3.children = messages.map((message) => options(closure_22, { message, onPress, guildId, channelId }, message.id));
      obj.children = closure_9(tmp2(tmp3[25]), obj3);
      tmp6 = closure_9(tmp2Result, obj);
      const tmp2Result2 = tmp2(tmp3[25]);
    }
  }
  tmp = closure_16();
});