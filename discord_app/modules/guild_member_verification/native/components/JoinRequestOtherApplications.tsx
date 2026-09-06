// discord_app/modules/guild_member_verification/native/components/JoinRequestOtherApplications.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import DateUtils from "../../../../utils/DateUtils.tsx";
import MemberVerificationTypes from "../../MemberVerificationTypes.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import openJoinRequestActionSheetDefault from "../openJoinRequestActionSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function ApplicationStatusIcon(status) {
  status = status.status;
  if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED === status) {
    let obj = {
      size: "sm",
      color: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND,
      secondaryColor: nativeDefault.colors.STATUS_POSITIVE_TEXT,
    };
    return timestampProducer(tmp(4520).CircleCheckIcon, obj);
  } else if (tmp(4384).GuildJoinRequestApplicationStatuses.REJECTED === status) {
    obj = {
      size: "sm",
      color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL,
      secondaryColor: nativeDefault.colors.WHITE,
    };
    return timestampProducer(tmp(6616).CircleXIcon, obj);
  } else {
    return null;
  }
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const createStyles = fn(4560);
let obj = { label: { marginHorizontal: 16, marginBottom: 8 }, container: null, row: null, divider: null };
obj = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  marginHorizontal: 16,
  marginBottom: 12,
  borderRadius: nativeDefault.radii.md,
};
obj.container = obj;
obj.row = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 16 };
let size = { width: "100%", height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj.divider = size;
let closure_9 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_member_verification/native/components/JoinRequestOtherApplications.tsx",
);

export default noop.memo((arg0) => {
  ({ guildId, userId, selectedJoinRequestId } = arg0);
  const tmp = closure_9();
  _require = tmp;
  let obj = require("useOtherGuildJoinRequestsForUser");
  const otherGuildJoinRequestsForUser = obj.useOtherGuildJoinRequestsForUser({
    guildId,
    userId,
    selectedJoinRequestId,
  });
  let tmp4 = null;
  if (0 !== otherGuildJoinRequestsForUser.length) {
    obj = { children: null };
    obj = { variant: "text-sm/semibold", color: "text-subtle", style: tmp.label, children: null };
    const intl = tmp2(1114).intl;
    obj.children = intl.string(tmp2(1114).t["hxa+G3"]);
    let items = [closure_6(tmp2(4556).Text, obj)];
    let obj1 = {
      style: tmp.container,
      children: otherGuildJoinRequestsForUser.map((createdAt, index) => {
        closure_0 = createdAt;
        let tmp2 = index > 0;
        if (tmp2) {
          let obj = { style: closure_0.divider };
          tmp2 = timestampProducer(hasOwnProperty, obj);
        }
        obj = { children: null };
        const items = [tmp2];
        obj = {
          accessibilityRole: "button",
          style: closure_0.row,
          onPress() {
            return openJoinRequestActionSheetDefault(closure_0);
          },
          children: null,
        };
        const obj1 = { variant: "text-sm/normal", color: "text-default", children: null };
        const obj5 = DateUtils;
        obj1.children = obj5.dateFormat(new Date(createdAt.createdAt), "LL");
        const items1 = [
          timestampProducer(Text_Text.Text, obj1),
          timestampProducer(ApplicationStatusIcon, { status: createdAt.applicationStatus }),
        ];
        obj.children = items1;
        items[1] = React5(React4, obj);
        obj.children = items;
        return React5(noop.Fragment, obj, createdAt.joinRequestId);
      }),
    };
    items[1] = closure_6(closure_5, obj1);
    obj.children = items;
    tmp4 = closure_7(closure_8, obj);
  }
  return tmp4;
});
