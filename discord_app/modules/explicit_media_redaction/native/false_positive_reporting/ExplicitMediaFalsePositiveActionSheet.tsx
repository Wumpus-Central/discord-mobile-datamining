// discord_app/modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaFalsePositiveActionSheet.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ExplicitMediaRedactionUtils from "../../ExplicitMediaRedactionUtils.tsx";
import utils_UploadUtils from "../../../../utils/native/UploadUtils.tsx";
import _modDef7994 from "../../../../../_runtime/metro/07994__.js";
import _modDef8951 from "../../../../../_runtime/metro/08951__.js";
import ShieldIcon from "../../../../design/components/Icon/native/redesign/generated/ShieldIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (embed) => {
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
          const tmp6 = React5(closure_11, obj2);
          cResult[0] = url;
          cResult[1] = tmp6;
        }
      }
      const thumbnail = embed.thumbnail;
      if (thumbnail != null) {
        url = thumbnail.url;
      }
    }
  : (embed) => {
      embed = embed.embed;
      if (undefined !== embed.video) {
        if ("gifv" !== embed.type) {
          let url = embed.video.url;
        }
        let tmp = null;
        if (null != url) {
          const obj = { url };
          tmp = React5(closure_11, obj);
        }
        return tmp;
      }
      const thumbnail = embed.thumbnail;
      if (thumbnail != null) {
        url = thumbnail.url;
      }
    };
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (attachment) => {
      const cResult = c.c(2);
      const url = attachment.attachment.url;
      if (null == url) {
        return null;
      } else if (cResult[0] !== url) {
        const obj2 = { url };
        const tmp5 = React5(closure_11, obj2);
        cResult[0] = url;
        cResult[1] = tmp5;
      }
    }
  : (attachment) => {
      const url = attachment.attachment.url;
      let tmp = null;
      if (null != url) {
        const obj = { url };
        tmp = React5(closure_11, obj);
      }
      return tmp;
    };
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (url) => {
      let obj = dependencyMap;
      const cResult = c.c(13);
      url = url.url;
      let media = closure_12();
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
                    let tmp12 = cResult[12];
                  }
                  return tmp12;
                }
                const obj3 = { style: tmp4, children: cResult[9] };
                const tmp15 = React5(React4, obj3);
                cResult[10] = tmp4;
                cResult[11] = cResult[9];
                cResult[12] = tmp15;
                tmp12 = tmp15;
              }
            }
          }
        }
        if (image) {
          obj = {
            volume: 0,
            resizeMode: "cover",
            repeat: true,
            style: media.media,
            source: null,
            controls: true,
            paused: true,
          };
          const obj4 = { uri: url };
          obj.source = obj4;
          let tmp6Result = React5(_modDef7994, obj);
        } else {
          const obj5 = { style: null, source: null };
          const items = [,];
          ({ media: arr2[0], image: arr2[1] } = media);
          obj5.style = items;
          const obj6 = { uri: url };
          obj5.source = obj6;
          tmp6Result = React5(hasOwnProperty, obj5);
        }
        cResult[5] = image;
        image = media.image;
        cResult[6] = image;
        media = media.media;
        cResult[7] = media;
        cResult[8] = url;
        cResult[9] = tmp6Result;
      }
      const items1 = [,];
      ({ mediaContainer: arr[0], elevationShadow: arr[1] } = media);
      cResult[2] = media.elevationShadow;
      cResult[3] = media.mediaContainer;
      cResult[4] = items1;
      tmp4 = items1;
    }
  : (url) => {
      url = url.url;
      const tmp = closure_12();
      const obj2 = { style: null, children: null };
      const items = [,];
      ({ mediaContainer: arr[0], elevationShadow: arr[1] } = tmp);
      obj2.style = items;
      if (obj.isVideo(url)) {
        const obj3 = {
          volume: 0,
          resizeMode: "cover",
          repeat: true,
          style: tmp.media,
          source: null,
          controls: true,
          paused: true,
        };
        const obj4 = { uri: url };
        obj3.source = obj4;
        let tmp3Result = React5(_modDef7994, obj3);
      } else {
        const obj5 = { style: null, source: null };
        const items1 = [,];
        ({ media: arr2[0], image: arr2[1] } = tmp);
        obj5.style = items1;
        const obj6 = { uri: url };
        obj5.source = obj6;
        tmp3Result = React5(hasOwnProperty, obj5);
      }
      obj2.children = tmp3Result;
      return React5(React4, obj2);
    };
