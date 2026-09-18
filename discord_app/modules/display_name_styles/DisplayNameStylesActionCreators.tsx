// === Module 15552: DisplayNameStylesActionCreators ===

// Module 15552 (DisplayNameStylesActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesActionCreators.tsx");

export const markDisplayNameStyleFontSeen = function markDisplayNameStyleFontSeen(fontId) {
  DispatcherDefault.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_FONT_SEEN", fontId });
};
export const markDisplayNameStyleEffectSeen = function markDisplayNameStyleEffectSeen(effectId) {
  DispatcherDefault.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_EFFECT_SEEN", effectId });
};
export const markDisplayNameStyleNewFontsBadgeDismissed = function markDisplayNameStyleNewFontsBadgeDismissed() {
  DispatcherDefault.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_NEW_FONTS_BADGE_DISMISSED" });
};
export const markDisplayNameStyleNewEffectsBadgeDismissed = function markDisplayNameStyleNewEffectsBadgeDismissed() {
  DispatcherDefault.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_NEW_EFFECTS_BADGE_DISMISSED" });
};