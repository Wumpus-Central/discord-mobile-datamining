// discord_app/modules/guild_instant_invites/native/InstantInviteCode.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../intl/index.native.tsx";
import ChannelRecord from "../../../records/ChannelRecord.tsx";
import ClockIcon from "../../../design/components/Icon/native/redesign/generated/ClockIcon.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useChannelName from "../../channel/useChannelName.tsx";
import Stack_Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import utils_ChannelUtils from "../../../utils/native/ChannelUtils.tsx";
import TextIcon2 from "../../../design/components/Icon/native/redesign/generated/TextIcon.tsx";
import CountDownDefault from "../../../components_native/common/CountDown.tsx";
import react from "../../../../_runtime/00019_react.js";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let invite;

let c9;
let metroImportAll;
let obj2;
const View = react_native.View;
let closure_5 = ChannelRecord.createChannelRecordFromInvite;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let obj = { flex: { flex: 1 }, channel: { flex: 0 }, time: obj2 };
obj2 = { color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
let closure_10 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let channel;
      let expiresAt;
      let intl;
      let items;
      let items1;
      let items2;
      let tmp10;
      let tmp5;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(18);
      ({ channel, expiresAt } = arg0);
      const tmp4 = closure_10();
      if (cResult[0] !== channel) {
        const tmpResult = utils_ChannelUtils;
        let TextIcon = tmpResult.getSimpleChannelIconComponent(channel);
        if (TextIcon == null) {
          TextIcon = TextIcon2.TextIcon;
        }
        cResult[0] = channel;
        cResult[1] = TextIcon;
        tmp5 = TextIcon;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== tmp5) {
        const tmp9 = metroImportAll(tmp5, { color: "icon-subtle", size: "xs" });
        cResult[2] = tmp5;
        cResult[3] = tmp9;
        tmp7 = tmp9;
      } else {
        tmp7 = cResult[3];
      }
      const channel2 = tmp4.channel;
      if (cResult[4] !== channel) {
        const tmpResult2 = useChannelName;
        const channelName = tmpResult2.computeChannelName(channel, UserStore, RelationshipStore, false);
        cResult[4] = channel;
        cResult[5] = channelName;
        tmp10 = channelName;
      } else {
        tmp10 = cResult[5];
      }
      if (cResult[6] === tmp4.channel) {
        let tmp16;
        if (cResult[7] === tmp10) {
          tmp16 = cResult[8];
        }
        if (cResult[9] === tmp7) {
          let tmp18;
          if (cResult[10] === tmp16) {
            tmp18 = cResult[11];
          }
          if (cResult[12] === expiresAt) {
            let tmp21;
            if (cResult[13] === tmp4.time) {
              tmp21 = cResult[14];
            }
            if (cResult[15] === tmp18) {
              let tmp27;
              if (cResult[16] === tmp21) {
                tmp27 = cResult[17];
              }
              return tmp27;
            }
            const obj2 = { children: items };
            items = [tmp18, tmp21];
            const tmp29 = React4(Stack_Stack.Stack, obj2);
            cResult[15] = tmp18;
            cResult[16] = tmp21;
            cResult[17] = tmp29;
            tmp27 = tmp29;
          }
          let tmp23 = null != expiresAt;
          if (tmp23) {
            const obj3 = { direction: "horizontal", align: "center", children: items1 };
            const Stack = Stack_Stack.Stack;
            items1 = [metroImportAll(ClockIcon.ClockIcon, { size: "xs", color: "icon-subtle" }), ,];
            const obj4 = { variant: "text-md/semibold", color: "text-subtle", children: intl.string(intl2.t.aTABYx) };
            const Text = Text_Text.Text;
            intl = intl2.intl;
            items1[1] = metroImportAll(Text, obj4);
            const obj5 = { style: tmp4.time, deadline: expiresAt };
            items1[2] = metroImportAll(CountDownDefault, obj5);
            tmp23 = React4(Stack, obj3);
          }
          cResult[12] = expiresAt;
          cResult[13] = tmp4.time;
          cResult[14] = tmp23;
          tmp21 = tmp23;
        }
        const obj6 = { direction: "horizontal", align: "center", children: items2 };
        items2 = [tmp7, tmp16];
        const tmp20 = React4(Stack_Stack.Stack, obj6);
        cResult[9] = tmp7;
        cResult[10] = tmp16;
        cResult[11] = tmp20;
        tmp18 = tmp20;
      }
      const tmp17 = metroImportAll(Text_Text.Text, {
        variant: "text-md/semibold",
        color: "text-subtle",
        style: channel2,
        lineClamp: 1,
        children: tmp10,
      });
      cResult[6] = tmp4.channel;
      cResult[7] = tmp10;
      cResult[8] = tmp17;
      tmp16 = tmp17;
    }
  : (arg0) => {
      let channel;
      let expiresAt;
      let intl;
      let items;
      let items2;
      let tmp2Result;
      ({ channel, expiresAt } = arg0);
      const tmp = closure_10();
      const obj = utils_ChannelUtils;
      let TextIcon = obj.getSimpleChannelIconComponent(channel);
      if (TextIcon == null) {
        TextIcon = TextIcon2.TextIcon;
      }
      const Stack = Stack_Stack.Stack;
      const obj2 = { direction: "horizontal", align: "center", children: items };
      const Stack2 = Stack_Stack.Stack;
      items = [metroImportAll(TextIcon, { color: "icon-subtle", size: "xs" })];
      const obj3 = {
        variant: "text-md/semibold",
        color: "text-subtle",
        style: tmp.channel,
        lineClamp: 1,
        children: tmp2Result.computeChannelName(channel, UserStore, RelationshipStore, false),
      };
      const Text = Text_Text.Text;
      tmp2Result = useChannelName;
      items[1] = metroImportAll(Text, obj3);
      const children = [React4(Stack2, obj2)];
      let tmp4Result = null != expiresAt;
      if (tmp4Result) {
        const obj4 = { direction: "horizontal", align: "center", children: items2 };
        const Stack3 = Stack_Stack.Stack;
        items2 = [metroImportAll(ClockIcon.ClockIcon, { size: "xs", color: "icon-subtle" }), ,];
        const obj5 = { variant: "text-md/semibold", color: "text-subtle", children: intl.string(intl2.t.aTABYx) };
        const Text2 = Text_Text.Text;
        intl = intl2.intl;
        items2[1] = metroImportAll(Text2, obj5);
        const obj6 = { style: tmp.time, deadline: expiresAt };
        items2[2] = metroImportAll(CountDownDefault, obj6);
        tmp4Result = React4(Stack3, obj4);
      }
      children[1] = tmp4Result;
      return React4(Stack, { children });
    };
