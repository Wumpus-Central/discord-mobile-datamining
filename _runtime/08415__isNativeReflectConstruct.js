// === Module 8415: _isNativeReflectConstruct ===

// Module 8415 (_isNativeReflectConstruct)
import noopDefault from "noop" /* 19 */;
import _modDef8418 from "module_8418" /* 8418 */;
import _modDef8419 from "module_8419" /* 8419 */;
import _modDef8438 from "module_8438" /* 8438 */;
import closure_2 from "asyncGeneratorStep" /* 5 */;
import closure_3 from "_classCallCheck" /* 41 */;
import closure_4 from "_possibleConstructorReturn" /* 93 */;
import closure_5 from "_getPrototypeOf" /* 95 */;
import importDefaultResult from "_createClass" /* 42 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import importDefaultResult1 from "_inherits" /* 98 */;
import importDefaultResult3 from "emptyFunction" /* 4307 */;

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
  } catch (err) {
  }
}
noopDefault;
const StyleSheet = get_ActivityIndicator.StyleSheet;
({ NativeModules: error, View: closure_8, Image: c9, Platform, findNodeHandle: c10, UIManager: unpackModuleId, requireNativeComponent } = get_ActivityIndicator);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const styles = StyleSheet.create({ base: { overflow: "hidden" } });
class Video {
  constructor(arg0) {
    self = this;
    tmp = closure_3(this, closure_0);
    items = [];
    items[0] = global;
    tmp2 = closure_5;
    obj = closure_5(closure_0);
    tmp3 = closure_4;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.seek = (arg0) => {
      if (isNaN(arg0)) {
        const _Error = Error;
        error = new Error("Specified time is not a number");
        throw error;
      } else {
        const obj = { seek: null };
        obj[0] = arg0;
        store.setNativeProps(obj);
      }
    };
    tmp3Result.presentFullscreenPlayer = () => {
      store.setNativeProps({ fullscreen: true });
    };
    tmp3Result.dismissFullscreenPlayer = () => {
      store.setNativeProps({ fullscreen: false });
    };
    closure_0 = undefined;
    closure_0 = closure_2((arg0) => {
      closure_0 = arg0;
      c2 = 0;
      c1 = 0;
      return (function*(arg0) {
        const VideoManager = closure_2_7.VideoManager;
        yield VideoManager.save(_root, closure_2_10(_root._root));
        return arg1;
      })();
    });
    tmp3Result.save = function(arg0) {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    tmp3Result.restoreUserInterfaceForPictureInPictureStopCompleted = (restoreUserInterfaceForPIPStopCompletionHandler) => {
      store.setNativeProps({ restoreUserInterfaceForPIPStopCompletionHandler });
    };
    tmp3Result._assignRoot = (_root) => {
      closure_0._root = _root;
    };
    tmp3Result._hidePoster = () => {
      if (store.state.showPoster) {
        store.setState({ showPoster: false });
      }
    };
    tmp3Result._onLoadStart = (nativeEvent) => {
      if (store.props.onLoadStart) {
        const props = tmp.props;
        props.onLoadStart(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onLoad = (nativeEvent) => {
      if (store.props.onLoad) {
        const props = tmp.props;
        props.onLoad(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onError = (nativeEvent) => {
      if (store.props.onError) {
        const props = tmp.props;
        props.onError(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onProgress = (nativeEvent) => {
      if (store.props.onProgress) {
        const props = tmp.props;
        props.onProgress(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onBandwidthUpdate = (nativeEvent) => {
      if (store.props.onBandwidthUpdate) {
        const props = tmp.props;
        props.onBandwidthUpdate(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onSeek = (nativeEvent) => {
      if (store.props.onSeek) {
        const props = tmp.props;
        props.onSeek(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onEnd = (nativeEvent) => {
      if (store.props.onEnd) {
        const props = tmp.props;
        props.onEnd(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onTimedMetadata = (nativeEvent) => {
      if (store.props.onTimedMetadata) {
        const props = tmp.props;
        props.onTimedMetadata(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onFullscreenPlayerWillPresent = (nativeEvent) => {
      if (store.props.onFullscreenPlayerWillPresent) {
        const props = tmp.props;
        const result = props.onFullscreenPlayerWillPresent(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onFullscreenPlayerDidPresent = (nativeEvent) => {
      if (store.props.onFullscreenPlayerDidPresent) {
        const props = tmp.props;
        const result = props.onFullscreenPlayerDidPresent(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onFullscreenPlayerWillDismiss = (nativeEvent) => {
      if (store.props.onFullscreenPlayerWillDismiss) {
        const props = tmp.props;
        const result = props.onFullscreenPlayerWillDismiss(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onFullscreenPlayerDidDismiss = (nativeEvent) => {
      if (store.props.onFullscreenPlayerDidDismiss) {
        const props = tmp.props;
        const result = props.onFullscreenPlayerDidDismiss(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onReadyForDisplay = (nativeEvent) => {
      if (!store.props.audioOnly) {
        obj._hidePoster();
      }
      if (store.props.onReadyForDisplay) {
        const props = obj.props;
        props.onReadyForDisplay(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onPlaybackStalled = (nativeEvent) => {
      if (store.props.onPlaybackStalled) {
        const props = tmp.props;
        props.onPlaybackStalled(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onPlaybackResume = (nativeEvent) => {
      if (store.props.onPlaybackResume) {
        const props = tmp.props;
        props.onPlaybackResume(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onPlaybackRateChange = (nativeEvent) => {
      if (store.props.onPlaybackRateChange) {
        const props = tmp.props;
        props.onPlaybackRateChange(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onExternalPlaybackChange = (nativeEvent) => {
      if (store.props.onExternalPlaybackChange) {
        const props = tmp.props;
        const result = props.onExternalPlaybackChange(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onAudioBecomingNoisy = () => {
      if (store.props.onAudioBecomingNoisy) {
        const props = store.props;
        props.onAudioBecomingNoisy();
      }
    };
    tmp3Result._onPictureInPictureStatusChanged = (nativeEvent) => {
      if (store.props.onPictureInPictureStatusChanged) {
        const props = tmp.props;
        const result = props.onPictureInPictureStatusChanged(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onRestoreUserInterfaceForPictureInPictureStop = (arg0) => {
      if (store.props.onRestoreUserInterfaceForPictureInPictureStop) {
        const props = store.props;
        const result = props.onRestoreUserInterfaceForPictureInPictureStop();
      }
    };
    tmp3Result._onAudioFocusChanged = (nativeEvent) => {
      if (store.props.onAudioFocusChanged) {
        const props = tmp.props;
        props.onAudioFocusChanged(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onBuffer = (nativeEvent) => {
      if (store.props.onBuffer) {
        const props = tmp.props;
        props.onBuffer(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onGetLicense = (nativeEvent) => {
      if (store.props.drm) {
        const _Function = Function;
        if (tmp.props.drm.getLicense instanceof Function) {
          nativeEvent = nativeEvent.nativeEvent;
          if (nativeEvent) {
            if (nativeEvent.spcBase64) {
              const drm = tmp.props.drm;
              const resolved = Promise.resolve(drm.getLicense(nativeEvent.spcBase64, nativeEvent.contentId, nativeEvent.licenseUrl));
              resolved.then((arg0) => {
                if (undefined !== arg0) {
                  const VideoManager2 = closure_1_7.VideoManager;
                  VideoManager2.setLicenseResult(arg0, closure_1_10(closure_0._root));
                } else if (closure_1_7.VideoManager.setLicenseError) {
                  const VideoManager = closure_1_7.VideoManager;
                  VideoManager.setLicenseError("Empty license result", closure_1_10(closure_0._root));
                }
              }).catch((arg0) => {
                if (closure_1_7.VideoManager.setLicenseError) {
                  const VideoManager = tmp.VideoManager;
                  VideoManager.setLicenseError(arg0, closure_1_10(closure_0._root));
                }
              });
              const nextPromise = resolved.then((arg0) => {
                if (undefined !== arg0) {
                  const VideoManager2 = closure_1_7.VideoManager;
                  VideoManager2.setLicenseResult(arg0, closure_1_10(closure_0._root));
                } else if (closure_1_7.VideoManager.setLicenseError) {
                  const VideoManager = closure_1_7.VideoManager;
                  VideoManager.setLicenseError("Empty license result", closure_1_10(closure_0._root));
                }
              });
            }
          }
          if (closure_1_7.VideoManager.setLicenseError) {
            let VideoManager = closure_1_7.VideoManager;
            VideoManager.setLicenseError("No spc received", closure_1_10(tmp._root));
          }
        }
      }
    };
    tmp3Result.getViewManagerConfig = (arg0) => {
      if (getViewManagerConfig.getViewManagerConfig) {
        let viewManagerConfig = obj.getViewManagerConfig(arg0);
      } else {
        viewManagerConfig = obj[arg0];
      }
      return viewManagerConfig;
    };
    tmp3Result.state = { showPoster: global.poster };
    return tmp3Result;
  }
}
importDefaultResult1(Video, require("noop").Component);
let obj = {
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
  }
};
let items = [
  obj,
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
    }
  },
  {
    key: "stringsOnlyObject",
    value: function stringsOnlyObject(headers) {
      const self = this;
      closure_1 = headers;
      const obj = {};
      const keys = Object.keys(headers);
      const item = keys.forEach((arg0) => {
        obj[arg0] = self.toTypeString(headers[arg0]);
      });
      return obj;
    }
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
      if (resizeMode === Video(8416).stretch) {
        let ScaleNone = viewManagerConfig.Constants.ScaleToFill;
      } else if (resizeMode === tmp(8416).contain) {
        ScaleNone = viewManagerConfig.Constants.ScaleAspectFit;
      } else if (resizeMode === tmp(8416).cover) {
        ScaleNone = viewManagerConfig.Constants.ScaleAspectFill;
      } else {
        ScaleNone = viewManagerConfig.Constants.ScaleNone;
      }
      const merged = Object.assign({}, self.props);
      let obj = { style: items, resizeMode: ScaleNone, src: null, onVideoLoadStart: null, onVideoLoad: null, onVideoError: null, onVideoProgress: null, onVideoSeek: null, onVideoEnd: null, onVideoBuffer: null, onVideoBandwidthUpdate: null, onTimedMetadata: null, onVideoAudioBecomingNoisy: null, onVideoExternalPlaybackChange: null, onVideoFullscreenPlayerWillPresent: null, onVideoFullscreenPlayerDidPresent: null, onVideoFullscreenPlayerWillDismiss: null, onVideoFullscreenPlayerDidDismiss: null, onReadyForDisplay: null, onPlaybackStalled: null, onPlaybackResume: null, onPlaybackRateChange: null, onAudioFocusChanged: null, onAudioBecomingNoisy: null, onGetLicense: null, onPictureInPictureStatusChanged: null, onRestoreUserInterfaceForPictureInPictureStop: null };
      items = [base.base, merged.style];
      obj = { uri: str2, isNetwork: !tmp9, isAsset: !tmp10, shouldCache: !tmp3.__packager_asset, type: null, mainVer: null, patchVer: null, requestHeaders: null };
      let str5 = tmp3.type;
      if (!str5) {
        str5 = "";
      }
      obj[4] = str5;
      obj[5] = tmp3.mainVer || 0;
      obj[6] = tmp3.patchVer || 0;
      if (tmp3.headers) {
        let stringsOnlyObjectResult = self.stringsOnlyObject(tmp3.headers);
      } else {
        stringsOnlyObjectResult = {};
      }
      obj[7] = stringsOnlyObjectResult;
      obj[2] = obj;
      ({ _onLoadStart: obj[3], _onLoad: obj[4], _onError: obj[5], _onProgress: obj[6], _onSeek: obj[7], _onEnd: obj[8], _onBuffer: obj[9], _onBandwidthUpdate: obj[10], _onTimedMetadata: obj[11], _onAudioBecomingNoisy: obj[12], _onExternalPlaybackChange: obj[13], _onFullscreenPlayerWillPresent: obj[14], _onFullscreenPlayerDidPresent: obj[15], _onFullscreenPlayerWillDismiss: obj[16], _onFullscreenPlayerDidDismiss: obj[17], _onReadyForDisplay: obj[18], _onPlaybackStalled: obj[19], _onPlaybackResume: obj[20], _onPlaybackRateChange: obj[21], _onAudioFocusChanged: obj[22], _onAudioBecomingNoisy: obj[23] } = self);
      obj[24] = merged.drm && merged.drm.getLicense && self._onGetLicense;
      ({ _onPictureInPictureStatusChanged: obj[25], _onRestoreUserInterfaceForPictureInPictureStop: obj[26] } = self);
      const merged1 = Object.assign(merged, obj);
      obj = {};
      const merged2 = Object.assign(StyleSheet.absoluteFillObject);
      obj.resizeMode = self.props.posterResizeMode || "contain";
      obj1 = { style: merged.style, children: null };
      const obj2 = { ref: self._assignRoot };
      const merged3 = Object.assign(merged);
      obj2.style = StyleSheet.absoluteFill;
      const items1 = [callback4(closure_16, obj2), ];
      let showPoster = self.state.showPoster;
      if (showPoster) {
        const obj3 = { style: null, source: null };
        obj3[0] = obj;
        const obj4 = { uri: null };
        obj4[0] = self.props.poster;
        obj3[1] = obj4;
        showPoster = callback4(closure_9, obj3);
      }
      items1[1] = showPoster;
      obj1[1] = items1;
      return closure_13(closure_8, obj1);
    }
  }
];
const importDefaultResultResult = importDefaultResult(Video, items);
obj = { filter: null, filterEnabled: null, src: null, seek: null, fullscreen: null, onVideoLoadStart: null, onVideoLoad: null, onVideoBuffer: null, onVideoError: null, onVideoProgress: null, onVideoBandwidthUpdate: null, onVideoSeek: null, onVideoEnd: null, onTimedMetadata: null, onVideoAudioBecomingNoisy: null, onVideoExternalPlaybackChange: null, onVideoFullscreenPlayerWillPresent: null, onVideoFullscreenPlayerDidPresent: null, onVideoFullscreenPlayerWillDismiss: null, onVideoFullscreenPlayerDidDismiss: null, source: null, drm: null, minLoadRetryCount: null, maxBitRate: null, resizeMode: null, poster: null, posterResizeMode: null, repeat: null, automaticallyWaitsToMinimizeStalling: null, allowsExternalPlayback: null, selectedAudioTrack: null, selectedVideoTrack: null, selectedTextTrack: null, textTracks: null, paused: null, muted: null, volume: null, bufferConfig: null, stereoPan: null, rate: null, pictureInPicture: null, playInBackground: null, preferredForwardBufferDuration: null, playWhenInactive: null, ignoreSilentSwitch: null, reportBandwidth: null, disableFocus: null, controls: null, audioOnly: null, currentTime: null, fullscreenAutorotate: null, fullscreenOrientation: null, progressUpdateInterval: null, useTextureView: null, hideShutterView: null, onLoadStart: null, onLoad: null, onBuffer: null, onError: null, onProgress: null, onBandwidthUpdate: null, onSeek: null, onEnd: null, onFullscreenPlayerWillPresent: null, onFullscreenPlayerDidPresent: null, onFullscreenPlayerWillDismiss: null, onFullscreenPlayerDidDismiss: null, onReadyForDisplay: null, onPlaybackStalled: null, onPlaybackResume: null, onPlaybackRateChange: null, onAudioFocusChanged: null, onAudioBecomingNoisy: null, onPictureInPictureStatusChanged: null, needsToRestoreUserInterfaceForPictureInPictureStop: null, onExternalPlaybackChange: null, scaleX: null, scaleY: null, translateX: null, translateY: null, rotation: null };
let items1 = [_modDef8418.NONE, _modDef8418.INVERT, _modDef8418.MONOCHROME, _modDef8418.POSTERIZE, _modDef8418.FALSE, _modDef8418.MAXIMUMCOMPONENT, _modDef8418.MINIMUMCOMPONENT, _modDef8418.CHROME, _modDef8418.FADE, _modDef8418.INSTANT, _modDef8418.MONO, _modDef8418.NOIR, _modDef8418.PROCESS, _modDef8418.TONAL, _modDef8418.TRANSFER, _modDef8418.SEPIA];
obj[0] = importDefaultResult3.oneOf(items1);
obj[1] = importDefaultResult3.bool;
obj[2] = importDefaultResult3.object;
const items2 = [importDefaultResult3.number, importDefaultResult3.object];
obj[3] = importDefaultResult3.oneOfType(items2);
obj[4] = importDefaultResult3.bool;
obj[5] = importDefaultResult3.func;
obj[6] = importDefaultResult3.func;
obj[7] = importDefaultResult3.func;
obj[8] = importDefaultResult3.func;
obj[9] = importDefaultResult3.func;
obj[10] = importDefaultResult3.func;
obj[11] = importDefaultResult3.func;
obj[12] = importDefaultResult3.func;
obj[13] = importDefaultResult3.func;
obj[14] = importDefaultResult3.func;
obj[15] = importDefaultResult3.func;
obj[16] = importDefaultResult3.func;
obj[17] = importDefaultResult3.func;
obj[18] = importDefaultResult3.func;
obj[19] = importDefaultResult3.func;
const importDefaultResult4 = importDefaultResult3;
const importDefaultResult5 = importDefaultResult3;
obj = { uri: importDefaultResult3.string };
const items3 = [importDefaultResult3.shape(obj), importDefaultResult3.number];
obj[20] = importDefaultResult5.oneOfType(items3);
const importDefaultResult6 = importDefaultResult3;
let obj1 = { type: null, licenseServer: null, headers: null, base64Certificate: null, certificateUrl: null, getLicense: null };
const importDefaultResult7 = importDefaultResult3;
const items4 = [_modDef8419.CLEARKEY, _modDef8419.FAIRPLAY, _modDef8419.WIDEVINE, _modDef8419.PLAYREADY];
obj1[0] = importDefaultResult3.oneOf(items4);
obj1[1] = importDefaultResult3.string;
const importDefaultResult8 = importDefaultResult3;
obj1[2] = importDefaultResult3.shape({});
obj1[3] = importDefaultResult3.bool;
obj1[4] = importDefaultResult3.string;
obj1[5] = importDefaultResult3.func;
obj[21] = importDefaultResult7.shape(obj1);
obj[22] = importDefaultResult3.number;
obj[23] = importDefaultResult3.number;
obj[24] = importDefaultResult3.string;
obj[25] = importDefaultResult3.string;
obj[26] = require("get ColorPropType").ImagePropTypes.resizeMode;
obj[27] = importDefaultResult3.bool;
obj[28] = importDefaultResult3.bool;
obj[29] = importDefaultResult3.bool;
const importDefaultResult9 = importDefaultResult3;
let obj2 = { type: importDefaultResult3.string.isRequired, value: null };
const importDefaultResult10 = importDefaultResult3;
const items5 = [importDefaultResult3.string, importDefaultResult3.number];
obj2[1] = importDefaultResult3.oneOfType(items5);
obj[30] = importDefaultResult10.shape(obj2);
const importDefaultResult11 = importDefaultResult3;
let obj3 = { type: importDefaultResult3.string.isRequired, value: null };
const importDefaultResult12 = importDefaultResult3;
const items6 = [importDefaultResult3.string, importDefaultResult3.number];
obj3[1] = importDefaultResult3.oneOfType(items6);
obj[31] = importDefaultResult12.shape(obj3);
const importDefaultResult13 = importDefaultResult3;
let obj4 = { type: importDefaultResult3.string.isRequired, value: null };
const importDefaultResult14 = importDefaultResult3;
const items7 = [importDefaultResult3.string, importDefaultResult3.number];
obj4[1] = importDefaultResult3.oneOfType(items7);
obj[32] = importDefaultResult14.shape(obj4);
const importDefaultResult15 = importDefaultResult3;
const importDefaultResult16 = importDefaultResult3;
const obj5 = { title: importDefaultResult3.string, uri: importDefaultResult3.string.isRequired, type: null, language: null };
const importDefaultResult17 = importDefaultResult3;
const items8 = [_modDef8438.SRT, _modDef8438.TTML, _modDef8438.VTT];
obj5[2] = importDefaultResult3.oneOf(items8);
obj5[3] = importDefaultResult3.string.isRequired;
obj[33] = importDefaultResult16.arrayOf(importDefaultResult17.shape(obj5));
obj[34] = importDefaultResult3.bool;
obj[35] = importDefaultResult3.bool;
obj[36] = importDefaultResult3.number;
const importDefaultResult18 = importDefaultResult3;
const importDefaultResult19 = importDefaultResult3;
obj[37] = importDefaultResult19.shape({ minBufferMs: importDefaultResult3.number, maxBufferMs: importDefaultResult3.number, bufferForPlaybackMs: importDefaultResult3.number, bufferForPlaybackAfterRebufferMs: importDefaultResult3.number });
obj[38] = importDefaultResult3.number;
obj[39] = importDefaultResult3.number;
obj[40] = importDefaultResult3.bool;
obj[41] = importDefaultResult3.bool;
obj[42] = importDefaultResult3.number;
obj[43] = importDefaultResult3.bool;
const obj6 = { minBufferMs: importDefaultResult3.number, maxBufferMs: importDefaultResult3.number, bufferForPlaybackMs: importDefaultResult3.number, bufferForPlaybackAfterRebufferMs: importDefaultResult3.number };
obj[44] = importDefaultResult3.oneOf(["ignore", "obey"]);
obj[45] = importDefaultResult3.bool;
obj[46] = importDefaultResult3.bool;
obj[47] = importDefaultResult3.bool;
obj[48] = importDefaultResult3.bool;
obj[49] = importDefaultResult3.number;
obj[50] = importDefaultResult3.bool;
const importDefaultResult20 = importDefaultResult3;
obj[51] = importDefaultResult3.oneOf(["all", "landscape", "portrait"]);
obj[52] = importDefaultResult3.number;
obj[53] = importDefaultResult3.bool;
obj[54] = importDefaultResult3.bool;
obj[55] = importDefaultResult3.func;
obj[56] = importDefaultResult3.func;
obj[57] = importDefaultResult3.func;
obj[58] = importDefaultResult3.func;
obj[59] = importDefaultResult3.func;
obj[60] = importDefaultResult3.func;
obj[61] = importDefaultResult3.func;
obj[62] = importDefaultResult3.func;
obj[63] = importDefaultResult3.func;
obj[64] = importDefaultResult3.func;
obj[65] = importDefaultResult3.func;
obj[66] = importDefaultResult3.func;
obj[67] = importDefaultResult3.func;
obj[68] = importDefaultResult3.func;
obj[69] = importDefaultResult3.func;
obj[70] = importDefaultResult3.func;
obj[71] = importDefaultResult3.func;
obj[72] = importDefaultResult3.func;
obj[73] = importDefaultResult3.func;
obj[74] = importDefaultResult3.func;
obj[75] = importDefaultResult3.func;
obj[76] = importDefaultResult3.number;
obj[77] = importDefaultResult3.number;
obj[78] = importDefaultResult3.number;
obj[79] = importDefaultResult3.number;
obj[80] = importDefaultResult3.number;
let merged = Object.assign(require("get ColorPropType").ViewPropTypes);
importDefaultResultResult.propTypes = obj;
let closure_16 = requireNativeComponent("RNVVideo", importDefaultResultResult, { nativeOnly: { src: true, seek: true, fullscreen: true } });

export default importDefaultResultResult;
export const TextTrackType = _modDef8438;
export const FilterType = _modDef8418;
export const DRMType = _modDef8419;