// === Module 17063: useListHasSingleMessageRequest ===

// Module 17063 (useListHasSingleMessageRequest)
import react_mod from "react" /* 19 */;
import MessageRequestStore from "MessageRequestStore" /* 6720 */;
import SpamMessageRequestStore from "SpamMessageRequestStore" /* 6721 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let react = react_mod;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let messageRequestsCount;
  let ready;
  let stateFromStores;
  let tmp6;
  let tmp7;
  let tmp = messageRequestsCount;
  const obj = messageRequestsCount(stateFromStores[4]);
  const cResult = obj.c(6);
  const obj2 = messageRequestsCount(stateFromStores[5]);
  messageRequestsCount = obj2.useMessageRequestsCount();
  const ref = react.useRef(messageRequestsCount);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MessageRequestStore];
    const fn = function n() {
      return ready.isReady();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = tmp(stateFromStores[6]);
  stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  react = obj3.useRef(stateFromStores);
  if (cResult[2] === stateFromStores) {
    let tmp10;
    let tmp11;
    if (cResult[3] === messageRequestsCount) {
      tmp10 = cResult[4];
      tmp11 = cResult[5];
    }
    const effect = obj3.useEffect(tmp10, tmp11);
    const tmp14 = ref(stateFromStores[7])(ref) <= 1 && 1 === messageRequestsCount;
    return tmp14;
  }
  class R {
    constructor() {
      const tmp = stateFromStores && !ref.current;
      if (tmp) {
        ref.current = true;
        ref.current = messageRequestsCount;
      }
    }
  }
  const items1 = [stateFromStores, messageRequestsCount];
  cResult[2] = stateFromStores;
  cResult[3] = messageRequestsCount;
  cResult[4] = R;
  cResult[5] = items1;
  tmp11 = items1;
  tmp10 = R;
}) : (() => {
  let messageRequestsCount;
  let ready;
  let stateFromStores;
  const obj = messageRequestsCount(stateFromStores[5]);
  messageRequestsCount = obj.useMessageRequestsCount();
  const ref = react.useRef(messageRequestsCount);
  const items = [MessageRequestStore];
  const obj2 = messageRequestsCount(stateFromStores[6]);
  stateFromStores = obj2.useStateFromStores(items, () => ready.isReady());
  react = react.useRef(stateFromStores);
  const items1 = [stateFromStores, messageRequestsCount];
  const effect = react.useEffect(() => {
    const tmp = stateFromStores && !ref.current;
    if (tmp) {
      ref.current = true;
      ref.current = messageRequestsCount;
    }
  }, items1);
  const tmp5 = ref(stateFromStores[7])(ref) <= 1 && 1 === messageRequestsCount;
  return tmp5;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let ready;
  let spamMessageRequestCount;
  let stateFromStores;
  let tmp6;
  let tmp7;
  let tmp = spamMessageRequestCount;
  const obj = spamMessageRequestCount(stateFromStores[4]);
  const cResult = obj.c(6);
  const obj2 = spamMessageRequestCount(stateFromStores[8]);
  spamMessageRequestCount = obj2.useSpamMessageRequestCount();
  const ref = react.useRef(spamMessageRequestCount);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SpamMessageRequestStore];
    const fn = function n() {
      return ready.isReady();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = tmp(stateFromStores[6]);
  stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  react = obj3.useRef(stateFromStores);
  if (cResult[2] === stateFromStores) {
    let tmp10;
    let tmp11;
    if (cResult[3] === spamMessageRequestCount) {
      tmp10 = cResult[4];
      tmp11 = cResult[5];
    }
    const effect = obj3.useEffect(tmp10, tmp11);
    const tmp14 = ref(stateFromStores[7])(ref) <= 1 && 1 === spamMessageRequestCount;
    return tmp14;
  }
  class R {
    constructor() {
      const tmp = stateFromStores && !ref.current;
      if (tmp) {
        ref.current = true;
        ref.current = spamMessageRequestCount;
      }
    }
  }
  const items1 = [stateFromStores, spamMessageRequestCount];
  cResult[2] = stateFromStores;
  cResult[3] = spamMessageRequestCount;
  cResult[4] = R;
  cResult[5] = items1;
  tmp11 = items1;
  tmp10 = R;
}) : (() => {
  let ready;
  let spamMessageRequestCount;
  let stateFromStores;
  const obj = spamMessageRequestCount(stateFromStores[8]);
  spamMessageRequestCount = obj.useSpamMessageRequestCount();
  const ref = react.useRef(spamMessageRequestCount);
  const items = [SpamMessageRequestStore];
  const obj2 = spamMessageRequestCount(stateFromStores[6]);
  stateFromStores = obj2.useStateFromStores(items, () => ready.isReady());
  react = react.useRef(stateFromStores);
  const items1 = [stateFromStores, spamMessageRequestCount];
  const effect = react.useEffect(() => {
    const tmp = stateFromStores && !ref.current;
    if (tmp) {
      ref.current = true;
      ref.current = spamMessageRequestCount;
    }
  }, items1);
  const tmp5 = ref(stateFromStores[7])(ref) <= 1 && 1 === spamMessageRequestCount;
  return tmp5;
});
const result = size.fileFinishedImporting("modules/message_request/hooks/useListHasSingleMessageRequest.tsx");

export const useListHasSingleMessageRequest = tmp2;
export const useListHasSingleSpamMessageRequest = tmp3;