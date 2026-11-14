// === Module 14477: CheckpointIntroScreen ===

// Module 14477 (CheckpointIntroScreen)
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import _modDef1655 from "module_1655" /* 1655 */;
import _modDef3317 from "module_3317" /* 3317 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 14270 */;
import CheckpointTextDefault from "CheckpointText" /* 14271 */;
import useCheckpointHasUserStatsDefault from "useCheckpointHasUserStats" /* 14478 */;
import CheckpointStatNumberDefault from "CheckpointStatNumber" /* 14479 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const CheckpointConstants = fn(6377);
({ CHECKPOINT_CONTROL_SIZE: metroImportDefault, CHECKPOINT_INTRODUCTION_FADE_IN_DURATION_MS: closure_8, CHECKPOINT_INTRODUCTION_REVEAL_DURATION_MS: closure_9, CHECKPOINT_NAV_HEIGHT: closure_10 } = CheckpointConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const PX_12 = nativeDefault.space.PX_12;
const createStyles = fn(5306);
let obj2 = { container: { flexGrow: 1, justifyContent: "flex-end", gap: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_64 }, year: null, yearRow: null, globe: null, descriptions: null, landscapeContent: null, landscapeContainer: null };
let obj3 = { flexGrow: 1, justifyContent: "flex-end", gap: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_64 };
obj2.year = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
let obj4 = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
obj2.yearRow = { flexDirection: "row", alignItems: "center", columnGap: nativeDefault.space.PX_8 };
obj2.globe = { width: 75, height: 56 };
let obj5 = { flexDirection: "row", alignItems: "center", columnGap: nativeDefault.space.PX_8 };
obj2.descriptions = { gap: nativeDefault.space.PX_32 };
obj2.landscapeContent = { paddingLeft: "61%" };
obj2.landscapeContainer = { justifyContent: "center", paddingBottom: 0 };
let closure_14 = createStyles.createStyles(obj2);
let closure_15 = { code: "(function CheckpointIntroScreenTsx1(){let[CHECKPOINT_INTRODUCTION_FADE_IN_DURATION_MS,Easing,withTiming,isVisible,FADE_IN_OFFSET_Y]=this.__closure;const timing={duration:CHECKPOINT_INTRODUCTION_FADE_IN_DURATION_MS,easing:Easing.out(Easing.cubic)};return{opacity:withTiming(isVisible?1:0,timing),transform:[{translateY:withTiming(isVisible?0:FADE_IN_OFFSET_Y,timing)}]};})" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/CheckpointIntroScreen.tsx");

export default function CheckpointIntroScreen(onCharacterBottomInsetChange) {
  let _require = onCharacterBottomInsetChange.onCharacterBottomInsetChange;
  _slicedToArray = undefined;
  const tmp = closure_14();
  const rect = useSafeAreaInsetsDefault();
  let landscapeContainer = "MobileLandscape" === onCharacterBottomInsetChange.layout;
  const sum = rect.top + closure_10;
  const sum1 = rect.bottom + closure_7;
  const bound = Math.max(sum, sum1 + nativeDefault.space.PX_16);
  const ref = noop.useRef(null);
  const tmp8 = useCheckpointHasUserStatsDefault();
  items = [AccessibilityStore];
  let obj = require("initialize");
  [tmp11, c3] = noop.useState(require("initialize").useStateFromStores(items, () => useReducedMotion.useReducedMotion));
  const effect = noop.useEffect(() => {
    const timeout = setTimeout(() => closure_1_3(true), closure_1_9);
    return () => clearTimeout(closure_0);
  }, []);
  const tmp10 = _slicedToArray(noop.useState(require("initialize").useStateFromStores(items, () => useReducedMotion.useReducedMotion)), 2);
  const items1 = [closure_15, closure_8, require("module_1655").Easing, require("timing/timing").withTiming, tmp11, PX_12];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items1;
  class CheckpointIntroScreenTsx1 {
    constructor() {
      obj = { duration: closure_0, easing: closure_1.out(closure_1.cubic) };
      tmp = closure_2;
      num = 0;
      tmp2 = closure_3;
      if (closure_3) {
        num = 1;
      }
      obj1 = { opacity: tmp(num, obj), transform: null };
      num2 = 0;
      if (!tmp2) {
        num2 = closure_4;
      }
      obj4 = { translateY: tmp(num2, obj) };
      items = [];
      items[0] = obj4;
      obj1.transform = items;
      return obj1;
    }
  }
  const items2 = [tmp14, tmp15, tmp16, tmp17, tmp18];
  CheckpointIntroScreenTsx1.__closure = items2;
  CheckpointIntroScreenTsx1.__workletHash = 8997086399243;
  CheckpointIntroScreenTsx1.__initData = tmp13;
  const animatedStyle = require("module_1655").useAnimatedStyle(CheckpointIntroScreenTsx1);
  let tmp22 = landscapeContainer;
  let obj2 = require("module_1655");
  if (landscapeContainer) {
    const items3 = [tmp.landscapeContent, ];
    const obj3 = { paddingTop: bound, paddingRight: rect.right + tmp2(575).space.PX_24, paddingBottom: bound };
    items3[1] = obj3;
    tmp22 = items3;
  }
  const obj4 = { contentContainerStyle: tmp22, children: null };
  const items4 = [tmp.container, ];
  if (landscapeContainer) {
    landscapeContainer = tmp.landscapeContainer;
  }
  const obj5 = { style: items4, children: null };
  items4[1] = landscapeContainer;
  const obj6 = {
    ref,
    onLayout: function handleYearLayout() {
      if (!c1) {
        const current = _undefined2.current;
        if (current != null) {
          current.measureInWindow((arg0, arg1) => {
            duration(c0(c2[14]).getWindowDimensions().height - arg1);
          });
        }
      }
    },
    style: tmp.year,
    children: null
  };
  const obj7 = { style: null, children: null };
  const items5 = [tmp.yearRow, animatedStyle];
  obj7.style = items5;
  const items6 = [closure_11(CheckpointStatNumberDefault, { value: "2026", size: 96, isStepHeading: true }), ];
  let tmp20Result = !tmp8;
  if (!tmp8) {
    const obj8 = { style: tmp.globe };
    tmp20Result = closure_11(tmp2(14480), obj8);
  }
  items6[1] = tmp20Result;
  obj7.children = items6;
  obj6.children = closure_12(_modDef1655.View, obj7);
  const items7 = [closure_11(View, obj6), ];
  const obj9 = { style: null, children: null };
  const items8 = [tmp.descriptions, animatedStyle];
  obj9.style = items8;
  const tmp2Result = CheckpointScreenDefault;
  const intl = tmp9(1113).intl;
  const tmp2Result5 = _modDef3317;
  const tmp2Result4 = CheckpointTextDefault;
  const items9 = [closure_11(tmp2Result4, { variant: "heading-lg/medium", children: intl.string(tmp8 ? tmp2Result5["7YmUVu"] : tmp2Result5["Fyr+NW"]) }), ];
  let tmp20Result2 = !tmp8;
  if (!tmp8) {
    const obj11 = { variant: "heading-lg/medium", children: null };
    const intl2 = tmp9(1113).intl;
    obj11.children = intl2.string(tmp2(3317)["2GRr6H"]);
    tmp20Result2 = closure_11(tmp2(14271), obj11);
    const tmp2Result6 = tmp2(14271);
  }
  items9[1] = tmp20Result2;
  obj9.children = items9;
  items7[1] = closure_12(_modDef1655.View, obj9);
  obj5.children = items7;
  obj4.children = closure_12(View, obj5);
  return closure_11(tmp2Result, obj4);
};