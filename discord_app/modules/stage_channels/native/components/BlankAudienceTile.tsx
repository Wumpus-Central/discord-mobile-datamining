// === Module 10968: BlankAudienceTile ===

// Module 10968 (BlankAudienceTile)
import c from "c" /* 576 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import AudienceTile from "AudienceTile" /* 10969 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/BlankAudienceTile.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function BlankAudienceTile() {
  const cResult = c.c(7);
  const width = useWindowDimensionsDefault().width;
  const audienceTileStyles = AudienceTile.useAudienceTileStyles();
  if (cResult[0] !== width) {
    const tileWidthStyle = AudienceTile.getTileWidthStyle(width);
    cResult[0] = width;
    cResult[1] = tileWidthStyle;
    let tmp5 = tileWidthStyle;
    const tmpResult = AudienceTile;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== tmp5) {
    const obj3 = { width: tmp5 };
    cResult[2] = tmp5;
    cResult[3] = obj3;
    let tmp7 = obj3;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === audienceTileStyles.container) {
    if (cResult[5] === tmp7) {
      let tmp8 = cResult[6];
    }
    return tmp8;
  }
  const obj4 = { style: null };
  const items = [audienceTileStyles.container, tmp7];
  obj4.style = items;
  const tmp9 = <View style={null} />;
  cResult[4] = audienceTileStyles.container;
  cResult[5] = tmp7;
  cResult[6] = tmp9;
  tmp8 = tmp9;
}) : (function BlankAudienceTile() {
  const audienceTileStyles = AudienceTile.useAudienceTileStyles();
  const obj3 = { style: null };
  const items = [audienceTileStyles.container, ];
  items[1] = { width: AudienceTile.getTileWidthStyle(useWindowDimensionsDefault().width) };
  obj3.style = items;
  return <View style={null} />;
}));