// === Module 10353: InstantInviteDetails ===

// Module 10353 (InstantInviteDetails)
import noop from "noop";
import { View } from "get ActivityIndicator";
import { createChannelRecordFromInvite as closure_5 } from "createChannelRecord";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c9;
let metroImportAll;
const require = arg1;
class InstantInviteDetails {
  constructor(arg0) {
    ({ channel, expiresAt } = global);
    tmp = jsxs();
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
    obj1[4] = tmp2Result.computeChannelName(channel, View, View, false);
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
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
createCacheKey = { flex: { flex: 1 }, channel: { flex: 0 }, time: null };
createCacheKey = { color: require("Themes").colors.TEXT_FEEDBACK_POSITIVE };
createCacheKey[2] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createChannelRecord").fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteCode.tsx");

export default function InstantInviteCode(invite) {
  invite = invite.invite;
  const items = [invite.channel];
  let obj = { style: createCacheKey().flex, children: null };
  const memo = React.useMemo(() => outer1_5(invite.channel), items);
  obj = { children: null };
  obj = { variant: "text-lg/bold", tabularNumbers: true, children: invite.code };
  const items1 = [callback(invite(4251).Text, obj), ];
  const tmp = createCacheKey();
  items1[1] = callback(InstantInviteDetails, { channel: memo, expiresAt: invite.getExpiresAt() });
  obj[0] = items1;
  obj[1] = callback2(invite(4664).Stack, obj);
  return callback(View, obj);
};
export { InstantInviteDetails };