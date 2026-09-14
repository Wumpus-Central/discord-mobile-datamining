// discord_app/actions/RegionActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import Constants from "../Constants.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import size from "../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("actions/RegionActionCreators.tsx");

export default {
  fetchRegions(id) {
    _require = id;
    const HTTP = require("HTTPUtils").HTTP;
    value = HTTP.get({ url: Endpoints.REGIONS(id), retries: 1, oldFormErrors: true, rejectWithError: true });
    value.then(
      (body) => DispatcherDefault.dispatch({ type: "LOAD_REGIONS", regions: body.body, guildId }),
      () => DispatcherDefault.dispatch({ type: "LOAD_REGIONS", regions: [], guildId }),
    );
  },
  changeCallRegion(id, region) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.CALL(id), body: { region }, oldFormErrors: true, rejectWithError: true };
    HTTP.patch(request);
  },
};
