// discord_app/modules/feedback/native/UploadLogsActionSheet.tsx
import "noop";
import { View } from "get ActivityIndicator";
import ME from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let closure_6;
let error;
const require = arg1;
({ AnalyticEvents: c4, DebugLogCategory: c5 } = ME);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, body: null, buttonSpacer: null };
createCacheKey = { padding: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center", marginBottom: require("Themes").space.PX_16 };
let obj1 = { textAlign: "center", marginBottom: require("Themes").space.PX_16 };
createCacheKey[2] = { height: require("Themes").space.PX_8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { height: require("Themes").space.PX_8 };
const result = require("ME").fileFinishedImporting("modules/feedback/native/UploadLogsActionSheet.tsx");

export default function UploadLogsActionSheet(arg0) {
  let importDefault;
  let require;
  ({ mediaSessionId: require, rtcConnectionId: importDefault } = arg0);
  let tmp = createCacheKey();
  let obj = { header: null, children: null };
  obj = { title: null };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.KTjjrG);
  obj[0] = callback(require("../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx") /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj);
  obj = { style: tmp.container, children: null };
  const obj1 = { variant: "text-sm/normal", color: "text-muted", style: tmp.body, children: null };
  const intl2 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj1[3] = intl2.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["ZvRR/t"]);
  const items = [callback(require("../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj1), , , ];
  let obj2 = { text: null, onPress: null };
  const intl3 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj2[0] = intl3.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.EbwFfR);
  obj2[1] = function onPress() {
    let obj = outer1_0(outer1_2[11]);
    obj.uploadDebugLogFiles(outer1_5.RTC);
    let tmp4 = closure_0;
    if (closure_0 == null) {
      tmp4 = null;
    }
    obj = { media_session_id: tmp4, rtc_connection_id: null };
    let tmp5 = closure_1;
    if (closure_1 == null) {
      tmp5 = null;
    }
    obj[1] = tmp5;
    outer1_1(outer1_2[12]).track(outer1_4.DEBUG_LOG_UPLOADED, obj);
    const obj2 = outer1_1(outer1_2[12]);
    const tmp = outer1_2;
    const tmp3 = outer1_1;
    outer1_1(outer1_2[13]).hideActionSheet();
  };
  items[1] = callback(require("../../../design/components/Button/native/Button.native.tsx") /* Button */.Button, obj2);
  items[2] = callback(View, { style: tmp.buttonSpacer });
  const obj4 = { text: null, variant: "secondary", onPress: null };
  const intl4 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj4[0] = intl4.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["ETE/oC"]);
  obj4[2] = function onPress() {
    return callback(table[13]).hideActionSheet();
  };
  items[3] = callback(require("../../../design/components/Button/native/Button.native.tsx") /* Button */.Button, obj4);
  obj[1] = items;
  obj[1] = callback2(View, obj);
  return callback(require("../../../design/components/Sheet/native/BottomSheet.native.tsx") /* Background */.BottomSheet, obj);
};