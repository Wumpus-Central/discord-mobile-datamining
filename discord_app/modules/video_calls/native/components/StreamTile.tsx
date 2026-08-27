// === Module 9483: StreamTextOverlay ===

// Module 9483 (StreamTextOverlay)
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import Text from "Text" /* 4441 */;
import PressableBase from "PressableBase" /* 5020 */;
import useVideoStreamErrorDefault from "useVideoStreamError" /* 9484 */;
import registerAssetDefault from "registerAsset" /* 9511 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_6 from "reset" /* 4467 */;
import closure_7 from "fetchFingerprint" /* 1218 */;
import { ApplicationStreamStates } from "ME" /* 676 */;
import { MediaEngineContextTypes } from "DesktopSources" /* 4509 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;
import hexToRgba from "hexToRgba" /* 4293 */;

require = arg1;
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
    items[0] = jsx(require("Text").Text, obj);
    tmp4Result = null;
    if (null != subtext) {
      obj1 = { style: null, children: null };
      obj1[0] = tmp.screenMessageSubtext;
      obj1[1] = subtext;
      tmp4Result = tmp4(require("Button").LegacyText, obj1);
    }
    items[1] = tmp4Result;
    obj[1] = items;
    return tmp2(tmp3, obj);
  }
}
let c3 = importAllResult;
({ View: c4, StyleSheet } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = jsxProd);
let obj = { container: null, screenMessageContainer: null, screenMessageText: null, screenMessageSubtext: null, statusWrapper: null, liveTag: null };
obj = { flex: 1, alignItems: "center", justifyContent: "center", overflow: "hidden", width: "100%", backgroundColor: ThemesDefault.colors.BLACK };
obj[0] = obj;
createCacheKey = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.flex = 1;
createCacheKey.padding = 8;
createCacheKey.alignItems = "center";
createCacheKey.justifyContent = "center";
createCacheKey.backgroundColor = hexToRgba.hexWithOpacity(ThemesDefault.unsafe_rawColors.BLACK, 0.7);
obj[1] = createCacheKey;
obj[2] = { lineHeight: 18 };
obj[3] = { color: ThemesDefault.unsafe_rawColors.PRIMARY_300, fontSize: 14, lineHeight: 18, textAlign: "center" };
let obj3 = { position: "absolute", bottom: 8, right: 8, backgroundColor: null, borderRadius: null, width: 24, height: 24, justifyContent: "center", alignItems: "center" };
obj3[3] = hexToRgba.hexWithOpacity(ThemesDefault.unsafe_rawColors.PRIMARY_700, 0.5);
obj3[4] = ThemesDefault.radii.md;
obj[4] = obj3;
obj[5] = { position: "absolute", right: 8, top: 8 };
let closure_13 = createCacheKey.createStyles(obj);
let closure_15 = importAllResult.memo((participant) => {
  participant = participant.participant;
  ({ user, removeEmptyStateButton, removeEmptyStateImage } = participant);
  importDefault = undefined;
  ({ streamId, resizeMode, gestureEnabled } = participant);
  importDefault = callback2();
  let obj = participant(589);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_6.getActiveStreamForStreamKey(participant.id));
  const tmp5 = useVideoStreamErrorDefault(MediaEngineContextTypes.STREAM, participant.user.id);
  if (null != stateFromStores) {
    const state = stateFromStores.state;
    if (ApplicationStreamStates.FAILED === state) {
      obj = { stream: null, removeCloseButton: null, removeSplashImage: null, type: null, style: null };
      obj[0] = stateFromStores;
      obj[1] = removeEmptyStateButton;
      obj[2] = removeEmptyStateImage;
      let tmp4Result = tmp4(9487);
      obj[3] = tmp(9487).VideoEmptyTypes.STREAM_FAILED;
      obj[4] = StyleSheet.absoluteFill;
      return callback(tmp4Result, obj);
    } else if (tmp6.ENDED === state) {
      obj = { stream: null, removeCloseButton: null, removeSplashImage: null, type: null, style: null };
      obj[0] = stateFromStores;
      obj[1] = removeEmptyStateButton;
      obj[2] = removeEmptyStateImage;
      tmp4Result = tmp4(9487);
      obj[3] = tmp(9487).VideoEmptyTypes.STREAM_ENDED;
      obj[4] = StyleSheet.absoluteFill;
      return callback(tmp4Result, obj);
    } else {
      if (tmp6.RECONNECTING === state) {
        obj1 = { title: null };
        const intl = tmp(1236).intl;
        obj1[0] = intl.string(tmp(1236).t["pdFFK+"]);
        let tmp9 = callback(StreamTextOverlay, obj1);
      } else {
        tmp9 = null;
        if (tmp6.PAUSED === state) {
          const obj2 = { title: null, subtext: null };
          const intl2 = tmp(1236).intl;
          obj2[0] = intl2.string(tmp(1236).t["5q17w5"]);
          const intl3 = tmp(1236).intl;
          const obj3 = { username: null };
          obj3[0] = tmp4(4638).getName(stateFromStores.guildId, stateFromStores.channelId, user);
          obj2[1] = intl3.formatToPlainString(tmp(1236).t.meVVlb, obj3);
          tmp9 = callback(StreamTextOverlay, obj2);
          const tmp4Result1 = tmp4(4638);
        }
      }
      if (null != tmp5) {
        const obj4 = { stream: null, removeCloseButton: null, removeSplashImage: null, type: null, style: null, avError: null };
        obj4[0] = stateFromStores;
        obj4[1] = removeEmptyStateButton;
        obj4[2] = removeEmptyStateImage;
        obj4[3] = tmp(9487).VideoEmptyTypes.STREAM_FAILED;
        obj4[4] = StyleSheet.absoluteFill;
        obj4[5] = tmp5;
        return callback(tmp4(9487), obj4);
      } else {
        id = id.getId();
        const obj5 = { resizeMode: null, streamId: null, gestureEnabled: null, renderTag: null, videoSpinnerContext: null, userId: null, paused: null };
        obj5[0] = resizeMode;
        obj5[1] = streamId;
        obj5[2] = gestureEnabled;
        obj5[3] = function renderTag() {
          return closure_1_10(lib(closure_1_2[18]), { style: lib.liveTag, participant });
        };
        if (stateFromStores.ownerId === id) {
          let REMOTE_STREAM = tmp(9497).VideoSpinnerContext.SELF_STREAM;
        } else {
          REMOTE_STREAM = tmp(9497).VideoSpinnerContext.REMOTE_STREAM;
        }
        const obj6 = { children: null };
        obj5[4] = REMOTE_STREAM;
        obj5[5] = user.id;
        obj5[6] = stateFromStores.state === tmp6.PAUSED;
        const items1 = [callback(tmp4(9494), obj5), tmp9];
        obj6[0] = items1;
        return closure_11(closure_12, obj6);
      }
    }
  } else {
    return null;
  }
});
let closure_16 = importAllResult.memo((arg0) => {
  ({ onFullScreen, style } = arg0);
  let obj = { accessibilityRole: "button", onPress: onFullScreen, style: items, hitSlop: { top: 4, left: 4, right: 4, bottom: 4 }, children: null };
  items = [callback2().statusWrapper, style];
  obj = { source: registerAssetDefault, size: Button.Icon.Sizes.SMALL, color: ThemesDefault.unsafe_rawColors.WHITE };
  obj[4] = callback(Button.Icon, obj);
  return callback(PressableBase.PressableOpacity, obj);
});
let obj2 = { color: ThemesDefault.unsafe_rawColors.PRIMARY_300, fontSize: 14, lineHeight: 18, textAlign: "center" };
const result = require("set").fileFinishedImporting("modules/video_calls/native/components/StreamTile.tsx");

