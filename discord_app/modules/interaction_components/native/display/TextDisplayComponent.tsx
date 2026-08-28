// discord_app/modules/interaction_components/native/display/TextDisplayComponent.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import get_defaultRulesDefault from "../../../markup/MarkupUtils.tsx";
import __INTERNAL_VIEW_CONFIGDefault from "../../../../../discord_common/js/packages/rtn-codegen/js/TextDisplayComponentViewNativeComponent.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../a11y/AccessibilityStore.tsx";
import closure_5 from "../../../../stores/SelectedChannelStore.tsx";
import { TEXT_DISPLAY_COMPONENT_MARKDOWN_RENDER_OPTIONS as closure_6 } from "../../InteractionComponentConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
noopAll;
let result = require("set").fileFinishedImporting("modules/interaction_components/native/display/TextDisplayComponent.tsx");

export default function TextDisplayComponent(content) {
  let obj = channelId(7967);
  const componentContainerId = obj.useComponentContainerId();
  channelId = channelId.getChannelId();
  _modDef38(null != channelId, "channelId not available in TextDisplayComponent");
  obj1 = get_defaultRulesDefault;
  let obj2 = channelId(7578);
  obj = { channelId, renderOptions: closure_6 };
  const parseToASTResult = obj1.parseToAST(content.content, true, obj2.getInitialParserState(obj));
  let items = [closure_4];
  const obj5 = channelId(589);
  [tmp6, tmp7] = callback(channelId(589).useStateFromStoresArray(items, () => {
    const items = [, ];
    ({ roleStyle: arr[0], alwaysShowLinkDecorations: arr[1] } = closure_4);
    return items;
  }), 2);
  const AnimateEmoji = channelId(4135).AnimateEmoji;
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
  obj[3] = channelId(11119).contentHandlers.onLongPressLink;
  obj[4] = channelId(11119).contentHandlers.onTapAttachmentLink;
  obj[5] = channelId(11119).contentHandlers.onLongPressAttachmentLink;
  obj[6] = channelId(11119).contentHandlers.onTapMention;
  obj[7] = channelId(11119).contentHandlers.onTapTimestamp;
  obj[8] = channelId(11119).contentHandlers.onTapInlineCode;
  obj[9] = channelId(11119).contentHandlers.onTapEmoji;
  obj[10] = { width: "100%" };
  return jsx(__INTERNAL_VIEW_CONFIGDefault, { model: null, markdownTextRenderOptions: null, onTapLink: null, onLongPressLink: null, onTapAttachmentLink: null, onLongPressAttachmentLink: null, onTapMention: null, onTapTimestamp: null, onTapInlineCode: null, onTapEmoji: null, style: null });
};