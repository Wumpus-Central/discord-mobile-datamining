// discord_app/modules/search/native/components/list/rows/FileGridItem.tsx
import MediaFormatTesters from "../../../../../messages/MediaFormatTesters.tsx";
import ImageIcon from "../../../../../../design/components/Icon/native/redesign/generated/ImageIcon.tsx";
import VideoIcon from "../../../../../../design/components/Icon/native/redesign/generated/VideoIcon.tsx";
import FileIcon from "../../../../../../design/components/Icon/native/redesign/generated/FileIcon.tsx";
import SearchMediaImage from "../SearchMediaImage.tsx";
import react_mod from "../../../../../../../_runtime/00019_react.js";
import react_native from "../../../../../../../_runtime/00017_react-native.js";
import ChannelStore from "../../../../../../stores/ChannelStore.tsx";
import SearchConstants from "../../../../SearchConstants.tsx";
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../../../_runtime/metro/00002__.js";

let data;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let react = react_mod;
({ View: closure_4, useWindowDimensions: hasOwnProperty } = react_native);
({ FILE_OR_LINK_IMAGE_BUFFER: metroImportDefault, SearchFileTypes: metroImportAll } = SearchConstants);
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles({ icon: { alignItems: "center", justifyContent: "center" } });
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (data) => {
        let first;
        let imageStyle;
        let items1;
        let tmp7;
        let obj = data(imageStyle[11]);
        const cResult = obj.c(47);
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
          first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== data.channelId) {
          const fn = function o() {
            return ChannelStore.getChannel(data.channelId);
          };
          cResult[1] = data.channelId;
          cResult[2] = fn;
          tmp7 = fn;
        } else {
          tmp7 = cResult[2];
        }
        let tmpResult = tmp(tmp2[12]);
        const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
        let guild_id;
        const tmp9 = cResult[3];
        if (stateFromStores != null) {
          guild_id = stateFromStores.guild_id;
        }
        if (tmp9 === guild_id) {
          let tmp11;
          let tmp15;
          if (cResult[4] === data.author) {
            tmp11 = cResult[5];
          }
          if (cResult[6] !== data.attachment) {
            const tmp17 = onPress(imageStyle[13])(data.attachment);
            cResult[6] = data.attachment;
            class E {
              constructor() {
                const obj = { channelId: data.channelId, messageId: data.messageId };
                onPress(obj);
              }
            }
            cResult[7] = tmp17;
            tmp15 = tmp17;
          } else {
            tmp15 = cResult[7];
          }
          size = data.attachment.size;
          if (cResult[8] === data.channelId) {
            if (cResult[9] === data.messageId) {
              let tmp18;
              let tmp36;
              if (cResult[10] === onPress) {
                tmp18 = cResult[11];
              }
              const type = data.type;
              if (constants.MEDIA_ATTACHMENT === type) {
                const sum = imageStyle.height + closure_7;
                const sum1 = imageStyle.width + closure_7;
                if (cResult[12] === data.attachment.filename) {
                  if (cResult[13] === imageStyle) {
                    let tmp30;
                    if (cResult[14] === tmp4.icon) {
                      tmp30 = cResult[15];
                    }
                    let obj2 = {
                      containerStyle: null,
                      attachment: null,
                      channelId: null,
                      authorId: data.author.id,
                      scale,
                      containerHeight: sum,
                      containerWidth: sum1,
                      renderFallback: tmp30,
                    };
                    class E {
                      constructor() {
                        const obj = { channelId: data.channelId, messageId: data.messageId };
                        onPress(obj);
                      }
                    }
                    ({ attachment: obj5.attachment, channelId: obj5.channelId } = data);
                    const tmp34 = closure_9(data(imageStyle[14]).SearchAttachmentMediaImage, obj2);
                    cResult[16] = data.attachment;
                    cResult[17] = data.author.id;
                    cResult[18] = data.channelId;
                    cResult[19] = imageStyle;
                    cResult[20] = scale;
                    cResult[21] = sum;
                    cResult[22] = sum1;
                    cResult[23] = tmp30;
                    cResult[24] = tmp34;
                  }
                }
                class E {
                  constructor() {
                    const obj = { channelId: data.channelId, messageId: data.messageId };
                    onPress(obj);
                  }
                }
                cResult[12] = data.attachment.filename;
                cResult[13] = imageStyle;
                cResult[14] = tmp4.icon;
                cResult[15] = tmp31;
                tmp30 = tmp31;
              } else if (constants.ATTACHMENT === type) {
                const size1 = { fileName: tmp15, containerStyle: null, height: null, width: null };
                class E {
                  constructor() {
                    const obj = { channelId: data.channelId, messageId: data.messageId };
                    onPress(obj);
                  }
                }
                ({ height: obj4.height, width: obj4.width } = imageStyle);
                const tmp26 = closure_9(data(imageStyle[14]).SearchFileMediaImage, size1);
                cResult[25] = tmp15;
                cResult[26] = imageStyle;
                cResult[27] = tmp26;
              } else if (constants.AUDIO === type) {
                if (cResult[28] !== imageStyle) {
                  const size2 = { containerStyle: imageStyle, height: imageStyle.height, width: null };
                  class E {
                    constructor() {
                      const obj = { channelId: data.channelId, messageId: data.messageId };
                      onPress(obj);
                    }
                  }
                  const tmp23 = closure_9(data(imageStyle[14]).SearchSoundMediaImage, size2);
                  cResult[28] = imageStyle;
                  cResult[29] = tmp23;
                }
              }
              class E {
                constructor() {
                  const obj = { channelId: data.channelId, messageId: data.messageId };
                  onPress(obj);
                }
              }
              if (cResult[32] !== size) {
                let sizeStringResult;
                if (size > 0) {
                  const tmpResult2 = data(imageStyle[16]);
                  sizeStringResult = tmpResult2.sizeString(size);
                }
                class E {
                  constructor() {
                    const obj = { channelId: data.channelId, messageId: data.messageId };
                    onPress(obj);
                  }
                }
                cResult[33] = sizeStringResult;
                tmp36 = sizeStringResult;
              } else {
                tmp36 = cResult[33];
              }
              if (cResult[34] === tmp15) {
                let tmp38;
                if (cResult[35] === tmp36) {
                  tmp38 = cResult[36];
                }
                if (cResult[37] === tmp11) {
                  if (cResult[38] === stateFromStores) {
                    let tmp41;
                    if (cResult[39] === data.author) {
                      tmp41 = cResult[40];
                    }
                    if (cResult[41] === containerStyle) {
                      if (cResult[42] === tmp18) {
                        if (cResult[43] === tmp41) {
                          if (cResult[44] === tmp35) {
                            let tmp44;
                            if (cResult[45] === tmp38) {
                              tmp44 = cResult[46];
                            }
                            return tmp44;
                          }
                        }
                      }
                    }
                    const obj3 = { containerStyle: null, onPress: tmp18, children: items1 };
                    class E {
                      constructor() {
                        const obj = { channelId: data.channelId, messageId: data.messageId };
                        onPress(obj);
                      }
                    }
                    items1 = [tmp35, tmp38, tmp41];
                    const tmp46 = closure_10(data(imageStyle[15]).SearchListCardContainer, obj3);
                    cResult[41] = containerStyle;
                    cResult[42] = tmp18;
                    cResult[43] = tmp41;
                    cResult[44] = tmp35;
                    cResult[45] = tmp38;
                    cResult[46] = tmp46;
                    tmp44 = tmp46;
                  }
                }
                const obj6 = { author: null, avatarSource: tmp11, channel: stateFromStores };
                class E {
                  constructor() {
                    const obj = { channelId: data.channelId, messageId: data.messageId };
                    onPress(obj);
                  }
                }
                const tmp43 = closure_9(data(imageStyle[15]).SearchListCardFooter, obj6);
                cResult[37] = tmp11;
                cResult[38] = stateFromStores;
                cResult[39] = data.author;
                cResult[40] = tmp43;
                tmp41 = tmp43;
              }
              const obj7 = { label: tmp15, subLabel: tmp36 };
              const tmp40 = closure_9(data(imageStyle[15]).SearchListCardContent, obj7);
              cResult[34] = tmp15;
              cResult[35] = tmp36;
              cResult[36] = tmp40;
              tmp38 = tmp40;
            }
          }
          class E {
            constructor() {
              const obj = { channelId: data.channelId, messageId: data.messageId };
              onPress(obj);
            }
          }
          cResult[8] = data.channelId;
          cResult[9] = data.messageId;
          cResult[10] = onPress;
          cResult[11] = E;
          tmp18 = E;
        }
        const author = data.author;
        let guild_id1;
        const getAvatarSource = author.getAvatarSource;
        if (stateFromStores != null) {
          guild_id1 = stateFromStores.guild_id;
        }
        const avatarSource = getAvatarSource(guild_id1);
        let guild_id2;
        if (stateFromStores != null) {
          guild_id2 = stateFromStores.guild_id;
        }
        cResult[3] = guild_id2;
        cResult[4] = data.author;
        cResult[5] = avatarSource;
        tmp11 = avatarSource;
      }
    : (data) => {
        let closure_3;
        let items4;
        let sizeStringResult;
        data = data.data;
        const onPress = data.onPress;
        const imageStyle = data.imageStyle;
        let stateFromStores;
        let fileName;
        const containerStyle = data.containerStyle;
        const tmp = closure_11();
        react = tmp;
        const scale = stateFromStores().scale;
        let obj = data(imageStyle[12]);
        let items = [fileName];
        stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(data.channelId));
        let obj2 = react;
        const items1 = [data.author];
        let guild_id;
        const useMemo = react.useMemo;
        if (stateFromStores != null) {
          guild_id = stateFromStores.guild_id;
        }
        items1[1] = guild_id;
        const memo = useMemo(() => {
          const author = data.author;
          let guild_id;
          const getAvatarSource = author.getAvatarSource;
          if (stateFromStores != null) {
            guild_id = stateFromStores.guild_id;
          }
          return getAvatarSource(guild_id);
        }, items1);
        const tmp7 = onPress(imageStyle[13])(data.attachment);
        fileName = tmp7;
        size = data.attachment.size;
        const items2 = [, ,];
        ({ channelId: arr3[0], messageId: arr3[1] } = data);
        items2[2] = onPress;
        const items3 = [data, tmp7, imageStyle, scale, tmp.icon];
        const callback = obj2.useCallback(() => {
          const obj = { channelId: data.channelId, messageId: data.messageId };
          onPress(obj);
        }, items2);
        const memo1 = obj2.useMemo(() => {
          let attachment;
          let icon;
          const type = data.type;
          if (metroImportAll.MEDIA_ATTACHMENT === type) {
            const obj4 = {
              containerStyle: imageStyle,
              attachment: null,
              channelId: null,
              authorId: data.author.id,
              scale,
              containerHeight: imageStyle.height + metroImportDefault,
              containerWidth: imageStyle.width + metroImportDefault,
              renderFallback() {
                let items;
                let tmpResult;
                const obj = { style: items, children: tmpResult };
                items = [icon.icon, closure_1_2];
                const filename = attachment.attachment.filename;
                const obj2 = data(imageStyle[6]);
                if (obj2.isImageFile(filename)) {
                  tmpResult = closure_2_9(data(imageStyle[7]).ImageIcon, {
                    size: "lg",
                    color: "interactive-text-default",
                  });
                } else {
                  const tmp3Result = data(imageStyle[6]);
                  if (tmp3Result.isVideoFile(filename)) {
                    tmpResult = closure_2_9(data(imageStyle[8]).VideoIcon, {
                      size: "lg",
                      color: "interactive-text-default",
                    });
                  } else {
                    tmpResult = closure_2_9(data(imageStyle[9]).FileIcon, {
                      size: "lg",
                      color: "interactive-text-default",
                    });
                  }
                }
                return closure_2_9(scale, obj);
              },
            };
            ({ attachment: obj3.attachment, channelId: obj3.channelId } = data);
            return React4(SearchMediaImage.SearchAttachmentMediaImage, obj4);
          } else if (metroImportAll.ATTACHMENT === type) {
            size = { fileName, containerStyle: imageStyle, height: null, width: null };
            ({ height: obj2.height, width: obj2.width } = imageStyle);
            return React4(SearchMediaImage.SearchFileMediaImage, size);
          } else if (metroImportAll.AUDIO === type) {
            const size1 = { containerStyle: imageStyle, height: null, width: null };
            ({ height: obj.height, width: obj.width } = imageStyle);
            return React4(SearchMediaImage.SearchSoundMediaImage, size1);
          }
        }, items3);
        const obj3 = { containerStyle, onPress: callback, children: items4 };
        const SearchListCardContainer = tmp2(tmp3[15]).SearchListCardContainer;
        items4 = [closure_9(data(imageStyle[15]).SearchListCardThumbnail, { thumbnail: memo1 }), ,];
        let obj4 = { label: tmp7, subLabel: sizeStringResult };
        sizeStringResult = undefined;
        const SearchListCardContent = tmp2(tmp3[15]).SearchListCardContent;
        if (size > 0) {
          const tmp2Result = data(imageStyle[16]);
          sizeStringResult = tmp2Result.sizeString(size);
        }
        items4[1] = closure_9(SearchListCardContent, obj4);
        const obj5 = { author: data.author, avatarSource: memo, channel: stateFromStores };
        items4[2] = closure_9(data(imageStyle[15]).SearchListCardFooter, obj5);
        return closure_10(SearchListCardContainer, obj3);
      },
);
let size = size_mod;
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/FileGridItem.tsx");

export default memoResult;
