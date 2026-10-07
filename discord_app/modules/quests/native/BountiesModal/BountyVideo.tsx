// === Module 14855: BountyVideo ===

// Module 14855 (BountyVideo)
import nativeDefault from "native" /* 587 */;
import timing from "timing" /* 4897 */;
import timingPresets from "timingPresets" /* 4900 */;
import LinearGradientDefault from "LinearGradient" /* 5612 */;
import AssetUtils from "AssetUtils" /* 10013 */;
import BountiesModalProgress from "BountiesModalProgress" /* 14856 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import n_mod from "module_683" /* 683 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: metroRequire, ActivityIndicator: closure_7, Pressable: closure_8 } = get_ActivityIndicator);
const BountiesModalConstants = fn(14831);
({ getBountyVideoEndPeekClipHeight: closure_9, getBountyVideoEndPeekScale: c10 } = BountiesModalConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const PlatformUtils = fn(1370);
const contentInsets = { top: 48, bottom: 16, left: 16, right: 16 };
const lg = nativeDefault.radii.lg;
const LinearGradient = ReanimatedRexport.createAnimatedComponent(LinearGradientDefault);
const start = { x: 0, y: 0 };
const end = { x: 0, y: 1 };
let n = n_mod;
const importDefaultResult1Result = n(nativeDefault.unsafe_rawColors.PLUM_23);
let items = [n(nativeDefault.unsafe_rawColors.PLUM_23).alpha(0.4).hex(), ];
let n = n_mod;
const alphaResult = n(nativeDefault.unsafe_rawColors.PLUM_23).alpha(0.4);
const importDefaultResult2Result = n(nativeDefault.unsafe_rawColors.PLUM_23);
items[1] = n(nativeDefault.unsafe_rawColors.PLUM_23).alpha(0).hex();
const createStyles = fn(4896);
let closure_21 = createStyles.createStyles(() => {
  const obj = { videoContainer: null, leftRow: null, progress: null, poster: null, scrimGradient: null };
  const obj2 = {};
  const merged = Object.assign(StyleSheet.absoluteFillObject);
  obj2.overflow = "hidden";
  obj2.borderRadius = lg;
  obj.videoContainer = obj2;
  const rect = { position: "absolute", top: nativeDefault.space.PX_8, left: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  obj.leftRow = rect;
  const rect1 = { position: "absolute", bottom: 0, height: BountiesModalProgress.PROGRESS_BAR_HEIGHT, left: lg, right: lg };
  obj.progress = rect1;
  const obj3 = {};
  const merged1 = Object.assign(StyleSheet.absoluteFillObject);
  obj3.backgroundColor = "#000000";
  obj3.justifyContent = "center";
  obj3.alignItems = "center";
  obj.poster = obj3;
  const obj4 = {};
  const merged2 = Object.assign(StyleSheet.absoluteFillObject);
  obj4.bottom = undefined;
  obj4.height = 70;
  obj.scrimGradient = obj4;
  return obj;
});
const __initData = { code: "function BountyVideoTsx1(){const{posterOpacity}=this.__closure;return{opacity:posterOpacity.get()};}" };
const __initData2 = { code: "function BountyVideoTsx2(){const{isScrollingInBoundsSharedValue,withTiming,isActive,timingStandard}=this.__closure;var _isScrollingInBoundsS;const isScrollingInBounds=((_isScrollingInBoundsS=isScrollingInBoundsSharedValue)===null||_isScrollingInBoundsS===void 0?void 0:_isScrollingInBoundsS.get())===true;return{opacity:withTiming(isActive&&!isScrollingInBounds?1:0,timingStandard)};}" };
const __initData3 = { code: "function BountyVideoTsx3(){const{videoEndPeekProgress,StyleSheet,getBountyVideoEndPeekScale,videoEndPeekTargetScale,getBountyVideoEndPeekClipHeight,width,height,VIDEO_CONTAINER_BORDER_RADIUS}=this.__closure;if(videoEndPeekProgress==null){return StyleSheet.absoluteFillObject;}const progress_0=videoEndPeekProgress.get();const scale=getBountyVideoEndPeekScale(progress_0,videoEndPeekTargetScale);const clipHeight=getBountyVideoEndPeekClipHeight(progress_0,width,height);const centerPivotCompensation=clipHeight*(1-scale)/2;return{position:\"absolute\",top:0,left:0,width:width,height:clipHeight,overflow:\"hidden\",borderRadius:VIDEO_CONTAINER_BORDER_RADIUS,transform:[{translateY:-centerPivotCompensation},{scale:scale}]};}" };
const __initData4 = { code: "function BountyVideoTsx4(){const{videoEndPeekProgress,StyleSheet,getBountyVideoEndPeekClipHeight,width,height}=this.__closure;if(videoEndPeekProgress==null){return StyleSheet.absoluteFillObject;}const progress_1=videoEndPeekProgress.get();const clipHeight_0=getBountyVideoEndPeekClipHeight(progress_1,width,height);return{width:width,height:height,transform:[{translateY:(clipHeight_0-height)/2}]};}" };
const __initData5 = { code: "function BountyVideoTsx5(){const{posterOpacity}=this.__closure;return{opacity:posterOpacity.get()};}" };
const __initData6 = { code: "function BountyVideoTsx6(){const{isScrollingInBoundsSharedValue,withTiming,isActive,timingStandard}=this.__closure;var _isScrollingInBoundsS;const isScrollingInBounds=((_isScrollingInBoundsS=isScrollingInBoundsSharedValue)===null||_isScrollingInBoundsS===void 0?void 0:_isScrollingInBoundsS.get())===true;return{opacity:withTiming(isActive&&!isScrollingInBounds?1:0,timingStandard)};}" };
const __initData7 = { code: "function BountyVideoTsx7(){const{videoEndPeekProgress,StyleSheet,getBountyVideoEndPeekScale,videoEndPeekTargetScale,getBountyVideoEndPeekClipHeight,width,height,VIDEO_CONTAINER_BORDER_RADIUS}=this.__closure;if(videoEndPeekProgress==null){return StyleSheet.absoluteFillObject;}const progress_0=videoEndPeekProgress.get();const scale=getBountyVideoEndPeekScale(progress_0,videoEndPeekTargetScale);const clipHeight=getBountyVideoEndPeekClipHeight(progress_0,width,height);const centerPivotCompensation=clipHeight*(1-scale)/2;return{position:'absolute',top:0,left:0,width:width,height:clipHeight,overflow:'hidden',borderRadius:VIDEO_CONTAINER_BORDER_RADIUS,transform:[{translateY:-centerPivotCompensation},{scale:scale}]};}" };
const __initData8 = { code: "function BountyVideoTsx8(){const{videoEndPeekProgress,StyleSheet,getBountyVideoEndPeekClipHeight,width,height}=this.__closure;if(videoEndPeekProgress==null){return StyleSheet.absoluteFillObject;}const progress_1=videoEndPeekProgress.get();const clipHeight_0=getBountyVideoEndPeekClipHeight(progress_1,width,height);return{width:width,height:height,transform:[{translateY:(clipHeight_0-height)/2}]};}" };
const ReactCompilerGating = fn(558);
const alphaResult1 = n(nativeDefault.unsafe_rawColors.PLUM_23).alpha(0);
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountyVideo.tsx");

export const BountyVideo = ReactCompilerGating.isReactCompilerEnabled() ? ((height) => {
  const cResult = handleVideoProgress(onFirstFrame[14]).c(108);
  ({ bounty, sourceQuestContent, isCompleted, isCtaVisible, isEndCardVisible, isScrollIndicatorEnabled, isProgressBarVisible, orbsBalance, handleVideoEnd, handleVideoProgress } = height);
  ({ handleVideoPaused, handleVideoResumed, handleVideoError } = height);
  ({ onLoadStart, onBuffer, onFirstFrame } = height);
  ({ onVideoTracks, rewardRemainingSeconds, rewardTotalSeconds, normalizedProgress, initialProgress, repeat, isActive, isRecapPageRevealed, isScrollingInBoundsSharedValue } = height);
  ({ renderEndCard, playerRef, onPlayerStateChange, balanceWidgetPillResetKey, shouldLoadHls, width } = height);
  height = height.height;
  const softDownloadCapsEnabled = height.softDownloadCapsEnabled;
  let tmp4 = undefined !== isScrollIndicatorEnabled && isScrollIndicatorEnabled;
  StyleSheet = tmp5;
  let tmp8 = undefined !== softDownloadCapsEnabled && softDownloadCapsEnabled;
  closure_21();
  if (tmp8) {
    tmp8 = !tmp5;
  }
  let obj = handleVideoProgress(onFirstFrame[14]);
  const tmp6 = undefined !== isRecapPageRevealed && isRecapPageRevealed;
  [r10056, closure_7] = isScrollingInBoundsSharedValue(width.useState(false), 2);
  const tmp12 = isScrollingInBoundsSharedValue(width.useState(false), 2);
  const first = tmp12[0];
  getBountyVideoEndPeekClipHeight = tmp14;
  getBountyVideoEndPeekScale = width.useRef(null);
  const tmp11 = isScrollingInBoundsSharedValue(width.useState(false), 2);
  const sharedValue = handleVideoProgress(onFirstFrame[8]).useSharedValue(1);
  if (cResult[0] === bounty) {
    if (cResult[1] === height) {
      const token = handleVideoProgress(onFirstFrame[15]).useToken(handleVideoError(onFirstFrame[7]).colors.TEXT_DEFAULT);
      const _HermesInternal = HermesInternal;
      const combined = "" + bounty.id + ":" + tmp7;
      const tmp10Result = isScrollingInBoundsSharedValue(width.useState(combined), 2);
      if (tmp10Result[0] !== combined) {
        tmp10Result[1](combined);
        tmp14(false);
        let result = sharedValue.set(1);
      }
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        function ke() {
          return () => {
            if (null != ref.current) {
              const _clearTimeout = clearTimeout;
              clearTimeout(ref.current);
              ref.current = null;
            }
          };
        }
        cResult[4] = ke;
        let tmp25 = ke;
      } else {
        tmp25 = cResult[4];
      }
      if (cResult[5] !== combined) {
        items = [combined];
        cResult[5] = combined;
        cResult[6] = items;
        let tmp26 = items;
      } else {
        tmp26 = cResult[6];
      }
      const effect = width.useEffect(tmp25, tmp26);
      if (cResult[7] === first) {
        if (cResult[8] === sharedValue) {
          let tmp28 = cResult[9];
          let tmp29 = cResult[10];
        }
        const effect1 = width.useEffect(tmp29, tmp28);
        const _Symbol2 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class Fe {
            constructor() {
              tmp = closure_10;
              if (null != closure_10.current) {
                tmp2 = globalThis;
                _clearTimeout = clearTimeout;
                clearTimeoutResult = clearTimeout(tmp.current);
                tmp.current = null;
              }
              tmp4 = closure_9(true);
              return;
            }
          }
          cResult[11] = Fe;
          const tmp32 = Fe;
        } else {
          class Fe {
            constructor() {
              tmp = closure_10;
              if (null != closure_10.current) {
                tmp2 = globalThis;
                _clearTimeout = clearTimeout;
                clearTimeoutResult = clearTimeout(tmp.current);
                tmp.current = null;
              }
              tmp4 = closure_9(true);
              return;
            }
          }
        }
        Fe = tmp32;
        if (cResult[12] !== onFirstFrame) {
          class Ne {
            constructor() {
              if (onFirstFrame != null) {
                tmpResult = tmp();
              }
              tmp3 = closure_10;
              if (null != closure_10.current) {
                tmp4 = globalThis;
                _clearTimeout = clearTimeout;
                clearTimeoutResult = clearTimeout(tmp3.current);
              }
              tmp3.current = setTimeout(() => {
                closure_1_9(true);
                ref.current = null;
              }, c14);
              return;
            }
          }
          cResult[12] = onFirstFrame;
          cResult[13] = Ne;
        } else {
          class Ne {
            constructor() {
              if (onFirstFrame != null) {
                tmpResult = tmp();
              }
              tmp3 = closure_10;
              if (null != closure_10.current) {
                tmp4 = globalThis;
                _clearTimeout = clearTimeout;
                clearTimeoutResult = clearTimeout(tmp3.current);
              }
              tmp3.current = setTimeout(() => {
                closure_1_9(true);
                ref.current = null;
              }, c14);
              return;
            }
          }
        }
        if (cResult[14] !== handleVideoError) {
          class Ge {
            constructor(arg0) {
              tmp = closure_12();
              if (handleVideoError != null) {
                tmp3 = height;
                tmp2Result = tmp2(height);
              }
              return;
            }
          }
          cResult[14] = handleVideoError;
          cResult[15] = Ge;
        } else {
          class Ge {
            constructor(arg0) {
              tmp = closure_12();
              if (handleVideoError != null) {
                tmp3 = height;
                tmp2Result = tmp2(height);
              }
              return;
            }
          }
        }
        if (cResult[16] !== handleVideoProgress) {
          class We {
            constructor(arg0) {
              if (height.currentTime > 0) {
                tmp = closure_7;
                flag = true;
                tmp2 = closure_7(true);
              }
              tmp3 = handleVideoProgress(height);
              return;
            }
          }
          cResult[16] = handleVideoProgress;
          cResult[17] = We;
        } else {
          class We {
            constructor(arg0) {
              if (height.currentTime > 0) {
                tmp = closure_7;
                flag = true;
                tmp2 = closure_7(true);
              }
              tmp3 = handleVideoProgress(height);
              return;
            }
          }
        }
        class Xe {
          constructor() {
            obj = { opacity: closure_11.get() };
            return obj;
          }
        }
        let obj3 = { posterOpacity: sharedValue };
        Xe.__closure = obj3;
        Xe.__workletHash = 4975136521719;
        Xe.__initData = __initData;
        const animatedStyle = handleVideoProgress(onFirstFrame[8]).useAnimatedStyle(Xe);
        class Ae {
          constructor() {
            if (closure_8) {
              tmp = closure_11;
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj = closure_0(closure_2[16]);
              num = 0;
              result = closure_11.set(obj.withTiming(0, closure_0(closure_2[17]).timingFast));
            }
            return;
          }
        }
        class Qe {
          constructor() {
            obj = closure_3;
            if (closure_3 != null) {
              value = obj.get();
            }
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj2 = closure_0(closure_2[16]);
            num = 0;
            if (isActive) {
              flag = true;
              num = 0;
              if (true !== value) {
                num = 1;
              }
            }
            obj1 = { opacity: obj2.withTiming(num, tmp2(tmp3[17]).timingStandard) };
            return obj1;
          }
        }
        const obj4 = { isScrollingInBoundsSharedValue, withTiming: handleVideoProgress(onFirstFrame[16]).withTiming, isActive: tmp5, timingStandard: handleVideoProgress(onFirstFrame[17]).timingStandard };
        Qe.__closure = obj4;
        Qe.__workletHash = 12676706441349;
        Qe.__initData = __initData2;
        const animatedStyle1 = obj10.useAnimatedStyle(Qe);
        const tmpResult8 = handleVideoProgress(onFirstFrame[8]);
        const bountyVideoEndAppStoreContext = handleVideoProgress(onFirstFrame[18]).useBountyVideoEndAppStoreContext();
        let tmp41;
        if (tmp5) {
          class We {
            constructor(arg0) {
              if (height.currentTime > 0) {
                tmp = closure_7;
                flag = true;
                tmp2 = closure_7(true);
              }
              tmp3 = handleVideoProgress(height);
              return;
            }
          }
          if (bountyVideoEndAppStoreContext != null) {
            class We {
              constructor(arg0) {
                if (height.currentTime > 0) {
                  tmp = closure_7;
                  flag = true;
                  tmp2 = closure_7(true);
                }
                tmp3 = handleVideoProgress(height);
                return;
              }
            }
          }
          tmp41 = tmp42;
        }
        if (bountyVideoEndAppStoreContext != null) {
          class We {
            constructor(arg0) {
              if (height.currentTime > 0) {
                tmp = closure_7;
                flag = true;
                tmp2 = closure_7(true);
              }
              tmp3 = handleVideoProgress(height);
              return;
            }
          }
        }
        if (undefined == null) {
          class We {
            constructor(arg0) {
              if (height.currentTime > 0) {
                tmp = closure_7;
                flag = true;
                tmp2 = closure_7(true);
              }
              tmp3 = handleVideoProgress(height);
              return;
            }
          }
        }
        c14 = tmp43;
        tmp42 = tmp41;
        const tmpResult9 = handleVideoProgress(onFirstFrame[18]);
        function $e() {
          if (null == tmp42) {
            return StyleSheet.absoluteFillObject;
          } else {
            value = tmp42.get();
            const tmp5 = getBountyVideoEndPeekScale(value, c14);
            const tmp9 = getBountyVideoEndPeekClipHeight(value, width, height);
            const size = { position: "absolute", top: 0, left: 0, width, height: tmp9, overflow: "hidden", borderRadius: lg, transform: null };
            const obj2 = { translateY: -tmp9 * (1 - tmp5) / 2 };
            items = [obj2, ];
            const obj3 = { scale: tmp5 };
            items[1] = obj3;
            size.transform = items;
            return size;
          }
        }
        let size = { videoEndPeekProgress: tmp41, StyleSheet, getBountyVideoEndPeekScale, videoEndPeekTargetScale: undefined, getBountyVideoEndPeekClipHeight, width, height, VIDEO_CONTAINER_BORDER_RADIUS: lg };
        $e.__closure = size;
        $e.__workletHash = 6241135979205;
        $e.__initData = __initData3;
        const animatedStyle2 = handleVideoProgress(onFirstFrame[8]).useAnimatedStyle($e);
        const tmp44 = StyleSheet;
        const tmpResult10 = handleVideoProgress(onFirstFrame[8]);
        class Ke {
          constructor() {
            obj = videoEndPeekProgress;
            if (null == videoEndPeekProgress) {
              tmp4 = StyleSheet;
              return StyleSheet.absoluteFillObject;
            } else {
              tmp = closure_9;
              tmp2 = width;
              tmp3 = height;
              size = { width: null, height: null, transform: null };
              size.width = width;
              size.height = height;
              obj1 = { translateY: null };
              num = 2;
              obj1.translateY = (closure_9(obj.get(), width, height) - height) / 2;
              items = [];
              items[0] = obj1;
              size.transform = items;
              return size;
            }
          }
        }
        const size1 = { videoEndPeekProgress: tmp41, StyleSheet, getBountyVideoEndPeekClipHeight, width, height };
        Ke.__closure = size1;
        Ke.__workletHash = 2736417945524;
        Ke.__initData = __initData4;
        const animatedStyle3 = handleVideoProgress(onFirstFrame[8]).useAnimatedStyle(Ke);
        if (isCtaVisible) {
          class We {
            constructor(arg0) {
              if (height.currentTime > 0) {
                tmp = closure_7;
                flag = true;
                tmp2 = closure_7(true);
              }
              tmp3 = handleVideoProgress(height);
              return;
            }
          }
        }
        if (true === tmp5) {
          class We {
            constructor(arg0) {
              if (height.currentTime > 0) {
                tmp = closure_7;
                flag = true;
                tmp2 = closure_7(true);
              }
              tmp3 = handleVideoProgress(height);
              return;
            }
          }
          if (bountyVideoEndAppStoreContext != null) {
            class We {
              constructor(arg0) {
                if (height.currentTime > 0) {
                  tmp = closure_7;
                  flag = true;
                  tmp2 = closure_7(true);
                }
                tmp3 = handleVideoProgress(height);
                return;
              }
            }
          }
          if (true === tmp53) {
            class We {
              constructor(arg0) {
                if (height.currentTime > 0) {
                  tmp = closure_7;
                  flag = true;
                  tmp2 = closure_7(true);
                }
                tmp3 = handleVideoProgress(height);
                return;
              }
            }
          }
        }
        if (tmp4) {
          class We {
            constructor(arg0) {
              if (height.currentTime > 0) {
                tmp = closure_7;
                flag = true;
                tmp2 = closure_7(true);
              }
              tmp3 = handleVideoProgress(height);
              return;
            }
          }
          if (bountyVideoEndAppStoreContext != null) {
            class We {
              constructor(arg0) {
                if (height.currentTime > 0) {
                  tmp = closure_7;
                  flag = true;
                  tmp2 = closure_7(true);
                }
                tmp3 = handleVideoProgress(height);
                return;
              }
            }
          }
          tmp4 = true !== tmp54;
        }
        if (cResult[18] === tmp8) {
          class We {
            constructor(arg0) {
              if (height.currentTime > 0) {
                tmp = closure_7;
                flag = true;
                tmp2 = closure_7(true);
              }
              tmp3 = handleVideoProgress(height);
              return;
            }
          }
        }
        let tmp57Result = null;
        if (tmp7) {
          class We {
            constructor(arg0) {
              if (height.currentTime > 0) {
                tmp = closure_7;
                flag = true;
                tmp2 = closure_7(true);
              }
              tmp3 = handleVideoProgress(height);
              return;
            }
          }
          const obj5 = { ref: playerRef, source: null, automaticallyWaitsToMinimizeStalling: false, maxBitRate: null, bufferConfig: null, preferredForwardBufferDuration: null, initialProgress: null, isFullscreen: false, externallyPaused: null, style: null, contentInsets: null, onProgress: null, onEnd: null, onPausePlayback: null, onResumePlayback: null, onError: null, onLoadStart: null, onBuffer: null, onReadyForDisplay: null, onVideoTracks: null, hideControls: null, showSkipButtons: false, repeat: null, bufferingSpinnerPlacement: "center", onPlayerStateChange: null };
          const obj6 = { uri: bounty.videoHls };
          obj5.source = obj6;
          if (tmp8) {
            class We {
              constructor(arg0) {
                if (height.currentTime > 0) {
                  tmp = closure_7;
                  flag = true;
                  tmp2 = closure_7(true);
                }
                tmp3 = handleVideoProgress(height);
                return;
              }
            }
          }
          obj5.maxBitRate = undefined;
          class Xe {
            constructor() {
              obj = { opacity: closure_11.get() };
              return obj;
            }
          }
          if (tmp8) {
            class We {
              constructor(arg0) {
                if (height.currentTime > 0) {
                  tmp = closure_7;
                  flag = true;
                  tmp2 = closure_7(true);
                }
                tmp3 = handleVideoProgress(height);
                return;
              }
            }
          }
          obj5.bufferConfig = tmp59;
          if (tmp8) {
            class We {
              constructor(arg0) {
                if (height.currentTime > 0) {
                  tmp = closure_7;
                  flag = true;
                  tmp2 = closure_7(true);
                }
                tmp3 = handleVideoProgress(height);
                return;
              }
            }
          }
          obj5.preferredForwardBufferDuration = undefined;
          obj5.initialProgress = initialProgress;
          if (tmp5) {
            class We {
              constructor(arg0) {
                if (height.currentTime > 0) {
                  tmp = closure_7;
                  flag = true;
                  tmp2 = closure_7(true);
                }
                tmp3 = handleVideoProgress(height);
                return;
              }
            }
          }
          class Ae {
            constructor() {
              if (closure_8) {
                tmp = closure_11;
                tmp2 = closure_0;
                tmp3 = closure_2;
                obj = closure_0(closure_2[16]);
                num = 0;
                result = closure_11.set(obj.withTiming(0, closure_0(closure_2[17]).timingFast));
              }
              return;
            }
          }
          class Qe {
            constructor() {
              obj = closure_3;
              if (closure_3 != null) {
                value = obj.get();
              }
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj2 = closure_0(closure_2[16]);
              num = 0;
              if (isActive) {
                flag = true;
                num = 0;
                if (true !== value) {
                  num = 1;
                }
              }
              obj1 = { opacity: obj2.withTiming(num, tmp2(tmp3[17]).timingStandard) };
              return obj1;
            }
          }
          obj5.style = tmp44.absoluteFillObject;
          obj5.contentInsets = contentInsets;
          obj5.onProgress = We;
          obj5.onEnd = handleVideoEnd;
          obj5.onPausePlayback = handleVideoPaused;
          obj5.onResumePlayback = handleVideoResumed;
          obj5.onError = Ge;
          obj5.onLoadStart = onLoadStart;
          obj5.onBuffer = onBuffer;
          obj5.onReadyForDisplay = Ne;
          obj5.onVideoTracks = onVideoTracks;
          obj5.hideControls = isEndCardVisible;
          obj5.repeat = repeat;
          obj5.onPlayerStateChange = onPlayerStateChange;
          tmp57Result = tmp57(handleVideoProgress(onFirstFrame[19]).AdVideoPlayer, obj5);
        }
        cResult[18] = tmp8;
        cResult[19] = bounty.videoHls;
        cResult[20] = Ne;
        cResult[21] = handleVideoEnd;
        cResult[22] = Ge;
        cResult[23] = handleVideoPaused;
        cResult[24] = We;
        cResult[25] = handleVideoResumed;
        cResult[26] = initialProgress;
        cResult[27] = tmp5;
        cResult[28] = isEndCardVisible;
        cResult[29] = tmp6;
        cResult[30] = onBuffer;
        cResult[31] = onLoadStart;
        cResult[32] = onPlayerStateChange;
        cResult[33] = onVideoTracks;
        cResult[34] = playerRef;
        cResult[35] = repeat;
        cResult[36] = tmp7;
        cResult[37] = tmp57Result;
        const tmpResult11 = handleVideoProgress(onFirstFrame[8]);
      }
      class Ae {
        constructor() {
          if (closure_8) {
            tmp = closure_11;
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[16]);
            num = 0;
            result = closure_11.set(obj.withTiming(0, closure_0(closure_2[17]).timingFast));
          }
          return;
        }
      }
      tmp30[0] = first;
      tmp30[1] = sharedValue;
      cResult[7] = first;
      cResult[8] = sharedValue;
      cResult[9] = tmp30;
      cResult[10] = Ae;
      tmp29 = Ae;
      tmp28 = tmp30;
      const tmpResult7 = handleVideoProgress(onFirstFrame[15]);
    }
  }
  const tmpResult = handleVideoProgress(onFirstFrame[8]);
  const size2 = { assetUrl: bounty.videoHls, width, height };
  const scaledFirstFrameImageUrl = handleVideoProgress(onFirstFrame[6]).getScaledFirstFrameImageUrl(size2);
  cResult[0] = bounty;
  cResult[1] = height;
  cResult[2] = width;
  cResult[3] = scaledFirstFrameImageUrl;
  const tmpResult12 = handleVideoProgress(onFirstFrame[6]);
}) : ((bounty) => {
  bounty = bounty.bounty;
  ({ isCtaVisible, isEndCardVisible, isScrollIndicatorEnabled } = bounty);
  ({ sourceQuestContent, isCompleted } = bounty);
  if (isScrollIndicatorEnabled === undefined) {
    isScrollIndicatorEnabled = false;
  }
  const handleVideoProgress = bounty.handleVideoProgress;
  const handleVideoError = bounty.handleVideoError;
  const onFirstFrame = bounty.onFirstFrame;
  ({ isActive, isProgressBarVisible, orbsBalance, handleVideoEnd, handleVideoPaused, handleVideoResumed, onLoadStart, onBuffer, onVideoTracks, rewardRemainingSeconds, rewardTotalSeconds, normalizedProgress, initialProgress, repeat } = bounty);
  if (isActive === undefined) {
    isActive = false;
  }
  let flag = bounty.isRecapPageRevealed;
  if (flag === undefined) {
    flag = false;
  }
  const isScrollingInBoundsSharedValue = bounty.isScrollingInBoundsSharedValue;
  ({ renderEndCard, shouldLoadHls, playerRef, onPlayerStateChange, balanceWidgetPillResetKey } = bounty);
  if (shouldLoadHls === undefined) {
    shouldLoadHls = true;
  }
  const width = bounty.width;
  const height = bounty.height;
  let flag2 = bounty.softDownloadCapsEnabled;
  if (flag2 === undefined) {
    flag2 = false;
  }
  c8 = undefined;
  getBountyVideoEndPeekClipHeight = undefined;
  getBountyVideoEndPeekScale = undefined;
  let ref;
  let sharedValue;
  let callback;
  let videoEndPeekProgress;
  num = undefined;
  const tmp = closure_21();
  if (flag2) {
    flag2 = !isActive;
  }
  [tmp3, c8] = onFirstFrame(isActive.useState(false), 2);
  const tmp4 = onFirstFrame(isActive.useState(false), 2);
  getBountyVideoEndPeekClipHeight = tmp4[0];
  getBountyVideoEndPeekScale = tmp6;
  ref = isActive.useRef(null);
  const tmp2 = onFirstFrame(isActive.useState(false), 2);
  sharedValue = bounty(handleVideoError[8]).useSharedValue(1);
  items = [bounty, width, height];
  const memo = isActive.useMemo(() => {
    const size = { assetUrl: bounty.videoHls, width, height };
    return AssetUtils.getScaledFirstFrameImageUrl(size);
  }, items);
  let obj2 = bounty(handleVideoError[8]);
  const token = bounty(handleVideoError[15]).useToken(handleVideoProgress(handleVideoError[7]).colors.TEXT_DEFAULT);
  const combined = "" + bounty.id + ":" + shouldLoadHls;
  const tmp13 = onFirstFrame(isActive.useState(combined), 2);
  if (tmp13[0] !== combined) {
    tmp13[1](combined);
    tmp6(false);
    let result = sharedValue.set(1);
  }
  const items1 = [combined];
  const effect = obj.useEffect(() => () => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
  }, items1);
  const items2 = [getBountyVideoEndPeekClipHeight, sharedValue];
  const effect1 = obj.useEffect(() => {
    if (first) {
      const result = sharedValue.set(timing.withTiming(0, timingPresets.timingFast));
    }
  }, items2);
  callback = obj.useCallback(() => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
    closure_10(true);
  }, []);
  const items3 = [onFirstFrame];
  const items4 = [callback, handleVideoError];
  const callback1 = obj.useCallback(() => {
    if (onFirstFrame != null) {
      tmp();
    }
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
    }
    ref.current = setTimeout(() => {
      closure_1_10(true);
      ref.current = null;
    }, num);
  }, items3);
  const items5 = [handleVideoProgress];
  const callback2 = obj.useCallback((arg0) => {
    callback();
    if (handleVideoError != null) {
      tmp2(arg0);
    }
  }, items4);
  const callback3 = obj.useCallback((currentTime) => {
    if (currentTime.currentTime > 0) {
      _undefined(true);
    }
    handleVideoProgress(currentTime);
  }, items5);
  const obj4 = bounty(handleVideoError[15]);
  class Re {
    constructor() {
      obj = { opacity: closure_12.get() };
      return obj;
    }
  }
  Re.__closure = { posterOpacity: sharedValue };
  Re.__workletHash = 10695366069875;
  Re.__initData = __initData5;
  const animatedStyle = bounty(handleVideoError[8]).useAnimatedStyle(Re);
  const tmp7Result = bounty(handleVideoError[8]);
  function ke() {
    if (isScrollingInBoundsSharedValue != null) {
      value = isScrollingInBoundsSharedValue.get();
    }
    num = 0;
    if (isActive) {
      num = 0;
      if (true !== value) {
        num = 1;
      }
    }
    return { opacity: timing.withTiming(num, timingPresets.timingStandard) };
  }
  const tmp7Result5 = bounty(handleVideoError[8]);
  ke.__closure = { isScrollingInBoundsSharedValue, withTiming: bounty(handleVideoError[16]).withTiming, isActive, timingStandard: bounty(handleVideoError[17]).timingStandard };
  ke.__workletHash = 804749945089;
  ke.__initData = __initData6;
  const animatedStyle1 = tmp7Result5.useAnimatedStyle(ke);
  let obj3 = { isScrollingInBoundsSharedValue, withTiming: bounty(handleVideoError[16]).withTiming, isActive, timingStandard: bounty(handleVideoError[17]).timingStandard };
  const bountyVideoEndAppStoreContext = bounty(handleVideoError[18]).useBountyVideoEndAppStoreContext();
  let tmp26;
  if (isActive) {
    videoEndPeekProgress = undefined;
    if (bountyVideoEndAppStoreContext != null) {
      videoEndPeekProgress = bountyVideoEndAppStoreContext.videoEndPeekProgress;
    }
    tmp26 = videoEndPeekProgress;
  }
  videoEndPeekProgress = tmp26;
  num = undefined;
  if (bountyVideoEndAppStoreContext != null) {
    num = bountyVideoEndAppStoreContext.videoEndPeekTargetScale;
  }
  if (num == null) {
    num = 1;
  }
  const tmp7Result6 = bounty(handleVideoError[18]);
  class Te {
    constructor() {
      obj = videoEndPeekProgress;
      if (null == videoEndPeekProgress) {
        tmp = StyleSheet;
        return StyleSheet.absoluteFillObject;
      } else {
        value = obj.get();
        tmp3 = closure_10;
        tmp4 = c15;
        tmp5 = closure_10(value, c15);
        tmp6 = closure_9;
        tmp7 = width;
        tmp8 = height;
        tmp9 = closure_9(value, width, height);
        size = { position: "absolute", top: 0, left: 0, width: null, height: null, overflow: "hidden", borderRadius: null, transform: null };
        size.width = width;
        size.height = tmp9;
        tmp10 = lg;
        size.borderRadius = lg;
        obj1 = { translateY: null };
        num = 1;
        num2 = 2;
        obj1.translateY = -tmp9 * (1 - tmp5) / 2;
        items = [, ];
        items[0] = obj1;
        obj5 = { scale: null };
        obj5.scale = tmp5;
        items[1] = obj5;
        size.transform = items;
        return size;
      }
    }
  }
  let size = { videoEndPeekProgress: tmp26, StyleSheet: width, getBountyVideoEndPeekScale, videoEndPeekTargetScale: num, getBountyVideoEndPeekClipHeight, width, height, VIDEO_CONTAINER_BORDER_RADIUS: lg };
  Te.__closure = size;
  Te.__workletHash = 11435474180417;
  Te.__initData = __initData7;
  const animatedStyle2 = bounty(handleVideoError[8]).useAnimatedStyle(Te);
  const tmp7Result7 = bounty(handleVideoError[8]);
  class Oe {
    constructor() {
      obj = videoEndPeekProgress;
      if (null == videoEndPeekProgress) {
        tmp4 = StyleSheet;
        return StyleSheet.absoluteFillObject;
      } else {
        tmp = closure_9;
        tmp2 = width;
        tmp3 = height;
        size = { width: null, height: null, transform: null };
        size.width = width;
        size.height = height;
        obj1 = { translateY: null };
        num = 2;
        obj1.translateY = (closure_9(obj.get(), width, height) - height) / 2;
        items = [];
        items[0] = obj1;
        size.transform = items;
        return size;
      }
    }
  }
  Oe.__closure = { videoEndPeekProgress: tmp26, StyleSheet: width, getBountyVideoEndPeekClipHeight, width, height };
  Oe.__workletHash = 8683364100408;
  Oe.__initData = __initData8;
  let prop1 = null;
  const animatedStyle3 = bounty(handleVideoError[8]).useAnimatedStyle(Oe);
  if (true === isActive) {
    let prop;
    if (bountyVideoEndAppStoreContext != null) {
      prop = bountyVideoEndAppStoreContext.isVideoEndAppStoreOverlayVisible;
    }
    prop1 = null;
    if (true === prop) {
      prop1 = bountyVideoEndAppStoreContext.dismissVideoEndAppStoreOverlay;
    }
  }
  if (isScrollIndicatorEnabled) {
    let prop2;
    if (bountyVideoEndAppStoreContext != null) {
      prop2 = bountyVideoEndAppStoreContext.isVideoEndAppStoreOverlayVisible;
    }
    isScrollIndicatorEnabled = true !== prop2;
  }
  const obj5 = { style: animatedStyle2, children: null };
  const obj6 = { style: animatedStyle3, children: null };
  const obj7 = { style: tmp.videoContainer, children: null };
  let tmp36Result = null;
  if (shouldLoadHls) {
    const obj8 = { ref: playerRef, source: null, automaticallyWaitsToMinimizeStalling: false, maxBitRate: null, bufferConfig: null, preferredForwardBufferDuration: null, initialProgress: null, isFullscreen: false, externallyPaused: null, style: null, contentInsets: null, onProgress: null, onEnd: null, onPausePlayback: null, onResumePlayback: null, onError: null, onLoadStart: null, onBuffer: null, onReadyForDisplay: null, onVideoTracks: null, hideControls: null, showSkipButtons: false, repeat: null, bufferingSpinnerPlacement: "center", onPlayerStateChange: null };
    const obj9 = { uri: bounty.videoHls };
    obj8.source = obj9;
    let prop3;
    if (flag2) {
      prop3 = tmp7(tmp8[20]).SOFT_CAP_PRELOAD_MAX_BITRATE;
    }
    obj8.maxBitRate = prop3;
    let prop4;
    if (flag2) {
      prop4 = tmp7(tmp8[20]).SOFT_CAP_PRELOAD_BUFFER_CONFIG;
    }
    obj8.bufferConfig = prop4;
    let prop5;
    if (flag2) {
      prop5 = tmp7(tmp8[20]).SOFT_CAP_PRELOAD_FORWARD_BUFFER_SEC;
    }
    obj8.preferredForwardBufferDuration = prop5;
    obj8.initialProgress = initialProgress;
    let tmp42 = !isActive;
    if (isActive) {
      tmp42 = isEndCardVisible;
    }
    if (!tmp42) {
      tmp42 = flag;
    }
    obj8.externallyPaused = tmp42;
    obj8.style = tmp28.absoluteFillObject;
    obj8.contentInsets = num;
    obj8.onProgress = callback3;
    obj8.onEnd = handleVideoEnd;
    obj8.onPausePlayback = handleVideoPaused;
    obj8.onResumePlayback = handleVideoResumed;
    obj8.onError = callback2;
    obj8.onLoadStart = onLoadStart;
    obj8.onBuffer = onBuffer;
    obj8.onReadyForDisplay = callback1;
    obj8.onVideoTracks = onVideoTracks;
    obj8.hideControls = isEndCardVisible;
    obj8.repeat = repeat;
    obj8.onPlayerStateChange = onPlayerStateChange;
    tmp36Result = tmp36(tmp7(tmp8[19]).AdVideoPlayer, obj8);
  }
  const items6 = [tmp36Result, , , , , , ];
  if (null != memo) {
    const obj10 = { style: null, pointerEvents: "none", children: null };
    const items7 = [tmp.poster, animatedStyle];
    obj10.style = items7;
    const obj11 = { style: tmp28.absoluteFillObject, source: null, resizeMode: "cover" };
    const obj12 = { uri: memo };
    obj11.source = obj12;
    const items8 = [tmp36(tmp10(tmp8[21]), obj11), ];
    let tmp36Result3 = !getBountyVideoEndPeekClipHeight;
    if (!getBountyVideoEndPeekClipHeight) {
      const obj13 = { animating: true, size: "small", color: token };
      tmp36Result3 = tmp36(height, obj13);
    }
    items8[1] = tmp36Result3;
    obj10.children = items8;
    let tmp36Result4 = tmp34(tmp10(tmp8[8]).View, obj10);
  } else {
    const obj14 = { style: null, pointerEvents: "none" };
    const items9 = [tmp.poster, animatedStyle];
    obj14.style = items9;
    tmp36Result4 = tmp36(tmp10(tmp8[8]).View, obj14);
  }
  items6[1] = tmp36Result4;
  const obj15 = { start, end, style: null, colors: items, pointerEvents: "none" };
  const items10 = [tmp.scrimGradient, animatedStyle1];
  obj15.style = items10;
  items6[2] = ref(LinearGradient, obj15);
  let renderEndCardResult;
  if (renderEndCard != null) {
    renderEndCardResult = renderEndCard();
  }
  items6[3] = renderEndCardResult;
  let tmp36Result5 = null;
  if (null != prop1) {
    const obj16 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null };
    const intl = tmp7(tmp8[22]).intl;
    obj16.accessibilityLabel = intl.string(tmp7(tmp8[22]).t.dcl9MQ);
    obj16.onPress = prop1;
    obj16.style = tmp28.absoluteFillObject;
    tmp36Result5 = tmp36(c8, obj16);
  }
  items6[4] = tmp36Result5;
  if (isScrollIndicatorEnabled) {
    const obj17 = { opacityStyle: animatedStyle1, enabled: null, isEndCardVisible: null };
    if (isActive) {
      isActive = tmp3;
    }
    obj17.enabled = isActive;
    obj17.isEndCardVisible = isEndCardVisible;
    isScrollIndicatorEnabled = tmp36(tmp10(tmp8[23]), obj17);
    const tmp10Result = tmp10(tmp8[23]);
  }
  items6[5] = isScrollIndicatorEnabled;
  const obj18 = { style: null, pointerEvents: "box-none", children: null };
  const items11 = [width.absoluteFillObject, animatedStyle1];
  obj18.style = items11;
  const obj19 = { bounty, visible: null, sourceQuestContent: null };
  const tmp35 = callback;
  const tmp37 = isScrollingInBoundsSharedValue;
  const tmp7Result8 = bounty(handleVideoError[8]);
  if (isCtaVisible) {
    isCtaVisible = !isEndCardVisible;
  }
  const obj20 = { children: null };
  obj19.visible = isCtaVisible;
  obj19.sourceQuestContent = sourceQuestContent;
  obj18.children = ref(handleVideoProgress(handleVideoError[24]), obj19);
  items6[6] = ref(handleVideoProgress(handleVideoError[8]).View, obj18);
  obj7.children = items6;
  const items12 = [sharedValue(tmp37, obj7), ];
  const obj21 = { style: null, children: ref(handleVideoProgress(handleVideoError[12]), { progress: normalizedProgress, visible: isProgressBarVisible }) };
  const items13 = [tmp.progress, animatedStyle1];
  obj21.style = items13;
  items12[1] = ref(handleVideoProgress(handleVideoError[8]).View, obj21);
  obj6.children = items12;
  obj5.children = sharedValue(handleVideoProgress(handleVideoError[8]).View, obj6);
  const items14 = [ref(handleVideoProgress(handleVideoError[8]).View, obj5), ];
  const obj22 = { style: null, children: null };
  const items15 = [tmp.leftRow, animatedStyle1];
  obj22.style = items15;
  const items16 = [ref(handleVideoProgress(handleVideoError[25]), { isCompleted, totalSeconds: rewardTotalSeconds, remainingSeconds: rewardRemainingSeconds }), ref(bounty(handleVideoError[26]).BalanceWidgetPill, { balance: orbsBalance }, balanceWidgetPillResetKey)];
  obj22.children = items16;
  items14[1] = sharedValue(handleVideoProgress(handleVideoError[8]).View, obj22);
  obj20.children = items14;
  return sharedValue(tmp35, obj20);
});