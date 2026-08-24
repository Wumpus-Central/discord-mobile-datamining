// discord_app/modules/forums/native/posts/list/ForumPostList.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import useAvailableTags from "../../../ForumTagHooks.tsx";
import ForumPostPinIconDefault from "../ForumPostPinIcon.tsx";
import ForumPostAppliedTagPills from "../ForumPostAppliedTags.tsx";
import ForumPostListBodyDefault from "ForumPostListBody.tsx";
import ForumPostListFooterDefault from "ForumPostListFooter.tsx";
import closure_3 from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { ChannelFlags } from "../../../../channel/ChannelConstants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

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