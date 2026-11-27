// === Module 14583: useShouldShowSuggestedGames ===

// Module 14583 (useShouldShowSuggestedGames)
import WidgetUtils from "WidgetUtils" /* 14577 */;
import useHasSavedWidget from "useHasSavedWidget" /* 14584 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useShouldShowSuggestedGames.tsx");

export function useShouldShowSuggestedGames(widget) {
  const tmp = _slicedToArray(noop.useState(false), 2);
  closure_0 = tmp[1];
  const hasSavedWidget = useHasSavedWidget.useHasSavedWidget(widget.type);
  let tmp4 = !hasSavedWidget;
  if (!hasSavedWidget) {
    tmp4 = !tmp[0];
  }
  if (tmp4) {
    tmp4 = !isGameLimitReachedResult;
  }
  isGameLimitReachedResult = WidgetUtils.isGameLimitReached(widget);
  return {
    shouldShowSuggestions: tmp4,
    handleDismissSuggestions: noop.useCallback(() => {
      closure_0(true);
    }, [])
  };
}