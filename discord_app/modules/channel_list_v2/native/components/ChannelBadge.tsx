// discord_app/modules/channel_list_v2/native/components/ChannelBadge.tsx
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import NumberUtils from "../../../../utils/NumberUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import renderChannelBadge from "index.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/components/ChannelBadge.tsx");

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
      let obj = { value: num, isMentionLowImportance: tmp };
      let tmp2 = jsx(native.Badge, { value: num, isMentionLowImportance: tmp });
    }
    return tmp2;
  }
  if (flag) {
    tmp2 = jsx(renderChannelBadge.NewBadge, {});
  } else {
    if (null != newPostCount) {
      if (newPostCount > 0) {
        obj = { variant: "text-xs/bold", color: "text-brand", children: null };
        const intl = util.intl;
        const obj1 = { count: NumberUtils.humanizeValue(newPostCount, newChannel.locale) };
        obj.children = intl.format(util.t.GkAbqY, obj1);
        tmp2 = jsx(Text_Text.Text, { variant: "text-xs/bold", color: "text-brand", children: null });
      }
    }
    if (null != postsWithUnreadsCount) {
      if (postsWithUnreadsCount > 0) {
        const obj2 = { variant: "text-xs/bold", color: "text-muted", children: postsWithUnreadsCount };
        tmp2 = jsx(Text_Text.Text, { variant: "text-xs/bold", color: "text-muted", children: postsWithUnreadsCount });
      }
    }
    tmp2 = null;
    if (null != eventsMentionCount) {
      tmp2 = null;
      if (eventsMentionCount > 0) {
        obj = { value: eventsMentionCount, eventsMentionBadge: true };
        tmp2 = jsx(native.Badge, { value: eventsMentionCount, eventsMentionBadge: true });
      }
    }
  }
};
