// discord_app/modules/collectibles/native/tooling/ShopSkipCategoriesFilter.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import updateCategoriesAndProducts from "../../CollectiblesCategoryStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
noopAll;
({ View: obj1, Pressable: c3 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const createCacheKey = { paddingVertical: ThemesDefault.space.PX_12, paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginBottom: ThemesDefault.space.PX_8 };
createCacheKey[2] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_12 };
createCacheKey[3] = { width: 32, height: 32, borderRadius: ThemesDefault.radii.xs, backgroundColor: ThemesDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, justifyContent: "center", alignItems: "center" };
createCacheKey[4] = { opacity: 0.5 };
createCacheKey[5] = { minWidth: 40, textAlign: "center" };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/collectibles/native/tooling/ShopSkipCategoriesFilter.tsx");

export const ShopSkipCategoriesFilter = function ShopSkipCategoriesFilter() {
  const tmp = callback2();
  let obj = stateFromStores(589);
  const items = [closure_4];
  stateFromStores = obj.useStateFromStores(items, () => skipNumCategories.skipNumCategories);
  obj = { variant: "text-md/normal", style: tmp.label, children: "Hide first # of categories" };
  const items1 = [callback(stateFromStores(4734).Text, obj), ];
  obj1 = { style: tmp.stepperContainer, children: null };
  const items2 = [tmp.stepperButton, ];
  let stepperButtonDisabled = tmp5;
  if (stateFromStores <= 0) {
    stepperButtonDisabled = tmp.stepperButtonDisabled;
  }
  items2[1] = stepperButtonDisabled;
  const items3 = [
    callback(closure_3, {
      style: items2,
      onPress() {
        if (stateFromStores > 0) {
          stateFromStores(dependencyMap[9]).setSkipNumCategories(tmp - 1);
          const obj = stateFromStores(dependencyMap[9]);
        }
      },
      disabled: stateFromStores <= 0,
      children: callback(stateFromStores(4734).Text, { variant: "text-lg/semibold", children: "\u2212" })
    }),
    callback(stateFromStores(4734).Text, { variant: "text-md/semibold", style: tmp.valueText, children: stateFromStores }),

  ];
  const items4 = [tmp.stepperButton, ];
  let stepperButtonDisabled2 = tmp6;
  if (stateFromStores >= 100) {
    stepperButtonDisabled2 = tmp.stepperButtonDisabled;
  }
  const obj4 = { spacing: 8, children: null };
  const obj2 = {
    style: items2,
    onPress() {
      if (stateFromStores > 0) {
        stateFromStores(dependencyMap[9]).setSkipNumCategories(tmp - 1);
        const obj = stateFromStores(dependencyMap[9]);
      }
    },
    disabled: stateFromStores <= 0,
    children: callback(stateFromStores(4734).Text, { variant: "text-lg/semibold", children: "\u2212" })
  };
  items4[1] = stepperButtonDisabled2;
  items3[2] = callback(closure_3, {
    style: items4,
    onPress() {
      if (stateFromStores < 100) {
        stateFromStores(dependencyMap[9]).setSkipNumCategories(tmp + 1);
        const obj = stateFromStores(dependencyMap[9]);
      }
    },
    disabled: stateFromStores >= 100,
    children: callback(stateFromStores(4734).Text, { variant: "text-lg/semibold", children: "+" })
  });
  obj1[1] = items3;
  items1[1] = callback(closure_2, obj1);
  obj4[1] = items1;
  obj[1] = callback(stateFromStores(4733).Stack, obj4);
  return callback(closure_2, obj);
};