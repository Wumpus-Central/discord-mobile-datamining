// === Module 13053: NoteStore ===

// Module 13053 (NoteStore)
import LibdiscoreStore2 from "LibdiscoreStore" /* 1980 */;
import libdiscoreExperiments from "libdiscoreExperiments" /* 1983 */;
import PlainRecord from "PlainRecord" /* 1972 */;
import size from "module_2" /* 2 */;

({ TypeTag, constructInPlace: closure_0 } = PlainRecord);
const LibdiscoreStore = LibdiscoreStore2.LibdiscoreStore;
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
const LibdiscoreBatchStoreRefactorExperiment = libdiscoreExperiments.LibdiscoreBatchStoreRefactorExperiment;
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
    const result = set.set(note.id, React(Note, { loading: false, note: note.note }));
  },
  USER_NOTE_LOAD_START(userId, set) {
    const result = set.set(userId.userId, React(Note, { loading: true, note: null }));
  }
}, LibdiscoreBatchStoreRefactorExperiment.getCachedBridgedStoreMode());
let result = size.fileFinishedImporting("modules/user_profile/notes/NoteStore.tsx");

export default noteStore;
export const NoteRecordTypeTag = "Note";