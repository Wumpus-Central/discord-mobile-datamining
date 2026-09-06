// === Module 9594: StreamTile ===

// Module 9594 (StreamTile)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import Text_Text from "Text/Text" /* 4556 */;
import Pressables from "Pressables" /* 5123 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6655 */;
import useParticipantTileTapGestureDefault from "useParticipantTileTapGesture" /* 9592 */;
import useVideoStreamErrorDefault from "useVideoStreamError" /* 9595 */;
import VideoRenderer from "VideoRenderer" /* 9604 */;
import StreamQualityLiveIndicatorDefault from "StreamQualityLiveIndicator" /* 9618 */;
import _modDef9621 from "module_9621" /* 9621 */;
import noop from "module_19" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4582 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
class StreamTextOverlay {
  constructor(arg0) {
    subtext = global.subtext;
    tmp = closure_13();
    obj = { style: tmp.screenMessageContainer, children: null };
    tmp2 = jsxs;
    tmp3 = View;
    tmp4 = jsx;
    tmp5 = closure_0;
    tmp6 = closure_2;
    obj = { style: tmp.screenMessageText, variant: "text-md/semibold", color: "text-overlay-light", children: global.title };
    items = [, ];
    items[0] = jsx(closure_0(closure_2[10]).Text, obj);
    tmp4Result = null;
    if (null != subtext) {
      obj1 = { style: null, children: null };
      obj1.style = tmp.screenMessageSubtext;
      obj1.children = subtext;
      tmp4Result = tmp4(tmp5(tmp6[11]).LegacyText, obj1);
    }
    items[1] = tmp4Result;
    obj.children = items;
    return tmp2(tmp3, obj);
  }
}
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const ApplicationStreamStates = fn(1074).ApplicationStreamStates;
const MediaEngineContextTypes = fn(4585).MediaEngineContextTypes;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
fn(4560);
let obj = { container: null, screenMessageContainer: null, screenMessageText: null, screenMessageSubtext: null, statusWrapper: null, liveTag: null };
obj = { flex: 1, alignItems: "center", justifyContent: "center", overflow: "hidden", width: "100%", backgroundColor: nativeDefault.colors.BLACK };
obj.container = obj;
const createStyles = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createStyles.flex = 1;
createStyles.padding = 8;
createStyles.alignItems = "center";
createStyles.justifyContent = "center";
let ColorUtils = fn(4409);
createStyles.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.7);
obj.screenMessageContainer = createStyles;
obj.screenMessageText = { lineHeight: 18 };
obj.screenMessageSubtext = { color: nativeDefault.unsafe_rawColors.PRIMARY_300, fontSize: 14, lineHeight: 18, textAlign: "center" };
let size = { position: "absolute", bottom: 8, right: 8, backgroundColor: null, borderRadius: null, width: 24, height: 24, justifyContent: "center", alignItems: "center" };
ColorUtils = fn(4409);
size.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_700, 0.5);
size.borderRadius = nativeDefault.radii.md;
obj.statusWrapper = size;
obj.liveTag = { position: "absolute", right: 8, top: 8 };
createStyles.createStyles(obj);
let closure_15 = noop.memo((participant) => {
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
      obj = { stream: stateFromStores, removeCloseButton: removeEmptyStateButton, removeSplashImage: removeEmptyStateImage, type: null, style: null };
      let tmp4Result = tmp4(9597);
      obj.type = tmp(9597).VideoEmptyTypes.STREAM_FAILED;
      obj.style = StyleSheet.absoluteFill;
      return closure_10(tmp4Result, obj);
    } else if (ApplicationStreamStates.ENDED === state) {
      obj = { stream: stateFromStores, removeCloseButton: removeEmptyStateButton, removeSplashImage: removeEmptyStateImage, type: null, style: null };
      tmp4Result = tmp4(9597);
      obj.type = tmp(9597).VideoEmptyTypes.STREAM_ENDED;
      obj.style = StyleSheet.absoluteFill;
      return closure_10(tmp4Result, obj);
    } else {
      if (ApplicationStreamStates.RECONNECTING === state) {
        const obj1 = { title: null };
        const intl = tmp(1114).intl;
        obj1.title = intl.string(tmp(1114).t["pdFFK+"]);
        let tmp9 = closure_10(StreamTextOverlay, obj1);
      } else {
        tmp9 = null;
        if (ApplicationStreamStates.PAUSED === state) {
          const obj2 = { title: null, subtext: null };
          const intl2 = tmp(1114).intl;
          obj2.title = intl2.string(tmp(1114).t["5q17w5"]);
          const intl3 = tmp(1114).intl;
          const obj3 = { username: tmp4(4712).getName(stateFromStores.guildId, stateFromStores.channelId, user) };
          obj2.subtext = intl3.formatToPlainString(tmp(1114).t.meVVlb, obj3);
          tmp9 = closure_10(StreamTextOverlay, obj2);
          const tmp4Result1 = tmp4(4712);
        }
      }
      if (null != tmp5) {
        const obj4 = { stream: stateFromStores, removeCloseButton: removeEmptyStateButton, removeSplashImage: removeEmptyStateImage, type: tmp(9597).VideoEmptyTypes.STREAM_FAILED, style: StyleSheet.absoluteFill, avError: tmp5 };
        return closure_10(tmp4(9597), obj4);
      } else {
        const id = AuthenticationStore.getId();
        const obj5 = {
          resizeMode,
          streamId,
          gestureEnabled,
          renderTag() {
                  return closure_2_10(StreamQualityLiveIndicatorDefault, { style: liveTag.liveTag, participant });
                },
          videoSpinnerContext: null,
          userId: null,
          paused: null
        };
        if (stateFromStores.ownerId === id) {
          let REMOTE_STREAM = tmp(9607).VideoSpinnerContext.SELF_STREAM;
        } else {
          REMOTE_STREAM = tmp(9607).VideoSpinnerContext.REMOTE_STREAM;
        }
        const obj6 = { children: null };
        obj5.videoSpinnerContext = REMOTE_STREAM;
        obj5.userId = user.id;
        obj5.paused = stateFromStores.state === ApplicationStreamStates.PAUSED;
        const items1 = [closure_10(tmp4(9604), obj5), tmp9];
        obj6.children = items1;
        return closure_11(closure_12, obj6);
      }
    }
  } else {
    return null;
  }
});
let closure_16 = noop.memo((arg0) => {
  ({ onFullScreen, style } = arg0);
  let obj = { accessibilityRole: "button", onPress: onFullScreen, style: null, hitSlop: { top: 4, left: 4, right: 4, bottom: 4 }, children: null };
  const items = [closure_13().statusWrapper, style];
  obj.style = items;
  obj = { source: _modDef9621, size: native.Icon.Sizes.SMALL, color: nativeDefault.unsafe_rawColors.WHITE };
  obj.children = closure_1_10(native.Icon, obj);
  return closure_1_10(Pressables.PressableOpacity, obj);
});
size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/StreamTile.tsx");

export default function StreamTile(participant) {
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
  let obj = { gesture: useParticipantTileTapGestureDefault({ onSingleTapStart: callback, onDoubleTapStart: callback1 }), children: null };
  obj = { style: null, children: null };
  const items2 = [tmp3.container, style];
  obj.style = items2;
  const items3 = [closure_1_10(closure_15, { streamId, participant, user, resizeMode: CONTAIN, gestureEnabled, removeEmptyStateButton, removeEmptyStateImage }), ];
  let tmp7Result = null != onFullScreen;
  if (tmp7Result) {
    obj = { onFullScreen, style: fullscreenIconStyle };
    tmp7Result = closure_1_10(closure_16, obj);
  }
  items3[1] = tmp7Result;
  obj.children = items3;
  obj.children = closure_1_11(React4, obj);
  return closure_1_10(LegacyBaseButton.GestureDetector, obj);
};
export { StreamTextOverlay };