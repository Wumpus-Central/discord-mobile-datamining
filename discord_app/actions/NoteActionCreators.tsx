// === Module 12168: ? ===

// Module 12168
import obj132 from "obj132" /* 2 */;
import sendRequest from "sendRequest" /* 530 */;
import ME from "ME" /* 676 */;

const Endpoints = ME.Endpoints;
const result = obj132.fileFinishedImporting("actions/NoteActionCreators.tsx");

export default {
  updateNote(closure_0, closure_5) {
    const HTTP = sendRequest.HTTP;
    { url: Endpoints.NOTE(closure_0), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { note: closure_5 };
    return HTTP.put(obj);
  }
};