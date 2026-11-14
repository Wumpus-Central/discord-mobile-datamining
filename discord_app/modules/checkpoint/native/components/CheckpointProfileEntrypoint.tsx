// discord_app/modules/checkpoint/native/components/CheckpointProfileEntrypoint.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import asyncRequireImpl from "../../../../../_runtime/02121_asyncRequireImpl.js";
import _modDef3317 from "../../Checkpoint2026.messages.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import openCheckpoint from "../../openCheckpoint.native.tsx";
import CheckpointStore from "../../CheckpointStore.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

function handlePress() {
  openCheckpoint.openCheckpoint("user_profile");
}
function CheckpointProfileEntrypointRow() {
  checkpointQAMode = checkpointQAMode(6748).useCheckpointQAMode("CheckpointProfileEntrypoint");
  const obj = checkpointQAMode(6748);
  items = [CheckpointStore];
  const stateFromStores = checkpointQAMode(504).useStateFromStores(items, () => isFetching.isFetching);
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
  const intl = checkpointQAMode(1113).intl;
  obj3.label = intl.string(_modDef3317["8hclXY"]);
  const intl2 = checkpointQAMode(1113).intl;
  obj3.subLabel = intl2.string(_modDef3317.BFc4lY);
  if (stateFromStores) {
    let tmp5Result = <ActivityIndicator />;
  } else {
    const obj4 = { IconComponent: tmp(15190).ExperimentalCheckpointIcon };
    tmp5Result = jsx(tmp(7443).TableRow.Icon, { IconComponent: tmp(15190).ExperimentalCheckpointIcon });
  }
  obj3.icon = tmp5Result;
  obj3.onPress = handlePress;
  let fn;
  if ("off" !== checkpointQAMode) {
    fn = () => {
      ActionSheetActionCreatorsDefault.openLazy(
        asyncRequireImpl(19655, dependencyMap.paths),
        "CheckpointTestingActionSheet",
        { mode: checkpointQAMode },
      );
    };
  }
  obj3.onLongPress = fn;
  return jsx(checkpointQAMode(7443).TableRow, {
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

export default function CheckpointProfileEntrypoint() {
  let tmp = null;
  if (obj.useIsCheckpointEnabled("CheckpointProfileEntrypoint")) {
    tmp = <CheckpointProfileEntrypointRow />;
  }
  return tmp;
}
