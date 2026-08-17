// discord_app/modules/interaction_components/native/display/TextDisplayComponent.tsx
import noopAll from "noop" /* 19 */;
import _modDef38 from "module_38" /* 38 */;
import get_defaultRulesDefault from "get defaultRules" /* 6807 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 15170 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;
import closure_5 from "handleConnectionOpen" /* 1979 */;
import { TEXT_DISPLAY_COMPONENT_MARKDOWN_RENDER_OPTIONS as closure_6 } from "TEXT_DISPLAY_COMPONENT_MARKDOWN_RENDER_OPTIONS" /* 8325 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
let result = require("set").fileFinishedImporting("modules/interaction_components/native/display/TextDisplayComponent.tsx");

export default function TextDisplayComponent(content) {
  let obj = channelId(8326);
  const componentContainerId = obj.useComponentContainerId();
  channelId = channelId.getChannelId();
  _modDef38(null != channelId, "channelId not available in TextDisplayComponent");
  obj1 = get_defaultRulesDefault;
  let obj2 = channelId(8315);
  obj = { channelId, renderOptions: closure_6 };
  const parseToASTResult = obj1.parseToAST(content.content, true, obj2.getInitialParserState(obj));
  let items = [closure_4];
  const obj5 = channelId(589);
  [tmp6, tmp7] = callback(channelId(589).useStateFromStoresArray(items, () => {
    const items = [, ];
    ({ roleStyle: arr[0], alwaysShowLinkDecorations: arr[1] } = closure_4);
    return items;
  }), 2);
  const AnimateEmoji = channelId(4066).AnimateEmoji;
  const setting = AnimateEmoji.useSetting();
  obj = { model: null, markdownTextRenderOptions: null, onTapLink: null, onLongPressLink: null, onTapAttachmentLink: null, onLongPressAttachmentLink: null, onTapMention: null, onTapTimestamp: null, onTapInlineCode: null, onTapEmoji: null, style: null };
  obj1 = {};
  const tmp5 = callback(channelId(589).useStateFromStoresArray(items, () => {
    const items = [, ];
    ({ roleStyle: arr[0], alwaysShowLinkDecorations: arr[1] } = closure_4);
    return items;
  }), 2);
  const merged = Object.assign(content);
  obj1.content = parseToASTResult;
  obj[0] = obj1;
  obj2 = { containerId: componentContainerId, shouldAnimateEmoji: setting, shouldShowLinkDecorations: tmp7, shouldShowRoleDot: "dot" === tmp6, shouldShowRoleOnName: "username" === tmp6 };
  obj[1] = obj2;
  obj[2] = function onTapLink(nativeEvent) {
    const result = channelId(closure_1_2[13]).handleMessagesTapURLLink(nativeEvent.nativeEvent.data, channelId);
  };
  obj[3] = channelId(10783).contentHandlers.onLongPressLink;
  obj[4] = channelId(10783).contentHandlers.onTapAttachmentLink;
  obj[5] = channelId(10783).contentHandlers.onLongPressAttachmentLink;
  obj[6] = channelId(10783).contentHandlers.onTapMention;
  obj[7] = channelId(10783).contentHandlers.onTapTimestamp;
  obj[8] = channelId(10783).contentHandlers.onTapInlineCode;
  obj[9] = channelId(10783).contentHandlers.onTapEmoji;
  obj[10] = { width: "100%" };
  return jsx(__INTERNAL_VIEW_CONFIGDefault, { model: null, markdownTextRenderOptions: null, onTapLink: null, onLongPressLink: null, onTapAttachmentLink: null, onLongPressAttachmentLink: null, onTapMention: null, onTapTimestamp: null, onTapInlineCode: null, onTapEmoji: null, style: null });
};