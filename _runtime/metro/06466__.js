// _runtime/metro/06466__.js
import ErrorMessages from "../06468_ErrorMessages.js";
import FlashList from "../06469_FlashList.js";
import _mod6489 from "06489__.js";
import _mod6490 from "06490__.js";
import _mod6528 from "06528__.js";
import RenderTargetOptions from "../06529_RenderTargetOptions.js";
import _modDef6530 from "06530__.js";
import _mod6531 from "06531__.js";
import Cancellable from "../06532_Cancellable.js";
import JSFPSMonitor from "../06533_JSFPSMonitor.js";
import _mod6535 from "06535__.js";
import runScrollBenchmark from "../06536_runScrollBenchmark.js";
import _mod6537 from "06537__.js";
import _mod6538 from "06538__.js";
import _modDef6539 from "06539__.js";
import LayoutCommitObserver from "../06540_LayoutCommitObserver.js";
import get_ActivityIndicator from "06467__.js";

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod6528.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef6530;
  exports.useBenchmark = _mod6531.useBenchmark;
  exports.BenchmarkParams = _mod6531.BenchmarkParams;
  exports.BenchmarkResult = _mod6531.BenchmarkResult;
  exports.useDataMultiplier = _mod6535.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod6489.useLayoutState;
  exports.useRecyclingState = _mod6537.useRecyclingState;
  exports.useMappingHelper = _mod6538.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef6539;
  exports.useFlashListContext = _mod6490.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
