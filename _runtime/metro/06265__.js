// _runtime/metro/06265__.js
import ErrorMessages from "../06267_ErrorMessages.js";
import FlashList from "../06268_FlashList.js";
import _mod6288 from "06288__.js";
import _mod6289 from "06289__.js";
import _mod6327 from "06327__.js";
import RenderTargetOptions from "../06328_RenderTargetOptions.js";
import _modDef6329 from "06329__.js";
import _mod6330 from "06330__.js";
import Cancellable from "../06331_Cancellable.js";
import JSFPSMonitor from "../06332_JSFPSMonitor.js";
import _mod6334 from "06334__.js";
import runScrollBenchmark from "../06335_runScrollBenchmark.js";
import _mod6336 from "06336__.js";
import _mod6337 from "06337__.js";
import _modDef6338 from "06338__.js";
import LayoutCommitObserver from "../06339_LayoutCommitObserver.js";
import get_ActivityIndicator from "06266__.js";

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod6327.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef6329;
  exports.useBenchmark = _mod6330.useBenchmark;
  exports.BenchmarkParams = _mod6330.BenchmarkParams;
  exports.BenchmarkResult = _mod6330.BenchmarkResult;
  exports.useDataMultiplier = _mod6334.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod6288.useLayoutState;
  exports.useRecyclingState = _mod6336.useRecyclingState;
  exports.useMappingHelper = _mod6337.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef6338;
  exports.useFlashListContext = _mod6289.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
