// === Module 10941: InstantInviteCode ===

// Module 10941 (InstantInviteCode)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ClockIcon from "ClockIcon" /* 4523 */;
import Text_Text from "Text/Text" /* 4556 */;
import useChannelName from "useChannelName" /* 4713 */;
import Stack_Stack from "Stack/Stack" /* 4973 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5028 */;
import TextIcon2 from "TextIcon" /* 5080 */;
import CountDownDefault from "CountDown" /* 10930 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
class InstantInviteDetails {
  constructor(arg0) {
    ({ channel, expiresAt } = global);
    tmp = closure_10();
    tmp2 = closure_0;
    tmp3 = closure_2;
    obj = closure_0(closure_2[8]);
    TextIcon = obj.getSimpleChannelIconComponent(channel);
    if (TextIcon == null) {
      TextIcon = tmp2(tmp3[9]).TextIcon;
    }
    tmp4 = jsxs;
    obj = { direction: "horizontal", align: "center", children: null };
    tmp5 = jsx;
    items = [, ];
    items[0] = jsx(TextIcon, { color: "icon-subtle", size: "xs" });
    obj1 = { variant: "text-md/semibold", color: "text-subtle", style: tmp.channel, lineClamp: 1, children: null };
    tmp2Result = tmp2(tmp3[12]);
    obj1.children = tmp2Result.computeChannelName(channel, closure_7, closure_6, false);
    items[1] = jsx(tmp2(tmp3[11]).Text, obj1);
    obj.children = items;
    items1 = [, ];
    items1[0] = jsxs(tmp2(tmp3[10]).Stack, obj);
    tmp4Result = null != expiresAt;
    if (tmp4Result) {
      obj2 = { direction: "horizontal", align: "center", children: null };
      items2 = [, , ];
      items2[0] = tmp5(tmp2(tmp3[13]).ClockIcon, { size: "xs", color: "icon-subtle" });
      obj3 = { variant: "text-md/semibold", color: "text-subtle", children: null };
      intl = tmp2(tmp3[14]).intl;
      obj3.children = intl.string(tmp2(tmp3[14]).t.aTABYx);
      items2[1] = tmp5(tmp2(tmp3[11]).Text, obj3);
      tmp7 = closure_1;
      obj4 = { style: null, deadline: null };
      obj4.style = tmp.time;
      obj4.deadline = expiresAt;
      items2[2] = tmp5(closure_1(tmp3[15]), obj4);
      obj2.children = items2;
      tmp4Result = tmp4(tmp2(tmp3[10]).Stack, obj2);
    }
    items1[1] = tmp4Result;
    return tmp4(tmp2(tmp3[10]).Stack, { children: items1 });
  }
}
const View = fn(17).View;
let closure_5 = fn(1961).createChannelRecordFromInvite;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = { flex: { flex: 1 }, channel: { flex: 0 }, time: null };
createStyles = { color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
createStyles.time = createStyles;
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteCode.tsx");

export default function InstantInviteCode(invite) {
  invite = invite.invite;
  const items = [invite.channel];
  let obj = { style: closure_10().flex, children: null };
  const memo = noop.useMemo(() => closure_5(invite.channel), items);
  obj = { children: null };
  obj = { variant: "text-lg/bold", tabularNumbers: true, children: invite.code };
  const items1 = [closure_8(invite(4556).Text, obj), ];
  const tmp = closure_10();
  items1[1] = closure_8(InstantInviteDetails, { channel: memo, expiresAt: invite.getExpiresAt() });
  obj.children = items1;
  obj.children = closure_9(invite(4973).Stack, obj);
  return closure_8(View, obj);
};
export { InstantInviteDetails };