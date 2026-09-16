// discord_app/modules/video_calls/native/components/StreamTile.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import LegacyBaseButton from "../../../../../_runtime/06763_LegacyBaseButton.js";
import useParticipantTileTapGestureDefault from "../useParticipantTileTapGesture.tsx";
import useVideoStreamErrorDefault from "../../../errors/hooks/useVideoStreamError.tsx";
import VideoRenderer from "VideoRenderer.tsx";
import StreamQualityLiveIndicatorDefault from "../../../go_live/native/StreamQualityLiveIndicator.tsx";
import _modDef9761 from "../../../../../_runtime/metro/09761__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";

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
    obj1 = {
      style: tmp.screenMessageText,
      variant: "text-md/semibold",
      color: "text-overlay-light",
      children: global.title,
    };
    items = [,];
    items[0] = jsx(closure_0(closure_2[10]).Text, obj1);
    tmp4Result = null;
    if (null != subtext) {
      obj4 = { style: null, children: null };
      obj4.style = tmp.screenMessageSubtext;
      obj4.children = subtext;
      tmp4Result = tmp4(tmp5(tmp6[11]).LegacyText, obj4);
    }
    items[1] = tmp4Result;
    obj.children = items;
    return tmp2(tmp3, obj);
  }
}
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const ApplicationStreamStates = fn(1074).ApplicationStreamStates;
const MediaEngineContextTypes = fn(4663).MediaEngineContextTypes;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(4638);
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
let ColorUtils = fn(4487);
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
ColorUtils = fn(4487);
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
  const items = [ApplicationStreamingStore];
  const stateFromStores = participant(504).useStateFromStores(items, () =>
    ApplicationStreamingStore.getActiveStreamForStreamKey(participant.id),
  );
  const tmp5 = useVideoStreamErrorDefault(MediaEngineContextTypes.STREAM, participant.user.id);
  if (null != stateFromStores) {
    const state = stateFromStores.state;
    if (ApplicationStreamStates.FAILED === state) {
      const obj2 = {
        stream: stateFromStores,
        removeCloseButton: removeEmptyStateButton,
        removeSplashImage: removeEmptyStateImage,
        type: tmp(9740).VideoEmptyTypes.STREAM_FAILED,
        style: StyleSheet.absoluteFill,
      };
      return closure_10(tmp4(9740), obj2);
    } else if (ApplicationStreamStates.ENDED === state) {
      const obj3 = {
        stream: stateFromStores,
        removeCloseButton: removeEmptyStateButton,
        removeSplashImage: removeEmptyStateImage,
        type: tmp(9740).VideoEmptyTypes.STREAM_ENDED,
        style: StyleSheet.absoluteFill,
      };
      return closure_10(tmp4(9740), obj3);
    } else {
      if (ApplicationStreamStates.RECONNECTING === state) {
        const obj4 = { title: null };
        const intl = tmp(1115).intl;
        obj4.title = intl.string(tmp(1115).t["pdFFK+"]);
        let tmp9 = closure_10(StreamTextOverlay, obj4);
      } else {
        tmp9 = null;
        if (ApplicationStreamStates.PAUSED === state) {
          const obj5 = { title: null, subtext: null };
          const intl2 = tmp(1115).intl;
          obj5.title = intl2.string(tmp(1115).t["5q17w5"]);
          const intl3 = tmp(1115).intl;
          const obj6 = { username: tmp4(4790).getName(stateFromStores.guildId, stateFromStores.channelId, user) };
          obj5.subtext = intl3.formatToPlainString(tmp(1115).t.meVVlb, obj6);
          tmp9 = closure_10(StreamTextOverlay, obj5);
          const tmp4Result6 = tmp4(4790);
        }
      }
      if (null != tmp5) {
        const obj7 = {
          stream: stateFromStores,
          removeCloseButton: removeEmptyStateButton,
          removeSplashImage: removeEmptyStateImage,
          type: tmp(9740).VideoEmptyTypes.STREAM_FAILED,
          style: StyleSheet.absoluteFill,
          avError: tmp5,
        };
        return closure_10(tmp4(9740), obj7);
      } else {
        const id = AuthenticationStore.getId();
        const obj8 = {
          resizeMode,
          streamId,
          gestureEnabled,
          renderTag() {
            return closure_2_10(StreamQualityLiveIndicatorDefault, { style: liveTag.liveTag, participant });
          },
          videoSpinnerContext: null,
          userId: null,
          paused: null,
        };
        if (stateFromStores.ownerId === id) {
          let REMOTE_STREAM = tmp(9747).VideoSpinnerContext.SELF_STREAM;
        } else {
          REMOTE_STREAM = tmp(9747).VideoSpinnerContext.REMOTE_STREAM;
        }
        const obj9 = { children: null };
        obj8.videoSpinnerContext = REMOTE_STREAM;
        obj8.userId = user.id;
        obj8.paused = stateFromStores.state === ApplicationStreamStates.PAUSED;
        const items1 = [closure_10(tmp4(9744), obj8), tmp9];
        obj9.children = items1;
        return closure_11(closure_12, obj9);
      }
    }
  } else {
    return null;
  }
  const obj = participant(504);
});
let closure_16 = noop.memo((arg0) => {
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
  obj.children = closure_1_10(native.Icon, {
    source: _modDef9761,
    size: native.Icon.Sizes.SMALL,
    color: nativeDefault.unsafe_rawColors.WHITE,
  });
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
  const obj = {
    gesture: useParticipantTileTapGestureDefault({ onSingleTapStart: callback, onDoubleTapStart: callback1 }),
    children: null,
  };
  const obj2 = { style: null, children: null };
  const items2 = [tmp3.container, style];
  obj2.style = items2;
  const items3 = [
    closure_1_10(closure_15, {
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
    tmp7Result = closure_1_10(closure_16, obj3);
  }
  items3[1] = tmp7Result;
  obj2.children = items3;
  obj.children = closure_1_11(React4, obj2);
  return closure_1_10(LegacyBaseButton.GestureDetector, obj);
}
export { StreamTextOverlay };
