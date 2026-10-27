// === Module 12995: CheckpointGlobalStatNumber ===

// Module 12995 (CheckpointGlobalStatNumber)
import _mod17 from "module_17" /* 17 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1125 */;
import CheckpointApngPlayerDefault from "CheckpointApngPlayer" /* 12992 */;
import CheckpointStatNumber from "CheckpointStatNumber" /* 12996 */;
import CheckpointCountUpStatNumberDefault from "CheckpointCountUpStatNumber" /* 12997 */;
import _modDef12998 from "module_12998" /* 12998 */;
import _modDef12999 from "module_12999" /* 12999 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4972 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const CheckpointStatNumberDefault = CheckpointStatNumber;

const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = { container: { flexDirection: "row", flexWrap: "wrap", alignItems: "center", columnGap: nativeDefault.space.PX_8 }, croppedContainer: null, uncroppedContainer: null, clip: null, value: null, globe: null };
let obj2 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", columnGap: nativeDefault.space.PX_8 };
obj.croppedContainer = { marginTop: -nativeDefault.space.PX_30, marginBottom: -nativeDefault.space.PX_20 };
let obj3 = { marginTop: -nativeDefault.space.PX_30, marginBottom: -nativeDefault.space.PX_20 };
obj.uncroppedContainer = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
let obj4 = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
obj.clip = { height: 96 - 2 * nativeDefault.space.PX_24, marginVertical: nativeDefault.space.PX_24, paddingRight: nativeDefault.space.PX_8, marginRight: -nativeDefault.space.PX_8, overflow: "hidden" };
let obj5 = { height: 96 - 2 * nativeDefault.space.PX_24, marginVertical: nativeDefault.space.PX_24, paddingRight: nativeDefault.space.PX_8, marginRight: -nativeDefault.space.PX_8, overflow: "hidden" };
obj.value = { marginTop: -nativeDefault.space.PX_24 };
obj.globe = { width: 75, height: 56 };
let closure_6 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function GlobalStatValue(value) {
  let tmp = dependencyMap;
  const cResult = c.c(4);
  value = value.value;
  if (typeof value === "string") {
    if (cResult[0] !== value) {
      const obj2 = { value, size: 96 };
      tmp = React4(CheckpointStatNumberDefault, obj2);
      cResult[0] = value;
      cResult[1] = tmp;
    }
  } else {
    if (cResult[2] !== value) {
      const obj3 = { end: value, size: 96 };
      const tmp6 = React4(CheckpointCountUpStatNumberDefault, obj3);
      cResult[2] = value;
      cResult[3] = tmp6;
      let tmp3 = tmp6;
    } else {
      tmp3 = cResult[3];
    }
    return tmp3;
  }
}) : (function GlobalStatValue(value) {
  value = value.value;
  if (typeof value === "string") {
    const obj = { value, size: 96 };
    let tmp4 = React4(CheckpointStatNumberDefault, obj);
  } else {
    const obj2 = { end: value, size: 96 };
    tmp4 = React4(CheckpointCountUpStatNumberDefault, obj2);
  }
  return tmp4;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let obj6 = { marginTop: -nativeDefault.space.PX_24 };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointGlobalStatNumber.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointGlobalStatNumber(arg0) {
  const cResult = c.c(33);
  ({ value, accessibilityLabel } = arg0);
  const iter = closure_6();
  if (cResult[0] === accessibilityLabel) {
    if (cResult[1] === value) {
      let tmp4 = cResult[2];
    }
    if (tmpResult.isCheckpointStatNumberShrunk(value)) {
      if (cResult[3] === iter.container) {
        if (cResult[4] === iter.croppedContainer) {
          let tmp21 = cResult[5];
        }
        if (cResult[6] !== value) {
          const obj2 = { value };
          const tmp25 = React4(closure_7, obj2);
          cResult[6] = value;
          cResult[7] = tmp25;
          let tmp22 = tmp25;
        } else {
          tmp22 = cResult[7];
        }
        if (cResult[8] === iter.value) {
          if (cResult[9] === tmp22) {
            let tmp26 = cResult[10];
          }
          if (cResult[11] === iter.clip) {
            if (cResult[12] === tmp26) {
              let tmp30 = cResult[13];
            }
            if (cResult[14] !== iter.globe) {
              const obj3 = { animatedUri: _modDef12998, staticUri: _modDef12999, style: iter.globe };
              const tmp38 = React4(CheckpointApngPlayerDefault, obj3);
              cResult[14] = iter.globe;
              cResult[15] = tmp38;
              let tmp34 = tmp38;
            } else {
              tmp34 = cResult[15];
            }
            if (cResult[16] === tmp4) {
              if (cResult[17] === tmp21) {
                if (cResult[18] === tmp30) {
                }
              }
            }
            const obj4 = { accessible: true, accessibilityLabel: tmp4, style: tmp21, children: null };
            const items = [tmp30, tmp34];
            obj4.children = items;
            const tmp42 = hasOwnProperty(View, obj4);
            cResult[16] = tmp4;
            cResult[17] = tmp21;
            cResult[18] = tmp30;
            cResult[19] = tmp34;
            cResult[20] = tmp42;
          }
          const obj5 = { style: iter.clip, children: tmp26 };
          const tmp33 = React4(View, obj5);
          cResult[11] = iter.clip;
          cResult[12] = tmp26;
          cResult[13] = tmp33;
          tmp30 = tmp33;
        }
        const obj6 = { style: iter.value, children: tmp22 };
        const tmp29 = React4(View, obj6);
        cResult[8] = iter.value;
        cResult[9] = tmp22;
        cResult[10] = tmp29;
        tmp26 = tmp29;
      }
      const items1 = [, ];
      ({ container: arr3[0], croppedContainer: arr3[1] } = iter);
      cResult[3] = iter.container;
      cResult[4] = iter.croppedContainer;
      cResult[5] = items1;
      tmp21 = items1;
    } else {
      if (cResult[21] === iter.container) {
        if (cResult[22] === iter.uncroppedContainer) {
          let tmp7 = cResult[23];
        }
        if (cResult[24] !== value) {
          const obj7 = { value };
          const tmp11 = React4(closure_7, obj7);
          cResult[24] = value;
          cResult[25] = tmp11;
          let tmp8 = tmp11;
        } else {
          tmp8 = cResult[25];
        }
        if (cResult[26] !== iter.globe) {
          const obj8 = { animatedUri: _modDef12998, staticUri: _modDef12999, style: iter.globe };
          const tmp16 = React4(CheckpointApngPlayerDefault, obj8);
          cResult[26] = iter.globe;
          cResult[27] = tmp16;
          let tmp12 = tmp16;
        } else {
          tmp12 = cResult[27];
        }
        if (cResult[28] === tmp4) {
          if (cResult[29] === tmp7) {
            if (cResult[30] === tmp8) {
              if (cResult[31] === tmp12) {
                let tmp17 = cResult[32];
              }
              return tmp17;
            }
          }
        }
        const obj9 = { accessible: true, accessibilityLabel: tmp4, style: tmp7, children: null };
        const items2 = [tmp8, tmp12];
        obj9.children = items2;
        const tmp20 = hasOwnProperty(View, obj9);
        cResult[28] = tmp4;
        cResult[29] = tmp7;
        cResult[30] = tmp8;
        cResult[31] = tmp12;
        cResult[32] = tmp20;
        tmp17 = tmp20;
      }
      const items3 = [, ];
      ({ container: arr[0], uncroppedContainer: arr[1] } = iter);
      cResult[21] = iter.container;
      cResult[22] = iter.uncroppedContainer;
      cResult[23] = items3;
      tmp7 = items3;
    }
    tmpResult = CheckpointStatNumber;
  }
  let tmp5 = accessibilityLabel;
  if (accessibilityLabel == null) {
    let toLocaleStringResult = value;
    if (typeof value === "number") {
      toLocaleStringResult = value.toLocaleString(util.intl.currentLocale);
    }
    tmp5 = toLocaleStringResult;
  }
  cResult[0] = accessibilityLabel;
  cResult[1] = value;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : (function CheckpointGlobalStatNumber(arg0) {
  ({ value, accessibilityLabel } = arg0);
  const iter = closure_6();
  if (accessibilityLabel == null) {
    let toLocaleStringResult = value;
    if (typeof value === "number") {
      toLocaleStringResult = value.toLocaleString(util.intl.currentLocale);
    }
    accessibilityLabel = toLocaleStringResult;
  }
  const obj2 = { accessible: true, accessibilityLabel, style: null, children: null };
  const items = [iter.container, ];
  if (obj.isCheckpointStatNumberShrunk(value)) {
    items[1] = iter.croppedContainer;
    obj2.style = items;
    const obj3 = { style: iter.clip, children: null };
    const obj4 = { style: iter.value, children: null };
    const obj5 = { value };
    obj4.children = React4(closure_7, obj5);
    obj3.children = React4(View, obj4);
    const items1 = [React4(View, obj3), ];
    const obj6 = { animatedUri: _modDef12998, staticUri: _modDef12999, style: iter.globe };
    items1[1] = React4(CheckpointApngPlayerDefault, obj6);
    obj2.children = items1;
    let tmp3Result = hasOwnProperty(View, obj2);
  } else {
    items[1] = iter.uncroppedContainer;
    obj2.style = items;
    const obj7 = { value };
    const items2 = [React4(closure_7, obj7), ];
    const obj8 = { animatedUri: _modDef12998, staticUri: _modDef12999, style: iter.globe };
    items2[1] = React4(CheckpointApngPlayerDefault, obj8);
    obj2.children = items2;
    tmp3Result = hasOwnProperty(View, obj2);
  }
  return tmp3Result;
});