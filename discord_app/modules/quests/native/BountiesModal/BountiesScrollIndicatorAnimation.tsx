// discord_app/modules/quests/native/BountiesModal/BountiesScrollIndicatorAnimation.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4636);
let closure_7 = createStyles.createStyles(() => ({ container: { width: 80, height: 80 } }));
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollIndicatorAnimation.tsx");

export default function BountiesScrollIndicatorAnimation(startAnimation) {
  const visible = startAnimation.visible;
  const tmp = closure_7();
  const token = useToken.useToken(nativeDefault.colors.TEXT_DEFAULT);
  [tmp6, tmp7] = noop.useState(0);
  const tmp8 = _slicedToArray(noop.useState(visible), 2);
  if (visible !== tmp8[0]) {
    tmp8[1](visible);
    if (visible) {
      tmp7((arg0) => arg0 + 1);
    }
  }
  const obj2 = {
    style: tmp.container,
    children: jsx(
      native.BountiesScrollIndicatorRive,
      {
        stateMachine: "State Machine 1",
        fit: "contain",
        dataBinding: { color: token, startAnimation: !startAnimation.isFadingInContent },
      },
      tmp6,
    ),
  };
  return (
    <View style={tmp.container}>
      {jsx(
        native.BountiesScrollIndicatorRive,
        {
          stateMachine: "State Machine 1",
          fit: "contain",
          dataBinding: { color: token, startAnimation: !startAnimation.isFadingInContent },
        },
        tmp6,
      )}
    </View>
  );
}
