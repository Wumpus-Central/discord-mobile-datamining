// discord_app/modules/video_calls/native/components/StreamTile.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import LegacyBaseButton from "../../../../../_runtime/06333_LegacyBaseButton.js";
import useParticipantTileTapGestureDefault from "../useParticipantTileTapGesture.tsx";
import useVideoStreamErrorDefault from "../../../errors/hooks/useVideoStreamError.tsx";
import StreamQualityLiveIndicatorDefault from "../../../go_live/native/StreamQualityLiveIndicator.tsx";
import VideoRenderer from "VideoRenderer.tsx";
import _modDef10865 from "../../../../../_runtime/metro/10865__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const ApplicationStreamStates = fn(1085).ApplicationStreamStates;
const MediaEngineContextTypes = fn(5116).MediaEngineContextTypes;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(5091);
let obj = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    width: "100%",
    backgroundColor: nativeDefault.colors.BLACK,
  },
  screenMessageContainer: null,
  screenMessageText: null,
  screenMessageSubtext: null,
  statusWrapper: null,
  liveTag: null,
};
let obj4 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.flex = 1;
obj4.padding = 8;
obj4.alignItems = "center";
obj4.justifyContent = "center";
let ColorUtils = fn(4928);
obj4.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.7);
obj.screenMessageContainer = obj4;
obj.screenMessageText = { lineHeight: 18 };
let obj3 = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  width: "100%",
  backgroundColor: nativeDefault.colors.BLACK,
};
obj.screenMessageSubtext = {
  color: nativeDefault.unsafe_rawColors.PRIMARY_300,
  fontSize: 14,
  lineHeight: 18,
  textAlign: "center",
};
let size = {
  position: "absolute",
  bottom: 8,
  right: 8,
  backgroundColor: null,
  borderRadius: null,
  width: 24,
  height: 24,
  justifyContent: "center",
  alignItems: "center",
};
ColorUtils = fn(4928);
size.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_700, 0.5);
size.borderRadius = nativeDefault.radii.md;
obj.statusWrapper = size;
obj.liveTag = { position: "absolute", right: 8, top: 8 };
let closure_13 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function StreamTextOverlay(arg0) {
      const cResult = c.c(10);
      ({ title, subtext } = arg0);
      const tmp4 = closure_13();
      if (cResult[0] === tmp4.screenMessageText) {
        if (cResult[1] === title) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] === tmp4.screenMessageSubtext) {
          if (cResult[4] === subtext) {
            let tmp7 = cResult[5];
          }
          if (cResult[6] === tmp4.screenMessageContainer) {
            if (cResult[7] === tmp5) {
              if (cResult[8] === tmp7) {
                let tmp10 = cResult[9];
              }
              return tmp10;
            }
          }
          const obj2 = { style: tmp4.screenMessageContainer, children: null };
          const items = [tmp5, tmp7];
          obj2.children = items;
          const tmp13 = closure_1_11(React4, obj2);
          cResult[6] = tmp4.screenMessageContainer;
          cResult[7] = tmp5;
          cResult[8] = tmp7;
          cResult[9] = tmp13;
          tmp10 = tmp13;
        }
        let tmp8 = null;
        if (null != subtext) {
          const obj3 = { style: tmp4.screenMessageSubtext, children: subtext };
          tmp8 = collapsed(native.LegacyText, obj3);
        }
        cResult[3] = tmp4.screenMessageSubtext;
        cResult[4] = subtext;
        cResult[5] = tmp8;
        tmp7 = tmp8;
      }
      const tmp6 = collapsed(Text_Text.Text, {
        style: tmp4.screenMessageText,
        variant: "text-md/semibold",
        color: "text-overlay-light",
        children: title,
      });
      cResult[0] = tmp4.screenMessageText;
      cResult[1] = title;
      cResult[2] = tmp6;
      tmp5 = tmp6;
      const obj4 = {
        style: tmp4.screenMessageText,
        variant: "text-md/semibold",
        color: "text-overlay-light",
        children: title,
      };
    }
  : function StreamTextOverlay(children) {
      const subtext = children.subtext;
      const tmp = closure_13();
      const obj = { style: tmp.screenMessageContainer, children: null };
      const items = [
        collapsed(Text_Text.Text, {
          style: tmp.screenMessageText,
          variant: "text-md/semibold",
          color: "text-overlay-light",
          children: children.title,
        }),
      ];
      let tmp4Result = null;
      if (null != subtext) {
        const obj3 = { style: tmp.screenMessageSubtext, children: subtext };
        tmp4Result = collapsed(native.LegacyText, obj3);
      }
      items[1] = tmp4Result;
      obj.children = items;
      return closure_1_11(React4, obj);
    };
