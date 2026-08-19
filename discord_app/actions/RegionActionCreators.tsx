// === Module 16031: ? ===

// Module 16031
import obj132 from "obj132" /* 2 */;
import sendRequest from "sendRequest" /* 530 */;
import ME from "ME" /* 676 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const Endpoints = ME.Endpoints;
const result = obj132.fileFinishedImporting("actions/RegionActionCreators.tsx");

export default {
  fetchRegions(id) {
    const _require = id;
    const HTTP = _require(530).HTTP;
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