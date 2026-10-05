// discord_app/modules/guild_member_verification/native/components/JoinRequestOtherApplications.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import DateUtils from "../../../../utils/DateUtils.tsx";
import MemberVerificationTypes from "../../MemberVerificationTypes.tsx";
import CircleCheckIcon2 from "../../../../design/components/Icon/native/redesign/generated/CircleCheckIcon.tsx";
import CircleXIcon2 from "../../../../design/components/Icon/native/redesign/generated/CircleXIcon.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment_mod from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, closure_0, status;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let size;
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
let Fragment = Fragment_mod;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  label: { marginHorizontal: 16, marginBottom: 8 },
  container: obj2,
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 16 },
  divider: size,
};
obj2 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  marginHorizontal: 16,
  marginBottom: 12,
  borderRadius: nativeDefault.radii.md,
};
createStyles = createStyles.createStyles;
size = { width: "100%", height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_9 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (status) => {
      const obj = react2;
      const cResult = obj.c(2);
      status = status.status;
      if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED === status) {
        let first;
        const _Symbol2 = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = {
            size: "sm",
            color: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND,
            secondaryColor: nativeDefault.colors.STATUS_POSITIVE_TEXT,
          };
          const CircleCheckIcon = CircleCheckIcon2.CircleCheckIcon;
          const tmp14 = metroRequire(CircleCheckIcon, obj2);
          cResult[0] = tmp14;
          first = tmp14;
        } else {
          first = cResult[0];
        }
        return first;
      } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED === status) {
        let tmp6;
        const _Symbol = Symbol;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = {
            size: "sm",
            color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL,
            secondaryColor: nativeDefault.colors.WHITE,
          };
          const CircleXIcon = CircleXIcon2.CircleXIcon;
          const tmp9 = metroRequire(CircleXIcon, obj3);
          cResult[1] = tmp9;
          tmp6 = tmp9;
        } else {
          tmp6 = cResult[1];
        }
        return tmp6;
      } else {
        return null;
      }
    }
  : (status) => {
      status = status.status;
      if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED === status) {
        const obj2 = {
          size: "sm",
          color: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND,
          secondaryColor: nativeDefault.colors.STATUS_POSITIVE_TEXT,
        };
        const CircleCheckIcon = CircleCheckIcon2.CircleCheckIcon;
        return metroRequire(CircleCheckIcon, obj2);
      } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED === status) {
        const obj = {
          size: "sm",
          color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL,
          secondaryColor: nativeDefault.colors.WHITE,
        };
        const CircleXIcon = CircleXIcon2.CircleXIcon;
        return metroRequire(CircleXIcon, obj);
      } else {
        return null;
      }
    };
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let guildId;
        let items;
        let selectedJoinRequestId;
        let userId;
        let obj = require("react");
        const cResult = obj.c(20);
        ({ guildId, userId, selectedJoinRequestId } = arg0);
        const tmp4 = closure_9();
        _require = tmp4;
        if (cResult[0] === guildId) {
          if (cResult[1] === selectedJoinRequestId) {
            let tmp5;
            if (cResult[2] === userId) {
              tmp5 = cResult[3];
            }
            const tmpResult = require("useOtherGuildJoinRequestsForUser");
            const otherGuildJoinRequestsForUser = tmpResult.useOtherGuildJoinRequestsForUser(tmp5);
            if (0 === otherGuildJoinRequestsForUser.length) {
              return null;
            } else {
              let tmp6;
              let tmp8;
              let tmp12;
              const _Symbol = Symbol;
              const label = tmp4.label;
              if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
                const intl = tmp(1126).intl;
                const stringResult = intl.string(require("intl").t["hxa+G3"]);
                cResult[4] = stringResult;
                tmp6 = stringResult;
              } else {
                tmp6 = cResult[4];
              }
              if (cResult[5] !== tmp4.label) {
                let obj2 = { variant: "text-sm/semibold", color: "text-subtle", style: label, children: tmp6 };
                const tmp10 = closure_6(require("Text/Text").Text, obj2);
                cResult[5] = tmp4.label;
                cResult[6] = tmp10;
                tmp8 = tmp10;
              } else {
                tmp8 = cResult[6];
              }
              if (cResult[7] === otherGuildJoinRequestsForUser) {
                if (cResult[8] === tmp4.divider) {
                  if (cResult[9] === tmp4.row) {
                    tmp12 = cResult[10];
                  }
                  if (cResult[14] === tmp4.container) {
                    let tmp15;
                    if (cResult[15] === tmp12) {
                      tmp15 = cResult[16];
                    }
                    if (cResult[17] === tmp8) {
                      let tmp19;
                      if (cResult[18] === tmp15) {
                        tmp19 = cResult[19];
                      }
                      return tmp19;
                    }
                    let obj3 = { children: items };
                    items = [tmp8, tmp15];
                    const tmp22 = closure_7(closure_8, obj3);
                    cResult[17] = tmp8;
                    cResult[18] = tmp15;
                    cResult[19] = tmp22;
                    tmp19 = tmp22;
                  }
                  let obj4 = { style: tmp11, children: tmp12 };
                  const tmp18 = closure_6(closure_5, obj4);
                  cResult[14] = tmp4.container;
                  cResult[15] = tmp12;
                  cResult[16] = tmp18;
                  tmp15 = tmp18;
                }
              }
              if (cResult[11] === tmp4.divider) {
                let tmp13;
                if (cResult[12] === tmp4.row) {
                  tmp13 = cResult[13];
                }
                const mapped = otherGuildJoinRequestsForUser.map(tmp13);
                cResult[7] = otherGuildJoinRequestsForUser;
                cResult[8] = tmp4.divider;
                cResult[9] = tmp4.row;
                cResult[10] = mapped;
                tmp12 = mapped;
              }
              const fn = function f(createdAt, arg1) {
                let date;
                let dateFormat;
                let items;
                let items1;
                closure_0 = createdAt;
                let tmp2 = arg1 > 0;
                const Fragment = react.Fragment;
                if (tmp2) {
                  const obj = { style: closure_0.divider };
                  tmp2 = metroRequire(hasOwnProperty, obj);
                }
                const obj2 = { children: items };
                items = [tmp2];
                const obj3 = {
                  accessibilityRole: "button",
                  style: closure_0.row,
                  onPress() {
                    return closure_2_1(closure_2_2[13])(closure_0);
                  },
                  children: items1,
                };
                const obj4 = { variant: "text-sm/normal", color: "text-default", children: dateFormat(date, "LL") };
                const Text = Text_Text.Text;
                dateFormat = DateUtils.dateFormat;
                DateUtils;
                date = new Date(createdAt.createdAt);
                items1 = [metroRequire(Text, obj4)];
                const obj5 = { status: createdAt.applicationStatus };
                items1[1] = metroRequire(closure_10, obj5);
                items[1] = metroImportDefault(React3, obj3);
                return metroImportDefault(Fragment, obj2, createdAt.joinRequestId);
              };
              cResult[11] = tmp4.divider;
              cResult[12] = tmp4.row;
              cResult[13] = fn;
              tmp13 = fn;
            }
          }
        }
        let obj5 = { guildId, userId, selectedJoinRequestId };
        cResult[0] = guildId;
        cResult[1] = selectedJoinRequestId;
        cResult[2] = userId;
        cResult[3] = obj5;
        tmp5 = obj5;
      }
    : (arg0) => {
        let guildId;
        let intl;
        let items;
        let selectedJoinRequestId;
        let userId;
        ({ guildId, userId, selectedJoinRequestId } = arg0);
        const tmp = closure_9();
        _require = tmp;
        let tmp2 = _require;
        let obj = require("useOtherGuildJoinRequestsForUser");
        const otherGuildJoinRequestsForUser = obj.useOtherGuildJoinRequestsForUser({
          guildId,
          userId,
          selectedJoinRequestId,
        });
        let tmp4 = null;
        if (0 !== otherGuildJoinRequestsForUser.length) {
          let obj2 = { children: items };
          let obj3 = {
            variant: "text-sm/semibold",
            color: "text-subtle",
            style: tmp.label,
            children: intl.string(tmp2(1126).t["hxa+G3"]),
          };
          let Text = tmp2(4886).Text;
          intl = tmp2(1126).intl;
          items = [closure_6(Text, obj3)];
          let obj4 = {
            style: tmp.container,
            children: otherGuildJoinRequestsForUser.map((createdAt, index) => {
              let date;
              let dateFormat;
              let items;
              let items1;
              closure_0 = createdAt;
              let tmp2 = index > 0;
              const Fragment = react.Fragment;
              if (tmp2) {
                const obj = { style: closure_0.divider };
                tmp2 = metroRequire(hasOwnProperty, obj);
              }
              const obj2 = { children: items };
              items = [tmp2];
              const obj3 = {
                accessibilityRole: "button",
                style: closure_0.row,
                onPress() {
                  return closure_2_1(closure_2_2[13])(closure_0);
                },
                children: items1,
              };
              const obj4 = { variant: "text-sm/normal", color: "text-default", children: dateFormat(date, "LL") };
              const Text = Text_Text.Text;
              dateFormat = DateUtils.dateFormat;
              DateUtils;
              date = new Date(createdAt.createdAt);
              items1 = [metroRequire(Text, obj4)];
              const obj5 = { status: createdAt.applicationStatus };
              items1[1] = metroRequire(closure_10, obj5);
              items[1] = metroImportDefault(React3, obj3);
              return metroImportDefault(Fragment, obj2, createdAt.joinRequestId);
            }),
          };
          items[1] = closure_6(closure_5, obj4);
          tmp4 = closure_7(closure_8, obj2);
        }
        return tmp4;
      },
);
size = size_mod;
const result = size.fileFinishedImporting(
  "modules/guild_member_verification/native/components/JoinRequestOtherApplications.tsx",
);

export default memoResult;
