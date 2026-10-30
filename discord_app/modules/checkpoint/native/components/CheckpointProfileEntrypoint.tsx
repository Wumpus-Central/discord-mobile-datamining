// discord_app/modules/checkpoint/native/components/CheckpointProfileEntrypoint.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import util from "../../../../intl/index.native.tsx";
import _modDef3091 from "../../Checkpoint2026.messages.js";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import ExperimentalCheckpointIcon from "../../../../design/components/Icon/native/redesign/generated/ExperimentalCheckpointIcon.tsx";
import openCheckpoint from "../../openCheckpoint.native.tsx";
import CheckpointActionCreators from "../../CheckpointActionCreators.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

function handlePress() {
  const checkpointData = CheckpointActionCreators.fetchCheckpointData();
  openCheckpoint.openCheckpoint("user_profile");
}
const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointProfileEntrypoint.tsx");

export default function CheckpointProfileEntrypoint() {
  let tmp3 = null;
  if (obj.useIsCheckpointEnabled("CheckpointProfileEntrypoint")) {
    const obj2 = { label: null, subLabel: null, icon: null, onPress: null, arrow: true, start: true, end: true };
    const intl = util.intl;
    obj2.label = intl.string(_modDef3091["8hclXY"]);
    const intl2 = util.intl;
    obj2.subLabel = intl2.string(_modDef3091.BFc4lY);
    const obj3 = { IconComponent: ExperimentalCheckpointIcon.ExperimentalCheckpointIcon };
    obj2.icon = jsx(TableRow.TableRow.Icon, { IconComponent: ExperimentalCheckpointIcon.ExperimentalCheckpointIcon });
    obj2.onPress = handlePress;
    tmp3 = jsx(TableRow.TableRow, {
      label: null,
      subLabel: null,
      icon: null,
      onPress: null,
      arrow: true,
      start: true,
      end: true,
    });
  }
  return tmp3;
}
