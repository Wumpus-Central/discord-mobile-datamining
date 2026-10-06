// === Module 10787: WishlistViewMoreCard ===

// Module 10787 (WishlistViewMoreCard)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import WishlistItemCardDefault from "WishlistItemCard" /* 10782 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ Pressable: c3, StyleSheet: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles(() => {
  let obj2;
  const obj = { moreOverlay: obj2 };
  obj2 = { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, justifyContent: "center", alignItems: "center" };
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  return obj;
});
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let items;
  let onPress;
  let overflowCount;
  let recipientName;
  let sku;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(18);
  ({ sku, size, recipientName, overflowCount, onPress } = arg0);
  const tmp4 = closure_8();
  if (cResult[0] !== recipientName) {
    const intl = intl3.intl;
    const obj2 = { username: recipientName };
    const formatToPlainStringResult = intl.formatToPlainString(intl3.t["8uYD+I"], obj2);
    cResult[0] = recipientName;
    cResult[1] = formatToPlainStringResult;
    tmp5 = formatToPlainStringResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === recipientName) {
    if (cResult[3] === size) {
      let tmp7;
      let tmp9;
      let tmp11;
      if (cResult[4] === sku) {
        tmp7 = cResult[5];
      }
      const moreOverlay = tmp4.moreOverlay;
      if (cResult[6] !== overflowCount) {
        const intl2 = intl3.intl;
        const obj3 = { count: overflowCount };
        const formatResult = intl2.format(intl3.t.F6iMs4, obj3);
        cResult[6] = overflowCount;
        cResult[7] = formatResult;
        tmp9 = formatResult;
      } else {
        tmp9 = cResult[7];
      }
      if (cResult[8] !== tmp9) {
        const obj4 = { variant: "text-md/semibold", color: "text-overlay-light", children: tmp9 };
        const tmp13 = metroRequire(Text_Text.Text, obj4);
        cResult[8] = tmp9;
        cResult[9] = tmp13;
        tmp11 = tmp13;
      } else {
        tmp11 = cResult[9];
      }
      if (cResult[10] === tmp4.moreOverlay) {
        let tmp14;
        if (cResult[11] === tmp11) {
          tmp14 = cResult[12];
        }
        if (cResult[13] === onPress) {
          if (cResult[14] === tmp5) {
            if (cResult[15] === tmp7) {
              let tmp18;
              if (cResult[16] === tmp14) {
                tmp18 = cResult[17];
              }
              return tmp18;
            }
          }
        }
        const obj5 = { onPress, accessibilityLabel: tmp5, children: items };
        items = [tmp7, tmp14];
        const tmp21 = metroImportDefault(_false, obj5);
        cResult[13] = onPress;
        cResult[14] = tmp5;
        cResult[15] = tmp7;
        cResult[16] = tmp14;
        cResult[17] = tmp21;
        tmp18 = tmp21;
      }
      const obj6 = { style: moreOverlay, children: tmp11 };
      const tmp17 = metroRequire(hasOwnProperty, obj6);
      cResult[10] = tmp4.moreOverlay;
      cResult[11] = tmp11;
      cResult[12] = tmp17;
      tmp14 = tmp17;
    }
  }
  const tmp8 = metroRequire(WishlistItemCardDefault, { accessibilityHidden: true, sku, size, recipientName });
  cResult[2] = recipientName;
  cResult[3] = size;
  cResult[4] = sku;
  cResult[5] = tmp8;
  tmp7 = tmp8;
}) : ((recipientName) => {
  let Text;
  let intl;
  let intl2;
  let items;
  let obj3;
  let onPress;
  let overflowCount;
  let sku;
  recipientName = recipientName.recipientName;
  ({ sku, size, overflowCount, onPress } = recipientName);
  const obj = { onPress, accessibilityLabel: intl.formatToPlainString(intl3.t["8uYD+I"], { username: recipientName }), children: items };
  const tmp = closure_8();
  intl = intl3.intl;
  items = [metroRequire(WishlistItemCardDefault, { accessibilityHidden: true, sku, size, recipientName }), ];
  const obj2 = { style: tmp.moreOverlay, children: metroRequire(Text, obj3) };
  obj3 = { variant: "text-md/semibold", color: "text-overlay-light", children: intl2.format(intl3.t.F6iMs4, { count: overflowCount }) };
  Text = Text_Text.Text;
  intl2 = intl3.intl;
  items[1] = metroRequire(hasOwnProperty, obj2);
  return metroImportDefault(_false, obj);
});
const result = size.fileFinishedImporting("modules/wishlists/native/WishlistViewMoreCard.tsx");

export default tmp5;