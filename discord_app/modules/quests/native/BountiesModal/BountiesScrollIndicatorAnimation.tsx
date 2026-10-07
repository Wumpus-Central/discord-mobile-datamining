// discord_app/modules/quests/native/BountiesModal/BountiesScrollIndicatorAnimation.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import BountiesScrollIndicatorRive from "../../../../../discord_common/js/packages/design/components/Rive/native/generated/BountiesScrollIndicatorRive.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let closure_7 = createStyles.createStyles(() => ({ container: { width: 80, height: 80 } }));
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollIndicatorAnimation.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (visible) => {
      const cResult = c.c(9);
      visible = visible.visible;
      const tmp4 = closure_7();
      const token = useToken.useToken(nativeDefault.colors.TEXT_DEFAULT);
      [tmp7, tmp8] = noop.useState(0);
      const tmp9 = _slicedToArray(noop.useState(visible), 2);
      if (visible !== tmp9[0]) {
        tmp9[1](visible);
        if (visible) {
          tmp8((arg0) => arg0 + 1);
        }
      }
      if (cResult[0] === token) {
        if (cResult[1] === tmp12) {
          let tmp13 = cResult[2];
        }
        if (cResult[3] === tmp7) {
          if (cResult[4] === tmp13) {
            let tmp14 = cResult[5];
          }
          if (cResult[6] === tmp4.container) {
            if (cResult[7] === tmp14) {
              let tmp17 = cResult[8];
            }
            return tmp17;
          }
          const obj3 = { style: tmp4.container, children: tmp14 };
          const tmp20 = <View style={tmp4.container}>{tmp14}</View>;
          cResult[6] = tmp4.container;
          cResult[7] = tmp14;
          cResult[8] = tmp20;
          tmp17 = tmp20;
        }
        const obj4 = { stateMachine: "State Machine 1", fit: "contain", dataBinding: tmp13 };
        const tmp16 = jsx(
          BountiesScrollIndicatorRive.BountiesScrollIndicatorRive,
          { stateMachine: "State Machine 1", fit: "contain", dataBinding: tmp13 },
          tmp7,
        );
        cResult[3] = tmp7;
        cResult[4] = tmp13;
        cResult[5] = tmp16;
        tmp14 = tmp16;
      }
      const obj5 = { color: token, startAnimation: !visible.isFadingInContent };
      cResult[0] = token;
      cResult[1] = !visible.isFadingInContent;
      cResult[2] = obj5;
      tmp13 = obj5;
      const tmp6 = _slicedToArray(noop.useState(0), 2);
    }
  : (startAnimation) => {
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
          BountiesScrollIndicatorRive.BountiesScrollIndicatorRive,
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
            BountiesScrollIndicatorRive.BountiesScrollIndicatorRive,
            {
              stateMachine: "State Machine 1",
              fit: "contain",
              dataBinding: { color: token, startAnimation: !startAnimation.isFadingInContent },
            },
            tmp6,
          )}
        </View>
      );
    };
