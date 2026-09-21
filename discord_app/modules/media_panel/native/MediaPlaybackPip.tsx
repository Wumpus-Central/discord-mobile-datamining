// === Module 17688: MediaPlaybackPip ===

// Module 17688 (MediaPlaybackPip)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import timing from "timing" /* 4757 */;
import useChannelName from "useChannelName" /* 4909 */;
import safeTransitionToDefault from "safeTransitionTo" /* 7489 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7698 */;
import PlayIcon2 from "PlayIcon" /* 8545 */;
import PauseIcon from "PauseIcon" /* 8547 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 14816 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import MessageStore from "MessageStore" /* 4976 */;
import RelationshipStore from "RelationshipStore" /* 4405 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
function MediaInfo(message) {
  message = message.message;
  const activeMediaPlayerSource = message.activeMediaPlayerSource;
  let first;
  let first1;
  noop = undefined;
  ({ isVoiceMessage, isControlVisible } = message);
  const tmp = closure_17();
  const token = message(4457).useToken(first(576).colors.BACKGROUND_SURFACE_HIGH);
  let obj = message(4457);
  const items = [ChannelStore, UserStore, RelationshipStore];
  const items1 = [message];
  const stateFromStores = message(504).useStateFromStores(items, () => {
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
  }, items1);
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
              str2 = tmp4(8537)(contentMessage.attachments[activeMediaPlayerSource.attachmentIndex]);
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
          children: str2
        };
        const tmp14 = closure_15(tmp2(4752).Text, obj3);
        const obj4 = {
          accessibilityElementsHidden: isControlVisible,
          style: tmp.infoContent,
          onLayout(nativeEvent) {
                  return closure_2(nativeEvent.nativeEvent.layout.width);
                },
          children: null
        };
        const obj5 = { style: tmp.infoContainer, children: null };
        let tmp16Result = tmp14;
        if (memo) {
          const obj6 = { style: { flex: 1 }, children: null };
          const obj7 = { spacing: 20, speed: 0.2, children: tmp14 };
          const items3 = [closure_15(tmp2(17689).Marquee, obj7), ];
          const obj8 = { start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, locations: [0, 0.1, 0.2, 0.8, 0.9, 1], colors: null, style: null };
          const items4 = [token, `${tmp5}CC`, `${tmp5}00`, `${tmp5}00`, `${tmp5}CC`, token];
          obj8.colors = items4;
          obj8.style = tmp.infoContainerGradient;
          items3[1] = closure_15(tmp4(5198), obj8);
          obj6.children = items3;
          tmp16Result = closure_16(closure_7, obj6);
        }
        const items5 = [tmp16Result, ];
        let tmp13Result = null != stateFromStores;
        if (tmp13Result) {
          const obj9 = { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: stateFromStores };
          tmp13Result = closure_15(tmp2(4752).Text, obj9);
        }
        items5[1] = tmp13Result;
        obj5.children = items5;
        obj4.children = closure_16(closure_7, obj5);
        return closure_15(closure_7, obj4);
      }
    }
  }
  return null;
}
function PiPControls(message) {
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
          safeTransitionToDefault(closure_2_14.CHANNEL(guildId, message.channel_id, message.id), { navigationReplace: true, openChannel: true });
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
  let obj = message(4492);
  fn.__closure = { withTiming: message(4757).withTiming, visible };
  fn.__workletHash = 3641278982291;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const intl = message(1115).intl;
  const string = intl.string;
  const t = message(1115).t;
  if (isVoiceMessage) {
    let stringResult = string(t.KTonHP);
  } else {
    stringResult = string(t["13/7kX"]);
  }
  const intl2 = tmp3(1115).intl;
  const string2 = intl2.string;
  const t2 = tmp3(1115).t;
  if (isVoiceMessage) {
    let string2Result = string2(t2["6rhrVG"]);
  } else {
    string2Result = string2(t2.WAI6xu);
  }
  const obj3 = { style: null, children: null };
  const items1 = [tmp.pipControls, animatedStyle];
  obj3.style = items1;
  const items2 = [closure_15(message(9184).BackgroundBlurFill, { blurAmount: 0.05 }), , ];
  const obj4 = { disabled: !visible, style: null, onPress: callback, accessible: true, accessibilityRole: "button", accessibilityLabel: stringResult, children: closure_15(message(5845).ArrowLargeLeftIcon, { size: "sm" }) };
  const items3 = [, ];
  ({ pipButton: arr4[0], backButton: arr4[1] } = tmp);
  obj4.style = items3;
  items2[1] = closure_15(closure_6, obj4);
  const obj5 = { disabled: !visible, style: null, onPress: message.handleClosePip, accessible: true, accessibilityRole: "button", accessibilityLabel: string2Result, children: closure_15(message(4708).XLargeIcon, { size: "sm" }) };
  const items4 = [, ];
  ({ pipButton: arr5[0], dismissButton: arr5[1] } = tmp);
  obj5.style = items4;
  items2[2] = closure_15(closure_6, obj5);
  obj3.children = items2;
  return closure_16(visible(4492).View, obj3);
}
get_ActivityIndicator = fn(17);
({ Easing: hasOwnProperty, StyleSheet, TouchableOpacity: metroRequire, View: closure_7 } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticEvents: closure_12, MessageFlags: map1, Routes: closure_14 } = Constants);
const SquarePIPReferenceDimensions = fn(17553).SquarePIPReferenceDimensions;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { container: { justifyContent: "center", alignItems: "center", height: SquarePIPReferenceDimensions.height, width: SquarePIPReferenceDimensions.width }, pipControls: null, pipButton: null, dismissButton: null, backButton: null, infoContainer: null, infoContainerGradient: null, infoContent: null, actionContainer: null, playPauseButton: null, progressBar: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.zIndex = 5;
obj2.pipControls = obj3;
const merged1 = Object.assign(nativeDefault.shadows.SHADOW_LOW_HOVER);
obj2.pipButton = { position: "absolute", top: 8, padding: 8, borderRadius: nativeDefault.radii.round, borderWidth: 1, borderColor: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT, tintColor: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT };
obj2.dismissButton = { right: 8 };
obj2.backButton = { left: 8 };
obj2.infoContainer = { justifyContent: "center", alignItems: "center", marginBottom: 8, height: 34 };
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj2.infoContainerGradient = {};
obj2.infoContent = { justifyContent: "center", alignItems: "center", alignSelf: "stretch", marginHorizontal: 4 };
obj2.actionContainer = { justifyContent: "center", alignItems: "center", width: 48, height: 48, zIndex: 100 };
let size = { justifyContent: "center", alignItems: "center", width: 32, height: 32, zIndex: 100, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.playPauseButton = size;
let obj6 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj6.justifyContent = "center";
obj6.alignItems = "center";
obj2.progressBar = obj6;
let closure_17 = createStyles.createStyles(obj2);
const __initData = { code: "function MediaPlaybackPipTsx1(){const{withTiming,visible}=this.__closure;return{opacity:withTiming(visible?1:0,{duration:200})};}" };
size = fn(2);
let result = size.fileFinishedImporting("modules/media_panel/native/MediaPlaybackPip.tsx");

export default function MediaPlaybackPip() {
  let tmp = closure_17();
  const ref = noop.useRef(null);
  const obj2 = progress(closePip[28]);
  const mediaPlayerManagerStore = obj2.useMediaPlayerManagerStore(progress(closePip[29]).useShallow((isPlaying) => ({ isPlaying: isPlaying.isPlaying, progress: isPlaying.progress, activeMediaPlayerSource: isPlaying.activeMediaPlayerSource, mediaSourceMessage: isPlaying.mediaSourceMessage, closePip: isPlaying.closePip })));
  const isPlaying = mediaPlayerManagerStore.isPlaying;
  progress = isPlaying;
  ({ progress, activeMediaPlayerSource } = mediaPlayerManagerStore);
  let callback = activeMediaPlayerSource;
  ({ mediaSourceMessage, closePip } = mediaPlayerManagerStore);
  const obj3 = progress(closePip[29]);
  const items = [first];
  const items1 = [activeMediaPlayerSource];
  const stateFromStores = progress(closePip[13]).useStateFromStores(items, () => {
    let channelId;
    if (callback != null) {
      channelId = callback.channelId;
    }
    if (callback != null) {
      const messageId = callback.messageId;
    }
    let message = null;
    if (null != channelId) {
      message = null;
      if (null != messageId) {
        message = MessageStore.getMessage(channelId, messageId);
      }
    }
    return message;
  }, items1);
  if (null != stateFromStores) {
    mediaSourceMessage = stateFromStores;
  }
  let hasFlagResult;
  if (mediaSourceMessage != null) {
    let contentMessage = mediaSourceMessage.getContentMessage();
    if (contentMessage != null) {
      hasFlagResult = contentMessage.hasFlag(constants2.IS_VOICE_MESSAGE);
    }
  }
  noop = tmp9;
  closure_129_0 = activeMediaPlayerSource;
  closure_129_1 = progress;
  closure_129_2 = mediaSourceMessage;
  closure_129_3 = obj.useRef(null);
  const items2 = [progress, activeMediaPlayerSource, mediaSourceMessage];
  const effect = obj.useEffect(() => {
    let tmp2 = null == mediaSourceMessage.current;
    if (tmp2) {
      tmp2 = null != progress;
    }
    if (tmp2) {
      tmp2 = null != callback;
    }
    if (tmp2) {
      tmp2 = null != closePip;
    }
    if (tmp2) {
      const obj = { initialProgress: callback, activeMediaPlayerSource: progress, message: closePip };
      mediaSourceMessage.current = obj;
    }
    let tmp9 = null != mediaSourceMessage.current;
    if (tmp9) {
      tmp9 = null != callback;
    }
    if (tmp9) {
      mediaSourceMessage.current.finalProgress = callback;
    }
  }, items2);
  const effect1 = obj.useEffect(() => {
    let date = new Date();
    return () => {
      let current = mediaSourceMessage.current;
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
      const obj = { message_id: messageId, sender_user_id: null, type: null, is_voice_message: null, total_duration_secs: null, pip_playback_start_time_secs: null, pip_playback_end_time_secs: null, pip_opened_timestamp: null, pip_closed_timestamp: null };
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
      hasFlagResult = undefined;
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
  const tmp12 = mediaSourceMessage(noop.useState(false), 2);
  first = tmp12[0];
  closure_6 = tmp14;
  const items3 = [first, tmp12[1], isPlaying];
  const effect2 = obj.useEffect(() => {
    if (first) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        if (closure_0) {
          closure_1_6(false);
        }
      }, 3000);
    }
    return () => clearTimeout(closure_0);
  }, items3);
  const dismissPanel = obj.useContext(callback(closePip[30])).dismissPanel;
  const items4 = [dismissPanel, closePip];
  callback = obj.useCallback(() => {
    dismissPanel();
    closePip();
    MediaPlayerManagerDefault.pauseCurrentPlayer();
  }, items4);
  let isCompleted;
  if (progress != null) {
    isCompleted = progress.isCompleted;
  }
  const items5 = [isCompleted, callback];
  const effect3 = obj.useEffect(() => {
    let isCompleted;
    if (progress != null) {
      isCompleted = progress.isCompleted;
    }
    if (isCompleted) {
      const _setTimeout = setTimeout;
      progress = setTimeout(() => {
        callback();
      }, 2000);
    }
    return () => {
      clearTimeout(closure_0);
    };
  }, items5);
  if (!first) {
    let isCompleted1;
    if (progress != null) {
      isCompleted1 = progress.isCompleted;
    }
    first = true === isCompleted1;
  }
  const items6 = [isPlaying];
  const items7 = [isPlaying];
  const callback1 = obj.useCallback(() => {
    const obj = MediaPlayerManagerDefault;
    if (progress) {
      obj.pauseCurrentPlayer();
      closure_6(true);
    } else {
      obj.playCurrentPlayer();
    }
  }, items6);
  const items8 = [mediaSourceMessage, activeMediaPlayerSource, hasFlagResult, first];
  const memo = obj.useMemo(() => {
    if (progress) {
      let PlayIcon = PauseIcon.PauseIcon;
    } else {
      PlayIcon = PlayIcon2.PlayIcon;
    }
    return __initData(PlayIcon, { color: nativeDefault.colors.WHITE, size: "md" });
  }, items7);
  const items9 = [mediaSourceMessage, callback, first, hasFlagResult];
  const memo1 = obj.useMemo(() => __initData(MediaInfo, { message: mediaSourceMessage, activeMediaPlayerSource: callback, isVoiceMessage: hasFlagResult, isControlVisible: first }), items8);
  const memo2 = obj.useMemo(() => __initData(PiPControls, { message: mediaSourceMessage, handleClosePip: callback, visible: first, isVoiceMessage: hasFlagResult }), items9);
  const intl = tmp3(closePip[23]).intl;
  const string = intl.string;
  const t = tmp3(closePip[23]).t;
  if (hasFlagResult) {
    let stringResult = string(t.AlHqHT);
  } else {
    stringResult = string(t.RscU7I);
  }
  const intl2 = tmp3(closePip[23]).intl;
  const string2 = intl2.string;
  const t2 = tmp3(closePip[23]).t;
  if (hasFlagResult) {
    let string2Result = string2(t2["3XohGn"]);
  } else {
    string2Result = string2(t2.ZcgDJX);
  }
  let num = 0;
  if (null != progress) {
    num = progress.time / progress.duration * 100;
  }
  let num3 = 0;
  if (null != progress) {
    num3 = progress.duration - progress.time;
  }
  let obj5 = {
    style: tmp.container,
    activeOpacity: 1,
    onPress() {
      let tmp = !progress;
      if (!progress) {
        tmp = first;
      }
      if (!tmp) {
        closure_6(!first);
      }
    },
    accessible: false,
    children: null
  };
  const items10 = [memo2, memo1, ];
  const obj6 = { style: tmp.actionContainer, children: null };
  const obj7 = { style: tmp.progressBar, size: 48, width: 2, prefill: num, easing: first.out(first.linear), duration: null, fill: null, rotation: 0, lineCap: "round", ref: null, tintColor: null, backgroundColor: null };
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
  const obj4 = progress(closePip[13]);
  const tmp29 = dismissPanel;
  obj7.tintColor = progress(closePip[12]).useToken(callback(closePip[11]).colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT);
  const tmp3Result = progress(closePip[12]);
  obj7.backgroundColor = progress(closePip[12]).useToken(callback(closePip[11]).colors.BACKGROUND_MOD_MUTED);
  const items11 = [closure_15(progress(closePip[33]).AnimatedCircularProgress, obj7), ];
  const obj8 = { style: tmp.playPauseButton, onPress: callback1, accessibilityRole: "button", accessibilityLabel: null, children: null };
  if (isPlaying) {
    stringResult = string2Result;
  }
  obj8.accessibilityLabel = stringResult;
  obj8.children = memo;
  items11[1] = closure_15(closure_6, obj8);
  obj6.children = items11;
  items10[2] = closure_16(tmp29, obj6);
  obj5.children = items10;
  return closure_16(closure_6, obj5);
};