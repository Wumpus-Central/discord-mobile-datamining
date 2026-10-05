// discord_app/modules/collectibles/hooks/useRecommendedCollectiblesSections.tsx
import react from "../../../../_runtime/00019_react.js";
import useInitialValueDefault from "../../../hooks/useInitialValue.tsx";
import CollectiblesRecommendationUtils from "../utils/CollectiblesRecommendationUtils.tsx";
import CollectiblesRecommendationStore from "../CollectiblesRecommendationStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, arr, dependencyMap, importDefault;

let useMemo = react.useMemo;
let closure_5 = [];
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arr, arg1) => {
      let closure_0;
      let tmp4;
      _require = arg1;
      let obj = require("react");
      const cResult = obj.c(9);
      let obj2 = require("EditProfileCollectiblesOrderingExperiment");
      const isEditProfileCollectiblesOrderingEnabled =
        obj2.useIsEditProfileCollectiblesOrderingEnabled("collectibles_picker");
      const tmp = arr;
      if (cResult[0] !== isEditProfileCollectiblesOrderingEnabled) {
        const fn = function n() {
          let tmp2;
          if (isEditProfileCollectiblesOrderingEnabled) {
            const recommendations = CollectiblesRecommendationStore.getRecommendations();
            let skuIds;
            if (recommendations != null) {
              skuIds = recommendations.skuIds;
            }
            if (skuIds == null) {
              skuIds = closure_5;
            }
            tmp2 = skuIds;
          } else {
            tmp2 = closure_5;
          }
          return tmp2;
        };
        cResult[0] = isEditProfileCollectiblesOrderingEnabled;
        cResult[1] = fn;
        tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      arr = isEditProfileCollectiblesOrderingEnabled(tmp[5])(tmp4);
      let tmp5 = arr;
      if (0 !== arr.length) {
        let tmp6;
        if (cResult[2] === arg1) {
          if (cResult[3] === arr) {
            if (cResult[4] === arr) {
              tmp6 = cResult[5];
            }
            tmp5 = tmp6;
          }
        }
        if (cResult[6] === arg1) {
          let tmp7;
          if (cResult[7] === arr) {
            tmp7 = cResult[8];
          }
          const mapped = arr.map(tmp7);
          cResult[2] = arg1;
          cResult[3] = arr;
          cResult[4] = arr;
          cResult[5] = mapped;
          tmp6 = mapped;
        }
        const fn2 = function p(section) {
          if (section.section !== closure_0) {
            return section;
          } else {
            const obj = CollectiblesRecommendationUtils;
            const result = obj.reorderCollectiblesByRecommendation(section.items, arr);
            let tmp5 = section;
            if (result !== section.items) {
              const obj2 = { items: result };
              const merged = Object.assign(section);
              tmp5 = obj2;
            }
            return tmp5;
          }
        };
        cResult[6] = arg1;
        cResult[7] = arr;
        cResult[8] = fn2;
        tmp7 = fn2;
      }
      return tmp5;
    }
  : (arg0, arg1) => {
      let closure_0;
      let closure_1;
      let closure_2;
      let length;
      _require = arg0;
      importDefault = arg1;
      let obj = require("EditProfileCollectiblesOrderingExperiment");
      dependencyMap = obj.useIsEditProfileCollectiblesOrderingEnabled("collectibles_picker");
      const tmp = useInitialValueDefault(() => {
        let tmp2;
        if (closure_2) {
          const recommendations = CollectiblesRecommendationStore.getRecommendations();
          let skuIds;
          if (recommendations != null) {
            skuIds = recommendations.skuIds;
          }
          if (skuIds == null) {
            skuIds = closure_5;
          }
          tmp2 = skuIds;
        } else {
          tmp2 = closure_5;
        }
        return tmp2;
      });
      useMemo = tmp;
      const items = [arg1, tmp, arg0];
      return useMemo(() => {
        let mapped;
        if (0 === length.length) {
          mapped = closure_0;
        } else {
          mapped = closure_0.map((section) => {
            if (section.section !== closure_1_1) {
              return section;
            } else {
              const obj = closure_0(closure_2[6]);
              const result = obj.reorderCollectiblesByRecommendation(section.items, length);
              let tmp5 = section;
              if (result !== section.items) {
                const obj2 = { items: result };
                const merged = Object.assign(section);
                tmp5 = obj2;
              }
              return tmp5;
            }
          });
        }
        return mapped;
      }, items);
    };
let result = size.fileFinishedImporting("modules/collectibles/hooks/useRecommendedCollectiblesSections.tsx");

export default tmp2;
