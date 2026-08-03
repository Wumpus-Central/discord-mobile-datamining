import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import importAllResult from "noop";

const memoResult = require("noop").memo(function ChannelSafeAreaNoop() {
  return <View />;
});
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottomNoop.tsx");

export default memoResult;