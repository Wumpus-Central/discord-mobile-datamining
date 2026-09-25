// === Module 15295: ShopSkipCategoriesFilter ===

// Module 15295 (ShopSkipCategoriesFilter)
import nativeDefault from "native" /* 576 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 6956 */;
import noop from "module_19" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 6957 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, Pressable: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4829);
let obj2 = { container: { paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 }, label: null, stepperContainer: null, stepperButton: null, stepperButtonDisabled: null, valueText: null };
let obj3 = { paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.label = { marginBottom: nativeDefault.space.PX_8 };
let obj4 = { marginBottom: nativeDefault.space.PX_8 };
obj2.stepperContainer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
let size = { width: 32, height: 32, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, justifyContent: "center", alignItems: "center" };
obj2.stepperButton = size;
obj2.stepperButtonDisabled = { opacity: 0.5 };
obj2.valueText = { minWidth: 40, textAlign: "center" };
let closure_7 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/tooling/ShopSkipCategoriesFilter.tsx");

export const ShopSkipCategoriesFilter = function ShopSkipCategoriesFilter() {
  const tmp = closure_7();
  const items = [CollectiblesCategoryStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => skipNumCategories.skipNumCategories);
  const obj2 = { style: tmp.container, children: null };
  const items1 = [closure_5(stateFromStores(4825).Text, { variant: "text-md/normal", style: tmp.label, children: "Hide first # of categories" }), ];
  const obj4 = { style: tmp.stepperContainer, children: null };
  const items2 = [tmp.stepperButton, ];
  let stepperButtonDisabled = tmp5;
  if (stateFromStores <= 0) {
    stepperButtonDisabled = tmp.stepperButtonDisabled;
  }
  let obj = stateFromStores(504);
  const obj3 = { variant: "text-md/normal", style: tmp.label, children: "Hide first # of categories" };
  items2[1] = stepperButtonDisabled;
  const items3 = [
    closure_5(closure_3, {
      style: items2,
      onPress() {
        if (stateFromStores > 0) {
          CollectiblesActionCreators.setSkipNumCategories(tmp - 1);
        }
      },
      disabled: stateFromStores <= 0,
      children: closure_5(stateFromStores(4825).Text, { variant: "text-lg/semibold", children: "\u2212" })
    }),
    closure_5(stateFromStores(4825).Text, { variant: "text-md/semibold", style: tmp.valueText, children: stateFromStores }),

  ];
  const items4 = [tmp.stepperButton, ];
  let stepperButtonDisabled2 = tmp6;
  if (stateFromStores >= 100) {
    stepperButtonDisabled2 = tmp.stepperButtonDisabled;
  }
  const obj7 = { spacing: 8, children: null };
  const obj5 = {
    style: items2,
    onPress() {
      if (stateFromStores > 0) {
        CollectiblesActionCreators.setSkipNumCategories(tmp - 1);
      }
    },
    disabled: stateFromStores <= 0,
    children: closure_5(stateFromStores(4825).Text, { variant: "text-lg/semibold", children: "\u2212" })
  };
  const obj6 = { variant: "text-md/semibold", style: tmp.valueText, children: stateFromStores };
  items4[1] = stepperButtonDisabled2;
  items3[2] = closure_5(closure_3, {
    style: items4,
    onPress() {
      if (stateFromStores < 100) {
        CollectiblesActionCreators.setSkipNumCategories(tmp + 1);
      }
    },
    disabled: stateFromStores >= 100,
    children: closure_5(stateFromStores(4825).Text, { variant: "text-lg/semibold", children: "+" })
  });
  obj4.children = items3;
  items1[1] = closure_6(closure_2, obj4);
  obj7.children = items1;
  obj2.children = closure_6(stateFromStores(5272).Stack, obj7);
  return closure_5(closure_2, obj2);
};