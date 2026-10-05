// === Module 16746: ConjureNativeStatusStrip ===

// Module 16746 (ConjureNativeStatusStrip)
import nativeDefault from "native" /* 587 */;
import _modDef3723 from "module_3723" /* 3723 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4854 */;
import ConjureStatusLabels from "ConjureStatusLabels" /* 16740 */;
import ConjureUsageSheet from "ConjureUsageSheet" /* 16747 */;
import ConjureNativeTurnTimerDefault from "ConjureNativeTurnTimer" /* 16748 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const ConjureUsageSheetDefault = ConjureUsageSheet;

require = fn;
let View = fn(17).View;
const AI_LOADER_CYCLE_MS = fn(14210).AI_LOADER_CYCLE_MS;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4890);
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
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((line) => {
  const cResult = line(text[8]).c(22);
  line = line.line;
  const rotating = line.rotating;
  const tmp4 = closure_9();
  [text, _slicedToArray] = noop.useState(line);
  noop = noop.useRef(line);
  View = noop.useRef(text);
  let obj = line(text[8]);
  if (cResult[0] !== line) {
    const fn = function y() {
      closure_4.current = line;
    };
    const items = [line];
    cResult[0] = line;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp9 = items;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[1];
    tmp9 = cResult[2];
  }
  const effect = obj2.useEffect(tmp8, tmp9);
  if (cResult[3] !== text) {
    const fn2 = function f() {
      closure_5.current = current;
    };
    const items1 = [text];
    cResult[3] = text;
    cResult[4] = fn2;
    cResult[5] = items1;
    let tmp12 = items1;
    let tmp11 = fn2;
  } else {
    tmp11 = cResult[4];
    tmp12 = cResult[5];
  }
  const effect1 = obj2.useEffect(tmp11, tmp12);
  closure_7 = obj2.useRef(rotating);
  closure_8 = obj2.useRef(0);
  if (cResult[6] !== rotating) {
    class C {
      constructor() {
        closure_7.current = rotating;
        isRecallingLineResult = !rotating;
        if (!rotating) {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[9]);
          tmp4 = closure_5;
          isRecallingLineResult = obj.isRecallingLine(closure_5.current);
        }
        if (isRecallingLineResult) {
          tmp5 = closure_3;
          tmp6 = closure_4;
          tmp7 = closure_3(closure_4.current);
        }
        return;
      }
    }
    const items2 = [rotating];
    cResult[6] = rotating;
    cResult[7] = C;
    cResult[8] = items2;
    let tmp15 = items2;
  } else {
    class C {
      constructor() {
        closure_7.current = rotating;
        isRecallingLineResult = !rotating;
        if (!rotating) {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[9]);
          tmp4 = closure_5;
          isRecallingLineResult = obj.isRecallingLine(closure_5.current);
        }
        if (isRecallingLineResult) {
          tmp5 = closure_3;
          tmp6 = closure_4;
          tmp7 = closure_3(closure_4.current);
        }
        return;
      }
    }
    tmp15 = cResult[8];
  }
  const effect2 = obj2.useEffect(C, tmp15);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        closure_0 = null;
        beat = function beat() {
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
        };
        closure_2 = setTimeout(() => {
          beat();
          const interval = setInterval(beat, AI_LOADER_CYCLE_MS);
        }, line(closure_2[9]).INDICATOR_PASS_STAGGER_MS);
        return () => {
          clearTimeout(closure_2);
          if (null != closure_0) {
            const _clearInterval = clearInterval;
            clearInterval(closure_0);
          }
        };
      }
    }
    const items3 = [];
    cResult[9] = O;
    cResult[10] = items3;
    let tmp18 = items3;
  } else {
    class O {
      constructor() {
        closure_0 = null;
        beat = function beat() {
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
        };
        closure_2 = setTimeout(() => {
          beat();
          const interval = setInterval(beat, AI_LOADER_CYCLE_MS);
        }, line(closure_2[9]).INDICATOR_PASS_STAGGER_MS);
        return () => {
          clearTimeout(closure_2);
          if (null != closure_0) {
            const _clearInterval = clearInterval;
            clearInterval(closure_0);
          }
        };
      }
    }
    tmp18 = cResult[10];
  }
  const effect3 = obj2.useEffect(O, tmp18);
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        closure_0 = null;
        beat = function beat() {
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
        };
        closure_2 = setTimeout(() => {
          beat();
          const interval = setInterval(beat, AI_LOADER_CYCLE_MS);
        }, line(closure_2[9]).INDICATOR_PASS_STAGGER_MS);
        return () => {
          clearTimeout(closure_2);
          if (null != closure_0) {
            const _clearInterval = clearInterval;
            clearInterval(closure_0);
          }
        };
      }
    }
    const tmp21 = closure_7(tmp(tmp2[10]).AILoader, { size: 10, color: "text-subtle" });
    cResult[11] = tmp21;
  } else {
    class O {
      constructor() {
        closure_0 = null;
        beat = function beat() {
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
        };
        closure_2 = setTimeout(() => {
          beat();
          const interval = setInterval(beat, AI_LOADER_CYCLE_MS);
        }, line(closure_2[9]).INDICATOR_PASS_STAGGER_MS);
        return () => {
          clearTimeout(closure_2);
          if (null != closure_0) {
            const _clearInterval = clearInterval;
            clearInterval(closure_0);
          }
        };
      }
    }
  }
  if (rotating) {
    class O {
      constructor() {
        closure_0 = null;
        beat = function beat() {
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
        };
        closure_2 = setTimeout(() => {
          beat();
          const interval = setInterval(beat, AI_LOADER_CYCLE_MS);
        }, line(closure_2[9]).INDICATOR_PASS_STAGGER_MS);
        return () => {
          clearTimeout(closure_2);
          if (null != closure_0) {
            const _clearInterval = clearInterval;
            clearInterval(closure_0);
          }
        };
      }
    }
  }
  if (cResult[12] !== text) {
    class O {
      constructor() {
        closure_0 = null;
        beat = function beat() {
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
        };
        closure_2 = setTimeout(() => {
          beat();
          const interval = setInterval(beat, AI_LOADER_CYCLE_MS);
        }, line(closure_2[9]).INDICATOR_PASS_STAGGER_MS);
        return () => {
          clearTimeout(closure_2);
          if (null != closure_0) {
            const _clearInterval = clearInterval;
            clearInterval(closure_0);
          }
        };
      }
    }
    const obj3 = { ref, text, variant: "text-xs/medium", color: "text-subtle", duration: tmp(tmp2[9]).INDICATOR_PASS_MS, delay: null };
    const tmp23 = closure_7(tmp(tmp2[11]).AIShimmer, obj3);
    cResult[12] = text;
    cResult[13] = tmp23;
  } else {
    class O {
      constructor() {
        closure_0 = null;
        beat = function beat() {
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
        };
        closure_2 = setTimeout(() => {
          beat();
          const interval = setInterval(beat, AI_LOADER_CYCLE_MS);
        }, line(closure_2[9]).INDICATOR_PASS_STAGGER_MS);
        return () => {
          clearTimeout(closure_2);
          if (null != closure_0) {
            const _clearInterval = clearInterval;
            clearInterval(closure_0);
          }
        };
      }
    }
  }
  if (cResult[14] === rotating) {
    class O {
      constructor() {
        closure_0 = null;
        beat = function beat() {
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
        };
        closure_2 = setTimeout(() => {
          beat();
          const interval = setInterval(beat, AI_LOADER_CYCLE_MS);
        }, line(closure_2[9]).INDICATOR_PASS_STAGGER_MS);
        return () => {
          clearTimeout(closure_2);
          if (null != closure_0) {
            const _clearInterval = clearInterval;
            clearInterval(closure_0);
          }
        };
      }
    }
  }
  const obj4 = { style: tmp4.label, accessibilityElementsHidden: rotating, importantForAccessibility: "auto", children: tmp22 };
  ref = noop.useRef(null);
  cResult[14] = rotating;
  cResult[15] = tmp4.label;
  cResult[16] = "auto";
  cResult[17] = tmp22;
  cResult[18] = closure_7(View, { style: tmp4.label, accessibilityElementsHidden: rotating, importantForAccessibility: "auto", children: tmp22 });
  const tmp24 = closure_7(View, { style: tmp4.label, accessibilityElementsHidden: rotating, importantForAccessibility: "auto", children: tmp22 });
}) : ((line) => {
  line = line.line;
  const rotating = line.rotating;
  text = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  const tmp = closure_9();
  [text, _slicedToArray] = noop.useState(line);
  noop = noop.useRef(line);
  const ref2 = noop.useRef(text);
  const ref = noop.useRef(null);
  const items = [line];
  const effect = noop.useEffect(() => {
    closure_4.current = line;
  }, items);
  const items1 = [text];
  const effect1 = noop.useEffect(() => {
    closure_5.current = current;
  }, items1);
  closure_7 = noop.useRef(rotating);
  closure_8 = noop.useRef(0);
  const items2 = [rotating];
  const effect2 = noop.useEffect(() => {
    closure_7.current = rotating;
    let isRecallingLineResult = !rotating;
    if (!rotating) {
      isRecallingLineResult = ConjureStatusLabels.isRecallingLine(ref2.current);
    }
    if (isRecallingLineResult) {
      closure_3(ref.current);
    }
  }, items2);
  const effect3 = noop.useEffect(() => {
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
  let obj = { style: tmp.indicator, children: null };
  const items3 = [closure_7(line(text[10]).AILoader, { size: 10, color: "text-subtle" }), ];
  const obj2 = { style: tmp.label, accessibilityElementsHidden: rotating, importantForAccessibility: null, children: null };
  let str = "auto";
  if (rotating) {
    str = "no-hide-descendants";
  }
  obj2.importantForAccessibility = str;
  obj2.children = closure_7(line(text[11]).AIShimmer, { ref, text, variant: "text-xs/medium", color: "text-subtle", duration: line(text[9]).INDICATOR_PASS_MS, delay: null });
  items3[1] = closure_7(ref2, obj2);
  obj.children = items3;
  return closure_8(ref2, obj);
});
ReactCompilerGating = fn(558);
let obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/agent_activity/native/ConjureNativeStatusStrip.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  const cResult = projectId(576).c(40);
  projectId = projectId.projectId;
  ({ thinking, turnStartedAt, compacting, recalling, activity, projectUsage, connLabel, connFailed, controlling, thinkingOpen, onToggleThinking } = projectId);
  closure_9();
  if (cResult[0] === activity) {
    if (cResult[1] === compacting) {
      if (cResult[2] === controlling) {
        if (cResult[3] === tmp4) {
          let tmp6 = cResult[4];
          let tmp7 = cResult[5];
        }
        if (cResult[6] !== projectUsage) {
          let runesUsedLabelsResult = null;
          if (null != projectUsage) {
            runesUsedLabelsResult = tmp(16740).runesUsedLabels(projectUsage);
            const tmpResult = tmp(16740);
          }
          cResult[6] = projectUsage;
          cResult[7] = runesUsedLabelsResult;
        }
        let tmp13 = null != activity;
        if (tmp13) {
          tmp13 = "" !== activity.text;
        }
        let tmp14 = thinking;
        if (thinking) {
          if (!tmp13) {
            tmp13 = thinkingOpen;
          }
          tmp14 = tmp13;
        }
        if (cResult[8] !== projectId) {
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
          cResult[8] = projectId;
          cResult[9] = X;
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
        const tmp16 = tmp6 === tmp(16740).RECALLING_LINES[0];
        if (cResult[10] === tmp14) {
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
        if (thinking) {
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
          if (!tmp14) {
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
          let obj2 = { accessible: tmp14, accessibilityRole: null, accessibilityState: null, accessibilityLabel: null, accessibilityHint: null, hitSlop: 8, disabled: null, onPress: null, children: null };
          if (tmp14) {
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
          let tmp22;
          if (tmp14) {
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
            tmp23[0] = thinkingOpen;
            tmp22 = tmp23;
          }
          obj2.accessibilityState = tmp22;
          if (tmp14) {
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
          obj2.accessibilityLabel = tmp24;
          let stringResult;
          if (tmp14) {
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
            stringResult = obj5.string(_modDef3723["0Kemnh"]);
          }
          obj2.accessibilityHint = stringResult;
          obj2.disabled = !tmp14;
          obj2.onPress = onToggleThinking;
          const obj3 = { line: tmp7, rotating: tmp16 };
          obj2.children = tmp19(closure_10, obj3);
          const tmp19Result = tmp19(tmp(5909).PressableOpacity, obj2);
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
        cResult[10] = tmp14;
        cResult[11] = tmp7;
        cResult[12] = onToggleThinking;
        cResult[13] = tmp4;
        cResult[14] = tmp16;
        cResult[15] = thinking;
        cResult[16] = thinkingOpen;
        cResult[17] = tmp19Result;
      }
    }
  }
  const obj = projectId(576);
  const thinkingLabelResult = projectId(16740).thinkingLabel({ activity, compacting, recalling: undefined !== recalling && recalling, controlling });
  const intl = tmp(1126).intl;
  const stringResult1 = intl.string(thinkingLabelResult);
  cResult[0] = activity;
  cResult[1] = compacting;
  cResult[2] = controlling;
  cResult[3] = undefined !== recalling && recalling;
  cResult[4] = thinkingLabelResult;
  cResult[5] = stringResult1;
  tmp7 = stringResult1;
  tmp6 = thinkingLabelResult;
  const tmpResult2 = projectId(16740);
}) : ((compacting) => {
  const projectId = compacting.projectId;
  ({ thinking, turnStartedAt, recalling } = compacting);
  if (recalling === undefined) {
    recalling = false;
  }
  ({ activity, projectUsage, connLabel, thinkingOpen } = compacting);
  ({ connFailed, controlling, onToggleThinking } = compacting);
  const tmp = closure_9();
  const thinkingLabelResult = projectId(16740).thinkingLabel({ activity, compacting: compacting.compacting, recalling, controlling });
  const intl = projectId(1126).intl;
  const stringResult = intl.string(thinkingLabelResult);
  let runesUsedLabelsResult = null;
  if (null != projectUsage) {
    runesUsedLabelsResult = tmp2(16740).runesUsedLabels(projectUsage);
    const tmp2Result = tmp2(16740);
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
  const items = [projectId];
  let obj2 = { style: tmp.row, children: null };
  const obj3 = { style: tmp.activity, children: null };
  const obj4 = { style: tmp.live, accessibilityRole: "none", accessibilityLiveRegion: "polite", children: null };
  const callback = noop.useCallback(() => {
    const obj2 = { content: React5(ConjureUsageSheetDefault, { projectId }), key: ConjureUsageSheet.CONJURE_USAGE_SHEET_KEY };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items);
  if (thinking) {
    const tmp14 = thinkingLabelResult === projectId(16740).RECALLING_LINES[0];
    let tmp15 = tmp8;
    if (!tmp8) {
      tmp15 = tmp14;
    }
    const obj5 = { accessible: tmp15, accessibilityRole: null, accessibilityState: null, accessibilityLabel: null, accessibilityHint: null, hitSlop: 8, disabled: null, onPress: null, children: null };
    let str2;
    if (tmp8) {
      str2 = "button";
    }
    obj5.accessibilityRole = str2;
    let tmp16;
    if (tmp8) {
      const obj6 = { expanded: thinkingOpen };
      tmp16 = obj6;
    }
    obj5.accessibilityState = tmp16;
    if (tmp8) {
      const tmp17 = stringResult;
    }
    obj5.accessibilityLabel = tmp17;
    let stringResult1;
    if (tmp8) {
      const intl2 = tmp2(1126).intl;
      stringResult1 = intl2.string(_modDef3723["0Kemnh"]);
    }
    obj5.accessibilityHint = stringResult1;
    obj5.disabled = !tmp8;
    obj5.onPress = onToggleThinking;
    const obj7 = { line: stringResult, rotating: tmp14 };
    obj5.children = closure_7(closure_10, obj7);
    let tmp12Result = closure_7(tmp2(5909).PressableOpacity, obj5);
  } else {
    tmp12Result = null;
  }
  obj4.children = tmp12Result;
  const items1 = [closure_7(View, obj4), ];
  let tmp12Result3 = null;
  if (thinking) {
    tmp12Result3 = null;
    if (null != turnStartedAt) {
      const obj8 = { startedAt: turnStartedAt, variant: "text-xs/medium" };
      tmp12Result3 = closure_7(ConjureNativeTurnTimerDefault, obj8);
    }
  }
  items1[1] = tmp12Result3;
  obj3.children = items1;
  const items2 = [closure_8(View, obj3), , ];
  let tmp12Result4 = null;
  if (null != connLabel) {
    let str3 = "text-muted";
    if (connFailed) {
      str3 = "text-feedback-critical";
    }
    const obj9 = { variant: "text-xs/medium", color: str3, children: connLabel };
    tmp12Result4 = closure_7(tmp2(4886).Text, obj9);
  }
  items2[1] = tmp12Result4;
  let tmp10Result = null;
  if (null != runesUsedLabelsResult) {
    const obj10 = { accessibilityRole: "button", accessibilityLabel: runesUsedLabelsResult.aria, hitSlop: 8, style: tmp.runes, onPress: callback, children: null };
    const obj11 = { variant: "text-xs/medium", color: "text-muted", children: runesUsedLabelsResult.text };
    const items3 = [closure_7(tmp2(4886).Text, obj11), ];
    const obj12 = { size: "xxs", color: nativeDefault.colors.TEXT_MUTED };
    items3[1] = closure_7(tmp2(4812).CircleInformationIcon, obj12);
    obj10.children = items3;
    tmp10Result = closure_8(tmp2(5909).PressableOpacity, obj10);
  }
  items2[2] = tmp10Result;
  obj2.children = items2;
  return closure_8(View, obj2);
});