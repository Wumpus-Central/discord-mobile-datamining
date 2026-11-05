// discord_app/modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingProgressBar.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef1652 from "../../../../../_runtime/metro/01652__.js";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import LinearGradientDefault from "../../../../../_runtime/05725_LinearGradient.js";
import spring_spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import GuildBoostingUtils from "../../../../utils/GuildBoostingUtils.tsx";
import GuildBoostingMarketingProgressBarMarker from "GuildBoostingMarketingProgressBarMarker.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

const require = globalThis.__r;
const GuildBoostingMarketingProgressBarMarkerDefault = GuildBoostingMarketingProgressBarMarker;

require = fn;
const View = fn(17).View;
const BoostedGuildTiers = fn(1072).BoostedGuildTiers;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5143);
let obj2 = {
  progressBarContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    marginTop: 40,
    paddingHorizontal: fn(15714).MARKER_DIMENSIONS / 2 + 34,
  },
  progressBar: { height: 54, maxWidth: 660, width: "100%" },
  progressBarScrubber: null,
  progressBarTrack: null,
  progressBarFill: null,
  progressBarGradientFill: null,
};
const obj3 = {
  display: "flex",
  alignItems: "center",
  width: "100%",
  marginTop: 40,
  paddingHorizontal: fn(15714).MARKER_DIMENSIONS / 2 + 34,
};
obj2.progressBarScrubber = {
  height: 8,
  top: fn(15714).MARKER_DIMENSIONS / 2 - 4,
  marginHorizontal: fn(15714).MARKER_DIMENSIONS / 2 + 2,
};
let size = {
  borderRadius: 8,
  height: "100%",
  width: "100%",
  position: "absolute",
  zIndex: 0,
  backgroundColor: nativeDefault.colors.SPINE_DEFAULT,
};
obj2.progressBarTrack = size;
obj2.progressBarFill = { borderRadius: 8, position: "absolute", height: "100%", left: 0, zIndex: 1 };
obj2.progressBarGradientFill = { height: "100%", width: "100%", borderRadius: 8 };
let closure_10 = createStyles.createStyles(obj2);
let items = [, , ,];
({ NONE: arr[0], TIER_1: arr[1], TIER_2: arr[2], TIER_3: arr[3] } = BoostedGuildTiers);
let closure_12 = { stiffness: 27, damping: 10 };
let closure_13 = {
  code: '(function GuildBoostingMarketingProgressBarTsx1(){let[width]=this.__closure;return{width:width.get()+"%"};})',
};
let closure_14 = {
  code: "(function GuildBoostingMarketingProgressBarTsx2(){let[width]=this.__closure;return width.get();})",
};
let closure_15 = {
  code: "(function GuildBoostingMarketingProgressBarTsx3(width){let[BoostedGuildTiers,TIER_REACHED_OFFSET,revealedTier,scheduleOnRN,setRevealedTier]=this.__closure;let tier=BoostedGuildTiers.NONE;if(width>=33.33-TIER_REACHED_OFFSET)tier=BoostedGuildTiers.TIER_1;if(width>=66.67-TIER_REACHED_OFFSET)tier=BoostedGuildTiers.TIER_2;if(width>=100-TIER_REACHED_OFFSET)tier=BoostedGuildTiers.TIER_3;if(tier!==revealedTier)scheduleOnRN(setRevealedTier,tier);})",
};
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingProgressBar.tsx",
);

