// === Module 12849: useCheckpointPreloader ===

// Module 12849 (useCheckpointPreloader)
import HTTPUtils from "HTTPUtils" /* 1297 */;
import _modDef5073 from "module_5073" /* 5073 */;
import _modDef5077 from "module_5077" /* 5077 */;
import _modDef5079 from "module_5079" /* 5079 */;
import _modDef8574 from "module_8574" /* 8574 */;
import _modDef8575 from "module_8575" /* 8575 */;
import _modDef8576 from "module_8576" /* 8576 */;
import _modDef8577 from "module_8577" /* 8577 */;
import _modDef8578 from "module_8578" /* 8578 */;
import _modDef8579 from "module_8579" /* 8579 */;
import _modDef12787 from "module_12787" /* 12787 */;
import _modDef12789 from "module_12789" /* 12789 */;
import _modDef12793 from "module_12793" /* 12793 */;
import _modDef12802 from "module_12802" /* 12802 */;
import _modDef12806 from "module_12806" /* 12806 */;
import _modDef12829 from "module_12829" /* 12829 */;
import _modDef12836 from "module_12836" /* 12836 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const useEffect = fn(19).useEffect;
const CheckpointFetchStates = fn(12779).CheckpointFetchStates;
let items = [_modDef5073, _modDef5077, _modDef5079, _modDef12793, _modDef12836, _modDef12806, _modDef12802, _modDef12829, _modDef8574, _modDef8575, _modDef8576, _modDef8577, _modDef8578, _modDef8579, _modDef12789, _modDef12787];
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
        value = HTTP.get({ url, binary: true, rejectWithError: true });
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
      value = HTTP.get({ url, binary: true, rejectWithError: true });
      return value.then(handleSettled, handleSettled);
    });
  }, []);
  useEffect(() => () => {
    closure_1_1.current = false;
  }, []);
  return tmp4;
});