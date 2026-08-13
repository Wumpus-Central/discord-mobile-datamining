// discord_app/modules/media_panel/native/MediaPlaybackPip.tsx
import PlayIcon from "PlayIcon";
import trackInvite from "trackInvite";
import get_ActivityIndicator from "AnimatedChild";
import ensureGuildLoaded from "ensureGuildLoaded";
import reinjectEphemerals from "reinjectEphemerals";
import markAllUserIdListsStale from "markAllUserIdListsStale";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import { SquarePIPReferenceDimensions } from "VoicePanelPIPModes";
import jsxProd from "module_4083";
import createCacheKey from "createCacheKey";

let StyleSheet;
let c5;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_6;
let error;
let map1;
const require = arg1;
function MediaInfo(message) {
  let isControlVisible;
  let isVoiceMessage;
  message = message.message;
  const activeMediaPlayerSource = message.activeMediaPlayerSource;
  let first;
  let dependencyMap;
  let first1;
  let React;
  ({ isVoiceMessage, isControlVisible } = message);
  const tmp = createCacheKey();
  let obj = message(4065);
  const token = obj.useToken(first(712).colors.BACKGROUND_SURFACE_HIGH);
  let obj1 = message(589);
  const items = [ensureGuildLoaded, mergeGuildAvatar, markAllUserIdListsStale];
  const items1 = [message];
  const stateFromStores = obj1.useStateFromStores(items, () => {
    let channel_id;
    if (message != null) {
      channel_id = message.channel_id;
    }
    const channel = outer1_8.getChannel(channel_id);
    let channelName = null;
    if (null != channel) {
      const obj = message(4535);
      channelName = obj.computeChannelName(channel, outer1_11, outer1_10, true, true);
    }
    return channelName;
  }, items1);
  const tmp7 = first1(React.useState(0), 2);
  first = tmp7[0];
  dependencyMap = tmp7[1];
  const tmp9 = first1(React.useState(0), 2);
  first1 = tmp9[0];
  React = tmp9[1];
  const items2 = [first1, first];
  const memo = React.useMemo(() => first1 >= first, items2);
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
              str2 = tmp4(8367)(contentMessage.attachments[activeMediaPlayerSource.attachmentIndex]);
            }
          }
        }
        obj = { variant: "text-md/semibold", lineClamp: 1, ellipsizeMode: "clip", onLayout: null, children: null };
        obj[3] = function onLayout(nativeEvent) {
          return callback(nativeEvent.nativeEvent.layout.width);
        };
        obj[4] = str2;
        const tmp14 = callback2(tmp2(4338).Text, obj);
        obj = { accessibilityElementsHidden: null, style: null, onLayout: null, children: null };
        obj[0] = isControlVisible;
        obj[1] = tmp.infoContent;
        obj[2] = function onLayout(nativeEvent) {
          return dependencyMap(nativeEvent.nativeEvent.layout.width);
        };
        obj1 = { style: null, children: null };
        obj1[0] = tmp.infoContainer;
        let tmp16Result = tmp14;
        if (memo) {
          const obj2 = { style: null, children: null };
          obj2[0] = { flex: 1 };
          const obj3 = { spacing: 20, speed: 0.2, children: null };
          obj3[2] = tmp14;
          const items3 = [tmp13(tmp2(16380).Marquee, obj3), ];
          const obj4 = { start: null, end: null, locations: null, colors: null, style: null };
          obj4[0] = { x: 0, y: 0 };
          obj4[1] = { x: 1, y: 0 };
          obj4[2] = [0, 0.1, 0.2, 0.8, 0.9, 1];
          const items4 = [token, `${tmp5}CC`, `${tmp5}00`, `${tmp5}00`, `${tmp5}CC`, token];
          obj4[3] = items4;
          obj4[4] = tmp.infoContainerGradient;
          items3[1] = tmp13(tmp4(4766), obj4);
          obj2[1] = items3;
          tmp16Result = tmp16(tmp15, obj2);
        }
        const items5 = [tmp16Result, ];
        let tmp13Result = null != stateFromStores;
        if (tmp13Result) {
          const obj5 = { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: null };
          obj5[3] = stateFromStores;
          tmp13Result = tmp13(tmp2(4338).Text, obj5);
        }
        items5[1] = tmp13Result;
        obj1[1] = items5;
        obj[3] = closure_16(closure_7, obj1);
        return callback2(closure_7, obj);
      }
    }
  }
  return null;
}
function PiPControls(message) {
  message = message.message;
  const visible = message.visible;
  const isVoiceMessage = message.isVoiceMessage;
  const tmp = createCacheKey();
  const items = [message];
  const callback = React.useCallback(() => {
    if (null != message) {
      if (null != tmp.channel_id) {
        if (null != tmp.id) {
          const obj = visible(outer1_2[19]);
          obj.trackJump(tmp.channel_id, tmp.id, "Media PIP", {});
          const channel = outer1_8.getChannel(tmp.channel_id);
          let guildId;
          if (channel != null) {
            guildId = channel.getGuildId();
          }
          visible(outer1_2[20])(outer1_14.CHANNEL(guildId, tmp.channel_id, tmp.id), { navigationReplace: true, openChannel: true });
          const tmp6 = visible;
          const tmp6Result = visible(outer1_2[20]);
          const tmp7 = outer1_2;
        }
      }
    }
  }, items);
  let obj = message(4083);
  const fn = function c() {
    let obj = message(outer1_2[22]);
    let num = 0;
    if (visible) {
      num = 1;
    }
    obj = { opacity: obj.withTiming(num, { duration: 200 }) };
    return obj;
  };
  obj = { withTiming: message(4343).withTiming, visible };
  fn.__closure = obj;
  fn.__workletHash = 3641278982291;
  fn.__initData = closure_19;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const intl = message(1236).intl;
  const string = intl.string;
  const t = message(1236).t;
  if (isVoiceMessage) {
    let stringResult = string(t.KTonHP);
  } else {
    stringResult = string(t["13/7kX"]);
  }
  const intl2 = tmp3(1236).intl;
  const string2 = intl2.string;
  const t2 = tmp3(1236).t;
  if (isVoiceMessage) {
    let string2Result = string2(t2["6rhrVG"]);
  } else {
    string2Result = string2(t2.WAI6xu);
  }
  obj = { style: items1, children: null };
  items1 = [tmp.pipControls, animatedStyle];
  const items2 = [callback2(message(8712).BackgroundBlurFill, { blurAmount: 0.05 }), , ];
  const items3 = [, ];
  ({ pipButton: arr4[0], backButton: arr4[1] } = tmp);
  items2[1] = callback2(closure_6, { disabled: !visible, style: items3, onPress: callback, accessible: true, accessibilityRole: "button", accessibilityLabel: stringResult, children: callback2(message(5314).ArrowLargeLeftIcon, { size: "sm" }) });
  const obj1 = { disabled: !visible, style: items3, onPress: callback, accessible: true, accessibilityRole: "button", accessibilityLabel: stringResult, children: callback2(message(5314).ArrowLargeLeftIcon, { size: "sm" }) };
  const items4 = [, ];
  ({ pipButton: arr5[0], dismissButton: arr5[1] } = tmp);
  items2[2] = callback2(closure_6, { disabled: !visible, style: items4, onPress: message.handleClosePip, accessible: true, accessibilityRole: "button", accessibilityLabel: string2Result, children: callback2(message(4296).XLargeIcon, { size: "sm" }) });
  obj[1] = items2;
  return callback3(visible(4083).View, obj);
}
({ Easing: c5, StyleSheet, TouchableOpacity: closure_6, View: error } = get_ActivityIndicator);
({ AnalyticEvents: closure_12, MessageFlags: map1, Routes: closure_14 } = ME);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
createCacheKey = { container: createCacheKey, pipControls: null, pipButton: null, dismissButton: null, backButton: null, infoContainer: null, infoContainerGradient: null, infoContent: null, actionContainer: null, playPauseButton: null, progressBar: null };
createCacheKey = { justifyContent: "center", alignItems: "center", height: SquarePIPReferenceDimensions.height, width: SquarePIPReferenceDimensions.width };
let obj1 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj1.zIndex = 5;
createCacheKey[1] = obj1;
const merged1 = Object.assign(require("Themes").shadows.SHADOW_LOW_HOVER);
createCacheKey[2] = { position: "absolute", top: 8, padding: 8, borderRadius: require("Themes").radii.round, borderWidth: 1, borderColor: require("Themes").colors.CONTROL_SECONDARY_BORDER_DEFAULT, tintColor: require("Themes").colors.CONTROL_SECONDARY_TEXT_DEFAULT, backgroundColor: require("Themes").colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT };
createCacheKey[3] = { right: 8 };
createCacheKey[4] = { left: 8 };
createCacheKey[5] = { justifyContent: "center", alignItems: "center", marginBottom: 8, height: 34 };
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey[6] = {};
createCacheKey[7] = { justifyContent: "center", alignItems: "center", alignSelf: "stretch", marginHorizontal: 4 };
createCacheKey[8] = { justifyContent: "center", alignItems: "center", width: 48, height: 48, zIndex: 100 };
let obj2 = { position: "absolute", top: 8, padding: 8, borderRadius: require("Themes").radii.round, borderWidth: 1, borderColor: require("Themes").colors.CONTROL_SECONDARY_BORDER_DEFAULT, tintColor: require("Themes").colors.CONTROL_SECONDARY_TEXT_DEFAULT, backgroundColor: require("Themes").colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT };
let obj3 = {};
createCacheKey[9] = { justifyContent: "center", alignItems: "center", width: 32, height: 32, zIndex: 100, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.BACKGROUND_BRAND };
let obj5 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj5.justifyContent = "center";
obj5.alignItems = "center";
createCacheKey[10] = obj5;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_19 = { code: "function MediaPlaybackPipTsx1(){const{withTiming,visible}=this.__closure;return{opacity:withTiming(visible?1:0,{duration:200})};}" };
let obj4 = { justifyContent: "center", alignItems: "center", width: 32, height: 32, zIndex: 100, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.BACKGROUND_BRAND };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/media_panel/native/MediaPlaybackPip.tsx");

