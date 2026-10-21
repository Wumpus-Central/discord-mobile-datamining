// discord_app/modules/in_app_notifications/native/MessagePreviewText.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import utils_ColorUtils from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import MessageEmbedTypes from "../../../../discord_common/js/shared/shared-constants/MessageEmbedTypes.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import isForwardMessageDefault from "../../forwarding/isForwardMessage.tsx";
import ChannelListLayoutTypes from "../../main_tabs_v2/ChannelListLayoutTypes.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import useMessageAuthor from "../../messages/useMessageAuthor.tsx";
import InAppNotificationUtils from "InAppNotificationUtils.tsx";
import useTruncatedGradientColorsDefault from "hooks/useTruncatedGradientColors.tsx";
import ChannelRowPreview from "../../main_tabs_v2/native/shared_components/ChannelRowPreview.tsx";
import usePreviewableMedia from "hooks/usePreviewableMedia.tsx";
import usePreviewableMediaText from "hooks/usePreviewableMediaText.tsx";
import useGetInitialMessagePreview from "hooks/useGetInitialMessagePreview.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";

require = fn;
const View = fn(17).View;
const InAppNotificationConstants = fn(13643);
({ IN_APP_NOTIFICATION_MAX_HEIGHT: metroRequire, NOTIFICATION_PREVIEW_LINE_CLAMP: closure_7 } =
  InAppNotificationConstants);
