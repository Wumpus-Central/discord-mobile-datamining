// === Module 17134: shared/renderChannelBadge ===

// Module 17134 (shared/renderChannelBadge)
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import NumberUtils from "NumberUtils" /* 1881 */;
import Text_Text from "Text/Text" /* 4635 */;
import NewBadgeDefault from "NewBadge" /* 12431 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/shared/renderChannelBadge.tsx");

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
      const obj2 = { value: num, isMentionLowImportance: tmp };
      let tmp2 = jsx(native.Badge, { value: num, isMentionLowImportance: tmp });
    }
    return tmp2;
  }
  if (flag) {
    tmp2 = jsx(NewBadgeDefault, {});
  } else {
    if (null != newPostCount) {
      if (newPostCount > 0) {
        const obj3 = { variant: "text-xs/bold", color: "text-brand", children: null };
        const intl = util.intl;
        const obj4 = { count: NumberUtils.humanizeValue(newPostCount, newChannel.locale) };
        obj3.children = intl.format(util.t.GkAbqY, obj4);
        tmp2 = jsx(Text_Text.Text, { variant: "text-xs/bold", color: "text-brand", children: null });
      }
    }
    if (null != postsWithUnreadsCount) {
      if (postsWithUnreadsCount > 0) {
        const obj6 = { variant: "text-xs/bold", color: "text-muted", children: postsWithUnreadsCount };
        tmp2 = jsx(Text_Text.Text, { variant: "text-xs/bold", color: "text-muted", children: postsWithUnreadsCount });
      }
    }
    tmp2 = null;
    if (null != eventsMentionCount) {
      tmp2 = null;
      if (eventsMentionCount > 0) {
        const obj = { value: eventsMentionCount, eventsMentionBadge: true };
        tmp2 = jsx(native.Badge, { value: eventsMentionCount, eventsMentionBadge: true });
      }
    }
  }
};