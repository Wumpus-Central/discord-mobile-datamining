// discord_app/modules/stage_channels/native/components/BlankAudienceTile.tsx
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import importAllResult from "noop";
import { useWindowDimensions } from "../../../screen/useWindowDimensions.native.tsx";
import { RaisedHandIcon } from "AudienceTile.tsx";

const require = arg1;
const memoResult = require("noop").memo(() => {
  let obj = RaisedHandIcon /* RaisedHandIcon */;
  const audienceTileStyles = obj.useAudienceTileStyles();
  obj = { style: null };
  const items = [audienceTileStyles.container, ];
  obj = { width: RaisedHandIcon /* RaisedHandIcon */.getTileWidthStyle(useWindowDimensions().width) };
  items[1] = obj;
  obj[0] = items;
  return <View width={RaisedHandIcon /* RaisedHandIcon */.getTileWidthStyle(useWindowDimensions().width)} />;
});
const result = require("jsxProd").fileFinishedImporting("modules/stage_channels/native/components/BlankAudienceTile.tsx");

export default memoResult;