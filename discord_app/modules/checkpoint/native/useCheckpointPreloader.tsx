// === Module 13420: useCheckpointPreloader ===

// Module 13420 (useCheckpointPreloader)
import HTTPUtils from "HTTPUtils" /* 1285 */;
import _modDef5448 from "module_5448" /* 5448 */;
import _modDef5452 from "module_5452" /* 5452 */;
import _modDef5454 from "module_5454" /* 5454 */;
import _modDef6400 from "module_6400" /* 6400 */;
import _modDef6403 from "module_6403" /* 6403 */;
import _modDef6404 from "module_6404" /* 6404 */;
import _modDef6405 from "module_6405" /* 6405 */;
import _modDef6406 from "module_6406" /* 6406 */;
import _modDef6409 from "module_6409" /* 6409 */;
import _modDef6412 from "module_6412" /* 6412 */;
import _modDef6415 from "module_6415" /* 6415 */;
import _modDef13129 from "module_13129" /* 13129 */;
import _modDef13134 from "module_13134" /* 13134 */;
import _modDef13346 from "module_13346" /* 13346 */;
import _modDef13347 from "module_13347" /* 13347 */;
import _modDef13354 from "module_13354" /* 13354 */;
import _modDef13357 from "module_13357" /* 13357 */;
import _modDef13362 from "module_13362" /* 13362 */;
import _modDef13369 from "module_13369" /* 13369 */;
import _modDef13370 from "module_13370" /* 13370 */;
import _modDef13376 from "module_13376" /* 13376 */;
import _modDef13377 from "module_13377" /* 13377 */;
import _modDef13386 from "module_13386" /* 13386 */;
import _modDef13393 from "module_13393" /* 13393 */;
import _modDef13394 from "module_13394" /* 13394 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 13119 */;

const require = globalThis.__r;

require = fn;
const CheckpointFetchStates = fn(13119).CheckpointFetchStates;
let items = [_modDef5448, _modDef5452, _modDef5454, _modDef13134, _modDef6400, _modDef6403, _modDef6406, _modDef6409, _modDef6412, _modDef6415, _modDef13129, _modDef13357, _modDef13354, _modDef13362, _modDef13386, ...fn(13157).CHECKPOINT_ROUTE_SOUNDS];
const items1 = [_modDef6404, _modDef13376, _modDef13369, _modDef13346, _modDef13393];
const items2 = [_modDef6405, _modDef13377, _modDef13370, _modDef13347, _modDef13394];
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