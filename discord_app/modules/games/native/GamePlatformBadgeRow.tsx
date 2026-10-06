// === Module 12042: GamePlatformBadgeRow ===

// Module 12042 (GamePlatformBadgeRow)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Stack_Stack from "Stack/Stack" /* 5600 */;
import MobilePhoneIcon from "MobilePhoneIcon" /* 6455 */;
import ScreenIcon from "ScreenIcon" /* 8577 */;
import GameControllerIcon from "GameControllerIcon" /* 8771 */;
import GamePlatformAvailability from "GamePlatformAvailability" /* 12043 */;
import GamePlatformBadges from "GamePlatformBadges" /* 12044 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let platforms;

const jsx = Fragment.jsx;
let obj = {};
obj[GamePlatformAvailability.GamePlatformAvailability.DESKTOP] = ScreenIcon.ScreenIcon;
obj[GamePlatformAvailability.GamePlatformAvailability.MOBILE] = MobilePhoneIcon.MobilePhoneIcon;
obj[GamePlatformAvailability.GamePlatformAvailability.CONSOLE] = GameControllerIcon.GameControllerIcon;
let closure_6 = createStyles.createStyles({ row: { width: "auto" } });
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((platforms) => {
  let arr;
  let tmp6;
  obj = react2;
  const cResult = obj.c(8);
  platforms = platforms.platforms;
  const tmp4 = closure_6();
  if (cResult[0] !== platforms) {
    const tmpResult = GamePlatformBadges;
    const result = tmpResult.sortGamePlatformAvailability(platforms);
    cResult[0] = platforms;
    cResult[1] = result;
    arr = result;
  } else {
    arr = cResult[1];
  }
  const row = tmp4.row;
  if (cResult[2] !== arr) {
    let tmp8;
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function y(item) {
        const obj2 = GamePlatformBadges;
        return <tmp key={item} size="xs" color="icon-subtle" accessibilityLabel={obj2.getGamePlatformAvailabilityLabel(item)} />;
      };
      cResult[4] = fn;
      tmp8 = fn;
    } else {
      tmp8 = cResult[4];
    }
    const mapped = arr.map(tmp8);
    cResult[2] = arr;
    cResult[3] = mapped;
    tmp6 = mapped;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[5] === tmp4.row) {
    let tmp10;
    if (cResult[6] === tmp6) {
      tmp10 = cResult[7];
    }
    return tmp10;
  }
  const Stack = Stack_Stack.Stack;
  const tmp11 = <Stack direction="horizontal" align="center" spacing={nativeDefault.space.PX_4} style={row}>{tmp6}</Stack>;
  cResult[5] = tmp4.row;
  cResult[6] = tmp6;
  cResult[7] = tmp11;
  tmp10 = tmp11;
}) : ((platforms) => {
  platforms = platforms.platforms;
  const items = [platforms];
  const tmp = closure_6();
  const memo = react.useMemo(() => {
    obj = GamePlatformBadges;
    return obj.sortGamePlatformAvailability(platforms);
  }, items);
  const Stack = platforms(5600).Stack;
  return <Stack direction="horizontal" align="center" spacing={nativeDefault.space.PX_4} style={tmp.row}>{memo.map((item) => {
    const obj2 = platforms(dependencyMap[9]);
    return <tmp key={item} size="xs" color="icon-subtle" accessibilityLabel={obj2.getGamePlatformAvailabilityLabel(item)} />;
  })}</Stack>;
}));
let result = size.fileFinishedImporting("modules/games/native/GamePlatformBadgeRow.tsx");

export default memoResult;