// === Module 13960: useCheckpointPreloader ===

// Module 13960 (useCheckpointPreloader)
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _modDef5278 from "module_5278" /* 5278 */;
import _modDef5282 from "module_5282" /* 5282 */;
import _modDef5284 from "module_5284" /* 5284 */;
import _modDef6226 from "module_6226" /* 6226 */;
import _modDef6229 from "module_6229" /* 6229 */;
import _modDef6230 from "module_6230" /* 6230 */;
import _modDef6231 from "module_6231" /* 6231 */;
import _modDef6232 from "module_6232" /* 6232 */;
import _modDef6235 from "module_6235" /* 6235 */;
import _modDef6238 from "module_6238" /* 6238 */;
import _modDef6241 from "module_6241" /* 6241 */;
import _modDef13714 from "module_13714" /* 13714 */;
import _modDef13892 from "module_13892" /* 13892 */;
import _modDef13903 from "module_13903" /* 13903 */;
import _modDef13904 from "module_13904" /* 13904 */;
import _modDef13907 from "module_13907" /* 13907 */;
import _modDef13908 from "module_13908" /* 13908 */;
import _modDef13913 from "module_13913" /* 13913 */;
import _modDef13914 from "module_13914" /* 13914 */;
import _modDef13923 from "module_13923" /* 13923 */;
import _modDef13931 from "module_13931" /* 13931 */;
import _modDef13932 from "module_13932" /* 13932 */;
import _modDef13956 from "module_13956" /* 13956 */;
import _modDef13957 from "module_13957" /* 13957 */;
import _modDef13958 from "module_13958" /* 13958 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 13681 */;

const require = globalThis.__r;

require = fn;
const CheckpointFetchStates = fn(13681).CheckpointFetchStates;
let items = [_modDef5278, _modDef5282, _modDef5284, _modDef13892, _modDef6226, _modDef6229, _modDef6232, _modDef6235, _modDef6238, _modDef6241, _modDef13714, _modDef13958, _modDef13957, _modDef13956, _modDef13923, ...fn(13707).CHECKPOINT_ROUTE_SOUNDS];
const items1 = [_modDef6230, _modDef13913, _modDef13907, _modDef13903, _modDef13931];
const items2 = [_modDef6231, _modDef13914, _modDef13908, _modDef13904, _modDef13932];
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