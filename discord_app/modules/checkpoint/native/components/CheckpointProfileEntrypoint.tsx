// discord_app/modules/checkpoint/native/components/CheckpointProfileEntrypoint.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import asyncRequireImpl from "../../../../../_runtime/02119_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import openCheckpoint from "../../openCheckpoint.native.tsx";
import CheckpointStore from "../../CheckpointStore.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

function CheckpointProfileEntrypointRow(source) {
  source = source.source;
  const checkpointQAMode = source(6643).useCheckpointQAMode("CheckpointProfileEntrypoint");
  const obj = source(6643);
  items = [CheckpointStore];
  const stateFromStores = source(504).useStateFromStores(items, () => isFetching.isFetching);
  const obj3 = {
    label: null,
    subLabel: null,
    icon: null,
    onPress: null,
    onLongPress: null,
    arrow: true,
    start: true,
    end: true,
  };
  const intl = source(1112).intl;
  obj3.label = intl.string(checkpointQAMode(3442)["8hclXY"]);
  const intl2 = source(1112).intl;
  obj3.subLabel = intl2.string(checkpointQAMode(3442).BFc4lY);
  if (stateFromStores) {
    let tmp5Result = <ActivityIndicator />;
  } else {
    const obj4 = { IconComponent: tmp(13943).ExperimentalCheckpointIcon };
    tmp5Result = jsx(tmp(6018).TableRow.Icon, { IconComponent: tmp(13943).ExperimentalCheckpointIcon });
  }
  obj3.icon = tmp5Result;
  obj3.onPress = function onPress() {
    return openCheckpoint.openCheckpoint(source);
  };
  let fn;
  if ("off" !== checkpointQAMode) {
    fn = () => {
      ActionSheetActionCreatorsDefault.openLazy(
        asyncRequireImpl(14874, dependencyMap.paths),
        "CheckpointTestingActionSheet",
        { mode: checkpointQAMode },
      );
    };
  }
  obj3.onLongPress = fn;
  return jsx(source(6018).TableRow, {
    label: null,
    subLabel: null,
    icon: null,
    onPress: null,
    onLongPress: null,
    arrow: true,
    start: true,
    end: true,
  });
}
const ActivityIndicator = _mod17.ActivityIndicator;
const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointProfileEntrypoint.tsx");

export default function CheckpointProfileEntrypoint(source) {
  let tmp = null;
  if (obj.useIsCheckpointEnabled("CheckpointProfileEntrypoint")) {
    const obj2 = { source: source.source };
    tmp = <CheckpointProfileEntrypointRow source={source.source} />;
  }
  return tmp;
}
