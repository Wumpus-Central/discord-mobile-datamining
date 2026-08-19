// === Module 15489: ChannelBadge ===

// Module 15489 (ChannelBadge)
import noopAll from "noop" /* 19 */;
import defaultAreStatesEqual from "defaultAreStatesEqual" /* 647 */;
import shortenAndLocalizeNumber from "shortenAndLocalizeNumber" /* 1898 */;
import Text from "Text" /* 4734 */;
import NewBadgeDefault from "NewBadge" /* 11463 */;
import MentionsBadgeDefault from "MentionsBadge" /* 15490 */;
import { View } from "get ActivityIndicator" /* 17 */;
import _getSystemLocale from "_getSystemLocale" /* 1994 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
noopAll;
let closure_6 = createCacheKey.createStyles(() => ({ channelInfoContainer: { paddingStart: 4 } }));
const result = require("obj132").fileFinishedImporting("modules/guild_sidebar/native/ChannelBadge.tsx");

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
            obj3[2] = shortenAndLocalizeNumber.humanizeValue(postsWithUnreadsCount, stateFromStores);
            obj2[1] = jsx(Text.Text, { variant: "text-xs/semibold", color: "text-muted", children: null });
            tmp5 = <View style={null}>{null}</View>;
            const tmp2Result = shortenAndLocalizeNumber;
          }
        }
      }
    }
  }
};