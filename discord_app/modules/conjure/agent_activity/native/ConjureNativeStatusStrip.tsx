// discord_app/modules/conjure/agent_activity/native/ConjureNativeStatusStrip.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3849 from "../../intl/ConjureUntranslated.messages.js";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ConjureStatusLabels from "../ConjureStatusLabels.tsx";
import ConjureUsageSheet from "../../usage/native/ConjureUsageSheet.tsx";
import ConjureNativeTurnTimerDefault from "ConjureNativeTurnTimer.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ConjurePublishStatusStore from "../../publish/ConjurePublishStatusStore.tsx";

require = fn;
const View = fn(17).View;
const AI_LOADER_CYCLE_MS = fn(14227).AI_LOADER_CYCLE_MS;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: nativeDefault.space.PX_12,
    paddingHorizontal: nativeDefault.space.PX_16,
    paddingTop: nativeDefault.space.PX_4,
    minHeight: nativeDefault.space.PX_4 + nativeDefault.space.PX_24,
  },
  activity: null,
  live: null,
  indicator: null,
  label: null,
  runes: null,
};
let obj3 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_4,
  minHeight: nativeDefault.space.PX_4 + nativeDefault.space.PX_24,
};
obj2.activity = {
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  minHeight: nativeDefault.space.PX_16,
};
obj2.live = { flexShrink: 1 };
let obj4 = {
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  minHeight: nativeDefault.space.PX_16,
};
obj2.indicator = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, alignSelf: "flex-start" };
obj2.label = { flexShrink: 1 };
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, alignSelf: "flex-start" };
obj2.runes = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_4,
  paddingVertical: nativeDefault.space.PX_4,
  paddingHorizontal: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ThinkingIndicator(line) {
      const cResult = line(text[9]).c(22);
      line = line.line;
      const rotating = line.rotating;
      let immediate = line.immediate;
      const tmp4 = closure_10();
      [text] = noop.useState(line);
      _slicedToArray = tmp7;
      if (!immediate) {
        immediate = tmp(tmp2[10]).isPublishLineSwitch(line, text);
        const tmpResult = tmp(tmp2[10]);
      }
      if (immediate) {
        immediate = text !== line;
      }
      if (immediate) {
        tmp7(line);
      }
      noop = obj2.useRef(line);
      let obj = line(text[9]);
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
        class A {
          constructor() {
            closure_5.current = closure_2;
            return;
          }
        }
        const items3 = [];
        cResult[9] = tmp22;
        cResult[10] = items3;
        let tmp21 = items3;
      } else {
        class A {
          constructor() {
            closure_5.current = closure_2;
            return;
          }
        }
        tmp21 = cResult[10];
      }
      const effect3 = obj2.useEffect(tmp22, tmp21);
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class A {
          constructor() {
            closure_5.current = closure_2;
            return;
          }
        }
        const tmp25 = closure_8(tmp(tmp2[11]).AILoader, { size: 10, color: "text-subtle" });
        cResult[11] = tmp25;
      } else {
        class A {
          constructor() {
            closure_5.current = closure_2;
            return;
          }
        }
      }
      if (rotating) {
        class A {
          constructor() {
            closure_5.current = closure_2;
            return;
          }
        }
      }
      if (cResult[12] !== text) {
        class A {
          constructor() {
            closure_5.current = closure_2;
            return;
          }
        }
        const obj3 = {
          ref,
          text,
          variant: "text-xs/medium",
          color: "text-subtle",
          duration: tmp(tmp2[10]).INDICATOR_PASS_MS,
          delay: null,
        };
        const tmp27 = closure_8(tmp(tmp2[12]).AIShimmer, obj3);
        cResult[12] = text;
        cResult[13] = tmp27;
      } else {
        class A {
          constructor() {
            closure_5.current = closure_2;
            return;
          }
        }
      }
      if (cResult[14] === rotating) {
        class A {
          constructor() {
            closure_5.current = closure_2;
            return;
          }
        }
      }
      const obj4 = {
        style: tmp4.label,
        accessibilityElementsHidden: rotating,
        importantForAccessibility: "auto",
        children: tmp26,
      };
      ref = noop.useRef(null);
      cResult[14] = rotating;
      cResult[15] = tmp4.label;
      cResult[16] = "auto";
      cResult[17] = tmp26;
      cResult[18] = closure_8(ref2, {
        style: tmp4.label,
        accessibilityElementsHidden: rotating,
        importantForAccessibility: "auto",
        children: tmp26,
      });
      const tmp28 = closure_8(ref2, {
        style: tmp4.label,
        accessibilityElementsHidden: rotating,
        importantForAccessibility: "auto",
        children: tmp26,
      });
    }
  : function ThinkingIndicator(line) {
      line = line.line;
      const rotating = line.rotating;
      let immediate = line.immediate;
      text = undefined;
      noop = undefined;
      let ref2;
      let ref;
      closure_7 = undefined;
      closure_8 = undefined;
      const tmp = closure_10();
      [text] = noop.useState(line);
      _slicedToArray = tmp4;
      if (!immediate) {
        immediate = line(text[10]).isPublishLineSwitch(line, text);
        const obj2 = line(text[10]);
      }
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
            obj = line(first[10]);
            closure_1_3(line(first[10]).recallingLine(ref.current));
            const tmp8Result = line(first[10]);
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
        }, line(first[10]).INDICATOR_PASS_STAGGER_MS);
        return () => {
          clearTimeout(closure_2);
          if (null != closure_0) {
            const _clearInterval = clearInterval;
            clearInterval(closure_0);
          }
        };
      }, []);
      const obj3 = { style: tmp.indicator, children: null };
      const items3 = [closure_8(line(text[11]).AILoader, { size: 10, color: "text-subtle" })];
      const obj4 = {
        style: tmp.label,
        accessibilityElementsHidden: rotating,
        importantForAccessibility: null,
        children: null,
      };
      let str = "auto";
      if (rotating) {
        str = "no-hide-descendants";
      }
      obj4.importantForAccessibility = str;
      obj4.children = closure_8(line(text[12]).AIShimmer, {
        ref,
        text,
        variant: "text-xs/medium",
        color: "text-subtle",
        duration: line(text[10]).INDICATOR_PASS_MS,
        delay: null,
      });
      items3[1] = closure_8(ref2, obj4);
      obj3.children = items3;
      return closure_9(ref2, obj3);
    };
