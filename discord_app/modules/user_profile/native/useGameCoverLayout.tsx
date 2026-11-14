// discord_app/modules/user_profile/native/useGameCoverLayout.tsx
import useMeasuredLayoutDefault from "../../screen/native/useMeasuredLayout.tsx";
import UserProfileGameWidgetConstants from "../UserProfileGameWidgetConstants.native.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/user_profile/native/useGameCoverLayout.tsx");

export default function useGameCoverLayout() {
  const tmp2 = useMeasuredLayoutDefault();
  const width = tmp2.width;
  let num = 0;
  ({ ref, onLayout } = tmp2);
  if (undefined !== width) {
    num = width;
  }
  const sum = num + UserProfileGameWidgetConstants.GAME_COVER_GRID_GAP;
  const bound = Math.max(3, Math.ceil(sum / (120 + UserProfileGameWidgetConstants.GAME_COVER_GRID_GAP)));
  return {
    ref,
    onLayout,
    width: num,
    isMeasured: num > 0,
    columns: bound,
    coverWidth: (num - UserProfileGameWidgetConstants.GAME_COVER_GRID_GAP * (bound - 1)) / bound,
  };
}
