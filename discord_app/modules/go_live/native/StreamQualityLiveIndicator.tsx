// discord_app/modules/go_live/native/StreamQualityLiveIndicator.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import openPremiumModalDefault from "../../../components_native/premium/openPremiumModal.tsx";
import PremiumFeaturesCards from "../../user_settings/premium/native/PremiumFeaturesCards.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const AnalyticEvents = fn(1072).AnalyticEvents;
const PremiumConstants = fn(1387);
({ PremiumTypes: metroRequire, PremiumUpsellTypes: closure_7 } = PremiumConstants);
const ResolutionTypes = fn(5888).ResolutionTypes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const createStyles = fn(5141);
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
let closure_12 = {
  code: "(function StreamQualityLiveIndicatorTsx1(){let[withTiming,reveal,STANDARD_EASING]=this.__closure;return{opacity:withTiming(reveal?1:0,{easing:STANDARD_EASING,duration:250})};})",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/go_live/native/StreamQualityLiveIndicator.tsx");

export default function StreamQualityLiveIndicator(arg0) {
  ({ participant, style } = arg0);
  _require = undefined;
  importDefault = undefined;
  let _location;
  let flag2;
  let tmp2 = closure_11();
  _location = require("analytics").useAnalyticsContext().location;
  const analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  const ref = analyticsLocations.useRef(false);
  let obj2 = require("analytics");
  items = [
    closure_12,
    require("timing/timing").withTiming,
    analyticsLocations.useContext(require("RevealProvider").RevealContext).reveal,
    require("native").STANDARD_EASING,
  ];
  const animatedStyle = require("../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    (function StreamQualityLiveIndicatorTsx1Factory(items) {
      [tmp, tmp2, tmp3, tmp4] = items;
      class StreamQualityLiveIndicatorTsx1 {
        constructor() {
          num = 0;
          tmp = closure_0;
          if (closure_1) {
            num = 1;
          }
          obj = { opacity: null };
          obj1 = { easing: closure_2, duration: 250 };
          obj.opacity = tmp(num, obj1);
          return obj;
        }
      }
      items = [tmp2, tmp3, tmp4];
      StreamQualityLiveIndicatorTsx1.__closure = items;
      StreamQualityLiveIndicatorTsx1.__workletHash = 10822735912166;
      StreamQualityLiveIndicatorTsx1.__initData = tmp;
      return StreamQualityLiveIndicatorTsx1;
    })(items),
  );
  const obj3 = require("../../../../_runtime/metro/01652__.js");
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
      const items1 = [analyticsLocations, tmp21Result, flag, flag2];
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
      }, items1);
      const items2 = [_location, analyticsLocations];
      const callback = obj.useCallback(() => {
        const obj = {
          analyticsLocation: _location,
          analyticsLocations,
          premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_0_LEADING,
        };
        openPremiumModalDefault(obj);
      }, items2);
      const tmp3Result4 = tmp3(tmp4[14]);
      const isPremiumResult = tmp5(tmp4[19]).isPremium(participant.user, TIER_1.TIER_1);
      let tmp16 = !isPremiumResult;
      if (!isPremiumResult) {
        tmp16 = !tmp5(tmp4[19]).canStreamQuality(tmp5(tmp4[19]).StreamQuality.MID, participant.user);
        const tmp5Result5 = tmp5(tmp4[19]);
      }
      const tmp5Result = tmp5(tmp4[19]);
      let isPremiumExactlyResult = tmp5(tmp4[19]).isPremiumExactly(participant.user, TIER_1.TIER_1);
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
        const obj5 = { pointerEvents: str2, style: null, children: null };
        const items3 = [style, animatedStyle];
        obj5.style = items3;
        const obj6 = { accessibilityRole: "button", style: null, onPress: null, children: null };
        const items4 = [tmp2.liveIndicator, style];
        obj6.style = items4;
        obj6.onPress = callback;
        const obj7 = { style: tmp2.qualityTag, children: null };
        if (tmp21Result) {
          const obj8 = { source: tmp5(tmp4[22]), style: tmp2.nitroWheel, resizeMode: "contain" };
          tmp21Result = closure_9(tmp5(tmp4[21]), obj8);
          const tmp5Result8 = tmp5(tmp4[21]);
        }
        const items5 = [tmp21Result];
        const items6 = [tmp2.qualityTagText];
        let prop = null;
        if (tmp8) {
          prop = tmp2.reducedQualityTagText;
        }
        const obj9 = { style: null, children: null };
        items6[1] = prop;
        obj9.style = items6;
        const resolutionText = tmp3(tmp4[14]).getResolutionText(maxQuality.maxResolution);
        const tmp23 = ref;
        const tmp3Result5 = tmp3(tmp4[14]);
        const _HermesInternal = HermesInternal;
        obj9.children = "" + resolutionText + " " + tmp3(tmp4[14]).getFPSText(maxQuality.maxFrameRate);
        items5[1] = closure_9(tmp3(tmp4[13]).LegacyText, obj9);
        obj7.children = items5;
        const items7 = [closure_10(tmp23, obj7)];
        const obj10 = { style: tmp2.liveTag };
        items7[1] = closure_9(tmp3(tmp4[13]).LiveTag, obj10);
        obj6.children = items7;
        obj5.children = closure_10(tmp3(tmp4[20]).PressableOpacity, obj6);
        tmp21Result2 = closure_9(tmp5(tmp4[11]).View, obj5);
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
  const obj4 = require("StreamQualityUtils");
}
