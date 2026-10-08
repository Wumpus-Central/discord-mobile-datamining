// discord_app/modules/polls/chat/usePollMessageContextItemTypes.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

require = fn;
const PollMessageContextItemTypes = { END_EARLY: 0, [0]: "END_EARLY" };
let closure_4 = [];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/polls/chat/usePollMessageContextItemTypes.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function usePollMessageContextItemTypes(poll) {
      const obj = c;
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
      const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
      poll = poll.poll;
      if (poll.isPoll()) {
        if (null != poll) {
          if (cResult[2] === poll.author) {
            if (cResult[3] === stateFromStores) {
              if (cResult[4] === poll.expiry) {
                let tmp9 = cResult[5];
              }
              return tmp9;
            }
          }
          const expiry = poll.expiry;
          const _Date = Date;
          const isSameOrBeforeResult = expiry.isSameOrBefore(Date.now());
          let tmp11 = !isSameOrBeforeResult;
          if (!isSameOrBeforeResult) {
            tmp11 = poll.author.id === stateFromStores;
          }
          const items1 = [];
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
    }
  : function usePollMessageContextItemTypes(poll) {
      const obj = initialize;
      const items = [AuthenticationStore];
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
export { PollMessageContextItemTypes };
