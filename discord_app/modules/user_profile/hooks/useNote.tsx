// === Module 13199: useNote ===

// Module 13199 (useNote)
import DispatcherDefault from "Dispatcher" /* 573 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import NoteStore from "NoteStore" /* 13200 */;

const require = globalThis.__r;

const require = fn;
let closure_7 = async function _fetchNote() {
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            closure_129_0 = userId;
            let body;
            const obj5 = { type: "USER_NOTE_LOAD_START", userId };
            DispatcherDefault.dispatch(obj5);
            c4 = 1;
            const HTTP = require("HTTPUtils").HTTP;
            const obj6 = { url: Endpoints.NOTE(userId), oldFormErrors: true, rejectWithError: true };
            c5 = 2;
            c6 = 1;
            const obj7 = { value: HTTP.get(obj6), done: false };
            return obj7;
          }
        } else {
          if (1 === tmp7) {
            c4 = 0;
            const obj8 = { type: "USER_NOTE_UPDATE", id: closure_129_0 };
            closure_130_1(closure_130_2[5]).dispatch(obj8);
            c6 = 3;
            const obj4 = closure_130_1(closure_130_2[5]);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            body = value.body;
            if (body.note_user_id === closure_129_0) {
              const obj11 = { type: "USER_NOTE_UPDATE", id: closure_129_0, note: body.note };
              closure_130_1(closure_130_2[5]).dispatch(obj11);
              c4 = 0;
              const obj = closure_130_1(closure_130_2[5]);
            }
          }
          const _Error = Error;
          const error = new Error("Invalid response from server");
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
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useNote.tsx");

export default function useNote(arg0) {
  _require = arg0;
  const items = [NoteStore];
  let stateFromStores = require("initialize").useStateFromStores(items, () => NoteStore.getNote(closure_0));
  const items1 = [stateFromStores, arg0];
  const effect = noop.useEffect(() => {
    if (null == stateFromStores) {
      (function fetchNote() {
        const self = this;
        const apply = closure_1_7.apply;
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