// === Module 12917: useCheckpointPreloader ===

// Module 12917 (useCheckpointPreloader)
import HTTPUtils from "HTTPUtils" /* 1297 */;
import _modDef5094 from "module_5094" /* 5094 */;
import _modDef5098 from "module_5098" /* 5098 */;
import _modDef5100 from "module_5100" /* 5100 */;
import _modDef8601 from "module_8601" /* 8601 */;
import _modDef8602 from "module_8602" /* 8602 */;
import _modDef8603 from "module_8603" /* 8603 */;
import _modDef8604 from "module_8604" /* 8604 */;
import _modDef8605 from "module_8605" /* 8605 */;
import _modDef8606 from "module_8606" /* 8606 */;
import _modDef12851 from "module_12851" /* 12851 */;
import _modDef12853 from "module_12853" /* 12853 */;
import _modDef12857 from "module_12857" /* 12857 */;
import _modDef12867 from "module_12867" /* 12867 */;
import _modDef12869 from "module_12869" /* 12869 */;
import _modDef12873 from "module_12873" /* 12873 */;
import _modDef12897 from "module_12897" /* 12897 */;
import _modDef12904 from "module_12904" /* 12904 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const useEffect = fn(19).useEffect;
const CheckpointFetchStates = fn(12843).CheckpointFetchStates;
let items = [_modDef5094, _modDef5098, _modDef5100, _modDef12857, _modDef12904, _modDef12873, _modDef12867, _modDef12869, _modDef12897, _modDef8601, _modDef8602, _modDef8603, _modDef8604, _modDef8605, _modDef8606, _modDef12853, _modDef12851];
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