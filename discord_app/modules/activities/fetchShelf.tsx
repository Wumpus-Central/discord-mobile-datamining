// discord_app/modules/activities/fetchShelf.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import ApplicationStore from "../applications/ApplicationStore.tsx";
import ApplicationRecord from "../../records/ApplicationRecord.tsx";
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore.tsx";

const require = fn;
function handleFetchDone(arg0, fn, guildId) {
  guildId = guildId.guildId;
  let tmp = guildId === arg0;
  if (!tmp) {
    tmp = null == guildId && null == arg0;
    const tmp3 = null == guildId && null == arg0;
  }
  if (tmp) {
    fn();
  }
}
let closure_9 = async function _fetchShelf(arg0) {
  closure_5 = tmp3;
  ({ guildId: closure_132_0, force } = closure_0);
  if (force === undefined) {
    force = false;
  }
  closure_132_1 = force;
  await "Reflect";
  if (1 === tmp7) {
    if (arg0 === 1) {
      c9 = 3;
      throw value;
    } else if (arg0 === 2) {
      c9 = 3;
      return { value, done: true };
    } else {
      const shelfActivities = closure_133_6.getShelfActivities(closure_132_0);
      const mapped = shelfActivities.map((application_id) => application.getApplication(application_id.application_id));
      closure_132_3 = mapped.filter(closure_133_0(closure_133_2[5]).isNotNullish);
      if (!closure_132_1) {
        if (!closure_133_6.shouldFetchShelf(closure_132_0)) {
          const shelfFetchStatus = closure_133_6.getShelfFetchStatus(closure_132_0);
          let isFetching;
          if (shelfFetchStatus != null) {
            isFetching = shelfFetchStatus.isFetching;
          }
          if (isFetching) {
            closure_132_6 = new Promise((cache) => {
              closure_4 = c8.bind(null, closure_1_0, cache);
              const subscription = closure_1(584).subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", closure_4);
            });
            new Promise((cache) => {
              closure_4 = c8.bind(null, closure_1_0, cache);
              const subscription = closure_1(584).subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", closure_4);
            });
            closure_132_7 = new Promise((cache) => {
              closure_5 = c8.bind(null, closure_1_0, cache);
              const subscription = closure_1(584).subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", closure_5);
            });
            const items = [closure_132_6, closure_132_7];
            c8 = 3;
            c9 = 1;
            new Promise((cache) => {
              closure_5 = c8.bind(null, closure_1_0, cache);
              const subscription = closure_1(584).subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", closure_5);
            });
            return { value: Promise.race(items), done: false };
          } else {
            c9 = 3;
          }
        }
      }
      c7 = 1;
      closure_133_1(closure_133_2[6]).dispatch({ type: "EMBEDDED_ACTIVITY_FETCH_SHELF", guildId: closure_132_0 });
      let tmp82;
      if (undefined !== closure_132_0) {
        if ("" !== closure_132_0) {
          tmp82 = { guild_id: closure_132_0 };
        }
      }
      closure_132_8 = tmp82;
      closure_133_1(closure_133_2[6]);
      const request = { url: closure_133_7.ACTIVITY_SHELF, query: closure_132_8, trackedActionData: null, retries: 0, oldFormErrors: true, rejectWithError: true };
      const obj12 = { event: closure_133_0(closure_133_2[8]).NetworkActionNames.EMBEDDED_ACTIVITIES_FETCH_SHELF, properties: null };
      obj12.properties = { guild_id: closure_132_0 };
      request.trackedActionData = obj12;
      c8 = 4;
      c9 = 1;
      return { value: closure_133_1(closure_133_2[7]).get(request), done: false };
    }
  } else if (2 === tmp7) {
    c7 = 0;
    closure_133_1(closure_133_2[6]).dispatch({ type: "EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", guildId: closure_132_0 });
    c9 = 3;
    return { value: { activityConfigs: shelfActivities, applications: closure_132_3 }, done: true };
  } else if (3 === tmp7) {
    if (arg0 === 1) {
      c9 = 3;
      throw value;
    } else if (arg0 !== 2) {
      if (null != closure_132_4) {
        closure_133_1(closure_133_2[6]).unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", closure_132_4);
        closure_132_4 = undefined;
        closure_133_1(closure_133_2[6]);
      }
      if (null != closure_132_5) {
        closure_133_1(closure_133_2[6]).unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", closure_132_5);
        closure_132_5 = undefined;
        closure_133_1(closure_133_2[6]);
      }
    }
  } else if (arg0 === 1) {
    c9 = 3;
    throw value;
  } else if (arg0 === 2) {
    c7 = 0;
    c9 = 3;
    return { value, done: true };
  } else {
    closure_132_9 = value;
    const activities = closure_132_9.body.activities;
    closure_1 = activities;
    if (activities == null) {
      closure_1 = [];
    }
    closure_132_10 = closure_1;
    const applications = closure_132_9.body.applications;
    dependencyMap = applications;
    if (applications == null) {
      dependencyMap = [];
    }
    closure_132_11 = dependencyMap;
    const assets = closure_132_9.body.assets;
    closure_3 = assets;
    if (assets == null) {
      closure_3 = {};
    }
    closure_132_12 = closure_3;
    closure_133_1(closure_133_2[6]).dispatch({ type: "EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", guildId: closure_132_0, activities: closure_132_10, applications: closure_132_11, assets: closure_132_12 });
    if (closure_132_11.length > 0) {
      closure_133_1(closure_133_2[6]).dispatch({ type: "APPLICATIONS_FETCH_SUCCESS", applications: closure_132_11 });
      closure_133_1(closure_133_2[6]);
    }
    c7 = 0;
    c9 = 3;
    { activityConfigs: closure_132_10, applications: closure_132_11.map((item) => closure_5.createFromServer(item)) };
    return { value: { activityConfigs: closure_132_10, applications: closure_132_11.map((item) => closure_5.createFromServer(item)) }, done: true };
  }
  return value;
};
const Endpoints = fn(1084).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/fetchShelf.tsx");

export function fetchShelf() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}