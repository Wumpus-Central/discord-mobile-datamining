// discord_app/modules/conjure/debug/native/ConjureDebugAgentTab.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ConjureConnectionStore from "../../connection/ConjureConnectionStore.tsx";
import ConjureDebugFormat from "../ConjureDebugFormat.tsx";
import ConjureDebugLabels from "../ConjureDebugLabels.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import ConjureDebugStore from "../ConjureDebugStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let call, projectId;

let c10;
let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
const forceCompaction = ConjureConnectionStore.forceCompaction;
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
let closure_11 = [];
let createStyles = createStyles_mod;
let obj = { tab: obj2, callRow: obj3, callHead: obj4, forceCompaction: obj5 };
obj2 = { gap: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_4 };
obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj5 = { gap: nativeDefault.space.PX_8 };
let closure_12 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (call) => {
      let bad;
      let callHead;
      let callRow;
      let items;
      let items1;
      let items2;
      let text;
      let tmp5;
      let tmp7;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(20);
      call = call.call;
      const tmp4 = closure_12();
      if (cResult[0] !== call) {
        const tmpResult = ConjureDebugLabels;
        const modelCallOutcomeResult = tmpResult.modelCallOutcome(call);
        cResult[0] = call;
        cResult[1] = modelCallOutcomeResult;
        tmp5 = modelCallOutcomeResult;
      } else {
        tmp5 = cResult[1];
      }
      ({ text, bad } = tmp5);
      ({ callRow, callHead } = tmp4);
      if (cResult[2] !== call.observedAt) {
        const tmpResult2 = ConjureDebugFormat;
        const formatClockTimeResult = tmpResult2.formatClockTime(call.observedAt);
        cResult[2] = call.observedAt;
        cResult[3] = formatClockTimeResult;
        tmp7 = formatClockTimeResult;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] !== tmp7) {
        const obj2 = { variant: "text-xs/normal", color: "text-subtle", children: tmp7 };
        const tmp11 = metroImportAll(Text_Text.Text, obj2);
        cResult[4] = tmp7;
        cResult[5] = tmp11;
        tmp9 = tmp11;
      } else {
        tmp9 = cResult[5];
      }
      if (cResult[6] === call.model) {
        let tmp12;
        if (cResult[7] === call.role) {
          tmp12 = cResult[8];
        }
        if (cResult[9] === tmp4.callHead) {
          if (cResult[10] === tmp9) {
            let tmp14;
            if (cResult[11] === tmp12) {
              tmp14 = cResult[12];
            }
            let str = "text-muted";
            if (bad) {
              str = "text-feedback-critical";
            }
            if (cResult[13] === text) {
              let tmp18;
              if (cResult[14] === str) {
                tmp18 = cResult[15];
              }
              if (cResult[16] === tmp4.callRow) {
                if (cResult[17] === tmp14) {
                  let tmp21;
                  if (cResult[18] === tmp18) {
                    tmp21 = cResult[19];
                  }
                  return tmp21;
                }
              }
              const obj3 = { style: callRow, children: items };
              items = [tmp14, tmp18];
              const tmp24 = React4(View, obj3);
              cResult[16] = tmp4.callRow;
              cResult[17] = tmp14;
              cResult[18] = tmp18;
              cResult[19] = tmp24;
              tmp21 = tmp24;
            }
            const obj4 = { variant: "text-xs/medium", color: str, children: text };
            const tmp20 = metroImportAll(Text_Text.Text, obj4);
            cResult[13] = text;
            cResult[14] = str;
            cResult[15] = tmp20;
            tmp18 = tmp20;
          }
        }
        const obj5 = { style: callHead, children: items1 };
        items1 = [tmp9, tmp12];
        const tmp17 = React4(View, obj5);
        cResult[9] = tmp4.callHead;
        cResult[10] = tmp9;
        cResult[11] = tmp12;
        cResult[12] = tmp17;
        tmp14 = tmp17;
      }
      const obj6 = { variant: "text-xs/normal", color: "text-default", children: items2 };
      items2 = [call.role, " \u00B7 ", call.model];
      const tmp13 = React4(Text_Text.Text, obj6);
      cResult[6] = call.model;
      cResult[7] = call.role;
      cResult[8] = tmp13;
      tmp12 = tmp13;
    }
  : (call) => {
      let bad;
      let items;
      let items1;
      let items2;
      let obj5;
      let text;
      call = call.call;
      const tmp = closure_12();
      const obj = ConjureDebugLabels;
      const obj2 = { style: tmp.callRow, children: items2 };
      const obj3 = { style: tmp.callHead, children: items };
      ({ text, bad } = obj.modelCallOutcome(call));
      const obj4 = { variant: "text-xs/normal", color: "text-subtle", children: obj5.formatClockTime(call.observedAt) };
      obj.modelCallOutcome(call);
      const Text = Text_Text.Text;
      obj5 = ConjureDebugFormat;
      items = [metroImportAll(Text, obj4)];
      const obj6 = { variant: "text-xs/normal", color: "text-default", children: items1 };
      items1 = [call.role, " \u00B7 ", call.model];
      items[1] = React4(Text_Text.Text, obj6);
      items2 = [React4(View, obj3)];
      let str = "text-muted";
      const Text2 = Text_Text.Text;
      if (bad) {
        str = "text-feedback-critical";
      }
      items2[1] = metroImportAll(Text2, { variant: "text-xs/medium", color: str, children: text });
      return React4(View, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (projectId) => {
      let fetchState;
      let first;
      let items9;
      let onRefresh;
      let status;
      let tmp10;
      let tmp13;
      let tmp15;
      let tmp17;
      let tmp19;
      let tmp21;
      let tmp23;
      let tmp7;
      let tmp8;
      let traceVisible;
      const tmp = projectId;
      let obj = projectId(576);
      const cResult = obj.c(80);
      projectId = projectId.projectId;
      ({ status, fetchState, onRefresh, traceVisible } = projectId);
      const tmp4 = closure_12();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ConjureDebugStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== projectId) {
        const fn = function _() {
          return ConjureDebugStore.getLastTurnUsage(projectId);
        };
        const items1 = [projectId];
        cResult[1] = projectId;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp8 = items1;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [ConjureDebugStore];
        cResult[4] = items2;
        tmp10 = items2;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] !== projectId) {
        class T {
          constructor() {
            return ConjureDebugStore.getLastCompaction(projectId);
          }
        }
        const items3 = [projectId];
        cResult[5] = projectId;
        cResult[6] = T;
        cResult[7] = items3;
        tmp13 = items3;
      } else {
        class T {
          constructor() {
            return ConjureDebugStore.getLastCompaction(projectId);
          }
        }
        tmp13 = cResult[7];
      }
      const tmpResult5 = tmp(504);
      const stateFromStores1 = tmpResult5.useStateFromStores(tmp10, T, tmp13);
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class T {
          constructor() {
            return ConjureDebugStore.getLastCompaction(projectId);
          }
        }
        const items4 = [ConjureDebugStore];
        cResult[8] = items4;
        tmp15 = items4;
      } else {
        class T {
          constructor() {
            return ConjureDebugStore.getLastCompaction(projectId);
          }
        }
      }
      if (cResult[9] !== projectId) {
        class L {
          constructor() {
            return ConjureDebugStore.getLastCompactionDecline(projectId);
          }
        }
        const items5 = [projectId];
        cResult[9] = projectId;
        cResult[10] = L;
        cResult[11] = items5;
        tmp17 = items5;
      } else {
        class L {
          constructor() {
            return ConjureDebugStore.getLastCompactionDecline(projectId);
          }
        }
        tmp17 = cResult[11];
      }
      const tmpResult6 = tmp(504);
      const stateFromStores2 = tmpResult6.useStateFromStores(tmp15, L, tmp17);
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor() {
            return ConjureDebugStore.getLastCompactionDecline(projectId);
          }
        }
        const items6 = [ConjureDebugStore];
        cResult[12] = items6;
        tmp19 = items6;
      } else {
        class L {
          constructor() {
            return ConjureDebugStore.getLastCompactionDecline(projectId);
          }
        }
      }
      if (cResult[13] !== projectId) {
        class M {
          constructor() {
            return ConjureDebugStore.getForceCompactionState(projectId);
          }
        }
        const items7 = [projectId];
        cResult[13] = projectId;
        cResult[14] = M;
        cResult[15] = items7;
        tmp21 = items7;
      } else {
        class M {
          constructor() {
            return ConjureDebugStore.getForceCompactionState(projectId);
          }
        }
        tmp21 = cResult[15];
      }
      const tmpResult7 = tmp(504);
      const stateFromStores3 = tmpResult7.useStateFromStores(tmp19, M, tmp21);
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor() {
            return ConjureDebugStore.getForceCompactionState(projectId);
          }
        }
        const items8 = [ConjureDebugStore];
        cResult[16] = items8;
        tmp23 = items8;
      } else {
        class M {
          constructor() {
            return ConjureDebugStore.getForceCompactionState(projectId);
          }
        }
      }
      if (cResult[17] === projectId) {
        class M {
          constructor() {
            return ConjureDebugStore.getForceCompactionState(projectId);
          }
        }
        const tmpResult8 = tmp(504);
        const stateFromStores4 = tmpResult8.useStateFromStores(tmp23, X, items9);
        if (cResult[21] !== projectId) {
          class W {
            constructor() {
              return forceCompaction(projectId);
            }
          }
          cResult[21] = projectId;
          cResult[22] = W;
        } else {
          class W {
            constructor() {
              return forceCompaction(projectId);
            }
          }
        }
        if (cResult[23] !== projectId) {
          class B {
            constructor() {
              return forceCompaction(projectId, true);
            }
          }
          cResult[23] = projectId;
          cResult[24] = B;
        } else {
          class B {
            constructor() {
              return forceCompaction(projectId, true);
            }
          }
        }
        if (status != null) {
          class B {
            constructor() {
              return forceCompaction(projectId, true);
            }
          }
          if (tmp29 != null) {
            class B {
              constructor() {
                return forceCompaction(projectId, true);
              }
            }
          }
        }
        if (undefined == null) {
          class B {
            constructor() {
              return forceCompaction(projectId, true);
            }
          }
        }
        if (status != null) {
          class B {
            constructor() {
              return forceCompaction(projectId, true);
            }
          }
          if (tmp31 != null) {
            class B {
              constructor() {
                return forceCompaction(projectId, true);
              }
            }
          }
        }
        if (undefined == null) {
          class B {
            constructor() {
              return forceCompaction(projectId, true);
            }
          }
        }
        if (status != null) {
          class B {
            constructor() {
              return forceCompaction(projectId, true);
            }
          }
          if (tmp33 != null) {
            class B {
              constructor() {
                return forceCompaction(projectId, true);
              }
            }
          }
        }
        if (undefined == null) {
          class B {
            constructor() {
              return forceCompaction(projectId, true);
            }
          }
        }
        let tmp34;
        if (stateFromStores1 != null) {
          class B {
            constructor() {
              return forceCompaction(projectId, true);
            }
          }
        }
        if (tmp34 == null) {
          class B {
            constructor() {
              return forceCompaction(projectId, true);
            }
          }
          if (undefined != null) {
            class B {
              constructor() {
                return forceCompaction(projectId, true);
              }
            }
          }
          tmp34 = tmp35;
        }
        if (tmp34 == null) {
          class B {
            constructor() {
              return forceCompaction(projectId, true);
            }
          }
        }
        if (typeof stateFromStores3 === "object") {
          class B {
            constructor() {
              return forceCompaction(projectId, true);
            }
          }
        }
        const tab = tmp4.tab;
        if (status != null) {
          class B {
            constructor() {
              return forceCompaction(projectId, true);
            }
          }
        }
        if (undefined == null) {
          class B {
            constructor() {
              return forceCompaction(projectId, true);
            }
          }
        }
        if (cResult[25] === fetchState) {
          class B {
            constructor() {
              return forceCompaction(projectId, true);
            }
          }
        }
        const obj2 = { generatedAt: undefined, fetchState, onRefresh };
        cResult[25] = fetchState;
        cResult[26] = onRefresh;
        cResult[27] = undefined;
        cResult[28] = closure_8(tmp(16780).DebugSnapshotToolbar, obj2);
        const tmp40 = closure_8(tmp(16780).DebugSnapshotToolbar, obj2);
      }
      class X {
        constructor() {
          let modelCalls;
          if (traceVisible) {
            modelCalls = closure_11;
          } else {
            modelCalls = ConjureDebugStore.getModelCalls(projectId);
          }
          return modelCalls;
        }
      }
      items9 = [projectId, traceVisible];
      cResult[17] = projectId;
      cResult[18] = traceVisible;
      cResult[19] = X;
      cResult[20] = items9;
    }
  : (projectId) => {
      let NCdUIh;
      let Vq3skS;
      let cache_hit_rate;
      let fetchState;
      let formatCount;
      let formatCount2;
      let formatCount3;
      let formatCount4;
      let formatCount5;
      let formatCountResult;
      let formatCountResult1;
      let formatCountResult2;
      let formatCountResult3;
      let formatCountResult4;
      let formatCountResult5;
      let formatCountResult6;
      let formatCountResult7;
      let formatCountResult8;
      let formatCountResult9;
      let formatToPlainString10;
      let formatToPlainString11;
      let formatToPlainString2;
      let formatToPlainString3;
      let formatToPlainString4;
      let formatToPlainString5;
      let formatToPlainString6;
      let formatToPlainString7;
      let formatToPlainString8;
      let formatToPlainString9;
      let formatToPlainStringResult;
      let intl;
      let intl10;
      let intl12;
      let intl14;
      let intl15;
      let intl17;
      let intl18;
      let intl19;
      let intl2;
      let intl20;
      let intl21;
      let intl22;
      let intl24;
      let intl25;
      let intl26;
      let intl27;
      let intl29;
      let intl3;
      let intl31;
      let intl32;
      let intl33;
      let intl34;
      let intl4;
      let intl44;
      let intl45;
      let intl46;
      let intl5;
      let intl6;
      let intl9;
      let items15;
      let items17;
      let items18;
      let items21;
      let items22;
      let mapped;
      let obj10;
      let obj12;
      let obj14;
      let obj16;
      let obj22;
      let obj29;
      let obj31;
      let obj41;
      let obj53;
      let obj55;
      let onRefresh;
      let prop1;
      let round;
      let status;
      let string;
      let tmp16Result5;
      let tmp18Result10;
      let tmp18Result12;
      let tmp20Result;
      let tmp2Result43;
      let tmp2Result44;
      let tmp2Result46;
      let tmp2Result49;
      let tmp2Result51;
      let tmp2Result54;
      let tmp2Result57;
      let tmp2Result60;
      let tmp2Result62;
      let tmp2Result65;
      let tmp2Result68;
      let tmp2Result69;
      let tmp2Result70;
      let tmp2Result72;
      let tmp2Result73;
      let tmp2Result74;
      let tmp2Result75;
      let tmp2Result76;
      let tmp2Result77;
      let tmp2Result78;
      let tmp2Result79;
      let tmp2Result80;
      let tmp2Result81;
      let tmp2Result82;
      let tmp2Result83;
      let tmp2Result84;
      let traceVisible;
      let turn_inflight;
      let v6ngCax;
      let yHJxuP;
      let yHJxuP2;
      let yHJxuP3;
      let yHJxuP4;
      let yHJxuP5;
      let yHJxuP6;
      projectId = projectId.projectId;
      ({ status, traceVisible } = projectId);
      ({ fetchState, onRefresh } = projectId);
      const tmp = closure_12();
      const tmp2 = projectId;
      let obj = projectId(504);
      const items = [ConjureDebugStore];
      const items1 = [projectId];
      const stateFromStores = obj.useStateFromStores(
        items,
        () => ConjureDebugStore.getLastTurnUsage(projectId),
        items1,
      );
      const items2 = [ConjureDebugStore];
      const items3 = [projectId];
      const obj2 = projectId(504);
      const stateFromStores1 = obj2.useStateFromStores(
        items2,
        () => ConjureDebugStore.getLastCompaction(projectId),
        items3,
      );
      const items4 = [ConjureDebugStore];
      const items5 = [projectId];
      const obj3 = projectId(504);
      const stateFromStores2 = obj3.useStateFromStores(
        items4,
        () => ConjureDebugStore.getLastCompactionDecline(projectId),
        items5,
      );
      const items6 = [ConjureDebugStore];
      const items7 = [projectId];
      const obj4 = projectId(504);
      const stateFromStores3 = obj4.useStateFromStores(
        items6,
        () => ConjureDebugStore.getForceCompactionState(projectId),
        items7,
      );
      const items8 = [ConjureDebugStore];
      const items9 = [projectId, traceVisible];
      const obj5 = projectId(504);
      const stateFromStores4 = obj5.useStateFromStores(
        items8,
        () => {
          let modelCalls;
          if (traceVisible) {
            modelCalls = closure_11;
          } else {
            modelCalls = ConjureDebugStore.getModelCalls(projectId);
          }
          return modelCalls;
        },
        items9,
      );
      const items10 = [projectId];
      const items11 = [projectId];
      const callback = react.useCallback(() => forceCompaction(projectId), items10);
      let lifetime;
      const callback1 = react.useCallback(() => forceCompaction(projectId, true), items11);
      if (status != null) {
        const agent = status.agent;
        if (agent != null) {
          lifetime = agent.lifetime;
        }
      }
      if (lifetime == null) {
        lifetime = null;
      }
      let limits;
      if (status != null) {
        const agent2 = status.agent;
        if (agent2 != null) {
          limits = agent2.limits;
        }
      }
      if (limits == null) {
        limits = null;
      }
      let session;
      if (status != null) {
        const agent3 = status.agent;
        if (agent3 != null) {
          session = agent3.session;
        }
      }
      if (session == null) {
        session = null;
      }
      let promptCeiling;
      if (stateFromStores1 != null) {
        promptCeiling = stateFromStores1.promptCeiling;
      }
      if (promptCeiling == null) {
        let prop;
        if (limits != null) {
          prop = limits.context_window_tokens;
        }
        promptCeiling = prop;
      }
      if (promptCeiling == null) {
        promptCeiling = null;
      }
      let tmp15 = null;
      if (typeof stateFromStores3 === "object") {
        tmp15 = stateFromStores3;
      }
      const obj6 = { style: tmp.tab, children: null };
      let generated_at;
      const DebugSnapshotToolbar = tmp2(16780).DebugSnapshotToolbar;
      if (status != null) {
        generated_at = status.generated_at;
      }
      if (generated_at == null) {
        generated_at = null;
      }
      const items12 = [
        closure_8(DebugSnapshotToolbar, { generatedAt: generated_at, fetchState, onRefresh }),
        ,
        ,
        ,
        ,
        ,
      ];
      const obj7 = { title: intl.string(traceVisible(3753).JghNal), children: tmp16Result5 };
      const DebugSection = tmp2(16780).DebugSection;
      intl = tmp2(1126).intl;
      if (null == lifetime) {
        const obj8 = { children: intl3.string(traceVisible(3753).s0U5Fv) };
        const DebugNote = tmp2(16780).DebugNote;
        intl3 = tmp2(1126).intl;
        tmp16Result5 = closure_8(DebugNote, obj8);
      } else {
        const obj9 = {
          label: intl34.string(traceVisible(3753)["9nqym2"]),
          value: formatCount(tmp2Result43.runesFromUsd(lifetime.cost_usd)),
          hint: formatToPlainString7(NCdUIh, obj10),
        };
        const DebugStatRow14 = tmp2(16780).DebugStatRow;
        intl34 = tmp2(1126).intl;
        formatCount = tmp2(16777).formatCount;
        tmp2(16777);
        tmp2Result43 = tmp2(6757);
        const intl35 = tmp2(1126).intl;
        formatToPlainString7 = intl35.formatToPlainString;
        obj10 = { count: tmp2Result44.formatCount(lifetime.turns) };
        NCdUIh = traceVisible(3753).NCdUIh;
        tmp2Result44 = tmp2(16777);
        const items13 = [closure_8(DebugStatRow14, obj9), , , ,];
        const intl36 = tmp2(1126).intl;
        const orchestrator = lifetime.orchestrator;
        const obj11 = {
          label: intl36.string(traceVisible(3753).xtxP0e),
          value: formatToPlainString8(yHJxuP3, obj12),
          hint:
            "" +
            formatCountResult +
            " in \u00B7 " +
            formatCountResult1 +
            " out \u00B7 " +
            tmp2Result49.formatCount(orchestrator.cache_read_input_tokens) +
            " cache read",
        };
        intl36.string(traceVisible(3753).xtxP0e);
        const DebugStatRow15 = tmp2(16780).DebugStatRow;
        const intl37 = tmp2(1126).intl;
        formatToPlainString8 = intl37.formatToPlainString;
        obj12 = { count: formatCount2(tmp2Result46.runeCount(orchestrator)) };
        yHJxuP3 = traceVisible(3753).yHJxuP;
        formatCount2 = tmp2(16777).formatCount;
        tmp2(16777);
        tmp2Result46 = tmp2(6757);
        const tmp2Result47 = tmp2(16777);
        formatCountResult = tmp2Result47.formatCount(orchestrator.input_tokens);
        const tmp2Result48 = tmp2(16777);
        const _HermesInternal4 = HermesInternal;
        formatCountResult1 = tmp2Result48.formatCount(orchestrator.output_tokens);
        tmp2Result49 = tmp2(16777);
        items13[1] = closure_8(DebugStatRow15, obj11);
        const intl38 = tmp2(1126).intl;
        const codegen = lifetime.codegen;
        const obj13 = {
          label: intl38.string(traceVisible(3753)["9Sj3SX"]),
          value: formatToPlainString9(yHJxuP4, obj14),
          hint:
            "" +
            formatCountResult2 +
            " in \u00B7 " +
            formatCountResult3 +
            " out \u00B7 " +
            tmp2Result54.formatCount(codegen.cache_read_input_tokens) +
            " cache read",
        };
        intl38.string(traceVisible(3753)["9Sj3SX"]);
        const DebugStatRow16 = tmp2(16780).DebugStatRow;
        const intl39 = tmp2(1126).intl;
        formatToPlainString9 = intl39.formatToPlainString;
        obj14 = { count: formatCount3(tmp2Result51.runeCount(codegen)) };
        yHJxuP4 = traceVisible(3753).yHJxuP;
        formatCount3 = tmp2(16777).formatCount;
        tmp2(16777);
        tmp2Result51 = tmp2(6757);
        const tmp2Result52 = tmp2(16777);
        formatCountResult2 = tmp2Result52.formatCount(codegen.input_tokens);
        const tmp2Result53 = tmp2(16777);
        const _HermesInternal5 = HermesInternal;
        formatCountResult3 = tmp2Result53.formatCount(codegen.output_tokens);
        tmp2Result54 = tmp2(16777);
        items13[2] = closure_8(DebugStatRow16, obj13);
        const intl40 = tmp2(1126).intl;
        const stringResult2 = intl40.string(traceVisible(3753).ANCEo3);
        const tmp2Result55 = tmp2(6757);
        const usageOrEmptyResult = tmp2Result55.usageOrEmpty(lifetime.compaction);
        const obj15 = {
          label: stringResult2,
          value: formatToPlainString10(yHJxuP5, obj16),
          hint:
            "" +
            formatCountResult4 +
            " in \u00B7 " +
            formatCountResult5 +
            " out \u00B7 " +
            tmp2Result60.formatCount(usageOrEmptyResult.cache_read_input_tokens) +
            " cache read",
        };
        const DebugStatRow17 = tmp2(16780).DebugStatRow;
        const intl41 = tmp2(1126).intl;
        formatToPlainString10 = intl41.formatToPlainString;
        obj16 = { count: formatCount4(tmp2Result57.runeCount(usageOrEmptyResult)) };
        yHJxuP5 = traceVisible(3753).yHJxuP;
        formatCount4 = tmp2(16777).formatCount;
        tmp2(16777);
        tmp2Result57 = tmp2(6757);
        const tmp2Result58 = tmp2(16777);
        formatCountResult4 = tmp2Result58.formatCount(usageOrEmptyResult.input_tokens);
        const tmp2Result59 = tmp2(16777);
        const _HermesInternal6 = HermesInternal;
        formatCountResult5 = tmp2Result59.formatCount(usageOrEmptyResult.output_tokens);
        tmp2Result60 = tmp2(16777);
        items13[3] = closure_8(DebugStatRow17, obj15);
        let outcomes;
        if (status != null) {
          const agent4 = status.agent;
          if (agent4 != null) {
            outcomes = agent4.outcomes;
          }
        }
        let tmp18Result9 = null;
        if (null != outcomes) {
          const _Object = Object;
          tmp18Result9 = null;
          if (Object.keys(status.agent.outcomes).length > 0) {
            const obj17 = { label: intl2.string(traceVisible(3753).SQHm7C), value: mapped.join(" \u00B7 ") };
            const DebugStatRow = tmp2(16780).DebugStatRow;
            intl2 = tmp2(1126).intl;
            const _Object2 = Object;
            const entries = Object.entries(status.agent.outcomes);
            const sorted = entries.sort((arg0, arg1) => {
              let tmp;
              let tmp2;
              [, tmp] = arg0;
              [, tmp2] = arg1;
              return tmp2 - tmp;
            });
            mapped = sorted.map((item) => {
              let tmp;
              let tmp2;
              [tmp, tmp2] = item;
              const obj = projectId(dependencyMap[11]);
              return "" + obj.formatCount(tmp2) + " " + tmp;
            });
            tmp18Result9 = closure_8(DebugStatRow, obj17);
          }
        }
        const obj18 = { children: items13 };
        items13[4] = tmp18Result9;
        tmp16Result5 = closure_9(closure_10, obj18);
      }
      items12[1] = closure_8(DebugSection, obj7);
      const obj19 = { title: intl4.string(traceVisible(3753).dZHPE5), children: tmp18Result10 };
      const DebugSection2 = tmp2(16780).DebugSection;
      intl4 = tmp2(1126).intl;
      if (null == stateFromStores) {
        const obj20 = { children: intl5.string(traceVisible(3753).DfVjal) };
        const DebugNote2 = tmp2(16780).DebugNote;
        intl5 = tmp2(1126).intl;
        tmp18Result10 = closure_8(DebugNote2, obj20);
      } else {
        const intl42 = tmp2(1126).intl;
        const total = stateFromStores.total;
        const obj21 = {
          label: intl42.string(traceVisible(3753)["7X3i9d"]),
          value: formatToPlainString11(yHJxuP6, obj22),
          hint:
            "" +
            formatCountResult6 +
            " in \u00B7 " +
            formatCountResult7 +
            " out \u00B7 " +
            tmp2Result65.formatCount(total.cache_read_input_tokens) +
            " cache read",
        };
        intl42.string(traceVisible(3753)["7X3i9d"]);
        const DebugStatRow18 = tmp2(16780).DebugStatRow;
        const intl43 = tmp2(1126).intl;
        formatToPlainString11 = intl43.formatToPlainString;
        obj22 = { count: formatCount5(tmp2Result62.runeCount(total)) };
        yHJxuP6 = traceVisible(3753).yHJxuP;
        formatCount5 = tmp2(16777).formatCount;
        tmp2(16777);
        tmp2Result62 = tmp2(6757);
        const tmp2Result63 = tmp2(16777);
        formatCountResult6 = tmp2Result63.formatCount(total.input_tokens);
        const tmp2Result64 = tmp2(16777);
        const _HermesInternal7 = HermesInternal;
        formatCountResult7 = tmp2Result64.formatCount(total.output_tokens);
        tmp2Result65 = tmp2(16777);
        const items14 = [closure_8(DebugStatRow18, obj21)];
        const obj23 = {
          label: intl44.string(traceVisible(3753)["8OUg09"]),
          value: "" + round(100 * cache_hit_rate) + "%",
        };
        const DebugStatRow19 = tmp2(16780).DebugStatRow;
        intl44 = tmp2(1126).intl;
        cache_hit_rate = stateFromStores.cache_hit_rate;
        const _Math = Math;
        round = Math.round;
        if (cache_hit_rate == null) {
          const tmp2Result66 = tmp2(6757);
          cache_hit_rate = tmp2Result66.cacheHitRate(stateFromStores.total);
        }
        const _HermesInternal = HermesInternal;
        const obj24 = { children: items14 };
        items14[1] = closure_8(DebugStatRow19, obj23);
        tmp18Result10 = closure_9(closure_10, obj24);
      }
      items12[2] = closure_8(DebugSection2, obj19);
      const obj25 = { title: intl6.string(traceVisible(3753).NbRk9a), children: null };
      const DebugSection3 = tmp2(16780).DebugSection;
      intl6 = tmp2(1126).intl;
      if (null != stateFromStores1) {
        let tmp18Result17;
        let tmp16Result8;
        if (null != promptCeiling) {
          const obj26 = { children: items15 };
          const obj27 = {
            label: intl9.string(traceVisible(3753).Kw5wiQ),
            used: stateFromStores1.tokensAfter,
            max: promptCeiling,
            formatValue: tmp2(16777).formatCount,
          };
          const DebugMeter = tmp2(16780).DebugMeter;
          intl9 = tmp2(1126).intl;
          items15 = [closure_8(DebugMeter, obj27)];
          const obj28 = {
            label: intl10.string(traceVisible(3753).mRbSns),
            value: "" + formatCountResult8 + " \u2192 " + tmp2Result68.formatCount(stateFromStores1.tokensAfter),
            hint: formatToPlainString2(Vq3skS, obj29),
          };
          const DebugStatRow2 = tmp2(16780).DebugStatRow;
          intl10 = tmp2(1126).intl;
          const tmp2Result67 = tmp2(16777);
          const _HermesInternal2 = HermesInternal;
          formatCountResult8 = tmp2Result67.formatCount(stateFromStores1.tokensBefore);
          tmp2Result68 = tmp2(16777);
          const intl11 = tmp2(1126).intl;
          formatToPlainString2 = intl11.formatToPlainString;
          obj29 = {
            count: tmp2Result69.formatCount(stateFromStores1.retainedMessages),
            time: tmp2Result70.formatObservedAt(stateFromStores1.observedAt),
          };
          Vq3skS = traceVisible(3753).Vq3skS;
          tmp2Result69 = tmp2(16777);
          tmp2Result70 = tmp2(16777);
          items15[1] = closure_8(DebugStatRow2, obj28);
          tmp18Result17 = closure_9(closure_10, obj26);
        }
        const items16 = [tmp18Result17, ,];
        let tmp18Result11 = null;
        if (null != stateFromStores2) {
          const obj30 = {
            label: intl12.string(traceVisible(3753)["4BX5KK"]),
            value: "" + formatCountResult9 + " / " + tmp2Result72.formatCount(stateFromStores2.threshold),
            critical: true,
            hint: formatToPlainString3(v6ngCax, obj31),
          };
          const DebugStatRow3 = tmp2(16780).DebugStatRow;
          intl12 = tmp2(1126).intl;
          const tmp2Result71 = tmp2(16777);
          const _HermesInternal3 = HermesInternal;
          formatCountResult9 = tmp2Result71.formatCount(stateFromStores2.projected);
          tmp2Result72 = tmp2(16777);
          const intl13 = tmp2(1126).intl;
          formatToPlainString3 = intl13.formatToPlainString;
          obj31 = { time: tmp2Result73.formatObservedAt(stateFromStores2.observedAt) };
          v6ngCax = traceVisible(3753)["6ngCax"];
          tmp2Result73 = tmp2(16777);
          tmp18Result11 = closure_8(DebugStatRow3, obj30);
        }
        items16[1] = tmp18Result11;
        const obj32 = { style: tmp.forceCompaction, children: items17 };
        const obj33 = {
          variant: "secondary",
          size: "sm",
          text: intl14.string(traceVisible(3753)["1EiJeb"]),
          disabled: "pending" === stateFromStores3,
          onPress: callback,
        };
        const Button = tmp2(5601).Button;
        intl14 = tmp2(1126).intl;
        items17 = [closure_8(Button, obj33), ,];
        let str9 = "text-muted";
        const Text = tmp2(4892).Text;
        if (null != tmp15) {
          str9 = "text-muted";
          if ("compacted" !== tmp15.outcome) {
            str9 = "text-feedback-critical";
          }
        }
        const obj34 = {
          variant: "text-xs/normal",
          color: str9,
          children: tmp2Result74.forceCompactionStatus(stateFromStores3),
        };
        tmp2Result74 = tmp2(16778);
        items17[1] = closure_8(Text, obj34);
        let pendingTurn;
        if (tmp15 != null) {
          pendingTurn = tmp15.pendingTurn;
        }
        let tmp16Result6 = null;
        if (true === pendingTurn) {
          const obj35 = { children: items18 };
          const obj36 = {
            variant: "critical-primary",
            size: "sm",
            text: intl45.string(traceVisible(3753).ZxG2AI),
            onPress: callback1,
          };
          const Button2 = tmp2(5601).Button;
          intl45 = tmp2(1126).intl;
          items18 = [closure_8(Button2, obj36)];
          const obj37 = {
            variant: "text-xs/normal",
            color: "text-muted",
            children: intl46.string(traceVisible(3753).V73vdN),
          };
          const Text3 = tmp2(4892).Text;
          intl46 = tmp2(1126).intl;
          items18[1] = closure_8(Text3, obj37);
          tmp16Result6 = closure_9(closure_10, obj35);
        }
        items17[2] = tmp16Result6;
        items16[2] = closure_9(View, obj32);
        obj25.children = items16;
        items12[3] = closure_9(DebugSection3, obj25);
        let tmp18Result14 = null;
        if (!traceVisible) {
          const obj38 = { title: intl15.string(traceVisible(3753).TkTRdW), children: tmp18Result12 };
          const DebugSection4 = tmp2(16780).DebugSection;
          intl15 = tmp2(1126).intl;
          if (0 === stateFromStores4.length) {
            const obj39 = { children: intl17.string(traceVisible(3753)["r3/FhI"]) };
            const DebugNote4 = tmp2(16780).DebugNote;
            intl17 = tmp2(1126).intl;
            tmp18Result12 = closure_8(DebugNote4, obj39);
          } else {
            const substr = stateFromStores4.slice(-tmp2(16778).MAX_MODEL_CALL_ROWS);
            const reversed = substr.reverse();
            const items19 = [
              reversed.map((call) => {
                const obj = { call };
                return closure_1_8(closure_1_13, obj, call.id);
              }),
            ];
            let tmp18Result13 = null;
            if (stateFromStores4.length > tmp2(16778).MAX_MODEL_CALL_ROWS) {
              const obj40 = {
                variant: "text-xs/normal",
                color: "text-muted",
                children: formatToPlainString4(prop1, obj41),
              };
              const Text2 = tmp2(4892).Text;
              const intl16 = tmp2(1126).intl;
              formatToPlainString4 = intl16.formatToPlainString;
              obj41 = { shown: tmp2(16778).MAX_MODEL_CALL_ROWS, total: stateFromStores4.length };
              prop1 = traceVisible(3753)["uZ9P/O"];
              tmp18Result13 = closure_8(Text2, obj40);
            }
            const obj42 = { children: items19 };
            items19[1] = tmp18Result13;
            tmp18Result12 = closure_9(closure_10, obj42);
          }
          tmp18Result14 = closure_8(DebugSection4, obj38);
        }
        items12[4] = tmp18Result14;
        if (null != session) {
          const obj43 = { title: intl18.string(traceVisible(3753).EsSzCS), children: items21 };
          const DebugSection5 = tmp2(16780).DebugSection;
          intl18 = tmp2(1126).intl;
          let tmp16Result7 = null;
          if (null != session) {
            const obj44 = {
              label: intl19.string(traceVisible(3753).CLXHAs),
              value: tmp2Result75.formatObservedAt(session.instance_since),
              hint: intl20.string(traceVisible(3753).UCwUEX),
            };
            const DebugStatRow4 = tmp2(16780).DebugStatRow;
            intl19 = tmp2(1126).intl;
            tmp2Result75 = tmp2(16777);
            intl20 = tmp2(1126).intl;
            const items20 = [closure_8(DebugStatRow4, obj44), , ,];
            const obj45 = {
              label: intl21.string(traceVisible(3753)["8V8e1Z"]),
              value: tmp2Result76.formatCount(session.sockets),
            };
            const DebugStatRow5 = tmp2(16780).DebugStatRow;
            intl21 = tmp2(1126).intl;
            tmp2Result76 = tmp2(16777);
            items20[1] = closure_8(DebugStatRow5, obj45);
            const obj46 = {
              label: intl22.string(traceVisible(3753)["4pBzYW"]),
              value: string(turn_inflight ? tmp20Result.Wv025I : tmp20Result["7/lsFY"]),
            };
            const DebugStatRow6 = tmp2(16780).DebugStatRow;
            intl22 = tmp2(1126).intl;
            const intl23 = tmp2(1126).intl;
            string = intl23.string;
            turn_inflight = session.turn_inflight;
            tmp20Result = traceVisible(3753);
            items20[2] = closure_8(DebugStatRow6, obj46);
            let tmp18Result15 = null;
            if (session.queued_messages > 0) {
              const obj47 = {
                label: intl24.string(traceVisible(3753)["3oUYnv"]),
                value: tmp2Result77.formatCount(session.queued_messages),
              };
              const DebugStatRow7 = tmp2(16780).DebugStatRow;
              intl24 = tmp2(1126).intl;
              tmp2Result77 = tmp2(16777);
              tmp18Result15 = closure_8(DebugStatRow7, obj47);
            }
            const obj48 = { children: items20 };
            items20[3] = tmp18Result15;
            tmp16Result7 = closure_9(closure_10, obj48);
          }
          items21 = [tmp16Result7];
          let analytics;
          if (status != null) {
            analytics = status.analytics;
          }
          let tmp18Result16 = null;
          if (null != analytics) {
            const obj49 = { analytics: status.analytics };
            tmp18Result16 = closure_8(tmp2(16791).ConjureDebugAgentAnalyticsRows, obj49);
          }
          items21[1] = tmp18Result16;
          tmp16Result8 = closure_9(DebugSection5, obj43);
        } else {
          let analytics1;
          if (status != null) {
            analytics1 = status.analytics;
          }
          tmp16Result8 = null;
        }
        items12[5] = tmp16Result8;
        let tmp16Result9 = null;
        if (null != limits) {
          const obj50 = { title: intl25.string(traceVisible(3753)["LEIhp/"]), children: items22 };
          const DebugSection6 = tmp2(16780).DebugSection;
          intl25 = tmp2(1126).intl;
          const obj51 = {
            label: intl26.string(traceVisible(3753).IlDBN3),
            value: tmp2Result78.formatCount(limits.max_subagent_iterations),
          };
          const DebugStatRow8 = tmp2(16780).DebugStatRow;
          intl26 = tmp2(1126).intl;
          tmp2Result78 = tmp2(16777);
          items22 = [closure_8(DebugStatRow8, obj51), , , , ,];
          const obj52 = {
            label: intl27.string(traceVisible(3753)["ZdzKR+"]),
            value: formatToPlainString5(yHJxuP, obj53),
          };
          const DebugStatRow9 = tmp2(16780).DebugStatRow;
          intl27 = tmp2(1126).intl;
          const intl28 = tmp2(1126).intl;
          formatToPlainString5 = intl28.formatToPlainString;
          obj53 = { count: tmp2Result79.formatCount(limits.context_window_tokens) };
          yHJxuP = traceVisible(3753).yHJxuP;
          tmp2Result79 = tmp2(16777);
          items22[1] = closure_8(DebugStatRow9, obj52);
          const obj54 = {
            label: intl29.string(traceVisible(3753).cIhN2W),
            value: formatToPlainString6(yHJxuP2, obj55),
          };
          const DebugStatRow10 = tmp2(16780).DebugStatRow;
          intl29 = tmp2(1126).intl;
          const intl30 = tmp2(1126).intl;
          formatToPlainString6 = intl30.formatToPlainString;
          obj55 = { count: tmp2Result80.formatCount(limits.per_turn_max_output_tokens) };
          yHJxuP2 = traceVisible(3753).yHJxuP;
          tmp2Result80 = tmp2(16777);
          items22[2] = closure_8(DebugStatRow10, obj54);
          const obj56 = {
            label: intl31.string(traceVisible(3753)["+fOn/q"]),
            value: tmp2Result81.formatCount(limits.max_user_message_chars),
          };
          const DebugStatRow11 = tmp2(16780).DebugStatRow;
          intl31 = tmp2(1126).intl;
          tmp2Result81 = tmp2(16777);
          items22[3] = closure_8(DebugStatRow11, obj56);
          const obj57 = {
            label: intl32.string(traceVisible(3753).kIHga0),
            value: tmp2Result82.formatCount(limits.max_build_attempts),
          };
          const DebugStatRow12 = tmp2(16780).DebugStatRow;
          intl32 = tmp2(1126).intl;
          tmp2Result82 = tmp2(16777);
          items22[4] = closure_8(DebugStatRow12, obj57);
          const obj58 = {
            label: intl33.string(traceVisible(3753).Iw03yW),
            value: tmp2Result83.formatCount(limits.max_session_attempts),
          };
          const DebugStatRow13 = tmp2(16780).DebugStatRow;
          intl33 = tmp2(1126).intl;
          tmp2Result83 = tmp2(16777);
          items22[5] = closure_8(DebugStatRow13, obj58);
          tmp16Result9 = closure_9(DebugSection6, obj50);
        }
        items12[6] = tmp16Result9;
        obj6.children = items12;
        return closure_9(View, obj6);
      }
      const DebugNote3 = tmp2(16780).DebugNote;
      if (null != promptCeiling) {
        const intl8 = tmp2(1126).intl;
        const formatToPlainString = intl8.formatToPlainString;
        const obj59 = { ceiling: tmp2Result84.formatCount(promptCeiling) };
        const GMLCNv = traceVisible(3753).GMLCNv;
        tmp2Result84 = tmp2(16777);
        formatToPlainStringResult = formatToPlainString(GMLCNv, obj59);
      } else {
        const intl7 = tmp2(1126).intl;
        formatToPlainStringResult = intl7.string(traceVisible(3753).s0U5Fv);
      }
      tmp18Result17 = closure_8(DebugNote3, { children: formatToPlainStringResult });
    };
const result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureDebugAgentTab.tsx");

export default tmp4;
