// discord_app/modules/user_profile/hooks/useShouldShowSuggestedGames.tsx
import WidgetUtils from "../WidgetUtils.tsx";
import useHasSavedWidget from "useHasSavedWidget.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

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
    }, []),
  };
}
