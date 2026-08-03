import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import updateCategoriesAndProducts from "updateCategoriesAndProducts";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c5;
let closure_6;
let obj1;
const require = arg1;
({ View: obj1, Pressable: c3 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, label: null, stepperContainer: null, stepperButton: null, stepperButtonDisabled: null, valueText: null };
createCacheKey = { paddingVertical: require("Themes").space.PX_12, paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginBottom: require("Themes").space.PX_8 };
obj1 = { marginBottom: require("Themes").space.PX_8 };
createCacheKey[2] = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_12 };
let obj2 = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_12 };
createCacheKey[3] = { width: 32, height: 32, borderRadius: require("Themes").radii.xs, backgroundColor: require("Themes").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, justifyContent: "center", alignItems: "center" };
createCacheKey[4] = { opacity: 0.5 };
createCacheKey[5] = { minWidth: 40, textAlign: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj3 = { width: 32, height: 32, borderRadius: require("Themes").radii.xs, backgroundColor: require("Themes").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, justifyContent: "center", alignItems: "center" };
const result = require("updateCategoriesAndProducts").fileFinishedImporting("modules/collectibles/native/tooling/ShopSkipCategoriesFilter.tsx");

export const ShopSkipCategoriesFilter = function ShopSkipCategoriesFilter() {
  const tmp = createCacheKey();
  let obj = stateFromStores(589);
  const items = [updateCategoriesAndProducts];
  stateFromStores = obj.useStateFromStores(items, () => skipNumCategories.skipNumCategories);
  obj = { style: tmp.container, children: null };
  obj = { variant: "text-md/normal", style: tmp.label, children: "Hide first # of categories" };
  const items1 = [callback(stateFromStores(4251).Text, obj), ];
  const obj1 = { style: tmp.stepperContainer, children: null };
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
          stateFromStores(outer1_1[9]).setSkipNumCategories(tmp - 1);
          const obj = stateFromStores(outer1_1[9]);
        }
      },
      disabled: stateFromStores <= 0,
      children: callback(stateFromStores(4251).Text, { variant: "text-lg/semibold", children: "\u2212" })
    }),
    callback(stateFromStores(4251).Text, { variant: "text-md/semibold", style: tmp.valueText, children: stateFromStores }),

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
        stateFromStores(outer1_1[9]).setSkipNumCategories(tmp - 1);
        const obj = stateFromStores(outer1_1[9]);
      }
    },
    disabled: stateFromStores <= 0,
    children: callback(stateFromStores(4251).Text, { variant: "text-lg/semibold", children: "\u2212" })
  };
  const obj3 = { variant: "text-md/semibold", style: tmp.valueText, children: stateFromStores };
  items4[1] = stepperButtonDisabled2;
  items3[2] = callback(closure_3, {
    style: items4,
    onPress() {
      if (stateFromStores < 100) {
        stateFromStores(outer1_1[9]).setSkipNumCategories(tmp + 1);
        const obj = stateFromStores(outer1_1[9]);
      }
    },
    disabled: stateFromStores >= 100,
    children: callback(stateFromStores(4251).Text, { variant: "text-lg/semibold", children: "+" })
  });
  obj1[1] = items3;
  items1[1] = closure_6(closure_2, obj1);
  obj4[1] = items1;
  obj[1] = closure_6(stateFromStores(4664).Stack, obj4);
  return callback(closure_2, obj);
};