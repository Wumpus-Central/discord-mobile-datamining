// === Module 11250: ForumPostListBody ===

// Module 11250 (ForumPostListBody)
import noopAll from "noop" /* 19 */;
import ForumPostUsername from "ForumPostUsername" /* 11233 */;
import ForumPostMediaAndroid from "ForumPostMediaAndroid" /* 11237 */;
import ForumPostTimestampDefault from "ForumPostTimestamp" /* 11242 */;
import ForumPostNewTagDefault from "ForumPostNewTag" /* 11243 */;
import ForumPostTitleDefault from "ForumPostTitle" /* 11244 */;
import ForumPostMessageContentDefault from "ForumPostMessageContent" /* 11251 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { ForumTimestampFormats } from "FORUM_GUIDELINES_ACTION_SHEET" /* 7311 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ body: { display: "flex", flexDirection: "row", alignItems: "flex-start" }, contentContainer: { flex: 1 }, thumbnailContainer: { marginLeft: 12 }, details: { flexDirection: "row", alignItems: "center", marginBottom: 6 }, newTagContainer: { marginEnd: 8 } });
const result = require("set").fileFinishedImporting("modules/forums/native/posts/list/ForumPostListBody.tsx");

export default function ForumPostListBody(arg0) {
  ({ thread, firstMessage, hasUnreads, isNew, media } = arg0);
  ({ containerStyle, firstMessageLoaded, messageContent, isEmbed, isLocalDeviceMedia, senderModifier } = arg0);
  const tmp = callback2();
  let obj = { style: items, children: null };
  items = [tmp.body, containerStyle];
  obj = { style: tmp.contentContainer, children: null };
  obj = { style: tmp.details, children: null };
  if (isNew) {
    obj1 = { containerStyle: null };
    obj1[0] = tmp.newTagContainer;
    isNew = callback(ForumPostNewTagDefault, obj1);
  }
  const items1 = [isNew, callback(ForumPostUsername.ForumPostAuthor, { thread, hasUnreads }), callback(ForumPostTimestampDefault, { thread, hasUnreads, format: ForumTimestampFormats.POSTED_DURATION_AGO })];
  obj[1] = items1;
  const items2 = [closure_6(View, obj), callback(ForumPostTitleDefault, { title: thread.name, lineClamp: 2, ellipsizeMode: "tail", hasUnreads }), callback(ForumPostMessageContentDefault, { messageContent, message: firstMessage, isMessageDeleted: false, messageLoaded: firstMessageLoaded, hasUnreads, senderModifier })];
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
      tmp7Result = callback(ForumPostMediaAndroid.ForumPostMediaThumbnail, obj4);
    }
  }
  items3[1] = tmp7Result;
  obj[1] = items3;
  return closure_6(View, obj);
};