// === Module 17275: ConjureDebugScene ===

// Module 17275 (ConjureDebugScene)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import _modDef3849 from "module_3849" /* 3849 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import CopyIcon from "CopyIcon" /* 5042 */;
import ClipboardUtils from "ClipboardUtils" /* 6885 */;
import conjureTraceRequests2 from "conjureTraceRequests" /* 17081 */;
import ConjurePerfTraceTab from "ConjurePerfTraceTab" /* 17276 */;
import ConjureDebugSnapshot from "ConjureDebugSnapshot" /* 17285 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConjureDebugStore from "ConjureDebugStore" /* 13214 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const ConjureConnectionStore = fn(13213);
({ requestDebugStatus: closure_7, subscribeDebugBacklog: closure_8 } = ConjureConnectionStore);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { scene: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, tabs: null, content: null, report: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.tabs = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_12 };
obj2.content = { flex: 1 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_12 };
obj2.report = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { paddingHorizontal: nativeDefault.space.PX_16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureDebugScene.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureDebugScene(projectId) {
  const cResult = projectId(conjureTraceTabEnabled[11]).c(55);
  projectId = projectId.projectId;
  closure_12();
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
            }
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
      const fn = function w() {
        return ConjureDebugStore.getStatus(projectId);
      };
      const items1 = [projectId];
      cResult[5] = projectId;
      cResult[6] = fn;
      cResult[7] = items1;
      let tmp17 = items1;
      let tmp16 = fn;
    } else {
      tmp16 = cResult[6];
      tmp17 = cResult[7];
    }
    let tmpResult = tmp(tmp2[15]);
    const stateFromStores = tmp(tmp2[16]).useStateFromStores(tmp14, tmp16, tmp17);
    const _Symbol2 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [ConjureDebugStore];
      cResult[8] = items2;
      let tmp19 = items2;
    } else {
      tmp19 = cResult[8];
    }
    if (cResult[9] !== projectId) {
      const fn2 = function q() {
        return ConjureDebugStore.getFetchState(projectId);
      };
      const items3 = [projectId];
      cResult[9] = projectId;
      cResult[10] = fn2;
      cResult[11] = items3;
      let tmp22 = items3;
      let tmp21 = fn2;
    } else {
      tmp21 = cResult[10];
      tmp22 = cResult[11];
    }
    const tmpResult3 = tmp(tmp2[16]);
    const stateFromStores1 = tmp(tmp2[16]).useStateFromStores(tmp19, tmp21, tmp22);
    if (cResult[12] !== projectId) {
      class X {
        constructor() {
          tmp = requestDebugStatus(projectId);
          return;
        }
      }
      const items4 = [projectId];
      cResult[12] = projectId;
      cResult[13] = items4;
      cResult[14] = X;
      let tmp25 = X;
      const tmp24 = items4;
    } else {
      class X {
        constructor() {
          tmp = requestDebugStatus(projectId);
          return;
        }
      }
      tmp25 = cResult[14];
    }
    const effect = noop.useEffect(tmp25, tmp24);
    if (cResult[15] !== projectId) {
      class N {
        constructor() {
          return subscribeDebugBacklog(projectId);
        }
      }
      const items5 = [projectId];
      cResult[15] = projectId;
      cResult[16] = N;
      cResult[17] = items5;
      let tmp28 = items5;
    } else {
      class N {
        constructor() {
          return subscribeDebugBacklog(projectId);
        }
      }
      tmp28 = cResult[17];
    }
    const effect1 = noop.useEffect(N, tmp28);
    if (cResult[18] !== projectId) {
      class G {
        constructor() {
          return requestDebugStatus(projectId);
        }
      }
      cResult[18] = projectId;
      cResult[19] = G;
    } else {
      class G {
        constructor() {
          return requestDebugStatus(projectId);
        }
      }
    }
    const setActiveIndex = segmentedControlState.setActiveIndex;
    if (cResult[20] === projectId) {
      class G {
        constructor() {
          return requestDebugStatus(projectId);
        }
      }
    }
    class W {
      constructor() {
        if (closure_2) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[17]);
          tmp3 = projectId;
          result = obj.takeConjureTraceRequest(projectId);
          tmp5 = null;
          if (null != result) {
            tmp6 = setActiveIndex;
            tmp7 = closure_3;
            str = "trace";
            flag = false;
            tmp8 = setActiveIndex(closure_3.indexOf("trace"), false);
            tmpResult = tmp(tmp2[18]);
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
}) : (function ConjureDebugScene(projectId) {
  projectId = projectId.projectId;
  let conjureTraceTabEnabled;
  noop = undefined;
  const tmp = closure_12();
  const navigation = projectId(conjureTraceTabEnabled[12]).useNavigation();
  let obj = projectId(conjureTraceTabEnabled[12]);
  conjureTraceTabEnabled = projectId(conjureTraceTabEnabled[14]).useConjureTraceTabEnabled();
  const items = [conjureTraceTabEnabled];
  const memo = noop.useMemo(() => conjureTraceTabEnabled ? ["logs", "worker", "agent", "trace"] : ["logs", "worker", "agent"], items);
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
    }
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
    }
  };
  const items1 = [ConjureDebugStore];
  const items2 = [projectId];
  const stateFromStores = projectId(conjureTraceTabEnabled[16]).useStateFromStores(items1, () => ConjureDebugStore.getStatus(projectId), items2);
  const obj5 = projectId(conjureTraceTabEnabled[16]);
  const items3 = [ConjureDebugStore];
  const items4 = [projectId];
  const stateFromStores1 = projectId(conjureTraceTabEnabled[16]).useStateFromStores(items3, () => ConjureDebugStore.getFetchState(projectId), items4);
  const items5 = [projectId];
  const effect = noop.useEffect(() => {
    React5(projectId);
  }, items5);
  const items6 = [projectId];
  const effect1 = noop.useEffect(() => closure_2_8(projectId), items6);
  const items7 = [projectId];
  const callback = noop.useCallback(() => React5(projectId), items7);
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
  const conjureTraceRequests = projectId(conjureTraceTabEnabled[17]).useConjureTraceRequests(projectId, callback1);
  const items10 = [projectId];
  const callback2 = noop.useCallback(() => {
    const obj = ClipboardUtils;
    obj.copy(ConjureDebugSnapshot.conjureDebugSnapshot(projectId));
    const obj4 = { text: null, icon: null };
    const intl = util.intl;
    obj4.text = intl.string(_modDef3849.wI6fhl);
    obj4.icon = CopyIcon.CopyIcon;
    ToastActionCreatorsDefault.open("CONJURE_DEBUG_COPIED", obj4);
  }, items10);
  const items11 = [callback2, navigation];
  const effect3 = noop.useEffect(() => {
    navigation.setOptions({
      headerRight() {
        const obj = { IconComponent: projectId(conjureTraceTabEnabled[22]).CopyIcon, onPress, accessibilityLabel: null };
        const intl = projectId(conjureTraceTabEnabled[8]).intl;
        obj.accessibilityLabel = intl.string(navigation(conjureTraceTabEnabled[9]).TkHqy2);
        return closure_2_10(navigation(conjureTraceTabEnabled[23]), obj);
      }
    });
  }, items11);
  const obj8 = { style: tmp.scene, children: null };
  const obj7 = projectId(conjureTraceTabEnabled[17]);
  const items12 = [closure_10(callback1, { style: tmp.tabs, children: closure_10(projectId(conjureTraceTabEnabled[24]).SegmentedControl, { state: segmentedControlState }) }), ];
  const obj10 = { style: tmp.content, children: null };
  if ("logs" === tmp7) {
    const obj11 = { projectId };
    let tmp21Result = closure_10(tmp4(tmp2[25]), obj11);
  } else {
    if ("trace" === tmp7) {
      if (conjureTraceTabEnabled) {
        const obj12 = { projectId };
        tmp21Result = closure_10(tmp4(tmp2[18]), obj12);
      }
    }
    const obj13 = { contentContainerStyle: null, children: null };
    const items13 = [tmp.report, ];
    const obj14 = { paddingBottom: tmp4(tmp2[7]).space.PX_16 + navigation(conjureTraceTabEnabled[13])().bottom };
    items13[1] = obj14;
    obj13.contentContainerStyle = items13;
    if ("worker" === tmp7) {
      const obj15 = { status: stateFromStores, fetchState: stateFromStores1, onRefresh: callback };
      let tmp21Result2 = closure_10(tmp4(tmp2[26]), obj15);
    } else {
      const obj16 = { projectId, status: stateFromStores, fetchState: stateFromStores1, onRefresh: callback };
      tmp21Result2 = closure_10(tmp4(tmp2[27]), obj16);
    }
    obj13.children = tmp21Result2;
    tmp21Result = closure_10(setActiveIndex, obj13, tmp7);
  }
  obj10.children = tmp21Result;
  items12[1] = closure_10(callback1, obj10);
  obj8.children = items12;
  return closure_11(callback1, obj8);
});