// === Module 10848: fetchShelf ===

// Module 10848 (fetchShelf)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 5440 */;
import ApplicationRecord from "ApplicationRecord" /* 2022 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2064 */;

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
  if (c9 === 2) {
    c9 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "+51" };
    }
  } else {
    try {
      c9 = 2;
      if (0 === c8) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_5 = tmp3;
          const application = tmp7;
          closure_132_0 = undefined;
          closure_132_1 = undefined;
          ({ guildId: closure_132_0, force } = closure_0);
          if (force === undefined) {
            force = false;
          }
          closure_132_1 = force;
          let shelfActivities;
          closure_132_3 = undefined;
          closure_132_4 = undefined;
          closure_132_5 = undefined;
          closure_132_6 = undefined;
          closure_132_7 = undefined;
          closure_132_8 = undefined;
          closure_132_9 = undefined;
          closure_132_10 = undefined;
          closure_132_11 = undefined;
          closure_132_12 = undefined;
          c8 = 1;
          c9 = 1;
          return { value: "Set", done: true };
        }
      } else {
        if (1 === tmp7) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            shelfActivities = closure_133_6.getShelfActivities(closure_132_0);
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
                  const promise = new Promise((cache) => {
                    closure_4 = c8.bind(null, closure_1_0, cache);
                    const subscription = closure_1(584).subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", closure_4);
                  });
                  closure_132_6 = promise;
                  const promise2 = new Promise((cache) => {
                    closure_5 = c8.bind(null, closure_1_0, cache);
                    const subscription = closure_1(584).subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", closure_5);
                  });
                  closure_132_7 = promise2;
                  const items = [closure_132_6, closure_132_7];
                  c8 = 3;
                  c9 = 1;
                  const obj6 = { value: Promise.race(items), done: false };
                  return obj6;
                } else {
                  const obj7 = { activityConfigs: shelfActivities, applications: closure_132_3 };
                  c9 = 3;
                }
              }
            }
            c7 = 1;
            const obj9 = { type: "EMBEDDED_ACTIVITY_FETCH_SHELF", guildId: closure_132_0 };
            closure_133_1(closure_133_2[6]).dispatch(obj9);
            let tmp82;
            if (undefined !== closure_132_0) {
              if ("" !== closure_132_0) {
                const obj11 = { guild_id: closure_132_0 };
                tmp82 = obj11;
              }
            }
            closure_132_8 = tmp82;
            const obj16 = closure_133_1(closure_133_2[6]);
            const request = { url: closure_133_7.ACTIVITY_SHELF, query: closure_132_8, trackedActionData: null, retries: 0, oldFormErrors: true, rejectWithError: true };
            const obj12 = { event: closure_133_0(closure_133_2[8]).NetworkActionNames.EMBEDDED_ACTIVITIES_FETCH_SHELF, properties: null };
            const obj13 = { guild_id: closure_132_0 };
            obj12.properties = obj13;
            request.trackedActionData = obj12;
            c8 = 4;
            c9 = 1;
            const obj14 = { value: closure_133_1(closure_133_2[7]).get(request), done: false };
            return obj14;
          }
        } else if (2 === tmp7) {
          c7 = 0;
          const obj15 = { type: "EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", guildId: closure_132_0 };
          closure_133_1(closure_133_2[6]).dispatch(obj15);
          const obj17 = { activityConfigs: shelfActivities, applications: closure_132_3 };
          c9 = 3;
          const obj18 = { value: obj17, done: true };
          return obj18;
        } else if (3 === tmp7) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 !== 2) {
            if (null != closure_132_4) {
              closure_133_1(closure_133_2[6]).unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", closure_132_4);
              closure_132_4 = undefined;
              const obj8 = closure_133_1(closure_133_2[6]);
            }
            if (null != closure_132_5) {
              closure_133_1(closure_133_2[6]).unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", closure_132_5);
              closure_132_5 = undefined;
              const obj27 = closure_133_1(closure_133_2[6]);
            }
          }
        } else if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 0;
          c9 = 3;
          const obj20 = { value, done: true };
          return obj20;
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
          const obj21 = { type: "EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", guildId: closure_132_0, activities: closure_132_10, applications: closure_132_11, assets: closure_132_12 };
          closure_133_1(closure_133_2[6]).dispatch(obj21);
          if (closure_132_11.length > 0) {
            const obj22 = { type: "APPLICATIONS_FETCH_SUCCESS", applications: closure_132_11 };
            closure_133_1(closure_133_2[6]).dispatch(obj22);
            const obj3 = closure_133_1(closure_133_2[6]);
          }
          const obj23 = { activityConfigs: closure_132_10, applications: closure_132_11.map((item) => closure_5.createFromServer(item)) };
          c7 = 0;
          c9 = 3;
          const obj24 = { value: obj23, done: true };
          return obj24;
        }
        c9 = 3;
        const obj25 = { value, done: true };
        return obj25;
      }
    } catch (tmp96) {
      closure_6 = tmp96;
      if (tmp4 === c7) {
        c9 = tmp2;
        throw tmp96;
      } else {
        c8 = tmp;
      }
    }
  }
};
const Endpoints = fn(1085).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/fetchShelf.tsx");

export const fetchShelf = function fetchShelf() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};