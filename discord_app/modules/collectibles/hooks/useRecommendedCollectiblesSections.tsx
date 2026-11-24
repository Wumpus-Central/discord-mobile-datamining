// discord_app/modules/collectibles/hooks/useRecommendedCollectiblesSections.tsx
import _mod19 from "../../../../_runtime/metro/00019__.js";
import useInitialValueDefault from "../../../hooks/useInitialValue.tsx";
import CollectiblesRecommendationStore from "../CollectiblesRecommendationStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const useMemo = _mod19.useMemo;
let closure_5 = [];
let result = size.fileFinishedImporting("modules/collectibles/hooks/useRecommendedCollectiblesSections.tsx");

export default function useRecommendedCollectiblesSections(arg0, arg1) {
  closure_0 = arg0;
  importDefault = arg1;
  const tmp = useInitialValueDefault(() => {
    recommendations = recommendations.getRecommendations();
    let skuIds;
    if (recommendations != null) {
      skuIds = recommendations.skuIds;
    }
    if (skuIds == null) {
      skuIds = closure_1_5;
    }
    return skuIds;
  });
  dependencyMap = tmp;
  items = [arg1, tmp, arg0];
  return useMemo(() => {
    if (0 === length.length) {
      let mapped = closure_0;
    } else {
      mapped = closure_0.map((section) => {
        if (section.section !== closure_1_1) {
          return section;
        } else {
          const result = closure_0(closure_2[3]).reorderCollectiblesByRecommendation(section.items, length);
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
}
