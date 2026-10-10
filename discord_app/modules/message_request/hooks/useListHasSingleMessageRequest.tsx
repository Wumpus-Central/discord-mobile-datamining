// === Module 17590: useListHasSingleMessageRequest ===

// Module 17590 (useListHasSingleMessageRequest)
import noop from "module_19" /* 19 */;
import MessageRequestStore from "MessageRequestStore" /* 6055 */;
import SpamMessageRequestStore from "SpamMessageRequestStore" /* 6056 */;

const require = fn;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useListHasSingleMessageRequest() {
  const cResult = messageRequestsCount(stateFromStores[4]).c(6);
  const obj = messageRequestsCount(stateFromStores[4]);
  let tmp = messageRequestsCount;
  messageRequestsCount = messageRequestsCount(stateFromStores[5]).useMessageRequestsCount();
  const ref = noop.useRef(messageRequestsCount);
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
  const obj2 = messageRequestsCount(stateFromStores[5]);
  stateFromStores = tmp(stateFromStores[6]).useStateFromStores(tmp6, tmp7);
  noop = obj3.useRef(stateFromStores);
  if (cResult[2] === stateFromStores) {
    if (cResult[3] === messageRequestsCount) {
      let tmp10 = cResult[4];
      let tmp11 = cResult[5];
    }
    const effect = obj3.useEffect(tmp10, tmp11);
    return ref(tmp2[7])(ref) <= 1 && 1 === messageRequestsCount;
  }
  class R {
    constructor() {
      tmp = closure_2;
      if (closure_2) {
        tmp2 = closure_3;
        tmp = !closure_3.current;
      }
      if (tmp) {
        tmp3 = closure_3;
        flag = true;
        closure_3.current = true;
        tmp4 = closure_1;
        tmp5 = closure_0;
        closure_1.current = closure_0;
      }
      return;
    }
  }
  const items1 = [stateFromStores, messageRequestsCount];
  cResult[2] = stateFromStores;
  cResult[3] = messageRequestsCount;
  cResult[4] = R;
  cResult[5] = items1;
  tmp11 = items1;
  tmp10 = R;
  const tmpResult = tmp(stateFromStores[6]);
}) : (function useListHasSingleMessageRequest() {
  messageRequestsCount = messageRequestsCount(stateFromStores[5]).useMessageRequestsCount();
  const ref = noop.useRef(messageRequestsCount);
  const obj = messageRequestsCount(stateFromStores[5]);
  const items = [MessageRequestStore];
  stateFromStores = messageRequestsCount(stateFromStores[6]).useStateFromStores(items, () => ready.isReady());
  noop = noop.useRef(stateFromStores);
  const items1 = [stateFromStores, messageRequestsCount];
  const effect = noop.useEffect(() => {
    let tmp = stateFromStores;
    if (stateFromStores) {
      tmp = !ref.current;
    }
    if (tmp) {
      ref.current = true;
      ref.current = messageRequestsCount;
    }
  }, items1);
  const obj2 = messageRequestsCount(stateFromStores[6]);
  return ref(stateFromStores[7])(ref) <= 1 && 1 === messageRequestsCount;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/hooks/useListHasSingleMessageRequest.tsx");

export const useListHasSingleMessageRequest = tmp2;
export const useListHasSingleSpamMessageRequest = ReactCompilerGating.isReactCompilerEnabled() ? (function useListHasSingleSpamMessageRequest() {
  const cResult = spamMessageRequestCount(stateFromStores[4]).c(6);
  const obj = spamMessageRequestCount(stateFromStores[4]);
  let tmp = spamMessageRequestCount;
  spamMessageRequestCount = spamMessageRequestCount(stateFromStores[8]).useSpamMessageRequestCount();
  const ref = noop.useRef(spamMessageRequestCount);
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
  const obj2 = spamMessageRequestCount(stateFromStores[8]);
  stateFromStores = tmp(stateFromStores[6]).useStateFromStores(tmp6, tmp7);
  noop = obj3.useRef(stateFromStores);
  if (cResult[2] === stateFromStores) {
    if (cResult[3] === spamMessageRequestCount) {
      let tmp10 = cResult[4];
      let tmp11 = cResult[5];
    }
    const effect = obj3.useEffect(tmp10, tmp11);
    return ref(tmp2[7])(ref) <= 1 && 1 === spamMessageRequestCount;
  }
  class R {
    constructor() {
      tmp = closure_2;
      if (closure_2) {
        tmp2 = closure_3;
        tmp = !closure_3.current;
      }
      if (tmp) {
        tmp3 = closure_3;
        flag = true;
        closure_3.current = true;
        tmp4 = closure_1;
        tmp5 = closure_0;
        closure_1.current = closure_0;
      }
      return;
    }
  }
  const items1 = [stateFromStores, spamMessageRequestCount];
  cResult[2] = stateFromStores;
  cResult[3] = spamMessageRequestCount;
  cResult[4] = R;
  cResult[5] = items1;
  tmp11 = items1;
  tmp10 = R;
  const tmpResult = tmp(stateFromStores[6]);
}) : (function useListHasSingleSpamMessageRequest() {
  spamMessageRequestCount = spamMessageRequestCount(stateFromStores[8]).useSpamMessageRequestCount();
  const ref = noop.useRef(spamMessageRequestCount);
  const obj = spamMessageRequestCount(stateFromStores[8]);
  const items = [SpamMessageRequestStore];
  stateFromStores = spamMessageRequestCount(stateFromStores[6]).useStateFromStores(items, () => ready.isReady());
  noop = noop.useRef(stateFromStores);
  const items1 = [stateFromStores, spamMessageRequestCount];
  const effect = noop.useEffect(() => {
    let tmp = stateFromStores;
    if (stateFromStores) {
      tmp = !ref.current;
    }
    if (tmp) {
      ref.current = true;
      ref.current = spamMessageRequestCount;
    }
  }, items1);
  const obj2 = spamMessageRequestCount(stateFromStores[6]);
  return ref(stateFromStores[7])(ref) <= 1 && 1 === spamMessageRequestCount;
});