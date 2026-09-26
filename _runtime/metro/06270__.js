// _runtime/metro/06270__.js
import ErrorMessages from "../06272_ErrorMessages.js";
import FlashList from "../06273_FlashList.js";
import _mod6293 from "06293__.js";
import _mod6294 from "06294__.js";
import _mod6332 from "06332__.js";
import RenderTargetOptions from "../06333_RenderTargetOptions.js";
import _modDef6334 from "06334__.js";
import _mod6335 from "06335__.js";
import Cancellable from "../06336_Cancellable.js";
import JSFPSMonitor from "../06337_JSFPSMonitor.js";
import _mod6339 from "06339__.js";
import runScrollBenchmark from "../06340_runScrollBenchmark.js";
import _mod6341 from "06341__.js";
import _mod6342 from "06342__.js";
import _modDef6343 from "06343__.js";
import LayoutCommitObserver from "../06344_LayoutCommitObserver.js";
import get_ActivityIndicator from "06271__.js";

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod6332.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef6334;
  exports.useBenchmark = _mod6335.useBenchmark;
  exports.BenchmarkParams = _mod6335.BenchmarkParams;
  exports.BenchmarkResult = _mod6335.BenchmarkResult;
  exports.useDataMultiplier = _mod6339.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod6293.useLayoutState;
  exports.useRecyclingState = _mod6341.useRecyclingState;
  exports.useMappingHelper = _mod6342.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef6343;
  exports.useFlashListContext = _mod6294.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
