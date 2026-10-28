// === Module 14602: NoteActionCreators ===

// Module 14602 (NoteActionCreators)
import Constants from "Constants" /* 1084 */;
import HTTPUtils from "HTTPUtils" /* 1294 */;
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