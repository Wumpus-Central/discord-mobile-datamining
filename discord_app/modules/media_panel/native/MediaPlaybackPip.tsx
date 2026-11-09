// === Module 19752: MediaPlaybackPip ===

// Module 19752 (MediaPlaybackPip)
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import _modDef1652 from "module_1652" /* 1652 */;
import useChannelName from "useChannelName" /* 5776 */;
import safeTransitionToDefault from "safeTransitionTo" /* 7485 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7712 */;
import PlayIcon2 from "PlayIcon" /* 8922 */;
import PauseIcon from "PauseIcon" /* 8924 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 16713 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4989 */;
import MessageStore from "MessageStore" /* 6194 */;
import RelationshipStore from "RelationshipStore" /* 5082 */;
import UserStore from "UserStore" /* 1385 */;

require = fn;
function MediaInfo(message) {
  message = message.message;
  const activeMediaPlayerSource = message.activeMediaPlayerSource;
  let first;
  let first1;
  noop = undefined;
  ({ isVoiceMessage, isControlVisible } = message);
  const tmp = closure_17();
  const token = message(5724).useToken(first(575).colors.BACKGROUND_SURFACE_HIGH);
  let obj = message(5724);
  items = [ChannelStore, UserStore, RelationshipStore];
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
              str2 = tmp4(8914)(contentMessage.attachments[activeMediaPlayerSource.attachmentIndex]);
            }
          }
        }
        const obj3 = {
          variant: "body-md/semibold",
          lineClamp: 1,
          ellipsizeMode: "clip",
          onLayout(nativeEvent) {
                  return closure_4(nativeEvent.nativeEvent.layout.width);
                },
          children: str2
        };
        const tmp14 = closure_15(tmp2(5751).Text, obj3);
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
          const items3 = [closure_15(tmp2(19753).Marquee, obj7), ];
          const obj8 = { start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, locations: [0, 0.1, 0.2, 0.8, 0.9, 1], colors: null, style: null };
          const items4 = [token, `${tmp5}CC`, `${tmp5}00`, `${tmp5}00`, `${tmp5}CC`, token];
          obj8.colors = items4;
          obj8.style = tmp.infoContainerGradient;
          items3[1] = closure_15(tmp4(5715), obj8);
          obj6.children = items3;
          tmp16Result = closure_16(closure_7, obj6);
        }
        const items5 = [tmp16Result, ];
        let tmp13Result = null != stateFromStores;
        if (tmp13Result) {
          const obj9 = { variant: "body-xs/medium", color: "text-subtle", lineClamp: 1, children: stateFromStores };
          tmp13Result = closure_15(tmp2(5751).Text, obj9);
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
  _require = message;
  ({ visible, isVoiceMessage } = message);
  const tmp = closure_17();
  items = [message];
  const callback = noop.useCallback(() => {
    if (null != _undefined) {
      if (null != _undefined.channel_id) {
        if (null != _undefined.id) {
          const obj = MessageActionCreatorsDefault;
          obj.trackJump(_undefined.channel_id, _undefined.id, "Media PIP", {});
          const channel = ChannelStore.getChannel(_undefined.channel_id);
          let guildId;
          if (channel != null) {
            guildId = channel.getGuildId();
          }
          safeTransitionToDefault(gesture.CHANNEL(guildId, _undefined.channel_id, _undefined.id), { navigationReplace: true, openChannel: true });
          const tmp6Result = safeTransitionToDefault;
        }
      }
    }
  }, items);
  const items1 = [closure_19, require("timing/timing").withTiming, visible];
  _require = undefined;
  importDefault = undefined;
  [tmp5, tmp6, tmp7] = items1;
  class MediaPlaybackPipTsx1 {
    constructor() {
      num = 0;
      tmp = closure_0;
      if (closure_1) {
        num = 1;
      }
      obj = { opacity: tmp(num, { duration: 200 }) };
      return obj;
    }
  }
  const items2 = [tmp6, tmp7];
  MediaPlaybackPipTsx1.__closure = items2;
  MediaPlaybackPipTsx1.__workletHash = 16892004000938;
  MediaPlaybackPipTsx1.__initData = tmp5;
  const animatedStyle = require("module_1652").useAnimatedStyle(MediaPlaybackPipTsx1);
  const intl = tmp3(1113).intl;
  const string = intl.string;
  const t = tmp3(1113).t;
  if (isVoiceMessage) {
    let stringResult = string(t.KTonHP);
  } else {
    stringResult = string(t["13/7kX"]);
  }
  const intl2 = tmp3(1113).intl;
  const string2 = intl2.string;
  const t2 = tmp3(1113).t;
  if (isVoiceMessage) {
    let string2Result = string2(t2["6rhrVG"]);
  } else {
    string2Result = string2(t2.WAI6xu);
  }
  const obj2 = { style: null, children: null };
  const items3 = [tmp.pipControls, animatedStyle];
  obj2.style = items3;
  const items4 = [closure_15(require("native").BackgroundBlurFill, { blurAmount: 0.05 }), , ];
  const obj3 = { disabled: !visible, style: null, onPress: callback, accessible: true, accessibilityRole: "button", accessibilityLabel: stringResult, children: closure_15(require("ArrowLargeLeftIcon").ArrowLargeLeftIcon, { size: "sm" }) };
  const items5 = [, ];
  ({ pipButton: arr6[0], backButton: arr6[1] } = tmp);
  obj3.style = items5;
  items4[1] = closure_15(closure_6, obj3);
  const obj4 = { disabled: !visible, style: null, onPress: message.handleClosePip, accessible: true, accessibilityRole: "button", accessibilityLabel: string2Result, children: closure_15(require("XLargeIcon").XLargeIcon, { size: "sm" }) };
  const items6 = [, ];
  ({ pipButton: arr7[0], dismissButton: arr7[1] } = tmp);
  obj4.style = items6;
  items4[2] = closure_15(closure_6, obj4);
  obj2.children = items4;
  return closure_16(_modDef1652.View, obj2);
}
get_ActivityIndicator = fn(17);
({ Easing: hasOwnProperty, StyleSheet, TouchableOpacity: closure_6, View: metroImportDefault } = get_ActivityIndicator);
const Constants = fn(1072);
({ AnalyticEvents: closure_12, MessageFlags: map1, Routes: closure_14 } = Constants);
const SquarePIPReferenceDimensions = fn(19486).SquarePIPReferenceDimensions;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(5140);
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
let closure_19 = { code: "(function MediaPlaybackPipTsx1(){let[withTiming,visible]=this.__closure;return{opacity:withTiming(visible?1:0,{duration:200})};})" };
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
  items = [first];
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
      duration = undefined;
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
    return closure_2_15(PlayIcon, { color: nativeDefault.colors.WHITE, size: "md" });
  }, items7);
  const items9 = [mediaSourceMessage, callback, first, hasFlagResult];
  const memo1 = obj.useMemo(() => closure_2_15(MediaInfo, { message: mediaSourceMessage, activeMediaPlayerSource: callback, isVoiceMessage: hasFlagResult, isControlVisible: first }), items8);
  const memo2 = obj.useMemo(() => closure_2_15(PiPControls, { message: mediaSourceMessage, handleClosePip: callback, visible: first, isVoiceMessage: hasFlagResult }), items9);
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