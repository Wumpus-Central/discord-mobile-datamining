// === Module 11594: ForumPostListBody ===

// Module 11594 (ForumPostListBody)
import noopAll from "noop" /* 19 */;
import GAME_INVITES_CHANNEL_NO_MIC_TAG_NAME from "GAME_INVITES_CHANNEL_NO_MIC_TAG_NAME" /* 6119 */;
import ForumPostUsername from "ForumPostUsername" /* 11577 */;
import ForumPostTimestampDefault from "ForumPostTimestamp" /* 11586 */;
import ForumPostNewTagDefault from "ForumPostNewTag" /* 11587 */;
import ForumPostMessageContentDefault from "ForumPostMessageContent" /* 11595 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { ForumTimestampFormats } from "FORUM_GUIDELINES_ACTION_SHEET" /* 6120 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ body: { display: "flex", flexDirection: "row", alignItems: "flex-start" }, contentContainer: { flex: 1 }, thumbnailContainer: { marginLeft: 12 }, details: { flexDirection: "row", alignItems: "center", marginBottom: 6 }, newTagContainer: { marginEnd: 8 } });
const result = require("set").fileFinishedImporting("modules/forums/native/posts/list/ForumPostListBody.tsx");

export default function ForumPostListBody(arg0) {
  ({ thread, firstMessage, hasUnreads, isNew, media } = arg0);
  ({ containerStyle, firstMessageLoaded, messageContent, isEmbed, isLocalDeviceMedia, senderModifier } = arg0);
  const tmp = callback2();
  let obj = GAME_INVITES_CHANNEL_NO_MIC_TAG_NAME;
  const isGameInvitesPost = obj.useIsGameInvitesPost(thread);
  obj = { style: items, children: null };
  items = [tmp.body, containerStyle];
  obj = { style: tmp.contentContainer, children: null };
  obj1 = { style: tmp.details, children: null };
  if (isNew) {
    const obj2 = { containerStyle: null };
    obj2[0] = tmp.newTagContainer;
    isNew = callback(ForumPostNewTagDefault, obj2);
  }
  const items1 = [isNew, callback(ForumPostUsername.ForumPostAuthor, { thread, hasUnreads }), callback(ForumPostTimestampDefault, { thread, hasUnreads, format: ForumTimestampFormats.POSTED_DURATION_AGO })];
  obj1[1] = items1;
  const items2 = [closure_6(View, obj1), , ];
  let tmp9Result = !isGameInvitesPost;
  if (!isGameInvitesPost) {
    const obj4 = { title: null, lineClamp: 2, ellipsizeMode: "tail", hasUnreads: null };
    obj4[0] = thread.name;
    obj4[3] = hasUnreads;
    tmp9Result = tmp9(tmp10(11588), obj4);
  }
  items2[1] = tmp9Result;
  items2[2] = callback(ForumPostMessageContentDefault, { messageContent, message: firstMessage, isMessageDeleted: false, messageLoaded: firstMessageLoaded, hasUnreads, senderModifier });
  obj[1] = items2;
  const items3 = [closure_6(View, obj), ];
  let blocked;
  if (firstMessage != null) {
    blocked = firstMessage.blocked;
  }
  tmp9Result = null;
  if (!blocked) {
    tmp9Result = null;
    if (null != media) {
      const obj5 = { channel: null, media: null, isEmbed: null, isLocalDeviceMedia: null, firstMessageId: null, containerStyle: null };
      obj5[0] = thread;
      obj5[1] = media;
      obj5[2] = isEmbed;
      obj5[3] = isLocalDeviceMedia;
      let id;
      if (firstMessage != null) {
        id = firstMessage.id;
      }
      obj5[4] = id;
      obj5[5] = tmp.thumbnailContainer;
      tmp9Result = tmp9(tmp2(11581).ForumPostMediaThumbnail, obj5);
    }
  }
  items3[1] = tmp9Result;
  obj[1] = items3;
  return closure_6(View, obj);
};