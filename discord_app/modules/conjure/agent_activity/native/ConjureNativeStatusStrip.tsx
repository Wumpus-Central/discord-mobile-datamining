// === Module 17042: ConjureNativeStatusStrip ===

// Module 17042 (ConjureNativeStatusStrip)
import nativeDefault from "native" /* 587 */;
import _modDef3827 from "module_3827" /* 3827 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5054 */;
import ConjureStatusLabels from "ConjureStatusLabels" /* 17036 */;
import ConjureUsageSheet from "ConjureUsageSheet" /* 17043 */;
import ConjureNativeTurnTimerDefault from "ConjureNativeTurnTimer" /* 17044 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const AI_LOADER_CYCLE_MS = fn(14052).AI_LOADER_CYCLE_MS;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { row: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_4, minHeight: nativeDefault.space.PX_4 + nativeDefault.space.PX_24 }, activity: null, live: null, indicator: null, label: null, runes: null };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_4, minHeight: nativeDefault.space.PX_4 + nativeDefault.space.PX_24 };
obj2.activity = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, minHeight: nativeDefault.space.PX_16 };
obj2.live = { flexShrink: 1 };
let obj4 = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, minHeight: nativeDefault.space.PX_16 };
obj2.indicator = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, alignSelf: "flex-start" };
obj2.label = { flexShrink: 1 };
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, alignSelf: "flex-start" };
obj2.runes = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_9 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function ThinkingIndicator(line) {
  const cResult = line(text[8]).c(22);
  line = line.line;
  const rotating = line.rotating;
  let immediate = line.immediate;
  const tmp4 = closure_9();
  [text] = noop.useState(line);
  _slicedToArray = tmp7;
  if (immediate) {
    immediate = text !== line;
  }
  if (immediate) {
    tmp7(line);
  }
  noop = obj2.useRef(line);
  let obj = line(text[8]);
  const ref2 = noop.useRef(text);
  if (cResult[0] !== line) {
    class I {
      constructor() {
        closure_4.current = line;
        return;
      }
    }
    const items = [line];
    cResult[0] = line;
    cResult[1] = I;
    cResult[2] = items;
    let tmp11 = items;
  } else {
    class I {
      constructor() {
        closure_4.current = line;
        return;
      }
    }
    tmp11 = cResult[2];
  }
  const effect = obj2.useEffect(I, tmp11);
  if (cResult[3] !== text) {
    class A {
      constructor() {
        closure_5.current = closure_2;
        return;
      }
    }
    const items1 = [text];
    cResult[3] = text;
    cResult[4] = A;
    cResult[5] = items1;
    let tmp14 = items1;
  } else {
    class A {
      constructor() {
        closure_5.current = closure_2;
        return;
      }
    }
    tmp14 = cResult[5];
  }
  const effect1 = obj2.useEffect(A, tmp14);
  closure_7 = obj2.useRef(rotating);
  closure_8 = obj2.useRef(0);
  if (cResult[6] !== rotating) {
    class A {
      constructor() {
        closure_5.current = closure_2;
        return;
      }
    }
    const items2 = [rotating];
    cResult[6] = rotating;
    cResult[7] = tmp18;
    cResult[8] = items2;
    let tmp17 = items2;
  } else {
    class A {
      constructor() {
        closure_5.current = closure_2;
        return;
      }
    }
    tmp17 = cResult[8];
  }
  const effect2 = obj2.useEffect(tmp18, tmp17);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        closure_0 = null;
        beat = function beat() { ... };
        closure_2 = setTimeout(() => { ... }, line(closure_2[9]).INDICATOR_PASS_STAGGER_MS);
        return () => { ... };
      }
    }
    const items3 = [];
    cResult[9] = N;
    cResult[10] = items3;
    let tmp21 = items3;
  } else {
    class N {
      constructor() {
        closure_0 = null;
        beat = function beat() { ... };
        closure_2 = setTimeout(() => { ... }, line(closure_2[9]).INDICATOR_PASS_STAGGER_MS);
        return () => { ... };
      }
    }
    tmp21 = cResult[10];
  }
  const effect3 = obj2.useEffect(N, tmp21);
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        closure_0 = null;
        beat = function beat() { ... };
        closure_2 = setTimeout(() => { ... }, line(closure_2[9]).INDICATOR_PASS_STAGGER_MS);
        return () => { ... };
      }
    }
    const tmp24 = closure_7(tmp(tmp2[10]).AILoader, { size: 10, color: "text-subtle" });
    cResult[11] = tmp24;
  } else {
    class N {
      constructor() {
        closure_0 = null;
        beat = function beat() { ... };
        closure_2 = setTimeout(() => { ... }, line(closure_2[9]).INDICATOR_PASS_STAGGER_MS);
        return () => { ... };
      }
    }
  }
  if (rotating) {
    class N {
      constructor() {
        closure_0 = null;
        beat = function beat() { ... };
        closure_2 = setTimeout(() => { ... }, line(closure_2[9]).INDICATOR_PASS_STAGGER_MS);
        return () => { ... };
      }
    }
  }
  if (cResult[12] !== text) {
    class N {
      constructor() {
        closure_0 = null;
        beat = function beat() { ... };
        closure_2 = setTimeout(() => { ... }, line(closure_2[9]).INDICATOR_PASS_STAGGER_MS);
        return () => { ... };
      }
    }
    const obj3 = { ref, text, variant: "text-xs/medium", color: "text-subtle", duration: tmp(tmp2[9]).INDICATOR_PASS_MS, delay: null };
    const tmp26 = closure_7(tmp(tmp2[11]).AIShimmer, obj3);
    cResult[12] = text;
    cResult[13] = tmp26;
  } else {
    class N {
      constructor() {
        closure_0 = null;
        beat = function beat() { ... };
        closure_2 = setTimeout(() => { ... }, line(closure_2[9]).INDICATOR_PASS_STAGGER_MS);
        return () => { ... };
      }
    }
  }
  if (cResult[14] === rotating) {
    class N {
      constructor() {
        closure_0 = null;
        beat = function beat() { ... };
        closure_2 = setTimeout(() => { ... }, line(closure_2[9]).INDICATOR_PASS_STAGGER_MS);
        return () => { ... };
      }
    }
  }
  const obj4 = { style: tmp4.label, accessibilityElementsHidden: rotating, importantForAccessibility: "auto", children: tmp25 };
  ref = noop.useRef(null);
  cResult[14] = rotating;
  cResult[15] = tmp4.label;
  cResult[16] = "auto";
  cResult[17] = tmp25;
  cResult[18] = closure_7(ref2, { style: tmp4.label, accessibilityElementsHidden: rotating, importantForAccessibility: "auto", children: tmp25 });
  const tmp27 = closure_7(ref2, { style: tmp4.label, accessibilityElementsHidden: rotating, importantForAccessibility: "auto", children: tmp25 });
}) : (function ThinkingIndicator(line) {
  line = line.line;
  const rotating = line.rotating;
  let immediate = line.immediate;
  text = undefined;
  noop = undefined;
  let ref2;
  let ref;
  closure_7 = undefined;
  closure_8 = undefined;
  const tmp = closure_9();
  [text] = noop.useState(line);
  _slicedToArray = tmp4;
  if (immediate) {
    immediate = text !== line;
  }
  if (immediate) {
    tmp4(line);
  }
  noop = obj.useRef(line);
  ref2 = obj.useRef(text);
  ref = obj.useRef(null);
  const items = [line];
  const effect = obj.useEffect(() => {
    closure_4.current = line;
  }, items);
  const items1 = [text];
  const effect1 = obj.useEffect(() => {
    closure_5.current = current;
  }, items1);
  closure_7 = obj.useRef(rotating);
  closure_8 = obj.useRef(0);
  const items2 = [rotating];
  const effect2 = obj.useEffect(() => {
    closure_7.current = rotating;
    let isRecallingLineResult = !rotating;
    if (!rotating) {
      isRecallingLineResult = ConjureStatusLabels.isRecallingLine(ref2.current);
    }
    if (isRecallingLineResult) {
      closure_3(ref.current);
    }
  }, items2);
  const effect3 = obj.useEffect(() => {
    function beat() {
      if (ref4.current) {
        let num = 0;
        if (obj.isRecallingLine(ref2.current)) {
          num = ref.current + 1;
        }
        ref.current = num;
        obj = line(first[9]);
        closure_1_3(line(first[9]).recallingLine(ref.current));
        const tmp8Result = line(first[9]);
      } else if (ref.current !== ref2.current) {
        closure_1_3(tmp.current);
      } else {
        const current = ref3.current;
        if (current != null) {
          current.play();
        }
      }
    }
    closure_0 = null;
    const timeout = setTimeout(() => {
      beat();
      const interval = setInterval(beat, AI_LOADER_CYCLE_MS);
    }, line(first[9]).INDICATOR_PASS_STAGGER_MS);
    return () => {
      clearTimeout(closure_2);
      if (null != closure_0) {
        const _clearInterval = clearInterval;
        clearInterval(closure_0);
      }
    };
  }, []);
  const obj2 = { style: tmp.indicator, children: null };
  const items3 = [closure_7(line(text[10]).AILoader, { size: 10, color: "text-subtle" }), ];
  const obj3 = { style: tmp.label, accessibilityElementsHidden: rotating, importantForAccessibility: null, children: null };
  let str = "auto";
  if (rotating) {
    str = "no-hide-descendants";
  }
  obj3.importantForAccessibility = str;
  obj3.children = closure_7(line(text[11]).AIShimmer, { ref, text, variant: "text-xs/medium", color: "text-subtle", duration: line(text[9]).INDICATOR_PASS_MS, delay: null });
  items3[1] = closure_7(ref2, obj3);
  obj2.children = items3;
  return closure_8(ref2, obj2);
});
ReactCompilerGating = fn(558);
let obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/agent_activity/native/ConjureNativeStatusStrip.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureNativeStatusStrip(projectId) {
  const cResult = projectId(576).c(42);
  projectId = projectId.projectId;
  ({ thinking, turnStartedAt, compacting, saving, recalling, activity, projectUsage, connLabel, connFailed, controlling, thinkingOpen, onToggleThinking } = projectId);
  closure_9();
  if (cResult[0] === activity) {
    if (cResult[1] === compacting) {
      if (cResult[2] === controlling) {
        if (cResult[3] === tmp5) {
          if (cResult[4] === tmp4) {
            let tmp7 = cResult[5];
            let tmp8 = cResult[6];
          }
          if (cResult[7] !== projectUsage) {
            let runesUsedLabelsResult = null;
            if (null != projectUsage) {
              runesUsedLabelsResult = tmp(17036).runesUsedLabels(projectUsage);
              const tmpResult = tmp(17036);
            }
            cResult[7] = projectUsage;
            cResult[8] = runesUsedLabelsResult;
          }
          let tmp14 = null != activity;
          if (tmp14) {
            tmp14 = "" !== activity.text;
          }
          let tmp15 = thinking;
          if (thinking) {
            if (!tmp14) {
              tmp14 = thinkingOpen;
            }
            tmp15 = tmp14;
          }
          if (cResult[9] !== projectId) {
            class X {
              constructor() {
                obj = closure_0(closure_2[13]);
                obj1 = { content: null, key: closure_0(closure_2[14]).CONJURE_USAGE_SHEET_KEY };
                obj4 = { projectId };
                obj1.content = jsx(closure_1(closure_2[14]), obj4);
                showActionSheetResult = obj.showActionSheet(obj1);
                return;
              }
            }
            cResult[9] = projectId;
            cResult[10] = X;
          } else {
            class X {
              constructor() {
                obj = closure_0(closure_2[13]);
                obj1 = { content: null, key: closure_0(closure_2[14]).CONJURE_USAGE_SHEET_KEY };
                obj4 = { projectId };
                obj1.content = jsx(closure_1(closure_2[14]), obj4);
                showActionSheetResult = obj.showActionSheet(obj1);
                return;
              }
            }
          }
          const tmp17 = tmp7 === tmp(17036).RECALLING_LINES[0];
          if (cResult[11] === tmp15) {
            class X {
              constructor() {
                obj = closure_0(closure_2[13]);
                obj1 = { content: null, key: closure_0(closure_2[14]).CONJURE_USAGE_SHEET_KEY };
                obj4 = { projectId };
                obj1.content = jsx(closure_1(closure_2[14]), obj4);
                showActionSheetResult = obj.showActionSheet(obj1);
                return;
              }
            }
          }
          if (!thinking) {
            class X {
              constructor() {
                obj = closure_0(closure_2[13]);
                obj1 = { content: null, key: closure_0(closure_2[14]).CONJURE_USAGE_SHEET_KEY };
                obj4 = { projectId };
                obj1.content = jsx(closure_1(closure_2[14]), obj4);
                showActionSheetResult = obj.showActionSheet(obj1);
                return;
              }
            }
            cResult[11] = tmp15;
            cResult[12] = tmp8;
            cResult[13] = onToggleThinking;
            cResult[14] = tmp5;
            cResult[15] = tmp17;
            cResult[16] = tmp4;
            cResult[17] = thinking;
            cResult[18] = thinkingOpen;
            cResult[19] = tmp20Result;
          }
          if (!tmp15) {
            class X {
              constructor() {
                obj = closure_0(closure_2[13]);
                obj1 = { content: null, key: closure_0(closure_2[14]).CONJURE_USAGE_SHEET_KEY };
                obj4 = { projectId };
                obj1.content = jsx(closure_1(closure_2[14]), obj4);
                showActionSheetResult = obj.showActionSheet(obj1);
                return;
              }
            }
          }
          let obj2 = { accessible: tmp15, accessibilityRole: null, accessibilityState: null, accessibilityLabel: null, accessibilityHint: null, hitSlop: 8, disabled: null, onPress: null, children: null };
          if (tmp15) {
            class X {
              constructor() {
                obj = closure_0(closure_2[13]);
                obj1 = { content: null, key: closure_0(closure_2[14]).CONJURE_USAGE_SHEET_KEY };
                obj4 = { projectId };
                obj1.content = jsx(closure_1(closure_2[14]), obj4);
                showActionSheetResult = obj.showActionSheet(obj1);
                return;
              }
            }
          }
          obj2.accessibilityRole = undefined;
          let tmp23;
          if (tmp15) {
            class X {
              constructor() {
                obj = closure_0(closure_2[13]);
                obj1 = { content: null, key: closure_0(closure_2[14]).CONJURE_USAGE_SHEET_KEY };
                obj4 = { projectId };
                obj1.content = jsx(closure_1(closure_2[14]), obj4);
                showActionSheetResult = obj.showActionSheet(obj1);
                return;
              }
            }
            tmp24[0] = thinkingOpen;
            tmp23 = tmp24;
          }
          obj2.accessibilityState = tmp23;
          if (tmp15) {
            class X {
              constructor() {
                obj = closure_0(closure_2[13]);
                obj1 = { content: null, key: closure_0(closure_2[14]).CONJURE_USAGE_SHEET_KEY };
                obj4 = { projectId };
                obj1.content = jsx(closure_1(closure_2[14]), obj4);
                showActionSheetResult = obj.showActionSheet(obj1);
                return;
              }
            }
          } else {
            class X {
              constructor() {
                obj = closure_0(closure_2[13]);
                obj1 = { content: null, key: closure_0(closure_2[14]).CONJURE_USAGE_SHEET_KEY };
                obj4 = { projectId };
                obj1.content = jsx(closure_1(closure_2[14]), obj4);
                showActionSheetResult = obj.showActionSheet(obj1);
                return;
              }
            }
          }
          obj2.accessibilityLabel = tmp25;
          let stringResult;
          if (tmp15) {
            class X {
              constructor() {
                obj = closure_0(closure_2[13]);
                obj1 = { content: null, key: closure_0(closure_2[14]).CONJURE_USAGE_SHEET_KEY };
                obj4 = { projectId };
                obj1.content = jsx(closure_1(closure_2[14]), obj4);
                showActionSheetResult = obj.showActionSheet(obj1);
                return;
              }
            }
            stringResult = obj5.string(_modDef3827["0Kemnh"]);
          }
          obj2.accessibilityHint = stringResult;
          obj2.disabled = !tmp15;
          obj2.onPress = onToggleThinking;
          const obj3 = { line: tmp8, rotating: tmp17, immediate: tmp4 };
          obj2.children = closure_7(closure_10, obj3);
          tmp20Result = closure_7(tmp(6189).PressableOpacity, obj2);
        }
      }
    }
  }
  const obj = projectId(576);
  const thinkingLabelResult = projectId(17036).thinkingLabel({ activity, compacting, saving: undefined !== saving && saving, recalling: undefined !== recalling && recalling, controlling });
  const intl = tmp(1126).intl;
  const stringResult1 = intl.string(thinkingLabelResult);
  cResult[0] = activity;
  cResult[1] = compacting;
  cResult[2] = controlling;
  cResult[3] = undefined !== recalling && recalling;
  cResult[4] = undefined !== saving && saving;
  cResult[5] = thinkingLabelResult;
  cResult[6] = stringResult1;
  tmp8 = stringResult1;
  tmp7 = thinkingLabelResult;
  const tmpResult2 = projectId(17036);
}) : (function ConjureNativeStatusStrip(compacting) {
  const projectId = compacting.projectId;
  ({ thinking, turnStartedAt, saving } = compacting);
  if (saving === undefined) {
    saving = false;
  }
  let flag = compacting.recalling;
  if (flag === undefined) {
    flag = false;
  }
  ({ activity, projectUsage, connLabel, thinkingOpen } = compacting);
  ({ connFailed, controlling, onToggleThinking } = compacting);
  const tmp = closure_9();
  const thinkingLabelResult = projectId(17036).thinkingLabel({ activity, compacting: compacting.compacting, saving, recalling: flag, controlling });
  const intl = projectId(1126).intl;
  const stringResult = intl.string(thinkingLabelResult);
  let runesUsedLabelsResult = null;
  if (null != projectUsage) {
    runesUsedLabelsResult = tmp2(17036).runesUsedLabels(projectUsage);
    const tmp2Result = tmp2(17036);
  }
  let tmp7 = null != activity;
  if (tmp7) {
    tmp7 = "" !== activity.text;
  }
  let tmp8 = thinking;
  if (thinking) {
    if (!tmp7) {
      tmp7 = thinkingOpen;
    }
    tmp8 = tmp7;
  }
  [][0] = projectId;
  let obj2 = { style: tmp.row, children: null };
  const obj3 = { style: tmp.activity, children: null };
  const obj4 = { style: tmp.live, accessibilityRole: "none", accessibilityLiveRegion: "polite", children: null };
  if (!thinking) {
    if (!flag) {
      let tmp12Result4 = null;
    }
    obj4.children = tmp12Result4;
    const items = [closure_7(View, obj4), ];
    let tmp12Result = null;
    if (thinking) {
      tmp12Result = null;
      if (null != turnStartedAt) {
        const obj5 = { startedAt: turnStartedAt, variant: "text-xs/medium" };
        tmp12Result = closure_7(ConjureNativeTurnTimerDefault, obj5);
      }
    }
    items[1] = tmp12Result;
    obj3.children = items;
    const items1 = [closure_8(View, obj3), , ];
    let tmp12Result3 = null;
    if (null != connLabel) {
      let str3 = "text-muted";
      if (connFailed) {
        str3 = "text-feedback-critical";
      }
      const obj6 = { variant: "text-xs/medium", color: str3, children: connLabel };
      tmp12Result3 = closure_7(tmp2(5086).Text, obj6);
    }
    items1[1] = tmp12Result3;
    let tmp10Result = null;
    if (null != runesUsedLabelsResult) {
      const obj7 = { accessibilityRole: "button", accessibilityLabel: runesUsedLabelsResult.aria, hitSlop: 8, style: tmp.runes, onPress: tmp9, children: null };
      const obj8 = { variant: "text-xs/medium", color: "text-muted", children: runesUsedLabelsResult.text };
      const items2 = [closure_7(tmp2(5086).Text, obj8), ];
      const obj9 = { size: "xxs", color: nativeDefault.colors.TEXT_MUTED };
      items2[1] = closure_7(tmp2(5012).CircleInformationIcon, obj9);
      obj7.children = items2;
      tmp10Result = closure_8(tmp2(6189).PressableOpacity, obj7);
    }
    items1[2] = tmp10Result;
    obj2.children = items1;
    return closure_8(View, obj2);
  }
  const tmp14 = thinkingLabelResult === projectId(17036).RECALLING_LINES[0];
  let tmp15 = tmp8;
  if (!tmp8) {
    tmp15 = tmp14;
  }
  const obj10 = { accessible: tmp15, accessibilityRole: null, accessibilityState: null, accessibilityLabel: null, accessibilityHint: null, hitSlop: 8, disabled: null, onPress: null, children: null };
  let str2;
  if (tmp8) {
    str2 = "button";
  }
  obj10.accessibilityRole = str2;
  let tmp16;
  if (tmp8) {
    const obj11 = { expanded: thinkingOpen };
    tmp16 = obj11;
  }
  obj10.accessibilityState = tmp16;
  if (tmp8) {
    const tmp17 = stringResult;
  }
  obj10.accessibilityLabel = tmp17;
  let stringResult1;
  if (tmp8) {
    const intl2 = tmp2(1126).intl;
    stringResult1 = intl2.string(_modDef3827["0Kemnh"]);
  }
  obj10.accessibilityHint = stringResult1;
  obj10.disabled = !tmp8;
  obj10.onPress = onToggleThinking;
  obj10.children = closure_7(closure_10, { line: stringResult, rotating: tmp14, immediate: saving });
  tmp12Result4 = closure_7(tmp2(6189).PressableOpacity, obj10);
  const obj = projectId(17036);
});