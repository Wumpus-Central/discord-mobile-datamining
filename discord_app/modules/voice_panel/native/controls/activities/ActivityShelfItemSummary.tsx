// === Module 16693: ParticipantsSummary ===

// Module 16693 (ParticipantsSummary)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import _modDef4187 from "module_4187" /* 4187 */;
import Text from "Text" /* 4444 */;
import PillWrapper from "PillWrapper" /* 4906 */;
import EllipsisCircle from "EllipsisCircle" /* 4912 */;
import UserSummaryItemDefault from "UserSummaryItem" /* 10098 */;
import useActivityUsersDefault from "useActivityUsers" /* 16694 */;
import closure_3 from "_slicedToArray" /* 32 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;
import hexToRgba from "hexToRgba" /* 4296 */;

require = arg1;
function ParticipantsSummary(arg0) {
  ({ applicationId, channelId } = arg0);
  const obj = { users: useActivityUsersDefault(applicationId, channelId), max: 5, avatarSize: null, withPlusCount: true, style: null, cutout: null };
  const tmp = useActivityUsersDefault(applicationId, channelId);
  obj[2] = Button.AvatarSizes.REFRESH_MEDIUM_32;
  obj[4] = { marginBottom: 8 };
  obj[5] = { inset: -8 };
  return callback2(UserSummaryItemDefault, obj);
}
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { ongoingActivityContainer: { position: "absolute", width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.4)", alignItems: "center", justifyContent: "center" }, overlayActivityName: null, overlayActivityNameText: null, loadingTextColor: null, ellipsis: null };
createCacheKey = { paddingHorizontal: 12, paddingVertical: 4, borderRadius: ThemesDefault.radii.round, backgroundColor: null, marginBottom: 8 };
createCacheKey[3] = hexToRgba.hexWithOpacity(ThemesDefault.unsafe_rawColors.BLACK, 0.64);
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[3] = { color: "transparent" };
createCacheKey[4] = { flex: 1, flexShrink: 1, flexGrow: 0, justifyContent: "center", alignItems: "center", top: -12 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const obj1 = { color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
const result = require("set").fileFinishedImporting("modules/voice_panel/native/controls/activities/ActivityShelfItemSummary.tsx");

export default function ActivityShelfItemSummary(submitting) {
  let flag = submitting.submitting;
  ({ channelId, applicationId, applicationName } = submitting);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback3();
  let obj = PillWrapper;
  obj = { style: tmp.ongoingActivityContainer, children: null };
  obj = { style: tmp.overlayActivityName, children: null };
  let tmp7Result = flag;
  const items = [closure_5(Text.Text, { variant: "text-md/semibold", style: flag ? tmp.loadingTextColor : tmp.overlayActivityNameText, lineClamp: 2, children: applicationName }), ];
  const obj2 = { style: items1, children: null };
  items1 = [tmp.ellipsis, callback(obj.useLoadingStyles(flag, "md"), 2)[1]];
  if (tmp7Result) {
    tmp7Result = tmp7(EllipsisCircle.Ellipsis, { variant: "active", size: "md" });
  }
  obj2[1] = tmp7Result;
  items[1] = closure_5(_modDef4187.View, obj2);
  obj[1] = items;
  const items2 = [closure_6(View, obj), closure_5(ParticipantsSummary, { channelId, applicationId })];
  obj[1] = items2;
  return closure_6(View, obj);
};