// _runtime/metro/05476__.js
import ErrorMessages from "../05478_ErrorMessages.js";
import FlashList from "../05479_FlashList.js";
import _mod5499 from "05499__.js";
import _mod5500 from "05500__.js";
import _mod5538 from "05538__.js";
import RenderTargetOptions from "../05539_RenderTargetOptions.js";
import _modDef5540 from "05540__.js";
import _mod5541 from "05541__.js";
import Cancellable from "../05542_Cancellable.js";
import JSFPSMonitor from "../05543_JSFPSMonitor.js";
import _mod5545 from "05545__.js";
import runScrollBenchmark from "../05546_runScrollBenchmark.js";
import _mod5547 from "05547__.js";
import _mod5548 from "05548__.js";
import _modDef5549 from "05549__.js";
import LayoutCommitObserver from "../05550_LayoutCommitObserver.js";
import get_ActivityIndicator from "05477__.js";

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5538.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5540;
  exports.useBenchmark = _mod5541.useBenchmark;
  exports.BenchmarkParams = _mod5541.BenchmarkParams;
  exports.BenchmarkResult = _mod5541.BenchmarkResult;
  exports.useDataMultiplier = _mod5545.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5499.useLayoutState;
  exports.useRecyclingState = _mod5547.useRecyclingState;
  exports.useMappingHelper = _mod5548.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5549;
  exports.useFlashListContext = _mod5500.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
