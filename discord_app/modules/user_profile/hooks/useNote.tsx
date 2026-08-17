// discord_app/modules/user_profile/hooks/useNote.tsx
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "getNote" /* 12160 */;
import { Endpoints } from "ME" /* 676 */;
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
function _fetchNote() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0, body) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw body;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              dependencyMap = tmp3;
              body = tmp7;
              body = undefined;
              obj1 = { type: "USER_NOTE_LOAD_START", userId: null };
              obj1[1] = callback;
              closure_1_1(closure_1_2[5]).dispatch(obj1);
              c4 = 1;
              const HTTP = callback(closure_1_2[6]).HTTP;
              const obj2 = { url: null, oldFormErrors: true, rejectWithError: true };
              obj2[0] = c6.NOTE(callback);
              c5 = 2;
              c6 = 1;
              let obj3 = { value: null, done: false };
              obj3[0] = HTTP.get(obj2);
              return obj3;
            }
          } else {
            if (1 === tmp7) {
              c4 = 0;
              obj3 = body(709);
              const obj4 = { type: "USER_NOTE_UPDATE", id: null };
              obj4[1] = callback;
              obj3.dispatch(obj4);
              c6 = 3;
            } else if (arg0 === 1) {
              c6 = 3;
              throw body;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj5 = { value: null, done: true };
              obj5[0] = body;
              return obj5;
            } else {
              body = body.body;
              if (body.note_user_id === callback) {
                obj = body(709);
                const obj6 = { type: "USER_NOTE_UPDATE", id: null, note: null };
                obj6[1] = callback;
                obj6[2] = body.note;
                obj.dispatch(obj6);
                c4 = 0;
              }
            }
            const _Error = Error;
            error = new Error("Invalid response from server");
            throw error;
          }
        } catch (tmp26) {
          closure_3 = tmp26;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp26;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  closure_7 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("modules/user_profile/hooks/useNote.tsx");

export default function useNote(arg0) {
  const _require = arg0;
  const items = [closure_5];
  let stateFromStores = _initialize.useStateFromStores(items, () => closure_1_5.getNote(closure_0));
  const items1 = [stateFromStores, arg0];
  const effect = React.useEffect(() => {
    if (null == stateFromStores) {
      (function fetchNote(closure_0) {
        const self = this;
        const apply = closure_7.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(closure_0);
    }
  }, items1);
  if (stateFromStores == null) {
    stateFromStores = { loading: true, note: null };
  }
  return stateFromStores;
};