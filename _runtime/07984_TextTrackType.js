// _runtime/07984_TextTrackType.js
import react2 from "00019_react.js";
import resolveAssetSourceDefault from "00081_resolveAssetSource.js";
import _modDef7985 from "metro/07985__.js";
import _modDef7987 from "metro/07987__.js";
import _modDef7988 from "metro/07988__.js";
import get_ColorPropType from "07989_get_ColorPropType.js";
import _modDef8007 from "metro/08007__.js";
import _asyncToGenerator from "metro/00005__asyncToGenerator.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import _possibleConstructorReturn from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";
import react_native from "00017_react-native.js";
import Fragment from "react/00021_Fragment.js";
import module_4707_mod from "metro/04707__.js";
import "module_4707";

let Platform;
let arrayOf;
let c10;
let c9;
let closure_12;
let items1;
let items2;
let items3;
let items4;
let items5;
let items6;
let items7;
let items8;
let map1;
let metroImportAll;
let metroImportDefault;
let module_4707;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let oneOf;
let oneOf2;
let oneOf3;
let oneOfType;
let oneOfType2;
let oneOfType3;
let oneOfType4;
let oneOfType5;
let requireNativeComponent;
let shape;
let shape2;
let shape3;
let shape4;
let shape5;
let unpackModuleId;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
const Component = react2.Component;
const StyleSheet = react_native.StyleSheet;
({
  NativeModules: metroImportDefault,
  View: metroImportAll,
  Image: c9,
  Platform,
  findNodeHandle: c10,
  UIManager: unpackModuleId,
  requireNativeComponent,
} = react_native);
({ jsx: closure_12, jsxs: map1 } = Fragment);
const base = StyleSheet.create({ base: { overflow: "hidden" } });
class Video {
  constructor(poster) {
    let constructResult;
    let getViewManagerConfig;
    let self = this;
    const tmp = _classCallCheck(this, Video);
    const items = [poster];
    let obj = _getPrototypeOf(Video);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = _possibleConstructorReturn(self, constructResult);
    tmp3Result.seek = function (seek) {
      if (isNaN(seek)) {
        const _Error = Error;
        const self = this;
        const self2 = this;
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
    let closure_0 = _asyncToGenerator(async (arg0) => {
      const _root = arg0;
      let c2 = 0;
      let c1 = 0;
      return (async (arg0) => {
        VideoManager = VideoManager.VideoManager;
        await VideoManager.save(_root, closure_2_10(_root._root));
        return value;
      })();
    });
    tmp3Result.save = function (arg0) {
      return closure_0(...arguments);
    };
    tmp3Result.restoreUserInterfaceForPictureInPictureStopCompleted = (
      restoreUserInterfaceForPIPStopCompletionHandler,
    ) => {
      const obj = { restoreUserInterfaceForPIPStopCompletionHandler };
      closure_0.setNativeProps(obj);
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
              const nextPromise = resolved.then((result) => {
                if (undefined !== result) {
                  const VideoManager2 = closure_2_7.VideoManager;
                  VideoManager2.setLicenseResult(result, closure_2_10(closure_1_0._root));
                } else if (closure_2_7.VideoManager.setLicenseError) {
                  const VideoManager = closure_2_7.VideoManager;
                  VideoManager.setLicenseError("Empty license result", closure_2_10(closure_1_0._root));
                }
              });
              nextPromise.catch((error) => {
                if (closure_2_7.VideoManager.setLicenseError) {
                  const VideoManager = tmp.VideoManager;
                  VideoManager.setLicenseError(error, closure_2_10(closure_1_0._root));
                }
              });
            }
          }
          if (closure_2_7.VideoManager.setLicenseError) {
            let VideoManager = closure_2_7.VideoManager;
            VideoManager.setLicenseError("No spc received", closure_2_10(closure_0._root));
          }
        }
      }
    };
    tmp3Result.getViewManagerConfig = (arg0) => {
      let viewManagerConfig;
      if (getViewManagerConfig.getViewManagerConfig) {
        viewManagerConfig = getViewManagerConfig.getViewManagerConfig(arg0);
      } else {
        viewManagerConfig = getViewManagerConfig[arg0];
      }
      return viewManagerConfig;
    };
    tmp3Result.state = { showPoster: poster.poster };
    return tmp3Result;
  }
}
_inherits(Video, Component);
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
        let toISOStringResult;
        const _Date = Date;
        if (toISOString instanceof Date) {
          toISOStringResult = toISOString.toISOString();
        } else {
          const _JSON = JSON;
          toISOStringResult = JSON.stringify(toISOString);
        }
        return toISOStringResult;
      } else if ("undefined" === typeof toISOString) {
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
      let ScaleNone;
      let items;
      let items1;
      let obj2;
      let obj8;
      let str5;
      let stringsOnlyObjectResult;
      const self = this;
      const resizeMode = this.props.resizeMode;
      const tmp3 = resolveAssetSourceDefault(this.props.source) || {};
      let str = tmp3.uri;
      const tmp4 = !tmp3.__packager_asset;
      if (!str) {
        str = "";
      }
      let str2 = str;
      const tmp5 = str && str.match(/^\//);
      if (tmp5) {
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
      if (resizeMode === _modDef7985.stretch) {
        ScaleNone = viewManagerConfig.Constants.ScaleToFill;
      } else if (resizeMode === _modDef7985.contain) {
        ScaleNone = viewManagerConfig.Constants.ScaleAspectFit;
      } else if (resizeMode === _modDef7985.cover) {
        ScaleNone = viewManagerConfig.Constants.ScaleAspectFill;
      } else {
        ScaleNone = viewManagerConfig.Constants.ScaleNone;
      }
      const tmp12 = !tmp9;
      const tmp13 = !tmp10;
      const merged = Object.assign({}, self.props);
      const obj = {
        style: items,
        resizeMode: ScaleNone,
        src: obj2,
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
        onGetLicense: merged.drm && merged.drm.getLicense && self._onGetLicense,
        onPictureInPictureStatusChanged: null,
        onRestoreUserInterfaceForPictureInPictureStop: null,
      };
      items = [base.base, merged.style];
      obj2 = {
        uri: str2,
        isNetwork: tmp12,
        isAsset: tmp13,
        shouldCache: tmp4,
        type: str5,
        mainVer: tmp3.mainVer || 0,
        patchVer: tmp3.patchVer || 0,
        requestHeaders: stringsOnlyObjectResult,
      };
      str5 = tmp3.type;
      const _Object = Object;
      if (!str5) {
        str5 = "";
      }
      if (tmp3.headers) {
        stringsOnlyObjectResult = self.stringsOnlyObject(tmp3.headers);
      } else {
        stringsOnlyObjectResult = {};
      }
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
      ({
        _onPictureInPictureStatusChanged: obj.onPictureInPictureStatusChanged,
        _onRestoreUserInterfaceForPictureInPictureStop: obj.onRestoreUserInterfaceForPictureInPictureStop,
      } = self);
      assign(merged, obj);
      const obj4 = { resizeMode: self.props.posterResizeMode || "contain" };
      const merged1 = Object.assign(StyleSheet.absoluteFillObject);
      const obj5 = { style: merged.style, children: items1 };
      const obj6 = { ref: self._assignRoot, style: StyleSheet.absoluteFill };
      const merged2 = Object.assign(merged);
      items1 = [closure_12(closure_16, obj6)];
      let showPoster = self.state.showPoster;
      if (showPoster) {
        const obj7 = { style: obj4, source: obj8 };
        obj8 = { uri: self.props.poster };
        showPoster = closure_12(React4, obj7);
      }
      items1[1] = showPoster;
      return map1(metroImportAll, obj5);
    },
  },
];
const importDefaultResultResult = _createClass(Video, items);
let obj = {
  filter: oneOf(items1),
  filterEnabled: module_4707.bool,
  src: module_4707.object,
  seek: oneOfType(items2),
  fullscreen: module_4707.bool,
  onVideoLoadStart: module_4707.func,
  onVideoLoad: module_4707.func,
  onVideoBuffer: module_4707.func,
  onVideoError: module_4707.func,
  onVideoProgress: module_4707.func,
  onVideoBandwidthUpdate: module_4707.func,
  onVideoSeek: module_4707.func,
  onVideoEnd: module_4707.func,
  onTimedMetadata: module_4707.func,
  onVideoAudioBecomingNoisy: module_4707.func,
  onVideoExternalPlaybackChange: module_4707.func,
  onVideoFullscreenPlayerWillPresent: module_4707.func,
  onVideoFullscreenPlayerDidPresent: module_4707.func,
  onVideoFullscreenPlayerWillDismiss: module_4707.func,
  onVideoFullscreenPlayerDidDismiss: module_4707.func,
  source: oneOfType2(items3),
  drm: shape(obj3),
  minLoadRetryCount: module_4707.number,
  maxBitRate: module_4707.number,
  resizeMode: module_4707.string,
  poster: module_4707.string,
  posterResizeMode: get_ColorPropType.ImagePropTypes.resizeMode,
  repeat: module_4707.bool,
  automaticallyWaitsToMinimizeStalling: module_4707.bool,
  allowsExternalPlayback: module_4707.bool,
  selectedAudioTrack: shape2(obj4),
  selectedVideoTrack: shape3(obj5),
  selectedTextTrack: shape4(obj6),
  textTracks: arrayOf(shape5(obj7)),
  paused: module_4707.bool,
  muted: module_4707.bool,
  volume: module_4707.number,
  bufferConfig: module_4707.shape(obj8),
  stereoPan: module_4707.number,
  rate: module_4707.number,
  pictureInPicture: module_4707.bool,
  playInBackground: module_4707.bool,
  preferredForwardBufferDuration: module_4707.number,
  playWhenInactive: module_4707.bool,
  ignoreSilentSwitch: module_4707.oneOf(["ignore", "obey"]),
  reportBandwidth: module_4707.bool,
  disableFocus: module_4707.bool,
  controls: module_4707.bool,
  audioOnly: module_4707.bool,
  currentTime: module_4707.number,
  fullscreenAutorotate: module_4707.bool,
  fullscreenOrientation: module_4707.oneOf(["all", "landscape", "portrait"]),
  progressUpdateInterval: module_4707.number,
  useTextureView: module_4707.bool,
  hideShutterView: module_4707.bool,
  onLoadStart: module_4707.func,
  onLoad: module_4707.func,
  onBuffer: module_4707.func,
  onError: module_4707.func,
  onProgress: module_4707.func,
  onBandwidthUpdate: module_4707.func,
  onSeek: module_4707.func,
  onEnd: module_4707.func,
  onFullscreenPlayerWillPresent: module_4707.func,
  onFullscreenPlayerDidPresent: module_4707.func,
  onFullscreenPlayerWillDismiss: module_4707.func,
  onFullscreenPlayerDidDismiss: module_4707.func,
  onReadyForDisplay: module_4707.func,
  onPlaybackStalled: module_4707.func,
  onPlaybackResume: module_4707.func,
  onPlaybackRateChange: module_4707.func,
  onAudioFocusChanged: module_4707.func,
  onAudioBecomingNoisy: module_4707.func,
  onPictureInPictureStatusChanged: module_4707.func,
  needsToRestoreUserInterfaceForPictureInPictureStop: module_4707.func,
  onExternalPlaybackChange: module_4707.func,
  scaleX: module_4707.number,
  scaleY: module_4707.number,
  translateX: module_4707.number,
  translateY: module_4707.number,
  rotation: module_4707.number,
};
module_4707 = module_4707_mod;
oneOf = module_4707.oneOf;
items1 = [
  _modDef7987.NONE,
  _modDef7987.INVERT,
  _modDef7987.MONOCHROME,
  _modDef7987.POSTERIZE,
  _modDef7987.FALSE,
  _modDef7987.MAXIMUMCOMPONENT,
  _modDef7987.MINIMUMCOMPONENT,
  _modDef7987.CHROME,
  _modDef7987.FADE,
  _modDef7987.INSTANT,
  _modDef7987.MONO,
  _modDef7987.NOIR,
  _modDef7987.PROCESS,
  _modDef7987.TONAL,
  _modDef7987.TRANSFER,
  _modDef7987.SEPIA,
];
module_4707 = module_4707_mod;
oneOfType = module_4707.oneOfType;
items2 = [module_4707.number, module_4707.object];
module_4707 = module_4707_mod;
oneOfType2 = module_4707.oneOfType;
module_4707 = module_4707_mod;
let obj2 = { uri: module_4707.string };
items3 = [module_4707.shape(obj2), module_4707.number];
module_4707 = module_4707_mod;
obj3 = {
  type: oneOf2(items4),
  licenseServer: module_4707.string,
  headers: module_4707.shape({}),
  base64Certificate: module_4707.bool,
  certificateUrl: module_4707.string,
  getLicense: module_4707.func,
};
shape = module_4707.shape;
module_4707 = module_4707_mod;
oneOf2 = module_4707.oneOf;
items4 = [_modDef7988.CLEARKEY, _modDef7988.FAIRPLAY, _modDef7988.WIDEVINE, _modDef7988.PLAYREADY];
module_4707 = module_4707_mod;
obj4 = { type: module_4707.string.isRequired, value: oneOfType3(items5) };
shape2 = module_4707.shape;
module_4707 = module_4707_mod;
oneOfType3 = module_4707.oneOfType;
items5 = [module_4707.string, module_4707.number];
module_4707 = module_4707_mod;
obj5 = { type: module_4707.string.isRequired, value: oneOfType4(items6) };
shape3 = module_4707.shape;
module_4707 = module_4707_mod;
oneOfType4 = module_4707.oneOfType;
items6 = [module_4707.string, module_4707.number];
module_4707 = module_4707_mod;
obj6 = { type: module_4707.string.isRequired, value: oneOfType5(items7) };
shape4 = module_4707.shape;
module_4707 = module_4707_mod;
oneOfType5 = module_4707.oneOfType;
items7 = [module_4707.string, module_4707.number];
module_4707 = module_4707_mod;
arrayOf = module_4707.arrayOf;
module_4707 = module_4707_mod;
obj7 = {
  title: module_4707.string,
  uri: module_4707.string.isRequired,
  type: oneOf3(items8),
  language: module_4707.string.isRequired,
};
shape5 = module_4707.shape;
module_4707 = module_4707_mod;
oneOf3 = module_4707.oneOf;
items8 = [_modDef8007.SRT, _modDef8007.TTML, _modDef8007.VTT];
module_4707 = module_4707_mod;
obj8 = {
  minBufferMs: module_4707.number,
  maxBufferMs: module_4707.number,
  bufferForPlaybackMs: module_4707.number,
  bufferForPlaybackAfterRebufferMs: module_4707.number,
};
module_4707 = module_4707_mod;
let merged = Object.assign(get_ColorPropType.ViewPropTypes);
importDefaultResultResult.propTypes = obj;
let closure_16 = requireNativeComponent("RNVVideo", importDefaultResultResult, {
  nativeOnly: { src: true, seek: true, fullscreen: true },
});

export default importDefaultResultResult;
export const TextTrackType = _modDef8007;
export const FilterType = _modDef7987;
export const DRMType = _modDef7988;
