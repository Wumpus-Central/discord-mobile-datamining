// discord_app/modules/games/native/GamePlatformBadgeRow.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import GamePlatformBadges from "../GamePlatformBadges.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
let obj = {};
obj[fn(14801).GamePlatformAvailability.DESKTOP] = fn(10467).ScreenIcon;
obj[fn(14801).GamePlatformAvailability.MOBILE] = fn(7786).MobilePhoneIcon;
obj[fn(14801).GamePlatformAvailability.CONSOLE] = fn(7438).GameControllerIcon;
obj[fn(14801).GamePlatformAvailability.ROBLOX] = fn(10298).RobloxNeutralIcon;
const createStyles = fn(5306);
let closure_6 = createStyles.createStyles({ row: { width: "auto" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/games/native/GamePlatformBadgeRow.tsx");

export default noop.memo(function GamePlatformBadgeRow(platforms) {
  platforms = platforms.platforms;
  items = [platforms];
  const memo = noop.useMemo(() => GamePlatformBadges.sortGamePlatformAvailability(platforms), items);
  const tmp = closure_6();
  return jsx(platforms(6337).Stack, {
    direction: "horizontal",
    align: "center",
    spacing: nativeDefault.space.PX_4,
    style: closure_6().row,
    children: memo.map((item) => {
      obj = {
        size: "xs",
        color: "icon-muted",
        accessibilityLabel: platforms(dependencyMap[8]).getGamePlatformAvailabilityLabel(item),
      };
      return jsx(
        obj[item],
        {
          size: "xs",
          color: "icon-muted",
          accessibilityLabel: platforms(dependencyMap[8]).getGamePlatformAvailabilityLabel(item),
        },
        item,
      );
    }),
  });
});
