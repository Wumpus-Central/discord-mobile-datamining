// discord_app/modules/media_panel/native/MediaPlaybackPip.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import LinearGradientDefault from "../../../../_runtime/05388_LinearGradient.js";
import useChannelName from "../../channel/useChannelName.tsx";
import safeTransitionToDefault from "../../links/safeTransitionTo.native.tsx";
import MessageActionCreatorsDefault from "../../../actions/MessageActionCreators.tsx";
import PlayIcon2 from "../../../design/components/Icon/native/redesign/generated/PlayIcon.tsx";
import PauseIcon from "../../../design/components/Icon/native/redesign/generated/PauseIcon.tsx";
import MediaPlayerManagerDefault from "../../media/native/MediaPlayerManager.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import MessageStore from "../../../stores/MessageStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ Easing: hasOwnProperty, StyleSheet, TouchableOpacity: metroRequire, View: closure_7 } = get_ActivityIndicator);
const Constants = fn(1085);
({ AnalyticEvents: closure_12, MessageFlags: map1, Routes: closure_14 } = Constants);
const SquarePIPReferenceDimensions = fn(17668).SquarePIPReferenceDimensions;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: SquarePIPReferenceDimensions.height,
    width: SquarePIPReferenceDimensions.width,
  },
  pipControls: null,
  pipButton: null,
  dismissButton: null,
  backButton: null,
  infoContainer: null,
  infoContainerGradient: null,
  infoContent: null,
  actionContainer: null,
  playPauseButton: null,
  progressBar: null,
};
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.zIndex = 5;
obj2.pipControls = obj3;
const merged1 = Object.assign(nativeDefault.shadows.SHADOW_LOW_HOVER);
obj2.pipButton = {
  position: "absolute",
  top: 8,
  padding: 8,
  borderRadius: nativeDefault.radii.round,
  borderWidth: 1,
  borderColor: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT,
  tintColor: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT,
  backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT,
};
obj2.dismissButton = { right: 8 };
obj2.backButton = { left: 8 };
obj2.infoContainer = { justifyContent: "center", alignItems: "center", marginBottom: 8, height: 34 };
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj2.infoContainerGradient = {};
obj2.infoContent = { justifyContent: "center", alignItems: "center", alignSelf: "stretch", marginHorizontal: 4 };
obj2.actionContainer = { justifyContent: "center", alignItems: "center", width: 48, height: 48, zIndex: 100 };
let size = {
  justifyContent: "center",
  alignItems: "center",
  width: 32,
  height: 32,
  zIndex: 100,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
};
obj2.playPauseButton = size;
let obj6 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj6.justifyContent = "center";
obj6.alignItems = "center";
obj2.progressBar = obj6;
let closure_17 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? function MediaInfo(message) {
      const cResult = message(576).c(29);
      message = message.message;
      ({ activeMediaPlayerSource, isVoiceMessage, isControlVisible } = message);
      const tmp4 = closure_17();
      let obj = message(576);
      const token = message(4779).useToken(nativeDefault.colors.BACKGROUND_SURFACE_HIGH);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore, UserStore, RelationshipStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      let channel_id;
      if (message != null) {
        channel_id = message.channel_id;
      }
      if (cResult[1] !== channel_id) {
        let channel_id1;
        if (message != null) {
          channel_id1 = message.channel_id;
        }
        const fn = function l() {
          let channel_id;
          if (message != null) {
            channel_id = message.channel_id;
          }
          const channel = ChannelStore.getChannel(channel_id);
          let channelName = null;
          if (null != channel) {
            const obj = useChannelName;
            channelName = obj.computeChannelName(channel, UserStore, RelationshipStore, true, true);
          }
          return channelName;
        };
        cResult[1] = channel_id1;
        cResult[2] = fn;
        let tmp12 = fn;
      } else {
        tmp12 = cResult[2];
      }
      if (cResult[3] !== message) {
        const items1 = [message];
        cResult[3] = message;
        cResult[4] = items1;
        let tmp14 = items1;
      } else {
        tmp14 = cResult[4];
      }
      const obj2 = message(4779);
      const stateFromStores = message(504).useStateFromStores(first, tmp12, tmp14);
      const tmpResult = message(504);
      [tmp17, importDefault] = noop.useState(0);
      [, dependencyMap] = noop.useState(0);
      if (cResult[5] === activeMediaPlayerSource) {
        if (cResult[6] === isVoiceMessage) {
          if (cResult[7] === message) {
            const _Symbol = Symbol;
            if (cResult[9] !== Symbol.for("react.early_return_sentinel")) {
              return tmp21;
            } else {
              const _Symbol3 = Symbol;
              if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
                class R {
                  constructor(arg0) {
                    return closure_2(message.nativeEvent.layout.width);
                  }
                }
                cResult[10] = R;
              } else {
                class R {
                  constructor(arg0) {
                    return closure_2(message.nativeEvent.layout.width);
                  }
                }
              }
              if (cResult[11] !== tmp20) {
                class R {
                  constructor(arg0) {
                    return closure_2(message.nativeEvent.layout.width);
                  }
                }
                const obj3 = {
                  variant: "text-md/semibold",
                  lineClamp: 1,
                  ellipsizeMode: "clip",
                  onLayout: R,
                  children: tmp20,
                };
                const tmp27 = closure_15(tmp(5087).Text, obj3);
                cResult[11] = tmp20;
                cResult[12] = tmp27;
              } else {
                class R {
                  constructor(arg0) {
                    return closure_2(message.nativeEvent.layout.width);
                  }
                }
              }
              const _Symbol2 = Symbol;
              if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                class U {
                  constructor(arg0) {
                    return closure_1(message.nativeEvent.layout.width);
                  }
                }
                cResult[13] = U;
              } else {
                class U {
                  constructor(arg0) {
                    return closure_1(message.nativeEvent.layout.width);
                  }
                }
              }
              if (cResult[14] === token) {
                class U {
                  constructor(arg0) {
                    return closure_1(message.nativeEvent.layout.width);
                  }
                }
              }
              let tmp30 = tmp26;
              if (tmp19) {
                class U {
                  constructor(arg0) {
                    return closure_1(message.nativeEvent.layout.width);
                  }
                }
                const obj4 = { style: { flex: 1 }, children: null };
                const obj5 = { spacing: 20, speed: 0.2, children: tmp26 };
                const items2 = [closure_15(tmp(17840).Marquee, obj5)];
                const obj6 = {
                  start: { x: 0, y: 0 },
                  end: { x: 1, y: 0 },
                  locations: [0, 0.1, 0.2, 0.8, 0.9, 1],
                  colors: null,
                  style: null,
                };
                const items3 = [token, `${tmp6}CC`, `${tmp6}00`, `${tmp6}00`, `${tmp6}CC`, token];
                obj6.colors = items3;
                obj6.style = tmp4.infoContainerGradient;
                items2[1] = closure_15(LinearGradientDefault, obj6);
                obj4.children = items2;
                tmp30 = closure_16(closure_7, obj4);
              }
              cResult[14] = token;
              cResult[15] = tmp26;
              cResult[16] = tmp19;
              cResult[17] = tmp4.infoContainerGradient;
              cResult[18] = tmp30;
            }
          }
        }
      }
      const tmp16 = _slicedToArray(noop.useState(0), 2);
      if (message != null) {
        class U {
          constructor(arg0) {
            return closure_1(message.nativeEvent.layout.width);
          }
        }
      }
      let tmp23 = null;
      let username;
      if (null != message) {
        class U {
          constructor(arg0) {
            return closure_1(message.nativeEvent.layout.width);
          }
        }
        if (null != undefined) {
          class U {
            constructor(arg0) {
              return closure_1(message.nativeEvent.layout.width);
            }
          }
          if (null != activeMediaPlayerSource) {
            class U {
              constructor(arg0) {
                return closure_1(message.nativeEvent.layout.width);
              }
            }
          }
          username = message.author.username;
          tmp23 = forResult;
        }
      }
      cResult[5] = activeMediaPlayerSource;
      cResult[6] = isVoiceMessage;
      cResult[7] = message;
      cResult[8] = username;
      cResult[9] = tmp23;
      forResult = Symbol.for("react.early_return_sentinel");
    }
  : function MediaInfo(message) {
      message = message.message;
      const activeMediaPlayerSource = message.activeMediaPlayerSource;
      let first;
      let first1;
      noop = undefined;
      ({ isVoiceMessage, isControlVisible } = message);
      const tmp = closure_17();
      const token = message(4779).useToken(first(587).colors.BACKGROUND_SURFACE_HIGH);
      let obj = message(4779);
      const items = [ChannelStore, UserStore, RelationshipStore];
      const items1 = [message];
      const stateFromStores = message(504).useStateFromStores(
        items,
        () => {
          let channel_id;
          if (message != null) {
            channel_id = message.channel_id;
          }
          const channel = ChannelStore.getChannel(channel_id);
          let channelName = null;
          if (null != channel) {
            const obj = useChannelName;
            channelName = obj.computeChannelName(channel, UserStore, RelationshipStore, true, true);
          }
          return channelName;
        },
        items1,
      );
      const tmp7 = first1(noop.useState(0), 2);
      first = tmp7[0];
      dependencyMap = tmp7[1];
      const tmp9 = first1(noop.useState(0), 2);
      first1 = tmp9[0];
      noop = tmp9[1];
      const items2 = [first1, first];
      const memo = noop.useMemo(() => first1 >= first, items2);
      if (message != null) {
        const contentMessage = message.getContentMessage();
      }
      if (null != message) {
        if (null != contentMessage) {
          if (null != activeMediaPlayerSource) {
            if (isVoiceMessage) {
              let str2 = message.author.username;
            } else {
              str2 = "";
              if (contentMessage.attachments.length > 0) {
                str2 = "";
                if (null != activeMediaPlayerSource.attachmentIndex) {
                  str2 = tmp4(8377)(contentMessage.attachments[activeMediaPlayerSource.attachmentIndex]);
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
            const tmp14 = closure_15(tmp2(5087).Text, obj3);
            const obj4 = {
              accessibilityElementsHidden: isControlVisible,
              style: tmp.infoContent,
              onLayout(nativeEvent) {
                return closure_2(nativeEvent.nativeEvent.layout.width);
              },
              children: null,
            };
            const obj5 = { style: tmp.infoContainer, children: null };
            let tmp16Result = tmp14;
            if (memo) {
              const obj6 = { style: { flex: 1 }, children: null };
              const obj7 = { spacing: 20, speed: 0.2, children: tmp14 };
              const items3 = [closure_15(tmp2(17840).Marquee, obj7)];
              const obj8 = {
                start: { x: 0, y: 0 },
                end: { x: 1, y: 0 },
                locations: [0, 0.1, 0.2, 0.8, 0.9, 1],
                colors: null,
                style: null,
              };
              const items4 = [token, `${tmp5}CC`, `${tmp5}00`, `${tmp5}00`, `${tmp5}CC`, token];
              obj8.colors = items4;
              obj8.style = tmp.infoContainerGradient;
              items3[1] = closure_15(tmp4(5388), obj8);
              obj6.children = items3;
              tmp16Result = closure_16(closure_7, obj6);
            }
            const items5 = [tmp16Result];
            let tmp13Result = null != stateFromStores;
            if (tmp13Result) {
              const obj9 = { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: stateFromStores };
              tmp13Result = closure_15(tmp2(5087).Text, obj9);
            }
            items5[1] = tmp13Result;
            obj5.children = items5;
            obj4.children = closure_16(closure_7, obj5);
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
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PiPControls(message) {
      const cResult = message(576).c(32);
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
                safeTransitionToDefault(state.CHANNEL(guildId, message.channel_id, message.id), {
                  navigationReplace: true,
                  openChannel: true,
                });
                const tmp6Result = safeTransitionToDefault;
              }
            }
          }
        };
        cResult[0] = message;
        cResult[1] = fn;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      let obj = message(576);
      const fn2 = function _() {
        let num = 0;
        if (visible) {
          num = 1;
        }
        return { opacity: timing.withTiming(num, { duration: 200 }) };
      };
      const tmpResult = message(4811);
      fn2.__closure = { withTiming: message(5092).withTiming, visible };
      fn2.__workletHash = 3641278982291;
      fn2.__initData = __initData;
      const animatedStyle = tmpResult.useAnimatedStyle(fn2);
      if (cResult[2] !== isVoiceMessage) {
        const intl = tmp(1126).intl;
        const string = intl.string;
        let KTonHP = tmp(1126).t;
        if (isVoiceMessage) {
          KTonHP = KTonHP.KTonHP;
          let stringResult = string(KTonHP);
        } else {
          stringResult = string(KTonHP["13/7kX"]);
        }
        cResult[2] = isVoiceMessage;
        cResult[3] = stringResult;
      } else if (cResult[4] !== isVoiceMessage) {
        const intl2 = tmp(1126).intl;
        const string2 = intl2.string;
        let t = tmp(1126).t;
        if (isVoiceMessage) {
          t = t["6rhrVG"];
          let string2Result = string2(t);
        } else {
          string2Result = string2(t.WAI6xu);
        }
        cResult[4] = isVoiceMessage;
        cResult[5] = string2Result;
      } else {
        if (cResult[6] === animatedStyle) {
          if (cResult[7] === tmp4.pipControls) {
            let tmp14 = cResult[8];
          }
          const _Symbol = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp18 = closure_15(tmp(8525).BackgroundBlurFill, { blurAmount: 0.05 });
            cResult[9] = tmp18;
            let tmp16 = tmp18;
          } else {
            tmp16 = cResult[9];
          }
          if (cResult[10] === tmp4.backButton) {
            if (cResult[11] === tmp4.pipButton) {
              let tmp20 = cResult[12];
            }
            const _Symbol2 = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp23 = closure_15(tmp(6209).ArrowLargeLeftIcon, { size: "sm" });
              cResult[13] = tmp23;
              let tmp21 = tmp23;
            } else {
              tmp21 = cResult[13];
            }
            if (cResult[14] === tmp7) {
              if (cResult[15] === tmp5) {
                if (cResult[16] === tmp19) {
                  if (cResult[17] === tmp20) {
                    let tmp24 = cResult[18];
                  }
                  if (cResult[19] === tmp4.dismissButton) {
                    if (cResult[20] === tmp4.pipButton) {
                      let tmp29 = cResult[21];
                    }
                    const _Symbol3 = Symbol;
                    if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                      const tmp32 = closure_15(tmp(4996).XLargeIcon, { size: "sm" });
                      cResult[22] = tmp32;
                      let tmp30 = tmp32;
                    } else {
                      tmp30 = cResult[22];
                    }
                    if (cResult[23] === tmp10) {
                      if (cResult[24] === handleClosePip) {
                        if (cResult[25] === tmp28) {
                          if (cResult[26] === tmp29) {
                            let tmp33 = cResult[27];
                          }
                          if (cResult[28] === tmp33) {
                            if (cResult[29] === tmp14) {
                              if (cResult[30] === tmp24) {
                                let tmp37 = cResult[31];
                              }
                              return tmp37;
                            }
                          }
                          const obj3 = { style: tmp14, children: null };
                          const items = [tmp16, tmp24, tmp33];
                          obj3.children = items;
                          const tmp40 = closure_16(visible(4811).View, obj3);
                          cResult[28] = tmp33;
                          cResult[29] = tmp14;
                          cResult[30] = tmp24;
                          cResult[31] = tmp40;
                          tmp37 = tmp40;
                        }
                      }
                    }
                    const obj4 = {
                      disabled: tmp28,
                      style: tmp29,
                      onPress: handleClosePip,
                      accessible: true,
                      accessibilityRole: "button",
                      accessibilityLabel: tmp10,
                      children: tmp30,
                    };
                    const tmp36 = closure_15(closure_6, obj4);
                    cResult[23] = tmp10;
                    cResult[24] = handleClosePip;
                    cResult[25] = tmp28;
                    cResult[26] = tmp29;
                    cResult[27] = tmp36;
                    tmp33 = tmp36;
                  }
                  const items1 = [,];
                  ({ pipButton: arr3[0], dismissButton: arr3[1] } = tmp4);
                  cResult[19] = tmp4.dismissButton;
                  cResult[20] = tmp4.pipButton;
                  cResult[21] = items1;
                  tmp29 = items1;
                }
              }
            }
            const obj5 = {
              disabled: tmp19,
              style: tmp20,
              onPress: tmp5,
              accessible: true,
              accessibilityRole: "button",
              accessibilityLabel: tmp7,
              children: tmp21,
            };
            const tmp27 = closure_15(closure_6, obj5);
            cResult[14] = tmp7;
            cResult[15] = tmp5;
            cResult[16] = tmp19;
            cResult[17] = tmp20;
            cResult[18] = tmp27;
            tmp24 = tmp27;
          }
          const items2 = [,];
          ({ pipButton: arr2[0], backButton: arr2[1] } = tmp4);
          cResult[10] = tmp4.backButton;
          cResult[11] = tmp4.pipButton;
          cResult[12] = items2;
          tmp20 = items2;
        }
        const items3 = [tmp4.pipControls, animatedStyle];
        cResult[6] = animatedStyle;
        cResult[7] = tmp4.pipControls;
        cResult[8] = items3;
        tmp14 = items3;
      }
      const obj2 = { withTiming: message(5092).withTiming, visible };
    }
  : function PiPControls(message) {
      message = message.message;
      const visible = message.visible;
      const isVoiceMessage = message.isVoiceMessage;
      const tmp = closure_17();
      const items = [message];
      const callback = noop.useCallback(() => {
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
              safeTransitionToDefault(state.CHANNEL(guildId, message.channel_id, message.id), {
                navigationReplace: true,
                openChannel: true,
              });
              const tmp6Result = safeTransitionToDefault;
            }
          }
        }
      }, items);
      const fn = function c() {
        let num = 0;
        if (visible) {
          num = 1;
        }
        return { opacity: timing.withTiming(num, { duration: 200 }) };
      };
      let obj = message(4811);
      fn.__closure = { withTiming: message(5092).withTiming, visible };
      fn.__workletHash = 1481412007504;
      fn.__initData = __initData2;
      const animatedStyle = obj.useAnimatedStyle(fn);
      const intl = message(1126).intl;
      const string = intl.string;
      const t = message(1126).t;
      if (isVoiceMessage) {
        let stringResult = string(t.KTonHP);
      } else {
        stringResult = string(t["13/7kX"]);
      }
      const intl2 = tmp3(1126).intl;
      const string2 = intl2.string;
      const t2 = tmp3(1126).t;
      if (isVoiceMessage) {
        let string2Result = string2(t2["6rhrVG"]);
      } else {
        string2Result = string2(t2.WAI6xu);
      }
      const obj3 = { style: null, children: null };
      const items1 = [tmp.pipControls, animatedStyle];
      obj3.style = items1;
      const items2 = [closure_15(message(8525).BackgroundBlurFill, { blurAmount: 0.05 }), ,];
      const obj4 = {
        disabled: !visible,
        style: null,
        onPress: callback,
        accessible: true,
        accessibilityRole: "button",
        accessibilityLabel: stringResult,
        children: closure_15(message(6209).ArrowLargeLeftIcon, { size: "sm" }),
      };
      const items3 = [,];
      ({ pipButton: arr4[0], backButton: arr4[1] } = tmp);
      obj4.style = items3;
      items2[1] = closure_15(closure_6, obj4);
      const obj5 = {
        disabled: !visible,
        style: null,
        onPress: message.handleClosePip,
        accessible: true,
        accessibilityRole: "button",
        accessibilityLabel: string2Result,
        children: closure_15(message(4996).XLargeIcon, { size: "sm" }),
      };
      const items4 = [,];
      ({ pipButton: arr5[0], dismissButton: arr5[1] } = tmp);
      obj5.style = items4;
      items2[2] = closure_15(closure_6, obj5);
      obj3.children = items2;
      return closure_16(visible(4811).View, obj3);
    };
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useAnalyticsEffects(activeMediaPlayerSource, arg1, message) {
      _require = activeMediaPlayerSource;
      closure_1 = arg1;
      dependencyMap = message;
      const cResult = require("c").c(7);
      noop.useRef(null);
      if (cResult[0] === activeMediaPlayerSource) {
        if (cResult[1] === message) {
          if (cResult[2] === arg1) {
            let tmp2 = cResult[3];
            let tmp3 = cResult[4];
          }
          const effect = noop.useEffect(tmp2, tmp3);
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const fn2 = function c() {
              let date = new Date();
              return () => {
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
                  sender_user_id: null,
                  type: null,
                  is_voice_message: null,
                  total_duration_secs: null,
                  pip_playback_start_time_secs: null,
                  pip_playback_end_time_secs: null,
                  pip_opened_timestamp: null,
                  pip_closed_timestamp: null,
                };
                let id;
                if (message != null) {
                  id = message.author.id;
                }
                obj.sender_user_id = id;
                let content_type;
                if (tmp2 != null) {
                  content_type = tmp2.content_type;
                }
                obj.type = content_type;
                let hasFlagResult;
                if (message != null) {
                  const contentMessage1 = message.getContentMessage();
                  if (contentMessage1 != null) {
                    hasFlagResult = contentMessage1.hasFlag(constants2.IS_VOICE_MESSAGE);
                  }
                }
                obj.is_voice_message = hasFlagResult;
                let duration;
                if (finalProgress != null) {
                  duration = finalProgress.duration;
                }
                let result;
                if (null != duration) {
                  result = duration / 1000;
                }
                obj.total_duration_secs = result;
                let time;
                if (initialProgress != null) {
                  time = initialProgress.time;
                }
                let result1;
                if (null != time) {
                  result1 = time / 1000;
                }
                obj.pip_playback_start_time_secs = result1;
                let time1;
                if (finalProgress != null) {
                  time1 = finalProgress.time;
                }
                let result2;
                if (null != time1) {
                  result2 = time1 / 1000;
                }
                obj.pip_playback_end_time_secs = result2;
                obj.pip_opened_timestamp = date.toISOString();
                date = new Date();
                obj.pip_closed_timestamp = date.toISOString();
                AnalyticsUtilsDefault.track(constants.MEDIA_PIP_ENDED, obj);
              };
            };
            const items = [];
            cResult[5] = fn2;
            cResult[6] = items;
            let tmp7 = items;
            let tmp6 = fn2;
          } else {
            tmp6 = cResult[5];
            tmp7 = cResult[6];
          }
          const effect1 = noop.useEffect(tmp6, tmp7);
        }
      }
      const fn = function l() {
        let tmp2 = null == ref.current;
        if (tmp2) {
          tmp2 = null != activeMediaPlayerSource;
        }
        if (tmp2) {
          tmp2 = null != finalProgress;
        }
        if (tmp2) {
          tmp2 = null != message;
        }
        if (tmp2) {
          const obj = { initialProgress: finalProgress, activeMediaPlayerSource, message };
          ref.current = obj;
        }
        let tmp9 = null != ref.current;
        if (tmp9) {
          tmp9 = null != finalProgress;
        }
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
      let obj = require("c");
    }
  : function useAnalyticsEffects(activeMediaPlayerSource, arg1, message) {
      closure_1 = arg1;
      noop.useRef(null);
      const items = [arg1, activeMediaPlayerSource, message];
      const effect = noop.useEffect(() => {
        let tmp2 = null == ref.current;
        if (tmp2) {
          tmp2 = null != activeMediaPlayerSource;
        }
        if (tmp2) {
          tmp2 = null != finalProgress;
        }
        if (tmp2) {
          tmp2 = null != message;
        }
        if (tmp2) {
          const obj = { initialProgress: finalProgress, activeMediaPlayerSource, message };
          ref.current = obj;
        }
        let tmp9 = null != ref.current;
        if (tmp9) {
          tmp9 = null != finalProgress;
        }
        if (tmp9) {
          ref.current.finalProgress = finalProgress;
        }
      }, items);
      const effect1 = noop.useEffect(() => {
        let date = new Date();
        return () => {
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
            sender_user_id: null,
            type: null,
            is_voice_message: null,
            total_duration_secs: null,
            pip_playback_start_time_secs: null,
            pip_playback_end_time_secs: null,
            pip_opened_timestamp: null,
            pip_closed_timestamp: null,
          };
          let id;
          if (message != null) {
            id = message.author.id;
          }
          obj.sender_user_id = id;
          let content_type;
          if (tmp2 != null) {
            content_type = tmp2.content_type;
          }
          obj.type = content_type;
          let hasFlagResult;
          if (message != null) {
            const contentMessage1 = message.getContentMessage();
            if (contentMessage1 != null) {
              hasFlagResult = contentMessage1.hasFlag(constants2.IS_VOICE_MESSAGE);
            }
          }
          obj.is_voice_message = hasFlagResult;
          let duration;
          if (finalProgress != null) {
            duration = finalProgress.duration;
          }
          let result;
          if (null != duration) {
            result = duration / 1000;
          }
          obj.total_duration_secs = result;
          let time;
          if (initialProgress != null) {
            time = initialProgress.time;
          }
          let result1;
          if (null != time) {
            result1 = time / 1000;
          }
          obj.pip_playback_start_time_secs = result1;
          let time1;
          if (finalProgress != null) {
            time1 = finalProgress.time;
          }
          let result2;
          if (null != time1) {
            result2 = time1 / 1000;
          }
          obj.pip_playback_end_time_secs = result2;
          obj.pip_opened_timestamp = date.toISOString();
          date = new Date();
          obj.pip_closed_timestamp = date.toISOString();
          AnalyticsUtilsDefault.track(constants.MEDIA_PIP_ENDED, obj);
        };
      }, []);
    };
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? function usePlaybackCompletionEffects(isCompleted, arg1) {
      closure_1 = arg1;
      const cResult = c.c(6);
      if (cResult[0] === arg1) {
        isCompleted = undefined;
        if (isCompleted != null) {
          isCompleted = isCompleted.isCompleted;
        }
        if (cResult[1] === isCompleted) {
          let tmp4 = cResult[2];
        }
        let isCompleted1;
        if (isCompleted != null) {
          isCompleted1 = isCompleted.isCompleted;
        }
        if (cResult[3] === arg1) {
          if (cResult[4] === isCompleted1) {
            let tmp8 = cResult[5];
          }
          const effect = noop.useEffect(tmp4, tmp8);
        }
        const items = [isCompleted1, arg1];
        cResult[3] = arg1;
        cResult[4] = isCompleted1;
        cResult[5] = items;
        tmp8 = items;
      }
      cResult[0] = arg1;
      let isCompleted2;
      if (isCompleted != null) {
        isCompleted2 = isCompleted.isCompleted;
      }
      const fn = function s() {
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
      tmp4 = fn;
    }
  : function usePlaybackCompletionEffects(isCompleted, arg1) {
      closure_1 = arg1;
      isCompleted = undefined;
      if (isCompleted != null) {
        isCompleted = isCompleted.isCompleted;
      }
      const items = [isCompleted, arg1];
      const effect = noop.useEffect(() => {
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
ReactCompilerGating = fn(558);
let obj4 = {
  position: "absolute",
  top: 8,
  padding: 8,
  borderRadius: nativeDefault.radii.round,
  borderWidth: 1,
  borderColor: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT,
  tintColor: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT,
  backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT,
};
let obj5 = {};
size = fn(2);
let result = size.fileFinishedImporting("modules/media_panel/native/MediaPlaybackPip.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function MediaPlaybackPip() {
      const cResult = isPlaying(closePip[13]).c(61);
      closure_17();
      noop.useRef(null);
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
        let first = fn;
      } else {
        first = cResult[0];
      }
      let obj = isPlaying(closePip[13]);
      const tmpResult = isPlaying(closePip[30]);
      const mediaPlayerManagerStore = tmpResult.useMediaPlayerManagerStore(isPlaying(closePip[31]).useShallow(first));
      isPlaying = mediaPlayerManagerStore.isPlaying;
      ({ progress, activeMediaPlayerSource } = mediaPlayerManagerStore);
      ({ mediaSourceMessage, closePip } = mediaPlayerManagerStore);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MessageStore];
        cResult[1] = items;
        let tmp8 = items;
      } else {
        tmp8 = cResult[1];
      }
      let channelId;
      if (activeMediaPlayerSource != null) {
        channelId = activeMediaPlayerSource.channelId;
      }
      if (cResult[2] === channelId) {
        let messageId;
        if (activeMediaPlayerSource != null) {
          messageId = activeMediaPlayerSource.messageId;
        }
        if (cResult[3] === messageId) {
          let tmp12 = cResult[4];
        }
        if (cResult[5] !== activeMediaPlayerSource) {
          const items1 = [activeMediaPlayerSource];
          cResult[5] = activeMediaPlayerSource;
          cResult[6] = items1;
          let tmp13 = items1;
        } else {
          tmp13 = cResult[6];
        }
        const stateFromStores = tmp(closePip[16]).useStateFromStores(tmp8, tmp12, tmp13);
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
          let tmp15 = hasFlagResult;
        } else {
          tmp15 = cResult[8];
        }
        closure_22(activeMediaPlayerSource, progress, mediaSourceMessage);
        const tmp22 = first1(obj2.useState(false), 2);
        first1 = tmp22[0];
        noop = tmp24;
        if (cResult[9] === first1) {
          if (cResult[10] === isPlaying) {
            let tmp25 = cResult[11];
            let tmp26 = cResult[12];
          }
          const effect = obj2.useEffect(tmp25, tmp26);
          const dismissPanel = obj2.useContext(activeMediaPlayerSource(closePip[32])).dismissPanel;
          if (cResult[13] === closePip) {
            if (cResult[14] === dismissPanel) {
              let tmp29 = cResult[15];
            }
            closure_23(progress, tmp29);
            let tmp33 = first1;
            if (!first1) {
              let isCompleted;
              if (progress != null) {
                isCompleted = progress.isCompleted;
              }
              tmp33 = true === isCompleted;
            }
            closure_6 = tmp33;
            if (cResult[16] !== isPlaying) {
              class X {
                constructor() {
                  obj = closure_1(closure_2[30]);
                  if (isPlaying) {
                    pauseCurrentPlayerResult = obj.pauseCurrentPlayer();
                    tmp3 = closure_4;
                    flag = true;
                    tmp4 = closure_4(true);
                  } else {
                    playCurrentPlayerResult = obj.playCurrentPlayer();
                  }
                  return;
                }
              }
              cResult[16] = isPlaying;
              cResult[17] = X;
            } else {
              class X {
                constructor() {
                  obj = closure_1(closure_2[30]);
                  if (isPlaying) {
                    pauseCurrentPlayerResult = obj.pauseCurrentPlayer();
                    tmp3 = closure_4;
                    flag = true;
                    tmp4 = closure_4(true);
                  } else {
                    playCurrentPlayerResult = obj.playCurrentPlayer();
                  }
                  return;
                }
              }
            }
            if (cResult[18] !== isPlaying) {
              class X {
                constructor() {
                  obj = closure_1(closure_2[30]);
                  if (isPlaying) {
                    pauseCurrentPlayerResult = obj.pauseCurrentPlayer();
                    tmp3 = closure_4;
                    flag = true;
                    tmp4 = closure_4(true);
                  } else {
                    playCurrentPlayerResult = obj.playCurrentPlayer();
                  }
                  return;
                }
              }
              if (isPlaying) {
                class X {
                  constructor() {
                    obj = closure_1(closure_2[30]);
                    if (isPlaying) {
                      pauseCurrentPlayerResult = obj.pauseCurrentPlayer();
                      tmp3 = closure_4;
                      flag = true;
                      tmp4 = closure_4(true);
                    } else {
                      playCurrentPlayerResult = obj.playCurrentPlayer();
                    }
                    return;
                  }
                }
              } else {
                class X {
                  constructor() {
                    obj = closure_1(closure_2[30]);
                    if (isPlaying) {
                      pauseCurrentPlayerResult = obj.pauseCurrentPlayer();
                      tmp3 = closure_4;
                      flag = true;
                      tmp4 = closure_4(true);
                    } else {
                      playCurrentPlayerResult = obj.playCurrentPlayer();
                    }
                    return;
                  }
                }
              }
              const obj3 = { color: activeMediaPlayerSource(closePip[11]).colors.WHITE, size: "md" };
              const tmp36Result = tmp36(tmp37, obj3);
              cResult[18] = isPlaying;
              cResult[19] = tmp36Result;
            } else {
              class X {
                constructor() {
                  obj = closure_1(closure_2[30]);
                  if (isPlaying) {
                    pauseCurrentPlayerResult = obj.pauseCurrentPlayer();
                    tmp3 = closure_4;
                    flag = true;
                    tmp4 = closure_4(true);
                  } else {
                    playCurrentPlayerResult = obj.playCurrentPlayer();
                  }
                  return;
                }
              }
              if (cResult[20] === activeMediaPlayerSource) {
                class X {
                  constructor() {
                    obj = closure_1(closure_2[30]);
                    if (isPlaying) {
                      pauseCurrentPlayerResult = obj.pauseCurrentPlayer();
                      tmp3 = closure_4;
                      flag = true;
                      tmp4 = closure_4(true);
                    } else {
                      playCurrentPlayerResult = obj.playCurrentPlayer();
                    }
                    return;
                  }
                }
              }
              const obj4 = {
                message: mediaSourceMessage,
                activeMediaPlayerSource,
                isVoiceMessage: !tmp18,
                isControlVisible: tmp33,
              };
              cResult[20] = activeMediaPlayerSource;
              cResult[21] = !tmp18;
              cResult[22] = mediaSourceMessage;
              cResult[23] = tmp33;
              cResult[24] = closure_15(closure_18, obj4);
              class G {
                constructor() {
                  if (closure_3) {
                    tmp = globalThis;
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
              const tmp43 = closure_15(closure_18, obj4);
            }
          }
          const fn3 = function z() {
            dismissPanel();
            closePip();
            MediaPlayerManagerDefault.pauseCurrentPlayer();
          };
          cResult[13] = closePip;
          cResult[14] = dismissPanel;
          cResult[15] = fn3;
          tmp29 = fn3;
        }
        class G {
          constructor() {
            if (closure_3) {
              tmp = globalThis;
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
        const items2 = [first1, tmp22[1], isPlaying];
        cResult[9] = first1;
        cResult[10] = isPlaying;
        cResult[11] = G;
        cResult[12] = items2;
        tmp26 = items2;
        tmp25 = G;
        tmp18 = !tmp15;
        const tmpResult4 = tmp(closePip[16]);
      }
      if (activeMediaPlayerSource != null) {
        class X {
          constructor() {
            obj = closure_1(closure_2[30]);
            if (isPlaying) {
              pauseCurrentPlayerResult = obj.pauseCurrentPlayer();
              tmp3 = closure_4;
              flag = true;
              tmp4 = closure_4(true);
            } else {
              playCurrentPlayerResult = obj.playCurrentPlayer();
            }
            return;
          }
        }
      }
      cResult[2] = undefined;
      if (activeMediaPlayerSource != null) {
        class X {
          constructor() {
            obj = closure_1(closure_2[30]);
            if (isPlaying) {
              pauseCurrentPlayerResult = obj.pauseCurrentPlayer();
              tmp3 = closure_4;
              flag = true;
              tmp4 = closure_4(true);
            } else {
              playCurrentPlayerResult = obj.playCurrentPlayer();
            }
            return;
          }
        }
      }
      const fn2 = function h() {
        let channelId;
        if (activeMediaPlayerSource != null) {
          channelId = activeMediaPlayerSource.channelId;
        }
        if (activeMediaPlayerSource != null) {
          const messageId = activeMediaPlayerSource.messageId;
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
      tmp12 = fn2;
      const tmpResult3 = isPlaying(closePip[31]);
    }
  : function MediaPlaybackPip() {
      let tmp = closure_17();
      const ref = noop.useRef(null);
      const obj2 = isPlaying(closePip[30]);
      const mediaPlayerManagerStore = obj2.useMediaPlayerManagerStore(
        isPlaying(closePip[31]).useShallow((isPlaying) => ({
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
      const obj3 = isPlaying(closePip[31]);
      const items = [first];
      const items1 = [activeMediaPlayerSource];
      const stateFromStores = isPlaying(closePip[16]).useStateFromStores(
        items,
        () => {
          let channelId;
          if (activeMediaPlayerSource != null) {
            channelId = activeMediaPlayerSource.channelId;
          }
          if (activeMediaPlayerSource != null) {
            const messageId = activeMediaPlayerSource.messageId;
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
      noop = tmp9;
      closure_22(activeMediaPlayerSource, progress, mediaSourceMessage);
      const tmp11 = mediaSourceMessage(noop.useState(false), 2);
      first = tmp11[0];
      closure_6 = tmp13;
      const items2 = [first, tmp11[1], isPlaying];
      const effect = obj.useEffect(() => {
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
        MediaPlayerManagerDefault.pauseCurrentPlayer();
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
        if (isPlaying) {
          let PlayIcon = PauseIcon.PauseIcon;
        } else {
          PlayIcon = PlayIcon2.PlayIcon;
        }
        return closure_2_15(PlayIcon, { color: nativeDefault.colors.WHITE, size: "md" });
      }, items5);
      const items7 = [mediaSourceMessage, handleClosePip, first, hasFlagResult];
      const memo1 = obj.useMemo(
        () =>
          closure_2_15(closure_18, {
            message: mediaSourceMessage,
            activeMediaPlayerSource,
            isVoiceMessage: hasFlagResult,
            isControlVisible: first,
          }),
        items6,
      );
      const memo2 = obj.useMemo(
        () =>
          closure_2_15(closure_21, {
            message: mediaSourceMessage,
            handleClosePip,
            visible: first,
            isVoiceMessage: hasFlagResult,
          }),
        items7,
      );
      const intl = tmp3(closePip[25]).intl;
      const string = intl.string;
      const t = tmp3(closePip[25]).t;
      if (hasFlagResult) {
        let stringResult = string(t.AlHqHT);
      } else {
        stringResult = string(t.RscU7I);
      }
      const intl2 = tmp3(closePip[25]).intl;
      const string2 = intl2.string;
      const t2 = tmp3(closePip[25]).t;
      if (hasFlagResult) {
        let string2Result = string2(t2["3XohGn"]);
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
      const obj5 = {
        style: tmp.container,
        activeOpacity: 1,
        onPress() {
          let tmp = !isPlaying;
          if (!isPlaying) {
            tmp = first;
          }
          if (!tmp) {
            closure_6(!first);
          }
        },
        accessible: false,
        children: null,
      };
      const items8 = [memo2, memo1];
      const obj6 = { style: tmp.actionContainer, children: null };
      const obj7 = {
        style: tmp.progressBar,
        size: 48,
        width: 2,
        prefill: num,
        easing: first.out(first.linear),
        duration: null,
        fill: null,
        rotation: 0,
        lineCap: "round",
        ref: null,
        tintColor: null,
        backgroundColor: null,
      };
      let num4 = 0;
      if (isPlaying) {
        num4 = num3;
      }
      obj7.duration = num4;
      let num5 = 100;
      if (!isPlaying) {
        num5 = num;
      }
      obj7.fill = num5;
      obj7.ref = ref;
      const obj4 = isPlaying(closePip[16]);
      const tmp27 = dismissPanel;
      obj7.tintColor = isPlaying(closePip[14]).useToken(
        activeMediaPlayerSource(closePip[11]).colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT,
      );
      const tmp3Result = isPlaying(closePip[14]);
      obj7.backgroundColor = isPlaying(closePip[14]).useToken(
        activeMediaPlayerSource(closePip[11]).colors.BACKGROUND_MOD_MUTED,
      );
      const items9 = [closure_15(isPlaying(closePip[35]).AnimatedCircularProgress, obj7)];
      const obj8 = {
        style: tmp.playPauseButton,
        onPress: callback1,
        accessibilityRole: "button",
        accessibilityLabel: null,
        children: null,
      };
      if (isPlaying) {
        stringResult = string2Result;
      }
      obj8.accessibilityLabel = stringResult;
      obj8.children = memo;
      items9[1] = closure_15(closure_6, obj8);
      obj6.children = items9;
      items8[2] = closure_16(tmp27, obj6);
      obj5.children = items8;
      return closure_16(closure_6, obj5);
    };
