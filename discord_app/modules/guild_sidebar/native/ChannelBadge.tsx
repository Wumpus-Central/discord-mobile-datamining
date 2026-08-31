// discord_app/modules/guild_sidebar/native/ChannelBadge.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import defaultAreStatesEqual from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import NewBadgeDefault from "../../channel_list_v2/native/components/NewBadge.tsx";
import MentionsBadgeDefault from "MentionsBadge.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../user_settings/LocaleStore.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
let closure_6 = createCacheKey.createStyles(() => ({ channelInfoContainer: { paddingStart: 4 } }));
const result = require("set").fileFinishedImporting("modules/guild_sidebar/native/ChannelBadge.tsx");

export default function ChannelBadge(arg0) {
  ({ mentionCount, postsWithUnreadsCount, muted } = arg0);
  ({ isMentionLowImportance, isNewChannel } = arg0);
  const tmp = callback();
  let obj = defaultAreStatesEqual;
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  if (null != mentionCount) {
    if (mentionCount > 0) {
      obj = { style: null, children: null };
      obj[0] = tmp.channelInfoContainer;
      obj = { mentionsCount: null, isMentionLowImportance: null };
      obj[0] = mentionCount;
      obj[1] = isMentionLowImportance;
      obj[1] = jsx(MentionsBadgeDefault, { mentionsCount: null, isMentionLowImportance: null });
      let tmp5 = <View mentionsCount={null} isMentionLowImportance={null} />;
    }
    return tmp5;
  }
  if (isNewChannel) {
    obj1 = { style: null, children: null };
    obj1[0] = tmp.channelInfoContainer;
    obj1[1] = jsx(NewBadgeDefault, {});
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
            obj3[2] = tmp2(1897).humanizeValue(postsWithUnreadsCount, stateFromStores);
            obj2[1] = jsx(tmp2(4444).Text, { variant: "text-xs/semibold", color: "text-muted", children: null });
            tmp5 = <View style={null}>{null}</View>;
            const tmp2Result = tmp2(1897);
          }
        }
      }
    }
  }
};