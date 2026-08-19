// === Module 12624: ? ===

// Module 12624
import useWindowDimensionsDefault from "useWindowDimensions" /* 1494 */;
import RaisedHandIcon from "RaisedHandIcon" /* 12625 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = fn;
const memoResult = importAllResult.memo(() => {
  let obj = RaisedHandIcon;
  const audienceTileStyles = obj.useAudienceTileStyles();
  const items = [audienceTileStyles.container, ];
  obj = { width: RaisedHandIcon.getTileWidthStyle(useWindowDimensionsDefault().width) };
  items[1] = obj;
  obj[0] = items;
  return <View width={RaisedHandIcon.getTileWidthStyle(useWindowDimensionsDefault().width)} />;
});
const result = require("obj132").fileFinishedImporting("modules/stage_channels/native/components/BlankAudienceTile.tsx");

export default memoResult;