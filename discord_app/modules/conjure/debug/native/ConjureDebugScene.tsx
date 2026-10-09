// discord_app/modules/conjure/debug/native/ConjureDebugScene.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3827 from "../../intl/ConjureUntranslated.messages.js";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import CopyIcon from "../../../../design/components/Icon/native/redesign/generated/CopyIcon.tsx";
import ClipboardUtils from "../../../../utils/ClipboardUtils.native.tsx";
import ConjureDebugSnapshot from "../ConjureDebugSnapshot.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ConjureDebugStore from "../ConjureDebugStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const ConjureConnectionStore = fn(13164);
({ requestDebugStatus: closure_7, subscribeDebugBacklog: closure_8 } = ConjureConnectionStore);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5091);
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
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { paddingHorizontal: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureDebugScene.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureDebugScene(projectId) {
      let obj = arr;
      const cResult = projectId(arr[11]).c(47);
      projectId = projectId.projectId;
      const tmp3 = closure_12();
      let obj2 = projectId(arr[11]);
      const navigation = projectId(arr[12]).useNavigation();
      let tmp5 = navigation;
      const bottom = navigation(arr[13])().bottom;
      const obj3 = projectId(arr[12]);
      const conjureTraceTabEnabled = projectId(arr[14]).useConjureTraceTabEnabled();
      if (cResult[0] !== conjureTraceTabEnabled) {
        const tmp7 = conjureTraceTabEnabled ? ["logs", "worker", "agent", "trace"] : ["logs", "worker", "agent"];
        cResult[0] = conjureTraceTabEnabled;
        cResult[1] = tmp7;
      } else {
        [tmp11, _slicedToArray] = noop.useState("logs");
        if (cResult[2] !== cResult[1]) {
          const obj6 = {
            pageWidth: 0,
            items: arr.map((id) => {
              const obj = { id, label: null, page: null };
              if ("worker" === id) {
                const intl2 = projectId(arr[8]).intl;
                let str = intl2.string(navigation(arr[9])["50D0FZ"]);
              } else if ("agent" === id) {
                const intl = projectId(arr[8]).intl;
                str = intl.string(navigation(arr[9]).UkbTK1);
              } else {
                str = "Trace";
                if ("trace" !== id) {
                  const intl3 = projectId(arr[8]).intl;
                  str = intl3.string(navigation(arr[9])["+VRYCm"]);
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
              return _slicedToArray(str);
            },
          };
          cResult[2] = arr;
          cResult[3] = obj6;
          let tmp12 = obj6;
        } else {
          tmp12 = cResult[3];
        }
        const tmp10 = _slicedToArray(noop.useState("logs"), 2);
        const segmentedControlState = tmp(obj[15]).useSegmentedControlState(tmp12);
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [ConjureDebugStore];
          cResult[4] = items;
          let tmp15 = items;
        } else {
          tmp15 = cResult[4];
        }
        if (cResult[5] !== projectId) {
          class T {
            constructor() {
              return closure_9.getStatus(projectId);
            }
          }
          const items1 = [projectId];
          cResult[5] = projectId;
          cResult[6] = T;
          cResult[7] = items1;
          let tmp18 = items1;
        } else {
          class T {
            constructor() {
              return closure_9.getStatus(projectId);
            }
          }
          tmp18 = cResult[7];
        }
        const tmpResult = tmp(obj[15]);
        let report = tmp(obj[16]).useStateFromStores(tmp15, T, tmp18);
        const _Symbol2 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          class T {
            constructor() {
              return closure_9.getStatus(projectId);
            }
          }
          const items2 = [ConjureDebugStore];
          cResult[8] = items2;
          const tmp19 = items2;
        } else {
          class T {
            constructor() {
              return closure_9.getStatus(projectId);
            }
          }
        }
        if (cResult[9] !== projectId) {
          class L {
            constructor() {
              return closure_9.getFetchState(projectId);
            }
          }
          const items3 = [projectId];
          cResult[9] = projectId;
          cResult[10] = L;
          cResult[11] = items3;
          let tmp21 = items3;
        } else {
          class L {
            constructor() {
              return closure_9.getFetchState(projectId);
            }
          }
          tmp21 = cResult[11];
        }
        const tmpResult3 = tmp(obj[16]);
        const stateFromStores = tmp(obj[16]).useStateFromStores(tmp19, L, tmp21);
        if (cResult[12] !== projectId) {
          class A {
            constructor() {
              tmp = requestDebugStatus(projectId);
              return;
            }
          }
          const items4 = [projectId];
          cResult[12] = projectId;
          cResult[13] = items4;
          cResult[14] = A;
          let tmp24 = A;
          const tmp23 = items4;
        } else {
          class A {
            constructor() {
              tmp = requestDebugStatus(projectId);
              return;
            }
          }
          tmp24 = cResult[14];
        }
        const effect = obj5.useEffect(tmp24, tmp23);
        if (cResult[15] !== projectId) {
          class H {
            constructor() {
              return subscribeDebugBacklog(projectId);
            }
          }
          const items5 = [projectId];
          cResult[15] = projectId;
          cResult[16] = H;
          cResult[17] = items5;
          let tmp27 = items5;
        } else {
          class H {
            constructor() {
              return subscribeDebugBacklog(projectId);
            }
          }
          tmp27 = cResult[17];
        }
        const effect1 = obj5.useEffect(H, tmp27);
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
        if (cResult[20] !== projectId) {
          class W {
            constructor() {
              obj = closure_0(closure_2[17]);
              obj2 = closure_0(closure_2[18]);
              copyResult = obj.copy(obj2.conjureDebugSnapshot(projectId));
              obj3 = closure_1(closure_2[19]);
              obj1 = { key: "CONJURE_DEBUG_COPIED", content: null, IconComponent: null };
              intl = closure_0(closure_2[8]).intl;
              obj1.content = intl.string(closure_1(closure_2[9]).wI6fhl);
              obj1.IconComponent = closure_0(closure_2[20]).CopyIcon;
              openResult = obj3.open(obj1);
              return;
            }
          }
          cResult[20] = projectId;
          cResult[21] = W;
        } else {
          class W {
            constructor() {
              obj = closure_0(closure_2[17]);
              obj2 = closure_0(closure_2[18]);
              copyResult = obj.copy(obj2.conjureDebugSnapshot(projectId));
              obj3 = closure_1(closure_2[19]);
              obj1 = { key: "CONJURE_DEBUG_COPIED", content: null, IconComponent: null };
              intl = closure_0(closure_2[8]).intl;
              obj1.content = intl.string(closure_1(closure_2[9]).wI6fhl);
              obj1.IconComponent = closure_0(closure_2[20]).CopyIcon;
              openResult = obj3.open(obj1);
              return;
            }
          }
        }
        noop = W;
        if (cResult[22] === W) {
          class W {
            constructor() {
              obj = closure_0(closure_2[17]);
              obj2 = closure_0(closure_2[18]);
              copyResult = obj.copy(obj2.conjureDebugSnapshot(projectId));
              obj3 = closure_1(closure_2[19]);
              obj1 = { key: "CONJURE_DEBUG_COPIED", content: null, IconComponent: null };
              intl = closure_0(closure_2[8]).intl;
              obj1.content = intl.string(closure_1(closure_2[9]).wI6fhl);
              obj1.IconComponent = closure_0(closure_2[20]).CopyIcon;
              openResult = obj3.open(obj1);
              return;
            }
          }
          const effect2 = obj5.useEffect(J, tmp32);
          if (cResult[26] !== segmentedControlState) {
            class W {
              constructor() {
                obj = closure_0(closure_2[17]);
                obj2 = closure_0(closure_2[18]);
                copyResult = obj.copy(obj2.conjureDebugSnapshot(projectId));
                obj3 = closure_1(closure_2[19]);
                obj1 = { key: "CONJURE_DEBUG_COPIED", content: null, IconComponent: null };
                intl = closure_0(closure_2[8]).intl;
                obj1.content = intl.string(closure_1(closure_2[9]).wI6fhl);
                obj1.IconComponent = closure_0(closure_2[20]).CopyIcon;
                openResult = obj3.open(obj1);
                return;
              }
            }
            const obj7 = { state: segmentedControlState };
            const tmp35 = closure_10(tmp(obj[22]).SegmentedControl, obj7);
            cResult[26] = segmentedControlState;
            cResult[27] = tmp35;
          } else {
            class W {
              constructor() {
                obj = closure_0(closure_2[17]);
                obj2 = closure_0(closure_2[18]);
                copyResult = obj.copy(obj2.conjureDebugSnapshot(projectId));
                obj3 = closure_1(closure_2[19]);
                obj1 = { key: "CONJURE_DEBUG_COPIED", content: null, IconComponent: null };
                intl = closure_0(closure_2[8]).intl;
                obj1.content = intl.string(closure_1(closure_2[9]).wI6fhl);
                obj1.IconComponent = closure_0(closure_2[20]).CopyIcon;
                openResult = obj3.open(obj1);
                return;
              }
            }
          }
          if (cResult[28] === tmp3.tabs) {
            class W {
              constructor() {
                obj = closure_0(closure_2[17]);
                obj2 = closure_0(closure_2[18]);
                copyResult = obj.copy(obj2.conjureDebugSnapshot(projectId));
                obj3 = closure_1(closure_2[19]);
                obj1 = { key: "CONJURE_DEBUG_COPIED", content: null, IconComponent: null };
                intl = closure_0(closure_2[8]).intl;
                obj1.content = intl.string(closure_1(closure_2[9]).wI6fhl);
                obj1.IconComponent = closure_0(closure_2[20]).CopyIcon;
                openResult = obj3.open(obj1);
                return;
              }
            }
            if (cResult[31] === stateFromStores) {
              class W {
                constructor() {
                  obj = closure_0(closure_2[17]);
                  obj2 = closure_0(closure_2[18]);
                  copyResult = obj.copy(obj2.conjureDebugSnapshot(projectId));
                  obj3 = closure_1(closure_2[19]);
                  obj1 = { key: "CONJURE_DEBUG_COPIED", content: null, IconComponent: null };
                  intl = closure_0(closure_2[8]).intl;
                  obj1.content = intl.string(closure_1(closure_2[9]).wI6fhl);
                  obj1.IconComponent = closure_0(closure_2[20]).CopyIcon;
                  openResult = obj3.open(obj1);
                  return;
                }
              }
            }
            if ("logs" === tmp11) {
              class W {
                constructor() {
                  obj = closure_0(closure_2[17]);
                  obj2 = closure_0(closure_2[18]);
                  copyResult = obj.copy(obj2.conjureDebugSnapshot(projectId));
                  obj3 = closure_1(closure_2[19]);
                  obj1 = { key: "CONJURE_DEBUG_COPIED", content: null, IconComponent: null };
                  intl = closure_0(closure_2[8]).intl;
                  obj1.content = intl.string(closure_1(closure_2[9]).wI6fhl);
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
                  intl = closure_0(closure_2[8]).intl;
                  obj1.content = intl.string(closure_1(closure_2[9]).wI6fhl);
                  obj1.IconComponent = closure_0(closure_2[20]).CopyIcon;
                  openResult = obj3.open(obj1);
                  return;
                }
              }
              if ("trace" === tmp11) {
                class W {
                  constructor() {
                    obj = closure_0(closure_2[17]);
                    obj2 = closure_0(closure_2[18]);
                    copyResult = obj.copy(obj2.conjureDebugSnapshot(projectId));
                    obj3 = closure_1(closure_2[19]);
                    obj1 = { key: "CONJURE_DEBUG_COPIED", content: null, IconComponent: null };
                    intl = closure_0(closure_2[8]).intl;
                    obj1.content = intl.string(closure_1(closure_2[9]).wI6fhl);
                    obj1.IconComponent = closure_0(closure_2[20]).CopyIcon;
                    openResult = obj3.open(obj1);
                    return;
                  }
                }
              }
              const obj8 = { contentContainerStyle: null, children: null };
              const items6 = [tmp3.report];
              const obj9 = { paddingBottom: tmp5(obj[7]).space.PX_16 + bottom };
              items6[1] = obj9;
              obj8.contentContainerStyle = items6;
              if ("worker" === tmp11) {
                class W {
                  constructor() {
                    obj = closure_0(closure_2[17]);
                    obj2 = closure_0(closure_2[18]);
                    copyResult = obj.copy(obj2.conjureDebugSnapshot(projectId));
                    obj3 = closure_1(closure_2[19]);
                    obj1 = { key: "CONJURE_DEBUG_COPIED", content: null, IconComponent: null };
                    intl = closure_0(closure_2[8]).intl;
                    obj1.content = intl.string(closure_1(closure_2[9]).wI6fhl);
                    obj1.IconComponent = closure_0(closure_2[20]).CopyIcon;
                    openResult = obj3.open(obj1);
                    return;
                  }
                }
                tmp44[0] = report;
                tmp44[1] = stateFromStores;
                tmp44[2] = G;
                let tmp40Result = closure_10(tmp5(obj[25]), tmp44);
              } else {
                class W {
                  constructor() {
                    obj = closure_0(closure_2[17]);
                    obj2 = closure_0(closure_2[18]);
                    copyResult = obj.copy(obj2.conjureDebugSnapshot(projectId));
                    obj3 = closure_1(closure_2[19]);
                    obj1 = { key: "CONJURE_DEBUG_COPIED", content: null, IconComponent: null };
                    intl = closure_0(closure_2[8]).intl;
                    obj1.content = intl.string(closure_1(closure_2[9]).wI6fhl);
                    obj1.IconComponent = closure_0(closure_2[20]).CopyIcon;
                    openResult = obj3.open(obj1);
                    return;
                  }
                }
                tmp42[0] = projectId;
                tmp42[1] = report;
                tmp42[2] = stateFromStores;
                tmp42[3] = G;
                tmp40Result = closure_10(tmp5(obj[26]), tmp42);
              }
              obj8.children = tmp40Result;
              tmp40Result2 = closure_10(closure_5, obj8, tmp11);
            }
            cResult[31] = stateFromStores;
            cResult[32] = G;
            cResult[33] = projectId;
            cResult[34] = bottom;
            cResult[35] = conjureTraceTabEnabled;
            cResult[36] = report;
            report = tmp3.report;
            cResult[37] = report;
            cResult[38] = tmp11;
            cResult[39] = tmp40Result2;
          }
          const obj10 = { style: tmp3.tabs, children: tmp34 };
          const tmp39 = closure_10(closure_6, obj10);
          cResult[28] = tmp3.tabs;
          cResult[29] = tmp34;
          cResult[30] = tmp39;
        }
        class J {
          constructor() {
            obj = {
              headerRight() {
                const obj = { IconComponent: projectId(arr[20]).CopyIcon, onPress, accessibilityLabel: null };
                const intl = projectId(arr[8]).intl;
                obj.accessibilityLabel = intl.string(navigation(arr[9]).TkHqy2);
                return closure_2_10(navigation(arr[21]), obj);
              },
            };
            setOptionsResult = closure_1.setOptions(obj);
            return;
          }
        }
        const items7 = [W, navigation];
        cResult[22] = W;
        cResult[23] = navigation;
        cResult[24] = J;
        cResult[25] = items7;
        tmp32 = items7;
        const tmpResult4 = tmp(obj[16]);
      }
      let obj4 = projectId(arr[14]);
    }
  : function ConjureDebugScene(projectId) {
      projectId = projectId.projectId;
      let conjureTraceTabEnabled;
      noop = undefined;
      const tmp = closure_12();
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
      const items1 = [ConjureDebugStore];
      const items2 = [projectId];
      const stateFromStores = projectId(conjureTraceTabEnabled[16]).useStateFromStores(
        items1,
        () => ConjureDebugStore.getStatus(projectId),
        items2,
      );
      const obj5 = projectId(conjureTraceTabEnabled[16]);
      const items3 = [ConjureDebugStore];
      const items4 = [projectId];
      const stateFromStores1 = projectId(conjureTraceTabEnabled[16]).useStateFromStores(
        items3,
        () => ConjureDebugStore.getFetchState(projectId),
        items4,
      );
      const items5 = [projectId];
      const effect = noop.useEffect(() => {
        React5(projectId);
      }, items5);
      const items6 = [projectId];
      const effect1 = noop.useEffect(() => closure_2_8(projectId), items6);
      const items7 = [projectId];
      const callback = noop.useCallback(() => React5(projectId), items7);
      const items8 = [projectId];
      const callback1 = noop.useCallback(() => {
        const obj = ClipboardUtils;
        obj.copy(ConjureDebugSnapshot.conjureDebugSnapshot(projectId));
        const obj4 = { key: "CONJURE_DEBUG_COPIED", content: null, IconComponent: null };
        const intl = util.intl;
        obj4.content = intl.string(_modDef3827.wI6fhl);
        obj4.IconComponent = CopyIcon.CopyIcon;
        ToastActionCreatorsDefault.open(obj4);
      }, items8);
      const items9 = [callback1, navigation];
      const effect2 = noop.useEffect(() => {
        navigation.setOptions({
          headerRight() {
            const obj = {
              IconComponent: projectId(conjureTraceTabEnabled[20]).CopyIcon,
              onPress,
              accessibilityLabel: null,
            };
            const intl = projectId(conjureTraceTabEnabled[8]).intl;
            obj.accessibilityLabel = intl.string(navigation(conjureTraceTabEnabled[9]).TkHqy2);
            return closure_2_10(navigation(conjureTraceTabEnabled[21]), obj);
          },
        });
      }, items9);
      const obj7 = { style: tmp.scene, children: null };
      const obj6 = projectId(conjureTraceTabEnabled[16]);
      const items10 = [
        closure_10(closure_6, {
          style: tmp.tabs,
          children: closure_10(projectId(conjureTraceTabEnabled[22]).SegmentedControl, {
            state: segmentedControlState,
          }),
        }),
      ];
      const obj9 = { style: tmp.content, children: null };
      if ("logs" === tmp7) {
        const obj10 = { projectId };
        let tmp18Result = closure_10(tmp4(tmp2[23]), obj10);
      } else {
        if ("trace" === tmp7) {
          if (conjureTraceTabEnabled) {
            const obj11 = { projectId };
            tmp18Result = closure_10(tmp4(tmp2[24]), obj11);
          }
        }
        const obj12 = { contentContainerStyle: null, children: null };
        const items11 = [tmp.report];
        const obj13 = { paddingBottom: tmp4(tmp2[7]).space.PX_16 + navigation(conjureTraceTabEnabled[13])().bottom };
        items11[1] = obj13;
        obj12.contentContainerStyle = items11;
        if ("worker" === tmp7) {
          const obj14 = { status: stateFromStores, fetchState: stateFromStores1, onRefresh: callback };
          let tmp18Result2 = closure_10(tmp4(tmp2[25]), obj14);
        } else {
          const obj15 = { projectId, status: stateFromStores, fetchState: stateFromStores1, onRefresh: callback };
          tmp18Result2 = closure_10(tmp4(tmp2[26]), obj15);
        }
        obj12.children = tmp18Result2;
        tmp18Result = closure_10(callback1, obj12, tmp7);
      }
      obj9.children = tmp18Result;
      items10[1] = closure_10(closure_6, obj9);
      obj7.children = items10;
      return closure_11(closure_6, obj7);
    };
