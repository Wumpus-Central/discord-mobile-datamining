// discord_app/actions/NoteActionCreators.tsx
import Constants from "../Constants.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import size from "../../_runtime/metro/00002__.js";

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("actions/NoteActionCreators.tsx");

export default {
  updateNote(arg0, note) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.NOTE(arg0), body: { note }, oldFormErrors: true, rejectWithError: true };
    return HTTP.put(request);
  },
};
