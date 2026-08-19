// === Module 15837: ApplicationStatusIcon ===

// Module 15837 (ApplicationStatusIcon)
import ThemesDefault from "Themes" /* 712 */;
import MAX_RESULTS_PER_PAGE from "MAX_RESULTS_PER_PAGE" /* 4200 */;
import CircleCheckIcon from "CircleCheckIcon" /* 4335 */;
import CircleXIcon from "CircleXIcon" /* 7341 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
function ApplicationStatusIcon(status) {
  status = status.status;
  if (MAX_RESULTS_PER_PAGE.GuildJoinRequestApplicationStatuses.APPROVED === status) {
    let obj = { size: "sm", color: null, secondaryColor: null };
    obj[1] = ThemesDefault.colors.STATUS_POSITIVE_BACKGROUND;
    obj[2] = ThemesDefault.colors.STATUS_POSITIVE_TEXT;
    return callback(CircleCheckIcon.CircleCheckIcon, obj);
  } else if (MAX_RESULTS_PER_PAGE.GuildJoinRequestApplicationStatuses.REJECTED === status) {
    obj = { size: "sm", color: null, secondaryColor: null };
    obj[1] = ThemesDefault.colors.ICON_FEEDBACK_CRITICAL;
    obj[2] = ThemesDefault.colors.WHITE;
    return callback(CircleXIcon.CircleXIcon, obj);
  } else {
    return null;
  }
}
let c3 = importAllResult;
({ Pressable: c4, View: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error, Fragment: closure_8 } = jsxProd);
let obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, marginHorizontal: 16, marginBottom: 12, borderRadius: ThemesDefault.radii.md };
obj[1] = obj;
obj[2] = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 16 };
const createCacheKey = { width: "100%", height: 1, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
obj[3] = createCacheKey;
let closure_9 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((arg0) => {
  ({ guildId, userId, selectedJoinRequestId } = arg0);
  const tmp = callback3();
  const _require = tmp;
  let obj = _require(15838);
  const otherGuildJoinRequestsForUser = obj.useOtherGuildJoinRequestsForUser({ guildId, userId, selectedJoinRequestId });
  let tmp4 = null;
  if (0 !== otherGuildJoinRequestsForUser.length) {
    obj = { variant: "text-sm/semibold", color: "text-subtle", style: null, children: null };
    obj[2] = tmp.label;
    const intl = tmp2(1236).intl;
    obj[3] = intl.string(tmp2(1236).t["hxa+G3"]);
    let items = [callback(tmp2(4734).Text, obj), ];
    obj1 = { style: null, children: null };
    obj1[0] = tmp.container;
    obj1[1] = otherGuildJoinRequestsForUser.map((item, index) => {
      const lib = item;
      let tmp2 = index > 0;
      if (tmp2) {
        let obj = { style: null };
        obj[0] = lib.divider;
        tmp2 = closure_1_6(closure_1_5, obj);
      }
      const items = [tmp2, ];
      obj = {
        accessibilityRole: "button",
        style: lib.row,
        onPress() {
          return closure_1_1(closure_1_2[11])(closure_0);
        },
        children: null
      };
      obj1 = { variant: "text-sm/normal", color: "text-default", children: null };
      const obj5 = lib(dependencyMap[12]);
      obj1[2] = obj5.dateFormat(new Date(item.createdAt), "LL");
      const items1 = [closure_1_6(lib(dependencyMap[9]).Text, obj1), closure_1_6(ApplicationStatusIcon, { status: item.applicationStatus })];
      obj[3] = items1;
      items[1] = closure_1_7(closure_1_4, obj);
      obj[0] = items;
      return closure_1_7(closure_1_3.Fragment, obj, item.joinRequestId);
    });
    items[1] = callback(closure_5, obj1);
    obj[0] = items;
    tmp4 = callback2(closure_8, obj);
  }
  return tmp4;
});
const result = require("obj132").fileFinishedImporting("modules/guild_member_verification/native/components/JoinRequestOtherApplications.tsx");

export default memoResult;