// === Module 14392: BountiesScrollIndicatorAnimation ===

// Module 14392 (BountiesScrollIndicatorAnimation)
import ThemesDefault from "Themes" /* 712 */;
import map from "map" /* 4097 */;
import ManaContext from "ManaContext" /* 4104 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
let closure_7 = createCacheKey.createStyles(() => ({ container: { width: 80, height: 80 } }));
const result = require("obj132").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollIndicatorAnimation.tsx");

export default function BountiesScrollIndicatorAnimation(startAnimation) {
  const visible = startAnimation.visible;
  let obj = map;
  const token = obj.useToken(ThemesDefault.colors.TEXT_DEFAULT);
  const tmp = callback2();
  [tmp6, tmp7] = callback(React.useState(0), 2);
  const tmp8 = callback(React.useState(visible), 2);
  if (visible !== tmp8[0]) {
    tmp8[1](visible);
    if (visible) {
      tmp7((arg0) => arg0 + 1);
    }
  }
  { style: tmp.container, children: jsx(ManaContext.BountiesScrollIndicatorRive, { stateMachine: "State Machine 1", fit: "contain", dataBinding: obj }, tmp6) };
  obj = { color: token, startAnimation: !startAnimation.isFadingInContent };
  return <View color={token} startAnimation={!startAnimation.isFadingInContent} />;
};