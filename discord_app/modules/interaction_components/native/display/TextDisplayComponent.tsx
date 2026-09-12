// discord_app/modules/interaction_components/native/display/TextDisplayComponent.tsx
import MarkupUtilsDefault from "../../../markup/MarkupUtils.tsx";
import renderMessageMarkup from "../../../messages/renderMessageMarkup.tsx";
import handleMessagesTapLink from "../../../messages/native/handlers/handleMessagesTapLink.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import SelectedChannelStore from "../../../../stores/SelectedChannelStore.tsx";

require = fn;
let closure_8 = fn(8228).TEXT_DISPLAY_COMPONENT_MARKDOWN_RENDER_OPTIONS;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/interaction_components/native/display/TextDisplayComponent.tsx");

export default function TextDisplayComponent(type) {
  type = type.type;
  const id = type.id;
  const content = type.content;
  let obj = type(content[7]);
  const componentContainerId = obj.useComponentContainerId();
  const channelId = SelectedChannelStore.getChannelId();
  id(content[8])(null != channelId, "channelId not available in TextDisplayComponent");
  let items = [type, id, content, channelId];
  const memo = noop.useMemo(() => {
    let obj = { type, id, content: null };
    const obj2 = MarkupUtilsDefault;
    obj = { channelId, renderOptions };
    obj.content = obj2.parseToAST(content, true, renderMessageMarkup.getInitialParserState(obj));
    return JSON.stringify(obj);
  }, items);
  const items1 = [AccessibilityStore];
  let obj2 = type(content[11]);
  [tmp6, tmp7] = channelId(
    type(content[11]).useStateFromStoresArray(items1, () => {
      const items = [,];
      ({ roleStyle: arr[0], alwaysShowLinkDecorations: arr[1] } = AccessibilityStore);
      return items;
    }),
    2,
  );
  const AnimateEmoji = type(content[12]).AnimateEmoji;
  const setting = AnimateEmoji.useSetting();
  const tmp5 = channelId(
    type(content[11]).useStateFromStoresArray(items1, () => {
      const items = [,];
      ({ roleStyle: arr[0], alwaysShowLinkDecorations: arr[1] } = AccessibilityStore);
      return items;
    }),
    2,
  );
  const items2 = [ChannelStore];
  const stateFromStores = type(content[11]).useStateFromStores(items2, () => ChannelStore.getChannel(channelId));
  const obj3 = type(content[11]);
  const shouldDisplaySpoilerObscurity = type(content[13]).useShouldDisplaySpoilerObscurity(stateFromStores);
  obj = {
    model: memo,
    markdownTextRenderOptions: null,
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
  obj = {
    containerId: componentContainerId,
    shouldAnimateEmoji: setting,
    shouldShowLinkDecorations: tmp7,
    shouldForceRevealSpoilers: !shouldDisplaySpoilerObscurity,
    shouldShowRoleDot: "dot" === tmp6,
    shouldShowRoleOnName: "username" === tmp6,
  };
  obj.markdownTextRenderOptions = obj;
  const obj4 = type(content[13]);
  obj.onLongPressLink = type(content[16]).contentHandlers.onLongPressLink;
  obj.onTapAttachmentLink = type(content[16]).contentHandlers.onTapAttachmentLink;
  obj.onLongPressAttachmentLink = type(content[16]).contentHandlers.onLongPressAttachmentLink;
  obj.onTapMention = type(content[16]).contentHandlers.onTapMention;
  obj.onTapTimestamp = type(content[16]).contentHandlers.onTapTimestamp;
  obj.onTapInlineCode = type(content[16]).contentHandlers.onTapInlineCode;
  obj.onTapEmoji = type(content[16]).contentHandlers.onTapEmoji;
  obj.style = { width: "100%" };
  return jsx(id(content[14]), {
    containerId: componentContainerId,
    shouldAnimateEmoji: setting,
    shouldShowLinkDecorations: tmp7,
    shouldForceRevealSpoilers: !shouldDisplaySpoilerObscurity,
    shouldShowRoleDot: "dot" === tmp6,
    shouldShowRoleOnName: "username" === tmp6,
  });
}
