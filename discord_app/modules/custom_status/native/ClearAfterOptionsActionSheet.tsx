// === Module 9542: ClearAfterOptionsActionSheet ===

// Module 9542 (ClearAfterOptionsActionSheet)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 4745 */;
import RedesignBottomSheetTitleHeaderBase from "RedesignBottomSheetTitleHeaderBase" /* 6949 */;
import Background from "Background" /* 6950 */;
import context from "context" /* 8101 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { ClearAfterOptions } from "StatusTypes" /* 9292 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
({ jsx: error, jsxs: closure_8 } = jsxProd);
const createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: ThemesDefault.space.PX_24, paddingBottom: ThemesDefault.space.PX_16 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/custom_status/native/ClearAfterOptionsActionSheet.tsx");

export default function ClearAfterOptionsActionSheet(arg0) {
  ({ initialValue, onChange: require } = arg0);
  const tmp = callback4();
  const tmp2 = callback(React.useState(initialValue), 2);
  closure_1 = tmp2[0];
  let obj = { title: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["5XnRQ+"]);
  obj[1] = callback2(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, obj);
  obj = { onChange: tmp2[1], title: null, defaultValue: null, hasIcons: false, children: null };
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.E45wvP);
  obj[2] = initialValue;
  obj[4] = ClearAfterOptions.map((item, index) => callback3(callback(8100).TableRadioRow, { value: item, label: callback2(9543)(item) }, item));
  const items = [callback2(context.TableRadioGroup, obj), ];
  obj1 = { style: tmp.buttonWrapper, children: null };
  const obj2 = {
    onPress() {
      callback(callback2);
      callback2(dependencyMap[14]).hideActionSheet();
    },
    text: null
  };
  const intl3 = getSystemLocale.intl;
  obj2[1] = intl3.string(getSystemLocale.t.TyCVIq);
  obj1[1] = callback2(Button.Button, obj2);
  items[1] = callback2(View, obj1);
  obj[2] = items;
  return callback3(Background.BottomSheet, obj);
};