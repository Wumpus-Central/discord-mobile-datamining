// discord_app/modules/game_profile/native/components/GameProfileAnnouncements.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../../intl/index.native.tsx";
import DateUtils from "../../../../utils/DateUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import CustomMarkupAll from "../../../markup/CustomMarkup.native.tsx";
import useIsWindowLargeDefault from "../../../screen/native/useIsWindowLarge.tsx";
import GameProfileAnalyticUtils from "../../GameProfileAnalyticUtils.tsx";
import GameProfileActionCreatorsDefault from "../../GameProfileActionCreators.native.tsx";
import GameProfileConstants from "../../GameProfileConstants.tsx";
import GameProfileSkeleton from "GameProfileSkeleton.tsx";
import GameProfileSkeletonCardRowDefault from "GameProfileSkeletonCardRow.tsx";
import AnnouncementMessageUtils from "../../AnnouncementMessageUtils.tsx";
import ImageWithPlaceholder from "../../../../components_native/common/ImageWithPlaceholder.tsx";
import ReactionIcon2 from "../../../../design/components/Icon/native/redesign/generated/ReactionIcon.tsx";
import navigateToGameAnnouncementDefault from "../../navigateToGameAnnouncement.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const GameProfileSkeletonDefault = GameProfileSkeleton;
let _require, gameId, importAll, onPress;

