// === Module 15159: DisplayNameStylesSheetHeader ===

// Module 15159 (DisplayNameStylesSheetHeader)
import nativeDefault from "native" /* 587 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6644 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let closure_2 = ["leading", "trailing"];
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = { trailingButtonClearance: { paddingTop: nativeDefault.space.PX_8 }, centeredAccessory: { justifyContent: "center", alignItems: "center" } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { paddingTop: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesSheetHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(19);
  if (cResult[0] !== arg0) {
    ({ leading, trailing } = arg0);
    const tmp9 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = leading;
    cResult[2] = tmp9;
    cResult[3] = trailing;
    let tmp6 = trailing;
    let tmp5 = tmp9;
    let tmp4 = leading;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  const tmp10 = closure_6();
  _require = tmp10;
  if (cResult[4] !== tmp10.centeredAccessory) {
    const fn = function p(children) {
      let tmp = children;
      if (null != children) {
        const obj = { style: centeredAccessory.centeredAccessory, children };
        tmp = <View style={centeredAccessory.centeredAccessory}>{children}</View>;
      }
      return tmp;
    };
    cResult[4] = tmp10.centeredAccessory;
    cResult[5] = fn;
    let tmp11 = fn;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] === tmp11) {
    if (cResult[7] === tmp4) {
      let tmp13 = cResult[8];
    }
    if (cResult[9] === tmp11) {
      if (cResult[10] === tmp6) {
        let tmp15 = cResult[11];
      }
      if (cResult[12] === tmp5) {
        if (cResult[13] === tmp13) {
          if (cResult[14] === tmp15) {
            let tmp17 = cResult[15];
          }
          if (cResult[16] === tmp10.trailingButtonClearance) {
            if (cResult[17] === tmp17) {
              let tmp23 = cResult[18];
            }
            return tmp23;
          }
          const obj2 = { style: tmp12, children: tmp17 };
          const tmp26 = <View style={tmp12}>{tmp17}</View>;
          cResult[16] = tmp10.trailingButtonClearance;
          cResult[17] = tmp17;
          cResult[18] = tmp26;
          tmp23 = tmp26;
        }
      }
      const obj3 = {};
      const merged = Object.assign(tmp5);
      obj3.leading = tmp13;
      obj3.trailing = tmp15;
      const tmp22 = jsx(tmp(6644).BottomSheetTitleHeader, {});
      cResult[12] = tmp5;
      cResult[13] = tmp13;
      cResult[14] = tmp15;
      cResult[15] = tmp22;
      tmp17 = tmp22;
    }
    const tmp11Result = tmp11(tmp6);
    cResult[9] = tmp11;
    cResult[10] = tmp6;
    cResult[11] = tmp11Result;
    tmp15 = tmp11Result;
  }
  const tmp11Result2 = tmp11(tmp4);
  cResult[6] = tmp11;
  cResult[7] = tmp4;
  cResult[8] = tmp11Result2;
  tmp13 = tmp11Result2;
  let obj = require("c");
  tmp = _require;
}) : ((arg0) => {
  ({ leading, trailing } = arg0);
  const merged = Object.assign(arg0, Object.assign({ leading: 0, trailing: 0 }));
  const tmp2 = closure_6();
  const obj = { style: tmp2.trailingButtonClearance, children: null };
  const obj2 = {};
  const merged1 = Object.assign(merged);
  let tmp3Result = leading;
  if (null != leading) {
    const obj3 = { style: tmp2.centeredAccessory, children: leading };
    tmp3Result = <View style={tmp2.centeredAccessory}>{leading}</View>;
  }
  obj2.leading = tmp3Result;
  let tmp3Result2 = trailing;
  if (null != trailing) {
    const obj4 = { style: tmp2.centeredAccessory, children: trailing };
    tmp3Result2 = <View style={tmp2.centeredAccessory}>{trailing}</View>;
  }
  obj2.trailing = tmp3Result2;
  obj.children = jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, {});
  return <View style={tmp2.trailingButtonClearance}>{null}</View>;
});