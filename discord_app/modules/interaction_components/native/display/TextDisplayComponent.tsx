// discord_app/modules/interaction_components/native/display/TextDisplayComponent.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import MarkupUtilsDefault from "../../../markup/MarkupUtils.tsx";
import renderMessageMarkup from "../../../messages/renderMessageMarkup.tsx";
import InteractionComponentConstants from "../../InteractionComponentConstants.tsx";
import handleMessagesTapLink from "../../../messages/native/handlers/handleMessagesTapLink.tsx";
import TextDisplayComponentViewNativeComponentDefault from "../../../../../discord_common/js/packages/rtn-codegen/js/TextDisplayComponentViewNativeComponent.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import SelectedChannelStore from "../../../../stores/SelectedChannelStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const renderOptions = InteractionComponentConstants.TEXT_DISPLAY_COMPONENT_MARKDOWN_RENDER_OPTIONS;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let channelId;
      let content;
      let id;
      let obj7;
      let parseToAST;
      let tmp18;
      let tmp19;
      let tmpResult6;
      let type;
      let obj = channelId(576);
      const cResult = obj.c(21);
      ({ type, id, content } = arg0);
      const obj2 = channelId(7806);
      const componentContainerId = obj2.useComponentContainerId();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        channelId = SelectedChannelStore.getChannelId();
        cResult[0] = channelId;
      } else {
        channelId = cResult[0];
      }
      _modDef38(null != channelId, "channelId not available in TextDisplayComponent");
      if (cResult[1] === content) {
        if (cResult[2] === id) {
          let tmp10;
          let tmp14;
          let tmp13;
          let tmp22;
          let tmp21;
          if (cResult[3] === type) {
            tmp10 = cResult[4];
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
            tmp14 = I;
            tmp13 = items;
          } else {
            tmp13 = cResult[5];
            tmp14 = cResult[6];
          }
          const tmpResult = channelId(504);
          [tmp18, tmp19] = tmpResult.useStateFromStoresArray(tmp13, tmp14);
          _slicedToArray(tmpResult.useStateFromStoresArray(tmp13, tmp14), 2);
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
            tmp22 = O;
            tmp21 = items1;
          } else {
            tmp21 = cResult[7];
            tmp22 = cResult[8];
          }
          const tmpResult4 = channelId(504);
          const stateFromStores = tmpResult4.useStateFromStores(tmp21, tmp22);
          const tmpResult5 = channelId(7956);
          const tmp25 = !tmpResult5.useShouldDisplaySpoilerObscurity(stateFromStores);
          if (cResult[9] === tmp19) {
            if (cResult[10] === setting) {
              if (cResult[11] === componentContainerId) {
                if (cResult[12] === tmp25) {
                  if ((cResult[13] === "dot") === tmp18) {
                    let tmp28;
                    let tmp31;
                    if ((cResult[14] === "username") === tmp18) {
                      tmp28 = cResult[15];
                    }
                    const _Symbol3 = Symbol;
                    class O {
                      constructor() {
                        return closure_6.getChannel(closure_0);
                      }
                    }
                    const _Symbol4 = Symbol;
                    if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                      const obj3 = { width: "100%" };
                      cResult[17] = obj3;
                      class O {
                        constructor() {
                          return closure_6.getChannel(closure_0);
                        }
                      }
                    } else {
                      tmp31 = cResult[17];
                    }
                    if (cResult[18] === tmp10) {
                      let tmp32;
                      if (cResult[19] === tmp28) {
                        tmp32 = cResult[20];
                      }
                      return tmp32;
                    }
                    TextDisplayComponentViewNativeComponentDefault;
                    const tmp35 = (
                      <tmp8Result
                        model={tmp10}
                        markdownTextRenderOptions={tmp28}
                        onTapLink={tmp30}
                        onLongPressLink={channelId(11216).contentHandlers.onLongPressLink}
                        onTapAttachmentLink={channelId(11216).contentHandlers.onTapAttachmentLink}
                        onLongPressAttachmentLink={channelId(11216).contentHandlers.onLongPressAttachmentLink}
                        onTapMention={channelId(11216).contentHandlers.onTapMention}
                        onTapTimestamp={channelId(11216).contentHandlers.onTapTimestamp}
                        onTapInlineCode={channelId(11216).contentHandlers.onTapInlineCode}
                        onTapEmoji={channelId(11216).contentHandlers.onTapEmoji}
                        style={tmp31}
                      />
                    );
                    cResult[18] = tmp10;
                    cResult[19] = tmp28;
                    cResult[20] = tmp35;
                    tmp32 = tmp35;
                  }
                }
              }
            }
          }
          const obj5 = {
            containerId: componentContainerId,
            shouldAnimateEmoji: setting,
            shouldShowLinkDecorations: tmp19,
            shouldForceRevealSpoilers: tmp25,
            shouldShowRoleDot: "dot" === tmp18,
            shouldShowRoleOnName: "username" === tmp18,
          };
          cResult[9] = tmp19;
          cResult[10] = setting;
          cResult[11] = componentContainerId;
          cResult[12] = tmp25;
          cResult[13] = "dot" === tmp18;
          cResult[14] = "username" === tmp18;
          cResult[15] = obj5;
          tmp28 = obj5;
        }
      }
      const obj6 = { type, id, content: parseToAST(content, true, tmpResult6.getInitialParserState(obj7)) };
      parseToAST = MarkupUtilsDefault.parseToAST;
      MarkupUtilsDefault;
      obj7 = { channelId, renderOptions };
      tmpResult6 = channelId(7542);
      const json = stringify(obj6);
      cResult[1] = content;
      cResult[2] = id;
      cResult[3] = type;
      cResult[4] = json;
      tmp10 = json;
    }
  : (type) => {
      let tmp6;
      let tmp7;
      const f120958 = () => {
        const items = [,];
        ({ roleStyle: arr[0], alwaysShowLinkDecorations: arr[1] } = AccessibilityStore);
        return items;
      };
      type = type.type;
      const id = type.id;
      const content = type.content;
      let obj = type(content[9]);
      const componentContainerId = obj.useComponentContainerId();
      const channelId = SelectedChannelStore.getChannelId();
      id(content[10])(null != channelId, "channelId not available in TextDisplayComponent");
      let items = [type, id, content, channelId];
      const memo = react.useMemo(() => {
        let obj2;
        let obj3;
        let parseToAST;
        const obj = { type, id, content: parseToAST(content, true, obj2.getInitialParserState(obj3)) };
        parseToAST = MarkupUtilsDefault.parseToAST;
        MarkupUtilsDefault;
        obj2 = renderMessageMarkup;
        obj3 = { channelId, renderOptions };
        return stringify(obj);
      }, items);
      let obj2 = type(content[13]);
      const items1 = [AccessibilityStore];
      [tmp6, tmp7] = channelId(obj2.useStateFromStoresArray(items1, f120958), 2);
      channelId(obj2.useStateFromStoresArray(items1, f120958), 2);
      const AnimateEmoji = type(content[14]).AnimateEmoji;
      const setting = AnimateEmoji.useSetting();
      let obj3 = type(content[13]);
      const items2 = [ChannelStore];
      const stateFromStores = obj3.useStateFromStores(items2, () => ChannelStore.getChannel(channelId));
      const obj4 = type(content[15]);
      const shouldDisplaySpoilerObscurity = obj4.useShouldDisplaySpoilerObscurity(stateFromStores);
      const obj6 = {
        containerId: componentContainerId,
        shouldAnimateEmoji: setting,
        shouldShowLinkDecorations: tmp7,
        shouldForceRevealSpoilers: !shouldDisplaySpoilerObscurity,
        shouldShowRoleDot: "dot" === tmp6,
        shouldShowRoleOnName: "username" === tmp6,
      };
      id(content[17]);
      return (
        <tmp11
          model={memo}
          markdownTextRenderOptions={obj6}
          onTapLink={function onTapLink(nativeEvent) {
            const data = nativeEvent.nativeEvent.data;
            const obj = handleMessagesTapLink;
            const result = obj.handleMessagesTapURLLink(data, channelId);
          }}
          onLongPressLink={type(content[18]).contentHandlers.onLongPressLink}
          onTapAttachmentLink={type(content[18]).contentHandlers.onTapAttachmentLink}
          onLongPressAttachmentLink={type(content[18]).contentHandlers.onLongPressAttachmentLink}
          onTapMention={type(content[18]).contentHandlers.onTapMention}
          onTapTimestamp={type(content[18]).contentHandlers.onTapTimestamp}
          onTapInlineCode={type(content[18]).contentHandlers.onTapInlineCode}
          onTapEmoji={type(content[18]).contentHandlers.onTapEmoji}
          style={{ width: "100%" }}
        />
      );
    };
let result = size.fileFinishedImporting("modules/interaction_components/native/display/TextDisplayComponent.tsx");

export default tmp2;
