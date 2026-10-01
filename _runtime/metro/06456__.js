// _runtime/metro/06456__.js
import ErrorMessages from "../06458_ErrorMessages.js";
import FlashList from "../06459_FlashList.js";
import _mod6479 from "06479__.js";
import _mod6480 from "06480__.js";
import _mod6518 from "06518__.js";
import RenderTargetOptions from "../06519_RenderTargetOptions.js";
import _modDef6520 from "06520__.js";
import _mod6521 from "06521__.js";
import Cancellable from "../06522_Cancellable.js";
import JSFPSMonitor from "../06523_JSFPSMonitor.js";
import _mod6525 from "06525__.js";
import runScrollBenchmark from "../06526_runScrollBenchmark.js";
import _mod6527 from "06527__.js";
import _mod6528 from "06528__.js";
import _modDef6529 from "06529__.js";
import LayoutCommitObserver from "../06530_LayoutCommitObserver.js";
import get_ActivityIndicator from "06457__.js";

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod6518.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef6520;
  exports.useBenchmark = _mod6521.useBenchmark;
  exports.BenchmarkParams = _mod6521.BenchmarkParams;
  exports.BenchmarkResult = _mod6521.BenchmarkResult;
  exports.useDataMultiplier = _mod6525.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod6479.useLayoutState;
  exports.useRecyclingState = _mod6527.useRecyclingState;
  exports.useMappingHelper = _mod6528.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef6529;
  exports.useFlashListContext = _mod6480.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
