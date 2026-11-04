// === Module 12446: AILoader ===

// Module 12446 (AILoader)
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5378 */;
import AIGlyphText from "AIGlyphText" /* 12448 */;
import noop from "module_19" /* 19 */;

const _modDef1652 = _mod1652;

require = fn;
function Slot(index) {
  index = index.index;
  _require = index;
  const size = index.size;
  ({ color: c2, cycle } = index);
  const stagger = index.stagger;
  const tmp = closure_13(size);
  const glyph = tmp;
  const sharedValue = require("module_1652").useSharedValue(0);
  items = [cycle, index, sharedValue, stagger];
  const effect = cycle.useEffect(() => {
    const result = sharedValue.set(0);
    const result1 = c0 * stagger;
    const obj = _mod1652;
    const obj2 = _mod1652;
    const obj3 = timing_timing;
    const result2 = sharedValue.set(obj.withDelay(result1, obj2.withRepeat(obj3.withTiming(1, { duration: cycle, easing: _mod1652.Easing.linear }, "animate-always"), -1)));
    return () => c0(c2[5]).cancelAnimation(sharedValue);
  }, items);
  let obj = require("module_1652");
  const items1 = [closure_14, trackStepAt, sharedValue, size];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp5, tmp6, tmp7, tmp8] = items1;
  class AILoaderNativeTsx2 {
    constructor() {
      obj = { transform: null };
      obj1 = { translateY: -closure_0(closure_1.get()) * closure_2 };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items2 = [tmp6, tmp7, tmp8];
  AILoaderNativeTsx2.__closure = items2;
  AILoaderNativeTsx2.__workletHash = 5441538311625;
  AILoaderNativeTsx2.__initData = tmp5;
  let obj3 = { style: tmp.slot, children: null };
  const animatedStyle = require("module_1652").useAnimatedStyle(AILoaderNativeTsx2);
  let obj2 = require("module_1652");
  obj3.children = jsx(_modDef1652.View, { style: animatedStyle, children: closure_7.map((children) => jsx(AIGlyphText.AIGlyphText, { size, color, allowFontScaling: false, style: glyph.glyph, children }, children)) });
  return <stagger style={tmp.slot}>{null}</stagger>;
}
const View = fn(17).View;
const AILoaderConstants = fn(12447);
({ AI_LOADER_CYCLE_MS: hasOwnProperty, AI_LOADER_GAP_EM: closure_6, AI_LOADER_GLYPHS: metroImportDefault, AI_LOADER_REDUCED_MOTION_CYCLE_MS: closure_8, AI_LOADER_SLOT_COUNT: closure_9, AI_LOADER_SLOT_STAGGER_MS: closure_10, AI_LOADER_REST_FRACTION, AI_LOADER_STEP_FRACTION, AI_LOADER_TRACK_STEPS } = AILoaderConstants);
const jsx = fn(21).jsx;
let items = [{ code: "(function trackStepAt_AILoaderNativeTsx1(progress){let[AI_LOADER_REST_FRACTION,AI_LOADER_TRACK_STEPS,AI_LOADER_STEP_FRACTION]=this.__closure;if(progress<AI_LOADER_REST_FRACTION)return AI_LOADER_TRACK_STEPS[0];const step=Math.floor((progress-AI_LOADER_REST_FRACTION)/AI_LOADER_STEP_FRACTION)+1;return AI_LOADER_TRACK_STEPS[Math.min(step,AI_LOADER_TRACK_STEPS.length-1)];})" }, AI_LOADER_REST_FRACTION, AI_LOADER_TRACK_STEPS, AI_LOADER_STEP_FRACTION];
let closure_129_0;
let closure_129_1;
let closure_129_2;
[tmp3, tmp4, tmp5, tmp6] = items;
function trackStepAt(arg0) {
  if (arg0 < require) {
    return importDefault[0];
  } else {
    const _Math = Math;
    const _Math2 = Math;
    return importDefault[Math.min(Math, Math.floor(Math, (arg0 - tmp) / dependencyMap) + 1, importDefault.length - 1)];
  }
}
let items1 = [tmp4, tmp5, tmp6];
trackStepAt.__closure = items1;
trackStepAt.__workletHash = 8339432593103;
trackStepAt.__initData = tmp3;
const createStyles = fn(5141);
let closure_13 = createStyles.createStyles((width) => {
  const obj = { loader: { flexDirection: "row", gap: width * timestampProducer }, slot: { width, height: width, overflow: "hidden" }, glyph: { height: width } };
  return obj;
});
let closure_14 = { code: "(function AILoaderNativeTsx2(){let[trackStepAt,progress,size]=this.__closure;return{transform:[{translateY:-trackStepAt(progress.get())*size}]};})" };
let size = fn(2);
let result = size.fileFinishedImporting("design/visual-identities/ai/AILoader/AILoader.native.tsx");

export const AILoader = noop.memo(function AILoader(size) {
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
  const reducedMotion = num2.useContext(num(5207).AccessibilityPreferencesContext).reducedMotion;
  dependencyMap = reducedMotion.enabled ? closure_8 : closure_5;
  num2 = 0;
  if (!reducedMotion.enabled) {
    num2 = closure_10;
  }
  const obj = { style: null, accessible: null != accessibilityLabel, accessibilityRole: null, accessibilityLabel: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
  items = [closure_13(num).loader, size.style];
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
  obj.children = Array.from({ length: closure_9 }, (arg0, index) => <Slot key={index} index={index} size={num} color={str} cycle={cycle} stagger={num2} />);
  return <View style={null} accessible={null != accessibilityLabel} accessibilityRole={null} accessibilityLabel={null} accessibilityElementsHidden={null} importantForAccessibility={null}>{null}</View>;
});