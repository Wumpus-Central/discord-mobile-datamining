// === Module 17148: ActivityShelfItemSummary ===

// Module 17148 (ActivityShelfItemSummary)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4296 */;
import Text_Text from "Text/Text" /* 4556 */;
import ButtonPill from "ButtonPill" /* 4985 */;
import ButtonEllipsis from "ButtonEllipsis" /* 4991 */;
import UserSummaryItemDefault from "UserSummaryItem" /* 10054 */;
import useActivityUsersDefault from "useActivityUsers" /* 17149 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function ParticipantsSummary(arg0) {
  ({ applicationId, channelId } = arg0);
  const obj = { users: useActivityUsersDefault(applicationId, channelId), max: 5, avatarSize: null, withPlusCount: true, style: null, cutout: null };
  const tmp = useActivityUsersDefault(applicationId, channelId);
  obj.avatarSize = native.AvatarSizes.REFRESH_MEDIUM_32;
  obj.style = { marginBottom: 8 };
  obj.cutout = { inset: -8 };
  return hasOwnProperty(UserSummaryItemDefault, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { ongoingActivityContainer: { position: "absolute", width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.4)", alignItems: "center", justifyContent: "center" }, overlayActivityName: null, overlayActivityNameText: null, loadingTextColor: null, ellipsis: null };
createStyles = { paddingHorizontal: 12, paddingVertical: 4, borderRadius: nativeDefault.radii.round, backgroundColor: null, marginBottom: 8 };
const ColorUtils = fn(4409);
createStyles.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.64);
createStyles.overlayActivityName = createStyles;
createStyles.overlayActivityNameText = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles.loadingTextColor = { color: "transparent" };
createStyles.ellipsis = { flex: 1, flexShrink: 1, flexGrow: 0, justifyContent: "center", alignItems: "center", top: -12 };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/activities/ActivityShelfItemSummary.tsx");

export default function ActivityShelfItemSummary(submitting) {
  let flag = submitting.submitting;
  ({ channelId, applicationId, applicationName } = submitting);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_7();
  let obj = { style: tmp.ongoingActivityContainer, children: null };
  obj = { style: tmp.overlayActivityName, children: null };
  let tmp7Result = flag;
  const items = [hasOwnProperty(Text_Text.Text, { variant: "text-md/semibold", style: flag ? tmp.loadingTextColor : tmp.overlayActivityNameText, lineClamp: 2, children: applicationName }), ];
  const obj2 = { style: null, children: null };
  const items1 = [tmp.ellipsis, _slicedToArray(obj.useLoadingStyles(flag, "md"), 2)[1]];
  obj2.style = items1;
  if (tmp7Result) {
    tmp7Result = hasOwnProperty(ButtonEllipsis.Ellipsis, { variant: "active", size: "md" });
  }
  obj2.children = tmp7Result;
  items[1] = hasOwnProperty(ReanimatedRexportDefault.View, obj2);
  obj.children = items;
  const items2 = [timestampProducer(View, obj), hasOwnProperty(ParticipantsSummary, { channelId, applicationId })];
  obj.children = items2;
  return timestampProducer(View, obj);
};