// discord_app/modules/voice_panel/native/controls/activities/ActivityShelfItemSummary.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../design/void/native.tsx";
import ReanimatedRexportDefault from "../../../../reanimated/ReanimatedRexport.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import ButtonPill from "../../../../../design/components/Button/native/ButtonPill.native.tsx";
import ButtonEllipsis from "../../../../../design/components/Button/native/ButtonEllipsis.native.tsx";
import UserSummaryItemDefault from "../../../../../components_native/common/UserSummaryItem.tsx";
import useActivityUsersDefault from "../../../../activities/useActivityUsers.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
function ParticipantsSummary(arg0) {
  ({ applicationId, channelId } = arg0);
  const obj = {
    users: useActivityUsersDefault(applicationId, channelId),
    max: 5,
    avatarSize: null,
    withPlusCount: true,
    style: null,
    cutout: null,
  };
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
let createStyles = {
  ongoingActivityContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.4)",
    alignItems: "center",
    justifyContent: "center",
  },
  overlayActivityName: null,
  overlayActivityNameText: null,
  loadingTextColor: null,
  ellipsis: null,
};
createStyles = {
  paddingHorizontal: 12,
  paddingVertical: 4,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: null,
  marginBottom: 8,
};
const ColorUtils = fn(4409);
createStyles.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.64);
createStyles.overlayActivityName = createStyles;
createStyles.overlayActivityNameText = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles.loadingTextColor = { color: "transparent" };
createStyles.ellipsis = {
  flex: 1,
  flexShrink: 1,
  flexGrow: 0,
  justifyContent: "center",
  alignItems: "center",
  top: -12,
};
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/voice_panel/native/controls/activities/ActivityShelfItemSummary.tsx",
);

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
  const items = [
    hasOwnProperty(Text_Text.Text, {
      variant: "text-md/semibold",
      style: flag ? tmp.loadingTextColor : tmp.overlayActivityNameText,
      lineClamp: 2,
      children: applicationName,
    }),
  ];
  const obj2 = { style: null, children: null };
  const items1 = [tmp.ellipsis, _slicedToArray(obj.useLoadingStyles(flag, "md"), 2)[1]];
  obj2.style = items1;
  if (tmp7Result) {
    tmp7Result = tmp7(ButtonEllipsis.Ellipsis, { variant: "active", size: "md" });
  }
  obj2.children = tmp7Result;
  items[1] = hasOwnProperty(ReanimatedRexportDefault.View, obj2);
  obj.children = items;
  const items2 = [timestampProducer(View, obj), hasOwnProperty(ParticipantsSummary, { channelId, applicationId })];
  obj.children = items2;
  return timestampProducer(View, obj);
}
