// === Module 16984: renderChannelBadge ===

// Module 16984 (renderChannelBadge)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import Button from "Button" /* 1178 */;
import shortenAndLocalizeNumber from "shortenAndLocalizeNumber" /* 1880 */;
import Text from "Text" /* 4556 */;
import NewBadgeDefault from "NewBadge" /* 12296 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/launchpad/native/shared/renderChannelBadge.tsx");

export default function renderChannelBadge(newChannel) {
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
    tmp2 = jsx(NewBadgeDefault, {});
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