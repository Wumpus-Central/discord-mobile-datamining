// discord_app/modules/checkpoint/native/components/CheckpointProfileEntrypoint.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01994_asyncRequireImpl.js";
import _modDef3092 from "../../Checkpoint2026.messages.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import CheckpointExperiments from "../../CheckpointExperiments.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import ExperimentalCheckpointIcon from "../../../../design/components/Icon/native/redesign/generated/ExperimentalCheckpointIcon.tsx";
import openCheckpoint from "../../openCheckpoint.native.tsx";
import CheckpointActionCreators from "../../CheckpointActionCreators.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

function handlePress() {
  const checkpointData = CheckpointActionCreators.fetchCheckpointData();
  openCheckpoint.openCheckpoint("user_profile");
}
function handleLongPress() {
  ActionSheetActionCreatorsDefault.openLazy(
    asyncRequireImpl(18875, dependencyMap.paths),
    "CheckpointTestingActionSheet",
  );
}
function CheckpointProfileEntrypointRow() {
  const isCheckpointQAEnabled = CheckpointExperiments.useIsCheckpointQAEnabled("CheckpointProfileEntrypoint");
  const obj2 = {
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
  obj2.label = intl.string(_modDef3092["8hclXY"]);
  const intl2 = util.intl;
  obj2.subLabel = intl2.string(_modDef3092.BFc4lY);
  obj2.icon = jsx(TableRow.TableRow.Icon, { IconComponent: ExperimentalCheckpointIcon.ExperimentalCheckpointIcon });
  obj2.onPress = handlePress;
  let tmp3;
  if (isCheckpointQAEnabled) {
    tmp3 = handleLongPress;
  }
  obj2.onLongPress = tmp3;
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
const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointProfileEntrypoint.tsx");

export default function CheckpointProfileEntrypoint() {
  let tmp = null;
  if (obj.useIsCheckpointEnabled("CheckpointProfileEntrypoint")) {
    tmp = <CheckpointProfileEntrypointRow />;
  }
  return tmp;
}
