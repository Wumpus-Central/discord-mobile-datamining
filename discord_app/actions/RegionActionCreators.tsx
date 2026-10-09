// === Module 17440: RegionActionCreators ===

// Module 17440 (RegionActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1295 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("actions/RegionActionCreators.tsx");

export default {
  fetchRegions(id) {
    _require = id;
    const HTTP = require("HTTPUtils").HTTP;
    value = HTTP.get({ url: Endpoints.REGIONS(id), retries: 1, oldFormErrors: true, rejectWithError: true });
    value.then((body) => DispatcherDefault.dispatch({ type: "LOAD_REGIONS", regions: body.body, guildId }), () => DispatcherDefault.dispatch({ type: "LOAD_REGIONS", regions: [], guildId }));
  },
  changeCallRegion(id, region) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.CALL(id), body: { region }, oldFormErrors: true, rejectWithError: true };
    HTTP.patch(request);
  }
};