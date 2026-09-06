// discord_app/modules/display_name_styles/DisplayNameStylesActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesActionCreators.tsx");

export const markDisplayNameStyleFontSeen = function markDisplayNameStyleFontSeen(fontId) {
  const obj = { type: "DISPLAY_NAME_STYLES_MARK_FONT_SEEN", fontId };
  obj.dispatch(obj);
};
export const markDisplayNameStyleEffectSeen = function markDisplayNameStyleEffectSeen(effectId) {
  const obj = { type: "DISPLAY_NAME_STYLES_MARK_EFFECT_SEEN", effectId };
  obj.dispatch(obj);
};
export const markDisplayNameStyleNewFontsBadgeDismissed = function markDisplayNameStyleNewFontsBadgeDismissed() {
  DispatcherDefault.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_NEW_FONTS_BADGE_DISMISSED" });
};
export const markDisplayNameStyleNewEffectsBadgeDismissed = function markDisplayNameStyleNewEffectsBadgeDismissed() {
  DispatcherDefault.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_NEW_EFFECTS_BADGE_DISMISSED" });
};
