// discord_app/modules/application_assets_v2/ApplicationAssetsV2Store.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";

const require = arg1;
function handleFeaturedOrDeveloperFetchSuccess(configs) {
  const values = Object.values(configs.configs);
  const _require = false;
  const flatResult = values.flat();
  const entries = Object.entries(require("../../../_runtime/00012_apply.js").groupBy(flatResult, (application_id) => application_id.application_id));
  const mapped = entries.map((arg0) => {
    [tmp, obj] = arg0;
    const items = [
      tmp,
      obj.flatMap((resolved_assets) => {
        resolved_assets = resolved_assets.resolved_assets;
        if (resolved_assets == null) {
          resolved_assets = [];
        }
        return resolved_assets;
      }).filter((updated_at) => {
        const value = closure_1_2.get(closure_0);
        let tmp2;
        if (value != null) {
          tmp2 = value[updated_at.key];
        }
        let tmp3 = null == tmp2;
        if (!tmp3) {
          const _Date = Date;
          const date = new Date(updated_at.updated_at);
          const _Date2 = Date;
          const date1 = new Date(tmp2.updated_at);
          tmp3 = date > date1;
        }
        return tmp3;
      })
    ];
    return items;
  });
  const found = mapped.filter((arg0) => {
    [, arr] = arg0;
    return arr.length > 0;
  });
  const item = found.forEach((arg0) => {
    [tmp, arr] = arg0;
    c0 = true;
    const merged = Object.assign(closure_1_2.get(tmp));
    const merged1 = Object.assign(Object.fromEntries(arr.map((key) => {
      const items = [key.key, key];
      return items;
    })));
    return closure_1_2.set(tmp, {});
  });
  return _require;
}
const map = new Map();
const Store = initializeDefault.Store;
class ApplicationAssetsV2Store extends Store {
}
ApplicationAssetsV2Store.prototype["getAssets"] = function getAssets(arg0) {
  return map.get(arg0);
};
ApplicationAssetsV2Store.displayName = "ApplicationAssetsV2Store";
const applicationAssetsV2Store = new ApplicationAssetsV2Store(dispatcherDefault, {
  LOGOUT: function handleLogout() {
    map.clear();
  },
  APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS: function handleFetchSuccess(configs) {
    const _require = false;
    const entries = Object.entries(require("../../../_runtime/00012_apply.js").groupBy(configs.configs, (application_id) => application_id.application_id));
    const mapped = entries.map((arg0) => {
      [tmp, obj] = arg0;
      const items = [
        tmp,
        obj.flatMap((resolved_assets) => {
          resolved_assets = resolved_assets.resolved_assets;
          if (resolved_assets == null) {
            resolved_assets = [];
          }
          return resolved_assets;
        }).filter((updated_at) => {
          const value = closure_1_2.get(closure_0);
          let tmp2;
          if (value != null) {
            tmp2 = value[updated_at.key];
          }
          let tmp3 = null == tmp2;
          if (!tmp3) {
            const _Date = Date;
            const date = new Date(updated_at.updated_at);
            const _Date2 = Date;
            const date1 = new Date(tmp2.updated_at);
            tmp3 = date > date1;
          }
          return tmp3;
        })
      ];
      return items;
    });
    const found = mapped.filter((arg0) => {
      [, arr] = arg0;
      return arr.length > 0;
    });
    const item = found.forEach((arg0) => {
      [tmp, arr] = arg0;
      c0 = true;
      const merged = Object.assign(closure_1_2.get(tmp));
      const merged1 = Object.assign(Object.fromEntries(arr.map((key) => {
        const items = [key.key, key];
        return items;
      })));
      return closure_1_2.set(tmp, {});
    });
    return _require;
  },
  APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS: handleFeaturedOrDeveloperFetchSuccess,
  APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS: handleFeaturedOrDeveloperFetchSuccess
});
const result = require("set").fileFinishedImporting("modules/application_assets_v2/ApplicationAssetsV2Store.tsx");

export default applicationAssetsV2Store;