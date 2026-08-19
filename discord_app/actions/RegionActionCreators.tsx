// discord_app/actions/RegionActionCreators.tsx
import obj132 from "../../_runtime/00002_obj132.js";
import sendRequest from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import ME from "../Constants.tsx";
import dispatcherDefault from "../Dispatcher.tsx";

const Endpoints = ME.Endpoints;
const result = obj132.fileFinishedImporting("actions/RegionActionCreators.tsx");

export default {
  fetchRegions(id) {
    const _require = id;
    const HTTP = require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx").HTTP;
    const value = HTTP.get({ url: Endpoints.REGIONS(id), retries: 1, oldFormErrors: true, rejectWithError: true });
    value.then((result) => {
      const obj = { type: "LOAD_REGIONS", regions: result.body, guildId: closure_0 };
      return obj.dispatch(obj);
    }, () => {
      const obj = { type: "LOAD_REGIONS", regions: [], guildId: closure_0 };
      return obj.dispatch(obj);
    });
  },
  changeCallRegion(id, region) {
    const HTTP = sendRequest.HTTP;
    { url: Endpoints.CALL(id), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { region };
    HTTP.patch(obj);
  }
};