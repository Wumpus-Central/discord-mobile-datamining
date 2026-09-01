// discord_app/modules/quests/native/BountiesModal/BountiesScrollIndicatorAnimation.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import map from "../../../../design/tokens/native/useToken.tsx";
import ManaContext from "../../../../../discord_common/js/packages/design/native.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
let closure_7 = createCacheKey.createStyles(() => ({ container: { width: 80, height: 80 } }));
const result = require("set").fileFinishedImporting(
  "modules/quests/native/BountiesModal/BountiesScrollIndicatorAnimation.tsx",
);

export default function BountiesScrollIndicatorAnimation(startAnimation) {
  const visible = startAnimation.visible;
  let obj = map;
  const token = obj.useToken(ThemesDefault.colors.TEXT_DEFAULT);
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
  obj = {
    style: tmp.container,
    children: jsx(
      ManaContext.BountiesScrollIndicatorRive,
      { stateMachine: "State Machine 1", fit: "contain", dataBinding: obj },
      tmp6,
    ),
  };
  obj = { color: token, startAnimation: !startAnimation.isFadingInContent };
  return <View color={token} startAnimation={!arg0.isFadingInContent} />;
}
