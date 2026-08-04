// discord_app/modules/user_profile/notes/NoteStore.tsx
import isValueEqual from "isValueEqual";
import { LibdiscoreStore } from "identity";
import { LibdiscoreBatchStoreRefactorExperiment } from "items";

let TypeTag;
let c0;
({ TypeTag, constructInPlace: c0 } = isValueEqual);
const Note = "Note";
class NoteStore extends LibdiscoreStore {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.database = applyArgumentsResult.addKVDatabase("notes");
    return applyArgumentsResult;
  }
}
const prototype = NoteStore.prototype;
prototype["getNote"] = function getNote(arg0) {
  const database = this.database;
  return database.get(arg0);
};
prototype["stateWrapper"] = function stateWrapper() {
  return this.database;
};
NoteStore.displayName = "NoteStore";
const noteStore = new NoteStore({
  LOGOUT(arg0, clear) {
    return clear.clear();
  },
  RESET_SOCKET(arg0, clear) {
    return clear.clear();
  },
  CONNECTION_OPEN(arg0, clear) {
    return clear.clear();
  },
  OVERLAY_INITIALIZE(arg0, clear) {
    return clear.clear();
  },
  USER_NOTE_UPDATE(note, set) {
    const result = set.set(note.id, callback(Note, { loading: false, note: note.note }));
  },
  USER_NOTE_LOAD_START(userId, set) {
    const result = set.set(userId.userId, callback(Note, { loading: true, note: null }));
  }
}, LibdiscoreBatchStoreRefactorExperiment.getCachedBridgedStoreMode());
let result = require("items").fileFinishedImporting("modules/user_profile/notes/NoteStore.tsx");

export default noteStore;
export const NoteRecordTypeTag = "Note";