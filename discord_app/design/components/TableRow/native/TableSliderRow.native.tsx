// === Module 15812: TableSliderRow ===

// Module 15812 (TableSliderRow)
import Text_Text from "Text/Text" /* 5619 */;
import TableRowGroupContext from "TableRowGroupContext" /* 6970 */;
import Card from "Card" /* 6971 */;
import Slider from "Slider" /* 15813 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5009);
let closure_7 = createStyles.createStyles({ header: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }, label: { flexShrink: 1 }, slider: { marginStart: -4, marginTop: 8 } });
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TableRow/native/TableSliderRow.native.tsx");

export function TableSliderRow(end) {
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
  const tmp2 = closure_7();
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
  const items = [hasOwnProperty(Text_Text.Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp2.label, children: label }), ];
  let tmp11Result = null;
  if (null != formatValue) {
    const obj5 = { variant: "text-md/medium", color: "text-muted", children: formatValue(tmp6[0]) };
    tmp11Result = hasOwnProperty(Text_Text.Text, obj5);
  }
  items[1] = tmp11Result;
  obj3.children = items;
  const items1 = [timestampProducer(View, obj3), ];
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
  obj6.children = hasOwnProperty(Slider.Slider, obj7);
  items1[1] = hasOwnProperty(View, obj6);
  obj2.children = items1;
  return timestampProducer(Card.Card, obj2);
}