export default function ProgressBar(guild) {
  guild = guild.guild;
  _require = guild;
  _slicedToArray = undefined;
  let fillFactor;
  const tmp = closure_10();
  let tmp4 = useThemeDefault();
  items = [AccessibilityStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(
    items,
    () => useReducedMotion2.useReducedMotion,
  );
  importDefault = stateFromStores;
  let obj = require("useStateFromStores");
  const sharedValue = require("../../../../../_runtime/metro/01652__.js").useSharedValue(0);
  dependencyMap = sharedValue;
  const tmp9 = _slicedToArray(fillFactor.useState(BoostedGuildTiers.NONE), 2);
  const first = tmp9[0];
  _slicedToArray = first;
  const obj2 = require("../../../../../_runtime/metro/01652__.js");
  const items1 = [closure_13, sharedValue];
  _require = undefined;
  [tmp11, tmp12] = items1;
  class GuildBoostingMarketingProgressBarTsx1 {
    constructor() {
      obj = { width: "" + closure_0.get() + "%" };
      return obj;
    }
  }
  const items2 = [tmp12];
  GuildBoostingMarketingProgressBarTsx1.__closure = items2;
  GuildBoostingMarketingProgressBarTsx1.__workletHash = 12429210936939;
  GuildBoostingMarketingProgressBarTsx1.__initData = tmp11;
  const animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    GuildBoostingMarketingProgressBarTsx1,
  );
  const obj4 = require("../../../../../_runtime/metro/01652__.js");
  const items3 = [closure_14, sharedValue];
  _require = undefined;
  [tmp14, tmp15] = items3;
  class GuildBoostingMarketingProgressBarTsx2 {
    constructor() {
      return closure_0.get();
    }
  }
  const items4 = [tmp15];
  GuildBoostingMarketingProgressBarTsx2.__closure = items4;
  GuildBoostingMarketingProgressBarTsx2.__workletHash = 7658772434044;
  GuildBoostingMarketingProgressBarTsx2.__initData = tmp14;
  const items5 = [
    closure_15,
    BoostedGuildTiers,
    5,
    first,
    require("../../../../../_runtime/metro/01705__.js").scheduleOnRN,
    tmp9[1],
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  fillFactor = undefined;
  [tmp16, tmp17, tmp18, tmp19, tmp20, tmp21] = items5;
  class GuildBoostingMarketingProgressBarTsx3 {
    constructor(arg0) {
      tmp = closure_0;
      TIER_3 = closure_0.NONE;
      tmp2 = closure_1;
      if (guild >= 33.33 - closure_1) {
        TIER_3 = tmp.TIER_1;
      }
      if (guild >= 66.67 - tmp2) {
        TIER_3 = tmp.TIER_2;
      }
      if (guild >= 100 - tmp2) {
        TIER_3 = tmp.TIER_3;
      }
      if (TIER_3 !== closure_2) {
        tmp3 = closure_3;
        tmp4 = fillFactor;
        tmp5 = closure_3(fillFactor, TIER_3);
      }
      return;
    }
  }
  const items6 = [tmp17, tmp18, tmp19, tmp20, tmp21];
  GuildBoostingMarketingProgressBarTsx3.__closure = items6;
  GuildBoostingMarketingProgressBarTsx3.__workletHash = 1273150541408;
  GuildBoostingMarketingProgressBarTsx3.__initData = tmp16;
  const animatedReaction = require("../../../../../_runtime/metro/01652__.js").useAnimatedReaction(
    GuildBoostingMarketingProgressBarTsx2,
    GuildBoostingMarketingProgressBarTsx3,
  );
  const items7 = [guild];
  fillFactor = obj3.useMemo(() => GuildBoostingUtils.getGuildBoostingProgressBarFillFactor(c0), items7).fillFactor;
  const items8 = [fillFactor, sharedValue, stateFromStores];
  const effect = obj3.useEffect(() => {
    let result = 100 * fillFactor;
    c0 = result;
    let timeout = -1;
    if (timeout) {
      const result1 = _undefined.set(result);
    } else {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        result = c2.set(spring_spring.withSpring(result, closure_12));
      }, 750);
    }
    return () => {
      window.clearTimeout(closure_1);
    };
  }, items8);
  const obj5 = { style: tmp.progressBarContainer, children: null };
  const obj6 = { style: tmp.progressBar, children: null };
  const obj7 = { style: tmp.progressBarScrubber, children: null };
  const obj8 = { style: null, children: null };
  const items9 = [tmp.progressBarFill, animatedStyle];
  obj8.style = items9;
  const tmp5Result = require("../../../../../_runtime/metro/01652__.js");
  const tmp2Result = LinearGradientDefault;
  let str = "#515359";
  if (!tmp5Result2.isThemeDark(tmp4)) {
    str = tmp2(575).unsafe_rawColors.PRIMARY_160;
  }
  const obj9 = {
    useAngle: true,
    angle: 90,
    colors: null,
    locations: [0.1577, 0.9905],
    style: tmp.progressBarGradientFill,
  };
  const items10 = [str, "#AB77F2"];
  obj9.colors = items10;
  obj8.children = closure_8(tmp2Result, obj9);
  const items11 = [closure_8(_modDef1652.View, obj8), closure_8(View, { style: tmp.progressBarTrack })];
  obj7.children = items11;
  const items12 = [
    closure_9(View, obj7),
    items.map((tier) => {
      const obj = { guild, tier, revealedTier, useReducedMotion, isDisabled: null };
      let tmp4 = guild.premiumTier <= tier;
      if (tmp4) {
        tmp4 = fillFactor > GuildBoostingMarketingProgressBarMarker.TierMarkerPositions[tier];
      }
      obj.isDisabled = tmp4;
      return React5(GuildBoostingMarketingProgressBarMarkerDefault, obj, tier);
    }),
  ];
  obj6.children = items12;
  obj5.children = closure_9(View, obj6);
  return closure_8(View, obj5);
}
export const PROGRESS_BAR_SPACING = 40;
