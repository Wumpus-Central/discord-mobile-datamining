// === Module 11466: ExplicitMediaFalsePositiveActionSheet ===

// Module 11466 (ExplicitMediaFalsePositiveActionSheet)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import ToastUtils from "ToastUtils" /* 4808 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import FastImageDefault from "FastImage" /* 6156 */;
import utils_UploadUtils from "utils/UploadUtils" /* 7768 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 8242 */;
import _modDef8426 from "module_8426" /* 8426 */;
import ShieldIcon from "ShieldIcon" /* 10408 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function ExplicitMediaFalsePositivePreviewEmbed(embed) {
  const cResult = c.c(2);
  embed = embed.embed;
  if (undefined !== embed.video) {
    if ("gifv" !== embed.type) {
      let url = embed.video.url;
    }
    if (null == url) {
      return null;
    } else if (cResult[0] !== url) {
      const obj2 = { url };
      const tmp6 = timestampProducer(closure_10, obj2);
      cResult[0] = url;
      cResult[1] = tmp6;
    }
  }
  const thumbnail = embed.thumbnail;
  if (thumbnail != null) {
    url = thumbnail.url;
  }
}) : (function ExplicitMediaFalsePositivePreviewEmbed(embed) {
  embed = embed.embed;
  if (undefined !== embed.video) {
    if ("gifv" !== embed.type) {
      let url = embed.video.url;
    }
    let tmp = null;
    if (null != url) {
      const obj = { url };
      tmp = timestampProducer(closure_10, obj);
    }
    return tmp;
  }
  const thumbnail = embed.thumbnail;
  if (thumbnail != null) {
    url = thumbnail.url;
  }
});
ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function ExplicitMediaFalsePositivePreviewAttachment(attachment) {
  const cResult = c.c(2);
  const url = attachment.attachment.url;
  if (null == url) {
    return null;
  } else if (cResult[0] !== url) {
    const obj2 = { url };
    const tmp5 = timestampProducer(closure_10, obj2);
    cResult[0] = url;
    cResult[1] = tmp5;
  }
}) : (function ExplicitMediaFalsePositivePreviewAttachment(attachment) {
  const url = attachment.attachment.url;
  let tmp = null;
  if (null != url) {
    const obj = { url };
    tmp = timestampProducer(closure_10, obj);
  }
  return tmp;
});
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function ExplicitMediaFalsePositivePreview(url) {
  let obj = dependencyMap;
  const cResult = c.c(13);
  url = url.url;
  let media = closure_11();
  if (cResult[0] !== url) {
    const isVideoResult = utils_UploadUtils.isVideo(url);
    cResult[0] = url;
    cResult[1] = isVideoResult;
    let image = isVideoResult;
    const tmpResult = utils_UploadUtils;
  } else {
    image = cResult[1];
  }
  if (cResult[2] === media.elevationShadow) {
    if (cResult[3] === media.mediaContainer) {
      let tmp4 = cResult[4];
    }
    if (cResult[5] === image) {
      if (cResult[6] === media.image) {
        if (cResult[7] === media.media) {
          if (cResult[8] === url) {
            if (cResult[10] === tmp4) {
              if (cResult[11] === tmp5) {
                let tmp10 = cResult[12];
              }
              return tmp10;
            }
            const obj3 = { style: tmp4, children: cResult[9] };
            const tmp13 = timestampProducer(React4, obj3);
            cResult[10] = tmp4;
            cResult[11] = cResult[9];
            cResult[12] = tmp13;
            tmp10 = tmp13;
          }
        }
      }
    }
    let tmp7 = importDefault;
    if (image) {
      tmp7 = tmp7(8426);
      obj = { volume: 0, resizeMode: "cover", repeat: true, style: media.media, source: null, controls: true, paused: true };
      const obj4 = { uri: url };
      obj.source = obj4;
      let tmp6Result = timestampProducer(tmp7, obj);
    } else {
      const obj5 = { style: null, source: null };
      const items = [, ];
      ({ media: arr2[0], image: arr2[1] } = media);
      obj5.style = items;
      const obj6 = { uri: url };
      obj5.source = obj6;
      tmp6Result = timestampProducer(tmp7(6156), obj5);
    }
    cResult[5] = image;
    image = media.image;
    cResult[6] = image;
    media = media.media;
    cResult[7] = media;
    cResult[8] = url;
    cResult[9] = tmp6Result;
  }
  const items1 = [, ];
  ({ mediaContainer: arr[0], elevationShadow: arr[1] } = media);
  cResult[2] = media.elevationShadow;
  cResult[3] = media.mediaContainer;
  cResult[4] = items1;
  tmp4 = items1;
}) : (function ExplicitMediaFalsePositivePreview(url) {
  url = url.url;
  const tmp = closure_11();
  const obj2 = { style: null, children: null };
  const items = [, ];
  ({ mediaContainer: arr[0], elevationShadow: arr[1] } = tmp);
  obj2.style = items;
  if (obj.isVideo(url)) {
    const obj3 = { volume: 0, resizeMode: "cover", repeat: true, style: tmp.media, source: null, controls: true, paused: true };
    const obj4 = { uri: url };
    obj3.source = obj4;
    let tmp3Result = timestampProducer(_modDef8426, obj3);
  } else {
    const obj5 = { style: null, source: null };
    const items1 = [, ];
    ({ media: arr2[0], image: arr2[1] } = tmp);
    obj5.style = items1;
    const obj6 = { uri: url };
    obj5.source = obj6;
    tmp3Result = timestampProducer(FastImageDefault, obj5);
  }
  obj2.children = tmp3Result;
  return timestampProducer(React4, obj2);
});
const createStyles = fn(5092);
let obj5 = { content: { padding: nativeDefault.space.PX_16 }, contentContainer: { justifyContent: "center", textAlign: "center", alignItems: "center" }, heading: null, mediaContainer: null, elevationShadow: null, image: null, media: null, footer: null };
let obj6 = { padding: nativeDefault.space.PX_16 };
obj5.heading = { marginBottom: nativeDefault.space.PX_8 };
let obj7 = { marginBottom: nativeDefault.space.PX_8 };
obj5.mediaContainer = { width: "100%", padding: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.xs, marginTop: nativeDefault.space.PX_8, aspectRatio: "4 / 3" };
const native = fn(1200);
obj5.elevationShadow = native.generateBoxShadowStyle(fn(1200).FOUR_DP_ELEVATION_SHADOW_PARAMS);
obj5.image = { resizeMode: "contain" };
let obj8 = { width: "100%", padding: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.xs, marginTop: nativeDefault.space.PX_8, aspectRatio: "4 / 3" };
obj5.media = { flex: 1, borderRadius: nativeDefault.radii.xs };
let obj10 = { flex: 1, borderRadius: nativeDefault.radii.xs };
obj5.footer = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT, paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
let closure_11 = createStyles.createStyles(obj5);
ReactCompilerGating = fn(558);
let obj11 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT, paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaFalsePositiveActionSheet.tsx");

export const handleSuccess = function handleSuccess(arg0) {
  ActionSheetActionCreatorsDefault.hideActionSheet(arg0);
  const obj3 = { text: null, icon: null, iconColor: "text-brand" };
  const intl = util.intl;
  obj3.text = intl.string(util.t.gFsTKu);
  obj3.icon = ShieldIcon.ShieldIcon;
  ToastActionCreatorsDefault.open("explicit_media_report_false_positive_success", obj3);
};
export const handleError = function handleError() {
  const intl = util.intl;
  ToastUtils.presentError(intl.string(util.t.R0RpRX));
};
export const ExplicitMediaFalsePositiveActionSheet = ReactCompilerGating.isReactCompilerEnabled() ? (function ExplicitMediaFalsePositiveActionSheet(channelId) {
  const cResult = channelId(onConfirmPress[4]).c(42);
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  ({ isReportFalsePositiveLoading, attachmentPreview, embedPreview, onConfirmPress } = channelId);
  const analyticsContext = channelId.analyticsContext;
  const tmp4 = closure_11();
  if (cResult[0] === analyticsContext) {
    if (cResult[1] === channelId) {
      if (cResult[2] === messageId) {
        let tmp5 = cResult[3];
      }
      if (cResult[4] === analyticsContext) {
        if (cResult[5] === channelId) {
          if (cResult[6] === messageId) {
            if (cResult[7] === onConfirmPress) {
              let tmp6 = cResult[8];
            }
            if (cResult[9] === analyticsContext) {
              if (cResult[10] === channelId) {
                if (cResult[11] === messageId) {
                  let tmp7 = cResult[12];
                  let tmp8 = cResult[13];
                }
                const effect = analyticsContext.useEffect(tmp7, tmp8);
                const _Symbol = Symbol;
                ({ content, contentContainer, heading } = tmp4);
                if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl = tmp(onConfirmPress[13]).intl;
                  const stringResult = intl.string(tmp(onConfirmPress[13]).t.TPpVkI);
                  cResult[14] = stringResult;
                  let tmp12 = stringResult;
                } else {
                  tmp12 = cResult[14];
                }
                if (cResult[15] !== tmp4.heading) {
                  let obj2 = { style: heading, variant: "heading-lg/bold", children: tmp12 };
                  const tmp16 = closure_6(tmp(onConfirmPress[17]).Text, obj2);
                  cResult[15] = tmp4.heading;
                  cResult[16] = tmp16;
                  let tmp14 = tmp16;
                } else {
                  tmp14 = cResult[16];
                }
                const _Symbol2 = Symbol;
                if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj3 = { variant: "text-sm/normal", children: null };
                  const intl2 = tmp(onConfirmPress[13]).intl;
                  obj3.children = intl2.string(tmp(onConfirmPress[13]).t["z4du/I"]);
                  const tmp19 = closure_6(tmp(onConfirmPress[17]).Text, obj3);
                  cResult[17] = tmp19;
                  let tmp17 = tmp19;
                } else {
                  tmp17 = cResult[17];
                }
                if (cResult[18] !== attachmentPreview) {
                  let tmp22 = null != attachmentPreview;
                  if (tmp22) {
                    const obj4 = { attachment: attachmentPreview };
                    tmp22 = closure_6(closure_9, obj4);
                  }
                  cResult[18] = attachmentPreview;
                  cResult[19] = tmp22;
                  let tmp20 = tmp22;
                } else {
                  tmp20 = cResult[19];
                }
                if (cResult[20] !== embedPreview) {
                  let tmp27 = null != embedPreview;
                  if (tmp27) {
                    const obj5 = { embed: embedPreview };
                    tmp27 = closure_6(closure_8, obj5);
                  }
                  cResult[20] = embedPreview;
                  cResult[21] = tmp27;
                  let tmp25 = tmp27;
                } else {
                  tmp25 = cResult[21];
                }
                if (cResult[22] === tmp4.content) {
                  if (cResult[23] === tmp4.contentContainer) {
                    if (cResult[24] === tmp20) {
                      if (cResult[25] === tmp25) {
                        if (cResult[26] === tmp14) {
                          let tmp30 = cResult[27];
                        }
                        const _Symbol3 = Symbol;
                        if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl3 = tmp(onConfirmPress[13]).intl;
                          const stringResult1 = intl3.string(tmp(onConfirmPress[13]).t["cY+Oob"]);
                          cResult[28] = stringResult1;
                          let tmp34 = stringResult1;
                        } else {
                          tmp34 = cResult[28];
                        }
                        if (cResult[29] === tmp6) {
                          if (cResult[30] === isReportFalsePositiveLoading) {
                            let tmp36 = cResult[31];
                          }
                          const _Symbol4 = Symbol;
                          if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
                            const intl4 = tmp(onConfirmPress[13]).intl;
                            const stringResult2 = intl4.string(tmp(onConfirmPress[13]).t["ETE/oC"]);
                            cResult[32] = stringResult2;
                            let tmp39 = stringResult2;
                          } else {
                            tmp39 = cResult[32];
                          }
                          if (cResult[33] !== tmp5) {
                            const obj6 = { variant: "secondary", size: "md", text: tmp39, onPress: tmp5 };
                            const tmp43 = closure_6(tmp(onConfirmPress[18]).Button, obj6);
                            cResult[33] = tmp5;
                            cResult[34] = tmp43;
                            let tmp41 = tmp43;
                          } else {
                            tmp41 = cResult[34];
                          }
                          if (cResult[35] === tmp4.footer) {
                            if (cResult[36] === tmp36) {
                              if (cResult[37] === tmp41) {
                                let tmp44 = cResult[38];
                              }
                              if (cResult[39] === tmp30) {
                                if (cResult[40] === tmp44) {
                                  let tmp48 = cResult[41];
                                }
                                return tmp48;
                              }
                              const obj7 = { startExpanded: true, children: null };
                              const obj8 = { children: null };
                              const items = [tmp30, tmp44];
                              obj8.children = items;
                              obj7.children = closure_7(closure_4, obj8);
                              const tmp52 = closure_6(tmp(onConfirmPress[19]).BottomSheet, obj7);
                              cResult[39] = tmp30;
                              cResult[40] = tmp44;
                              cResult[41] = tmp52;
                              tmp48 = tmp52;
                            }
                          }
                          const obj9 = { style: tmp4.footer, children: null };
                          const items1 = [tmp36, tmp41];
                          obj9.children = items1;
                          const tmp47 = closure_7(closure_4, obj9);
                          cResult[35] = tmp4.footer;
                          cResult[36] = tmp36;
                          cResult[37] = tmp41;
                          cResult[38] = tmp47;
                          tmp44 = tmp47;
                        }
                        const obj10 = { variant: "primary", size: "md", disabled: isReportFalsePositiveLoading, loading: isReportFalsePositiveLoading, text: tmp34, onPress: tmp6 };
                        const tmp38 = closure_6(tmp(onConfirmPress[18]).Button, obj10);
                        cResult[29] = tmp6;
                        cResult[30] = isReportFalsePositiveLoading;
                        cResult[31] = tmp38;
                        tmp36 = tmp38;
                      }
                    }
                  }
                }
                const obj11 = { style: content, contentContainerStyle: contentContainer, children: null };
                const items2 = [tmp14, tmp17, tmp20, tmp25];
                obj11.children = items2;
                const tmp33 = closure_7(closure_5, obj11);
                cResult[22] = tmp4.content;
                cResult[23] = tmp4.contentContainer;
                cResult[24] = tmp20;
                cResult[25] = tmp25;
                cResult[26] = tmp14;
                cResult[27] = tmp33;
                tmp30 = tmp33;
              }
            }
            const fn3 = function f() {
              const obj = ExplicitMediaRedactionUtils;
              const result = obj.trackMediaRedactionAction({ action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED, channelId, messageId, context: analyticsContext });
            };
            const items3 = [channelId, messageId, analyticsContext];
            cResult[9] = analyticsContext;
            cResult[10] = channelId;
            cResult[11] = messageId;
            cResult[12] = fn3;
            cResult[13] = items3;
            tmp8 = items3;
            tmp7 = fn3;
          }
        }
      }
      const fn2 = function y() {
        if (onConfirmPress != null) {
          tmp();
        }
        const obj = ExplicitMediaRedactionUtils;
        const result = obj.trackMediaRedactionAction({ action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM, channelId, messageId, context: analyticsContext });
      };
      cResult[4] = analyticsContext;
      cResult[5] = channelId;
      cResult[6] = messageId;
      cResult[7] = onConfirmPress;
      cResult[8] = fn2;
      tmp6 = fn2;
    }
  }
  const fn = function l() {
    const obj = ExplicitMediaRedactionUtils;
    const result = obj.trackMediaRedactionAction({ action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL, channelId, messageId, context: analyticsContext });
    const obj2 = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL, channelId, messageId, context: analyticsContext };
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  cResult[0] = analyticsContext;
  cResult[1] = channelId;
  cResult[2] = messageId;
  cResult[3] = fn;
  tmp5 = fn;
  let obj = channelId(onConfirmPress[4]);
}) : (function ExplicitMediaFalsePositiveActionSheet(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  ({ isReportFalsePositiveLoading, attachmentPreview, embedPreview, onConfirmPress } = channelId);
  const analyticsContext = channelId.analyticsContext;
  const tmp = closure_11();
  const items = [channelId, messageId, analyticsContext];
  const items1 = [channelId, messageId, analyticsContext, onConfirmPress];
  const callback = analyticsContext.useCallback(() => {
    const obj = ExplicitMediaRedactionUtils;
    const result = obj.trackMediaRedactionAction({ action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL, channelId, messageId, context: analyticsContext });
    const obj2 = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL, channelId, messageId, context: analyticsContext };
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items);
  const items2 = [channelId, messageId, analyticsContext];
  const callback1 = analyticsContext.useCallback(() => {
    if (onConfirmPress != null) {
      tmp();
    }
    const obj = ExplicitMediaRedactionUtils;
    const result = obj.trackMediaRedactionAction({ action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM, channelId, messageId, context: analyticsContext });
  }, items1);
  const effect = analyticsContext.useEffect(() => {
    const obj = ExplicitMediaRedactionUtils;
    const result = obj.trackMediaRedactionAction({ action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED, channelId, messageId, context: analyticsContext });
  }, items2);
  let obj = { style: tmp.content, contentContainerStyle: tmp.contentContainer, children: null };
  let obj2 = { style: tmp.heading, variant: "heading-lg/bold", children: null };
  const intl = channelId(onConfirmPress[13]).intl;
  obj2.children = intl.string(channelId(onConfirmPress[13]).t.TPpVkI);
  const items3 = [closure_6(channelId(onConfirmPress[17]).Text, obj2), , , ];
  const obj3 = { variant: "text-sm/normal", children: null };
  const intl2 = channelId(onConfirmPress[13]).intl;
  obj3.children = intl2.string(channelId(onConfirmPress[13]).t["z4du/I"]);
  items3[1] = closure_6(channelId(onConfirmPress[17]).Text, obj3);
  let tmp5Result = null != attachmentPreview;
  if (tmp5Result) {
    const obj4 = { attachment: attachmentPreview };
    tmp5Result = closure_6(closure_9, obj4);
  }
  items3[2] = tmp5Result;
  let tmp5Result2 = null != embedPreview;
  if (tmp5Result2) {
    const obj5 = { embed: embedPreview };
    tmp5Result2 = closure_6(closure_8, obj5);
  }
  const obj6 = { startExpanded: true, children: null };
  const obj7 = { children: null };
  items3[3] = tmp5Result2;
  obj.children = items3;
  const items4 = [closure_7(closure_5, obj), ];
  const obj8 = { style: tmp.footer, children: null };
  const obj9 = { variant: "primary", size: "md", disabled: isReportFalsePositiveLoading, loading: isReportFalsePositiveLoading, text: null, onPress: null };
  const intl3 = tmp6(onConfirmPress[13]).intl;
  obj9.text = intl3.string(channelId(onConfirmPress[13]).t["cY+Oob"]);
  obj9.onPress = callback1;
  const items5 = [closure_6(channelId(onConfirmPress[18]).Button, obj9), ];
  const obj10 = { variant: "secondary", size: "md", text: null, onPress: null };
  const intl4 = tmp6(onConfirmPress[13]).intl;
  obj10.text = intl4.string(channelId(onConfirmPress[13]).t["ETE/oC"]);
  obj10.onPress = callback;
  items5[1] = closure_6(channelId(onConfirmPress[18]).Button, obj10);
  obj8.children = items5;
  items4[1] = closure_7(closure_4, obj8);
  obj7.children = items4;
  obj6.children = closure_7(closure_4, obj7);
  return closure_6(channelId(onConfirmPress[19]).BottomSheet, obj6);
});