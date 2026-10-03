// === Module 16615: VibegrationsVersionHistorySheet ===

// Module 16615 (VibegrationsVersionHistorySheet)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import _modDef3723 from "module_3723" /* 3723 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import AlertModal from "AlertModal" /* 5713 */;
import NotificationCenterUtils from "NotificationCenterUtils" /* 7126 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const fetchSourceHistory = fn(12904).fetchSourceHistory;
const jsx = fn(21).jsx;
const VibegrationsVersionHistorySheet = "VibegrationsVersionHistorySheet";
const createStyles = fn(4890);
let obj2 = { state: { alignItems: "center", padding: nativeDefault.space.PX_24 } };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { alignItems: "center", padding: nativeDefault.space.PX_24 };
function authoredAgo(authored_at) {
  const parsed = Date.parse(authored_at);
  let relativeTimestamp;
  if (!Number.isNaN(parsed)) {
    relativeTimestamp = NotificationCenterUtils.getRelativeTimestamp(parsed, false);
  }
  return relativeTimestamp;
}
function confirmRestoreVersion(onConfirm) {
  const obj2 = { key: "VibegrationsVersionHistoryRestore", title: null, content: null, confirmText: null, onConfirm: null };
  const intl = util.intl;
  obj2.title = intl.string(_modDef3723.qOUOPE);
  const intl2 = util.intl;
  obj2.content = intl2.string(_modDef3723.k2JBj5);
  const intl3 = util.intl;
  obj2.confirmText = intl3.string(_modDef3723["+sRK16"]);
  obj2.onConfirm = onConfirm;
  AlertModal.showConfirmModal(obj2);
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsVersionHistorySheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  const cResult = projectId(576).c(28);
  projectId = projectId.projectId;
  const onRestore = projectId.onRestore;
  state = closure_10();
  const bottom = onRestore(1618)().bottom;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { status: "loading" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  let obj = projectId(576);
  [entries, dependencyMap] = noop.useState(first);
  if (cResult[1] !== projectId) {
    const fn = function _() {
      c0 = false;
      const promise = fetchSourceHistory(c0);
      fetchSourceHistory(c0).then((entries) => {
        if (!c0) {
          const obj = { status: "loaded", entries };
          dependencyMap(obj);
        }
      }).catch(() => {
        if (!c0) {
          dependencyMap({ status: "failed" });
        }
      });
      return () => {
        c0 = true;
      };
    };
    const items = [projectId];
    cResult[1] = projectId;
    cResult[2] = fn;
    cResult[3] = items;
    let tmp8 = items;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const effect = noop.useEffect(tmp7, tmp8);
  if (cResult[4] !== onRestore) {
    class V {
      constructor(arg0) {
        closure_0 = projectId;
        obj = projectId(closure_2[8]);
        obj1 = { key: "VibegrationsVersionHistoryRestore", title: null, content: null, confirmText: null, onConfirm: null };
        intl = projectId(closure_2[9]).intl;
        obj1.title = intl.string(onRestore(closure_2[10]).qOUOPE);
        intl2 = projectId(closure_2[9]).intl;
        obj1.content = intl2.string(onRestore(closure_2[10]).k2JBj5);
        intl3 = projectId(closure_2[9]).intl;
        obj1.confirmText = intl3.string(onRestore(closure_2[10])["+sRK16"]);
        obj1.onConfirm = () => {
          ActionSheetActionCreatorsDefault.hideActionSheet(VibegrationsVersionHistorySheet);
          onRestore(closure_0);
        };
        showConfirmModalResult = obj.showConfirmModal(obj1);
        return;
      }
    }
    cResult[4] = onRestore;
    cResult[5] = V;
  } else {
    class V {
      constructor(arg0) {
        closure_0 = projectId;
        obj = projectId(closure_2[8]);
        obj1 = { key: "VibegrationsVersionHistoryRestore", title: null, content: null, confirmText: null, onConfirm: null };
        intl = projectId(closure_2[9]).intl;
        obj1.title = intl.string(onRestore(closure_2[10]).qOUOPE);
        intl2 = projectId(closure_2[9]).intl;
        obj1.content = intl2.string(onRestore(closure_2[10]).k2JBj5);
        intl3 = projectId(closure_2[9]).intl;
        obj1.confirmText = intl3.string(onRestore(closure_2[10])["+sRK16"]);
        obj1.onConfirm = () => {
          ActionSheetActionCreatorsDefault.hideActionSheet(VibegrationsVersionHistorySheet);
          onRestore(closure_0);
        };
        showConfirmModalResult = obj.showConfirmModal(obj1);
        return;
      }
    }
  }
  _slicedToArray = V;
  if ("loading" === entries.status) {
    class V {
      constructor(arg0) {
        closure_0 = projectId;
        obj = projectId(closure_2[8]);
        obj1 = { key: "VibegrationsVersionHistoryRestore", title: null, content: null, confirmText: null, onConfirm: null };
        intl = projectId(closure_2[9]).intl;
        obj1.title = intl.string(onRestore(closure_2[10]).qOUOPE);
        intl2 = projectId(closure_2[9]).intl;
        obj1.content = intl2.string(onRestore(closure_2[10]).k2JBj5);
        intl3 = projectId(closure_2[9]).intl;
        obj1.confirmText = intl3.string(onRestore(closure_2[10])["+sRK16"]);
        obj1.onConfirm = () => {
          ActionSheetActionCreatorsDefault.hideActionSheet(VibegrationsVersionHistorySheet);
          onRestore(closure_0);
        };
        showConfirmModalResult = obj.showConfirmModal(obj1);
        return;
      }
    }
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class V {
        constructor(arg0) {
          closure_0 = projectId;
          obj = projectId(closure_2[8]);
          obj1 = { key: "VibegrationsVersionHistoryRestore", title: null, content: null, confirmText: null, onConfirm: null };
          intl = projectId(closure_2[9]).intl;
          obj1.title = intl.string(onRestore(closure_2[10]).qOUOPE);
          intl2 = projectId(closure_2[9]).intl;
          obj1.content = intl2.string(onRestore(closure_2[10]).k2JBj5);
          intl3 = projectId(closure_2[9]).intl;
          obj1.confirmText = intl3.string(onRestore(closure_2[10])["+sRK16"]);
          obj1.onConfirm = () => {
            ActionSheetActionCreatorsDefault.hideActionSheet(VibegrationsVersionHistorySheet);
            onRestore(closure_0);
          };
          showConfirmModalResult = obj.showConfirmModal(obj1);
          return;
        }
      }
      const tmp27 = <closure_5 />;
      cResult[6] = tmp27;
      const tmp25 = tmp27;
    } else {
      class V {
        constructor(arg0) {
          closure_0 = projectId;
          obj = projectId(closure_2[8]);
          obj1 = { key: "VibegrationsVersionHistoryRestore", title: null, content: null, confirmText: null, onConfirm: null };
          intl = projectId(closure_2[9]).intl;
          obj1.title = intl.string(onRestore(closure_2[10]).qOUOPE);
          intl2 = projectId(closure_2[9]).intl;
          obj1.content = intl2.string(onRestore(closure_2[10]).k2JBj5);
          intl3 = projectId(closure_2[9]).intl;
          obj1.confirmText = intl3.string(onRestore(closure_2[10])["+sRK16"]);
          obj1.onConfirm = () => {
            ActionSheetActionCreatorsDefault.hideActionSheet(VibegrationsVersionHistorySheet);
            onRestore(closure_0);
          };
          showConfirmModalResult = obj.showConfirmModal(obj1);
          return;
        }
      }
    }
    if (cResult[7] !== state.state) {
      class V {
        constructor(arg0) {
          closure_0 = projectId;
          obj = projectId(closure_2[8]);
          obj1 = { key: "VibegrationsVersionHistoryRestore", title: null, content: null, confirmText: null, onConfirm: null };
          intl = projectId(closure_2[9]).intl;
          obj1.title = intl.string(onRestore(closure_2[10]).qOUOPE);
          intl2 = projectId(closure_2[9]).intl;
          obj1.content = intl2.string(onRestore(closure_2[10]).k2JBj5);
          intl3 = projectId(closure_2[9]).intl;
          obj1.confirmText = intl3.string(onRestore(closure_2[10])["+sRK16"]);
          obj1.onConfirm = () => {
            ActionSheetActionCreatorsDefault.hideActionSheet(VibegrationsVersionHistorySheet);
            onRestore(closure_0);
          };
          showConfirmModalResult = obj.showConfirmModal(obj1);
          return;
        }
      }
      const obj4 = { style: state.state, children: tmp25 };
      const tmp30 = <closure_6 style={state.state}>{tmp25}</closure_6>;
      state = state.state;
      cResult[7] = state;
      cResult[8] = tmp30;
    } else {
      class V {
        constructor(arg0) {
          closure_0 = projectId;
          obj = projectId(closure_2[8]);
          obj1 = { key: "VibegrationsVersionHistoryRestore", title: null, content: null, confirmText: null, onConfirm: null };
          intl = projectId(closure_2[9]).intl;
          obj1.title = intl.string(onRestore(closure_2[10]).qOUOPE);
          intl2 = projectId(closure_2[9]).intl;
          obj1.content = intl2.string(onRestore(closure_2[10]).k2JBj5);
          intl3 = projectId(closure_2[9]).intl;
          obj1.confirmText = intl3.string(onRestore(closure_2[10])["+sRK16"]);
          obj1.onConfirm = () => {
            ActionSheetActionCreatorsDefault.hideActionSheet(VibegrationsVersionHistorySheet);
            onRestore(closure_0);
          };
          showConfirmModalResult = obj.showConfirmModal(obj1);
          return;
        }
      }
    }
  } else {
    class V {
      constructor(arg0) {
        closure_0 = projectId;
        obj = projectId(closure_2[8]);
        obj1 = { key: "VibegrationsVersionHistoryRestore", title: null, content: null, confirmText: null, onConfirm: null };
        intl = projectId(closure_2[9]).intl;
        obj1.title = intl.string(onRestore(closure_2[10]).qOUOPE);
        intl2 = projectId(closure_2[9]).intl;
        obj1.content = intl2.string(onRestore(closure_2[10]).k2JBj5);
        intl3 = projectId(closure_2[9]).intl;
        obj1.confirmText = intl3.string(onRestore(closure_2[10])["+sRK16"]);
        obj1.onConfirm = () => {
          ActionSheetActionCreatorsDefault.hideActionSheet(VibegrationsVersionHistorySheet);
          onRestore(closure_0);
        };
        showConfirmModalResult = obj.showConfirmModal(obj1);
        return;
      }
    }
    if ("failed" === entries.status) {
      class V {
        constructor(arg0) {
          closure_0 = projectId;
          obj = projectId(closure_2[8]);
          obj1 = { key: "VibegrationsVersionHistoryRestore", title: null, content: null, confirmText: null, onConfirm: null };
          intl = projectId(closure_2[9]).intl;
          obj1.title = intl.string(onRestore(closure_2[10]).qOUOPE);
          intl2 = projectId(closure_2[9]).intl;
          obj1.content = intl2.string(onRestore(closure_2[10]).k2JBj5);
          intl3 = projectId(closure_2[9]).intl;
          obj1.confirmText = intl3.string(onRestore(closure_2[10])["+sRK16"]);
          obj1.onConfirm = () => {
            ActionSheetActionCreatorsDefault.hideActionSheet(VibegrationsVersionHistorySheet);
            onRestore(closure_0);
          };
          showConfirmModalResult = obj.showConfirmModal(obj1);
          return;
        }
      }
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class V {
          constructor(arg0) {
            closure_0 = projectId;
            obj = projectId(closure_2[8]);
            obj1 = { key: "VibegrationsVersionHistoryRestore", title: null, content: null, confirmText: null, onConfirm: null };
            intl = projectId(closure_2[9]).intl;
            obj1.title = intl.string(onRestore(closure_2[10]).qOUOPE);
            intl2 = projectId(closure_2[9]).intl;
            obj1.content = intl2.string(onRestore(closure_2[10]).k2JBj5);
            intl3 = projectId(closure_2[9]).intl;
            obj1.confirmText = intl3.string(onRestore(closure_2[10])["+sRK16"]);
            obj1.onConfirm = () => {
              ActionSheetActionCreatorsDefault.hideActionSheet(VibegrationsVersionHistorySheet);
              onRestore(closure_0);
            };
            showConfirmModalResult = obj.showConfirmModal(obj1);
            return;
          }
        }
        const obj5 = { variant: "text-md/normal", color: "text-muted", children: null };
        let intl2 = tmp(1126).intl;
        obj5.children = intl2.string(tmp4(3723)["mSJn+K"]);
        const tmp21 = jsx(tmp(4886).Text, { variant: "text-md/normal", color: "text-muted", children: null });
        cResult[9] = tmp21;
        const tmp20 = tmp21;
      } else {
        class V {
          constructor(arg0) {
            closure_0 = projectId;
            obj = projectId(closure_2[8]);
            obj1 = { key: "VibegrationsVersionHistoryRestore", title: null, content: null, confirmText: null, onConfirm: null };
            intl = projectId(closure_2[9]).intl;
            obj1.title = intl.string(onRestore(closure_2[10]).qOUOPE);
            intl2 = projectId(closure_2[9]).intl;
            obj1.content = intl2.string(onRestore(closure_2[10]).k2JBj5);
            intl3 = projectId(closure_2[9]).intl;
            obj1.confirmText = intl3.string(onRestore(closure_2[10])["+sRK16"]);
            obj1.onConfirm = () => {
              ActionSheetActionCreatorsDefault.hideActionSheet(VibegrationsVersionHistorySheet);
              onRestore(closure_0);
            };
            showConfirmModalResult = obj.showConfirmModal(obj1);
            return;
          }
        }
      }
      if (cResult[10] !== state.state) {
        class V {
          constructor(arg0) {
            closure_0 = projectId;
            obj = projectId(closure_2[8]);
            obj1 = { key: "VibegrationsVersionHistoryRestore", title: null, content: null, confirmText: null, onConfirm: null };
            intl = projectId(closure_2[9]).intl;
            obj1.title = intl.string(onRestore(closure_2[10]).qOUOPE);
            intl2 = projectId(closure_2[9]).intl;
            obj1.content = intl2.string(onRestore(closure_2[10]).k2JBj5);
            intl3 = projectId(closure_2[9]).intl;
            obj1.confirmText = intl3.string(onRestore(closure_2[10])["+sRK16"]);
            obj1.onConfirm = () => {
              ActionSheetActionCreatorsDefault.hideActionSheet(VibegrationsVersionHistorySheet);
              onRestore(closure_0);
            };
            showConfirmModalResult = obj.showConfirmModal(obj1);
            return;
          }
        }
        const obj6 = { style: state.state, accessibilityRole: "alert", children: tmp20 };
        const tmp24 = <closure_6 style={state.state} accessibilityRole="alert">{tmp20}</closure_6>;
        cResult[10] = state.state;
        cResult[11] = tmp24;
        const tmp22 = tmp24;
      } else {
        class V {
          constructor(arg0) {
            closure_0 = projectId;
            obj = projectId(closure_2[8]);
            obj1 = { key: "VibegrationsVersionHistoryRestore", title: null, content: null, confirmText: null, onConfirm: null };
            intl = projectId(closure_2[9]).intl;
            obj1.title = intl.string(onRestore(closure_2[10]).qOUOPE);
            intl2 = projectId(closure_2[9]).intl;
            obj1.content = intl2.string(onRestore(closure_2[10]).k2JBj5);
            intl3 = projectId(closure_2[9]).intl;
            obj1.confirmText = intl3.string(onRestore(closure_2[10])["+sRK16"]);
            obj1.onConfirm = () => {
              ActionSheetActionCreatorsDefault.hideActionSheet(VibegrationsVersionHistorySheet);
              onRestore(closure_0);
            };
            showConfirmModalResult = obj.showConfirmModal(obj1);
            return;
          }
        }
      }
      let tmp14 = tmp22;
    } else {
      class V {
        constructor(arg0) {
          closure_0 = projectId;
          obj = projectId(closure_2[8]);
          obj1 = { key: "VibegrationsVersionHistoryRestore", title: null, content: null, confirmText: null, onConfirm: null };
          intl = projectId(closure_2[9]).intl;
          obj1.title = intl.string(onRestore(closure_2[10]).qOUOPE);
          intl2 = projectId(closure_2[9]).intl;
          obj1.content = intl2.string(onRestore(closure_2[10]).k2JBj5);
          intl3 = projectId(closure_2[9]).intl;
          obj1.confirmText = intl3.string(onRestore(closure_2[10])["+sRK16"]);
          obj1.onConfirm = () => {
            ActionSheetActionCreatorsDefault.hideActionSheet(VibegrationsVersionHistorySheet);
            onRestore(closure_0);
          };
          showConfirmModalResult = obj.showConfirmModal(obj1);
          return;
        }
      }
      if (0 === entries.entries.length) {
        class V {
          constructor(arg0) {
            closure_0 = projectId;
            obj = projectId(closure_2[8]);
            obj1 = { key: "VibegrationsVersionHistoryRestore", title: null, content: null, confirmText: null, onConfirm: null };
            intl = projectId(closure_2[9]).intl;
            obj1.title = intl.string(onRestore(closure_2[10]).qOUOPE);
            intl2 = projectId(closure_2[9]).intl;
            obj1.content = intl2.string(onRestore(closure_2[10]).k2JBj5);
            intl3 = projectId(closure_2[9]).intl;
            obj1.confirmText = intl3.string(onRestore(closure_2[10])["+sRK16"]);
            obj1.onConfirm = () => {
              ActionSheetActionCreatorsDefault.hideActionSheet(VibegrationsVersionHistorySheet);
              onRestore(closure_0);
            };
            showConfirmModalResult = obj.showConfirmModal(obj1);
            return;
          }
        }
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          class V {
            constructor(arg0) {
              closure_0 = projectId;
              obj = projectId(closure_2[8]);
              obj1 = { key: "VibegrationsVersionHistoryRestore", title: null, content: null, confirmText: null, onConfirm: null };
              intl = projectId(closure_2[9]).intl;
              obj1.title = intl.string(onRestore(closure_2[10]).qOUOPE);
              intl2 = projectId(closure_2[9]).intl;
              obj1.content = intl2.string(onRestore(closure_2[10]).k2JBj5);
              intl3 = projectId(closure_2[9]).intl;
              obj1.confirmText = intl3.string(onRestore(closure_2[10])["+sRK16"]);
              obj1.onConfirm = () => {
                ActionSheetActionCreatorsDefault.hideActionSheet(VibegrationsVersionHistorySheet);
                onRestore(closure_0);
              };
              showConfirmModalResult = obj.showConfirmModal(obj1);
              return;
            }
          }
          const obj7 = { variant: "text-md/normal", color: "text-muted", children: null };
          let intl = tmp(1126).intl;
          obj7.children = intl.string(tmp4(3723).TOmYPT);
          const tmp16 = jsx(tmp(4886).Text, { variant: "text-md/normal", color: "text-muted", children: null });
          cResult[12] = tmp16;
          const tmp15 = tmp16;
        } else {
          class V {
            constructor(arg0) {
              closure_0 = projectId;
              obj = projectId(closure_2[8]);
              obj1 = { key: "VibegrationsVersionHistoryRestore", title: null, content: null, confirmText: null, onConfirm: null };
              intl = projectId(closure_2[9]).intl;
              obj1.title = intl.string(onRestore(closure_2[10]).qOUOPE);
              intl2 = projectId(closure_2[9]).intl;
              obj1.content = intl2.string(onRestore(closure_2[10]).k2JBj5);
              intl3 = projectId(closure_2[9]).intl;
              obj1.confirmText = intl3.string(onRestore(closure_2[10])["+sRK16"]);
              obj1.onConfirm = () => {
                ActionSheetActionCreatorsDefault.hideActionSheet(VibegrationsVersionHistorySheet);
                onRestore(closure_0);
              };
              showConfirmModalResult = obj.showConfirmModal(obj1);
              return;
            }
          }
        }
        if (cResult[13] !== state.state) {
          class V {
            constructor(arg0) {
              closure_0 = projectId;
              obj = projectId(closure_2[8]);
              obj1 = { key: "VibegrationsVersionHistoryRestore", title: null, content: null, confirmText: null, onConfirm: null };
              intl = projectId(closure_2[9]).intl;
              obj1.title = intl.string(onRestore(closure_2[10]).qOUOPE);
              intl2 = projectId(closure_2[9]).intl;
              obj1.content = intl2.string(onRestore(closure_2[10]).k2JBj5);
              intl3 = projectId(closure_2[9]).intl;
              obj1.confirmText = intl3.string(onRestore(closure_2[10])["+sRK16"]);
              obj1.onConfirm = () => {
                ActionSheetActionCreatorsDefault.hideActionSheet(VibegrationsVersionHistorySheet);
                onRestore(closure_0);
              };
              showConfirmModalResult = obj.showConfirmModal(obj1);
              return;
            }
          }
          const obj8 = { style: state.state, children: tmp15 };
          const tmp19 = <closure_6 style={state.state}>{tmp15}</closure_6>;
          cResult[13] = state.state;
          cResult[14] = tmp19;
          const tmp17 = tmp19;
        } else {
          class V {
            constructor(arg0) {
              closure_0 = projectId;
              obj = projectId(closure_2[8]);
              obj1 = { key: "VibegrationsVersionHistoryRestore", title: null, content: null, confirmText: null, onConfirm: null };
              intl = projectId(closure_2[9]).intl;
              obj1.title = intl.string(onRestore(closure_2[10]).qOUOPE);
              intl2 = projectId(closure_2[9]).intl;
              obj1.content = intl2.string(onRestore(closure_2[10]).k2JBj5);
              intl3 = projectId(closure_2[9]).intl;
              obj1.confirmText = intl3.string(onRestore(closure_2[10])["+sRK16"]);
              obj1.onConfirm = () => {
                ActionSheetActionCreatorsDefault.hideActionSheet(VibegrationsVersionHistorySheet);
                onRestore(closure_0);
              };
              showConfirmModalResult = obj.showConfirmModal(obj1);
              return;
            }
          }
        }
        tmp14 = tmp17;
      } else {
        class V {
          constructor(arg0) {
            closure_0 = projectId;
            obj = projectId(closure_2[8]);
            obj1 = { key: "VibegrationsVersionHistoryRestore", title: null, content: null, confirmText: null, onConfirm: null };
            intl = projectId(closure_2[9]).intl;
            obj1.title = intl.string(onRestore(closure_2[10]).qOUOPE);
            intl2 = projectId(closure_2[9]).intl;
            obj1.content = intl2.string(onRestore(closure_2[10]).k2JBj5);
            intl3 = projectId(closure_2[9]).intl;
            obj1.confirmText = intl3.string(onRestore(closure_2[10])["+sRK16"]);
            obj1.onConfirm = () => {
              ActionSheetActionCreatorsDefault.hideActionSheet(VibegrationsVersionHistorySheet);
              onRestore(closure_0);
            };
            showConfirmModalResult = obj.showConfirmModal(obj1);
            return;
          }
        }
        if (cResult[18] !== V) {
          class J {
            constructor(arg0) {
              closure_0 = projectId;
              tmp = closure_1_8;
              tmp2 = projectId;
              tmp3 = closure_2;
              obj = { label: null, subLabel: null, arrow: true, onPress: null };
              str = projectId.subject;
              obj.label = str.replace(/^Build: /, "");
              parsed = Date.parse(projectId.authoredAt);
              relativeTimestamp = undefined;
              if (!Number.isNaN(parsed)) {
                tmp2Result = tmp2(tmp3[7]);
                flag = false;
                relativeTimestamp = tmp2Result.getRelativeTimestamp(parsed, false);
              }
              obj.subLabel = relativeTimestamp;
              obj.onPress = function onPress() {
                return closure_3(closure_0);
              };
              return tmp(projectId(closure_2[16]).TableRow, obj, projectId.sha);
            }
          }
          cResult[18] = V;
          cResult[19] = J;
        } else {
          class J {
            constructor(arg0) {
              closure_0 = projectId;
              tmp = closure_1_8;
              tmp2 = projectId;
              tmp3 = closure_2;
              obj = { label: null, subLabel: null, arrow: true, onPress: null };
              str = projectId.subject;
              obj.label = str.replace(/^Build: /, "");
              parsed = Date.parse(projectId.authoredAt);
              relativeTimestamp = undefined;
              if (!Number.isNaN(parsed)) {
                tmp2Result = tmp2(tmp3[7]);
                flag = false;
                relativeTimestamp = tmp2Result.getRelativeTimestamp(parsed, false);
              }
              obj.subLabel = relativeTimestamp;
              obj.onPress = function onPress() {
                return closure_3(closure_0);
              };
              return tmp(projectId(closure_2[16]).TableRow, obj, projectId.sha);
            }
          }
        }
        const entries1 = entries.entries;
        const mapped = entries1.map(J);
        entries = entries.entries;
        cResult[15] = entries;
        cResult[16] = V;
        cResult[17] = mapped;
      }
    }
    const _Symbol = Symbol;
    if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
      class J {
        constructor(arg0) {
          closure_0 = projectId;
          tmp = closure_1_8;
          tmp2 = projectId;
          tmp3 = closure_2;
          obj = { label: null, subLabel: null, arrow: true, onPress: null };
          str = projectId.subject;
          obj.label = str.replace(/^Build: /, "");
          parsed = Date.parse(projectId.authoredAt);
          relativeTimestamp = undefined;
          if (!Number.isNaN(parsed)) {
            tmp2Result = tmp2(tmp3[7]);
            flag = false;
            relativeTimestamp = tmp2Result.getRelativeTimestamp(parsed, false);
          }
          obj.subLabel = relativeTimestamp;
          obj.onPress = function onPress() {
            return closure_3(closure_0);
          };
          return tmp(projectId(closure_2[16]).TableRow, obj, projectId.sha);
        }
      }
      const obj9 = { title: null };
      let intl3 = tmp(1126).intl;
      obj9.title = intl3.string(tmp4(3723).jAWwzi);
      const tmp33 = jsx(tmp(6644).BottomSheetTitleHeader, { title: null });
      cResult[22] = tmp33;
      const tmp32 = tmp33;
    } else {
      class J {
        constructor(arg0) {
          closure_0 = projectId;
          tmp = closure_1_8;
          tmp2 = projectId;
          tmp3 = closure_2;
          obj = { label: null, subLabel: null, arrow: true, onPress: null };
          str = projectId.subject;
          obj.label = str.replace(/^Build: /, "");
          parsed = Date.parse(projectId.authoredAt);
          relativeTimestamp = undefined;
          if (!Number.isNaN(parsed)) {
            tmp2Result = tmp2(tmp3[7]);
            flag = false;
            relativeTimestamp = tmp2Result.getRelativeTimestamp(parsed, false);
          }
          obj.subLabel = relativeTimestamp;
          obj.onPress = function onPress() {
            return closure_3(closure_0);
          };
          return tmp(projectId(closure_2[16]).TableRow, obj, projectId.sha);
        }
      }
    }
    if (cResult[23] !== bottom) {
      class J {
        constructor(arg0) {
          closure_0 = projectId;
          tmp = closure_1_8;
          tmp2 = projectId;
          tmp3 = closure_2;
          obj = { label: null, subLabel: null, arrow: true, onPress: null };
          str = projectId.subject;
          obj.label = str.replace(/^Build: /, "");
          parsed = Date.parse(projectId.authoredAt);
          relativeTimestamp = undefined;
          if (!Number.isNaN(parsed)) {
            tmp2Result = tmp2(tmp3[7]);
            flag = false;
            relativeTimestamp = tmp2Result.getRelativeTimestamp(parsed, false);
          }
          obj.subLabel = relativeTimestamp;
          obj.onPress = function onPress() {
            return closure_3(closure_0);
          };
          return tmp(projectId(closure_2[16]).TableRow, obj, projectId.sha);
        }
      }
      tmp35[0] = bottom;
      cResult[23] = bottom;
      cResult[24] = tmp35;
    } else {
      class J {
        constructor(arg0) {
          closure_0 = projectId;
          tmp = closure_1_8;
          tmp2 = projectId;
          tmp3 = closure_2;
          obj = { label: null, subLabel: null, arrow: true, onPress: null };
          str = projectId.subject;
          obj.label = str.replace(/^Build: /, "");
          parsed = Date.parse(projectId.authoredAt);
          relativeTimestamp = undefined;
          if (!Number.isNaN(parsed)) {
            tmp2Result = tmp2(tmp3[7]);
            flag = false;
            relativeTimestamp = tmp2Result.getRelativeTimestamp(parsed, false);
          }
          obj.subLabel = relativeTimestamp;
          obj.onPress = function onPress() {
            return closure_3(closure_0);
          };
          return tmp(projectId(closure_2[16]).TableRow, obj, projectId.sha);
        }
      }
    }
    if (cResult[25] === tmp14) {
      class J {
        constructor(arg0) {
          closure_0 = projectId;
          tmp = closure_1_8;
          tmp2 = projectId;
          tmp3 = closure_2;
          obj = { label: null, subLabel: null, arrow: true, onPress: null };
          str = projectId.subject;
          obj.label = str.replace(/^Build: /, "");
          parsed = Date.parse(projectId.authoredAt);
          relativeTimestamp = undefined;
          if (!Number.isNaN(parsed)) {
            tmp2Result = tmp2(tmp3[7]);
            flag = false;
            relativeTimestamp = tmp2Result.getRelativeTimestamp(parsed, false);
          }
          obj.subLabel = relativeTimestamp;
          obj.onPress = function onPress() {
            return closure_3(closure_0);
          };
          return tmp(projectId(closure_2[16]).TableRow, obj, projectId.sha);
        }
      }
      return tmp36;
    }
    const obj10 = { scrollable: true, header: tmp32, children: null };
    const obj11 = { contentContainerStyle: tmp35, children: tmp14 };
    obj10.children = jsx(tmp(6112).BottomSheetScrollView, { contentContainerStyle: tmp35, children: tmp14 });
    const tmp38 = jsx(tmp(6701).ActionSheet, { scrollable: true, header: tmp32, children: null });
    cResult[25] = tmp14;
    cResult[26] = tmp35;
    cResult[27] = tmp38;
    tmp36 = tmp38;
  }
  const tmp6 = _slicedToArray(noop.useState(first), 2);
}) : ((projectId) => {
  projectId = projectId.projectId;
  const onRestore = projectId.onRestore;
  dependencyMap = undefined;
  const tmp = closure_10();
  [tmp5, c2] = noop.useState({ status: "loading" });
  const items = [projectId];
  const effect = noop.useEffect(() => {
    c0 = false;
    const promise = fetchSourceHistory(c0);
    fetchSourceHistory(c0).then((entries) => {
      if (!c0) {
        const obj = { status: "loaded", entries };
        c2(obj);
      }
    }).catch(() => {
      if (!c0) {
        c2({ status: "failed" });
      }
    });
    return () => {
      c0 = true;
    };
  }, items);
  const items1 = [onRestore];
  _slicedToArray = noop.useCallback((arg0) => {
    closure_0 = arg0;
    const obj2 = { key: "VibegrationsVersionHistoryRestore", title: null, content: null, confirmText: null, onConfirm: null };
    const intl = projectId(_undefined[9]).intl;
    obj2.title = intl.string(onRestore(_undefined[10]).qOUOPE);
    const intl2 = projectId(_undefined[9]).intl;
    obj2.content = intl2.string(onRestore(_undefined[10]).k2JBj5);
    const intl3 = projectId(_undefined[9]).intl;
    obj2.confirmText = intl3.string(onRestore(_undefined[10])["+sRK16"]);
    obj2.onConfirm = () => {
      ActionSheetActionCreatorsDefault.hideActionSheet(VibegrationsVersionHistorySheet);
      onRestore(closure_0);
    };
    projectId(_undefined[8]).showConfirmModal(obj2);
  }, items1);
  if ("loading" === tmp5.status) {
    let obj2 = { style: tmp.state, children: <closure_5 /> };
    let tmp9 = <closure_6 style={tmp.state}><closure_5 /></closure_6>;
    let tmp7 = jsx;
  } else if ("failed" === tmp5.status) {
    const obj3 = { style: tmp.state, accessibilityRole: "alert", children: null };
    const obj4 = { variant: "text-md/normal", color: "text-muted", children: null };
    let intl2 = projectId(1126).intl;
    obj4.children = intl2.string(tmp2(3723)["mSJn+K"]);
    obj3.children = jsx(projectId(4886).Text, { variant: "text-md/normal", color: "text-muted", children: null });
    tmp9 = <closure_6 style={tmp.state} accessibilityRole="alert">{null}</closure_6>;
    tmp7 = jsx;
  } else if (0 === tmp5.entries.length) {
    const obj5 = { style: tmp.state, children: null };
    const obj6 = { variant: "text-md/normal", color: "text-muted", children: null };
    let intl = projectId(1126).intl;
    obj6.children = intl.string(tmp2(3723).TOmYPT);
    obj5.children = jsx(projectId(4886).Text, { variant: "text-md/normal", color: "text-muted", children: null });
    tmp9 = <closure_6 style={tmp.state}>{null}</closure_6>;
    tmp7 = jsx;
  } else {
    tmp7 = jsx;
    let obj = { hasIcons: false, children: null };
    const entries = tmp5.entries;
    obj.children = entries.map((subject) => {
      closure_0 = subject;
      const obj = { label: subject.subject.replace(/^Build: /, ""), subLabel: null, arrow: true, onPress: null };
      const parsed = Date.parse(subject.authoredAt);
      let relativeTimestamp;
      if (!Number.isNaN(parsed)) {
        relativeTimestamp = projectId(_undefined[7]).getRelativeTimestamp(parsed, false);
        const tmp2Result = projectId(_undefined[7]);
      }
      obj.subLabel = relativeTimestamp;
      obj.onPress = function onPress() {
        return closure_3(closure_0);
      };
      return jsx(projectId(_undefined[16]).TableRow, { label: subject.subject.replace(/^Build: /, ""), subLabel: null, arrow: true, onPress: null }, subject.sha);
    });
    tmp9 = jsx(projectId(6074).TableRowGroup, { hasIcons: false, children: null });
  }
  const obj7 = { scrollable: true, header: null, children: null };
  const obj8 = { title: null };
  let intl3 = projectId(1126).intl;
  obj8.title = intl3.string(onRestore(3723).jAWwzi);
  obj7.header = tmp7(projectId(6644).BottomSheetTitleHeader, obj8);
  const tmp4 = _slicedToArray(noop.useState({ status: "loading" }), 2);
  obj7.children = tmp7(projectId(6112).BottomSheetScrollView, { contentContainerStyle: { paddingBottom: onRestore(1618)().bottom }, children: tmp9 });
  return tmp7(projectId(6701).ActionSheet, obj7);
});
export const VIBEGRATIONS_VERSION_HISTORY_SHEET_KEY = "VibegrationsVersionHistorySheet";
export { authoredAgo };
export { confirmRestoreVersion };