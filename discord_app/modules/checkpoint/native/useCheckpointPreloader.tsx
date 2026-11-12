// === Module 14435: useCheckpointPreloader ===

// Module 14435 (useCheckpointPreloader)
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _modDef5391 from "module_5391" /* 5391 */;
import _modDef5395 from "module_5395" /* 5395 */;
import _modDef5397 from "module_5397" /* 5397 */;
import _modDef6339 from "module_6339" /* 6339 */;
import _modDef6342 from "module_6342" /* 6342 */;
import _modDef6343 from "module_6343" /* 6343 */;
import _modDef6344 from "module_6344" /* 6344 */;
import _modDef6345 from "module_6345" /* 6345 */;
import _modDef6348 from "module_6348" /* 6348 */;
import _modDef6351 from "module_6351" /* 6351 */;
import _modDef6354 from "module_6354" /* 6354 */;
import _modDef14154 from "module_14154" /* 14154 */;
import _modDef14158 from "module_14158" /* 14158 */;
import _modDef14375 from "module_14375" /* 14375 */;
import _modDef14376 from "module_14376" /* 14376 */;
import _modDef14379 from "module_14379" /* 14379 */;
import _modDef14380 from "module_14380" /* 14380 */;
import _modDef14386 from "module_14386" /* 14386 */;
import _modDef14387 from "module_14387" /* 14387 */;
import _modDef14396 from "module_14396" /* 14396 */;
import _modDef14404 from "module_14404" /* 14404 */;
import _modDef14405 from "module_14405" /* 14405 */;
import _modDef14429 from "module_14429" /* 14429 */;
import _modDef14431 from "module_14431" /* 14431 */;
import _modDef14434 from "module_14434" /* 14434 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 14146 */;

const require = globalThis.__r;

require = fn;
const CheckpointFetchStates = fn(14146).CheckpointFetchStates;
let items = [_modDef5391, _modDef5395, _modDef5397, _modDef14158, _modDef6339, _modDef6342, _modDef6345, _modDef6348, _modDef6351, _modDef6354, _modDef14154, _modDef14431, _modDef14429, _modDef14434, _modDef14396, ...fn(14185).CHECKPOINT_ROUTE_SOUNDS];
const items1 = [_modDef6343, _modDef14386, _modDef14379, _modDef14375, _modDef14404];
const items2 = [_modDef6344, _modDef14387, _modDef14380, _modDef14376, _modDef14405];
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