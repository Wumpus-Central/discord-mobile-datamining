// discord_app/modules/media_viewer/native/components/MediaModal.tsx
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import asyncRequireImpl from "../../../../../_runtime/01980_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import HapticUtils from "../../../haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../../haptics/HapticFeedbackTypes.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import MediaSourceUtil from "../MediaSourceUtil.tsx";
import NativePortalView from "../../../../components_native/common/NativePortalView.tsx";
import MediaModalTiktok from "MediaModalTiktok.tsx";
import MediaModalWebVideoFile from "MediaModalWebVideoFile.tsx";
import common_Video from "../../../../components_native/common/Video.tsx";
import MediaModalOverlayDefault from "overlay/MediaModalOverlay.tsx";
import MediaModalYoutubeDefault from "MediaModalYoutube.tsx";
import MediaModalLoaderDefault from "MediaModalLoader.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AppFreezeStore from "../../../panels/morphable/AppFreezeStore.tsx";
import AppStateStore from "../../../../stores/native/AppStateStore.tsx";

const NativePortalViewDefault = NativePortalView;
const MediaModalTiktokDefault = MediaModalTiktok;
const MediaModalWebVideoFileDefault = MediaModalWebVideoFile;

const useVideoControls = obj(7702);
require = fn;
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, Modal: metroRequire, StyleSheet: closure_7, View: closure_8 } = get_ActivityIndicator);
const Constants = fn(1074);
({ Base64JPEGPrefix: closure_11, Base64GIFPrefix: closure_12, AppStates: map1 } = Constants);
let jsx = fn(21).jsx;
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
  const mediaViewerSyncer = num(onCloseCallback[7]).useMediaViewerSyncer({
    sources: field,
    initialIndex: num,
    onEndReached,
    onEndReachedThreshold,
  });
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
  const effect = flag2.useEffect(
    () => () => {
      const MediaViewerSourcesStore = num(onCloseCallback[6]).MediaViewerSourcesStore;
      MediaViewerSourcesStore.resetState();
    },
    [],
  );
  let obj2 = num(onCloseCallback[8]);
  const items1 = [onIndexChange];
  const stateFromStores = num(onCloseCallback[9]).useStateFromStores(items1, () => onIndexChange.getState());
  jsx = flag2.useRef(stateFromStores);
  flag2.useRef(videoStateStore);
  const id = flag2.useId();
  const items2 = [id];
  const effect1 = flag2.useEffect(() => {
    let state = AppFreezeStore.getState();
    let freezeLock = state.requestFreezeLock({ lockEnabled: true, key: id });
    return () => {
      const state = contextIcon.getState();
      const freezeLock = state.requestFreezeLock({ lockEnabled: false, key });
    };
  }, items2);
  const items3 = [stateFromStores, videoStateStore];
  const effect2 = flag2.useEffect(() => {
    let obj = require;
    if (obj2.isIOS()) {
      if (ref.current !== stateFromStores) {
        if (constants.BACKGROUND === stateFromStores) {
          ref2.current = videoStateStore;
          obj = useVideoControls;
          obj.setPausedState(true);
        } else if (constants.ACTIVE === stateFromStores) {
          if (!tmp5) {
            useVideoControls.setPausedState(false);
            const objResult = useVideoControls;
          }
          tmp5 = ref2.current || ref.current !== constants.BACKGROUND;
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
        let portalControls = NativePortalView.createPortalControls(portal.portal);
        const tmpResult = NativePortalView;
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
  const items6 = [
    mediaViewerSyncer,
    callback1,
    flag2,
    disableDownload,
    disableMediaOverlayButton,
    disableMediaOverlayFooter,
    contextName,
    contextIcon,
    onIndexChange,
  ];
  const callback3 = flag2.useCallback(() => {
    if (flag2) {
      const selectedMediaSource = MediaSourceUtil.getSelectedMediaSource(mediaViewerSyncer);
      if (null != selectedMediaSource) {
        const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
        const tmp2Result = HapticUtils;
        const obj2 = { source: selectedMediaSource, disableDownload, shareable: tmp };
        ActionSheetActionCreatorsDefault.openLazy(
          asyncRequireImpl(7774, dependencyMap.paths),
          "MediaShareActionSheet",
          obj2,
        );
      }
    }
  }, items5);
  const callback4 = flag2.useCallback(
    (onClose, overlayEnabled) =>
      jsx(MediaModalOverlayDefault, {
        syncer: mediaViewerSyncer,
        getVideoControls: callback1,
        onClose,
        shareable: flag2,
        disableDownload,
        disableMediaOverlayButton,
        disableMediaOverlayFooter,
        contextName,
        contextIcon,
        overlayEnabled,
        onIndexChange,
      }),
    items6,
  );
  let obj3 = num(onCloseCallback[9]);
  const mediaPlayerMutedStore = num(onCloseCallback[24]).useMediaPlayerMutedStore((isMuted) => isMuted.isMuted);
  const items7 = [callback1, callback2, mediaPlayerMutedStore, videoStateStore];
  const callback5 = flag2.useCallback((hasSpoiler) => {
    ({ source, index, key, visible, pointerEvents } = hasSpoiler);
    const merged = Object.assign(
      hasSpoiler,
      Object.assign({ source: 0, index: 0, key: 0, visible: 0, hasSpoiler: 0, pointerEvents: 0 }),
    );
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
        ({ videoURI: obj13.uri, width: obj13.width, height: obj13.height } = source);
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
        return createElement(NativePortalViewDefault, {});
      }
      tmp3Result = NativePortalView;
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
      const obj8 = { Component: common_Video.VideoComponent };
      const merged5 = Object.assign(merged);
      obj8.key = key;
      obj8.pointerEvents = pointerEvents;
      obj8.paused = hasSpoiler;
      obj8.controls = callback1(index, source);
      obj8.muted = tmp2;
      obj8.index = index;
      obj8.onLoad = callback2(index, source, merged.onLoad);
      const size3 = {
        uri: null,
        width: null,
        height: null,
        videoURI: null,
        messageId: null,
        channelId: null,
        mediaIndex: null,
        description: null,
        obscure: null,
        accessoryType: null,
        attachmentId: null,
      };
      ({
        videoURI: obj11.uri,
        width: obj11.width,
        height: obj11.height,
        videoURI: obj11.videoURI,
        messageId: obj11.messageId,
        channelId: obj11.channelId,
        mediaIndex: obj11.mediaIndex,
        description: obj11.description,
        obscure: obj11.obscure,
        accessoryType: obj11.accessoryType,
        attachmentId: obj11.attachmentId,
      } = source);
      obj8.source = size3;
      let tmp33 = createElement(MediaModalLoaderDefault, { Component: common_Video.VideoComponent });
    } else {
      const uri3 = source.uri;
      if (!uri3.startsWith("assets-library://")) {
        const uri = source.uri;
        if (!uri.startsWith(closure_2_11)) {
          const uri2 = source.uri;
          if (!uri2.startsWith(closure_2_12)) {
            const obj9 = { Component: FastImageDefault };
            const merged6 = Object.assign(merged);
            obj9.key = key;
            obj9.source = source;
            obj9.index = index;
            obj9.pointerEvents = pointerEvents;
            tmp33 = createElement(MediaModalLoaderDefault, { Component: FastImageDefault });
          }
        }
      }
      const obj10 = { Component };
      const merged7 = Object.assign(merged);
      obj10.key = key;
      obj10.source = source;
      obj10.index = index;
      obj10.pointerEvents = pointerEvents;
      tmp33 = createElement(MediaModalLoaderDefault, { Component });
    }
    return tmp33;
  }, items7);
  const tmp18 = jsx(initialIndexVideoStartTime(onCloseCallback[28]), {
    originLayout: originLayout.originLayout,
    swipeVelocityThreshold: num2,
    onClose: callback,
    onLongPress: callback3,
    syncer: mediaViewerSyncer,
    renderMedia: callback5,
    renderOverlay: callback4,
  });
  let tmp17Result = tmp18;
  if (flag) {
    const obj5 = {
      transparent: true,
      animationType: "none",
      visible: true,
      onRequestClose: callback,
      statusBarTranslucent: true,
      children: null,
    };
    let obj6 = { style: disableMediaOverlayFooter.absoluteFill, children: tmp18 };
    obj5.children = tmp17(contextName, obj6);
    tmp17Result = tmp17(disableMediaOverlayButton, obj5);
  }
  return tmp17Result;
}
