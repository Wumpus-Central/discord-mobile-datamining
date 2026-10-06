// === Module 11333: ForwardPreview ===

// Module 11333 (ForwardPreview)
import _mod12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import utils_ImageUtilsDefault from "utils/ImageUtils" /* 1483 */;
import useThemeDefault from "useTheme" /* 4797 */;
import Text_Text from "Text/Text" /* 4892 */;
import checkpoint_CheckpointMessageComponentUtils from "checkpoint/CheckpointMessageComponentUtils" /* 5143 */;
import ImageIcon from "ImageIcon" /* 5878 */;
import FastImageDefault from "FastImage" /* 5981 */;
import RowGeneratorDefault from "RowGenerator" /* 7602 */;
import RowGeneratorTypes from "RowGeneratorTypes" /* 7820 */;
import ChatItemDefault from "ChatItem" /* 8336 */;
import CirclePlayIcon2 from "CirclePlayIcon" /* 8401 */;
import ClipView from "ClipView" /* 8502 */;
import AttachmentIcon2 from "AttachmentIcon" /* 10382 */;
import ForwardPreviewUtils from "ForwardPreviewUtils" /* 11334 */;
import ImagesIcon2 from "ImagesIcon" /* 11337 */;
import CheckpointForwardPreviewDefault from "CheckpointForwardPreview" /* 11339 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const ClipViewDefault = ClipView;
let importDefault;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let size;
let size1;
let size2;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let c7 = 56;
let createStyles = createStyles_mod;
let obj = { forwardPreview: obj2, quote: size, contentWrapper: { flexDirection: "column", flex: 1, paddingVertical: 4, gap: 6 }, attachmentPreview: size1, attachmentPreviewVideo: obj3, videoThumbnail: { position: "absolute", top: 0, left: 0, opacity: 0.6 }, playIcon: { position: "absolute", top: 0, left: 0, margin: 16, zIndex: 100 }, attachmentPreviewOverflow: { position: "relative" }, overflowCount: size2, attachmentRow: { flexDirection: "row", alignItems: "center", gap: 6 }, largeIcon: { width: 20, height: 20 } };
obj2 = { flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "center" };
createStyles = createStyles.createStyles;
size = { width: 4, height: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: 2 };
size1 = { position: "relative", width: 56, height: 56, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj3 = { backgroundColor: nativeDefault.colors.BLACK };
size2 = { position: "absolute", bottom: 0, right: 0, alignItems: "center", justifyContent: "center", textAlign: "center", width: 24, height: 24, lineHeight: 24, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function(arg0) {
  let TEXT_SUBTLE;
  let attachmentCount;
  let contentMessage;
  let message;
  let seeMoreLabelColor;
  let obj = attachmentCount(576);
  const cResult = obj.c(13);
  ({ message, contentMessage, attachmentCount } = arg0);
  const tmp5 = useThemeDefault();
  if (attachmentCount > 0) {
    TEXT_SUBTLE = tmp4(587).colors.TEXT_DEFAULT;
  } else {
    TEXT_SUBTLE = tmp4(587).colors.TEXT_SUBTLE;
  }
  if (cResult[0] === TEXT_SUBTLE) {
    let tmp6;
    if (cResult[1] === tmp5) {
      tmp6 = cResult[2];
    }
    importDefault = tmp6;
    if (cResult[3] === attachmentCount) {
      let tmp8;
      let tmp10;
      if (cResult[4] === tmp6.seeMoreLabelColor) {
        tmp8 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const self = this;
        const self2 = this;
        const obj3 = new RowGeneratorDefault();
        obj3.setOptions({ renderEmbeds: false, renderReactions: false, inlineEmbedMedia: false, inlineAttachmentMedia: false, animateEmoji: true, gifAutoPlay: false, timestampHourCycle: 0, renderCodedLinks: false, renderGiftCode: false, renderActivityInstanceEmbed: false, renderActivityInviteEmbed: false, renderComponents: false, renderThreadEmbeds: false, renderReplies: false, renderCommunicationDisabled: false, renderAttachments: false, renderExecutedCommands: false, renderPolls: false, renderSharedClientTheme: false, renderForumPostActions: false, ignoreMentioned: false, ignoreEmbedDescriptionCache: false, forceHideSimpleEmbedContent: false, enableSwipeActions: false, useAlternateEmbedColors: false });
        cResult[6] = obj3;
        tmp10 = obj3;
      } else {
        tmp10 = cResult[6];
      }
      if (cResult[7] === contentMessage.content) {
        let tmp13;
        if (cResult[8] === message) {
          tmp13 = cResult[9];
        }
        if (cResult[10] === tmp8) {
          let tmp15;
          if (cResult[11] === tmp13) {
            tmp15 = cResult[12];
          }
          return tmp15;
        }
        const obj2 = { pointerEvents: "none", horizontalOffset: 0, modifyRow: tmp8, message: tmp13, rowGenerator: tmp10 };
        const tmp17 = closure_5(ChatItemDefault, obj2);
        cResult[10] = tmp8;
        cResult[11] = tmp13;
        cResult[12] = tmp17;
        tmp15 = tmp17;
      }
      const obj4 = { messageSnapshots: [], content: contentMessage.content };
      const mergeResult = message.merge(obj4);
      cResult[7] = contentMessage.content;
      cResult[8] = message;
      cResult[9] = mergeResult;
      tmp13 = mergeResult;
    }
    const fn = function v(message) {
      message.contextType = RowGeneratorTypes.MessageContextType.SEARCH;
      let num = 2;
      if (attachmentCount > 0) {
        num = 1;
      }
      const obj = { numberOfLines: num, expandable: false, seeMoreLabel: "...", seeMoreLabelColor: seeMoreLabelColor.seeMoreLabelColor };
      message.truncation = obj;
      message.message.edited = "";
    };
    let num = 3;
    cResult[3] = attachmentCount;
    cResult[4] = tmp6.seeMoreLabelColor;
    cResult[5] = fn;
    tmp8 = fn;
  }
  const tmpResult = attachmentCount(4896);
  const tmp7 = tmpResult.createNativeStyleProperties({ seeMoreLabelColor: TEXT_SUBTLE })(tmp5);
  cResult[0] = TEXT_SUBTLE;
  cResult[1] = tmp5;
  cResult[2] = tmp7;
  tmp6 = tmp7;
}) : ((contentMessage) => {
  let TEXT_SUBTLE;
  let attachmentCount;
  let closure_1;
  let message;
  let obj3;
  ({ message, attachmentCount } = contentMessage);
  importDefault = undefined;
  contentMessage = contentMessage.contentMessage;
  const tmp3 = useThemeDefault();
  if (attachmentCount > 0) {
    TEXT_SUBTLE = tmp(587).colors.TEXT_DEFAULT;
  } else {
    TEXT_SUBTLE = tmp(587).colors.TEXT_SUBTLE;
  }
  let obj = attachmentCount(4896);
  const tmp4 = obj.createNativeStyleProperties({ seeMoreLabelColor: TEXT_SUBTLE })(tmp3);
  importDefault = tmp4;
  const items = [tmp4.seeMoreLabelColor, attachmentCount];
  const callback = react.useCallback((message) => {
    message.contextType = RowGeneratorTypes.MessageContextType.SEARCH;
    let num = 2;
    if (attachmentCount > 0) {
      num = 1;
    }
    const obj = { numberOfLines: num, expandable: false, seeMoreLabel: "...", seeMoreLabelColor: closure_1.seeMoreLabelColor };
    message.truncation = obj;
    message.message.edited = "";
  }, items);
  const memo = react.useMemo(() => {
    const obj = new closure_1(dependencyMap[9])();
    obj.setOptions({ renderEmbeds: false, renderReactions: false, inlineEmbedMedia: false, inlineAttachmentMedia: false, animateEmoji: true, gifAutoPlay: false, timestampHourCycle: 0, renderCodedLinks: false, renderGiftCode: false, renderActivityInstanceEmbed: false, renderActivityInviteEmbed: false, renderComponents: false, renderThreadEmbeds: false, renderReplies: false, renderCommunicationDisabled: false, renderAttachments: false, renderExecutedCommands: false, renderPolls: false, renderSharedClientTheme: false, renderForumPostActions: false, ignoreMentioned: false, ignoreEmbedDescriptionCache: false, forceHideSimpleEmbedContent: false, enableSwipeActions: false, useAlternateEmbedColors: false });
    return obj;
  }, []);
  const obj2 = { pointerEvents: "none", horizontalOffset: 0, modifyRow: callback, message: message.merge(obj3), rowGenerator: memo };
  obj3 = { messageSnapshots: [], content: contentMessage.content };
  const tmpResult = ChatItemDefault;
  return closure_5(tmpResult, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let CirclePlayIcon;
  let attachments;
  let channel;
  let contentMessage;
  let embeds;
  let formatToPlainStringResult;
  let forwardOptions;
  let hasContent;
  let items;
  let items1;
  let items2;
  let items3;
  let items5;
  let items6;
  let message;
  let obj17;
  let obj19;
  let obj4;
  let tmpResult6;
  let obj = react2;
  const cResult = obj.c(106);
  ({ message, channel, forwardOptions } = arg0);
  const tmp4 = closure_8();
  if (cResult[0] === channel) {
    if (cResult[1] === forwardOptions) {
      let tmp5;
      let tmp19;
      let tmp20;
      let tmp21;
      if (cResult[2] === message) {
        tmp5 = cResult[3];
      }
      const tmpResult = ForwardPreviewUtils;
      const forwardPreviewContent = tmpResult.useForwardPreviewContent(tmp5);
      ({ attachments, embeds, hasContent, contentMessage } = forwardPreviewContent);
      if (cResult[4] === attachments) {
        if (cResult[5] === contentMessage) {
          if (cResult[6] === embeds) {
            if (cResult[7] === tmp4.attachmentPreview) {
              if (cResult[8] === tmp4.attachmentPreviewOverflow) {
                if (cResult[9] === tmp4.attachmentPreviewVideo) {
                  if (cResult[10] === tmp4.contentWrapper) {
                    if (cResult[11] === tmp4.forwardPreview) {
                      if (cResult[12] === tmp4.overflowCount) {
                        if (cResult[13] === tmp4.playIcon) {
                          if (cResult[14] === tmp4.quote) {
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
                            if (cResult[15] === tmp4.videoThumbnail) {
                              tmp7 = cResult[16];
                              tmp8 = cResult[17];
                              tmp9 = cResult[18];
                              tmp10 = cResult[19];
                              tmp11 = cResult[20];
                              tmp12 = cResult[21];
                              tmp13 = cResult[22];
                              tmp14 = cResult[23];
                              tmp15 = cResult[24];
                              tmp16 = cResult[25];
                              tmp17 = cResult[26];
                            }
                            if (cResult[78] === tmp10) {
                              if (cResult[79] === contentMessage) {
                                if (cResult[80] === hasContent) {
                                  let tmp99;
                                  if (cResult[81] === message) {
                                    tmp99 = cResult[82];
                                  }
                                  if (cResult[83] === tmp7) {
                                    if (cResult[84] === tmp10) {
                                      if (cResult[85] === tmp11) {
                                        if (cResult[86] === hasContent) {
                                          if (cResult[87] === tmp4.attachmentRow) {
                                            let tmp103;
                                            if (cResult[88] === tmp4.largeIcon) {
                                              tmp103 = cResult[89];
                                            }
                                            if (cResult[90] === tmp8) {
                                              if (cResult[91] === tmp14) {
                                                if (cResult[92] === tmp15) {
                                                  if (cResult[93] === tmp99) {
                                                    let tmp112;
                                                    if (cResult[94] === tmp103) {
                                                      tmp112 = cResult[95];
                                                    }
                                                    if (cResult[96] === tmp13) {
                                                      let tmp115;
                                                      if (cResult[97] === tmp4.attachmentPreview) {
                                                        tmp115 = cResult[98];
                                                      }
                                                      if (cResult[99] === tmp9) {
                                                        if (cResult[100] === tmp12) {
                                                          if (cResult[101] === tmp16) {
                                                            if (cResult[102] === tmp17) {
                                                              if (cResult[103] === tmp112) {
                                                                let tmp121;
                                                                if (cResult[104] === tmp115) {
                                                                  tmp121 = cResult[105];
                                                                }
                                                                return tmp121;
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                      const obj2 = { style: tmp16, children: items };
                                                      items = [tmp17, tmp112, tmp12, tmp115];
                                                      const tmp123 = metroRequire(tmp9, obj2);
                                                      cResult[99] = tmp9;
                                                      cResult[100] = tmp12;
                                                      cResult[101] = tmp16;
                                                      cResult[102] = tmp17;
                                                      cResult[103] = tmp112;
                                                      cResult[104] = tmp115;
                                                      cResult[105] = tmp123;
                                                      tmp121 = tmp123;
                                                    }
                                                    let tmp117 = null != tmp13;
                                                    if (tmp117) {
                                                      const obj3 = { style: tmp4.attachmentPreview, children: hasOwnProperty(CheckpointForwardPreviewDefault, obj4) };
                                                      obj4 = { checkpointData: tmp13 };
                                                      tmp117 = hasOwnProperty(View, obj3);
                                                    }
                                                    cResult[96] = tmp13;
                                                    cResult[97] = tmp4.attachmentPreview;
                                                    cResult[98] = tmp117;
                                                    tmp115 = tmp117;
                                                  }
                                                }
                                              }
                                            }
                                            const obj5 = { style: tmp14, children: items1 };
                                            items1 = [tmp15, tmp99, tmp103];
                                            const tmp114 = metroRequire(tmp8, obj5);
                                            cResult[90] = tmp8;
                                            cResult[91] = tmp14;
                                            cResult[92] = tmp15;
                                            cResult[93] = tmp99;
                                            cResult[94] = tmp103;
                                            cResult[95] = tmp114;
                                            tmp112 = tmp114;
                                          }
                                        }
                                      }
                                    }
                                  }
                                  let tmp105Result = tmp10 > 0;
                                  if (tmp105Result) {
                                    let tmp109Result = null != tmp7;
                                    const obj7 = { style: tmp4.attachmentRow, children: items2 };
                                    if (tmp109Result) {
                                      let str3 = "custom";
                                      if (hasContent) {
                                        str3 = "sm";
                                      }
                                      const obj9 = { size: str3, style: !hasContent && tmp4.largeIcon, color: "text-muted" };
                                      tmp109Result = hasOwnProperty(tmp7, obj9);
                                    }
                                    items2 = [tmp109Result, ];
                                    let tmp111Result = null != tmp11;
                                    if (tmp111Result) {
                                      let str4 = "text-md/medium";
                                      const Text2 = Text_Text.Text;
                                      if (hasContent) {
                                        str4 = "text-sm/medium";
                                      }
                                      const obj10 = { variant: str4, color: "text-muted", children: tmp11 };
                                      tmp111Result = hasOwnProperty(Text2, obj10);
                                    }
                                    items2[1] = tmp111Result;
                                    tmp105Result = metroRequire(View, obj7);
                                  }
                                  cResult[83] = tmp7;
                                  cResult[84] = tmp10;
                                  cResult[85] = tmp11;
                                  cResult[86] = hasContent;
                                  cResult[87] = tmp4.attachmentRow;
                                  cResult[88] = tmp4.largeIcon;
                                  cResult[89] = tmp105Result;
                                  tmp103 = tmp105Result;
                                }
                              }
                            }
                            let tmp100 = hasContent;
                            if (tmp100) {
                              const obj11 = { message, contentMessage, attachmentCount: tmp10 };
                              tmp100 = hasOwnProperty(closure_9, obj11);
                            }
                            cResult[78] = tmp10;
                            cResult[79] = contentMessage;
                            cResult[80] = hasContent;
                            cResult[81] = message;
                            cResult[82] = tmp100;
                            tmp99 = tmp100;
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
      }
      const tmpResult4 = checkpoint_CheckpointMessageComponentUtils;
      const checkpointDataFromMessage = tmpResult4.getCheckpointDataFromMessage(contentMessage);
      if (attachments.length > 0) {
        let tmp23;
        let tmp24;
        let tmp22;
        if (cResult[27] === attachments.length) {
          if (cResult[28] === attachments) {
            tmp22 = cResult[29];
            tmp23 = cResult[30];
            tmp24 = cResult[31];
          }
          if (tmp22 > 0) {
            if (attachments.length === tmp22) {
              if (cResult[35] === tmp4.attachmentPreview) {
                let tmp57;
                let tmp58;
                let tmp65;
                if (cResult[36] === tmp4.attachmentPreviewVideo) {
                  tmp57 = cResult[37];
                }
                const videoThumbnail = tmp4.videoThumbnail;
                if (cResult[38] !== attachments[0].proxy_url) {
                  const obj16 = utils_ImageUtilsDefault;
                  const mobileOptimizedSrc = obj16.getMobileOptimizedSrc(attachments[0].proxy_url, v56, v56, "png");
                  cResult[38] = attachments[0].proxy_url;
                  cResult[39] = mobileOptimizedSrc;
                  tmp58 = mobileOptimizedSrc;
                } else {
                  tmp58 = cResult[39];
                }
                if (cResult[40] !== tmp58) {
                  const obj13 = { uri: tmp58 };
                  cResult[40] = tmp58;
                  cResult[41] = obj13;
                  tmp65 = obj13;
                } else {
                  tmp65 = cResult[41];
                }
                if (cResult[42] === tmp4.videoThumbnail) {
                  let tmp66;
                  let tmp71;
                  if (cResult[43] === tmp65) {
                    tmp66 = cResult[44];
                  }
                  if (cResult[45] !== tmp4.playIcon) {
                    const obj14 = { style: tmp4.playIcon, size: "md", color: "white" };
                    const tmp73 = hasOwnProperty(CirclePlayIcon2.CirclePlayIcon, obj14);
                    cResult[45] = tmp4.playIcon;
                    cResult[46] = tmp73;
                    tmp71 = tmp73;
                  } else {
                    tmp71 = cResult[46];
                  }
                  if (cResult[47] === tmp66) {
                    if (cResult[48] === tmp71) {
                      let tmp74;
                      if (cResult[49] === tmp57) {
                        tmp74 = cResult[50];
                      }
                      tmp19 = tmp74;
                      tmp20 = tmp23;
                      tmp21 = tmp24;
                    }
                  }
                  const obj15 = { style: tmp57, children: items3 };
                  items3 = [tmp66, tmp71];
                  const tmp77 = metroRequire(View, obj15);
                  cResult[47] = tmp66;
                  cResult[48] = tmp71;
                  cResult[49] = tmp57;
                  cResult[50] = tmp77;
                  tmp74 = tmp77;
                }
                size = { style: videoThumbnail, source: tmp65, width: v56, height: v56 };
                const tmp70 = hasOwnProperty(FastImageDefault, size);
                cResult[42] = tmp4.videoThumbnail;
                cResult[43] = tmp65;
                cResult[44] = tmp70;
                tmp66 = tmp70;
              }
              const items4 = [, ];
              ({ attachmentPreview: arr[0], attachmentPreviewVideo: arr[1] } = tmp4);
              cResult[35] = tmp4.attachmentPreview;
              cResult[36] = tmp4.attachmentPreviewVideo;
              cResult[37] = items4;
              tmp57 = items4;
            }
          }
          if (attachments.length > 0) {
            let tmp44;
            let tmp48;
            const attachmentPreview2 = tmp4.attachmentPreview;
            if (cResult[51] !== attachments[0].proxy_url) {
              const obj12 = utils_ImageUtilsDefault;
              const mobileOptimizedSrc1 = obj12.getMobileOptimizedSrc(attachments[0].proxy_url, v56, v56);
              cResult[51] = attachments[0].proxy_url;
              cResult[52] = mobileOptimizedSrc1;
              tmp44 = mobileOptimizedSrc1;
            } else {
              tmp44 = cResult[52];
            }
            if (cResult[53] !== tmp44) {
              const size1 = { source: obj17, width: v56, height: v56 };
              obj17 = { uri: tmp44 };
              const tmp52 = hasOwnProperty(FastImageDefault, size1);
              cResult[53] = tmp44;
              cResult[54] = tmp52;
              tmp48 = tmp52;
            } else {
              tmp48 = cResult[54];
            }
            if (cResult[55] === tmp4.attachmentPreview) {
              let tmp53;
              if (cResult[56] === tmp48) {
                tmp53 = cResult[57];
              }
              tmp19 = tmp53;
              tmp20 = tmp23;
              tmp21 = tmp24;
            }
            const obj18 = { style: attachmentPreview2, children: tmp48 };
            const tmp56 = hasOwnProperty(View, obj18);
            cResult[55] = tmp4.attachmentPreview;
            cResult[56] = tmp48;
            cResult[57] = tmp56;
            tmp53 = tmp56;
          } else {
            const first = embeds[0];
            let proxyURL;
            if (first != null) {
              const thumbnail = first.thumbnail;
              if (thumbnail != null) {
                proxyURL = thumbnail.proxyURL;
              }
            }
            tmp19 = null;
            tmp20 = tmp23;
            tmp21 = tmp24;
            if (null != proxyURL) {
              let tmp31;
              let tmp35;
              const attachmentPreview = tmp4.attachmentPreview;
              if (cResult[58] !== embeds[0].thumbnail.proxyURL) {
                const obj8 = utils_ImageUtilsDefault;
                const mobileOptimizedSrc2 = obj8.getMobileOptimizedSrc(embeds[0].thumbnail.proxyURL, v56, v56);
                cResult[58] = embeds[0].thumbnail.proxyURL;
                cResult[59] = mobileOptimizedSrc2;
                tmp31 = mobileOptimizedSrc2;
              } else {
                tmp31 = cResult[59];
              }
              if (cResult[60] !== tmp31) {
                const size2 = { source: obj19, width: v56, height: v56 };
                obj19 = { uri: tmp31 };
                const tmp39 = hasOwnProperty(FastImageDefault, size2);
                cResult[60] = tmp31;
                cResult[61] = tmp39;
                tmp35 = tmp39;
              } else {
                tmp35 = cResult[61];
              }
              if (cResult[62] === tmp4.attachmentPreview) {
                let tmp40;
                if (cResult[63] === tmp35) {
                  tmp40 = cResult[64];
                }
                tmp19 = tmp40;
                tmp20 = tmp23;
                tmp21 = tmp24;
              }
              const obj20 = { style: attachmentPreview, children: tmp35 };
              const tmp43 = hasOwnProperty(View, obj20);
              cResult[62] = tmp4.attachmentPreview;
              cResult[63] = tmp35;
              cResult[64] = tmp43;
              tmp40 = tmp43;
            }
          }
        }
        const _Symbol = Symbol;
        if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
          class G {
            constructor(arg0) {
              obj = closure_1_0(closure_1_2[13]);
              return obj.getMosaicMediaTypeForAttachment(arg0, true);
            }
          }
          cResult[32] = G;
        } else {
          class G {
            constructor(arg0) {
              obj = closure_1_0(closure_1_2[13]);
              return obj.getMosaicMediaTypeForAttachment(arg0, true);
            }
          }
        }
        const tmpResult5 = _mod12;
        const countByResult = tmpResult5.countBy(attachments, G);
        const IMAGE = countByResult.IMAGE;
        if (IMAGE == null) {
          class G {
            constructor(arg0) {
              obj = closure_1_0(closure_1_2[13]);
              return obj.getMosaicMediaTypeForAttachment(arg0, true);
            }
          }
        }
        const VIDEO = countByResult.VIDEO;
        if (VIDEO == null) {
          class G {
            constructor(arg0) {
              obj = closure_1_0(closure_1_2[13]);
              return obj.getMosaicMediaTypeForAttachment(arg0, true);
            }
          }
        }
        if (IMAGE > 0) {
          class G {
            constructor(arg0) {
              obj = closure_1_0(closure_1_2[13]);
              return obj.getMosaicMediaTypeForAttachment(arg0, true);
            }
          }
          cResult[27] = attachments.length;
          cResult[28] = attachments;
          cResult[29] = VIDEO;
          cResult[30] = formatToPlainStringResult;
          cResult[31] = CirclePlayIcon;
          tmp23 = formatToPlainStringResult;
          tmp24 = CirclePlayIcon;
          tmp22 = VIDEO;
        }
        if (VIDEO > 0) {
          class G {
            constructor(arg0) {
              obj = closure_1_0(closure_1_2[13]);
              return obj.getMosaicMediaTypeForAttachment(arg0, true);
            }
          }
          const obj21 = { count: VIDEO };
          formatToPlainStringResult = obj6.formatToPlainString(intl5.t.SJ6pPX, obj21);
          CirclePlayIcon = CirclePlayIcon2.CirclePlayIcon;
        } else {
          class G {
            constructor(arg0) {
              obj = closure_1_0(closure_1_2[13]);
              return obj.getMosaicMediaTypeForAttachment(arg0, true);
            }
          }
        }
      } else {
        class G {
          constructor(arg0) {
            obj = closure_1_0(closure_1_2[13]);
            return obj.getMosaicMediaTypeForAttachment(arg0, true);
          }
        }
        tmp20 = null;
        tmp21 = null;
      }
      let tmp78 = tmp19;
      if (attachments.length > 1) {
        class G {
          constructor(arg0) {
            obj = closure_1_0(closure_1_2[13]);
            return obj.getMosaicMediaTypeForAttachment(arg0, true);
          }
        }
        tmp78 = tmp19;
        if (null != tmp19) {
          class G {
            constructor(arg0) {
              obj = closure_1_0(closure_1_2[13]);
              return obj.getMosaicMediaTypeForAttachment(arg0, true);
            }
          }
          const _Symbol3 = Symbol;
          if (cResult[65] === Symbol.for("react.memo_cache_sentinel")) {
            class G {
              constructor(arg0) {
                obj = closure_1_0(closure_1_2[13]);
                return obj.getMosaicMediaTypeForAttachment(arg0, true);
              }
            }
            tmp80[0] = ClipView.CutoutShape.RoundedRect;
            cResult[65] = tmp80;
          } else {
            class G {
              constructor(arg0) {
                obj = closure_1_0(closure_1_2[13]);
                return obj.getMosaicMediaTypeForAttachment(arg0, true);
              }
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[66] === Symbol.for("react.memo_cache_sentinel")) {
            class G {
              constructor(arg0) {
                obj = closure_1_0(closure_1_2[13]);
                return obj.getMosaicMediaTypeForAttachment(arg0, true);
              }
            }
            tmp82[0] = tmp80;
            cResult[66] = tmp82;
          } else {
            class G {
              constructor(arg0) {
                obj = closure_1_0(closure_1_2[13]);
                return obj.getMosaicMediaTypeForAttachment(arg0, true);
              }
            }
          }
          if (cResult[67] !== tmp19) {
            class G {
              constructor(arg0) {
                obj = closure_1_0(closure_1_2[13]);
                return obj.getMosaicMediaTypeForAttachment(arg0, true);
              }
            }
            const obj22 = { cutouts: tmp82, children: tmp19 };
            cResult[67] = tmp19;
            cResult[68] = hasOwnProperty(ClipViewDefault, obj22);
            const tmp85 = hasOwnProperty(ClipViewDefault, obj22);
          } else {
            class G {
              constructor(arg0) {
                obj = closure_1_0(closure_1_2[13]);
                return obj.getMosaicMediaTypeForAttachment(arg0, true);
              }
            }
          }
          const diff = length - 1;
          if (cResult[69] === tmp4.overflowCount) {
            class G {
              constructor(arg0) {
                obj = closure_1_0(closure_1_2[13]);
                return obj.getMosaicMediaTypeForAttachment(arg0, true);
              }
            }
            if (cResult[72] === tmp4.attachmentPreviewOverflow) {
              class G {
                constructor(arg0) {
                  obj = closure_1_0(closure_1_2[13]);
                  return obj.getMosaicMediaTypeForAttachment(arg0, true);
                }
              }
            }
            const obj23 = { style: tmp4.attachmentPreviewOverflow, children: items5 };
            items5 = [tmp83, tmp87];
            cResult[72] = tmp4.attachmentPreviewOverflow;
            cResult[73] = tmp87;
            cResult[74] = tmp83;
            cResult[75] = metroRequire(View, obj23);
            const tmp93 = metroRequire(View, obj23);
          }
          const obj24 = { style: tmp4.overflowCount, variant: "text-xs/semibold", color: "text-default", children: items6 };
          items6 = ["+", diff];
          cResult[69] = tmp4.overflowCount;
          cResult[70] = diff;
          cResult[71] = metroRequire(Text_Text.Text, obj24);
          const tmp89 = metroRequire(Text_Text.Text, obj24);
        }
      }
      const forwardPreview = tmp4.forwardPreview;
      if (cResult[76] !== tmp4.quote) {
        class G {
          constructor(arg0) {
            obj = closure_1_0(closure_1_2[13]);
            return obj.getMosaicMediaTypeForAttachment(arg0, true);
          }
        }
        const obj25 = { style: tmp4.quote };
        cResult[76] = tmp4.quote;
        cResult[77] = hasOwnProperty(View, obj25);
        const tmp96 = hasOwnProperty(View, obj25);
      } else {
        class G {
          constructor(arg0) {
            obj = closure_1_0(closure_1_2[13]);
            return obj.getMosaicMediaTypeForAttachment(arg0, true);
          }
        }
      }
      let tmp98 = null != checkpointDataFromMessage;
      if (tmp98) {
        class G {
          constructor(arg0) {
            obj = closure_1_0(closure_1_2[13]);
            return obj.getMosaicMediaTypeForAttachment(arg0, true);
          }
        }
        const obj26 = { variant: "text-md/medium", children: tmpResult6.getCheckpointLabel(checkpointDataFromMessage) };
        const Text = Text_Text.Text;
        tmpResult6 = checkpoint_CheckpointMessageComponentUtils;
        tmp98 = hasOwnProperty(Text, obj26);
      }
      cResult[4] = attachments;
      cResult[5] = contentMessage;
      cResult[6] = embeds;
      cResult[7] = tmp4.attachmentPreview;
      cResult[8] = tmp4.attachmentPreviewOverflow;
      cResult[9] = tmp4.attachmentPreviewVideo;
      cResult[10] = tmp4.contentWrapper;
      cResult[11] = tmp4.forwardPreview;
      cResult[12] = tmp4.overflowCount;
      cResult[13] = tmp4.playIcon;
      cResult[14] = tmp4.quote;
      cResult[15] = tmp4.videoThumbnail;
      cResult[16] = tmp21;
      cResult[17] = View;
      cResult[18] = View;
      cResult[19] = attachments.length;
      cResult[20] = tmp20;
      cResult[21] = tmp78;
      cResult[22] = checkpointDataFromMessage;
      cResult[23] = tmp4.contentWrapper;
      cResult[24] = tmp98;
      cResult[25] = forwardPreview;
      cResult[26] = tmp95;
      tmp15 = tmp98;
      tmp17 = tmp95;
      tmp16 = forwardPreview;
      tmp14 = contentWrapper;
      tmp13 = checkpointDataFromMessage;
      tmp12 = tmp78;
      tmp11 = tmp20;
      tmp10 = length;
      tmp9 = View;
      tmp8 = View;
      tmp7 = tmp21;
    }
  }
  const obj27 = { message, channel, forwardOptions };
  cResult[0] = channel;
  cResult[1] = forwardOptions;
  cResult[2] = message;
  cResult[3] = obj27;
  tmp5 = obj27;
}) : ((message) => {
  let attachments;
  let channel;
  let contentMessage;
  let embeds;
  let forwardOptions;
  let hasContent;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj10;
  let obj11;
  let obj15;
  let obj19;
  let obj29;
  let obj5;
  let obj8;
  let size1;
  let size2;
  let tmp17;
  let tmp22;
  let tmp2Result2;
  let tmp6;
  let tmp7;
  let tmp8;
  message = message.message;
  ({ channel, forwardOptions } = message);
  const tmp = closure_8();
  let obj = ForwardPreviewUtils;
  const forwardPreviewContent = obj.useForwardPreviewContent({ message, channel, forwardOptions });
  ({ attachments, embeds, hasContent, contentMessage } = forwardPreviewContent);
  const obj2 = checkpoint_CheckpointMessageComponentUtils;
  const checkpointDataFromMessage = obj2.getCheckpointDataFromMessage(contentMessage);
  if (attachments.length > 0) {
    let formatToPlainStringResult;
    let AttachmentIcon;
    const tmp2Result = _mod12;
    const countByResult = tmp2Result.countBy(attachments, (proxy_url) => {
      const obj = require("MosaicMediaType");
      return obj.getMosaicMediaTypeForAttachment(proxy_url, true);
    });
    let num = countByResult.IMAGE;
    if (num == null) {
      num = 0;
    }
    let num2 = countByResult.VIDEO;
    if (num2 == null) {
      num2 = 0;
    }
    if (num > 0) {
      if (num2 > 0) {
        const intl4 = intl5.intl;
        const obj3 = { image_count: num, video_count: num2 };
        formatToPlainStringResult = intl4.formatToPlainString(intl5.t.Lr0Top, obj3);
        AttachmentIcon = ImagesIcon2.ImagesIcon;
      }
      if (num2 > 0) {
        if (attachments.length === num2) {
          const obj4 = { style: items, children: items1 };
          items = [, ];
          ({ attachmentPreview: arr[0], attachmentPreviewVideo: arr[1] } = tmp);
          size = { style: tmp.videoThumbnail, source: obj5, width: v56, height: v56 };
          obj5 = { uri: obj19.getMobileOptimizedSrc(attachments[0].proxy_url, v56, v56, "png") };
          const tmp28 = FastImageDefault;
          obj19 = utils_ImageUtilsDefault;
          items1 = [hasOwnProperty(tmp28, size), ];
          const obj6 = { style: tmp.playIcon, size: "md", color: "white" };
          items1[1] = hasOwnProperty(CirclePlayIcon2.CirclePlayIcon, obj6);
          tmp6 = metroRequire(View, obj4);
          tmp7 = AttachmentIcon;
          tmp8 = formatToPlainStringResult;
        }
      }
      if (attachments.length > 0) {
        const obj7 = { style: tmp.attachmentPreview, children: hasOwnProperty(tmp22, size1) };
        size1 = { source: obj8, width: v56, height: v56 };
        obj8 = { uri: obj15.getMobileOptimizedSrc(attachments[0].proxy_url, v56, v56) };
        tmp22 = FastImageDefault;
        obj15 = utils_ImageUtilsDefault;
        tmp6 = hasOwnProperty(View, obj7);
        tmp7 = AttachmentIcon;
        tmp8 = formatToPlainStringResult;
      } else {
        const first = embeds[0];
        let proxyURL;
        if (first != null) {
          const thumbnail = first.thumbnail;
          if (thumbnail != null) {
            proxyURL = thumbnail.proxyURL;
          }
        }
        tmp6 = null;
        tmp7 = AttachmentIcon;
        tmp8 = formatToPlainStringResult;
        if (null != proxyURL) {
          const obj9 = { style: tmp.attachmentPreview, children: hasOwnProperty(tmp17, size2) };
          size2 = { source: obj10, width: v56, height: v56 };
          obj10 = { uri: obj11.getMobileOptimizedSrc(embeds[0].thumbnail.proxyURL, v56, v56) };
          tmp17 = FastImageDefault;
          obj11 = utils_ImageUtilsDefault;
          tmp6 = hasOwnProperty(View, obj9);
          tmp7 = AttachmentIcon;
          tmp8 = formatToPlainStringResult;
        }
      }
    }
    if (num2 > 0) {
      const intl3 = intl5.intl;
      const obj12 = { count: num2 };
      formatToPlainStringResult = intl3.formatToPlainString(intl5.t.SJ6pPX, obj12);
      AttachmentIcon = CirclePlayIcon2.CirclePlayIcon;
    } else if (num > 0) {
      let ImagesIcon;
      const intl2 = intl5.intl;
      const obj13 = { count: num };
      const formatToPlainStringResult1 = intl2.formatToPlainString(intl5.t.h4pFfU, obj13);
      if (1 === num) {
        ImagesIcon = ImageIcon.ImageIcon;
      } else {
        ImagesIcon = ImagesIcon2.ImagesIcon;
      }
      AttachmentIcon = ImagesIcon;
      formatToPlainStringResult = formatToPlainStringResult1;
    } else {
      const intl = intl5.intl;
      const obj14 = { count: attachments.length };
      formatToPlainStringResult = intl.formatToPlainString(intl5.t["89ihS8"], obj14);
      AttachmentIcon = AttachmentIcon2.AttachmentIcon;
    }
  } else {
    tmp6 = null;
    tmp7 = null;
    tmp8 = null;
  }
  let tmp33 = tmp6;
  if (attachments.length > 1) {
    tmp33 = tmp6;
    if (null != tmp6) {
      const size3 = { shape: ClipView.CutoutShape.RoundedRect, x: 28, y: 28, width: 32, height: 32, cornerRadius: 12 };
      const obj17 = { cutouts: items2, children: tmp6 };
      items2 = [size3];
      const obj16 = { style: tmp.attachmentPreviewOverflow, children: items3 };
      items3 = [hasOwnProperty(ClipViewDefault, obj17), ];
      const obj18 = { style: tmp.overflowCount, variant: "text-xs/semibold", color: "text-default", children: items4 };
      items4 = ["+", attachments.length - 1];
      items3[1] = metroRequire(Text_Text.Text, obj18);
      tmp33 = metroRequire(View, obj16);
    }
  }
  const obj20 = { style: tmp.forwardPreview, children: items5 };
  items5 = [, , , ];
  const obj21 = { style: tmp.quote };
  items5[0] = hasOwnProperty(View, obj21);
  let tmp36Result = null != checkpointDataFromMessage;
  const obj22 = { style: tmp.contentWrapper, children: items6 };
  if (tmp36Result) {
    const obj23 = { variant: "text-md/medium", children: tmp2Result2.getCheckpointLabel(checkpointDataFromMessage) };
    const Text = Text_Text.Text;
    tmp2Result2 = checkpoint_CheckpointMessageComponentUtils;
    tmp36Result = hasOwnProperty(Text, obj23);
  }
  items6 = [tmp36Result, , ];
  let tmp36Result5 = hasContent;
  if (tmp36Result5) {
    const obj24 = { message, contentMessage, attachmentCount: attachments.length };
    tmp36Result5 = hasOwnProperty(closure_9, obj24);
  }
  items6[1] = tmp36Result5;
  let tmp34Result = length > 0;
  if (tmp34Result) {
    let tmp36Result6 = null != tmp7;
    const obj25 = { style: tmp.attachmentRow, children: items7 };
    if (tmp36Result6) {
      let str2 = "custom";
      if (hasContent) {
        str2 = "sm";
      }
      const obj26 = { size: str2, style: !hasContent && tmp.largeIcon, color: "text-muted" };
      tmp36Result6 = hasOwnProperty(tmp7, obj26);
    }
    items7 = [tmp36Result6, ];
    let tmp36Result7 = null != tmp8;
    if (tmp36Result7) {
      let str3 = "text-md/medium";
      const Text2 = Text_Text.Text;
      if (hasContent) {
        str3 = "text-sm/medium";
      }
      const obj27 = { variant: str3, color: "text-muted", children: tmp8 };
      tmp36Result7 = hasOwnProperty(Text2, obj27);
    }
    items7[1] = tmp36Result7;
    tmp34Result = metroRequire(View, obj25);
  }
  items6[2] = tmp34Result;
  items5[1] = metroRequire(View, obj22);
  items5[2] = tmp33;
  let tmp36Result8 = null != checkpointDataFromMessage;
  if (tmp36Result8) {
    const obj28 = { style: tmp.attachmentPreview, children: hasOwnProperty(CheckpointForwardPreviewDefault, obj29) };
    obj29 = { checkpointData: checkpointDataFromMessage };
    tmp36Result8 = hasOwnProperty(View, obj28);
  }
  items5[3] = tmp36Result8;
  return metroRequire(View, obj20);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/forwarding/native/ForwardPreview.tsx");

export const ForwardPreview = tmp4;