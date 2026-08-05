// discord_app/modules/guild_sidebar/native/ChannelBadge.tsx
import "noop";
import { View } from "get ActivityIndicator";
import _getSystemLocale from "_getSystemLocale";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { defaultAreStatesEqual } from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import { NewBadge } from "../../channel_list_v2/native/components/NewBadge.tsx";
import { MentionsBadge } from "MentionsBadge.tsx";

const require = arg1;
let closure_6 = createCacheKey.createStyles(() => ({ channelInfoContainer: { paddingStart: 4 } }));
const result = require("_getSystemLocale").fileFinishedImporting("modules/guild_sidebar/native/ChannelBadge.tsx");

export default function ChannelBadge(arg0) {
  let isMentionLowImportance;
  let isNewChannel;
  let mentionCount;
  let muted;
  let postsWithUnreadsCount;
  ({ mentionCount, postsWithUnreadsCount, muted } = arg0);
  ({ isMentionLowImportance, isNewChannel } = arg0);
  const tmp = callback();
  let obj = defaultAreStatesEqual;
  const items = [_getSystemLocale];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  if (null != mentionCount) {
    if (mentionCount > 0) {
      obj = { style: null, children: null };
      obj[0] = tmp.channelInfoContainer;
      obj = { mentionsCount: null, isMentionLowImportance: null };
      obj[0] = mentionCount;
      obj[1] = isMentionLowImportance;
      obj[1] = jsx(MentionsBadge, { mentionsCount: null, isMentionLowImportance: null });
      let tmp5 = <View mentionsCount={null} isMentionLowImportance={null} />;
    }
    return tmp5;
  }
  if (isNewChannel) {
    const obj1 = { style: null, children: null };
    obj1[0] = tmp.channelInfoContainer;
    obj1[1] = jsx(NewBadge, {});
    tmp5 = <View style={null}>{null}</View>;
  } else {
    tmp5 = null;
    if (null != muted) {
      tmp5 = null;
      if (!muted) {
        tmp5 = null;
        if (null != postsWithUnreadsCount) {
          tmp5 = null;
          if (postsWithUnreadsCount > 0) {
            const obj2 = { style: null, children: null };
            obj2[0] = tmp.channelInfoContainer;
            const obj3 = { variant: "text-xs/semibold", color: "text-muted", children: null };
            obj3[2] = tmp2(1851).humanizeValue(postsWithUnreadsCount, stateFromStores);
            obj2[1] = jsx(tmp2(4251).Text, { variant: "text-xs/semibold", color: "text-muted", children: null });
            tmp5 = <View style={null}>{null}</View>;
            const tmp2Result = tmp2(1851);
          }
        }
      }
    }
  }
};