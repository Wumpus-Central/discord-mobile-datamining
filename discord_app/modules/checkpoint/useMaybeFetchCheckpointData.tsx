// === Module 16028: useMaybeFetchCheckpointData ===

// Module 16028 (useMaybeFetchCheckpointData)
import _mod19 from "module_19" /* 19 */;
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import CheckpointActionCreators from "CheckpointActionCreators" /* 15972 */;
import CheckpointStore2 from "CheckpointStore" /* 15977 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const CheckpointStore = CheckpointStore2;

const useEffect = _mod19.useEffect;
const CheckpointFetchStates = CheckpointStore2.CheckpointFetchStates;
const result = size.fileFinishedImporting("modules/checkpoint/useMaybeFetchCheckpointData.tsx");

export const useMaybeFetchCheckpointData = ReactCompilerGating.isReactCompilerEnabled() ? (function useMaybeFetchCheckpointData() {
  const cResult = c.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CheckpointStore];
    const fn = function h() {
      return CheckpointStore.fetchState;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function u() {
      const fetchState = CheckpointStore.fetchState;
      if (!tmp) {
        const checkpointData = CheckpointActionCreators.fetchCheckpointData();
      }
      tmp = fetchState !== constants.INIT && fetchState !== constants.ERROR;
    };
    const items1 = [];
    cResult[2] = fn2;
    cResult[3] = items1;
    let tmp9 = items1;
    let tmp8 = fn2;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  useEffect(tmp8, tmp9);
  return stateFromStores;
}) : (function useMaybeFetchCheckpointData() {
  const items = [CheckpointStore];
  const stateFromStores = initialize.useStateFromStores(items, () => CheckpointStore.fetchState);
  useEffect(() => {
    const fetchState = CheckpointStore.fetchState;
    if (!tmp) {
      const checkpointData = CheckpointActionCreators.fetchCheckpointData();
    }
    tmp = fetchState !== constants.INIT && fetchState !== constants.ERROR;
  }, []);
  return stateFromStores;
});