const createStyles = fn(4896);
let obj5 = {
  content: { padding: nativeDefault.space.PX_16 },
  contentContainer: { justifyContent: "center", textAlign: "center", alignItems: "center" },
  heading: null,
  mediaContainer: null,
  elevationShadow: null,
  image: null,
  media: null,
  footer: null,
};
let obj6 = { padding: nativeDefault.space.PX_16 };
obj5.heading = { marginBottom: nativeDefault.space.PX_8 };
let obj7 = { marginBottom: nativeDefault.space.PX_8 };
obj5.mediaContainer = {
  width: "100%",
  padding: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.xs,
  marginTop: nativeDefault.space.PX_8,
  aspectRatio: "4 / 3",
};
const native = fn(1188);
obj5.elevationShadow = native.generateBoxShadowStyle(fn(1188).FOUR_DP_ELEVATION_SHADOW_PARAMS);
obj5.image = { resizeMode: "contain" };
let obj8 = {
  width: "100%",
  padding: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.xs,
  marginTop: nativeDefault.space.PX_8,
  aspectRatio: "4 / 3",
};
obj5.media = { flex: 1, borderRadius: nativeDefault.radii.xs };
let obj10 = { flex: 1, borderRadius: nativeDefault.radii.xs };
obj5.footer = {
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT,
  paddingVertical: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_8,
};
let closure_12 = createStyles.createStyles(obj5);
ReactCompilerGating = fn(558);
const obj11 = {
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT,
  paddingVertical: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_8,
};
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaFalsePositiveActionSheet.tsx",
);

