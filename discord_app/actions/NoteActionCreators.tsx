// discord_app/actions/NoteActionCreators.tsx
import set from "../../_runtime/00002_set.js";
import ME from "../Constants.tsx";
import sendRequest from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";

const Endpoints = ME.Endpoints;
const result = set.fileFinishedImporting("actions/NoteActionCreators.tsx");

export default {
  updateNote(closure_0, closure_6) {
    const HTTP = sendRequest.HTTP;
    obj = { url: Endpoints.NOTE(closure_0), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { note: closure_6 };
    return HTTP.put(obj);
  },
};
