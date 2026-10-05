// discord_app/actions/NoteActionCreators.tsx
import Constants from "../Constants.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import size from "../../_runtime/metro/00002__.js";

const Endpoints = Constants.Endpoints;
let obj = {
  updateNote(id, note) {
    let obj;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.NOTE(id), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { note };
    return HTTP.put(request);
  },
};
const result = size.fileFinishedImporting("actions/NoteActionCreators.tsx");

export default obj;
