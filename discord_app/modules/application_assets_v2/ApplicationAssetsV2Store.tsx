// discord_app/modules/application_assets_v2/ApplicationAssetsV2Store.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, resolved_assets, set;

const f98489 = (application_id) => application_id.application_id;
function handleFeaturedOrDeveloperFetchSuccess(configs) {
  let c0;
  const values = Object.values(configs.configs);
  _require = false;
  const flatResult = values.flat();
  const obj2 = require("../../../_runtime/metro/00012__.js");
  const entries1 = entries(obj2.groupBy(flatResult, f98489));
  const mapped = entries1.map((item) => {
    let obj;
    let tmp;
    [tmp, obj] = item;
    const items = [tmp];
    const flatMapResult = obj.flatMap((resolved_assets) => {
      resolved_assets = resolved_assets.resolved_assets;
      if (resolved_assets == null) {
        resolved_assets = [];
      }
      return resolved_assets;
    });
    items[1] = flatMapResult.filter(function (updated_at) {
      const value = map.get(closure_1_0);
      let tmp2;
      if (value != null) {
        tmp2 = value[updated_at.key];
      }
      let tmp3 = null == tmp2;
      if (!tmp3) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        const _Date2 = Date;
        const self3 = this;
        const self4 = this;
        const date = new Date(updated_at.updated_at);
        tmp3 = date > new Date(tmp2.updated_at);
        const date1 = new Date(tmp2.updated_at);
      }
      return tmp3;
    });
    return items;
  });
  const found = mapped.filter((item) => {
    let arr;
    [, arr] = item;
    return arr.length > 0;
  });
  const item = found.forEach((item) => {
    let arr;
    let tmp;
    [tmp, arr] = item;
    c0 = true;
    const obj = {};
    set = map.set;
    const merged = Object.assign(map.get(tmp));
    const merged1 = Object.assign(
      Object.fromEntries(
        arr.map((key) => {
          const items = [key.key, key];
          return items;
        }),
      ),
    );
    return set(tmp, obj);
  });
  return _require;
}
const map = new Map();
const Store = get_initializedDefault.Store;
class ApplicationAssetsV2Store extends Store {
  getAssets(arg0) {
    return map.get(arg0);
  }
}
const prototype = ApplicationAssetsV2Store.prototype;
ApplicationAssetsV2Store.displayName = "ApplicationAssetsV2Store";
let obj = {
  LOGOUT: function handleLogout() {
    map.clear();
  },
  APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS: function handleFetchSuccess(configs) {
    _require = false;
    configs = configs.configs;
    let obj = require("../../../_runtime/metro/00012__.js");
    const entries1 = entries(obj.groupBy(configs, f98489));
    const mapped = entries1.map((item) => {
      let obj;
      let tmp;
      [tmp, obj] = item;
      const items = [tmp];
      const flatMapResult = obj.flatMap((resolved_assets) => {
        resolved_assets = resolved_assets.resolved_assets;
        if (resolved_assets == null) {
          resolved_assets = [];
        }
        return resolved_assets;
      });
      items[1] = flatMapResult.filter(function (updated_at) {
        const value = map.get(closure_1_0);
        let tmp2;
        if (value != null) {
          tmp2 = value[updated_at.key];
        }
        let tmp3 = null == tmp2;
        if (!tmp3) {
          const _Date = Date;
          const self = this;
          const self2 = this;
          const _Date2 = Date;
          const self3 = this;
          const self4 = this;
          const date = new Date(updated_at.updated_at);
          tmp3 = date > new Date(tmp2.updated_at);
          const date1 = new Date(tmp2.updated_at);
        }
        return tmp3;
      });
      return items;
    });
    const found = mapped.filter((item) => {
      let arr;
      [, arr] = item;
      return arr.length > 0;
    });
    const item = found.forEach((item) => {
      let arr;
      let tmp;
      [tmp, arr] = item;
      c0 = true;
      const obj = {};
      set = map.set;
      const merged = Object.assign(map.get(tmp));
      const merged1 = Object.assign(
        Object.fromEntries(
          arr.map((key) => {
            const items = [key.key, key];
            return items;
          }),
        ),
      );
      return set(tmp, obj);
    });
    return _require;
  },
  APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS: handleFeaturedOrDeveloperFetchSuccess,
  APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS: handleFeaturedOrDeveloperFetchSuccess,
};
const applicationAssetsV2Store = new ApplicationAssetsV2Store(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/application_assets_v2/ApplicationAssetsV2Store.tsx");

export default applicationAssetsV2Store;
