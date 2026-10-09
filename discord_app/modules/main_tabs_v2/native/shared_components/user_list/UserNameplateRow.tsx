// === Module 10244: UserNameplateRow ===

// Module 10244 (UserNameplateRow)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 4779 */;
import TableRowDivider from "TableRowDivider" /* 6181 */;
import TableRow from "TableRow" /* 6186 */;
import TableRowGroupContext from "TableRowGroupContext" /* 6187 */;
import Card from "Card" /* 6188 */;
import NameplateDefault from "Nameplate" /* 9002 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["label", "subLabel", "icon", "trailing", "arrow", "onPress", "onPressIn", "onPressOut", "disabled", "start", "end", "labelLineClamp", "subLabelLineClamp", "variant", "draggable", "dragHandlePressableProps", "nameplate", "isPreviewRow"];
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { card: { padding: 0, paddingRight: nativeDefault.space.PX_40, overflow: "hidden" } };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { padding: 0, paddingRight: nativeDefault.space.PX_40, overflow: "hidden" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/UserNameplateRow.tsx");

export const UserNameplateRow = ReactCompilerGating.isReactCompilerEnabled() ? (function UserNameplateRow(onPressOut) {
  const cResult = c.c(57);
  if (cResult[0] !== onPressOut) {
    ({ label, subLabel, icon, trailing, arrow, onPress, onPressIn } = onPressOut);
    closure_0 = onPressIn;
    onPressOut = onPressOut.onPressOut;
    closure_1 = onPressOut;
    ({ disabled, start, end, labelLineClamp, subLabelLineClamp, variant, draggable, dragHandlePressableProps, nameplate, isPreviewRow } = onPressOut);
    const tmp25 = _objectWithoutProperties(onPressOut, closure_3);
    cResult[0] = onPressOut;
    cResult[1] = arrow;
    cResult[2] = tmp25;
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
    let tmp21 = isPreviewRow;
    let tmp12 = nameplate;
    let tmp8 = end;
  } else {
    tmp8 = cResult[5];
    tmp12 = cResult[9];
    closure_0 = cResult[11];
    closure_1 = cResult[12];
    tmp21 = cResult[18];
  }
  closure_10();
  const context = noop.useContext(TableRowGroupContext.TableRowGroupContext);
  let tmp31 = !context;
  if (!context) {
    tmp31 = true === tmp8;
  }
  [tmp34, dependencyMap] = noop.useState(false);
  if (cResult[20] !== onPressIn) {
    class H {
      constructor(arg0) {
        tmp = closure_2(true);
        if (closure_0 != null) {
          tmp3 = onPressOut;
          tmp2Result = tmp2(onPressOut);
        }
        return;
      }
    }
    cResult[20] = onPressIn;
    cResult[21] = H;
  } else {
    class H {
      constructor(arg0) {
        tmp = closure_2(true);
        if (closure_0 != null) {
          tmp3 = onPressOut;
          tmp2Result = tmp2(onPressOut);
        }
        return;
      }
    }
  }
  if (cResult[22] !== tmp15) {
    class Q {
      constructor(arg0) {
        tmp = closure_2(false);
        if (closure_1 != null) {
          tmp3 = onPressOut;
          tmp2Result = tmp2(onPressOut);
        }
        return;
      }
    }
    cResult[22] = tmp15;
    cResult[23] = Q;
  } else {
    class Q {
      constructor(arg0) {
        tmp = closure_2(false);
        if (closure_1 != null) {
          tmp3 = onPressOut;
          tmp2Result = tmp2(onPressOut);
        }
        return;
      }
    }
  }
  const tmp33 = _slicedToArray(noop.useState(false), 2);
  const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS);
  if (cResult[24] === tmp34) {
    class Q {
      constructor(arg0) {
        tmp = closure_2(false);
        if (closure_1 != null) {
          tmp3 = onPressOut;
          tmp2Result = tmp2(onPressOut);
        }
        return;
      }
    }
  }
  const tmpResult = useToken;
  cResult[24] = tmp34;
  cResult[25] = undefined !== tmp21 && tmp21;
  cResult[26] = tmp12;
  cResult[27] = React5(NameplateDefault, { nameplate: tmp12, isPressed: tmp34, invertPressOpacity: true, fullOpacity: undefined !== tmp21 && tmp21, animate: undefined !== tmp21 && tmp21 });
  const tmp39 = React5(NameplateDefault, { nameplate: tmp12, isPressed: tmp34, invertPressOpacity: true, fullOpacity: undefined !== tmp21 && tmp21, animate: undefined !== tmp21 && tmp21 });
}) : (function UserNameplateRow(onPressOut) {
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
  const context = noop.useContext(TableRowGroupContext.TableRowGroupContext);
  let tmp6 = !context;
  if (!context) {
    tmp6 = true === end;
  }
  const tmp7 = _slicedToArray(noop.useState(false), 2);
  closure_2 = tmp7[1];
  const items = [onPressIn];
  const items1 = [onPressOut];
  const callback = noop.useCallback((arg0) => {
    closure_2(true);
    if (onPressIn != null) {
      tmp2(arg0);
    }
  }, items);
  const callback1 = noop.useCallback((arg0) => {
    closure_2(false);
    if (onPressOut != null) {
      tmp2(arg0);
    }
  }, items1);
  const tmp2 = closure_10();
  const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS);
  const obj2 = { shadow: "none", border: "none", radius: token, start: null, end: null, onPress: null, onPressIn: null, onPressOut: null, disabled: null, style: null };
  let tmp13 = !context;
  if (!context) {
    tmp13 = true === start;
  }
  obj2.start = tmp13;
  obj2.end = tmp6;
  obj2.onPress = onPress;
  obj2.onPressIn = callback;
  obj2.onPressOut = callback1;
  obj2.disabled = flag;
  obj2.style = tmp2.card;
  const merged1 = Object.assign(merged);
  const items2 = [React5(NameplateDefault, { nameplate, isPressed: tmp7[0], invertPressOpacity: true, fullOpacity: isPreviewRow, animate: isPreviewRow }), React5(TableRow.TableRowInner, { height: "100%", label, subLabel, icon, trailing, arrow, disabled: flag, labelLineClamp, subLabelLineClamp, variant, draggable, dragHandlePressableProps })];
  obj2.children = items2;
  const tmp12Result = closure_1_8(Card.Card, obj2);
  let tmp12Result2 = tmp12Result;
  if (!context) {
    tmp12Result2 = tmp12Result;
    if (!tmp6) {
      const obj3 = { children: null };
      const items3 = [tmp12Result, ];
      const obj4 = { adjustSpacingForIcon: null != icon };
      items3[1] = React5(TableRowDivider.TableRowDivider, obj4);
      obj3.children = items3;
      tmp12Result2 = closure_1_8(options, obj3);
    }
  }
  return tmp12Result2;
});