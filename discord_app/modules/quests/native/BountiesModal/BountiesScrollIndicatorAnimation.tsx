// discord_app/modules/quests/native/BountiesModal/BountiesScrollIndicatorAnimation.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import BountiesScrollIndicatorRive from "../../../../../discord_common/js/packages/design/components/Rive/native/generated/BountiesScrollIndicatorRive.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let visible;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles(() => ({ container: { width: 80, height: 80 } }));
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (visible) => {
      let tmp7;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(9);
      visible = visible.visible;
      const isFadingInContent = visible.isFadingInContent;
      const tmp4 = closure_7();
      const obj2 = useToken;
      const token = obj2.useToken(nativeDefault.colors.TEXT_DEFAULT);
      [tmp7, tmp8] = react.useState(0);
      _slicedToArray(react.useState(0), 2);
      const tmp9 = _slicedToArray(react.useState(visible), 2);
      if (visible !== tmp9[0]) {
        tmp9[1](visible);
        if (visible) {
          tmp8((arg0) => arg0 + 1);
        }
      }
      if (cResult[0] === token) {
        let tmp13;
        if (cResult[1] === !isFadingInContent) {
          tmp13 = cResult[2];
        }
        if (cResult[3] === tmp7) {
          let tmp14;
          if (cResult[4] === tmp13) {
            tmp14 = cResult[5];
          }
          if (cResult[6] === tmp4.container) {
            let tmp17;
            if (cResult[7] === tmp14) {
              tmp17 = cResult[8];
            }
            return tmp17;
          }
          const tmp20 = <View style={tmp4.container}>{tmp14}</View>;
          cResult[6] = tmp4.container;
          cResult[7] = tmp14;
          cResult[8] = tmp20;
          tmp17 = tmp20;
        }
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
      const obj5 = { color: token, startAnimation: !isFadingInContent };
      cResult[0] = token;
      cResult[1] = !isFadingInContent;
      cResult[2] = obj5;
      tmp13 = obj5;
    }
  : (visible) => {
      let tmp6;
      let tmp7;
      visible = visible.visible;
      const isFadingInContent = visible.isFadingInContent;
      const tmp = closure_7();
      const obj = useToken;
      const token = obj.useToken(nativeDefault.colors.TEXT_DEFAULT);
      [tmp6, tmp7] = react.useState(0);
      _slicedToArray(react.useState(0), 2);
      const tmp8 = _slicedToArray(react.useState(visible), 2);
      if (visible !== tmp8[0]) {
        tmp8[1](visible);
        if (visible) {
          tmp7((arg0) => arg0 + 1);
        }
      }
      return <View style={tmp.container}>{null}</View>;
    };
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollIndicatorAnimation.tsx");

export default tmp2;
