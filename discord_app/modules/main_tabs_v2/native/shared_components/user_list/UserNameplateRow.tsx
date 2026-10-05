// === Module 10646: UserNameplateRow ===

// Module 10646 (UserNameplateRow)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 4580 */;
import TableRowDivider from "TableRowDivider" /* 5988 */;
import TableRow from "TableRow" /* 5993 */;
import react3 from "react" /* 5994 */;
import Card_Card from "Card/Card" /* 5995 */;
import NameplateDefault from "Nameplate" /* 8474 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let onPressOut;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let closure_3 = ["label", "subLabel", "icon", "trailing", "arrow", "onPress", "onPressIn", "onPressOut", "disabled", "start", "end", "labelLineClamp", "subLabelLineClamp", "variant", "draggable", "dragHandlePressableProps", "nameplate", "isPreviewRow"];
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let obj = { card: obj2 };
obj2 = { padding: 0, paddingRight: nativeDefault.space.PX_40, overflow: "hidden" };
let closure_10 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((onPressOut) => {
  let arrow;
  let closure_129_2;
  let disabled;
  let dragHandlePressableProps;
  let draggable;
  let end;
  let icon;
  let isPreviewRow;
  let label;
  let labelLineClamp;
  let nameplate;
  let onPress;
  let onPressIn;
  let start;
  let subLabel;
  let subLabelLineClamp;
  let tmp12;
  let tmp21;
  let tmp33;
  let trailing;
  let variant;
  const obj = react2;
  const cResult = obj.c(57);
  if (cResult[0] !== onPressOut) {
    ({ label, subLabel, icon, trailing, arrow, onPress, onPressIn } = onPressOut);
    let closure_0 = onPressIn;
    onPressOut = onPressOut.onPressOut;
    let closure_1 = onPressOut;
    ({ disabled, start, end, labelLineClamp, subLabelLineClamp, variant, draggable, dragHandlePressableProps, nameplate, isPreviewRow } = onPressOut);
    cResult[0] = onPressOut;
    cResult[1] = arrow;
    cResult[2] = _objectWithoutProperties(onPressOut, closure_3);
    cResult[3] = dragHandlePressableProps;
    cResult[4] = draggable;
    cResult[5] = end;
    cResult[6] = icon;
    cResult[7] = label;
    cResult[8] = labelLineClamp;
    cResult[9] = nameplate;
    cResult[10] = onPress;
    cResult[11] = onPressIn;
    cResult[12] = onPressOut;
    cResult[13] = start;
    cResult[14] = subLabel;
    cResult[15] = subLabelLineClamp;
    cResult[16] = disabled;
    cResult[17] = variant;
    cResult[18] = isPreviewRow;
    cResult[19] = trailing;
    tmp21 = isPreviewRow;
    tmp12 = nameplate;
    const tmp25 = _objectWithoutProperties(onPressOut, closure_3);
  } else {
    tmp12 = cResult[9];
    closure_0 = cResult[11];
    closure_1 = cResult[12];
    tmp21 = cResult[18];
  }
  closure_10();
  const context = react.useContext(react3.TableRowGroupContext);
  [tmp33, closure_129_2] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  if (cResult[20] !== onPressIn) {
    const fn = function k(arg0) {
      closure_1_2(true);
      if (closure_0 != null) {
        tmp2(arg0);
      }
    };
    cResult[20] = onPressIn;
    cResult[21] = fn;
  }
  if (cResult[22] !== tmp15) {
    class Q {
      constructor(arg0) {
        closure_1_2(false);
        if (closure_1 != null) {
          tmp2(arg0);
        }
      }
    }
    cResult[22] = tmp15;
    cResult[23] = Q;
  } else {
    class Q {
      constructor(arg0) {
        closure_1_2(false);
        if (closure_1 != null) {
          tmp2(arg0);
        }
      }
    }
  }
  const tmpResult = useToken;
  const token = tmpResult.useToken(nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS);
  if (cResult[24] === tmp33) {
    class Q {
      constructor(arg0) {
        closure_1_2(false);
        if (closure_1 != null) {
          tmp2(arg0);
        }
      }
    }
  }
  cResult[24] = tmp33;
  cResult[25] = undefined !== tmp21 && tmp21;
  cResult[26] = tmp12;
  cResult[27] = metroImportDefault(NameplateDefault, { nameplate: tmp12, isPressed: tmp33, invertPressOpacity: true, fullOpacity: undefined !== tmp21 && tmp21, animate: undefined !== tmp21 && tmp21 });
  metroImportDefault(NameplateDefault, { nameplate: tmp12, isPressed: tmp33, invertPressOpacity: true, fullOpacity: undefined !== tmp21 && tmp21, animate: undefined !== tmp21 && tmp21 });
}) : ((onPressOut) => {
  let arrow;
  let closure_2;
  let dragHandlePressableProps;
  let draggable;
  let end;
  let first;
  let icon;
  let isPreviewRow;
  let items2;
  let items3;
  let label;
  let labelLineClamp;
  let nameplate;
  let onPress;
  let onPressIn;
  let start;
  let subLabel;
  let subLabelLineClamp;
  let tmp14;
  let trailing;
  let variant;
  ({ icon, onPressIn } = onPressOut);
  onPressOut = onPressOut.onPressOut;
  let flag = onPressOut.disabled;
  ({ label, subLabel, trailing, arrow, onPress } = onPressOut);
  if (flag === undefined) {
    flag = false;
  }
  ({ variant, start, end, labelLineClamp, subLabelLineClamp } = onPressOut);
  if (variant === undefined) {
    variant = "default";
  }
  ({ isPreviewRow, draggable, dragHandlePressableProps, nameplate } = onPressOut);
  if (isPreviewRow === undefined) {
    isPreviewRow = false;
  }
  const merged = Object.assign(onPressOut, Object.assign({ label: 0, subLabel: 0, icon: 0, trailing: 0, arrow: 0, onPress: 0, onPressIn: 0, onPressOut: 0, disabled: 0, start: 0, end: 0, labelLineClamp: 0, subLabelLineClamp: 0, variant: 0, draggable: 0, dragHandlePressableProps: 0, nameplate: 0, isPreviewRow: 0 }));
  closure_2 = undefined;
  const tmp2 = closure_10();
  const context = react.useContext(react3.TableRowGroupContext);
  [first, closure_2] = react.useState(false);
  const items = [onPressIn];
  const items1 = [onPressOut];
  const callback = react.useCallback((arg0) => {
    closure_2(true);
    if (onPressIn != null) {
      tmp2(arg0);
    }
  }, items);
  const callback1 = react.useCallback((arg0) => {
    closure_2(false);
    if (onPressOut != null) {
      tmp2(arg0);
    }
  }, items1);
  const tmp3Result = useToken;
  const token = tmp3Result.useToken(nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS);
  let obj2 = { shadow: "none", border: "none", radius: token, start: tmp14, end: tmp6, onPress, onPressIn: callback, onPressOut: callback1, disabled: flag, style: tmp2.card, children: items2 };
  tmp14 = !context;
  const Card = Card_Card.Card;
  if (!context) {
    tmp14 = true === start;
  }
  const merged1 = Object.assign(merged);
  items2 = [metroImportDefault(NameplateDefault, { nameplate, isPressed: first, invertPressOpacity: true, fullOpacity: isPreviewRow, animate: isPreviewRow }), ];
  const TableRowInner = TableRow.TableRowInner;
  items2[1] = metroImportDefault(TableRowInner, { height: "100%", label, subLabel, icon, trailing, arrow, disabled: flag, labelLineClamp, subLabelLineClamp, variant, draggable, dragHandlePressableProps });
  const tmp13Result = metroImportAll(Card, obj2);
  let tmp13Result2 = tmp13Result;
  if (!context) {
    tmp13Result2 = tmp13Result;
    if (!(!context && true === end)) {
      let obj3 = { children: items3 };
      items3 = [tmp13Result, ];
      let obj4 = { adjustSpacingForIcon: null != icon };
      items3[1] = metroImportDefault(TableRowDivider.TableRowDivider, obj4);
      tmp13Result2 = metroImportAll(React4, obj3);
    }
  }
  return tmp13Result2;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/UserNameplateRow.tsx");

export const UserNameplateRow = tmp3;