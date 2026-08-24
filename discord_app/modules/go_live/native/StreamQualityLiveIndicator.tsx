// === Module 12508: StreamQualityLiveIndicator ===

// Module 12508 (StreamQualityLiveIndicator)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { AnalyticEvents } from "ME" /* 676 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;
import { ResolutionTypes } from "DesktopSources" /* 4534 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

const require = arg1;
({ PremiumTypes: closure_6, PremiumUpsellTypes: error } = GuildFeatures);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { liveIndicator: { flexDirection: "row", alignItems: "center", height: 18 }, liveTag: null, qualityTag: null, qualityTagText: null, reducedQualityTagText: null, nitroWheel: null };
createCacheKey = { borderBottomLeftRadius: ThemesDefault.radii.none, borderTopLeftRadius: ThemesDefault.radii.none, height: 18, textAlign: "center" };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { borderBottomLeftRadius: ThemesDefault.radii.sm, borderTopLeftRadius: ThemesDefault.radii.sm, backgroundColor: ThemesDefault.unsafe_rawColors.PRIMARY_800, opacity: 0.8, paddingLeft: 8, paddingRight: 4, flexDirection: "row", alignItems: "center", height: 18 };
createCacheKey[3] = { color: "#fff", textAlign: "center", fontWeight: "700" };
let obj1 = { borderBottomLeftRadius: ThemesDefault.radii.sm, borderTopLeftRadius: ThemesDefault.radii.sm, backgroundColor: ThemesDefault.unsafe_rawColors.PRIMARY_800, opacity: 0.8, paddingLeft: 8, paddingRight: 4, flexDirection: "row", alignItems: "center", height: 18 };
createCacheKey[4] = { color: ThemesDefault.unsafe_rawColors.PRIMARY_300 };
createCacheKey[5] = { width: 20, marginLeft: -4 };
let closure_11 = createCacheKey.createStyles(createCacheKey);
let closure_12 = { code: "function StreamQualityLiveIndicatorTsx1(){const{withTiming,reveal,STANDARD_EASING}=this.__closure;return{opacity:withTiming(reveal?1:0,{easing:STANDARD_EASING,duration:250})};}" };
let obj2 = { color: ThemesDefault.unsafe_rawColors.PRIMARY_300 };
const result = require("set").fileFinishedImporting("modules/go_live/native/StreamQualityLiveIndicator.tsx");

export default function StreamQualityLiveIndicator(arg0) {
  ({ participant, style } = arg0);
  let _require;
  importDefault = undefined;
  let reveal;
  let _location;
  let analyticsLocations;
  closure_5 = undefined;
  let flag2;
  let tmp2 = callback();
  let obj = _location;
  reveal = _location.useContext(_require(reveal[8]).RevealContext).reveal;
  obj1 = _require(reveal[9]);
  _location = obj1.useAnalyticsContext().location;
  analyticsLocations = importDefault(reveal[10])().analyticsLocations;
  closure_5 = _location.useRef(false);
  let obj2 = _require(reveal[11]);
  const fn = function f() {
    let obj = _undefined(reveal[12]);
    let num = 0;
    if (reveal) {
      num = 1;
    }
    obj = { opacity: null };
    obj = { easing: _undefined(reveal[13]).STANDARD_EASING, duration: 250 };
    obj[0] = obj.withTiming(num, obj);
    return obj;
  };
  obj = { withTiming: _require(reveal[12]).withTiming, reveal, STANDARD_EASING: _require(reveal[13]).STANDARD_EASING };
  fn.__closure = obj;
  fn.__workletHash = 14676679064575;
  fn.__initData = closure_12;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  let obj4 = _require(reveal[14]);
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
          let obj = _undefined2(reveal[16]);
          obj = { type: null, has_premium_stream_fps: null, has_premium_stream_resolution: null, location_stack: null };
          obj[0] = closure_1_7.STREAM_QUALITY_INDICATOR;
          obj[1] = c0;
          obj[2] = _undefined2;
          obj[3] = analyticsLocations;
          obj.track(ref.PREMIUM_UPSELL_VIEWED, obj);
          ref.current = true;
        }
      }, items);
      const items1 = [_location, analyticsLocations];
      callback = obj.useCallback(() => {
        const obj = { analyticsLocation: _location, analyticsLocations, premiumFeatureCardOrder: _undefined(reveal[18]).PremiumFeatureCardOrder.TIER_0_LEADING };
        _undefined2(reveal[17])(obj);
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
        obj = { pointerEvents: null, style: null, children: null };
        obj[0] = str2;
        const items2 = [style, animatedStyle];
        obj[1] = items2;
        obj1 = { accessibilityRole: "button", style: null, onPress: null, children: null };
        const items3 = [tmp2.liveIndicator, style];
        obj1[1] = items3;
        obj1[2] = callback;
        obj2 = { style: null, children: null };
        obj2[0] = tmp2.qualityTag;
        if (tmp21Result) {
          const obj3 = { source: null, style: null, resizeMode: "contain" };
          obj3[0] = tmp5(tmp4[22]);
          obj3[1] = tmp2.nitroWheel;
          tmp21Result = tmp21(tmp5(tmp4[21]), obj3);
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
        obj4[0] = items5;
        const resolutionText = tmp3(tmp4[14]).getResolutionText(maxQuality.maxResolution);
        const tmp23 = analyticsLocations;
        const tmp3Result1 = tmp3(tmp4[14]);
        const _HermesInternal = HermesInternal;
        obj4[1] = "" + resolutionText + " " + tmp3(tmp4[14]).getFPSText(maxQuality.maxFrameRate);
        items4[1] = closure_9(tmp3(tmp4[13]).LegacyText, obj4);
        obj2[1] = items4;
        const items6 = [closure_10(tmp23, obj2), ];
        const obj5 = { style: null };
        obj5[0] = tmp2.liveTag;
        items6[1] = closure_9(tmp3(tmp4[13]).LiveTag, obj5);
        obj1[3] = items6;
        obj[2] = closure_10(tmp3(tmp4[20]).PressableOpacity, obj1);
        tmp21Result = tmp21(tmp5(tmp4[11]).View, obj);
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