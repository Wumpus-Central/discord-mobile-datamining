// discord_app/modules/voice_panel/native/controls/activities/ActivityShelfItemSummary.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../../../design/void/native.tsx";
import _modDef4187 from "../../../../reanimated/ReanimatedRexport.tsx";
import Text from "../../../../../design/components/Text/native/Text.tsx";
import PillWrapper from "../../../../../design/components/Button/native/ButtonPill.native.tsx";
import EllipsisCircle from "../../../../../design/components/Button/native/ButtonEllipsis.native.tsx";
import UserSummaryItemDefault from "../../../../../components_native/common/UserSummaryItem.tsx";
import useActivityUsersDefault from "../../../../activities/useActivityUsers.tsx";
import closure_3 from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";
import hexToRgba from "../../../../../utils/ColorUtils.tsx";

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