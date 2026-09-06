// === Module 16812: RegionActionCreators ===

// Module 16812 (RegionActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("actions/RegionActionCreators.tsx");

export default {
  fetchRegions(id) {
    _require = id;
    const HTTP = require("HTTPUtils").HTTP;
    value = HTTP.get({ url: Endpoints.REGIONS(id), retries: 1, oldFormErrors: true, rejectWithError: true });
    value.then((body) => {
      const obj = { type: "LOAD_REGIONS", regions: body.body, guildId };
      return obj.dispatch(obj);
    }, () => {
      const obj = { type: "LOAD_REGIONS", regions: [], guildId };
      return obj.dispatch(obj);
    });
  },
  changeCallRegion(id, region) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.CALL(id), body: { region }, oldFormErrors: true, rejectWithError: true };
    HTTP.patch(request);
  }
};