// === Module 13002: useRecommendedCollectiblesSections ===

// Module 13002 (useRecommendedCollectiblesSections)
import _mod19 from "module_19" /* 19 */;
import useInitialValueDefault from "useInitialValue" /* 5984 */;
import CollectiblesRecommendationUtils from "CollectiblesRecommendationUtils" /* 13005 */;
import CollectiblesRecommendationStore from "CollectiblesRecommendationStore" /* 13003 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let useMemo = _mod19.useMemo;
let closure_5 = [];
let result = size.fileFinishedImporting("modules/collectibles/hooks/useRecommendedCollectiblesSections.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arr, arg1) => {
  _require = arg1;
  const cResult = require("c").c(9);
  const obj = require("c");
  let tmp = arr;
  const isEditProfileCollectiblesOrderingEnabled = require("EditProfileCollectiblesOrderingExperiment").useIsEditProfileCollectiblesOrderingEnabled("collectibles_picker");
  if (cResult[0] !== isEditProfileCollectiblesOrderingEnabled) {
    const fn = function n() {
      if (isEditProfileCollectiblesOrderingEnabled) {
        const recommendations = CollectiblesRecommendationStore.getRecommendations();
        let skuIds;
        if (recommendations != null) {
          skuIds = recommendations.skuIds;
        }
        if (skuIds == null) {
          skuIds = closure_5;
        }
        let tmp = skuIds;
      } else {
        tmp = closure_5;
      }
      return tmp;
    };
    cResult[0] = isEditProfileCollectiblesOrderingEnabled;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  arr = isEditProfileCollectiblesOrderingEnabled(tmp[5])(tmp4);
  if (0 === arr.length) {
    return arr;
  } else {
    if (cResult[6] === arg1) {
      if (cResult[7] === arr) {
        let tmp5 = cResult[8];
      }
      const mapped = arr.map(tmp5);
      cResult[2] = arg1;
      cResult[3] = arr;
      cResult[4] = arr;
      cResult[5] = mapped;
    }
    const fn2 = function p(section) {
      if (section.section !== closure_0) {
        return section;
      } else {
        const result = CollectiblesRecommendationUtils.reorderCollectiblesByRecommendation(section.items, arr);
        let tmp5 = section;
        if (result !== section.items) {
          const obj2 = {};
          const merged = Object.assign(section);
          obj2.items = result;
          tmp5 = obj2;
        }
        return tmp5;
      }
    };
    cResult[6] = arg1;
    cResult[7] = arr;
    cResult[8] = fn2;
    tmp5 = fn2;
  }
}) : ((arg0, arg1) => {
  _require = arg0;
  importDefault = arg1;
  dependencyMap = require("EditProfileCollectiblesOrderingExperiment").useIsEditProfileCollectiblesOrderingEnabled("collectibles_picker");
  let tmp = useInitialValueDefault(() => {
    if (closure_2) {
      const recommendations = CollectiblesRecommendationStore.getRecommendations();
      let skuIds;
      if (recommendations != null) {
        skuIds = recommendations.skuIds;
      }
      if (skuIds == null) {
        skuIds = closure_5;
      }
      let tmp = skuIds;
    } else {
      tmp = closure_5;
    }
    return tmp;
  });
  useMemo = tmp;
  const items = [arg1, tmp, arg0];
  return useMemo(() => {
    if (0 === length.length) {
      let mapped = closure_0;
    } else {
      mapped = closure_0.map((section) => {
        if (section.section !== closure_1_1) {
          return section;
        } else {
          const result = closure_0(closure_2[6]).reorderCollectiblesByRecommendation(section.items, length);
          let tmp5 = section;
          if (result !== section.items) {
            const obj2 = {};
            const merged = Object.assign(section);
            obj2.items = result;
            tmp5 = obj2;
          }
          return tmp5;
        }
      });
    }
    return mapped;
  }, items);
});