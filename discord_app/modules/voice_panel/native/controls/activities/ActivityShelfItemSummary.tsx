// discord_app/modules/voice_panel/native/controls/activities/ActivityShelfItemSummary.tsx
import _slicedToArray from "_slicedToArray";
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import hexToRgba from "hexToRgba";
import { UserSummaryItem } from "../../../../../components_native/common/UserSummaryItem.tsx";
import { EllipsisCircle } from "../../../../../design/components/Button/native/ButtonEllipsis.native.tsx";
import { PillWrapper } from "../../../../../design/components/Button/native/ButtonPill.native.tsx";
import { Text } from "../../../../../design/components/Text/native/Text.tsx";
import { Button } from "../../../../../design/void/native.tsx";
import { useActivityUsers } from "../../../../activities/useActivityUsers.tsx";
import { ReanimatedRexport } from "../../../../reanimated/ReanimatedRexport.tsx";

let c5;
let closure_6;
const require = arg1;
function ParticipantsSummary(arg0) {
  let applicationId;
  let channelId;
  ({ applicationId, channelId } = arg0);
  const obj = { users: useActivityUsers(applicationId, channelId), max: 5, avatarSize: null, withPlusCount: true, style: null, cutout: null };
  const tmp = useActivityUsers(applicationId, channelId);
  obj[2] = Button /* Button */.AvatarSizes.REFRESH_MEDIUM_32;
  obj[4] = { marginBottom: 8 };
  obj[5] = { inset: -8 };
  return callback2(UserSummaryItem, obj);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { ongoingActivityContainer: { position: "absolute", width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.4)", alignItems: "center", justifyContent: "center" }, overlayActivityName: null, overlayActivityNameText: null, loadingTextColor: null, ellipsis: null };
createCacheKey = { paddingHorizontal: 12, paddingVertical: 4, borderRadius: require("Themes").radii.round, backgroundColor: null, marginBottom: 8 };
createCacheKey[3] = hexToRgba.hexWithOpacity(require("Themes").unsafe_rawColors.BLACK, 0.64);
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { color: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[3] = { color: "transparent" };
createCacheKey[4] = { flex: 1, flexShrink: 1, flexGrow: 0, justifyContent: "center", alignItems: "center", top: -12 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj1 = { color: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/voice_panel/native/controls/activities/ActivityShelfItemSummary.tsx");

export default function ActivityShelfItemSummary(submitting) {
  let applicationId;
  let applicationName;
  let channelId;
  let flag = submitting.submitting;
  ({ channelId, applicationId, applicationName } = submitting);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = createCacheKey();
  let obj = PillWrapper /* PillWrapper */;
  obj = { style: tmp.ongoingActivityContainer, children: null };
  obj = { style: tmp.overlayActivityName, children: null };
  let tmp7Result = flag;
  const items = [closure_5(Text /* Text */.Text, { variant: "text-md/semibold", style: flag ? tmp.loadingTextColor : tmp.overlayActivityNameText, lineClamp: 2, children: applicationName }), ];
  const obj2 = { style: items1, children: null };
  items1 = [tmp.ellipsis, callback(obj.useLoadingStyles(flag, "md"), 2)[1]];
  if (tmp7Result) {
    tmp7Result = tmp7(EllipsisCircle /* EllipsisCircle */.Ellipsis, { variant: "active", size: "md" });
  }
  obj2[1] = tmp7Result;
  items[1] = closure_5(ReanimatedRexport.View, obj2);
  obj[1] = items;
  const items2 = [closure_6(View, obj), closure_5(ParticipantsSummary, { channelId, applicationId })];
  obj[1] = items2;
  return closure_6(View, obj);
};