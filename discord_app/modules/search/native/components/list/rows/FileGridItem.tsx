// discord_app/modules/search/native/components/list/rows/FileGridItem.tsx
import SearchMediaImage from "../SearchMediaImage.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../../stores/ChannelStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, useWindowDimensions: hasOwnProperty } = get_ActivityIndicator);
const SearchConstants = fn(7878);
({ FILE_OR_LINK_IMAGE_BUFFER: closure_7, SearchFileTypes: closure_8 } = SearchConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4560);
let closure_11 = createStyles.createStyles({ icon: { alignItems: "center", justifyContent: "center" } });
let size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/FileGridItem.tsx");

export default noop.memo(function FileGridItem(containerStyle) {
  const data = containerStyle.data;
  const onPress = containerStyle.onPress;
  const imageStyle = containerStyle.imageStyle;
  let stateFromStores;
  let fileName;
  const tmp = closure_11();
  noop = tmp;
  const scale = stateFromStores().scale;
  let obj = data(imageStyle[10]);
  let items = [fileName];
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(data.channelId));
  let obj1 = noop;
  const items1 = [data.author];
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  items1[1] = guild_id;
  const memo = noop.useMemo(() => {
    const author = data.author;
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return author.getAvatarSource(guild_id);
  }, items1);
  const tmp7 = onPress(imageStyle[11])(data.attachment);
  fileName = tmp7;
  let size = data.attachment.size;
  const items2 = [, ,];
  ({ channelId: arr3[0], messageId: arr3[1] } = data);
  items2[2] = onPress;
  const items3 = [data, tmp7, imageStyle, scale, tmp.icon];
  const callback = obj1.useCallback(() => {
    onPress({ channelId: data.channelId, messageId: data.messageId });
  }, items2);
  const memo1 = obj1.useMemo(() => {
    const type = data.type;
    if (constants.MEDIA_ATTACHMENT === type) {
      let obj = {
        containerStyle: imageStyle,
        attachment: null,
        channelId: null,
        authorId: null,
        scale: null,
        containerHeight: null,
        containerWidth: null,
        renderFallback: null,
      };
      ({ attachment: obj3.attachment, channelId: obj3.channelId } = data);
      obj.authorId = data.author.id;
      obj.scale = scale;
      obj.containerHeight = imageStyle.height + React5;
      obj.containerWidth = imageStyle.width + React5;
      obj.renderFallback = function renderFallback() {
        const obj = { style: null, children: null };
        const items = [icon.icon, closure_1_2];
        obj.style = items;
        const filename = attachment.attachment.filename;
        if (obj2.isImageFile(filename)) {
          let tmpResult = closure_2_9(data(imageStyle[7]).ImageIcon, { size: "lg", color: "interactive-text-default" });
        } else {
          if (tmp3Result.isVideoFile(filename)) {
            tmpResult = closure_2_9(data(imageStyle[8]).VideoIcon, { size: "lg", color: "interactive-text-default" });
          } else {
            tmpResult = closure_2_9(data(imageStyle[9]).FileIcon, { size: "lg", color: "interactive-text-default" });
          }
          tmp3Result = data(imageStyle[6]);
        }
        obj.children = tmpResult;
        return closure_2_9(scale, obj);
      };
      return React7(SearchMediaImage.SearchAttachmentMediaImage, obj);
    } else if (constants.ATTACHMENT === type) {
      const size = { fileName, containerStyle: imageStyle, height: null, width: null };
      ({ height: obj2.height, width: obj2.width } = imageStyle);
      return React7(SearchMediaImage.SearchFileMediaImage, size);
    } else if (constants.AUDIO === type) {
      const size1 = { containerStyle: imageStyle, height: null, width: null };
      ({ height: obj.height, width: obj.width } = imageStyle);
      return React7(SearchMediaImage.SearchSoundMediaImage, size1);
    }
  }, items3);
  obj = { containerStyle: containerStyle.containerStyle, onPress: callback, children: null };
  const items4 = [closure_9(data(imageStyle[13]).SearchListCardThumbnail, { thumbnail: memo1 }), ,];
  obj = { label: tmp7, subLabel: null };
  let sizeStringResult;
  if (size > 0) {
    sizeStringResult = tmp2(tmp3[14]).sizeString(size);
    const tmp2Result = tmp2(tmp3[14]);
  }
  obj.subLabel = sizeStringResult;
  items4[1] = closure_9(data(imageStyle[13]).SearchListCardContent, obj);
  obj1 = { author: data.author, avatarSource: memo, channel: stateFromStores };
  items4[2] = closure_9(data(imageStyle[13]).SearchListCardFooter, obj1);
  obj.children = items4;
  return closure_10(data(imageStyle[13]).SearchListCardContainer, obj);
});
