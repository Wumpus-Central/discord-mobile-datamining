// discord_app/design/components/TableRow/native/RowButton.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import TableRow from "TableRow.native.tsx";
import Card from "../../Card/native/Card.native.tsx";
import TableRowIcon from "TableRowIcon.native.tsx";
import BackgroundBlurView from "../../experimental/BackgroundBlurView/native/BackgroundBlurView.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
class RowButton {
  constructor(arg0) {
    flag = global.arrow;
    if (flag === undefined) {
      flag = true;
    }
    flag2 = global.disabled;
    if (flag2 === undefined) {
      flag2 = false;
    }
    str = global.variant;
    if (str === undefined) {
      str = "secondary";
    }
    ({ icon, experimental_withBlurBackground } = global);
    merged = Object.assign(
      global,
      Object.assign({ arrow: 0, disabled: 0, variant: 0, icon: 0, onPress: 0, experimental_withBlurBackground: 0 }),
    );
    tmp2 = icon;
    if (null != icon) {
      tmp3 = closure_3;
      tmp2 = icon;
      if (!closure_3.isValidElement(icon)) {
        str2 = "translucent";
        if (!experimental_withBlurBackground) {
          str3 = "secondary";
          str4 = "primary";
          if ("primary" === str) {
            str3 = "default";
          }
          str2 = str3;
        }
        tmp4 = jsx;
        tmp5 = closure_0;
        tmp6 = closure_2;
        obj = { source: null, variant: null };
        obj.source = icon;
        obj.variant = str2;
        tmp2 = jsx(closure_0(closure_2[4]).TableRowIcon, obj);
      }
    }
    obj = { experimental_withBlurBackground, onPress: global.onPress, disabled: flag2 };
    merged1 = Object.assign(merged);
    obj1 = { icon: tmp2, arrow: flag, disabled: flag2, borderRadius: closure_1(closure_2[3]).radii.xl };
    merged2 = Object.assign(merged);
    obj.children = jsx(closure_0(closure_2[5]).TableRowInner, obj1);
    return jsx(RowButtonWrapper, obj);
  }
}
function RowButtonWrapper(experimental_withBlurBackground) {
  ({ onPress, disabled, children } = experimental_withBlurBackground);
  const merged = Object.assign(
    experimental_withBlurBackground,
    Object.assign({ experimental_withBlurBackground: 0, onPress: 0, disabled: 0, children: 0 }),
  );
  const tmp2 = closure_5();
  let obj = ReanimatedRexport;
  const sharedValue = obj.useSharedValue(0);
  const items = [sharedValue];
  closure_2 = noop.useCallback(() => {
    const result = sharedValue.set(1);
  }, items);
  const items1 = [sharedValue];
  closure_3 = noop.useCallback(() => {
    const result = sharedValue.set(0);
  }, items1);
  if (experimental_withBlurBackground.experimental_withBlurBackground) {
    obj = {
      shadow: "none",
      border: "none",
      start: true,
      end: true,
      onPress,
      onPressIn(arg0) {
        const onPressIn = merged.onPressIn;
        if (onPressIn != null) {
          onPressIn(arg0);
        }
        closure_2();
      },
      onPressOut(arg0) {
        const onPressOut = merged.onPressOut;
        if (onPressOut != null) {
          onPressOut(arg0);
        }
        closure_3();
      },
      style: null,
      disabled: null,
    };
    const items2 = [,];
    ({ card: arr3[0], cardWithBlur: arr3[1] } = tmp2);
    obj.style = items2;
    obj.disabled = disabled;
    const merged1 = Object.assign(merged);
    obj.variant = "transparent";
    obj = { pressed: sharedValue, children };
    obj.children = jsx(BackgroundBlurView.BackgroundBlurView, { pressed: sharedValue, children });
    let obj1 = obj;
  } else {
    obj1 = { shadow: "low", start: true, end: true, onPress, style: tmp2.card, disabled };
    const merged2 = Object.assign(merged);
    obj1.variant = "control-secondary";
    obj1.border = "control-secondary";
    obj1.children = children;
  }
  return jsx(Card.InternalCard, obj1);
}
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles(() => {
  let obj = { card: null, cardWithBlur: null };
  obj = {
    padding: "y",
    borderTopStartRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS,
    borderTopEndRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS,
    borderBottomStartRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS,
    borderBottomEndRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS,
  };
  obj.card = obj;
  obj.cardWithBlur = { overflow: "hidden" };
  return obj;
});
RowButton.Icon = fn(5611).TableRowIcon;
const size = fn(2);
let result = size.fileFinishedImporting("design/components/TableRow/native/RowButton.native.tsx");

export const RowButtonIconProps = fn(5611).TableRowIconProps;
export { RowButton };
