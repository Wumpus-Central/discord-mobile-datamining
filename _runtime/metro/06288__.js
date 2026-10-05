// === Module 6288: ? ===

// Module 6288
import react from "react" /* 19 */;
import _modDef38 from "module_38" /* 38 */;

const useMemo = react.useMemo;

export const usePropsValidator = (index) => {
  index = index.index;
  const snapPoints = index.snapPoints;
  const enableDynamicSizing = index.enableDynamicSizing;
  const topInset = index.topInset;
  const bottomInset = index.bottomInset;
  let items = [index, snapPoints, topInset, bottomInset, enableDynamicSizing];
  topInset(() => {
    let items;
    if (snapPoints) {
      let value = snapPoints;
      if ("get" in snapPoints) {
        value = snapPoints.get();
      }
      items = value;
    } else {
      items = [];
    }
    let tmp5 = items;
    let tmp4 = _modDef38;
    if (!items) {
      tmp5 = enableDynamicSizing;
    }
    tmp4(tmp5, "'snapPoints' was not provided! please provide at least one snap point.");
    const mapped = items.map((item) => {
      let parsed = item;
      if (typeof item !== "number") {
        const _Number = Number;
        parsed = Number.parseInt(item.replace("%", ""), 10);
      }
      let tmp4 = parsed > 0;
      const tmp3 = snapPoints(enableDynamicSizing[1]);
      if (!tmp4) {
        tmp4 = parsed === index(enableDynamicSizing[2]).INITIAL_SNAP_POINT;
      }
      tmp3(tmp4, "Snap point '" + item + "' is invalid. if you want to allow user to close the sheet, Please use 'enablePanDownToClose' prop.");
    });
    let tmp9 = "value" in items;
    const tmp2Result = _modDef38;
    if (!tmp9) {
      tmp9 = items.length > 0;
    }
    if (!tmp9) {
      tmp9 = enableDynamicSizing;
    }
    tmp2Result(tmp9, "'snapPoints' was provided with no points! please provide at least one snap point.");
    let tmp13 = typeof index === "number";
    const tmp2Result5 = _modDef38;
    if (typeof index !== "number") {
      tmp13 = undefined === index;
    }
    tmp2Result5(tmp13, "'index' was provided but with wrong type ! expected type is a number.");
    let tmp16 = enableDynamicSizing;
    const tmp2Result6 = _modDef38;
    if (!enableDynamicSizing) {
      tmp16 = typeof index !== "number";
    }
    if (!tmp16) {
      tmp16 = index >= -1 && index <= items.length - 1;
      const tmp17 = index >= -1 && index <= items.length - 1;
    }
    tmp2Result6(tmp16, `'index' was provided but out of the provided snap points range! expected value to be between -1, ${arr.length - 1}`);
    let tmp20 = typeof topInset === "number";
    const tmp2Result7 = _modDef38;
    if (typeof topInset !== "number") {
      tmp20 = undefined === topInset;
    }
    tmp2Result7(tmp20, "'topInset' was provided but with wrong type ! expected type is a number.");
    let tmp23 = typeof bottomInset === "number";
    const tmp2Result8 = _modDef38;
    if (typeof bottomInset !== "number") {
      tmp23 = undefined === bottomInset;
    }
    tmp2Result8(tmp23, "'bottomInset' was provided but with wrong type ! expected type is a number.");
  }, items);
};