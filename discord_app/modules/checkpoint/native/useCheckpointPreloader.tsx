// === Module 12710: useCheckpointPreloader ===

// Module 12710 (useCheckpointPreloader)
import HTTPUtils from "HTTPUtils" /* 1297 */;
import _modDef4972 from "module_4972" /* 4972 */;
import _modDef4974 from "module_4974" /* 4974 */;
import _modDef12663 from "module_12663" /* 12663 */;
import _modDef12665 from "module_12665" /* 12665 */;
import _modDef12672 from "module_12672" /* 12672 */;
import _modDef12681 from "module_12681" /* 12681 */;
import _modDef12685 from "module_12685" /* 12685 */;
import _modDef12692 from "module_12692" /* 12692 */;
import _modDef12696 from "module_12696" /* 12696 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const useEffect = fn(19).useEffect;
const CheckpointFetchStates = fn(12654).CheckpointFetchStates;
let items = [_modDef4972, _modDef4974, _modDef12672, _modDef12696, _modDef12685, _modDef12681, _modDef12692, _modDef12665, _modDef12663];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/useCheckpointPreloader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useCheckpointPreloader() {
  const cResult = require("c").c(4);
  _require = noop.useRef(0);
  dependencyMap = noop.useRef(true);
  const obj = require("c");
  const maybeFetchCheckpointData = require("useMaybeFetchCheckpointData").useMaybeFetchCheckpointData();
  const obj3 = require("useMaybeFetchCheckpointData");
  const tmp3 = maybeFetchCheckpointData === CheckpointFetchStates.SUCCESS || maybeFetchCheckpointData === CheckpointFetchStates.ERROR;
  [tmp5, _slicedToArray] = noop.useState(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      function handleSettled() {
        if (ref.current) {
          handleSettled.current = handleSettled.current + 1;
          if (handleSettled.current === items.length) {
            closure_1_2(true);
          }
        }
      }
      const item = items.forEach((url) => {
        const HTTP = HTTPUtils.HTTP;
        value = HTTP.get({ url, rejectWithError: true });
        return value.then(handleSettled, handleSettled);
      });
    };
    items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp6 = fn;
    tmp7 = items;
  } else {
    [tmp6, tmp7] = cResult;
  }
  useEffect(tmp6, tmp7);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function s() {
      return () => {
        closure_1_1.current = false;
      };
    };
    const items1 = [];
    cResult[2] = fn2;
    cResult[3] = items1;
    let tmp11 = items1;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[2];
    tmp11 = cResult[3];
  }
  useEffect(tmp10, tmp11);
  return tmp5;
}) : (function useCheckpointPreloader() {
  _require = noop.useRef(0);
  dependencyMap = noop.useRef(true);
  const maybeFetchCheckpointData = require("useMaybeFetchCheckpointData").useMaybeFetchCheckpointData();
  const obj2 = require("useMaybeFetchCheckpointData");
  const tmp2 = maybeFetchCheckpointData === CheckpointFetchStates.SUCCESS || maybeFetchCheckpointData === CheckpointFetchStates.ERROR;
  [tmp4, _slicedToArray] = noop.useState(false);
  useEffect(() => {
    function handleSettled() {
      if (ref.current) {
        handleSettled.current = handleSettled.current + 1;
        if (handleSettled.current === items.length) {
          closure_1_2(true);
        }
      }
    }
    const item = items.forEach((url) => {
      const HTTP = HTTPUtils.HTTP;
      value = HTTP.get({ url, rejectWithError: true });
      return value.then(handleSettled, handleSettled);
    });
  }, []);
  useEffect(() => () => {
    closure_1_1.current = false;
  }, []);
  return tmp4;
});