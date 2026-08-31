// === Module 11209: usePollMessageContextItemTypes ===

// Module 11209 (usePollMessageContextItemTypes)
import initialize from "initialize" /* 589 */;
import closure_2 from "fetchFingerprint" /* 1218 */;

require = arg1;
let obj = { END_EARLY: 0, [0]: "END_EARLY" };
let closure_4 = [];
const result = require("set").fileFinishedImporting("modules/polls/chat/usePollMessageContextItemTypes.tsx");

export default function usePollMessageContextItemTypes(poll) {
  obj = initialize;
  const items = [closure_2];
  poll = poll.poll;
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  if (poll.isPoll()) {
    if (null != poll) {
      const expiry = poll.expiry;
      const _Date = Date;
      const isSameOrBeforeResult = expiry.isSameOrBefore(Date.now());
      let tmp5 = !isSameOrBeforeResult;
      if (!isSameOrBeforeResult) {
        tmp5 = poll.author.id === stateFromStores;
      }
      const items1 = [];
      if (tmp5) {
        items1.push(obj.END_EARLY);
      }
      return items1;
    }
  }
  return closure_4;
};
export const PollMessageContextItemTypes = obj;