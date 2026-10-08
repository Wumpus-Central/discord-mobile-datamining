// === Module 12115: GamePlatformBadgeRow ===

// Module 12115 (GamePlatformBadgeRow)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Stack_Stack from "Stack/Stack" /* 5373 */;
import GamePlatformBadges from "GamePlatformBadges" /* 12117 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = {};
obj[fn(12116).GamePlatformAvailability.DESKTOP] = fn(9061).ScreenIcon;
obj[fn(12116).GamePlatformAvailability.MOBILE] = fn(6633).MobilePhoneIcon;
obj[fn(12116).GamePlatformAvailability.CONSOLE] = fn(9117).GameControllerIcon;
const createStyles = fn(5090);
let closure_6 = createStyles.createStyles({ row: { width: "auto" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/games/native/GamePlatformBadgeRow.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GamePlatformBadgeRow(platforms) {
  const cResult = c.c(8);
  platforms = platforms.platforms;
  const tmp4 = closure_6();
  if (cResult[0] !== platforms) {
    const result = GamePlatformBadges.sortGamePlatformAvailability(platforms);
    cResult[0] = platforms;
    cResult[1] = result;
    let arr = result;
    const tmpResult = GamePlatformBadges;
  } else {
    arr = cResult[1];
  }
  if (cResult[2] !== arr) {
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function u(item) {
        obj = { size: "xs", color: "icon-subtle", accessibilityLabel: GamePlatformBadges.getGamePlatformAvailabilityLabel(item) };
        return jsx(obj[item], { size: "xs", color: "icon-subtle", accessibilityLabel: GamePlatformBadges.getGamePlatformAvailabilityLabel(item) }, item);
      };
      cResult[4] = fn;
      let tmp9 = fn;
    } else {
      tmp9 = cResult[4];
    }
    const mapped = arr.map(tmp9);
    cResult[2] = arr;
    cResult[3] = mapped;
  } else {
    if (cResult[5] === tmp4.row) {
      if (cResult[6] === tmp7) {
        let tmp12 = cResult[7];
      }
      return tmp12;
    }
    const obj2 = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_4, style: tmp6, children: cResult[3] };
    const tmp15 = jsx(Stack_Stack.Stack, { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_4, style: tmp6, children: cResult[3] });
    cResult[5] = tmp4.row;
    cResult[6] = cResult[3];
    cResult[7] = tmp15;
    tmp12 = tmp15;
  }
}) : (function GamePlatformBadgeRow(platforms) {
  platforms = platforms.platforms;
  const items = [platforms];
  const memo = noop.useMemo(() => GamePlatformBadges.sortGamePlatformAvailability(platforms), items);
  const tmp = closure_6();
  return jsx(platforms(5373).Stack, {
    direction: "horizontal",
    align: "center",
    spacing: nativeDefault.space.PX_4,
    style: closure_6().row,
    children: memo.map((item) => {
      obj = { size: "xs", color: "icon-subtle", accessibilityLabel: platforms(dependencyMap[9]).getGamePlatformAvailabilityLabel(item) };
      return jsx(obj[item], { size: "xs", color: "icon-subtle", accessibilityLabel: platforms(dependencyMap[9]).getGamePlatformAvailabilityLabel(item) }, item);
    })
  });
}));