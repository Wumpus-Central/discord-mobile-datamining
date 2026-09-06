// === Module 12041: useActivityShelfItemsSorting ===

// Module 12041 (useActivityShelfItemsSorting)
import closure_3 from "noop" /* 19 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/activities/useActivityShelfItemsSorting.tsx");

export default function useActivityShelfItemsSorting(arg0) {
  const _require = arg0;
  const FrecencyUserSettingsActionCreators = _require(1940).FrecencyUserSettingsActionCreators;
  const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  let items = [arg0];
  return React.useMemo(() => {
    let items = [];
    let items2 = items;
    const item = items2.forEach((application) => items2.push(application.application.id));
    const items1 = [...items];
    const sorted = items1.sort((arg0, arg1) => {
      items2 = arg0;
      closure_1 = arg1;
      let num = 1;
      if (findIndexResult < items2.findIndex((arg0) => arg0 === closure_1)) {
        num = -1;
      }
      return num;
    });
    items2 = undefined;
    c1 = undefined;
    items2 = [...items2];
    c1 = 0;
    const item1 = items1.forEach((arg0) => {
      let items = arg0;
      const findIndexResult = items.findIndex((application) => application.application.id === items);
      if (-1 !== findIndexResult) {
        items.splice(findIndexResult, 1);
        items = [];
        let arraySpreadResult = HermesBuiltin.arraySpread(items.slice(0, closure_1), 0);
        items[arraySpreadResult] = items[findIndexResult];
        arraySpreadResult = HermesBuiltin.arraySpread(items.slice(closure_1), arraySpreadResult + 1);
        closure_1 = closure_1 + 1;
      }
    });
    const mapped = items2.map((arg0, arg1) => {
      const items = [arg0, arg1];
      return items;
    });
    const found = mapped.filter((arg0) => {
      [tmp] = arg0;
      const embeddedActivityConfig = tmp.application.embeddedActivityConfig;
      let label_type;
      if (embeddedActivityConfig != null) {
        const obj = items2(1115);
        const tmp7 = embeddedActivityConfig.client_platform_config[v0(9410)(undefined, obj.getOS(obj))];
        if (tmp7 != null) {
          label_type = tmp7.label_type;
        }
        const tmp5 = v0(9410);
      }
      let tmp8 = null != label_type;
      if (tmp8) {
        tmp8 = label_type === items2(1894).EmbeddedActivityLabelTypes.NEW || label_type === items2(1894).EmbeddedActivityLabelTypes.UPDATED;
        const tmp11 = label_type === items2(1894).EmbeddedActivityLabelTypes.NEW || label_type === items2(1894).EmbeddedActivityLabelTypes.UPDATED;
        const tmp9 = items2;
      }
      return tmp8;
    });
    const item2 = found.forEach((arg0) => {
      [tmp, tmp2] = arg0;
      let diff = tmp2;
      if (null != tmp.application.embeddedActivityConfig) {
        diff = tmp2;
        if (null != tmp.application.embeddedActivityConfig.shelf_rank) {
          diff = tmp.application.embeddedActivityConfig.shelf_rank - 1;
        }
      }
      if (diff < tmp2) {
        items.splice(tmp2, 1);
        items = [];
        let arraySpreadResult = HermesBuiltin.arraySpread(items.slice(0, diff), 0);
        items[arraySpreadResult] = items[tmp2];
        arraySpreadResult = HermesBuiltin.arraySpread(items.slice(diff), arraySpreadResult + 1);
      }
    });
    return items2;
  }, items);
};