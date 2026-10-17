// === Module 12765: CheckpointStatNumber ===

// Module 12765 (CheckpointStatNumber)
import c from "c" /* 576 */;
import CheckpointNumbersRive from "CheckpointNumbersRive" /* 5009 */;
import CheckpointTextDefault from "CheckpointText" /* 12747 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const CHECKPOINT_PRIMARY = fn(5537).CHECKPOINT_PRIMARY;
const jsx = fn(21).jsx;
let c7 = 0.3625;
let c8 = 2.4774774774774775;
const createStyles = fn(5191);
let closure_9 = createStyles.createStyles({ rive: { position: "absolute", top: 0, left: 0 } });
const ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointStatNumber.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointStatNumber(arg0) {
  const cResult = c.c(26);
  ({ value, color, size } = arg0);
  if (undefined === color) {
    color = CHECKPOINT_PRIMARY;
  }
  let num = 40;
  if (undefined !== size) {
    num = size;
  }
  const tmp4 = closure_9();
  const result = String(value).length * num * c7;
  if (cResult[0] === num) {
    if (cResult[1] === result) {
      let tmp6 = cResult[2];
    }
    const result1 = num * c8;
    if (cResult[3] === num) {
      if (cResult[4] === result1) {
        let tmp9 = cResult[5];
      }
      if (cResult[6] === color) {
        if (cResult[7] === value) {
          let tmp10 = cResult[8];
        }
        if (cResult[9] !== color) {
          const obj2 = { color };
          cResult[9] = color;
          cResult[10] = obj2;
          let tmp11 = obj2;
        } else {
          tmp11 = cResult[10];
        }
        if (cResult[11] === tmp9) {
          if (cResult[12] === tmp4.rive) {
            let tmp12 = cResult[13];
          }
          if (cResult[14] === tmp11) {
            if (cResult[15] === value) {
              let tmp13 = cResult[16];
            }
            if (cResult[17] === tmp10) {
              if (cResult[18] === tmp13) {
                let tmp17 = cResult[19];
              }
              if (cResult[20] === tmp17) {
                if (cResult[21] === tmp12) {
                  let tmp20 = cResult[22];
                }
                if (cResult[23] === tmp6) {
                  if (cResult[24] === tmp20) {
                    let tmp24 = cResult[25];
                  }
                  return tmp24;
                }
                const obj3 = { style: tmp6, children: tmp20 };
                const tmp27 = <View style={tmp6}>{tmp20}</View>;
                cResult[23] = tmp6;
                cResult[24] = tmp20;
                cResult[25] = tmp27;
                tmp24 = tmp27;
              }
              const obj4 = { style: tmp12, children: tmp17 };
              const tmp23 = <View style={tmp12}>{tmp17}</View>;
              cResult[20] = tmp17;
              cResult[21] = tmp12;
              cResult[22] = tmp23;
              tmp20 = tmp23;
            }
            const obj5 = { stateMachine: "State Machine 1", fit: "contain", alignment: "center-left", dataBinding: tmp10, fallback: tmp13 };
            const tmp19 = jsx(CheckpointNumbersRive.CheckpointNumbersRive, { stateMachine: "State Machine 1", fit: "contain", alignment: "center-left", dataBinding: tmp10, fallback: tmp13 });
            cResult[17] = tmp10;
            cResult[18] = tmp13;
            cResult[19] = tmp19;
            tmp17 = tmp19;
          }
          const obj6 = { variant: "heading-xl/bold", style: tmp11, children: value };
          const tmp16 = jsx(CheckpointTextDefault, { variant: "heading-xl/bold", style: tmp11, children: value });
          cResult[14] = tmp11;
          cResult[15] = value;
          cResult[16] = tmp16;
          tmp13 = tmp16;
        }
        const items = [tmp4.rive, tmp9];
        cResult[11] = tmp9;
        cResult[12] = tmp4.rive;
        cResult[13] = items;
        tmp12 = items;
      }
      const obj7 = { DisplayValue: value, TextColor: color };
      cResult[6] = color;
      cResult[7] = value;
      cResult[8] = obj7;
      tmp10 = obj7;
    }
    const size1 = { height: num, width: result1 };
    cResult[3] = num;
    cResult[4] = result1;
    cResult[5] = size1;
    tmp9 = size1;
  }
  const size2 = { height: num, width: result };
  cResult[0] = num;
  cResult[1] = result;
  cResult[2] = size2;
  tmp6 = size2;
}) : (function CheckpointStatNumber(value) {
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
  const items = [num, value];
  const items1 = [num];
  const memo = noop.useMemo(() => {
    const size = { height: num, width: String(value).length * num * c7 };
    return size;
  }, items);
  const items2 = [color, value];
  const memo1 = noop.useMemo(() => {
    const size = { height: num, width: num * c8 };
    return size;
  }, items1);
  const items3 = [color];
  const memo2 = noop.useMemo(() => ({ DisplayValue: value, TextColor: color }), items2);
  const obj = { style: memo, children: null };
  const obj2 = { style: null, children: null };
  const items4 = [closure_9().rive, memo1];
  obj2.style = items4;
  const memo3 = noop.useMemo(() => ({ color }), items3);
  const tmp = closure_9();
  obj2.children = jsx(require("CheckpointNumbersRive").CheckpointNumbersRive, { stateMachine: "State Machine 1", fit: "contain", alignment: "center-left", dataBinding: memo2, fallback: jsx(color(num[7]), { variant: "heading-xl/bold", style: memo3, children: value }) });
  obj.children = <View style={null}>{null}</View>;
  return <View style={memo}>{null}</View>;
});