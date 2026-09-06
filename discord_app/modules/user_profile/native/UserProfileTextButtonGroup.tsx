// === Module 12996: UserProfileTextButtonGroup ===

// Module 12996 (UserProfileTextButtonGroup)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1477 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const PROFILE_SIDE_PADDING = fn(7208).PROFILE_SIDE_PADDING;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4560);
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
    let obj = { style: null, children: null };
    items = [, ];
    items[0] = items.container;
    items[1] = style;
    obj.style = items;
    obj.children = secondaryButton;
    React4(View, obj);
  } else if (null == secondaryButton) {
    obj = { style: null, children: null };
    const items1 = [items.container, style];
    obj.style = items1;
    obj.children = primaryButton;
    React4(View, obj);
  } else {
    const result = (diff - 12) / 2;
    obj = { style: null, children: null };
    const items2 = [items.container, style];
    obj.style = items2;
    const obj1 = { style: null, children: null };
    const items3 = [items.buttonArea, ];
    const obj2 = { minWidth: result };
    items3[1] = obj2;
    obj1.style = items3;
    obj1.children = primaryButton;
    const items4 = [React4(View, obj1), ];
    const obj3 = { style: null, children: null };
    const items5 = [items.buttonArea, ];
    const obj4 = { minWidth: result };
    items5[1] = obj4;
    obj3.style = items5;
    obj3.children = secondaryButton;
    items4[1] = React4(View, obj3);
    obj.children = items4;
    hasOwnProperty(View, obj);
  }
};