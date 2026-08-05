// _runtime/08765__isNativeReflectConstruct.js
import _inherits from "_inherits";
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import importDefaultResult1 from "_inherits";
import importDefaultResult3 from "emptyFunction";
import importDefaultResult4 from "emptyFunction";
import importDefaultResult5 from "emptyFunction";
import importDefaultResult6 from "emptyFunction";
import importDefaultResult7 from "emptyFunction";
import importDefaultResult8 from "emptyFunction";
import importDefaultResult9 from "emptyFunction";
import importDefaultResult10 from "emptyFunction";
import importDefaultResult11 from "emptyFunction";
import importDefaultResult12 from "emptyFunction";
import importDefaultResult13 from "emptyFunction";
import importDefaultResult14 from "emptyFunction";
import importDefaultResult15 from "emptyFunction";
import importDefaultResult16 from "emptyFunction";
import importDefaultResult17 from "emptyFunction";
import importDefaultResult18 from "emptyFunction";
import importDefaultResult19 from "emptyFunction";
import importDefaultResult20 from "emptyFunction";

let Platform;
let c10;
let c9;
let closure_12;
let error;
let map1;
let metroImportAll;
let requireNativeComponent;
let unpackModuleId;
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
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
const StyleSheet = get_ActivityIndicator.StyleSheet;
({ NativeModules: error, View: metroImportAll, Image: c9, Platform, findNodeHandle: c10, UIManager: unpackModuleId, requireNativeComponent } = get_ActivityIndicator);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const styles = StyleSheet.create({ base: { overflow: "hidden" } });
class Video {
  constructor(arg0) {
    self = this;
    tmp = _isNativeReflectConstruct(this, f115628);
    items = [];
    items[0] = global;
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(f115628);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    f115628 = tmp3Result;
    tmp3Result.seek = (arg0) => {
      if (isNaN(arg0)) {
        const _Error = Error;
        const error = new Error("Specified time is not a number");
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
    f115628 = undefined;
    f115628 = _isNativeReflectConstruct((arg0) => {
      let closure_0 = arg0;
      let c2 = 0;
      let c1 = 0;
      return (function*(arg0) {
        const VideoManager = outer2_7.VideoManager;
        yield VideoManager.save(_root, outer2_10(_root._root));
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
                  const VideoManager2 = outer1_7.VideoManager;
                  VideoManager2.setLicenseResult(arg0, outer1_10(closure_0._root));
                } else if (outer1_7.VideoManager.setLicenseError) {
                  const VideoManager = outer1_7.VideoManager;
                  VideoManager.setLicenseError("Empty license result", outer1_10(closure_0._root));
                }
              }).catch((arg0) => {
                if (outer1_7.VideoManager.setLicenseError) {
                  const VideoManager = tmp.VideoManager;
                  VideoManager.setLicenseError(arg0, outer1_10(closure_0._root));
                }
              });
              const nextPromise = resolved.then((arg0) => {
                if (undefined !== arg0) {
                  const VideoManager2 = outer1_7.VideoManager;
                  VideoManager2.setLicenseResult(arg0, outer1_10(closure_0._root));
                } else if (outer1_7.VideoManager.setLicenseError) {
                  const VideoManager = outer1_7.VideoManager;
                  VideoManager.setLicenseError("Empty license result", outer1_10(closure_0._root));
                }
              });
            }
          }
          if (outer1_7.VideoManager.setLicenseError) {
            let VideoManager = outer1_7.VideoManager;
            VideoManager.setLicenseError("No spc received", outer1_10(tmp._root));
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
require("_inherits")(Video, require("noop").Component);
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
      let closure_1 = headers;
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
      if (resizeMode === Video(8766).stretch) {
        let ScaleNone = viewManagerConfig.Constants.ScaleToFill;
      } else if (resizeMode === tmp(8766).contain) {
        ScaleNone = viewManagerConfig.Constants.ScaleAspectFit;
      } else if (resizeMode === tmp(8766).cover) {
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
      const obj1 = { style: merged.style, children: null };
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
let items1 = [require("module_8768").NONE, require("module_8768").INVERT, require("module_8768").MONOCHROME, require("module_8768").POSTERIZE, require("module_8768").FALSE, require("module_8768").MAXIMUMCOMPONENT, require("module_8768").MINIMUMCOMPONENT, require("module_8768").CHROME, require("module_8768").FADE, require("module_8768").INSTANT, require("module_8768").MONO, require("module_8768").NOIR, require("module_8768").PROCESS, require("module_8768").TONAL, require("module_8768").TRANSFER, require("module_8768").SEPIA];
obj[0] = require("emptyFunction").oneOf(items1);
obj[1] = require("emptyFunction").bool;
obj[2] = require("emptyFunction").object;
const items2 = [require("emptyFunction").number, require("emptyFunction").object];
obj[3] = require("emptyFunction").oneOfType(items2);
obj[4] = require("emptyFunction").bool;
obj[5] = require("emptyFunction").func;
obj[6] = require("emptyFunction").func;
obj[7] = require("emptyFunction").func;
obj[8] = require("emptyFunction").func;
obj[9] = require("emptyFunction").func;
obj[10] = require("emptyFunction").func;
obj[11] = require("emptyFunction").func;
obj[12] = require("emptyFunction").func;
obj[13] = require("emptyFunction").func;
obj[14] = require("emptyFunction").func;
obj[15] = require("emptyFunction").func;
obj[16] = require("emptyFunction").func;
obj[17] = require("emptyFunction").func;
obj[18] = require("emptyFunction").func;
obj[19] = require("emptyFunction").func;
obj = { uri: require("emptyFunction").string };
const items3 = [require("emptyFunction").shape(obj), require("emptyFunction").number];
obj[20] = importDefaultResult5.oneOfType(items3);
let obj1 = { type: null, licenseServer: null, headers: null, base64Certificate: null, certificateUrl: null, getLicense: null };
const items4 = [require("module_8769").CLEARKEY, require("module_8769").FAIRPLAY, require("module_8769").WIDEVINE, require("module_8769").PLAYREADY];
obj1[0] = require("emptyFunction").oneOf(items4);
obj1[1] = require("emptyFunction").string;
obj1[2] = require("emptyFunction").shape({});
obj1[3] = require("emptyFunction").bool;
obj1[4] = require("emptyFunction").string;
obj1[5] = require("emptyFunction").func;
obj[21] = importDefaultResult7.shape(obj1);
obj[22] = require("emptyFunction").number;
obj[23] = require("emptyFunction").number;
obj[24] = require("emptyFunction").string;
obj[25] = require("emptyFunction").string;
obj[26] = require("get ColorPropType").ImagePropTypes.resizeMode;
obj[27] = require("emptyFunction").bool;
obj[28] = require("emptyFunction").bool;
obj[29] = require("emptyFunction").bool;
let obj2 = { type: require("emptyFunction").string.isRequired, value: null };
const items5 = [require("emptyFunction").string, require("emptyFunction").number];
obj2[1] = require("emptyFunction").oneOfType(items5);
obj[30] = importDefaultResult10.shape(obj2);
let obj3 = { type: require("emptyFunction").string.isRequired, value: null };
const items6 = [require("emptyFunction").string, require("emptyFunction").number];
obj3[1] = require("emptyFunction").oneOfType(items6);
obj[31] = importDefaultResult12.shape(obj3);
let obj4 = { type: require("emptyFunction").string.isRequired, value: null };
const items7 = [require("emptyFunction").string, require("emptyFunction").number];
obj4[1] = require("emptyFunction").oneOfType(items7);
obj[32] = importDefaultResult14.shape(obj4);
const obj5 = { title: require("emptyFunction").string, uri: require("emptyFunction").string.isRequired, type: null, language: null };
const items8 = [require("module_8788").SRT, require("module_8788").TTML, require("module_8788").VTT];
obj5[2] = require("emptyFunction").oneOf(items8);
obj5[3] = require("emptyFunction").string.isRequired;
obj[33] = importDefaultResult16.arrayOf(importDefaultResult17.shape(obj5));
obj[34] = require("emptyFunction").bool;
obj[35] = require("emptyFunction").bool;
obj[36] = require("emptyFunction").number;
obj[37] = importDefaultResult19.shape({ minBufferMs: require("emptyFunction").number, maxBufferMs: require("emptyFunction").number, bufferForPlaybackMs: require("emptyFunction").number, bufferForPlaybackAfterRebufferMs: require("emptyFunction").number });
obj[38] = require("emptyFunction").number;
obj[39] = require("emptyFunction").number;
obj[40] = require("emptyFunction").bool;
obj[41] = require("emptyFunction").bool;
obj[42] = require("emptyFunction").number;
obj[43] = require("emptyFunction").bool;
const obj6 = { minBufferMs: require("emptyFunction").number, maxBufferMs: require("emptyFunction").number, bufferForPlaybackMs: require("emptyFunction").number, bufferForPlaybackAfterRebufferMs: require("emptyFunction").number };
obj[44] = require("emptyFunction").oneOf(["ignore", "obey"]);
obj[45] = require("emptyFunction").bool;
obj[46] = require("emptyFunction").bool;
obj[47] = require("emptyFunction").bool;
obj[48] = require("emptyFunction").bool;
obj[49] = require("emptyFunction").number;
obj[50] = require("emptyFunction").bool;
obj[51] = require("emptyFunction").oneOf(["all", "landscape", "portrait"]);
obj[52] = require("emptyFunction").number;
obj[53] = require("emptyFunction").bool;
obj[54] = require("emptyFunction").bool;
obj[55] = require("emptyFunction").func;
obj[56] = require("emptyFunction").func;
obj[57] = require("emptyFunction").func;
obj[58] = require("emptyFunction").func;
obj[59] = require("emptyFunction").func;
obj[60] = require("emptyFunction").func;
obj[61] = require("emptyFunction").func;
obj[62] = require("emptyFunction").func;
obj[63] = require("emptyFunction").func;
obj[64] = require("emptyFunction").func;
obj[65] = require("emptyFunction").func;
obj[66] = require("emptyFunction").func;
obj[67] = require("emptyFunction").func;
obj[68] = require("emptyFunction").func;
obj[69] = require("emptyFunction").func;
obj[70] = require("emptyFunction").func;
obj[71] = require("emptyFunction").func;
obj[72] = require("emptyFunction").func;
obj[73] = require("emptyFunction").func;
obj[74] = require("emptyFunction").func;
obj[75] = require("emptyFunction").func;
obj[76] = require("emptyFunction").number;
obj[77] = require("emptyFunction").number;
obj[78] = require("emptyFunction").number;
obj[79] = require("emptyFunction").number;
obj[80] = require("emptyFunction").number;
let merged = Object.assign(require("get ColorPropType").ViewPropTypes);
importDefaultResultResult.propTypes = obj;
let closure_16 = requireNativeComponent("RNVVideo", importDefaultResultResult, { nativeOnly: { src: true, seek: true, fullscreen: true } });

export default importDefaultResultResult;
export const TextTrackType = require("module_8788");
export const FilterType = require("module_8768");
export const DRMType = require("module_8769");