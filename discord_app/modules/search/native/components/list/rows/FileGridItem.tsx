// discord_app/modules/search/native/components/list/rows/FileGridItem.tsx
import importAllResult from "../../../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../../../_runtime/00017_get_ActivityIndicator.js";
import ensureGuildLoaded from "../../../../../../stores/ChannelStore.tsx";
import MessageEmbedTypes from "../../../../SearchConstants.tsx";
import jsxProd from "../../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../../design/components/Styles/native/createStyles.tsx";

const require = fn;
let c3 = importAllResult;
({ View: c4, useWindowDimensions: c5 } = get_ActivityIndicator);
({ FILE_OR_LINK_IMAGE_BUFFER: error, SearchFileTypes: closure_8 } = MessageEmbedTypes);
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_11 = createCacheKey.createStyles({ icon: { alignItems: "center", justifyContent: "center" } });
const memoResult = importAllResult.memo(function FileGridItem(containerStyle) {
  const data = containerStyle.data;
  const onPress = containerStyle.onPress;
  const imageStyle = containerStyle.imageStyle;
  let stateFromStores;
  closure_6 = undefined;
  const tmp = callback2();
  importAllResult = tmp;
  const scale = stateFromStores().scale;
  let obj = data(imageStyle[10]);
  let items = [closure_6];
  stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(data.channelId));
  obj1 = importAllResult;
  const items1 = [data.author, ];
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  items1[1] = guild_id;
  const memo = importAllResult.useMemo(() => {
    const author = data.author;
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return author.getAvatarSource(guild_id);
  }, items1);
  const tmp7 = onPress(imageStyle[11])(data.attachment);
  closure_6 = tmp7;
  const size = data.attachment.size;
  const items2 = [, , ];
  ({ channelId: arr3[0], messageId: arr3[1] } = data);
  items2[2] = onPress;
  const items3 = [data, tmp7, imageStyle, scale, tmp.icon];
  const callback = obj1.useCallback(() => {
    onPress({ channelId: data.channelId, messageId: data.messageId });
  }, items2);
  const memo1 = obj1.useMemo(() => {
    const type = data.type;
    if (closure_1_8.MEDIA_ATTACHMENT === type) {
      let obj = { containerStyle: null, attachment: null, channelId: null, authorId: null, scale: null, containerHeight: null, containerWidth: null, renderFallback: null };
      obj[0] = imageStyle;
      ({ attachment: obj3[1], channelId: obj3[2] } = data);
      obj[3] = data.author.id;
      obj[4] = scale;
      obj[5] = imageStyle.height + closure_1_7;
      obj[6] = imageStyle.width + closure_1_7;
      obj[7] = function renderFallback() {
        const obj = { style: items, children: null };
        items = [icon.icon, closure_2];
        const filename = attachment.attachment.filename;
        if (obj2.isImageFile(filename)) {
          let tmpResult = closure_1_9(data(imageStyle[7]).ImageIcon, { size: "lg", color: "interactive-text-default" });
        } else {
          if (tmp3Result.isVideoFile(filename)) {
            tmpResult = closure_1_9(data(imageStyle[8]).VideoIcon, { size: "lg", color: "interactive-text-default" });
          } else {
            tmpResult = closure_1_9(data(imageStyle[9]).FileIcon, { size: "lg", color: "interactive-text-default" });
          }
          tmp3Result = data(imageStyle[6]);
        }
        obj[1] = tmpResult;
        return closure_1_9(scale, obj);
      };
      return closure_1_9(data(imageStyle[12]).SearchAttachmentMediaImage, obj);
    } else if (closure_1_8.ATTACHMENT === type) {
      obj = { fileName: null, containerStyle: null, height: null, width: null };
      obj[0] = closure_6;
      obj[1] = imageStyle;
      ({ height: obj2[2], width: obj2[3] } = imageStyle);
      return closure_1_9(data(imageStyle[12]).SearchFileMediaImage, obj);
    } else if (closure_1_8.AUDIO === type) {
      obj = { containerStyle: null, height: null, width: null };
      obj[0] = imageStyle;
      ({ height: obj[1], width: obj[2] } = imageStyle);
      return closure_1_9(data(imageStyle[12]).SearchSoundMediaImage, obj);
    }
  }, items3);
  const items4 = [callback(data(imageStyle[13]).SearchListCardThumbnail, { thumbnail: memo1 }), , ];
  obj = { label: tmp7, subLabel: null };
  let sizeStringResult;
  if (size > 0) {
    sizeStringResult = tmp2(tmp3[14]).sizeString(size);
    const tmp2Result = tmp2(tmp3[14]);
  }
  obj[1] = sizeStringResult;
  items4[1] = callback(data(imageStyle[13]).SearchListCardContent, obj);
  obj1 = { author: data.author, avatarSource: memo, channel: stateFromStores };
  items4[2] = callback(data(imageStyle[13]).SearchListCardFooter, obj1);
  obj[2] = items4;
  return callback(data(imageStyle[13]).SearchListCardContainer, obj);
});
const result = require("obj132").fileFinishedImporting("modules/search/native/components/list/rows/FileGridItem.tsx");

export default memoResult;