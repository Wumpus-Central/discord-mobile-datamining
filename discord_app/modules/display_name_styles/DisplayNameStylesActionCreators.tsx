// === Module 14688: markDisplayNameStyleFontSeen ===

// Module 14688 (markDisplayNameStyleFontSeen)
import obj132 from "obj132" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = obj132.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesActionCreators.tsx");

export const markDisplayNameStyleFontSeen = function markDisplayNameStyleFontSeen(fontId) {
  const obj = { type: "DISPLAY_NAME_STYLES_MARK_FONT_SEEN", fontId };
  obj.dispatch(obj);
};
export const markDisplayNameStyleEffectSeen = function markDisplayNameStyleEffectSeen(effectId) {
  const obj = { type: "DISPLAY_NAME_STYLES_MARK_EFFECT_SEEN", effectId };
  obj.dispatch(obj);
};
export const markDisplayNameStyleNewFontsBadgeDismissed = function markDisplayNameStyleNewFontsBadgeDismissed() {
  dispatcherDefault.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_NEW_FONTS_BADGE_DISMISSED" });
};
export const markDisplayNameStyleNewEffectsBadgeDismissed = function markDisplayNameStyleNewEffectsBadgeDismissed() {
  dispatcherDefault.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_NEW_EFFECTS_BADGE_DISMISSED" });
};