// discord_app/modules/user_profile/native/useGameCoverLayout.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useMeasuredLayoutDefault from "../../screen/native/useMeasuredLayout.tsx";

const PX_16 = nativeDefault.space.PX_16;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/useGameCoverLayout.tsx");

export default function useGameCoverLayout() {
  const tmp = useMeasuredLayoutDefault();
  const width = tmp.width;
  let num = 0;
  ({ ref, onLayout } = tmp);
  if (undefined !== width) {
    num = width;
  }
  const bound = Math.max(3, Math.ceil((num + PX_16) / (120 + PX_16)));
  return { ref, onLayout, isMeasured: num > 0, columns: bound, coverWidth: (num - PX_16 * (bound - 1)) / bound };
}
export const GAME_COVER_GAP = PX_16;
