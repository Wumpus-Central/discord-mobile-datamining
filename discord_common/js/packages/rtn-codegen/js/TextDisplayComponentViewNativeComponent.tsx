// === Module 15596: TextDisplayComponentViewNativeComponent ===

// Module 15596 (TextDisplayComponentViewNativeComponent)
import DynamicallyInjectedByGestureHandler from "DynamicallyInjectedByGestureHandler" /* 106 */;
import module_65 from "module_65" /* 65 */;
import size from "module_2" /* 2 */;

let obj2;
const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "TextDisplayComponentView", directEventTypes: { topTapLink: { registrationName: "onTapLink" }, topLongPressLink: { registrationName: "onLongPressLink" }, topTapAttachmentLink: { registrationName: "onTapAttachmentLink" }, topLongPressAttachmentLink: { registrationName: "onLongPressAttachmentLink" }, topTapMention: { registrationName: "onTapMention" }, topTapTimestamp: { registrationName: "onTapTimestamp" }, topTapInlineCode: { registrationName: "onTapInlineCode" }, topTapEmoji: { registrationName: "onTapEmoji" } }, validAttributes: obj2 };
obj2 = { model: true, markdownTextRenderOptions: true };
const merged = Object.assign(DynamicallyInjectedByGestureHandler.ConditionallyIgnoredEventHandlers({ onTapLink: true, onLongPressLink: true, onTapAttachmentLink: true, onLongPressAttachmentLink: true, onTapMention: true, onTapTimestamp: true, onTapInlineCode: true, onTapEmoji: true }));
const value = module_65.get("TextDisplayComponentView", () => obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/TextDisplayComponentViewNativeComponent.tsx");

export default value;
export { __INTERNAL_VIEW_CONFIG };