export default function StreamTile(participant) {
  participant = participant.participant;
  const onSingleTap = participant.onSingleTap;
  const onDoubleTap = participant.onDoubleTap;
  let CONTAIN = participant.resizeMode;
  if (CONTAIN === undefined) {
    CONTAIN = participant(onDoubleTap[17]).ResizeMode.CONTAIN;
  }
  const onFullScreen = participant.onFullScreen;
  ({ gestureEnabled, removeEmptyStateButton, removeEmptyStateImage, fullscreenIconStyle, style } = participant);
  const items = [onSingleTap, participant];
  const items1 = [onDoubleTap, participant];
  const callback = importAllResult.useCallback(() => {
    let tmpResult;
    if (onSingleTap != null) {
      tmpResult = tmp(participant);
    }
    return tmpResult;
  }, items);
  const callback1 = importAllResult.useCallback(() => {
    let tmpResult;
    if (onDoubleTap != null) {
      tmpResult = tmp(participant);
    }
    return tmpResult;
  }, items1);
  const tmp3 = callback2();
  ({ streamId, user } = participant);
  let obj = { gesture: onSingleTap(onDoubleTap[20])({ onSingleTapStart: callback, onDoubleTapStart: callback1 }), children: null };
  obj = { style: items2, children: null };
  items2 = [tmp3.container, style];
  const items3 = [callback(closure_15, { streamId, participant, user, resizeMode: CONTAIN, gestureEnabled, removeEmptyStateButton, removeEmptyStateImage }), ];
  let tmp7Result = null != onFullScreen;
  if (tmp7Result) {
    obj = { onFullScreen: null, style: null };
    obj[0] = onFullScreen;
    obj[1] = fullscreenIconStyle;
    tmp7Result = tmp7(closure_16, obj);
  }
  items3[1] = tmp7Result;
  obj[1] = items3;
  obj[1] = closure_11(closure_4, obj);
  return callback(participant(onDoubleTap[21]).GestureDetector, obj);
};
export { StreamTextOverlay };