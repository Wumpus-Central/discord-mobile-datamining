// === Module 12173: ForumPostListBody ===

// Module 12173 (ForumPostListBody)
import GameInvitesChannelUtils from "GameInvitesChannelUtils" /* 7386 */;
import ForumPostUsername from "ForumPostUsername" /* 12156 */;
import ForumPostMedia from "ForumPostMedia" /* 12160 */;
import ForumPostTimestampDefault from "ForumPostTimestamp" /* 12165 */;
import ForumPostNewTagDefault from "ForumPostNewTag" /* 12166 */;
import ForumPostTitleDefault from "ForumPostTitle" /* 12167 */;
import ForumPostMessageContentDefault from "ForumPostMessageContent" /* 12174 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const ForumTimestampFormats = fn(7387).ForumTimestampFormats;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4640);
let closure_7 = createStyles.createStyles({ body: { display: "flex", flexDirection: "row", alignItems: "flex-start" }, contentContainer: { flex: 1 }, thumbnailContainer: { marginLeft: 12 }, details: { flexDirection: "row", alignItems: "center", marginBottom: 6 }, newTagContainer: { marginEnd: 8 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/list/ForumPostListBody.tsx");

export default function ForumPostListBody(arg0) {
  ({ thread, firstMessage, hasUnreads, isNew, media } = arg0);
  ({ containerStyle, firstMessageLoaded, messageContent, isEmbed, isLocalDeviceMedia, senderModifier } = arg0);
  const tmp = closure_7();
  const isGameInvitesPost = GameInvitesChannelUtils.useIsGameInvitesPost(thread);
  const obj2 = { style: null, children: null };
  const items = [tmp.body, containerStyle];
  obj2.style = items;
  const obj3 = { style: tmp.contentContainer, children: null };
  const obj4 = { style: tmp.details, children: null };
  if (isNew) {
    const obj5 = { containerStyle: tmp.newTagContainer };
    isNew = hasOwnProperty(ForumPostNewTagDefault, obj5);
  }
  const items1 = [isNew, hasOwnProperty(ForumPostUsername.ForumPostAuthor, { thread, hasUnreads }), hasOwnProperty(ForumPostTimestampDefault, { thread, hasUnreads, format: ForumTimestampFormats.POSTED_DURATION_AGO })];
  obj4.children = items1;
  const items2 = [timestampProducer(View, obj4), , ];
  let tmp9Result = !isGameInvitesPost;
  if (!isGameInvitesPost) {
    const obj7 = { title: thread.name, lineClamp: 2, ellipsizeMode: "tail", hasUnreads };
    tmp9Result = hasOwnProperty(ForumPostTitleDefault, obj7);
  }
  items2[1] = tmp9Result;
  items2[2] = hasOwnProperty(ForumPostMessageContentDefault, { messageContent, message: firstMessage, isMessageDeleted: false, messageLoaded: firstMessageLoaded, hasUnreads, senderModifier });
  obj3.children = items2;
  const items3 = [timestampProducer(View, obj3), ];
  let blocked;
  if (firstMessage != null) {
    blocked = firstMessage.blocked;
  }
  let tmp9Result2 = null;
  if (!blocked) {
    tmp9Result2 = null;
    if (null != media) {
      const obj8 = { channel: thread, media, isEmbed, isLocalDeviceMedia, firstMessageId: null, containerStyle: null };
      let id;
      if (firstMessage != null) {
        id = firstMessage.id;
      }
      obj8.firstMessageId = id;
      obj8.containerStyle = tmp.thumbnailContainer;
      tmp9Result2 = hasOwnProperty(ForumPostMedia.ForumPostMediaThumbnail, obj8);
    }
  }
  items3[1] = tmp9Result2;
  obj2.children = items3;
  return timestampProducer(View, obj2);
};