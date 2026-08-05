import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { Button } from "../../../../design/void/native.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { shortenAndLocalizeNumber } from "../../../../utils/NumberUtils.tsx";
import { renderChannelBadge } from "index.tsx";
// discord_app/modules/channel_list_v2/native/components/ChannelBadge.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Button").fileFinishedImporting("modules/channel_list_v2/native/components/ChannelBadge.tsx");

export const renderChannelBadge = function renderChannelBadge(newChannel) {
  let eventsMentionCount;
  let newPostCount;
  let postsWithUnreadsCount;
  let flag = newChannel.newChannel;
  if (flag === undefined) {
    flag = false;
  }
  let num = newChannel.mentionCount;
  if (num === undefined) {
    num = 0;
  }
  ({ postsWithUnreadsCount, newPostCount, eventsMentionCount } = newChannel);
  if (null != num) {
    if (num > 0) {
      let obj = { value: null, isMentionLowImportance: null };
      obj[0] = num;
      obj[1] = tmp;
      let tmp2 = jsx(Button /* Button */.Badge, { value: null, isMentionLowImportance: null });
    }
    return tmp2;
  }
  if (flag) {
    tmp2 = jsx(renderChannelBadge /* renderChannelBadge */.NewBadge, {});
  } else {
    if (null != newPostCount) {
      if (newPostCount > 0) {
        obj = { variant: "text-xs/bold", color: "text-brand", children: null };
        const intl = getSystemLocale /* getSystemLocale */.intl;
        const obj1 = { count: null };
        obj1[0] = shortenAndLocalizeNumber /* shortenAndLocalizeNumber */.humanizeValue(newPostCount, newChannel.locale);
        obj[2] = intl.format(getSystemLocale /* getSystemLocale */.t.GkAbqY, obj1);
        tmp2 = jsx(Text /* Text */.Text, { variant: "text-xs/bold", color: "text-brand", children: null });
        const obj5 = shortenAndLocalizeNumber /* shortenAndLocalizeNumber */;
      }
    }
    if (null != postsWithUnreadsCount) {
      if (postsWithUnreadsCount > 0) {
        const obj2 = { variant: "text-xs/bold", color: "text-muted", children: null };
        obj2[2] = postsWithUnreadsCount;
        tmp2 = jsx(Text /* Text */.Text, { variant: "text-xs/bold", color: "text-muted", children: null });
      }
    }
    tmp2 = null;
    if (null != eventsMentionCount) {
      tmp2 = null;
      if (eventsMentionCount > 0) {
        obj = { value: null, eventsMentionBadge: true };
        obj[0] = eventsMentionCount;
        tmp2 = jsx(Button /* Button */.Badge, { value: null, eventsMentionBadge: true });
      }
    }
  }
};