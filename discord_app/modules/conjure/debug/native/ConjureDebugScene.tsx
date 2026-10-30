// discord_app/modules/conjure/debug/native/ConjureDebugScene.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3865 from "../../intl/ConjureUntranslated.messages.js";
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
const subscribeDebugBacklog = fn(10830).subscribeDebugBacklog;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5009);
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
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureDebugScene.tsx");

export default function ConjureDebugScene(projectId) {
  projectId = projectId.projectId;
  let conjureTraceTabEnabled;
  noop = undefined;
  let callback2;
  const tmp = closure_11();
  const navigation = projectId(conjureTraceTabEnabled[10]).useNavigation();
  let obj = projectId(conjureTraceTabEnabled[10]);
  conjureTraceTabEnabled = projectId(conjureTraceTabEnabled[12]).useConjureTraceTabEnabled();
  const items = [conjureTraceTabEnabled];
  const memo = noop.useMemo(
    () => (conjureTraceTabEnabled ? ["logs", "worker", "agent", "trace"] : ["logs", "worker", "agent"]),
    items,
  );
  let obj2 = projectId(conjureTraceTabEnabled[12]);
  [tmp7, c4] = memo(noop.useState("logs"), 2);
  const tmp6 = memo(noop.useState("logs"), 2);
  const obj3 = projectId(conjureTraceTabEnabled[13]);
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
  const stateFromStores = projectId(conjureTraceTabEnabled[14]).useStateFromStores(
    items1,
    () => ConjureDebugStore.getStatus(projectId),
    items2,
  );
  const obj5 = projectId(conjureTraceTabEnabled[14]);
  const items3 = [callback2];
  const items4 = [projectId];
  const stateFromStores1 = projectId(conjureTraceTabEnabled[14]).useStateFromStores(
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
  const obj6 = projectId(conjureTraceTabEnabled[14]);
  const conjureTraceRequests = projectId(conjureTraceTabEnabled[16]).useConjureTraceRequests(projectId, callback1);
  const items10 = [projectId];
  callback2 = noop.useCallback(() => {
    const obj = ClipboardUtils;
    obj.copy(ConjureDebugSnapshot.conjureDebugSnapshot(projectId));
    const obj4 = { text: null, icon: null };
    const intl = util.intl;
    obj4.text = intl.string(_modDef3865.wI6fhl);
    obj4.icon = CopyIcon.CopyIcon;
    ToastActionCreatorsDefault.open("CONJURE_DEBUG_COPIED", obj4);
  }, items10);
  const items11 = [callback2, navigation];
  const effect3 = noop.useEffect(() => {
    navigation.setOptions({
      headerRight() {
        const obj = {
          IconComponent: projectId(conjureTraceTabEnabled[21]).CopyIcon,
          onPress,
          accessibilityLabel: null,
        };
        const intl = projectId(conjureTraceTabEnabled[8]).intl;
        obj.accessibilityLabel = intl.string(navigation(conjureTraceTabEnabled[9]).TkHqy2);
        return closure_2_9(navigation(conjureTraceTabEnabled[22]), obj);
      },
    });
  }, items11);
  const obj8 = { style: tmp.scene, children: null };
  const obj7 = projectId(conjureTraceTabEnabled[16]);
  const items12 = [
    closure_9(setActiveIndex, {
      style: tmp.tabs,
      children: closure_9(projectId(conjureTraceTabEnabled[23]).SegmentedControl, { state: segmentedControlState }),
    }),
  ];
  const obj10 = { style: tmp.content, children: null };
  if ("logs" === tmp7) {
    const obj11 = { projectId };
    let tmp21Result = closure_9(tmp4(tmp2[24]), obj11);
  } else {
    if ("trace" === tmp7) {
      if (conjureTraceTabEnabled) {
        const obj12 = { projectId };
        tmp21Result = closure_9(tmp4(tmp2[17]), obj12);
      }
    }
    const obj13 = { contentContainerStyle: null, children: null };
    const items13 = [tmp.report];
    const obj14 = { paddingBottom: tmp4(tmp2[7]).space.PX_16 + navigation(conjureTraceTabEnabled[11])().bottom };
    items13[1] = obj14;
    obj13.contentContainerStyle = items13;
    if ("worker" === tmp7) {
      const obj15 = { status: stateFromStores, fetchState: stateFromStores1, onRefresh };
      let tmp21Result2 = closure_9(tmp4(tmp2[25]), obj15);
    } else {
      const obj16 = { projectId, status: stateFromStores, fetchState: stateFromStores1, onRefresh };
      tmp21Result2 = closure_9(tmp4(tmp2[26]), obj16);
    }
    obj13.children = tmp21Result2;
    tmp21Result = closure_9(onRefresh, obj13, tmp7);
  }
  obj10.children = tmp21Result;
  items12[1] = closure_9(setActiveIndex, obj10);
  obj8.children = items12;
  return closure_10(setActiveIndex, obj8);
}
