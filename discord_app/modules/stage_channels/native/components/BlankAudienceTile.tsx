// discord_app/modules/stage_channels/native/components/BlankAudienceTile.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import AudienceTile from "AudienceTile.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const View = react_native.View;
const jsx = Fragment.jsx;
const memo = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let tmp5;
        let tmp7;
        const obj = react2;
        const cResult = obj.c(7);
        const width = useWindowDimensionsDefault().width;
        const obj2 = AudienceTile;
        const audienceTileStyles = obj2.useAudienceTileStyles();
        if (cResult[0] !== width) {
          const tmpResult = AudienceTile;
          const tileWidthStyle = tmpResult.getTileWidthStyle(width);
          cResult[0] = width;
          cResult[1] = tileWidthStyle;
          tmp5 = tileWidthStyle;
        } else {
          tmp5 = cResult[1];
        }
        if (cResult[2] !== tmp5) {
          const obj3 = { width: tmp5 };
          cResult[2] = tmp5;
          cResult[3] = obj3;
          tmp7 = obj3;
        } else {
          tmp7 = cResult[3];
        }
        if (cResult[4] === audienceTileStyles.container) {
          let tmp8;
          if (cResult[5] === tmp7) {
            tmp8 = cResult[6];
          }
          return tmp8;
        }
        const items = [audienceTileStyles.container, tmp7];
        const tmp9 = <View style={items} />;
        cResult[4] = audienceTileStyles.container;
        cResult[5] = tmp7;
        cResult[6] = tmp9;
        tmp8 = tmp9;
      }
    : () => {
        const width = useWindowDimensionsDefault().width;
        const obj = AudienceTile;
        const audienceTileStyles = obj.useAudienceTileStyles();
        const items = [audienceTileStyles.container];
        const obj2 = AudienceTile;
        items[1] = { width: obj2.getTileWidthStyle(width) };
        ({ width: obj2.getTileWidthStyle(width) });
        return <View style={items} />;
      },
);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/BlankAudienceTile.tsx");

export default memoResult;