const Fonts = fn(1098).Fonts;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let createStyles = fn(4966);
const PlatformUtils = fn(1385);
let obj3 = {
  italic: {
    fontStyle: "italic",
    fontFamily: PlatformUtils.isIOS() ? Fonts.PRIMARY_NORMAL_ITALIC : Fonts.PRIMARY_MEDIUM_ITALIC,
  },
};
let closure_10 = createStyles.createStyles(obj3);
createStyles = fn(4966);
let obj6 = {
  embedContainer: null,
  embedAccentBar: null,
  embedTextContainer: null,
  embedMediaContainer: null,
  embedMedia: null,
};
let obj4 = {
  fontStyle: "italic",
  fontFamily: PlatformUtils.isIOS() ? Fonts.PRIMARY_NORMAL_ITALIC : Fonts.PRIMARY_MEDIUM_ITALIC,
};
obj6.embedContainer = {
  borderRadius: nativeDefault.radii.sm,
  paddingTop: nativeDefault.space.PX_8,
  paddingBottom: nativeDefault.space.PX_8,
  paddingRight: nativeDefault.space.PX_8,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  flexDirection: "row",
  overflow: "hidden",
};
let obj7 = {
  borderRadius: nativeDefault.radii.sm,
  paddingTop: nativeDefault.space.PX_8,
  paddingBottom: nativeDefault.space.PX_8,
  paddingRight: nativeDefault.space.PX_8,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  flexDirection: "row",
  overflow: "hidden",
};
obj6.embedAccentBar = {
  width: 4,
  marginTop: -nativeDefault.space.PX_8,
  marginBottom: -nativeDefault.space.PX_8,
  alignSelf: "stretch",
};
let obj8 = {
  width: 4,
  marginTop: -nativeDefault.space.PX_8,
  marginBottom: -nativeDefault.space.PX_8,
  alignSelf: "stretch",
};
obj6.embedTextContainer = {
  flex: 1,
  gap: nativeDefault.space.PX_4,
  paddingVertical: nativeDefault.space.PX_4,
  paddingHorizontal: nativeDefault.space.PX_8,
};
let size = { borderRadius: nativeDefault.radii.xs, overflow: "hidden", height: 60, width: "end" };
obj6.embedMediaContainer = size;
obj6.embedMedia = { width: "100%", height: "100%" };
let closure_11 = createStyles.createStyles(obj6);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function NativeMessagePreviewContent(arg0) {
      const cResult = c.c(6);
      ({ message, lineClamp, maxHeight } = arg0);
      ({ gradientColors, gradientStyles } = useTruncatedGradientColorsDefault());
      if (cResult[0] === gradientColors) {
        if (cResult[1] === gradientStyles) {
          if (cResult[2] === lineClamp) {
            if (cResult[3] === maxHeight) {
              if (cResult[4] === message) {
                let tmp5 = cResult[5];
              }
              return tmp5;
            }
          }
        }
      }
      const tmp4 = useTruncatedGradientColorsDefault();
      const tmp6 = closure_1_8(View, {
        children: closure_1_8(ChannelRowPreview.NativeChannelRowPreview, {
          message,
          lineClamp,
          maxHeight,
          gradientStyles,
          gradientColors,
        }),
      });
      cResult[0] = gradientColors;
      cResult[1] = gradientStyles;
      cResult[2] = lineClamp;
      cResult[3] = maxHeight;
      cResult[4] = message;
      cResult[5] = tmp6;
      tmp5 = tmp6;
      const obj2 = {
        children: closure_1_8(ChannelRowPreview.NativeChannelRowPreview, {
          message,
          lineClamp,
          maxHeight,
          gradientStyles,
          gradientColors,
        }),
      };
    }
  : function NativeMessagePreviewContent(arg0) {
      ({ message, lineClamp, maxHeight } = arg0);
      const tmp = useTruncatedGradientColorsDefault();
      ({ gradientColors, gradientStyles } = tmp);
      return closure_1_8(View, {
        children: closure_1_8(ChannelRowPreview.NativeChannelRowPreview, {
          message,
          lineClamp,
          maxHeight,
          gradientStyles,
          gradientColors,
        }),
      });
    };
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SystemMessageText(text) {
      const cResult = c.c(4);
      text = text.text;
      const tmp4 = closure_10();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const messagePreviewTextVariant = InAppNotificationUtils.getMessagePreviewTextVariant();
        cResult[0] = messagePreviewTextVariant;
        let first = messagePreviewTextVariant;
        const tmpResult = InAppNotificationUtils;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === tmp4.italic) {
        if (cResult[2] === text) {
          let tmp7 = cResult[3];
        }
        return tmp7;
      }
      const tmp8 = closure_1_8(Text_Text.Text, {
        variant: first,
        color: "text-subtle",
        style: tmp4.italic,
        lineClamp,
        children: text,
      });
      cResult[1] = tmp4.italic;
      cResult[2] = text;
      cResult[3] = tmp8;
      tmp7 = tmp8;
      const obj2 = { variant: first, color: "text-subtle", style: tmp4.italic, lineClamp, children: text };
    }
  : function SystemMessageText(children) {
      const tmp = closure_10();
      const messagePreviewTextVariant = InAppNotificationUtils.getMessagePreviewTextVariant();
      return closure_1_8(Text_Text.Text, {
        variant: messagePreviewTextVariant,
        color: "text-subtle",
        style: tmp.italic,
        lineClamp,
        children: children.text,
      });
    };
