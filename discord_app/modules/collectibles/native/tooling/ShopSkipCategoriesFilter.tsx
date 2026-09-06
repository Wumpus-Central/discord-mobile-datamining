// discord_app/modules/collectibles/native/tooling/ShopSkipCategoriesFilter.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import CollectiblesActionCreators from "../../CollectiblesActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import CollectiblesCategoryStore from "../../CollectiblesCategoryStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, Pressable: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = {
  container: null,
  label: null,
  stepperContainer: null,
  stepperButton: null,
  stepperButtonDisabled: null,
  valueText: null,
};
createStyles = { paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
createStyles.label = { marginBottom: nativeDefault.space.PX_8 };
let obj1 = { marginBottom: nativeDefault.space.PX_8 };
createStyles.stepperContainer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
let size = {
  width: 32,
  height: 32,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT,
  justifyContent: "center",
  alignItems: "center",
};
createStyles.stepperButton = size;
createStyles.stepperButtonDisabled = { opacity: 0.5 };
createStyles.valueText = { minWidth: 40, textAlign: "center" };
let closure_7 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/tooling/ShopSkipCategoriesFilter.tsx");

export const ShopSkipCategoriesFilter = function ShopSkipCategoriesFilter() {
  const tmp = closure_7();
  let obj = stateFromStores(504);
  const items = [CollectiblesCategoryStore];
  stateFromStores = obj.useStateFromStores(items, () => skipNumCategories.skipNumCategories);
  obj = { style: tmp.container, children: null };
  obj = { variant: "text-md/normal", style: tmp.label, children: "Hide first # of categories" };
  const items1 = [closure_5(stateFromStores(4556).Text, obj)];
  const obj1 = { style: tmp.stepperContainer, children: null };
  const items2 = [tmp.stepperButton];
  let stepperButtonDisabled = tmp5;
  if (stateFromStores <= 0) {
    stepperButtonDisabled = tmp.stepperButtonDisabled;
  }
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
      children: closure_5(stateFromStores(4556).Text, { variant: "text-lg/semibold", children: "\u2212" }),
    }),
    closure_5(stateFromStores(4556).Text, {
      variant: "text-md/semibold",
      style: tmp.valueText,
      children: stateFromStores,
    }),
  ];
  const items4 = [tmp.stepperButton];
  let stepperButtonDisabled2 = tmp6;
  if (stateFromStores >= 100) {
    stepperButtonDisabled2 = tmp.stepperButtonDisabled;
  }
  const obj4 = { spacing: 8, children: null };
  const obj2 = {
    style: items2,
    onPress() {
      if (stateFromStores > 0) {
        CollectiblesActionCreators.setSkipNumCategories(tmp - 1);
      }
    },
    disabled: stateFromStores <= 0,
    children: closure_5(stateFromStores(4556).Text, { variant: "text-lg/semibold", children: "\u2212" }),
  };
  const obj3 = { variant: "text-md/semibold", style: tmp.valueText, children: stateFromStores };
  items4[1] = stepperButtonDisabled2;
  items3[2] = closure_5(closure_3, {
    style: items4,
    onPress() {
      if (stateFromStores < 100) {
        CollectiblesActionCreators.setSkipNumCategories(tmp + 1);
      }
    },
    disabled: stateFromStores >= 100,
    children: closure_5(stateFromStores(4556).Text, { variant: "text-lg/semibold", children: "+" }),
  });
  obj1.children = items3;
  items1[1] = closure_6(closure_2, obj1);
  obj4.children = items1;
  obj.children = closure_6(stateFromStores(4973).Stack, obj4);
  return closure_5(closure_2, obj);
};
