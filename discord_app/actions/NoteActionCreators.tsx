// === Module 13059: ? ===

// Module 13059
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import sendRequest from "sendRequest" /* 1272 */;

const Endpoints = ME.Endpoints;
const result = set.fileFinishedImporting("actions/NoteActionCreators.tsx");

export default {
  updateNote(closure_0, closure_6) {
    const HTTP = sendRequest.HTTP;
    obj = { url: Endpoints.NOTE(closure_0), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { note: closure_6 };
    return HTTP.put(obj);
  }
};