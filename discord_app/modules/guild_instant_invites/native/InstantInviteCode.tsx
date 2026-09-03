// === Module 10903: InstantInviteDetails ===

// Module 10903 (InstantInviteDetails)
import ThemesDefault from "Themes" /* 709 */;
import Text from "Text" /* 4474 */;
import computeChannelName from "computeChannelName" /* 4674 */;
import Stack from "Stack" /* 4927 */;
import getChannelIcon from "getChannelIcon" /* 4982 */;
import componentDidMountDefault from "componentDidMount" /* 10892 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { createChannelRecordFromInvite as closure_5 } from "createChannelRecord" /* 1390 */;
import closure_6 from "markAllUserIdListsStale" /* 4130 */;
import closure_7 from "mergeGuildAvatar" /* 1921 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
class InstantInviteDetails {
  constructor(arg0) {
    ({ channel, expiresAt } = global);
    tmp = closure_10();
    tmp2 = closure_0;
    tmp3 = closure_2;
    obj = require("getChannelIcon");
    TextIcon = obj.getSimpleChannelIconComponent(channel);
    if (TextIcon == null) {
      TextIcon = require("TextIcon").TextIcon;
    }
    tmp4 = jsxs;
    obj = { direction: "horizontal", align: "center", children: null };
    tmp5 = jsx;
    items = [, ];
    items[0] = jsx(TextIcon, { color: "icon-subtle", size: "xs" });
    obj1 = { variant: "text-md/semibold", color: "text-subtle", style: tmp.channel, lineClamp: 1, children: null };
    tmp2Result = require("computeChannelName");
    obj1[4] = tmp2Result.computeChannelName(channel, closure_7, closure_6, false);
    items[1] = jsx(require("Text").Text, obj1);
    obj[2] = items;
    items1 = [, ];
    items1[0] = jsxs(require("Stack").Stack, obj);
    tmp4Result = null != expiresAt;
    if (tmp4Result) {
      obj2 = { direction: "horizontal", align: "center", children: null };
      items2 = [, , ];
      items2[0] = tmp5(require("ClockIcon").ClockIcon, { size: "xs", color: "icon-subtle" });
      obj3 = { variant: "text-md/semibold", color: "text-subtle", children: null };
      intl = require("getSystemLocale").intl;
      obj3[2] = intl.string(require("getSystemLocale").t.aTABYx);
      items2[1] = tmp5(require("Text").Text, obj3);
      tmp7 = closure_1;
      obj4 = { style: null, deadline: null };
      obj4[0] = tmp.time;
      obj4[1] = expiresAt;
      items2[2] = tmp5(require("componentDidMount"), obj4);
      obj2[2] = items2;
      tmp4Result = tmp4(require("Stack").Stack, obj2);
    }
    items1[1] = tmp4Result;
    return tmp4(require("Stack").Stack, { children: items1 });
  }
}
({ jsx: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = { flex: { flex: 1 }, channel: { flex: 0 }, time: null };
createCacheKey = { color: ThemesDefault.colors.TEXT_FEEDBACK_POSITIVE };
createCacheKey[2] = createCacheKey;
let closure_10 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteCode.tsx");

export default function InstantInviteCode(invite) {
  invite = invite.invite;
  const items = [invite.channel];
  let obj = { style: callback3().flex, children: null };
  const memo = React.useMemo(() => closure_1_5(invite.channel), items);
  obj = { children: null };
  obj = { variant: "text-lg/bold", tabularNumbers: true, children: invite.code };
  const items1 = [callback(invite(4474).Text, obj), ];
  const tmp = callback3();
  items1[1] = callback(InstantInviteDetails, { channel: memo, expiresAt: invite.getExpiresAt() });
  obj[0] = items1;
  obj[1] = callback2(invite(4927).Stack, obj);
  return callback(View, obj);
};
export { InstantInviteDetails };