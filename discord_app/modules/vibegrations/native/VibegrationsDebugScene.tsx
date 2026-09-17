// discord_app/modules/vibegrations/native/VibegrationsDebugScene.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef3593 from "../intl/VibegrationsUntranslated.messages.js";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import CopyIcon from "../../../design/components/Icon/native/redesign/generated/CopyIcon.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import VibegrationsDebugSnapshot from "../lib/VibegrationsDebugSnapshot.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import DeveloperExperimentStore from "../../../stores/DeveloperExperimentStore.tsx";
import VibegrationsDebugStore from "../stores/VibegrationsDebugStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const requestDebugStatus = fn(16752).requestDebugStatus;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4640);
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsDebugScene.tsx");

export default function VibegrationsDebugScene(projectId) {
  projectId = projectId.projectId;
  let stateFromStores;
  noop = undefined;
  const tmp = closure_12();
  const navigation = projectId(stateFromStores[11]).useNavigation();
  let obj = projectId(stateFromStores[11]);
  const items = [DeveloperExperimentStore];
  stateFromStores = projectId(stateFromStores[13]).useStateFromStores(items, () => isDeveloper.isDeveloper);
  const items1 = [stateFromStores];
  const memo = noop.useMemo(
    () => (stateFromStores ? ["logs", "worker", "agent", "trace"] : ["logs", "worker", "agent"]),
    items1,
  );
  let obj2 = projectId(stateFromStores[13]);
  [tmp7, c4] = memo(noop.useState("logs"), 2);
  const tmp6 = memo(noop.useState("logs"), 2);
  const obj3 = projectId(stateFromStores[14]);
  const segmentedControlState = obj3.useSegmentedControlState({
    pageWidth: 0,
    items: memo.map((id) => {
      const obj = { id, label: null, page: null };
      if ("worker" === id) {
        const intl4 = projectId(stateFromStores[9]).intl;
        let stringResult = intl4.string(navigation(stateFromStores[10]).whGHLD);
      } else if ("agent" === id) {
        const intl3 = projectId(stateFromStores[9]).intl;
        stringResult = intl3.string(navigation(stateFromStores[10]).cK3AvL);
      } else if ("trace" === id) {
        const intl2 = projectId(stateFromStores[9]).intl;
        stringResult = intl2.string(navigation(stateFromStores[10]).wUZveG);
      } else {
        const intl = projectId(stateFromStores[9]).intl;
        stringResult = intl.string(navigation(stateFromStores[10])["1mpzdJ"]);
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
    },
  });
  let obj4 = {
    pageWidth: 0,
    items: memo.map((id) => {
      const obj = { id, label: null, page: null };
      if ("worker" === id) {
        const intl4 = projectId(stateFromStores[9]).intl;
        let stringResult = intl4.string(navigation(stateFromStores[10]).whGHLD);
      } else if ("agent" === id) {
        const intl3 = projectId(stateFromStores[9]).intl;
        stringResult = intl3.string(navigation(stateFromStores[10]).cK3AvL);
      } else if ("trace" === id) {
        const intl2 = projectId(stateFromStores[9]).intl;
        stringResult = intl2.string(navigation(stateFromStores[10]).wUZveG);
      } else {
        const intl = projectId(stateFromStores[9]).intl;
        stringResult = intl.string(navigation(stateFromStores[10])["1mpzdJ"]);
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
    },
  };
  const items2 = [VibegrationsDebugStore];
  const items3 = [projectId];
  const stateFromStores1 = projectId(stateFromStores[13]).useStateFromStores(
    items2,
    () => VibegrationsDebugStore.getStatus(projectId),
    items3,
  );
  const obj5 = projectId(stateFromStores[13]);
  const items4 = [VibegrationsDebugStore];
  const items5 = [projectId];
  const stateFromStores2 = projectId(stateFromStores[13]).useStateFromStores(
    items4,
    () => VibegrationsDebugStore.getFetchState(projectId),
    items5,
  );
  const items6 = [projectId];
  const effect = noop.useEffect(() => {
    requestDebugStatus(projectId);
  }, items6);
  const items7 = [projectId];
  const callback = noop.useCallback(() => requestDebugStatus(projectId), items7);
  const items8 = [projectId];
  const callback1 = noop.useCallback(() => {
    const obj = ClipboardUtils;
    obj.copy(VibegrationsDebugSnapshot.vibegrationsDebugSnapshot(projectId));
    const obj4 = { key: "VIBEGRATIONS_DEBUG_COPIED", content: null, IconComponent: null };
    const intl = util.intl;
    obj4.content = intl.string(_modDef3593.sDSDiO);
    obj4.IconComponent = CopyIcon.CopyIcon;
    ToastActionCreatorsDefault.open(obj4);
  }, items8);
  const items9 = [callback1, navigation];
  const effect1 = noop.useEffect(() => {
    navigation.setOptions({
      headerRight() {
        const obj = { IconComponent: projectId(stateFromStores[18]).CopyIcon, onPress, accessibilityLabel: null };
        const intl = projectId(stateFromStores[9]).intl;
        obj.accessibilityLabel = intl.string(navigation(stateFromStores[10])["21ipY1"]);
        return closure_2_10(navigation(stateFromStores[19]), obj);
      },
    });
  }, items9);
  const obj7 = { style: tmp.scene, children: null };
  const obj6 = projectId(stateFromStores[13]);
  const items10 = [
    closure_10(closure_6, {
      style: tmp.tabs,
      children: closure_10(projectId(stateFromStores[20]).SegmentedControl, { state: segmentedControlState }),
    }),
  ];
  const obj9 = { style: tmp.content, children: null };
  if ("logs" === tmp7) {
    const obj10 = { projectId };
    let tmp17Result = closure_10(tmp4(tmp2[21]), obj10);
  } else {
    if ("trace" === tmp7) {
      if (stateFromStores) {
        const obj11 = { projectId };
        tmp17Result = closure_10(tmp4(tmp2[22]), obj11);
      }
    }
    const obj12 = { contentContainerStyle: null, children: null };
    const items11 = [tmp.report];
    const obj13 = { paddingBottom: tmp4(tmp2[8]).space.PX_16 + navigation(stateFromStores[12])().bottom };
    items11[1] = obj13;
    obj12.contentContainerStyle = items11;
    if ("worker" === tmp7) {
      const obj14 = { status: stateFromStores1, fetchState: stateFromStores2, onRefresh: callback };
      let tmp17Result2 = closure_10(tmp4(tmp2[23]), obj14);
    } else {
      const obj15 = {
        projectId,
        status: stateFromStores1,
        fetchState: stateFromStores2,
        onRefresh: callback,
        traceVisible: stateFromStores,
      };
      tmp17Result2 = closure_10(tmp4(tmp2[24]), obj15);
    }
    obj12.children = tmp17Result2;
    tmp17Result = closure_10(callback1, obj12, tmp7);
  }
  obj9.children = tmp17Result;
  items10[1] = closure_10(closure_6, obj9);
  obj7.children = items10;
  return closure_11(closure_6, obj7);
}
