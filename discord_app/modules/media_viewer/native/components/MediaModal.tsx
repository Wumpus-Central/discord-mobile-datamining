// === Module 7974: MediaModal ===

// Module 7974 (MediaModal)
import PlatformUtils from "PlatformUtils" /* 1369 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import HapticUtils from "HapticUtils" /* 4861 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4862 */;
import MediaSourceUtil from "MediaSourceUtil" /* 7950 */;
import MediaModalPortal from "MediaModalPortal" /* 7953 */;
import MediaModalTiktok from "MediaModalTiktok" /* 7981 */;
import MediaModalWebVideoFile from "MediaModalWebVideoFile" /* 7992 */;
import common_Video from "common/Video" /* 7993 */;
import MediaModalOverlayDefault from "MediaModalOverlay" /* 12774 */;
import MediaModalYoutubeDefault from "MediaModalYoutube" /* 12792 */;
import MediaModalVideoDefault from "MediaModalVideo" /* 12794 */;
import MediaModalImageDefault from "MediaModalImage" /* 12798 */;
import noop from "module_19" /* 19 */;
import AppFreezeStore from "AppFreezeStore" /* 7975 */;
import AppStateStore from "AppStateStore" /* 1986 */;

const MediaModalPortalDefault = MediaModalPortal;
const MediaModalTiktokDefault = MediaModalTiktok;
const MediaModalWebVideoFileDefault = MediaModalWebVideoFile;

const useVideoControls = obj(7947);
require = fn;
get_ActivityIndicator = fn(17);
({ Modal: hasOwnProperty, StyleSheet: metroRequire, View: closure_7 } = get_ActivityIndicator);
const AppStates = fn(1085).AppStates;
const jsx = fn(21).jsx;
const createElement = fn(19).createElement;
let size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaModal.tsx");

