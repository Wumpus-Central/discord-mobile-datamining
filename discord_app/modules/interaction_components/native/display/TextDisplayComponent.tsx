// discord_app/modules/interaction_components/native/display/TextDisplayComponent.tsx
import _slicedToArray from "_slicedToArray";
import "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import handleConnectionOpen from "handleConnectionOpen";
import { TEXT_DISPLAY_COMPONENT_MARKDOWN_RENDER_OPTIONS as closure_6 } from "TEXT_DISPLAY_COMPONENT_MARKDOWN_RENDER_OPTIONS";
import { jsx } from "jsxProd";
import { 00038__ } from "../../../../../_runtime/metro/00038__.js";
import { __INTERNAL_VIEW_CONFIG } from "../../../../../discord_common/js/packages/rtn-codegen/js/TextDisplayComponentViewNativeComponent.tsx";

const require = arg1;
let result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/interaction_components/native/display/TextDisplayComponent.tsx");

export default function TextDisplayComponent(content) {
  let tmp6;
  let tmp7;
  let obj = channelId(8263);
  const componentContainerId = obj.useComponentContainerId();
  channelId = channelId.getChannelId();
  00038__(null != channelId, "channelId not available in TextDisplayComponent");
  let obj1 = require("../../../markup/MarkupUtils.tsx") /* get defaultRules */;
  let obj2 = channelId(8248);
  obj = { channelId, renderOptions: closure_6 };
  const parseToASTResult = obj1.parseToAST(content.content, true, obj2.getInitialParserState(obj));
  let items = [maybeApplyNoTextColorForLightCustomTheme];
  const obj5 = channelId(589);
  [tmp6, tmp7] = callback(channelId(589).useStateFromStoresArray(items, () => {
    const items = [, ];
    ({ roleStyle: arr[0], alwaysShowLinkDecorations: arr[1] } = maybeApplyNoTextColorForLightCustomTheme);
    return items;
  }), 2);
  const AnimateEmoji = channelId(4034).AnimateEmoji;
  const setting = AnimateEmoji.useSetting();
  obj = { model: null, markdownTextRenderOptions: null, onTapLink: null, onLongPressLink: null, onTapAttachmentLink: null, onLongPressAttachmentLink: null, onTapMention: null, onTapTimestamp: null, onTapInlineCode: null, onTapEmoji: null, style: null };
  obj1 = {};
  const tmp5 = callback(channelId(589).useStateFromStoresArray(items, () => {
    const items = [, ];
    ({ roleStyle: arr[0], alwaysShowLinkDecorations: arr[1] } = maybeApplyNoTextColorForLightCustomTheme);
    return items;
  }), 2);
  const merged = Object.assign(content);
  obj1.content = parseToASTResult;
  obj[0] = obj1;
  obj2 = { containerId: componentContainerId, shouldAnimateEmoji: setting, shouldShowLinkDecorations: tmp7, shouldShowRoleDot: "dot" === tmp6, shouldShowRoleOnName: "username" === tmp6 };
  obj[1] = obj2;
  obj[2] = function onTapLink(nativeEvent) {
    const result = channelId(outer1_2[13]).handleMessagesTapURLLink(nativeEvent.nativeEvent.data, channelId);
  };
  obj[3] = channelId(11032).contentHandlers.onLongPressLink;
  obj[4] = channelId(11032).contentHandlers.onTapAttachmentLink;
  obj[5] = channelId(11032).contentHandlers.onLongPressAttachmentLink;
  obj[6] = channelId(11032).contentHandlers.onTapMention;
  obj[7] = channelId(11032).contentHandlers.onTapTimestamp;
  obj[8] = channelId(11032).contentHandlers.onTapInlineCode;
  obj[9] = channelId(11032).contentHandlers.onTapEmoji;
  obj[10] = { width: "100%" };
  return jsx(__INTERNAL_VIEW_CONFIG, { model: null, markdownTextRenderOptions: null, onTapLink: null, onLongPressLink: null, onTapAttachmentLink: null, onLongPressAttachmentLink: null, onTapMention: null, onTapTimestamp: null, onTapInlineCode: null, onTapEmoji: null, style: null });
};