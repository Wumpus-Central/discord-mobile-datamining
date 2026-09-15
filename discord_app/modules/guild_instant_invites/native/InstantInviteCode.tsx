// === Module 11077: InstantInviteCode ===

// Module 11077 (InstantInviteCode)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import ClockIcon from "ClockIcon" /* 4602 */;
import Text_Text from "Text/Text" /* 4635 */;
import useChannelName from "useChannelName" /* 4792 */;
import Stack_Stack from "Stack/Stack" /* 5057 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5112 */;
import TextIcon2 from "TextIcon" /* 5164 */;
import CountDownDefault from "CountDown" /* 11066 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4288 */;
import UserStore from "UserStore" /* 1372 */;

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
    obj1 = { direction: "horizontal", align: "center", children: null };
    tmp5 = jsx;
    items = [, ];
    items[0] = jsx(TextIcon, { color: "icon-subtle", size: "xs" });
    obj8 = { variant: "text-md/semibold", color: "text-subtle", style: tmp.channel, lineClamp: 1, children: null };
    tmp2Result = tmp2(tmp3[12]);
    obj8.children = tmp2Result.computeChannelName(channel, closure_7, closure_6, false);
    items[1] = jsx(tmp2(tmp3[11]).Text, obj8);
    obj1.children = items;
    items1 = [, ];
    items1[0] = jsxs(tmp2(tmp3[10]).Stack, obj1);
    tmp4Result = null != expiresAt;
    if (tmp4Result) {
      obj9 = { direction: "horizontal", align: "center", children: null };
      items2 = [, , ];
      items2[0] = tmp5(tmp2(tmp3[13]).ClockIcon, { size: "xs", color: "icon-subtle" });
      obj10 = { variant: "text-md/semibold", color: "text-subtle", children: null };
      intl = tmp2(tmp3[14]).intl;
      obj10.children = intl.string(tmp2(tmp3[14]).t.aTABYx);
      items2[1] = tmp5(tmp2(tmp3[11]).Text, obj10);
      tmp7 = closure_1;
      obj11 = { style: null, deadline: null };
      obj11.style = tmp.time;
      obj11.deadline = expiresAt;
      items2[2] = tmp5(closure_1(tmp3[15]), obj11);
      obj9.children = items2;
      tmp4Result = tmp4(tmp2(tmp3[10]).Stack, obj9);
    }
    items1[1] = tmp4Result;
    return tmp4(tmp2(tmp3[10]).Stack, { children: items1 });
  }
}
const View = fn(17).View;
let closure_5 = fn(1962).createChannelRecordFromInvite;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4639);
let obj2 = { flex: { flex: 1 }, channel: { flex: 0 }, time: { color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE } };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteCode.tsx");

export default function InstantInviteCode(invite) {
  invite = invite.invite;
  const items = [invite.channel];
  const obj = { style: closure_10().flex, children: null };
  const memo = noop.useMemo(() => closure_5(invite.channel), items);
  const obj2 = { children: null };
  const items1 = [closure_8(invite(4635).Text, { variant: "text-lg/bold", tabularNumbers: true, children: invite.code }), ];
  const obj3 = { variant: "text-lg/bold", tabularNumbers: true, children: invite.code };
  const tmp = closure_10();
  items1[1] = closure_8(InstantInviteDetails, { channel: memo, expiresAt: invite.getExpiresAt() });
  obj2.children = items1;
  obj.children = closure_9(invite(5057).Stack, obj2);
  return closure_8(View, obj);
};
export { InstantInviteDetails };