export default function MediaModal(originLayout) {
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
  ({ onEndReached, onEndReachedThreshold } = originLayout);
  let MediaViewerSourcesStore = num(onCloseCallback[6]).MediaViewerSourcesStore;
  const field = MediaViewerSourcesStore.useField("sources");
  const mediaViewerSyncer = num(onCloseCallback[7]).useMediaViewerSyncer({ sources: field, initialIndex: num, onEndReached, onEndReachedThreshold });
  let obj = num(onCloseCallback[7]);
  const videoStateStore = num(onCloseCallback[8]).useVideoStateStore((paused) => paused.paused);
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
    const MediaViewerSourcesStore = num(onCloseCallback[6]).MediaViewerSourcesStore;
    MediaViewerSourcesStore.resetState();
  }, []);
  let obj2 = num(onCloseCallback[8]);
  const items1 = [contextIcon];
  const stateFromStores = num(onCloseCallback[9]).useStateFromStores(items1, () => contextIcon.getState());
  flag2.useRef(stateFromStores);
  flag2.useRef(videoStateStore);
  const id = flag2.useId();
  const items2 = [id];
  const effect1 = flag2.useEffect(() => {
    state = AppFreezeStore.getState();
    let freezeLock = state.requestFreezeLock({ lockEnabled: true, key: id });
    return () => {
      state = contextName.getState();
      const freezeLock = state.requestFreezeLock({ lockEnabled: false, key });
    };
  }, items2);
  const items3 = [stateFromStores, videoStateStore];
  const effect2 = flag2.useEffect(() => {
    let obj = require;
    if (obj2.isIOS()) {
      if (ref.current !== stateFromStores) {
        if (AppStates.BACKGROUND === stateFromStores) {
          ref2.current = videoStateStore;
          obj = useVideoControls;
          obj.setPausedState(true);
        } else if (AppStates.ACTIVE === stateFromStores) {
          if (!tmp5) {
            useVideoControls.setPausedState(false);
            const objResult = useVideoControls;
          }
          tmp5 = ref2.current || ref.current !== AppStates.BACKGROUND;
        }
        ref2.current = videoStateStore;
        ref.current = stateFromStores;
      }
    }
    obj2 = PlatformUtils;
  }, items3);
  flag2.useRef({});
  const callback1 = flag2.useCallback((arg0, portal) => {
    const videoSourceType = MediaSourceUtil.getVideoSourceType(portal);
    const combined = "" + portal + "_" + arg0;
    if (null != ref3.current[combined]) {
      return tmp6;
    } else {
      if (MediaSourceUtil.VideoSourceType.PORTAL === videoSourceType) {
        let portalControls = MediaModalPortal.createPortalControls(portal.portal);
        const tmpResult = MediaModalPortal;
      } else if (MediaSourceUtil.VideoSourceType.TIKTOK_IFRAME === videoSourceType) {
        portalControls = MediaModalTiktok.createTiktokVideoControls();
        const tmpResult4 = MediaModalTiktok;
      } else if (MediaSourceUtil.VideoSourceType.WEB_FILE_IFRAME === videoSourceType) {
        portalControls = MediaModalWebVideoFile.createWebFileVideoControls();
        const tmpResult5 = MediaModalWebVideoFile;
      } else {
        portalControls = common_Video.createVideoControls(useVideoControls.setPausedState);
        const tmpResult6 = common_Video;
      }
      tmp5.current[combined] = portalControls;
      return portalControls;
    }
  }, []);
  flag2.useRef({});
  const items4 = [callback1, num, initialIndexVideoStartTime];
  const callback2 = flag2.useCallback((arg0, arg1, oldOnLoad) => {
    closure_0 = oldOnLoad;
    if (arg0 === closure_0) {
      if (null != closure_1) {
        if (null != ref4.current[arg0]) {
          if (tmp4.oldOnLoad === oldOnLoad) {
            return tmp4.callback;
          }
        }
        function callback() {
          if (null != initialIndexVideoStartTime) {
            closure_1.seek(tmp);
            if (closure_0 != null) {
              tmp4();
            }
          }
        }
        closure_1 = callback1(arg0, arg1);
        const obj = { callback, oldOnLoad };
        ref4.current[arg0] = obj;
        return callback;
      }
    }
    return oldOnLoad;
  }, items4);
  const effect3 = flag2.useEffect(() => {
    const result = onClose(onCloseCallback[16]).clearCurrentFocusAndDismissKeyboard();
    const obj = onClose(onCloseCallback[16]);
    num(onCloseCallback[17]).unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
    return () => num(onCloseCallback[17]).lockOrientationForiOS();
  }, []);
  const items5 = [disableDownload, flag2, mediaViewerSyncer];
  const items6 = [mediaViewerSyncer, callback1, flag2, disableDownload, disableMediaOverlayButton, disableMediaOverlayFooter, contextName, contextIcon, onIndexChange];
  const callback3 = flag2.useCallback(() => {
    if (flag2) {
      const selectedMediaSource = MediaSourceUtil.getSelectedMediaSource(mediaViewerSyncer);
      if (null != selectedMediaSource) {
        const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
        const tmp2Result = HapticUtils;
        const obj2 = { source: selectedMediaSource, disableDownload, shareable: tmp };
        ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(8020, dependencyMap.paths), "MediaShareActionSheet", obj2);
      }
    }
  }, items5);
  const callback4 = flag2.useCallback((onClose, overlayEnabled) => jsx(MediaModalOverlayDefault, { syncer: mediaViewerSyncer, getVideoControls: callback1, onClose, shareable: flag2, disableDownload, disableMediaOverlayButton, disableMediaOverlayFooter, contextName, contextIcon, overlayEnabled, onIndexChange }), items6);
  let obj3 = num(onCloseCallback[9]);
  const mediaPlayerMutedStore = num(onCloseCallback[24]).useMediaPlayerMutedStore((isMuted) => isMuted.isMuted);
  const items7 = [callback1, callback2, mediaPlayerMutedStore, videoStateStore];
  const callback5 = flag2.useCallback((hasSpoiler) => {
    ({ source, index, key, visible, pointerEvents } = hasSpoiler);
    const merged = Object.assign(hasSpoiler, Object.assign({ source: 0, index: 0, key: 0, visible: 0, hasSpoiler: 0, pointerEvents: 0 }));
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
    const videoSourceType = MediaSourceUtil.getVideoSourceType(source);
    if (videoSourceType === MediaSourceUtil.VideoSourceType.WEB_FILE_IFRAME) {
      if (null != source.videoURI) {
        const obj2 = {};
        const merged1 = Object.assign(merged);
        obj2.key = key;
        obj2.visible = visible;
        obj2.style = merged.style;
        const size = { uri: null, width: null, height: null };
        ({ videoURI: obj10.uri, width: obj10.width, height: obj10.height } = source);
        obj2.source = size;
        obj2.controls = callback1(index, source);
        return createElement(MediaModalWebVideoFileDefault, {});
      }
    }
    if (null != source.portal) {
      if (!tmp3Result.isPortalExpired(source.portal)) {
        const obj3 = {};
        const merged2 = Object.assign(merged);
        obj3.key = key;
        obj3.pointerEvents = pointerEvents;
        obj3.portal = source.portal;
        obj3.paused = hasSpoiler;
        obj3.muted = tmp2;
        return createElement(MediaModalPortalDefault, {});
      }
      tmp3Result = MediaModalPortal;
    }
    if (null != source.embedURI) {
      if (!source.isGIFV) {
        const embedProviderName = source.embedProviderName;
        if ("TikTok" === embedProviderName) {
          const obj4 = {};
          const merged3 = Object.assign(merged);
          obj4.key = key;
          obj4.visible = visible;
          obj4.style = merged.style;
          const size1 = { uri: null, width: null, height: null };
          ({ embedURI: obj7.uri, width: obj7.width, height: obj7.height } = source);
          obj4.source = size1;
          obj4.controls = callback1(index, source);
          return createElement(MediaModalTiktokDefault, {});
        } else if ("YouTube" === embedProviderName) {
          const obj6 = {};
          const merged4 = Object.assign(merged);
          obj6.key = key;
          obj6.visible = visible;
          obj6.style = merged.style;
          const size2 = { uri: null, width: null, height: null };
          ({ embedURI: obj5.uri, width: obj5.width, height: obj5.height } = source);
          obj6.source = size2;
          return createElement(MediaModalYoutubeDefault, {});
        } else {
          return null;
        }
      }
    }
    if (null != source.videoURI) {
      const obj8 = { controls: callback1(index, source), index, muted: tmp2, onError: merged.onError, onLoad: callback2(index, source, merged.onLoad), onLoadingVisible: merged.onLoadStart, paused: hasSpoiler, source, style: merged.style };
      const _HermesInternal = HermesInternal;
      let tmp31 = jsx(MediaModalVideoDefault, { controls: callback1(index, source), index, muted: tmp2, onError: merged.onError, onLoad: callback2(index, source, merged.onLoad), onLoadingVisible: merged.onLoadStart, paused: hasSpoiler, source, style: merged.style }, "" + key + ":" + source.videoURI);
    } else {
      const obj9 = { fade: null, fadeDuration: null, index: null, onError: null, onLoad: null, onLoadingVisible: null, pointerEvents: null, source: null, style: null };
      ({ fade: obj11.fade, fadeDuration: obj11.fadeDuration } = merged);
      obj9.index = index;
      ({ onError: obj11.onError, onLoad: obj11.onLoad, onLoadStart: obj11.onLoadingVisible } = merged);
      obj9.pointerEvents = pointerEvents;
      obj9.source = source;
      obj9.style = merged.style;
      const _HermesInternal2 = HermesInternal;
      tmp31 = jsx(MediaModalImageDefault, { fade: null, fadeDuration: null, index: null, onError: null, onLoad: null, onLoadingVisible: null, pointerEvents: null, source: null, style: null }, "" + key + ":" + source.uri);
    }
    return tmp31;
  }, items7);
  const tmp18 = mediaViewerSyncer(initialIndexVideoStartTime(onCloseCallback[28]), { originLayout: originLayout.originLayout, swipeVelocityThreshold: num2, onClose: callback, onLongPress: callback3, syncer: mediaViewerSyncer, renderMedia: callback5, renderOverlay: callback4 });
  let tmp17Result = tmp18;
  if (flag) {
    const obj5 = { transparent: true, animationType: "none", visible: true, onRequestClose: callback, statusBarTranslucent: true, children: null };
    let obj6 = { style: disableMediaOverlayButton.absoluteFill, children: tmp18 };
    obj5.children = tmp17(disableMediaOverlayFooter, obj6);
    tmp17Result = tmp17(disableDownload, obj5);
  }
  return tmp17Result;
};