let c10;
let c9;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj10;
let obj11;
let obj12;
let obj13;
let obj15;
let obj16;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let size1;
let size2;
({ Image: hasOwnProperty, View: metroRequire, Pressable: metroImportDefault } = react_native);
const MAX_VISIBLE_ANNOUNCEMENTS = GameProfileConstants.MAX_VISIBLE_ANNOUNCEMENTS;
({ jsx: c9, jsxs: c10 } = Fragment);
let c11 = 120;
let c12 = 160;
let num;
if (PlatformUtils.isAndroid()) {
  num = 5;
}
let closure_14 = null;
let obj14 = null;
let createStyles = createStyles_mod;
let obj = {
  smallCardsScroller: obj2,
  skeletonCardsScroller: obj3,
  smallCardsContainer: obj4,
  skeletonCardsContainer: obj5,
  card: obj6,
  cardBody: obj7,
  smallCardMedia: { height: 120, overflow: "hidden", flexShrink: 0 },
  mediaImage: { width: "100%", height: "100%", resizeMode: "cover" },
  metadataRow: obj8,
  reactionInfo: obj9,
  embedContentArea: obj10,
  embedAuthorRow: obj11,
  embedAuthorIcon: size,
  embedProviderIcon: { width: 16, height: 16 },
  embedMedia: obj12,
  pollAnswers: obj13,
  pollAnswerOption: obj14,
  pollMoreOptions: obj15,
  skeletonCard: { height: 282 },
  skeletonCardLarge: { height: 264 },
  skeletonAnimationRoot: { flex: 1 },
  skeletonCardImage: { width: "100%" },
  skeletonCardBody: obj16,
  skeletonCardContent: size1,
  skeletonCardMetadata: size2,
};
obj2 = { marginHorizontal: -nativeDefault.space.PX_16, overflow: "visible" };
createStyles = createStyles.createStyles;
obj3 = { marginHorizontal: -nativeDefault.space.PX_16 };
obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
obj5 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj6 = {
  flexDirection: "column",
  borderRadius: nativeDefault.radii.lg,
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  width: 160,
};
obj7 = {
  flex: 1,
  flexDirection: "column",
  gap: nativeDefault.space.PX_4,
  overflow: "hidden",
  padding: nativeDefault.space.PX_12,
};
obj8 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, marginTop: "auto" };
obj9 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj10 = {
  flex: 1,
  gap: nativeDefault.space.PX_4,
  borderLeftWidth: 4,
  borderLeftColor: nativeDefault.colors.BORDER_SUBTLE,
  borderTopLeftRadius: nativeDefault.radii.xs,
  borderBottomLeftRadius: nativeDefault.radii.xs,
  paddingLeft: nativeDefault.space.PX_8,
};
obj11 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
size = { width: 20, height: 20, borderRadius: nativeDefault.radii.round };
obj12 = { overflow: "hidden", borderRadius: nativeDefault.radii.sm, aspectRatio: 1.7777777777777777 };
obj13 = { flexDirection: "column", gap: nativeDefault.space.PX_4, flex: 1 };
obj14 = {
  paddingVertical: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
obj15 = { paddingHorizontal: nativeDefault.space.PX_12 };
obj16 = { gap: nativeDefault.space.PX_8 };
size1 = { height: nativeDefault.space.PX_48, borderRadius: nativeDefault.radii.xs, width: "88%" };
size2 = { width: "60%", height: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.xs, marginTop: "auto" };
let closure_16 = createStyles(obj);
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let index;
        let isWindowLarge;
        let items;
        let items1;
        let items3;
        const obj = react2;
        const cResult = obj.c(25);
        ({ index, isWindowLarge } = arg0);
        const tmp4 = closure_16();
        const tmp5 = isWindowLarge ? tmp4.skeletonCardLarge : tmp4.skeletonCard;
        if (cResult[0] === tmp4.card) {
          let tmp6;
          if (cResult[1] === tmp5) {
            tmp6 = cResult[2];
          }
          const result = index * GameProfileSkeleton.SKELETON_CARD_ANIMATION_DELAY_MS;
          if (cResult[3] === tmp4.skeletonCardImage) {
            let tmp8;
            if (cResult[4] === tmp4.smallCardMedia) {
              tmp8 = cResult[5];
            }
            if (cResult[6] === tmp4.cardBody) {
              let tmp12;
              let tmp13;
              let tmp17;
              if (cResult[7] === tmp4.skeletonCardBody) {
                tmp12 = cResult[8];
              }
              if (cResult[9] !== tmp4.skeletonCardContent) {
                const obj2 = { style: tmp4.skeletonCardContent };
                const tmp16 = React4(GameProfileSkeletonDefault, obj2);
                cResult[9] = tmp4.skeletonCardContent;
                cResult[10] = tmp16;
                tmp13 = tmp16;
              } else {
                tmp13 = cResult[10];
              }
              if (cResult[11] !== tmp4.skeletonCardMetadata) {
                const obj3 = { style: tmp4.skeletonCardMetadata };
                const tmp20 = React4(GameProfileSkeletonDefault, obj3);
                cResult[11] = tmp4.skeletonCardMetadata;
                cResult[12] = tmp20;
                tmp17 = tmp20;
              } else {
                tmp17 = cResult[12];
              }
              if (cResult[13] === tmp12) {
                if (cResult[14] === tmp13) {
                  let tmp21;
                  if (cResult[15] === tmp17) {
                    tmp21 = cResult[16];
                  }
                  if (cResult[17] === tmp4.skeletonAnimationRoot) {
                    if (cResult[18] === result) {
                      if (cResult[19] === tmp8) {
                        let tmp25;
                        if (cResult[20] === tmp21) {
                          tmp25 = cResult[21];
                        }
                        if (cResult[22] === tmp6) {
                          let tmp28;
                          if (cResult[23] === tmp25) {
                            tmp28 = cResult[24];
                          }
                          return tmp28;
                        }
                        const obj4 = { style: tmp6, children: tmp25 };
                        const tmp31 = React4(metroRequire, obj4);
                        cResult[22] = tmp6;
                        cResult[23] = tmp25;
                        cResult[24] = tmp31;
                        tmp28 = tmp31;
                      }
                    }
                  }
                  const obj5 = { animationDelayMs: result, style: tmp4.skeletonAnimationRoot, children: items };
                  items = [tmp8, tmp21];
                  const tmp27 = authStore(GameProfileSkeleton.GameProfileSkeletonContainer, obj5);
                  cResult[17] = tmp4.skeletonAnimationRoot;
                  cResult[18] = result;
                  cResult[19] = tmp8;
                  cResult[20] = tmp21;
                  cResult[21] = tmp27;
                  tmp25 = tmp27;
                }
              }
              const obj6 = { style: tmp12, children: items1 };
              items1 = [tmp13, tmp17];
              const tmp24 = authStore(metroRequire, obj6);
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
          const obj7 = { style: items3 };
          items3 = [,];
          ({ smallCardMedia: arr2[0], skeletonCardImage: arr2[1] } = tmp4);
          const tmp11 = React4(GameProfileSkeletonDefault, obj7);
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
    : (arg0) => {
        let GameProfileSkeletonContainer;
        let index;
        let isWindowLarge;
        let items1;
        let items2;
        let items3;
        let items4;
        let obj2;
        ({ index, isWindowLarge } = arg0);
        const tmp = closure_16();
        const items = [tmp.card];
        items[1] = isWindowLarge ? tmp.skeletonCardLarge : tmp.skeletonCard;
        const obj = { style: items, children: authStore(GameProfileSkeletonContainer, obj2) };
        obj2 = {
          animationDelayMs: index * GameProfileSkeleton.SKELETON_CARD_ANIMATION_DELAY_MS,
          style: tmp.skeletonAnimationRoot,
          children: items2,
        };
        GameProfileSkeletonContainer = GameProfileSkeleton.GameProfileSkeletonContainer;
        const obj3 = { style: items1 };
        items1 = [,];
        ({ smallCardMedia: arr2[0], skeletonCardImage: arr2[1] } = tmp);
        items2 = [React4(GameProfileSkeletonDefault, obj3)];
        const obj4 = { style: items3, children: items4 };
        items3 = [,];
        ({ cardBody: arr4[0], skeletonCardBody: arr4[1] } = tmp);
        items4 = [,];
        const obj5 = { style: tmp.skeletonCardContent };
        items4[0] = React4(GameProfileSkeletonDefault, obj5);
        const obj6 = { style: tmp.skeletonCardMetadata };
        items4[1] = React4(GameProfileSkeletonDefault, obj6);
        items2[1] = authStore(metroRequire, obj4);
        return React4(metroRequire, obj);
      },
);
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = memo2(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let isWindowLarge;
        let skeletonCardsContainer;
        let skeletonCardsScroller;
        let tmp7;
        let obj = require("react");
        const cResult = obj.c(6);
        const tmp4 = closure_16();
        const tmp6 = useIsWindowLargeDefault();
        const tmp = _require;
        _require = tmp6;
        ({ skeletonCardsScroller, skeletonCardsContainer } = tmp4);
        if (cResult[0] !== tmp6) {
          const _Array = Array;
          const arr = Array.from({ length: 3 }, (arg0, index) => {
            const obj = { index, isWindowLarge };
            return React4(closure_17, obj, index);
          });
          cResult[0] = tmp6;
          cResult[1] = arr;
          tmp7 = arr;
        } else {
          tmp7 = cResult[1];
        }
        if (cResult[2] === tmp4.skeletonCardsContainer) {
          if (cResult[3] === tmp4.skeletonCardsScroller) {
            let tmp10;
            if (cResult[4] === tmp7) {
              tmp10 = cResult[5];
            }
            return tmp10;
          }
        }
        const obj2 = {
          showViewAllSkeleton: true,
          skeletonTitleWidth: 200,
          children: closure_9(GameProfileSkeletonCardRowDefault, {
            style: skeletonCardsScroller,
            contentContainerStyle: skeletonCardsContainer,
            children: tmp7,
          }),
        };
        const GameProfileSectionSkeleton = tmp(8421).GameProfileSectionSkeleton;
        const tmp11 = closure_9(GameProfileSectionSkeleton, obj2);
        cResult[2] = tmp4.skeletonCardsContainer;
        cResult[3] = tmp4.skeletonCardsScroller;
        cResult[4] = tmp7;
        cResult[5] = tmp11;
        tmp10 = tmp11;
      }
    : () => {
        let isWindowLarge;
        let obj2;
        let tmp2;
        const tmp = closure_16();
        _require = useIsWindowLargeDefault();
        let obj = { showViewAllSkeleton: true, skeletonTitleWidth: 200, children: closure_9(tmp2, obj2) };
        const GameProfileSectionSkeleton = require("GameProfileSection").GameProfileSectionSkeleton;
        obj2 = {
          style: tmp.skeletonCardsScroller,
          contentContainerStyle: tmp.skeletonCardsContainer,
          children: Array.from({ length: 3 }, (arg0, index) => {
            const obj = { index, isWindowLarge };
            return React4(closure_17, obj, index);
          }),
        };
        tmp2 = GameProfileSkeletonCardRowDefault;
        return closure_9(GameProfileSectionSkeleton, obj);
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (message) {
      let channelId;
      let format;
      let guildId;
      let items;
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let numberFormat;
      let obj13;
      let obj19;
      let parser;
      let tmp26;
      let tmp57Result;
      let tmp58;
      let tmp64;
      const obj = react2;
      const cResult = obj.c(79);
      message = message.message;
      onPress = message.onPress;
      ({ guildId, channelId } = message);
      const tmp4 = closure_16();
      if (cResult[0] === channelId) {
        if (cResult[1] === guildId) {
          if (cResult[2] === message) {
            if (cResult[3] === onPress) {
              let tmp5;
              let tmp6;
              let tmp7;
              let tmp8;
              let tmp9;
              let tmp10;
              let tmp11;
              let tmp12;
              let tmp13;
              let tmp14;
              let tmp15;
              let tmp16;
              let tmp17;
              let tmp18;
              let tmp19;
              let tmp20;
              if (cResult[4] === tmp4) {
                tmp5 = cResult[5];
                tmp6 = cResult[6];
                tmp7 = cResult[7];
                tmp8 = cResult[8];
                tmp9 = cResult[9];
                tmp10 = cResult[10];
                tmp11 = cResult[11];
                tmp12 = cResult[12];
                tmp13 = cResult[13];
                tmp14 = cResult[14];
                tmp15 = cResult[15];
                tmp16 = cResult[16];
                tmp17 = cResult[17];
                tmp18 = cResult[18];
                tmp19 = cResult[19];
                tmp20 = cResult[20];
              }
              const _Symbol = Symbol;
              if (tmp12 !== Symbol.for("react.early_return_sentinel")) {
                return tmp12;
              } else {
                if (cResult[43] === tmp8.providerIconUrl) {
                  let tmp70;
                  let tmp76;
                  if (cResult[44] === tmp4.embedProviderIcon) {
                    tmp70 = cResult[45];
                  }
                  let str4 = "";
                  if (null != tmp8.providerName) {
                    const _HermesInternal = HermesInternal;
                    str4 = "" + tmp8.providerName + " \u00B7 ";
                  }
                  if (cResult[46] !== message.timestamp) {
                    const _Date = Date;
                    const self = this;
                    const self2 = this;
                    const dateFormat = DateUtils.dateFormat;
                    DateUtils;
                    const date = new Date(message.timestamp);
                    const dateFormatResult = dateFormat(date, "LL");
                    cResult[46] = message.timestamp;
                    cResult[47] = dateFormatResult;
                    tmp76 = dateFormatResult;
                  } else {
                    tmp76 = cResult[47];
                  }
                  if (cResult[48] === str4) {
                    let tmp81;
                    if (cResult[49] === tmp76) {
                      tmp81 = cResult[50];
                    }
                    if (cResult[51] === message.reactionCount) {
                      let tmp84;
                      if (cResult[52] === tmp4.reactionInfo) {
                        tmp84 = cResult[53];
                      }
                      if (cResult[54] === tmp4.metadataRow) {
                        if (cResult[55] === tmp70) {
                          if (cResult[56] === tmp81) {
                            let tmp96;
                            if (cResult[57] === tmp84) {
                              tmp96 = cResult[58];
                            }
                            if (cResult[59] === tmp5) {
                              if (cResult[60] === tmp9) {
                                if (cResult[61] === tmp96) {
                                  if (cResult[62] === tmp13) {
                                    if (cResult[63] === tmp14) {
                                      if (cResult[64] === tmp15) {
                                        let tmp100;
                                        if (cResult[65] === tmp16) {
                                          tmp100 = cResult[66];
                                        }
                                        if (cResult[67] === tmp6) {
                                          if (cResult[68] === tmp100) {
                                            if (cResult[69] === tmp17) {
                                              let tmp103;
                                              if (cResult[70] === tmp18) {
                                                tmp103 = cResult[71];
                                              }
                                              if (cResult[72] === tmp7) {
                                                if (cResult[73] === tmp10) {
                                                  if (cResult[74] === tmp11) {
                                                    if (cResult[75] === tmp103) {
                                                      if (cResult[76] === tmp19) {
                                                        let tmp106;
                                                        if (cResult[77] === tmp20) {
                                                          tmp106 = cResult[78];
                                                        }
                                                        return tmp106;
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
                                                children: tmp103,
                                              };
                                              const tmp108 = React4(tmp7, obj3);
                                              cResult[72] = tmp7;
                                              cResult[73] = tmp10;
                                              cResult[74] = tmp11;
                                              cResult[75] = tmp103;
                                              cResult[76] = tmp19;
                                              cResult[77] = tmp20;
                                              cResult[78] = tmp108;
                                              tmp106 = tmp108;
                                            }
                                          }
                                        }
                                        const obj4 = { style: tmp17, children: items };
                                        items = [tmp18, tmp100];
                                        const tmp105 = authStore(tmp6, obj4);
                                        cResult[67] = tmp6;
                                        cResult[68] = tmp100;
                                        cResult[69] = tmp17;
                                        cResult[70] = tmp18;
                                        cResult[71] = tmp105;
                                        tmp103 = tmp105;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            const obj5 = { style: tmp9, children: items1 };
                            items1 = [tmp13, tmp14, tmp15, tmp16, tmp96];
                            const tmp102 = authStore(tmp5, obj5);
                            cResult[59] = tmp5;
                            cResult[60] = tmp9;
                            cResult[61] = tmp96;
                            cResult[62] = tmp13;
                            cResult[63] = tmp14;
                            cResult[64] = tmp15;
                            cResult[65] = tmp16;
                            cResult[66] = tmp102;
                            tmp100 = tmp102;
                          }
                        }
                      }
                      const obj6 = { style: tmp109, children: items2 };
                      items2 = [tmp70, tmp81, tmp84];
                      const tmp99 = authStore(metroRequire, obj6);
                      cResult[54] = tmp4.metadataRow;
                      cResult[55] = tmp70;
                      cResult[56] = tmp81;
                      cResult[57] = tmp84;
                      cResult[58] = tmp99;
                      tmp96 = tmp99;
                    }
                    let tmp86Result = message.reactionCount > 0;
                    if (tmp86Result) {
                      const obj7 = { style: tmp4.reactionInfo, children: items3 };
                      const obj8 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
                      const ReactionIcon = ReactionIcon2.ReactionIcon;
                      items3 = [React4(ReactionIcon, obj8)];
                      let tmp91 = null != obj14;
                      const Text2 = Text_Text.Text;
                      const reactionCount = message.reactionCount;
                      if (tmp91) {
                        tmp91 = obj14.locale === intl3.intl.currentLocale;
                      }
                      if (!tmp91) {
                        const _Intl = Intl;
                        const self3 = this;
                        const self4 = this;
                        const obj9 = { locale: intl3.intl.currentLocale, format: numberFormat };
                        numberFormat = new Intl.NumberFormat(intl3.intl.currentLocale);
                        obj14 = obj9;
                      }
                      const obj10 = {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: format.format(reactionCount),
                      };
                      format = obj14.format;
                      items3[1] = React4(Text2, obj10);
                      tmp86Result = authStore(metroRequire, obj7);
                    }
                    cResult[51] = message.reactionCount;
                    cResult[52] = tmp4.reactionInfo;
                    cResult[53] = tmp86Result;
                    tmp84 = tmp86Result;
                  }
                  const obj11 = { variant: "text-xs/medium", color: "text-muted", children: items4 };
                  items4 = [str4, tmp76];
                  const tmp83 = authStore(Text_Text.Text, obj11);
                  cResult[48] = str4;
                  cResult[49] = tmp76;
                  cResult[50] = tmp83;
                  tmp81 = tmp83;
                }
                let tmp72 = null != tmp8.providerIconUrl;
                if (tmp72) {
                  const obj12 = { source: obj13, style: tmp4.embedProviderIcon };
                  obj13 = { uri: tmp8.providerIconUrl };
                  tmp72 = React4(hasOwnProperty, obj12);
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
      const forResult = Symbol.for("react.early_return_sentinel");
      if (null == parser) {
        const obj2 = CustomMarkupAll;
        parser = obj2.getParser();
      }
      obj14 = { guildId, channelId, mentionPillOffsetY: num };
      const media = message.media;
      let proxyUrl;
      const tmp23 = parser;
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
          const tmpResult2 = AnnouncementMessageUtils;
          posterUrl = tmpResult2.getPosterUrl(proxyUrl, c12, c11);
        }
        cResult[21] = proxyUrl;
        cResult[22] = posterUrl;
        tmp26 = posterUrl;
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
      let tmp33;
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
        let tmp44;
        if (cResult[23] !== embedSource.color) {
          if (null != embedSource.color) {
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
          tmp44 = tmp45;
        } else {
          tmp44 = cResult[24];
        }
        if (cResult[25] === message.id) {
          let tmp48;
          let tmp51;
          if (cResult[26] === onPress) {
            tmp48 = cResult[27];
          }
          class M {
            constructor() {
              return onPress(message.id);
            }
          }
          const cardBody = tmp4.cardBody;
          if (cResult[28] !== embedSource.url) {
            let tmp52 = null != embedSource.url;
            if (tmp52) {
              const obj16 = { variant: "text-xs/medium", color: "text-link", lineClamp: 1, children: null };
              class M {
                constructor() {
                  return onPress(message.id);
                }
              }
              tmp52 = React4(Text_Text.Text, obj16);
            }
            class M {
              constructor() {
                return onPress(message.id);
              }
            }
            cResult[28] = embedSource.url;
            cResult[29] = tmp52;
            tmp51 = tmp52;
          } else {
            tmp51 = cResult[29];
          }
          if (cResult[30] === tmp44) {
            let tmp54;
            if (cResult[31] === tmp4.embedContentArea) {
              tmp54 = cResult[32];
            }
            if (cResult[33] === embedSource.authorIconUrl) {
              if (cResult[34] === embedSource.authorName) {
                if (cResult[35] === tmp4.embedAuthorIcon) {
                  let tmp55;
                  if (cResult[36] === tmp4.embedAuthorRow) {
                    tmp55 = cResult[37];
                  }
                  if (cResult[38] === message.media) {
                    if (cResult[39] === tmp26) {
                      if (cResult[40] === tmp4.embedMedia) {
                        let tmp63;
                        if (cResult[41] === tmp4.mediaImage) {
                          tmp63 = cResult[42];
                        }
                        const tmp66 = null != message.title;
                        class M {
                          constructor() {
                            return onPress(message.id);
                          }
                        }
                        let tmp67 = message.body.length > 0;
                        if (tmp67) {
                          const obj17 = {
                            variant: "text-sm/medium",
                            color: "text-default",
                            lineClamp: 3,
                            children: tmp23(message.body, true, obj14),
                          };
                          class M {
                            constructor() {
                              return onPress(message.id);
                            }
                          }
                          const Text = Text_Text.Text;
                          tmp67 = React4(Text, obj17);
                        }
                        str = "button";
                        tmp34 = tmp67;
                        tmp30 = tmp48;
                        tmp31 = tmp47;
                        tmp32 = tmp51;
                        tmp33 = cardBody;
                        tmp35 = tmp66;
                        tmp36 = tmp63;
                        tmp37 = tmp55;
                        tmp38 = forResult;
                        tmp39 = tmp49;
                        tmp40 = tmp54;
                        tmp41 = tmp46;
                        tmp42 = metroRequire;
                        tmp43 = metroRequire;
                      }
                    }
                  }
                  class M {
                    constructor() {
                      return onPress(message.id);
                    }
                  }
                  if (tmp64) {
                    const obj18 = { style: null, children: React4(ImageWithPlaceholder.ImageWithPlaceholder, obj19) };
                    class M {
                      constructor() {
                        return onPress(message.id);
                      }
                    }
                    obj19 = {
                      uri: tmp26,
                      placeholder: message.media.placeholder,
                      placeholderVersion: message.media.placeholderVersion,
                      style: tmp4.mediaImage,
                    };
                    tmp64 = React4(metroRequire, obj18);
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
              const obj20 = { style: tmp4.embedAuthorRow, children: items5 };
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
                tmp58 = React4(hasOwnProperty, tmp61);
              }
              items5 = [tmp58];
              const obj22 = {
                variant: "text-xs/semibold",
                color: "text-strong",
                lineClamp: 1,
                children: embedSource.authorName,
              };
              items5[1] = React4(Text_Text.Text, obj22);
              tmp57Result = authStore(metroRequire, obj20);
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
      cResult[17] = tmp33;
      cResult[18] = tmp32;
      cResult[19] = tmp31;
      cResult[20] = tmp30;
      tmp20 = tmp30;
      tmp19 = tmp31;
      tmp18 = tmp32;
      tmp17 = tmp33;
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
    }
  : function (message) {
      let channelId;
      let format;
      let guildId;
      let items;
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let items6;
      let numberFormat;
      let obj11;
      let obj19;
      let obj6;
      let parser;
      message = message.message;
      onPress = message.onPress;
      ({ guildId, channelId } = message);
      const tmp = closure_16();
      if (null == parser) {
        const obj = CustomMarkupAll;
        parser = obj.getParser();
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
        const obj3 = AnnouncementMessageUtils;
        posterUrl = obj3.getPosterUrl(proxyUrl, c12, c11);
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
          tmp12 = { borderLeftColor: embedSource.color };
          const obj4 = { borderLeftColor: embedSource.color };
        }
        const obj5 = {
          style: tmp.card,
          onPress() {
            return onPress(message.id);
          },
          accessibilityRole: "button",
          accessibilityLabel: message.title,
          children: authStore(metroRequire, obj6),
        };
        let tmp13Result = null != embedSource.url;
        obj6 = { style: tmp.cardBody, children: items };
        if (tmp13Result) {
          const obj7 = { variant: "text-xs/medium", color: "text-link", lineClamp: 1, children: embedSource.url };
          tmp13Result = React4(Text_Text.Text, obj7);
        }
        items = [tmp13Result];
        const obj8 = { style: items1, children: items3 };
        items1 = [tmp.embedContentArea, tmp12];
        let tmp15Result = null != embedSource.authorName;
        if (tmp15Result) {
          let tmp13Result6 = null != embedSource.authorIconUrl;
          const obj9 = { style: tmp.embedAuthorRow, children: items2 };
          if (tmp13Result6) {
            const obj10 = { source: obj11, style: tmp.embedAuthorIcon };
            obj11 = { uri: embedSource.authorIconUrl };
            tmp13Result6 = React4(hasOwnProperty, obj10);
          }
          items2 = [tmp13Result6];
          const obj12 = {
            variant: "text-xs/semibold",
            color: "text-strong",
            lineClamp: 1,
            children: embedSource.authorName,
          };
          items2[1] = React4(Text_Text.Text, obj12);
          tmp15Result = authStore(metroRequire, obj9);
        }
        items3 = [tmp15Result, , , ,];
        let tmp13Result7 = null != message.media && null != posterUrl;
        if (tmp13Result7) {
          const obj13 = { style: tmp.embedMedia, children: React4(ImageWithPlaceholder.ImageWithPlaceholder, obj14) };
          obj14 = {
            uri: posterUrl,
            placeholder: message.media.placeholder,
            placeholderVersion: message.media.placeholderVersion,
            style: tmp.mediaImage,
          };
          tmp13Result7 = React4(metroRequire, obj13);
        }
        items3[1] = tmp13Result7;
        let tmp13Result8 = null != message.title;
        if (tmp13Result8) {
          const obj15 = {
            variant: "text-md/semibold",
            color: "mobile-text-heading-primary",
            lineClamp: 2,
            children: parser(message.title, true, obj2),
          };
          const Text = Text_Text.Text;
          tmp13Result8 = React4(Text, obj15);
        }
        items3[2] = tmp13Result8;
        let tmp13Result9 = message.body.length > 0;
        if (tmp13Result9) {
          const obj16 = {
            variant: "text-sm/medium",
            color: "text-default",
            lineClamp: 3,
            children: parser(message.body, true, obj2),
          };
          const Text2 = Text_Text.Text;
          tmp13Result9 = React4(Text2, obj16);
        }
        items3[3] = tmp13Result9;
        let tmp13Result10 = null != embedSource.providerIconUrl;
        const obj17 = { style: tmp.metadataRow, children: items4 };
        if (tmp13Result10) {
          const obj18 = { source: obj19, style: tmp.embedProviderIcon };
          obj19 = { uri: embedSource.providerIconUrl };
          tmp13Result10 = React4(hasOwnProperty, obj18);
        }
        items4 = [tmp13Result10, ,];
        let str2 = "";
        const Text3 = Text_Text.Text;
        if (null != embedSource.providerName) {
          const _HermesInternal = HermesInternal;
          str2 = "" + embedSource.providerName + " \u00B7 ";
        }
        const obj20 = { variant: "text-xs/medium", color: "text-muted", children: items5 };
        items5 = [str2];
        const _Date = Date;
        const self = this;
        const self2 = this;
        const dateFormat = DateUtils.dateFormat;
        DateUtils;
        const date = new Date(message.timestamp);
        items5[1] = dateFormat(date, "LL");
        items4[1] = authStore(Text3, obj20);
        let tmp15Result2 = message.reactionCount > 0;
        if (tmp15Result2) {
          const obj21 = { style: tmp.reactionInfo, children: items6 };
          const obj22 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
          const ReactionIcon = ReactionIcon2.ReactionIcon;
          items6 = [React4(ReactionIcon, obj22)];
          let tmp46 = null != obj14;
          const Text4 = Text_Text.Text;
          const reactionCount = message.reactionCount;
          if (tmp46) {
            tmp46 = obj14.locale === intl3.intl.currentLocale;
          }
          if (!tmp46) {
            const _Intl = Intl;
            const self3 = this;
            const self4 = this;
            const obj23 = { locale: intl3.intl.currentLocale, format: numberFormat };
            numberFormat = new Intl.NumberFormat(intl3.intl.currentLocale);
            obj14 = obj23;
          }
          const obj24 = { variant: "text-xs/medium", color: "text-muted", children: format.format(reactionCount) };
          format = obj14.format;
          items6[1] = React4(Text4, obj24);
          tmp15Result2 = authStore(metroRequire, obj21);
        }
        items4[2] = tmp15Result2;
        items3[4] = authStore(metroRequire, obj17);
        items[1] = authStore(metroRequire, obj8);
        return React4(metroImportDefault, obj5);
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (message) {
      let channelId;
      let format;
      let guildId;
      let items;
      let items1;
      let items2;
      let items3;
      let numberFormat;
      let obj15;
      let parser;
      let str;
      let tmp10;
      let tmp11;
      let tmp12;
      let tmp13;
      let tmp18;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(56);
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
                          let tmp33;
                          let tmp39;
                          if (cResult[10] === tmp4.smallCardMedia) {
                            tmp5 = cResult[11];
                            tmp6 = cResult[12];
                            tmp7 = cResult[13];
                            tmp8 = cResult[14];
                            tmp9 = cResult[15];
                            tmp10 = cResult[16];
                            tmp11 = cResult[17];
                            str = cResult[18];
                            tmp12 = cResult[19];
                            tmp13 = cResult[20];
                          }
                          const metadataRow = tmp4.metadataRow;
                          if (cResult[31] !== message.timestamp) {
                            const _Date = Date;
                            const self = this;
                            const self2 = this;
                            const dateFormat = DateUtils.dateFormat;
                            DateUtils;
                            const date = new Date(message.timestamp);
                            const dateFormatResult = dateFormat(date, "LL");
                            cResult[31] = message.timestamp;
                            cResult[32] = dateFormatResult;
                            tmp33 = dateFormatResult;
                          } else {
                            tmp33 = cResult[32];
                          }
                          if (cResult[33] !== tmp33) {
                            const obj3 = { variant: "text-xs/medium", color: "text-muted", children: tmp33 };
                            const tmp41 = React4(Text_Text.Text, obj3);
                            cResult[33] = tmp33;
                            cResult[34] = tmp41;
                            tmp39 = tmp41;
                          } else {
                            tmp39 = cResult[34];
                          }
                          if (cResult[35] === message.reactionCount) {
                            let tmp42;
                            if (cResult[36] === tmp4.reactionInfo) {
                              tmp42 = cResult[37];
                            }
                            if (cResult[38] === tmp4.metadataRow) {
                              if (cResult[39] === tmp39) {
                                let tmp56;
                                if (cResult[40] === tmp42) {
                                  tmp56 = cResult[41];
                                }
                                if (cResult[42] === tmp5) {
                                  if (cResult[43] === tmp7) {
                                    if (cResult[44] === tmp56) {
                                      if (cResult[45] === tmp8) {
                                        let tmp60;
                                        if (cResult[46] === tmp9) {
                                          tmp60 = cResult[47];
                                        }
                                        if (cResult[48] === tmp6) {
                                          if (cResult[49] === tmp60) {
                                            if (cResult[50] === tmp10) {
                                              if (cResult[51] === tmp11) {
                                                if (cResult[52] === str) {
                                                  if (cResult[53] === tmp12) {
                                                    let tmp63;
                                                    if (cResult[54] === tmp13) {
                                                      tmp63 = cResult[55];
                                                    }
                                                    return tmp63;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                        const obj4 = {
                                          style: tmp10,
                                          onPress: tmp11,
                                          accessibilityRole: str,
                                          accessibilityLabel: tmp12,
                                          children: items,
                                        };
                                        items = [tmp13, tmp60];
                                        const tmp65 = authStore(tmp6, obj4);
                                        cResult[48] = tmp6;
                                        cResult[49] = tmp60;
                                        cResult[50] = tmp10;
                                        cResult[51] = tmp11;
                                        cResult[52] = str;
                                        cResult[53] = tmp12;
                                        cResult[54] = tmp13;
                                        cResult[55] = tmp65;
                                        tmp63 = tmp65;
                                      }
                                    }
                                  }
                                }
                                const obj5 = { style: tmp7, children: items1 };
                                items1 = [tmp8, tmp9, tmp56];
                                const tmp62 = authStore(tmp5, obj5);
                                cResult[42] = tmp5;
                                cResult[43] = tmp7;
                                cResult[44] = tmp56;
                                cResult[45] = tmp8;
                                cResult[46] = tmp9;
                                cResult[47] = tmp62;
                                tmp60 = tmp62;
                              }
                            }
                            const obj6 = { style: metadataRow, children: items2 };
                            items2 = [tmp39, tmp42];
                            const tmp59 = authStore(metroRequire, obj6);
                            cResult[38] = tmp4.metadataRow;
                            cResult[39] = tmp39;
                            cResult[40] = tmp42;
                            cResult[41] = tmp59;
                            tmp56 = tmp59;
                          }
                          let tmp44Result = message.reactionCount > 0;
                          if (tmp44Result) {
                            const obj7 = { style: tmp4.reactionInfo, children: items3 };
                            const obj8 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
                            const ReactionIcon = ReactionIcon2.ReactionIcon;
                            items3 = [React4(ReactionIcon, obj8)];
                            let tmp50 = null != obj14;
                            const Text3 = Text_Text.Text;
                            const reactionCount = message.reactionCount;
                            if (tmp50) {
                              tmp50 = obj14.locale === intl3.intl.currentLocale;
                            }
                            if (!tmp50) {
                              const _Intl = Intl;
                              const self3 = this;
                              const self4 = this;
                              const obj9 = { locale: intl3.intl.currentLocale, format: numberFormat };
                              numberFormat = new Intl.NumberFormat(intl3.intl.currentLocale);
                              obj14 = obj9;
                            }
                            const obj10 = {
                              variant: "text-xs/medium",
                              color: "text-muted",
                              children: format.format(reactionCount),
                            };
                            format = obj14.format;
                            items3[1] = React4(Text3, obj10);
                            tmp44Result = authStore(metroRequire, obj7);
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
        const obj2 = CustomMarkupAll;
        parser = obj2.getParser();
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
          const tmpResult2 = AnnouncementMessageUtils;
          posterUrl = tmpResult2.getPosterUrl(proxyUrl, c12, c11);
        }
        cResult[21] = proxyUrl;
        cResult[22] = posterUrl;
        tmp18 = posterUrl;
      } else {
        tmp18 = cResult[22];
      }
      if (tmp18 == null) {
        tmp18 = proxyUrl;
      }
      const card = tmp4.card;
      if (cResult[23] === message.id) {
        let tmp23;
        if (cResult[24] === onPress) {
          tmp23 = cResult[25];
        }
        const title = message.title;
        if (cResult[26] === message.media) {
          if (cResult[27] === tmp18) {
            if (cResult[28] === tmp4.mediaImage) {
              let tmp24;
              if (cResult[29] === tmp4.smallCardMedia) {
                tmp24 = cResult[30];
              }
              const cardBody = tmp4.cardBody;
              let tmp29 = null != message.title;
              if (tmp29) {
                const obj12 = {
                  variant: "text-md/semibold",
                  color: "mobile-text-heading-primary",
                  lineClamp: 2,
                  children: parser(message.title, true, obj11),
                };
                const Text = Text_Text.Text;
                tmp29 = React4(Text, obj12);
              }
              let tmp31 = message.body.length > 0;
              if (tmp31) {
                const obj13 = {
                  variant: "text-sm/medium",
                  color: "text-default",
                  lineClamp: 3,
                  children: parser(message.body, true, obj11),
                };
                const Text2 = Text_Text.Text;
                tmp31 = React4(Text2, obj13);
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
              cResult[11] = metroRequire;
              cResult[12] = metroImportDefault;
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
              tmp6 = metroImportDefault;
              tmp5 = metroRequire;
            }
          }
        }
        let tmp25 = null != message.media && null != tmp18;
        if (tmp25) {
          obj14 = { style: tmp4.smallCardMedia, children: React4(ImageWithPlaceholder.ImageWithPlaceholder, obj15) };
          obj15 = {
            uri: tmp18,
            placeholder: message.media.placeholder,
            placeholderVersion: message.media.placeholderVersion,
            style: tmp4.mediaImage,
          };
          tmp25 = React4(metroRequire, obj14);
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
    }
  : function (message) {
      let channelId;
      let date;
      let dateFormat;
      let format;
      let guildId;
      let items;
      let items1;
      let items2;
      let items3;
      let numberFormat;
      let obj6;
      let parser;
      message = message.message;
      onPress = message.onPress;
      ({ guildId, channelId } = message);
      const tmp = closure_16();
      if (null == parser) {
        const obj = CustomMarkupAll;
        parser = obj.getParser();
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
        const obj3 = AnnouncementMessageUtils;
        posterUrl = obj3.getPosterUrl(proxyUrl, c12, c11);
      }
      if (posterUrl == null) {
        posterUrl = proxyUrl;
      }
      let tmp14 = null != message.media && null != posterUrl;
      const obj4 = {
        style: tmp.card,
        onPress() {
          return onPress(message.id);
        },
        accessibilityRole: "button",
        accessibilityLabel: message.title,
        children: items,
      };
      if (tmp14) {
        const obj5 = { style: tmp.smallCardMedia, children: React4(ImageWithPlaceholder.ImageWithPlaceholder, obj6) };
        obj6 = {
          uri: posterUrl,
          placeholder: message.media.placeholder,
          placeholderVersion: message.media.placeholderVersion,
          style: tmp.mediaImage,
        };
        tmp14 = React4(metroRequire, obj5);
      }
      items = [tmp14];
      let tmp20 = null != message.title;
      const obj7 = { style: tmp.cardBody, children: items1 };
      if (tmp20) {
        const obj8 = {
          variant: "text-md/semibold",
          color: "mobile-text-heading-primary",
          lineClamp: 2,
          children: parser(message.title, true, obj2),
        };
        const Text = Text_Text.Text;
        tmp20 = React4(Text, obj8);
      }
      items1 = [tmp20, ,];
      let tmp24 = message.body.length > 0;
      if (tmp24) {
        const obj9 = {
          variant: "text-sm/medium",
          color: "text-default",
          lineClamp: 3,
          children: parser(message.body, true, obj2),
        };
        const Text2 = Text_Text.Text;
        tmp24 = React4(Text2, obj9);
      }
      items1[1] = tmp24;
      const obj10 = { style: tmp.metadataRow, children: items2 };
      const obj11 = { variant: "text-xs/medium", color: "text-muted", children: dateFormat(date, "LL") };
      const Text3 = Text_Text.Text;
      dateFormat = DateUtils.dateFormat;
      DateUtils;
      date = new Date(message.timestamp);
      items2 = [React4(Text3, obj11)];
      let tmp12Result = message.reactionCount > 0;
      if (tmp12Result) {
        const obj12 = { style: tmp.reactionInfo, children: items3 };
        const obj13 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
        const ReactionIcon = ReactionIcon2.ReactionIcon;
        items3 = [React4(ReactionIcon, obj13)];
        let tmp36 = null != obj14;
        const Text4 = Text_Text.Text;
        const reactionCount = message.reactionCount;
        if (tmp36) {
          tmp36 = obj14.locale === intl3.intl.currentLocale;
        }
        if (!tmp36) {
          obj14 = { locale: intl3.intl.currentLocale, format: numberFormat };
          const _Intl = Intl;
          const self = this;
          const self2 = this;
          numberFormat = new Intl.NumberFormat(intl3.intl.currentLocale);
        }
        const obj15 = { variant: "text-xs/medium", color: "text-muted", children: format.format(reactionCount) };
        format = obj14.format;
        items3[1] = React4(Text4, obj15);
        tmp12Result = authStore(metroRequire, obj12);
      }
      items2[1] = tmp12Result;
      items1[2] = authStore(metroRequire, obj10);
      items[1] = authStore(metroRequire, obj7);
      return authStore(metroImportDefault, obj4);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (message) {
      let date;
      let intl;
      let items;
      let items1;
      let obj9;
      let pollAnswerOption;
      let tmpResult;
      let obj = message(576);
      const cResult = obj.c(56);
      message = message.message;
      onPress = message.onPress;
      const tmp4 = closure_16();
      importAll = tmp4;
      const poll = message.poll;
      if (null == poll) {
        return null;
      } else {
        let tmp15;
        let str;
        let tmp14;
        let tmp13;
        let tmp12;
        let tmp11;
        let tmp10;
        let tmp9;
        let tmp8;
        let tmp7;
        let tmp6;
        let tmp5;
        if (cResult[0] === message.id) {
          if (cResult[1] === onPress) {
            if (cResult[2] === poll.answers) {
              if (cResult[3] === poll.question.text) {
                if (cResult[4] === tmp4.card) {
                  if (cResult[5] === tmp4.cardBody) {
                    if (cResult[6] === tmp4.pollAnswerOption) {
                      if (cResult[7] === tmp4.pollAnswers) {
                        tmp5 = cResult[8];
                        tmp6 = cResult[9];
                        tmp7 = cResult[10];
                        tmp8 = cResult[11];
                        tmp9 = cResult[12];
                        tmp10 = cResult[13];
                        tmp11 = cResult[14];
                        tmp12 = cResult[15];
                        tmp13 = cResult[16];
                        tmp14 = cResult[17];
                        str = cResult[18];
                        tmp15 = cResult[19];
                      }
                      if (cResult[27] === tmp8) {
                        let tmp25;
                        if (cResult[28] === tmp4.pollMoreOptions) {
                          tmp25 = cResult[29];
                        }
                        if (cResult[30] === tmp5) {
                          if (cResult[31] === tmp9) {
                            if (cResult[32] === tmp10) {
                              let tmp28;
                              if (cResult[33] === tmp25) {
                                tmp28 = cResult[34];
                              }
                              if (cResult[35] === message.timestamp) {
                                let tmp32;
                                let tmp37;
                                if (cResult[36] === poll) {
                                  tmp32 = cResult[37];
                                }
                                if (cResult[38] !== tmp32) {
                                  const obj2 = { variant: "text-xs/medium", color: "text-muted", children: tmp32 };
                                  const tmp39 = closure_9(message(4892).Text, obj2);
                                  cResult[38] = tmp32;
                                  cResult[39] = tmp39;
                                  tmp37 = tmp39;
                                } else {
                                  tmp37 = cResult[39];
                                }
                                if (cResult[40] === tmp4.metadataRow) {
                                  let tmp40;
                                  if (cResult[41] === tmp37) {
                                    tmp40 = cResult[42];
                                  }
                                  if (cResult[43] === tmp6) {
                                    if (cResult[44] === tmp28) {
                                      if (cResult[45] === tmp40) {
                                        if (cResult[46] === tmp11) {
                                          let tmp44;
                                          if (cResult[47] === tmp12) {
                                            tmp44 = cResult[48];
                                          }
                                          if (cResult[49] === tmp7) {
                                            if (cResult[50] === tmp44) {
                                              if (cResult[51] === tmp13) {
                                                if (cResult[52] === tmp14) {
                                                  if (cResult[53] === str) {
                                                    let tmp47;
                                                    if (cResult[54] === tmp15) {
                                                      tmp47 = cResult[55];
                                                    }
                                                    return tmp47;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          const obj3 = {
                                            style: tmp13,
                                            onPress: tmp14,
                                            accessibilityRole: str,
                                            accessibilityLabel: tmp15,
                                            children: tmp44,
                                          };
                                          const tmp49 = closure_9(tmp7, obj3);
                                          cResult[49] = tmp7;
                                          cResult[50] = tmp44;
                                          cResult[51] = tmp13;
                                          cResult[52] = tmp14;
                                          cResult[53] = str;
                                          cResult[54] = tmp15;
                                          cResult[55] = tmp49;
                                          tmp47 = tmp49;
                                        }
                                      }
                                    }
                                  }
                                  const obj4 = { style: tmp11, children: items };
                                  items = [tmp12, tmp28, tmp40];
                                  const tmp46 = closure_10(tmp6, obj4);
                                  cResult[43] = tmp6;
                                  cResult[44] = tmp28;
                                  cResult[45] = tmp40;
                                  cResult[46] = tmp11;
                                  cResult[47] = tmp12;
                                  cResult[48] = tmp46;
                                  tmp44 = tmp46;
                                }
                                const obj5 = { style: tmp31, children: tmp37 };
                                const tmp43 = closure_9(closure_6, obj5);
                                cResult[40] = tmp4.metadataRow;
                                cResult[41] = tmp37;
                                cResult[42] = tmp43;
                                tmp40 = tmp43;
                              }
                              const intl2 = tmp(1126).intl;
                              const format = intl2.format;
                              const _Date = Date;
                              const self = this;
                              const self2 = this;
                              const obj6 = { createdAt: date, expiryLabel: tmpResult.getPollExpiryLabel(poll) };
                              const t0FTsH = tmp(1126).t.t0FTsH;
                              date = new Date(message.timestamp);
                              tmpResult = message(8439);
                              const formatResult = format(t0FTsH, obj6);
                              cResult[35] = message.timestamp;
                              cResult[36] = poll;
                              cResult[37] = formatResult;
                              tmp32 = formatResult;
                            }
                          }
                        }
                        const obj7 = { style: tmp9, children: items1 };
                        items1 = [tmp10, tmp25];
                        const tmp30 = closure_10(tmp5, obj7);
                        cResult[30] = tmp5;
                        cResult[31] = tmp9;
                        cResult[32] = tmp10;
                        cResult[33] = tmp25;
                        cResult[34] = tmp30;
                        tmp28 = tmp30;
                      }
                      let tmp26 = tmp8 > 0;
                      if (tmp26) {
                        const obj8 = {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          style: tmp4.pollMoreOptions,
                          children: intl.format(message(1126).t["mv/nIa"], obj9),
                        };
                        let Text = tmp(4892).Text;
                        intl = tmp(1126).intl;
                        obj9 = { count: tmp8 };
                        tmp26 = closure_9(Text, obj8);
                      }
                      cResult[27] = tmp8;
                      cResult[28] = tmp4.pollMoreOptions;
                      cResult[29] = tmp26;
                      tmp25 = tmp26;
                    }
                  }
                }
              }
            }
          }
        }
        const answers = poll.answers;
        const substr = answers.slice(0, 3);
        const diff = poll.answers.length - substr.length;
        const card = tmp4.card;
        if (cResult[20] === message.id) {
          let tmp18;
          let tmp20;
          if (cResult[21] === onPress) {
            tmp18 = cResult[22];
          }
          const text = poll.question.text;
          const cardBody = tmp4.cardBody;
          if (cResult[23] !== poll.question.text) {
            const obj10 = {
              variant: "text-md/semibold",
              color: "mobile-text-heading-primary",
              children: poll.question.text,
            };
            const tmp22 = closure_9(message(4892).Text, obj10);
            cResult[23] = poll.question.text;
            cResult[24] = tmp22;
            tmp20 = tmp22;
          } else {
            tmp20 = cResult[24];
          }
          const pollAnswers = tmp4.pollAnswers;
          if (cResult[25] !== tmp4.pollAnswerOption) {
            class L {
              constructor(poll_media) {
                let Text;
                let str;
                const obj = {
                  style: pollAnswerOption.pollAnswerOption,
                  children: React4(Text, {
                    variant: "text-sm/medium",
                    color: "text-default",
                    lineClamp: 1,
                    children: str,
                  }),
                };
                str = poll_media.poll_media.text;
                Text = Text_Text.Text;
                if (str == null) {
                  str = "";
                }
                return React4(metroRequire, obj, poll_media.answer_id);
              }
            }
            cResult[25] = tmp4.pollAnswerOption;
            cResult[26] = L;
          } else {
            class L {
              constructor(poll_media) {
                let Text;
                let str;
                const obj = {
                  style: pollAnswerOption.pollAnswerOption,
                  children: React4(Text, {
                    variant: "text-sm/medium",
                    color: "text-default",
                    lineClamp: 1,
                    children: str,
                  }),
                };
                str = poll_media.poll_media.text;
                Text = Text_Text.Text;
                if (str == null) {
                  str = "";
                }
                return React4(metroRequire, obj, poll_media.answer_id);
              }
            }
          }
          const mapped = substr.map(L);
          cResult[0] = message.id;
          cResult[1] = onPress;
          cResult[2] = poll.answers;
          cResult[3] = poll.question.text;
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
          cResult[15] = tmp20;
          cResult[16] = card;
          cResult[17] = tmp18;
          cResult[18] = "button";
          cResult[19] = text;
          tmp15 = text;
          str = "button";
          tmp14 = tmp18;
          tmp13 = card;
          tmp12 = tmp20;
          tmp11 = cardBody;
          tmp10 = mapped;
          tmp9 = pollAnswers;
          tmp8 = diff;
          tmp7 = closure_7;
          tmp6 = closure_6;
          tmp5 = closure_6;
        }
        const fn = function v() {
          return onPress(message.id);
        };
        cResult[20] = message.id;
        cResult[21] = onPress;
        cResult[22] = fn;
        tmp18 = fn;
      }
    }
  : function (message) {
      let Text2;
      let date;
      let format;
      let intl;
      let items;
      let items1;
      let obj3;
      let obj6;
      let obj8;
      let obj9;
      let t0FTsH;
      let tmp11Result;
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
          children: closure_10(closure_6, obj3),
        };
        obj3 = { style: tmp.cardBody, children: items };
        const obj4 = {
          variant: "text-md/semibold",
          color: "mobile-text-heading-primary",
          children: poll.question.text,
        };
        items = [closure_9(message(4892).Text, obj4), ,];
        const obj5 = { style: tmp.pollAnswers, children: items1 };
        items1 = [
          substr.map((poll_media) => {
            let Text;
            let str;
            const obj = {
              style: pollAnswerOption.pollAnswerOption,
              children: React4(Text, { variant: "text-sm/medium", color: "text-default", lineClamp: 1, children: str }),
            };
            str = poll_media.poll_media.text;
            Text = Text_Text.Text;
            if (str == null) {
              str = "";
            }
            return React4(metroRequire, obj, poll_media.answer_id);
          }),
        ];
        let tmp7Result = diff > 0;
        if (tmp7Result) {
          let obj = {
            variant: "text-xs/medium",
            color: "text-muted",
            style: tmp.pollMoreOptions,
            children: intl.format(message(1126).t["mv/nIa"], obj6),
          };
          let Text = tmp11(4892).Text;
          intl = tmp11(1126).intl;
          obj6 = { count: diff };
          tmp7Result = closure_9(Text, obj);
        }
        items1[1] = tmp7Result;
        items[1] = closure_10(closure_6, obj5);
        const obj7 = { style: tmp.metadataRow, children: closure_9(Text2, obj8) };
        obj8 = { variant: "text-xs/medium", color: "text-muted", children: format(t0FTsH, obj9) };
        Text2 = tmp11(4892).Text;
        const intl2 = tmp11(1126).intl;
        format = intl2.format;
        const _Date = Date;
        const self = this;
        const self2 = this;
        obj9 = { createdAt: date, expiryLabel: tmp11Result.getPollExpiryLabel(poll) };
        t0FTsH = tmp11(1126).t.t0FTsH;
        date = new Date(message.timestamp);
        tmp11Result = message(8439);
        items[2] = closure_9(closure_6, obj7);
        return closure_9(closure_7, obj2);
      }
    };
const memo3 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = memo3(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (message) => {
        let tmp2;
        const obj = react2;
        const cResult = obj.c(6);
        if (null != message.message.poll) {
          let tmp16;
          if (cResult[0] !== message) {
            const obj2 = {};
            const merged = Object.assign(message);
            const tmp22 = React4(closure_21, obj2);
            cResult[0] = message;
            cResult[1] = tmp22;
            tmp16 = tmp22;
          } else {
            tmp16 = cResult[1];
          }
          tmp2 = tmp16;
        } else if (null != message.message.embedSource) {
          let tmp9;
          if (cResult[2] !== message) {
            const obj3 = {};
            const merged1 = Object.assign(message);
            const tmp15 = React4(closure_19, obj3);
            cResult[2] = message;
            cResult[3] = tmp15;
            tmp9 = tmp15;
          } else {
            tmp9 = cResult[3];
          }
          tmp2 = tmp9;
        } else if (cResult[4] !== message) {
          const obj4 = {};
          const merged2 = Object.assign(message);
          const tmp8 = React4(closure_20, obj4);
          cResult[4] = message;
          cResult[5] = tmp8;
          tmp2 = tmp8;
        } else {
          tmp2 = cResult[5];
        }
        return tmp2;
      }
    : (message) => {
        let tmp6;
        if (null != message.message.poll) {
          const obj2 = {};
          const merged = Object.assign(message);
          tmp6 = React4(closure_21, obj2);
        } else if (null != message.message.embedSource) {
          const obj3 = {};
          const merged1 = Object.assign(message);
          tmp6 = React4(closure_19, obj3);
        } else {
          const obj = {};
          const merged2 = Object.assign(message);
          tmp6 = React4(closure_20, obj);
        }
        return tmp6;
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (gameId) => {
      let channelId;
      let messages;
      let trackAction;
      let obj = gameId(trackAction[10]);
      const cResult = obj.c(36);
      const tmp = gameId;
      gameId = gameId.gameId;
      const invite = gameId.invite;
      const closeModal = gameId.closeModal;
      const tmp2 = trackAction;
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
                    let tmp6;
                    if (cResult[7] === trackAction) {
                      tmp6 = cResult[8];
                    }
                    if (cResult[9] === analyticsLocations) {
                      if (cResult[10] === channelId) {
                        if (cResult[11] === closeModal) {
                          if (cResult[12] === gameId) {
                            if (cResult[13] === guildId) {
                              if (cResult[14] === invite) {
                                if (cResult[15] === scrollY) {
                                  let tmp7;
                                  if (cResult[16] === trackAction) {
                                    tmp7 = cResult[17];
                                  }
                                  onPress = tmp7;
                                  class T {
                                    constructor(messageId) {
                                      let id;
                                      if (invite != null) {
                                        const guild = invite.guild;
                                        if (guild != null) {
                                          id = guild.id;
                                        }
                                      }
                                      if (id == null) {
                                        id = guildId;
                                      }
                                      const tmp3 = null != id && null != channelId;
                                      if (tmp3) {
                                        trackAction(
                                          GameProfileAnalyticUtils.GameProfileTrackActionActions.AnnouncementsItem,
                                        );
                                        const obj = { gameId, channelId, initialScrollOffset: scrollY.get() };
                                        const setGameProfilePendingReturn =
                                          GameProfileActionCreatorsDefault.setGameProfilePendingReturn;
                                        const result = setGameProfilePendingReturn(obj);
                                        closeModal();
                                        const obj2 = {
                                          invite,
                                          guildId: id,
                                          channelId,
                                          messageId,
                                          analyticsLocationStack: analyticsLocations,
                                        };
                                        navigateToGameAnnouncementDefault(obj2);
                                      }
                                    }
                                  }
                                  if (null != channelId) {
                                    if (0 !== messages.length) {
                                      let tmp9;
                                      let tmp13;
                                      const _Symbol = Symbol;
                                      class T {
                                        constructor(messageId) {
                                          let id;
                                          if (invite != null) {
                                            const guild = invite.guild;
                                            if (guild != null) {
                                              id = guild.id;
                                            }
                                          }
                                          if (id == null) {
                                            id = guildId;
                                          }
                                          const tmp3 = null != id && null != channelId;
                                          if (tmp3) {
                                            trackAction(
                                              GameProfileAnalyticUtils.GameProfileTrackActionActions.AnnouncementsItem,
                                            );
                                            const obj = { gameId, channelId, initialScrollOffset: scrollY.get() };
                                            const setGameProfilePendingReturn =
                                              GameProfileActionCreatorsDefault.setGameProfilePendingReturn;
                                            const result = setGameProfilePendingReturn(obj);
                                            closeModal();
                                            const obj2 = {
                                              invite,
                                              guildId: id,
                                              channelId,
                                              messageId,
                                              analyticsLocationStack: analyticsLocations,
                                            };
                                            navigateToGameAnnouncementDefault(obj2);
                                          }
                                        }
                                      }
                                      if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                                        const string = tmp(tmp2[6]).intl.string;
                                        class T {
                                          constructor(messageId) {
                                            let id;
                                            if (invite != null) {
                                              const guild = invite.guild;
                                              if (guild != null) {
                                                id = guild.id;
                                              }
                                            }
                                            if (id == null) {
                                              id = guildId;
                                            }
                                            const tmp3 = null != id && null != channelId;
                                            if (tmp3) {
                                              trackAction(
                                                GameProfileAnalyticUtils.GameProfileTrackActionActions
                                                  .AnnouncementsItem,
                                              );
                                              const obj = { gameId, channelId, initialScrollOffset: scrollY.get() };
                                              const setGameProfilePendingReturn =
                                                GameProfileActionCreatorsDefault.setGameProfilePendingReturn;
                                              const result = setGameProfilePendingReturn(obj);
                                              closeModal();
                                              const obj2 = {
                                                invite,
                                                guildId: id,
                                                channelId,
                                                messageId,
                                                analyticsLocationStack: analyticsLocations,
                                              };
                                              navigateToGameAnnouncementDefault(obj2);
                                            }
                                          }
                                        }
                                        cResult[19] = tmp10;
                                        tmp9 = tmp10;
                                      } else {
                                        tmp9 = cResult[19];
                                      }
                                      if (cResult[20] === channelId) {
                                        if (cResult[21] === guildId) {
                                          if (cResult[22] === tmp7) {
                                            if (cResult[23] === messages) {
                                              tmp13 = cResult[24];
                                            }
                                            if (cResult[29] === tmp4.smallCardsContainer) {
                                              if (cResult[30] === tmp4.smallCardsScroller) {
                                                let tmp16;
                                                if (cResult[31] === tmp13) {
                                                  tmp16 = cResult[32];
                                                }
                                                if (cResult[33] === tmp6) {
                                                  let tmp18;
                                                  if (cResult[34] === tmp16) {
                                                    tmp18 = cResult[35];
                                                  }
                                                  return tmp18;
                                                }
                                                class T {
                                                  constructor(messageId) {
                                                    let id;
                                                    if (invite != null) {
                                                      const guild = invite.guild;
                                                      if (guild != null) {
                                                        id = guild.id;
                                                      }
                                                    }
                                                    if (id == null) {
                                                      id = guildId;
                                                    }
                                                    const tmp3 = null != id && null != channelId;
                                                    if (tmp3) {
                                                      trackAction(
                                                        GameProfileAnalyticUtils.GameProfileTrackActionActions
                                                          .AnnouncementsItem,
                                                      );
                                                      const obj = {
                                                        gameId,
                                                        channelId,
                                                        initialScrollOffset: scrollY.get(),
                                                      };
                                                      const setGameProfilePendingReturn =
                                                        GameProfileActionCreatorsDefault.setGameProfilePendingReturn;
                                                      const result = setGameProfilePendingReturn(obj);
                                                      closeModal();
                                                      const obj2 = {
                                                        invite,
                                                        guildId: id,
                                                        channelId,
                                                        messageId,
                                                        analyticsLocationStack: analyticsLocations,
                                                      };
                                                      navigateToGameAnnouncementDefault(obj2);
                                                    }
                                                  }
                                                }
                                                let obj2 = { title: tmp9, onPressViewAll: tmp6, children: tmp16 };
                                                class D {
                                                  constructor(message) {
                                                    const obj = { message, onPress, guildId, channelId };
                                                    return React4(closure_22, obj, message.id);
                                                  }
                                                }
                                                cResult[33] = tmp6;
                                                cResult[34] = tmp16;
                                                cResult[35] = tmp19;
                                                tmp18 = tmp19;
                                              }
                                            }
                                            class T {
                                              constructor(messageId) {
                                                let id;
                                                if (invite != null) {
                                                  const guild = invite.guild;
                                                  if (guild != null) {
                                                    id = guild.id;
                                                  }
                                                }
                                                if (id == null) {
                                                  id = guildId;
                                                }
                                                const tmp3 = null != id && null != channelId;
                                                if (tmp3) {
                                                  trackAction(
                                                    GameProfileAnalyticUtils.GameProfileTrackActionActions
                                                      .AnnouncementsItem,
                                                  );
                                                  const obj = { gameId, channelId, initialScrollOffset: scrollY.get() };
                                                  const setGameProfilePendingReturn =
                                                    GameProfileActionCreatorsDefault.setGameProfilePendingReturn;
                                                  const result = setGameProfilePendingReturn(obj);
                                                  closeModal();
                                                  const obj2 = {
                                                    invite,
                                                    guildId: id,
                                                    channelId,
                                                    messageId,
                                                    analyticsLocationStack: analyticsLocations,
                                                  };
                                                  navigateToGameAnnouncementDefault(obj2);
                                                }
                                              }
                                            }
                                            class D {
                                              constructor(message) {
                                                const obj = { message, onPress, guildId, channelId };
                                                return React4(closure_22, obj, message.id);
                                              }
                                            }
                                            cResult[29] = tmp4.smallCardsContainer;
                                            cResult[30] = tmp4.smallCardsScroller;
                                            cResult[31] = tmp13;
                                            cResult[32] = tmp17;
                                            tmp16 = tmp17;
                                          }
                                        }
                                      }
                                      if (cResult[25] === channelId) {
                                        if (cResult[26] === guildId) {
                                          let tmp14;
                                          if (cResult[27] === tmp7) {
                                            tmp14 = cResult[28];
                                          }
                                          const mapped = messages.map(tmp14);
                                          class T {
                                            constructor(messageId) {
                                              let id;
                                              if (invite != null) {
                                                const guild = invite.guild;
                                                if (guild != null) {
                                                  id = guild.id;
                                                }
                                              }
                                              if (id == null) {
                                                id = guildId;
                                              }
                                              const tmp3 = null != id && null != channelId;
                                              if (tmp3) {
                                                trackAction(
                                                  GameProfileAnalyticUtils.GameProfileTrackActionActions
                                                    .AnnouncementsItem,
                                                );
                                                const obj = { gameId, channelId, initialScrollOffset: scrollY.get() };
                                                const setGameProfilePendingReturn =
                                                  GameProfileActionCreatorsDefault.setGameProfilePendingReturn;
                                                const result = setGameProfilePendingReturn(obj);
                                                closeModal();
                                                const obj2 = {
                                                  invite,
                                                  guildId: id,
                                                  channelId,
                                                  messageId,
                                                  analyticsLocationStack: analyticsLocations,
                                                };
                                                navigateToGameAnnouncementDefault(obj2);
                                              }
                                            }
                                          }
                                          cResult[20] = channelId;
                                          cResult[21] = guildId;
                                          class D {
                                            constructor(message) {
                                              const obj = { message, onPress, guildId, channelId };
                                              return React4(closure_22, obj, message.id);
                                            }
                                          }
                                          cResult[23] = messages;
                                          cResult[24] = mapped;
                                          tmp13 = mapped;
                                        }
                                      }
                                      class D {
                                        constructor(message) {
                                          const obj = { message, onPress, guildId, channelId };
                                          return React4(closure_22, obj, message.id);
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
                      constructor(messageId) {
                        let id;
                        if (invite != null) {
                          const guild = invite.guild;
                          if (guild != null) {
                            id = guild.id;
                          }
                        }
                        if (id == null) {
                          id = guildId;
                        }
                        const tmp3 = null != id && null != channelId;
                        if (tmp3) {
                          trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.AnnouncementsItem);
                          const obj = { gameId, channelId, initialScrollOffset: scrollY.get() };
                          const setGameProfilePendingReturn =
                            GameProfileActionCreatorsDefault.setGameProfilePendingReturn;
                          const result = setGameProfilePendingReturn(obj);
                          closeModal();
                          const obj2 = {
                            invite,
                            guildId: id,
                            channelId,
                            messageId,
                            analyticsLocationStack: analyticsLocations,
                          };
                          navigateToGameAnnouncementDefault(obj2);
                        }
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
          const guild = invite.guild;
          if (guild != null) {
            id = guild.id;
          }
        }
        if (id == null) {
          id = guildId;
        }
        const tmp3 = null != id && null != channelId;
        if (tmp3) {
          trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.Announcements);
          const obj = { gameId, channelId, initialScrollOffset: scrollY.get() };
          const setGameProfilePendingReturn = GameProfileActionCreatorsDefault.setGameProfilePendingReturn;
          const result = setGameProfilePendingReturn(obj);
          closeModal();
          const obj2 = { invite, guildId: id, channelId, analyticsLocationStack: analyticsLocations };
          navigateToGameAnnouncementDefault(obj2);
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
  : (gameId) => {
      let channelId;
      let hasFetched;
      let intl;
      let loading;
      let messages;
      let obj3;
      let tmp2Result2;
      let tmp6;
      gameId = gameId.gameId;
      const invite = gameId.invite;
      const closeModal = gameId.closeModal;
      const trackAction = gameId.trackAction;
      const scrollY = gameId.scrollY;
      channelId = undefined;
      onPress = undefined;
      const hasDiscordWebsite = gameId.hasDiscordWebsite;
      let tmp3 = trackAction;
      const tmp = closure_16();
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
          const guild = invite.guild;
          if (guild != null) {
            id = guild.id;
          }
        }
        if (id == null) {
          id = guildId;
        }
        const tmp3 = null != id && null != channelId;
        if (tmp3) {
          trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.Announcements);
          const obj = { gameId, channelId, initialScrollOffset: scrollY.get() };
          const setGameProfilePendingReturn = GameProfileActionCreatorsDefault.setGameProfilePendingReturn;
          const result = setGameProfilePendingReturn(obj);
          closeModal();
          const obj2 = { invite, guildId: id, channelId, analyticsLocationStack: analyticsLocations };
          navigateToGameAnnouncementDefault(obj2);
        }
      }, items);
      onPress = scrollY.useCallback((messageId) => {
        let id;
        if (invite != null) {
          const guild = invite.guild;
          if (guild != null) {
            id = guild.id;
          }
        }
        if (id == null) {
          id = guildId;
        }
        const tmp3 = null != id && null != channelId;
        if (tmp3) {
          trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.AnnouncementsItem);
          const obj = { gameId, channelId, initialScrollOffset: scrollY.get() };
          const setGameProfilePendingReturn = GameProfileActionCreatorsDefault.setGameProfilePendingReturn;
          const result = setGameProfilePendingReturn(obj);
          closeModal();
          const obj2 = { invite, guildId: id, channelId, messageId, analyticsLocationStack: analyticsLocations };
          navigateToGameAnnouncementDefault(obj2);
        }
      }, items1);
      if (!hasFetched) {
        if (hasDiscordWebsite) {
          tmp6 = closure_9(closure_18, {});
        }
        return tmp6;
      }
      tmp6 = null;
      if (null != channelId) {
        tmp6 = null;
        if (0 !== messages.length) {
          let obj = {
            title: intl.string(gameId(tmp3[6]).t.B0BV3Y),
            onPressViewAll: callback,
            children: closure_9(tmp2Result2, obj3),
          };
          const tmp2Result = invite(tmp3[13]);
          intl = gameId(tmp3[6]).intl;
          ({ smallCardsScroller: obj2.style, smallCardsContainer: obj2.contentContainerStyle } = tmp);
          obj3 = {
            showsHorizontalScrollIndicator: false,
            style: null,
            contentContainerStyle: null,
            decelerationRate: "fast",
            snapToInterval: 172,
            snapToStart: false,
            snapToEnd: false,
            children: messages.map((message) => {
              const obj = { message, onPress, guildId, channelId };
              return React4(closure_22, obj, message.id);
            }),
          };
          tmp2Result2 = invite(tmp3[25]);
          tmp6 = closure_9(tmp2Result, obj);
        }
      }
    };
size = size_mod;
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileAnnouncements.tsx");

export default tmp6;
