// discord_app/modules/forums/native/posts/list/ForumPostListBody.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import GAME_INVITES_CHANNEL_NO_MIC_TAG_NAME from "../../../../game_invite_channels/GameInvitesChannelUtils.tsx";
import ForumPostUsername from "../ForumPostUsername.tsx";
import ForumPostTimestampDefault from "../ForumPostTimestamp.tsx";
import ForumPostNewTagDefault from "../ForumPostNewTag.tsx";
import ForumPostMessageContentDefault from "../ForumPostMessageContent.tsx";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { ForumTimestampFormats } from "../../../ForumConstants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

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