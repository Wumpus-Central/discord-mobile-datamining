// === Module 11326: ForumPostListBody ===

// Module 11326 (ForumPostListBody)
import "noop";
import { View } from "get ActivityIndicator";
import { ForumTimestampFormats } from "FORUM_GUIDELINES_ACTION_SHEET";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ body: { display: "flex", flexDirection: "row", alignItems: "flex-start" }, contentContainer: { flex: 1 }, thumbnailContainer: { marginLeft: 12 }, details: { flexDirection: "row", alignItems: "center", marginBottom: 6 }, newTagContainer: { marginEnd: 8 } });
const result = require("FORUM_GUIDELINES_ACTION_SHEET").fileFinishedImporting("modules/forums/native/posts/list/ForumPostListBody.tsx");

export default function ForumPostListBody(arg0) {
  let containerStyle;
  let firstMessage;
  let firstMessageLoaded;
  let hasUnreads;
  let isEmbed;
  let isLocalDeviceMedia;
  let isNew;
  let media;
  let messageContent;
  let senderModifier;
  let thread;
  ({ thread, firstMessage, hasUnreads, isNew, media } = arg0);
  ({ containerStyle, firstMessageLoaded, messageContent, isEmbed, isLocalDeviceMedia, senderModifier } = arg0);
  const tmp = callback2();
  let obj = { style: items, children: null };
  items = [tmp.body, containerStyle];
  obj = { style: tmp.contentContainer, children: null };
  obj = { style: tmp.details, children: null };
  if (isNew) {
    const obj1 = { containerStyle: null };
    obj1[0] = tmp.newTagContainer;
    isNew = callback(importDefault(11318), obj1);
  }
  const items1 = [isNew, callback(require(11308) /* ForumPostUsername */.ForumPostAuthor, { thread, hasUnreads }), callback(importDefault(11317), { thread, hasUnreads, format: ForumTimestampFormats.POSTED_DURATION_AGO })];
  obj[1] = items1;
  const items2 = [closure_6(View, obj), callback(importDefault(11319), { title: thread.name, lineClamp: 2, ellipsizeMode: "tail", hasUnreads }), callback(importDefault(11327), { messageContent, message: firstMessage, isMessageDeleted: false, messageLoaded: firstMessageLoaded, hasUnreads, senderModifier })];
  obj[1] = items2;
  const items3 = [closure_6(View, obj), ];
  let blocked;
  if (firstMessage != null) {
    blocked = firstMessage.blocked;
  }
  let tmp7Result = null;
  if (!blocked) {
    tmp7Result = null;
    if (null != media) {
      const obj4 = { channel: null, media: null, isEmbed: null, isLocalDeviceMedia: null, firstMessageId: null, containerStyle: null };
      obj4[0] = thread;
      obj4[1] = media;
      obj4[2] = isEmbed;
      obj4[3] = isLocalDeviceMedia;
      let id;
      if (firstMessage != null) {
        id = firstMessage.id;
      }
      obj4[4] = id;
      obj4[5] = tmp.thumbnailContainer;
      tmp7Result = callback(require(11312) /* ForumPostMediaAndroid */.ForumPostMediaThumbnail, obj4);
    }
  }
  items3[1] = tmp7Result;
  obj[1] = items3;
  return closure_6(View, obj);
};