export const handleSuccess = function handleSuccess(arg0) {
  ActionSheetActionCreatorsDefault.hideActionSheet(arg0);
  const obj3 = {
    key: "explicit_media_report_false_positive_success",
    icon: _modDef8951,
    IconComponent: ShieldIcon.ShieldIcon,
    iconColor: "text-brand",
    content: null,
  };
  const intl = util.intl;
  obj3.content = intl.string(util.t.gFsTKu);
  ToastActionCreatorsDefault.open(obj3);
};
export const handleError = function handleError() {
  const intl = util.intl;
  ToastUtils.presentError(intl.string(util.t.R0RpRX));
};
export const ExplicitMediaFalsePositiveActionSheet = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      const cResult = channelId(onConfirmPress[4]).c(42);
      channelId = channelId.channelId;
      const messageId = channelId.messageId;
      ({ isReportFalsePositiveLoading, attachmentPreview, embedPreview, onConfirmPress } = channelId);
      const analyticsContext = channelId.analyticsContext;
      const tmp4 = closure_12();
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
                    class R {
                      constructor() {
                        obj = closure_0(closure_2[16]);
                        obj1 = {
                          action: closure_0(closure_2[16]).TrackMediaRedactionActionType
                            .EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
                          channelId,
                          messageId,
                          context: analyticsContext,
                        };
                        result = obj.trackMediaRedactionAction(obj1);
                        return;
                      }
                    }
                    const _Symbol = Symbol;
                    ({ content, contentContainer, heading } = tmp4);
                    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                      const string = tmp(onConfirmPress[14]).intl.string;
                      class R {
                        constructor() {
                          obj = closure_0(closure_2[16]);
                          obj1 = {
                            action: closure_0(closure_2[16]).TrackMediaRedactionActionType
                              .EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
                            channelId,
                            messageId,
                            context: analyticsContext,
                          };
                          result = obj.trackMediaRedactionAction(obj1);
                          return;
                        }
                      }
                      cResult[14] = tmp13;
                      let tmp12 = tmp13;
                    } else {
                      tmp12 = cResult[14];
                    }
                    if (cResult[15] !== tmp4.heading) {
                      let obj2 = { style: null, variant: "heading-lg/bold", children: null };
                      class R {
                        constructor() {
                          obj = closure_0(closure_2[16]);
                          obj1 = {
                            action: closure_0(closure_2[16]).TrackMediaRedactionActionType
                              .EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
                            channelId,
                            messageId,
                            context: analyticsContext,
                          };
                          result = obj.trackMediaRedactionAction(obj1);
                          return;
                        }
                      }
                      obj2.children = tmp12;
                      const tmp16 = closure_7(tmp(onConfirmPress[17]).Text, obj2);
                      cResult[15] = tmp4.heading;
                      cResult[16] = tmp16;
                      let tmp14 = tmp16;
                    } else {
                      tmp14 = cResult[16];
                    }
                    const _Symbol2 = Symbol;
                    if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                      const obj3 = { variant: "text-sm/normal", children: null };
                      class R {
                        constructor() {
                          obj = closure_0(closure_2[16]);
                          obj1 = {
                            action: closure_0(closure_2[16]).TrackMediaRedactionActionType
                              .EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
                            channelId,
                            messageId,
                            context: analyticsContext,
                          };
                          result = obj.trackMediaRedactionAction(obj1);
                          return;
                        }
                      }
                      const intl = tmp(onConfirmPress[14]).intl;
                      obj3.children = intl.string(tmp(onConfirmPress[14]).t["z4du/I"]);
                      const tmp20 = closure_7(tmp19, obj3);
                      cResult[17] = tmp20;
                      let tmp17 = tmp20;
                    } else {
                      tmp17 = cResult[17];
                    }
                    if (cResult[18] !== attachmentPreview) {
                      class R {
                        constructor() {
                          obj = closure_0(closure_2[16]);
                          obj1 = {
                            action: closure_0(closure_2[16]).TrackMediaRedactionActionType
                              .EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
                            channelId,
                            messageId,
                            context: analyticsContext,
                          };
                          result = obj.trackMediaRedactionAction(obj1);
                          return;
                        }
                      }
                      cResult[18] = attachmentPreview;
                      cResult[19] = null != attachmentPreview;
                      let tmp21 = tmp23;
                    } else {
                      tmp21 = cResult[19];
                    }
                    if (cResult[20] !== embedPreview) {
                      class R {
                        constructor() {
                          obj = closure_0(closure_2[16]);
                          obj1 = {
                            action: closure_0(closure_2[16]).TrackMediaRedactionActionType
                              .EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
                            channelId,
                            messageId,
                            context: analyticsContext,
                          };
                          result = obj.trackMediaRedactionAction(obj1);
                          return;
                        }
                      }
                      cResult[20] = embedPreview;
                      cResult[21] = null != embedPreview;
                      let tmp24 = tmp26;
                    } else {
                      tmp24 = cResult[21];
                    }
                    if (cResult[22] === tmp4.content) {
                      if (cResult[23] === tmp4.contentContainer) {
                        if (cResult[24] === tmp21) {
                          if (cResult[25] === tmp24) {
                            if (cResult[26] === tmp14) {
                              let tmp27 = cResult[27];
                            }
                            const _Symbol3 = Symbol;
                            class R {
                              constructor() {
                                obj = closure_0(closure_2[16]);
                                obj1 = {
                                  action: closure_0(closure_2[16]).TrackMediaRedactionActionType
                                    .EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
                                  channelId,
                                  messageId,
                                  context: analyticsContext,
                                };
                                result = obj.trackMediaRedactionAction(obj1);
                                return;
                              }
                            }
                            if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                              const string2 = tmp(onConfirmPress[14]).intl.string;
                              class R {
                                constructor() {
                                  obj = closure_0(closure_2[16]);
                                  obj1 = {
                                    action: closure_0(closure_2[16]).TrackMediaRedactionActionType
                                      .EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
                                    channelId,
                                    messageId,
                                    context: analyticsContext,
                                  };
                                  result = obj.trackMediaRedactionAction(obj1);
                                  return;
                                }
                              }
                              cResult[28] = tmp33;
                              let tmp32 = tmp33;
                            } else {
                              tmp32 = cResult[28];
                            }
                            if (cResult[29] === tmp6) {
                              if (cResult[30] === isReportFalsePositiveLoading) {
                                let tmp34 = cResult[31];
                              }
                              const _Symbol4 = Symbol;
                              class R {
                                constructor() {
                                  obj = closure_0(closure_2[16]);
                                  obj1 = {
                                    action: closure_0(closure_2[16]).TrackMediaRedactionActionType
                                      .EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
                                    channelId,
                                    messageId,
                                    context: analyticsContext,
                                  };
                                  result = obj.trackMediaRedactionAction(obj1);
                                  return;
                                }
                              }
                              if (tmp37 === Symbol.for("react.memo_cache_sentinel")) {
                                const string3 = tmp(onConfirmPress[14]).intl.string;
                                class R {
                                  constructor() {
                                    obj = closure_0(closure_2[16]);
                                    obj1 = {
                                      action: closure_0(closure_2[16]).TrackMediaRedactionActionType
                                        .EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
                                      channelId,
                                      messageId,
                                      context: analyticsContext,
                                    };
                                    result = obj.trackMediaRedactionAction(obj1);
                                    return;
                                  }
                                }
                                cResult[32] = tmp39;
                              }
                              if (cResult[33] !== tmp5) {
                                const obj4 = { variant: "secondary", size: "md", text: null, onPress: null };
                                class R {
                                  constructor() {
                                    obj = closure_0(closure_2[16]);
                                    obj1 = {
                                      action: closure_0(closure_2[16]).TrackMediaRedactionActionType
                                        .EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
                                      channelId,
                                      messageId,
                                      context: analyticsContext,
                                    };
                                    result = obj.trackMediaRedactionAction(obj1);
                                    return;
                                  }
                                }
                                obj4.onPress = tmp5;
                                const tmp42 = closure_7(tmp(onConfirmPress[18]).Button, obj4);
                                cResult[33] = tmp5;
                                cResult[34] = tmp42;
                                let tmp40 = tmp42;
                              } else {
                                tmp40 = cResult[34];
                              }
                              if (cResult[35] === tmp4.footer) {
                                if (cResult[36] === tmp34) {
                                  if (cResult[37] === tmp40) {
                                    let tmp43 = cResult[38];
                                  }
                                  if (cResult[39] === tmp27) {
                                    if (cResult[40] === tmp43) {
                                      let tmp47 = cResult[41];
                                    }
                                    return tmp47;
                                  }
                                  class R {
                                    constructor() {
                                      obj = closure_0(closure_2[16]);
                                      obj1 = {
                                        action: closure_0(closure_2[16]).TrackMediaRedactionActionType
                                          .EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
                                        channelId,
                                        messageId,
                                        context: analyticsContext,
                                      };
                                      result = obj.trackMediaRedactionAction(obj1);
                                      return;
                                    }
                                  }
                                  const obj5 = { startExpanded: true, children: null };
                                  const obj6 = { children: null };
                                  const items = [tmp27, tmp43];
                                  obj6.children = items;
                                  obj5.children = closure_8(closure_4, obj6);
                                  const tmp50 = closure_7(tmp(onConfirmPress[19]).BottomSheet, obj5);
                                  cResult[39] = tmp27;
                                  cResult[40] = tmp43;
                                  cResult[41] = tmp50;
                                  tmp47 = tmp50;
                                }
                              }
                              const obj7 = { style: tmp31, children: null };
                              const items1 = [tmp34, tmp40];
                              obj7.children = items1;
                              const tmp46 = closure_8(closure_4, obj7);
                              cResult[35] = tmp4.footer;
                              cResult[36] = tmp34;
                              cResult[37] = tmp40;
                              cResult[38] = tmp46;
                              tmp43 = tmp46;
                            }
                            const obj8 = {
                              variant: "primary",
                              size: "md",
                              disabled: isReportFalsePositiveLoading,
                              loading: isReportFalsePositiveLoading,
                              text: tmp32,
                              onPress: tmp6,
                            };
                            const tmp36 = closure_7(tmp(onConfirmPress[18]).Button, obj8);
                            cResult[29] = tmp6;
                            cResult[30] = isReportFalsePositiveLoading;
                            cResult[31] = tmp36;
                            tmp34 = tmp36;
                          }
                        }
                      }
                    }
                    const obj9 = { style: content, contentContainerStyle: contentContainer, children: null };
                    const items2 = [tmp14, tmp17, tmp21, tmp24];
                    obj9.children = items2;
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
                    obj = closure_0(closure_2[16]);
                    obj1 = {
                      action: closure_0(closure_2[16]).TrackMediaRedactionActionType
                        .EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
                      channelId,
                      messageId,
                      context: analyticsContext,
                    };
                    result = obj.trackMediaRedactionAction(obj1);
                    return;
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
        const result = obj.trackMediaRedactionAction({
          action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
          channelId,
          messageId,
          context: analyticsContext,
        });
        const obj2 = {
          action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
          channelId,
          messageId,
          context: analyticsContext,
        };
        ActionSheetActionCreatorsDefault.hideActionSheet();
      };
      cResult[0] = analyticsContext;
      cResult[1] = channelId;
      cResult[2] = messageId;
      cResult[3] = fn;
      tmp5 = fn;
      let obj = channelId(onConfirmPress[4]);
    }
  : (channelId) => {
      channelId = channelId.channelId;
      const messageId = channelId.messageId;
      ({ isReportFalsePositiveLoading, attachmentPreview, embedPreview, onConfirmPress } = channelId);
      const analyticsContext = channelId.analyticsContext;
      const tmp = closure_12();
      const items = [channelId, messageId, analyticsContext];
      const items1 = [channelId, messageId, analyticsContext, onConfirmPress];
      const callback = analyticsContext.useCallback(() => {
        const obj = ExplicitMediaRedactionUtils;
        const result = obj.trackMediaRedactionAction({
          action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
          channelId,
          messageId,
          context: analyticsContext,
        });
        const obj2 = {
          action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
          channelId,
          messageId,
          context: analyticsContext,
        };
        ActionSheetActionCreatorsDefault.hideActionSheet();
      }, items);
      const items2 = [channelId, messageId, analyticsContext];
      const callback1 = analyticsContext.useCallback(() => {
        if (onConfirmPress != null) {
          tmp();
        }
        const obj = ExplicitMediaRedactionUtils;
        const result = obj.trackMediaRedactionAction({
          action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
          channelId,
          messageId,
          context: analyticsContext,
        });
      }, items1);
      const effect = analyticsContext.useEffect(() => {
        const obj = ExplicitMediaRedactionUtils;
        const result = obj.trackMediaRedactionAction({
          action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
          channelId,
          messageId,
          context: analyticsContext,
        });
      }, items2);
      let obj = { style: tmp.content, contentContainerStyle: tmp.contentContainer, children: null };
      let obj2 = { style: tmp.heading, variant: "heading-lg/bold", children: null };
      const intl = channelId(onConfirmPress[14]).intl;
      obj2.children = intl.string(channelId(onConfirmPress[14]).t.TPpVkI);
      const items3 = [closure_7(channelId(onConfirmPress[17]).Text, obj2), , ,];
      const obj3 = { variant: "text-sm/normal", children: null };
      const intl2 = channelId(onConfirmPress[14]).intl;
      obj3.children = intl2.string(channelId(onConfirmPress[14]).t["z4du/I"]);
      items3[1] = closure_7(channelId(onConfirmPress[17]).Text, obj3);
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
      const obj6 = { startExpanded: true, children: null };
      const obj7 = { children: null };
      items3[3] = tmp5Result2;
      obj.children = items3;
      const items4 = [closure_8(closure_6, obj)];
      const obj8 = { style: tmp.footer, children: null };
      const obj9 = {
        variant: "primary",
        size: "md",
        disabled: isReportFalsePositiveLoading,
        loading: isReportFalsePositiveLoading,
        text: null,
        onPress: null,
      };
      const intl3 = tmp6(onConfirmPress[14]).intl;
      obj9.text = intl3.string(channelId(onConfirmPress[14]).t["cY+Oob"]);
      obj9.onPress = callback1;
      const items5 = [closure_7(channelId(onConfirmPress[18]).Button, obj9)];
      const obj10 = { variant: "secondary", size: "md", text: null, onPress: null };
      const intl4 = tmp6(onConfirmPress[14]).intl;
      obj10.text = intl4.string(channelId(onConfirmPress[14]).t["ETE/oC"]);
      obj10.onPress = callback;
      items5[1] = closure_7(channelId(onConfirmPress[18]).Button, obj10);
      obj8.children = items5;
      items4[1] = closure_8(closure_4, obj8);
      obj7.children = items4;
      obj6.children = closure_8(closure_4, obj7);
      return closure_7(channelId(onConfirmPress[19]).BottomSheet, obj6);
    };
