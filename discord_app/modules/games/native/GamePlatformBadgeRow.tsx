// discord_app/modules/games/native/GamePlatformBadgeRow.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import GamePlatformBadges from "../GamePlatformBadges.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
let obj = {};
obj[fn(12050).GamePlatformAvailability.DESKTOP] = fn(8512).ScreenIcon;
obj[fn(12050).GamePlatformAvailability.MOBILE] = fn(6545).MobilePhoneIcon;
obj[fn(12050).GamePlatformAvailability.CONSOLE] = fn(8700).GameControllerIcon;
const createStyles = fn(4836);
let closure_6 = createStyles.createStyles({ row: { width: "auto" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/games/native/GamePlatformBadgeRow.tsx");

export default noop.memo(function GamePlatformBadgeRow(platforms) {
  platforms = platforms.platforms;
  const items = [platforms];
  const memo = noop.useMemo(() => GamePlatformBadges.sortGamePlatformAvailability(platforms), items);
  const tmp = closure_6();
  return jsx(platforms(5445).Stack, {
    direction: "horizontal",
    align: "center",
    spacing: nativeDefault.space.PX_4,
    style: closure_6().row,
    children: memo.map((item) => {
      obj = {
        size: "xs",
        color: "icon-subtle",
        accessibilityLabel: platforms(dependencyMap[7]).getGamePlatformAvailabilityLabel(item),
      };
      return jsx(
        obj[item],
        {
          size: "xs",
          color: "icon-subtle",
          accessibilityLabel: platforms(dependencyMap[7]).getGamePlatformAvailabilityLabel(item),
        },
        item,
      );
    }),
  });
});
