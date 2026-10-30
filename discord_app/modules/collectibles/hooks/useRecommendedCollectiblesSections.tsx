// === Module 15027: useRecommendedCollectiblesSections ===

// Module 15027 (useRecommendedCollectiblesSections)
import _mod19 from "module_19" /* 19 */;
import useInitialValueDefault from "useInitialValue" /* 5607 */;
import CollectiblesRecommendationStore from "CollectiblesRecommendationStore" /* 15028 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let useMemo = _mod19.useMemo;
let closure_5 = [];
let result = size.fileFinishedImporting("modules/collectibles/hooks/useRecommendedCollectiblesSections.tsx");

export default function useRecommendedCollectiblesSections(arg0, arg1) {
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
          const result = closure_0(closure_2[4]).reorderCollectiblesByRecommendation(section.items, length);
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
};