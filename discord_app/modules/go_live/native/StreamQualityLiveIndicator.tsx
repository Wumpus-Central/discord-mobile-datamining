// === Module 9100: StreamQualityLiveIndicator ===

// Module 9100 (StreamQualityLiveIndicator)
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import timing from "timing" /* 4891 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 8867 */;
import openPremiumModalDefault from "openPremiumModal" /* 8914 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const AnalyticEvents = fn(1085).AnalyticEvents;
const PremiumConstants = fn(1379);
({ PremiumTypes: metroRequire, PremiumUpsellTypes: closure_7 } = PremiumConstants);
const ResolutionTypes = fn(4915).ResolutionTypes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { liveIndicator: { flexDirection: "row", alignItems: "center", height: 18 }, liveTag: { borderBottomLeftRadius: nativeDefault.radii.none, borderTopLeftRadius: nativeDefault.radii.none, height: 18, textAlign: "center" }, qualityTag: null, qualityTagText: null, reducedQualityTagText: null, nitroWheel: null };
let obj3 = { borderBottomLeftRadius: nativeDefault.radii.none, borderTopLeftRadius: nativeDefault.radii.none, height: 18, textAlign: "center" };
obj2.qualityTag = { borderBottomLeftRadius: nativeDefault.radii.sm, borderTopLeftRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_800, opacity: 0.8, paddingLeft: 8, paddingRight: 4, flexDirection: "row", alignItems: "center", height: 18 };
obj2.qualityTagText = { color: "#fff", textAlign: "center", fontWeight: "700" };
let obj4 = { borderBottomLeftRadius: nativeDefault.radii.sm, borderTopLeftRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_800, opacity: 0.8, paddingLeft: 8, paddingRight: 4, flexDirection: "row", alignItems: "center", height: 18 };
obj2.reducedQualityTagText = { color: nativeDefault.unsafe_rawColors.PRIMARY_300 };
obj2.nitroWheel = { width: 20, marginLeft: -4 };
let closure_11 = createStyles.createStyles(obj2);
const __initData = { code: "function StreamQualityLiveIndicatorTsx1(){const{withTiming,reveal,STANDARD_EASING}=this.__closure;return{opacity:withTiming(reveal?1:0,{easing:STANDARD_EASING,duration:250})};}" };
const __initData2 = { code: "function StreamQualityLiveIndicatorTsx2(){const{withTiming,reveal,STANDARD_EASING}=this.__closure;return{opacity:withTiming(reveal?1:0,{easing:STANDARD_EASING,duration:250})};}" };
const ReactCompilerGating = fn(558);
let obj5 = { color: nativeDefault.unsafe_rawColors.PRIMARY_300 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/go_live/native/StreamQualityLiveIndicator.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(50);
  ({ participant, style } = arg0);
  const tmp5 = closure_11();
  reveal = _location.useContext(require("RevealProvider").RevealContext).reveal;
  let obj = require("c");
  let obj2 = _location;
  _location = require("analytics").useAnalyticsContext().location;
  const analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  _location.useRef(false);
  const obj3 = require("analytics");
  const fn = function c() {
    let num = 0;
    if (reveal) {
      num = 1;
    }
    const obj2 = { opacity: null };
    const obj = timing;
    obj2.opacity = obj.withTiming(num, { easing: native.STANDARD_EASING, duration: 250 });
    return obj2;
  };
  const obj4 = require("ReanimatedRexport");
  fn.__closure = { withTiming: require("timing").withTiming, reveal, STANDARD_EASING: require("native").STANDARD_EASING };
  fn.__workletHash = 14676679064575;
  fn.__initData = __initData;
  const animatedStyle = obj4.useAnimatedStyle(fn);
  const obj5 = { withTiming: require("timing").withTiming, reveal, STANDARD_EASING: require("native").STANDARD_EASING };
  const maxQuality = require("StreamQualityUtils").useMaxQuality(participant);
  if (cResult[0] !== maxQuality) {
    try {
      const isPremiumFPSResult = tmp2(tmp3[16]).isPremiumFPS(maxQuality);
      let flag = isPremiumFPSResult;
      _require = isPremiumFPSResult;
      try {
        const isPremiumResolutionResult = tmp2(tmp3[16]).isPremiumResolution(maxQuality);
        let flag2 = isPremiumResolutionResult;
        importDefault = isPremiumResolutionResult;
        cResult[0] = maxQuality;
        cResult[1] = flag;
        cResult[2] = flag2;
        const tmp2Result4 = tmp2(tmp3[16]);
      } catch (err) {
        flag2 = false;
        importDefault = 2;
      }
      const tmp2Result = tmp2(tmp3[16]);
    } catch (err) {
      flag = false;
      _require = tmp;
    }
  } else {
    _require = tmp10;
    importDefault = tmp12;
    let tmp18 = tmp10;
    if (!cResult[1]) {
      tmp18 = tmp12;
    }
    TIER_1 = tmp18;
    if (cResult[3] === analyticsLocations) {
      if (cResult[4] === tmp11) {
        if (cResult[5] === tmp18) {
          if (cResult[6] === tmp13) {
            let tmp21 = cResult[7];
          }
          if (cResult[8] === analyticsLocations) {
            if (cResult[9] === tmp11) {
              if (cResult[10] === tmp18) {
                if (cResult[11] === tmp13) {
                  let tmp26 = cResult[12];
                }
                const effect = obj2.useEffect(tmp21, tmp26);
                if (cResult[13] === _location) {
                  if (cResult[14] === analyticsLocations) {
                    let tmp30 = cResult[15];
                  }
                  const tmp31 = TIER_1;
                  const tmp6Result = tmp6(tmp3[21]);
                  class Q {
                    constructor() {
                      obj = { analyticsLocation: location, analyticsLocations, premiumFeatureCardOrder: null };
                      tmp = closure_1(closure_2[19]);
                      obj.premiumFeatureCardOrder = closure_0(closure_2[20]).PremiumFeatureCardOrder.TIER_0_LEADING;
                      tmpResult = tmp(obj);
                      return;
                    }
                  }
                  if (!isPremiumResult) {
                    const tmp6Result5 = tmp6(tmp3[21]);
                    const tmp33 = !tmp6(tmp3[21]).canStreamQuality(tmp6(tmp3[21]).StreamQuality.MID, participant.user);
                  }
                  isPremiumResult = tmp6(tmp3[21]).isPremium(participant.user, TIER_1.TIER_1);
                  let isPremiumExactlyResult = tmp6(tmp3[21]).isPremiumExactly(participant.user, tmp31.TIER_1);
                  if (isPremiumExactlyResult) {
                    let type;
                    if (maxQuality != null) {
                      type = maxQuality.maxResolution.type;
                    }
                    isPremiumExactlyResult = type === ResolutionTypes.SOURCE;
                  }
                  if (isPremiumExactlyResult) {
                    isPremiumExactlyResult = !tmp6(tmp3[21]).canStreamQuality(tmp6(tmp3[21]).StreamQuality.HIGH);
                    const tmp6Result7 = tmp6(tmp3[21]);
                  }
                  if (null == maxQuality) {
                    return null;
                  } else {
                    let str = "none";
                    if (tmp18) {
                      if (tmp33) {
                        str = "auto";
                      } else {
                        str = "none";
                      }
                    }
                    if (cResult[16] === animatedStyle) {
                      if (cResult[17] === style) {
                        let tmp37 = cResult[18];
                      }
                      if (cResult[19] === style) {
                        if (cResult[20] === tmp5.liveIndicator) {
                          let tmp39 = cResult[21];
                        }
                        if (cResult[22] === tmp18) {
                          if (cResult[23] === tmp5.nitroWheel) {
                            let tmp41 = cResult[24];
                          }
                          let prop = null;
                          if (tmp9) {
                            prop = tmp5.reducedQualityTagText;
                          }
                          if (cResult[25] === tmp5.qualityTagText) {
                            if (cResult[26] === prop) {
                              let tmp46 = cResult[27];
                            }
                            if (cResult[28] !== maxQuality.maxResolution) {
                              const resolutionText = tmp2(tmp3[16]).getResolutionText(maxQuality.maxResolution);
                              cResult[28] = maxQuality.maxResolution;
                              class Q {
                                constructor() {
                                  obj = { analyticsLocation: location, analyticsLocations, premiumFeatureCardOrder: null };
                                  tmp = closure_1(closure_2[19]);
                                  obj.premiumFeatureCardOrder = closure_0(closure_2[20]).PremiumFeatureCardOrder.TIER_0_LEADING;
                                  tmpResult = tmp(obj);
                                  return;
                                }
                              }
                              cResult[29] = resolutionText;
                              let tmp48 = resolutionText;
                              const tmp2Result5 = tmp2(tmp3[16]);
                            } else {
                              tmp48 = cResult[29];
                            }
                            if (cResult[30] !== maxQuality.maxFrameRate) {
                              const fPSText = tmp2(tmp3[16]).getFPSText(maxQuality.maxFrameRate);
                              cResult[30] = maxQuality.maxFrameRate;
                              class Q {
                                constructor() {
                                  obj = { analyticsLocation: location, analyticsLocations, premiumFeatureCardOrder: null };
                                  tmp = closure_1(closure_2[19]);
                                  obj.premiumFeatureCardOrder = closure_0(closure_2[20]).PremiumFeatureCardOrder.TIER_0_LEADING;
                                  tmpResult = tmp(obj);
                                  return;
                                }
                              }
                              cResult[31] = fPSText;
                              let tmp50 = fPSText;
                              const tmp2Result6 = tmp2(tmp3[16]);
                            } else {
                              tmp50 = cResult[31];
                            }
                            class Q {
                              constructor() {
                                obj = { analyticsLocation: location, analyticsLocations, premiumFeatureCardOrder: null };
                                tmp = closure_1(closure_2[19]);
                                obj.premiumFeatureCardOrder = closure_0(closure_2[20]).PremiumFeatureCardOrder.TIER_0_LEADING;
                                tmpResult = tmp(obj);
                                return;
                              }
                            }
                            const combined = "" + tmp48 + " " + tmp50;
                            if (cResult[32] === tmp46) {
                              if (cResult[33] === combined) {
                                let tmp54 = cResult[34];
                              }
                              if (cResult[35] === tmp5.qualityTag) {
                                if (cResult[36] === tmp54) {
                                  if (cResult[37] === tmp41) {
                                    let tmp57 = cResult[38];
                                  }
                                  if (cResult[39] !== tmp5.liveTag) {
                                    const obj7 = { style: tmp5.liveTag };
                                    const tmp64 = closure_9(tmp2(tmp3[15]).LiveTag, obj7);
                                    class Q {
                                      constructor() {
                                        obj = { analyticsLocation: location, analyticsLocations, premiumFeatureCardOrder: null };
                                        tmp = closure_1(closure_2[19]);
                                        obj.premiumFeatureCardOrder = closure_0(closure_2[20]).PremiumFeatureCardOrder.TIER_0_LEADING;
                                        tmpResult = tmp(obj);
                                        return;
                                      }
                                    }
                                    cResult[39] = tmp5.liveTag;
                                    cResult[40] = tmp64;
                                    let tmp62 = tmp64;
                                  } else {
                                    tmp62 = cResult[40];
                                  }
                                  if (cResult[41] === tmp30) {
                                    if (cResult[42] === tmp57) {
                                      if (cResult[43] === tmp62) {
                                        if (cResult[44] === tmp39) {
                                          let tmp65 = cResult[45];
                                        }
                                        if (cResult[46] === tmp65) {
                                          if (cResult[47] === str) {
                                            if (cResult[48] === tmp37) {
                                              let tmp69 = cResult[49];
                                            }
                                            return tmp69;
                                          }
                                        }
                                        const obj8 = { pointerEvents: null, style: null, children: null };
                                        class Q {
                                          constructor() {
                                            obj = { analyticsLocation: location, analyticsLocations, premiumFeatureCardOrder: null };
                                            tmp = closure_1(closure_2[19]);
                                            obj.premiumFeatureCardOrder = closure_0(closure_2[20]).PremiumFeatureCardOrder.TIER_0_LEADING;
                                            tmpResult = tmp(obj);
                                            return;
                                          }
                                        }
                                        obj8.style = tmp37;
                                        obj8.children = tmp65;
                                        const tmp71 = closure_9(tmp6(tmp3[13]).View, obj8);
                                        cResult[46] = tmp65;
                                        cResult[47] = str;
                                        cResult[48] = tmp37;
                                        cResult[49] = tmp71;
                                        tmp69 = tmp71;
                                      }
                                    }
                                  }
                                  class Q {
                                    constructor() {
                                      obj = { analyticsLocation: location, analyticsLocations, premiumFeatureCardOrder: null };
                                      tmp = closure_1(closure_2[19]);
                                      obj.premiumFeatureCardOrder = closure_0(closure_2[20]).PremiumFeatureCardOrder.TIER_0_LEADING;
                                      tmpResult = tmp(obj);
                                      return;
                                    }
                                  }
                                  tmp67[1] = tmp39;
                                  tmp67[2] = tmp30;
                                  const items = [tmp57, tmp62];
                                  tmp67[3] = items;
                                  const tmp68 = closure_10(tmp2(tmp3[24]).PressableOpacity, tmp67);
                                  cResult[41] = tmp30;
                                  cResult[42] = tmp57;
                                  cResult[43] = tmp62;
                                  cResult[44] = tmp39;
                                  cResult[45] = tmp68;
                                  tmp65 = tmp68;
                                }
                              }
                              class Q {
                                constructor() {
                                  obj = { analyticsLocation: location, analyticsLocations, premiumFeatureCardOrder: null };
                                  tmp = closure_1(closure_2[19]);
                                  obj.premiumFeatureCardOrder = closure_0(closure_2[20]).PremiumFeatureCardOrder.TIER_0_LEADING;
                                  tmpResult = tmp(obj);
                                  return;
                                }
                              }
                              tmp60[0] = tmp40;
                              const items1 = [tmp41, tmp54];
                              tmp60[1] = items1;
                              const tmp61 = closure_10(analyticsLocations, tmp60);
                              cResult[35] = tmp5.qualityTag;
                              cResult[36] = tmp54;
                              cResult[37] = tmp41;
                              cResult[38] = tmp61;
                              tmp57 = tmp61;
                            }
                            const obj9 = { style: tmp46, children: combined };
                            const tmp56 = closure_9(tmp2(tmp3[15]).LegacyText, obj9);
                            cResult[32] = tmp46;
                            cResult[33] = combined;
                            cResult[34] = tmp56;
                            tmp54 = tmp56;
                          }
                          class Q {
                            constructor() {
                              obj = { analyticsLocation: location, analyticsLocations, premiumFeatureCardOrder: null };
                              tmp = closure_1(closure_2[19]);
                              obj.premiumFeatureCardOrder = closure_0(closure_2[20]).PremiumFeatureCardOrder.TIER_0_LEADING;
                              tmpResult = tmp(obj);
                              return;
                            }
                          }
                          tmp47[0] = tmp5.qualityTagText;
                          tmp47[1] = prop;
                          cResult[25] = tmp5.qualityTagText;
                          cResult[26] = prop;
                          cResult[27] = tmp47;
                          tmp46 = tmp47;
                        }
                        let tmp42 = tmp18;
                        if (tmp18) {
                          const obj10 = { source: tmp6(tmp3[23]), style: null, resizeMode: "contain" };
                          class Q {
                            constructor() {
                              obj = { analyticsLocation: location, analyticsLocations, premiumFeatureCardOrder: null };
                              tmp = closure_1(closure_2[19]);
                              obj.premiumFeatureCardOrder = closure_0(closure_2[20]).PremiumFeatureCardOrder.TIER_0_LEADING;
                              tmpResult = tmp(obj);
                              return;
                            }
                          }
                          tmp42 = closure_9(tmp6(tmp3[22]), obj10);
                          const tmp6Result8 = tmp6(tmp3[22]);
                        }
                        class Q {
                          constructor() {
                            obj = { analyticsLocation: location, analyticsLocations, premiumFeatureCardOrder: null };
                            tmp = closure_1(closure_2[19]);
                            obj.premiumFeatureCardOrder = closure_0(closure_2[20]).PremiumFeatureCardOrder.TIER_0_LEADING;
                            tmpResult = tmp(obj);
                            return;
                          }
                        }
                        cResult[22] = tmp18;
                        cResult[23] = tmp5.nitroWheel;
                        cResult[24] = tmp42;
                        tmp41 = tmp42;
                      }
                      const items2 = [tmp5.liveIndicator, ];
                      class Q {
                        constructor() {
                          obj = { analyticsLocation: location, analyticsLocations, premiumFeatureCardOrder: null };
                          tmp = closure_1(closure_2[19]);
                          obj.premiumFeatureCardOrder = closure_0(closure_2[20]).PremiumFeatureCardOrder.TIER_0_LEADING;
                          tmpResult = tmp(obj);
                          return;
                        }
                      }
                      cResult[19] = style;
                      cResult[20] = tmp5.liveIndicator;
                      cResult[21] = items2;
                      tmp39 = items2;
                    }
                    class Q {
                      constructor() {
                        obj = { analyticsLocation: location, analyticsLocations, premiumFeatureCardOrder: null };
                        tmp = closure_1(closure_2[19]);
                        obj.premiumFeatureCardOrder = closure_0(closure_2[20]).PremiumFeatureCardOrder.TIER_0_LEADING;
                        tmpResult = tmp(obj);
                        return;
                      }
                    }
                    tmp38[0] = style;
                    tmp38[1] = animatedStyle;
                    cResult[16] = animatedStyle;
                    cResult[17] = style;
                    cResult[18] = tmp38;
                    tmp37 = tmp38;
                  }
                  const tmp6Result6 = tmp6(tmp3[21]);
                }
                class Q {
                  constructor() {
                    obj = { analyticsLocation: location, analyticsLocations, premiumFeatureCardOrder: null };
                    tmp = closure_1(closure_2[19]);
                    obj.premiumFeatureCardOrder = closure_0(closure_2[20]).PremiumFeatureCardOrder.TIER_0_LEADING;
                    tmpResult = tmp(obj);
                    return;
                  }
                }
                cResult[13] = _location;
                cResult[14] = analyticsLocations;
                cResult[15] = Q;
                tmp30 = Q;
              }
            }
          }
          const items3 = [, tmp18, tmp11, tmp13];
          cResult[8] = analyticsLocations;
          cResult[9] = tmp11;
          cResult[10] = tmp18;
          cResult[11] = tmp13;
          cResult[12] = items3;
          tmp26 = items3;
        }
      }
    }
    const fn2 = function w() {
      const current = ref.current;
      let tmp2 = !current;
      if (!current) {
        tmp2 = closure_6;
      }
      if (tmp2) {
        const obj2 = { type: constants.STREAM_QUALITY_INDICATOR, has_premium_stream_fps, has_premium_stream_resolution, location_stack: analyticsLocations };
        AnalyticsUtilsDefault.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj2);
        ref.current = true;
      }
    };
    cResult[3] = analyticsLocations;
    cResult[4] = cResult[1];
    cResult[5] = tmp18;
    cResult[6] = cResult[2];
    cResult[7] = fn2;
    tmp21 = fn2;
  }
  const obj6 = require("StreamQualityUtils");
}) : ((arg0) => {
  ({ participant, style } = arg0);
  _require = undefined;
  importDefault = undefined;
  let reveal;
  let _location;
  let flag2;
  let tmp2 = closure_11();
  reveal = _location.useContext(require("RevealProvider").RevealContext).reveal;
  _location = require("analytics").useAnalyticsContext().location;
  const analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  _location.useRef(false);
  let obj2 = require("analytics");
  class R {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[14]);
      num = 0;
      if (reveal) {
        num = 1;
      }
      obj1 = { opacity: null };
      obj4 = { easing: tmp(tmp2[15]).STANDARD_EASING, duration: 250 };
      obj1.opacity = obj.withTiming(num, obj4);
      return obj1;
    }
  }
  const obj3 = require("ReanimatedRexport");
  R.__closure = { withTiming: require("timing").withTiming, reveal, STANDARD_EASING: require("native").STANDARD_EASING };
  R.__workletHash = 255884147388;
  R.__initData = __initData2;
  const animatedStyle = obj3.useAnimatedStyle(R);
  const obj4 = { withTiming: require("timing").withTiming, reveal, STANDARD_EASING: require("native").STANDARD_EASING };
  const maxQuality = require("StreamQualityUtils").useMaxQuality(participant);
  try {
    const isPremiumFPSResult = tmp3(tmp4[16]).isPremiumFPS(maxQuality);
    let flag = isPremiumFPSResult;
    _require = isPremiumFPSResult;
    try {
      const isPremiumResolutionResult = tmp3(tmp4[16]).isPremiumResolution(maxQuality);
      flag2 = isPremiumResolutionResult;
      importDefault = isPremiumResolutionResult;
      let tmp21Result = flag;
      if (!flag) {
        tmp21Result = flag2;
      }
      flag2 = tmp21Result;
      const items = [analyticsLocations, tmp21Result, flag, flag2];
      const effect = obj.useEffect(() => {
        const current = ref.current;
        let tmp2 = !current;
        if (!current) {
          tmp2 = flag2;
        }
        if (tmp2) {
          const obj2 = { type: constants.STREAM_QUALITY_INDICATOR, has_premium_stream_fps, has_premium_stream_resolution, location_stack: analyticsLocations };
          AnalyticsUtilsDefault.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj2);
          ref.current = true;
        }
      }, items);
      const items1 = [_location, analyticsLocations];
      const callback = obj.useCallback(() => {
        const obj = { analyticsLocation: _location, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_0_LEADING };
        openPremiumModalDefault(obj);
      }, items1);
      const tmp3Result4 = tmp3(tmp4[16]);
      const isPremiumResult = tmp5(tmp4[21]).isPremium(participant.user, flag2.TIER_1);
      let tmp16 = !isPremiumResult;
      if (!isPremiumResult) {
        tmp16 = !tmp5(tmp4[21]).canStreamQuality(tmp5(tmp4[21]).StreamQuality.MID, participant.user);
        const tmp5Result5 = tmp5(tmp4[21]);
      }
      const tmp14 = flag2;
      const tmp5Result = tmp5(tmp4[21]);
      let isPremiumExactlyResult = tmp5(tmp4[21]).isPremiumExactly(participant.user, tmp14.TIER_1);
      if (isPremiumExactlyResult) {
        let type;
        if (maxQuality != null) {
          type = maxQuality.maxResolution.type;
        }
        isPremiumExactlyResult = type === ResolutionTypes.SOURCE;
      }
      if (isPremiumExactlyResult) {
        isPremiumExactlyResult = !tmp5(tmp4[21]).canStreamQuality(tmp5(tmp4[21]).StreamQuality.HIGH);
        const tmp5Result7 = tmp5(tmp4[21]);
      }
      let tmp21Result2 = null;
      if (null != maxQuality) {
        let str2 = "none";
        if (tmp21Result) {
          if (tmp16) {
            str2 = "auto";
          } else {
            str2 = "none";
          }
        }
        const obj6 = { pointerEvents: str2, style: null, children: null };
        const items2 = [style, animatedStyle];
        obj6.style = items2;
        const obj7 = { accessibilityRole: "button", style: null, onPress: null, children: null };
        const items3 = [tmp2.liveIndicator, style];
        obj7.style = items3;
        obj7.onPress = callback;
        const obj8 = { style: tmp2.qualityTag, children: null };
        if (tmp21Result) {
          const obj9 = { source: tmp5(tmp4[23]), style: tmp2.nitroWheel, resizeMode: "contain" };
          tmp21Result = closure_9(tmp5(tmp4[22]), obj9);
          const tmp5Result8 = tmp5(tmp4[22]);
        }
        const items4 = [tmp21Result, ];
        const items5 = [tmp2.qualityTagText, ];
        let prop = null;
        if (tmp8) {
          prop = tmp2.reducedQualityTagText;
        }
        class R {
          constructor() {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[14]);
            num = 0;
            if (reveal) {
              num = 1;
            }
            obj1 = { opacity: null };
            obj4 = { easing: tmp(tmp2[15]).STANDARD_EASING, duration: 250 };
            obj1.opacity = obj.withTiming(num, obj4);
            return obj1;
          }
        }
        items5[1] = prop;
        tmp26[0] = items5;
        const resolutionText = tmp3(tmp4[16]).getResolutionText(maxQuality.maxResolution);
        const tmp23 = analyticsLocations;
        const tmp3Result5 = tmp3(tmp4[16]);
        const _HermesInternal = HermesInternal;
        tmp26[1] = "" + resolutionText + " " + tmp3(tmp4[16]).getFPSText(maxQuality.maxFrameRate);
        items4[1] = closure_9(tmp3(tmp4[15]).LegacyText, tmp26);
        obj8.children = items4;
        const items6 = [closure_10(tmp23, obj8), ];
        const obj10 = { style: tmp2.liveTag };
        items6[1] = closure_9(tmp3(tmp4[15]).LiveTag, obj10);
        obj7.children = items6;
        obj6.children = closure_10(tmp3(tmp4[24]).PressableOpacity, obj7);
        tmp21Result2 = closure_9(tmp5(tmp4[13]).View, obj6);
        const tmp3Result6 = tmp3(tmp4[16]);
      }
      return tmp21Result2;
    } catch (err) {
      flag2 = false;
      importDefault = tmp;
    }
    const tmp3Result = tmp3(tmp4[16]);
  } catch (err) {
    flag = false;
    _require = tmp;
  }
  const obj5 = require("StreamQualityUtils");
});