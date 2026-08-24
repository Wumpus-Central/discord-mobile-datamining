// discord_common/js/packages/rtn-codegen/js/TextDisplayComponentViewNativeComponent.tsx
import set from "../../../../../_runtime/00002_set.js";
import weakSet from "../../../../../_runtime/00106_weakSet.js";
import setRuntimeConfigProvider from "../../../../../_runtime/00065_setRuntimeConfigProvider.js";

let obj = { uiViewClassName: "TextDisplayComponentView", directEventTypes: { topTapLink: { registrationName: "onTapLink" }, topLongPressLink: { registrationName: "onLongPressLink" }, topTapAttachmentLink: { registrationName: "onTapAttachmentLink" }, topLongPressAttachmentLink: { registrationName: "onLongPressAttachmentLink" }, topTapMention: { registrationName: "onTapMention" }, topTapTimestamp: { registrationName: "onTapTimestamp" }, topTapInlineCode: { registrationName: "onTapInlineCode" }, topTapEmoji: { registrationName: "onTapEmoji" } }, validAttributes: null };
obj = { model: true, markdownTextRenderOptions: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onTapLink: true, onLongPressLink: true, onTapAttachmentLink: true, onLongPressAttachmentLink: true, onTapMention: true, onTapTimestamp: true, onTapInlineCode: true, onTapEmoji: true }));
obj[2] = obj;
const value = setRuntimeConfigProvider.get("TextDisplayComponentView", () => obj);
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/TextDisplayComponentViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;