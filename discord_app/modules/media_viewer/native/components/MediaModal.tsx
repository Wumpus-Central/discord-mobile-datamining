// === Module 8137: MediaModal ===

// Module 8137 (MediaModal)
import IMPACT_LIGHT from "IMPACT_LIGHT";
import get_ActivityIndicator from "handleOrientationChange";
import module_8138 from "module_8138";
import getState from "getState";
import ME from "ME";
import { jsx } from "useMediaShareActions";
import { createElement } from "IMPACT_LIGHT";

let c5;
let closure_12;
let closure_6;
let error;
let map1;
let metroImportAll;
let unpackModuleId;
const require = arg1;
({ Image: c5, Modal: closure_6, StyleSheet: error, View: metroImportAll } = get_ActivityIndicator);
({ Base64JPEGPrefix: unpackModuleId, Base64GIFPrefix: closure_12, AppStates: map1 } = ME);
let result = require("module_8138").fileFinishedImporting("modules/media_viewer/native/components/MediaModal.tsx");

export default function MediaModal(originLayout) {
  let onEndReached;
  let onEndReachedThreshold;
  let num = originLayout.initialIndex;
  if (num === undefined) {
    num = 0;
  }
  const initialIndexVideoStartTime = originLayout.initialIndexVideoStartTime;
  let flag = originLayout.isRNModal;
  if (flag === undefined) {
    flag = false;
  }
  let num2 = originLayout.swipeVelocityThreshold;
  if (num2 === undefined) {
    num2 = 1000;
  }
  const onClose = originLayout.onClose;
  const onCloseCallback = originLayout.onCloseCallback;
  let flag2 = originLayout.shareable;
  if (flag2 === undefined) {
    flag2 = true;
  }
  const disableDownload = originLayout.disableDownload;
  const disableMediaOverlayButton = originLayout.disableMediaOverlayButton;
  const disableMediaOverlayFooter = originLayout.disableMediaOverlayFooter;
  const contextName = originLayout.contextName;
  const contextIcon = originLayout.contextIcon;
  const onIndexChange = originLayout.onIndexChange;
  let mediaViewerSyncer;
  let videoStateStore;
  let stateFromStores;
  let jsx;
  let closure_15;
  let id;
  let closure_17;
  let callback1;
  let closure_19;
  let callback2;
  let mediaPlayerMutedStore;
  ({ onEndReached, onEndReachedThreshold } = originLayout);
  let MediaViewerSourcesStore = num(onCloseCallback[6]).MediaViewerSourcesStore;
  const field = MediaViewerSourcesStore.useField("sources");
  let obj = num(onCloseCallback[7]);
  mediaViewerSyncer = obj.useMediaViewerSyncer({ sources: field, initialIndex: num, onEndReached, onEndReachedThreshold });
  videoStateStore = num(onCloseCallback[8]).useVideoStateStore((paused) => paused.paused);
  const items = [onCloseCallback, onClose];
  let callback = flag2.useCallback(() => {
    if (onClose != null) {
      tmp();
    }
    if (onCloseCallback != null) {
      tmp3();
    }
  }, items);
  const effect = flag2.useEffect(() => () => {
    const MediaViewerSourcesStore = callback(table[6]).MediaViewerSourcesStore;
    MediaViewerSourcesStore.resetState();
  }, []);
  let obj2 = num(onCloseCallback[8]);
  const items1 = [onIndexChange];
  stateFromStores = num(onCloseCallback[9]).useStateFromStores(items1, () => onIndexChange.getState());
  jsx = flag2.useRef(stateFromStores);
  closure_15 = flag2.useRef(videoStateStore);
  id = flag2.useId();
  const items2 = [id];
  const effect1 = flag2.useEffect(() => {
    let state = contextIcon.getState();
    let freezeLock = state.requestFreezeLock({ lockEnabled: true, key: id });
    return () => {
      const state = outer1_9.getState();
      const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: closure_16 });
    };
  }, items2);
  const items3 = [stateFromStores, videoStateStore];
  const effect2 = flag2.useEffect(() => {
    let obj = num;
    let tmp = onCloseCallback;
    if (obj2.isIOS()) {
      if (ref.current !== stateFromStores) {
        if (stateFromStores.BACKGROUND === tmp3) {
          ref2.current = videoStateStore;
          obj = obj(tmp[8]);
          obj.setPausedState(true);
        } else if (tmp11.ACTIVE === tmp3) {
          if (!tmp5) {
            obj(tmp[8]).setPausedState(false);
            const objResult = obj(tmp[8]);
          }
          tmp5 = ref2.current || tmp2.current !== tmp11.BACKGROUND;
        }
        tmp = ref2;
        ref2.current = videoStateStore;
        tmp2.current = tmp3;
      }
    }
  }, items3);
  closure_17 = flag2.useRef({});
  callback1 = flag2.useCallback((arg0, portal) => {
    const videoSourceType = num(onCloseCallback[11]).getVideoSourceType(portal);
    const combined = "" + portal + "_" + arg0;
    if (null != ref3.current[combined]) {
      return tmp6;
    } else {
      if (tmp(tmp2[11]).VideoSourceType.PORTAL === videoSourceType) {
        let tmpResult = tmp(tmp2[12]);
        let portalControls = tmpResult.createPortalControls(portal.portal);
      } else if (tmp(tmp2[11]).VideoSourceType.TIKTOK_IFRAME === videoSourceType) {
        tmpResult = tmp(tmp2[13]);
        portalControls = tmpResult.createTiktokVideoControls();
      } else if (tmp(tmp2[11]).VideoSourceType.WEB_FILE_IFRAME === videoSourceType) {
        portalControls = tmp(tmp2[14]).createWebFileVideoControls();
        const tmpResult1 = tmp(tmp2[14]);
      } else {
        portalControls = tmp(tmp2[15]).createVideoControls(tmp(tmp2[8]).setPausedState);
        const tmpResult2 = tmp(tmp2[15]);
      }
      tmp5.current[combined] = portalControls;
      return portalControls;
    }
    const obj = num(onCloseCallback[11]);
  }, []);
  closure_19 = flag2.useRef({});
  const items4 = [callback1, num, initialIndexVideoStartTime];
  callback2 = flag2.useCallback((arg0, arg1, arg2) => {
    let closure_0 = arg2;
    if (arg0 === closure_0) {
      if (null != closure_1) {
        if (null != ref4.current[arg0]) {
          if (tmp4.oldOnLoad === arg2) {
            return tmp4.callback;
          }
        }
        function callback() {
          if (null != closure_1) {
            closure_1.seek(tmp);
            if (closure_0 != null) {
              tmp4();
            }
          }
        }
        closure_1 = callback1(arg0, arg1);
        const obj = { callback: null, oldOnLoad: null };
        obj[0] = callback;
        obj[1] = arg2;
        ref4.current[arg0] = obj;
        return callback;
      }
    }
    return arg2;
  }, items4);
  const effect3 = flag2.useEffect(() => {
    const result = onClose(onCloseCallback[16]).clearCurrentFocusAndDismissKeyboard();
    const obj = onClose(onCloseCallback[16]);
    num(onCloseCallback[17]).unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
    return () => callback(table[17]).lockOrientationForiOS();
  }, []);
  const items5 = [disableDownload, flag2, mediaViewerSyncer];
  const items6 = [mediaViewerSyncer, callback1, flag2, disableDownload, disableMediaOverlayButton, disableMediaOverlayFooter, contextName, contextIcon, onIndexChange];
  const callback3 = flag2.useCallback(() => {
    if (flag2) {
      let obj = num(onCloseCallback[11]);
      const selectedMediaSource = obj.getSelectedMediaSource(mediaViewerSyncer);
      if (null != selectedMediaSource) {
        const result = tmp2(tmp3[18]).triggerHapticFeedback(initialIndexVideoStartTime(tmp3[19]).IMPACT_LIGHT);
        const tmp2Result = tmp2(tmp3[18]);
        obj = { source: null, disableDownload: null, shareable: null };
        obj[0] = selectedMediaSource;
        obj[1] = disableDownload;
        obj[2] = tmp;
        initialIndexVideoStartTime(tmp3[20]).openLazy(tmp2(tmp3[22])(tmp3[21], tmp3.paths), "MediaShareActionSheet", obj);
        const obj3 = initialIndexVideoStartTime(tmp3[20]);
      }
    }
  }, items5);
  const callback4 = flag2.useCallback((onClose, overlayEnabled) => ref(initialIndexVideoStartTime(onCloseCallback[23]), { syncer: mediaViewerSyncer, getVideoControls: callback1, onClose, shareable: flag2, disableDownload, disableMediaOverlayButton, disableMediaOverlayFooter, contextName, contextIcon, overlayEnabled, onIndexChange }), items6);
  let obj3 = num(onCloseCallback[9]);
  mediaPlayerMutedStore = num(onCloseCallback[24]).useMediaPlayerMutedStore((isMuted) => isMuted.isMuted);
  const items7 = [callback1, callback2, mediaPlayerMutedStore, videoStateStore];
  const callback5 = flag2.useCallback((hasSpoiler) => {
    let index;
    let key;
    let pointerEvents;
    let source;
    let visible;
    ({ source, index, key, visible, pointerEvents } = hasSpoiler);
    const merged = Object.assign(hasSpoiler, Object.create(null));
    hasSpoiler = !visible;
    if (visible) {
      hasSpoiler = hasSpoiler.hasSpoiler;
    }
    if (!hasSpoiler) {
      hasSpoiler = videoStateStore;
    }
    let tmp2 = mediaPlayerMutedStore;
    if (!mediaPlayerMutedStore) {
      tmp2 = true === source.isGIFV;
    }
    let obj = num(onCloseCallback[11]);
    const videoSourceType = obj.getVideoSourceType(source);
    if (videoSourceType === num(onCloseCallback[11]).VideoSourceType.WEB_FILE_IFRAME) {
      if (null != source.videoURI) {
        obj = {};
        const merged1 = Object.assign(merged);
        obj.key = key;
        obj.visible = visible;
        obj.style = merged.style;
        obj = { uri: null, width: null, height: null };
        ({ videoURI: obj13[0], width: obj13[1], height: obj13[2] } = source);
        obj.source = obj;
        obj.controls = callback1(index, source);
        return ref2(initialIndexVideoStartTime(tmp4[14]), obj);
      }
    }
    if (null != source.portal) {
      if (!tmp3Result.isPortalExpired(source.portal)) {
        const obj1 = {};
        const merged2 = Object.assign(merged);
        obj1.key = key;
        obj1.pointerEvents = pointerEvents;
        obj1.portal = source.portal;
        obj1.paused = hasSpoiler;
        obj1.muted = tmp2;
        return ref2(initialIndexVideoStartTime(tmp4[12]), obj1);
      }
      tmp3Result = tmp3(tmp4[12]);
    }
    if (null != source.embedURI) {
      if (!source.isGIFV) {
        const embedProviderName = source.embedProviderName;
        if ("TikTok" === embedProviderName) {
          const obj2 = {};
          const merged3 = Object.assign(merged);
          obj2.key = key;
          obj2.visible = visible;
          obj2.style = merged.style;
          ({ embedURI: obj7[0], width: obj7[1], height: obj7[2] } = source);
          obj2.source = { uri: null, width: null, height: null };
          obj2.controls = callback1(index, source);
          return ref2(initialIndexVideoStartTime(tmp4[13]), obj2);
        } else if ("YouTube" === embedProviderName) {
          const obj4 = {};
          const merged4 = Object.assign(merged);
          obj4.key = key;
          obj4.visible = visible;
          obj4.style = merged.style;
          const obj5 = { uri: null, width: null, height: null };
          ({ embedURI: obj5[0], width: obj5[1], height: obj5[2] } = source);
          obj4.source = obj5;
          return ref2(initialIndexVideoStartTime(tmp4[25]), obj4);
        } else {
          return null;
        }
      }
    }
    if (null != source.videoURI) {
      const obj6 = { Component: null };
      obj6[0] = tmp3(tmp4[15]).VideoComponent;
      const merged5 = Object.assign(merged);
      obj6.key = key;
      obj6.pointerEvents = pointerEvents;
      obj6.paused = hasSpoiler;
      obj6.controls = callback1(index, source);
      obj6.muted = tmp2;
      obj6.index = index;
      obj6.onLoad = callback2(index, source, merged.onLoad);
      const obj7 = { uri: null, width: null, height: null, videoURI: null, messageId: null, channelId: null, mediaIndex: null, description: null, obscure: null, accessoryType: null, attachmentId: null };
      ({ videoURI: obj11[0], width: obj11[1], height: obj11[2], videoURI: obj11[3], messageId: obj11[4], channelId: obj11[5], mediaIndex: obj11[6], description: obj11[7], obscure: obj11[8], accessoryType: obj11[9], attachmentId: obj11[10] } = source);
      obj6.source = obj7;
      let tmp33 = ref2(initialIndexVideoStartTime(tmp4[26]), obj6);
      const tmp43 = initialIndexVideoStartTime(tmp4[26]);
    } else {
      const uri3 = source.uri;
      if (!uri3.startsWith("assets-library://")) {
        const uri = source.uri;
        if (!uri.startsWith(mediaViewerSyncer)) {
          const uri2 = source.uri;
          if (!uri2.startsWith(videoStateStore)) {
            const obj8 = { Component: null };
            obj8[0] = initialIndexVideoStartTime(tmp4[27]);
            const merged6 = Object.assign(merged);
            obj8.key = key;
            obj8.source = source;
            obj8.index = index;
            obj8.pointerEvents = pointerEvents;
            tmp33 = ref2(initialIndexVideoStartTime(tmp4[26]), obj8);
            const tmp29 = initialIndexVideoStartTime(tmp4[26]);
          }
        }
      }
      const obj9 = { Component: null };
      obj9[0] = disableDownload;
      const merged7 = Object.assign(merged);
      obj9.key = key;
      obj9.source = source;
      obj9.index = index;
      obj9.pointerEvents = pointerEvents;
      tmp33 = ref2(initialIndexVideoStartTime(tmp4[26]), obj9);
      const tmp36 = initialIndexVideoStartTime(tmp4[26]);
    }
    return tmp33;
  }, items7);
  const tmp18 = jsx(initialIndexVideoStartTime(onCloseCallback[28]), { originLayout: originLayout.originLayout, swipeVelocityThreshold: num2, onClose: callback, onLongPress: callback3, syncer: mediaViewerSyncer, renderMedia: callback5, renderOverlay: callback4 });
  let tmp17Result = tmp18;
  if (flag) {
    obj = { transparent: true, animationType: "none", visible: true, onRequestClose: null, statusBarTranslucent: true, children: null };
    obj[3] = callback;
    obj = { style: null, children: null };
    obj[0] = disableMediaOverlayFooter.absoluteFill;
    obj[1] = tmp18;
    obj[5] = tmp17(contextName, obj);
    tmp17Result = tmp17(disableMediaOverlayButton, obj);
  }
  return tmp17Result;
};