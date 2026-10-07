// discord_app/modules/icymi/native/ICYMIMessageRowPreview.tsx
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import UserSettings from "../../user_settings/UserSettings.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import isForwardMessageDefault from "../../forwarding/isForwardMessage.tsx";
import ChannelListLayoutTypes from "../../main_tabs_v2/ChannelListLayoutTypes.tsx";
import RowGeneratorDefault from "../../messages/native/renderer/RowGenerator.tsx";
import RenderMessageOptionsContext from "../../messages/native/renderer/RenderMessageOptionsContext.tsx";
import RowGeneratorTypes from "../../messages/native/renderer/RowGeneratorTypes.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = ["message", "messageOptions"];
let closure_4 = ["message", "messageOptions"];
let closure_5 = ["message", "messageOptions"];
const MessageEmbedTypes = fn(1085).MessageEmbedTypes;
const jsx = fn(21).jsx;
fn(558);
let ReactCompilerGating = fn(558);
const memoResult = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = c.c(18);
        if (cResult[0] !== arg0) {
          ({ message, messageOptions } = arg0);
          const tmp8 = _objectWithoutProperties(arg0, closure_3);
          cResult[0] = arg0;
          cResult[1] = message;
          cResult[2] = messageOptions;
          cResult[3] = tmp8;
          let tmp5 = tmp8;
          let obj2 = message;
        } else {
          obj2 = cResult[1];
          tmp5 = cResult[3];
        }
        if (cResult[4] !== obj2) {
          const result = obj2.set("content", null);
          const _Symbol = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function v(type) {
              type = type.type;
              return type === constants.IMAGE || type === constants.GIFV;
            };
            cResult[7] = fn;
            let tmp12 = fn;
          } else {
            tmp12 = cResult[7];
          }
          const embeds = result.embeds;
          const result1 = result.set("embeds", embeds.filter(tmp12));
          const _Symbol2 = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            class M {
              constructor(arg0) {
                obj = closure_1_0(closure_1_2[6]);
                return obj.isMediaAttachment(arg0);
              }
            }
            cResult[8] = M;
          } else {
            class M {
              constructor(arg0) {
                obj = closure_1_0(closure_1_2[6]);
                return obj.isMediaAttachment(arg0);
              }
            }
          }
          const attachments = result1.attachments;
          const result2 = result1.set("attachments", attachments.filter(M));
          const result3 = result2.set("editedTimestamp", null);
          cResult[4] = obj2;
          cResult[5] = result2;
          cResult[6] = result3;
        } else {
          class M {
            constructor(arg0) {
              obj = closure_1_0(closure_1_2[6]);
              return obj.isMediaAttachment(arg0);
            }
          }
          const muted = tmp5.muted;
          if (muted == null) {
            class M {
              constructor(arg0) {
                obj = closure_1_0(closure_1_2[6]);
                return obj.isMediaAttachment(arg0);
              }
            }
          }
          if (cResult[9] === cResult[6]) {
            class M {
              constructor(arg0) {
                obj = closure_1_0(closure_1_2[6]);
                return obj.isMediaAttachment(arg0);
              }
            }
          }
          const obj3 = {
            message: cResult[6],
            layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COZY,
            muted,
            lineClamp: tmp5.lineClamp,
          };
          cResult[9] = cResult[6];
          cResult[10] = tmp5.lineClamp;
          cResult[11] = muted;
          cResult[12] = obj3;
        }
      }
    : (message) => {
        message = message.message;
        const merged = Object.assign(message, Object.assign({ message: 0, messageOptions: 0 }));
        const items = [message];
        const memo = noop.useMemo(() => {
          const result = message.set("content", null);
          const embeds = result.embeds;
          const result1 = result.set(
            "embeds",
            embeds.filter((type) => {
              type = type.type;
              return type === constants.IMAGE || type === constants.GIFV;
            }),
          );
          const attachments = result1.attachments;
          const result2 = result1.set(
            "attachments",
            attachments.filter((item) => message(memo[6]).isMediaAttachment(item)),
          );
          return result2.set("editedTimestamp", null);
        }, items);
        const items1 = [memo, ,];
        ({ muted: arr2[1], lineClamp: arr2[2] } = merged);
        let obj = {};
        const merged1 = Object.assign(
          noop.useMemo(() => {
            const obj = {
              message: memo,
              layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COZY,
              muted: null,
              lineClamp: null,
            };
            let flag = merged.muted;
            if (flag == null) {
              flag = false;
            }
            obj.muted = flag;
            obj.lineClamp = merged.lineClamp;
            return obj;
          }, items1),
        );
        const obj2 = {};
        const merged2 = Object.assign(message(memo[8]).DEFAULT_OPTIONS);
        obj2.ignoreMentioned = true;
        obj2.renderReplies = false;
        obj2.renderThreadEmbeds = false;
        obj2.renderReactions = false;
        obj2.renderEmbeds = true;
        obj2.gifAutoPlay = true;
        obj2.animateEmoji = true;
        obj2.renderPolls = true;
        obj2.inlineEmbedMedia = true;
        obj2.renderForumPostActions = false;
        obj2.renderAttachments = true;
        const merged3 = Object.assign(message.messageOptions);
        obj.messageOptions = obj2;
        return <closure_10 />;
      },
);
ReactCompilerGating = fn(558);
const memoResult1 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = c.c(18);
        if (cResult[0] !== arg0) {
          ({ message, messageOptions } = arg0);
          const tmp8 = _objectWithoutProperties(arg0, closure_4);
          cResult[0] = arg0;
          cResult[1] = message;
          cResult[2] = messageOptions;
          cResult[3] = tmp8;
          let tmp5 = tmp8;
          let obj2 = message;
        } else {
          obj2 = cResult[1];
          tmp5 = cResult[3];
        }
        if (cResult[4] !== obj2) {
          const result = obj2.set("content", null);
          const _Symbol = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function v(type) {
              type = type.type;
              return !(type === constants.IMAGE || type === constants.GIFV);
            };
            cResult[7] = fn;
            let tmp12 = fn;
          } else {
            tmp12 = cResult[7];
          }
          const embeds = result.embeds;
          const found = embeds.filter(tmp12);
          let num7 = 0;
          const result1 = result.set("embeds", found.slice(0, 1));
          const _Symbol2 = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            class M {
              constructor(arg0) {
                obj = closure_1_0(closure_1_2[6]);
                return !obj.isMediaAttachment(arg0);
              }
            }
            cResult[8] = M;
          } else {
            class M {
              constructor(arg0) {
                obj = closure_1_0(closure_1_2[6]);
                return !obj.isMediaAttachment(arg0);
              }
            }
          }
          const attachments = result1.attachments;
          const found1 = attachments.filter(M);
          const result2 = result1.set("attachments", found1.slice(num7, 1));
          const result3 = result2.set("editedTimestamp", null);
          cResult[4] = obj2;
          cResult[5] = result2;
          num7 = 6;
          cResult[6] = result3;
        } else {
          class M {
            constructor(arg0) {
              obj = closure_1_0(closure_1_2[6]);
              return !obj.isMediaAttachment(arg0);
            }
          }
          const muted = tmp5.muted;
          if (muted == null) {
            class M {
              constructor(arg0) {
                obj = closure_1_0(closure_1_2[6]);
                return !obj.isMediaAttachment(arg0);
              }
            }
          }
          if (cResult[9] === cResult[6]) {
            class M {
              constructor(arg0) {
                obj = closure_1_0(closure_1_2[6]);
                return !obj.isMediaAttachment(arg0);
              }
            }
          }
          const obj3 = {
            message: cResult[6],
            layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COZY,
            muted,
            lineClamp: tmp5.lineClamp,
          };
          cResult[9] = cResult[6];
          cResult[10] = tmp5.lineClamp;
          cResult[11] = muted;
          cResult[12] = obj3;
        }
      }
    : (message) => {
        message = message.message;
        const merged = Object.assign(message, Object.assign({ message: 0, messageOptions: 0 }));
        const items = [message];
        const memo = noop.useMemo(() => {
          const result = message.set("content", null);
          const embeds = result.embeds;
          const found = embeds.filter((type) => {
            type = type.type;
            return !(type === constants.IMAGE || type === constants.GIFV);
          });
          const result1 = result.set("embeds", found.slice(0, 1));
          const attachments = result1.attachments;
          const found1 = attachments.filter((item) => !message(memo[6]).isMediaAttachment(item));
          const result2 = result1.set("attachments", found1.slice(0, 1));
          return result2.set("editedTimestamp", null);
        }, items);
        const items1 = [memo, ,];
        ({ muted: arr2[1], lineClamp: arr2[2] } = merged);
        let obj = {};
        const merged1 = Object.assign(
          noop.useMemo(() => {
            const obj = {
              message: memo,
              layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COZY,
              muted: null,
              lineClamp: null,
            };
            let flag = merged.muted;
            if (flag == null) {
              flag = false;
            }
            obj.muted = flag;
            obj.lineClamp = merged.lineClamp;
            return obj;
          }, items1),
        );
        const obj2 = {};
        const merged2 = Object.assign(message(memo[8]).DEFAULT_OPTIONS);
        obj2.ignoreMentioned = true;
        obj2.renderReplies = false;
        obj2.renderThreadEmbeds = false;
        obj2.renderReactions = false;
        obj2.renderEmbeds = true;
        obj2.renderAttachments = true;
        const merged3 = Object.assign(message.messageOptions);
        obj.messageOptions = obj2;
        return <closure_10 />;
      },
);
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = lineClamp(576).c(17);
      ({ message, lineClamp } = arg0);
      ({ messageSizeCacheRef, messageOptions, maxHeight, pointerEvents } = arg0);
      let str = "none";
      if (undefined !== pointerEvents) {
        str = pointerEvents;
      }
      const tmp5 = useThemeDefault();
      if (cResult[0] !== tmp5) {
        const obj2 = { seeMoreLabelColor: tmp4(587).colors.TEXT_DEFAULT };
        const tmp7 = lineClamp(4896).createNativeStyleProperties(obj2)(tmp5);
        cResult[0] = tmp5;
        cResult[1] = tmp7;
        let tmp6 = tmp7;
        const tmpResult = lineClamp(4896);
      } else {
        tmp6 = cResult[1];
      }
      importDefault = tmp6;
      if (cResult[2] === lineClamp) {
        if (cResult[3] === tmp6) {
          let tmp8 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const RenderEmbeds = lineClamp(2028).RenderEmbeds;
          const setting = RenderEmbeds.getSetting();
          cResult[5] = setting;
          let tmp10 = setting;
        } else {
          tmp10 = cResult[5];
        }
        const _Symbol2 = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const InlineEmbedMedia = lineClamp(2028).InlineEmbedMedia;
          const setting1 = InlineEmbedMedia.getSetting();
          cResult[6] = setting1;
          let tmp12 = setting1;
        } else {
          tmp12 = cResult[6];
        }
        const _Symbol3 = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const InlineAttachmentMedia = lineClamp(2028).InlineAttachmentMedia;
          const setting2 = InlineAttachmentMedia.getSetting();
          cResult[7] = setting2;
          let tmp14 = setting2;
        } else {
          tmp14 = cResult[7];
        }
        if (cResult[8] !== messageOptions) {
          const obj4 = new tmp4(7602)();
          const obj3 = {
            renderEmbeds: tmp10,
            inlineEmbedMedia: tmp12,
            inlineAttachmentMedia: tmp14,
            renderReactions: false,
            animateEmoji: false,
            gifAutoPlay: false,
            renderReplies: false,
            renderCodedLinks: false,
            renderGiftCode: false,
            renderActivityInviteEmbed: false,
            renderThreadEmbeds: false,
            renderForumPostActions: false,
            ignoreMentioned: true,
            enableSwipeActions: false,
            renderExecutedCommands: false,
            useAlternateEmbedColors: true,
          };
          const merged = Object.assign(messageOptions);
          obj4.setOptions(obj3);
          cResult[8] = messageOptions;
          cResult[9] = obj4;
          let tmp16 = obj4;
        } else {
          tmp16 = cResult[9];
        }
        if (cResult[10] === maxHeight) {
          if (cResult[11] === message) {
            if (cResult[12] === messageSizeCacheRef) {
              if (cResult[13] === tmp8) {
                if (cResult[14] === str) {
                  if (cResult[15] === tmp16) {
                    let tmp24 = cResult[16];
                  }
                  return tmp24;
                }
              }
            }
          }
        }
        const obj5 = {
          pointerEvents: str,
          horizontalOffset: 0,
          modifyRow: tmp8,
          message,
          rowGenerator: tmp16,
          messageSizeCacheRef,
          maxHeight: null,
        };
        class M {
          constructor(arg0) {
            tmp = closure_0;
            tmp2 = closure_2;
            arg0.contextType = closure_0(closure_2[13]).MessageContextType.SEARCH;
            if (null != lineClamp) {
              obj = { numberOfLines: null, expandable: false, seeMoreLabel: null, seeMoreLabelColor: null };
              obj.numberOfLines = tmp3;
              intl = tmp(tmp2[14]).intl;
              obj.seeMoreLabel = intl.string(tmp(tmp2[14]).t.qCozu3);
              tmp4 = closure_1;
              obj.seeMoreLabelColor = closure_1.seeMoreLabelColor;
              arg0.truncation = obj;
            }
            return;
          }
        }
        const tmp26 = jsx(tmp4(8336), {
          pointerEvents: str,
          horizontalOffset: 0,
          modifyRow: tmp8,
          message,
          rowGenerator: tmp16,
          messageSizeCacheRef,
          maxHeight: null,
        });
        cResult[10] = maxHeight;
        cResult[11] = message;
        cResult[12] = messageSizeCacheRef;
        cResult[13] = tmp8;
        cResult[14] = str;
        cResult[15] = tmp16;
        cResult[16] = tmp26;
        tmp24 = tmp26;
      }
      class M {
        constructor(arg0) {
          tmp = closure_0;
          tmp2 = closure_2;
          arg0.contextType = closure_0(closure_2[13]).MessageContextType.SEARCH;
          if (null != lineClamp) {
            obj = { numberOfLines: null, expandable: false, seeMoreLabel: null, seeMoreLabelColor: null };
            obj.numberOfLines = tmp3;
            intl = tmp(tmp2[14]).intl;
            obj.seeMoreLabel = intl.string(tmp(tmp2[14]).t.qCozu3);
            tmp4 = closure_1;
            obj.seeMoreLabelColor = closure_1.seeMoreLabelColor;
            arg0.truncation = obj;
          }
          return;
        }
      }
      cResult[2] = lineClamp;
      cResult[3] = tmp6;
      cResult[4] = M;
      tmp8 = M;
      let obj = lineClamp(576);
    }
  : (pointerEvents) => {
      ({ lineClamp: require, messageOptions } = pointerEvents);
      let str = pointerEvents.pointerEvents;
      ({ message, messageSizeCacheRef, maxHeight } = pointerEvents);
      if (str === undefined) {
        str = "none";
      }
      const tmp = messageOptions(4797)();
      let obj = createStyles;
      dependencyMap = obj.createNativeStyleProperties({ seeMoreLabelColor: messageOptions(587).colors.TEXT_DEFAULT })(
        tmp,
      );
      const RenderEmbeds = UserSettings.RenderEmbeds;
      const setting = RenderEmbeds.getSetting();
      const InlineEmbedMedia = UserSettings.InlineEmbedMedia;
      const setting1 = InlineEmbedMedia.getSetting();
      const InlineAttachmentMedia = UserSettings.InlineAttachmentMedia;
      const setting2 = InlineAttachmentMedia.getSetting();
      const items = [setting, setting1, setting2, messageOptions];
      const memo = noop.useMemo(() => {
        const obj = new RowGeneratorDefault();
        const merged = Object.assign(messageOptions);
        obj.setOptions({
          renderEmbeds: setting,
          inlineEmbedMedia: setting1,
          inlineAttachmentMedia: setting2,
          renderReactions: false,
          animateEmoji: false,
          gifAutoPlay: false,
          renderReplies: false,
          renderCodedLinks: false,
          renderGiftCode: false,
          renderActivityInviteEmbed: false,
          renderThreadEmbeds: false,
          renderForumPostActions: false,
          ignoreMentioned: true,
          enableSwipeActions: false,
          renderExecutedCommands: false,
          useAlternateEmbedColors: true,
        });
        return obj;
      }, items);
      return jsx(messageOptions(8336), {
        pointerEvents: str,
        horizontalOffset: 0,
        modifyRow(arg0) {
          arg0.contextType = RowGeneratorTypes.MessageContextType.SEARCH;
          if (null != _require) {
            const obj = { numberOfLines: tmp3, expandable: false, seeMoreLabel: null, seeMoreLabelColor: null };
            const intl = util.intl;
            obj.seeMoreLabel = intl.string(util.t.qCozu3);
            obj.seeMoreLabelColor = seeMoreLabelColor.seeMoreLabelColor;
            arg0.truncation = obj;
          }
        },
        message,
        rowGenerator: memo,
        messageSizeCacheRef,
        maxHeight,
      });
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/ICYMIMessageRowPreview.tsx");

export const MediaOnlyRowPreview = memoResult;
export const NonMediaEmbedsRowPreview = memoResult1;
export const MessageRowPreview = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = c.c(17);
        if (cResult[0] !== arg0) {
          ({ message, messageOptions } = arg0);
          const tmp9 = _objectWithoutProperties(arg0, closure_5);
          cResult[0] = arg0;
          cResult[1] = message;
          cResult[2] = messageOptions;
          cResult[3] = tmp9;
          let tmp6 = tmp9;
          let tmp5 = messageOptions;
          let tmp4 = message;
        } else {
          tmp4 = cResult[1];
          tmp5 = cResult[2];
          tmp6 = cResult[3];
        }
        let flag = tmp6.muted;
        if (flag == null) {
          flag = false;
        }
        if (cResult[4] === tmp4) {
          if (cResult[5] === tmp6.lineClamp) {
            if (cResult[6] === tmp6.pointerEvents) {
              if (cResult[7] === flag) {
                let tmp10 = cResult[8];
              }
              if (cResult[9] !== tmp4) {
                const tmp13 = isForwardMessageDefault(tmp4);
                cResult[9] = tmp4;
                cResult[10] = tmp13;
                let tmp11 = tmp13;
              } else {
                tmp11 = cResult[10];
              }
              if (cResult[11] === tmp11) {
                if (cResult[12] === tmp5) {
                  let tmp14 = cResult[13];
                }
                if (cResult[14] === tmp10) {
                  if (cResult[15] === tmp14) {
                    let tmp20 = cResult[16];
                  }
                  return tmp20;
                }
                const obj2 = {};
                const merged = Object.assign(tmp10);
                obj2.messageOptions = tmp14;
                obj2.seeMoreLabel = "...";
                const tmp26 = <closure_10 />;
                cResult[14] = tmp10;
                cResult[15] = tmp14;
                cResult[16] = tmp26;
                tmp20 = tmp26;
              }
              const obj3 = {};
              const merged1 = Object.assign(RenderMessageOptionsContext.DEFAULT_OPTIONS);
              obj3.ignoreMentioned = true;
              obj3.renderReplies = false;
              obj3.renderThreadEmbeds = false;
              obj3.renderReactions = false;
              obj3.gifAutoPlay = true;
              obj3.animateEmoji = true;
              obj3.renderPolls = true;
              obj3.renderForumPostActions = false;
              obj3.renderAttachments = tmp11;
              obj3.renderEmbeds = tmp11;
              obj3.inlineEmbedMedia = tmp11;
              const merged2 = Object.assign(tmp5);
              cResult[11] = tmp11;
              cResult[12] = tmp5;
              cResult[13] = obj3;
              tmp14 = obj3;
            }
          }
        }
        const obj4 = {
          message: tmp4,
          lineClamp: tmp6.lineClamp,
          layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COZY,
          muted: flag,
          pointerEvents: tmp6.pointerEvents,
        };
        cResult[4] = tmp4;
        cResult[5] = tmp6.lineClamp;
        cResult[6] = tmp6.pointerEvents;
        cResult[7] = flag;
        cResult[8] = obj4;
        tmp10 = obj4;
      }
    : (message) => {
        message = message.message;
        const merged = Object.assign(message, Object.assign({ message: 0, messageOptions: 0 }));
        const items = [message, , ,];
        ({ lineClamp: arr[1], muted: arr[2], pointerEvents: arr[3] } = merged);
        const memo = noop.useMemo(() => {
          const obj = {
            message,
            lineClamp: merged.lineClamp,
            layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COZY,
            muted: null,
            pointerEvents: null,
          };
          let flag = merged.muted;
          if (flag == null) {
            flag = false;
          }
          obj.muted = flag;
          obj.pointerEvents = merged.pointerEvents;
          return obj;
        }, items);
        const tmp3 = merged(6815)(message);
        let obj = {};
        const merged1 = Object.assign(memo);
        const obj2 = {};
        const merged2 = Object.assign(message(7604).DEFAULT_OPTIONS);
        obj2.ignoreMentioned = true;
        obj2.renderReplies = false;
        obj2.renderThreadEmbeds = false;
        obj2.renderReactions = false;
        obj2.gifAutoPlay = true;
        obj2.animateEmoji = true;
        obj2.renderPolls = true;
        obj2.renderForumPostActions = false;
        obj2.renderAttachments = tmp3;
        obj2.renderEmbeds = tmp3;
        obj2.inlineEmbedMedia = tmp3;
        const merged3 = Object.assign(message.messageOptions);
        obj.messageOptions = obj2;
        obj.seeMoreLabel = "...";
        return <closure_10 />;
      },
);
