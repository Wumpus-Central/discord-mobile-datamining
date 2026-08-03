import { Endpoints } from "ME";

const result = require("dispatcher").fileFinishedImporting("actions/RegionActionCreators.tsx");

export default {
  fetchRegions(id) {
    const _require = id;
    const HTTP = _require(530).HTTP;
    const value = HTTP.get({ url: Endpoints.REGIONS(id), retries: 1, oldFormErrors: true, rejectWithError: true });
    value.then((body) => {
      let obj = outer1_1(outer1_2[2]);
      obj = { type: "LOAD_REGIONS", regions: body.body, guildId: closure_0 };
      return obj.dispatch(obj);
    }, () => {
      let obj = outer1_1(outer1_2[2]);
      obj = { type: "LOAD_REGIONS", regions: [], guildId: closure_0 };
      return obj.dispatch(obj);
    });
  },
  changeCallRegion(id, region) {
    const HTTP = require(530) /* sendRequest */.HTTP;
    obj = { url: Endpoints.CALL(id), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { region };
    HTTP.patch(obj);
  }
};