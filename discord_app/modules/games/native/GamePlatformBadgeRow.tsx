// === Module 14179: GamePlatformBadgeRow ===

// Module 14179 (GamePlatformBadgeRow)
import nativeDefault from "native" /* 575 */;
import GamePlatformBadges from "GamePlatformBadges" /* 14181 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = {};
obj[fn(14180).GamePlatformAvailability.DESKTOP] = fn(9743).ScreenIcon;
obj[fn(14180).GamePlatformAvailability.MOBILE] = fn(7276).MobilePhoneIcon;
obj[fn(14180).GamePlatformAvailability.CONSOLE] = fn(9883).GameControllerIcon;
obj[fn(14180).GamePlatformAvailability.ROBLOX] = fn(9505).RobloxNeutralIcon;
const createStyles = fn(5143);
let closure_6 = createStyles.createStyles({ row: { width: "auto" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/games/native/GamePlatformBadgeRow.tsx");

export default noop.memo(function GamePlatformBadgeRow(platforms) {
  platforms = platforms.platforms;
  items = [platforms];
  const memo = noop.useMemo(() => GamePlatformBadges.sortGamePlatformAvailability(platforms), items);
  const tmp = closure_6();
  return jsx(platforms(6165).Stack, {
    direction: "horizontal",
    align: "center",
    spacing: nativeDefault.space.PX_4,
    style: closure_6().row,
    children: memo.map((item) => {
      obj = { size: "xs", color: "icon-muted", accessibilityLabel: platforms(dependencyMap[8]).getGamePlatformAvailabilityLabel(item) };
      return jsx(obj[item], { size: "xs", color: "icon-muted", accessibilityLabel: platforms(dependencyMap[8]).getGamePlatformAvailabilityLabel(item) }, item);
    })
  });
});