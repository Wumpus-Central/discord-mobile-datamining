// === Module 15772: TableSliderRow ===

// Module 15772 (TableSliderRow)
import c from "c" /* 576 */;
import Text_Text from "Text/Text" /* 5271 */;
import TableRowGroupContext from "TableRowGroupContext" /* 6964 */;
import Card from "Card" /* 6965 */;
import Slider from "Slider" /* 15773 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let closure_2 = ["label", "start", "end", "value", "defaultValue", "minValue", "formatValue", "onChange"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5005);
let closure_9 = createStyles.createStyles({ header: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }, label: { flexShrink: 1 }, slider: { marginStart: -4, marginTop: 8 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TableRow/native/TableSliderRow.native.tsx");

export const TableSliderRow = ReactCompilerGating.isReactCompilerEnabled() ? (function TableSliderRow(arg0) {
  const cResult = c.c(39);
  if (cResult[0] !== arg0) {
    ({ label, start, end, value, defaultValue, minValue, formatValue, onChange } = arg0);
    closure_0 = onChange;
    const tmp15 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = defaultValue;
    cResult[2] = formatValue;
    cResult[3] = label;
    cResult[4] = onChange;
    cResult[5] = tmp15;
    cResult[6] = start;
    cResult[7] = end;
    cResult[8] = minValue;
    cResult[9] = value;
    let tmp12 = value;
    let tmp11 = minValue;
    let tmp10 = end;
    let tmp9 = start;
    let tmp8 = tmp15;
    let tmp6 = label;
    let tmp5 = formatValue;
    let tmp4 = defaultValue;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    closure_0 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    tmp10 = cResult[7];
    tmp11 = cResult[8];
    tmp12 = cResult[9];
  }
  let num11 = 0;
  if (undefined !== tmp11) {
    num11 = tmp11;
  }
  const tmp18 = closure_9();
  const context = noop.useContext(TableRowGroupContext.TableRowGroupContext);
  const tmp16 = undefined === tmp9 || tmp9;
  const tmp17 = undefined === tmp10 || tmp10;
  const tmpResult = Slider;
  [tmp21, tmp22] = Slider.useLatestSliderValue(tmp12, tmp4, num11);
  dependencyMap = tmp22;
  if (cResult[10] === onChange) {
    if (cResult[11] === tmp22) {
      let tmp23 = cResult[12];
    }
    let tmp24 = !context;
    if (!context) {
      tmp24 = tmp16;
    }
    let tmp25 = !context;
    if (!context) {
      tmp25 = tmp17;
    }
    if (cResult[13] === tmp6) {
      if (cResult[14] === tmp18.label) {
        let tmp26 = cResult[15];
      }
      if (cResult[16] === tmp5) {
        if (cResult[17] === tmp21) {
          let tmp29 = cResult[18];
        }
        if (cResult[19] === tmp18.header) {
          if (cResult[20] === tmp26) {
            if (cResult[21] === tmp29) {
              let tmp32 = cResult[22];
            }
            if (cResult[23] === tmp4) {
              if (cResult[24] === tmp5) {
                if (cResult[25] === tmp23) {
                  if (cResult[26] === tmp6) {
                    if (cResult[27] === num11) {
                      if (cResult[28] === tmp8) {
                        if (cResult[29] === tmp12) {
                          let tmp36 = cResult[30];
                        }
                        if (cResult[31] === tmp18.slider) {
                          if (cResult[32] === tmp36) {
                            let tmp42 = cResult[33];
                          }
                          if (cResult[34] === tmp42) {
                            if (cResult[35] === tmp24) {
                              if (cResult[36] === tmp25) {
                                if (cResult[37] === tmp32) {
                                  let tmp46 = cResult[38];
                                }
                                return tmp46;
                              }
                            }
                          }
                          const obj2 = { start: tmp24, end: tmp25, border: "none", shadow: "none", children: null };
                          const items = [tmp32, tmp42];
                          obj2.children = items;
                          const tmp48 = closure_1_8(Card.Card, obj2);
                          cResult[34] = tmp42;
                          cResult[35] = tmp24;
                          cResult[36] = tmp25;
                          cResult[37] = tmp32;
                          cResult[38] = tmp48;
                          tmp46 = tmp48;
                        }
                        const obj3 = { style: tmp18.slider, children: tmp36 };
                        const tmp45 = React5(View, obj3);
                        cResult[31] = tmp18.slider;
                        cResult[32] = tmp36;
                        cResult[33] = tmp45;
                        tmp42 = tmp45;
                      }
                    }
                  }
                }
              }
            }
            const obj4 = {};
            const merged = Object.assign(tmp8);
            obj4.value = tmp12;
            obj4.defaultValue = tmp4;
            obj4.minValue = num11;
            obj4.formatValue = tmp5;
            obj4.onChange = tmp23;
            obj4.accessibilityLabel = tmp6;
            const tmp41 = React5(Slider.Slider, obj4);
            cResult[23] = tmp4;
            cResult[24] = tmp5;
            cResult[25] = tmp23;
            cResult[26] = tmp6;
            cResult[27] = num11;
            cResult[28] = tmp8;
            cResult[29] = tmp12;
            cResult[30] = tmp41;
            tmp36 = tmp41;
          }
        }
        const obj5 = { style: tmp18.header, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
        const items1 = [tmp26, tmp29];
        obj5.children = items1;
        const tmp35 = closure_1_8(View, obj5);
        cResult[19] = tmp18.header;
        cResult[20] = tmp26;
        cResult[21] = tmp29;
        cResult[22] = tmp35;
        tmp32 = tmp35;
      }
      let tmp30 = null;
      if (null != tmp5) {
        const obj6 = { variant: "text-md/medium", color: "text-muted", children: tmp5(tmp21) };
        tmp30 = React5(Text_Text.Text, obj6);
      }
      cResult[16] = tmp5;
      cResult[17] = tmp21;
      cResult[18] = tmp30;
      tmp29 = tmp30;
    }
    const obj7 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp18.label, children: tmp6 };
    const tmp28 = React5(Text_Text.Text, obj7);
    cResult[13] = tmp6;
    cResult[14] = tmp18.label;
    cResult[15] = tmp28;
    tmp26 = tmp28;
  }
  function handleChange(arg0) {
    tmp22(arg0);
    if (closure_0 != null) {
      closure_0(arg0);
    }
  }
  cResult[10] = onChange;
  cResult[11] = tmp22;
  cResult[12] = handleChange;
  tmp23 = handleChange;
  const tmp20 = _slicedToArray(Slider.useLatestSliderValue(tmp12, tmp4, num11), 2);
}) : (function TableSliderRow(end) {
  ({ label, start } = end);
  if (start === undefined) {
    start = true;
  }
  let flag = end.end;
  if (flag === undefined) {
    flag = true;
  }
  ({ value, defaultValue, minValue } = end);
  if (minValue === undefined) {
    minValue = 0;
  }
  ({ formatValue, onChange: require } = end);
  const merged = Object.assign(end, Object.assign({ label: 0, start: 0, end: 0, value: 0, defaultValue: 0, minValue: 0, formatValue: 0, onChange: 0 }));
  const tmp2 = closure_9();
  const context = noop.useContext(TableRowGroupContext.TableRowGroupContext);
  const tmp6 = _slicedToArray(Slider.useLatestSliderValue(value, defaultValue, minValue), 2);
  closure_1 = tmp6[1];
  let tmp8 = !context;
  if (!context) {
    tmp8 = start;
  }
  const obj2 = { start: tmp8, end: null, border: "none", shadow: "none", children: null };
  let tmp9 = !context;
  if (!context) {
    tmp9 = flag;
  }
  obj2.end = tmp9;
  const obj3 = { style: tmp2.header, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  const items = [React5(Text_Text.Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp2.label, children: label }), ];
  let tmp11Result = null;
  if (null != formatValue) {
    const obj5 = { variant: "text-md/medium", color: "text-muted", children: formatValue(tmp6[0]) };
    tmp11Result = React5(Text_Text.Text, obj5);
  }
  items[1] = tmp11Result;
  obj3.children = items;
  const items1 = [closure_1_8(View, obj3), ];
  const obj6 = { style: tmp2.slider, children: null };
  const obj7 = {};
  const merged1 = Object.assign(merged);
  obj7.value = value;
  obj7.defaultValue = defaultValue;
  obj7.minValue = minValue;
  obj7.formatValue = formatValue;
  obj7.onChange = function handleChange(arg0) {
    closure_1(arg0);
    if (require != null) {
      require(arg0);
    }
  };
  obj7.accessibilityLabel = label;
  obj6.children = React5(Slider.Slider, obj7);
  items1[1] = React5(View, obj6);
  obj2.children = items1;
  return closure_1_8(Card.Card, obj2);
});