// _runtime/06987_usePropsValidator.js
import { useMemo } from "noop";


export const usePropsValidator = (index) => {
  index = index.index;
  const snapPoints = index.snapPoints;
  const enableDynamicSizing = index.enableDynamicSizing;
  const topInset = index.topInset;
  const bottomInset = index.bottomInset;
  let items = [index, snapPoints, topInset, bottomInset, enableDynamicSizing];
  topInset(() => {
    if (snapPoints) {
      let value = obj;
      if ("get" in obj) {
        value = obj.get();
      }
      let items = value;
    } else {
      items = [];
    }
    let tmp5 = items;
    if (!items) {
      tmp5 = enableDynamicSizing;
    }
    snapPoints(enableDynamicSizing[1])(tmp5, "'snapPoints' was not provided! please provide at least one snap point.");
    const mapped = items.map((num) => {
      let parsed = num;
      if (typeof num !== "number") {
        const _Number = Number;
        parsed = Number.parseInt(num.replace("%", ""), 10);
      }
      let tmp4 = parsed > 0;
      if (!tmp4) {
        tmp4 = parsed === callback(table[2]).INITIAL_SNAP_POINT;
      }
      callback2(table[1])(tmp4, "Snap point '" + num + "' is invalid. if you want to allow user to close the sheet, Please use 'enablePanDownToClose' prop.");
    });
    let tmp9 = "value" in items;
    let tmp2Result = tmp2(tmp3[1]);
    if (!tmp9) {
      tmp9 = items.length > 0;
    }
    if (!tmp9) {
      tmp9 = enableDynamicSizing;
    }
    tmp2Result(tmp9, "'snapPoints' was provided with no points! please provide at least one snap point.");
    let tmp13 = typeof index === "number";
    tmp2Result = tmp2(tmp3[1]);
    if (typeof index !== "number") {
      tmp13 = undefined === tmp12;
    }
    tmp2Result(tmp13, "'index' was provided but with wrong type ! expected type is a number.");
    let tmp16 = enableDynamicSizing;
    let tmp4 = snapPoints(enableDynamicSizing[1]);
    if (!enableDynamicSizing) {
      tmp16 = typeof tmp12 !== "number";
    }
    if (!tmp16) {
      let tmp17 = tmp12 >= -1;
      if (tmp17) {
        tmp17 = tmp12 <= items.length - 1;
      }
      tmp16 = tmp17;
    }
    snapPoints(enableDynamicSizing[1])(tmp16, `'index' was provided but out of the provided snap points range! expected value to be between -1, ${arr.length - 1}`);
    let tmp20 = typeof topInset === "number";
    const tmp2Result1 = snapPoints(enableDynamicSizing[1]);
    if (typeof topInset !== "number") {
      tmp20 = undefined === topInset;
    }
    snapPoints(enableDynamicSizing[1])(tmp20, "'topInset' was provided but with wrong type ! expected type is a number.");
    let tmp23 = typeof bottomInset === "number";
    const tmp2Result2 = snapPoints(enableDynamicSizing[1]);
    if (typeof bottomInset !== "number") {
      tmp23 = undefined === bottomInset;
    }
    snapPoints(enableDynamicSizing[1])(tmp23, "'bottomInset' was provided but with wrong type ! expected type is a number.");
  }, items);
};