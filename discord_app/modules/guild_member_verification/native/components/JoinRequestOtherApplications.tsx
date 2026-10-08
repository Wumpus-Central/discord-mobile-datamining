// === Module 16833: JoinRequestOtherApplications ===

// Module 16833 (JoinRequestOtherApplications)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import DateUtils from "DateUtils" /* 4750 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4902 */;
import CircleCheckIcon from "CircleCheckIcon" /* 4992 */;
import CircleXIcon from "CircleXIcon" /* 4997 */;
import Text_Text from "Text/Text" /* 5086 */;
import openJoinRequestActionSheetDefault from "openJoinRequestActionSheet" /* 16830 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const createStyles = fn(5090);
let obj = { label: { marginHorizontal: 16, marginBottom: 8 }, container: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginHorizontal: 16, marginBottom: 12, borderRadius: nativeDefault.radii.md }, row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 16 }, divider: null };
let size = { width: "100%", height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj.divider = size;
let closure_9 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function ApplicationStatusIcon(status) {
  const cResult = c.c(2);
  status = status.status;
  if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED === status) {
    const _Symbol2 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { size: "sm", color: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND, secondaryColor: nativeDefault.colors.STATUS_POSITIVE_TEXT };
      const tmp14 = timestampProducer(CircleCheckIcon.CircleCheckIcon, obj2);
      cResult[0] = tmp14;
      let first = tmp14;
    } else {
      first = cResult[0];
    }
    return first;
  } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED === status) {
    const _Symbol = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { size: "sm", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, secondaryColor: nativeDefault.colors.WHITE };
      const tmp9 = timestampProducer(CircleXIcon.CircleXIcon, obj3);
      cResult[1] = tmp9;
      let tmp6 = tmp9;
    } else {
      tmp6 = cResult[1];
    }
    return tmp6;
  } else {
    return null;
  }
}) : (function ApplicationStatusIcon(status) {
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
});
ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginHorizontal: 16, marginBottom: 12, borderRadius: nativeDefault.radii.md };
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/JoinRequestOtherApplications.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function JoinRequestOtherApplications(arg0) {
  const cResult = require("c").c(20);
  ({ guildId, userId, selectedJoinRequestId } = arg0);
  const tmp4 = closure_9();
  _require = tmp4;
  if (cResult[0] === guildId) {
    if (cResult[1] === selectedJoinRequestId) {
      if (cResult[2] === userId) {
        let tmp5 = cResult[3];
      }
      row = tmp(16834).useOtherGuildJoinRequestsForUser(tmp5);
      if (0 === row.length) {
        return null;
      } else {
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t["hxa+G3"]);
          cResult[4] = stringResult;
          let tmp6 = stringResult;
        } else {
          tmp6 = cResult[4];
        }
        if (cResult[5] !== tmp4.label) {
          let obj2 = { variant: "text-sm/semibold", color: "text-subtle", style: tmp4.label, children: tmp6 };
          const tmp10 = closure_6(tmp(5086).Text, obj2);
          cResult[5] = tmp4.label;
          cResult[6] = tmp10;
          let tmp8 = tmp10;
        } else {
          tmp8 = cResult[6];
        }
        if (cResult[7] === row) {
          if (cResult[8] === tmp4.divider) {
            if (cResult[9] === tmp4.row) {
              if (cResult[14] === tmp4.container) {
                if (cResult[15] === tmp12) {
                  let tmp16 = cResult[16];
                }
                if (cResult[17] === tmp8) {
                  if (cResult[18] === tmp16) {
                    let tmp20 = cResult[19];
                  }
                  return tmp20;
                }
                let obj3 = { children: null };
                let items = [tmp8, tmp16];
                obj3.children = items;
                const tmp23 = closure_7(closure_8, obj3);
                cResult[17] = tmp8;
                cResult[18] = tmp16;
                cResult[19] = tmp23;
                tmp20 = tmp23;
              }
              let obj4 = { style: tmp11, children: cResult[10] };
              const tmp19 = closure_6(closure_5, obj4);
              cResult[14] = tmp4.container;
              cResult[15] = cResult[10];
              cResult[16] = tmp19;
              tmp16 = tmp19;
            }
          }
        }
        if (cResult[11] === tmp4.divider) {
          if (cResult[12] === tmp4.row) {
            let tmp13 = cResult[13];
          }
          const mapped = row.map(tmp13);
          cResult[7] = row;
          ({ divider: tmp3[8], row } = tmp4);
          cResult[9] = row;
          cResult[10] = mapped;
        }
        const fn = function f(createdAt, arg1) {
          closure_0 = createdAt;
          let tmp2 = arg1 > 0;
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
          const items1 = [timestampProducer(Text_Text.Text, obj4), timestampProducer(closure_10, { status: createdAt.applicationStatus })];
          obj3.children = items1;
          items[1] = React5(React4, obj3);
          obj2.children = items;
          return React5(noop.Fragment, obj2, createdAt.joinRequestId);
        };
        cResult[11] = tmp4.divider;
        cResult[12] = tmp4.row;
        cResult[13] = fn;
        tmp13 = fn;
      }
      const tmpResult = tmp(16834);
    }
  }
  let obj5 = { guildId, userId, selectedJoinRequestId };
  cResult[0] = guildId;
  cResult[1] = selectedJoinRequestId;
  cResult[2] = userId;
  cResult[3] = obj5;
  tmp5 = obj5;
  let obj = require("c");
}) : (function JoinRequestOtherApplications(arg0) {
  ({ guildId, userId, selectedJoinRequestId } = arg0);
  const tmp = closure_9();
  _require = tmp;
  const otherGuildJoinRequestsForUser = require("useOtherGuildJoinRequestsForUser").useOtherGuildJoinRequestsForUser({ guildId, userId, selectedJoinRequestId });
  let tmp4 = null;
  if (0 !== otherGuildJoinRequestsForUser.length) {
    let obj2 = { children: null };
    let obj3 = { variant: "text-sm/semibold", color: "text-subtle", style: tmp.label, children: null };
    const intl = tmp2(1126).intl;
    obj3.children = intl.string(tmp2(1126).t["hxa+G3"]);
    let items = [closure_6(tmp2(5086).Text, obj3), ];
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
          const items1 = [timestampProducer(Text_Text.Text, obj4), timestampProducer(closure_10, { status: createdAt.applicationStatus })];
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
}));