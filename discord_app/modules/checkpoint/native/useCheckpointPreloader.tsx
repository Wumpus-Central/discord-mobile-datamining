// === Module 14547: useCheckpointPreloader ===

// Module 14547 (useCheckpointPreloader)
import HTTPUtils from "HTTPUtils" /* 1285 */;
import _modDef5454 from "module_5454" /* 5454 */;
import _modDef5458 from "module_5458" /* 5458 */;
import _modDef5460 from "module_5460" /* 5460 */;
import _modDef6402 from "module_6402" /* 6402 */;
import _modDef6405 from "module_6405" /* 6405 */;
import _modDef6406 from "module_6406" /* 6406 */;
import _modDef6407 from "module_6407" /* 6407 */;
import _modDef6408 from "module_6408" /* 6408 */;
import _modDef6411 from "module_6411" /* 6411 */;
import _modDef6414 from "module_6414" /* 6414 */;
import _modDef6417 from "module_6417" /* 6417 */;
import _modDef14263 from "module_14263" /* 14263 */;
import _modDef14268 from "module_14268" /* 14268 */;
import _modDef14481 from "module_14481" /* 14481 */;
import _modDef14482 from "module_14482" /* 14482 */;
import _modDef14489 from "module_14489" /* 14489 */;
import _modDef14492 from "module_14492" /* 14492 */;
import _modDef14495 from "module_14495" /* 14495 */;
import _modDef14502 from "module_14502" /* 14502 */;
import _modDef14503 from "module_14503" /* 14503 */;
import _modDef14509 from "module_14509" /* 14509 */;
import _modDef14510 from "module_14510" /* 14510 */;
import _modDef14518 from "module_14518" /* 14518 */;
import _modDef14525 from "module_14525" /* 14525 */;
import _modDef14526 from "module_14526" /* 14526 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 14253 */;

const require = globalThis.__r;

require = fn;
const CheckpointFetchStates = fn(14253).CheckpointFetchStates;
let items = [_modDef5454, _modDef5458, _modDef5460, _modDef14268, _modDef6402, _modDef6405, _modDef6408, _modDef6411, _modDef6414, _modDef6417, _modDef14263, _modDef14492, _modDef14489, _modDef14495, _modDef14518, ...fn(14292).CHECKPOINT_ROUTE_SOUNDS];
const items1 = [_modDef6406, _modDef14509, _modDef14502, _modDef14481, _modDef14525];
const items2 = [_modDef6407, _modDef14510, _modDef14503, _modDef14482, _modDef14526];
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