let closure_11 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (invite) => {
      let items;
      let tmp11;
      let tmp5;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(15);
      invite = invite.invite;
      const tmp4 = closure_10();
      if (cResult[0] !== invite.channel) {
        const tmp7 = closure_5(invite.channel);
        cResult[0] = invite.channel;
        cResult[1] = tmp7;
        tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      const flex = tmp4.flex;
      if (cResult[2] !== invite.code) {
        const obj2 = { variant: "text-lg/bold", tabularNumbers: true, children: invite.code };
        const tmp10 = metroImportAll(Text_Text.Text, obj2);
        cResult[2] = invite.code;
        cResult[3] = tmp10;
        tmp8 = tmp10;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] !== invite) {
        const expiresAt = invite.getExpiresAt();
        cResult[4] = invite;
        cResult[5] = expiresAt;
        tmp11 = expiresAt;
      } else {
        tmp11 = cResult[5];
      }
      if (cResult[6] === tmp5) {
        let tmp13;
        if (cResult[7] === tmp11) {
          tmp13 = cResult[8];
        }
        if (cResult[9] === tmp8) {
          let tmp15;
          if (cResult[10] === tmp13) {
            tmp15 = cResult[11];
          }
          if (cResult[12] === tmp4.flex) {
            let tmp18;
            if (cResult[13] === tmp15) {
              tmp18 = cResult[14];
            }
            return tmp18;
          }
          const obj3 = { style: flex, children: tmp15 };
          const tmp21 = metroImportAll(View, obj3);
          cResult[12] = tmp4.flex;
          cResult[13] = tmp15;
          cResult[14] = tmp21;
          tmp18 = tmp21;
        }
        const obj4 = { children: items };
        items = [tmp8, tmp13];
        const tmp17 = React4(Stack_Stack.Stack, obj4);
        cResult[9] = tmp8;
        cResult[10] = tmp13;
        cResult[11] = tmp17;
        tmp15 = tmp17;
      }
      const tmp14 = metroImportAll(closure_11, { channel: tmp5, expiresAt: tmp11 });
      cResult[6] = tmp5;
      cResult[7] = tmp11;
      cResult[8] = tmp14;
      tmp13 = tmp14;
    }
  : (invite) => {
      let Stack;
      let items1;
      let obj2;
      invite = invite.invite;
      const items = [invite.channel];
      const obj = { style: closure_10().flex, children: closure_9(Stack, obj2) };
      const memo = react.useMemo(() => closure_5(invite.channel), items);
      obj2 = { children: items1 };
      Stack = invite(5593).Stack;
      items1 = [,];
      const obj3 = { variant: "text-lg/bold", tabularNumbers: true, children: invite.code };
      items1[0] = closure_8(invite(4886).Text, obj3);
      const obj4 = { channel: memo, expiresAt: invite.getExpiresAt() };
      items1[1] = closure_8(closure_11, obj4);
      return closure_8(View, obj);
    };
const result = size.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteCode.tsx");

export default tmp4;
export const InstantInviteDetails = tmp3;
