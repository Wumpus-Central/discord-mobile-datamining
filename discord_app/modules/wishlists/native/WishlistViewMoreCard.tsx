// discord_app/modules/wishlists/native/WishlistViewMoreCard.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import WishlistItemCardDefault from "WishlistItemCard.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: c3, StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5091);
let closure_8 = createStyles.createStyles(() => {
  const obj = { moreOverlay: null };
  const obj2 = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj2.borderRadius = nativeDefault.radii.lg;
  obj2.backgroundColor = nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
  obj2.justifyContent = "center";
  obj2.alignItems = "center";
  obj.moreOverlay = obj2;
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/native/WishlistViewMoreCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function WishlistViewMoreCard(arg0) {
      const cResult = c.c(18);
      ({ sku, size, recipientName, overflowCount, onPress } = arg0);
      const tmp4 = closure_8();
      if (cResult[0] !== recipientName) {
        const intl = util.intl;
        const obj2 = { username: recipientName };
        const formatToPlainStringResult = intl.formatToPlainString(util.t["8uYD+I"], obj2);
        cResult[0] = recipientName;
        cResult[1] = formatToPlainStringResult;
        let tmp5 = formatToPlainStringResult;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === recipientName) {
        if (cResult[3] === size) {
          if (cResult[4] === sku) {
            let tmp7 = cResult[5];
          }
          if (cResult[6] !== overflowCount) {
            const intl2 = util.intl;
            const obj3 = { count: overflowCount };
            const formatResult = intl2.format(util.t.F6iMs4, obj3);
            cResult[6] = overflowCount;
            cResult[7] = formatResult;
            let tmp9 = formatResult;
          } else {
            tmp9 = cResult[7];
          }
          if (cResult[8] !== tmp9) {
            const obj4 = { variant: "text-md/semibold", color: "text-overlay-light", children: tmp9 };
            const tmp13 = timestampProducer(Text_Text.Text, obj4);
            cResult[8] = tmp9;
            cResult[9] = tmp13;
            let tmp11 = tmp13;
          } else {
            tmp11 = cResult[9];
          }
          if (cResult[10] === tmp4.moreOverlay) {
            if (cResult[11] === tmp11) {
              let tmp14 = cResult[12];
            }
            if (cResult[13] === onPress) {
              if (cResult[14] === tmp5) {
                if (cResult[15] === tmp7) {
                  if (cResult[16] === tmp14) {
                    let tmp18 = cResult[17];
                  }
                  return tmp18;
                }
              }
            }
            const obj5 = { onPress, accessibilityLabel: tmp5, children: null };
            const items = [tmp7, tmp14];
            obj5.children = items;
            const tmp21 = React5(React3, obj5);
            cResult[13] = onPress;
            cResult[14] = tmp5;
            cResult[15] = tmp7;
            cResult[16] = tmp14;
            cResult[17] = tmp21;
            tmp18 = tmp21;
          }
          const obj6 = { style: tmp4.moreOverlay, children: tmp11 };
          const tmp17 = timestampProducer(hasOwnProperty, obj6);
          cResult[10] = tmp4.moreOverlay;
          cResult[11] = tmp11;
          cResult[12] = tmp17;
          tmp14 = tmp17;
        }
      }
      const tmp8 = timestampProducer(WishlistItemCardDefault, { accessibilityHidden: true, sku, size, recipientName });
      cResult[2] = recipientName;
      cResult[3] = size;
      cResult[4] = sku;
      cResult[5] = tmp8;
      tmp7 = tmp8;
    }
  : function WishlistViewMoreCard(recipientName) {
      recipientName = recipientName.recipientName;
      ({ sku, size, overflowCount, onPress } = recipientName);
      const obj = { onPress, accessibilityLabel: null, children: null };
      const intl = util.intl;
      obj.accessibilityLabel = intl.formatToPlainString(util.t["8uYD+I"], { username: recipientName });
      const items = [
        timestampProducer(WishlistItemCardDefault, { accessibilityHidden: true, sku, size, recipientName }),
      ];
      const obj2 = { style: closure_8().moreOverlay, children: null };
      const obj3 = { variant: "text-md/semibold", color: "text-overlay-light", children: null };
      const intl2 = util.intl;
      obj3.children = intl2.format(util.t.F6iMs4, { count: overflowCount });
      obj2.children = timestampProducer(Text_Text.Text, obj3);
      items[1] = timestampProducer(hasOwnProperty, obj2);
      obj.children = items;
      return React5(React3, obj);
    };
