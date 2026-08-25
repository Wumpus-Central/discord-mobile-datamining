// === Module 12541: ? ===

// Module 12541
import set from "set" /* 2 */;
import sendRequest from "sendRequest" /* 530 */;
import ME from "ME" /* 676 */;

const Endpoints = ME.Endpoints;
const result = set.fileFinishedImporting("actions/NoteActionCreators.tsx");

export default {
  updateNote(closure_0, closure_5) {
    const HTTP = sendRequest.HTTP;
    obj = { url: Endpoints.NOTE(closure_0), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { note: closure_5 };
    return HTTP.put(obj);
  }
};