// === Module 11717: useActivityShelfItemsSorting ===

// Module 11717 (useActivityShelfItemsSorting)
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/useActivityShelfItemsSorting.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useActivityShelfItemsSorting(arr) {
  const cResult = items2(576).c(2);
  const FrecencyUserSettingsActionCreators = items2(2046).FrecencyUserSettingsActionCreators;
  const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  if (cResult[0] !== arr) {
    const items = [];
    const item = arr.forEach((application) => items2.push(application.application.id));
    const items1 = [];
    HermesBuiltin.arraySpread(items, 0);
    const sorted = items1.sort((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      let num = 1;
      if (findIndexResult < items2.findIndex((item) => item === closure_1)) {
        num = -1;
      }
      return num;
    });
    items2 = [];
    HermesBuiltin.arraySpread(arr, 0);
    c1 = 0;
    const item1 = items1.forEach((item) => {
      closure_0 = item;
      const findIndexResult = items.findIndex((application) => application.application.id === closure_0);
      if (-1 !== findIndexResult) {
        items.splice(findIndexResult, 1);
        items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(items.slice(0, closure_1), 0);
        items[arraySpreadResult] = items[findIndexResult];
        HermesBuiltin.arraySpread(items.slice(closure_1), arraySpreadResult + 1);
        closure_1 = closure_1 + 1;
      }
    });
    const mapped = items2.map((item, index) => {
      items = [item, index];
      return items;
    });
    const found = mapped.filter((item) => {
      [tmp] = item;
      const embeddedActivityConfig = tmp.application.embeddedActivityConfig;
      let label_type;
      if (embeddedActivityConfig != null) {
        const obj = items(1382);
        const tmp7 = embeddedActivityConfig.client_platform_config[closure_1(11716)(undefined, obj.getOS(obj))];
        if (tmp7 != null) {
          label_type = tmp7.label_type;
        }
        const tmp5 = closure_1(11716);
      }
      let tmp8 = null != label_type;
      if (tmp8) {
        tmp8 = label_type === items(1998).EmbeddedActivityLabelTypes.NEW || label_type === items(1998).EmbeddedActivityLabelTypes.UPDATED;
        const tmp11 = label_type === items(1998).EmbeddedActivityLabelTypes.NEW || label_type === items(1998).EmbeddedActivityLabelTypes.UPDATED;
      }
      return tmp8;
    });
    const item2 = found.forEach((item) => {
      [tmp, tmp2] = item;
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
        const arraySpreadResult = HermesBuiltin.arraySpread(items.slice(0, diff), 0);
        items[arraySpreadResult] = items[tmp2];
        HermesBuiltin.arraySpread(items.slice(diff), arraySpreadResult + 1);
      }
    });
    cResult[0] = arr;
    cResult[1] = items2;
    let tmp3 = items2;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function useActivityShelfItemsSorting(arg0) {
  _require = arg0;
  const FrecencyUserSettingsActionCreators = require("UserSettingsProtoActionCreators").FrecencyUserSettingsActionCreators;
  const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  let items = [arg0];
  return noop.useMemo(() => {
    let items = [];
    const item = closure_0.forEach((application) => items.push(application.application.id));
    const items1 = [...items];
    const sorted = items1.sort((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      let num = 1;
      if (findIndexResult < items.findIndex((item) => item === closure_1)) {
        num = -1;
      }
      return num;
    });
    const items2 = [...closure_0];
    items = items2;
    closure_1 = 0;
    const item1 = items1.forEach((item) => {
      closure_0 = item;
      const findIndexResult = items.findIndex((application) => application.application.id === closure_0);
      if (-1 !== findIndexResult) {
        items.splice(findIndexResult, 1);
        items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(items.slice(0, closure_1), 0);
        items[arraySpreadResult] = items[findIndexResult];
        HermesBuiltin.arraySpread(items.slice(closure_1), arraySpreadResult + 1);
        closure_1 = closure_1 + 1;
      }
    });
    const mapped = items.map((item, index) => {
      items = [item, index];
      return items;
    });
    const found = mapped.filter((item) => {
      [tmp] = item;
      const embeddedActivityConfig = tmp.application.embeddedActivityConfig;
      let label_type;
      if (embeddedActivityConfig != null) {
        const obj = items(1382);
        const tmp7 = embeddedActivityConfig.client_platform_config[closure_1(11716)(undefined, obj.getOS(obj))];
        if (tmp7 != null) {
          label_type = tmp7.label_type;
        }
        const tmp5 = closure_1(11716);
      }
      let tmp8 = null != label_type;
      if (tmp8) {
        tmp8 = label_type === items(1998).EmbeddedActivityLabelTypes.NEW || label_type === items(1998).EmbeddedActivityLabelTypes.UPDATED;
        const tmp11 = label_type === items(1998).EmbeddedActivityLabelTypes.NEW || label_type === items(1998).EmbeddedActivityLabelTypes.UPDATED;
      }
      return tmp8;
    });
    const item2 = found.forEach((item) => {
      [tmp, tmp2] = item;
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
        const arraySpreadResult = HermesBuiltin.arraySpread(items.slice(0, diff), 0);
        items[arraySpreadResult] = items[tmp2];
        HermesBuiltin.arraySpread(items.slice(diff), arraySpreadResult + 1);
      }
    });
    return items;
  }, items);
});