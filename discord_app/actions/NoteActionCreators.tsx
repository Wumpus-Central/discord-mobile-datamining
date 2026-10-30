// === Module 14871: NoteActionCreators ===

// Module 14871 (NoteActionCreators)
import Constants from "Constants" /* 1072 */;
import HTTPUtils from "HTTPUtils" /* 1283 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("actions/NoteActionCreators.tsx");

export default {
  updateNote(userId, note) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.NOTE(userId), body: { note }, oldFormErrors: true, rejectWithError: true };
    return HTTP.put(request);
  }
};