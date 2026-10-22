// discord_app/modules/checkpoint/native/components/CheckpointStatNumber.tsx
import c from "../../../../../_runtime/00576_c.js";
import CheckpointNumbersRive from "../../../../../discord_common/js/packages/design/components/Rive/native/generated/CheckpointNumbersRive.tsx";
import CheckpointTextDefault from "CheckpointText.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function getTextPixels(value) {
  let num = 0;
  const StringResult = String(value);
  while (tmp2 !== undefined) {
    let num2 = closure_9[tmp3];
    if (num2 == null) {
      num2 = 5;
    }
    num = num + num2;
    continue;
  }
  return Math.max(num - 1, 0);
}
const View = fn(17).View;
const CHECKPOINT_PRIMARY = fn(6002).CHECKPOINT_PRIMARY;
const jsx = fn(21).jsx;
let c7 = 2.5675675675675675;
let c8 = 28.7;
let closure_9 = { 1: 3, 2: 4, 3: 4, 5: 4, 7: 4, ".": 2, ",": 2 };
const createStyles = fn(4969);
let closure_10 = createStyles.createStyles({ rive: { position: "absolute", top: 0, left: 0 } });
const ReactCompilerGating = fn(558);
function getCheckpointStatNumberWidth(end) {
  let num = size;
  if (size === undefined) {
    num = 40;
  }
  return Math.min(getTextPixels(end), c8) * num * 0.08675000000000001;
}
let size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointStatNumber.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CheckpointStatNumber(arg0) {
      const cResult = c.c(30);
      ({ value, color, size } = arg0);
      if (undefined === color) {
        color = CHECKPOINT_PRIMARY;
      }
      let num = 40;
      if (undefined !== size) {
        num = size;
      }
      const tmp4 = closure_10();
      const tmp6 = getTextPixels(value);
      let num2 = 1;
      if (tmp6 > c8) {
        num2 = c8 / tmp6;
      }
      if (cResult[0] === num) {
        if (cResult[1] === value) {
          let tmp8 = cResult[2];
        }
        if (cResult[3] === num) {
          if (cResult[4] === tmp8) {
            let tmp10 = cResult[5];
          }
          const result = (1 - num2) * num * 0.54;
          const _Math = Math;
          const bound = Math.max(num * c7, tmp8);
          if (cResult[6] === num) {
            if (cResult[7] === result) {
              if (cResult[8] === bound) {
                let tmp15 = cResult[9];
              }
              const _String = String;
              const StringResult = String(value);
              if (cResult[10] === color) {
                if (cResult[11] === StringResult) {
                  let tmp17 = cResult[12];
                }
                if (cResult[13] !== color) {
                  const obj2 = { color };
                  cResult[13] = color;
                  cResult[14] = obj2;
                  let tmp18 = obj2;
                } else {
                  tmp18 = cResult[14];
                }
                if (cResult[15] === tmp15) {
                  if (cResult[16] === tmp4.rive) {
                    let tmp19 = cResult[17];
                  }
                  if (cResult[18] === tmp18) {
                    if (cResult[19] === value) {
                      let tmp20 = cResult[20];
                    }
                    if (cResult[21] === tmp17) {
                      if (cResult[22] === tmp20) {
                        let tmp24 = cResult[23];
                      }
                      if (cResult[24] === tmp19) {
                        if (cResult[25] === tmp24) {
                          let tmp27 = cResult[26];
                        }
                        if (cResult[27] === tmp10) {
                          if (cResult[28] === tmp27) {
                            let tmp31 = cResult[29];
                          }
                          return tmp31;
                        }
                        const obj3 = { style: tmp10, children: tmp27 };
                        const tmp34 = <View style={tmp10}>{tmp27}</View>;
                        cResult[27] = tmp10;
                        cResult[28] = tmp27;
                        cResult[29] = tmp34;
                        tmp31 = tmp34;
                      }
                      const obj4 = { style: tmp19, children: tmp24 };
                      const tmp30 = <View style={tmp19}>{tmp24}</View>;
                      cResult[24] = tmp19;
                      cResult[25] = tmp24;
                      cResult[26] = tmp30;
                      tmp27 = tmp30;
                    }
                    const obj5 = {
                      stateMachine: "State Machine 1",
                      fit: "contain",
                      alignment: "center-left",
                      dataBinding: tmp17,
                      fallback: tmp20,
                    };
                    const tmp26 = jsx(CheckpointNumbersRive.CheckpointNumbersRive, {
                      stateMachine: "State Machine 1",
                      fit: "contain",
                      alignment: "center-left",
                      dataBinding: tmp17,
                      fallback: tmp20,
                    });
                    cResult[21] = tmp17;
                    cResult[22] = tmp20;
                    cResult[23] = tmp26;
                    tmp24 = tmp26;
                  }
                  const obj6 = { variant: "heading-xl/bold", style: tmp18, children: value };
                  const tmp23 = jsx(CheckpointTextDefault, {
                    variant: "heading-xl/bold",
                    style: tmp18,
                    children: value,
                  });
                  cResult[18] = tmp18;
                  cResult[19] = value;
                  cResult[20] = tmp23;
                  tmp20 = tmp23;
                }
                const items = [tmp4.rive, tmp15];
                cResult[15] = tmp15;
                cResult[16] = tmp4.rive;
                cResult[17] = items;
                tmp19 = items;
              }
              const obj7 = { DisplayValueString: StringResult, TextColor: color };
              cResult[10] = color;
              cResult[11] = StringResult;
              cResult[12] = obj7;
              tmp17 = obj7;
            }
          }
          const size1 = { top: result, height: num, width: bound };
          cResult[6] = num;
          cResult[7] = result;
          cResult[8] = bound;
          cResult[9] = size1;
          tmp15 = size1;
        }
        const size2 = { height: num, width: tmp8 };
        cResult[3] = num;
        cResult[4] = tmp8;
        cResult[5] = size2;
        tmp10 = size2;
      }
      let num3 = num;
      if (num === undefined) {
        num3 = 40;
      }
      const result1 = Math.min(getTextPixels(value), c8) * num3 * 0.08675000000000001;
      cResult[0] = num;
      cResult[1] = value;
      cResult[2] = result1;
      tmp8 = result1;
    }
  : function CheckpointStatNumber(value) {
      value = value.value;
      require = value;
      let color = value.color;
      if (color === undefined) {
        color = CHECKPOINT_PRIMARY;
      }
      let num = value.size;
      if (num === undefined) {
        num = 40;
      }
      c4 = undefined;
      const tmp3 = getTextPixels(value);
      let num2 = 1;
      if (tmp3 > c8) {
        num2 = c8 / tmp3;
      }
      let num3 = num;
      if (num === undefined) {
        num3 = 40;
      }
      const result = Math.min(getTextPixels(value), c8) * num3 * 0.08675000000000001;
      c4 = result;
      const items = [num, result];
      const items1 = [num2, num, result];
      const memo = num2.useMemo(() => {
        const size = { height: num, width };
        return size;
      }, items);
      const items2 = [color, value];
      const memo1 = num2.useMemo(() => {
        const size = { top: (1 - num2) * num * 0.54, height: num, width: Math.max(num * c7, c4) };
        return size;
      }, items1);
      const items3 = [color];
      const memo2 = num2.useMemo(() => ({ DisplayValueString: String(value), TextColor: color }), items2);
      const obj = { style: memo, children: null };
      const obj2 = { style: null, children: null };
      const items4 = [closure_10().rive, memo1];
      obj2.style = items4;
      const memo3 = num2.useMemo(() => ({ color }), items3);
      const tmp = closure_10();
      obj2.children = jsx(require("CheckpointNumbersRive").CheckpointNumbersRive, {
        stateMachine: "State Machine 1",
        fit: "contain",
        alignment: "center-left",
        dataBinding: memo2,
        fallback: jsx(color(num[7]), { variant: "heading-xl/bold", style: memo3, children: value }),
      });
      obj.children = <c4 style={null}>{null}</c4>;
      return <c4 style={memo}>{null}</c4>;
    };
export { getCheckpointStatNumberWidth };
