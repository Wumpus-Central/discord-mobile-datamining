// discord_app/modules/guild_sidebar/native/ChannelBadge.tsx
import useStateFromStores from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import NumberUtils from "../../../utils/NumberUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import NewBadgeDefault from "../../channel_list_v2/native/components/NewBadge.tsx";
import MentionsBadgeDefault from "MentionsBadge.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../user_settings/LocaleStore.tsx";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles(() => ({ channelInfoContainer: { paddingStart: 4 } }));
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/ChannelBadge.tsx");

export default function ChannelBadge(arg0) {
  ({ mentionCount, postsWithUnreadsCount, muted } = arg0);
  ({ isMentionLowImportance, isNewChannel } = arg0);
  const tmp = closure_6();
  let obj = useStateFromStores;
  const items = [LocaleStore];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  if (null != mentionCount) {
    if (mentionCount > 0) {
      obj = { style: tmp.channelInfoContainer, children: null };
      obj = { mentionsCount: mentionCount, isMentionLowImportance };
      obj.children = jsx(MentionsBadgeDefault, { mentionsCount: mentionCount, isMentionLowImportance });
      let tmp5 = <View mentionsCount={mentionCount} isMentionLowImportance={isMentionLowImportance} />;
    }
    return tmp5;
  }
  if (isNewChannel) {
    const obj1 = { style: tmp.channelInfoContainer, children: jsx(NewBadgeDefault, {}) };
    tmp5 = <View style={tmp.channelInfoContainer}>{jsx(NewBadgeDefault, {})}</View>;
  } else {
    tmp5 = null;
    if (null != muted) {
      tmp5 = null;
      if (!muted) {
        tmp5 = null;
        if (null != postsWithUnreadsCount) {
          tmp5 = null;
          if (postsWithUnreadsCount > 0) {
            const obj2 = { style: tmp.channelInfoContainer, children: null };
            const obj3 = {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: NumberUtils.humanizeValue(postsWithUnreadsCount, stateFromStores),
            };
            obj2.children = jsx(Text_Text.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: NumberUtils.humanizeValue(postsWithUnreadsCount, stateFromStores),
            });
            tmp5 = <View style={tmp.channelInfoContainer}>{null}</View>;
            const tmp2Result = NumberUtils;
          }
        }
      }
    }
  }
}
