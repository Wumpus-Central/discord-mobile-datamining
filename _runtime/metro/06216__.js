// === Module 6216: ? ===

// Module 6216
import _mod19 from "module_19" /* 19 */;
import _modDef38 from "module_38" /* 38 */;

const useMemo = _mod19.useMemo;

export const usePropsValidator = (index) => {
  index = index.index;
  const snapPoints = index.snapPoints;
  const enableDynamicSizing = index.enableDynamicSizing;
  const topInset = index.topInset;
  const bottomInset = index.bottomInset;
  let items = [index, snapPoints, topInset, bottomInset, enableDynamicSizing];
  topInset(() => {
    if (snapPoints) {
      value = snapPoints;
      if ("get" in snapPoints) {
        value = snapPoints.get();
      }
      let items = value;
    } else {
      items = [];
    }
    let tmp5 = items;
    if (!items) {
      tmp5 = enableDynamicSizing;
    }
    _modDef38(tmp5, "'snapPoints' was not provided! please provide at least one snap point.");
    const mapped = items.map((item) => {
      let parsed = item;
      if (typeof item !== "number") {
        const _Number = Number;
        parsed = Number.parseInt(item.replace("%", ""), 10);
      }
      let tmp4 = parsed > 0;
      if (!tmp4) {
        tmp4 = parsed === index(enableDynamicSizing[2]).INITIAL_SNAP_POINT;
      }
      snapPoints(enableDynamicSizing[1])(tmp4, "Snap point '" + item + "' is invalid. if you want to allow user to close the sheet, Please use 'enablePanDownToClose' prop.");
      const tmp3 = snapPoints(enableDynamicSizing[1]);
    });
    let tmp9 = "value" in items;
    if (!tmp9) {
      tmp9 = items.length > 0;
    }
    if (!tmp9) {
      tmp9 = enableDynamicSizing;
    }
    _modDef38(tmp9, "'snapPoints' was provided with no points! please provide at least one snap point.");
    let tmp13 = typeof index === "number";
    const tmp2Result = _modDef38;
    if (typeof index !== "number") {
      tmp13 = undefined === index;
    }
    _modDef38(tmp13, "'index' was provided but with wrong type ! expected type is a number.");
    let tmp16 = enableDynamicSizing;
    const tmp2Result5 = _modDef38;
    if (!enableDynamicSizing) {
      tmp16 = typeof index !== "number";
    }
    if (!tmp16) {
      let tmp17 = index >= -1;
      if (tmp17) {
        tmp17 = index <= items.length - 1;
      }
      tmp16 = tmp17;
    }
    _modDef38(tmp16, `'index' was provided but out of the provided snap points range! expected value to be between -1, ${arr.length - 1}`);
    let tmp20 = typeof topInset === "number";
    const tmp2Result6 = _modDef38;
    if (typeof topInset !== "number") {
      tmp20 = undefined === topInset;
    }
    _modDef38(tmp20, "'topInset' was provided but with wrong type ! expected type is a number.");
    let tmp23 = typeof bottomInset === "number";
    const tmp2Result7 = _modDef38;
    if (typeof bottomInset !== "number") {
      tmp23 = undefined === bottomInset;
    }
    _modDef38(tmp23, "'bottomInset' was provided but with wrong type ! expected type is a number.");
    const tmp2Result8 = _modDef38;
  }, items);
};