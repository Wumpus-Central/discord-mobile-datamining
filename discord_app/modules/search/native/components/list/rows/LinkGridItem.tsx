// === Module 16869: LinkGridItem ===

// Module 16869 (LinkGridItem)
import _modDef38 from "module_38" /* 38 */;
import react2 from "react" /* 576 */;
import intl3 from "intl" /* 1126 */;
import LinkIcon from "LinkIcon" /* 4845 */;
import Text_Text from "Text/Text" /* 4892 */;
import ChatIcon from "ChatIcon" /* 5862 */;
import renderMessageMarkup from "renderMessageMarkup" /* 7542 */;
import MaskedLinkUtils from "MaskedLinkUtils" /* 8057 */;
import MarkupReactLinkUtils from "MarkupReactLinkUtils" /* 11250 */;
import SearchPlatformUtils from "SearchPlatformUtils" /* 11980 */;
import SearchMediaImage from "SearchMediaImage" /* 16860 */;
import SearchResultLinkPreviewMarkup from "SearchResultLinkPreviewMarkup" /* 16870 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import SearchMessageStore from "SearchMessageStore" /* 6794 */;
import SearchConstants from "SearchConstants" /* 7524 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let iconContainer;

let c10;
let c9;
let closure_12;
let hasOwnProperty;
let metroRequire;
let unpackModuleId;
const f127041 = (type) => {
  if (Array.isArray(type)) {
    const item = type.forEach(f127041);
  } else {
    if ("link" !== type.type) {
      if ("channelMention" !== type.type) {
        if (null != type.content) {
          const content = type.content;
          closure_0 = tmp;
          closure_1 = tmp2;
          const _Array = Array;
          if (Array.isArray(content)) {
            const item1 = content.forEach(f127041);
          } else {
            if ("link" !== content.type) {
              if ("channelMention" !== content.type) {
                if (null != content.content) {
                  closure_2_14(content.content, closure_0, closure_1);
                }
              }
            }
            if (0 === closure_0) {
              closure_1(content);
            } else {
              closure_2_14(content, closure_0 - 1, closure_1);
            }
          }
        }
      }
    }
    if (0 === closure_0) {
      closure_1(type);
    } else {
      const diff = tmp - 1;
      closure_1 = tmp2;
      const _Array2 = Array;
      if (Array.isArray(type)) {
        const item2 = type.forEach(f127041);
      } else {
        if ("link" !== type.type) {
          if ("channelMention" !== type.type) {
            if (null != type.content) {
              closure_2_14(type.content, diff, closure_1);
            }
          }
        }
        if (0 === diff) {
          closure_1(type);
        } else {
          closure_2_14(type, diff - 1, closure_1);
        }
      }
    }
  }
  return type;
};
function getLinkNodeAtIndex(content, diff, fn) {
  let closure_0 = diff;
  let closure_1 = fn;
  if (Array.isArray(content)) {
    const item = content.forEach(f127041);
  } else {
    if ("link" !== content.type) {
      if ("channelMention" !== content.type) {
        if (null != content.content) {
          getLinkNodeAtIndex(content.content, diff, fn);
        }
      }
    }
    if (0 === diff) {
      fn(content);
    } else {
      getLinkNodeAtIndex(content, diff - 1, fn);
    }
  }
  return content;
}
function LinkParsedGridItem(author) {
  let containerStyle;
  let imageStyle;
  let items10;
  let items9;
  let obj6;
  author = author.author;
  const linkIndex = author.linkIndex;
  let channelId = author.channelId;
  const messageId = author.messageId;
  const onPressSearchLink = author.onPressSearchLink;
  const onPressGuildVoiceChannelMention = author.onPressGuildVoiceChannelMention;
  const onPress = author.onPress;
  let stateFromStores;
  ({ imageStyle, containerStyle } = author);
  const tmp = closure_13();
  const tapToSee = tmp;
  const tmp2 = author;
  let obj = author(channelId[8]);
  const items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => SearchMessageStore.getMessage(messageId));
  let obj2 = author(channelId[8]);
  const items1 = [tapToSee];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  let obj3 = onPressSearchLink;
  const tmp6 = messageId(onPressSearchLink.useState(null), 2);
  const first = tmp6[0];
  let closure_11 = tmp6[1];
  const items2 = [linkIndex];
  const postProcessor = onPressSearchLink.useCallback((type) => {
    let closure_0 = linkIndex;
    let closure_1 = closure_11;
    if (Array.isArray(type)) {
      let item = type.forEach(f127041);
    } else {
      if ("link" !== type.type) {
        if ("channelMention" !== type.type) {
          if (null != type.content) {
            let content = type.content;
            closure_0 = linkIndex;
            closure_1 = closure_11;
            let _Array = Array;
            if (Array.isArray(content)) {
              let item1 = content.forEach(f127041);
            } else {
              if ("link" !== content.type) {
                if ("channelMention" !== content.type) {
                  if (null != content.content) {
                    getLinkNodeAtIndex(content.content, linkIndex, closure_11);
                  }
                }
              }
              if (0 === linkIndex) {
                closure_11(content);
              } else {
                getLinkNodeAtIndex(content, linkIndex - 1, closure_11);
              }
            }
          }
        }
      }
      if (0 === linkIndex) {
        closure_11(type);
      } else {
        let diff = linkIndex - 1;
        closure_1 = closure_11;
        let _Array2 = Array;
        if (Array.isArray(type)) {
          let item2 = type.forEach(f127041);
        } else {
          if ("link" !== type.type) {
            if ("channelMention" !== type.type) {
              if (null != type.content) {
                getLinkNodeAtIndex(type.content, diff, closure_11);
              }
            }
          }
          if (0 === diff) {
            closure_11(type);
          } else {
            getLinkNodeAtIndex(type, diff - 1, closure_11);
          }
        }
      }
    }
    return type;
  }, items2);
  const items3 = [stateFromStores, postProcessor];
  const items4 = [first, tmp.tapToSee];
  const memo = onPressSearchLink.useMemo(() => {
    let obj;
    let obj4;
    if (null == stateFromStores) {
      const intl = intl3.intl;
      return intl.string(intl3.t.mE3KJN);
    } else {
      const obj2 = { postProcessor };
      const obj3 = { pointerEvents: "none", children: unpackModuleId(Text_Text.Text, obj4) };
      obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: obj.renderMessageMarkupWithParser(SearchResultLinkPreviewMarkup.NativeSearchResultLinkPreviewParser, tmp, obj2).content };
      obj = renderMessageMarkup;
      return unpackModuleId(hasOwnProperty, obj3);
    }
  }, items3);
  let target;
  const memo1 = onPressSearchLink.useMemo(() => {
    let intl;
    if (null != first) {
      if ("link" === first.type) {
        if (null != first.target) {
          if ("" !== first.target) {
            const obj2 = { variant: "text-xs/normal", color: "text-link", lineClamp: 1, children: first.target };
            return unpackModuleId(Text_Text.Text, obj2);
          }
        }
      }
    }
    if (null != first) {
      let type;
      if (first != null) {
        type = first.type;
      }
      if ("channelMention" === type) {
        const obj3 = { variant: "text-xs/normal", color: "text-link", lineClamp: 1, children: first.originalLink };
        return unpackModuleId(Text_Text.Text, obj3);
      }
    }
    const obj = { variant: "text-xs/normal", color: "interactive-text-default", lineClamp: 1, style: tapToSee.tapToSee, children: intl.string(intl3.t.q2IIoP) };
    const Text = Text_Text.Text;
    intl = intl3.intl;
    return unpackModuleId(Text, obj);
  }, items4);
  const useMemo = onPressSearchLink.useMemo;
  if (first != null) {
    target = first.target;
  }
  const items5 = [target, ];
  let type;
  if (first != null) {
    type = first.type;
  }
  items5[1] = type;
  const items6 = [channelId, messageId, first, onPress, onPressGuildVoiceChannelMention, onPressSearchLink];
  const memo2 = useMemo(() => {
    let type;
    if (first != null) {
      type = first.type;
    }
    if ("channelMention" === type) {
      return unpackModuleId(ChatIcon.ChatIcon, { size: "lg" });
    } else if ("link" === type) {
      const obj = SearchPlatformUtils;
      return unpackModuleId(obj.getUrlIcon(first.target), { size: "lg" });
    } else {
      return unpackModuleId(LinkIcon.LinkIcon, { size: "lg" });
    }
  }, items5);
  const items7 = [author, ];
  let guild_id;
  const callback1 = obj3.useCallback(() => {
    let obj4;
    if (null == first) {
      const obj2 = { channelId, messageId };
      onPress(obj2);
    } else if ("link" === first.type) {
      const obj3 = { url: first.target, trusted: obj4.isLinkTrusted(first), messageId, channelId };
      obj4 = MarkupReactLinkUtils;
      onPressSearchLink(obj3);
    } else if ("channelMention" === first.type) {
      channelId = first.channelId;
      const channel = ChannelStore.getChannel(channelId);
      let isGuildVocalResult;
      if (channel != null) {
        isGuildVocalResult = channel.isGuildVocal();
      }
      if (isGuildVocalResult) {
        const obj5 = { channelId, messageId, mentionedChannelId: channelId };
        onPressGuildVoiceChannelMention(obj5);
      } else {
        const obj = { url: first.originalLink, trusted: true, messageId, channelId };
        onPressSearchLink(obj);
      }
    }
  }, items6);
  const useMemo2 = obj3.useMemo;
  if (stateFromStores1 != null) {
    guild_id = stateFromStores1.guild_id;
  }
  items7[1] = guild_id;
  const items8 = [channelId, messageId, onPress];
  const memo21 = useMemo2(() => {
    let guild_id;
    const getAvatarSource = author.getAvatarSource;
    if (stateFromStores1 != null) {
      guild_id = stateFromStores1.guild_id;
    }
    return getAvatarSource(guild_id);
  }, items7);
  const callback2 = obj3.useCallback(() => {
    const obj = { channelId, messageId };
    onPress(obj);
  }, items8);
  let obj4 = { containerStyle, onPress: callback1, children: items10 };
  const SearchListCardContainer = tmp2(tmp3[17]).SearchListCardContainer;
  let obj5 = { thumbnail: closure_11(onPressGuildVoiceChannelMention, obj6) };
  obj6 = { style: items9, children: memo2 };
  items9 = [tmp.iconContainer, imageStyle];
  const SearchListCardThumbnail = tmp2(tmp3[17]).SearchListCardThumbnail;
  items10 = [closure_11(SearchListCardThumbnail, obj5), closure_11(tmp2(channelId[17]).SearchListCardContent, { label: memo, subLabel: memo1 }), ];
  const obj7 = { onPress: callback2, children: closure_11(tmp2(channelId[17]).SearchListCardFooter, { author, avatarSource: memo21, channel: stateFromStores1 }) };
  const PressableHighlight = tmp2(tmp3[18]).PressableHighlight;
  items10[2] = closure_11(PressableHighlight, obj7);
  return postProcessor(SearchListCardContainer, obj4);
}
({ View: hasOwnProperty, useWindowDimensions: metroRequire } = react_native);
({ FILE_OR_LINK_IMAGE_BUFFER: c9, SearchLinkTypes: c10 } = SearchConstants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let closure_13 = createStyles.createStyles({ iconContainer: { alignItems: "center", justifyContent: "center" }, tapToSee: { fontStyle: "italic" } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let author;
  let embed;
  let first;
  let messageId;
  let sources;
  let stateFromStores1;
  let tmp11;
  let tmp7;
  let tmp9;
  let url;
  let obj = author(messageId[20]);
  const cResult = obj.c(60);
  ({ embed, sources, author } = channelId);
  channelId = channelId.channelId;
  messageId = channelId.messageId;
  const onPressSearchLink = channelId.onPressSearchLink;
  const onPress = channelId.onPress;
  const imageStyle = channelId.imageStyle;
  const tmp4 = closure_13();
  iconContainer = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [url];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== messageId) {
    const fn = function l() {
      return SearchMessageStore.getMessage(messageId);
    };
    cResult[1] = messageId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = author(messageId[8]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [stateFromStores1];
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== channelId) {
    const fn2 = function _() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[4] = channelId;
    cResult[5] = fn2;
    tmp11 = fn2;
  } else {
    tmp11 = cResult[5];
  }
  const tmpResult2 = author(messageId[8]);
  stateFromStores1 = tmpResult2.useStateFromStores(tmp9, tmp11);
  const scale = iconContainer().scale;
  url = embed.url;
  let url2 = embed.rawTitle;
  if (url2 == null) {
    const author2 = embed.author;
    let name;
    if (author2 != null) {
      name = author2.name;
    }
    url2 = name;
  }
  if (url2 == null) {
    url2 = embed.url;
  }
  if (cResult[6] === imageStyle) {
    let tmp14;
    if (cResult[7] === tmp4.iconContainer) {
      tmp14 = cResult[8];
    }
    const sum = imageStyle.height + url2;
    const sum1 = imageStyle.width + url2;
    if (cResult[9] === author.id) {
      if (cResult[10] === channelId) {
        if (cResult[11] === embed) {
          if (cResult[12] === imageStyle) {
            if (cResult[13] === messageId) {
              if (cResult[14] === scale) {
                if (cResult[15] === sources) {
                  if (cResult[16] === tmp14) {
                    if (cResult[17] === sum) {
                      let tmp18;
                      if (cResult[18] === sum1) {
                        tmp18 = cResult[19];
                      }
                      if (cResult[20] === author) {
                        let tmp23;
                        let guild_id;
                        const tmp21 = cResult[21];
                        if (stateFromStores1 != null) {
                          guild_id = stateFromStores1.guild_id;
                        }
                        if (tmp21 === guild_id) {
                          tmp23 = cResult[22];
                        }
                        if (cResult[23] !== tmp23) {
                          cResult[23] = tmp23;
                          cResult[24] = tmp23();
                          const tmp23Result = tmp23();
                        }
                        if (cResult[25] === channelId) {
                          if (cResult[26] === url2) {
                            if (cResult[27] === url) {
                              if (cResult[28] === messageId) {
                                if (cResult[31] === channelId) {
                                  if (cResult[32] === messageId) {
                                    if (cResult[35] !== tmp18) {
                                      let obj2 = { thumbnail: null };
                                      class D {
                                        constructor() {
                                          const obj = { channelId, messageId };
                                          onPress(obj);
                                        }
                                      }
                                      cResult[35] = tmp18;
                                      cResult[36] = closure_11(author(messageId[17]).SearchListCardThumbnail, obj2);
                                      const tmp31 = closure_11(author(messageId[17]).SearchListCardThumbnail, obj2);
                                    }
                                    class D {
                                      constructor() {
                                        const obj = { channelId, messageId };
                                        onPress(obj);
                                      }
                                    }
                                    if (null == stateFromStores) {
                                      const string = author(tmp2[9]).intl.string;
                                      class D {
                                        constructor() {
                                          const obj = { channelId, messageId };
                                          onPress(obj);
                                        }
                                      }
                                    }
                                    cResult[37] = url2;
                                    cResult[38] = stateFromStores;
                                    cResult[39] = url2;
                                  }
                                }
                                class D {
                                  constructor() {
                                    const obj = { channelId, messageId };
                                    onPress(obj);
                                  }
                                }
                                cResult[31] = channelId;
                                cResult[32] = messageId;
                                cResult[33] = onPress;
                                cResult[34] = D;
                              }
                            }
                          }
                        }
                        const fn4 = function q() {
                          let obj2;
                          _modDef38(null != url, "[LinkGridItem] Embed url cannot be null");
                          const obj = { url, trusted: obj2.isLinkTrusted(url, url2), messageId, channelId };
                          obj2 = MaskedLinkUtils;
                          onPressSearchLink(obj);
                        };
                        cResult[25] = channelId;
                        cResult[26] = url2;
                        cResult[27] = url;
                        cResult[28] = messageId;
                        cResult[29] = onPressSearchLink;
                        cResult[30] = fn4;
                      }
                      cResult[20] = author;
                      let guild_id1;
                      if (stateFromStores1 != null) {
                        guild_id1 = stateFromStores1.guild_id;
                      }
                      const fn3 = function j() {
                        let guild_id;
                        const getAvatarSource = author.getAvatarSource;
                        if (stateFromStores1 != null) {
                          guild_id = stateFromStores1.guild_id;
                        }
                        return getAvatarSource(guild_id);
                      };
                      cResult[21] = guild_id1;
                      cResult[22] = fn3;
                      tmp23 = fn3;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    const obj3 = { messageId, channelId, authorId: author.id, sources, embed, containerStyle: imageStyle, renderFallback: tmp14, scale, containerHeight: sum, containerWidth: sum1 };
    const tmp20 = closure_11(author(messageId[21]).SearchEmbedMediaImage, obj3);
    cResult[9] = author.id;
    cResult[10] = channelId;
    cResult[11] = embed;
    cResult[12] = imageStyle;
    cResult[13] = messageId;
    cResult[14] = scale;
    cResult[15] = sources;
    cResult[16] = tmp14;
    cResult[17] = sum;
    cResult[18] = sum1;
    cResult[19] = tmp20;
    tmp18 = tmp20;
  }
  class G {
    constructor() {
      let items;
      const obj = { style: items, children: unpackModuleId(LinkIcon.LinkIcon, { size: "md" }) };
      items = [iconContainer.iconContainer, imageStyle];
      return unpackModuleId(hasOwnProperty, obj);
    }
  }
  cResult[6] = imageStyle;
  cResult[7] = tmp4.iconContainer;
  cResult[8] = G;
  tmp14 = G;
}) : ((embed) => {
  let Text;
  let items6;
  embed = embed.embed;
  const sources = embed.sources;
  const author = embed.author;
  const channelId = embed.channelId;
  const messageId = embed.messageId;
  const onPressSearchLink = embed.onPressSearchLink;
  const onPress = embed.onPress;
  const imageStyle = embed.imageStyle;
  const containerStyle = embed.containerStyle;
  const tmp = closure_13();
  let closure_8 = tmp;
  let obj = embed(author[8]);
  let items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => SearchMessageStore.getMessage(messageId));
  let obj2 = embed(author[8]);
  const items1 = [imageStyle];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  const scale = onPress().scale;
  let url = embed.url;
  let url2 = embed.rawTitle;
  if (url2 == null) {
    const author2 = embed.author;
    let name;
    if (author2 != null) {
      name = author2.name;
    }
    url2 = name;
  }
  if (url2 == null) {
    url2 = embed.url;
  }
  const items2 = [author.id, channelId, embed, imageStyle, messageId, scale, sources, tmp.iconContainer];
  const items3 = [author, ];
  let guild_id;
  const memo = messageId.useMemo(() => {
    let obj = {
      messageId,
      channelId,
      authorId: author.id,
      sources,
      embed,
      containerStyle: imageStyle,
      renderFallback() {
        let items;
        const obj = { style: items, children: url(embed(author[15]).LinkIcon, { size: "md" }) };
        items = [iconContainer.iconContainer, imageStyle];
        return url(onPressSearchLink, obj);
      },
      scale,
      containerHeight: imageStyle.height + React4,
      containerWidth: imageStyle.width + React4
    };
    return unpackModuleId(SearchMediaImage.SearchEmbedMediaImage, obj);
  }, items2);
  const useMemo = messageId.useMemo;
  if (stateFromStores1 != null) {
    guild_id = stateFromStores1.guild_id;
  }
  items3[1] = guild_id;
  const items4 = [url, onPressSearchLink, url2, channelId, messageId];
  const memo1 = useMemo(() => {
    let guild_id;
    const getAvatarSource = author.getAvatarSource;
    if (stateFromStores1 != null) {
      guild_id = stateFromStores1.guild_id;
    }
    return getAvatarSource(guild_id);
  }, items3);
  const items5 = [channelId, messageId, onPress];
  const callback = obj3.useCallback(() => {
    let obj2;
    _modDef38(null != url, "[LinkGridItem] Embed url cannot be null");
    const obj = { url, trusted: obj2.isLinkTrusted(url, url2), messageId, channelId };
    obj2 = MaskedLinkUtils;
    onPressSearchLink(obj);
  }, items4);
  const callback1 = obj3.useCallback(() => {
    const obj = { channelId, messageId };
    onPress(obj);
  }, items5);
  const obj4 = { containerStyle, onPress: callback, children: items6 };
  const SearchListCardContainer = tmp2(tmp3[17]).SearchListCardContainer;
  items6 = [url(tmp2(author[17]).SearchListCardThumbnail, { thumbnail: memo }), , ];
  const SearchListCardContent = tmp2(tmp3[17]).SearchListCardContent;
  const tmp12 = url2;
  if (null == stateFromStores) {
    const intl = tmp2(tmp3[9]).intl;
    url2 = intl.string(tmp2(tmp3[9]).t.mE3KJN);
  }
  const obj5 = { label: url2, subLabel: url(Text, { variant: "text-xs/normal", color: "text-link", lineClamp: 1, children: url }) };
  Text = tmp2(tmp3[12]).Text;
  if (url == null) {
    const intl2 = tmp2(tmp3[9]).intl;
    url = intl2.string(tmp2(tmp3[9]).t.q2IIoP);
  }
  items6[1] = url(SearchListCardContent, obj5);
  const obj6 = { onPress: callback1, children: url(embed(author[17]).SearchListCardFooter, { author, avatarSource: memo1, channel: stateFromStores1 }) };
  const PressableHighlight = tmp2(tmp3[18]).PressableHighlight;
  items6[2] = url(PressableHighlight, obj6);
  return tmp12(SearchListCardContainer, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let containerStyle;
  let data;
  let imageStyle;
  let onPress;
  let onPressGuildVoiceChannelMention;
  let onPressSearchLink;
  const obj = react2;
  const cResult = obj.c(21);
  ({ data, onPressSearchLink, onPressGuildVoiceChannelMention, onPress, imageStyle, containerStyle } = arg0);
  const type = data.type;
  if (constants.EMBED === type) {
    if (cResult[0] === containerStyle) {
      if (cResult[1] === data.author) {
        if (cResult[2] === data.channelId) {
          if (cResult[3] === data.embed) {
            if (cResult[4] === data.linkIndex) {
              if (cResult[5] === data.messageId) {
                if (cResult[6] === data.sources) {
                  if (cResult[7] === imageStyle) {
                    if (cResult[8] === onPress) {
                      let tmp8;
                      if (cResult[9] === onPressSearchLink) {
                        tmp8 = cResult[10];
                      }
                      return tmp8;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    const obj5 = { embed: null, sources: null, messageId: null, channelId: null, author: null, linkIndex: null, onPressSearchLink, onPress, imageStyle, containerStyle };
    ({ embed: obj3.embed, sources: obj3.sources, messageId: obj3.messageId, channelId: obj3.channelId, author: obj3.author, linkIndex: obj3.linkIndex } = data);
    const tmp11 = unpackModuleId(closure_16, obj5);
    cResult[0] = containerStyle;
    cResult[1] = data.author;
    cResult[2] = data.channelId;
    cResult[3] = data.embed;
    cResult[4] = data.linkIndex;
    cResult[5] = data.messageId;
    cResult[6] = data.sources;
    cResult[7] = imageStyle;
    cResult[8] = onPress;
    cResult[9] = onPressSearchLink;
    cResult[10] = tmp11;
    tmp8 = tmp11;
  } else if (tmp2.TEXT === type) {
    if (cResult[11] === containerStyle) {
      if (cResult[12] === data.author) {
        if (cResult[13] === data.channelId) {
          if (cResult[14] === data.linkIndex) {
            if (cResult[15] === data.messageId) {
              if (cResult[16] === imageStyle) {
                if (cResult[17] === onPress) {
                  if (cResult[18] === onPressGuildVoiceChannelMention) {
                    let tmp4;
                    if (cResult[19] === onPressSearchLink) {
                      tmp4 = cResult[20];
                    }
                    return tmp4;
                  }
                }
              }
            }
          }
        }
      }
    }
    const obj6 = { messageId: null, channelId: null, author: null, linkIndex: null, onPressSearchLink, onPressGuildVoiceChannelMention, onPress, imageStyle, containerStyle };
    ({ messageId: obj2.messageId, channelId: obj2.channelId, author: obj2.author, linkIndex: obj2.linkIndex } = data);
    const tmp7 = unpackModuleId(LinkParsedGridItem, obj6);
    cResult[11] = containerStyle;
    cResult[12] = data.author;
    cResult[13] = data.channelId;
    cResult[14] = data.linkIndex;
    cResult[15] = data.messageId;
    cResult[16] = imageStyle;
    cResult[17] = onPress;
    cResult[18] = onPressGuildVoiceChannelMention;
    cResult[19] = onPressSearchLink;
    cResult[20] = tmp7;
    tmp4 = tmp7;
  } else {
    return null;
  }
}) : ((arg0) => {
  let containerStyle;
  let data;
  let imageStyle;
  let onPress;
  let onPressSearchLink;
  ({ data, onPressSearchLink, onPress, imageStyle, containerStyle } = arg0);
  const type = data.type;
  if (constants.EMBED === type) {
    const obj3 = { embed: null, sources: null, messageId: null, channelId: null, author: null, linkIndex: null, onPressSearchLink, onPress, imageStyle, containerStyle };
    ({ embed: obj2.embed, sources: obj2.sources, messageId: obj2.messageId, channelId: obj2.channelId, author: obj2.author, linkIndex: obj2.linkIndex } = data);
    return unpackModuleId(closure_16, obj3);
  } else if (tmp2.TEXT === type) {
    const obj = { messageId: null, channelId: null, author: null, linkIndex: null, onPressSearchLink, onPressGuildVoiceChannelMention: tmp, onPress, imageStyle, containerStyle };
    ({ messageId: obj.messageId, channelId: obj.channelId, author: obj.author, linkIndex: obj.linkIndex } = data);
    return unpackModuleId(LinkParsedGridItem, obj);
  } else {
    return null;
  }
}));
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/LinkGridItem.tsx");

export default memoResult;