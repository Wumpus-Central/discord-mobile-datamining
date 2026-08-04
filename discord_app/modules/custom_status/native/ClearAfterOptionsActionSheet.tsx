// discord_app/modules/custom_status/native/ClearAfterOptionsActionSheet.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "get ActivityIndicator";
import { ClearAfterOptions } from "StatusTypes";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let error;
let metroImportAll;
const require = arg1;
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { content: null, buttonWrapper: null };
createCacheKey = { paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: require("Themes").space.PX_24, paddingBottom: require("Themes").space.PX_16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { marginTop: require("Themes").space.PX_24, paddingBottom: require("Themes").space.PX_16 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/custom_status/native/ClearAfterOptionsActionSheet.tsx");

export default function ClearAfterOptionsActionSheet(arg0) {
  let initialValue;
  let require;
  ({ initialValue, onChange: require } = arg0);
  let closure_1;
  const tmp = createCacheKey();
  const tmp2 = callback(React.useState(initialValue), 2);
  closure_1 = tmp2[0];
  let obj = { contentStyles: tmp.content, header: null, children: null };
  obj = { title: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t["5XnRQ+"]);
  obj[1] = callback2(require(5246) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj);
  obj = { onChange: tmp2[1], title: null, defaultValue: null, hasIcons: false, children: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl2.string(require(1236) /* getSystemLocale */.t.E45wvP);
  obj[2] = initialValue;
  obj[4] = ClearAfterOptions.map((value) => {
    const obj = { value, label: null };
    obj[1] = callback2(11994)(value);
    return callback3(callback(7659).TableRadioRow, obj, value);
  });
  const items = [callback2(require(7660) /* context */.TableRadioGroup, obj), ];
  const obj1 = { style: tmp.buttonWrapper, children: null };
  const obj2 = {
    onPress() {
      callback(callback2);
      callback2(outer1_2[14]).hideActionSheet();
    },
    text: null
  };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj2[1] = intl3.string(require(1236) /* getSystemLocale */.t.TyCVIq);
  obj1[1] = callback2(require(4604) /* Button */.Button, obj2);
  items[1] = callback2(View, obj1);
  obj[2] = items;
  return callback3(require(5247) /* Background */.BottomSheet, obj);
};