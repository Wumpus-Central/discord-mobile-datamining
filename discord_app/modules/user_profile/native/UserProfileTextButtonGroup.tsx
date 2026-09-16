// === Module 13143: UserProfileTextButtonGroup ===

// Module 13143 (UserProfileTextButtonGroup)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1478 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const PROFILE_SIDE_PADDING = fn(7318).PROFILE_SIDE_PADDING;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4638);
let closure_6 = createStyles.createStyles({ container: { flexDirection: "row", flexWrap: "wrap", gap: 12 }, buttonArea: { flexGrow: 1 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileTextButtonGroup.tsx");

export default function UserProfileTextButtonGroup(arg0) {
  ({ primaryButton, secondaryButton, maxWidth, style } = arg0);
  let items = closure_6();
  const width = useWindowDimensionsDefault().width;
  let bound = width;
  if (null != maxWidth) {
    const _Math = Math;
    bound = Math.min(width, maxWidth);
  }
  const diff = bound - 2 * PROFILE_SIDE_PADDING;
  if (null == primaryButton) {
    if (null == secondaryButton) {
      return null;
    }
  }
  if (null == primaryButton) {
    const obj2 = { style: null, children: null };
    items = [, ];
    items[0] = items.container;
    items[1] = style;
    obj2.style = items;
    obj2.children = secondaryButton;
    React4(View, obj2);
  } else if (null == secondaryButton) {
    const obj = { style: null, children: null };
    const items1 = [items.container, style];
    obj.style = items1;
    obj.children = primaryButton;
    React4(View, obj);
  } else {
    const result = (diff - 12) / 2;
    const obj3 = { style: null, children: null };
    const items2 = [items.container, style];
    obj3.style = items2;
    const obj4 = { style: null, children: null };
    const items3 = [items.buttonArea, ];
    const obj5 = { minWidth: result };
    items3[1] = obj5;
    obj4.style = items3;
    obj4.children = primaryButton;
    const items4 = [React4(View, obj4), ];
    const obj6 = { style: null, children: null };
    const items5 = [items.buttonArea, ];
    const obj7 = { minWidth: result };
    items5[1] = obj7;
    obj6.style = items5;
    obj6.children = secondaryButton;
    items4[1] = React4(View, obj6);
    obj3.children = items4;
    hasOwnProperty(View, obj3);
  }
};