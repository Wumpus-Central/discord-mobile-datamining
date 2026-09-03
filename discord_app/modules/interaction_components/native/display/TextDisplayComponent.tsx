// discord_app/modules/interaction_components/native/display/TextDisplayComponent.tsx
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import closure_5 from "../../../a11y/AccessibilityStore.tsx";
import closure_6 from "../../../../stores/SelectedChannelStore.tsx";
import { TEXT_DISPLAY_COMPONENT_MARKDOWN_RENDER_OPTIONS as closure_7 } from "../../InteractionComponentConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
let result = require("set").fileFinishedImporting(
  "modules/interaction_components/native/display/TextDisplayComponent.tsx",
);

export default function TextDisplayComponent(type) {
  type = type.type;
  const id = type.id;
  const content = type.content;
  let channelId;
  let obj = type(content[6]);
  const componentContainerId = obj.useComponentContainerId();
  channelId = channelId.getChannelId();
  id(content[7])(null != channelId, "channelId not available in TextDisplayComponent");
  let items = [type, id, content, channelId];
  const memo = React.useMemo(() => {
    let obj = { type, id, content: null };
    const obj2 = id(content[8]);
    obj = { channelId, renderOptions: closure_1_7 };
    obj[2] = obj2.parseToAST(content, true, type(content[9]).getInitialParserState(obj));
    return JSON.stringify(obj);
  }, items);
  const items1 = [closure_5];
  let obj2 = type(content[10]);
  [tmp6, tmp7] = channelId(
    type(content[10]).useStateFromStoresArray(items1, () => {
      const items = [,];
      ({ roleStyle: arr[0], alwaysShowLinkDecorations: arr[1] } = closure_5);
      return items;
    }),
    2,
  );
  const AnimateEmoji = type(content[11]).AnimateEmoji;
  const setting = AnimateEmoji.useSetting();
  obj = {
    model: memo,
    markdownTextRenderOptions: obj,
    onTapLink(nativeEvent) {
      const result = type(content[13]).handleMessagesTapURLLink(nativeEvent.nativeEvent.data, channelId);
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
    shouldShowRoleDot: "dot" === tmp6,
    shouldShowRoleOnName: "username" === tmp6,
  };
  const tmp5 = channelId(
    type(content[10]).useStateFromStoresArray(items1, () => {
      const items = [,];
      ({ roleStyle: arr[0], alwaysShowLinkDecorations: arr[1] } = closure_5);
      return items;
    }),
    2,
  );
  obj[3] = type(content[14]).contentHandlers.onLongPressLink;
  obj[4] = type(content[14]).contentHandlers.onTapAttachmentLink;
  obj[5] = type(content[14]).contentHandlers.onLongPressAttachmentLink;
  obj[6] = type(content[14]).contentHandlers.onTapMention;
  obj[7] = type(content[14]).contentHandlers.onTapTimestamp;
  obj[8] = type(content[14]).contentHandlers.onTapInlineCode;
  obj[9] = type(content[14]).contentHandlers.onTapEmoji;
  obj[10] = { width: "100%" };
  return jsx(id(content[12]), {
    containerId: componentContainerId,
    shouldAnimateEmoji: setting,
    shouldShowLinkDecorations: tmp7,
    shouldShowRoleDot: "dot" === tmp6,
    shouldShowRoleOnName: "username" === tmp6,
  });
}
