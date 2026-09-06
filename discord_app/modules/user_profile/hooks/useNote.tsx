// discord_app/modules/user_profile/hooks/useNote.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import NoteStore from "../notes/NoteStore.tsx";

const require = fn;
let closure_7 = async function _fetchNote(userId) {
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0, value) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            closure_129_0 = userId;
            let body;
            const obj1 = { type: "USER_NOTE_LOAD_START", userId };
            DispatcherDefault.dispatch(obj1);
            c4 = 1;
            const HTTP = require("HTTPUtils").HTTP;
            const obj2 = { url: Endpoints.NOTE(userId), oldFormErrors: true, rejectWithError: true };
            c5 = 2;
            c6 = 1;
            let obj3 = { value: HTTP.get(obj2), done: false };
            return obj3;
          }
        } else {
          if (1 === tmp7) {
            c4 = 0;
            obj3 = closure_130_1(closure_130_2[5]);
            const obj4 = { type: "USER_NOTE_UPDATE", id: closure_129_0 };
            obj3.dispatch(obj4);
            c6 = 3;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            body = value.body;
            if (body.note_user_id === closure_129_0) {
              obj = closure_130_1(closure_130_2[5]);
              const obj6 = { type: "USER_NOTE_UPDATE", id: closure_129_0, note: body.note };
              obj.dispatch(obj6);
              c4 = 0;
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
}
