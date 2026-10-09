// discord_app/modules/content_inventory/useEntryActivityAndApplication.tsx
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import EmbeddedActivitiesStore from "../activities/EmbeddedActivitiesStore.tsx";
import ContentInventoryActivityStore from "ContentInventoryActivityStore.tsx";

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/content_inventory/useEntryActivityAndApplication.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useEntryActivityAndApplication(extra) {
      _require = extra;
      const cResult = require("c").c(16);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ContentInventoryActivityStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== extra) {
        const fn = function l() {
          return ContentInventoryActivityStore.getMatchingActivity(closure_0);
        };
        cResult[1] = extra;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
      let application_id;
      if (stateFromStores != null) {
        application_id = stateFromStores.application_id;
      }
      let application_id1;
      if ("application_id" in extra.extra) {
        application_id1 = extra.extra.application_id;
      }
      if (cResult[3] === application_id) {
        if (cResult[4] === application_id1) {
          let tmp10 = cResult[5];
        }
        [first1] = first1(6854)(tmp10);
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [EmbeddedActivitiesStore];
          cResult[6] = items1;
          let tmp16 = items1;
        } else {
          tmp16 = cResult[6];
        }
        let id;
        if (first1 != null) {
          id = first1.id;
        }
        if (cResult[7] === id) {
          if (cResult[8] === extra.author_id) {
            let tmp19 = cResult[9];
          }
          const stateFromStores1 = tmp(504).useStateFromStores(tmp16, tmp19);
          let tmp22 = first1;
          if (first1 == null) {
            tmp22 = tmp15;
          }
          if (cResult[10] === stateFromStores) {
            if (cResult[11] === first1) {
              if (cResult[12] === tmp22) {
                if (cResult[13] === stateFromStores1) {
                  if (cResult[14] === tmp15) {
                    let tmp23 = cResult[15];
                  }
                  return tmp23;
                }
              }
            }
          }
          const obj2 = {
            activity: stateFromStores,
            embeddedActivity: stateFromStores1,
            anyMatchingApplication: tmp22,
            activityApplication: first1,
            fallbackApplication: tmp15,
          };
          cResult[10] = stateFromStores;
          cResult[11] = first1;
          cResult[12] = tmp22;
          cResult[13] = stateFromStores1;
          cResult[14] = tmp15;
          cResult[15] = obj2;
          tmp23 = obj2;
          const tmpResult2 = tmp(504);
        }
        let id1;
        if (first1 != null) {
          id1 = first1.id;
        }
        const fn2 = function h() {
          let id;
          if (first1 != null) {
            id = first1.id;
          }
          return EmbeddedActivitiesStore.getEmbeddedActivityForUserId(extra.author_id, id);
        };
        cResult[7] = id1;
        cResult[8] = extra.author_id;
        cResult[9] = fn2;
        tmp19 = fn2;
      }
      const items2 = [application_id, application_id1];
      cResult[3] = application_id;
      cResult[4] = application_id1;
      cResult[5] = items2;
      tmp10 = items2;
      const tmpResult = require("initialize");
    }
  : function useEntryActivityAndApplication(extra) {
      _require = extra;
      const items = [ContentInventoryActivityStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () =>
        ContentInventoryActivityStore.getMatchingActivity(closure_0),
      );
      let application_id;
      const obj = require("initialize");
      const tmp = _require;
      if (stateFromStores != null) {
        application_id = stateFromStores.application_id;
      }
      const items1 = [application_id];
      let application_id1;
      if ("application_id" in extra.extra) {
        application_id1 = extra.extra.application_id;
      }
      items1[1] = application_id1;
      [activityApplication, obj2.fallbackApplication] = activityApplication(6854)(items1);
      const obj2 = {
        activity: stateFromStores,
        embeddedActivity: null,
        anyMatchingApplication: null,
        activityApplication: null,
        fallbackApplication: null,
      };
      const tmp4 = activityApplication(6854);
      const items2 = [EmbeddedActivitiesStore];
      obj2.embeddedActivity = tmp(504).useStateFromStores(items2, () => {
        let id;
        if (first != null) {
          id = first.id;
        }
        return EmbeddedActivitiesStore.getEmbeddedActivityForUserId(extra.author_id, id);
      });
      let tmp10 = activityApplication;
      if (activityApplication == null) {
        tmp10 = tmp9;
      }
      obj2.anyMatchingApplication = tmp10;
      obj2.activityApplication = activityApplication;
      return obj2;
    };
