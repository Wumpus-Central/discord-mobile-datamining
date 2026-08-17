// discord_app/modules/channel_list_v2/native/components/ChannelBadge.tsx
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import shortenAndLocalizeNumber from "shortenAndLocalizeNumber" /* 1898 */;
import Text from "Text" /* 4734 */;
import renderChannelBadge from "renderChannelBadge" /* 11458 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/channel_list_v2/native/components/ChannelBadge.tsx");

export const renderChannelBadge = function renderChannelBadge(newChannel) {
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
      let tmp2 = jsx(Button.Badge, { value: null, isMentionLowImportance: null });
    }
    return tmp2;
  }
  if (flag) {
    tmp2 = jsx(renderChannelBadge.NewBadge, {});
  } else {
    if (null != newPostCount) {
      if (newPostCount > 0) {
        obj = { variant: "text-xs/bold", color: "text-brand", children: null };
        const intl = getSystemLocale.intl;
        obj1 = { count: null };
        obj1[0] = shortenAndLocalizeNumber.humanizeValue(newPostCount, newChannel.locale);
        obj[2] = intl.format(getSystemLocale.t.GkAbqY, obj1);
        tmp2 = jsx(Text.Text, { variant: "text-xs/bold", color: "text-brand", children: null });
        const obj5 = shortenAndLocalizeNumber;
      }
    }
    if (null != postsWithUnreadsCount) {
      if (postsWithUnreadsCount > 0) {
        const obj2 = { variant: "text-xs/bold", color: "text-muted", children: null };
        obj2[2] = postsWithUnreadsCount;
        tmp2 = jsx(Text.Text, { variant: "text-xs/bold", color: "text-muted", children: null });
      }
    }
    tmp2 = null;
    if (null != eventsMentionCount) {
      tmp2 = null;
      if (eventsMentionCount > 0) {
        obj = { value: null, eventsMentionBadge: true };
        obj[0] = eventsMentionCount;
        tmp2 = jsx(Button.Badge, { value: null, eventsMentionBadge: true });
      }
    }
  }
};