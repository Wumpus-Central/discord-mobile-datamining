// === Module 15147: NoteActionCreators ===

// Module 15147 (NoteActionCreators)
import Constants from "Constants" /* 1072 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
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