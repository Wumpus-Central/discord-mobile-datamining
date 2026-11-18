// === Module 12726: useCheckpointPreloader ===

// Module 12726 (useCheckpointPreloader)
import HTTPUtils from "HTTPUtils" /* 1285 */;
import _modDef4961 from "module_4961" /* 4961 */;
import _modDef4965 from "module_4965" /* 4965 */;
import _modDef4967 from "module_4967" /* 4967 */;
import _modDef5902 from "module_5902" /* 5902 */;
import _modDef5905 from "module_5905" /* 5905 */;
import _modDef5906 from "module_5906" /* 5906 */;
import _modDef5907 from "module_5907" /* 5907 */;
import _modDef5908 from "module_5908" /* 5908 */;
import _modDef5911 from "module_5911" /* 5911 */;
import _modDef5914 from "module_5914" /* 5914 */;
import _modDef5917 from "module_5917" /* 5917 */;
import _modDef12427 from "module_12427" /* 12427 */;
import _modDef12432 from "module_12432" /* 12432 */;
import _modDef12465 from "module_12465" /* 12465 */;
import _modDef12650 from "module_12650" /* 12650 */;
import _modDef12651 from "module_12651" /* 12651 */;
import _modDef12657 from "module_12657" /* 12657 */;
import _modDef12660 from "module_12660" /* 12660 */;
import _modDef12665 from "module_12665" /* 12665 */;
import _modDef12672 from "module_12672" /* 12672 */;
import _modDef12673 from "module_12673" /* 12673 */;
import _modDef12679 from "module_12679" /* 12679 */;
import _modDef12680 from "module_12680" /* 12680 */;
import _modDef12689 from "module_12689" /* 12689 */;
import _modDef12696 from "module_12696" /* 12696 */;
import _modDef12697 from "module_12697" /* 12697 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 12417 */;

const require = globalThis.__r;

require = fn;
const CheckpointFetchStates = fn(12417).CheckpointFetchStates;
let items = [_modDef4961, _modDef4965, _modDef4967, _modDef12432, _modDef5902, _modDef5905, _modDef5908, _modDef5911, _modDef5914, _modDef5917, _modDef12427, _modDef12660, _modDef12465, _modDef12657, _modDef12665, _modDef12689, ...fn(12456).CHECKPOINT_ROUTE_SOUNDS];
const items1 = [_modDef5906, _modDef12679, _modDef12672, _modDef12650, _modDef12696];
const items2 = [_modDef5907, _modDef12680, _modDef12673, _modDef12651, _modDef12697];
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/useCheckpointPreloader.tsx");

export default function useCheckpointPreloader() {
  _require = noop.useRef(0);
  dependencyMap = noop.useRef(true);
  const maybeFetchCheckpointData = require("useMaybeFetchCheckpointData").useMaybeFetchCheckpointData();
  _slicedToArray = tmp2;
  const obj2 = require("useMaybeFetchCheckpointData");
  [tmp4, noop] = noop.useState(false);
  items = [maybeFetchCheckpointData === CheckpointFetchStates.SUCCESS || maybeFetchCheckpointData === CheckpointFetchStates.ERROR];
  const effect = noop.useEffect(() => {
    function handleSettled() {
      if (handleSettled.current) {
        items.current = items.current + 1;
        if (items.current === items.length) {
          noop(true);
        }
      }
    }
    if (closure_2) {
      const tmp2 = compactAssets.compactAssets ? items2 : items1;
      items = [];
      HermesBuiltin.arraySpread(tmp2, HermesBuiltin.arraySpread(closure_1_6, 0));
      const item = items.forEach((url) => {
        const HTTP = HTTPUtils.HTTP;
        value = HTTP.get({ url, binary: true, rejectWithError: true });
        return value.then(handleSettled, handleSettled);
      });
    }
  }, items);
  const effect1 = noop.useEffect(() => () => {
    closure_1_1.current = false;
  }, []);
  return tmp4;
};