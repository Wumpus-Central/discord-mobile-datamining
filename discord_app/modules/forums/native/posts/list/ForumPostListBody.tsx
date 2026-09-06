// discord_app/modules/forums/native/posts/list/ForumPostListBody.tsx
import GameInvitesChannelUtils from "../../../../game_invite_channels/GameInvitesChannelUtils.tsx";
import ForumPostUsername from "../ForumPostUsername.tsx";
import ForumPostTimestampDefault from "../ForumPostTimestamp.tsx";
import ForumPostNewTagDefault from "../ForumPostNewTag.tsx";
import ForumPostMessageContentDefault from "../ForumPostMessageContent.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const ForumTimestampFormats = fn(7273).ForumTimestampFormats;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({
  body: { display: "flex", flexDirection: "row", alignItems: "flex-start" },
  contentContainer: { flex: 1 },
  thumbnailContainer: { marginLeft: 12 },
  details: { flexDirection: "row", alignItems: "center", marginBottom: 6 },
  newTagContainer: { marginEnd: 8 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/list/ForumPostListBody.tsx");

export default function ForumPostListBody(arg0) {
  ({ thread, firstMessage, hasUnreads, isNew, media } = arg0);
  ({ containerStyle, firstMessageLoaded, messageContent, isEmbed, isLocalDeviceMedia, senderModifier } = arg0);
  const tmp = closure_7();
  let obj = GameInvitesChannelUtils;
  const isGameInvitesPost = obj.useIsGameInvitesPost(thread);
  obj = { style: null, children: null };
  const items = [tmp.body, containerStyle];
  obj.style = items;
  obj = { style: tmp.contentContainer, children: null };
  const obj1 = { style: tmp.details, children: null };
  if (isNew) {
    const obj2 = { containerStyle: tmp.newTagContainer };
    isNew = hasOwnProperty(ForumPostNewTagDefault, obj2);
  }
  const items1 = [
    isNew,
    hasOwnProperty(ForumPostUsername.ForumPostAuthor, { thread, hasUnreads }),
    hasOwnProperty(ForumPostTimestampDefault, {
      thread,
      hasUnreads,
      format: ForumTimestampFormats.POSTED_DURATION_AGO,
    }),
  ];
  obj1.children = items1;
  const items2 = [timestampProducer(View, obj1), ,];
  let tmp9Result = !isGameInvitesPost;
  if (!isGameInvitesPost) {
    const obj4 = { title: thread.name, lineClamp: 2, ellipsizeMode: "tail", hasUnreads };
    tmp9Result = tmp9(tmp10(12016), obj4);
  }
  items2[1] = tmp9Result;
  items2[2] = hasOwnProperty(ForumPostMessageContentDefault, {
    messageContent,
    message: firstMessage,
    isMessageDeleted: false,
    messageLoaded: firstMessageLoaded,
    hasUnreads,
    senderModifier,
  });
  obj.children = items2;
  const items3 = [timestampProducer(View, obj)];
  let blocked;
  if (firstMessage != null) {
    blocked = firstMessage.blocked;
  }
  tmp9Result = null;
  if (!blocked) {
    tmp9Result = null;
    if (null != media) {
      const obj5 = { channel: thread, media, isEmbed, isLocalDeviceMedia, firstMessageId: null, containerStyle: null };
      let id;
      if (firstMessage != null) {
        id = firstMessage.id;
      }
      obj5.firstMessageId = id;
      obj5.containerStyle = tmp.thumbnailContainer;
      tmp9Result = tmp9(tmp2(12009).ForumPostMediaThumbnail, obj5);
    }
  }
  items3[1] = tmp9Result;
  obj.children = items3;
  return timestampProducer(View, obj);
}
