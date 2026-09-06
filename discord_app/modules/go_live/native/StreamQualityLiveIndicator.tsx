// === Module 9618: StreamQualityLiveIndicator ===

// Module 9618 (StreamQualityLiveIndicator)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import timing from "timing" /* 4561 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 9362 */;
import openPremiumModalDefault from "openPremiumModal" /* 9392 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const AnalyticEvents = fn(1074).AnalyticEvents;
const PremiumConstants = fn(1373);
({ PremiumTypes: metroRequire, PremiumUpsellTypes: closure_7 } = PremiumConstants);
const ResolutionTypes = fn(4585).ResolutionTypes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = { liveIndicator: { flexDirection: "row", alignItems: "center", height: 18 }, liveTag: null, qualityTag: null, qualityTagText: null, reducedQualityTagText: null, nitroWheel: null };
createStyles = { borderBottomLeftRadius: nativeDefault.radii.none, borderTopLeftRadius: nativeDefault.radii.none, height: 18, textAlign: "center" };
createStyles.liveTag = createStyles;
createStyles.qualityTag = { borderBottomLeftRadius: nativeDefault.radii.sm, borderTopLeftRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_800, opacity: 0.8, paddingLeft: 8, paddingRight: 4, flexDirection: "row", alignItems: "center", height: 18 };
createStyles.qualityTagText = { color: "#fff", textAlign: "center", fontWeight: "700" };
let obj1 = { borderBottomLeftRadius: nativeDefault.radii.sm, borderTopLeftRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_800, opacity: 0.8, paddingLeft: 8, paddingRight: 4, flexDirection: "row", alignItems: "center", height: 18 };
createStyles.reducedQualityTagText = { color: nativeDefault.unsafe_rawColors.PRIMARY_300 };
createStyles.nitroWheel = { width: 20, marginLeft: -4 };
let closure_11 = createStyles.createStyles(createStyles);
const __initData = { code: "function StreamQualityLiveIndicatorTsx1(){const{withTiming,reveal,STANDARD_EASING}=this.__closure;return{opacity:withTiming(reveal?1:0,{easing:STANDARD_EASING,duration:250})};}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/go_live/native/StreamQualityLiveIndicator.tsx");

export default function StreamQualityLiveIndicator(arg0) {
  ({ participant, style } = arg0);
  _require = undefined;
  importDefault = undefined;
  let reveal;
  let _location;
  let flag2;
  let tmp2 = closure_11();
  reveal = _location.useContext(require("RevealProvider").RevealContext).reveal;
  let obj1 = require("analytics");
  _location = obj1.useAnalyticsContext().location;
  const analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  _location.useRef(false);
  let obj2 = require("ReanimatedRexport");
  const fn = function f() {
    let obj = timing;
    let num = 0;
    if (reveal) {
      num = 1;
    }
    obj = { opacity: null };
    obj = { easing: native.STANDARD_EASING, duration: 250 };
    obj.opacity = obj.withTiming(num, obj);
    return obj;
  };
  let obj = { withTiming: require("timing").withTiming, reveal, STANDARD_EASING: require("native").STANDARD_EASING };
  fn.__closure = obj;
  fn.__workletHash = 14676679064575;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  let obj4 = require("StreamQualityUtils");
  const maxQuality = obj4.useMaxQuality(participant);
  try {
    let tmp3Result = tmp3(tmp4[14]);
    const isPremiumFPSResult = tmp3Result.isPremiumFPS(maxQuality);
    let flag = isPremiumFPSResult;
    _require = isPremiumFPSResult;
    try {
      tmp3Result = tmp3(tmp4[14]);
      const isPremiumResolutionResult = tmp3Result.isPremiumResolution(maxQuality);
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
          const obj = { type: constants.STREAM_QUALITY_INDICATOR, has_premium_stream_fps, has_premium_stream_resolution, location_stack: analyticsLocations };
          obj.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj);
          ref.current = true;
        }
      }, items);
      const items1 = [_location, analyticsLocations];
      const callback = obj.useCallback(() => {
        const obj = { analyticsLocation: _location, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_0_LEADING };
        openPremiumModalDefault(obj);
      }, items1);
      let tmp5Result = tmp5(tmp4[19]);
      const isPremiumResult = tmp5Result.isPremium(participant.user, flag2.TIER_1);
      let tmp16 = !isPremiumResult;
      if (!isPremiumResult) {
        tmp5Result = tmp5(tmp4[19]);
        tmp16 = !tmp5Result.canStreamQuality(tmp5(tmp4[19]).StreamQuality.MID, participant.user);
      }
      let isPremiumExactlyResult = tmp5(tmp4[19]).isPremiumExactly(participant.user, flag2.TIER_1);
      if (isPremiumExactlyResult) {
        let type;
        if (maxQuality != null) {
          type = maxQuality.maxResolution.type;
        }
        isPremiumExactlyResult = type === ResolutionTypes.SOURCE;
      }
      if (isPremiumExactlyResult) {
        isPremiumExactlyResult = !tmp5(tmp4[19]).canStreamQuality(tmp5(tmp4[19]).StreamQuality.HIGH);
        const tmp5Result2 = tmp5(tmp4[19]);
      }
      tmp21Result = null;
      if (null != maxQuality) {
        let str2 = "none";
        if (tmp21Result) {
          if (tmp16) {
            str2 = "auto";
          } else {
            str2 = "none";
          }
        }
        obj = { pointerEvents: str2, style: null, children: null };
        const items2 = [style, animatedStyle];
        obj.style = items2;
        obj1 = { accessibilityRole: "button", style: null, onPress: null, children: null };
        const items3 = [tmp2.liveIndicator, style];
        obj1.style = items3;
        obj1.onPress = callback;
        obj2 = { style: tmp2.qualityTag, children: null };
        if (tmp21Result) {
          const obj3 = { source: tmp5(tmp4[22]), style: tmp2.nitroWheel, resizeMode: "contain" };
          tmp21Result = closure_9(tmp5(tmp4[21]), obj3);
          const tmp5Result3 = tmp5(tmp4[21]);
        }
        const items4 = [tmp21Result, ];
        const items5 = [tmp2.qualityTagText, ];
        let prop = null;
        if (tmp8) {
          prop = tmp2.reducedQualityTagText;
        }
        obj4 = { style: null, children: null };
        items5[1] = prop;
        obj4.style = items5;
        const resolutionText = tmp3(tmp4[14]).getResolutionText(maxQuality.maxResolution);
        const tmp23 = analyticsLocations;
        const tmp3Result1 = tmp3(tmp4[14]);
        const _HermesInternal = HermesInternal;
        obj4.children = "" + resolutionText + " " + tmp3(tmp4[14]).getFPSText(maxQuality.maxFrameRate);
        items4[1] = closure_9(tmp3(tmp4[13]).LegacyText, obj4);
        obj2.children = items4;
        const items6 = [closure_10(tmp23, obj2), ];
        const obj5 = { style: tmp2.liveTag };
        items6[1] = closure_9(tmp3(tmp4[13]).LiveTag, obj5);
        obj1.children = items6;
        obj.children = closure_10(tmp3(tmp4[20]).PressableOpacity, obj1);
        tmp21Result = closure_9(tmp5(tmp4[11]).View, obj);
        const tmp3Result2 = tmp3(tmp4[14]);
      }
      return tmp21Result;
    } catch (err) {
      flag2 = false;
      importDefault = tmp;
    }
  } catch (err) {
    flag = false;
    _require = tmp;
  }
};