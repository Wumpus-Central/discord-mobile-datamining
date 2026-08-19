// discord_app/modules/forums/native/posts/list/ForumPostListBody.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import ForumPostUsername from "../ForumPostUsername.tsx";
import ForumPostMediaAndroid from "../ForumPostMedia.tsx";
import ForumPostTimestampDefault from "../ForumPostTimestamp.tsx";
import ForumPostNewTagDefault from "../ForumPostNewTag.tsx";
import ForumPostTitleDefault from "../ForumPostTitle.tsx";
import ForumPostMessageContentDefault from "../ForumPostMessageContent.tsx";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { ForumTimestampFormats } from "../../../ForumConstants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

require = fn;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ body: { display: "flex", flexDirection: "row", alignItems: "flex-start" }, contentContainer: { flex: 1 }, thumbnailContainer: { marginLeft: 12 }, details: { flexDirection: "row", alignItems: "center", marginBottom: 6 }, newTagContainer: { marginEnd: 8 } });
const result = require("obj132").fileFinishedImporting("modules/forums/native/posts/list/ForumPostListBody.tsx");

export default function ForumPostListBody(arg0) {
  ({ thread, firstMessage, hasUnreads, isNew, media } = arg0);
  ({ containerStyle, firstMessageLoaded, messageContent, isEmbed, isLocalDeviceMedia, senderModifier } = arg0);
  const tmp = callback2();
  const items = [tmp.body, containerStyle];
  const obj = { style: tmp.details, children: null };
  if (isNew) {
    obj1 = { containerStyle: null };
    obj1[0] = tmp.newTagContainer;
    isNew = callback(ForumPostNewTagDefault, obj1);
  }
  const items1 = [isNew, callback(ForumPostUsername.ForumPostAuthor, { thread, hasUnreads }), callback(ForumPostTimestampDefault, { thread, hasUnreads, format: ForumTimestampFormats.POSTED_DURATION_AGO })];
  obj[1] = items1;
  const items2 = [callback(View, obj), callback(ForumPostTitleDefault, { title: thread.name, lineClamp: 2, ellipsizeMode: "tail", hasUnreads }), callback(ForumPostMessageContentDefault, { messageContent, message: firstMessage, isMessageDeleted: false, messageLoaded: firstMessageLoaded, hasUnreads, senderModifier })];
  obj[1] = items2;
  const items3 = [callback(View, obj), ];
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
  return callback(View, obj);
};