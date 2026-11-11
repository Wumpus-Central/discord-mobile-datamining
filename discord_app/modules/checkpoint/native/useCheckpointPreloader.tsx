// === Module 14439: useCheckpointPreloader ===

// Module 14439 (useCheckpointPreloader)
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
import _modDef14158 from "module_14158" /* 14158 */;
import _modDef14161 from "module_14161" /* 14161 */;
import _modDef14379 from "module_14379" /* 14379 */;
import _modDef14380 from "module_14380" /* 14380 */;
import _modDef14383 from "module_14383" /* 14383 */;
import _modDef14384 from "module_14384" /* 14384 */;
import _modDef14390 from "module_14390" /* 14390 */;
import _modDef14391 from "module_14391" /* 14391 */;
import _modDef14400 from "module_14400" /* 14400 */;
import _modDef14408 from "module_14408" /* 14408 */;
import _modDef14409 from "module_14409" /* 14409 */;
import _modDef14433 from "module_14433" /* 14433 */;
import _modDef14434 from "module_14434" /* 14434 */;
import _modDef14435 from "module_14435" /* 14435 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 14150 */;

const require = globalThis.__r;

require = fn;
const CheckpointFetchStates = fn(14150).CheckpointFetchStates;
let items = [_modDef5391, _modDef5395, _modDef5397, _modDef14161, _modDef6339, _modDef6342, _modDef6345, _modDef6348, _modDef6351, _modDef6354, _modDef14158, _modDef14435, _modDef14434, _modDef14433, _modDef14400, ...fn(14189).CHECKPOINT_ROUTE_SOUNDS];
const items1 = [_modDef6343, _modDef14390, _modDef14383, _modDef14379, _modDef14408];
const items2 = [_modDef6344, _modDef14391, _modDef14384, _modDef14380, _modDef14409];
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