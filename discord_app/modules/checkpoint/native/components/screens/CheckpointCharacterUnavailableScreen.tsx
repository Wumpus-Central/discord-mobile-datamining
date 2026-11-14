// discord_app/modules/checkpoint/native/components/screens/CheckpointCharacterUnavailableScreen.tsx
import util from "../../../../../intl/index.native.tsx";
import _modDef3317 from "../../../Checkpoint2026.messages.js";
import CheckpointUnavailableScreenDefault from "CheckpointUnavailableScreen.tsx";
import CheckpointTextDefault from "../CheckpointText.tsx";
import useCheckpointHasUserStatsDefault from "../../../hooks/useCheckpointHasUserStats.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import size from "../../../../../../_runtime/metro/00002__.js";

({ jsx: c3, jsxs: closure_4 } = jsxProd);
const result = size.fileFinishedImporting(
  "modules/checkpoint/native/components/screens/CheckpointCharacterUnavailableScreen.tsx",
);

export default function CheckpointCharacterUnavailableScreen() {
  const tmp3 = useCheckpointHasUserStatsDefault();
  const tmp5 = CheckpointUnavailableScreenDefault;
  const intl = util.intl;
  const tmp9 = _modDef3317;
  const tmp7 = CheckpointTextDefault;
  const children = [
    React3(tmp7, {
      isStepHeading: true,
      variant: "heading-lg/medium",
      children: intl.string(tmp3 ? tmp9.vcRnnQ : tmp9.crKDpM),
    }),
  ];
  let tmp6Result = !tmp3;
  if (!tmp3) {
    const obj2 = { variant: "heading-lg/medium", children: null };
    const intl2 = util.intl;
    obj2.children = intl2.string(_modDef3317["2GRr6H"]);
    tmp6Result = React3(CheckpointTextDefault, obj2);
    const tmpResult = CheckpointTextDefault;
  }
  children[1] = tmp6Result;
  return React4(tmp5, { children });
}
