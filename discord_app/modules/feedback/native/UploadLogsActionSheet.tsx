// discord_app/modules/feedback/native/UploadLogsActionSheet.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import expandEventPropertiesDefault from "../../../utils/AnalyticsUtils.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import Button from "../../../design/components/Button/native/Button.native.tsx";
import RedesignBottomSheetTitleHeaderBase from "../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import Background from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import _uploadDebugLogFiles from "../../debug/DebugUploadManager.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import ME from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
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