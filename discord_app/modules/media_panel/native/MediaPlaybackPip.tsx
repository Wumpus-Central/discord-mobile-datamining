// discord_app/modules/media_panel/native/MediaPlaybackPip.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import useChannelName from "../../channel/useChannelName.tsx";
import LinearGradientDefault from "../../../../_runtime/05605_LinearGradient.js";
import safeTransitionToDefault from "../../links/safeTransitionTo.native.tsx";
import MessageActionCreatorsDefault from "../../../actions/MessageActionCreators.tsx";
import PlayIcon2 from "../../../design/components/Icon/native/redesign/generated/PlayIcon.tsx";
import PauseIcon from "../../../design/components/Icon/native/redesign/generated/PauseIcon.tsx";
import MediaPlayerManagerDefault from "../../media/native/MediaPlayerManager.tsx";
import VoicePanelPIPConstants from "../../voice_panel/native/pip/VoicePanelPIPConstants.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import MessageStore from "../../../stores/MessageStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

let StyleSheet;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let react = react_mod;
({ Easing: hasOwnProperty, StyleSheet, TouchableOpacity: metroRequire, View: metroImportDefault } = react_native);
({ AnalyticEvents: closure_12, MessageFlags: map1, Routes: closure_14 } = Constants);
const SquarePIPReferenceDimensions = VoicePanelPIPConstants.SquarePIPReferenceDimensions;
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: SquarePIPReferenceDimensions.height,
    width: SquarePIPReferenceDimensions.width,
  },
  pipControls: obj2,
  pipButton: obj3,
  dismissButton: { right: 8 },
  backButton: { left: 8 },
  infoContainer: { justifyContent: "center", alignItems: "center", marginBottom: 8, height: 34 },
  infoContainerGradient: obj4,
  infoContent: { justifyContent: "center", alignItems: "center", alignSelf: "stretch", marginHorizontal: 4 },
  actionContainer: { justifyContent: "center", alignItems: "center", width: 48, height: 48, zIndex: 100 },
  playPauseButton: size,
  progressBar: obj5,
};
obj2 = { zIndex: 5 };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = {
  position: "absolute",
  top: 8,
  padding: 8,
  borderRadius: nativeDefault.radii.round,
  borderWidth: 1,
  borderColor: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT,
  tintColor: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT,
  backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT,
};
const merged1 = Object.assign(nativeDefault.shadows.SHADOW_LOW_HOVER);
obj4 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
size = {
  justifyContent: "center",
  alignItems: "center",
  width: 32,
  height: 32,
  zIndex: 100,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
};
obj5 = { justifyContent: "center", alignItems: "center" };
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
let closure_17 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? (message) => {
      let activeMediaPlayerSource;
      let closure_2;
      let first;
      let isControlVisible;
      let isVoiceMessage;
      let items2;
      let items3;
      let tmp13;
      let tmp15;
      let tmp18;
      let obj = message(576);
      const cResult = obj.c(29);
      message = message.message;
      ({ activeMediaPlayerSource, isVoiceMessage, isControlVisible } = message);
      const tmp4 = closure_17();
      const obj2 = message(4580);
      const token = obj2.useToken(nativeDefault.colors.BACKGROUND_SURFACE_HIGH);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore, UserStore, RelationshipStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      let channel_id;
      const tmp11 = cResult[1];
      if (message != null) {
        channel_id = message.channel_id;
      }
      if (tmp11 !== channel_id) {
        let channel_id1;
        if (message != null) {
          channel_id1 = message.channel_id;
        }
        const fn = function l() {
          let channel_id;
          const getChannel = ChannelStore.getChannel;
          if (message != null) {
            channel_id = message.channel_id;
          }
          const channel = getChannel(channel_id);
          let channelName = null;
          if (null != channel) {
            const obj = useChannelName;
            channelName = obj.computeChannelName(channel, UserStore, RelationshipStore, true, true);
          }
          return channelName;
        };
        cResult[1] = channel_id1;
        cResult[2] = fn;
        tmp13 = fn;
      } else {
        tmp13 = cResult[2];
      }
      if (cResult[3] !== message) {
        const items1 = [message];
        cResult[3] = message;
        cResult[4] = items1;
        tmp15 = items1;
      } else {
        tmp15 = cResult[4];
      }
      const tmpResult = message(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp13, tmp15);
      [tmp18, importDefault] = react.useState(0);
      _slicedToArray(react.useState(0), 2);
      const tmp19 = _slicedToArray(react.useState(0), 2);
      dependencyMap = tmp19[1];
      if (cResult[5] === activeMediaPlayerSource) {
        if (cResult[6] === isVoiceMessage) {
          let tmp21;
          let tmp22;
          if (cResult[7] === message) {
            tmp21 = cResult[8];
            tmp22 = cResult[9];
          }
          const _Symbol = Symbol;
          if (tmp22 !== Symbol.for("react.early_return_sentinel")) {
            return tmp22;
          } else {
            const _Symbol3 = Symbol;
            if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
              class R {
                constructor(nativeEvent) {
                  return closure_2(nativeEvent.nativeEvent.layout.width);
                }
              }
              cResult[10] = R;
            } else {
              class R {
                constructor(nativeEvent) {
                  return closure_2(nativeEvent.nativeEvent.layout.width);
                }
              }
            }
            if (cResult[11] !== tmp21) {
              class R {
                constructor(nativeEvent) {
                  return closure_2(nativeEvent.nativeEvent.layout.width);
                }
              }
              const obj3 = {
                variant: "text-md/semibold",
                lineClamp: 1,
                ellipsizeMode: "clip",
                onLayout: R,
                children: tmp21,
              };
              cResult[11] = tmp21;
              cResult[12] = closure_15(message(4886).Text, obj3);
              const tmp28 = closure_15(message(4886).Text, obj3);
            } else {
              class R {
                constructor(nativeEvent) {
                  return closure_2(nativeEvent.nativeEvent.layout.width);
                }
              }
            }
            const _Symbol2 = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              class U {
                constructor(nativeEvent) {
                  return importDefault(nativeEvent.nativeEvent.layout.width);
                }
              }
              cResult[13] = U;
            } else {
              class U {
                constructor(nativeEvent) {
                  return importDefault(nativeEvent.nativeEvent.layout.width);
                }
              }
            }
            if (cResult[14] === token) {
              class U {
                constructor(nativeEvent) {
                  return importDefault(nativeEvent.nativeEvent.layout.width);
                }
              }
            }
            let tmp31 = tmp27;
            if (tmp19[0] >= tmp18) {
              class U {
                constructor(nativeEvent) {
                  return importDefault(nativeEvent.nativeEvent.layout.width);
                }
              }
              const obj4 = { style: { flex: 1 }, children: items2 };
              const obj5 = { spacing: 20, speed: 0.2, children: tmp27 };
              items2 = [closure_15(message(17377).Marquee, obj5)];
              const obj6 = {
                start: { x: 0, y: 0 },
                end: { x: 1, y: 0 },
                locations: [0, 0.1, 0.2, 0.8, 0.9, 1],
                colors: items3,
                style: tmp4.infoContainerGradient,
              };
              items3 = [token, `${tmp6}CC`, `${tmp6}00`, `${tmp6}00`, `${tmp6}CC`, token];
              items2[1] = closure_15(LinearGradientDefault, obj6);
              tmp31 = closure_16(closure_7, obj4);
            }
            cResult[14] = token;
            cResult[15] = tmp27;
            cResult[16] = tmp19[0] >= tmp18;
            cResult[17] = tmp4.infoContainerGradient;
            cResult[18] = tmp31;
          }
        }
      }
      Symbol.for("react.early_return_sentinel");
      if (message != null) {
        class U {
          constructor(nativeEvent) {
            return importDefault(nativeEvent.nativeEvent.layout.width);
          }
        }
      }
      if (null != message) {
        class U {
          constructor(nativeEvent) {
            return importDefault(nativeEvent.nativeEvent.layout.width);
          }
        }
        if (null != undefined) {
          class U {
            constructor(nativeEvent) {
              return importDefault(nativeEvent.nativeEvent.layout.width);
            }
          }
          if (null != activeMediaPlayerSource) {
            class U {
              constructor(nativeEvent) {
                return importDefault(nativeEvent.nativeEvent.layout.width);
              }
            }
          }
        }
      }
      cResult[5] = activeMediaPlayerSource;
      cResult[6] = isVoiceMessage;
      cResult[7] = message;
      cResult[8] = undefined;
      cResult[9] = null;
      tmp22 = tmp24;
      tmp21 = tmp25;
    }
  : (message) => {
      let closure_2;
      let closure_4;
      let contentMessage;
      let isControlVisible;
      let isVoiceMessage;
      let items3;
      let items4;
      let items5;
      let obj5;
      message = message.message;
      const activeMediaPlayerSource = message.activeMediaPlayerSource;
      let first;
      let first1;
      react = undefined;
      ({ isVoiceMessage, isControlVisible } = message);
      const tmp = closure_17();
      let obj = message(4580);
      const token = obj.useToken(first(587).colors.BACKGROUND_SURFACE_HIGH);
      const items = [ChannelStore, UserStore, RelationshipStore];
      const items1 = [message];
      const obj2 = message(504);
      const stateFromStores = obj2.useStateFromStores(
        items,
        () => {
          let channel_id;
          const getChannel = ChannelStore.getChannel;
          if (message != null) {
            channel_id = message.channel_id;
          }
          const channel = getChannel(channel_id);
          let channelName = null;
          if (null != channel) {
            const obj = useChannelName;
            channelName = obj.computeChannelName(channel, UserStore, RelationshipStore, true, true);
          }
          return channelName;
        },
        items1,
      );
      const tmp7 = first1(react.useState(0), 2);
      first = tmp7[0];
      dependencyMap = tmp7[1];
      const tmp9 = first1(react.useState(0), 2);
      first1 = tmp9[0];
      react = tmp9[1];
      const items2 = [first1, first];
      const memo = react.useMemo(() => first1 >= first, items2);
      if (message != null) {
        contentMessage = message.getContentMessage();
      }
      if (null != message) {
        if (null != contentMessage) {
          if (null != activeMediaPlayerSource) {
            let str2;
            if (isVoiceMessage) {
              str2 = message.author.username;
            } else {
              str2 = "";
              if (contentMessage.attachments.length > 0) {
                str2 = "";
                if (null != activeMediaPlayerSource.attachmentIndex) {
                  str2 = tmp4(7940)(contentMessage.attachments[activeMediaPlayerSource.attachmentIndex]);
                }
              }
            }
            const obj3 = {
              variant: "text-md/semibold",
              lineClamp: 1,
              ellipsizeMode: "clip",
              onLayout(nativeEvent) {
                return closure_4(nativeEvent.nativeEvent.layout.width);
              },
              children: str2,
            };
            const tmp14 = closure_15(message(4886).Text, obj3);
            const obj4 = {
              accessibilityElementsHidden: isControlVisible,
              style: tmp.infoContent,
              onLayout(nativeEvent) {
                return closure_2(nativeEvent.nativeEvent.layout.width);
              },
              children: closure_16(closure_7, obj5),
            };
            let tmp16Result = tmp14;
            obj5 = { style: tmp.infoContainer, children: items5 };
            if (memo) {
              const obj6 = { style: { flex: 1 }, children: items3 };
              const obj7 = { spacing: 20, speed: 0.2, children: tmp14 };
              items3 = [closure_15(message(17377).Marquee, obj7)];
              const obj8 = {
                start: { x: 0, y: 0 },
                end: { x: 1, y: 0 },
                locations: [0, 0.1, 0.2, 0.8, 0.9, 1],
                colors: items4,
                style: tmp.infoContainerGradient,
              };
              items4 = [token, `${tmp5}CC`, `${tmp5}00`, `${tmp5}00`, `${tmp5}CC`, token];
              items3[1] = closure_15(first(5605), obj8);
              tmp16Result = closure_16(closure_7, obj6);
            }
            items5 = [tmp16Result];
            let tmp13Result = null != stateFromStores;
            if (tmp13Result) {
              const obj9 = { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: stateFromStores };
              tmp13Result = closure_15(tmp2(4886).Text, obj9);
            }
            items5[1] = tmp13Result;
            return closure_15(closure_7, obj4);
          }
        }
      }
      return null;
    };
