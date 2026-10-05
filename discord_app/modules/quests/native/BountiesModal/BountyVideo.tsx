// === Module 14839: BountyVideo ===

// Module 14839 (BountyVideo)
import nativeDefault from "native" /* 587 */;
import timing from "timing" /* 4891 */;
import timingPresets from "timingPresets" /* 4894 */;
import LinearGradientDefault from "LinearGradient" /* 5605 */;
import AssetUtils from "AssetUtils" /* 10000 */;
import BountiesModalProgress from "BountiesModalProgress" /* 14840 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import BountiesModalConstants from "BountiesModalConstants" /* 14815 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "utils/PlatformUtils" /* 1370 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import module_683_mod from "module_683" /* 683 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let set;

let c10;
let c9;
let closure_12;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
({ View: hasOwnProperty, StyleSheet: metroRequire, ActivityIndicator: metroImportDefault, Pressable: metroImportAll } = react_native);
({ getBountyVideoEndPeekClipHeight: c9, getBountyVideoEndPeekScale: c10 } = BountiesModalConstants);
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let num = 0;
if (PlatformUtils.isAndroid()) {
  num = 150;
}
const contentInsets = { top: 48, bottom: 16, left: 16, right: 16 };
const lg = nativeDefault.radii.lg;
const LinearGradient = ReanimatedRexport.createAnimatedComponent(LinearGradientDefault);
const start = { x: 0, y: 0 };
const end = { x: 0, y: 1 };
let module_683 = module_683_mod;
let items = [, ];
const importDefaultResult1Result = module_683(nativeDefault.unsafe_rawColors.PLUM_23);
const alphaResult = importDefaultResult1Result.alpha(0.4);
items[0] = alphaResult.hex();
module_683 = module_683_mod;
const importDefaultResult2Result = module_683(nativeDefault.unsafe_rawColors.PLUM_23);
const alphaResult1 = importDefaultResult2Result.alpha(0);
items[1] = alphaResult1.hex();
let closure_21 = createStyles.createStyles(() => {
  let obj2;
  let obj3;
  let obj4;
  let rect;
  let rect1;
  const obj = { videoContainer: obj2, leftRow: rect, progress: rect1, poster: obj3, scrimGradient: obj4 };
  obj2 = { overflow: "hidden", borderRadius: lg };
  const merged = Object.assign(metroRequire.absoluteFillObject);
  rect = { position: "absolute", top: nativeDefault.space.PX_8, left: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  rect1 = { position: "absolute", bottom: 0, height: BountiesModalProgress.PROGRESS_BAR_HEIGHT, left: lg, right: lg };
  obj3 = { backgroundColor: "#000000", justifyContent: "center", alignItems: "center" };
  const merged1 = Object.assign(metroRequire.absoluteFillObject);
  obj4 = { bottom: undefined, height: 70 };
  const merged2 = Object.assign(metroRequire.absoluteFillObject);
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
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((height) => {
  let balanceWidgetPillResetKey;
  let bounty;
  let closure_6;
  let closure_7;
  let closure_9;
  let handleVideoEnd;
  let handleVideoError;
  let handleVideoPaused;
  let handleVideoProgress;
  let handleVideoResumed;
  let initialProgress;
  let isActive;
  let isCompleted;
  let isCtaVisible;
  let isEndCardVisible;
  let isProgressBarVisible;
  let isRecapPageRevealed;
  let isScrollIndicatorEnabled;
  let isScrollingInBoundsSharedValue;
  let normalizedProgress;
  let obj6;
  let onBuffer;
  let onFirstFrame;
  let onLoadStart;
  let onPlayerStateChange;
  let onVideoTracks;
  let orbsBalance;
  let playerRef;
  let ref;
  let renderEndCard;
  let repeat;
  let rewardRemainingSeconds;
  let rewardTotalSeconds;
  let shouldLoadHls;
  let sourceQuestContent;
  let width;
  let obj = handleVideoProgress(onFirstFrame[14]);
  const cResult = obj.c(108);
  ({ bounty, sourceQuestContent, isCompleted, isCtaVisible, isEndCardVisible, isScrollIndicatorEnabled, isProgressBarVisible, orbsBalance, handleVideoEnd, handleVideoProgress } = height);
  ({ handleVideoPaused, handleVideoResumed, handleVideoError } = height);
  ({ onLoadStart, onBuffer, onFirstFrame } = height);
  ({ onVideoTracks, rewardRemainingSeconds, rewardTotalSeconds, normalizedProgress, initialProgress, repeat, isActive, isRecapPageRevealed, isScrollingInBoundsSharedValue } = height);
  ({ renderEndCard, playerRef, onPlayerStateChange, balanceWidgetPillResetKey, shouldLoadHls, width } = height);
  height = height.height;
  const softDownloadCapsEnabled = height.softDownloadCapsEnabled;
  let tmp4 = undefined !== isScrollIndicatorEnabled && isScrollIndicatorEnabled;
  let tmp5 = undefined !== isActive && isActive;
  StyleSheet = tmp5;
  let tmp8 = undefined !== softDownloadCapsEnabled && softDownloadCapsEnabled;
  const tmp6 = undefined !== isRecapPageRevealed && isRecapPageRevealed;
  let tmp9 = closure_21();
  if (tmp8) {
    tmp8 = !tmp5;
  }
  [r10056, closure_7] = isScrollingInBoundsSharedValue(width.useState(false), 2);
  isScrollingInBoundsSharedValue(width.useState(false), 2);
  const tmp12 = isScrollingInBoundsSharedValue(width.useState(false), 2);
  const first = tmp12[0];
  getBountyVideoEndPeekClipHeight = tmp14;
  getBountyVideoEndPeekScale = width.useRef(null);
  const tmpResult = handleVideoProgress(onFirstFrame[8]);
  const sharedValue = tmpResult.useSharedValue(1);
  if (cResult[0] === bounty) {
    if (cResult[1] === height) {
      let tmp25;
      let tmp26;
      const tmpResult7 = handleVideoProgress(onFirstFrame[15]);
      const token = tmpResult7.useToken(handleVideoError(onFirstFrame[7]).colors.TEXT_DEFAULT);
      const _HermesInternal = HermesInternal;
      const combined = "" + bounty.id + ":" + tmp7;
      const tmp10Result = isScrollingInBoundsSharedValue(width.useState(combined), 2);
      if (tmp10Result[0] !== combined) {
        tmp10Result[1](combined);
        tmp12[1](false);
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
        num = 4;
        cResult[4] = ke;
        tmp25 = ke;
      } else {
        tmp25 = cResult[4];
      }
      if (cResult[5] !== combined) {
        items = [combined];
        cResult[5] = combined;
        cResult[6] = items;
        tmp26 = items;
      } else {
        tmp26 = cResult[6];
      }
      const effect = width.useEffect(tmp25, tmp26);
      if (cResult[7] === first) {
        let tmp28;
        let tmp29;
        let tmp32;
        if (cResult[8] === sharedValue) {
          tmp28 = cResult[9];
          tmp29 = cResult[10];
        }
        const effect1 = width.useEffect(tmp29, tmp28);
        const _Symbol2 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class Fe {
            constructor() {
              if (null != ref.current) {
                const _clearTimeout = clearTimeout;
                clearTimeout(ref.current);
                ref.current = null;
              }
              closure_9(true);
            }
          }
          cResult[11] = Fe;
          tmp32 = Fe;
        } else {
          class Fe {
            constructor() {
              if (null != ref.current) {
                const _clearTimeout = clearTimeout;
                clearTimeout(ref.current);
                ref.current = null;
              }
              closure_9(true);
            }
          }
        }
        Fe = tmp32;
        if (cResult[12] !== onFirstFrame) {
          class Ne {
            constructor() {
              if (onFirstFrame != null) {
                tmp();
              }
              if (null != ref.current) {
                const _clearTimeout = clearTimeout;
                clearTimeout(ref.current);
              }
              ref.current = setTimeout(() => {
                closure_1_9(true);
                ref.current = null;
              }, num);
            }
          }
          cResult[12] = onFirstFrame;
          cResult[13] = Ne;
        } else {
          class Ne {
            constructor() {
              if (onFirstFrame != null) {
                tmp();
              }
              if (null != ref.current) {
                const _clearTimeout = clearTimeout;
                clearTimeout(ref.current);
              }
              ref.current = setTimeout(() => {
                closure_1_9(true);
                ref.current = null;
              }, num);
            }
          }
        }
        if (cResult[14] !== handleVideoError) {
          class Ge {
            constructor(arg0) {
              Fe();
              if (handleVideoError != null) {
                tmp2(arg0);
              }
            }
          }
          cResult[14] = handleVideoError;
          cResult[15] = Ge;
        } else {
          class Ge {
            constructor(arg0) {
              Fe();
              if (handleVideoError != null) {
                tmp2(arg0);
              }
            }
          }
        }
        if (cResult[16] !== handleVideoProgress) {
          class We {
            constructor(currentTime) {
              if (currentTime.currentTime > 0) {
                closure_7(true);
              }
              handleVideoProgress(currentTime);
            }
          }
          cResult[16] = handleVideoProgress;
          cResult[17] = We;
        } else {
          class We {
            constructor(currentTime) {
              if (currentTime.currentTime > 0) {
                closure_7(true);
              }
              handleVideoProgress(currentTime);
            }
          }
        }
        const tmpResult8 = handleVideoProgress(onFirstFrame[8]);
        class Xe {
          constructor() {
            const obj = { opacity: sharedValue.get() };
            return obj;
          }
        }
        let obj3 = { posterOpacity: sharedValue };
        Xe.__closure = obj3;
        Xe.__workletHash = 4975136521719;
        Xe.__initData = __initData;
        const animatedStyle = tmpResult8.useAnimatedStyle(Xe);
        class Ae {
          constructor() {
            if (first) {
              set = sharedValue.set;
              const obj = timing;
              const result = set(obj.withTiming(0, timingPresets.timingFast));
            }
          }
        }
        class Qe {
          constructor() {
            let value;
            if (isScrollingInBoundsSharedValue != null) {
              value = isScrollingInBoundsSharedValue.get();
            }
            num = 0;
            const withTiming = timing.withTiming;
            timing;
            if (closure_6) {
              num = 0;
              if (true !== value) {
                num = 1;
              }
            }
            const obj2 = { opacity: withTiming(num, timingPresets.timingStandard) };
            return obj2;
          }
        }
        const useAnimatedStyle = tmp38.useAnimatedStyle;
        Qe.__closure = { isScrollingInBoundsSharedValue, withTiming: handleVideoProgress(onFirstFrame[16]).withTiming, isActive: tmp5, timingStandard: handleVideoProgress(onFirstFrame[17]).timingStandard };
        Qe.__workletHash = 12676706441349;
        Qe.__initData = __initData2;
        const obj4 = { isScrollingInBoundsSharedValue, withTiming: handleVideoProgress(onFirstFrame[16]).withTiming, isActive: tmp5, timingStandard: handleVideoProgress(onFirstFrame[17]).timingStandard };
        const animatedStyle1 = useAnimatedStyle(Qe);
        const tmpResult9 = handleVideoProgress(onFirstFrame[18]);
        const bountyVideoEndAppStoreContext = tmpResult9.useBountyVideoEndAppStoreContext();
        let tmp42;
        if (tmp5) {
          class We {
            constructor(currentTime) {
              if (currentTime.currentTime > 0) {
                closure_7(true);
              }
              handleVideoProgress(currentTime);
            }
          }
          if (bountyVideoEndAppStoreContext != null) {
            class We {
              constructor(currentTime) {
                if (currentTime.currentTime > 0) {
                  closure_7(true);
                }
                handleVideoProgress(currentTime);
              }
            }
          }
          tmp42 = tmp43;
        }
        let closure_13 = tmp42;
        if (bountyVideoEndAppStoreContext != null) {
          class We {
            constructor(currentTime) {
              if (currentTime.currentTime > 0) {
                closure_7(true);
              }
              handleVideoProgress(currentTime);
            }
          }
        }
        if (undefined == null) {
          class We {
            constructor(currentTime) {
              if (currentTime.currentTime > 0) {
                closure_7(true);
              }
              handleVideoProgress(currentTime);
            }
          }
        }
        let c14 = tmp44;
        function $e() {
          if (null == closure_13) {
            return metroRequire.absoluteFillObject;
          } else {
            const value = closure_13.get();
            const tmp5 = ref(value, c14);
            const tmp9 = c9(value, width, height);
            size = { position: "absolute", top: 0, left: 0, width, height: tmp9, overflow: "hidden", borderRadius: lg, transform: items };
            items = [{ translateY: -tmp9 * (1 - tmp5) / 2 }, ];
            const obj2 = { translateY: -tmp9 * (1 - tmp5) / 2 };
            const obj3 = { scale: tmp5 };
            items[1] = obj3;
            return size;
          }
        }
        size = { videoEndPeekProgress: tmp42, StyleSheet, getBountyVideoEndPeekScale, videoEndPeekTargetScale: undefined, getBountyVideoEndPeekClipHeight, width, height, VIDEO_CONTAINER_BORDER_RADIUS: lg };
        $e.__closure = size;
        $e.__workletHash = 6241135979205;
        $e.__initData = __initData3;
        const tmpResult10 = handleVideoProgress(onFirstFrame[8]);
        const animatedStyle2 = tmpResult10.useAnimatedStyle($e);
        const tmp45 = StyleSheet;
        const tmpResult11 = handleVideoProgress(onFirstFrame[8]);
        class Ke {
          constructor() {
            if (null == closure_13) {
              return metroRequire.absoluteFillObject;
            } else {
              size = { width, height, transform: items };
              items = [{ translateY: (c9(closure_13.get(), width, height) - height) / 2 }];
              const obj2 = { translateY: (c9(closure_13.get(), width, height) - height) / 2 };
              return size;
            }
          }
        }
        const size1 = { videoEndPeekProgress: tmp42, StyleSheet, getBountyVideoEndPeekClipHeight, width, height };
        Ke.__closure = size1;
        Ke.__workletHash = 2736417945524;
        Ke.__initData = __initData4;
        const animatedStyle3 = tmpResult11.useAnimatedStyle(Ke);
        if (isCtaVisible) {
          class We {
            constructor(currentTime) {
              if (currentTime.currentTime > 0) {
                closure_7(true);
              }
              handleVideoProgress(currentTime);
            }
          }
        }
        if (true === tmp5) {
          class We {
            constructor(currentTime) {
              if (currentTime.currentTime > 0) {
                closure_7(true);
              }
              handleVideoProgress(currentTime);
            }
          }
          if (bountyVideoEndAppStoreContext != null) {
            class We {
              constructor(currentTime) {
                if (currentTime.currentTime > 0) {
                  closure_7(true);
                }
                handleVideoProgress(currentTime);
              }
            }
          }
          if (true === tmp54) {
            class We {
              constructor(currentTime) {
                if (currentTime.currentTime > 0) {
                  closure_7(true);
                }
                handleVideoProgress(currentTime);
              }
            }
          }
        }
        if (tmp4) {
          class We {
            constructor(currentTime) {
              if (currentTime.currentTime > 0) {
                closure_7(true);
              }
              handleVideoProgress(currentTime);
            }
          }
          if (bountyVideoEndAppStoreContext != null) {
            class We {
              constructor(currentTime) {
                if (currentTime.currentTime > 0) {
                  closure_7(true);
                }
                handleVideoProgress(currentTime);
              }
            }
          }
          tmp4 = true !== tmp55;
        }
        if (cResult[18] === tmp8) {
          class We {
            constructor(currentTime) {
              if (currentTime.currentTime > 0) {
                closure_7(true);
              }
              handleVideoProgress(currentTime);
            }
          }
        }
        let tmp58Result = null;
        if (undefined === shouldLoadHls || shouldLoadHls) {
          class We {
            constructor(currentTime) {
              if (currentTime.currentTime > 0) {
                closure_7(true);
              }
              handleVideoProgress(currentTime);
            }
          }
          const obj5 = { ref: playerRef, source: obj6, automaticallyWaitsToMinimizeStalling: false, maxBitRate: undefined, bufferConfig: tmp60, preferredForwardBufferDuration: undefined, initialProgress, isFullscreen: false, externallyPaused: null, style: tmp45.absoluteFillObject, contentInsets, onProgress: We, onEnd: handleVideoEnd, onPausePlayback: handleVideoPaused, onResumePlayback: handleVideoResumed, onError: Ge, onLoadStart, onBuffer, onReadyForDisplay: Ne, onVideoTracks, hideControls: isEndCardVisible, showSkipButtons: false, repeat, bufferingSpinnerPlacement: "center", onPlayerStateChange };
          obj6 = { uri: bounty.videoHls };
          const AdVideoPlayer = handleVideoProgress(onFirstFrame[19]).AdVideoPlayer;
          if (tmp8) {
            class We {
              constructor(currentTime) {
                if (currentTime.currentTime > 0) {
                  closure_7(true);
                }
                handleVideoProgress(currentTime);
              }
            }
          }
          class Xe {
            constructor() {
              const obj = { opacity: sharedValue.get() };
              return obj;
            }
          }
          if (tmp8) {
            class We {
              constructor(currentTime) {
                if (currentTime.currentTime > 0) {
                  closure_7(true);
                }
                handleVideoProgress(currentTime);
              }
            }
          }
          if (tmp8) {
            class We {
              constructor(currentTime) {
                if (currentTime.currentTime > 0) {
                  closure_7(true);
                }
                handleVideoProgress(currentTime);
              }
            }
          }
          if (tmp5) {
            class We {
              constructor(currentTime) {
                if (currentTime.currentTime > 0) {
                  closure_7(true);
                }
                handleVideoProgress(currentTime);
              }
            }
          }
          class Ae {
            constructor() {
              if (first) {
                set = sharedValue.set;
                const obj = timing;
                const result = set(obj.withTiming(0, timingPresets.timingFast));
              }
            }
          }
          class Qe {
            constructor() {
              let value;
              if (isScrollingInBoundsSharedValue != null) {
                value = isScrollingInBoundsSharedValue.get();
              }
              num = 0;
              const withTiming = timing.withTiming;
              timing;
              if (closure_6) {
                num = 0;
                if (true !== value) {
                  num = 1;
                }
              }
              const obj2 = { opacity: withTiming(num, timingPresets.timingStandard) };
              return obj2;
            }
          }
          tmp58Result = tmp58(AdVideoPlayer, obj5);
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
        cResult[36] = undefined === shouldLoadHls || shouldLoadHls;
        cResult[37] = tmp58Result;
      }
      class Ae {
        constructor() {
          if (first) {
            set = sharedValue.set;
            const obj = timing;
            const result = set(obj.withTiming(0, timingPresets.timingFast));
          }
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
    }
  }
  const size2 = { assetUrl: bounty.videoHls, width, height };
  const tmpResult12 = handleVideoProgress(onFirstFrame[6]);
  const scaledFirstFrameImageUrl = tmpResult12.getScaledFirstFrameImageUrl(size2);
  cResult[0] = bounty;
  cResult[1] = height;
  cResult[2] = width;
  cResult[3] = scaledFirstFrameImageUrl;
}) : ((bounty) => {
  let View2;
  let _undefined;
  let balanceWidgetPillResetKey;
  let c8;
  let closure_10;
  let handleVideoEnd;
  let handleVideoPaused;
  let handleVideoResumed;
  let initialProgress;
  let intl;
  let isActive;
  let isCompleted;
  let isCtaVisible;
  let isEndCardVisible;
  let isProgressBarVisible;
  let isScrollIndicatorEnabled;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items6;
  let items7;
  let items8;
  let items9;
  let normalizedProgress;
  let obj12;
  let obj19;
  let obj6;
  let obj9;
  let onBuffer;
  let onLoadStart;
  let onPlayerStateChange;
  let onVideoTracks;
  let orbsBalance;
  let playerRef;
  let prop3;
  let prop4;
  let prop5;
  let renderEndCard;
  let repeat;
  let rewardRemainingSeconds;
  let rewardTotalSeconds;
  let shouldLoadHls;
  let sourceQuestContent;
  let tmp10Result2;
  let tmp3;
  let tmp36Result4;
  let tmp42;
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
  let obj = isActive;
  const tmp2 = onFirstFrame(isActive.useState(false), 2);
  [tmp3, c8] = tmp2;
  const tmp4 = onFirstFrame(isActive.useState(false), 2);
  getBountyVideoEndPeekClipHeight = tmp4[0];
  getBountyVideoEndPeekScale = tmp6;
  ref = isActive.useRef(null);
  let obj2 = bounty(handleVideoError[8]);
  sharedValue = obj2.useSharedValue(1);
  items = [bounty, width, height];
  const memo = isActive.useMemo(() => {
    size = { assetUrl: bounty.videoHls, width, height };
    const obj = AssetUtils;
    return obj.getScaledFirstFrameImageUrl(size);
  }, items);
  const obj4 = bounty(handleVideoError[15]);
  const token = obj4.useToken(handleVideoProgress(handleVideoError[7]).colors.TEXT_DEFAULT);
  const combined = "" + bounty.id + ":" + shouldLoadHls;
  const tmp13 = onFirstFrame(isActive.useState(combined), 2);
  if (tmp13[0] !== combined) {
    tmp13[1](combined);
    tmp4[1](false);
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
      set = sharedValue.set;
      const obj = timing;
      const result = set(obj.withTiming(0, timingPresets.timingFast));
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
  const tmp7Result = bounty(handleVideoError[8]);
  class Re {
    constructor() {
      const obj = { opacity: sharedValue.get() };
      return obj;
    }
  }
  Re.__closure = { posterOpacity: sharedValue };
  Re.__workletHash = 10695366069875;
  Re.__initData = __initData5;
  const animatedStyle = tmp7Result.useAnimatedStyle(Re);
  function ke() {
    let value;
    if (isScrollingInBoundsSharedValue != null) {
      value = isScrollingInBoundsSharedValue.get();
    }
    num = 0;
    const withTiming = timing.withTiming;
    timing;
    if (isActive) {
      num = 0;
      if (true !== value) {
        num = 1;
      }
    }
    const obj2 = { opacity: withTiming(num, timingPresets.timingStandard) };
    return obj2;
  }
  const tmp7Result5 = bounty(handleVideoError[8]);
  let obj3 = { isScrollingInBoundsSharedValue, withTiming: tmp7(tmp8[16]).withTiming, isActive, timingStandard: tmp7(tmp8[17]).timingStandard };
  ke.__closure = obj3;
  ke.__workletHash = 804749945089;
  ke.__initData = __initData6;
  const animatedStyle1 = tmp7Result5.useAnimatedStyle(ke);
  const tmp7Result6 = bounty(handleVideoError[18]);
  const bountyVideoEndAppStoreContext = tmp7Result6.useBountyVideoEndAppStoreContext();
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
  const tmp7Result7 = bounty(handleVideoError[8]);
  class Te {
    constructor() {
      if (null == videoEndPeekProgress) {
        return metroRequire.absoluteFillObject;
      } else {
        const value = videoEndPeekProgress.get();
        const tmp5 = c10(value, num);
        const tmp9 = getBountyVideoEndPeekClipHeight(value, width, height);
        size = { position: "absolute", top: 0, left: 0, width, height: tmp9, overflow: "hidden", borderRadius: lg, transform: items };
        items = [{ translateY: -tmp9 * (1 - tmp5) / 2 }, ];
        const obj2 = { translateY: -tmp9 * (1 - tmp5) / 2 };
        const obj3 = { scale: tmp5 };
        items[1] = obj3;
        return size;
      }
    }
  }
  size = { videoEndPeekProgress: tmp26, StyleSheet: width, getBountyVideoEndPeekScale, videoEndPeekTargetScale: num, getBountyVideoEndPeekClipHeight, width, height, VIDEO_CONTAINER_BORDER_RADIUS: lg };
  Te.__closure = size;
  Te.__workletHash = 11435474180417;
  Te.__initData = __initData7;
  const animatedStyle2 = tmp7Result7.useAnimatedStyle(Te);
  const tmp7Result8 = bounty(handleVideoError[8]);
  class Oe {
    constructor() {
      if (null == videoEndPeekProgress) {
        return metroRequire.absoluteFillObject;
      } else {
        size = { width, height, transform: items };
        items = [{ translateY: (getBountyVideoEndPeekClipHeight(videoEndPeekProgress.get(), width, height) - height) / 2 }];
        const obj2 = { translateY: (getBountyVideoEndPeekClipHeight(videoEndPeekProgress.get(), width, height) - height) / 2 };
        return size;
      }
    }
  }
  Oe.__closure = { videoEndPeekProgress: tmp26, StyleSheet: width, getBountyVideoEndPeekClipHeight, width, height };
  Oe.__workletHash = 8683364100408;
  Oe.__initData = __initData8;
  let prop1 = null;
  const animatedStyle3 = tmp7Result8.useAnimatedStyle(Oe);
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
  const obj5 = { style: animatedStyle2, children: sharedValue(View2, obj6) };
  const View = tmp10(tmp8[8]).View;
  let tmp36Result = null;
  obj6 = { style: animatedStyle3, children: items12 };
  const obj7 = { style: tmp.videoContainer, children: items6 };
  View2 = tmp10(tmp8[8]).View;
  const tmp35 = callback;
  const tmp37 = isScrollingInBoundsSharedValue;
  if (shouldLoadHls) {
    const obj8 = { ref: playerRef, source: obj9, automaticallyWaitsToMinimizeStalling: false, maxBitRate: prop3, bufferConfig: prop4, preferredForwardBufferDuration: prop5, initialProgress, isFullscreen: false, externallyPaused: tmp42, style: width.absoluteFillObject, contentInsets: num, onProgress: callback3, onEnd: handleVideoEnd, onPausePlayback: handleVideoPaused, onResumePlayback: handleVideoResumed, onError: callback2, onLoadStart, onBuffer, onReadyForDisplay: callback1, onVideoTracks, hideControls: isEndCardVisible, showSkipButtons: false, repeat, bufferingSpinnerPlacement: "center", onPlayerStateChange };
    prop3 = undefined;
    obj9 = { uri: bounty.videoHls };
    const AdVideoPlayer = tmp7(tmp8[19]).AdVideoPlayer;
    if (flag2) {
      prop3 = tmp7(tmp8[20]).SOFT_CAP_PRELOAD_MAX_BITRATE;
    }
    prop4 = undefined;
    if (flag2) {
      prop4 = tmp7(tmp8[20]).SOFT_CAP_PRELOAD_BUFFER_CONFIG;
    }
    prop5 = undefined;
    if (flag2) {
      prop5 = tmp7(tmp8[20]).SOFT_CAP_PRELOAD_FORWARD_BUFFER_SEC;
    }
    tmp42 = !isActive;
    if (isActive) {
      tmp42 = isEndCardVisible;
    }
    if (!tmp42) {
      tmp42 = flag;
    }
    tmp36Result = tmp36(AdVideoPlayer, obj8);
  }
  items6 = [tmp36Result, , , , , , ];
  if (null != memo) {
    const obj10 = { style: items7, pointerEvents: "none", children: items8 };
    items7 = [tmp.poster, animatedStyle];
    const View3 = tmp10(tmp8[8]).View;
    const obj11 = { style: width.absoluteFillObject, source: obj12, resizeMode: "cover" };
    obj12 = { uri: memo };
    items8 = [ref(handleVideoProgress(handleVideoError[21]), obj11), ];
    let tmp36Result3 = !getBountyVideoEndPeekClipHeight;
    if (tmp36Result3) {
      const obj13 = { animating: true, size: "small", color: token };
      tmp36Result3 = tmp36(height, obj13);
    }
    items8[1] = tmp36Result3;
    tmp36Result4 = tmp34(View3, obj10);
  } else {
    const obj14 = { style: items9, pointerEvents: "none" };
    items9 = [tmp.poster, animatedStyle];
    tmp36Result4 = tmp36(tmp10(tmp8[8]).View, obj14);
  }
  items6[1] = tmp36Result4;
  const obj15 = { start, end, style: items10, colors: items, pointerEvents: "none" };
  items10 = [tmp.scrimGradient, animatedStyle1];
  items6[2] = ref(LinearGradient, obj15);
  let renderEndCardResult;
  if (renderEndCard != null) {
    renderEndCardResult = renderEndCard();
  }
  items6[3] = renderEndCardResult;
  let tmp36Result5 = null;
  if (null != prop1) {
    const obj16 = { accessibilityRole: "button", accessibilityLabel: intl.string(bounty(handleVideoError[22]).t.dcl9MQ), onPress: prop1, style: width.absoluteFillObject };
    intl = tmp7(tmp8[22]).intl;
    tmp36Result5 = tmp36(c8, obj16);
  }
  items6[4] = tmp36Result5;
  if (isScrollIndicatorEnabled) {
    const obj17 = { opacityStyle: animatedStyle1, enabled: isActive, isEndCardVisible };
    const tmp10Result = handleVideoProgress(handleVideoError[23]);
    if (isActive) {
      isActive = tmp3;
    }
    isScrollIndicatorEnabled = tmp36(tmp10Result, obj17);
  }
  items6[5] = isScrollIndicatorEnabled;
  const obj18 = { style: items11, pointerEvents: "box-none", children: ref(tmp10Result2, obj19) };
  items11 = [width.absoluteFillObject, animatedStyle1];
  const View4 = tmp10(tmp8[8]).View;
  obj19 = { bounty, visible: isCtaVisible, sourceQuestContent };
  tmp10Result2 = handleVideoProgress(handleVideoError[24]);
  if (isCtaVisible) {
    isCtaVisible = !isEndCardVisible;
  }
  const obj20 = { children: items14 };
  items6[6] = ref(View4, obj18);
  items12 = [sharedValue(tmp37, obj7), ];
  const obj21 = { style: items13, children: ref(handleVideoProgress(handleVideoError[12]), { progress: normalizedProgress, visible: isProgressBarVisible }) };
  items13 = [tmp.progress, animatedStyle1];
  const View5 = tmp10(tmp8[8]).View;
  items12[1] = ref(View5, obj21);
  items14 = [ref(View, obj5), ];
  const obj22 = { style: items15, children: items16 };
  items15 = [tmp.leftRow, animatedStyle1];
  const View6 = tmp10(tmp8[8]).View;
  items16 = [ref(handleVideoProgress(handleVideoError[25]), { isCompleted, totalSeconds: rewardTotalSeconds, remainingSeconds: rewardRemainingSeconds }), ref(bounty(handleVideoError[26]).BalanceWidgetPill, { balance: orbsBalance }, balanceWidgetPillResetKey)];
  items14[1] = sharedValue(View6, obj22);
  return sharedValue(tmp35, obj20);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountyVideo.tsx");

export const BountyVideo = tmp7;