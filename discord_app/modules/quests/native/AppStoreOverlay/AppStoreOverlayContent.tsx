// discord_app/modules/quests/native/AppStoreOverlay/AppStoreOverlayContent.tsx
import asyncGeneratorStep from "asyncGeneratorStep";

const require = arg1;
function _getAppStoreOverlayContent() {
  const self = this;
  let tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c3 = 0;
    let c5 = 0;
    let c4 = 0;
    return (function*(arg0, arg1) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let asyncGeneratorStep = tmp6;
              asyncGeneratorStep = undefined;
              let c4 = 1;
              let obj2 = callback(table[2]);
              c3 = 2;
              c5 = 1;
              let obj1 = { value: null, done: false };
              obj1[0] = obj2.fetchAppStoreMetadata(callback);
              return obj1;
            }
          } else if (1 === tmp6) {
            c4 = 0;
            c5 = 3;
            return { value: null, done: true };
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c5 = 3;
            obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            asyncGeneratorStep = arg1;
            let tmp9 = null;
            if (null != asyncGeneratorStep) {
              tmp9 = (function toOverlayContent(asyncGeneratorStep, closure_0, closure_1) {
                let category;
                let rating_count;
                let tmp = null != asyncGeneratorStep.rating;
                if (tmp) {
                  tmp = asyncGeneratorStep.rating > 0;
                }
                const items = [];
                if (tmp) {
                  let obj = { type: "rating", label: null, rating: null, ratingCount: null };
                  const intl = callback(1236).intl;
                  obj[1] = intl.string(callback(1236).t["9bEWZJ"]);
                  ({ rating: obj[2], rating_count } = asyncGeneratorStep);
                  obj[3] = rating_count;
                  items.push(obj);
                }
                let tmp5 = null != asyncGeneratorStep.age_rating;
                if (tmp5) {
                  tmp5 = "" !== asyncGeneratorStep.age_rating;
                }
                if (tmp5) {
                  obj = { type: "age", label: null, ageRating: null };
                  const intl2 = callback(1236).intl;
                  obj[1] = intl2.string(callback(1236).t.ncrlHJ);
                  obj[2] = asyncGeneratorStep.age_rating;
                  items.push(obj);
                }
                if (null != asyncGeneratorStep.chart_rank) {
                  obj = { type: "chart", label: null, rank: null, category: null };
                  const intl3 = callback(1236).intl;
                  obj[1] = intl3.string(callback(1236).t["x/ERbV"]);
                  ({ chart_rank: obj3[2], category } = asyncGeneratorStep);
                  obj[3] = category;
                  items.push(obj);
                }
                const screenshots = asyncGeneratorStep.screenshots;
                const found = screenshots.filter((arg0) => "" !== arg0);
                const obj1 = { title: asyncGeneratorStep.name, subtitle: asyncGeneratorStep.category, description: asyncGeneratorStep.description, iconUrl: asyncGeneratorStep.icon, headerUrl: null, stats: null, media: null, storeUrl: null, appId: null };
                const header_image = asyncGeneratorStep.header_image;
                obj1[4] = header_image;
                let tmp12;
                if (items.length > 0) {
                  tmp12 = items;
                }
                obj1[5] = tmp12;
                let mapped;
                if (found.length > 0) {
                  mapped = found.map((url) => ({ type: "screenshot", url }));
                }
                obj1[6] = mapped;
                obj1[7] = closure_1;
                if (null != asyncGeneratorStep.app_id) {
                  if ("" !== asyncGeneratorStep.app_id) {
                    let storeAppId = asyncGeneratorStep.app_id;
                  }
                  obj1[8] = storeAppId;
                  return obj1;
                }
                storeAppId = closure_0.storeAppId;
              })(asyncGeneratorStep, callback, table);
            }
            c4 = 0;
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = tmp9;
            return obj;
          }
        } catch (tmp18) {
          if (tmp3 === c4) {
            c5 = tmp2;
            throw tmp18;
          } else {
            c3 = tmp;
          }
        }
      }
    })();
  });
  const _getAppStoreOverlayContent = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("clearRetryState").fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayContent.tsx");

export const getAppStoreOverlayContent = function getAppStoreOverlayContent(arg0, url) {
  const self = this;
  const apply = _getAppStoreOverlayContent.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};