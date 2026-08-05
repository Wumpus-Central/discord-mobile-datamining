import { useWindowDimensions } from "../../screen/useWindowDimensions.native.tsx";
// discord_app/modules/user_profile/native/UserProfileTextButtonGroup.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { PROFILE_SIDE_PADDING } from "ARBITRARY_LARGE_OFFSET";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ container: { flexDirection: "row", flexWrap: "wrap", gap: 12 }, buttonArea: { flexGrow: 1 } });
let result = require("ARBITRARY_LARGE_OFFSET").fileFinishedImporting("modules/user_profile/native/UserProfileTextButtonGroup.tsx");

export default function UserProfileTextButtonGroup(arg0) {
  let maxWidth;
  let primaryButton;
  let secondaryButton;
  let style;
  ({ primaryButton, secondaryButton, maxWidth, style } = arg0);
  let items = callback3();
  const width = useWindowDimensions().width;
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
    obj[0] = items;
    obj[1] = secondaryButton;
    callback(View, obj);
  } else if (null == secondaryButton) {
    obj = { style: null, children: null };
    const items1 = [items.container, style];
    obj[0] = items1;
    obj[1] = primaryButton;
    callback(View, obj);
  } else {
    const result = (diff - 12) / 2;
    obj = { style: null, children: null };
    const items2 = [items.container, style];
    obj[0] = items2;
    const obj1 = { style: null, children: null };
    const items3 = [items.buttonArea, ];
    const obj2 = { minWidth: null };
    obj2[0] = result;
    items3[1] = obj2;
    obj1[0] = items3;
    obj1[1] = primaryButton;
    const items4 = [callback(View, obj1), ];
    const obj3 = { style: null, children: null };
    const items5 = [items.buttonArea, ];
    const obj4 = { minWidth: null };
    obj4[0] = result;
    items5[1] = obj4;
    obj3[0] = items5;
    obj3[1] = secondaryButton;
    items4[1] = callback(View, obj3);
    obj[1] = items4;
    callback2(View, obj);
  }
};