// === Module 16872: FileGridItem ===

// Module 16872 (FileGridItem)
import MediaFormatTesters from "MediaFormatTesters" /* 5046 */;
import ImageIcon from "ImageIcon" /* 5878 */;
import VideoIcon from "VideoIcon" /* 11247 */;
import FileIcon from "FileIcon" /* 11814 */;
import SearchMediaImage from "SearchMediaImage" /* 16860 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, useWindowDimensions: hasOwnProperty } = get_ActivityIndicator);
const SearchConstants = fn(7524);
({ FILE_OR_LINK_IMAGE_BUFFER: closure_7, SearchFileTypes: closure_8 } = SearchConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4896);
let closure_11 = createStyles.createStyles({ icon: { alignItems: "center", justifyContent: "center" } });
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/FileGridItem.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((data) => {
  const cResult = data(imageStyle[11]).c(47);
  data = data.data;
  const onPress = data.onPress;
  imageStyle = data.imageStyle;
  const containerStyle = data.containerStyle;
  const tmp4 = closure_11();
  const icon = tmp4;
  const scale = closure_5().scale;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== data.channelId) {
    const fn = function o() {
      return ChannelStore.getChannel(data.channelId);
    };
    cResult[1] = data.channelId;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let obj = data(imageStyle[11]);
  const stateFromStores = data(imageStyle[12]).useStateFromStores(first, tmp7);
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (cResult[3] === guild_id) {
    if (cResult[4] === data.author) {
      let tmp10 = cResult[5];
    }
    if (cResult[6] !== data.attachment) {
      const tmp16 = onPress(tmp2[13])(data.attachment);
      cResult[6] = data.attachment;
      class E {
        constructor() {
          obj = { channelId: data.channelId, messageId: data.messageId };
          tmp = onPress(obj);
          return;
        }
      }
      cResult[7] = tmp16;
      let tmp14 = tmp16;
    } else {
      tmp14 = cResult[7];
    }
    const size = data.attachment.size;
    if (cResult[8] === data.channelId) {
      if (cResult[9] === data.messageId) {
        if (cResult[10] === onPress) {
          let tmp17 = cResult[11];
        }
        const type = data.type;
        if (constants.MEDIA_ATTACHMENT === type) {
          const sum = imageStyle.height + closure_7;
          const sum1 = imageStyle.width + closure_7;
          if (cResult[12] === data.attachment.filename) {
            if (cResult[13] === imageStyle) {
              if (cResult[14] === tmp4.icon) {
                let tmp29 = cResult[15];
              }
              if (cResult[16] === data.attachment) {
                if (cResult[17] === data.author.id) {
                  if (cResult[18] === data.channelId) {
                    if (cResult[19] === imageStyle) {
                      if (cResult[20] === scale) {
                        if (cResult[21] === sum) {
                          if (cResult[22] === sum1) {
                          }
                        }
                      }
                    }
                  }
                }
              }
              const obj2 = { containerStyle: null, attachment: null, channelId: null, authorId: null, scale: null, containerHeight: null, containerWidth: null, renderFallback: null };
              class E {
                constructor() {
                  obj = { channelId: data.channelId, messageId: data.messageId };
                  tmp = onPress(obj);
                  return;
                }
              }
              ({ attachment: obj5.attachment, channelId: obj5.channelId } = data);
              obj2.authorId = data.author.id;
              obj2.scale = scale;
              obj2.containerHeight = sum;
              obj2.containerWidth = sum1;
              obj2.renderFallback = tmp29;
              const tmp33 = closure_9(tmp(tmp2[14]).SearchAttachmentMediaImage, obj2);
              cResult[16] = data.attachment;
              cResult[17] = data.author.id;
              cResult[18] = data.channelId;
              cResult[19] = imageStyle;
              cResult[20] = scale;
              cResult[21] = sum;
              cResult[22] = sum1;
              cResult[23] = tmp29;
              cResult[24] = tmp33;
            }
          }
          class E {
            constructor() {
              obj = { channelId: data.channelId, messageId: data.messageId };
              tmp = onPress(obj);
              return;
            }
          }
          cResult[12] = data.attachment.filename;
          cResult[13] = imageStyle;
          cResult[14] = tmp4.icon;
          cResult[15] = tmp30;
          tmp29 = tmp30;
        } else {
          if (constants.ATTACHMENT === type) {
            if (cResult[25] === tmp14) {
              if (cResult[26] === imageStyle) {
                let tmp23 = cResult[27];
              }
              let tmp19 = tmp23;
            }
            const size1 = { fileName: tmp14, containerStyle: null, height: null, width: null };
            class E {
              constructor() {
                obj = { channelId: data.channelId, messageId: data.messageId };
                tmp = onPress(obj);
                return;
              }
            }
            ({ height: obj4.height, width: obj4.width } = imageStyle);
            const tmp25 = closure_9(tmp(tmp2[14]).SearchFileMediaImage, size1);
            cResult[25] = tmp14;
            cResult[26] = imageStyle;
            cResult[27] = tmp25;
            tmp23 = tmp25;
          } else if (constants.AUDIO === type) {
            if (cResult[28] !== imageStyle) {
              const size2 = { containerStyle: imageStyle, height: imageStyle.height, width: null };
              class E {
                constructor() {
                  obj = { channelId: data.channelId, messageId: data.messageId };
                  tmp = onPress(obj);
                  return;
                }
              }
              const tmp22 = closure_9(tmp(tmp2[14]).SearchSoundMediaImage, size2);
              cResult[28] = imageStyle;
              cResult[29] = tmp22;
              let tmp20 = tmp22;
            } else {
              tmp20 = cResult[29];
            }
            tmp19 = tmp20;
          }
          if (cResult[30] !== tmp19) {
            const obj3 = { thumbnail: tmp19 };
            const tmp37 = closure_9(tmp(tmp2[15]).SearchListCardThumbnail, obj3);
            class E {
              constructor() {
                obj = { channelId: data.channelId, messageId: data.messageId };
                tmp = onPress(obj);
                return;
              }
            }
            cResult[30] = tmp19;
            cResult[31] = tmp37;
            let tmp35 = tmp37;
          } else {
            tmp35 = cResult[31];
          }
          if (cResult[32] !== size) {
            let sizeStringResult;
            if (size > 0) {
              sizeStringResult = tmp(tmp2[16]).sizeString(size);
              const tmpResult2 = tmp(tmp2[16]);
            }
            class E {
              constructor() {
                obj = { channelId: data.channelId, messageId: data.messageId };
                tmp = onPress(obj);
                return;
              }
            }
            cResult[33] = sizeStringResult;
            let tmp38 = sizeStringResult;
          } else {
            tmp38 = cResult[33];
          }
          if (cResult[34] === tmp14) {
            if (cResult[35] === tmp38) {
              let tmp40 = cResult[36];
            }
            if (cResult[37] === tmp10) {
              if (cResult[38] === stateFromStores) {
                if (cResult[39] === data.author) {
                  let tmp42 = cResult[40];
                }
                if (cResult[41] === containerStyle) {
                  if (cResult[42] === tmp17) {
                    if (cResult[43] === tmp42) {
                      if (cResult[44] === tmp35) {
                        if (cResult[45] === tmp40) {
                          let tmp45 = cResult[46];
                        }
                        return tmp45;
                      }
                    }
                  }
                }
                const obj6 = { containerStyle: null, onPress: null, children: null };
                class E {
                  constructor() {
                    obj = { channelId: data.channelId, messageId: data.messageId };
                    tmp = onPress(obj);
                    return;
                  }
                }
                obj6.onPress = tmp17;
                const items1 = [tmp35, tmp40, tmp42];
                obj6.children = items1;
                const tmp47 = closure_10(tmp(tmp2[15]).SearchListCardContainer, obj6);
                cResult[41] = containerStyle;
                cResult[42] = tmp17;
                cResult[43] = tmp42;
                cResult[44] = tmp35;
                cResult[45] = tmp40;
                cResult[46] = tmp47;
                tmp45 = tmp47;
              }
            }
            const obj7 = { author: null, avatarSource: null, channel: null };
            class E {
              constructor() {
                obj = { channelId: data.channelId, messageId: data.messageId };
                tmp = onPress(obj);
                return;
              }
            }
            obj7.avatarSource = tmp10;
            obj7.channel = stateFromStores;
            const tmp44 = closure_9(tmp(tmp2[15]).SearchListCardFooter, obj7);
            cResult[37] = tmp10;
            cResult[38] = stateFromStores;
            cResult[39] = data.author;
            cResult[40] = tmp44;
            tmp42 = tmp44;
          }
          class E {
            constructor() {
              obj = { channelId: data.channelId, messageId: data.messageId };
              tmp = onPress(obj);
              return;
            }
          }
          const obj8 = { label: tmp14, subLabel: tmp38 };
          const tmp41 = closure_9(tmp(tmp2[15]).SearchListCardContent, obj8);
          cResult[34] = tmp14;
          cResult[35] = tmp38;
          cResult[36] = tmp41;
          tmp40 = tmp41;
        }
      }
    }
    class E {
      constructor() {
        obj = { channelId: data.channelId, messageId: data.messageId };
        tmp = onPress(obj);
        return;
      }
    }
    cResult[8] = data.channelId;
    cResult[9] = data.messageId;
    cResult[10] = onPress;
    cResult[11] = E;
    tmp17 = E;
  }
  const author = data.author;
  let guild_id1;
  if (stateFromStores != null) {
    guild_id1 = stateFromStores.guild_id;
  }
  const avatarSource = author.getAvatarSource(guild_id1);
  let guild_id2;
  if (stateFromStores != null) {
    guild_id2 = stateFromStores.guild_id;
  }
  cResult[3] = guild_id2;
  cResult[4] = data.author;
  cResult[5] = avatarSource;
  tmp10 = avatarSource;
  let tmpResult = data(imageStyle[12]);
}) : ((containerStyle) => {
  const data = containerStyle.data;
  const onPress = containerStyle.onPress;
  const imageStyle = containerStyle.imageStyle;
  let stateFromStores;
  let fileName;
  const tmp = closure_11();
  noop = tmp;
  const scale = stateFromStores().scale;
  let items = [fileName];
  stateFromStores = data(imageStyle[12]).useStateFromStores(items, () => ChannelStore.getChannel(data.channelId));
  const items1 = [data.author, ];
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
  const tmp7 = onPress(imageStyle[13])(data.attachment);
  fileName = tmp7;
  let size = data.attachment.size;
  const items2 = [, , ];
  ({ channelId: arr3[0], messageId: arr3[1] } = data);
  items2[2] = onPress;
  const items3 = [data, tmp7, imageStyle, scale, tmp.icon];
  const callback = obj2.useCallback(() => {
    onPress({ channelId: data.channelId, messageId: data.messageId });
  }, items2);
  const memo1 = obj2.useMemo(() => {
    const type = data.type;
    if (constants.MEDIA_ATTACHMENT === type) {
      const obj4 = { containerStyle: imageStyle, attachment: null, channelId: null, authorId: null, scale: null, containerHeight: null, containerWidth: null, renderFallback: null };
      ({ attachment: obj3.attachment, channelId: obj3.channelId } = data);
      obj4.authorId = data.author.id;
      obj4.scale = scale;
      obj4.containerHeight = imageStyle.height + React5;
      obj4.containerWidth = imageStyle.width + React5;
      obj4.renderFallback = function renderFallback() {
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
      return options(SearchMediaImage.SearchAttachmentMediaImage, obj4);
    } else if (constants.ATTACHMENT === type) {
      const size = { fileName, containerStyle: imageStyle, height: null, width: null };
      ({ height: obj2.height, width: obj2.width } = imageStyle);
      return options(SearchMediaImage.SearchFileMediaImage, size);
    } else if (constants.AUDIO === type) {
      const size1 = { containerStyle: imageStyle, height: null, width: null };
      ({ height: obj.height, width: obj.width } = imageStyle);
      return options(SearchMediaImage.SearchSoundMediaImage, size1);
    }
  }, items3);
  const obj3 = { containerStyle: containerStyle.containerStyle, onPress: callback, children: null };
  const items4 = [closure_9(data(imageStyle[15]).SearchListCardThumbnail, { thumbnail: memo1 }), , ];
  let obj4 = { label: tmp7, subLabel: null };
  let sizeStringResult;
  if (size > 0) {
    sizeStringResult = tmp2(tmp3[16]).sizeString(size);
    const tmp2Result = tmp2(tmp3[16]);
  }
  obj4.subLabel = sizeStringResult;
  items4[1] = closure_9(data(imageStyle[15]).SearchListCardContent, obj4);
  items4[2] = closure_9(data(imageStyle[15]).SearchListCardFooter, { author: data.author, avatarSource: memo, channel: stateFromStores });
  obj3.children = items4;
  return closure_10(data(imageStyle[15]).SearchListCardContainer, obj3);
}));