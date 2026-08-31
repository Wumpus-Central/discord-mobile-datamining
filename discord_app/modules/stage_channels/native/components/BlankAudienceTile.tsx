// === Module 10112: ? ===

// Module 10112
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import RaisedHandIcon from "RaisedHandIcon" /* 10113 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
const memoResult = importAllResult.memo(() => {
  let obj = RaisedHandIcon;
  const audienceTileStyles = obj.useAudienceTileStyles();
  obj = { style: null };
  const items = [audienceTileStyles.container, ];
  obj = { width: RaisedHandIcon.getTileWidthStyle(useWindowDimensionsDefault().width) };
  items[1] = obj;
  obj[0] = items;
  return <View width={RaisedHandIcon.getTileWidthStyle(useWindowDimensionsDefault().width)} />;
});
const result = require("set").fileFinishedImporting("modules/stage_channels/native/components/BlankAudienceTile.tsx");

export default memoResult;