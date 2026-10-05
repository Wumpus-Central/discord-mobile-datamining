// === Module 16746: ConjureNativeStatusStrip ===

// Module 16746 (ConjureNativeStatusStrip)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import _modDef3723 from "module_3723" /* 3723 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4854 */;
import AILoaderConstants from "AILoaderConstants" /* 14210 */;
import ConjureStatusLabels from "ConjureStatusLabels" /* 16740 */;
import ConjureUsageSheet from "ConjureUsageSheet" /* 16747 */;
import ConjureNativeTurnTimerDefault from "ConjureNativeTurnTimer" /* 16748 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ConjureUsageSheetDefault = ConjureUsageSheet;
let line, obj1, projectId, showActionSheetResult;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let View = react_native.View;
const AI_LOADER_CYCLE_MS = AILoaderConstants.AI_LOADER_CYCLE_MS;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { row: obj2, activity: obj3, live: { flexShrink: 1 }, indicator: obj4, label: { flexShrink: 1 }, runes: obj5 };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_4, minHeight: nativeDefault.space.PX_4 + nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, minHeight: nativeDefault.space.PX_16 };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, alignSelf: "flex-start" };
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_9 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((line) => {
  let closure_3;
  let first;
  let ref2;
  let text;
  let tmp11;
  let tmp12;
  let tmp15;
  let tmp18;
  let tmp8;
  let tmp9;
  const tmp = line;
  let obj = line(text[8]);
  const cResult = obj.c(22);
  line = line.line;
  const rotating = line.rotating;
  const tmp4 = closure_9();
  [text, _slicedToArray] = react.useState(line);
  react = react.useRef(line);
  View = react.useRef(text);
  const ref = react.useRef(null);
  if (cResult[0] !== line) {
    const fn = function y() {
      ref.current = line;
    };
    const items = [line];
    let num = 0;
    cResult[0] = line;
    cResult[1] = fn;
    cResult[2] = items;
    tmp9 = items;
    tmp8 = fn;
  } else {
    tmp8 = cResult[1];
    tmp9 = cResult[2];
  }
  const effect = obj2.useEffect(tmp8, tmp9);
  if (cResult[3] !== text) {
    const fn2 = function f() {
      ref2.current = current;
    };
    const items1 = [text];
    cResult[3] = text;
    cResult[4] = fn2;
    cResult[5] = items1;
    tmp12 = items1;
    tmp11 = fn2;
  } else {
    tmp11 = cResult[4];
    tmp12 = cResult[5];
  }
  const effect1 = obj2.useEffect(tmp11, tmp12);
  let closure_7 = obj2.useRef(rotating);
  let closure_8 = obj2.useRef(0);
  if (cResult[6] !== rotating) {
    class C {
      constructor() {
        closure_7.current = rotating;
        let isRecallingLineResult = !rotating;
        if (isRecallingLineResult) {
          const obj = ConjureStatusLabels;
          isRecallingLineResult = obj.isRecallingLine(ref2.current);
        }
        if (isRecallingLineResult) {
          closure_3(ref.current);
        }
      }
    }
    const items2 = [rotating];
    cResult[6] = rotating;
    cResult[7] = C;
    cResult[8] = items2;
    tmp15 = items2;
  } else {
    class C {
      constructor() {
        closure_7.current = rotating;
        let isRecallingLineResult = !rotating;
        if (isRecallingLineResult) {
          const obj = ConjureStatusLabels;
          isRecallingLineResult = obj.isRecallingLine(ref2.current);
        }
        if (isRecallingLineResult) {
          closure_3(ref.current);
        }
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
            const obj = line(first[9]);
            if (obj.isRecallingLine(ref2.current)) {
              num = ref.current + 1;
            }
            ref.current = num;
            const tmp8Result = line(first[9]);
            closure_1_3(tmp8Result.recallingLine(ref.current));
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
    tmp18 = items3;
  } else {
    class O {
      constructor() {
        closure_0 = null;
        beat = function beat() {
          if (ref4.current) {
            let num = 0;
            const obj = line(first[9]);
            if (obj.isRecallingLine(ref2.current)) {
              num = ref.current + 1;
            }
            ref.current = num;
            const tmp8Result = line(first[9]);
            closure_1_3(tmp8Result.recallingLine(ref.current));
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
            const obj = line(first[9]);
            if (obj.isRecallingLine(ref2.current)) {
              num = ref.current + 1;
            }
            ref.current = num;
            const tmp8Result = line(first[9]);
            closure_1_3(tmp8Result.recallingLine(ref.current));
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
    cResult[11] = closure_7(tmp(text[10]).AILoader, { size: 10, color: "text-subtle" });
    const tmp21 = closure_7(tmp(text[10]).AILoader, { size: 10, color: "text-subtle" });
  } else {
    class O {
      constructor() {
        closure_0 = null;
        beat = function beat() {
          if (ref4.current) {
            let num = 0;
            const obj = line(first[9]);
            if (obj.isRecallingLine(ref2.current)) {
              num = ref.current + 1;
            }
            ref.current = num;
            const tmp8Result = line(first[9]);
            closure_1_3(tmp8Result.recallingLine(ref.current));
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
            const obj = line(first[9]);
            if (obj.isRecallingLine(ref2.current)) {
              num = ref.current + 1;
            }
            ref.current = num;
            const tmp8Result = line(first[9]);
            closure_1_3(tmp8Result.recallingLine(ref.current));
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
            const obj = line(first[9]);
            if (obj.isRecallingLine(ref2.current)) {
              num = ref.current + 1;
            }
            ref.current = num;
            const tmp8Result = line(first[9]);
            closure_1_3(tmp8Result.recallingLine(ref.current));
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
    const obj3 = { ref, text, variant: "text-xs/medium", color: "text-subtle", duration: tmp(text[9]).INDICATOR_PASS_MS, delay: null };
    const AIShimmer = tmp(tmp2[11]).AIShimmer;
    cResult[12] = text;
    cResult[13] = closure_7(AIShimmer, obj3);
    const tmp23 = closure_7(AIShimmer, obj3);
  } else {
    class O {
      constructor() {
        closure_0 = null;
        beat = function beat() {
          if (ref4.current) {
            let num = 0;
            const obj = line(first[9]);
            if (obj.isRecallingLine(ref2.current)) {
              num = ref.current + 1;
            }
            ref.current = num;
            const tmp8Result = line(first[9]);
            closure_1_3(tmp8Result.recallingLine(ref.current));
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
            const obj = line(first[9]);
            if (obj.isRecallingLine(ref2.current)) {
              num = ref.current + 1;
            }
            ref.current = num;
            const tmp8Result = line(first[9]);
            closure_1_3(tmp8Result.recallingLine(ref.current));
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
  cResult[14] = rotating;
  cResult[15] = tmp4.label;
  cResult[16] = "auto";
  cResult[17] = tmp22;
  cResult[18] = closure_7(View, obj4);
  closure_7(View, obj4);
}) : ((line) => {
  let AIShimmer;
  let closure_3;
  let first;
  let items3;
  let obj3;
  let str;
  let text;
  line = line.line;
  const rotating = line.rotating;
  text = undefined;
  _slicedToArray = undefined;
  react = undefined;
  const tmp = closure_9();
  [text, _slicedToArray] = react.useState(line);
  react = react.useRef(line);
  const ref2 = react.useRef(text);
  const ref = react.useRef(null);
  const items = [line];
  const effect = react.useEffect(() => {
    ref.current = line;
  }, items);
  const items1 = [text];
  const effect1 = react.useEffect(() => {
    ref2.current = current;
  }, items1);
  let closure_7 = react.useRef(rotating);
  let closure_8 = react.useRef(0);
  const items2 = [rotating];
  const effect2 = react.useEffect(() => {
    closure_7.current = rotating;
    let isRecallingLineResult = !rotating;
    if (isRecallingLineResult) {
      const obj = ConjureStatusLabels;
      isRecallingLineResult = obj.isRecallingLine(ref2.current);
    }
    if (isRecallingLineResult) {
      closure_3(ref.current);
    }
  }, items2);
  const effect3 = react.useEffect(() => {
    let closure_2;
    let ref3;
    let ref4;
    function beat() {
      if (ref4.current) {
        let num = 0;
        const obj = line(first[9]);
        if (obj.isRecallingLine(ref2.current)) {
          num = ref.current + 1;
        }
        ref.current = num;
        const tmp8Result = line(first[9]);
        closure_1_3(tmp8Result.recallingLine(ref.current));
      } else if (ref.current !== ref2.current) {
        closure_1_3(tmp.current);
      } else {
        const current = ref3.current;
        if (current != null) {
          current.play();
        }
      }
    }
    let closure_0 = null;
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
  let obj = { style: tmp.indicator, children: items3 };
  items3 = [closure_7(line(text[10]).AILoader, { size: 10, color: "text-subtle" }), ];
  const obj2 = { style: tmp.label, accessibilityElementsHidden: rotating, importantForAccessibility: str, children: closure_7(AIShimmer, obj3) };
  str = "auto";
  const tmp9 = closure_8;
  if (rotating) {
    str = "no-hide-descendants";
  }
  obj3 = { ref, text, variant: "text-xs/medium", color: "text-subtle", duration: line(text[9]).INDICATOR_PASS_MS, delay: null };
  AIShimmer = tmp12(tmp13[11]).AIShimmer;
  items3[1] = closure_7(ref2, obj2);
  return tmp9(ref2, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  let activity;
  let compacting;
  let connFailed;
  let connLabel;
  let controlling;
  let obj3;
  let onToggleThinking;
  let projectUsage;
  let recalling;
  let stringResult;
  let thinking;
  let thinkingOpen;
  let tmp23;
  let turnStartedAt;
  let tmp = projectId;
  let obj = projectId(576);
  const cResult = obj.c(40);
  projectId = projectId.projectId;
  ({ thinking, turnStartedAt, compacting, recalling, activity, projectUsage, connLabel, connFailed, controlling, thinkingOpen, onToggleThinking } = projectId);
  closure_9();
  if (cResult[0] === activity) {
    if (cResult[1] === compacting) {
      if (cResult[2] === controlling) {
        let tmp6;
        let tmp7;
        let tmp20Result;
        if (cResult[3] === (undefined !== recalling && recalling)) {
          tmp6 = cResult[4];
          tmp7 = cResult[5];
        }
        const first = tmp(16740).RECALLING_LINES[0];
        if (cResult[6] !== projectUsage) {
          let runesUsedLabelsResult = null;
          if (null != projectUsage) {
            const tmpResult = tmp(16740);
            runesUsedLabelsResult = tmpResult.runesUsedLabels(projectUsage);
          }
          cResult[6] = projectUsage;
          cResult[7] = runesUsedLabelsResult;
        }
        let tmp14 = null != activity && "" !== activity.text;
        let tmp15 = thinking;
        if (tmp15) {
          if (!tmp14) {
            tmp14 = thinkingOpen;
          }
          tmp15 = tmp14;
        }
        if (cResult[8] !== projectId) {
          class X {
            constructor() {
              tmp = closure_0(closure_2[13]);
              obj = { content: null, key: closure_0(closure_2[14]).CONJURE_USAGE_SHEET_KEY };
              showActionSheet = tmp.showActionSheet;
              obj1 = { projectId };
              obj.content = jsx(closure_1(closure_2[14]), obj1);
              showActionSheetResult = showActionSheet(obj);
              return;
            }
          }
          cResult[8] = projectId;
          cResult[9] = X;
        } else {
          class X {
            constructor() {
              tmp = closure_0(closure_2[13]);
              obj = { content: null, key: closure_0(closure_2[14]).CONJURE_USAGE_SHEET_KEY };
              showActionSheet = tmp.showActionSheet;
              obj1 = { projectId };
              obj.content = jsx(closure_1(closure_2[14]), obj1);
              showActionSheetResult = showActionSheet(obj);
              return;
            }
          }
        }
        if (cResult[10] === tmp15) {
          class X {
            constructor() {
              tmp = closure_0(closure_2[13]);
              obj = { content: null, key: closure_0(closure_2[14]).CONJURE_USAGE_SHEET_KEY };
              showActionSheet = tmp.showActionSheet;
              obj1 = { projectId };
              obj.content = jsx(closure_1(closure_2[14]), obj1);
              showActionSheetResult = showActionSheet(obj);
              return;
            }
          }
        }
        if (thinking) {
          class X {
            constructor() {
              tmp = closure_0(closure_2[13]);
              obj = { content: null, key: closure_0(closure_2[14]).CONJURE_USAGE_SHEET_KEY };
              showActionSheet = tmp.showActionSheet;
              obj1 = { projectId };
              obj.content = jsx(closure_1(closure_2[14]), obj1);
              showActionSheetResult = showActionSheet(obj);
              return;
            }
          }
          const PressableOpacity = tmp(5909).PressableOpacity;
          if (!tmp15) {
            class X {
              constructor() {
                tmp = closure_0(closure_2[13]);
                obj = { content: null, key: closure_0(closure_2[14]).CONJURE_USAGE_SHEET_KEY };
                showActionSheet = tmp.showActionSheet;
                obj1 = { projectId };
                obj.content = jsx(closure_1(closure_2[14]), obj1);
                showActionSheetResult = showActionSheet(obj);
                return;
              }
            }
          }
          let obj2 = { accessible: tmp21, accessibilityRole: undefined, accessibilityState: tmp23, accessibilityLabel: tmp25, accessibilityHint: stringResult, hitSlop: 8, disabled: !tmp15, onPress: onToggleThinking, children: tmp20(closure_10, obj3) };
          if (tmp15) {
            class X {
              constructor() {
                tmp = closure_0(closure_2[13]);
                obj = { content: null, key: closure_0(closure_2[14]).CONJURE_USAGE_SHEET_KEY };
                showActionSheet = tmp.showActionSheet;
                obj1 = { projectId };
                obj.content = jsx(closure_1(closure_2[14]), obj1);
                showActionSheetResult = showActionSheet(obj);
                return;
              }
            }
          }
          tmp23 = undefined;
          if (tmp15) {
            class X {
              constructor() {
                tmp = closure_0(closure_2[13]);
                obj = { content: null, key: closure_0(closure_2[14]).CONJURE_USAGE_SHEET_KEY };
                showActionSheet = tmp.showActionSheet;
                obj1 = { projectId };
                obj.content = jsx(closure_1(closure_2[14]), obj1);
                showActionSheetResult = showActionSheet(obj);
                return;
              }
            }
            tmp24[0] = thinkingOpen;
            tmp23 = tmp24;
          }
          if (tmp15) {
            class X {
              constructor() {
                tmp = closure_0(closure_2[13]);
                obj = { content: null, key: closure_0(closure_2[14]).CONJURE_USAGE_SHEET_KEY };
                showActionSheet = tmp.showActionSheet;
                obj1 = { projectId };
                obj.content = jsx(closure_1(closure_2[14]), obj1);
                showActionSheetResult = showActionSheet(obj);
                return;
              }
            }
          } else {
            class X {
              constructor() {
                tmp = closure_0(closure_2[13]);
                obj = { content: null, key: closure_0(closure_2[14]).CONJURE_USAGE_SHEET_KEY };
                showActionSheet = tmp.showActionSheet;
                obj1 = { projectId };
                obj.content = jsx(closure_1(closure_2[14]), obj1);
                showActionSheetResult = showActionSheet(obj);
                return;
              }
            }
          }
          stringResult = undefined;
          if (tmp15) {
            class X {
              constructor() {
                tmp = closure_0(closure_2[13]);
                obj = { content: null, key: closure_0(closure_2[14]).CONJURE_USAGE_SHEET_KEY };
                showActionSheet = tmp.showActionSheet;
                obj1 = { projectId };
                obj.content = jsx(closure_1(closure_2[14]), obj1);
                showActionSheetResult = showActionSheet(obj);
                return;
              }
            }
            stringResult = obj5.string(_modDef3723["0Kemnh"]);
          }
          obj3 = { line: tmp7, rotating: tmp6 === first };
          tmp20Result = tmp20(PressableOpacity, obj2);
        } else {
          class X {
            constructor() {
              tmp = closure_0(closure_2[13]);
              obj = { content: null, key: closure_0(closure_2[14]).CONJURE_USAGE_SHEET_KEY };
              showActionSheet = tmp.showActionSheet;
              obj1 = { projectId };
              obj.content = jsx(closure_1(closure_2[14]), obj1);
              showActionSheetResult = showActionSheet(obj);
              return;
            }
          }
        }
        cResult[10] = tmp15;
        cResult[11] = tmp7;
        cResult[12] = onToggleThinking;
        cResult[13] = undefined !== recalling && recalling;
        cResult[14] = tmp6 === first;
        cResult[15] = thinking;
        cResult[16] = thinkingOpen;
        cResult[17] = tmp20Result;
      }
    }
  }
  const tmpResult2 = tmp(16740);
  const thinkingLabelResult = tmpResult2.thinkingLabel({ activity, compacting, recalling: undefined !== recalling && recalling, controlling });
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
}) : ((projectId) => {
  let activity;
  let connFailed;
  let connLabel;
  let controlling;
  let items1;
  let items2;
  let items3;
  let obj7;
  let onToggleThinking;
  let projectUsage;
  let recalling;
  let str2;
  let stringResult1;
  let thinking;
  let thinkingOpen;
  let tmp13Result;
  let tmp17;
  let tmp18;
  let turnStartedAt;
  projectId = projectId.projectId;
  ({ thinking, turnStartedAt, recalling } = projectId);
  const compacting = projectId.compacting;
  if (recalling === undefined) {
    recalling = false;
  }
  ({ activity, projectUsage, connLabel, thinkingOpen } = projectId);
  ({ connFailed, controlling, onToggleThinking } = projectId);
  let tmp = closure_9();
  let obj = projectId(16740);
  const thinkingLabelResult = obj.thinkingLabel({ activity, compacting, recalling, controlling });
  const intl = projectId(1126).intl;
  const stringResult = intl.string(thinkingLabelResult);
  let runesUsedLabelsResult = null;
  const first = projectId(16740).RECALLING_LINES[0];
  if (null != projectUsage) {
    const tmp2Result = projectId(16740);
    runesUsedLabelsResult = tmp2Result.runesUsedLabels(projectUsage);
  }
  let tmp8 = null != activity && "" !== activity.text;
  let tmp9 = thinking;
  if (tmp9) {
    if (!tmp8) {
      tmp8 = thinkingOpen;
    }
    tmp9 = tmp8;
  }
  const items = [projectId];
  let obj2 = { style: tmp.row, children: items2 };
  const obj3 = { style: tmp.activity, children: items1 };
  const obj4 = { style: tmp.live, accessibilityRole: "none", accessibilityLiveRegion: "polite", children: tmp13Result };
  const callback = react.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { content: metroImportDefault(ConjureUsageSheetDefault, obj2), key: ConjureUsageSheet.CONJURE_USAGE_SHEET_KEY };
    obj2 = { projectId };
    showActionSheet(obj);
  }, items);
  if (thinking) {
    let tmp16 = tmp9;
    const PressableOpacity = tmp2(5909).PressableOpacity;
    if (!tmp9) {
      tmp16 = tmp15;
    }
    const obj5 = { accessible: tmp16, accessibilityRole: str2, accessibilityState: tmp17, accessibilityLabel: tmp18, accessibilityHint: stringResult1, hitSlop: 8, disabled: !tmp9, onPress: onToggleThinking, children: closure_7(closure_10, obj7) };
    str2 = undefined;
    if (tmp9) {
      str2 = "button";
    }
    tmp17 = undefined;
    if (tmp9) {
      tmp17 = { expanded: thinkingOpen };
      const obj6 = { expanded: thinkingOpen };
    }
    if (tmp9) {
      tmp18 = stringResult;
    }
    stringResult1 = undefined;
    if (tmp9) {
      const intl2 = tmp2(1126).intl;
      stringResult1 = intl2.string(_modDef3723["0Kemnh"]);
    }
    obj7 = { line: stringResult, rotating: thinkingLabelResult === first };
    tmp13Result = closure_7(PressableOpacity, obj5);
  } else {
    tmp13Result = null;
  }
  items1 = [closure_7(View, obj4), ];
  let tmp13Result3 = null;
  if (thinking) {
    tmp13Result3 = null;
    if (null != turnStartedAt) {
      const obj8 = { startedAt: turnStartedAt, variant: "text-xs/medium" };
      tmp13Result3 = closure_7(ConjureNativeTurnTimerDefault, obj8);
    }
  }
  items1[1] = tmp13Result3;
  items2 = [closure_8(View, obj3), , ];
  let tmp13Result4 = null;
  if (null != connLabel) {
    let str3 = "text-muted";
    const Text = tmp2(4886).Text;
    if (connFailed) {
      str3 = "text-feedback-critical";
    }
    const obj9 = { variant: "text-xs/medium", color: str3, children: connLabel };
    tmp13Result4 = closure_7(Text, obj9);
  }
  items2[1] = tmp13Result4;
  let tmp11Result = null;
  if (null != runesUsedLabelsResult) {
    const obj10 = { accessibilityRole: "button", accessibilityLabel: runesUsedLabelsResult.aria, hitSlop: 8, style: tmp.runes, onPress: callback, children: items3 };
    const PressableOpacity2 = tmp2(5909).PressableOpacity;
    const obj11 = { variant: "text-xs/medium", color: "text-muted", children: runesUsedLabelsResult.text };
    items3 = [closure_7(projectId(4886).Text, obj11), ];
    const obj12 = { size: "xxs", color: nativeDefault.colors.TEXT_MUTED };
    const CircleInformationIcon = tmp2(4812).CircleInformationIcon;
    items3[1] = closure_7(CircleInformationIcon, obj12);
    tmp11Result = closure_8(PressableOpacity2, obj10);
  }
  items2[2] = tmp11Result;
  return closure_8(View, obj2);
});
const result = size.fileFinishedImporting("modules/conjure/agent_activity/native/ConjureNativeStatusStrip.tsx");

export default tmp4;