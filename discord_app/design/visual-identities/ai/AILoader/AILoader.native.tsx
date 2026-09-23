// discord_app/design/visual-identities/ai/AILoader/AILoader.native.tsx
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import timing from "../../../animation/reanimated/timing/timing.tsx";
import AIGlyphText from "../AIGlyphText.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function Slot(index) {
  index = index.index;
  const size = index.size;
  ({ color: dependencyMap, cycle } = index);
  const stagger = index.stagger;
  const tmp = closure_16(size);
  const glyph = tmp;
  const sharedValue = index(4559).useSharedValue(0);
  let items = [cycle, index, sharedValue, stagger];
  const effect = cycle.useEffect(() => {
    const result = sharedValue.set(0);
    const result1 = index * stagger;
    const obj = ReanimatedRexport;
    const obj2 = ReanimatedRexport;
    const obj3 = timing;
    const result2 = sharedValue.set(
      obj.withDelay(
        result1,
        obj2.withRepeat(
          obj3.withTiming(1, { duration: cycle, easing: ReanimatedRexport.Easing.linear }, "animate-always"),
          -1,
        ),
      ),
    );
    return () => index(color[5]).cancelAnimation(sharedValue);
  }, items);
  let obj = index(4559);
  class T {
    constructor() {
      value = closure_6.get();
      if (typeof trackStepAt === "function") {
        if (value < AI_LOADER_REST_FRACTION) {
          tmp7 = AI_LOADER_TRACK_STEPS;
          first = AI_LOADER_TRACK_STEPS[0];
        } else {
          tmp3 = globalThis;
          _Math = Math;
          tmp4 = AI_LOADER_STEP_FRACTION;
          num = 1;
          tmp5 = AI_LOADER_TRACK_STEPS;
          _Math2 = Math;
          first =
            AI_LOADER_TRACK_STEPS[
              Math.min(
                Math,
                Math.floor(Math, (value - tmp2) / AI_LOADER_STEP_FRACTION) + 1,
                AI_LOADER_TRACK_STEPS.length - 1,
              )
            ];
        }
        obj = { transform: null };
        obj1 = { translateY: null };
        tmp8 = size;
        obj1.translateY = -first * size;
        items = [];
        items[0] = obj1;
        obj.transform = items;
        return obj;
      } else {
        str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  T.__closure = { trackStepAt, progress: sharedValue, size };
  T.__workletHash = 16632594382704;
  T.__initData = __initData;
  const obj4 = { style: tmp.slot, children: null };
  const animatedStyle = index(4559).useAnimatedStyle(T);
  let obj2 = index(4559);
  let obj3 = { trackStepAt, progress: sharedValue, size };
  obj4.children = jsx(size(4559).View, {
    style: animatedStyle,
    children: closure_7.map((children) =>
      jsx(AIGlyphText.AIGlyphText, { size, color, allowFontScaling: false, style: glyph.glyph, children }, children),
    ),
  });
  return <stagger style={tmp.slot}>{null}</stagger>;
}
const View = fn(17).View;
const AILoaderConstants = fn(14490);
({
  AI_LOADER_CYCLE_MS: hasOwnProperty,
  AI_LOADER_GAP_EM: metroRequire,
  AI_LOADER_GLYPHS: closure_7,
  AI_LOADER_REDUCED_MOTION_CYCLE_MS: closure_8,
  AI_LOADER_REST_FRACTION,
} = AILoaderConstants);
({ AI_LOADER_SLOT_COUNT: c10, AI_LOADER_SLOT_STAGGER_MS: closure_11, AI_LOADER_STEP_FRACTION } = AILoaderConstants);
const AI_LOADER_TRACK_STEPS = AILoaderConstants.AI_LOADER_TRACK_STEPS;
const jsx = fn(21).jsx;
function trackStepAt(arg0) {
  if (arg0 < AI_LOADER_REST_FRACTION) {
    return AI_LOADER_TRACK_STEPS[0];
  } else {
    const _Math = Math;
    const _Math2 = Math;
    return AI_LOADER_TRACK_STEPS[
      Math.min(Math, Math.floor(Math, (arg0 - tmp) / AI_LOADER_STEP_FRACTION) + 1, AI_LOADER_TRACK_STEPS.length - 1)
    ];
  }
}
trackStepAt.__closure = { AI_LOADER_REST_FRACTION, AI_LOADER_TRACK_STEPS, AI_LOADER_STEP_FRACTION };
trackStepAt.__workletHash = 2403964493846;
trackStepAt.__initData = {
  code: "function trackStepAt_AILoaderNativeTsx1(progress){const{AI_LOADER_REST_FRACTION,AI_LOADER_TRACK_STEPS,AI_LOADER_STEP_FRACTION}=this.__closure;if(progress<AI_LOADER_REST_FRACTION)return AI_LOADER_TRACK_STEPS[0];const step=Math.floor((progress-AI_LOADER_REST_FRACTION)/AI_LOADER_STEP_FRACTION)+1;return AI_LOADER_TRACK_STEPS[Math.min(step,AI_LOADER_TRACK_STEPS.length-1)];}",
};
const createStyles = fn(4827);
let closure_16 = createStyles.createStyles((width) => {
  const obj = {
    loader: { flexDirection: "row", gap: width * timestampProducer },
    slot: { width, height: width, overflow: "hidden" },
    glyph: { height: width },
  };
  return obj;
});
const __initData = {
  code: "function AILoaderNativeTsx2(){const{trackStepAt,progress,size}=this.__closure;return{transform:[{translateY:-trackStepAt(progress.get())*size}]};}",
};
let size = fn(2);
let result = size.fileFinishedImporting("design/visual-identities/ai/AILoader/AILoader.native.tsx");

export const AILoader = noop.memo((size) => {
  let num = size.size;
  if (num === undefined) {
    num = 16;
  }
  let str = size.color;
  if (str === undefined) {
    str = "text-default";
  }
  const accessibilityLabel = size.accessibilityLabel;
  let num2;
  const reducedMotion = num2.useContext(num(4533).AccessibilityPreferencesContext).reducedMotion;
  dependencyMap = reducedMotion.enabled ? closure_8 : closure_5;
  num2 = 0;
  if (!reducedMotion.enabled) {
    num2 = closure_11;
  }
  const obj = {
    style: null,
    accessible: null != accessibilityLabel,
    accessibilityRole: null,
    accessibilityLabel: null,
    accessibilityElementsHidden: null,
    importantForAccessibility: null,
    children: null,
  };
  const items = [closure_16(num).loader, size.style];
  obj.style = items;
  let str2;
  if (null != accessibilityLabel) {
    str2 = "image";
  }
  obj.accessibilityRole = str2;
  obj.accessibilityLabel = accessibilityLabel;
  obj.accessibilityElementsHidden = null == accessibilityLabel;
  let str3 = "no-hide-descendants";
  if (null != accessibilityLabel) {
    str3 = "yes";
  }
  obj.importantForAccessibility = str3;
  obj.children = Array.from({ length: closure_10 }, (arg0, index) => (
    <Slot key={index} index={index} size={num} color={str} cycle={cycle} stagger={num2} />
  ));
  return (
    <View
      style={null}
      accessible={null != accessibilityLabel}
      accessibilityRole={null}
      accessibilityLabel={null}
      accessibilityElementsHidden={null}
      importantForAccessibility={null}
    >
      {null}
    </View>
  );
});
