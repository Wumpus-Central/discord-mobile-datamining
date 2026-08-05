// discord_app/modules/forums/native/posts/list/ForumPostList.tsx
import _slicedToArray from "_slicedToArray";
import "noop";
import { View } from "get ActivityIndicator";
import { ChannelFlags } from "set";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ jsx: closure_6, jsxs: error, Fragment: metroImportAll } = jsxProd);
let closure_9 = createCacheKey.createStyles({ header: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 8 }, content: { flex: 1, marginBottom: 12 } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/forums/native/posts/list/ForumPostList.tsx");

export default function ForumPostList(arg0) {
  let firstMessage;
  let firstMessageLoaded;
  let hasUnreads;
  let isEmbed;
  let isLocalDeviceMedia;
  let isNew;
  let media;
  let messageContent;
  let parentChannel;
  let senderModifier;
  let thread;
  ({ firstMessage, hasUnreads, thread } = arg0);
  ({ messageContent, firstMessageLoaded, isNew, media, isEmbed, isLocalDeviceMedia, parentChannel, senderModifier } = arg0);
  const tmp = callback3();
  let obj = require(5802) /* useAvailableTags */;
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
      tmp10 = callback2(importDefault(11306), {});
    }
    const items = [tmp10, ];
    let tmp13 = 0 !== first.length;
    if (tmp13) {
      const obj1 = { appliedTags: null, additionalTagsCount: null, hasUnreads: null };
      obj1[0] = first;
      obj1[1] = tmp4[1];
      obj1[2] = hasUnreads;
      tmp13 = callback2(require(11316) /* ForumPostAppliedTagPills */.ForumPostAppliedTagPills, obj1);
    }
    items[1] = tmp13;
    obj[1] = items;
    tmp6Result = tmp6(tmp8, obj);
  }
  const obj2 = { children: null };
  const items1 = [tmp6Result, callback2(importDefault(11326), { thread, firstMessage, hasUnreads, isNew, messageContent, media, isEmbed, isLocalDeviceMedia, firstMessageLoaded, senderModifier })];
  obj[1] = items1;
  const items2 = [closure_7(View, obj), callback2(importDefault(11329), { thread, firstMessage, hasUnreads, parentChannel })];
  obj2[0] = items2;
  return closure_7(closure_8, obj2);
};