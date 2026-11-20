// === Module 14399: NoteActionCreators ===

// Module 14399 (NoteActionCreators)
import Constants from "Constants" /* 1071 */;
import HTTPUtils from "HTTPUtils" /* 1284 */;
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