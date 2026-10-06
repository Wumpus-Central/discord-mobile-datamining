// === Module 9128: StreamTile ===

// Module 9128 (StreamTile)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 4892 */;
import Constants2 from "Constants" /* 4921 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5048 */;
import Pressables from "Pressables" /* 5916 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6147 */;
import useParticipantTileTapGestureDefault from "useParticipantTileTapGesture" /* 9126 */;
import useVideoStreamErrorDefault from "useVideoStreamError" /* 9129 */;
import VideoEmptyStateDefault from "VideoEmptyState" /* 9132 */;
import StreamQualityLiveIndicatorDefault from "StreamQualityLiveIndicator" /* 9136 */;
import VideoRenderer from "VideoRenderer" /* 9140 */;
import AssetRegistryDefault from "AssetRegistry" /* 9153 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4918 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ColorUtils_mod from "ColorUtils" /* 4733 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const VideoRendererDefault = VideoRenderer;
let importDefault, participant;

let ColorUtils;
let StyleSheet;
let c10;
let closure_12;
let closure_4;
let obj2;
let obj3;
let obj4;
let size;
let unpackModuleId;
({ View: closure_4, StyleSheet } = react_native);
const ApplicationStreamStates = Constants.ApplicationStreamStates;
const MediaEngineContextTypes = Constants2.MediaEngineContextTypes;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, screenMessageContainer: obj3, screenMessageText: { lineHeight: 18 }, screenMessageSubtext: obj4, statusWrapper: size, liveTag: { position: "absolute", right: 8, top: 8 } };
obj2 = { flex: 1, alignItems: "center", justifyContent: "center", overflow: "hidden", width: "100%", backgroundColor: nativeDefault.colors.BLACK };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, padding: 8, alignItems: "center", justifyContent: "center", backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.7) };
const merged = Object.assign(StyleSheet.absoluteFillObject);
ColorUtils = ColorUtils_mod;
obj4 = { color: nativeDefault.unsafe_rawColors.PRIMARY_300, fontSize: 14, lineHeight: 18, textAlign: "center" };
size = { position: "absolute", bottom: 8, right: 8, backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_700, 0.5), borderRadius: nativeDefault.radii.md, width: 24, height: 24, justifyContent: "center", alignItems: "center" };
ColorUtils = ColorUtils_mod;
let closure_13 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let items;
  let subtext;
  let title;
  const obj = react2;
  const cResult = obj.c(10);
  ({ title, subtext } = arg0);
  const tmp4 = closure_13();
  if (cResult[0] === tmp4.screenMessageText) {
    let tmp5;
    if (cResult[1] === title) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === tmp4.screenMessageSubtext) {
      let tmp7;
      if (cResult[4] === subtext) {
        tmp7 = cResult[5];
      }
      if (cResult[6] === tmp4.screenMessageContainer) {
        if (cResult[7] === tmp5) {
          let tmp10;
          if (cResult[8] === tmp7) {
            tmp10 = cResult[9];
          }
          return tmp10;
        }
      }
      const obj2 = { style: tmp4.screenMessageContainer, children: items };
      items = [tmp5, tmp7];
      const tmp13 = unpackModuleId(React3, obj2);
      cResult[6] = tmp4.screenMessageContainer;
      cResult[7] = tmp5;
      cResult[8] = tmp7;
      cResult[9] = tmp13;
      tmp10 = tmp13;
    }
    let tmp8 = null;
    if (null != subtext) {
      const obj3 = { style: tmp4.screenMessageSubtext, children: subtext };
      tmp8 = authStore(native.LegacyText, obj3);
    }
    cResult[3] = tmp4.screenMessageSubtext;
    cResult[4] = subtext;
    cResult[5] = tmp8;
    tmp7 = tmp8;
  }
  const obj4 = { style: tmp4.screenMessageText, variant: "text-md/semibold", color: "text-overlay-light", children: title };
  const tmp6 = authStore(Text_Text.Text, obj4);
  cResult[0] = tmp4.screenMessageText;
  cResult[1] = title;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : ((subtext) => {
  let items;
  subtext = subtext.subtext;
  const title = subtext.title;
  const tmp = closure_13();
  const obj = { style: tmp.screenMessageContainer, children: items };
  items = [, ];
  const obj2 = { style: tmp.screenMessageText, variant: "text-md/semibold", color: "text-overlay-light", children: title };
  items[0] = authStore(Text_Text.Text, obj2);
  let tmp4Result = null;
  if (null != subtext) {
    const obj3 = { style: tmp.screenMessageSubtext, children: subtext };
    tmp4Result = authStore(native.LegacyText, obj3);
  }
  items[1] = tmp4Result;
  return unpackModuleId(React3, obj);
});
let closure_14 = tmp7;
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((participant) => {
  let first;
  let gestureEnabled;
  let intl3;
  let liveTag;
  let removeEmptyStateButton;
  let removeEmptyStateImage;
  let resizeMode;
  let streamId;
  let tmp7;
  let tmp9Result5;
  let user;
  let obj = participant(576);
  const cResult = obj.c(38);
  participant = participant.participant;
  ({ streamId, user, resizeMode, gestureEnabled, removeEmptyStateButton, removeEmptyStateImage } = participant);
  const tmp4 = closure_13();
  importDefault = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApplicationStreamingStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== participant.id) {
    const fn = function s() {
      return ApplicationStreamingStore.getActiveStreamForStreamKey(participant.id);
    };
    cResult[1] = participant.id;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = participant(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  const tmp10 = useVideoStreamErrorDefault(MediaEngineContextTypes.STREAM, participant.user.id);
  if (null != stateFromStores) {
    const state = stateFromStores.state;
    if (ApplicationStreamStates.FAILED === state) {
      if (cResult[3] === stateFromStores) {
        if (cResult[4] === removeEmptyStateButton) {
          let tmp40;
          if (cResult[5] === removeEmptyStateImage) {
            tmp40 = cResult[6];
          }
          return tmp40;
        }
      }
      const obj2 = { stream: stateFromStores, removeCloseButton: removeEmptyStateButton, removeSplashImage: removeEmptyStateImage, type: participant(9132).VideoEmptyTypes.STREAM_FAILED, style: StyleSheet.absoluteFill };
      const tmp9Result = VideoEmptyStateDefault;
      const tmp44 = closure_10(tmp9Result, obj2);
      cResult[3] = stateFromStores;
      cResult[4] = removeEmptyStateButton;
      cResult[5] = removeEmptyStateImage;
      cResult[6] = tmp44;
      tmp40 = tmp44;
    } else if (ApplicationStreamStates.ENDED === state) {
      if (cResult[7] === stateFromStores) {
        if (cResult[8] === removeEmptyStateButton) {
          let tmp35;
          if (cResult[9] === removeEmptyStateImage) {
            tmp35 = cResult[10];
          }
          return tmp35;
        }
      }
      const obj3 = { stream: stateFromStores, removeCloseButton: removeEmptyStateButton, removeSplashImage: removeEmptyStateImage, type: participant(9132).VideoEmptyTypes.STREAM_ENDED, style: StyleSheet.absoluteFill };
      const tmp9Result4 = VideoEmptyStateDefault;
      const tmp39 = closure_10(tmp9Result4, obj3);
      cResult[7] = stateFromStores;
      cResult[8] = removeEmptyStateButton;
      cResult[9] = removeEmptyStateImage;
      cResult[10] = tmp39;
      tmp35 = tmp39;
    } else {
      if (ApplicationStreamStates.RECONNECTING === state) {
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { title: intl3.string(participant(1126).t["pdFFK+"]) };
          intl3 = tmp(1126).intl;
          const tmp24 = closure_10(closure_14, obj4);
          cResult[11] = tmp24;
        }
      } else if (ApplicationStreamStates.PAUSED === state) {
        let tmp12;
        const _Symbol2 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(participant(1126).t["5q17w5"]);
          cResult[12] = stringResult;
          tmp12 = stringResult;
        } else {
          tmp12 = cResult[12];
        }
        if (cResult[13] === stateFromStores.channelId) {
          if (cResult[14] === stateFromStores.guildId) {
            let tmp14;
            if (cResult[15] === user) {
              tmp14 = cResult[16];
            }
            if (cResult[17] !== tmp14) {
              const obj5 = { title: tmp12, subtext: tmp14 };
              const tmp19 = closure_10(closure_14, obj5);
              cResult[17] = tmp14;
              cResult[18] = tmp19;
            }
          }
        }
        const intl2 = tmp(1126).intl;
        const formatToPlainString = intl2.formatToPlainString;
        const obj6 = { username: tmp9Result5.getName(stateFromStores.guildId, stateFromStores.channelId, user) };
        const meVVlb = tmp(1126).t.meVVlb;
        tmp9Result5 = NicknameUtilsDefault;
        const formatToPlainStringResult = formatToPlainString(meVVlb, obj6);
        cResult[13] = stateFromStores.channelId;
        cResult[14] = stateFromStores.guildId;
        cResult[15] = user;
        cResult[16] = formatToPlainStringResult;
        tmp14 = formatToPlainStringResult;
      }
      if (null != tmp10) {
        if (cResult[19] === stateFromStores) {
          if (cResult[20] === removeEmptyStateButton) {
            if (cResult[21] === removeEmptyStateImage) {
              let tmp30;
              if (cResult[22] === tmp10) {
                tmp30 = cResult[23];
              }
              return tmp30;
            }
          }
        }
        const obj7 = { stream: stateFromStores, removeCloseButton: removeEmptyStateButton, removeSplashImage: removeEmptyStateImage, type: participant(9132).VideoEmptyTypes.STREAM_FAILED, style: StyleSheet.absoluteFill, avError: tmp10 };
        const tmp9Result6 = VideoEmptyStateDefault;
        const tmp34 = closure_10(tmp9Result6, obj7);
        cResult[19] = stateFromStores;
        cResult[20] = removeEmptyStateButton;
        cResult[21] = removeEmptyStateImage;
        cResult[22] = tmp10;
        cResult[23] = tmp34;
        tmp30 = tmp34;
      } else {
        const ownerId = stateFromStores.ownerId;
        if (cResult[24] === participant) {
          let tmp25;
          let REMOTE_STREAM;
          if (cResult[25] === tmp4.liveTag) {
            tmp25 = cResult[26];
          }
          if (ownerId === tmp46) {
            REMOTE_STREAM = tmp(9139).VideoSpinnerContext.SELF_STREAM;
          } else {
            REMOTE_STREAM = tmp(9139).VideoSpinnerContext.REMOTE_STREAM;
          }
          class P {
            constructor() {
              const obj = { style: liveTag.liveTag, participant };
              return authStore(StreamQualityLiveIndicatorDefault, obj);
            }
          }
          const obj8 = { resizeMode, streamId, gestureEnabled, renderTag: tmp25, videoSpinnerContext: REMOTE_STREAM, userId: user.id, paused: stateFromStores.state === ApplicationStreamStates.PAUSED };
          cResult[27] = gestureEnabled;
          cResult[28] = resizeMode;
          cResult[29] = streamId;
          cResult[30] = tmp25;
          cResult[31] = REMOTE_STREAM;
          cResult[32] = stateFromStores.state === ApplicationStreamStates.PAUSED;
          cResult[33] = user.id;
          cResult[34] = closure_10(VideoRendererDefault, obj8);
          const tmp29 = closure_10(VideoRendererDefault, obj8);
        }
        class P {
          constructor() {
            const obj = { style: liveTag.liveTag, participant };
            return authStore(StreamQualityLiveIndicatorDefault, obj);
          }
        }
        cResult[24] = participant;
        cResult[25] = tmp4.liveTag;
        cResult[26] = P;
        tmp25 = P;
      }
    }
  } else {
    return null;
  }
}) : ((participant) => {
  let REMOTE_STREAM;
  let formatToPlainString;
  let gestureEnabled;
  let intl;
  let intl2;
  let items1;
  let liveTag;
  let meVVlb;
  let obj6;
  let removeEmptyStateButton;
  let removeEmptyStateImage;
  let resizeMode;
  let streamId;
  let tmp4Result6;
  let user;
  participant = participant.participant;
  ({ user, removeEmptyStateButton, removeEmptyStateImage } = participant);
  ({ streamId, resizeMode, gestureEnabled } = participant);
  importDefault = closure_13();
  let obj = participant(504);
  const items = [ApplicationStreamingStore];
  const stateFromStores = obj.useStateFromStores(items, () => ApplicationStreamingStore.getActiveStreamForStreamKey(participant.id));
  const tmp5 = useVideoStreamErrorDefault(MediaEngineContextTypes.STREAM, participant.user.id);
  if (null != stateFromStores) {
    const state = stateFromStores.state;
    if (ApplicationStreamStates.FAILED === state) {
      const obj2 = { stream: stateFromStores, removeCloseButton: removeEmptyStateButton, removeSplashImage: removeEmptyStateImage, type: participant(9132).VideoEmptyTypes.STREAM_FAILED, style: StyleSheet.absoluteFill };
      const tmp4Result = VideoEmptyStateDefault;
      return closure_10(tmp4Result, obj2);
    } else if (ApplicationStreamStates.ENDED === state) {
      const obj3 = { stream: stateFromStores, removeCloseButton: removeEmptyStateButton, removeSplashImage: removeEmptyStateImage, type: participant(9132).VideoEmptyTypes.STREAM_ENDED, style: StyleSheet.absoluteFill };
      const tmp4Result5 = VideoEmptyStateDefault;
      return closure_10(tmp4Result5, obj3);
    } else {
      let tmp9;
      if (ApplicationStreamStates.RECONNECTING === state) {
        const obj4 = { title: intl.string(participant(1126).t["pdFFK+"]) };
        intl = tmp(1126).intl;
        tmp9 = closure_10(closure_14, obj4);
      } else {
        tmp9 = null;
        if (ApplicationStreamStates.PAUSED === state) {
          const obj5 = { title: intl2.string(participant(1126).t["5q17w5"]), subtext: formatToPlainString(meVVlb, obj6) };
          intl2 = tmp(1126).intl;
          const intl3 = tmp(1126).intl;
          formatToPlainString = intl3.formatToPlainString;
          obj6 = { username: tmp4Result6.getName(stateFromStores.guildId, stateFromStores.channelId, user) };
          meVVlb = tmp(1126).t.meVVlb;
          tmp4Result6 = NicknameUtilsDefault;
          tmp9 = closure_10(closure_14, obj5);
        }
      }
      if (null != tmp5) {
        const obj7 = { stream: stateFromStores, removeCloseButton: removeEmptyStateButton, removeSplashImage: removeEmptyStateImage, type: participant(9132).VideoEmptyTypes.STREAM_FAILED, style: StyleSheet.absoluteFill, avError: tmp5 };
        const tmp4Result7 = VideoEmptyStateDefault;
        return closure_10(tmp4Result7, obj7);
      } else {
        const ownerId = stateFromStores.ownerId;
        const id = AuthenticationStore.getId();
        const obj8 = {
          resizeMode,
          streamId,
          gestureEnabled,
          renderTag() {
                  const obj = { style: liveTag.liveTag, participant };
                  return authStore(StreamQualityLiveIndicatorDefault, obj);
                },
          videoSpinnerContext: REMOTE_STREAM,
          userId: user.id,
          paused: stateFromStores.state === ApplicationStreamStates.PAUSED
        };
        const tmp4Result8 = VideoRendererDefault;
        if (ownerId === id) {
          REMOTE_STREAM = tmp(9139).VideoSpinnerContext.SELF_STREAM;
        } else {
          REMOTE_STREAM = tmp(9139).VideoSpinnerContext.REMOTE_STREAM;
        }
        const obj9 = { children: items1 };
        items1 = [closure_10(tmp4Result8, obj8), tmp9];
        return closure_11(closure_12, obj9);
      }
    }
  } else {
    return null;
  }
}));
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((participant) => {
  let fullscreenIconStyle;
  let gestureEnabled;
  let items;
  let onFullScreen;
  let removeEmptyStateButton;
  let removeEmptyStateImage;
  let resizeMode;
  let streamId;
  let style;
  let user;
  const obj = react2;
  const cResult = obj.c(30);
  participant = participant.participant;
  const onSingleTap = participant.onSingleTap;
  const onDoubleTap = participant.onDoubleTap;
  ({ resizeMode, gestureEnabled, removeEmptyStateButton, removeEmptyStateImage, onFullScreen, fullscreenIconStyle, style } = participant);
  if (undefined === resizeMode) {
    resizeMode = VideoRenderer.ResizeMode.CONTAIN;
  }
  const tmp4 = closure_13();
  if (cResult[0] === onSingleTap) {
    let tmp5;
    if (cResult[1] === participant) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === onDoubleTap) {
      let tmp6;
      if (cResult[4] === participant) {
        tmp6 = cResult[5];
      }
      if (cResult[6] === tmp6) {
        class F {
          constructor() {
            let tmpResult;
            if (onDoubleTap != null) {
              tmpResult = tmp(participant);
            }
            return tmpResult;
          }
        }
        ({ streamId, user } = participant);
        if (cResult[9] === style) {
          let tmp11;
          if (cResult[10] === tmp4.container) {
            tmp11 = cResult[11];
          }
          if (cResult[12] === gestureEnabled) {
            if (cResult[13] === participant) {
              if (cResult[14] === removeEmptyStateButton) {
                if (cResult[15] === removeEmptyStateImage) {
                  if (cResult[16] === resizeMode) {
                    if (cResult[17] === streamId) {
                      let tmp12;
                      if (cResult[18] === user) {
                        tmp12 = cResult[19];
                      }
                      if (cResult[20] === fullscreenIconStyle) {
                        let tmp15;
                        if (cResult[21] === onFullScreen) {
                          tmp15 = cResult[22];
                        }
                        if (cResult[23] === tmp11) {
                          if (cResult[24] === tmp12) {
                            let tmp20;
                            if (cResult[25] === tmp15) {
                              tmp20 = cResult[26];
                            }
                            if (cResult[27] === tmp10) {
                              let tmp23;
                              if (cResult[28] === tmp20) {
                                tmp23 = cResult[29];
                              }
                              return tmp23;
                            }
                            class F {
                              constructor() {
                                let tmpResult;
                                if (onDoubleTap != null) {
                                  tmpResult = tmp(participant);
                                }
                                return tmpResult;
                              }
                            }
                            const obj2 = { gesture: tmp10, children: tmp20 };
                            const tmp24 = authStore(LegacyBaseButton.GestureDetector, obj2);
                            cResult[27] = tmp10;
                            cResult[28] = tmp20;
                            cResult[29] = tmp24;
                            tmp23 = tmp24;
                          }
                        }
                        class F {
                          constructor() {
                            let tmpResult;
                            if (onDoubleTap != null) {
                              tmpResult = tmp(participant);
                            }
                            return tmpResult;
                          }
                        }
                        const obj3 = { style: tmp11, children: items };
                        items = [tmp12, tmp15];
                        const tmp22 = unpackModuleId(React3, obj3);
                        cResult[23] = tmp11;
                        cResult[24] = tmp12;
                        cResult[25] = tmp15;
                        cResult[26] = tmp22;
                        tmp20 = tmp22;
                      }
                      class F {
                        constructor() {
                          let tmpResult;
                          if (onDoubleTap != null) {
                            tmpResult = tmp(participant);
                          }
                          return tmpResult;
                        }
                      }
                      let tmp16 = null != onFullScreen;
                      if (tmp16) {
                        class F {
                          constructor() {
                            let tmpResult;
                            if (onDoubleTap != null) {
                              tmpResult = tmp(participant);
                            }
                            return tmpResult;
                          }
                        }
                        tmp19[0] = onFullScreen;
                        tmp19[1] = fullscreenIconStyle;
                        tmp16 = authStore(closure_16, tmp19);
                      }
                      cResult[20] = fullscreenIconStyle;
                      cResult[21] = onFullScreen;
                      cResult[22] = tmp16;
                      tmp15 = tmp16;
                    }
                  }
                }
              }
            }
          }
          class F {
            constructor() {
              let tmpResult;
              if (onDoubleTap != null) {
                tmpResult = tmp(participant);
              }
              return tmpResult;
            }
          }
          const obj4 = { streamId, participant, user, resizeMode, gestureEnabled, removeEmptyStateButton, removeEmptyStateImage };
          const tmp14 = authStore(closure_15, obj4);
          cResult[12] = gestureEnabled;
          cResult[13] = participant;
          cResult[14] = removeEmptyStateButton;
          cResult[15] = removeEmptyStateImage;
          cResult[16] = resizeMode;
          cResult[17] = streamId;
          cResult[18] = user;
          cResult[19] = tmp14;
          tmp12 = tmp14;
        }
        const items1 = [tmp4.container, style];
        cResult[9] = style;
        cResult[10] = tmp4.container;
        cResult[11] = items1;
        tmp11 = items1;
      }
      class F {
        constructor() {
          let tmpResult;
          if (onDoubleTap != null) {
            tmpResult = tmp(participant);
          }
          return tmpResult;
        }
      }
      tmp8[0] = tmp5;
      tmp8[1] = tmp6;
      cResult[6] = tmp6;
      cResult[7] = tmp5;
      cResult[8] = tmp8;
    }
    class F {
      constructor() {
        let tmpResult;
        if (onDoubleTap != null) {
          tmpResult = tmp(participant);
        }
        return tmpResult;
      }
    }
    cResult[3] = onDoubleTap;
    cResult[4] = participant;
    cResult[5] = F;
    tmp6 = F;
  }
  const fn = function n() {
    let tmpResult;
    if (onSingleTap != null) {
      tmpResult = tmp(participant);
    }
    return tmpResult;
  };
  cResult[0] = onSingleTap;
  cResult[1] = participant;
  cResult[2] = fn;
  tmp5 = fn;
}) : ((participant) => {
  let fullscreenIconStyle;
  let gestureEnabled;
  let items2;
  let items3;
  let obj2;
  let removeEmptyStateButton;
  let removeEmptyStateImage;
  let streamId;
  let style;
  let user;
  participant = participant.participant;
  const onSingleTap = participant.onSingleTap;
  const onDoubleTap = participant.onDoubleTap;
  let CONTAIN = participant.resizeMode;
  if (CONTAIN === undefined) {
    CONTAIN = VideoRenderer.ResizeMode.CONTAIN;
  }
  const onFullScreen = participant.onFullScreen;
  ({ gestureEnabled, removeEmptyStateButton, removeEmptyStateImage, fullscreenIconStyle, style } = participant);
  const items = [onSingleTap, participant];
  const items1 = [onDoubleTap, participant];
  const tmp3 = closure_13();
  const callback = react.useCallback(() => {
    let tmpResult;
    if (onSingleTap != null) {
      tmpResult = tmp(participant);
    }
    return tmpResult;
  }, items);
  const callback1 = react.useCallback(() => {
    let tmpResult;
    if (onDoubleTap != null) {
      tmpResult = tmp(participant);
    }
    return tmpResult;
  }, items1);
  ({ streamId, user } = participant);
  const obj = { gesture: useParticipantTileTapGestureDefault({ onSingleTapStart: callback, onDoubleTapStart: callback1 }), children: unpackModuleId(React3, obj2) };
  obj2 = { style: items2, children: items3 };
  items2 = [tmp3.container, style];
  const GestureDetector = LegacyBaseButton.GestureDetector;
  items3 = [authStore(closure_15, { streamId, participant, user, resizeMode: CONTAIN, gestureEnabled, removeEmptyStateButton, removeEmptyStateImage }), ];
  let tmp7Result = null != onFullScreen;
  if (tmp7Result) {
    const obj3 = { onFullScreen, style: fullscreenIconStyle };
    tmp7Result = authStore(closure_16, obj3);
  }
  items3[1] = tmp7Result;
  return authStore(GestureDetector, obj);
});
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = memo2(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let onFullScreen;
  let style;
  const obj = react2;
  const cResult = obj.c(8);
  ({ onFullScreen, style } = arg0);
  const tmp4 = closure_13();
  if (cResult[0] === style) {
    let tmp5;
    let tmp8;
    let tmp7;
    if (cResult[1] === tmp4.statusWrapper) {
      tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const rect = { top: 4, left: 4, right: 4, bottom: 4 };
      const obj2 = { source: AssetRegistryDefault, size: native.Icon.Sizes.SMALL, color: nativeDefault.unsafe_rawColors.WHITE };
      const Icon = native.Icon;
      const tmp11 = authStore(Icon, obj2);
      cResult[3] = rect;
      cResult[4] = tmp11;
      tmp8 = tmp11;
      tmp7 = rect;
    } else {
      tmp7 = cResult[3];
      tmp8 = cResult[4];
    }
    if (cResult[5] === onFullScreen) {
      let tmp12;
      if (cResult[6] === tmp5) {
        tmp12 = cResult[7];
      }
      return tmp12;
    }
    const obj3 = { accessibilityRole: "button", onPress: onFullScreen, style: tmp5, hitSlop: tmp7, children: tmp8 };
    const tmp14 = authStore(Pressables.PressableOpacity, obj3);
    cResult[5] = onFullScreen;
    cResult[6] = tmp5;
    cResult[7] = tmp14;
    tmp12 = tmp14;
  }
  const items = [tmp4.statusWrapper, style];
  cResult[0] = style;
  cResult[1] = tmp4.statusWrapper;
  cResult[2] = items;
  tmp5 = items;
}) : ((arg0) => {
  let Icon;
  let items;
  let obj2;
  let onFullScreen;
  let style;
  ({ onFullScreen, style } = arg0);
  const obj = { accessibilityRole: "button", onPress: onFullScreen, style: items, hitSlop: { top: 4, left: 4, right: 4, bottom: 4 }, children: authStore(Icon, obj2) };
  items = [closure_13().statusWrapper, style];
  closure_13();
  const PressableOpacity = Pressables.PressableOpacity;
  obj2 = { source: AssetRegistryDefault, size: native.Icon.Sizes.SMALL, color: nativeDefault.unsafe_rawColors.WHITE };
  Icon = native.Icon;
  return authStore(PressableOpacity, obj);
}));
size = size_mod;
const result = size.fileFinishedImporting("modules/video_calls/native/components/StreamTile.tsx");

export default tmp8;
export const StreamTextOverlay = tmp7;