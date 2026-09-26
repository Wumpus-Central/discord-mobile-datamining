// === Module 11878: GamePlatformBadgeRow ===

// Module 11878 (GamePlatformBadgeRow)
import nativeDefault from "native" /* 576 */;
import GamePlatformBadges from "GamePlatformBadges" /* 11880 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = {};
obj[fn(11879).GamePlatformAvailability.DESKTOP] = fn(8347).ScreenIcon;
obj[fn(11879).GamePlatformAvailability.MOBILE] = fn(6379).MobilePhoneIcon;
obj[fn(11879).GamePlatformAvailability.CONSOLE] = fn(8535).GameControllerIcon;
const createStyles = fn(4836);
let closure_6 = createStyles.createStyles({ row: { width: "auto" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/games/native/GamePlatformBadgeRow.tsx");

export default noop.memo(function GamePlatformBadgeRow(platforms) {
  platforms = platforms.platforms;
  const items = [platforms];
  const memo = noop.useMemo(() => GamePlatformBadges.sortGamePlatformAvailability(platforms), items);
  const tmp = closure_6();
  return jsx(platforms(5279).Stack, {
    direction: "horizontal",
    align: "center",
    spacing: nativeDefault.space.PX_4,
    style: closure_6().row,
    children: memo.map((item) => {
      obj = { size: "xs", color: "icon-subtle", accessibilityLabel: platforms(dependencyMap[7]).getGamePlatformAvailabilityLabel(item) };
      return jsx(obj[item], { size: "xs", color: "icon-subtle", accessibilityLabel: platforms(dependencyMap[7]).getGamePlatformAvailabilityLabel(item) }, item);
    })
  });
});