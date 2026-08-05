// discord_app/actions/NoteActionCreators.tsx
import { Endpoints } from "ME";

const result = require("set").fileFinishedImporting("actions/NoteActionCreators.tsx");

export default {
  updateNote(closure_0, closure_5) {
    const HTTP = require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx") /* sendRequest */.HTTP;
    obj = { url: Endpoints.NOTE(closure_0), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { note: closure_5 };
    return HTTP.put(obj);
  }
};