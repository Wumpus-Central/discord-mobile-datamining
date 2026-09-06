// discord_app/modules/quests/native/BountiesModal/BountiesScrollIndicatorAnimation.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const native = tmp2(4271);
require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles(() => ({ container: { width: 80, height: 80 } }));
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollIndicatorAnimation.tsx");

export default function BountiesScrollIndicatorAnimation(startAnimation) {
  const visible = startAnimation.visible;
  let obj = useToken;
  const token = obj.useToken(nativeDefault.colors.TEXT_DEFAULT);
  const tmp = closure_7();
  [tmp6, tmp7] = _slicedToArray(noop.useState(0), 2);
  const tmp8 = _slicedToArray(noop.useState(visible), 2);
  if (visible !== tmp8[0]) {
    tmp8[1](visible);
    if (visible) {
      tmp7((arg0) => arg0 + 1);
    }
  }
  obj = { style: tmp.container, children: null };
  obj = {
    stateMachine: "State Machine 1",
    fit: "contain",
    dataBinding: { color: token, startAnimation: !startAnimation.isFadingInContent },
  };
  obj.children = jsx(
    native.BountiesScrollIndicatorRive,
    {
      stateMachine: "State Machine 1",
      fit: "contain",
      dataBinding: { color: token, startAnimation: !startAnimation.isFadingInContent },
    },
    tmp6,
  );
  return (
    <View
      stateMachine="State Machine 1"
      fit="contain"
      dataBinding={{ color: token, startAnimation: !arg0.isFadingInContent }}
    />
  );
}
