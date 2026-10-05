// === Module 9100: StreamQualityLiveIndicator ===

// Module 9100 (StreamQualityLiveIndicator)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import native from "native" /* 1188 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import timing from "timing" /* 4891 */;
import Constants2 from "Constants" /* 4915 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 8867 */;
import openPremiumModalDefault from "openPremiumModal" /* 8914 */;
import react from "react" /* 19 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let c10;
let c9;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
({ PremiumTypes: metroRequire, PremiumUpsellTypes: metroImportDefault } = PremiumConstants);
const ResolutionTypes = Constants2.ResolutionTypes;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { liveIndicator: { flexDirection: "row", alignItems: "center", height: 18 }, liveTag: obj2, qualityTag: obj3, qualityTagText: { color: "#fff", textAlign: "center", fontWeight: "700" }, reducedQualityTagText: obj4, nitroWheel: { width: 20, marginLeft: -4 } };
obj2 = { borderBottomLeftRadius: nativeDefault.radii.none, borderTopLeftRadius: nativeDefault.radii.none, height: 18, textAlign: "center" };
createStyles = createStyles.createStyles;
obj3 = { borderBottomLeftRadius: nativeDefault.radii.sm, borderTopLeftRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_800, opacity: 0.8, paddingLeft: 8, paddingRight: 4, flexDirection: "row", alignItems: "center", height: 18 };
obj4 = { color: nativeDefault.unsafe_rawColors.PRIMARY_300 };
let closure_11 = createStyles(obj);
const __initData = { code: "function StreamQualityLiveIndicatorTsx1(){const{withTiming,reveal,STANDARD_EASING}=this.__closure;return{opacity:withTiming(reveal?1:0,{easing:STANDARD_EASING,duration:250})};}" };
const __initData2 = { code: "function StreamQualityLiveIndicatorTsx2(){const{withTiming,reveal,STANDARD_EASING}=this.__closure;return{opacity:withTiming(reveal?1:0,{easing:STANDARD_EASING,duration:250})};}" };
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let _location;
  let flag;
  let flag2;
  let has_premium_stream_fps;
  let has_premium_stream_resolution;
  let participant;
  let reveal;
  let style;
  let tmp28;
  let tmp = _require;
  let tmp2 = reveal;
  let obj = require("react");
  const cResult = obj.c(50);
  ({ participant, style } = arg0);
  const tmp4 = closure_11();
  let obj2 = _location;
  reveal = _location.useContext(require("RevealProvider").RevealContext).reveal;
  const obj3 = require("analytics");
  _location = obj3.useAnalyticsContext().location;
  const analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  const ref = _location.useRef(false);
  const fn = function c() {
    let obj2;
    let num = 0;
    const withTiming = timing.withTiming;
    timing;
    if (reveal) {
      num = 1;
    }
    const obj = { opacity: withTiming(num, obj2) };
    obj2 = { easing: native.STANDARD_EASING, duration: 250 };
    return obj;
  };
  const obj4 = require("ReanimatedRexport");
  fn.__closure = { withTiming: require("timing").withTiming, reveal, STANDARD_EASING: require("native").STANDARD_EASING };
  fn.__workletHash = 14676679064575;
  fn.__initData = __initData;
  ({ withTiming: require("timing").withTiming, reveal, STANDARD_EASING: require("native").STANDARD_EASING });
  const animatedStyle = obj4.useAnimatedStyle(fn);
  const obj6 = require("StreamQualityUtils");
  const maxQuality = obj6.useMaxQuality(participant);
  const tmp8 = null != require("useStreamError")(participant);
  if (cResult[0] !== maxQuality) {
    try {
      const tmpResult = tmp(tmp2[16]);
      const isPremiumFPSResult = tmpResult.isPremiumFPS(maxQuality);
      flag = isPremiumFPSResult;
      _require = isPremiumFPSResult;
    } catch (err) {
      flag = false;
      _require = false;
    }
    try {
      const tmpResult4 = tmp(tmp2[16]);
      const isPremiumResolutionResult = tmpResult4.isPremiumResolution(maxQuality);
      flag2 = isPremiumResolutionResult;
      importDefault = isPremiumResolutionResult;
    } catch (err) {
      flag2 = false;
      importDefault = false;
    }
    let num = 0;
    cResult[0] = maxQuality;
    cResult[1] = flag;
    cResult[2] = flag2;
  } else {
    flag = tmp9;
    _require = tmp9;
    flag2 = tmp10;
    importDefault = tmp10;
  }
  let closure_6 = tmp15;
  if (cResult[3] === analyticsLocations) {
    if (cResult[4] === flag) {
      if (cResult[5] === (flag || flag2)) {
        let tmp18;
        if (cResult[6] === flag2) {
          tmp18 = cResult[7];
        }
        if (cResult[8] === analyticsLocations) {
          if (cResult[9] === flag) {
            if (cResult[10] === (flag || flag2)) {
              let tmp21;
              if (cResult[11] === flag2) {
                tmp21 = cResult[12];
              }
              const effect = obj2.useEffect(tmp18, tmp21);
              if (cResult[13] === _location) {
                let tmp25;
                if (cResult[14] === analyticsLocations) {
                  tmp25 = cResult[15];
                }
                const tmp5Result = require("PremiumUtils");
                tmp5Result.isPremium(participant.user, closure_6.TIER_1);
                const tmp26 = closure_6;
                class Q {
                  constructor() {
                    const obj = { analyticsLocation: _location, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_0_LEADING };
                    const tmp = openPremiumModalDefault;
                    tmp(obj);
                  }
                }
                if (tmp28) {
                  const tmp5Result5 = require("PremiumUtils");
                  tmp28 = !tmp5Result5.canStreamQuality(require("PremiumUtils").StreamQuality.MID, participant.user);
                }
                const tmp5Result6 = require("PremiumUtils");
                let isPremiumExactlyResult = tmp5Result6.isPremiumExactly(participant.user, tmp26.TIER_1);
                if (isPremiumExactlyResult) {
                  let type;
                  if (maxQuality != null) {
                    type = maxQuality.maxResolution.type;
                  }
                  isPremiumExactlyResult = type === ResolutionTypes.SOURCE;
                }
                if (isPremiumExactlyResult) {
                  const tmp5Result7 = require("PremiumUtils");
                  isPremiumExactlyResult = !tmp5Result7.canStreamQuality(tmp5(tmp2[21]).StreamQuality.HIGH);
                }
                if (null == maxQuality) {
                  return null;
                } else {
                  let str = "none";
                  if (flag || flag2) {
                    if (tmp28) {
                      str = "auto";
                    } else {
                      str = "none";
                    }
                  }
                  if (cResult[16] === animatedStyle) {
                    let tmp32;
                    if (cResult[17] === style) {
                      tmp32 = cResult[18];
                    }
                    if (cResult[19] === style) {
                      let tmp34;
                      if (cResult[20] === tmp4.liveIndicator) {
                        tmp34 = cResult[21];
                      }
                      if (cResult[22] === (flag || flag2)) {
                        let tmp36;
                        if (cResult[23] === tmp4.nitroWheel) {
                          tmp36 = cResult[24];
                        }
                        let prop = null;
                        if (tmp8) {
                          prop = tmp4.reducedQualityTagText;
                        }
                        if (cResult[25] === tmp4.qualityTagText) {
                          let tmp41;
                          let tmp43;
                          let tmp45;
                          if (cResult[26] === prop) {
                            tmp41 = cResult[27];
                          }
                          if (cResult[28] !== maxQuality.maxResolution) {
                            const tmpResult5 = tmp(tmp2[16]);
                            const resolutionText = tmpResult5.getResolutionText(maxQuality.maxResolution);
                            cResult[28] = maxQuality.maxResolution;
                            class Q {
                              constructor() {
                                const obj = { analyticsLocation: _location, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_0_LEADING };
                                const tmp = openPremiumModalDefault;
                                tmp(obj);
                              }
                            }
                            cResult[29] = resolutionText;
                            tmp43 = resolutionText;
                          } else {
                            tmp43 = cResult[29];
                          }
                          if (cResult[30] !== maxQuality.maxFrameRate) {
                            const tmpResult6 = tmp(tmp2[16]);
                            const fPSText = tmpResult6.getFPSText(maxQuality.maxFrameRate);
                            cResult[30] = maxQuality.maxFrameRate;
                            class Q {
                              constructor() {
                                const obj = { analyticsLocation: _location, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_0_LEADING };
                                const tmp = openPremiumModalDefault;
                                tmp(obj);
                              }
                            }
                            cResult[31] = fPSText;
                            tmp45 = fPSText;
                          } else {
                            tmp45 = cResult[31];
                          }
                          class Q {
                            constructor() {
                              const obj = { analyticsLocation: _location, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_0_LEADING };
                              const tmp = openPremiumModalDefault;
                              tmp(obj);
                            }
                          }
                          const combined = "" + tmp43 + " " + tmp45;
                          if (cResult[32] === tmp41) {
                            let tmp49;
                            if (cResult[33] === combined) {
                              tmp49 = cResult[34];
                            }
                            if (cResult[35] === tmp4.qualityTag) {
                              if (cResult[36] === tmp49) {
                                let tmp52;
                                let tmp57;
                                if (cResult[37] === tmp36) {
                                  tmp52 = cResult[38];
                                }
                                if (cResult[39] !== tmp4.liveTag) {
                                  const obj7 = { style: tmp4.liveTag };
                                  const tmp59 = closure_9(tmp(tmp2[15]).LiveTag, obj7);
                                  class Q {
                                    constructor() {
                                      const obj = { analyticsLocation: _location, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_0_LEADING };
                                      const tmp = openPremiumModalDefault;
                                      tmp(obj);
                                    }
                                  }
                                  cResult[39] = tmp4.liveTag;
                                  cResult[40] = tmp59;
                                  tmp57 = tmp59;
                                } else {
                                  tmp57 = cResult[40];
                                }
                                if (cResult[41] === tmp25) {
                                  if (cResult[42] === tmp52) {
                                    if (cResult[43] === tmp57) {
                                      let tmp60;
                                      if (cResult[44] === tmp34) {
                                        tmp60 = cResult[45];
                                      }
                                      if (cResult[46] === tmp60) {
                                        if (cResult[47] === str) {
                                          let tmp64;
                                          if (cResult[48] === tmp32) {
                                            tmp64 = cResult[49];
                                          }
                                          return tmp64;
                                        }
                                      }
                                      const obj8 = { pointerEvents: null, style: tmp32, children: tmp60 };
                                      class Q {
                                        constructor() {
                                          const obj = { analyticsLocation: _location, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_0_LEADING };
                                          const tmp = openPremiumModalDefault;
                                          tmp(obj);
                                        }
                                      }
                                      const tmp66 = closure_9(require("ReanimatedRexport").View, obj8);
                                      cResult[46] = tmp60;
                                      cResult[47] = str;
                                      cResult[48] = tmp32;
                                      cResult[49] = tmp66;
                                      tmp64 = tmp66;
                                    }
                                  }
                                }
                                class Q {
                                  constructor() {
                                    const obj = { analyticsLocation: _location, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_0_LEADING };
                                    const tmp = openPremiumModalDefault;
                                    tmp(obj);
                                  }
                                }
                                tmp62[1] = tmp34;
                                tmp62[2] = tmp25;
                                const items = [tmp52, tmp57];
                                tmp62[3] = items;
                                const tmp63 = closure_10(tmp(tmp2[24]).PressableOpacity, tmp62);
                                cResult[41] = tmp25;
                                cResult[42] = tmp52;
                                cResult[43] = tmp57;
                                cResult[44] = tmp34;
                                cResult[45] = tmp63;
                                tmp60 = tmp63;
                              }
                            }
                            class Q {
                              constructor() {
                                const obj = { analyticsLocation: _location, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_0_LEADING };
                                const tmp = openPremiumModalDefault;
                                tmp(obj);
                              }
                            }
                            tmp55[0] = tmp35;
                            const items1 = [tmp36, tmp49];
                            tmp55[1] = items1;
                            const tmp56 = closure_10(analyticsLocations, tmp55);
                            cResult[35] = tmp4.qualityTag;
                            cResult[36] = tmp49;
                            cResult[37] = tmp36;
                            cResult[38] = tmp56;
                            tmp52 = tmp56;
                          }
                          const obj9 = { style: tmp41, children: combined };
                          const tmp51 = closure_9(tmp(tmp2[15]).LegacyText, obj9);
                          cResult[32] = tmp41;
                          cResult[33] = combined;
                          cResult[34] = tmp51;
                          tmp49 = tmp51;
                        }
                        class Q {
                          constructor() {
                            const obj = { analyticsLocation: _location, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_0_LEADING };
                            const tmp = openPremiumModalDefault;
                            tmp(obj);
                          }
                        }
                        tmp42[0] = tmp4.qualityTagText;
                        tmp42[1] = prop;
                        cResult[25] = tmp4.qualityTagText;
                        cResult[26] = prop;
                        cResult[27] = tmp42;
                        tmp41 = tmp42;
                      }
                      let tmp37 = tmp15;
                      if (tmp37) {
                        const obj10 = { source: require("AssetRegistry"), style: null, resizeMode: "contain" };
                        const tmp5Result8 = require("FastImage");
                        class Q {
                          constructor() {
                            const obj = { analyticsLocation: _location, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_0_LEADING };
                            const tmp = openPremiumModalDefault;
                            tmp(obj);
                          }
                        }
                        tmp37 = closure_9(tmp5Result8, obj10);
                      }
                      class Q {
                        constructor() {
                          const obj = { analyticsLocation: _location, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_0_LEADING };
                          const tmp = openPremiumModalDefault;
                          tmp(obj);
                        }
                      }
                      cResult[22] = flag || flag2;
                      cResult[23] = tmp4.nitroWheel;
                      cResult[24] = tmp37;
                      tmp36 = tmp37;
                    }
                    const items2 = [tmp4.liveIndicator, ];
                    class Q {
                      constructor() {
                        const obj = { analyticsLocation: _location, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_0_LEADING };
                        const tmp = openPremiumModalDefault;
                        tmp(obj);
                      }
                    }
                    cResult[19] = style;
                    cResult[20] = tmp4.liveIndicator;
                    cResult[21] = items2;
                    tmp34 = items2;
                  }
                  class Q {
                    constructor() {
                      const obj = { analyticsLocation: _location, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_0_LEADING };
                      const tmp = openPremiumModalDefault;
                      tmp(obj);
                    }
                  }
                  tmp33[0] = style;
                  tmp33[1] = animatedStyle;
                  cResult[16] = animatedStyle;
                  cResult[17] = style;
                  cResult[18] = tmp33;
                  tmp32 = tmp33;
                }
              }
              class Q {
                constructor() {
                  const obj = { analyticsLocation: _location, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_0_LEADING };
                  const tmp = openPremiumModalDefault;
                  tmp(obj);
                }
              }
              cResult[13] = _location;
              cResult[14] = analyticsLocations;
              cResult[15] = Q;
              tmp25 = Q;
            }
          }
        }
        const items3 = [, flag || flag2, flag, flag2];
        cResult[8] = analyticsLocations;
        cResult[9] = flag;
        cResult[10] = flag || flag2;
        cResult[11] = flag2;
        cResult[12] = items3;
        tmp21 = items3;
      }
    }
  }
  const fn2 = function w() {
    const current = ref.current;
    const tmp2 = !current && closure_6;
    if (tmp2) {
      const obj2 = { type: metroImportDefault.STREAM_QUALITY_INDICATOR, has_premium_stream_fps, has_premium_stream_resolution, location_stack: analyticsLocations };
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj2);
      ref.current = true;
    }
  };
  cResult[3] = analyticsLocations;
  cResult[4] = flag;
  cResult[5] = flag || flag2;
  cResult[6] = flag2;
  cResult[7] = fn2;
  tmp18 = fn2;
}) : ((arg0) => {
  let PressableOpacity;
  let flag;
  let flag2;
  let has_premium_stream_fps;
  let has_premium_stream_resolution;
  let items2;
  let items3;
  let items4;
  let items6;
  let obj7;
  let participant;
  let style;
  ({ participant, style } = arg0);
  _require = undefined;
  importDefault = undefined;
  let reveal;
  let _location;
  let closure_6;
  let tmp = closure_11();
  let obj = _location;
  let tmp2 = _require;
  const tmp3 = reveal;
  reveal = _location.useContext(require("RevealProvider").RevealContext).reveal;
  let obj2 = require("analytics");
  _location = obj2.useAnalyticsContext().location;
  const analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  const ref = _location.useRef(false);
  const obj3 = require("ReanimatedRexport");
  class R {
    constructor() {
      let obj2;
      let num = 0;
      const withTiming = timing.withTiming;
      timing;
      if (reveal) {
        num = 1;
      }
      const obj = { opacity: withTiming(num, obj2) };
      obj2 = { easing: native.STANDARD_EASING, duration: 250 };
      return obj;
    }
  }
  R.__closure = { withTiming: require("timing").withTiming, reveal, STANDARD_EASING: require("native").STANDARD_EASING };
  R.__workletHash = 255884147388;
  R.__initData = __initData2;
  ({ withTiming: require("timing").withTiming, reveal, STANDARD_EASING: require("native").STANDARD_EASING });
  const animatedStyle = obj3.useAnimatedStyle(R);
  const obj5 = require("StreamQualityUtils");
  const maxQuality = obj5.useMaxQuality(participant);
  const tmp7 = null != require("useStreamError")(participant);
  try {
    const tmp2Result = tmp2(tmp3[16]);
    const isPremiumFPSResult = tmp2Result.isPremiumFPS(maxQuality);
    flag = isPremiumFPSResult;
    _require = isPremiumFPSResult;
  } catch (err) {
    flag = false;
    _require = false;
  }
  try {
    const tmp2Result4 = tmp2(tmp3[16]);
    const isPremiumResolutionResult = tmp2Result4.isPremiumResolution(maxQuality);
    flag2 = isPremiumResolutionResult;
    importDefault = isPremiumResolutionResult;
  } catch (err) {
    flag2 = false;
    importDefault = false;
  }
  let tmp20Result = flag || flag2;
  closure_6 = tmp20Result;
  const items = [analyticsLocations, tmp20Result, flag, flag2];
  const effect = obj.useEffect(() => {
    const current = ref.current;
    const tmp2 = !current && closure_6;
    if (tmp2) {
      const obj2 = { type: metroImportDefault.STREAM_QUALITY_INDICATOR, has_premium_stream_fps, has_premium_stream_resolution, location_stack: analyticsLocations };
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj2);
      ref.current = true;
    }
  }, items);
  const items1 = [_location, analyticsLocations];
  const callback = obj.useCallback(() => {
    const obj = { analyticsLocation: _location, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_0_LEADING };
    const tmp = openPremiumModalDefault;
    tmp(obj);
  }, items1);
  const tmp4Result = require("PremiumUtils");
  let tmp15 = !tmp4Result.isPremium(participant.user, closure_6.TIER_1);
  tmp4Result.isPremium(participant.user, closure_6.TIER_1);
  const tmp13 = closure_6;
  if (tmp15) {
    const tmp4Result5 = require("PremiumUtils");
    tmp15 = !tmp4Result5.canStreamQuality(tmp4(tmp3[21]).StreamQuality.MID, participant.user);
  }
  const tmp4Result6 = require("PremiumUtils");
  let isPremiumExactlyResult = tmp4Result6.isPremiumExactly(participant.user, tmp13.TIER_1);
  if (isPremiumExactlyResult) {
    let type;
    if (maxQuality != null) {
      type = maxQuality.maxResolution.type;
    }
    isPremiumExactlyResult = type === ResolutionTypes.SOURCE;
  }
  if (isPremiumExactlyResult) {
    const tmp4Result7 = require("PremiumUtils");
    isPremiumExactlyResult = !tmp4Result7.canStreamQuality(tmp4(tmp3[21]).StreamQuality.HIGH);
  }
  let tmp20Result2 = null;
  if (null != maxQuality) {
    let str2 = "none";
    View = tmp4(tmp3[13]).View;
    if (tmp20Result) {
      if (tmp15) {
        str2 = "auto";
      } else {
        str2 = "none";
      }
    }
    const obj6 = { pointerEvents: str2, style: items2, children: closure_10(PressableOpacity, obj7) };
    items2 = [style, animatedStyle];
    obj7 = { accessibilityRole: "button", style: items3, onPress: callback, children: items6 };
    items3 = [tmp.liveIndicator, style];
    const obj8 = { style: tmp.qualityTag, children: items4 };
    PressableOpacity = tmp2(tmp3[24]).PressableOpacity;
    const tmp22 = analyticsLocations;
    if (tmp20Result) {
      const obj9 = { source: require("AssetRegistry"), style: tmp.nitroWheel, resizeMode: "contain" };
      const tmp4Result8 = require("FastImage");
      tmp20Result = closure_9(tmp4Result8, obj9);
    }
    items4 = [tmp20Result, ];
    const items5 = [tmp.qualityTagText, ];
    let prop = null;
    const LegacyText = tmp2(tmp3[15]).LegacyText;
    if (tmp7) {
      prop = tmp.reducedQualityTagText;
    }
    class R {
      constructor() {
        let obj2;
        let num = 0;
        const withTiming = timing.withTiming;
        timing;
        if (reveal) {
          num = 1;
        }
        const obj = { opacity: withTiming(num, obj2) };
        obj2 = { easing: native.STANDARD_EASING, duration: 250 };
        return obj;
      }
    }
    items5[1] = prop;
    tmp25[0] = items5;
    const tmp2Result5 = tmp2(tmp3[16]);
    const resolutionText = tmp2Result5.getResolutionText(maxQuality.maxResolution);
    const _HermesInternal = HermesInternal;
    const tmp2Result6 = tmp2(tmp3[16]);
    tmp25[1] = "" + resolutionText + " " + tmp2Result6.getFPSText(maxQuality.maxFrameRate);
    items4[1] = closure_9(LegacyText, tmp25);
    items6 = [closure_10(tmp22, obj8), ];
    const obj10 = { style: tmp.liveTag };
    items6[1] = closure_9(tmp2(tmp3[15]).LiveTag, obj10);
    tmp20Result2 = closure_9(View, obj6);
  }
  return tmp20Result2;
});
const result = size.fileFinishedImporting("modules/go_live/native/StreamQualityLiveIndicator.tsx");

export default tmp5;