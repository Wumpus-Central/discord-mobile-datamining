// === Module 16568: UploadLogsActionSheet ===

// Module 16568 (UploadLogsActionSheet)
import noopAll from "noop" /* 19 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import Text from "Text" /* 4734 */;
import Button from "Button" /* 4745 */;
import RedesignBottomSheetTitleHeaderBase from "RedesignBottomSheetTitleHeaderBase" /* 6949 */;
import Background from "Background" /* 6950 */;
import _uploadDebugLogFiles from "_uploadDebugLogFiles" /* 10131 */;
import { View } from "get ActivityIndicator" /* 17 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
({ AnalyticEvents: c4, DebugLogCategory: c5 } = ME);
({ jsx: closure_6, jsxs: error } = jsxProd);
const createCacheKey = { padding: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center", marginBottom: ThemesDefault.space.PX_16 };
createCacheKey[2] = { height: ThemesDefault.space.PX_8 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/feedback/native/UploadLogsActionSheet.tsx");

export default function UploadLogsActionSheet(arg0) {
  ({ mediaSessionId: require, rtcConnectionId: importDefault } = arg0);
  const tmp = callback3();
  let obj = { title: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.KTjjrG);
  obj[0] = callback(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, obj);
  obj = { style: tmp.container, children: null };
  obj1 = { variant: "text-sm/normal", color: "text-muted", style: tmp.body, children: null };
  const intl2 = getSystemLocale.intl;
  obj1[3] = intl2.string(getSystemLocale.t["ZvRR/t"]);
  const items = [callback(Text.Text, obj1), , , ];
  let obj2 = { text: null, onPress: null };
  const intl3 = getSystemLocale.intl;
  obj2[0] = intl3.string(getSystemLocale.t.EbwFfR);
  obj2[1] = function onPress() {
    let obj = _uploadDebugLogFiles;
    obj.uploadDebugLogFiles(closure_1_5.RTC);
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
    expandEventPropertiesDefault.track(closure_1_4.DEBUG_LOG_UPLOADED, obj);
    ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
    const tmp3Result = ACTION_SHEET_HEIGHT_HALFDefault;
  };
  items[1] = callback(Button.Button, obj2);
  items[2] = callback(View, { style: tmp.buttonSpacer });
  const obj4 = { text: null, variant: "secondary", onPress: null };
  const intl4 = getSystemLocale.intl;
  obj4[0] = intl4.string(getSystemLocale.t["ETE/oC"]);
  obj4[2] = function onPress() {
    return callback(table[13]).hideActionSheet();
  };
  items[3] = callback(Button.Button, obj4);
  obj[1] = items;
  obj[1] = callback2(View, obj);
  return callback(Background.BottomSheet, obj);
};