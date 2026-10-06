// === Module 12501: MessagePreviewText ===

// Module 12501 (MessagePreviewText)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1096 */;
import MessageEmbedTypes from "MessageEmbedTypes" /* 1107 */;
import intl5 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import useMessageAuthor from "useMessageAuthor" /* 5311 */;
import FastImageDefault from "FastImage" /* 5981 */;
import isForwardMessageDefault from "isForwardMessage" /* 6815 */;
import ChannelListLayoutTypes from "ChannelListLayoutTypes" /* 7525 */;
import InAppNotificationUtils from "InAppNotificationUtils" /* 12492 */;
import useTruncatedGradientColorsDefault from "useTruncatedGradientColors" /* 12502 */;
import ChannelRowPreview2 from "ChannelRowPreview" /* 12503 */;
import usePreviewableMedia from "usePreviewableMedia" /* 12504 */;
import usePreviewableMediaText from "usePreviewableMediaText" /* 12507 */;
import useGetInitialMessagePreview from "useGetInitialMessagePreview" /* 12508 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import InAppNotificationConstants from "InAppNotificationConstants" /* 12493 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import PlatformUtils from "utils/PlatformUtils" /* 1370 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let embed, media;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj4;
let obj5;
let obj6;
let size;
const View = react_native.View;
({ IN_APP_NOTIFICATION_MAX_HEIGHT: metroRequire, NOTIFICATION_PREVIEW_LINE_CLAMP: metroImportDefault } = InAppNotificationConstants);
const Fonts = Constants.Fonts;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
createStyles = createStyles.createStyles;
let obj = { italic: obj2 };
obj2 = { fontStyle: "italic", fontFamily: PlatformUtils.isIOS() ? Fonts.PRIMARY_NORMAL_ITALIC : Fonts.PRIMARY_MEDIUM_ITALIC };
let closure_10 = createStyles(obj);
createStyles = createStyles_mod;
let obj3 = { embedContainer: obj4, embedAccentBar: obj5, embedTextContainer: obj6, embedMediaContainer: size, embedMedia: { width: "100%", height: "100%" } };
obj4 = { borderRadius: nativeDefault.radii.sm, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8, paddingRight: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, flexDirection: "row", overflow: "hidden" };
const createStyles2 = createStyles.createStyles;
obj5 = { width: 4, marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_8, alignSelf: "stretch" };
obj6 = { flex: 1, gap: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8 };
size = { borderRadius: nativeDefault.radii.xs, overflow: "hidden", height: 60, width: "unicodeVersion" };
let closure_11 = createStyles2(obj3);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let gradientColors;
  let gradientStyles;
  let message;
  const obj = react2;
  const cResult = obj.c(6);
  ({ message, lineClamp, maxHeight } = arg0);
  ({ gradientColors, gradientStyles } = useTruncatedGradientColorsDefault());
  useTruncatedGradientColorsDefault();
  if (cResult[0] === gradientColors) {
    if (cResult[1] === gradientStyles) {
      if (cResult[2] === lineClamp) {
        if (cResult[3] === maxHeight) {
          let tmp5;
          if (cResult[4] === message) {
            tmp5 = cResult[5];
          }
          return tmp5;
        }
      }
    }
  }
  const obj2 = { children: metroImportAll(ChannelRowPreview2.NativeChannelRowPreview, { message, lineClamp, maxHeight, gradientStyles, gradientColors }) };
  const tmp6 = metroImportAll(View, obj2);
  cResult[0] = gradientColors;
  cResult[1] = gradientStyles;
  cResult[2] = lineClamp;
  cResult[3] = maxHeight;
  cResult[4] = message;
  cResult[5] = tmp6;
  tmp5 = tmp6;
}) : ((arg0) => {
  let gradientColors;
  let gradientStyles;
  let message;
  ({ message, lineClamp, maxHeight } = arg0);
  const tmp = useTruncatedGradientColorsDefault();
  const obj = { children: metroImportAll(ChannelRowPreview2.NativeChannelRowPreview, { message, lineClamp, maxHeight, gradientStyles, gradientColors }) };
  ({ gradientColors, gradientStyles } = tmp);
  return metroImportAll(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((text) => {
  let first;
  const obj = react2;
  const cResult = obj.c(4);
  text = text.text;
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = InAppNotificationUtils;
    const messagePreviewTextVariant = tmpResult.getMessagePreviewTextVariant();
    cResult[0] = messagePreviewTextVariant;
    first = messagePreviewTextVariant;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === tmp4.italic) {
    let tmp7;
    if (cResult[2] === text) {
      tmp7 = cResult[3];
    }
    return tmp7;
  }
  const obj2 = { variant: first, color: "text-subtle", style: tmp4.italic, lineClamp: metroImportDefault, children: text };
  const tmp8 = metroImportAll(Text_Text.Text, obj2);
  cResult[1] = tmp4.italic;
  cResult[2] = text;
  cResult[3] = tmp8;
  tmp7 = tmp8;
}) : ((text) => {
  text = text.text;
  const tmp = closure_10();
  const obj = InAppNotificationUtils;
  const messagePreviewTextVariant = obj.getMessagePreviewTextVariant();
  const obj2 = { variant: messagePreviewTextVariant, color: "text-subtle", style: tmp.italic, lineClamp: metroImportDefault, children: text };
  return metroImportAll(Text_Text.Text, obj2);
});
let closure_13 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((media) => {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(13);
  media = media.media;
  const tmp3 = closure_11();
  let url = media.proxyURL;
  if (url == null) {
    url = media.url;
  }
  const result = media.width / media.height;
  let num = 1;
  if (Number.isFinite(result)) {
    num = 1;
    if (result > 0) {
      num = result;
    }
  }
  if (cResult[0] !== num) {
    const obj2 = { aspectRatio: num };
    cResult[0] = num;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp3.embedMediaContainer) {
    let tmp6;
    let tmp7;
    if (cResult[3] === tmp5) {
      tmp6 = cResult[4];
    }
    if (cResult[5] !== url) {
      const obj3 = { uri: url };
      cResult[5] = url;
      cResult[6] = obj3;
      tmp7 = obj3;
    } else {
      tmp7 = cResult[6];
    }
    if (cResult[7] === tmp3.embedMedia) {
      let tmp8;
      if (cResult[8] === tmp7) {
        tmp8 = cResult[9];
      }
      if (cResult[10] === tmp6) {
        let tmp12;
        if (cResult[11] === tmp8) {
          tmp12 = cResult[12];
        }
        return tmp12;
      }
      const obj4 = { style: tmp6, children: tmp8 };
      const tmp15 = metroImportAll(View, obj4);
      cResult[10] = tmp6;
      cResult[11] = tmp8;
      cResult[12] = tmp15;
      tmp12 = tmp15;
    }
    const obj5 = { source: tmp7, style: tmp3.embedMedia, resizeMode: "contain" };
    const tmp11 = metroImportAll(FastImageDefault, obj5);
    cResult[7] = tmp3.embedMedia;
    cResult[8] = tmp7;
    cResult[9] = tmp11;
    tmp8 = tmp11;
  }
  const items = [tmp3.embedMediaContainer, tmp5];
  cResult[2] = tmp3.embedMediaContainer;
  cResult[3] = tmp5;
  cResult[4] = items;
  tmp6 = items;
}) : ((media) => {
  let items;
  let obj2;
  media = media.media;
  const tmp = closure_11();
  let url = media.proxyURL;
  if (url == null) {
    url = media.url;
  }
  const result = media.width / media.height;
  let num = 1;
  if (Number.isFinite(result)) {
    num = 1;
    if (result > 0) {
      num = result;
    }
  }
  const obj = { style: items, children: metroImportAll(FastImageDefault, obj2) };
  items = [tmp.embedMediaContainer, { aspectRatio: num }];
  obj2 = { source: { uri: url }, style: tmp.embedMedia, resizeMode: "contain" };
  return metroImportAll(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((embed) => {
  let items;
  let items1;
  let items2;
  let rawTitle;
  let thumbnail;
  const obj = react2;
  const cResult = obj.c(25);
  embed = embed.embed;
  const tmp4 = closure_11();
  const provider = embed.provider;
  let name;
  if (provider != null) {
    name = provider.name;
  }
  const author = embed.author;
  let name1;
  if (author != null) {
    name1 = author.name;
  }
  ({ rawTitle, thumbnail } = embed);
  if (thumbnail == null) {
    thumbnail = embed.image;
  }
  let color;
  if (null != embed.color) {
    const str = embed.color;
    if ("#ffffff" !== str.toLowerCase()) {
      color = embed.color;
    }
  }
  if (cResult[0] === color) {
    let tmp9;
    let tmp13;
    let tmp16;
    if (cResult[1] === tmp4.embedAccentBar) {
      tmp9 = cResult[2];
    }
    if (cResult[3] !== name) {
      let tmp14 = null != name;
      if (tmp14) {
        const obj2 = { variant: "text-xxs/normal", color: "text-subtle", lineClamp: 1, children: name };
        tmp14 = metroImportAll(Text_Text.Text, obj2);
      }
      cResult[3] = name;
      cResult[4] = tmp14;
      tmp13 = tmp14;
    } else {
      tmp13 = cResult[4];
    }
    if (cResult[5] !== name1) {
      let tmp17 = null != name1;
      if (tmp17) {
        const obj3 = { variant: "text-xs/medium", color: "text-default", lineClamp: 1, children: name1 };
        tmp17 = metroImportAll(Text_Text.Text, obj3);
      }
      cResult[5] = name1;
      cResult[6] = tmp17;
      tmp16 = tmp17;
    } else {
      tmp16 = cResult[6];
    }
    if (cResult[7] === (null == name && null == name1)) {
      let tmp19;
      let tmp22;
      if (cResult[8] === rawTitle) {
        tmp19 = cResult[9];
      }
      if (cResult[10] !== embed.rawDescription) {
        let tmp23 = null != embed.rawDescription;
        if (tmp23) {
          const obj4 = { variant: "text-xs/medium", color: "text-default", lineClamp: 3, children: embed.rawDescription };
          tmp23 = metroImportAll(Text_Text.Text, obj4);
        }
        cResult[10] = embed.rawDescription;
        cResult[11] = tmp23;
        tmp22 = tmp23;
      } else {
        tmp22 = cResult[11];
      }
      if (cResult[12] === tmp4.embedTextContainer) {
        if (cResult[13] === tmp13) {
          if (cResult[14] === tmp16) {
            if (cResult[15] === tmp19) {
              let tmp25;
              let tmp29;
              if (cResult[16] === tmp22) {
                tmp25 = cResult[17];
              }
              if (cResult[18] !== thumbnail) {
                let tmp30 = null != thumbnail;
                if (tmp30) {
                  const obj5 = { media: thumbnail };
                  tmp30 = metroImportAll(closure_14, obj5);
                }
                cResult[18] = thumbnail;
                cResult[19] = tmp30;
                tmp29 = tmp30;
              } else {
                tmp29 = cResult[19];
              }
              if (cResult[20] === tmp4.embedContainer) {
                if (cResult[21] === tmp9) {
                  if (cResult[22] === tmp25) {
                    let tmp33;
                    if (cResult[23] === tmp29) {
                      tmp33 = cResult[24];
                    }
                    return tmp33;
                  }
                }
              }
              const obj6 = { style: tmp4.embedContainer, children: items };
              items = [tmp9, tmp25, tmp29];
              const tmp36 = React4(View, obj6);
              cResult[20] = tmp4.embedContainer;
              cResult[21] = tmp9;
              cResult[22] = tmp25;
              cResult[23] = tmp29;
              cResult[24] = tmp36;
              tmp33 = tmp36;
            }
          }
        }
      }
      const obj7 = { style: tmp4.embedTextContainer, children: items1 };
      items1 = [tmp13, tmp16, tmp19, tmp22];
      const tmp28 = React4(View, obj7);
      cResult[12] = tmp4.embedTextContainer;
      cResult[13] = tmp13;
      cResult[14] = tmp16;
      cResult[15] = tmp19;
      cResult[16] = tmp22;
      cResult[17] = tmp28;
      tmp25 = tmp28;
    }
    let tmp21Result = null != rawTitle;
    if (tmp21Result) {
      let num5 = 1;
      const Text = Text_Text.Text;
      if (null == name && null == name1) {
        num5 = 3;
      }
      const obj8 = { variant: "text-xs/medium", color: "text-link", lineClamp: num5, children: rawTitle };
      tmp21Result = metroImportAll(Text, obj8);
    }
    cResult[7] = null == name && null == name1;
    cResult[8] = rawTitle;
    cResult[9] = tmp21Result;
    tmp19 = tmp21Result;
  }
  let tmp10 = null != color;
  if (tmp10) {
    const obj9 = { style: items2 };
    items2 = [tmp4.embedAccentBar, ];
    const obj10 = { backgroundColor: color };
    items2[1] = obj10;
    tmp10 = metroImportAll(View, obj9);
  }
  cResult[0] = color;
  cResult[1] = tmp4.embedAccentBar;
  cResult[2] = tmp10;
  tmp9 = tmp10;
}) : ((embed) => {
  let items;
  let items1;
  let items2;
  let rawTitle;
  let thumbnail;
  embed = embed.embed;
  const tmp = closure_11();
  const provider = embed.provider;
  let name;
  if (provider != null) {
    name = provider.name;
  }
  const author = embed.author;
  let name1;
  if (author != null) {
    name1 = author.name;
  }
  ({ rawTitle, thumbnail } = embed);
  if (thumbnail == null) {
    thumbnail = embed.image;
  }
  let color;
  if (null != embed.color) {
    const str = embed.color;
    if ("#ffffff" !== str.toLowerCase()) {
      color = embed.color;
    }
  }
  let tmp7 = null != color;
  const obj = { style: tmp.embedContainer, children: items1 };
  if (tmp7) {
    const obj2 = { style: items };
    items = [tmp.embedAccentBar, ];
    const obj3 = { backgroundColor: color };
    items[1] = obj3;
    tmp7 = metroImportAll(View, obj2);
  }
  items1 = [tmp7, , ];
  let tmp9 = null != name;
  const obj4 = { style: tmp.embedTextContainer, children: items2 };
  if (tmp9) {
    const obj5 = { variant: "text-xxs/normal", color: "text-subtle", lineClamp: 1, children: name };
    tmp9 = metroImportAll(Text_Text.Text, obj5);
  }
  items2 = [tmp9, , , ];
  let tmp13 = null != name1;
  if (tmp13) {
    const obj6 = { variant: "text-xs/medium", color: "text-default", lineClamp: 1, children: name1 };
    tmp13 = metroImportAll(Text_Text.Text, obj6);
  }
  items2[1] = tmp13;
  let tmp18Result = null != rawTitle;
  if (tmp18Result) {
    let num2 = 1;
    const Text = Text_Text.Text;
    if (null == name) {
      num2 = 1;
      if (null == name1) {
        num2 = 3;
      }
    }
    const obj7 = { variant: "text-xs/medium", color: "text-link", lineClamp: num2, children: rawTitle };
    tmp18Result = metroImportAll(Text, obj7);
  }
  items2[2] = tmp18Result;
  let tmp21 = null != embed.rawDescription;
  if (tmp21) {
    const obj8 = { variant: "text-xs/medium", color: "text-default", lineClamp: 3, children: embed.rawDescription };
    tmp21 = metroImportAll(Text_Text.Text, obj8);
  }
  items2[3] = tmp21;
  items1[1] = React4(View, obj4);
  let tmp25 = null != thumbnail;
  if (tmp25) {
    const obj9 = { media: thumbnail };
    tmp25 = metroImportAll(closure_14, obj9);
  }
  items1[2] = tmp25;
  return React4(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let items;
  let message;
  let secondaryText;
  let showMessageAuthor;
  let text;
  let tmp35;
  const obj = react2;
  const cResult = obj.c(56);
  ({ message, lineClamp, maxHeight, showMessageAuthor } = arg0);
  const tmp4 = undefined !== showMessageAuthor && showMessageAuthor;
  const tmpResult = usePreviewableMedia;
  const previewableMedia = tmpResult.usePreviewableMedia(message);
  let tmp6 = null;
  const useNullableMessageAuthor = useMessageAuthor.useNullableMessageAuthor;
  useMessageAuthor;
  if (tmp4) {
    tmp6 = message;
  }
  const nullableMessageAuthor = useNullableMessageAuthor(tmp6);
  if (cResult[0] === nullableMessageAuthor) {
    let tmp8;
    let tmp10;
    let arr2;
    if (cResult[1] === previewableMedia) {
      tmp8 = cResult[2];
    }
    const tmpResult5 = usePreviewableMediaText;
    const previewableMediaText = tmpResult5.usePreviewableMediaText(tmp8);
    ({ text, secondaryText } = previewableMediaText);
    if (cResult[3] !== message) {
      const obj2 = { message };
      cResult[3] = message;
      cResult[4] = obj2;
      tmp10 = obj2;
    } else {
      tmp10 = cResult[4];
    }
    const tmpResult6 = useGetInitialMessagePreview;
    const getInitialMessagePreview = tmpResult6.useGetInitialMessagePreview(tmp10);
    if (cResult[5] !== message.embeds) {
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor(arg0) {
            tmp = null != arg0.image || null != arg0.thumbnail;
            return tmp;
          }
        }
        cResult[7] = S;
      } else {
        class S {
          constructor(arg0) {
            tmp = null != arg0.image || null != arg0.thumbnail;
            return tmp;
          }
        }
      }
      const embeds = message.embeds;
      const found = embeds.filter(S);
      cResult[5] = message.embeds;
      cResult[6] = found;
      arr2 = found;
    } else {
      class S {
        constructor(arg0) {
          tmp = null != arg0.image || null != arg0.thumbnail;
          return tmp;
        }
      }
    }
    if (arr2.length > 0) {
      class S {
        constructor(arg0) {
          tmp = null != arg0.image || null != arg0.thumbnail;
          return tmp;
        }
      }
      if (tmp26.type === MessageEmbedTypes.MessageEmbedTypes.GIFV) {
        class S {
          constructor(arg0) {
            tmp = null != arg0.image || null != arg0.thumbnail;
            return tmp;
          }
        }
        return tmp35;
      }
      if (cResult[10] !== getInitialMessagePreview) {
        class S {
          constructor(arg0) {
            tmp = null != arg0.image || null != arg0.thumbnail;
            return tmp;
          }
        }
        const obj3 = { message: getInitialMessagePreview, lineClamp: metroImportDefault, maxHeight: metroRequire };
        cResult[10] = getInitialMessagePreview;
        cResult[11] = metroImportAll(closure_12, obj3);
        const tmp31 = metroImportAll(closure_12, obj3);
      } else {
        class S {
          constructor(arg0) {
            tmp = null != arg0.image || null != arg0.thumbnail;
            return tmp;
          }
        }
      }
      if (cResult[12] !== tmp26) {
        class S {
          constructor(arg0) {
            tmp = null != arg0.image || null != arg0.thumbnail;
            return tmp;
          }
        }
        const obj4 = { embed: tmp26 };
        cResult[12] = tmp26;
        cResult[13] = metroImportAll(closure_15, obj4);
        const tmp34 = metroImportAll(closure_15, obj4);
      } else {
        class S {
          constructor(arg0) {
            tmp = null != arg0.image || null != arg0.thumbnail;
            return tmp;
          }
        }
      }
      if (cResult[14] === tmp27) {
        class S {
          constructor(arg0) {
            tmp = null != arg0.image || null != arg0.thumbnail;
            return tmp;
          }
        }
      }
      const obj5 = { children: items };
      items = [tmp27, tmp32];
      const tmp38 = React4(View, obj5);
      cResult[14] = tmp27;
      cResult[15] = tmp32;
      cResult[16] = tmp38;
      tmp35 = tmp38;
    } else {
      class S {
        constructor(arg0) {
          tmp = null != arg0.image || null != arg0.thumbnail;
          return tmp;
        }
      }
      if (isForwardMessageDefault(message)) {
        class S {
          constructor(arg0) {
            tmp = null != arg0.image || null != arg0.thumbnail;
            return tmp;
          }
        }
        let tmp15 = previewableMedia.length > 0;
        if (tmp15) {
          class S {
            constructor(arg0) {
              tmp = null != arg0.image || null != arg0.thumbnail;
              return tmp;
            }
          }
          tmp15 = tmp16 === usePreviewableMedia.PreviewableMediaTypes.GIF;
        }
        if (previewableMedia.length > 0) {
          let tmp23;
          class S {
            constructor(arg0) {
              tmp = null != arg0.image || null != arg0.thumbnail;
              return tmp;
            }
          }
          if (cResult[17] !== nullableMessageAuthor) {
            class S {
              constructor(arg0) {
                tmp = null != arg0.image || null != arg0.thumbnail;
                return tmp;
              }
            }
            cResult[17] = nullableMessageAuthor;
            cResult[18] = tmp22;
          } else {
            class S {
              constructor(arg0) {
                tmp = null != arg0.image || null != arg0.thumbnail;
                return tmp;
              }
            }
          }
          if (cResult[19] !== tmp22) {
            class S {
              constructor(arg0) {
                tmp = null != arg0.image || null != arg0.thumbnail;
                return tmp;
              }
            }
            const obj6 = { text: tmp22 };
            const tmp25 = metroImportAll(closure_13, obj6);
            cResult[19] = tmp22;
            cResult[20] = tmp25;
            tmp23 = tmp25;
          } else {
            class S {
              constructor(arg0) {
                tmp = null != arg0.image || null != arg0.thumbnail;
                return tmp;
              }
            }
          }
          return tmp23;
        }
        if (cResult[21] === getInitialMessagePreview) {
          class S {
            constructor(arg0) {
              tmp = null != arg0.image || null != arg0.thumbnail;
              return tmp;
            }
          }
        }
        const obj7 = { message: getInitialMessagePreview, lineClamp: metroImportDefault, maxHeight: metroRequire };
        cResult[21] = getInitialMessagePreview;
        cResult[22] = metroImportDefault;
        cResult[23] = metroRequire;
        cResult[24] = metroImportAll(closure_12, obj7);
        const tmp20 = metroImportAll(closure_12, obj7);
      } else {
        class S {
          constructor(arg0) {
            tmp = null != arg0.image || null != arg0.thumbnail;
            return tmp;
          }
        }
      }
    }
  }
  const obj8 = { previewableMedia, author: nullableMessageAuthor };
  cResult[0] = nullableMessageAuthor;
  cResult[1] = previewableMedia;
  cResult[2] = obj8;
  tmp8 = obj8;
}) : ((message) => {
  let items1;
  let items3;
  let secondaryText;
  let showMessageAuthor;
  let text;
  message = message.message;
  ({ lineClamp, maxHeight, showMessageAuthor } = message);
  if (showMessageAuthor === undefined) {
    showMessageAuthor = false;
  }
  const obj = usePreviewableMedia;
  const previewableMedia = obj.usePreviewableMedia(message);
  let tmp4 = null;
  const useNullableMessageAuthor = useMessageAuthor.useNullableMessageAuthor;
  useMessageAuthor;
  if (showMessageAuthor) {
    tmp4 = message;
  }
  const nullableMessageAuthor = useNullableMessageAuthor(tmp4);
  const tmpResult = usePreviewableMediaText;
  const previewableMediaText = tmpResult.usePreviewableMediaText({ previewableMedia, author: nullableMessageAuthor });
  ({ text, secondaryText } = previewableMediaText);
  const tmpResult3 = useGetInitialMessagePreview;
  const getInitialMessagePreview = tmpResult3.useGetInitialMessagePreview({ message });
  const items = [message.embeds];
  const memo = react.useMemo(() => {
    const embeds = message.embeds;
    return embeds.filter((image) => null != image.image || null != image.thumbnail);
  }, items);
  if (memo.length > 0) {
    const first = memo[0];
    if (first.type === MessageEmbedTypes.MessageEmbedTypes.GIFV) {
      let tmp44;
      if (null != text) {
        const obj2 = { text };
        tmp44 = metroImportAll(closure_13, obj2);
      }
      return tmp44;
    }
    const obj3 = { children: items1 };
    const obj4 = { message: getInitialMessagePreview, lineClamp: metroImportDefault, maxHeight: metroRequire };
    items1 = [metroImportAll(closure_12, obj4), ];
    const obj5 = { embed: first };
    items1[1] = metroImportAll(closure_15, obj5);
    tmp44 = React4(View, obj3);
  } else if (isForwardMessageDefault(message)) {
    previewableMedia.length > 0 && previewableMedia[0].type === usePreviewableMedia.PreviewableMediaTypes.GIF;
    if (previewableMedia.length > 0) {
      let formatResult;
      if (null != nullableMessageAuthor) {
        const intl4 = intl5.intl;
        const obj6 = { username: nullableMessageAuthor.nick };
        formatResult = intl4.format(intl5.t.sLDHDi, obj6);
      } else {
        const intl3 = intl5.intl;
        formatResult = intl3.string(intl5.t["9ddYKt"]);
      }
      const obj7 = { text: formatResult };
      return metroImportAll(closure_13, obj7);
    }
    const obj8 = { message: getInitialMessagePreview, lineClamp: metroImportDefault, maxHeight: metroRequire };
    return metroImportAll(closure_12, obj8);
  } else if (message.content.length > 0) {
    if (null != nullableMessageAuthor) {
      const channel = ChannelStore.getChannel(message.channel_id);
      InAppNotificationUtils;
      if (null != channel) {
        const obj9 = { channel, message, color: "text-default", layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COZY, variant: tmp25, muted: false, lineClamp: metroImportDefault };
        const ChannelRowPreview = ChannelRowPreview2.ChannelRowPreview;
        return metroImportAll(ChannelRowPreview, obj9);
      }
    }
    const obj10 = { message: getInitialMessagePreview, lineClamp: metroImportDefault, maxHeight: metroRequire };
    return metroImportAll(closure_12, obj10);
  } else {
    if (previewableMedia.length > 0) {
      if (null !== text) {
        const obj11 = { text };
        const items2 = [metroImportAll(closure_13, obj11), ];
        let tmp18Result = null !== secondaryText;
        if (tmp18Result) {
          const obj12 = { variant: "redesign/message-preview/medium", color: "text-link", lineClamp: metroImportDefault, children: secondaryText };
          tmp18Result = metroImportAll(Text_Text.Text, obj12);
        }
        const obj13 = { children: items2 };
        items2[1] = tmp18Result;
        return React4(View, obj13);
      }
    }
    if (null != message.poll) {
      let formatResult1;
      const text2 = message.poll.question.text;
      if (null != nullableMessageAuthor) {
        const intl2 = intl5.intl;
        const obj14 = { username: nullableMessageAuthor.nick };
        formatResult1 = intl2.format(intl5.t["1wtRlq"], obj14);
      } else {
        const intl = intl5.intl;
        formatResult1 = intl.string(intl5.t.n3shVJ);
      }
      const obj15 = { children: items3 };
      const obj16 = { text: formatResult1 };
      items3 = [metroImportAll(closure_13, obj16), ];
      const obj17 = { variant: "redesign/message-preview/medium", color: "text-default", lineClamp: metroImportDefault, children: text2 };
      items3[1] = metroImportAll(Text_Text.Text, obj17);
      return React4(View, obj15);
    } else {
      const obj18 = { message, lineClamp: metroImportDefault, maxHeight: metroRequire };
      return metroImportAll(closure_12, obj18);
    }
  }
});
size = size_mod;
let result = size.fileFinishedImporting("modules/in_app_notifications/native/MessagePreviewText.tsx");

export default tmp7;
export const SystemMessageText = tmp6;