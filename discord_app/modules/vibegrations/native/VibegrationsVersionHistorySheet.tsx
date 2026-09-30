// === Module 16516: VibegrationsVersionHistorySheet ===

// Module 16516 (VibegrationsVersionHistorySheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import _modDef3715 from "module_3715" /* 3715 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4830 */;
import AlertModal from "AlertModal" /* 5405 */;
import NotificationCenterUtils from "NotificationCenterUtils" /* 7250 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const fetchSourceHistory = fn(12842).fetchSourceHistory;
const jsx = fn(21).jsx;
const VibegrationsVersionHistorySheet = "VibegrationsVersionHistorySheet";
const createStyles = fn(4866);
let obj2 = { state: { alignItems: "center", padding: nativeDefault.space.PX_24 } };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsVersionHistorySheet.tsx");

export default function VibegrationsVersionHistorySheet(projectId) {
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
    let intl2 = projectId(1115).intl;
    obj4.children = intl2.string(tmp2(3715)["mSJn+K"]);
    obj3.children = jsx(projectId(4862).Text, { variant: "text-md/normal", color: "text-muted", children: null });
    tmp9 = <closure_6 style={tmp.state} accessibilityRole="alert">{null}</closure_6>;
    tmp7 = jsx;
  } else if (0 === tmp5.entries.length) {
    const obj5 = { style: tmp.state, children: null };
    const obj6 = { variant: "text-md/normal", color: "text-muted", children: null };
    let intl = projectId(1115).intl;
    obj6.children = intl.string(tmp2(3715).TOmYPT);
    obj5.children = jsx(projectId(4862).Text, { variant: "text-md/normal", color: "text-muted", children: null });
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
      return jsx(projectId(_undefined[15]).TableRow, { label: subject.subject.replace(/^Build: /, ""), subLabel: null, arrow: true, onPress: null }, subject.sha);
    });
    tmp9 = jsx(projectId(6195).TableRowGroup, { hasIcons: false, children: null });
  }
  const obj7 = { scrollable: true, header: null, children: null };
  const obj8 = { title: null };
  let intl3 = projectId(1115).intl;
  obj8.title = intl3.string(onRestore(3715).jAWwzi);
  obj7.header = tmp7(projectId(6766).BottomSheetTitleHeader, obj8);
  const tmp4 = _slicedToArray(noop.useState({ status: "loading" }), 2);
  obj7.children = tmp7(projectId(6241).BottomSheetScrollView, { contentContainerStyle: { paddingBottom: onRestore(1613)().bottom }, children: tmp9 });
  return tmp7(projectId(6814).ActionSheet, obj7);
};
export const VIBEGRATIONS_VERSION_HISTORY_SHEET_KEY = "VibegrationsVersionHistorySheet";
export const authoredAgo = function authoredAgo(authored_at) {
  const parsed = Date.parse(authored_at);
  let relativeTimestamp;
  if (!Number.isNaN(parsed)) {
    relativeTimestamp = NotificationCenterUtils.getRelativeTimestamp(parsed, false);
  }
  return relativeTimestamp;
};
export const confirmRestoreVersion = function confirmRestoreVersion(onConfirm) {
  const obj2 = { key: "VibegrationsVersionHistoryRestore", title: null, content: null, confirmText: null, onConfirm: null };
  const intl = util.intl;
  obj2.title = intl.string(_modDef3715.qOUOPE);
  const intl2 = util.intl;
  obj2.content = intl2.string(_modDef3715.k2JBj5);
  const intl3 = util.intl;
  obj2.confirmText = intl3.string(_modDef3715["+sRK16"]);
  obj2.onConfirm = onConfirm;
  AlertModal.showConfirmModal(obj2);
};