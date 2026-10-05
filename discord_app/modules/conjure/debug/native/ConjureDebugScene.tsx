// === Module 16751: ConjureDebugScene ===

// Module 16751 (ConjureDebugScene)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import _modDef3723 from "module_3723" /* 3723 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4568 */;
import CopyIcon from "CopyIcon" /* 4843 */;
import ClipboardUtils from "ClipboardUtils" /* 6688 */;
import ConjureDebugSnapshot from "ConjureDebugSnapshot" /* 16753 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import DeveloperExperimentStore from "DeveloperExperimentStore" /* 7204 */;
import ConjureDebugStore from "ConjureDebugStore" /* 16752 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const requestDebugStatus = fn(12904).requestDebugStatus;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4890);
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
const result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureDebugScene.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  let obj = arr2;
  const cResult = projectId(arr2[12]).c(46);
  projectId = projectId.projectId;
  const tmp3 = closure_12();
  let obj2 = projectId(arr2[12]);
  const navigation = projectId(arr2[13]).useNavigation();
  let tmp5 = navigation;
  const bottom = navigation(arr2[14])().bottom;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DeveloperExperimentStore];
    const fn = function y() {
      return isDeveloper.isDeveloper;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const obj3 = projectId(arr2[13]);
  const stateFromStores = projectId(obj[15]).useStateFromStores(tmp6, tmp7);
  if (cResult[2] !== stateFromStores) {
    const tmp10 = stateFromStores ? ["logs", "worker", "agent", "trace"] : ["logs", "worker", "agent"];
    cResult[2] = stateFromStores;
    cResult[3] = tmp10;
  } else {
    [tmp14, _slicedToArray] = noop.useState("logs");
    if (cResult[4] !== cResult[3]) {
      let obj4 = {
        pageWidth: 0,
        items: arr2.map((id) => {
              const obj = { id, label: null, page: null };
              if ("worker" === id) {
                const intl4 = projectId(arr2[9]).intl;
                let stringResult = intl4.string(navigation(arr2[10])["50D0FZ"]);
              } else if ("agent" === id) {
                const intl3 = projectId(arr2[9]).intl;
                stringResult = intl3.string(navigation(arr2[10]).UkbTK1);
              } else if ("trace" === id) {
                const intl2 = projectId(arr2[9]).intl;
                stringResult = intl2.string(navigation(arr2[10]).O6nNjP);
              } else {
                const intl = projectId(arr2[9]).intl;
                stringResult = intl.string(navigation(arr2[10])["+VRYCm"]);
              }
              obj.label = stringResult;
              return obj;
            }),
        onSetActiveIndex(arg0) {
              let str = arr2[arg0];
              if (str == null) {
                str = "logs";
              }
              return _slicedToArray(str);
            }
      };
      cResult[4] = arr2;
      cResult[5] = obj4;
      let tmp15 = obj4;
    } else {
      tmp15 = cResult[5];
    }
    const tmp13 = _slicedToArray(noop.useState("logs"), 2);
    const segmentedControlState = tmp(obj[16]).useSegmentedControlState(tmp15);
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [ConjureDebugStore];
      cResult[6] = items1;
      let tmp17 = items1;
    } else {
      tmp17 = cResult[6];
    }
    if (cResult[7] !== projectId) {
      class B {
        constructor() {
          return closure_9.getStatus(projectId);
        }
      }
      const items2 = [projectId];
      cResult[7] = projectId;
      cResult[8] = B;
      cResult[9] = items2;
      let tmp20 = items2;
    } else {
      class B {
        constructor() {
          return closure_9.getStatus(projectId);
        }
      }
      tmp20 = cResult[9];
    }
    const tmpResult4 = tmp(obj[16]);
    let report = tmp(obj[15]).useStateFromStores(tmp17, B, tmp20);
    const _Symbol2 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class B {
        constructor() {
          return closure_9.getStatus(projectId);
        }
      }
      const items3 = [ConjureDebugStore];
      cResult[10] = items3;
      const tmp21 = items3;
    } else {
      class B {
        constructor() {
          return closure_9.getStatus(projectId);
        }
      }
    }
    if (cResult[11] !== projectId) {
      class V {
        constructor() {
          return closure_9.getFetchState(projectId);
        }
      }
      const items4 = [projectId];
      cResult[11] = projectId;
      cResult[12] = items4;
      cResult[13] = V;
      let tmp23 = V;
      const tmp22 = items4;
    } else {
      class V {
        constructor() {
          return closure_9.getFetchState(projectId);
        }
      }
      tmp23 = cResult[13];
    }
    const tmpResult5 = tmp(obj[15]);
    const stateFromStores1 = tmp(obj[15]).useStateFromStores(tmp21, tmp23, tmp22);
    if (cResult[14] !== projectId) {
      class H {
        constructor() {
          tmp = requestDebugStatus(projectId);
          return;
        }
      }
      const items5 = [projectId];
      cResult[14] = projectId;
      cResult[15] = H;
      cResult[16] = items5;
      let tmp26 = items5;
    } else {
      class H {
        constructor() {
          tmp = requestDebugStatus(projectId);
          return;
        }
      }
      tmp26 = cResult[16];
    }
    const effect = obj5.useEffect(H, tmp26);
    if (cResult[17] !== projectId) {
      class H {
        constructor() {
          tmp = requestDebugStatus(projectId);
          return;
        }
      }
      cResult[17] = projectId;
      cResult[18] = tmp29;
    } else {
      class H {
        constructor() {
          tmp = requestDebugStatus(projectId);
          return;
        }
      }
    }
    if (cResult[19] !== projectId) {
      class W {
        constructor() {
          obj = closure_0(closure_2[17]);
          obj2 = closure_0(closure_2[18]);
          copyResult = obj.copy(obj2.conjureDebugSnapshot(projectId));
          obj3 = closure_1(closure_2[19]);
          obj1 = { key: "CONJURE_DEBUG_COPIED", content: null, IconComponent: null };
          intl = closure_0(closure_2[9]).intl;
          obj1.content = intl.string(closure_1(closure_2[10]).wI6fhl);
          obj1.IconComponent = closure_0(closure_2[20]).CopyIcon;
          openResult = obj3.open(obj1);
          return;
        }
      }
      cResult[19] = projectId;
      cResult[20] = W;
    } else {
      class W {
        constructor() {
          obj = closure_0(closure_2[17]);
          obj2 = closure_0(closure_2[18]);
          copyResult = obj.copy(obj2.conjureDebugSnapshot(projectId));
          obj3 = closure_1(closure_2[19]);
          obj1 = { key: "CONJURE_DEBUG_COPIED", content: null, IconComponent: null };
          intl = closure_0(closure_2[9]).intl;
          obj1.content = intl.string(closure_1(closure_2[10]).wI6fhl);
          obj1.IconComponent = closure_0(closure_2[20]).CopyIcon;
          openResult = obj3.open(obj1);
          return;
        }
      }
    }
    noop = W;
    if (cResult[21] === W) {
      class W {
        constructor() {
          obj = closure_0(closure_2[17]);
          obj2 = closure_0(closure_2[18]);
          copyResult = obj.copy(obj2.conjureDebugSnapshot(projectId));
          obj3 = closure_1(closure_2[19]);
          obj1 = { key: "CONJURE_DEBUG_COPIED", content: null, IconComponent: null };
          intl = closure_0(closure_2[9]).intl;
          obj1.content = intl.string(closure_1(closure_2[10]).wI6fhl);
          obj1.IconComponent = closure_0(closure_2[20]).CopyIcon;
          openResult = obj3.open(obj1);
          return;
        }
      }
      const effect1 = obj5.useEffect(J, tmp32);
      if (cResult[25] !== segmentedControlState) {
        class W {
          constructor() {
            obj = closure_0(closure_2[17]);
            obj2 = closure_0(closure_2[18]);
            copyResult = obj.copy(obj2.conjureDebugSnapshot(projectId));
            obj3 = closure_1(closure_2[19]);
            obj1 = { key: "CONJURE_DEBUG_COPIED", content: null, IconComponent: null };
            intl = closure_0(closure_2[9]).intl;
            obj1.content = intl.string(closure_1(closure_2[10]).wI6fhl);
            obj1.IconComponent = closure_0(closure_2[20]).CopyIcon;
            openResult = obj3.open(obj1);
            return;
          }
        }
        const obj6 = { state: segmentedControlState };
        const tmp35 = closure_10(tmp(obj[22]).SegmentedControl, obj6);
        cResult[25] = segmentedControlState;
        cResult[26] = tmp35;
      } else {
        class W {
          constructor() {
            obj = closure_0(closure_2[17]);
            obj2 = closure_0(closure_2[18]);
            copyResult = obj.copy(obj2.conjureDebugSnapshot(projectId));
            obj3 = closure_1(closure_2[19]);
            obj1 = { key: "CONJURE_DEBUG_COPIED", content: null, IconComponent: null };
            intl = closure_0(closure_2[9]).intl;
            obj1.content = intl.string(closure_1(closure_2[10]).wI6fhl);
            obj1.IconComponent = closure_0(closure_2[20]).CopyIcon;
            openResult = obj3.open(obj1);
            return;
          }
        }
      }
      if (cResult[27] === tmp3.tabs) {
        class W {
          constructor() {
            obj = closure_0(closure_2[17]);
            obj2 = closure_0(closure_2[18]);
            copyResult = obj.copy(obj2.conjureDebugSnapshot(projectId));
            obj3 = closure_1(closure_2[19]);
            obj1 = { key: "CONJURE_DEBUG_COPIED", content: null, IconComponent: null };
            intl = closure_0(closure_2[9]).intl;
            obj1.content = intl.string(closure_1(closure_2[10]).wI6fhl);
            obj1.IconComponent = closure_0(closure_2[20]).CopyIcon;
            openResult = obj3.open(obj1);
            return;
          }
        }
        if (cResult[30] === stateFromStores1) {
          class W {
            constructor() {
              obj = closure_0(closure_2[17]);
              obj2 = closure_0(closure_2[18]);
              copyResult = obj.copy(obj2.conjureDebugSnapshot(projectId));
              obj3 = closure_1(closure_2[19]);
              obj1 = { key: "CONJURE_DEBUG_COPIED", content: null, IconComponent: null };
              intl = closure_0(closure_2[9]).intl;
              obj1.content = intl.string(closure_1(closure_2[10]).wI6fhl);
              obj1.IconComponent = closure_0(closure_2[20]).CopyIcon;
              openResult = obj3.open(obj1);
              return;
            }
          }
        }
        if ("logs" === tmp14) {
          class W {
            constructor() {
              obj = closure_0(closure_2[17]);
              obj2 = closure_0(closure_2[18]);
              copyResult = obj.copy(obj2.conjureDebugSnapshot(projectId));
              obj3 = closure_1(closure_2[19]);
              obj1 = { key: "CONJURE_DEBUG_COPIED", content: null, IconComponent: null };
              intl = closure_0(closure_2[9]).intl;
              obj1.content = intl.string(closure_1(closure_2[10]).wI6fhl);
              obj1.IconComponent = closure_0(closure_2[20]).CopyIcon;
              openResult = obj3.open(obj1);
              return;
            }
          }
          tmp5 = tmp5(obj[23]);
          obj = { projectId };
          let tmp40Result2 = closure_10(tmp5, obj);
        } else {
          class W {
            constructor() {
              obj = closure_0(closure_2[17]);
              obj2 = closure_0(closure_2[18]);
              copyResult = obj.copy(obj2.conjureDebugSnapshot(projectId));
              obj3 = closure_1(closure_2[19]);
              obj1 = { key: "CONJURE_DEBUG_COPIED", content: null, IconComponent: null };
              intl = closure_0(closure_2[9]).intl;
              obj1.content = intl.string(closure_1(closure_2[10]).wI6fhl);
              obj1.IconComponent = closure_0(closure_2[20]).CopyIcon;
              openResult = obj3.open(obj1);
              return;
            }
          }
          if ("trace" === tmp14) {
            class W {
              constructor() {
                obj = closure_0(closure_2[17]);
                obj2 = closure_0(closure_2[18]);
                copyResult = obj.copy(obj2.conjureDebugSnapshot(projectId));
                obj3 = closure_1(closure_2[19]);
                obj1 = { key: "CONJURE_DEBUG_COPIED", content: null, IconComponent: null };
                intl = closure_0(closure_2[9]).intl;
                obj1.content = intl.string(closure_1(closure_2[10]).wI6fhl);
                obj1.IconComponent = closure_0(closure_2[20]).CopyIcon;
                openResult = obj3.open(obj1);
                return;
              }
            }
          }
          const obj7 = { contentContainerStyle: null, children: null };
          const items6 = [tmp3.report, ];
          const obj8 = { paddingBottom: tmp5(obj[8]).space.PX_16 + bottom };
          items6[1] = obj8;
          obj7.contentContainerStyle = items6;
          if ("worker" === tmp14) {
            class W {
              constructor() {
                obj = closure_0(closure_2[17]);
                obj2 = closure_0(closure_2[18]);
                copyResult = obj.copy(obj2.conjureDebugSnapshot(projectId));
                obj3 = closure_1(closure_2[19]);
                obj1 = { key: "CONJURE_DEBUG_COPIED", content: null, IconComponent: null };
                intl = closure_0(closure_2[9]).intl;
                obj1.content = intl.string(closure_1(closure_2[10]).wI6fhl);
                obj1.IconComponent = closure_0(closure_2[20]).CopyIcon;
                openResult = obj3.open(obj1);
                return;
              }
            }
            tmp44[0] = report;
            tmp44[1] = stateFromStores1;
            tmp44[2] = tmp29;
            let tmp40Result = closure_10(tmp5(obj[25]), tmp44);
          } else {
            class W {
              constructor() {
                obj = closure_0(closure_2[17]);
                obj2 = closure_0(closure_2[18]);
                copyResult = obj.copy(obj2.conjureDebugSnapshot(projectId));
                obj3 = closure_1(closure_2[19]);
                obj1 = { key: "CONJURE_DEBUG_COPIED", content: null, IconComponent: null };
                intl = closure_0(closure_2[9]).intl;
                obj1.content = intl.string(closure_1(closure_2[10]).wI6fhl);
                obj1.IconComponent = closure_0(closure_2[20]).CopyIcon;
                openResult = obj3.open(obj1);
                return;
              }
            }
            tmp42[0] = projectId;
            tmp42[1] = report;
            tmp42[2] = stateFromStores1;
            tmp42[3] = tmp29;
            tmp42[4] = stateFromStores;
            tmp40Result = closure_10(tmp5(obj[26]), tmp42);
          }
          obj7.children = tmp40Result;
          tmp40Result2 = closure_10(closure_5, obj7, tmp14);
        }
        cResult[30] = stateFromStores1;
        cResult[31] = tmp29;
        cResult[32] = projectId;
        cResult[33] = bottom;
        cResult[34] = stateFromStores;
        cResult[35] = report;
        report = tmp3.report;
        cResult[36] = report;
        cResult[37] = tmp14;
        cResult[38] = tmp40Result2;
      }
      const obj9 = { style: tmp3.tabs, children: tmp34 };
      const tmp39 = closure_10(closure_6, obj9);
      cResult[27] = tmp3.tabs;
      cResult[28] = tmp34;
      cResult[29] = tmp39;
    }
    class J {
      constructor() {
        obj = {
          headerRight() {
                  const obj = { IconComponent: projectId(arr2[20]).CopyIcon, onPress, accessibilityLabel: null };
                  const intl = projectId(arr2[9]).intl;
                  obj.accessibilityLabel = intl.string(navigation(arr2[10]).TkHqy2);
                  return closure_2_10(navigation(arr2[21]), obj);
                }
        };
        setOptionsResult = closure_1.setOptions(obj);
        return;
      }
    }
    const items7 = [W, navigation];
    cResult[21] = W;
    cResult[22] = navigation;
    cResult[23] = J;
    cResult[24] = items7;
    tmp32 = items7;
    const tmpResult6 = tmp(obj[15]);
  }
  const tmpResult = projectId(obj[15]);
}) : ((projectId) => {
  projectId = projectId.projectId;
  let stateFromStores;
  noop = undefined;
  const tmp = closure_12();
  const navigation = projectId(stateFromStores[13]).useNavigation();
  let obj = projectId(stateFromStores[13]);
  const items = [DeveloperExperimentStore];
  stateFromStores = projectId(stateFromStores[15]).useStateFromStores(items, () => isDeveloper.isDeveloper);
  const items1 = [stateFromStores];
  const memo = noop.useMemo(() => stateFromStores ? ["logs", "worker", "agent", "trace"] : ["logs", "worker", "agent"], items1);
  let obj2 = projectId(stateFromStores[15]);
  [tmp7, c4] = memo(noop.useState("logs"), 2);
  const tmp6 = memo(noop.useState("logs"), 2);
  const obj3 = projectId(stateFromStores[16]);
  const segmentedControlState = obj3.useSegmentedControlState({
    pageWidth: 0,
    items: memo.map((id) => {
      const obj = { id, label: null, page: null };
      if ("worker" === id) {
        const intl4 = projectId(stateFromStores[9]).intl;
        let stringResult = intl4.string(navigation(stateFromStores[10])["50D0FZ"]);
      } else if ("agent" === id) {
        const intl3 = projectId(stateFromStores[9]).intl;
        stringResult = intl3.string(navigation(stateFromStores[10]).UkbTK1);
      } else if ("trace" === id) {
        const intl2 = projectId(stateFromStores[9]).intl;
        stringResult = intl2.string(navigation(stateFromStores[10]).O6nNjP);
      } else {
        const intl = projectId(stateFromStores[9]).intl;
        stringResult = intl.string(navigation(stateFromStores[10])["+VRYCm"]);
      }
      obj.label = stringResult;
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
        const intl4 = projectId(stateFromStores[9]).intl;
        let stringResult = intl4.string(navigation(stateFromStores[10])["50D0FZ"]);
      } else if ("agent" === id) {
        const intl3 = projectId(stateFromStores[9]).intl;
        stringResult = intl3.string(navigation(stateFromStores[10]).UkbTK1);
      } else if ("trace" === id) {
        const intl2 = projectId(stateFromStores[9]).intl;
        stringResult = intl2.string(navigation(stateFromStores[10]).O6nNjP);
      } else {
        const intl = projectId(stateFromStores[9]).intl;
        stringResult = intl.string(navigation(stateFromStores[10])["+VRYCm"]);
      }
      obj.label = stringResult;
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
  const items2 = [ConjureDebugStore];
  const items3 = [projectId];
  const stateFromStores1 = projectId(stateFromStores[15]).useStateFromStores(items2, () => ConjureDebugStore.getStatus(projectId), items3);
  const obj5 = projectId(stateFromStores[15]);
  const items4 = [ConjureDebugStore];
  const items5 = [projectId];
  const stateFromStores2 = projectId(stateFromStores[15]).useStateFromStores(items4, () => ConjureDebugStore.getFetchState(projectId), items5);
  const items6 = [projectId];
  const effect = noop.useEffect(() => {
    requestDebugStatus(projectId);
  }, items6);
  const items7 = [projectId];
  const callback = noop.useCallback(() => requestDebugStatus(projectId), items7);
  const items8 = [projectId];
  const callback1 = noop.useCallback(() => {
    const obj = ClipboardUtils;
    obj.copy(ConjureDebugSnapshot.conjureDebugSnapshot(projectId));
    const obj4 = { key: "CONJURE_DEBUG_COPIED", content: null, IconComponent: null };
    const intl = util.intl;
    obj4.content = intl.string(_modDef3723.wI6fhl);
    obj4.IconComponent = CopyIcon.CopyIcon;
    ToastActionCreatorsDefault.open(obj4);
  }, items8);
  const items9 = [callback1, navigation];
  const effect1 = noop.useEffect(() => {
    navigation.setOptions({
      headerRight() {
        const obj = { IconComponent: projectId(stateFromStores[20]).CopyIcon, onPress, accessibilityLabel: null };
        const intl = projectId(stateFromStores[9]).intl;
        obj.accessibilityLabel = intl.string(navigation(stateFromStores[10]).TkHqy2);
        return closure_2_10(navigation(stateFromStores[21]), obj);
      }
    });
  }, items9);
  const obj7 = { style: tmp.scene, children: null };
  const obj6 = projectId(stateFromStores[15]);
  const items10 = [closure_10(closure_6, { style: tmp.tabs, children: closure_10(projectId(stateFromStores[22]).SegmentedControl, { state: segmentedControlState }) }), ];
  const obj9 = { style: tmp.content, children: null };
  if ("logs" === tmp7) {
    const obj10 = { projectId };
    let tmp17Result = closure_10(tmp4(tmp2[23]), obj10);
  } else {
    if ("trace" === tmp7) {
      if (stateFromStores) {
        const obj11 = { projectId };
        tmp17Result = closure_10(tmp4(tmp2[24]), obj11);
      }
    }
    const obj12 = { contentContainerStyle: null, children: null };
    const items11 = [tmp.report, ];
    const obj13 = { paddingBottom: tmp4(tmp2[8]).space.PX_16 + navigation(stateFromStores[14])().bottom };
    items11[1] = obj13;
    obj12.contentContainerStyle = items11;
    if ("worker" === tmp7) {
      const obj14 = { status: stateFromStores1, fetchState: stateFromStores2, onRefresh: callback };
      let tmp17Result2 = closure_10(tmp4(tmp2[25]), obj14);
    } else {
      const obj15 = { projectId, status: stateFromStores1, fetchState: stateFromStores2, onRefresh: callback, traceVisible: stateFromStores };
      tmp17Result2 = closure_10(tmp4(tmp2[26]), obj15);
    }
    obj12.children = tmp17Result2;
    tmp17Result = closure_10(callback1, obj12, tmp7);
  }
  obj9.children = tmp17Result;
  items10[1] = closure_10(closure_6, obj9);
  obj7.children = items10;
  return closure_11(closure_6, obj7);
});