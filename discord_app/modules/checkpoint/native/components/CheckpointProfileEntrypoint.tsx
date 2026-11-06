// discord_app/modules/checkpoint/native/components/CheckpointProfileEntrypoint.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/02118_asyncRequireImpl.js";
import _modDef3248 from "../../Checkpoint2026.messages.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import CheckpointExperiments from "../../CheckpointExperiments.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import ExperimentalCheckpointIcon from "../../../../design/components/Icon/native/redesign/generated/ExperimentalCheckpointIcon.tsx";
import openCheckpoint from "../../openCheckpoint.native.tsx";
import CheckpointStore from "../../CheckpointStore.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

function handlePress() {
  openCheckpoint.openCheckpoint("user_profile");
}
function handleLongPress() {
  ActionSheetActionCreatorsDefault.openLazy(
    asyncRequireImpl(19180, dependencyMap.paths),
    "CheckpointTestingActionSheet",
  );
}
function CheckpointProfileEntrypointRow() {
  const isCheckpointQAEnabled = CheckpointExperiments.useIsCheckpointQAEnabled("CheckpointProfileEntrypoint");
  items = [CheckpointStore];
  const stateFromStores = initialize.useStateFromStores(items, () => isFetching.isFetching);
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
  const intl = util.intl;
  obj3.label = intl.string(_modDef3248["8hclXY"]);
  const intl2 = util.intl;
  obj3.subLabel = intl2.string(_modDef3248.BFc4lY);
  if (stateFromStores) {
    let tmp5Result = <ActivityIndicator />;
  } else {
    const obj4 = { IconComponent: ExperimentalCheckpointIcon.ExperimentalCheckpointIcon };
    tmp5Result = jsx(TableRow.TableRow.Icon, { IconComponent: ExperimentalCheckpointIcon.ExperimentalCheckpointIcon });
  }
  obj3.icon = tmp5Result;
  obj3.onPress = handlePress;
  let tmp8;
  if (isCheckpointQAEnabled) {
    tmp8 = handleLongPress;
  }
  obj3.onLongPress = tmp8;
  return jsx(TableRow.TableRow, {
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
