// _runtime/metro/06809__.js
import ErrorMessages from "../06811_ErrorMessages.js";
import FlashList from "../06812_FlashList.js";
import _mod6832 from "06832__.js";
import _mod6833 from "06833__.js";
import _mod6871 from "06871__.js";
import RenderTargetOptions from "../06872_RenderTargetOptions.js";
import _modDef6873 from "06873__.js";
import _mod6874 from "06874__.js";
import Cancellable from "../06875_Cancellable.js";
import JSFPSMonitor from "../06876_JSFPSMonitor.js";
import _mod6878 from "06878__.js";
import runScrollBenchmark from "../06879_runScrollBenchmark.js";
import _mod6880 from "06880__.js";
import _mod6881 from "06881__.js";
import _modDef6882 from "06882__.js";
import LayoutCommitObserver from "../06883_LayoutCommitObserver.js";
import get_ActivityIndicator from "06810__.js";

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod6871.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef6873;
  exports.useBenchmark = _mod6874.useBenchmark;
  exports.BenchmarkParams = _mod6874.BenchmarkParams;
  exports.BenchmarkResult = _mod6874.BenchmarkResult;
  exports.useDataMultiplier = _mod6878.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod6832.useLayoutState;
  exports.useRecyclingState = _mod6880.useRecyclingState;
  exports.useMappingHelper = _mod6881.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef6882;
  exports.useFlashListContext = _mod6833.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
