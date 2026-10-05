// === Module 8921: ExplicitMediaFalsePositiveActionSheet ===

// Module 8921 (ExplicitMediaFalsePositiveActionSheet)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import ToastUtils from "ToastUtils" /* 4567 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4568 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7109 */;
import utils_UploadUtils from "utils/UploadUtils" /* 7274 */;
import TextTrackTypeDefault from "TextTrackType" /* 7984 */;
import AssetRegistryDefault from "AssetRegistry" /* 8922 */;
import ShieldIcon from "ShieldIcon" /* 8923 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import createStyles_mod from "createStyles" /* 4890 */;
import native_mod from "native" /* 1188 */;
import size from "module_2" /* 2 */;

let BottomSheet, channelId, embed;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let native;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
({ View: closure_4, Image: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((embed) => {
  let url;
  const obj = react2;
  const cResult = obj.c(2);
  embed = embed.embed;
  if (undefined !== embed.video) {
    if ("gifv" !== embed.type) {
      url = embed.video.url;
    }
    let tmp2 = null;
    if (null != url) {
      let tmp3;
      if (cResult[0] !== url) {
        const obj2 = { url };
        const tmp6 = metroImportDefault(closure_11, obj2);
        cResult[0] = url;
        cResult[1] = tmp6;
        tmp3 = tmp6;
      } else {
        tmp3 = cResult[1];
      }
      tmp2 = tmp3;
    }
    return tmp2;
  }
  const thumbnail = embed.thumbnail;
  if (thumbnail != null) {
    url = thumbnail.url;
  }
}) : ((embed) => {
  let url;
  embed = embed.embed;
  if (undefined !== embed.video) {
    if ("gifv" !== embed.type) {
      url = embed.video.url;
    }
    let tmp = null;
    if (null != url) {
      const obj = { url };
      tmp = metroImportDefault(closure_11, obj);
    }
    return tmp;
  }
  const thumbnail = embed.thumbnail;
  if (thumbnail != null) {
    url = thumbnail.url;
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((attachment) => {
  const obj = react2;
  const cResult = obj.c(2);
  const url = attachment.attachment.url;
  let tmp2 = null;
  if (null != url) {
    let tmp3;
    if (cResult[0] !== url) {
      const obj2 = { url };
      const tmp6 = metroImportDefault(closure_11, obj2);
      cResult[0] = url;
      cResult[1] = tmp6;
      tmp3 = tmp6;
    } else {
      tmp3 = cResult[1];
    }
    tmp2 = tmp3;
  }
  return tmp2;
}) : ((attachment) => {
  const url = attachment.attachment.url;
  let tmp = null;
  if (null != url) {
    const obj = { url };
    tmp = metroImportDefault(closure_11, obj);
  }
  return tmp;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((url) => {
  let items;
  let obj4;
  let obj6;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(13);
  url = url.url;
  const tmp4 = closure_12();
  if (cResult[0] !== url) {
    const tmpResult = utils_UploadUtils;
    const isVideoResult = tmpResult.isVideo(url);
    cResult[0] = url;
    cResult[1] = isVideoResult;
    tmp5 = isVideoResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.elevationShadow) {
    let tmp7;
    let tmp9Result;
    if (cResult[3] === tmp4.mediaContainer) {
      tmp7 = cResult[4];
    }
    if (cResult[5] === tmp5) {
      if (cResult[6] === tmp4.image) {
        if (cResult[7] === tmp4.media) {
          let tmp8;
          if (cResult[8] === url) {
            tmp8 = cResult[9];
          }
          if (cResult[10] === tmp7) {
            let tmp13;
            if (cResult[11] === tmp8) {
              tmp13 = cResult[12];
            }
            return tmp13;
          }
          const obj2 = { style: tmp7, children: tmp8 };
          const tmp16 = metroImportDefault(React3, obj2);
          cResult[10] = tmp7;
          cResult[11] = tmp8;
          cResult[12] = tmp16;
          tmp13 = tmp16;
        }
      }
    }
    if (tmp5) {
      const obj3 = { volume: 0, resizeMode: "cover", repeat: true, style: tmp4.media, source: obj4, controls: true, paused: true };
      obj4 = { uri: url };
      tmp9Result = metroImportDefault(TextTrackTypeDefault, obj3);
    } else {
      const obj5 = { style: items, source: obj6 };
      items = [, ];
      ({ media: arr2[0], image: arr2[1] } = tmp4);
      obj6 = { uri: url };
      tmp9Result = metroImportDefault(hasOwnProperty, obj5);
    }
    cResult[5] = tmp5;
    cResult[6] = tmp4.image;
    cResult[7] = tmp4.media;
    cResult[8] = url;
    cResult[9] = tmp9Result;
    tmp8 = tmp9Result;
  }
  const items1 = [, ];
  ({ mediaContainer: arr[0], elevationShadow: arr[1] } = tmp4);
  cResult[2] = tmp4.elevationShadow;
  cResult[3] = tmp4.mediaContainer;
  cResult[4] = items1;
  tmp7 = items1;
}) : ((url) => {
  let items;
  let items1;
  let obj4;
  let obj6;
  let tmp3Result;
  url = url.url;
  const tmp = closure_12();
  const obj2 = { style: items, children: tmp3Result };
  items = [, ];
  ({ mediaContainer: arr[0], elevationShadow: arr[1] } = tmp);
  const obj = utils_UploadUtils;
  if (obj.isVideo(url)) {
    const obj3 = { volume: 0, resizeMode: "cover", repeat: true, style: tmp.media, source: obj4, controls: true, paused: true };
    obj4 = { uri: url };
    tmp3Result = metroImportDefault(TextTrackTypeDefault, obj3);
  } else {
    const obj5 = { style: items1, source: obj6 };
    items1 = [, ];
    ({ media: arr2[0], image: arr2[1] } = tmp);
    obj6 = { uri: url };
    tmp3Result = metroImportDefault(hasOwnProperty, obj5);
  }
  return metroImportDefault(React3, obj2);
});
let createStyles = createStyles_mod;
let obj = { content: obj2, contentContainer: { justifyContent: "center", textAlign: "center", alignItems: "center" }, heading: obj3, mediaContainer: obj4, elevationShadow: native.generateBoxShadowStyle(native.FOUR_DP_ELEVATION_SHADOW_PARAMS), image: { resizeMode: "contain" }, media: obj5, footer: obj6 };
obj2 = { padding: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_8 };
obj4 = { width: "100%", padding: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.xs, marginTop: nativeDefault.space.PX_8, aspectRatio: "4 / 3" };
native = native_mod;
obj5 = { flex: 1, borderRadius: nativeDefault.radii.xs };
obj6 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT, paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
let closure_12 = createStyles(obj);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let attachmentPreview;
  let content;
  let contentContainer;
  let embedPreview;
  let heading;
  let intl;
  let isReportFalsePositiveLoading;
  let items;
  let items1;
  let items2;
  let obj6;
  let onConfirmPress;
  const tmp = channelId;
  let obj = channelId(onConfirmPress[4]);
  const cResult = obj.c(42);
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  ({ isReportFalsePositiveLoading, attachmentPreview, embedPreview, onConfirmPress } = channelId);
  const analyticsContext = channelId.analyticsContext;
  const tmp4 = closure_12();
  if (cResult[0] === analyticsContext) {
    if (cResult[1] === channelId) {
      let tmp5;
      if (cResult[2] === messageId) {
        tmp5 = cResult[3];
      }
      if (cResult[4] === analyticsContext) {
        if (cResult[5] === channelId) {
          if (cResult[6] === messageId) {
            let tmp6;
            if (cResult[7] === onConfirmPress) {
              tmp6 = cResult[8];
            }
            if (cResult[9] === analyticsContext) {
              if (cResult[10] === channelId) {
                let tmp12;
                let tmp14;
                let tmp17;
                let tmp21;
                let tmp24;
                class R {
                  constructor() {
                    const obj = ExplicitMediaRedactionUtils;
                    const obj2 = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED, channelId, messageId, context: analyticsContext };
                    const result = obj.trackMediaRedactionAction(obj2);
                  }
                }
                const _Symbol = Symbol;
                ({ content, contentContainer, heading } = tmp4);
                if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                  const string = tmp(onConfirmPress[14]).intl.string;
                  class R {
                    constructor() {
                      const obj = ExplicitMediaRedactionUtils;
                      const obj2 = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED, channelId, messageId, context: analyticsContext };
                      const result = obj.trackMediaRedactionAction(obj2);
                    }
                  }
                  cResult[14] = tmp13;
                  tmp12 = tmp13;
                } else {
                  tmp12 = cResult[14];
                }
                if (cResult[15] !== tmp4.heading) {
                  let obj2 = { style: null, variant: "heading-lg/bold", children: tmp12 };
                  class R {
                    constructor() {
                      const obj = ExplicitMediaRedactionUtils;
                      const obj2 = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED, channelId, messageId, context: analyticsContext };
                      const result = obj.trackMediaRedactionAction(obj2);
                    }
                  }
                  const tmp16 = closure_7(tmp(onConfirmPress[17]).Text, obj2);
                  cResult[15] = tmp4.heading;
                  cResult[16] = tmp16;
                  tmp14 = tmp16;
                } else {
                  tmp14 = cResult[16];
                }
                const _Symbol2 = Symbol;
                if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                  let obj3 = { variant: "text-sm/normal", children: intl.string(tmp(onConfirmPress[14]).t["z4du/I"]) };
                  class R {
                    constructor() {
                      const obj = ExplicitMediaRedactionUtils;
                      const obj2 = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED, channelId, messageId, context: analyticsContext };
                      const result = obj.trackMediaRedactionAction(obj2);
                    }
                  }
                  intl = tmp(onConfirmPress[14]).intl;
                  const tmp20 = closure_7(tmp19, obj3);
                  cResult[17] = tmp20;
                  tmp17 = tmp20;
                } else {
                  tmp17 = cResult[17];
                }
                if (cResult[18] !== attachmentPreview) {
                  class R {
                    constructor() {
                      const obj = ExplicitMediaRedactionUtils;
                      const obj2 = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED, channelId, messageId, context: analyticsContext };
                      const result = obj.trackMediaRedactionAction(obj2);
                    }
                  }
                  cResult[18] = attachmentPreview;
                  cResult[19] = null != attachmentPreview;
                  tmp21 = tmp23;
                } else {
                  tmp21 = cResult[19];
                }
                if (cResult[20] !== embedPreview) {
                  class R {
                    constructor() {
                      const obj = ExplicitMediaRedactionUtils;
                      const obj2 = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED, channelId, messageId, context: analyticsContext };
                      const result = obj.trackMediaRedactionAction(obj2);
                    }
                  }
                  cResult[20] = embedPreview;
                  cResult[21] = null != embedPreview;
                  tmp24 = tmp26;
                } else {
                  tmp24 = cResult[21];
                }
                if (cResult[22] === tmp4.content) {
                  if (cResult[23] === tmp4.contentContainer) {
                    if (cResult[24] === tmp21) {
                      if (cResult[25] === tmp24) {
                        let tmp27;
                        let tmp32;
                        if (cResult[26] === tmp14) {
                          tmp27 = cResult[27];
                        }
                        const _Symbol3 = Symbol;
                        class R {
                          constructor() {
                            const obj = ExplicitMediaRedactionUtils;
                            const obj2 = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED, channelId, messageId, context: analyticsContext };
                            const result = obj.trackMediaRedactionAction(obj2);
                          }
                        }
                        if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                          const string2 = tmp(onConfirmPress[14]).intl.string;
                          class R {
                            constructor() {
                              const obj = ExplicitMediaRedactionUtils;
                              const obj2 = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED, channelId, messageId, context: analyticsContext };
                              const result = obj.trackMediaRedactionAction(obj2);
                            }
                          }
                          cResult[28] = tmp33;
                          tmp32 = tmp33;
                        } else {
                          tmp32 = cResult[28];
                        }
                        if (cResult[29] === tmp6) {
                          let tmp34;
                          let tmp40;
                          if (cResult[30] === isReportFalsePositiveLoading) {
                            tmp34 = cResult[31];
                          }
                          const _Symbol4 = Symbol;
                          class R {
                            constructor() {
                              const obj = ExplicitMediaRedactionUtils;
                              const obj2 = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED, channelId, messageId, context: analyticsContext };
                              const result = obj.trackMediaRedactionAction(obj2);
                            }
                          }
                          if (tmp37 === Symbol.for("react.memo_cache_sentinel")) {
                            const string3 = tmp(onConfirmPress[14]).intl.string;
                            class R {
                              constructor() {
                                const obj = ExplicitMediaRedactionUtils;
                                const obj2 = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED, channelId, messageId, context: analyticsContext };
                                const result = obj.trackMediaRedactionAction(obj2);
                              }
                            }
                            cResult[32] = tmp39;
                          }
                          if (cResult[33] !== tmp5) {
                            const obj4 = { variant: "secondary", size: "md", text: null, onPress: tmp5 };
                            class R {
                              constructor() {
                                const obj = ExplicitMediaRedactionUtils;
                                const obj2 = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED, channelId, messageId, context: analyticsContext };
                                const result = obj.trackMediaRedactionAction(obj2);
                              }
                            }
                            const tmp42 = closure_7(tmp(onConfirmPress[18]).Button, obj4);
                            cResult[33] = tmp5;
                            cResult[34] = tmp42;
                            tmp40 = tmp42;
                          } else {
                            tmp40 = cResult[34];
                          }
                          if (cResult[35] === tmp4.footer) {
                            if (cResult[36] === tmp34) {
                              let tmp43;
                              if (cResult[37] === tmp40) {
                                tmp43 = cResult[38];
                              }
                              if (cResult[39] === tmp27) {
                                let tmp47;
                                if (cResult[40] === tmp43) {
                                  tmp47 = cResult[41];
                                }
                                return tmp47;
                              }
                              class R {
                                constructor() {
                                  const obj = ExplicitMediaRedactionUtils;
                                  const obj2 = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED, channelId, messageId, context: analyticsContext };
                                  const result = obj.trackMediaRedactionAction(obj2);
                                }
                              }
                              const obj5 = { startExpanded: true, children: closure_8(closure_4, obj6) };
                              obj6 = { children: items };
                              items = [tmp27, tmp43];
                              BottomSheet = tmp(onConfirmPress[19]).BottomSheet;
                              const tmp50 = closure_7(BottomSheet, obj5);
                              cResult[39] = tmp27;
                              cResult[40] = tmp43;
                              cResult[41] = tmp50;
                              tmp47 = tmp50;
                            }
                          }
                          const obj7 = { style: tmp31, children: items1 };
                          items1 = [tmp34, tmp40];
                          const tmp46 = closure_8(closure_4, obj7);
                          cResult[35] = tmp4.footer;
                          cResult[36] = tmp34;
                          cResult[37] = tmp40;
                          cResult[38] = tmp46;
                          tmp43 = tmp46;
                        }
                        const obj8 = { variant: "primary", size: "md", disabled: isReportFalsePositiveLoading, loading: isReportFalsePositiveLoading, text: tmp32, onPress: tmp6 };
                        const tmp36 = closure_7(tmp(onConfirmPress[18]).Button, obj8);
                        cResult[29] = tmp6;
                        cResult[30] = isReportFalsePositiveLoading;
                        cResult[31] = tmp36;
                        tmp34 = tmp36;
                      }
                    }
                  }
                }
                const obj9 = { style: content, contentContainerStyle: contentContainer, children: items2 };
                items2 = [tmp14, tmp17, tmp21, tmp24];
                const tmp30 = closure_8(closure_6, obj9);
                cResult[22] = tmp4.content;
                cResult[23] = tmp4.contentContainer;
                cResult[24] = tmp21;
                cResult[25] = tmp24;
                cResult[26] = tmp14;
                cResult[27] = tmp30;
                tmp27 = tmp30;
              }
            }
            class R {
              constructor() {
                const obj = ExplicitMediaRedactionUtils;
                const obj2 = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED, channelId, messageId, context: analyticsContext };
                const result = obj.trackMediaRedactionAction(obj2);
              }
            }
            const items3 = [channelId, messageId, analyticsContext];
            cResult[9] = analyticsContext;
            cResult[10] = channelId;
            cResult[11] = messageId;
            cResult[12] = R;
            cResult[13] = items3;
          }
        }
      }
      cResult[4] = analyticsContext;
      cResult[5] = channelId;
      cResult[6] = messageId;
      cResult[7] = onConfirmPress;
      cResult[8] = tmp7;
      tmp6 = tmp7;
    }
  }
  const fn = function c() {
    const obj = ExplicitMediaRedactionUtils;
    const obj2 = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL, channelId, messageId, context: analyticsContext };
    const result = obj.trackMediaRedactionAction(obj2);
    const obj3 = ActionSheetActionCreatorsDefault;
    obj3.hideActionSheet();
  };
  cResult[0] = analyticsContext;
  cResult[1] = channelId;
  cResult[2] = messageId;
  cResult[3] = fn;
  tmp5 = fn;
}) : ((channelId) => {
  let attachmentPreview;
  let embedPreview;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let isReportFalsePositiveLoading;
  let items3;
  let items4;
  let items5;
  let obj7;
  let onConfirmPress;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  ({ isReportFalsePositiveLoading, attachmentPreview, embedPreview, onConfirmPress } = channelId);
  const analyticsContext = channelId.analyticsContext;
  const tmp = closure_12();
  const items = [channelId, messageId, analyticsContext];
  const items1 = [channelId, messageId, analyticsContext, onConfirmPress];
  const callback = analyticsContext.useCallback(() => {
    const obj = ExplicitMediaRedactionUtils;
    const obj2 = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL, channelId, messageId, context: analyticsContext };
    const result = obj.trackMediaRedactionAction(obj2);
    const obj3 = ActionSheetActionCreatorsDefault;
    obj3.hideActionSheet();
  }, items);
  const items2 = [channelId, messageId, analyticsContext];
  const callback1 = analyticsContext.useCallback(() => {
    if (onConfirmPress != null) {
      tmp();
    }
    const obj = ExplicitMediaRedactionUtils;
    const obj2 = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM, channelId, messageId, context: analyticsContext };
    const result = obj.trackMediaRedactionAction(obj2);
  }, items1);
  const effect = analyticsContext.useEffect(() => {
    const obj = ExplicitMediaRedactionUtils;
    const obj2 = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED, channelId, messageId, context: analyticsContext };
    const result = obj.trackMediaRedactionAction(obj2);
  }, items2);
  let obj = { style: tmp.content, contentContainerStyle: tmp.contentContainer, children: items3 };
  BottomSheet = channelId(onConfirmPress[19]).BottomSheet;
  let obj2 = { style: tmp.heading, variant: "heading-lg/bold", children: intl.string(channelId(onConfirmPress[14]).t.TPpVkI) };
  const Text = channelId(onConfirmPress[17]).Text;
  intl = channelId(onConfirmPress[14]).intl;
  items3 = [closure_7(Text, obj2), , , ];
  let obj3 = { variant: "text-sm/normal", children: intl2.string(channelId(onConfirmPress[14]).t["z4du/I"]) };
  const Text2 = channelId(onConfirmPress[17]).Text;
  intl2 = channelId(onConfirmPress[14]).intl;
  items3[1] = closure_7(Text2, obj3);
  let tmp5Result = null != attachmentPreview;
  if (tmp5Result) {
    const obj4 = { attachment: attachmentPreview };
    tmp5Result = closure_7(closure_10, obj4);
  }
  items3[2] = tmp5Result;
  let tmp5Result2 = null != embedPreview;
  if (tmp5Result2) {
    const obj5 = { embed: embedPreview };
    tmp5Result2 = closure_7(closure_9, obj5);
  }
  const obj6 = { startExpanded: true, children: closure_8(closure_4, obj7) };
  obj7 = { children: items4 };
  items3[3] = tmp5Result2;
  items4 = [closure_8(closure_6, obj), ];
  const obj8 = { style: tmp.footer, children: items5 };
  const obj9 = { variant: "primary", size: "md", disabled: isReportFalsePositiveLoading, loading: isReportFalsePositiveLoading, text: intl3.string(channelId(onConfirmPress[14]).t["cY+Oob"]), onPress: callback1 };
  const Button = tmp6(onConfirmPress[18]).Button;
  intl3 = tmp6(onConfirmPress[14]).intl;
  items5 = [closure_7(Button, obj9), ];
  const obj10 = { variant: "secondary", size: "md", text: intl4.string(channelId(onConfirmPress[14]).t["ETE/oC"]), onPress: callback };
  const Button2 = tmp6(onConfirmPress[18]).Button;
  intl4 = tmp6(onConfirmPress[14]).intl;
  items5[1] = closure_7(Button2, obj10);
  items4[1] = closure_8(closure_4, obj8);
  return closure_7(BottomSheet, obj6);
});
let result = size.fileFinishedImporting("modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaFalsePositiveActionSheet.tsx");

export const handleSuccess = function handleSuccess(arg0) {
  let intl;
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(arg0);
  const tmp2 = ToastActionCreatorsDefault;
  const open = tmp2.open;
  const obj2 = { key: "explicit_media_report_false_positive_success", icon: AssetRegistryDefault, IconComponent: ShieldIcon.ShieldIcon, iconColor: "text-brand", content: intl.string(intl5.t.gFsTKu) };
  intl = intl5.intl;
  open(obj2);
};
export const handleError = function handleError() {
  const presentError = ToastUtils.presentError;
  ToastUtils;
  const intl = intl5.intl;
  presentError(intl.string(intl5.t.R0RpRX));
};
export const ExplicitMediaFalsePositiveActionSheet = tmp5;