ReactCompilerGating = fn(558);
let obj6 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_4,
  paddingVertical: nativeDefault.space.PX_4,
  paddingHorizontal: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/agent_activity/native/ConjureNativeStatusStrip.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureNativeStatusStrip(projectId) {
      const cResult = projectId(576).c(47);
      projectId = projectId.projectId;
      ({
        thinking,
        turnStartedAt,
        compacting,
        saving,
        recalling,
        activity,
        projectUsage,
        connLabel,
        connFailed,
        controlling,
        thinkingOpen,
        onToggleThinking,
      } = projectId);
      closure_10();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ConjurePublishStatusStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== projectId) {
        const fn = function s() {
          const publishStatus = ConjurePublishStatusStore.getPublishStatus(projectId);
          let publishing;
          if (publishStatus != null) {
            publishing = publishStatus.publishing;
          }
          return true === publishing;
        };
        const items1 = [projectId];
        cResult[1] = projectId;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp10 = items1;
        let tmp9 = fn;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      const obj = projectId(576);
      const stateFromStores = projectId(504).useStateFromStores(first, tmp9, tmp10);
      if (cResult[4] === activity) {
        if (cResult[5] === compacting) {
          if (cResult[6] === controlling) {
            if (cResult[7] === stateFromStores) {
              if (cResult[8] === tmp5) {
                if (cResult[9] === tmp4) {
                  let tmp12 = cResult[10];
                  let tmp13 = cResult[11];
                }
                if (cResult[12] !== projectUsage) {
                  let runesUsedLabelsResult = null;
                  if (null != projectUsage) {
                    runesUsedLabelsResult = tmp(17189).runesUsedLabels(projectUsage);
                    const tmpResult3 = tmp(17189);
                  }
                  cResult[12] = projectUsage;
                  cResult[13] = runesUsedLabelsResult;
                }
                let tmp19 = null != activity;
                if (tmp19) {
                  tmp19 = "" !== activity.text;
                }
                let tmp20 = thinking;
                if (thinking) {
                  if (!tmp19) {
                    tmp19 = thinkingOpen;
                  }
                  tmp20 = tmp19;
                }
                if (cResult[14] !== projectId) {
                  class G {
                    constructor() {
                      obj = closure_0(closure_2[15]);
                      obj1 = { content: null, key: closure_0(closure_2[16]).CONJURE_USAGE_SHEET_KEY };
                      obj4 = { projectId };
                      obj1.content = jsx(closure_1(closure_2[16]), obj4);
                      showActionSheetResult = obj.showActionSheet(obj1);
                      return;
                    }
                  }
                  cResult[14] = projectId;
                  cResult[15] = G;
                } else {
                  class G {
                    constructor() {
                      obj = closure_0(closure_2[15]);
                      obj1 = { content: null, key: closure_0(closure_2[16]).CONJURE_USAGE_SHEET_KEY };
                      obj4 = { projectId };
                      obj1.content = jsx(closure_1(closure_2[16]), obj4);
                      showActionSheetResult = obj.showActionSheet(obj1);
                      return;
                    }
                  }
                }
                const tmp22 = tmp12 === tmp(17189).RECALLING_LINES[0];
                if (cResult[16] === tmp20) {
                  class G {
                    constructor() {
                      obj = closure_0(closure_2[15]);
                      obj1 = { content: null, key: closure_0(closure_2[16]).CONJURE_USAGE_SHEET_KEY };
                      obj4 = { projectId };
                      obj1.content = jsx(closure_1(closure_2[16]), obj4);
                      showActionSheetResult = obj.showActionSheet(obj1);
                      return;
                    }
                  }
                }
                if (!thinking) {
                  class G {
                    constructor() {
                      obj = closure_0(closure_2[15]);
                      obj1 = { content: null, key: closure_0(closure_2[16]).CONJURE_USAGE_SHEET_KEY };
                      obj4 = { projectId };
                      obj1.content = jsx(closure_1(closure_2[16]), obj4);
                      showActionSheetResult = obj.showActionSheet(obj1);
                      return;
                    }
                  }
                  cResult[16] = tmp20;
                  cResult[17] = tmp13;
                  cResult[18] = onToggleThinking;
                  cResult[19] = tmp5;
                  cResult[20] = tmp22;
                  cResult[21] = tmp4;
                  cResult[22] = thinking;
                  cResult[23] = thinkingOpen;
                  cResult[24] = tmp25Result;
                }
                if (!tmp20) {
                  class G {
                    constructor() {
                      obj = closure_0(closure_2[15]);
                      obj1 = { content: null, key: closure_0(closure_2[16]).CONJURE_USAGE_SHEET_KEY };
                      obj4 = { projectId };
                      obj1.content = jsx(closure_1(closure_2[16]), obj4);
                      showActionSheetResult = obj.showActionSheet(obj1);
                      return;
                    }
                  }
                }
                let obj2 = {
                  accessible: tmp20,
                  accessibilityRole: null,
                  accessibilityState: null,
                  accessibilityLabel: null,
                  accessibilityHint: null,
                  hitSlop: 8,
                  disabled: null,
                  onPress: null,
                  children: null,
                };
                if (tmp20) {
                  class G {
                    constructor() {
                      obj = closure_0(closure_2[15]);
                      obj1 = { content: null, key: closure_0(closure_2[16]).CONJURE_USAGE_SHEET_KEY };
                      obj4 = { projectId };
                      obj1.content = jsx(closure_1(closure_2[16]), obj4);
                      showActionSheetResult = obj.showActionSheet(obj1);
                      return;
                    }
                  }
                }
                obj2.accessibilityRole = undefined;
                let tmp28;
                if (tmp20) {
                  class G {
                    constructor() {
                      obj = closure_0(closure_2[15]);
                      obj1 = { content: null, key: closure_0(closure_2[16]).CONJURE_USAGE_SHEET_KEY };
                      obj4 = { projectId };
                      obj1.content = jsx(closure_1(closure_2[16]), obj4);
                      showActionSheetResult = obj.showActionSheet(obj1);
                      return;
                    }
                  }
                  tmp29[0] = thinkingOpen;
                  tmp28 = tmp29;
                }
                obj2.accessibilityState = tmp28;
                if (tmp20) {
                  class G {
                    constructor() {
                      obj = closure_0(closure_2[15]);
                      obj1 = { content: null, key: closure_0(closure_2[16]).CONJURE_USAGE_SHEET_KEY };
                      obj4 = { projectId };
                      obj1.content = jsx(closure_1(closure_2[16]), obj4);
                      showActionSheetResult = obj.showActionSheet(obj1);
                      return;
                    }
                  }
                } else {
                  class G {
                    constructor() {
                      obj = closure_0(closure_2[15]);
                      obj1 = { content: null, key: closure_0(closure_2[16]).CONJURE_USAGE_SHEET_KEY };
                      obj4 = { projectId };
                      obj1.content = jsx(closure_1(closure_2[16]), obj4);
                      showActionSheetResult = obj.showActionSheet(obj1);
                      return;
                    }
                  }
                }
                obj2.accessibilityLabel = tmp30;
                let stringResult;
                if (tmp20) {
                  class G {
                    constructor() {
                      obj = closure_0(closure_2[15]);
                      obj1 = { content: null, key: closure_0(closure_2[16]).CONJURE_USAGE_SHEET_KEY };
                      obj4 = { projectId };
                      obj1.content = jsx(closure_1(closure_2[16]), obj4);
                      showActionSheetResult = obj.showActionSheet(obj1);
                      return;
                    }
                  }
                  stringResult = obj6.string(_modDef3849["0Kemnh"]);
                }
                obj2.accessibilityHint = stringResult;
                obj2.disabled = !tmp20;
                obj2.onPress = onToggleThinking;
                const obj3 = { line: tmp13, rotating: tmp22, immediate: tmp4 };
                obj2.children = closure_8(closure_11, obj3);
                tmp25Result = closure_8(tmp(6185).PressableOpacity, obj2);
              }
            }
          }
        }
      }
      const tmpResult = projectId(504);
      const thinkingLabelResult = projectId(17189).thinkingLabel({
        activity,
        compacting,
        saving: undefined !== saving && saving,
        recalling: undefined !== recalling && recalling,
        controlling,
        publishPending: stateFromStores,
      });
      const intl = tmp(1126).intl;
      const stringResult1 = intl.string(thinkingLabelResult);
      cResult[4] = activity;
      cResult[5] = compacting;
      cResult[6] = controlling;
      cResult[7] = stateFromStores;
      cResult[8] = undefined !== recalling && recalling;
      cResult[9] = undefined !== saving && saving;
      cResult[10] = thinkingLabelResult;
      cResult[11] = stringResult1;
      tmp13 = stringResult1;
      tmp12 = thinkingLabelResult;
      const tmpResult4 = projectId(17189);
    }
  : function ConjureNativeStatusStrip(compacting) {
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
      const tmp = closure_10();
      const items = [ConjurePublishStatusStore];
      const items1 = [projectId];
      const stateFromStores = projectId(504).useStateFromStores(
        items,
        () => {
          const publishStatus = ConjurePublishStatusStore.getPublishStatus(projectId);
          let publishing;
          if (publishStatus != null) {
            publishing = publishStatus.publishing;
          }
          return true === publishing;
        },
        items1,
      );
      const obj = projectId(504);
      const thinkingLabelResult = projectId(17189).thinkingLabel({
        activity,
        compacting: compacting.compacting,
        saving,
        recalling: flag,
        controlling,
        publishPending: stateFromStores,
      });
      const intl = projectId(1126).intl;
      const stringResult = intl.string(thinkingLabelResult);
      let runesUsedLabelsResult = null;
      if (null != projectUsage) {
        runesUsedLabelsResult = tmp2(17189).runesUsedLabels(projectUsage);
        const tmp2Result = tmp2(17189);
      }
      let tmp8 = null != activity;
      if (tmp8) {
        tmp8 = "" !== activity.text;
      }
      let tmp9 = thinking;
      if (thinking) {
        if (!tmp8) {
          tmp8 = thinkingOpen;
        }
        tmp9 = tmp8;
      }
      [][0] = projectId;
      const obj3 = { style: tmp.row, children: null };
      const obj4 = { style: tmp.activity, children: null };
      const obj5 = { style: tmp.live, accessibilityRole: "none", accessibilityLiveRegion: "polite", children: null };
      if (!thinking) {
        if (!flag) {
          let tmp13Result4 = null;
        }
        obj5.children = tmp13Result4;
        const items2 = [closure_8(View, obj5)];
        let tmp13Result = null;
        if (thinking) {
          tmp13Result = null;
          if (null != turnStartedAt) {
            const obj6 = { startedAt: turnStartedAt, variant: "text-xs/medium" };
            tmp13Result = closure_8(ConjureNativeTurnTimerDefault, obj6);
          }
        }
        items2[1] = tmp13Result;
        obj4.children = items2;
        const items3 = [closure_9(View, obj4), ,];
        let tmp13Result3 = null;
        if (null != connLabel) {
          let str3 = "text-muted";
          if (connFailed) {
            str3 = "text-feedback-critical";
          }
          const obj7 = { variant: "text-xs/medium", color: str3, children: connLabel };
          tmp13Result3 = closure_8(tmp2(5088).Text, obj7);
        }
        items3[1] = tmp13Result3;
        let tmp11Result = null;
        if (null != runesUsedLabelsResult) {
          const obj8 = {
            accessibilityRole: "button",
            accessibilityLabel: runesUsedLabelsResult.aria,
            hitSlop: 8,
            style: tmp.runes,
            onPress: tmp10,
            children: null,
          };
          const obj9 = { variant: "text-xs/medium", color: "text-muted", children: runesUsedLabelsResult.text };
          const items4 = [closure_8(tmp2(5088).Text, obj9)];
          const obj10 = { size: "xxs", color: nativeDefault.colors.TEXT_MUTED };
          items4[1] = closure_8(tmp2(5046).CircleInformationIcon, obj10);
          obj8.children = items4;
          tmp11Result = closure_9(tmp2(6185).PressableOpacity, obj8);
        }
        items3[2] = tmp11Result;
        obj3.children = items3;
        return closure_9(View, obj3);
      }
      const tmp15 = thinkingLabelResult === projectId(17189).RECALLING_LINES[0];
      let tmp16 = tmp9;
      if (!tmp9) {
        tmp16 = tmp15;
      }
      const obj11 = {
        accessible: tmp16,
        accessibilityRole: null,
        accessibilityState: null,
        accessibilityLabel: null,
        accessibilityHint: null,
        hitSlop: 8,
        disabled: null,
        onPress: null,
        children: null,
      };
      let str2;
      if (tmp9) {
        str2 = "button";
      }
      obj11.accessibilityRole = str2;
      let tmp17;
      if (tmp9) {
        const obj12 = { expanded: thinkingOpen };
        tmp17 = obj12;
      }
      obj11.accessibilityState = tmp17;
      if (tmp9) {
        const tmp18 = stringResult;
      }
      obj11.accessibilityLabel = tmp18;
      let stringResult1;
      if (tmp9) {
        const intl2 = tmp2(1126).intl;
        stringResult1 = intl2.string(_modDef3849["0Kemnh"]);
      }
      obj11.accessibilityHint = stringResult1;
      obj11.disabled = !tmp9;
      obj11.onPress = onToggleThinking;
      obj11.children = closure_8(closure_11, { line: stringResult, rotating: tmp15, immediate: saving });
      tmp13Result4 = closure_8(tmp2(6185).PressableOpacity, obj11);
      let obj2 = projectId(17189);
    };
