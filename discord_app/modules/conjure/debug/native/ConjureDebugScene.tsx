// === Module 16751: ConjureDebugScene ===

// Module 16751 (ConjureDebugScene)
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import _modDef3723 from "module_3723" /* 3723 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4568 */;
import CopyIcon from "CopyIcon" /* 4843 */;
import ClipboardUtils from "ClipboardUtils" /* 6688 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 12904 */;
import ConjureDebugSnapshot from "ConjureDebugSnapshot" /* 16753 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import DeveloperExperimentStore from "DeveloperExperimentStore" /* 7204 */;
import ConjureDebugStore from "ConjureDebugStore" /* 16752 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation, projectId, setOptionsResult;

let c10;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
let react = react_mod;
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
const requestDebugStatus = ConjureConnectionStore.requestDebugStatus;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { scene: obj2, tabs: obj3, content: { flex: 1 }, report: obj4 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_12 };
obj4 = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_12 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  let arr2;
  let isDeveloper;
  let items6;
  let items7;
  let tmp13;
  let tmp14;
  let tmp16;
  let tmp19;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp26;
  let tmp39Result;
  let tmp7;
  let tmp8;
  let tmp = projectId;
  let obj = projectId(arr2[12]);
  const cResult = obj.c(46);
  projectId = projectId.projectId;
  const tmp4 = closure_12();
  let obj2 = projectId(arr2[13]);
  navigation = obj2.useNavigation();
  const bottom = navigation(arr2[14])().bottom;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DeveloperExperimentStore];
    const fn = function y() {
      return isDeveloper.isDeveloper;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const tmpResult = tmp(arr2[15]);
  const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
  if (cResult[2] !== stateFromStores) {
    const tmp11 = stateFromStores ? ["logs", "worker", "agent", "trace"] : ["logs", "worker", "agent"];
    cResult[2] = stateFromStores;
    cResult[3] = tmp11;
    arr2 = tmp11;
  } else {
    arr2 = cResult[3];
  }
  const tmp12 = _slicedToArray(W.useState("logs"), 2);
  [tmp13, _slicedToArray] = tmp12;
  if (cResult[4] !== arr2) {
    const obj3 = {
      pageWidth: 0,
      items: arr2.map((id) => {
          let stringResult;
          const obj = { id, label: stringResult, page: null };
          if ("worker" === id) {
            const intl4 = projectId(arr2[9]).intl;
            stringResult = intl4.string(navigation(arr2[10])["50D0FZ"]);
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
    cResult[5] = obj3;
    tmp14 = obj3;
  } else {
    tmp14 = cResult[5];
  }
  const tmpResult4 = tmp(arr2[16]);
  const segmentedControlState = tmpResult4.useSegmentedControlState(tmp14);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ConjureDebugStore];
    cResult[6] = items1;
    tmp16 = items1;
  } else {
    tmp16 = cResult[6];
  }
  if (cResult[7] !== projectId) {
    class B {
      constructor() {
        return ConjureDebugStore.getStatus(projectId);
      }
    }
    const items2 = [projectId];
    cResult[7] = projectId;
    cResult[8] = B;
    cResult[9] = items2;
    tmp19 = items2;
  } else {
    class B {
      constructor() {
        return ConjureDebugStore.getStatus(projectId);
      }
    }
    tmp19 = cResult[9];
  }
  const tmpResult5 = tmp(arr2[15]);
  const stateFromStores1 = tmpResult5.useStateFromStores(tmp16, B, tmp19);
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class B {
      constructor() {
        return ConjureDebugStore.getStatus(projectId);
      }
    }
    const items3 = [ConjureDebugStore];
    cResult[10] = items3;
    tmp21 = items3;
  } else {
    class B {
      constructor() {
        return ConjureDebugStore.getStatus(projectId);
      }
    }
  }
  if (cResult[11] !== projectId) {
    class V {
      constructor() {
        return ConjureDebugStore.getFetchState(projectId);
      }
    }
    const items4 = [projectId];
    cResult[11] = projectId;
    cResult[12] = items4;
    cResult[13] = V;
    tmp23 = V;
    tmp22 = items4;
  } else {
    class V {
      constructor() {
        return ConjureDebugStore.getFetchState(projectId);
      }
    }
    tmp23 = cResult[13];
  }
  const tmpResult6 = tmp(arr2[15]);
  const stateFromStores2 = tmpResult6.useStateFromStores(tmp21, tmp23, tmp22);
  if (cResult[14] !== projectId) {
    class H {
      constructor() {
        requestDebugStatus(projectId);
      }
    }
    const items5 = [projectId];
    cResult[14] = projectId;
    cResult[15] = H;
    cResult[16] = items5;
    tmp26 = items5;
  } else {
    class H {
      constructor() {
        requestDebugStatus(projectId);
      }
    }
    tmp26 = cResult[16];
  }
  const effect = obj4.useEffect(H, tmp26);
  if (cResult[17] !== projectId) {
    class H {
      constructor() {
        requestDebugStatus(projectId);
      }
    }
    cResult[17] = projectId;
    cResult[18] = tmp29;
  } else {
    class H {
      constructor() {
        requestDebugStatus(projectId);
      }
    }
  }
  if (cResult[19] !== projectId) {
    class W {
      constructor() {
        let intl;
        const copy = ClipboardUtils.copy;
        ClipboardUtils;
        const obj = ConjureDebugSnapshot;
        copy(obj.conjureDebugSnapshot(projectId));
        const obj2 = { key: "CONJURE_DEBUG_COPIED", content: intl.string(_modDef3723.wI6fhl), IconComponent: CopyIcon.CopyIcon };
        const open = ToastActionCreatorsDefault.open;
        ToastActionCreatorsDefault;
        intl = intl5.intl;
        open(obj2);
      }
    }
    cResult[19] = projectId;
    cResult[20] = W;
  } else {
    class W {
      constructor() {
        let intl;
        const copy = ClipboardUtils.copy;
        ClipboardUtils;
        const obj = ConjureDebugSnapshot;
        copy(obj.conjureDebugSnapshot(projectId));
        const obj2 = { key: "CONJURE_DEBUG_COPIED", content: intl.string(_modDef3723.wI6fhl), IconComponent: CopyIcon.CopyIcon };
        const open = ToastActionCreatorsDefault.open;
        ToastActionCreatorsDefault;
        intl = intl5.intl;
        open(obj2);
      }
    }
  }
  W = tmp30;
  if (cResult[21] === tmp30) {
    class W {
      constructor() {
        let intl;
        const copy = ClipboardUtils.copy;
        ClipboardUtils;
        const obj = ConjureDebugSnapshot;
        copy(obj.conjureDebugSnapshot(projectId));
        const obj2 = { key: "CONJURE_DEBUG_COPIED", content: intl.string(_modDef3723.wI6fhl), IconComponent: CopyIcon.CopyIcon };
        const open = ToastActionCreatorsDefault.open;
        ToastActionCreatorsDefault;
        intl = intl5.intl;
        open(obj2);
      }
    }
    const effect1 = obj4.useEffect(J, items7);
    if (cResult[25] !== segmentedControlState) {
      class W {
        constructor() {
          let intl;
          const copy = ClipboardUtils.copy;
          ClipboardUtils;
          const obj = ConjureDebugSnapshot;
          copy(obj.conjureDebugSnapshot(projectId));
          const obj2 = { key: "CONJURE_DEBUG_COPIED", content: intl.string(_modDef3723.wI6fhl), IconComponent: CopyIcon.CopyIcon };
          const open = ToastActionCreatorsDefault.open;
          ToastActionCreatorsDefault;
          intl = intl5.intl;
          open(obj2);
        }
      }
      const obj5 = { state: segmentedControlState };
      cResult[25] = segmentedControlState;
      cResult[26] = closure_10(tmp(arr2[22]).SegmentedControl, obj5);
      const tmp33 = closure_10(tmp(arr2[22]).SegmentedControl, obj5);
    } else {
      class W {
        constructor() {
          let intl;
          const copy = ClipboardUtils.copy;
          ClipboardUtils;
          const obj = ConjureDebugSnapshot;
          copy(obj.conjureDebugSnapshot(projectId));
          const obj2 = { key: "CONJURE_DEBUG_COPIED", content: intl.string(_modDef3723.wI6fhl), IconComponent: CopyIcon.CopyIcon };
          const open = ToastActionCreatorsDefault.open;
          ToastActionCreatorsDefault;
          intl = intl5.intl;
          open(obj2);
        }
      }
    }
    if (cResult[27] === tmp4.tabs) {
      let tmp39Result2;
      class W {
        constructor() {
          let intl;
          const copy = ClipboardUtils.copy;
          ClipboardUtils;
          const obj = ConjureDebugSnapshot;
          copy(obj.conjureDebugSnapshot(projectId));
          const obj2 = { key: "CONJURE_DEBUG_COPIED", content: intl.string(_modDef3723.wI6fhl), IconComponent: CopyIcon.CopyIcon };
          const open = ToastActionCreatorsDefault.open;
          ToastActionCreatorsDefault;
          intl = intl5.intl;
          open(obj2);
        }
      }
      if (cResult[30] === stateFromStores2) {
        class W {
          constructor() {
            let intl;
            const copy = ClipboardUtils.copy;
            ClipboardUtils;
            const obj = ConjureDebugSnapshot;
            copy(obj.conjureDebugSnapshot(projectId));
            const obj2 = { key: "CONJURE_DEBUG_COPIED", content: intl.string(_modDef3723.wI6fhl), IconComponent: CopyIcon.CopyIcon };
            const open = ToastActionCreatorsDefault.open;
            ToastActionCreatorsDefault;
            intl = intl5.intl;
            open(obj2);
          }
        }
      }
      if ("logs" === tmp13) {
        class W {
          constructor() {
            let intl;
            const copy = ClipboardUtils.copy;
            ClipboardUtils;
            const obj = ConjureDebugSnapshot;
            copy(obj.conjureDebugSnapshot(projectId));
            const obj2 = { key: "CONJURE_DEBUG_COPIED", content: intl.string(_modDef3723.wI6fhl), IconComponent: CopyIcon.CopyIcon };
            const open = ToastActionCreatorsDefault.open;
            ToastActionCreatorsDefault;
            intl = intl5.intl;
            open(obj2);
          }
        }
        const obj6 = { projectId };
        tmp39Result2 = closure_10(tmp6(tmp2[23]), obj6);
      } else {
        class W {
          constructor() {
            let intl;
            const copy = ClipboardUtils.copy;
            ClipboardUtils;
            const obj = ConjureDebugSnapshot;
            copy(obj.conjureDebugSnapshot(projectId));
            const obj2 = { key: "CONJURE_DEBUG_COPIED", content: intl.string(_modDef3723.wI6fhl), IconComponent: CopyIcon.CopyIcon };
            const open = ToastActionCreatorsDefault.open;
            ToastActionCreatorsDefault;
            intl = intl5.intl;
            open(obj2);
          }
        }
        if ("trace" === tmp13) {
          class W {
            constructor() {
              let intl;
              const copy = ClipboardUtils.copy;
              ClipboardUtils;
              const obj = ConjureDebugSnapshot;
              copy(obj.conjureDebugSnapshot(projectId));
              const obj2 = { key: "CONJURE_DEBUG_COPIED", content: intl.string(_modDef3723.wI6fhl), IconComponent: CopyIcon.CopyIcon };
              const open = ToastActionCreatorsDefault.open;
              ToastActionCreatorsDefault;
              intl = intl5.intl;
              open(obj2);
            }
          }
        }
        const obj7 = { contentContainerStyle: items6, children: tmp39Result };
        items6 = [tmp4.report, ];
        items6[1] = { paddingBottom: navigation(arr2[8]).space.PX_16 + bottom };
        let str = "worker";
        const obj8 = { paddingBottom: navigation(arr2[8]).space.PX_16 + bottom };
        if ("worker" === tmp13) {
          class W {
            constructor() {
              let intl;
              const copy = ClipboardUtils.copy;
              ClipboardUtils;
              const obj = ConjureDebugSnapshot;
              copy(obj.conjureDebugSnapshot(projectId));
              const obj2 = { key: "CONJURE_DEBUG_COPIED", content: intl.string(_modDef3723.wI6fhl), IconComponent: CopyIcon.CopyIcon };
              const open = ToastActionCreatorsDefault.open;
              ToastActionCreatorsDefault;
              intl = intl5.intl;
              open(obj2);
            }
          }
          tmp43[0] = stateFromStores1;
          tmp43[1] = stateFromStores2;
          tmp43[2] = tmp29;
          tmp39Result = closure_10(tmp6(tmp2[25]), tmp43);
        } else {
          class W {
            constructor() {
              let intl;
              const copy = ClipboardUtils.copy;
              ClipboardUtils;
              const obj = ConjureDebugSnapshot;
              copy(obj.conjureDebugSnapshot(projectId));
              const obj2 = { key: "CONJURE_DEBUG_COPIED", content: intl.string(_modDef3723.wI6fhl), IconComponent: CopyIcon.CopyIcon };
              const open = ToastActionCreatorsDefault.open;
              ToastActionCreatorsDefault;
              intl = intl5.intl;
              open(obj2);
            }
          }
          tmp41[0] = projectId;
          tmp41[1] = stateFromStores1;
          tmp41[2] = stateFromStores2;
          tmp41[3] = tmp29;
          tmp41[4] = stateFromStores;
          tmp39Result = closure_10(tmp6(tmp2[26]), tmp41);
        }
        tmp39Result2 = closure_10(closure_5, obj7, tmp13);
      }
      cResult[30] = stateFromStores2;
      cResult[31] = tmp29;
      cResult[32] = projectId;
      cResult[33] = bottom;
      cResult[34] = stateFromStores;
      cResult[35] = stateFromStores1;
      cResult[36] = tmp4.report;
      cResult[37] = tmp13;
      cResult[38] = tmp39Result2;
    }
    const obj9 = { style: tmp4.tabs, children: tmp32 };
    cResult[27] = tmp4.tabs;
    cResult[28] = tmp32;
    cResult[29] = closure_10(closure_6, obj9);
    const tmp37 = closure_10(closure_6, obj9);
  }
  class J {
    constructor() {
      obj = {
        headerRight() {
              let intl;
              const obj = { IconComponent: projectId(arr2[20]).CopyIcon, onPress, accessibilityLabel: intl.string(navigation(arr2[10]).TkHqy2) };
              const tmp = navigation(arr2[21]);
              intl = projectId(arr2[9]).intl;
              return closure_2_10(tmp, obj);
            }
      };
      setOptionsResult = closure_1.setOptions(obj);
      return;
    }
  }
  items7 = [tmp30, navigation];
  cResult[21] = tmp30;
  cResult[22] = navigation;
  cResult[23] = J;
  cResult[24] = items7;
}) : ((projectId) => {
  let _undefined;
  let c4;
  let isDeveloper;
  let items10;
  let items11;
  let tmp17Result;
  let tmp17Result2;
  let tmp7;
  projectId = projectId.projectId;
  let stateFromStores;
  react = undefined;
  let tmp = closure_12();
  let obj = projectId(stateFromStores[13]);
  navigation = obj.useNavigation();
  const bottom = navigation(stateFromStores[14])().bottom;
  let obj2 = projectId(stateFromStores[15]);
  const items = [DeveloperExperimentStore];
  stateFromStores = obj2.useStateFromStores(items, () => isDeveloper.isDeveloper);
  const items1 = [stateFromStores];
  const memo = react.useMemo(() => stateFromStores ? ["logs", "worker", "agent", "trace"] : ["logs", "worker", "agent"], items1);
  [tmp7, c4] = memo(react.useState("logs"), 2);
  memo(react.useState("logs"), 2);
  const obj3 = projectId(stateFromStores[16]);
  const obj4 = {
    pageWidth: 0,
    items: memo.map((id) => {
      let stringResult;
      const obj = { id, label: stringResult, page: null };
      if ("worker" === id) {
        const intl4 = projectId(stateFromStores[9]).intl;
        stringResult = intl4.string(navigation(stateFromStores[10])["50D0FZ"]);
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
  const segmentedControlState = obj3.useSegmentedControlState(obj4);
  const items2 = [ConjureDebugStore];
  const items3 = [projectId];
  const obj5 = projectId(stateFromStores[15]);
  const stateFromStores1 = obj5.useStateFromStores(items2, () => ConjureDebugStore.getStatus(projectId), items3);
  const items4 = [ConjureDebugStore];
  const items5 = [projectId];
  const obj6 = projectId(stateFromStores[15]);
  const stateFromStores2 = obj6.useStateFromStores(items4, () => ConjureDebugStore.getFetchState(projectId), items5);
  const items6 = [projectId];
  const effect = react.useEffect(() => {
    requestDebugStatus(projectId);
  }, items6);
  const items7 = [projectId];
  const callback = react.useCallback(() => requestDebugStatus(projectId), items7);
  const items8 = [projectId];
  const callback1 = react.useCallback(() => {
    let intl;
    const copy = ClipboardUtils.copy;
    ClipboardUtils;
    const obj = ConjureDebugSnapshot;
    copy(obj.conjureDebugSnapshot(projectId));
    const obj2 = { key: "CONJURE_DEBUG_COPIED", content: intl.string(_modDef3723.wI6fhl), IconComponent: CopyIcon.CopyIcon };
    const open = ToastActionCreatorsDefault.open;
    ToastActionCreatorsDefault;
    intl = intl5.intl;
    open(obj2);
  }, items8);
  const items9 = [callback1, navigation];
  const effect1 = react.useEffect(() => {
    let onPress;
    let obj = {
      headerRight() {
        let intl;
        const obj = { IconComponent: projectId(stateFromStores[20]).CopyIcon, onPress, accessibilityLabel: intl.string(navigation(stateFromStores[10]).TkHqy2) };
        const tmp = navigation(stateFromStores[21]);
        intl = projectId(stateFromStores[9]).intl;
        return closure_2_10(tmp, obj);
      }
    };
    navigation.setOptions(obj);
  }, items9);
  const obj7 = { style: tmp.scene, children: items10 };
  items10 = [, ];
  const obj8 = { style: tmp.tabs, children: closure_10(projectId(stateFromStores[22]).SegmentedControl, { state: segmentedControlState }) };
  items10[0] = closure_10(closure_6, obj8);
  const obj9 = { style: tmp.content, children: tmp17Result };
  if ("logs" === tmp7) {
    const obj10 = { projectId };
    tmp17Result = closure_10(tmp4(tmp2[23]), obj10);
  } else {
    if ("trace" === tmp7) {
      if (stateFromStores) {
        const obj11 = { projectId };
        tmp17Result = closure_10(tmp4(tmp2[24]), obj11);
      }
    }
    const obj12 = { contentContainerStyle: items11, children: tmp17Result2 };
    items11 = [tmp.report, ];
    items11[1] = { paddingBottom: navigation(stateFromStores[8]).space.PX_16 + bottom };
    let str = "worker";
    const obj13 = { paddingBottom: navigation(stateFromStores[8]).space.PX_16 + bottom };
    const tmp18 = callback1;
    if ("worker" === tmp7) {
      const obj14 = { status: stateFromStores1, fetchState: stateFromStores2, onRefresh: callback };
      tmp17Result2 = closure_10(tmp4(tmp2[25]), obj14);
    } else {
      const obj15 = { projectId, status: stateFromStores1, fetchState: stateFromStores2, onRefresh: callback, traceVisible: stateFromStores };
      tmp17Result2 = closure_10(tmp4(tmp2[26]), obj15);
    }
    tmp17Result = closure_10(tmp18, obj12, tmp7);
  }
  items10[1] = closure_10(closure_6, obj9);
  return closure_11(closure_6, obj7);
});
const result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureDebugScene.tsx");

export default tmp5;