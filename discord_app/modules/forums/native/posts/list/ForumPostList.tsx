// === Module 11816: ForumPostList ===

// Module 11816 (ForumPostList)
import noopAll from "noop" /* 19 */;
import useAvailableTags from "useAvailableTags" /* 6130 */;
import ForumPostPinIconDefault from "ForumPostPinIcon" /* 11798 */;
import ForumPostAppliedTagPills from "ForumPostAppliedTagPills" /* 11808 */;
import ForumPostListBodyDefault from "ForumPostListBody" /* 11817 */;
import ForumPostListFooterDefault from "ForumPostListFooter" /* 11820 */;
import closure_3 from "_slicedToArray" /* 32 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { ChannelFlags } from "set" /* 1393 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
noopAll;
({ jsx: closure_6, jsxs: error, Fragment: closure_8 } = jsxProd);
let closure_9 = createCacheKey.createStyles({ header: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 8 }, content: { flex: 1, marginBottom: 12 } });
const result = require("set").fileFinishedImporting("modules/forums/native/posts/list/ForumPostList.tsx");

export default function ForumPostList(arg0) {
  ({ firstMessage, hasUnreads, thread } = arg0);
  ({ messageContent, firstMessageLoaded, isNew, media, isEmbed, isLocalDeviceMedia, parentChannel, senderModifier } = arg0);
  const tmp = callback3();
  let obj = useAvailableTags;
  const tmp4 = callback(obj.useSomeAppliedTags(thread, 2), 2);
  const first = tmp4[0];
  const hasFlagResult = thread.hasFlag(ChannelFlags.PINNED);
  obj = { style: tmp.content, children: null };
  let tmp6Result = hasFlagResult;
  if (!hasFlagResult) {
    tmp6Result = 0 !== first.length;
  }
  if (tmp6Result) {
    obj = { style: null, children: null };
    obj[0] = tmp.header;
    let tmp10 = hasFlagResult;
    if (hasFlagResult) {
      tmp10 = callback2(ForumPostPinIconDefault, {});
    }
    const items = [tmp10, ];
    let tmp13 = 0 !== first.length;
    if (tmp13) {
      obj1 = { appliedTags: null, additionalTagsCount: null, hasUnreads: null };
      obj1[0] = first;
      obj1[1] = tmp4[1];
      obj1[2] = hasUnreads;
      tmp13 = callback2(ForumPostAppliedTagPills.ForumPostAppliedTagPills, obj1);
    }
    items[1] = tmp13;
    obj[1] = items;
    tmp6Result = tmp6(tmp8, obj);
  }
  const obj2 = { children: null };
  const items1 = [tmp6Result, callback2(ForumPostListBodyDefault, { thread, firstMessage, hasUnreads, isNew, messageContent, media, isEmbed, isLocalDeviceMedia, firstMessageLoaded, senderModifier })];
  obj[1] = items1;
  const items2 = [closure_7(View, obj), callback2(ForumPostListFooterDefault, { thread, firstMessage, hasUnreads, parentChannel })];
  obj2[0] = items2;
  return closure_7(closure_8, obj2);
};