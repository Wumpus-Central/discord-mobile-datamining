// _runtime/metro/08308__.js
import _possibleConstructorReturnDefault from "00093__possibleConstructorReturn.js";
import _modDef8311 from "08311__.js";
import _modDef8312 from "08312__.js";
import _modDef8331 from "08331__.js";
import asyncGeneratorStep from "../00005_asyncGeneratorStep.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import noop from "00019__.js";
import emptyFunction from "04389__.js";
import "module_4389";

const Video = importDefault;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
_possibleConstructorReturnDefault;
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
({
  NativeModules: closure_7,
  View: closure_8,
  Image: closure_9,
  Platform,
  findNodeHandle: c10,
  UIManager: closure_11,
  requireNativeComponent,
} = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const base = StyleSheet.create({ base: { overflow: "hidden" } });
class Video {
  constructor(arg0) {
    self = this;
    tmp = closure_3(this, Video);
    items = [];
    items[0] = global;
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(Video);
    tmp3 = closure_4;
    if (closure_2_14()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.seek = (seek) => {
      if (isNaN(seek)) {
        const _Error = Error;
        const error = new Error("Specified time is not a number");
        throw error;
      } else {
        const obj = { seek };
        closure_0.setNativeProps(obj);
      }
    };
    tmp3Result.presentFullscreenPlayer = () => {
      closure_0.setNativeProps({ fullscreen: true });
    };
    tmp3Result.dismissFullscreenPlayer = () => {
      closure_0.setNativeProps({ fullscreen: false });
    };
    closure_0 = undefined;
    closure_0 = c2(async (arg0) => {
      const _root = arg0;
      c2 = 0;
      c1 = 0;
      return (async (arg0) => {
        const VideoManager = closure_2_7.VideoManager;
        await VideoManager.save(_root, closure_2_10(_root._root));
        return value;
      })();
    });
    tmp3Result.save = function (arg0) {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    tmp3Result.restoreUserInterfaceForPictureInPictureStopCompleted = (
      restoreUserInterfaceForPIPStopCompletionHandler,
    ) => {
      closure_0.setNativeProps({ restoreUserInterfaceForPIPStopCompletionHandler });
    };
    tmp3Result._assignRoot = (_root) => {
      closure_0._root = _root;
    };
    tmp3Result._hidePoster = () => {
      if (closure_0.state.showPoster) {
        closure_0.setState({ showPoster: false });
      }
    };
    tmp3Result._onLoadStart = (nativeEvent) => {
      if (closure_0.props.onLoadStart) {
        const props = tmp.props;
        props.onLoadStart(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onLoad = (nativeEvent) => {
      if (closure_0.props.onLoad) {
        const props = tmp.props;
        props.onLoad(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onError = (nativeEvent) => {
      if (closure_0.props.onError) {
        const props = tmp.props;
        props.onError(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onProgress = (nativeEvent) => {
      if (closure_0.props.onProgress) {
        const props = tmp.props;
        props.onProgress(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onBandwidthUpdate = (nativeEvent) => {
      if (closure_0.props.onBandwidthUpdate) {
        const props = tmp.props;
        props.onBandwidthUpdate(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onSeek = (nativeEvent) => {
      if (closure_0.props.onSeek) {
        const props = tmp.props;
        props.onSeek(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onEnd = (nativeEvent) => {
      if (closure_0.props.onEnd) {
        const props = tmp.props;
        props.onEnd(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onTimedMetadata = (nativeEvent) => {
      if (closure_0.props.onTimedMetadata) {
        const props = tmp.props;
        props.onTimedMetadata(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onFullscreenPlayerWillPresent = (nativeEvent) => {
      if (closure_0.props.onFullscreenPlayerWillPresent) {
        const props = tmp.props;
        const result = props.onFullscreenPlayerWillPresent(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onFullscreenPlayerDidPresent = (nativeEvent) => {
      if (closure_0.props.onFullscreenPlayerDidPresent) {
        const props = tmp.props;
        const result = props.onFullscreenPlayerDidPresent(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onFullscreenPlayerWillDismiss = (nativeEvent) => {
      if (closure_0.props.onFullscreenPlayerWillDismiss) {
        const props = tmp.props;
        const result = props.onFullscreenPlayerWillDismiss(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onFullscreenPlayerDidDismiss = (nativeEvent) => {
      if (closure_0.props.onFullscreenPlayerDidDismiss) {
        const props = tmp.props;
        const result = props.onFullscreenPlayerDidDismiss(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onReadyForDisplay = (nativeEvent) => {
      if (!closure_0.props.audioOnly) {
        closure_0._hidePoster();
      }
      if (closure_0.props.onReadyForDisplay) {
        const props = closure_0.props;
        props.onReadyForDisplay(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onPlaybackStalled = (nativeEvent) => {
      if (closure_0.props.onPlaybackStalled) {
        const props = tmp.props;
        props.onPlaybackStalled(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onPlaybackResume = (nativeEvent) => {
      if (closure_0.props.onPlaybackResume) {
        const props = tmp.props;
        props.onPlaybackResume(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onPlaybackRateChange = (nativeEvent) => {
      if (closure_0.props.onPlaybackRateChange) {
        const props = tmp.props;
        props.onPlaybackRateChange(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onExternalPlaybackChange = (nativeEvent) => {
      if (closure_0.props.onExternalPlaybackChange) {
        const props = tmp.props;
        const result = props.onExternalPlaybackChange(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onAudioBecomingNoisy = () => {
      if (closure_0.props.onAudioBecomingNoisy) {
        const props = closure_0.props;
        props.onAudioBecomingNoisy();
      }
    };
    tmp3Result._onPictureInPictureStatusChanged = (nativeEvent) => {
      if (closure_0.props.onPictureInPictureStatusChanged) {
        const props = tmp.props;
        const result = props.onPictureInPictureStatusChanged(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onRestoreUserInterfaceForPictureInPictureStop = (arg0) => {
      if (closure_0.props.onRestoreUserInterfaceForPictureInPictureStop) {
        const props = closure_0.props;
        const result = props.onRestoreUserInterfaceForPictureInPictureStop();
      }
    };
    tmp3Result._onAudioFocusChanged = (nativeEvent) => {
      if (closure_0.props.onAudioFocusChanged) {
        const props = tmp.props;
        props.onAudioFocusChanged(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onBuffer = (nativeEvent) => {
      if (closure_0.props.onBuffer) {
        const props = tmp.props;
        props.onBuffer(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onGetLicense = (nativeEvent) => {
      if (closure_0.props.drm) {
        const _Function = Function;
        if (closure_0.props.drm.getLicense instanceof Function) {
          nativeEvent = nativeEvent.nativeEvent;
          if (nativeEvent) {
            if (nativeEvent.spcBase64) {
              const drm = closure_0.props.drm;
              const resolved = Promise.resolve(
                drm.getLicense(nativeEvent.spcBase64, nativeEvent.contentId, nativeEvent.licenseUrl),
              );
              resolved
                .then((result) => {
                  if (undefined !== result) {
                    const VideoManager2 = closure_2_7.VideoManager;
                    VideoManager2.setLicenseResult(result, closure_2_10(closure_1_0._root));
                  } else if (closure_2_7.VideoManager.setLicenseError) {
                    const VideoManager = closure_2_7.VideoManager;
                    VideoManager.setLicenseError("Empty license result", closure_2_10(closure_1_0._root));
                  }
                })
                .catch((error) => {
                  if (closure_2_7.VideoManager.setLicenseError) {
                    const VideoManager = tmp.VideoManager;
                    VideoManager.setLicenseError(error, closure_2_10(closure_1_0._root));
                  }
                });
              const nextPromise = resolved.then((result) => {
                if (undefined !== result) {
                  const VideoManager2 = closure_2_7.VideoManager;
                  VideoManager2.setLicenseResult(result, closure_2_10(closure_1_0._root));
                } else if (closure_2_7.VideoManager.setLicenseError) {
                  const VideoManager = closure_2_7.VideoManager;
                  VideoManager.setLicenseError("Empty license result", closure_2_10(closure_1_0._root));
                }
              });
            }
          }
          if (React5.VideoManager.setLicenseError) {
            let VideoManager = React5.VideoManager;
            VideoManager.setLicenseError("No spc received", closure_2_10(closure_0._root));
          }
        }
      }
    };
    tmp3Result.getViewManagerConfig = (arg0) => {
      if (getViewManagerConfig.getViewManagerConfig) {
        let viewManagerConfig = getViewManagerConfig.getViewManagerConfig(arg0);
      } else {
        viewManagerConfig = getViewManagerConfig[arg0];
      }
      return viewManagerConfig;
    };
    tmp3Result.state = { showPoster: global.poster };
    return tmp3Result;
  }
}
_inherits(Video, fn(19).Component);
const entry = {
  key: "setNativeProps",
  value: function setNativeProps(arg0) {
    const self = this;
    if (this._root) {
      if (self._root.setNativeProps) {
        const _root = self._root;
        _root.setNativeProps(arg0);
      }
    }
    console.warn("Video component not ready for setNativeProps call");
  },
};
let items = [
  entry,
  {
    key: "toTypeString",
    value: function toTypeString(toISOString) {
      if ("object" === typeof toISOString) {
        const _Date = Date;
        if (toISOString instanceof Date) {
          let toISOStringResult = toISOString.toISOString();
        } else {
          const _JSON = JSON;
          toISOStringResult = JSON.stringify(toISOString);
        }
        return toISOStringResult;
      } else if ("undefined" === tmp) {
        return "";
      } else {
        return toISOString.toString();
      }
    },
  },
  {
    key: "stringsOnlyObject",
    value: function stringsOnlyObject(headers) {
      const self = this;
      const obj = {};
      const keys = Object.keys(headers);
      const item = keys.forEach((item) => {
        obj[item] = self.toTypeString(headers[item]);
      });
      return obj;
    },
  },
  {
    key: "render",
    value: function render() {
      const self = this;
      const resizeMode = this.props.resizeMode;
      const tmp3 = Video(81)(this.props.source) || {};
      let str = tmp3.uri;
      if (!str) {
        str = "";
      }
      let match = str;
      if (str) {
        match = str.match(/^\//);
      }
      let str2 = str;
      if (match) {
        const _HermesInternal = HermesInternal;
        str2 = "file://" + str;
      }
      if (!str2) {
        const _console = console;
        console.warn("Trying to load empty source.");
      }
      let tmp9 = !str2;
      if (str2) {
        tmp9 = !str2.match(/^https?:/);
      }
      let tmp10 = !str2;
      if (str2) {
        tmp10 = !str2.match(/^(assets-library|ipod-library|file|content|ms-appx|ms-appdata):/);
      }
      const viewManagerConfig = self.getViewManagerConfig("RNVVideo");
      if (resizeMode === Video(8309).stretch) {
        let ScaleNone = viewManagerConfig.Constants.ScaleToFill;
      } else if (resizeMode === Video(8309).contain) {
        ScaleNone = viewManagerConfig.Constants.ScaleAspectFit;
      } else if (resizeMode === Video(8309).cover) {
        ScaleNone = viewManagerConfig.Constants.ScaleAspectFill;
      } else {
        ScaleNone = viewManagerConfig.Constants.ScaleNone;
      }
      const merged = Object.assign({}, self.props);
      let obj = {
        style: null,
        resizeMode: ScaleNone,
        src: null,
        onVideoLoadStart: null,
        onVideoLoad: null,
        onVideoError: null,
        onVideoProgress: null,
        onVideoSeek: null,
        onVideoEnd: null,
        onVideoBuffer: null,
        onVideoBandwidthUpdate: null,
        onTimedMetadata: null,
        onVideoAudioBecomingNoisy: null,
        onVideoExternalPlaybackChange: null,
        onVideoFullscreenPlayerWillPresent: null,
        onVideoFullscreenPlayerDidPresent: null,
        onVideoFullscreenPlayerWillDismiss: null,
        onVideoFullscreenPlayerDidDismiss: null,
        onReadyForDisplay: null,
        onPlaybackStalled: null,
        onPlaybackResume: null,
        onPlaybackRateChange: null,
        onAudioFocusChanged: null,
        onAudioBecomingNoisy: null,
        onGetLicense: null,
        onPictureInPictureStatusChanged: null,
        onRestoreUserInterfaceForPictureInPictureStop: null,
      };
      const items = [base.base, merged.style];
      obj.style = items;
      obj = {
        uri: str2,
        isNetwork: !tmp9,
        isAsset: !tmp10,
        shouldCache: !tmp3.__packager_asset,
        type: null,
        mainVer: null,
        patchVer: null,
        requestHeaders: null,
      };
      let str5 = tmp3.type;
      if (!str5) {
        str5 = "";
      }
      obj.type = str5;
      obj.mainVer = tmp3.mainVer || 0;
      obj.patchVer = tmp3.patchVer || 0;
      if (tmp3.headers) {
        let stringsOnlyObjectResult = self.stringsOnlyObject(tmp3.headers);
      } else {
        stringsOnlyObjectResult = {};
      }
      obj.requestHeaders = stringsOnlyObjectResult;
      obj.src = obj;
      ({
        _onLoadStart: obj.onVideoLoadStart,
        _onLoad: obj.onVideoLoad,
        _onError: obj.onVideoError,
        _onProgress: obj.onVideoProgress,
        _onSeek: obj.onVideoSeek,
        _onEnd: obj.onVideoEnd,
        _onBuffer: obj.onVideoBuffer,
        _onBandwidthUpdate: obj.onVideoBandwidthUpdate,
        _onTimedMetadata: obj.onTimedMetadata,
        _onAudioBecomingNoisy: obj.onVideoAudioBecomingNoisy,
        _onExternalPlaybackChange: obj.onVideoExternalPlaybackChange,
        _onFullscreenPlayerWillPresent: obj.onVideoFullscreenPlayerWillPresent,
        _onFullscreenPlayerDidPresent: obj.onVideoFullscreenPlayerDidPresent,
        _onFullscreenPlayerWillDismiss: obj.onVideoFullscreenPlayerWillDismiss,
        _onFullscreenPlayerDidDismiss: obj.onVideoFullscreenPlayerDidDismiss,
        _onReadyForDisplay: obj.onReadyForDisplay,
        _onPlaybackStalled: obj.onPlaybackStalled,
        _onPlaybackResume: obj.onPlaybackResume,
        _onPlaybackRateChange: obj.onPlaybackRateChange,
        _onAudioFocusChanged: obj.onAudioFocusChanged,
        _onAudioBecomingNoisy: obj.onAudioBecomingNoisy,
      } = self);
      obj.onGetLicense = merged.drm && merged.drm.getLicense && self._onGetLicense;
      ({
        _onPictureInPictureStatusChanged: obj.onPictureInPictureStatusChanged,
        _onRestoreUserInterfaceForPictureInPictureStop: obj.onRestoreUserInterfaceForPictureInPictureStop,
      } = self);
      const merged1 = Object.assign(merged, obj);
      obj = {};
      const merged2 = Object.assign(StyleSheet.absoluteFillObject);
      obj.resizeMode = self.props.posterResizeMode || "contain";
      const obj1 = { style: merged.style, children: null };
      const obj2 = { ref: self._assignRoot };
      const merged3 = Object.assign(merged);
      obj2.style = StyleSheet.absoluteFill;
      const items1 = [closure_1_12(closure_16, obj2)];
      let showPoster = self.state.showPoster;
      if (showPoster) {
        const obj3 = { style: obj, source: null };
        const obj4 = { uri: self.props.poster };
        obj3.source = obj4;
        showPoster = closure_1_12(React7, obj3);
      }
      items1[1] = showPoster;
      obj1.children = items1;
      return map1(React6, obj1);
    },
  },
];
const importDefaultResultResult = _createClass(Video, items);
let obj = {
  filter: null,
  filterEnabled: null,
  src: null,
  seek: null,
  fullscreen: null,
  onVideoLoadStart: null,
  onVideoLoad: null,
  onVideoBuffer: null,
  onVideoError: null,
  onVideoProgress: null,
  onVideoBandwidthUpdate: null,
  onVideoSeek: null,
  onVideoEnd: null,
  onTimedMetadata: null,
  onVideoAudioBecomingNoisy: null,
  onVideoExternalPlaybackChange: null,
  onVideoFullscreenPlayerWillPresent: null,
  onVideoFullscreenPlayerDidPresent: null,
  onVideoFullscreenPlayerWillDismiss: null,
  onVideoFullscreenPlayerDidDismiss: null,
  source: null,
  drm: null,
  minLoadRetryCount: null,
  maxBitRate: null,
  resizeMode: null,
  poster: null,
  posterResizeMode: null,
  repeat: null,
  automaticallyWaitsToMinimizeStalling: null,
  allowsExternalPlayback: null,
  selectedAudioTrack: null,
  selectedVideoTrack: null,
  selectedTextTrack: null,
  textTracks: null,
  paused: null,
  muted: null,
  volume: null,
  bufferConfig: null,
  stereoPan: null,
  rate: null,
  pictureInPicture: null,
  playInBackground: null,
  preferredForwardBufferDuration: null,
  playWhenInactive: null,
  ignoreSilentSwitch: null,
  reportBandwidth: null,
  disableFocus: null,
  controls: null,
  audioOnly: null,
  currentTime: null,
  fullscreenAutorotate: null,
  fullscreenOrientation: null,
  progressUpdateInterval: null,
  useTextureView: null,
  hideShutterView: null,
  onLoadStart: null,
  onLoad: null,
  onBuffer: null,
  onError: null,
  onProgress: null,
  onBandwidthUpdate: null,
  onSeek: null,
  onEnd: null,
  onFullscreenPlayerWillPresent: null,
  onFullscreenPlayerDidPresent: null,
  onFullscreenPlayerWillDismiss: null,
  onFullscreenPlayerDidDismiss: null,
  onReadyForDisplay: null,
  onPlaybackStalled: null,
  onPlaybackResume: null,
  onPlaybackRateChange: null,
  onAudioFocusChanged: null,
  onAudioBecomingNoisy: null,
  onPictureInPictureStatusChanged: null,
  needsToRestoreUserInterfaceForPictureInPictureStop: null,
  onExternalPlaybackChange: null,
  scaleX: null,
  scaleY: null,
  translateX: null,
  translateY: null,
  rotation: null,
};
let items1 = [
  _modDef8311.NONE,
  _modDef8311.INVERT,
  _modDef8311.MONOCHROME,
  _modDef8311.POSTERIZE,
  _modDef8311.FALSE,
  _modDef8311.MAXIMUMCOMPONENT,
  _modDef8311.MINIMUMCOMPONENT,
  _modDef8311.CHROME,
  _modDef8311.FADE,
  _modDef8311.INSTANT,
  _modDef8311.MONO,
  _modDef8311.NOIR,
  _modDef8311.PROCESS,
  _modDef8311.TONAL,
  _modDef8311.TRANSFER,
  _modDef8311.SEPIA,
];
obj.filter = emptyFunction.oneOf(items1);
obj.filterEnabled = emptyFunction.bool;
obj.src = emptyFunction.object;
const items2 = [emptyFunction.number, emptyFunction.object];
obj.seek = emptyFunction.oneOfType(items2);
obj.fullscreen = emptyFunction.bool;
obj.onVideoLoadStart = emptyFunction.func;
obj.onVideoLoad = emptyFunction.func;
obj.onVideoBuffer = emptyFunction.func;
obj.onVideoError = emptyFunction.func;
obj.onVideoProgress = emptyFunction.func;
obj.onVideoBandwidthUpdate = emptyFunction.func;
obj.onVideoSeek = emptyFunction.func;
obj.onVideoEnd = emptyFunction.func;
obj.onTimedMetadata = emptyFunction.func;
obj.onVideoAudioBecomingNoisy = emptyFunction.func;
obj.onVideoExternalPlaybackChange = emptyFunction.func;
obj.onVideoFullscreenPlayerWillPresent = emptyFunction.func;
obj.onVideoFullscreenPlayerDidPresent = emptyFunction.func;
obj.onVideoFullscreenPlayerWillDismiss = emptyFunction.func;
obj.onVideoFullscreenPlayerDidDismiss = emptyFunction.func;
obj = { uri: emptyFunction.string };
const items3 = [emptyFunction.shape(obj), emptyFunction.number];
obj.source = emptyFunction.oneOfType(items3);
let obj1 = {
  type: null,
  licenseServer: null,
  headers: null,
  base64Certificate: null,
  certificateUrl: null,
  getLicense: null,
};
const items4 = [_modDef8312.CLEARKEY, _modDef8312.FAIRPLAY, _modDef8312.WIDEVINE, _modDef8312.PLAYREADY];
obj1.type = emptyFunction.oneOf(items4);
obj1.licenseServer = emptyFunction.string;
obj1.headers = emptyFunction.shape({});
obj1.base64Certificate = emptyFunction.bool;
obj1.certificateUrl = emptyFunction.string;
obj1.getLicense = emptyFunction.func;
obj.drm = emptyFunction.shape(obj1);
obj.minLoadRetryCount = emptyFunction.number;
obj.maxBitRate = emptyFunction.number;
obj.resizeMode = emptyFunction.string;
obj.poster = emptyFunction.string;
obj.posterResizeMode = fn(8313).ImagePropTypes.resizeMode;
obj.repeat = emptyFunction.bool;
obj.automaticallyWaitsToMinimizeStalling = emptyFunction.bool;
obj.allowsExternalPlayback = emptyFunction.bool;
let obj2 = { type: emptyFunction.string.isRequired, value: null };
const items5 = [emptyFunction.string, emptyFunction.number];
obj2.value = emptyFunction.oneOfType(items5);
obj.selectedAudioTrack = emptyFunction.shape(obj2);
let obj3 = { type: emptyFunction.string.isRequired, value: null };
const items6 = [emptyFunction.string, emptyFunction.number];
obj3.value = emptyFunction.oneOfType(items6);
obj.selectedVideoTrack = emptyFunction.shape(obj3);
let obj4 = { type: emptyFunction.string.isRequired, value: null };
const items7 = [emptyFunction.string, emptyFunction.number];
obj4.value = emptyFunction.oneOfType(items7);
obj.selectedTextTrack = emptyFunction.shape(obj4);
const obj5 = { title: emptyFunction.string, uri: emptyFunction.string.isRequired, type: null, language: null };
const items8 = [_modDef8331.SRT, _modDef8331.TTML, _modDef8331.VTT];
obj5.type = emptyFunction.oneOf(items8);
obj5.language = emptyFunction.string.isRequired;
obj.textTracks = emptyFunction.arrayOf(emptyFunction.shape(obj5));
obj.paused = emptyFunction.bool;
obj.muted = emptyFunction.bool;
obj.volume = emptyFunction.number;
obj.bufferConfig = emptyFunction.shape({
  minBufferMs: emptyFunction.number,
  maxBufferMs: emptyFunction.number,
  bufferForPlaybackMs: emptyFunction.number,
  bufferForPlaybackAfterRebufferMs: emptyFunction.number,
});
obj.stereoPan = emptyFunction.number;
obj.rate = emptyFunction.number;
obj.pictureInPicture = emptyFunction.bool;
obj.playInBackground = emptyFunction.bool;
obj.preferredForwardBufferDuration = emptyFunction.number;
obj.playWhenInactive = emptyFunction.bool;
obj.ignoreSilentSwitch = emptyFunction.oneOf(["ignore", "obey"]);
obj.reportBandwidth = emptyFunction.bool;
obj.disableFocus = emptyFunction.bool;
obj.controls = emptyFunction.bool;
obj.audioOnly = emptyFunction.bool;
obj.currentTime = emptyFunction.number;
obj.fullscreenAutorotate = emptyFunction.bool;
obj.fullscreenOrientation = emptyFunction.oneOf(["all", "landscape", "portrait"]);
obj.progressUpdateInterval = emptyFunction.number;
obj.useTextureView = emptyFunction.bool;
obj.hideShutterView = emptyFunction.bool;
obj.onLoadStart = emptyFunction.func;
obj.onLoad = emptyFunction.func;
obj.onBuffer = emptyFunction.func;
obj.onError = emptyFunction.func;
obj.onProgress = emptyFunction.func;
obj.onBandwidthUpdate = emptyFunction.func;
obj.onSeek = emptyFunction.func;
obj.onEnd = emptyFunction.func;
obj.onFullscreenPlayerWillPresent = emptyFunction.func;
obj.onFullscreenPlayerDidPresent = emptyFunction.func;
obj.onFullscreenPlayerWillDismiss = emptyFunction.func;
obj.onFullscreenPlayerDidDismiss = emptyFunction.func;
obj.onReadyForDisplay = emptyFunction.func;
obj.onPlaybackStalled = emptyFunction.func;
obj.onPlaybackResume = emptyFunction.func;
obj.onPlaybackRateChange = emptyFunction.func;
obj.onAudioFocusChanged = emptyFunction.func;
obj.onAudioBecomingNoisy = emptyFunction.func;
obj.onPictureInPictureStatusChanged = emptyFunction.func;
obj.needsToRestoreUserInterfaceForPictureInPictureStop = emptyFunction.func;
obj.onExternalPlaybackChange = emptyFunction.func;
obj.scaleX = emptyFunction.number;
obj.scaleY = emptyFunction.number;
obj.translateX = emptyFunction.number;
obj.translateY = emptyFunction.number;
obj.rotation = emptyFunction.number;
let merged = Object.assign(fn(8313).ViewPropTypes);
importDefaultResultResult.propTypes = obj;
let closure_16 = requireNativeComponent("RNVVideo", importDefaultResultResult, {
  nativeOnly: { src: true, seek: true, fullscreen: true },
});

export default importDefaultResultResult;
export const TextTrackType = _modDef8331;
export const FilterType = _modDef8311;
export const DRMType = _modDef8312;
