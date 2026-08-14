// discord_app/modules/guild_member_verification/native/components/JoinRequestOtherApplications.tsx
import importAllResult from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { useOtherGuildJoinRequestsForUser } from "../../hooks/useOtherGuildJoinRequestsForUser.tsx";
import { MAX_RESULTS_PER_PAGE } from "../../MemberVerificationTypes.tsx";

let c4;
let c5;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function ApplicationStatusIcon(status) {
  status = status.status;
  if (MAX_RESULTS_PER_PAGE.GuildJoinRequestApplicationStatuses.APPROVED === status) {
    let obj = { size: "sm", color: null, secondaryColor: null };
    obj[1] = Themes.colors.STATUS_POSITIVE_BACKGROUND;
    obj[2] = Themes.colors.STATUS_POSITIVE_TEXT;
    return callback(tmp(4303).CircleCheckIcon, obj);
  } else if (tmp(4168).GuildJoinRequestApplicationStatuses.REJECTED === status) {
    obj = { size: "sm", color: null, secondaryColor: null };
    obj[1] = Themes.colors.ICON_FEEDBACK_CRITICAL;
    obj[2] = Themes.colors.WHITE;
    return callback(tmp(6060).CircleXIcon, obj);
  } else {
    return null;
  }
}
let c3 = importAllResult;
({ Pressable: c4, View: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error, Fragment: metroImportAll } = jsxProd);
let obj = { label: { marginHorizontal: 16, marginBottom: 8 }, container: null, row: null, divider: null };
obj = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, marginHorizontal: 16, marginBottom: 12, borderRadius: require("Themes").radii.md };
obj[1] = obj;
obj[2] = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 16 };
createCacheKey = { width: "100%", height: 1, backgroundColor: require("Themes").colors.BORDER_SUBTLE };
obj[3] = createCacheKey;
let closure_9 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((arg0) => {
  let guildId;
  let selectedJoinRequestId;
  let userId;
  let _require;
  ({ guildId, userId, selectedJoinRequestId } = arg0);
  const tmp = callback3();
  _require = tmp;
  let obj = _useOtherGuildJoinRequestsForUser;
  const otherGuildJoinRequestsForUser = obj.useOtherGuildJoinRequestsForUser({ guildId, userId, selectedJoinRequestId });
  let tmp4 = null;
  if (0 !== otherGuildJoinRequestsForUser.length) {
    obj = { children: null };
    obj = { variant: "text-sm/semibold", color: "text-subtle", style: null, children: null };
    obj[2] = tmp.label;
    const intl = tmp2(1236).intl;
    obj[3] = intl.string(tmp2(1236).t["hxa+G3"]);
    let items = [callback(tmp2(4338).Text, obj), ];
    let obj1 = { style: null, children: null };
    obj1[0] = tmp.container;
    obj1[1] = otherGuildJoinRequestsForUser.map((createdAt) => {
      const _undefined = createdAt;
      let tmp2 = arg1 > 0;
      if (tmp2) {
        let obj = { style: null };
        obj[0] = _undefined.divider;
        tmp2 = outer1_6(outer1_5, obj);
      }
      obj = { children: null };
      const items = [tmp2, ];
      obj = {
        accessibilityRole: "button",
        style: _undefined.row,
        onPress() {
          return outer1_1(outer1_2[11])(closure_0);
        },
        children: null
      };
      const obj1 = { variant: "text-sm/normal", color: "text-default", children: null };
      const obj5 = _undefined(outer1_2[12]);
      obj1[2] = obj5.dateFormat(new Date(createdAt.createdAt), "LL");
      const items1 = [outer1_6(_undefined(outer1_2[9]).Text, obj1), outer1_6(outer1_10, { status: createdAt.applicationStatus })];
      obj[3] = items1;
      items[1] = outer1_7(outer1_4, obj);
      obj[0] = items;
      return outer1_7(outer1_3.Fragment, obj, createdAt.joinRequestId);
    });
    items[1] = callback(closure_5, obj1);
    obj[0] = items;
    tmp4 = callback2(closure_8, obj);
  }
  return tmp4;
});
const result = require("jsxProd").fileFinishedImporting("modules/guild_member_verification/native/components/JoinRequestOtherApplications.tsx");

export default memoResult;