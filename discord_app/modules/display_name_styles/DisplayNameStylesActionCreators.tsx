// === Module 16369: DisplayNameStylesActionCreators ===

// Module 16369 (DisplayNameStylesActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesActionCreators.tsx");

export function markDisplayNameStyleFontSeen(fontId) {
  DispatcherDefault.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_FONT_SEEN", fontId });
}
export function markDisplayNameStyleEffectSeen(effectId) {
  DispatcherDefault.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_EFFECT_SEEN", effectId });
}
export function markDisplayNameStyleNewFontsBadgeDismissed() {
  DispatcherDefault.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_NEW_FONTS_BADGE_DISMISSED" });
}
export function markDisplayNameStyleNewEffectsBadgeDismissed() {
  DispatcherDefault.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_NEW_EFFECTS_BADGE_DISMISSED" });
}