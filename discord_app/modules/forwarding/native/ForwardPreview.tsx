// discord_app/modules/forwarding/native/ForwardPreview.tsx
import _mod12 from "../../../../_runtime/metro/00012__.js";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import utils_ImageUtilsDefault from "../../../utils/native/ImageUtils.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import checkpoint_CheckpointMessageComponentUtils from "../../checkpoint/CheckpointMessageComponentUtils.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import ImageIcon from "../../../design/components/Icon/native/redesign/generated/ImageIcon.tsx";
import RowGeneratorTypes from "../../messages/native/renderer/RowGeneratorTypes.tsx";
import CirclePlayIcon2 from "../../../design/components/Icon/native/redesign/generated/CirclePlayIcon.tsx";
import ClipView from "../../../design/components/Icon/native/ClipView.tsx";
import ChatItemDefault from "../../../components_native/chat/ChatItem.tsx";
import AttachmentIcon2 from "../../../design/components/Icon/native/redesign/generated/AttachmentIcon.tsx";
import ForwardPreviewUtils from "../ForwardPreviewUtils.tsx";
import ImagesIcon2 from "../../../design/components/Icon/native/redesign/generated/ImagesIcon.tsx";
import CheckpointForwardPreviewDefault from "../../checkpoint/native/components/CheckpointForwardPreview.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;
const ClipViewDefault = ClipView;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let c7 = 56;
const createStyles = fn(5092);
let obj2 = {
  forwardPreview: { flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "center" },
  quote: null,
  contentWrapper: null,
  attachmentPreview: null,
  attachmentPreviewVideo: null,
  videoThumbnail: null,
  playIcon: null,
  attachmentPreviewOverflow: null,
  overflowCount: null,
  attachmentRow: null,
  largeIcon: null,
};
let size = { width: 4, height: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: 2 };
obj2.quote = size;
obj2.contentWrapper = { flexDirection: "column", flex: 1, paddingVertical: 4, gap: 6 };
let size1 = { position: "relative", width: 56, height: 56, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj2.attachmentPreview = size1;
let obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "center" };
obj2.attachmentPreviewVideo = { backgroundColor: nativeDefault.colors.BLACK };
obj2.videoThumbnail = { position: "absolute", top: 0, left: 0, opacity: 0.6 };
obj2.playIcon = { position: "absolute", top: 0, left: 0, margin: 16, zIndex: 100 };
obj2.attachmentPreviewOverflow = { position: "relative" };
let size2 = {
  position: "absolute",
  bottom: 0,
  right: 0,
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  width: 24,
  height: 24,
  lineHeight: 24,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
};
obj2.overflowCount = size2;
obj2.attachmentRow = { flexDirection: "row", alignItems: "center", gap: 6 };
obj2.largeIcon = { width: 20, height: 20 };
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function MessagePreview(arg0) {
      const cResult = attachmentCount(576).c(13);
      ({ message, contentMessage, attachmentCount } = arg0);
      const tmp5 = useThemeDefault();
      if (attachmentCount > 0) {
        let TEXT_SUBTLE = tmp4(587).colors.TEXT_DEFAULT;
      } else {
        TEXT_SUBTLE = tmp4(587).colors.TEXT_SUBTLE;
      }
      if (cResult[0] === TEXT_SUBTLE) {
        if (cResult[1] === tmp5) {
          let tmp6 = cResult[2];
        }
        importDefault = tmp6;
        if (cResult[3] === attachmentCount) {
          if (cResult[4] === tmp6.seeMoreLabelColor) {
            let tmp8 = cResult[5];
          }
          const _Symbol = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const obj3 = new tmp4(7746)();
            obj3.setOptions({
              renderEmbeds: false,
              renderReactions: false,
              inlineEmbedMedia: false,
              inlineAttachmentMedia: false,
              animateEmoji: true,
              gifAutoPlay: false,
              timestampHourCycle: 0,
              renderCodedLinks: false,
              renderGiftCode: false,
              renderActivityInstanceEmbed: false,
              renderActivityInviteEmbed: false,
              renderComponents: false,
              renderThreadEmbeds: false,
              renderReplies: false,
              renderCommunicationDisabled: false,
              renderAttachments: false,
              renderExecutedCommands: false,
              renderPolls: false,
              renderSharedClientTheme: false,
              renderForumPostActions: false,
              ignoreMentioned: false,
              ignoreEmbedDescriptionCache: false,
              forceHideSimpleEmbedContent: false,
              enableSwipeActions: false,
              useAlternateEmbedColors: false,
            });
            cResult[6] = obj3;
            let tmp10 = obj3;
          } else {
            tmp10 = cResult[6];
          }
          if (cResult[7] === contentMessage.content) {
            if (cResult[8] === message) {
              let tmp15 = cResult[9];
            }
            if (cResult[10] === tmp8) {
              if (cResult[11] === tmp15) {
                let tmp17 = cResult[12];
              }
              return tmp17;
            }
            const obj2 = {
              pointerEvents: "none",
              horizontalOffset: 0,
              modifyRow: tmp8,
              message: tmp15,
              rowGenerator: tmp10,
            };
            const tmp19 = closure_5(tmp4(9373), obj2);
            cResult[10] = tmp8;
            cResult[11] = tmp15;
            cResult[12] = tmp19;
            tmp17 = tmp19;
          }
          const obj4 = { messageSnapshots: [], content: contentMessage.content };
          const mergeResult = message.merge(obj4);
          cResult[7] = contentMessage.content;
          cResult[8] = message;
          cResult[9] = mergeResult;
          tmp15 = mergeResult;
        }
        const fn = function v(message) {
          message.contextType = RowGeneratorTypes.MessageContextType.SEARCH;
          let num = 2;
          if (attachmentCount > 0) {
            num = 1;
          }
          message.truncation = {
            numberOfLines: num,
            expandable: false,
            seeMoreLabel: "...",
            seeMoreLabelColor: seeMoreLabelColor.seeMoreLabelColor,
          };
          message.message.edited = "";
        };
        cResult[3] = attachmentCount;
        cResult[4] = tmp6.seeMoreLabelColor;
        cResult[5] = fn;
        tmp8 = fn;
      }
      const obj = attachmentCount(576);
      const tmp7 = attachmentCount(5092).createNativeStyleProperties({ seeMoreLabelColor: TEXT_SUBTLE })(tmp5);
      cResult[0] = TEXT_SUBTLE;
      cResult[1] = tmp5;
      cResult[2] = tmp7;
      tmp6 = tmp7;
      const tmpResult = attachmentCount(5092);
    }
  : function MessagePreview(content) {
      ({ message, attachmentCount } = content);
      importDefault = undefined;
      if (attachmentCount > 0) {
        let TEXT_SUBTLE = tmp(587).colors.TEXT_DEFAULT;
      } else {
        TEXT_SUBTLE = tmp(587).colors.TEXT_SUBTLE;
      }
      const tmp3 = useThemeDefault();
      const tmp4 = attachmentCount(5092).createNativeStyleProperties({ seeMoreLabelColor: TEXT_SUBTLE })(tmp3);
      importDefault = tmp4;
      const items = [tmp4.seeMoreLabelColor, attachmentCount];
      const callback = noop.useCallback((message) => {
        message.contextType = RowGeneratorTypes.MessageContextType.SEARCH;
        let num = 2;
        if (attachmentCount > 0) {
          num = 1;
        }
        message.truncation = {
          numberOfLines: num,
          expandable: false,
          seeMoreLabel: "...",
          seeMoreLabelColor: closure_1.seeMoreLabelColor,
        };
        message.message.edited = "";
      }, items);
      const memo = noop.useMemo(() => {
        const obj = new closure_1(dependencyMap[9])();
        obj.setOptions({
          renderEmbeds: false,
          renderReactions: false,
          inlineEmbedMedia: false,
          inlineAttachmentMedia: false,
          animateEmoji: true,
          gifAutoPlay: false,
          timestampHourCycle: 0,
          renderCodedLinks: false,
          renderGiftCode: false,
          renderActivityInstanceEmbed: false,
          renderActivityInviteEmbed: false,
          renderComponents: false,
          renderThreadEmbeds: false,
          renderReplies: false,
          renderCommunicationDisabled: false,
          renderAttachments: false,
          renderExecutedCommands: false,
          renderPolls: false,
          renderSharedClientTheme: false,
          renderForumPostActions: false,
          ignoreMentioned: false,
          ignoreEmbedDescriptionCache: false,
          forceHideSimpleEmbedContent: false,
          enableSwipeActions: false,
          useAlternateEmbedColors: false,
        });
        return obj;
      }, []);
      const obj2 = {
        pointerEvents: "none",
        horizontalOffset: 0,
        modifyRow: callback,
        message: null,
        rowGenerator: null,
      };
      let obj = attachmentCount(5092);
      const obj3 = { messageSnapshots: [], content: content.contentMessage.content };
      obj2.message = message.merge(obj3);
      obj2.rowGenerator = memo;
      return closure_5(ChatItemDefault, obj2);
    };
ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.BLACK };
size = fn(2);
const result = size.fileFinishedImporting("modules/forwarding/native/ForwardPreview.tsx");