let closure_13 = tmp4;
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? function EmbedMediaThumbnail(media) {
      const cResult = c.c(13);
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
        let tmp5 = obj2;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp3.embedMediaContainer) {
        if (cResult[3] === tmp5) {
          let tmp6 = cResult[4];
        }
        if (cResult[5] !== url) {
          const obj3 = { uri: url };
          cResult[5] = url;
          cResult[6] = obj3;
          let tmp7 = obj3;
        } else {
          tmp7 = cResult[6];
        }
        if (cResult[7] === tmp3.embedMedia) {
          if (cResult[8] === tmp7) {
            let tmp8 = cResult[9];
          }
          if (cResult[10] === tmp6) {
            if (cResult[11] === tmp8) {
              let tmp12 = cResult[12];
            }
            return tmp12;
          }
          const obj4 = { style: tmp6, children: tmp8 };
          const tmp15 = closure_1_8(View, obj4);
          cResult[10] = tmp6;
          cResult[11] = tmp8;
          cResult[12] = tmp15;
          tmp12 = tmp15;
        }
        const obj5 = { source: tmp7, style: tmp3.embedMedia, resizeMode: "contain" };
        const tmp11 = closure_1_8(FastImageDefault, obj5);
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
    }
  : function EmbedMediaThumbnail(media) {
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
      const obj = {
        style: null,
        children: closure_1_8(FastImageDefault, { source: { uri: url }, style: tmp.embedMedia, resizeMode: "contain" }),
      };
      const items = [tmp.embedMediaContainer, { aspectRatio: num }];
      obj.style = items;
      return closure_1_8(View, obj);
    };
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function EmbedCard(embed) {
      const cResult = c.c(27);
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
      if (cResult[0] !== embed.color) {
        let int2hslResult;
        if (null != embed.color) {
          if (16777215 !== embed.color) {
            int2hslResult = utils_ColorUtils.int2hsl(embed.color);
            const tmpResult = utils_ColorUtils;
          }
        }
        cResult[0] = embed.color;
        cResult[1] = int2hslResult;
        let tmp7 = int2hslResult;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] === tmp7) {
        if (cResult[3] === tmp4.embedAccentBar) {
          let tmp10 = cResult[4];
        }
        if (cResult[5] !== name) {
          let tmp15 = null != name;
          if (tmp15) {
            const obj2 = { variant: "text-xxs/normal", color: "text-subtle", lineClamp: 1, children: name };
            tmp15 = closure_1_8(Text_Text.Text, obj2);
          }
          cResult[5] = name;
          cResult[6] = tmp15;
          let tmp14 = tmp15;
        } else {
          tmp14 = cResult[6];
        }
        if (cResult[7] !== name1) {
          let tmp18 = null != name1;
          if (tmp18) {
            const obj3 = { variant: "text-xs/medium", color: "text-default", lineClamp: 1, children: name1 };
            tmp18 = closure_1_8(Text_Text.Text, obj3);
          }
          cResult[7] = name1;
          cResult[8] = tmp18;
          let tmp17 = tmp18;
        } else {
          tmp17 = cResult[8];
        }
        if (cResult[9] === tmp9) {
          if (cResult[10] === rawTitle) {
            let tmp20 = cResult[11];
          }
          if (cResult[12] !== embed.rawDescription) {
            let tmp24 = null != embed.rawDescription;
            if (tmp24) {
              const obj4 = {
                variant: "text-xs/medium",
                color: "text-default",
                lineClamp: 3,
                children: embed.rawDescription,
              };
              tmp24 = closure_1_8(Text_Text.Text, obj4);
            }
            cResult[12] = embed.rawDescription;
            cResult[13] = tmp24;
            let tmp23 = tmp24;
          } else {
            tmp23 = cResult[13];
          }
          if (cResult[14] === tmp4.embedTextContainer) {
            if (cResult[15] === tmp14) {
              if (cResult[16] === tmp17) {
                if (cResult[17] === tmp20) {
                  if (cResult[18] === tmp23) {
                    let tmp26 = cResult[19];
                  }
                  if (cResult[20] !== thumbnail) {
                    let tmp31 = null != thumbnail;
                    if (tmp31) {
                      const obj5 = { media: thumbnail };
                      tmp31 = closure_1_8(closure_14, obj5);
                    }
                    cResult[20] = thumbnail;
                    cResult[21] = tmp31;
                    let tmp30 = tmp31;
                  } else {
                    tmp30 = cResult[21];
                  }
                  if (cResult[22] === tmp4.embedContainer) {
                    if (cResult[23] === tmp10) {
                      if (cResult[24] === tmp26) {
                        if (cResult[25] === tmp30) {
                          let tmp34 = cResult[26];
                        }
                        return tmp34;
                      }
                    }
                  }
                  const obj6 = { style: tmp4.embedContainer, children: null };
                  const items = [tmp10, tmp26, tmp30];
                  obj6.children = items;
                  const tmp37 = React6(View, obj6);
                  cResult[22] = tmp4.embedContainer;
                  cResult[23] = tmp10;
                  cResult[24] = tmp26;
                  cResult[25] = tmp30;
                  cResult[26] = tmp37;
                  tmp34 = tmp37;
                }
              }
            }
          }
          const obj7 = { style: tmp4.embedTextContainer, children: null };
          const items1 = [tmp14, tmp17, tmp20, tmp23];
          obj7.children = items1;
          const tmp29 = React6(View, obj7);
          cResult[14] = tmp4.embedTextContainer;
          cResult[15] = tmp14;
          cResult[16] = tmp17;
          cResult[17] = tmp20;
          cResult[18] = tmp23;
          cResult[19] = tmp29;
          tmp26 = tmp29;
        }
        let tmp22Result = null != rawTitle;
        if (tmp22Result) {
          let num8 = 1;
          if (tmp9) {
            num8 = 3;
          }
          const obj8 = { variant: "text-xs/medium", color: "text-link", lineClamp: num8, children: rawTitle };
          tmp22Result = closure_1_8(Text_Text.Text, obj8);
        }
        cResult[9] = tmp9;
        cResult[10] = rawTitle;
        cResult[11] = tmp22Result;
        tmp20 = tmp22Result;
      }
      let tmp11 = null != tmp7;
      if (tmp11) {
        const obj9 = { style: null };
        const items2 = [tmp4.embedAccentBar];
        const obj10 = { backgroundColor: tmp7 };
        items2[1] = obj10;
        obj9.style = items2;
        tmp11 = closure_1_8(View, obj9);
      }
      cResult[2] = tmp7;
      cResult[3] = tmp4.embedAccentBar;
      cResult[4] = tmp11;
      tmp10 = tmp11;
    }
  : function EmbedCard(embed) {
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
      let int2hslResult;
      if (null != embed.color) {
        if (16777215 !== embed.color) {
          int2hslResult = utils_ColorUtils.int2hsl(embed.color);
        }
      }
      const obj2 = { style: tmp.embedContainer, children: null };
      let tmp9 = null != int2hslResult;
      if (tmp9) {
        const obj3 = { style: null };
        const items = [tmp.embedAccentBar];
        const obj4 = { backgroundColor: int2hslResult };
        items[1] = obj4;
        obj3.style = items;
        tmp9 = closure_1_8(View, obj3);
      }
      const items1 = [tmp9, ,];
      const obj5 = { style: tmp.embedTextContainer, children: null };
      let tmp11 = null != name;
      if (tmp11) {
        const obj6 = { variant: "text-xxs/normal", color: "text-subtle", lineClamp: 1, children: name };
        tmp11 = closure_1_8(Text_Text.Text, obj6);
      }
      const items2 = [tmp11, , ,];
      let tmp15 = null != name1;
      if (tmp15) {
        const obj7 = { variant: "text-xs/medium", color: "text-default", lineClamp: 1, children: name1 };
        tmp15 = closure_1_8(Text_Text.Text, obj7);
      }
      items2[1] = tmp15;
      let tmp20Result = null != rawTitle;
      if (tmp20Result) {
        let num3 = 1;
        if (null == name) {
          num3 = 1;
          if (null == name1) {
            num3 = 3;
          }
        }
        const obj8 = { variant: "text-xs/medium", color: "text-link", lineClamp: num3, children: rawTitle };
        tmp20Result = closure_1_8(Text_Text.Text, obj8);
      }
      items2[2] = tmp20Result;
      let tmp23 = null != embed.rawDescription;
      if (tmp23) {
        const obj9 = { variant: "text-xs/medium", color: "text-default", lineClamp: 3, children: embed.rawDescription };
        tmp23 = closure_1_8(Text_Text.Text, obj9);
      }
      items2[3] = tmp23;
      obj5.children = items2;
      items1[1] = React6(View, obj5);
      let tmp27 = null != thumbnail;
      if (tmp27) {
        const obj10 = { media: thumbnail };
        tmp27 = closure_1_8(closure_14, obj10);
      }
      items1[2] = tmp27;
      obj2.children = items1;
      return React6(View, obj2);
    };
