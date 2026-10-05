// === Module 9752: BlankAudienceTile ===

// Module 9752 (BlankAudienceTile)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import AudienceTile from "AudienceTile" /* 9753 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
}) : (() => {
  const width = useWindowDimensionsDefault().width;
  const obj = AudienceTile;
  const audienceTileStyles = obj.useAudienceTileStyles();
  const items = [audienceTileStyles.container, ];
  const obj2 = AudienceTile;
  items[1] = { width: obj2.getTileWidthStyle(width) };
  ({ width: obj2.getTileWidthStyle(width) });
  return <View style={items} />;
}));
const result = size.fileFinishedImporting("modules/stage_channels/native/components/BlankAudienceTile.tsx");

export default memoResult;