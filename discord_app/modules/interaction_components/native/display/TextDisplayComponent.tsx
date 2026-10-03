// discord_app/modules/interaction_components/native/display/TextDisplayComponent.tsx
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import MarkupUtilsDefault from "../../../markup/MarkupUtils.tsx";
import renderMessageMarkup from "../../../messages/renderMessageMarkup.tsx";
import handleMessagesTapLink from "../../../messages/native/handlers/handleMessagesTapLink.tsx";
import TextDisplayComponentViewNativeComponentDefault from "../../../../../discord_common/js/packages/rtn-codegen/js/TextDisplayComponentViewNativeComponent.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import SelectedChannelStore from "../../../../stores/SelectedChannelStore.tsx";

require = fn;
const renderOptions = fn(7794).TEXT_DISPLAY_COMPONENT_MARKDOWN_RENDER_OPTIONS;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/interaction_components/native/display/TextDisplayComponent.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = channelId(576).c(21);
      ({ type, id, content } = arg0);
      const obj = channelId(576);
      const componentContainerId = channelId(7795).useComponentContainerId();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        channelId = SelectedChannelStore.getChannelId();
        cResult[0] = channelId;
      } else {
        channelId = cResult[0];
      }
      _modDef38(null != channelId, "channelId not available in TextDisplayComponent");
      if (cResult[1] === content) {
        if (cResult[2] === id) {
          if (cResult[3] === type) {
            let tmp10 = cResult[4];
          }
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            let items = [AccessibilityStore];
            class I {
              constructor() {
                items = [,];
                ({ roleStyle: arr[0], alwaysShowLinkDecorations: arr[1] } = closure_1_5);
                return items;
              }
            }
            cResult[5] = items;
            cResult[6] = I;
            let tmp13 = I;
            let tmp12 = items;
          } else {
            tmp12 = cResult[5];
            tmp13 = cResult[6];
          }
          const tmpResult = tmp(504);
          [tmp17, tmp18] = tmp(504).useStateFromStoresArray(tmp12, tmp13);
          const AnimateEmoji = tmp(2028).AnimateEmoji;
          const setting = AnimateEmoji.useSetting();
          const _Symbol2 = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const items1 = [ChannelStore];
            class O {
              constructor() {
                return closure_6.getChannel(closure_0);
              }
            }
            cResult[7] = items1;
            cResult[8] = O;
            let tmp21 = O;
            let tmp20 = items1;
          } else {
            tmp20 = cResult[7];
            tmp21 = cResult[8];
          }
          const tmp16 = _slicedToArray(tmp(504).useStateFromStoresArray(tmp12, tmp13), 2);
          const stateFromStores = tmp(504).useStateFromStores(tmp20, tmp21);
          const tmpResult4 = tmp(504);
          const tmp24 = !tmp(7945).useShouldDisplaySpoilerObscurity(stateFromStores);
          if (cResult[9] === tmp18) {
            if (cResult[10] === setting) {
              if (cResult[11] === componentContainerId) {
                if (cResult[12] === tmp24) {
                  if (cResult[13] === tmp25) {
                    if (cResult[14] === tmp26) {
                      let tmp27 = cResult[15];
                    }
                    const _Symbol3 = Symbol;
                    class O {
                      constructor() {
                        return closure_6.getChannel(closure_0);
                      }
                    }
                    const _Symbol4 = Symbol;
                    if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                      cResult[17] = { width: "100%" };
                      class O {
                        constructor() {
                          return closure_6.getChannel(closure_0);
                        }
                      }
                      const obj3 = { width: "100%" };
                    } else {
                      const tmp30 = cResult[17];
                    }
                    if (cResult[18] === tmp10) {
                      if (cResult[19] === tmp27) {
                        let tmp31 = cResult[20];
                      }
                      return tmp31;
                    }
                    const obj4 = {
                      model: tmp10,
                      markdownTextRenderOptions: tmp27,
                      onTapLink: tmp29,
                      onLongPressLink: tmp(11203).contentHandlers.onLongPressLink,
                      onTapAttachmentLink: tmp(11203).contentHandlers.onTapAttachmentLink,
                      onLongPressAttachmentLink: tmp(11203).contentHandlers.onLongPressAttachmentLink,
                      onTapMention: tmp(11203).contentHandlers.onTapMention,
                      onTapTimestamp: tmp(11203).contentHandlers.onTapTimestamp,
                      onTapInlineCode: tmp(11203).contentHandlers.onTapInlineCode,
                      onTapEmoji: tmp(11203).contentHandlers.onTapEmoji,
                      style: tmp30,
                    };
                    const tmp34 = jsx(TextDisplayComponentViewNativeComponentDefault, {
                      model: tmp10,
                      markdownTextRenderOptions: tmp27,
                      onTapLink: tmp29,
                      onLongPressLink: tmp(11203).contentHandlers.onLongPressLink,
                      onTapAttachmentLink: tmp(11203).contentHandlers.onTapAttachmentLink,
                      onLongPressAttachmentLink: tmp(11203).contentHandlers.onLongPressAttachmentLink,
                      onTapMention: tmp(11203).contentHandlers.onTapMention,
                      onTapTimestamp: tmp(11203).contentHandlers.onTapTimestamp,
                      onTapInlineCode: tmp(11203).contentHandlers.onTapInlineCode,
                      onTapEmoji: tmp(11203).contentHandlers.onTapEmoji,
                      style: tmp30,
                    });
                    cResult[18] = tmp10;
                    cResult[19] = tmp27;
                    cResult[20] = tmp34;
                    tmp31 = tmp34;
                    const tmp8Result = TextDisplayComponentViewNativeComponentDefault;
                  }
                }
              }
            }
          }
          const obj5 = {
            containerId: componentContainerId,
            shouldAnimateEmoji: setting,
            shouldShowLinkDecorations: tmp18,
            shouldForceRevealSpoilers: tmp24,
            shouldShowRoleDot: "dot" === tmp17,
            shouldShowRoleOnName: "username" === tmp17,
          };
          cResult[9] = tmp18;
          cResult[10] = setting;
          cResult[11] = componentContainerId;
          cResult[12] = tmp24;
          cResult[13] = "dot" === tmp17;
          cResult[14] = "username" === tmp17;
          cResult[15] = obj5;
          tmp27 = obj5;
          const tmpResult5 = tmp(7945);
        }
      }
      const obj6 = { type, id, content: null };
      const obj2 = channelId(7795);
      const tmp8Result2 = MarkupUtilsDefault;
      obj6.content = tmp8Result2.parseToAST(
        content,
        true,
        channelId(7531).getInitialParserState({ channelId, renderOptions }),
      );
      const json = JSON.stringify(obj6);
      cResult[1] = content;
      cResult[2] = id;
      cResult[3] = type;
      cResult[4] = json;
      tmp10 = json;
      const obj7 = { channelId, renderOptions };
      const tmpResult6 = channelId(7531);
    }
  : (type) => {
      type = type.type;
      const id = type.id;
      const content = type.content;
      const componentContainerId = type(content[9]).useComponentContainerId();
      const channelId = SelectedChannelStore.getChannelId();
      id(content[10])(null != channelId, "channelId not available in TextDisplayComponent");
      let items = [type, id, content, channelId];
      const memo = noop.useMemo(() => {
        const obj = { type, id, content: null };
        const obj2 = MarkupUtilsDefault;
        obj.content = obj2.parseToAST(
          content,
          true,
          renderMessageMarkup.getInitialParserState({ channelId, renderOptions }),
        );
        return JSON.stringify(obj);
      }, items);
      let obj = type(content[9]);
      const items1 = [AccessibilityStore];
      let obj2 = type(content[13]);
      [tmp6, tmp7] = channelId(
        type(content[13]).useStateFromStoresArray(items1, () => {
          const items = [,];
          ({ roleStyle: arr[0], alwaysShowLinkDecorations: arr[1] } = AccessibilityStore);
          return items;
        }),
        2,
      );
      const AnimateEmoji = type(content[14]).AnimateEmoji;
      const setting = AnimateEmoji.useSetting();
      const tmp5 = channelId(
        type(content[13]).useStateFromStoresArray(items1, () => {
          const items = [,];
          ({ roleStyle: arr[0], alwaysShowLinkDecorations: arr[1] } = AccessibilityStore);
          return items;
        }),
        2,
      );
      const items2 = [ChannelStore];
      const stateFromStores = type(content[13]).useStateFromStores(items2, () => ChannelStore.getChannel(channelId));
      const obj3 = type(content[13]);
      const shouldDisplaySpoilerObscurity = type(content[15]).useShouldDisplaySpoilerObscurity(stateFromStores);
      const obj5 = {
        model: memo,
        markdownTextRenderOptions: {
          containerId: componentContainerId,
          shouldAnimateEmoji: setting,
          shouldShowLinkDecorations: tmp7,
          shouldForceRevealSpoilers: !shouldDisplaySpoilerObscurity,
          shouldShowRoleDot: "dot" === tmp6,
          shouldShowRoleOnName: "username" === tmp6,
        },
        onTapLink(nativeEvent) {
          const result = handleMessagesTapLink.handleMessagesTapURLLink(nativeEvent.nativeEvent.data, channelId);
        },
        onLongPressLink: null,
        onTapAttachmentLink: null,
        onLongPressAttachmentLink: null,
        onTapMention: null,
        onTapTimestamp: null,
        onTapInlineCode: null,
        onTapEmoji: null,
        style: null,
      };
      const obj4 = type(content[15]);
      const obj6 = {
        containerId: componentContainerId,
        shouldAnimateEmoji: setting,
        shouldShowLinkDecorations: tmp7,
        shouldForceRevealSpoilers: !shouldDisplaySpoilerObscurity,
        shouldShowRoleDot: "dot" === tmp6,
        shouldShowRoleOnName: "username" === tmp6,
      };
      obj5.onLongPressLink = type(content[18]).contentHandlers.onLongPressLink;
      obj5.onTapAttachmentLink = type(content[18]).contentHandlers.onTapAttachmentLink;
      obj5.onLongPressAttachmentLink = type(content[18]).contentHandlers.onLongPressAttachmentLink;
      obj5.onTapMention = type(content[18]).contentHandlers.onTapMention;
      obj5.onTapTimestamp = type(content[18]).contentHandlers.onTapTimestamp;
      obj5.onTapInlineCode = type(content[18]).contentHandlers.onTapInlineCode;
      obj5.onTapEmoji = type(content[18]).contentHandlers.onTapEmoji;
      obj5.style = { width: "100%" };
      return jsx(id(content[17]), {
        model: memo,
        markdownTextRenderOptions: {
          containerId: componentContainerId,
          shouldAnimateEmoji: setting,
          shouldShowLinkDecorations: tmp7,
          shouldForceRevealSpoilers: !shouldDisplaySpoilerObscurity,
          shouldShowRoleDot: "dot" === tmp6,
          shouldShowRoleOnName: "username" === tmp6,
        },
        onTapLink(nativeEvent) {
          const result = handleMessagesTapLink.handleMessagesTapURLLink(nativeEvent.nativeEvent.data, channelId);
        },
        onLongPressLink: null,
        onTapAttachmentLink: null,
        onLongPressAttachmentLink: null,
        onTapMention: null,
        onTapTimestamp: null,
        onTapInlineCode: null,
        onTapEmoji: null,
        style: null,
      });
    };