ReactCompilerGating = fn(558);
let obj9 = {
  flex: 1,
  gap: nativeDefault.space.PX_4,
  paddingVertical: nativeDefault.space.PX_4,
  paddingHorizontal: nativeDefault.space.PX_8,
};
size = fn(2);
let result = size.fileFinishedImporting("modules/in_app_notifications/native/MessagePreviewText.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function MessagePreviewText(arg0) {
      const cResult = c.c(56);
      ({ message, lineClamp, maxHeight, showMessageAuthor } = arg0);
      const tmp4 = undefined !== showMessageAuthor && showMessageAuthor;
      const previewableMedia = usePreviewableMedia.usePreviewableMedia(message);
      const tmpResult = usePreviewableMedia;
      let tmp5 = null;
      if (tmp4) {
        tmp5 = message;
      }
      const nullableMessageAuthor = useMessageAuthor.useNullableMessageAuthor(tmp5);
      if (cResult[0] === nullableMessageAuthor) {
        if (cResult[1] === previewableMedia) {
          let tmp7 = cResult[2];
        }
        const previewableMediaText = usePreviewableMediaText.usePreviewableMediaText(tmp7);
        ({ text, secondaryText } = previewableMediaText);
        if (cResult[3] !== message) {
          const obj2 = { message };
          cResult[3] = message;
          cResult[4] = obj2;
          let tmp9 = obj2;
        } else {
          tmp9 = cResult[4];
        }
        const tmpResult5 = usePreviewableMediaText;
        const getInitialMessagePreview = useGetInitialMessagePreview.useGetInitialMessagePreview(tmp9);
        if (cResult[5] !== message.embeds) {
          const _Symbol = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            class H {
              constructor(arg0) {
                tmp = null != arg0.image || null != arg0.thumbnail;
                return tmp;
              }
            }
            cResult[7] = H;
          } else {
            class H {
              constructor(arg0) {
                tmp = null != arg0.image || null != arg0.thumbnail;
                return tmp;
              }
            }
          }
          const embeds = message.embeds;
          const found = embeds.filter(H);
          cResult[5] = message.embeds;
          cResult[6] = found;
        } else {
          class H {
            constructor(arg0) {
              tmp = null != arg0.image || null != arg0.thumbnail;
              return tmp;
            }
          }
          if (arr2.length > 0) {
            class H {
              constructor(arg0) {
                tmp = null != arg0.image || null != arg0.thumbnail;
                return tmp;
              }
            }
            if (tmp27.type === MessageEmbedTypes.MessageEmbedTypes.GIFV) {
              class H {
                constructor(arg0) {
                  tmp = null != arg0.image || null != arg0.thumbnail;
                  return tmp;
                }
              }
            }
            if (cResult[10] !== getInitialMessagePreview) {
              class H {
                constructor(arg0) {
                  tmp = null != arg0.image || null != arg0.thumbnail;
                  return tmp;
                }
              }
              const obj3 = { message: getInitialMessagePreview, lineClamp, maxHeight };
              const tmp32 = closure_1_8(closure_12, obj3);
              cResult[10] = getInitialMessagePreview;
              cResult[11] = tmp32;
            } else {
              class H {
                constructor(arg0) {
                  tmp = null != arg0.image || null != arg0.thumbnail;
                  return tmp;
                }
              }
            }
            if (cResult[12] !== tmp27) {
              class H {
                constructor(arg0) {
                  tmp = null != arg0.image || null != arg0.thumbnail;
                  return tmp;
                }
              }
              const obj4 = { embed: tmp27 };
              const tmp35 = closure_1_8(closure_15, obj4);
              cResult[12] = tmp27;
              cResult[13] = tmp35;
            } else {
              class H {
                constructor(arg0) {
                  tmp = null != arg0.image || null != arg0.thumbnail;
                  return tmp;
                }
              }
            }
            if (cResult[14] === tmp28) {
              class H {
                constructor(arg0) {
                  tmp = null != arg0.image || null != arg0.thumbnail;
                  return tmp;
                }
              }
              return tmp36;
            }
            const obj5 = { children: null };
            const items = [tmp28, tmp33];
            obj5.children = items;
            const tmp39 = React6(View, obj5);
            cResult[14] = tmp28;
            cResult[15] = tmp33;
            cResult[16] = tmp39;
            tmp36 = tmp39;
          } else {
            class H {
              constructor(arg0) {
                tmp = null != arg0.image || null != arg0.thumbnail;
                return tmp;
              }
            }
            if (isForwardMessageDefault(message)) {
              class H {
                constructor(arg0) {
                  tmp = null != arg0.image || null != arg0.thumbnail;
                  return tmp;
                }
              }
              let tmp15 = previewableMedia.length > 0;
              if (tmp15) {
                class H {
                  constructor(arg0) {
                    tmp = null != arg0.image || null != arg0.thumbnail;
                    return tmp;
                  }
                }
                tmp15 = tmp16 === usePreviewableMedia.PreviewableMediaTypes.GIF;
              }
              if (previewableMedia.length > 0) {
                class H {
                  constructor(arg0) {
                    tmp = null != arg0.image || null != arg0.thumbnail;
                    return tmp;
                  }
                }
                if (cResult[17] !== nullableMessageAuthor) {
                  class H {
                    constructor(arg0) {
                      tmp = null != arg0.image || null != arg0.thumbnail;
                      return tmp;
                    }
                  }
                  cResult[17] = nullableMessageAuthor;
                  cResult[18] = tmp22;
                } else {
                  class H {
                    constructor(arg0) {
                      tmp = null != arg0.image || null != arg0.thumbnail;
                      return tmp;
                    }
                  }
                  if (cResult[19] !== tmp21) {
                    class H {
                      constructor(arg0) {
                        tmp = null != arg0.image || null != arg0.thumbnail;
                        return tmp;
                      }
                    }
                    const obj6 = { text: tmp21 };
                    const tmp26 = closure_1_8(closure_13, obj6);
                    cResult[19] = tmp21;
                    cResult[20] = tmp26;
                    const tmp24 = tmp26;
                  } else {
                    class H {
                      constructor(arg0) {
                        tmp = null != arg0.image || null != arg0.thumbnail;
                        return tmp;
                      }
                    }
                  }
                  return tmp24;
                }
              }
              if (cResult[21] === getInitialMessagePreview) {
                class H {
                  constructor(arg0) {
                    tmp = null != arg0.image || null != arg0.thumbnail;
                    return tmp;
                  }
                }
              }
              const obj7 = { message: getInitialMessagePreview, lineClamp, maxHeight };
              const tmp20 = closure_1_8(closure_12, obj7);
              cResult[21] = getInitialMessagePreview;
              cResult[22] = lineClamp;
              cResult[23] = maxHeight;
              cResult[24] = tmp20;
            } else {
              class H {
                constructor(arg0) {
                  tmp = null != arg0.image || null != arg0.thumbnail;
                  return tmp;
                }
              }
            }
          }
        }
        const tmpResult6 = useGetInitialMessagePreview;
      }
      const obj8 = { previewableMedia, author: nullableMessageAuthor };
      cResult[0] = nullableMessageAuthor;
      cResult[1] = previewableMedia;
      cResult[2] = obj8;
      tmp7 = obj8;
      const tmpResult4 = useMessageAuthor;
    }
  : function MessagePreviewText(message) {
      message = message.message;
      ({ lineClamp, maxHeight, showMessageAuthor } = message);
      if (showMessageAuthor === undefined) {
        showMessageAuthor = false;
      }
      const previewableMedia = usePreviewableMedia.usePreviewableMedia(message);
      let tmp3 = null;
      if (showMessageAuthor) {
        tmp3 = message;
      }
      const nullableMessageAuthor = useMessageAuthor.useNullableMessageAuthor(tmp3);
      const previewableMediaText = usePreviewableMediaText.usePreviewableMediaText({
        previewableMedia,
        author: nullableMessageAuthor,
      });
      ({ text, secondaryText } = previewableMediaText);
      const tmpResult = usePreviewableMediaText;
      const getInitialMessagePreview = useGetInitialMessagePreview.useGetInitialMessagePreview({ message });
      const items = [message.embeds];
      const memo = noop.useMemo(() => {
        const embeds = message.embeds;
        return embeds.filter((image) => null != image.image || null != image.thumbnail);
      }, items);
      if (memo.length > 0) {
        const first = memo[0];
        if (first.type === MessageEmbedTypes.MessageEmbedTypes.GIFV) {
          if (null != text) {
            const obj3 = { text };
            let tmp43 = closure_1_8(closure_13, obj3);
          }
          return tmp43;
        }
        const obj4 = { children: null };
        const obj5 = { message: getInitialMessagePreview, lineClamp, maxHeight };
        const items1 = [closure_1_8(closure_12, obj5)];
        const obj6 = { embed: first };
        items1[1] = closure_1_8(closure_15, obj6);
        obj4.children = items1;
        tmp43 = React6(View, obj4);
      } else if (isForwardMessageDefault(message)) {
        let tmp29 = previewableMedia.length > 0;
        if (tmp29) {
          tmp29 = previewableMedia[0].type === usePreviewableMedia.PreviewableMediaTypes.GIF;
        }
        if (previewableMedia.length > 0) {
          if (null != nullableMessageAuthor) {
            const intl4 = util.intl;
            const obj7 = { username: nullableMessageAuthor.nick };
            let formatResult = intl4.format(util.t.sLDHDi, obj7);
          } else {
            const intl3 = util.intl;
            formatResult = intl3.string(util.t["9ddYKt"]);
          }
          const obj8 = { text: formatResult };
          return closure_1_8(closure_13, obj8);
        }
        const obj9 = { message: getInitialMessagePreview, lineClamp, maxHeight };
        return closure_1_8(closure_12, obj9);
      } else if (message.content.length > 0) {
        if (null != nullableMessageAuthor) {
          const channel = ChannelStore.getChannel(message.channel_id);
          InAppNotificationUtils;
          if (null != channel) {
            const obj10 = {
              channel,
              message,
              color: "text-default",
              layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COZY,
              variant: tmp24,
              muted: false,
              lineClamp,
            };
            return closure_1_8(ChannelRowPreview.ChannelRowPreview, obj10);
          }
        }
        const obj11 = { message: getInitialMessagePreview, lineClamp, maxHeight };
        return closure_1_8(closure_12, obj11);
      } else {
        if (previewableMedia.length > 0) {
          if (null !== text) {
            const obj12 = { text };
            const items2 = [closure_1_8(closure_13, obj12)];
            let tmp17Result = null !== secondaryText;
            if (tmp17Result) {
              const obj13 = {
                variant: "redesign/message-preview/medium",
                color: "text-link",
                lineClamp,
                children: secondaryText,
              };
              tmp17Result = closure_1_8(Text_Text.Text, obj13);
            }
            const obj14 = { children: null };
            items2[1] = tmp17Result;
            obj14.children = items2;
            return React6(View, obj14);
          }
        }
        if (null != message.poll) {
          if (null != nullableMessageAuthor) {
            const intl2 = util.intl;
            const obj15 = { username: nullableMessageAuthor.nick };
            let formatResult1 = intl2.format(util.t["1wtRlq"], obj15);
          } else {
            const intl = util.intl;
            formatResult1 = intl.string(util.t.n3shVJ);
          }
          const obj16 = { children: null };
          const obj17 = { text: formatResult1 };
          const items3 = [closure_1_8(closure_13, obj17)];
          const obj18 = {
            variant: "redesign/message-preview/medium",
            color: "text-default",
            lineClamp,
            children: message.poll.question.text,
          };
          items3[1] = closure_1_8(Text_Text.Text, obj18);
          obj16.children = items3;
          return React6(View, obj16);
        } else {
          const obj19 = { message, lineClamp, maxHeight };
          return closure_1_8(closure_12, obj19);
        }
      }
      const tmpResult3 = useGetInitialMessagePreview;
    };
export const SystemMessageText = tmp4;
