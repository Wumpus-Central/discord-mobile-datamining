// discord_app/modules/launchpad/native/shared/renderChannelBadge.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import intl2 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import NumberUtils from "../../../../../discord_common/js/shared/utils/NumberUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import NewBadgeDefault from "../../../channel_list_v2/native/components/NewBadge.tsx";
import react from "../../../../../_runtime/00019_react.js";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/launchpad/native/shared/renderChannelBadge.tsx");

export default function renderChannelBadge(newChannel) {
  let eventsMentionCount;
  let newPostCount;
  let obj5;
  let postsWithUnreadsCount;
  let tmp2;
  let flag = newChannel.newChannel;
  if (flag === undefined) {
    flag = false;
  }
  let num = newChannel.mentionCount;
  if (num === undefined) {
    num = 0;
  }
  ({ postsWithUnreadsCount, newPostCount, eventsMentionCount } = newChannel);
  const locale = newChannel.locale;
  if (null != num) {
    if (num > 0) {
      tmp2 = jsx(native.Badge, { value: num, isMentionLowImportance: tmp });
    }
    return tmp2;
  }
  if (flag) {
    tmp2 = jsx(NewBadgeDefault, {});
  } else {
    if (null != newPostCount) {
      if (newPostCount > 0) {
        const Text = Text_Text.Text;
        const intl = intl2.intl;
        const format = intl.format;
        const obj4 = { count: obj5.humanizeValue(newPostCount, locale) };
        const GkAbqY = intl2.t.GkAbqY;
        tmp2 = (
          <Text variant="text-xs/bold" color="text-brand">
            {format(GkAbqY, obj4)}
          </Text>
        );
        obj5 = NumberUtils;
      }
    }
    if (null != postsWithUnreadsCount) {
      if (postsWithUnreadsCount > 0) {
        tmp2 = jsx(Text_Text.Text, { variant: "text-xs/bold", color: "text-muted", children: postsWithUnreadsCount });
      }
    }
    tmp2 = null;
    if (null != eventsMentionCount) {
      tmp2 = null;
      if (eventsMentionCount > 0) {
        tmp2 = jsx(native.Badge, { value: eventsMentionCount, eventsMentionBadge: true });
      }
    }
  }
}
