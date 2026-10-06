// === Module 11299: usePollMessageContextItemTypes ===

// Module 11299 (usePollMessageContextItemTypes)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let poll;

const PollMessageContextItemTypes = { END_EARLY: 0, [0]: "END_EARLY" };
let closure_4 = [];
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((poll) => {
  let id;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    const fn = function u() {
      return id.getId();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  poll = poll.poll;
  if (poll.isPoll()) {
    if (null != poll) {
      if (cResult[2] === poll.author) {
        if (cResult[3] === stateFromStores) {
          let tmp9;
          if (cResult[4] === poll.expiry) {
            tmp9 = cResult[5];
          }
          return tmp9;
        }
      }
      const expiry = poll.expiry;
      const _Date = Date;
      const items1 = [];
      const tmp11 = !expiry.isSameOrBefore(Date.now()) && poll.author.id === stateFromStores;
      if (tmp11) {
        items1.push(obj.END_EARLY);
      }
      cResult[2] = poll.author;
      cResult[3] = stateFromStores;
      cResult[4] = poll.expiry;
      cResult[5] = items1;
      tmp9 = items1;
    }
  }
  return closure_4;
}) : ((poll) => {
  let id;
  const obj = get_initialized;
  const items = [AuthenticationStore];
  poll = poll.poll;
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  if (poll.isPoll()) {
    if (null != poll) {
      const expiry = poll.expiry;
      const _Date = Date;
      const items1 = [];
      const tmp5 = !expiry.isSameOrBefore(Date.now()) && poll.author.id === stateFromStores;
      if (tmp5) {
        items1.push(obj.END_EARLY);
      }
      return items1;
    }
  }
  return closure_4;
});
const result = size.fileFinishedImporting("modules/polls/chat/usePollMessageContextItemTypes.tsx");

export default tmp2;
export { PollMessageContextItemTypes };