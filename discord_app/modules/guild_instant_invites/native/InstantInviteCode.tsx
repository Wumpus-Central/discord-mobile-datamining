// discord_app/modules/guild_instant_invites/native/InstantInviteCode.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import ClockIcon from "../../../design/components/Icon/native/redesign/generated/ClockIcon.tsx";
import Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import computeChannelName from "../../channel/useChannelName.tsx";
import getChannelIcon from "../../../utils/native/ChannelUtils.tsx";
import TextIcon2 from "../../../design/components/Icon/native/redesign/generated/TextIcon.tsx";
import componentDidMountDefault from "../../../components_native/common/CountDown.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { createChannelRecordFromInvite as closure_5 } from "../../../records/ChannelRecord.tsx";
import markAllUserIdListsStale from "../../../stores/RelationshipStore.tsx";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
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
const createCacheKey = { color: ThemesDefault.colors.TEXT_FEEDBACK_POSITIVE };
createCacheKey[2] = createCacheKey;
let closure_10 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteCode.tsx");

export default function InstantInviteCode(invite) {
  invite = invite.invite;
  const items = [invite.channel];
  { style: callback3().flex, children: null };
  const memo = React.useMemo(() => closure_1_5(invite.channel), items);
  const obj = { variant: "text-lg/bold", tabularNumbers: true, children: invite.code };
  const items1 = [callback(invite(4734).Text, obj), ];
  const tmp = callback3();
  items1[1] = callback(InstantInviteDetails, { channel: memo, expiresAt: invite.getExpiresAt() });
  obj[0] = items1;
  obj[1] = callback2(invite(4733).Stack, obj);
  return callback(View, obj);
};
export { InstantInviteDetails };