// discord_app/actions/RegionActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import Constants from "../Constants.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import size from "../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const Endpoints = Constants.Endpoints;
let obj = {
  fetchRegions(id) {
    let guildId;
    _require = id;
    const HTTP = require("HTTPUtils").HTTP;
    let obj = { url: Endpoints.REGIONS(id), retries: 1, oldFormErrors: true, rejectWithError: true };
    const value = HTTP.get(obj);
    value.then(
      (body) => {
        const obj = DispatcherDefault;
        const obj2 = { type: "LOAD_REGIONS", regions: body.body, guildId };
        return obj.dispatch(obj2);
      },
      () => {
        const obj = DispatcherDefault;
        const obj2 = { type: "LOAD_REGIONS", regions: [], guildId };
        return obj.dispatch(obj2);
      },
    );
  },
  changeCallRegion(id, region) {
    let obj;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.CALL(id), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { region };
    HTTP.patch(request);
  },
};
const result = size.fileFinishedImporting("actions/RegionActionCreators.tsx");

export default obj;
