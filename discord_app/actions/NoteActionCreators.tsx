// discord_app/actions/NoteActionCreators.tsx
import obj132 from "../../_runtime/00002_obj132.js";
import sendRequest from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import ME from "../Constants.tsx";

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