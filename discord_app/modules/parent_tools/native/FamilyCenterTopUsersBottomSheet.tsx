// discord_app/modules/parent_tools/native/FamilyCenterTopUsersBottomSheet.tsx
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import _modDef2568 from "../FamilyCenter.messages.js";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import TableRow2 from "../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import ActionSheet from "../../../design/components/Sheet/native/ActionSheet.native.tsx";
import FamilyCenterUtils from "../FamilyCenterUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5092);
let closure_6 = createStyles.createStyles({ header: { textAlign: "center" } });
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function UserRow(userActivity) {
      const cResult = c.c(18);
      userActivity = userActivity.userActivity;
      if (cResult[0] === userActivity.call_count) {
        if (cResult[1] === userActivity.dms_sent) {
          if (cResult[2] === userActivity.user_id) {
            let tmp7 = cResult[6];
            let tmp8 = cResult[7];
          }
          const _Symbol = Symbol;
          if (tmp7 !== Symbol.for("react.early_return_sentinel")) {
            return tmp7;
          } else {
            if (cResult[11] !== tmp8) {
              const obj2 = { size: native.AvatarSizes.SMALL, user: tmp8, guildId: "Array" };
              const tmp20 = React4(native.Avatar, obj2);
              cResult[11] = tmp8;
              cResult[12] = tmp20;
              let tmp18 = tmp20;
            } else {
              tmp18 = cResult[12];
            }
            if (cResult[13] === tmp4) {
              if (cResult[14] === tmp5) {
                if (cResult[15] === tmp6) {
                }
              }
            }
            const obj4 = { label: tmp6, subLabel: tmp5, icon: tmp18 };
            const tmp23 = React4(tmp4, obj4);
            cResult[13] = tmp4;
            cResult[14] = tmp5;
            cResult[15] = tmp6;
            cResult[16] = tmp18;
            cResult[17] = tmp23;
          }
        }
      }
      const user = UserStore.getUser(userActivity.user_id);
      if (null == user) {
        cResult[0] = userActivity.call_count;
        cResult[1] = userActivity.dms_sent;
        cResult[2] = userActivity.user_id;
        cResult[3] = undefined;
        cResult[4] = undefined;
        cResult[5] = undefined;
        cResult[6] = null;
        cResult[7] = user;
        tmp7 = null;
        tmp8 = user;
      } else {
        if (cResult[8] === userActivity.call_count) {
          const TableRow = TableRow2.TableRow;
          const name = UserUtilsDefault.getName(user);
        }
        const topUserOrGuildDescription = FamilyCenterUtils.getTopUserOrGuildDescription(
          userActivity.dms_sent,
          userActivity.call_count,
        );
        cResult[8] = userActivity.call_count;
        cResult[9] = userActivity.dms_sent;
        cResult[10] = topUserOrGuildDescription;
        const tmpResult = FamilyCenterUtils;
      }
      const forResult = Symbol.for("react.early_return_sentinel");
    }
  : function UserRow(userActivity) {
      userActivity = userActivity.userActivity;
      const user = UserStore.getUser(userActivity.user_id);
      if (null == user) {
        return null;
      } else {
        const topUserOrGuildDescription = FamilyCenterUtils.getTopUserOrGuildDescription(
          userActivity.dms_sent,
          userActivity.call_count,
        );
        const obj2 = { label: null, subLabel: null, icon: null };
        obj2.label = UserUtilsDefault.getName(user);
        obj2.subLabel = topUserOrGuildDescription;
        const obj4 = { size: native.AvatarSizes.SMALL, user, guildId: "Array" };
        obj2.icon = React4(native.Avatar, obj4);
        return React4(TableRow2.TableRow, obj2);
      }
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterTopUsersBottomSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function FamilyCenterTopUsersBottomSheet(topUserActivities) {
      const cResult = c.c(11);
      topUserActivities = topUserActivities.topUserActivities;
      const tmp4 = closure_6();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(_modDef2568.BxbvS7);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.header) {
        const obj2 = { variant: "text-md/bold", style: tmp4.header, children: first };
        const tmp10 = React4(Text_Text.Text, obj2);
        cResult[1] = tmp4.header;
        cResult[2] = tmp10;
        let tmp8 = tmp10;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] !== topUserActivities) {
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function v(userActivity) {
            return closure_1_4(closure_1_7, { userActivity }, userActivity.user_id);
          };
          cResult[5] = fn;
          let tmp12 = fn;
        } else {
          tmp12 = cResult[5];
        }
        const mapped = topUserActivities.map(tmp12);
        cResult[3] = topUserActivities;
        cResult[4] = mapped;
      } else {
        if (cResult[6] !== cResult[4]) {
          const obj3 = { hasIcons: true, children: tmp11 };
          const tmp17 = React4(TableRowGroup.TableRowGroup, obj3);
          cResult[6] = tmp11;
          cResult[7] = tmp17;
          let tmp15 = tmp17;
        } else {
          tmp15 = cResult[7];
        }
        if (cResult[8] === tmp8) {
          if (cResult[9] === tmp15) {
            let tmp18 = cResult[10];
          }
          return tmp18;
        }
        const obj4 = { children: null };
        const items = [tmp8, tmp15];
        obj4.children = items;
        const tmp20 = hasOwnProperty(ActionSheet.ActionSheet, obj4);
        cResult[8] = tmp8;
        cResult[9] = tmp15;
        cResult[10] = tmp20;
        tmp18 = tmp20;
      }
    }
  : function FamilyCenterTopUsersBottomSheet(topUserActivities) {
      topUserActivities = topUserActivities.topUserActivities;
      const obj = { children: null };
      const obj2 = { variant: "text-md/bold", style: closure_6().header, children: null };
      const intl = util.intl;
      obj2.children = intl.string(_modDef2568.BxbvS7);
      const items = [React4(Text_Text.Text, obj2)];
      const tmp = closure_6();
      items[1] = React4(TableRowGroup.TableRowGroup, {
        hasIcons: true,
        children: topUserActivities.map((userActivity) =>
          closure_1_4(closure_1_7, { userActivity }, userActivity.user_id),
        ),
      });
      obj.children = items;
      return hasOwnProperty(ActionSheet.ActionSheet, obj);
    };