const __initData = {
  code: "function MediaPlaybackPipTsx1(){const{withTiming,visible}=this.__closure;return{opacity:withTiming(visible?1:0,{duration:200})};}",
};
const __initData2 = {
  code: "function MediaPlaybackPipTsx2(){const{withTiming,visible}=this.__closure;return{opacity:withTiming(visible?1:0,{duration:200})};}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? (message) => {
      let handleClosePip;
      let items;
      let tmp5;
      let tmp7;
      let tmp9;
      let visible;
      const tmp = message;
      let obj = message(576);
      const cResult = obj.c(32);
      message = message.message;
      ({ handleClosePip, visible } = message);
      const isVoiceMessage = message.isVoiceMessage;
      const tmp4 = closure_17();
      if (cResult[0] !== message) {
        const fn = function t() {
          if (null != message) {
            if (null != message.channel_id) {
              if (null != message.id) {
                const obj = MessageActionCreatorsDefault;
                obj.trackJump(message.channel_id, message.id, "Media PIP", {});
                const channel = ChannelStore.getChannel(message.channel_id);
                let guildId;
                if (channel != null) {
                  guildId = channel.getGuildId();
                }
                const tmp6Result = safeTransitionToDefault;
                tmp6Result(authStore2.CHANNEL(guildId, message.channel_id, message.id), {
                  navigationReplace: true,
                  openChannel: true,
                });
              }
            }
          }
        };
        let num = 0;
        cResult[0] = message;
        cResult[1] = fn;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      const fn2 = function h() {
        let num = 0;
        const withTiming = timing.withTiming;
        timing;
        if (visible) {
          num = 1;
        }
        const obj = { opacity: withTiming(num, { duration: 200 }) };
        return obj;
      };
      const tmpResult = tmp(4612);
      fn2.__closure = { withTiming: tmp(4891).withTiming, visible };
      fn2.__workletHash = 3641278982291;
      fn2.__initData = __initData;
      ({ withTiming: tmp(4891).withTiming, visible });
      const animatedStyle = tmpResult.useAnimatedStyle(fn2);
      if (cResult[2] !== isVoiceMessage) {
        let stringResult;
        const intl = tmp(1126).intl;
        const string = intl.string;
        const t = tmp(1126).t;
        if (isVoiceMessage) {
          stringResult = string(t.KTonHP);
        } else {
          stringResult = string(t["13/7kX"]);
        }
        cResult[2] = isVoiceMessage;
        cResult[3] = stringResult;
        tmp7 = stringResult;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] !== isVoiceMessage) {
        let string2Result;
        const intl2 = tmp(1126).intl;
        const string2 = intl2.string;
        const t2 = tmp(1126).t;
        if (isVoiceMessage) {
          string2Result = string2(t2["6rhrVG"]);
        } else {
          string2Result = string2(t2.WAI6xu);
        }
        cResult[4] = isVoiceMessage;
        cResult[5] = string2Result;
        tmp9 = string2Result;
      } else {
        tmp9 = cResult[5];
      }
      if (cResult[6] === animatedStyle) {
        let tmp11;
        let tmp13;
        if (cResult[7] === tmp4.pipControls) {
          tmp11 = cResult[8];
        }
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp15 = closure_15(tmp(8567).BackgroundBlurFill, { blurAmount: 0.05 });
          cResult[9] = tmp15;
          tmp13 = tmp15;
        } else {
          tmp13 = cResult[9];
        }
        if (cResult[10] === tmp4.backButton) {
          let tmp17;
          let tmp18;
          if (cResult[11] === tmp4.pipButton) {
            tmp17 = cResult[12];
          }
          const _Symbol2 = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp20 = closure_15(tmp(6014).ArrowLargeLeftIcon, { size: "sm" });
            cResult[13] = tmp20;
            tmp18 = tmp20;
          } else {
            tmp18 = cResult[13];
          }
          if (cResult[14] === tmp7) {
            if (cResult[15] === tmp5) {
              if (cResult[16] === !visible) {
                let tmp21;
                if (cResult[17] === tmp17) {
                  tmp21 = cResult[18];
                }
                if (cResult[19] === tmp4.dismissButton) {
                  let tmp26;
                  let tmp27;
                  if (cResult[20] === tmp4.pipButton) {
                    tmp26 = cResult[21];
                  }
                  const _Symbol3 = Symbol;
                  if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                    const tmp29 = closure_15(tmp(4795).XLargeIcon, { size: "sm" });
                    cResult[22] = tmp29;
                    tmp27 = tmp29;
                  } else {
                    tmp27 = cResult[22];
                  }
                  if (cResult[23] === tmp9) {
                    if (cResult[24] === handleClosePip) {
                      if (cResult[25] === !visible) {
                        let tmp30;
                        if (cResult[26] === tmp26) {
                          tmp30 = cResult[27];
                        }
                        if (cResult[28] === tmp30) {
                          if (cResult[29] === tmp11) {
                            let tmp34;
                            if (cResult[30] === tmp21) {
                              tmp34 = cResult[31];
                            }
                            return tmp34;
                          }
                        }
                        const obj3 = { style: tmp11, children: items };
                        items = [tmp13, tmp21, tmp30];
                        const tmp37 = closure_16(visible(4612).View, obj3);
                        cResult[28] = tmp30;
                        cResult[29] = tmp11;
                        cResult[30] = tmp21;
                        cResult[31] = tmp37;
                        tmp34 = tmp37;
                      }
                    }
                  }
                  const obj4 = {
                    disabled: !visible,
                    style: tmp26,
                    onPress: handleClosePip,
                    accessible: true,
                    accessibilityRole: "button",
                    accessibilityLabel: tmp9,
                    children: tmp27,
                  };
                  const tmp33 = closure_15(closure_6, obj4);
                  cResult[23] = tmp9;
                  cResult[24] = handleClosePip;
                  cResult[25] = !visible;
                  cResult[26] = tmp26;
                  cResult[27] = tmp33;
                  tmp30 = tmp33;
                }
                const items1 = [,];
                ({ pipButton: arr3[0], dismissButton: arr3[1] } = tmp4);
                cResult[19] = tmp4.dismissButton;
                cResult[20] = tmp4.pipButton;
                cResult[21] = items1;
                tmp26 = items1;
              }
            }
          }
          const obj5 = {
            disabled: !visible,
            style: tmp17,
            onPress: tmp5,
            accessible: true,
            accessibilityRole: "button",
            accessibilityLabel: tmp7,
            children: tmp18,
          };
          const tmp24 = closure_15(closure_6, obj5);
          cResult[14] = tmp7;
          cResult[15] = tmp5;
          cResult[16] = !visible;
          cResult[17] = tmp17;
          cResult[18] = tmp24;
          tmp21 = tmp24;
        }
        const items2 = [,];
        ({ pipButton: arr2[0], backButton: arr2[1] } = tmp4);
        cResult[10] = tmp4.backButton;
        cResult[11] = tmp4.pipButton;
        cResult[12] = items2;
        tmp17 = items2;
      }
      const items3 = [tmp4.pipControls, animatedStyle];
      cResult[6] = animatedStyle;
      cResult[7] = tmp4.pipControls;
      cResult[8] = items3;
      tmp11 = items3;
    }
  : (message) => {
      let items1;
      let items2;
      let items3;
      let items4;
      let string2Result;
      let stringResult;
      message = message.message;
      const visible = message.visible;
      const isVoiceMessage = message.isVoiceMessage;
      const handleClosePip = message.handleClosePip;
      const tmp = closure_17();
      const items = [message];
      const callback = react.useCallback(() => {
        if (null != message) {
          if (null != message.channel_id) {
            if (null != message.id) {
              const obj = MessageActionCreatorsDefault;
              obj.trackJump(message.channel_id, message.id, "Media PIP", {});
              const channel = ChannelStore.getChannel(message.channel_id);
              let guildId;
              if (channel != null) {
                guildId = channel.getGuildId();
              }
              const tmp6Result = safeTransitionToDefault;
              tmp6Result(authStore2.CHANNEL(guildId, message.channel_id, message.id), {
                navigationReplace: true,
                openChannel: true,
              });
            }
          }
        }
      }, items);
      let obj = message(4612);
      const fn = function c() {
        let num = 0;
        const withTiming = timing.withTiming;
        timing;
        if (visible) {
          num = 1;
        }
        const obj = { opacity: withTiming(num, { duration: 200 }) };
        return obj;
      };
      fn.__closure = { withTiming: message(4891).withTiming, visible };
      fn.__workletHash = 1481412007504;
      fn.__initData = __initData2;
      ({ withTiming: message(4891).withTiming, visible });
      const animatedStyle = obj.useAnimatedStyle(fn);
      const intl = message(1126).intl;
      const string = intl.string;
      const t = message(1126).t;
      if (isVoiceMessage) {
        stringResult = string(t.KTonHP);
      } else {
        stringResult = string(t["13/7kX"]);
      }
      const intl2 = tmp3(1126).intl;
      const string2 = intl2.string;
      const t2 = tmp3(1126).t;
      if (isVoiceMessage) {
        string2Result = string2(t2["6rhrVG"]);
      } else {
        string2Result = string2(t2.WAI6xu);
      }
      const obj3 = { style: items1, children: items2 };
      items1 = [tmp.pipControls, animatedStyle];
      const View = visible(4612).View;
      items2 = [closure_15(message(8567).BackgroundBlurFill, { blurAmount: 0.05 }), ,];
      const obj4 = {
        disabled: !visible,
        style: items3,
        onPress: callback,
        accessible: true,
        accessibilityRole: "button",
        accessibilityLabel: stringResult,
        children: closure_15(message(6014).ArrowLargeLeftIcon, { size: "sm" }),
      };
      items3 = [,];
      ({ pipButton: arr4[0], backButton: arr4[1] } = tmp);
      items2[1] = closure_15(closure_6, obj4);
      const obj5 = {
        disabled: !visible,
        style: items4,
        onPress: handleClosePip,
        accessible: true,
        accessibilityRole: "button",
        accessibilityLabel: string2Result,
        children: closure_15(message(4795).XLargeIcon, { size: "sm" }),
      };
      items4 = [,];
      ({ pipButton: arr5[0], dismissButton: arr5[1] } = tmp);
      items2[2] = closure_15(closure_6, obj5);
      return closure_16(View, obj3);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? (activeMediaPlayerSource, arg1, message) => {
      _require = activeMediaPlayerSource;
      let closure_1 = arg1;
      dependencyMap = message;
      let obj = require("react");
      const cResult = obj.c(7);
      const ref = react.useRef(null);
      if (cResult[0] === activeMediaPlayerSource) {
        if (cResult[1] === message) {
          let tmp2;
          let tmp3;
          let tmp7;
          let tmp6;
          if (cResult[2] === arg1) {
            tmp2 = cResult[3];
            tmp3 = cResult[4];
          }
          const effect = react.useEffect(tmp2, tmp3);
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const fn2 = function c() {
              let date = new Date();
              return () => {
                let content_type;
                let finalProgress;
                let hasFlagResult;
                let id;
                let initialProgress;
                let result;
                let result1;
                let result2;
                let current = ref.current;
                if (current == null) {
                  current = {};
                }
                ({ activeMediaPlayerSource, message, initialProgress, finalProgress } = current);
                let attachmentIndex;
                if (activeMediaPlayerSource != null) {
                  attachmentIndex = activeMediaPlayerSource.attachmentIndex;
                }
                let tmp2 = null;
                if (null != attachmentIndex) {
                  let tmp3;
                  if (message != null) {
                    const contentMessage = message.getContentMessage();
                    if (contentMessage != null) {
                      tmp3 = contentMessage.attachments[activeMediaPlayerSource.attachmentIndex];
                    }
                  }
                  tmp2 = tmp3;
                }
                let messageId;
                if (activeMediaPlayerSource != null) {
                  messageId = activeMediaPlayerSource.messageId;
                }
                const obj = {
                  message_id: messageId,
                  sender_user_id: id,
                  type: content_type,
                  is_voice_message: hasFlagResult,
                  total_duration_secs: result,
                  pip_playback_start_time_secs: result1,
                  pip_playback_end_time_secs: result2,
                  pip_opened_timestamp: date.toISOString(),
                  pip_closed_timestamp: date.toISOString(),
                };
                id = undefined;
                if (message != null) {
                  id = message.author.id;
                }
                content_type = undefined;
                if (tmp2 != null) {
                  content_type = tmp2.content_type;
                }
                hasFlagResult = undefined;
                if (message != null) {
                  const contentMessage1 = message.getContentMessage();
                  if (contentMessage1 != null) {
                    hasFlagResult = contentMessage1.hasFlag(map1.IS_VOICE_MESSAGE);
                  }
                }
                let duration;
                if (finalProgress != null) {
                  duration = finalProgress.duration;
                }
                result = undefined;
                if (null != duration) {
                  result = duration / 1000;
                }
                let time;
                if (initialProgress != null) {
                  time = initialProgress.time;
                }
                result1 = undefined;
                if (null != time) {
                  result1 = time / 1000;
                }
                let time1;
                if (finalProgress != null) {
                  time1 = finalProgress.time;
                }
                result2 = undefined;
                if (null != time1) {
                  result2 = time1 / 1000;
                }
                date = new Date();
                const obj5 = AnalyticsUtilsDefault;
                obj5.track(constants.MEDIA_PIP_ENDED, obj);
              };
            };
            const items = [];
            cResult[5] = fn2;
            cResult[6] = items;
            tmp7 = items;
            tmp6 = fn2;
          } else {
            tmp6 = cResult[5];
            tmp7 = cResult[6];
          }
          const effect1 = react.useEffect(tmp6, tmp7);
        }
      }
      const fn = function l() {
        const tmp2 = null == ref.current && null != activeMediaPlayerSource && null != finalProgress && null != message;
        if (tmp2) {
          const obj = { initialProgress: finalProgress, activeMediaPlayerSource, message };
          ref.current = obj;
        }
        const tmp9 = null != ref.current && null != finalProgress;
        if (tmp9) {
          ref.current.finalProgress = finalProgress;
        }
      };
      const items1 = [arg1, activeMediaPlayerSource, message];
      cResult[0] = activeMediaPlayerSource;
      cResult[1] = message;
      cResult[2] = arg1;
      cResult[3] = fn;
      cResult[4] = items1;
      tmp3 = items1;
      tmp2 = fn;
    }
  : (activeMediaPlayerSource, arg1, message) => {
      let closure_1 = arg1;
      const ref = react.useRef(null);
      const items = [arg1, activeMediaPlayerSource, message];
      const effect = react.useEffect(() => {
        const tmp2 = null == ref.current && null != activeMediaPlayerSource && null != finalProgress && null != message;
        if (tmp2) {
          const obj = { initialProgress: finalProgress, activeMediaPlayerSource, message };
          ref.current = obj;
        }
        const tmp9 = null != ref.current && null != finalProgress;
        if (tmp9) {
          ref.current.finalProgress = finalProgress;
        }
      }, items);
      const effect1 = react.useEffect(() => {
        let date = new Date();
        return () => {
          let content_type;
          let finalProgress;
          let hasFlagResult;
          let id;
          let initialProgress;
          let result;
          let result1;
          let result2;
          let current = ref.current;
          if (current == null) {
            current = {};
          }
          ({ activeMediaPlayerSource, message, initialProgress, finalProgress } = current);
          let attachmentIndex;
          if (activeMediaPlayerSource != null) {
            attachmentIndex = activeMediaPlayerSource.attachmentIndex;
          }
          let tmp2 = null;
          if (null != attachmentIndex) {
            let tmp3;
            if (message != null) {
              const contentMessage = message.getContentMessage();
              if (contentMessage != null) {
                tmp3 = contentMessage.attachments[activeMediaPlayerSource.attachmentIndex];
              }
            }
            tmp2 = tmp3;
          }
          let messageId;
          if (activeMediaPlayerSource != null) {
            messageId = activeMediaPlayerSource.messageId;
          }
          const obj = {
            message_id: messageId,
            sender_user_id: id,
            type: content_type,
            is_voice_message: hasFlagResult,
            total_duration_secs: result,
            pip_playback_start_time_secs: result1,
            pip_playback_end_time_secs: result2,
            pip_opened_timestamp: date.toISOString(),
            pip_closed_timestamp: date.toISOString(),
          };
          id = undefined;
          if (message != null) {
            id = message.author.id;
          }
          content_type = undefined;
          if (tmp2 != null) {
            content_type = tmp2.content_type;
          }
          hasFlagResult = undefined;
          if (message != null) {
            const contentMessage1 = message.getContentMessage();
            if (contentMessage1 != null) {
              hasFlagResult = contentMessage1.hasFlag(map1.IS_VOICE_MESSAGE);
            }
          }
          let duration;
          if (finalProgress != null) {
            duration = finalProgress.duration;
          }
          result = undefined;
          if (null != duration) {
            result = duration / 1000;
          }
          let time;
          if (initialProgress != null) {
            time = initialProgress.time;
          }
          result1 = undefined;
          if (null != time) {
            result1 = time / 1000;
          }
          let time1;
          if (finalProgress != null) {
            time1 = finalProgress.time;
          }
          result2 = undefined;
          if (null != time1) {
            result2 = time1 / 1000;
          }
          date = new Date();
          const obj5 = AnalyticsUtilsDefault;
          obj5.track(constants.MEDIA_PIP_ENDED, obj);
        };
      }, []);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? (isCompleted, arg1) => {
      let closure_0 = isCompleted;
      let closure_1 = arg1;
      const obj = react2;
      const cResult = obj.c(6);
      if (cResult[0] === arg1) {
        let tmp5;
        isCompleted = undefined;
        const tmp2 = cResult[1];
        if (isCompleted != null) {
          isCompleted = isCompleted.isCompleted;
        }
        if (tmp2 === isCompleted) {
          tmp5 = cResult[2];
        }
        let isCompleted1;
        if (isCompleted != null) {
          isCompleted1 = isCompleted.isCompleted;
        }
        if (cResult[3] === arg1) {
          let tmp9;
          if (cResult[4] === isCompleted1) {
            tmp9 = cResult[5];
          }
          const effect = react.useEffect(tmp5, tmp9);
        }
        const items = [isCompleted1, arg1];
        cResult[3] = arg1;
        cResult[4] = isCompleted1;
        cResult[5] = items;
        tmp9 = items;
      }
      cResult[0] = arg1;
      let isCompleted2;
      if (isCompleted != null) {
        isCompleted2 = isCompleted.isCompleted;
      }
      const fn = function s() {
        let closure_0;
        isCompleted = undefined;
        if (isCompleted != null) {
          isCompleted = isCompleted.isCompleted;
        }
        if (isCompleted) {
          const _setTimeout = setTimeout;
          isCompleted = setTimeout(() => {
            closure_1_1();
          }, 2000);
        }
        return () => {
          clearTimeout(closure_0);
        };
      };
      cResult[1] = isCompleted2;
      cResult[2] = fn;
      tmp5 = fn;
    }
  : (isCompleted, arg1) => {
      let closure_0 = isCompleted;
      let closure_1 = arg1;
      isCompleted = undefined;
      const useEffect = react.useEffect;
      if (isCompleted != null) {
        isCompleted = isCompleted.isCompleted;
      }
      const items = [isCompleted, arg1];
      const effect = useEffect(() => {
        let closure_0;
        isCompleted = undefined;
        if (isCompleted != null) {
          isCompleted = isCompleted.isCompleted;
        }
        if (isCompleted) {
          const _setTimeout = setTimeout;
          isCompleted = setTimeout(() => {
            closure_1_1();
          }, 2000);
        }
        return () => {
          clearTimeout(closure_0);
        };
      }, items);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp10 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let activeMediaPlayerSource;
      let closePip;
      let closure_4;
      let first;
      let first1;
      let isPlaying;
      let mediaSourceMessage;
      let progress;
      let tmp9;
      let tmp = isPlaying;
      let obj = isPlaying(closePip[13]);
      const cResult = obj.c(61);
      closure_17();
      react.useRef(null);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n(isPlaying) {
          return {
            isPlaying: isPlaying.isPlaying,
            progress: isPlaying.progress,
            activeMediaPlayerSource: isPlaying.activeMediaPlayerSource,
            mediaSourceMessage: isPlaying.mediaSourceMessage,
            closePip: isPlaying.closePip,
          };
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      const useMediaPlayerManagerStore = tmp(closePip[30]).useMediaPlayerManagerStore;
      tmp(closePip[30]);
      const tmpResult3 = tmp(closePip[31]);
      const mediaPlayerManagerStore = useMediaPlayerManagerStore(tmpResult3.useShallow(first));
      isPlaying = mediaPlayerManagerStore.isPlaying;
      ({ progress, activeMediaPlayerSource } = mediaPlayerManagerStore);
      ({ mediaSourceMessage, closePip } = mediaPlayerManagerStore);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MessageStore];
        cResult[1] = items;
        tmp9 = items;
      } else {
        tmp9 = cResult[1];
      }
      let channelId;
      const tmp11 = cResult[2];
      if (activeMediaPlayerSource != null) {
        channelId = activeMediaPlayerSource.channelId;
      }
      if (tmp11 === channelId) {
        let tmp15;
        let tmp16;
        let tmp18;
        let messageId;
        const tmp13 = cResult[3];
        if (activeMediaPlayerSource != null) {
          messageId = activeMediaPlayerSource.messageId;
        }
        if (tmp13 === messageId) {
          tmp15 = cResult[4];
        }
        if (cResult[5] !== activeMediaPlayerSource) {
          const items1 = [activeMediaPlayerSource];
          cResult[5] = activeMediaPlayerSource;
          cResult[6] = items1;
          tmp16 = items1;
        } else {
          tmp16 = cResult[6];
        }
        const tmpResult4 = tmp(closePip[16]);
        const stateFromStores = tmpResult4.useStateFromStores(tmp9, tmp15, tmp16);
        if (null != stateFromStores) {
          mediaSourceMessage = stateFromStores;
        }
        if (cResult[7] !== mediaSourceMessage) {
          let hasFlagResult;
          if (mediaSourceMessage != null) {
            const contentMessage = mediaSourceMessage.getContentMessage();
            if (contentMessage != null) {
              hasFlagResult = contentMessage.hasFlag(constants2.IS_VOICE_MESSAGE);
            }
          }
          cResult[7] = mediaSourceMessage;
          cResult[8] = hasFlagResult;
          tmp18 = hasFlagResult;
        } else {
          tmp18 = cResult[8];
        }
        closure_22(activeMediaPlayerSource, progress, mediaSourceMessage);
        const tmp25 = first1(react.useState(false), 2);
        first1 = tmp25[0];
        react = tmp27;
        if (cResult[9] === first1) {
          let tmp28;
          let tmp29;
          if (cResult[10] === isPlaying) {
            tmp28 = cResult[11];
            tmp29 = cResult[12];
          }
          const effect = obj2.useEffect(tmp28, tmp29);
          const dismissPanel = obj2.useContext(activeMediaPlayerSource(closePip[32])).dismissPanel;
          if (cResult[13] === closePip) {
            let tmp32;
            if (cResult[14] === dismissPanel) {
              tmp32 = cResult[15];
            }
            closure_23(progress, tmp32);
            let tmp36 = first1;
            if (!tmp36) {
              let isCompleted;
              if (progress != null) {
                isCompleted = progress.isCompleted;
              }
              tmp36 = true === isCompleted;
            }
            let closure_6 = tmp36;
            if (cResult[16] !== isPlaying) {
              class X {
                constructor() {
                  const obj = MediaPlayerManagerDefault;
                  if (isPlaying) {
                    obj.pauseCurrentPlayer();
                    closure_4(true);
                  } else {
                    obj.playCurrentPlayer();
                  }
                }
              }
              cResult[16] = isPlaying;
              cResult[17] = X;
            } else {
              class X {
                constructor() {
                  const obj = MediaPlayerManagerDefault;
                  if (isPlaying) {
                    obj.pauseCurrentPlayer();
                    closure_4(true);
                  } else {
                    obj.playCurrentPlayer();
                  }
                }
              }
            }
            if (cResult[18] !== isPlaying) {
              class X {
                constructor() {
                  const obj = MediaPlayerManagerDefault;
                  if (isPlaying) {
                    obj.pauseCurrentPlayer();
                    closure_4(true);
                  } else {
                    obj.playCurrentPlayer();
                  }
                }
              }
              if (isPlaying) {
                class X {
                  constructor() {
                    const obj = MediaPlayerManagerDefault;
                    if (isPlaying) {
                      obj.pauseCurrentPlayer();
                      closure_4(true);
                    } else {
                      obj.playCurrentPlayer();
                    }
                  }
                }
              } else {
                class X {
                  constructor() {
                    const obj = MediaPlayerManagerDefault;
                    if (isPlaying) {
                      obj.pauseCurrentPlayer();
                      closure_4(true);
                    } else {
                      obj.playCurrentPlayer();
                    }
                  }
                }
              }
              const obj3 = { color: activeMediaPlayerSource(closePip[11]).colors.WHITE, size: "md" };
              cResult[18] = isPlaying;
              cResult[19] = tmp40(tmp41, obj3);
              const tmp40Result = tmp40(tmp41, obj3);
            } else {
              class X {
                constructor() {
                  const obj = MediaPlayerManagerDefault;
                  if (isPlaying) {
                    obj.pauseCurrentPlayer();
                    closure_4(true);
                  } else {
                    obj.playCurrentPlayer();
                  }
                }
              }
            }
            if (cResult[20] === activeMediaPlayerSource) {
              class X {
                constructor() {
                  const obj = MediaPlayerManagerDefault;
                  if (isPlaying) {
                    obj.pauseCurrentPlayer();
                    closure_4(true);
                  } else {
                    obj.playCurrentPlayer();
                  }
                }
              }
            }
            const obj4 = {
              message: mediaSourceMessage,
              activeMediaPlayerSource,
              isVoiceMessage: !!tmp18,
              isControlVisible: tmp36,
            };
            cResult[20] = activeMediaPlayerSource;
            const tmp47 = closure_15(closure_18, obj4);
            class G {
              constructor() {
                tmp = closure_3;
                if (tmp) {
                  tmp2 = globalThis;
                  _setTimeout = setTimeout;
                  num = 3000;
                  closure_0 = setTimeout(() => {
                    if (closure_0) {
                      closure_1_4(false);
                    }
                  }, 3000);
                }
                return () => clearTimeout(closure_0);
              }
            }
            cResult[21] = !!tmp18;
            cResult[22] = mediaSourceMessage;
            cResult[23] = tmp36;
            cResult[24] = tmp47;
          }
          const fn3 = function z() {
            dismissPanel();
            closePip();
            const obj = MediaPlayerManagerDefault;
            obj.pauseCurrentPlayer();
          };
          cResult[13] = closePip;
          cResult[14] = dismissPanel;
          cResult[15] = fn3;
          tmp32 = fn3;
        }
        class G {
          constructor() {
            tmp = closure_3;
            if (tmp) {
              tmp2 = globalThis;
              _setTimeout = setTimeout;
              num = 3000;
              closure_0 = setTimeout(() => {
                if (closure_0) {
                  closure_1_4(false);
                }
              }, 3000);
            }
            return () => clearTimeout(closure_0);
          }
        }
        const items2 = [first1, tmp25[1], isPlaying];
        cResult[9] = first1;
        cResult[10] = isPlaying;
        cResult[11] = G;
        cResult[12] = items2;
        tmp29 = items2;
        tmp28 = G;
      }
      if (activeMediaPlayerSource != null) {
        class X {
          constructor() {
            const obj = MediaPlayerManagerDefault;
            if (isPlaying) {
              obj.pauseCurrentPlayer();
              closure_4(true);
            } else {
              obj.playCurrentPlayer();
            }
          }
        }
      }
      cResult[2] = undefined;
      if (activeMediaPlayerSource != null) {
        class X {
          constructor() {
            const obj = MediaPlayerManagerDefault;
            if (isPlaying) {
              obj.pauseCurrentPlayer();
              closure_4(true);
            } else {
              obj.playCurrentPlayer();
            }
          }
        }
      }
      const fn2 = function y() {
        let messageId;
        let channelId;
        if (activeMediaPlayerSource != null) {
          channelId = activeMediaPlayerSource.channelId;
        }
        if (activeMediaPlayerSource != null) {
          messageId = activeMediaPlayerSource.messageId;
        }
        let message = null;
        if (null != channelId) {
          message = null;
          if (null != messageId) {
            message = MessageStore.getMessage(channelId, messageId);
          }
        }
        return message;
      };
      cResult[3] = undefined;
      cResult[4] = fn2;
      tmp15 = fn2;
    }
  : () => {
      let activeMediaPlayerSource;
      let closePip;
      let first;
      let isPlaying;
      let items8;
      let items9;
      let mediaSourceMessage;
      let num4;
      let num5;
      let progress;
      let string2Result;
      let stringResult;
      let tmp3Result;
      let tmp3Result2;
      let tmp = closure_17();
      let obj = react;
      const ref = react.useRef(null);
      const useMediaPlayerManagerStore = isPlaying(closePip[30]).useMediaPlayerManagerStore;
      isPlaying(closePip[30]);
      const obj2 = isPlaying(closePip[31]);
      const mediaPlayerManagerStore = useMediaPlayerManagerStore(
        obj2.useShallow((isPlaying) => ({
          isPlaying: isPlaying.isPlaying,
          progress: isPlaying.progress,
          activeMediaPlayerSource: isPlaying.activeMediaPlayerSource,
          mediaSourceMessage: isPlaying.mediaSourceMessage,
          closePip: isPlaying.closePip,
        })),
      );
      isPlaying = mediaPlayerManagerStore.isPlaying;
      ({ progress, activeMediaPlayerSource } = mediaPlayerManagerStore);
      ({ mediaSourceMessage, closePip } = mediaPlayerManagerStore);
      const items = [first];
      const items1 = [activeMediaPlayerSource];
      const obj3 = isPlaying(closePip[16]);
      const stateFromStores = obj3.useStateFromStores(
        items,
        () => {
          let messageId;
          let channelId;
          if (activeMediaPlayerSource != null) {
            channelId = activeMediaPlayerSource.channelId;
          }
          if (activeMediaPlayerSource != null) {
            messageId = activeMediaPlayerSource.messageId;
          }
          let message = null;
          if (null != channelId) {
            message = null;
            if (null != messageId) {
              message = MessageStore.getMessage(channelId, messageId);
            }
          }
          return message;
        },
        items1,
      );
      if (null != stateFromStores) {
        mediaSourceMessage = stateFromStores;
      }
      let hasFlagResult;
      if (mediaSourceMessage != null) {
        const contentMessage = mediaSourceMessage.getContentMessage();
        if (contentMessage != null) {
          hasFlagResult = contentMessage.hasFlag(constants2.IS_VOICE_MESSAGE);
        }
      }
      react = tmp10;
      closure_22(activeMediaPlayerSource, progress, mediaSourceMessage);
      const tmp12 = mediaSourceMessage(obj.useState(false), 2);
      first = tmp12[0];
      let closure_6 = tmp14;
      const items2 = [first, tmp12[1], isPlaying];
      const effect = obj.useEffect(() => {
        let closure_0;
        if (first) {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => {
            if (closure_0) {
              closure_1_6(false);
            }
          }, 3000);
        }
        return () => clearTimeout(closure_0);
      }, items2);
      const dismissPanel = obj.useContext(activeMediaPlayerSource(closePip[32])).dismissPanel;
      const items3 = [dismissPanel, closePip];
      const handleClosePip = obj.useCallback(() => {
        dismissPanel();
        closePip();
        const obj = MediaPlayerManagerDefault;
        obj.pauseCurrentPlayer();
      }, items3);
      closure_23(progress, handleClosePip);
      if (!first) {
        let isCompleted;
        if (progress != null) {
          isCompleted = progress.isCompleted;
        }
        first = true === isCompleted;
      }
      const items4 = [isPlaying];
      const items5 = [isPlaying];
      const callback1 = obj.useCallback(() => {
        const obj = MediaPlayerManagerDefault;
        if (isPlaying) {
          obj.pauseCurrentPlayer();
          closure_6(true);
        } else {
          obj.playCurrentPlayer();
        }
      }, items4);
      const items6 = [mediaSourceMessage, activeMediaPlayerSource, hasFlagResult, first];
      const memo = obj.useMemo(() => {
        let PlayIcon;
        if (isPlaying) {
          PlayIcon = PauseIcon.PauseIcon;
        } else {
          PlayIcon = PlayIcon2.PlayIcon;
        }
        const obj = { color: nativeDefault.colors.WHITE, size: "md" };
        return closure_15(PlayIcon, obj);
      }, items5);
      const items7 = [mediaSourceMessage, handleClosePip, first, hasFlagResult];
      const memo1 = obj.useMemo(() => {
        const obj = {
          message: mediaSourceMessage,
          activeMediaPlayerSource,
          isVoiceMessage: react,
          isControlVisible: first,
        };
        return closure_15(closure_18, obj);
      }, items6);
      const memo2 = obj.useMemo(() => {
        const obj = { message: mediaSourceMessage, handleClosePip, visible: first, isVoiceMessage: react };
        return closure_15(closure_21, obj);
      }, items7);
      const intl = tmp3(closePip[25]).intl;
      const string = intl.string;
      const t = tmp3(closePip[25]).t;
      if (hasFlagResult) {
        stringResult = string(t.AlHqHT);
      } else {
        stringResult = string(t.RscU7I);
      }
      const intl2 = tmp3(closePip[25]).intl;
      const string2 = intl2.string;
      const t2 = tmp3(closePip[25]).t;
      if (hasFlagResult) {
        string2Result = string2(t2["3XohGn"]);
      } else {
        string2Result = string2(t2.ZcgDJX);
      }
      let num = 0;
      if (null != progress) {
        num = (progress.time / progress.duration) * 100;
      }
      let num3 = 0;
      if (null != progress) {
        num3 = progress.duration - progress.time;
      }
      const obj4 = {
        style: tmp.container,
        activeOpacity: 1,
        onPress() {
          const tmp = !isPlaying && first;
          if (!tmp) {
            closure_6(!first);
          }
        },
        accessible: false,
        children: items8,
      };
      items8 = [memo2, memo1];
      const obj5 = { style: tmp.actionContainer, children: items9 };
      const obj6 = {
        style: tmp.progressBar,
        size: 48,
        width: 2,
        prefill: num,
        easing: first.out(first.linear),
        duration: num4,
        fill: num5,
        rotation: 0,
        lineCap: "round",
        ref,
        tintColor: tmp3Result.useToken(activeMediaPlayerSource(closePip[11]).colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT),
        backgroundColor: tmp3Result2.useToken(activeMediaPlayerSource(closePip[11]).colors.BACKGROUND_MOD_MUTED),
      };
      const AnimatedCircularProgress = tmp3(closePip[35]).AnimatedCircularProgress;
      num4 = 0;
      const tmp28 = dismissPanel;
      if (isPlaying) {
        num4 = num3;
      }
      num5 = 100;
      if (!isPlaying) {
        num5 = num;
      }
      tmp3Result = isPlaying(closePip[14]);
      tmp3Result2 = isPlaying(closePip[14]);
      items9 = [closure_15(AnimatedCircularProgress, obj6)];
      const obj7 = {
        style: tmp.playPauseButton,
        onPress: callback1,
        accessibilityRole: "button",
        accessibilityLabel: stringResult,
        children: memo,
      };
      if (isPlaying) {
        stringResult = string2Result;
      }
      items9[1] = closure_15(closure_6, obj7);
      items8[2] = closure_16(tmp28, obj5);
      return closure_16(closure_6, obj4);
    };
size = size_mod;
let result = size.fileFinishedImporting("modules/media_panel/native/MediaPlaybackPip.tsx");

export default tmp10;
