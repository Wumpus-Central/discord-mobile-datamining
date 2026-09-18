// === Module 16844: JoinRequestOtherApplications ===

// Module 16844 (JoinRequestOtherApplications)
import nativeDefault from "native" /* 576 */;
import DateUtils from "DateUtils" /* 4404 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4546 */;
import CircleCheckIcon from "CircleCheckIcon" /* 4681 */;
import Text_Text from "Text/Text" /* 4718 */;
import CircleXIcon from "CircleXIcon" /* 6809 */;
import openJoinRequestActionSheetDefault from "openJoinRequestActionSheet" /* 16841 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function ApplicationStatusIcon(status) {
  status = status.status;
  if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED === status) {
    const obj2 = { size: "sm", color: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND, secondaryColor: nativeDefault.colors.STATUS_POSITIVE_TEXT };
    return timestampProducer(CircleCheckIcon.CircleCheckIcon, obj2);
  } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED === status) {
    const obj = { size: "sm", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, secondaryColor: nativeDefault.colors.WHITE };
    return timestampProducer(CircleXIcon.CircleXIcon, obj);
  } else {
    return null;
  }
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const createStyles = fn(4722);
let obj = { label: { marginHorizontal: 16, marginBottom: 8 }, container: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginHorizontal: 16, marginBottom: 12, borderRadius: nativeDefault.radii.md }, row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 16 }, divider: null };
let size = { width: "100%", height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj.divider = size;
let closure_9 = createStyles.createStyles(obj);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginHorizontal: 16, marginBottom: 12, borderRadius: nativeDefault.radii.md };
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/JoinRequestOtherApplications.tsx");

export default noop.memo((arg0) => {
  ({ guildId, userId, selectedJoinRequestId } = arg0);
  const tmp = closure_9();
  _require = tmp;
  const otherGuildJoinRequestsForUser = require("useOtherGuildJoinRequestsForUser").useOtherGuildJoinRequestsForUser({ guildId, userId, selectedJoinRequestId });
  let tmp4 = null;
  if (0 !== otherGuildJoinRequestsForUser.length) {
    let obj2 = { children: null };
    let obj3 = { variant: "text-sm/semibold", color: "text-subtle", style: tmp.label, children: null };
    const intl = tmp2(1115).intl;
    obj3.children = intl.string(tmp2(1115).t["hxa+G3"]);
    let items = [closure_6(tmp2(4718).Text, obj3), ];
    let obj4 = {
      style: tmp.container,
      children: otherGuildJoinRequestsForUser.map((createdAt, index) => {
          closure_0 = createdAt;
          let tmp2 = index > 0;
          if (tmp2) {
            const obj = { style: closure_0.divider };
            tmp2 = timestampProducer(hasOwnProperty, obj);
          }
          const obj2 = { children: null };
          const items = [tmp2, ];
          const obj3 = {
            accessibilityRole: "button",
            style: closure_0.row,
            onPress() {
              return openJoinRequestActionSheetDefault(closure_0);
            },
            children: null
          };
          const obj4 = { variant: "text-sm/normal", color: "text-default", children: null };
          const obj5 = DateUtils;
          obj4.children = obj5.dateFormat(new Date(createdAt.createdAt), "LL");
          const items1 = [timestampProducer(Text_Text.Text, obj4), timestampProducer(ApplicationStatusIcon, { status: createdAt.applicationStatus })];
          obj3.children = items1;
          items[1] = React5(React4, obj3);
          obj2.children = items;
          return React5(noop.Fragment, obj2, createdAt.joinRequestId);
        })
    };
    items[1] = closure_6(closure_5, obj4);
    obj2.children = items;
    tmp4 = closure_7(closure_8, obj2);
  }
  return tmp4;
});