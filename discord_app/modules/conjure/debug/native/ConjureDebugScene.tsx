// discord_app/modules/conjure/debug/native/ConjureDebugScene.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3830 from "../../intl/ConjureUntranslated.messages.js";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import CopyIcon from "../../../../design/components/Icon/native/redesign/generated/CopyIcon.tsx";
import ClipboardUtils from "../../../../utils/ClipboardUtils.native.tsx";
import conjureDebugConnection from "../conjureDebugConnection.tsx";
import conjureTraceRequests2 from "../conjureTraceRequests.tsx";
import ConjurePerfTraceTab from "../perf_trace/native/ConjurePerfTraceTab.tsx";
import ConjureDebugSnapshot from "../ConjureDebugSnapshot.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ConjureDebugStore from "../ConjureDebugStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const subscribeDebugBacklog = fn(10697).subscribeDebugBacklog;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4969);
let obj2 = {
  scene: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
  tabs: null,
  content: null,
  report: null,
};
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.tabs = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_8,
  paddingBottom: nativeDefault.space.PX_12,
};
obj2.content = { flex: 1 };
let obj4 = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_8,
  paddingBottom: nativeDefault.space.PX_12,
};
obj2.report = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_11 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { paddingHorizontal: nativeDefault.space.PX_16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureDebugScene.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureDebugScene(projectId) {
      const cResult = projectId(conjureTraceTabEnabled[11]).c(55);
      projectId = projectId.projectId;
      closure_11();
      let obj = projectId(conjureTraceTabEnabled[11]);
      const navigation = projectId(conjureTraceTabEnabled[12]).useNavigation();
      const bottom = navigation(conjureTraceTabEnabled[13])().bottom;
      let obj2 = projectId(conjureTraceTabEnabled[12]);
      conjureTraceTabEnabled = projectId(conjureTraceTabEnabled[14]).useConjureTraceTabEnabled();
      if (cResult[0] !== conjureTraceTabEnabled) {
        const tmp7 = conjureTraceTabEnabled ? ["logs", "worker", "agent", "trace"] : ["logs", "worker", "agent"];
        cResult[0] = conjureTraceTabEnabled;
        cResult[1] = tmp7;
      } else {
        [r10038, noop] = cResult[1](noop.useState("logs"), 2);
        if (cResult[2] !== cResult[1]) {
          const obj5 = {
            pageWidth: 0,
            items: arr.map((id) => {
              const obj = { id, label: null, page: null };
              if ("worker" === id) {
                const intl2 = projectId(conjureTraceTabEnabled[8]).intl;
                let str = intl2.string(navigation(conjureTraceTabEnabled[9])["50D0FZ"]);
              } else if ("agent" === id) {
                const intl = projectId(conjureTraceTabEnabled[8]).intl;
                str = intl.string(navigation(conjureTraceTabEnabled[9]).UkbTK1);
              } else {
                str = "Trace";
                if ("trace" !== id) {
                  const intl3 = projectId(conjureTraceTabEnabled[8]).intl;
                  str = intl3.string(navigation(conjureTraceTabEnabled[9])["+VRYCm"]);
                }
              }
              obj.label = str;
              return obj;
            }),
            onSetActiveIndex(arg0) {
              let str = arr[arg0];
              if (str == null) {
                str = "logs";
              }
              return noop(str);
            },
          };
          cResult[2] = arr;
          cResult[3] = obj5;
          let tmp11 = obj5;
        } else {
          tmp11 = cResult[3];
        }
        const tmp10 = cResult[1](noop.useState("logs"), 2);
        const segmentedControlState = tmp(tmp2[15]).useSegmentedControlState(tmp11);
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [ConjureDebugStore];
          cResult[4] = items;
          let tmp14 = items;
        } else {
          tmp14 = cResult[4];
        }
        if (cResult[5] !== projectId) {
          class P {
            constructor() {
              return closure_8.getStatus(projectId);
            }
          }
          const items1 = [projectId];
          cResult[5] = projectId;
          cResult[6] = P;
          cResult[7] = items1;
          let tmp17 = items1;
        } else {
          class P {
            constructor() {
              return closure_8.getStatus(projectId);
            }
          }
          tmp17 = cResult[7];
        }
        let tmpResult = tmp(tmp2[15]);
        const stateFromStores = tmp(tmp2[16]).useStateFromStores(tmp14, P, tmp17);
        const _Symbol2 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          class P {
            constructor() {
              return closure_8.getStatus(projectId);
            }
          }
          const items2 = [ConjureDebugStore];
          cResult[8] = items2;
          const tmp19 = items2;
        } else {
          class P {
            constructor() {
              return closure_8.getStatus(projectId);
            }
          }
        }
        if (cResult[9] !== projectId) {
          class B {
            constructor() {
              return closure_8.getFetchState(projectId);
            }
          }
          const items3 = [projectId];
          cResult[9] = projectId;
          cResult[10] = B;
          cResult[11] = items3;
          let tmp21 = items3;
        } else {
          class B {
            constructor() {
              return closure_8.getFetchState(projectId);
            }
          }
          tmp21 = cResult[11];
        }
        const tmpResult3 = tmp(tmp2[16]);
        const stateFromStores1 = tmp(tmp2[16]).useStateFromStores(tmp19, B, tmp21);
        if (cResult[12] !== projectId) {
          class L {
            constructor() {
              obj = closure_0(closure_2[17]);
              debugStatus = obj.requestDebugStatus(projectId);
              obj2 = closure_0(closure_2[17]);
              conjureDebugGitInfo = obj2.requestConjureDebugGitInfo(projectId);
              return;
            }
          }
          cResult[12] = projectId;
          cResult[13] = L;
        } else {
          class L {
            constructor() {
              obj = closure_0(closure_2[17]);
              debugStatus = obj.requestDebugStatus(projectId);
              obj2 = closure_0(closure_2[17]);
              conjureDebugGitInfo = obj2.requestConjureDebugGitInfo(projectId);
              return;
            }
          }
        }
        L = tmp23;
        if (cResult[14] !== tmp23) {
          class X {
            constructor() {
              return closure_5();
            }
          }
          const items4 = [tmp23];
          cResult[14] = tmp23;
          cResult[15] = X;
          cResult[16] = items4;
          let tmp25 = items4;
        } else {
          class X {
            constructor() {
              return closure_5();
            }
          }
          tmp25 = cResult[16];
        }
        const effect = noop.useEffect(X, tmp25);
        if (cResult[17] !== projectId) {
          class N {
            constructor() {
              return subscribeDebugBacklog(projectId);
            }
          }
          const items5 = [projectId];
          cResult[17] = projectId;
          cResult[18] = N;
          cResult[19] = items5;
          let tmp28 = items5;
        } else {
          class N {
            constructor() {
              return subscribeDebugBacklog(projectId);
            }
          }
          tmp28 = cResult[19];
        }
        const effect1 = noop.useEffect(N, tmp28);
        const setActiveIndex = segmentedControlState.setActiveIndex;
        if (cResult[20] === projectId) {
          class N {
            constructor() {
              return subscribeDebugBacklog(projectId);
            }
          }
        }
        class W {
          constructor() {
            if (closure_2) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[18]);
              tmp3 = projectId;
              result = obj.takeConjureTraceRequest(projectId);
              tmp5 = null;
              if (null != result) {
                tmp6 = setActiveIndex;
                tmp7 = closure_3;
                str = "trace";
                flag = false;
                tmp8 = setActiveIndex(closure_3.indexOf("trace"), false);
                tmpResult = tmp(tmp2[19]);
                openPerfTraceResult = tmpResult.openPerfTrace(tmp3, result);
              }
            }
            return;
          }
        }
        cResult[20] = projectId;
        cResult[21] = setActiveIndex;
        cResult[22] = conjureTraceTabEnabled;
        cResult[23] = cResult[1];
        cResult[24] = W;
        const tmpResult4 = tmp(tmp2[16]);
      }
      const obj3 = projectId(conjureTraceTabEnabled[14]);
    }
  : function ConjureDebugScene(projectId) {
      projectId = projectId.projectId;
      let conjureTraceTabEnabled;
      noop = undefined;
      let callback2;
      const tmp = closure_11();
      const navigation = projectId(conjureTraceTabEnabled[12]).useNavigation();
      let obj = projectId(conjureTraceTabEnabled[12]);
      conjureTraceTabEnabled = projectId(conjureTraceTabEnabled[14]).useConjureTraceTabEnabled();
      const items = [conjureTraceTabEnabled];
      const memo = noop.useMemo(
        () => (conjureTraceTabEnabled ? ["logs", "worker", "agent", "trace"] : ["logs", "worker", "agent"]),
        items,
      );
      let obj2 = projectId(conjureTraceTabEnabled[14]);
      [tmp7, c4] = memo(noop.useState("logs"), 2);
      const tmp6 = memo(noop.useState("logs"), 2);
      const obj3 = projectId(conjureTraceTabEnabled[15]);
      const segmentedControlState = obj3.useSegmentedControlState({
        pageWidth: 0,
        items: memo.map((id) => {
          const obj = { id, label: null, page: null };
          if ("worker" === id) {
            const intl2 = projectId(conjureTraceTabEnabled[8]).intl;
            let str = intl2.string(navigation(conjureTraceTabEnabled[9])["50D0FZ"]);
          } else if ("agent" === id) {
            const intl = projectId(conjureTraceTabEnabled[8]).intl;
            str = intl.string(navigation(conjureTraceTabEnabled[9]).UkbTK1);
          } else {
            str = "Trace";
            if ("trace" !== id) {
              const intl3 = projectId(conjureTraceTabEnabled[8]).intl;
              str = intl3.string(navigation(conjureTraceTabEnabled[9])["+VRYCm"]);
            }
          }
          obj.label = str;
          return obj;
        }),
        onSetActiveIndex(arg0) {
          let str = memo[arg0];
          if (str == null) {
            str = "logs";
          }
          return _undefined(str);
        },
      });
      let obj4 = {
        pageWidth: 0,
        items: memo.map((id) => {
          const obj = { id, label: null, page: null };
          if ("worker" === id) {
            const intl2 = projectId(conjureTraceTabEnabled[8]).intl;
            let str = intl2.string(navigation(conjureTraceTabEnabled[9])["50D0FZ"]);
          } else if ("agent" === id) {
            const intl = projectId(conjureTraceTabEnabled[8]).intl;
            str = intl.string(navigation(conjureTraceTabEnabled[9]).UkbTK1);
          } else {
            str = "Trace";
            if ("trace" !== id) {
              const intl3 = projectId(conjureTraceTabEnabled[8]).intl;
              str = intl3.string(navigation(conjureTraceTabEnabled[9])["+VRYCm"]);
            }
          }
          obj.label = str;
          return obj;
        }),
        onSetActiveIndex(arg0) {
          let str = memo[arg0];
          if (str == null) {
            str = "logs";
          }
          return _undefined(str);
        },
      };
      const items1 = [callback2];
      const items2 = [projectId];
      const stateFromStores = projectId(conjureTraceTabEnabled[16]).useStateFromStores(
        items1,
        () => ConjureDebugStore.getStatus(projectId),
        items2,
      );
      const obj5 = projectId(conjureTraceTabEnabled[16]);
      const items3 = [callback2];
      const items4 = [projectId];
      const stateFromStores1 = projectId(conjureTraceTabEnabled[16]).useStateFromStores(
        items3,
        () => ConjureDebugStore.getFetchState(projectId),
        items4,
      );
      const items5 = [projectId];
      const onRefresh = noop.useCallback(() => {
        const debugStatus = conjureDebugConnection.requestDebugStatus(projectId);
        const conjureDebugGitInfo = conjureDebugConnection.requestConjureDebugGitInfo(projectId);
      }, items5);
      const items6 = [onRefresh];
      const effect = noop.useEffect(() => callback(), items6);
      const items7 = [projectId];
      const effect1 = noop.useEffect(() => subscribeDebugBacklog(projectId), items7);
      const setActiveIndex = segmentedControlState.setActiveIndex;
      const items8 = [projectId, setActiveIndex, conjureTraceTabEnabled, memo];
      const callback1 = noop.useCallback(() => {
        if (conjureTraceTabEnabled) {
          const result = conjureTraceRequests2.takeConjureTraceRequest(projectId);
          if (null != result) {
            setActiveIndex(memo.indexOf("trace"), false);
            ConjurePerfTraceTab.openPerfTrace(projectId, result);
            const tmpResult = ConjurePerfTraceTab;
          }
        }
      }, items8);
      const items9 = [callback1];
      const effect2 = noop.useEffect(() => callback1(), items9);
      const obj6 = projectId(conjureTraceTabEnabled[16]);
      const conjureTraceRequests = projectId(conjureTraceTabEnabled[18]).useConjureTraceRequests(projectId, callback1);
      const items10 = [projectId];
      callback2 = noop.useCallback(() => {
        const obj = ClipboardUtils;
        obj.copy(ConjureDebugSnapshot.conjureDebugSnapshot(projectId));
        const obj4 = { text: null, icon: null };
        const intl = util.intl;
        obj4.text = intl.string(_modDef3830.wI6fhl);
        obj4.icon = CopyIcon.CopyIcon;
        ToastActionCreatorsDefault.open("CONJURE_DEBUG_COPIED", obj4);
      }, items10);
      const items11 = [callback2, navigation];
      const effect3 = noop.useEffect(() => {
        navigation.setOptions({
          headerRight() {
            const obj = {
              IconComponent: projectId(conjureTraceTabEnabled[23]).CopyIcon,
              onPress,
              accessibilityLabel: null,
            };
            const intl = projectId(conjureTraceTabEnabled[8]).intl;
            obj.accessibilityLabel = intl.string(navigation(conjureTraceTabEnabled[9]).TkHqy2);
            return closure_2_9(navigation(conjureTraceTabEnabled[24]), obj);
          },
        });
      }, items11);
      const obj8 = { style: tmp.scene, children: null };
      const obj7 = projectId(conjureTraceTabEnabled[18]);
      const items12 = [
        closure_9(setActiveIndex, {
          style: tmp.tabs,
          children: closure_9(projectId(conjureTraceTabEnabled[25]).SegmentedControl, { state: segmentedControlState }),
        }),
      ];
      const obj10 = { style: tmp.content, children: null };
      if ("logs" === tmp7) {
        const obj11 = { projectId };
        let tmp21Result = closure_9(tmp4(tmp2[26]), obj11);
      } else {
        if ("trace" === tmp7) {
          if (conjureTraceTabEnabled) {
            const obj12 = { projectId };
            tmp21Result = closure_9(tmp4(tmp2[19]), obj12);
          }
        }
        const obj13 = { contentContainerStyle: null, children: null };
        const items13 = [tmp.report];
        const obj14 = { paddingBottom: tmp4(tmp2[7]).space.PX_16 + navigation(conjureTraceTabEnabled[13])().bottom };
        items13[1] = obj14;
        obj13.contentContainerStyle = items13;
        if ("worker" === tmp7) {
          const obj15 = { status: stateFromStores, fetchState: stateFromStores1, onRefresh };
          let tmp21Result2 = closure_9(tmp4(tmp2[27]), obj15);
        } else {
          const obj16 = { projectId, status: stateFromStores, fetchState: stateFromStores1, onRefresh };
          tmp21Result2 = closure_9(tmp4(tmp2[28]), obj16);
        }
        obj13.children = tmp21Result2;
        tmp21Result = closure_9(onRefresh, obj13, tmp7);
      }
      obj10.children = tmp21Result;
      items12[1] = closure_9(setActiveIndex, obj10);
      obj8.children = items12;
      return closure_10(setActiveIndex, obj8);
    };
