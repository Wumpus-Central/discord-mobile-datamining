// discord_app/modules/main_tabs_v2/native/shared_components/user_list/UserNameplateRow.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../../design/tokens/native/useToken.tsx";
import TableRowDivider from "../../../../../design/components/TableRow/native/TableRowDivider.native.tsx";
import TableRow from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroupContext from "../../../../../design/components/TableRow/native/TableRowGroupContext.native.tsx";
import Card from "../../../../../design/components/Card/native/Card.native.tsx";
import NameplateDefault from "../../../../collectibles/nameplates/native/Nameplate.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
const createStyles = fn(4638);
let obj2 = { card: { padding: 0, paddingRight: nativeDefault.space.PX_40, overflow: "hidden" } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/user_list/UserNameplateRow.tsx",
);

export const UserNameplateRow = function UserNameplateRow(onPressOut) {
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
  const merged = Object.assign(
    onPressOut,
    Object.assign({
      label: 0,
      subLabel: 0,
      icon: 0,
      trailing: 0,
      arrow: 0,
      onPress: 0,
      onPressIn: 0,
      onPressOut: 0,
      disabled: 0,
      start: 0,
      end: 0,
      labelLineClamp: 0,
      subLabelLineClamp: 0,
      variant: 0,
      draggable: 0,
      dragHandlePressableProps: 0,
      nameplate: 0,
      isPreviewRow: 0,
    }),
  );
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
  const tmp2 = closure_8();
  const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS);
  const obj2 = {
    shadow: "none",
    border: "none",
    radius: token,
    start: null,
    end: null,
    onPress: null,
    onPressIn: null,
    onPressOut: null,
    disabled: null,
    style: null,
  };
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
  const items2 = [
    hasOwnProperty(NameplateDefault, {
      nameplate,
      isPressed: tmp7[0],
      invertPressOpacity: true,
      fullOpacity: isPreviewRow,
      animate: isPreviewRow,
    }),
    hasOwnProperty(TableRow.TableRowInner, {
      height: "100%",
      label,
      subLabel,
      icon,
      trailing,
      arrow,
      disabled: flag,
      labelLineClamp,
      subLabelLineClamp,
      variant,
      draggable,
      dragHandlePressableProps,
    }),
  ];
  obj2.children = items2;
  const tmp12Result = timestampProducer(Card.Card, obj2);
  let tmp12Result2 = tmp12Result;
  if (!context) {
    tmp12Result2 = tmp12Result;
    if (!tmp6) {
      const obj3 = { children: null };
      const items3 = [tmp12Result];
      const obj4 = { adjustSpacingForIcon: null != icon };
      items3[1] = hasOwnProperty(TableRowDivider.TableRowDivider, obj4);
      obj3.children = items3;
      tmp12Result2 = timestampProducer(React5, obj3);
    }
  }
  return tmp12Result2;
};
