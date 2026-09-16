// === Module 15835: TextDisplayComponent ===

// Module 15835 (TextDisplayComponent)
import MarkupUtilsDefault from "MarkupUtils" /* 4628 */;
import renderMessageMarkup from "renderMessageMarkup" /* 8004 */;
import handleMessagesTapLink from "handleMessagesTapLink" /* 11758 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4630 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2012 */;

require = fn;
let closure_8 = fn(8240).TEXT_DISPLAY_COMPONENT_MARKDOWN_RENDER_OPTIONS;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/interaction_components/native/display/TextDisplayComponent.tsx");

export default function TextDisplayComponent(type) {
  type = type.type;
  const id = type.id;
  const content = type.content;
  const componentContainerId = type(content[7]).useComponentContainerId();
  const channelId = SelectedChannelStore.getChannelId();
  id(content[8])(null != channelId, "channelId not available in TextDisplayComponent");
  let items = [type, id, content, channelId];
  const memo = noop.useMemo(() => {
    const obj = { type, id, content: null };
    const obj2 = MarkupUtilsDefault;
    obj.content = obj2.parseToAST(content, true, renderMessageMarkup.getInitialParserState({ channelId, renderOptions }));
    return JSON.stringify(obj);
  }, items);
  let obj = type(content[7]);
  const items1 = [AccessibilityStore];
  let obj2 = type(content[11]);
  [tmp6, tmp7] = channelId(type(content[11]).useStateFromStoresArray(items1, () => {
    const items = [, ];
    ({ roleStyle: arr[0], alwaysShowLinkDecorations: arr[1] } = AccessibilityStore);
    return items;
  }), 2);
  const AnimateEmoji = type(content[12]).AnimateEmoji;
  const setting = AnimateEmoji.useSetting();
  const tmp5 = channelId(type(content[11]).useStateFromStoresArray(items1, () => {
    const items = [, ];
    ({ roleStyle: arr[0], alwaysShowLinkDecorations: arr[1] } = AccessibilityStore);
    return items;
  }), 2);
  const items2 = [ChannelStore];
  const stateFromStores = type(content[11]).useStateFromStores(items2, () => ChannelStore.getChannel(channelId));
  const obj3 = type(content[11]);
  const shouldDisplaySpoilerObscurity = type(content[13]).useShouldDisplaySpoilerObscurity(stateFromStores);
  const obj5 = {
    model: memo,
    markdownTextRenderOptions: { containerId: componentContainerId, shouldAnimateEmoji: setting, shouldShowLinkDecorations: tmp7, shouldForceRevealSpoilers: !shouldDisplaySpoilerObscurity, shouldShowRoleDot: "dot" === tmp6, shouldShowRoleOnName: "username" === tmp6 },
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
    style: null
  };
  const obj4 = type(content[13]);
  const obj6 = { containerId: componentContainerId, shouldAnimateEmoji: setting, shouldShowLinkDecorations: tmp7, shouldForceRevealSpoilers: !shouldDisplaySpoilerObscurity, shouldShowRoleDot: "dot" === tmp6, shouldShowRoleOnName: "username" === tmp6 };
  obj5.onLongPressLink = type(content[16]).contentHandlers.onLongPressLink;
  obj5.onTapAttachmentLink = type(content[16]).contentHandlers.onTapAttachmentLink;
  obj5.onLongPressAttachmentLink = type(content[16]).contentHandlers.onLongPressAttachmentLink;
  obj5.onTapMention = type(content[16]).contentHandlers.onTapMention;
  obj5.onTapTimestamp = type(content[16]).contentHandlers.onTapTimestamp;
  obj5.onTapInlineCode = type(content[16]).contentHandlers.onTapInlineCode;
  obj5.onTapEmoji = type(content[16]).contentHandlers.onTapEmoji;
  obj5.style = { width: "100%" };
  return jsx(id(content[14]), {
    model: memo,
    markdownTextRenderOptions: { containerId: componentContainerId, shouldAnimateEmoji: setting, shouldShowLinkDecorations: tmp7, shouldForceRevealSpoilers: !shouldDisplaySpoilerObscurity, shouldShowRoleDot: "dot" === tmp6, shouldShowRoleOnName: "username" === tmp6 },
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
    style: null
  });
};