export const ForwardPreview = ReactCompilerGating.isReactCompilerEnabled()
  ? function ForwardPreview(arg0) {
      const cResult = c.c(106);
      ({ message, channel, forwardOptions } = arg0);
      const tmp4 = closure_8();
      if (cResult[0] === channel) {
        if (cResult[1] === forwardOptions) {
          if (cResult[2] === message) {
            let tmp5 = cResult[3];
          }
          const forwardPreviewContent = ForwardPreviewUtils.useForwardPreviewContent(tmp5);
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
                                if (cResult[15] === tmp4.videoThumbnail) {
                                  let tmp7 = cResult[16];
                                  let tmp8 = cResult[17];
                                  let tmp9 = cResult[18];
                                  let tmp10 = cResult[19];
                                  let tmp11 = cResult[20];
                                  let tmp12 = cResult[21];
                                  let tmp13 = cResult[22];
                                  let tmp14 = cResult[23];
                                  let tmp15 = cResult[24];
                                  let tmp16 = cResult[25];
                                  let tmp17 = cResult[26];
                                }
                                if (cResult[78] === tmp10) {
                                  if (cResult[79] === contentMessage) {
                                    if (cResult[80] === hasContent) {
                                      if (cResult[81] === message) {
                                        let tmp107 = cResult[82];
                                      }
                                      if (cResult[83] === tmp7) {
                                        if (cResult[84] === tmp10) {
                                          if (cResult[85] === tmp11) {
                                            if (cResult[86] === hasContent) {
                                              if (cResult[87] === tmp4.attachmentRow) {
                                                if (cResult[88] === tmp4.largeIcon) {
                                                  let tmp111 = cResult[89];
                                                }
                                                if (cResult[90] === tmp8) {
                                                  if (cResult[91] === tmp14) {
                                                    if (cResult[92] === tmp15) {
                                                      if (cResult[93] === tmp107) {
                                                        if (cResult[94] === tmp111) {
                                                          let tmp120 = cResult[95];
                                                        }
                                                        if (cResult[96] === tmp13) {
                                                          if (cResult[97] === tmp4.attachmentPreview) {
                                                            let tmp123 = cResult[98];
                                                          }
                                                          if (cResult[99] === tmp9) {
                                                            if (cResult[100] === tmp12) {
                                                              if (cResult[101] === tmp16) {
                                                                if (cResult[102] === tmp17) {
                                                                  if (cResult[103] === tmp120) {
                                                                    if (cResult[104] === tmp123) {
                                                                      let tmp129 = cResult[105];
                                                                    }
                                                                    return tmp129;
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                          const obj2 = { style: tmp16, children: null };
                                                          const items = [tmp17, tmp120, tmp12, tmp123];
                                                          obj2.children = items;
                                                          const tmp131 = timestampProducer(tmp9, obj2);
                                                          cResult[99] = tmp9;
                                                          cResult[100] = tmp12;
                                                          cResult[101] = tmp16;
                                                          cResult[102] = tmp17;
                                                          cResult[103] = tmp120;
                                                          cResult[104] = tmp123;
                                                          cResult[105] = tmp131;
                                                          tmp129 = tmp131;
                                                        }
                                                        let tmp125 = null != tmp13;
                                                        if (tmp125) {
                                                          const obj3 = {
                                                            style: tmp4.attachmentPreview,
                                                            children: null,
                                                          };
                                                          const obj4 = { checkpointData: tmp13 };
                                                          obj3.children = hasOwnProperty(
                                                            CheckpointForwardPreviewDefault,
                                                            obj4,
                                                          );
                                                          tmp125 = hasOwnProperty(View, obj3);
                                                        }
                                                        cResult[96] = tmp13;
                                                        cResult[97] = tmp4.attachmentPreview;
                                                        cResult[98] = tmp125;
                                                        tmp123 = tmp125;
                                                      }
                                                    }
                                                  }
                                                }
                                                const obj5 = { style: tmp14, children: null };
                                                const items1 = [tmp15, tmp107, tmp111];
                                                obj5.children = items1;
                                                const tmp122 = timestampProducer(tmp8, obj5);
                                                cResult[90] = tmp8;
                                                cResult[91] = tmp14;
                                                cResult[92] = tmp15;
                                                cResult[93] = tmp107;
                                                cResult[94] = tmp111;
                                                cResult[95] = tmp122;
                                                tmp120 = tmp122;
                                              }
                                            }
                                          }
                                        }
                                      }
                                      let tmp113Result = tmp10 > 0;
                                      if (tmp113Result) {
                                        const obj6 = { style: tmp4.attachmentRow, children: null };
                                        let tmp117Result = null != tmp7;
                                        if (tmp117Result) {
                                          let str3 = "custom";
                                          if (hasContent) {
                                            str3 = "sm";
                                          }
                                          const obj8 = { size: str3, style: null, color: "text-muted" };
                                          let largeIcon = !hasContent;
                                          if (!hasContent) {
                                            largeIcon = tmp4.largeIcon;
                                          }
                                          obj8.style = largeIcon;
                                          tmp117Result = hasOwnProperty(tmp7, obj8);
                                        }
                                        const items2 = [tmp117Result];
                                        let tmp119Result = null != tmp11;
                                        if (tmp119Result) {
                                          let str4 = "text-md/medium";
                                          if (hasContent) {
                                            str4 = "text-sm/medium";
                                          }
                                          const obj10 = { variant: str4, color: "text-muted", children: tmp11 };
                                          tmp119Result = hasOwnProperty(Text_Text.Text, obj10);
                                        }
                                        items2[1] = tmp119Result;
                                        obj6.children = items2;
                                        tmp113Result = timestampProducer(View, obj6);
                                      }
                                      cResult[83] = tmp7;
                                      cResult[84] = tmp10;
                                      cResult[85] = tmp11;
                                      cResult[86] = hasContent;
                                      cResult[87] = tmp4.attachmentRow;
                                      cResult[88] = tmp4.largeIcon;
                                      cResult[89] = tmp113Result;
                                      tmp111 = tmp113Result;
                                    }
                                  }
                                }
                                let tmp108 = hasContent;
                                if (hasContent) {
                                  const obj11 = { message, contentMessage, attachmentCount: tmp10 };
                                  tmp108 = hasOwnProperty(closure_9, obj11);
                                }
                                cResult[78] = tmp10;
                                cResult[79] = contentMessage;
                                cResult[80] = hasContent;
                                cResult[81] = message;
                                cResult[82] = tmp108;
                                tmp107 = tmp108;
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
          const tmpResult = ForwardPreviewUtils;
          const checkpointDataFromMessage =
            checkpoint_CheckpointMessageComponentUtils.getCheckpointDataFromMessage(contentMessage);
          if (attachments.length > 0) {
            if (cResult[27] === length) {
              if (cResult[28] === attachments) {
                if (cResult[29] > 0) {
                  if (length === tmp22) {
                    if (cResult[35] === tmp4.attachmentPreview) {
                      if (cResult[36] === tmp4.attachmentPreviewVideo) {
                        let tmp62 = cResult[37];
                      }
                      if (cResult[38] !== attachments[0].proxy_url) {
                        const obj17 = utils_ImageUtilsDefault;
                        const mobileOptimizedSrc = obj17.getMobileOptimizedSrc(
                          attachments[0].proxy_url,
                          v56,
                          v56,
                          "png",
                        );
                        cResult[38] = attachments[0].proxy_url;
                        cResult[39] = mobileOptimizedSrc;
                        let tmp63 = mobileOptimizedSrc;
                      } else {
                        tmp63 = cResult[39];
                      }
                      if (cResult[40] !== tmp63) {
                        const obj12 = { uri: tmp63 };
                        cResult[40] = tmp63;
                        cResult[41] = obj12;
                        let tmp70 = obj12;
                      } else {
                        tmp70 = cResult[41];
                      }
                      if (cResult[42] === tmp4.videoThumbnail) {
                        if (cResult[43] === tmp70) {
                          let tmp71 = cResult[44];
                        }
                        if (cResult[45] !== tmp4.playIcon) {
                          const obj14 = { style: tmp4.playIcon, size: "md", color: "white" };
                          const tmp78 = hasOwnProperty(CirclePlayIcon2.CirclePlayIcon, obj14);
                          cResult[45] = tmp4.playIcon;
                          cResult[46] = tmp78;
                          let tmp76 = tmp78;
                        } else {
                          tmp76 = cResult[46];
                        }
                        if (cResult[47] === tmp71) {
                          if (cResult[48] === tmp76) {
                          }
                        }
                        const obj15 = { style: tmp62, children: null };
                        const items3 = [tmp71, tmp76];
                        obj15.children = items3;
                        const tmp82 = timestampProducer(View, obj15);
                        cResult[47] = tmp71;
                        cResult[48] = tmp76;
                        cResult[49] = tmp62;
                        cResult[50] = tmp82;
                      }
                      const size = { style: tmp4.videoThumbnail, source: tmp70, width: v56, height: v56 };
                      const tmp75 = hasOwnProperty(FastImageDefault, size);
                      cResult[42] = tmp4.videoThumbnail;
                      cResult[43] = tmp70;
                      cResult[44] = tmp75;
                      tmp71 = tmp75;
                    }
                    const items4 = [,];
                    ({ attachmentPreview: arr[0], attachmentPreviewVideo: arr[1] } = tmp4);
                    cResult[35] = tmp4.attachmentPreview;
                    cResult[36] = tmp4.attachmentPreviewVideo;
                    cResult[37] = items4;
                    tmp62 = items4;
                  }
                }
                if (length > 0) {
                  if (cResult[51] !== attachments[0].proxy_url) {
                    const mobileOptimizedSrc1 = utils_ImageUtilsDefault.getMobileOptimizedSrc(
                      attachments[0].proxy_url,
                      v56,
                      v56,
                    );
                    cResult[51] = attachments[0].proxy_url;
                    cResult[52] = mobileOptimizedSrc1;
                    let tmp49 = mobileOptimizedSrc1;
                  } else {
                    tmp49 = cResult[52];
                  }
                  if (cResult[53] !== tmp49) {
                    const size1 = { source: null, width: null, height: null };
                    const obj16 = { uri: tmp49 };
                    size1.source = obj16;
                    size1.width = v56;
                    size1.height = v56;
                    const tmp57 = hasOwnProperty(FastImageDefault, size1);
                    cResult[53] = tmp49;
                    cResult[54] = tmp57;
                    let tmp53 = tmp57;
                  } else {
                    tmp53 = cResult[54];
                  }
                  if (cResult[55] === tmp4.attachmentPreview) {
                    if (cResult[56] === tmp53) {
                      let tmp58 = cResult[57];
                    }
                    let tmp19 = tmp58;
                    let tmp20 = tmp23;
                    let tmp21 = tmp24;
                  }
                  const obj18 = { style: tmp4.attachmentPreview, children: tmp53 };
                  const tmp61 = hasOwnProperty(View, obj18);
                  cResult[55] = tmp4.attachmentPreview;
                  cResult[56] = tmp53;
                  cResult[57] = tmp61;
                  tmp58 = tmp61;
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
                    if (cResult[58] !== embeds[0].thumbnail.proxyURL) {
                      const mobileOptimizedSrc2 = utils_ImageUtilsDefault.getMobileOptimizedSrc(
                        embeds[0].thumbnail.proxyURL,
                        v56,
                        v56,
                      );
                      cResult[58] = embeds[0].thumbnail.proxyURL;
                      cResult[59] = mobileOptimizedSrc2;
                      let tmp36 = mobileOptimizedSrc2;
                    } else {
                      tmp36 = cResult[59];
                    }
                    if (cResult[60] !== tmp36) {
                      const size2 = { source: null, width: null, height: null };
                      const obj19 = { uri: tmp36 };
                      size2.source = obj19;
                      size2.width = v56;
                      size2.height = v56;
                      const tmp44 = hasOwnProperty(FastImageDefault, size2);
                      cResult[60] = tmp36;
                      cResult[61] = tmp44;
                      let tmp40 = tmp44;
                    } else {
                      tmp40 = cResult[61];
                    }
                    if (cResult[62] === tmp4.attachmentPreview) {
                      if (cResult[63] === tmp40) {
                        let tmp45 = cResult[64];
                      }
                      tmp19 = tmp45;
                      tmp20 = tmp23;
                      tmp21 = tmp24;
                    }
                    const obj20 = { style: tmp4.attachmentPreview, children: tmp40 };
                    const tmp48 = hasOwnProperty(View, obj20);
                    cResult[62] = tmp4.attachmentPreview;
                    cResult[63] = tmp40;
                    cResult[64] = tmp48;
                    tmp45 = tmp48;
                  }
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
            const countByResult = _mod12.countBy(attachments, G);
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
              cResult[27] = length;
              cResult[28] = attachments;
              cResult[29] = VIDEO;
              cResult[30] = formatToPlainStringResult1;
              cResult[31] = CirclePlayIcon;
              const intl = util.intl;
              const obj21 = { count: IMAGE };
              if (1 === IMAGE) {
                class G {
                  constructor(arg0) {
                    obj = closure_1_0(closure_1_2[13]);
                    return obj.getMosaicMediaTypeForAttachment(arg0, true);
                  }
                }
              } else {
                class G {
                  constructor(arg0) {
                    obj = closure_1_0(closure_1_2[13]);
                    return obj.getMosaicMediaTypeForAttachment(arg0, true);
                  }
                }
              }
              CirclePlayIcon = tmp31;
              formatToPlainStringResult1 = intl.formatToPlainString(util.t.h4pFfU, obj21);
              const formatToPlainStringResult = intl.formatToPlainString(util.t.h4pFfU, obj21);
            }
            if (VIDEO > 0) {
              class G {
                constructor(arg0) {
                  obj = closure_1_0(closure_1_2[13]);
                  return obj.getMosaicMediaTypeForAttachment(arg0, true);
                }
              }
              const obj22 = { count: VIDEO };
              formatToPlainStringResult1 = obj7.formatToPlainString(util.t.SJ6pPX, obj22);
              CirclePlayIcon = CirclePlayIcon2.CirclePlayIcon;
            } else {
              class G {
                constructor(arg0) {
                  obj = closure_1_0(closure_1_2[13]);
                  return obj.getMosaicMediaTypeForAttachment(arg0, true);
                }
              }
            }
            const tmpResult5 = _mod12;
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
          let tmp86 = tmp19;
          if (attachments.length > 1) {
            class G {
              constructor(arg0) {
                obj = closure_1_0(closure_1_2[13]);
                return obj.getMosaicMediaTypeForAttachment(arg0, true);
              }
            }
            tmp86 = tmp19;
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
                tmp88[0] = ClipView.CutoutShape.RoundedRect;
                cResult[65] = tmp88;
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
                tmp90[0] = tmp88;
                cResult[66] = tmp90;
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
                const obj23 = { cutouts: tmp90, children: tmp19 };
                const tmp93 = hasOwnProperty(ClipViewDefault, obj23);
                cResult[67] = tmp19;
                cResult[68] = tmp93;
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
                const obj24 = { style: tmp4.attachmentPreviewOverflow, children: null };
                const items5 = [tmp91, tmp95];
                obj24.children = items5;
                const tmp101 = timestampProducer(View, obj24);
                cResult[72] = tmp4.attachmentPreviewOverflow;
                cResult[73] = tmp95;
                cResult[74] = tmp91;
                cResult[75] = tmp101;
              }
              const obj25 = {
                style: tmp4.overflowCount,
                variant: "text-xs/semibold",
                color: "text-default",
                children: null,
              };
              const items6 = ["+", diff];
              obj25.children = items6;
              const tmp97 = timestampProducer(Text_Text.Text, obj25);
              cResult[69] = tmp4.overflowCount;
              cResult[70] = diff;
              cResult[71] = tmp97;
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
            const obj26 = { style: tmp4.quote };
            const tmp104 = hasOwnProperty(View, obj26);
            cResult[76] = tmp4.quote;
            cResult[77] = tmp104;
          } else {
            class G {
              constructor(arg0) {
                obj = closure_1_0(closure_1_2[13]);
                return obj.getMosaicMediaTypeForAttachment(arg0, true);
              }
            }
          }
          let tmp106 = null != checkpointDataFromMessage;
          if (tmp106) {
            class G {
              constructor(arg0) {
                obj = closure_1_0(closure_1_2[13]);
                return obj.getMosaicMediaTypeForAttachment(arg0, true);
              }
            }
            const obj27 = {
              variant: "text-md/medium",
              children: checkpoint_CheckpointMessageComponentUtils.getCheckpointLabel(checkpointDataFromMessage),
            };
            tmp106 = hasOwnProperty(Text_Text.Text, obj27);
            const tmpResult6 = checkpoint_CheckpointMessageComponentUtils;
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
          cResult[21] = tmp86;
          cResult[22] = checkpointDataFromMessage;
          cResult[23] = tmp4.contentWrapper;
          cResult[24] = tmp106;
          cResult[25] = forwardPreview;
          cResult[26] = tmp103;
          tmp15 = tmp106;
          tmp17 = tmp103;
          tmp16 = forwardPreview;
          tmp14 = contentWrapper;
          tmp13 = checkpointDataFromMessage;
          tmp12 = tmp86;
          tmp11 = tmp20;
          tmp10 = length;
          tmp9 = View;
          tmp8 = View;
          tmp7 = tmp21;
          const tmpResult4 = checkpoint_CheckpointMessageComponentUtils;
        }
      }
      const obj28 = { message, channel, forwardOptions };
      cResult[0] = channel;
      cResult[1] = forwardOptions;
      cResult[2] = message;
      cResult[3] = obj28;
      tmp5 = obj28;
    }
  : function ForwardPreview(message) {
      message = message.message;
      ({ channel, forwardOptions } = message);
      const tmp = closure_8();
      const forwardPreviewContent = ForwardPreviewUtils.useForwardPreviewContent({ message, channel, forwardOptions });
      ({ attachments, embeds, hasContent, contentMessage } = forwardPreviewContent);
      const checkpointDataFromMessage =
        checkpoint_CheckpointMessageComponentUtils.getCheckpointDataFromMessage(contentMessage);
      if (attachments.length > 0) {
        const countByResult = _mod12.countBy(attachments, (proxy_url) =>
          require("MosaicMediaType").getMosaicMediaTypeForAttachment(proxy_url, true),
        );
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
            const intl4 = util.intl;
            const obj3 = { image_count: num, video_count: num2 };
            let formatToPlainStringResult = intl4.formatToPlainString(util.t.Lr0Top, obj3);
            let AttachmentIcon = ImagesIcon2.ImagesIcon;
          }
          if (num2 > 0) {
            if (length === num2) {
              const obj4 = { style: null, children: null };
              const items = [,];
              ({ attachmentPreview: arr[0], attachmentPreviewVideo: arr[1] } = tmp);
              obj4.style = items;
              const size = { style: tmp.videoThumbnail, source: null, width: null, height: null };
              const obj5 = { uri: null };
              const obj19 = utils_ImageUtilsDefault;
              obj5.uri = obj19.getMobileOptimizedSrc(attachments[0].proxy_url, v56, v56, "png");
              size.source = obj5;
              size.width = v56;
              size.height = v56;
              const items1 = [hasOwnProperty(FastImageDefault, size)];
              const obj6 = { style: tmp.playIcon, size: "md", color: "white" };
              items1[1] = hasOwnProperty(CirclePlayIcon2.CirclePlayIcon, obj6);
              obj4.children = items1;
              let tmp6 = timestampProducer(View, obj4);
              let tmp7 = AttachmentIcon;
              let tmp8 = formatToPlainStringResult;
            }
          }
          if (length > 0) {
            const obj7 = { style: tmp.attachmentPreview, children: null };
            const size1 = { source: null, width: null, height: null };
            const obj8 = { uri: null };
            const tmp22 = FastImageDefault;
            obj8.uri = utils_ImageUtilsDefault.getMobileOptimizedSrc(attachments[0].proxy_url, v56, v56);
            size1.source = obj8;
            size1.width = v56;
            size1.height = v56;
            obj7.children = hasOwnProperty(tmp22, size1);
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
              const obj9 = { style: tmp.attachmentPreview, children: null };
              const size2 = { source: null, width: null, height: null };
              const obj10 = { uri: null };
              const tmp17 = FastImageDefault;
              obj10.uri = utils_ImageUtilsDefault.getMobileOptimizedSrc(embeds[0].thumbnail.proxyURL, v56, v56);
              size2.source = obj10;
              size2.width = v56;
              size2.height = v56;
              obj9.children = hasOwnProperty(tmp17, size2);
              tmp6 = hasOwnProperty(View, obj9);
              tmp7 = AttachmentIcon;
              tmp8 = formatToPlainStringResult;
            }
          }
        }
        if (num2 > 0) {
          const intl3 = util.intl;
          const obj12 = { count: num2 };
          formatToPlainStringResult = intl3.formatToPlainString(util.t.SJ6pPX, obj12);
          AttachmentIcon = CirclePlayIcon2.CirclePlayIcon;
        } else if (num > 0) {
          const intl2 = util.intl;
          const obj13 = { count: num };
          if (1 === num) {
            let ImagesIcon = ImageIcon.ImageIcon;
          } else {
            ImagesIcon = ImagesIcon2.ImagesIcon;
          }
          AttachmentIcon = ImagesIcon;
          formatToPlainStringResult = intl2.formatToPlainString(util.t.h4pFfU, obj13);
          const formatToPlainStringResult1 = intl2.formatToPlainString(util.t.h4pFfU, obj13);
        } else {
          const intl = util.intl;
          const obj14 = { count: length };
          formatToPlainStringResult = intl.formatToPlainString(util.t["89ihS8"], obj14);
          AttachmentIcon = AttachmentIcon2.AttachmentIcon;
        }
        const tmp2Result = _mod12;
      } else {
        tmp6 = null;
        tmp7 = null;
        tmp8 = null;
      }
      let tmp33 = tmp6;
      if (attachments.length > 1) {
        tmp33 = tmp6;
        if (null != tmp6) {
          const size3 = {
            shape: ClipView.CutoutShape.RoundedRect,
            x: 28,
            y: 28,
            width: 32,
            height: 32,
            cornerRadius: 12,
          };
          const obj16 = { style: tmp.attachmentPreviewOverflow, children: null };
          const obj17 = { cutouts: null, children: null };
          const items2 = [size3];
          obj17.cutouts = items2;
          obj17.children = tmp6;
          const items3 = [hasOwnProperty(ClipViewDefault, obj17)];
          const obj18 = {
            style: tmp.overflowCount,
            variant: "text-xs/semibold",
            color: "text-default",
            children: null,
          };
          const items4 = ["+", length - 1];
          obj18.children = items4;
          items3[1] = timestampProducer(Text_Text.Text, obj18);
          obj16.children = items3;
          tmp33 = timestampProducer(View, obj16);
        }
      }
      const obj20 = { style: tmp.forwardPreview, children: null };
      const items5 = [hasOwnProperty(View, { style: tmp.quote }), , ,];
      const obj22 = { style: tmp.contentWrapper, children: null };
      let tmp36Result = null != checkpointDataFromMessage;
      if (tmp36Result) {
        const obj23 = {
          variant: "text-md/medium",
          children: checkpoint_CheckpointMessageComponentUtils.getCheckpointLabel(checkpointDataFromMessage),
        };
        tmp36Result = hasOwnProperty(Text_Text.Text, obj23);
        const tmp2Result2 = checkpoint_CheckpointMessageComponentUtils;
      }
      const items6 = [tmp36Result, ,];
      let tmp36Result5 = hasContent;
      if (hasContent) {
        const obj24 = { message, contentMessage, attachmentCount: length };
        tmp36Result5 = hasOwnProperty(closure_9, obj24);
      }
      items6[1] = tmp36Result5;
      let tmp34Result = length > 0;
      if (tmp34Result) {
        const obj25 = { style: tmp.attachmentRow, children: null };
        let tmp36Result6 = null != tmp7;
        if (tmp36Result6) {
          let str2 = "custom";
          if (hasContent) {
            str2 = "sm";
          }
          const obj26 = { size: str2, style: null, color: "text-muted" };
          let largeIcon = !hasContent;
          if (!hasContent) {
            largeIcon = tmp.largeIcon;
          }
          obj26.style = largeIcon;
          tmp36Result6 = hasOwnProperty(tmp7, obj26);
        }
        const items7 = [tmp36Result6];
        let tmp36Result7 = null != tmp8;
        if (tmp36Result7) {
          let str3 = "text-md/medium";
          if (hasContent) {
            str3 = "text-sm/medium";
          }
          const obj27 = { variant: str3, color: "text-muted", children: tmp8 };
          tmp36Result7 = hasOwnProperty(Text_Text.Text, obj27);
        }
        items7[1] = tmp36Result7;
        obj25.children = items7;
        tmp34Result = timestampProducer(View, obj25);
      }
      items6[2] = tmp34Result;
      obj22.children = items6;
      items5[1] = timestampProducer(View, obj22);
      items5[2] = tmp33;
      let tmp36Result8 = null != checkpointDataFromMessage;
      if (tmp36Result8) {
        const obj28 = { style: tmp.attachmentPreview, children: null };
        const obj29 = { checkpointData: checkpointDataFromMessage };
        obj28.children = hasOwnProperty(CheckpointForwardPreviewDefault, obj29);
        tmp36Result8 = hasOwnProperty(View, obj28);
      }
      items5[3] = tmp36Result8;
      obj20.children = items5;
      return timestampProducer(View, obj20);
    };
