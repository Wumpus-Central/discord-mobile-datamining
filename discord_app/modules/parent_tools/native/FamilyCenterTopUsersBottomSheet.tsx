// discord_app/modules/parent_tools/native/FamilyCenterTopUsersBottomSheet.tsx
import react2 from "../../../../_runtime/00576_react.js";
import intl2 from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import _modDef2493 from "../FamilyCenter.messages.js";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import TableRow2 from "../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup2 from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import ActionSheet2 from "../../../design/components/Sheet/native/ActionSheet.native.tsx";
import FamilyCenterUtils from "../FamilyCenterUtils.tsx";
import react from "../../../../_runtime/00019_react.js";
import UserStore from "../../../stores/UserStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let topUserActivities;

let closure_4;
let hasOwnProperty;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ header: { textAlign: "center" } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (userActivity) => {
      const obj = react2;
      const cResult = obj.c(18);
      userActivity = userActivity.userActivity;
      if (cResult[0] === userActivity.call_count) {
        if (cResult[1] === userActivity.dms_sent) {
          let tmp4;
          let tmp5;
          let tmp6;
          let tmp7;
          let tmp8;
          if (cResult[2] === userActivity.user_id) {
            tmp4 = cResult[3];
            tmp5 = cResult[4];
            tmp6 = cResult[5];
            tmp7 = cResult[6];
            tmp8 = cResult[7];
          }
          const _Symbol = Symbol;
          if (tmp7 === Symbol.for("react.early_return_sentinel")) {
            let tmp19;
            if (cResult[11] !== tmp8) {
              const obj2 = { size: native.AvatarSizes.SMALL, user: tmp8, guildId: "r" };
              const Avatar = native.Avatar;
              const tmp21 = React3(Avatar, obj2);
              cResult[11] = tmp8;
              cResult[12] = tmp21;
              tmp19 = tmp21;
            } else {
              tmp19 = cResult[12];
            }
            if (cResult[13] === tmp4) {
              if (cResult[14] === tmp5) {
                if (cResult[15] === tmp6) {
                  let tmp22;
                  if (cResult[16] === tmp19) {
                    tmp22 = cResult[17];
                  }
                  tmp7 = tmp22;
                }
              }
            }
            const obj4 = { label: tmp6, subLabel: tmp5, icon: tmp19 };
            const tmp24 = React3(tmp4, obj4);
            cResult[13] = tmp4;
            cResult[14] = tmp5;
            cResult[15] = tmp6;
            cResult[16] = tmp19;
            cResult[17] = tmp24;
            tmp22 = tmp24;
          }
          return tmp7;
        }
      }
      const forResult = Symbol.for("react.early_return_sentinel");
      const user = UserStore.getUser(userActivity.user_id);
      let tmp11 = null;
      let name;
      let tmp13;
      let TableRow;
      if (null != user) {
        if (cResult[8] === userActivity.call_count) {
          let tmp15;
          if (cResult[9] === userActivity.dms_sent) {
            tmp15 = cResult[10];
          }
          TableRow = TableRow2.TableRow;
          const obj3 = UserUtilsDefault;
          name = obj3.getName(user);
          tmp13 = tmp15;
          tmp11 = forResult;
        }
        const tmpResult = FamilyCenterUtils;
        const topUserOrGuildDescription = tmpResult.getTopUserOrGuildDescription(
          userActivity.dms_sent,
          userActivity.call_count,
        );
        cResult[8] = userActivity.call_count;
        cResult[9] = userActivity.dms_sent;
        cResult[10] = topUserOrGuildDescription;
        tmp15 = topUserOrGuildDescription;
      }
      cResult[0] = userActivity.call_count;
      cResult[1] = userActivity.dms_sent;
      cResult[2] = userActivity.user_id;
      cResult[3] = TableRow;
      cResult[4] = tmp13;
      cResult[5] = name;
      cResult[6] = tmp11;
      cResult[7] = user;
      tmp7 = tmp11;
      tmp6 = name;
      tmp5 = tmp13;
      tmp4 = TableRow;
      tmp8 = user;
    }
  : (userActivity) => {
      let Avatar;
      let obj3;
      let obj4;
      userActivity = userActivity.userActivity;
      const user = UserStore.getUser(userActivity.user_id);
      if (null == user) {
        return null;
      } else {
        const obj = FamilyCenterUtils;
        const topUserOrGuildDescription = obj.getTopUserOrGuildDescription(
          userActivity.dms_sent,
          userActivity.call_count,
        );
        const obj2 = { label: obj3.getName(user), subLabel: topUserOrGuildDescription, icon: React3(Avatar, obj4) };
        const TableRow = TableRow2.TableRow;
        obj3 = UserUtilsDefault;
        obj4 = { size: native.AvatarSizes.SMALL, user, guildId: "r" };
        Avatar = native.Avatar;
        return React3(TableRow, obj2);
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (topUserActivities) => {
      let first;
      let items;
      let tmp11;
      let tmp14;
      let tmp8;
      let obj = react2;
      const cResult = obj.c(11);
      topUserActivities = topUserActivities.topUserActivities;
      const tmp4 = closure_6();
      const header = tmp4.header;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl2.intl;
        const stringResult = intl.string(_modDef2493.BxbvS7);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.header) {
        const obj2 = { variant: "text-md/bold", style: header, children: first };
        const tmp10 = React3(Text_Text.Text, obj2);
        cResult[1] = tmp4.header;
        cResult[2] = tmp10;
        tmp8 = tmp10;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] !== topUserActivities) {
        let tmp12;
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function v(userActivity) {
            const obj = { userActivity };
            return closure_1_4(closure_1_7, obj, userActivity.user_id);
          };
          cResult[5] = fn;
          tmp12 = fn;
        } else {
          tmp12 = cResult[5];
        }
        const mapped = topUserActivities.map(tmp12);
        cResult[3] = topUserActivities;
        cResult[4] = mapped;
        tmp11 = mapped;
      } else {
        tmp11 = cResult[4];
      }
      if (cResult[6] !== tmp11) {
        const obj3 = { hasIcons: true, children: tmp11 };
        const tmp16 = React3(TableRowGroup2.TableRowGroup, obj3);
        cResult[6] = tmp11;
        cResult[7] = tmp16;
        tmp14 = tmp16;
      } else {
        tmp14 = cResult[7];
      }
      if (cResult[8] === tmp8) {
        let tmp17;
        if (cResult[9] === tmp14) {
          tmp17 = cResult[10];
        }
        return tmp17;
      }
      const obj4 = { children: items };
      items = [tmp8, tmp14];
      const tmp18 = hasOwnProperty(ActionSheet2.ActionSheet, obj4);
      cResult[8] = tmp8;
      cResult[9] = tmp14;
      cResult[10] = tmp18;
      tmp17 = tmp18;
    }
  : (topUserActivities) => {
      let intl;
      let items;
      topUserActivities = topUserActivities.topUserActivities;
      let obj = { children: items };
      const tmp = closure_6();
      const ActionSheet = ActionSheet2.ActionSheet;
      const obj2 = { variant: "text-md/bold", style: tmp.header, children: intl.string(_modDef2493.BxbvS7) };
      const Text = Text_Text.Text;
      intl = intl2.intl;
      items = [React3(Text, obj2)];
      const obj3 = {
        hasIcons: true,
        children: topUserActivities.map((userActivity) => {
          const obj = { userActivity };
          return closure_1_4(closure_1_7, obj, userActivity.user_id);
        }),
      };
      const TableRowGroup = TableRowGroup2.TableRowGroup;
      items[1] = React3(TableRowGroup, obj3);
      return hasOwnProperty(ActionSheet, obj);
    };
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterTopUsersBottomSheet.tsx");

export default tmp4;
