import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { map } from "../../../../design/tokens/native/useToken.tsx";
// discord_app/modules/quests/native/BountiesModal/BountiesScrollIndicatorAnimation.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_7 = createCacheKey.createStyles(() => ({ container: { width: 80, height: 80 } }));
const result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollIndicatorAnimation.tsx");

export default function BountiesScrollIndicatorAnimation(startAnimation) {
  let tmp6;
  let tmp7;
  const visible = startAnimation.visible;
  let obj = map /* map */;
  const token = obj.useToken(Themes.colors.TEXT_DEFAULT);
  const tmp = callback2();
  const tmp2 = require;
  [tmp6, tmp7] = callback(React.useState(0), 2);
  const tmp8 = callback(React.useState(visible), 2);
  if (visible !== tmp8[0]) {
    tmp8[1](visible);
    if (visible) {
      tmp7((arg0) => arg0 + 1);
    }
  }
  obj = { style: tmp.container, children: jsx(tmp2(3997).BountiesScrollIndicatorRive, { stateMachine: "State Machine 1", fit: "contain", dataBinding: obj }, tmp6) };
  obj = { color: token, startAnimation: !startAnimation.isFadingInContent };
  return <View color={token} startAnimation={!arg0.isFadingInContent} />;
};