export default function MediaPlaybackPip() {
  let activeMediaPlayerSource;
  let closePip;
  let mediaSourceMessage;
  let progress;
  let tmp = createCacheKey();
  let obj = React;
  let obj1 = progress(mediaSourceMessage[28]);
  let obj2 = progress(mediaSourceMessage[29]);
  const mediaPlayerManagerStore = obj1.useMediaPlayerManagerStore(obj2.useShallow((isPlaying) => ({ isPlaying: isPlaying.isPlaying, progress: isPlaying.progress, activeMediaPlayerSource: isPlaying.activeMediaPlayerSource, mediaSourceMessage: isPlaying.mediaSourceMessage, closePip: isPlaying.closePip })));
  const isPlaying = mediaPlayerManagerStore.isPlaying;
  progress = isPlaying;
  ({ progress, activeMediaPlayerSource } = mediaPlayerManagerStore);
  let callback = activeMediaPlayerSource;
  ({ mediaSourceMessage, closePip } = mediaPlayerManagerStore);
  mediaSourceMessage = closePip;
  const ref = React.useRef(null);
  const items = [first];
  const items1 = [activeMediaPlayerSource];
  const stateFromStores = progress(mediaSourceMessage[13]).useStateFromStores(items, () => {
    let channelId;
    if (callback != null) {
      channelId = tmp.channelId;
    }
    if (callback != null) {
      const messageId = tmp.messageId;
    }
    let message = null;
    if (null != channelId) {
      message = null;
      if (null != messageId) {
        message = first.getMessage(channelId, messageId);
      }
    }
    return message;
  }, items1);
  if (null != stateFromStores) {
    mediaSourceMessage = stateFromStores;
  }
  callback = mediaSourceMessage;
  let hasFlagResult;
  if (mediaSourceMessage != null) {
    let contentMessage = mediaSourceMessage.getContentMessage();
    if (contentMessage != null) {
      hasFlagResult = contentMessage.hasFlag(constants.IS_VOICE_MESSAGE);
    }
  }
  React = tmp9;
  progress = activeMediaPlayerSource;
  callback = progress;
  callback = obj.useRef(null);
  const items2 = [progress, activeMediaPlayerSource, mediaSourceMessage];
  const effect = obj.useEffect(() => {
    let tmp2 = null == ref.current;
    if (tmp2) {
      tmp2 = null != progress;
    }
    if (tmp2) {
      tmp2 = null != callback;
    }
    if (tmp2) {
      tmp2 = null != mediaSourceMessage;
    }
    if (tmp2) {
      const obj = { initialProgress: null, activeMediaPlayerSource: null, message: null };
      obj[0] = callback;
      obj[1] = progress;
      obj[2] = mediaSourceMessage;
      tmp.current = obj;
    }
    let tmp9 = null != tmp.current;
    if (tmp9) {
      tmp9 = null != callback;
    }
    if (tmp9) {
      tmp.current.finalProgress = callback;
    }
  }, items2);
  const effect1 = obj.useEffect(() => {
    let date = new Date();
    return () => {
      let activeMediaPlayerSource;
      let finalProgress;
      let initialProgress;
      let message;
      let current = outer1_3.current;
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
      obj[1] = id;
      let content_type;
      if (tmp2 != null) {
        content_type = tmp2.content_type;
      }
      obj[2] = content_type;
      let hasFlagResult;
      if (message != null) {
        const contentMessage1 = message.getContentMessage();
        if (contentMessage1 != null) {
          hasFlagResult = contentMessage1.hasFlag(outer2_13.IS_VOICE_MESSAGE);
        }
      }
      obj[3] = hasFlagResult;
      let duration;
      if (finalProgress != null) {
        duration = finalProgress.duration;
      }
      let result;
      if (null != duration) {
        result = duration / 1000;
      }
      obj[4] = result;
      let time;
      if (initialProgress != null) {
        time = initialProgress.time;
      }
      let result1;
      if (null != time) {
        result1 = time / 1000;
      }
      obj[5] = result1;
      let time1;
      if (finalProgress != null) {
        time1 = finalProgress.time;
      }
      let result2;
      if (null != time1) {
        result2 = time1 / 1000;
      }
      obj[6] = result2;
      obj[7] = date.toISOString();
      date = new Date();
      obj[8] = date.toISOString();
      callback(mediaSourceMessage[27]).track(outer2_12.MEDIA_PIP_ENDED, obj);
    };
  }, []);
  const tmp12 = callback(obj.useState(false), 2);
  first = tmp12[0];
  let closure_6 = tmp14;
  const items3 = [first, tmp12[1], isPlaying];
  const effect2 = obj.useEffect(() => {
    if (first) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        if (closure_0) {
          callback(false);
        }
      }, 3000);
    }
    return () => clearTimeout(closure_0);
  }, items3);
  const dismissPanel = obj.useContext(callback(tmp4[30])).dismissPanel;
  const items4 = [dismissPanel, closePip];
  callback = obj.useCallback(() => {
    dismissPanel();
    mediaSourceMessage();
    callback(mediaSourceMessage[28]).pauseCurrentPlayer();
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
    const obj = callback(mediaSourceMessage[28]);
    if (progress) {
      obj.pauseCurrentPlayer();
      tmp14(true);
    } else {
      obj.playCurrentPlayer();
    }
  }, items6);
  const items8 = [mediaSourceMessage, activeMediaPlayerSource, hasFlagResult, first];
  const memo = obj.useMemo(() => {
    if (progress) {
      let PlayIcon = tmp2(tmp3[31]).PauseIcon;
      let tmp4 = tmp3;
    } else {
      PlayIcon = tmp2(tmp3[32]).PlayIcon;
      tmp4 = tmp3;
    }
    return outer1_15(PlayIcon, { color: callback(tmp4[11]).colors.WHITE, size: "md" });
  }, items7);
  const items9 = [mediaSourceMessage, callback, first, hasFlagResult];
  const memo1 = obj.useMemo(() => outer1_15(outer1_18, { message: PlayIcon, activeMediaPlayerSource: callback, isVoiceMessage: trackInvite, isControlVisible: first }), items8);
  const memo2 = obj.useMemo(() => outer1_15(outer1_20, { message: PlayIcon, handleClosePip: callback, visible: first, isVoiceMessage: trackInvite }), items9);
  const intl = tmp3(tmp4[23]).intl;
  const string = intl.string;
  const t = tmp3(tmp4[23]).t;
  if (hasFlagResult) {
    let stringResult = string(t.AlHqHT);
  } else {
    stringResult = string(t.RscU7I);
  }
  const intl2 = tmp3(tmp4[23]).intl;
  const string2 = intl2.string;
  const t2 = tmp3(tmp4[23]).t;
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
  obj = {
    style: tmp.container,
    activeOpacity: 1,
    onPress() {
      let tmp = !progress;
      if (!progress) {
        tmp = first;
      }
      if (!tmp) {
        tmp14(!first);
      }
    },
    accessible: false,
    children: null
  };
  const items10 = [memo2, memo1, ];
  obj = { style: tmp.actionContainer, children: null };
  obj1 = { style: tmp.progressBar, size: 48, width: 2, prefill: num, easing: null, duration: null, fill: null, rotation: 0, lineCap: "round", ref: null, tintColor: null, backgroundColor: null };
  obj1[4] = first.out(first.linear);
  let num4 = 0;
  if (isPlaying) {
    num4 = num3;
  }
  obj1[5] = num4;
  let num5 = 100;
  if (!isPlaying) {
    num5 = num;
  }
  obj1[6] = num5;
  obj1[9] = ref;
  let tmp3Result = tmp3(tmp4[12]);
  obj1[10] = tmp3Result.useToken(callback(mediaSourceMessage[11]).colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT);
  tmp3Result = tmp3(tmp4[12]);
  obj1[11] = tmp3Result.useToken(callback(mediaSourceMessage[11]).colors.BACKGROUND_MOD_MUTED);
  const items11 = [closure_15(progress(mediaSourceMessage[33]).AnimatedCircularProgress, obj1), ];
  obj2 = { style: tmp.playPauseButton, onPress: callback1, accessibilityRole: "button", accessibilityLabel: null, children: null };
  if (isPlaying) {
    stringResult = string2Result;
  }
  obj2[3] = stringResult;
  obj2[4] = memo;
  items11[1] = closure_15(closure_6, obj2);
  obj[1] = items11;
  items10[2] = closure_16(dismissPanel, obj);
  obj[4] = items10;
  return closure_16(closure_6, obj);
};