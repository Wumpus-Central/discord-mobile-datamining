// _runtime/metro/06337__.js
import ErrorMessages from "../06339_ErrorMessages.js";
import FlashList from "../06340_FlashList.js";
import _mod6360 from "06360__.js";
import react from "../06361_react.js";
import _mod6399 from "06399__.js";
import RenderTargetOptions from "../06400_RenderTargetOptions.js";
import react_nativeDefault from "../06401_react-native.js";
import _mod6402 from "06402__.js";
import autoScroll from "../06403_autoScroll.js";
import JSFPSMonitor from "../06404_JSFPSMonitor.js";
import _mod6406 from "06406__.js";
import _mod6407 from "06407__.js";
import _mod6408 from "06408__.js";
import react2 from "../06409_react.js";
import _modDef6410 from "06410__.js";
import LayoutCommitObserver from "../06411_LayoutCommitObserver.js";
import react_native from "../06338_react-native.js";

if (react_native.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod6399.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = react_nativeDefault;
  exports.useBenchmark = _mod6402.useBenchmark;
  exports.BenchmarkParams = _mod6402.BenchmarkParams;
  exports.BenchmarkResult = _mod6402.BenchmarkResult;
  exports.useDataMultiplier = _mod6406.useDataMultiplier;
  exports.useFlatListBenchmark = _mod6407.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = _mod6407.FlatListBenchmarkParams;
  exports.useLayoutState = _mod6360.useLayoutState;
  exports.useRecyclingState = _mod6408.useRecyclingState;
  exports.useMappingHelper = react2.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = autoScroll.autoScroll;
  exports.Cancellable = autoScroll.Cancellable;
  exports.ViewToken = _modDef6410;
  exports.useFlashListContext = react.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const self = this;
  const self2 = this;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
