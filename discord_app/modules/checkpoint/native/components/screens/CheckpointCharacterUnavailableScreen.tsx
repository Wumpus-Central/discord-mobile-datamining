// === Module 14499: CheckpointCharacterUnavailableScreen ===

// Module 14499 (CheckpointCharacterUnavailableScreen)
import util from "util" /* 1113 */;
import _modDef3317 from "module_3317" /* 3317 */;
import CheckpointUnavailableScreenDefault from "CheckpointUnavailableScreen" /* 14269 */;
import CheckpointTextDefault from "CheckpointText" /* 14271 */;
import useCheckpointHasUserStatsDefault from "useCheckpointHasUserStats" /* 14478 */;
import jsxProd from "jsxProd" /* 21 */;
import size from "module_2" /* 2 */;

({ jsx: c3, jsxs: closure_4 } = jsxProd);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/CheckpointCharacterUnavailableScreen.tsx");

export default function CheckpointCharacterUnavailableScreen() {
  const tmp3 = useCheckpointHasUserStatsDefault();
  const tmp5 = CheckpointUnavailableScreenDefault;
  const intl = util.intl;
  const tmp9 = _modDef3317;
  const tmp7 = CheckpointTextDefault;
  const children = [React3(tmp7, { isStepHeading: true, variant: "heading-lg/medium", children: intl.string(tmp3 ? tmp9.vcRnnQ : tmp9.crKDpM) }), ];
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
};