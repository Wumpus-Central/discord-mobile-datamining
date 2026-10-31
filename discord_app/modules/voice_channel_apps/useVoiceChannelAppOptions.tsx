// discord_app/modules/voice_channel_apps/useVoiceChannelAppOptions.tsx
import AvatarUtilsDefault from "../../utils/AvatarUtils.tsx";
import ConjureUtils from "../conjure/shared/ConjureUtils.tsx";
import ConjureActionCreators from "../conjure/projects/ConjureActionCreators.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import ConjureProjectStore from "../conjure/projects/ConjureProjectStore.tsx";

const require = globalThis.__r;

require = fn;
function voiceChannelAppCandidates(memo5, result, arg2) {
  const map = new Map();
  const items = [...result];
  for (const item10020 of items) {
    let obj2 = ConjureUtils;
    if (obj2.isConjureProjectInGuild(item10020, arg2)) {
      result = map.set(item10020.application_id, item10020);
    }
    continue;
  }
  const items1 = [...map.values()];
  return items1.sort((name, name2) => {
    name = name.name;
    return name.localeCompare(name2.name);
  });
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_channel_apps/useVoiceChannelAppOptions.tsx");

export { voiceChannelAppCandidates };
export function voiceChannelAppRows(arr, arg1) {
  closure_0 = arg1;
  return arr.filter((item, index) =>
    dependencyMap(result[5]).supportsEmbeddedSurface(
      dependencyMap[index],
      dependencyMap(result[6]).EmbeddedSurfaceType.VOICE_CHANNEL,
    ),
  );
}
export function voiceChannelAppIdsToFetch(arr, arg1) {
  closure_0 = arg1;
  const found = arr.filter(
    (item, index) =>
      !dependencyMap(result[5]).supportsEmbeddedSurface(
        dependencyMap[index],
        dependencyMap(result[6]).EmbeddedSurfaceType.VOICE_CHANNEL,
      ),
  );
  return found.map((application_id) => application_id.application_id);
}
export function useVoiceChannelAppSettingOptions(guildId, application_id) {
  _require = application_id;
  closure_129_0 = guildId;
  let items = [guildId];
  const effect = getOrFetchApplication.useEffect(() => {
    ConjureActionCreators.listProjects(closure_0);
  }, items);
  const items1 = [ConjureProjectStore];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items1, () => ref.getOwnedProjects());
  closure_129_1 = stateFromStoresArray;
  let obj2 = require("initialize");
  const items2 = [ConjureProjectStore];
  const items3 = [guildId];
  const stateFromStoresArray1 = require("initialize").useStateFromStoresArray(
    items2,
    () => ConjureProjectStore.getSharedProjects(closure_0),
    items3,
  );
  closure_129_2 = stateFromStoresArray1;
  const items4 = [stateFromStoresArray, stateFromStoresArray1, guildId];
  const memo = getOrFetchApplication.useMemo(() => voiceChannelAppCandidates(memo5, result, closure_0), items4);
  closure_129_3 = memo;
  const items5 = [memo];
  const memo1 = getOrFetchApplication.useMemo(
    () => application_id.map((application_id) => application_id.application_id),
    items5,
  );
  const tmp9 = memo5(7330)(memo1, false);
  closure_129_4 = tmp9;
  let obj3 = require("initialize");
  const tmp8 = memo5;
  closure_129_5 = getOrFetchApplication.useRef(new Set());
  const set = new Set();
  const set1 = new Set();
  [closure_129_6, closure_129_7] = getOrFetchApplication.useState(new Set());
  const tmp13 = _slicedToArray(getOrFetchApplication.useState(false), 2);
  closure_129_8 = tmp13[1];
  const items6 = [memo, tmp9];
  const memo2 = getOrFetchApplication.useMemo(() => {
    dependencyMap = getOrFetchApplication;
    const found = application_id.filter(
      (item, index) =>
        !dependencyMap(result[5]).supportsEmbeddedSurface(
          dependencyMap[index],
          dependencyMap(result[6]).EmbeddedSurfaceType.VOICE_CHANNEL,
        ),
    );
    return found.map((application_id) => application_id.application_id);
  }, items6);
  closure_129_9 = memo2;
  const items7 = [memo2];
  const effect1 = getOrFetchApplication.useEffect(() => {
    const found = closure_9.filter((item) => {
      const current = ref.current;
      return !current.has(item);
    });
    if (0 !== found.length) {
      for (const item10010 of found) {
        let current = ref.current;
        let addResult = current.add(item10010);
        continue;
      }
      const applications = memo5(result[10]).fetchApplications(found, true);
      const obj = memo5(result[10]);
      applications
        .catch(() => closure_1_8(true))
        .finally(() =>
          closure_2_7((arg0) => {
            const items = [...closure_1_0];
            return new Set(items);
          }),
        );
      const catchPromise = applications.catch(() => closure_1_8(true));
    }
  }, items7);
  const items8 = [memo, tmp9];
  const memo3 = getOrFetchApplication.useMemo(() => {
    dependencyMap = getOrFetchApplication;
    return application_id.filter((item, index) =>
      dependencyMap(result[5]).supportsEmbeddedSurface(
        dependencyMap[index],
        dependencyMap(result[6]).EmbeddedSurfaceType.VOICE_CHANNEL,
      ),
    );
  }, items8);
  closure_129_10 = memo3;
  const tmp12 = _slicedToArray(getOrFetchApplication.useState(new Set()), 2);
  const items9 = [ConjureProjectStore];
  const items10 = [guildId];
  const stateFromStores = require("initialize").useStateFromStores(
    items9,
    () => ConjureProjectStore.getGuildProjectsFetchState(closure_0),
    items10,
  );
  let str = "unattempted";
  if ("unattempted" !== stateFromStores) {
    if ("loading" === stateFromStores) {
      let str3 = "pending";
    } else {
      str3 = "settled";
    }
    str = str3;
  }
  let obj4 = require("initialize");
  let obj5 = { hasRows: memo3.length > 0, loadFailed: null, fetchPhase: null };
  let first = "error" === stateFromStores;
  if (!first) {
    first = tmp13[0];
  }
  obj5.loadFailed = first;
  obj5.fetchPhase = str;
  const result = require("voiceChannelAppListState").voiceChannelAppListState(obj5);
  const items11 = [memo3];
  const memo4 = obj.useMemo(
    () =>
      closure_1_10.map((preview_application_id) => {
        application_id = preview_application_id.preview_application_id;
        if (application_id == null) {
          application_id = preview_application_id.application_id;
        }
        return application_id;
      }),
    items11,
  );
  const tmp21 = tmp8(7330)(memo4);
  closure_129_11 = tmp21;
  const items12 = [memo3, tmp21];
  memo5 = obj.useMemo(
    () =>
      closure_1_10.map((application_id, index) => {
        application_id = application_id.application_id;
        const obj = { applicationId: application_id, name: application_id.name, iconApplication: null, iconURL: null };
        let tmp2 = tmp;
        if (dependencyMap[index] == null) {
          const obj2 = { id: application_id, icon: null };
          tmp2 = obj2;
        }
        obj.iconApplication = tmp2;
        let icon;
        if (dependencyMap[index] != null) {
          icon = tmp.icon;
        }
        let tmp4 = null;
        if (null != icon) {
          ({ id: obj4.id, icon: obj4.icon } = tmp);
          let applicationIconURL = memo5(result[3]).getApplicationIconURL({ id: null, icon: null, size: 24 });
          if (applicationIconURL == null) {
            applicationIconURL = null;
          }
          tmp4 = applicationIconURL;
          const obj3 = memo5(result[3]);
          const obj6 = { id: null, icon: null, size: 24 };
        }
        obj.iconURL = tmp4;
        return obj;
      }),
    items12,
  );
  dependencyMap = result;
  let tmp22 = null;
  if (null != application_id) {
    tmp22 = null;
    if (!memo5.some((applicationId) => applicationId.applicationId === closure_0)) {
      tmp22 = application_id;
    }
  }
  _slicedToArray = tmp22;
  const tmp2Result = require("voiceChannelAppListState");
  getOrFetchApplication = require("useGetOrFetchApplications").useGetOrFetchApplication(tmp22);
  const items13 = [memo5, result, tmp22, getOrFetchApplication];
  return getOrFetchApplication.useMemo(() => {
    if (null != application_id) {
      if (null != getOrFetchApplication) {
        const obj4 = {
          applicationId: application_id,
          name: getOrFetchApplication.name,
          iconApplication: null,
          iconURL: null,
        };
        let tmp2 = getOrFetchApplication;
        if (getOrFetchApplication == null) {
          const obj = { id: application_id, icon: null };
          tmp2 = obj;
        }
        obj4.iconApplication = tmp2;
        let icon;
        if (getOrFetchApplication != null) {
          icon = getOrFetchApplication.icon;
        }
        let tmp4 = null;
        if (null != icon) {
          ({ id: obj3.id, icon: obj3.icon } = getOrFetchApplication);
          let applicationIconURL = AvatarUtilsDefault.getApplicationIconURL({ id: null, icon: null, size: 24 });
          if (applicationIconURL == null) {
            applicationIconURL = null;
          }
          tmp4 = applicationIconURL;
          const obj5 = { id: null, icon: null, size: 24 };
        }
        let obj6 = { options: null, listState: "rows" };
        obj4.iconURL = tmp4;
        const items = [obj4];
        HermesBuiltin.arraySpread(memo5, 1);
        obj6.options = items;
      }
      return obj6;
    }
    obj6 = { options: memo5, listState: result };
    const obj10 = { options: memo5, listState: result };
  }, items13);
}
