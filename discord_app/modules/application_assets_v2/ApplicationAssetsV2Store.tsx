// discord_app/modules/application_assets_v2/ApplicationAssetsV2Store.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";

const require = fn;
function handleFeaturedOrDeveloperFetchSuccess(configs) {
  const values = Object.values(configs.configs);
  _require = false;
  const flatResult = values.flat();
  const entries = Object.entries(
    require("../../../_runtime/metro/00012__.js").groupBy(
      flatResult,
      (application_id) => application_id.application_id,
    ),
  );
  const mapped = entries.map((item) => {
    [tmp, obj] = item;
    const items = [
      tmp,
      obj
        .flatMap((resolved_assets) => {
          resolved_assets = resolved_assets.resolved_assets;
          if (resolved_assets == null) {
            resolved_assets = [];
          }
          return resolved_assets;
        })
        .filter((updated_at) => {
          value = map.get(closure_1_0);
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
        }),
    ];
    return items;
  });
  const found = mapped.filter((item) => {
    [, arr] = item;
    return arr.length > 0;
  });
  const item = found.forEach((item) => {
    [tmp, arr] = item;
    c0 = true;
    const merged = Object.assign(map.get(tmp));
    const merged1 = Object.assign(
      Object.fromEntries(
        arr.map((key) => {
          const items = [key.key, key];
          return items;
        }),
      ),
    );
    return map.set(tmp, {});
  });
  return _require;
}
const map = new Map();
const Store = initializeDefault.Store;
class ApplicationAssetsV2Store extends Store {}
ApplicationAssetsV2Store.prototype["getAssets"] = function getAssets(arg0) {
  return map.get(arg0);
};
ApplicationAssetsV2Store.displayName = "ApplicationAssetsV2Store";
const applicationAssetsV2Store = new ApplicationAssetsV2Store(DispatcherDefault, {
  LOGOUT: function handleLogout() {
    map.clear();
  },
  APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS: function handleFetchSuccess(configs) {
    _require = false;
    const entries = Object.entries(
      require("../../../_runtime/metro/00012__.js").groupBy(
        configs.configs,
        (application_id) => application_id.application_id,
      ),
    );
    const mapped = entries.map((item) => {
      [tmp, obj] = item;
      const items = [
        tmp,
        obj
          .flatMap((resolved_assets) => {
            resolved_assets = resolved_assets.resolved_assets;
            if (resolved_assets == null) {
              resolved_assets = [];
            }
            return resolved_assets;
          })
          .filter((updated_at) => {
            value = map.get(closure_1_0);
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
          }),
      ];
      return items;
    });
    const found = mapped.filter((item) => {
      [, arr] = item;
      return arr.length > 0;
    });
    const item = found.forEach((item) => {
      [tmp, arr] = item;
      c0 = true;
      const merged = Object.assign(map.get(tmp));
      const merged1 = Object.assign(
        Object.fromEntries(
          arr.map((key) => {
            const items = [key.key, key];
            return items;
          }),
        ),
      );
      return map.set(tmp, {});
    });
    return _require;
  },
  APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS: handleFeaturedOrDeveloperFetchSuccess,
  APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS: handleFeaturedOrDeveloperFetchSuccess,
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_assets_v2/ApplicationAssetsV2Store.tsx");

export default applicationAssetsV2Store;
