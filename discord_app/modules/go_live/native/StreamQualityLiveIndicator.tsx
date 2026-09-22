// discord_app/modules/go_live/native/StreamQualityLiveIndicator.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import PremiumFeaturesCards from "../../user_settings/premium/native/PremiumFeaturesCards.tsx";
import openPremiumModalDefault from "../../../components_native/premium/openPremiumModal.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const AnalyticEvents = fn(1074).AnalyticEvents;
const PremiumConstants = fn(1374);
({ PremiumTypes: metroRequire, PremiumUpsellTypes: closure_7 } = PremiumConstants);
const ResolutionTypes = fn(4782).ResolutionTypes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4757);
let obj2 = {
  liveIndicator: { flexDirection: "row", alignItems: "center", height: 18 },
  liveTag: {
    borderBottomLeftRadius: nativeDefault.radii.none,
    borderTopLeftRadius: nativeDefault.radii.none,
    height: 18,
    textAlign: "center",
  },
  qualityTag: null,
  qualityTagText: null,
  reducedQualityTagText: null,
  nitroWheel: null,
};
let obj3 = {
  borderBottomLeftRadius: nativeDefault.radii.none,
  borderTopLeftRadius: nativeDefault.radii.none,
  height: 18,
  textAlign: "center",
};
obj2.qualityTag = {
  borderBottomLeftRadius: nativeDefault.radii.sm,
  borderTopLeftRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_800,
  opacity: 0.8,
  paddingLeft: 8,
  paddingRight: 4,
  flexDirection: "row",
  alignItems: "center",
  height: 18,
};
obj2.qualityTagText = { color: "#fff", textAlign: "center", fontWeight: "700" };
let obj4 = {
  borderBottomLeftRadius: nativeDefault.radii.sm,
  borderTopLeftRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_800,
  opacity: 0.8,
  paddingLeft: 8,
  paddingRight: 4,
  flexDirection: "row",
  alignItems: "center",
  height: 18,
};
obj2.reducedQualityTagText = { color: nativeDefault.unsafe_rawColors.PRIMARY_300 };
obj2.nitroWheel = { width: 20, marginLeft: -4 };
let closure_11 = createStyles.createStyles(obj2);
const __initData = {
  code: "function StreamQualityLiveIndicatorTsx1(){const{withTiming,reveal,STANDARD_EASING}=this.__closure;return{opacity:withTiming(reveal?1:0,{easing:STANDARD_EASING,duration:250})};}",
};
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
  _location = require("analytics").useAnalyticsContext().location;
  const analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  _location.useRef(false);
  let obj2 = require("analytics");
  const fn = function f() {
    let num = 0;
    if (reveal) {
      num = 1;
    }
    const obj2 = { opacity: null };
    const obj = timing;
    obj2.opacity = obj.withTiming(num, { easing: native.STANDARD_EASING, duration: 250 });
    return obj2;
  };
  const obj3 = require("ReanimatedRexport");
  fn.__closure = {
    withTiming: require("timing").withTiming,
    reveal,
    STANDARD_EASING: require("native").STANDARD_EASING,
  };
  fn.__workletHash = 14676679064575;
  fn.__initData = __initData;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const obj4 = { withTiming: require("timing").withTiming, reveal, STANDARD_EASING: require("native").STANDARD_EASING };
  const maxQuality = require("StreamQualityUtils").useMaxQuality(participant);
  try {
    const isPremiumFPSResult = tmp3(tmp4[14]).isPremiumFPS(maxQuality);
    let flag = isPremiumFPSResult;
    _require = isPremiumFPSResult;
    try {
      const isPremiumResolutionResult = tmp3(tmp4[14]).isPremiumResolution(maxQuality);
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
          const obj2 = {
            type: constants.STREAM_QUALITY_INDICATOR,
            has_premium_stream_fps,
            has_premium_stream_resolution,
            location_stack: analyticsLocations,
          };
          AnalyticsUtilsDefault.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj2);
          ref.current = true;
        }
      }, items);
      const items1 = [_location, analyticsLocations];
      const callback = obj.useCallback(() => {
        const obj = {
          analyticsLocation: _location,
          analyticsLocations,
          premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_0_LEADING,
        };
        openPremiumModalDefault(obj);
      }, items1);
      const tmp3Result4 = tmp3(tmp4[14]);
      const isPremiumResult = tmp5(tmp4[19]).isPremium(participant.user, flag2.TIER_1);
      let tmp16 = !isPremiumResult;
      if (!isPremiumResult) {
        tmp16 = !tmp5(tmp4[19]).canStreamQuality(tmp5(tmp4[19]).StreamQuality.MID, participant.user);
        const tmp5Result5 = tmp5(tmp4[19]);
      }
      const tmp14 = flag2;
      const tmp5Result = tmp5(tmp4[19]);
      let isPremiumExactlyResult = tmp5(tmp4[19]).isPremiumExactly(participant.user, tmp14.TIER_1);
      if (isPremiumExactlyResult) {
        let type;
        if (maxQuality != null) {
          type = maxQuality.maxResolution.type;
        }
        isPremiumExactlyResult = type === ResolutionTypes.SOURCE;
      }
      if (isPremiumExactlyResult) {
        isPremiumExactlyResult = !tmp5(tmp4[19]).canStreamQuality(tmp5(tmp4[19]).StreamQuality.HIGH);
        const tmp5Result7 = tmp5(tmp4[19]);
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
          const obj9 = { source: tmp5(tmp4[22]), style: tmp2.nitroWheel, resizeMode: "contain" };
          tmp21Result = closure_9(tmp5(tmp4[21]), obj9);
          const tmp5Result8 = tmp5(tmp4[21]);
        }
        const items4 = [tmp21Result];
        const items5 = [tmp2.qualityTagText];
        let prop = null;
        if (tmp8) {
          prop = tmp2.reducedQualityTagText;
        }
        const obj10 = { style: null, children: null };
        items5[1] = prop;
        obj10.style = items5;
        const resolutionText = tmp3(tmp4[14]).getResolutionText(maxQuality.maxResolution);
        const tmp23 = analyticsLocations;
        const tmp3Result5 = tmp3(tmp4[14]);
        const _HermesInternal = HermesInternal;
        obj10.children = "" + resolutionText + " " + tmp3(tmp4[14]).getFPSText(maxQuality.maxFrameRate);
        items4[1] = closure_9(tmp3(tmp4[13]).LegacyText, obj10);
        obj8.children = items4;
        const items6 = [closure_10(tmp23, obj8)];
        const obj11 = { style: tmp2.liveTag };
        items6[1] = closure_9(tmp3(tmp4[13]).LiveTag, obj11);
        obj7.children = items6;
        obj6.children = closure_10(tmp3(tmp4[20]).PressableOpacity, obj7);
        tmp21Result2 = closure_9(tmp5(tmp4[11]).View, obj6);
        const tmp3Result6 = tmp3(tmp4[14]);
      }
      return tmp21Result2;
    } catch (err) {
      flag2 = false;
      importDefault = tmp;
    }
    const tmp3Result = tmp3(tmp4[14]);
  } catch (err) {
    flag = false;
    _require = tmp;
  }
  const obj5 = require("StreamQualityUtils");
}