let closure_14 = tmp5;
ReactCompilerGating = fn(558);
let closure_15 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function StreamContent(participant) {
        const cResult = participant(576).c(38);
        participant = participant.participant;
        ({ streamId, user, resizeMode, gestureEnabled, removeEmptyStateButton, removeEmptyStateImage } = participant);
        const tmp4 = closure_13();
        importDefault = tmp4;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [ApplicationStreamingStore];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== participant.id) {
          const fn = function s() {
            return ApplicationStreamingStore.getActiveStreamForStreamKey(participant.id);
          };
          cResult[1] = participant.id;
          cResult[2] = fn;
          let tmp7 = fn;
        } else {
          tmp7 = cResult[2];
        }
        const obj = participant(576);
        const stateFromStores = participant(504).useStateFromStores(first, tmp7);
        const tmp10 = useVideoStreamErrorDefault(MediaEngineContextTypes.STREAM, participant.user.id);
        if (null != stateFromStores) {
          state = stateFromStores.state;
          if (ApplicationStreamStates.FAILED === state) {
            if (cResult[3] === stateFromStores) {
              if (cResult[4] === removeEmptyStateButton) {
                if (cResult[5] === removeEmptyStateImage) {
                  let tmp41 = cResult[6];
                }
                return tmp41;
              }
            }
            const obj2 = {
              stream: stateFromStores,
              removeCloseButton: removeEmptyStateButton,
              removeSplashImage: removeEmptyStateImage,
              type: tmp(10849).VideoEmptyTypes.STREAM_FAILED,
              style: StyleSheet.absoluteFill,
            };
            const tmp45 = closure_10(tmp9(10849), obj2);
            cResult[3] = stateFromStores;
            cResult[4] = removeEmptyStateButton;
            cResult[5] = removeEmptyStateImage;
            cResult[6] = tmp45;
            tmp41 = tmp45;
            const tmp9Result = tmp9(10849);
          } else if (ApplicationStreamStates.ENDED === state) {
            if (cResult[7] === stateFromStores) {
              if (cResult[8] === removeEmptyStateButton) {
                if (cResult[9] === removeEmptyStateImage) {
                  let tmp36 = cResult[10];
                }
                return tmp36;
              }
            }
            const obj3 = {
              stream: stateFromStores,
              removeCloseButton: removeEmptyStateButton,
              removeSplashImage: removeEmptyStateImage,
              type: tmp(10849).VideoEmptyTypes.STREAM_ENDED,
              style: StyleSheet.absoluteFill,
            };
            const tmp40 = closure_10(tmp9(10849), obj3);
            cResult[7] = stateFromStores;
            cResult[8] = removeEmptyStateButton;
            cResult[9] = removeEmptyStateImage;
            cResult[10] = tmp40;
            tmp36 = tmp40;
            const tmp9Result4 = tmp9(10849);
          } else if (ApplicationStreamStates.RECONNECTING === state) {
            const _Symbol = Symbol;
            if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
              const obj4 = { title: null };
              const intl3 = tmp(1126).intl;
              obj4.title = intl3.string(tmp(1126).t["pdFFK+"]);
              const tmp24 = closure_10(closure_14, obj4);
              cResult[11] = tmp24;
            }
          } else {
            if (ApplicationStreamStates.PAUSED === state) {
              const _Symbol2 = Symbol;
              if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                const intl = tmp(1126).intl;
                const stringResult = intl.string(tmp(1126).t["5q17w5"]);
                cResult[12] = stringResult;
                let tmp12 = stringResult;
              } else {
                tmp12 = cResult[12];
              }
              if (cResult[13] === stateFromStores.channelId) {
                if (cResult[14] === stateFromStores.guildId) {
                  if (cResult[15] === user) {
                    let tmp14 = cResult[16];
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
              const obj6 = { username: tmp9(5406).getName(stateFromStores.guildId, stateFromStores.channelId, user) };
              const formatToPlainStringResult = intl2.formatToPlainString(tmp(1126).t.meVVlb, obj6);
              cResult[13] = stateFromStores.channelId;
              cResult[14] = stateFromStores.guildId;
              cResult[15] = user;
              cResult[16] = formatToPlainStringResult;
              tmp14 = formatToPlainStringResult;
              const tmp9Result5 = tmp9(5406);
            }
            if (null != tmp10) {
              if (cResult[19] === stateFromStores) {
                if (cResult[20] === removeEmptyStateButton) {
                  if (cResult[21] === removeEmptyStateImage) {
                    if (cResult[22] === tmp10) {
                      let tmp31 = cResult[23];
                    }
                    return tmp31;
                  }
                }
              }
              const obj7 = {
                stream: stateFromStores,
                removeCloseButton: removeEmptyStateButton,
                removeSplashImage: removeEmptyStateImage,
                type: tmp(10849).VideoEmptyTypes.STREAM_FAILED,
                style: StyleSheet.absoluteFill,
                avError: tmp10,
              };
              const tmp35 = closure_10(tmp9(10849), obj7);
              cResult[19] = stateFromStores;
              cResult[20] = removeEmptyStateButton;
              cResult[21] = removeEmptyStateImage;
              cResult[22] = tmp10;
              cResult[23] = tmp35;
              tmp31 = tmp35;
              const tmp9Result6 = tmp9(10849);
            } else {
              if (cResult[24] === participant) {
                if (cResult[25] === tmp4.liveTag) {
                  let tmp26 = cResult[26];
                }
                if (stateFromStores.ownerId === tmp47) {
                  let REMOTE_STREAM = tmp(10855).VideoSpinnerContext.SELF_STREAM;
                } else {
                  REMOTE_STREAM = tmp(10855).VideoSpinnerContext.REMOTE_STREAM;
                }
                class P {
                  constructor() {
                    obj = { style: closure_1.liveTag, participant };
                    return jsx(closure_1(closure_2[19]), obj);
                  }
                }
                const obj8 = {
                  resizeMode,
                  streamId,
                  gestureEnabled,
                  renderTag: tmp26,
                  videoSpinnerContext: REMOTE_STREAM,
                  userId: user.id,
                  paused: stateFromStores.state === ApplicationStreamStates.PAUSED,
                };
                const tmp30 = closure_10(tmp9(10856), obj8);
                cResult[27] = gestureEnabled;
                cResult[28] = resizeMode;
                cResult[29] = streamId;
                cResult[30] = tmp26;
                cResult[31] = REMOTE_STREAM;
                cResult[32] = stateFromStores.state === ApplicationStreamStates.PAUSED;
                cResult[33] = user.id;
                cResult[34] = tmp30;
              }
              class P {
                constructor() {
                  obj = { style: closure_1.liveTag, participant };
                  return jsx(closure_1(closure_2[19]), obj);
                }
              }
              cResult[24] = participant;
              cResult[25] = tmp4.liveTag;
              cResult[26] = P;
              tmp26 = P;
            }
          }
        } else {
          return null;
        }
        const tmpResult = participant(504);
      }
    : function StreamContent(participant) {
        participant = participant.participant;
        ({ user, removeEmptyStateButton, removeEmptyStateImage } = participant);
        ({ streamId, resizeMode, gestureEnabled } = participant);
        importDefault = closure_13();
        const items = [ApplicationStreamingStore];
        const stateFromStores = participant(504).useStateFromStores(items, () =>
          ApplicationStreamingStore.getActiveStreamForStreamKey(participant.id),
        );
        const tmp5 = useVideoStreamErrorDefault(MediaEngineContextTypes.STREAM, participant.user.id);
        if (null != stateFromStores) {
          state = stateFromStores.state;
          if (ApplicationStreamStates.FAILED === state) {
            const obj2 = {
              stream: stateFromStores,
              removeCloseButton: removeEmptyStateButton,
              removeSplashImage: removeEmptyStateImage,
              type: tmp(10849).VideoEmptyTypes.STREAM_FAILED,
              style: StyleSheet.absoluteFill,
            };
            return closure_10(tmp4(10849), obj2);
          } else if (ApplicationStreamStates.ENDED === state) {
            const obj3 = {
              stream: stateFromStores,
              removeCloseButton: removeEmptyStateButton,
              removeSplashImage: removeEmptyStateImage,
              type: tmp(10849).VideoEmptyTypes.STREAM_ENDED,
              style: StyleSheet.absoluteFill,
            };
            return closure_10(tmp4(10849), obj3);
          } else {
            if (ApplicationStreamStates.RECONNECTING === state) {
              const obj4 = { title: null };
              const intl = tmp(1126).intl;
              obj4.title = intl.string(tmp(1126).t["pdFFK+"]);
              let tmp9 = closure_10(closure_14, obj4);
            } else {
              tmp9 = null;
              if (ApplicationStreamStates.PAUSED === state) {
                const obj5 = { title: null, subtext: null };
                const intl2 = tmp(1126).intl;
                obj5.title = intl2.string(tmp(1126).t["5q17w5"]);
                const intl3 = tmp(1126).intl;
                const obj6 = { username: tmp4(5406).getName(stateFromStores.guildId, stateFromStores.channelId, user) };
                obj5.subtext = intl3.formatToPlainString(tmp(1126).t.meVVlb, obj6);
                tmp9 = closure_10(closure_14, obj5);
                const tmp4Result6 = tmp4(5406);
              }
            }
            if (null != tmp5) {
              const obj7 = {
                stream: stateFromStores,
                removeCloseButton: removeEmptyStateButton,
                removeSplashImage: removeEmptyStateImage,
                type: tmp(10849).VideoEmptyTypes.STREAM_FAILED,
                style: StyleSheet.absoluteFill,
                avError: tmp5,
              };
              return closure_10(tmp4(10849), obj7);
            } else {
              const id = AuthenticationStore.getId();
              const obj8 = {
                resizeMode,
                streamId,
                gestureEnabled,
                renderTag() {
                  return collapsed(StreamQualityLiveIndicatorDefault, { style: liveTag.liveTag, participant });
                },
                videoSpinnerContext: null,
                userId: null,
                paused: null,
              };
              if (stateFromStores.ownerId === id) {
                let REMOTE_STREAM = tmp(10855).VideoSpinnerContext.SELF_STREAM;
              } else {
                REMOTE_STREAM = tmp(10855).VideoSpinnerContext.REMOTE_STREAM;
              }
              const obj9 = { children: null };
              obj8.videoSpinnerContext = REMOTE_STREAM;
              obj8.userId = user.id;
              obj8.paused = stateFromStores.state === ApplicationStreamStates.PAUSED;
              const items1 = [closure_10(tmp4(10856), obj8), tmp9];
              obj9.children = items1;
              return closure_11(closure_12, obj9);
            }
          }
        } else {
          return null;
        }
        const obj = participant(504);
      },
);
fn(558);
let obj5 = { color: nativeDefault.unsafe_rawColors.PRIMARY_300, fontSize: 14, lineHeight: 18, textAlign: "center" };
ReactCompilerGating = fn(558);
let closure_16 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function Fullscreen(arg0) {
        const cResult = c.c(8);
        ({ onFullScreen, style } = arg0);
        const tmp4 = closure_13();
        if (cResult[0] === style) {
          if (cResult[1] === tmp4.statusWrapper) {
            let tmp5 = cResult[2];
          }
          const _Symbol = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const rect = { top: 4, left: 4, right: 4, bottom: 4 };
            const obj2 = {
              source: _modDef10865,
              size: native.Icon.Sizes.SMALL,
              color: nativeDefault.unsafe_rawColors.WHITE,
            };
            const tmp11 = collapsed(native.Icon, obj2);
            cResult[3] = rect;
            cResult[4] = tmp11;
            let tmp8 = tmp11;
            let tmp7 = rect;
          } else {
            tmp7 = cResult[3];
            tmp8 = cResult[4];
          }
          if (cResult[5] === onFullScreen) {
            if (cResult[6] === tmp5) {
              let tmp12 = cResult[7];
            }
            return tmp12;
          }
          const obj3 = {
            accessibilityRole: "button",
            onPress: onFullScreen,
            style: tmp5,
            hitSlop: tmp7,
            children: tmp8,
          };
          const tmp14 = collapsed(Pressables.PressableOpacity, obj3);
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
      }
    : function Fullscreen(arg0) {
        ({ onFullScreen, style } = arg0);
        const obj = {
          accessibilityRole: "button",
          onPress: onFullScreen,
          style: null,
          hitSlop: { top: 4, left: 4, right: 4, bottom: 4 },
          children: null,
        };
        const items = [closure_13().statusWrapper, style];
        obj.style = items;
        const tmp = closure_13();
        obj.children = collapsed(native.Icon, {
          source: _modDef10865,
          size: native.Icon.Sizes.SMALL,
          color: nativeDefault.unsafe_rawColors.WHITE,
        });
        return collapsed(Pressables.PressableOpacity, obj);
      },
);
size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/StreamTile.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function StreamTile(participant) {
      const cResult = c.c(30);
      participant = participant.participant;
      const onSingleTap = participant.onSingleTap;
      const onDoubleTap = participant.onDoubleTap;
      ({
        resizeMode,
        gestureEnabled,
        removeEmptyStateButton,
        removeEmptyStateImage,
        onFullScreen,
        fullscreenIconStyle,
        style,
      } = participant);
      if (undefined === resizeMode) {
        resizeMode = VideoRenderer.ResizeMode.CONTAIN;
      }
      const tmp4 = closure_13();
      if (cResult[0] === onSingleTap) {
        if (cResult[1] === participant) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] === onDoubleTap) {
          if (cResult[4] === participant) {
            let tmp6 = cResult[5];
          }
          if (cResult[6] === tmp6) {
            class F {
              constructor() {
                tmpResult = undefined;
                if (onDoubleTap != null) {
                  tmp3 = participant;
                  tmpResult = tmp(participant);
                }
                return tmpResult;
              }
            }
            ({ streamId, user } = participant);
            if (cResult[9] === style) {
              if (cResult[10] === tmp4.container) {
                let tmp11 = cResult[11];
              }
              if (cResult[12] === gestureEnabled) {
                if (cResult[13] === participant) {
                  if (cResult[14] === removeEmptyStateButton) {
                    if (cResult[15] === removeEmptyStateImage) {
                      if (cResult[16] === resizeMode) {
                        if (cResult[17] === streamId) {
                          if (cResult[18] === user) {
                            let tmp12 = cResult[19];
                          }
                          if (cResult[20] === fullscreenIconStyle) {
                            if (cResult[21] === onFullScreen) {
                              let tmp15 = cResult[22];
                            }
                            if (cResult[23] === tmp11) {
                              if (cResult[24] === tmp12) {
                                if (cResult[25] === tmp15) {
                                  let tmp20 = cResult[26];
                                }
                                if (cResult[27] === tmp10) {
                                  if (cResult[28] === tmp20) {
                                    let tmp23 = cResult[29];
                                  }
                                  return tmp23;
                                }
                                class F {
                                  constructor() {
                                    tmpResult = undefined;
                                    if (onDoubleTap != null) {
                                      tmp3 = participant;
                                      tmpResult = tmp(participant);
                                    }
                                    return tmpResult;
                                  }
                                }
                                const obj2 = { gesture: tmp10, children: tmp20 };
                                const tmp24 = collapsed(LegacyBaseButton.GestureDetector, obj2);
                                cResult[27] = tmp10;
                                cResult[28] = tmp20;
                                cResult[29] = tmp24;
                                tmp23 = tmp24;
                              }
                            }
                            class F {
                              constructor() {
                                tmpResult = undefined;
                                if (onDoubleTap != null) {
                                  tmp3 = participant;
                                  tmpResult = tmp(participant);
                                }
                                return tmpResult;
                              }
                            }
                            const obj3 = { style: tmp11, children: null };
                            const items = [tmp12, tmp15];
                            obj3.children = items;
                            const tmp22 = closure_1_11(React4, obj3);
                            cResult[23] = tmp11;
                            cResult[24] = tmp12;
                            cResult[25] = tmp15;
                            cResult[26] = tmp22;
                            tmp20 = tmp22;
                          }
                          class F {
                            constructor() {
                              tmpResult = undefined;
                              if (onDoubleTap != null) {
                                tmp3 = participant;
                                tmpResult = tmp(participant);
                              }
                              return tmpResult;
                            }
                          }
                          let tmp16 = null != onFullScreen;
                          if (tmp16) {
                            class F {
                              constructor() {
                                tmpResult = undefined;
                                if (onDoubleTap != null) {
                                  tmp3 = participant;
                                  tmpResult = tmp(participant);
                                }
                                return tmpResult;
                              }
                            }
                            tmp19[0] = onFullScreen;
                            tmp19[1] = fullscreenIconStyle;
                            tmp16 = collapsed(closure_16, tmp19);
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
                  tmpResult = undefined;
                  if (onDoubleTap != null) {
                    tmp3 = participant;
                    tmpResult = tmp(participant);
                  }
                  return tmpResult;
                }
              }
              const obj4 = {
                streamId,
                participant,
                user,
                resizeMode,
                gestureEnabled,
                removeEmptyStateButton,
                removeEmptyStateImage,
              };
              const tmp14 = collapsed(closure_15, obj4);
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
              tmpResult = undefined;
              if (onDoubleTap != null) {
                tmp3 = participant;
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
            tmpResult = undefined;
            if (onDoubleTap != null) {
              tmp3 = participant;
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
    }
  : function StreamTile(participant) {
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
      const callback = noop.useCallback(() => {
        let tmpResult;
        if (onSingleTap != null) {
          tmpResult = tmp(participant);
        }
        return tmpResult;
      }, items);
      const callback1 = noop.useCallback(() => {
        let tmpResult;
        if (onDoubleTap != null) {
          tmpResult = tmp(participant);
        }
        return tmpResult;
      }, items1);
      const tmp3 = closure_13();
      ({ streamId, user } = participant);
      const obj = {
        gesture: useParticipantTileTapGestureDefault({ onSingleTapStart: callback, onDoubleTapStart: callback1 }),
        children: null,
      };
      const obj2 = { style: null, children: null };
      const items2 = [tmp3.container, style];
      obj2.style = items2;
      const items3 = [
        collapsed(closure_15, {
          streamId,
          participant,
          user,
          resizeMode: CONTAIN,
          gestureEnabled,
          removeEmptyStateButton,
          removeEmptyStateImage,
        }),
      ];
      let tmp7Result = null != onFullScreen;
      if (tmp7Result) {
        const obj3 = { onFullScreen, style: fullscreenIconStyle };
        tmp7Result = collapsed(closure_16, obj3);
      }
      items3[1] = tmp7Result;
      obj2.children = items3;
      obj.children = closure_1_11(React4, obj2);
      return collapsed(LegacyBaseButton.GestureDetector, obj);
    };
export const StreamTextOverlay = tmp5;
