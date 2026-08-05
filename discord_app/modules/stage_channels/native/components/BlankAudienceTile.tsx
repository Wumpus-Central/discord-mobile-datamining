// discord_app/modules/stage_channels/native/components/BlankAudienceTile.tsx
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo(() => {
  let obj = require("AudienceTile.tsx") /* RaisedHandIcon */;
  const audienceTileStyles = obj.useAudienceTileStyles();
  obj = { style: null };
  const items = [audienceTileStyles.container, ];
  obj = { width: require("AudienceTile.tsx") /* RaisedHandIcon */.getTileWidthStyle(require("../../../screen/useWindowDimensions.native.tsx")().width) };
  items[1] = obj;
  obj[0] = items;
  return <View width={require("AudienceTile.tsx") /* RaisedHandIcon */.getTileWidthStyle(require("../../../screen/useWindowDimensions.native.tsx")().width)} />;
});
const result = require("jsxProd").fileFinishedImporting("modules/stage_channels/native/components/BlankAudienceTile.tsx");

export default memoResult;