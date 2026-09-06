// _runtime/metro/06852__.js
import ErrorMessages from "../06854_ErrorMessages.js";
import FlashList from "../06855_FlashList.js";
import _mod6875 from "06875__.js";
import _mod6876 from "06876__.js";
import _mod6914 from "06914__.js";
import RenderTargetOptions from "../06915_RenderTargetOptions.js";
import _modDef6916 from "06916__.js";
import _mod6917 from "06917__.js";
import Cancellable from "../06918_Cancellable.js";
import JSFPSMonitor from "../06919_JSFPSMonitor.js";
import _mod6921 from "06921__.js";
import runScrollBenchmark from "../06922_runScrollBenchmark.js";
import _mod6923 from "06923__.js";
import _mod6924 from "06924__.js";
import _modDef6925 from "06925__.js";
import LayoutCommitObserver from "../06926_LayoutCommitObserver.js";
import get_ActivityIndicator from "06853__.js";

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod6914.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef6916;
  exports.useBenchmark = _mod6917.useBenchmark;
  exports.BenchmarkParams = _mod6917.BenchmarkParams;
  exports.BenchmarkResult = _mod6917.BenchmarkResult;
  exports.useDataMultiplier = _mod6921.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod6875.useLayoutState;
  exports.useRecyclingState = _mod6923.useRecyclingState;
  exports.useMappingHelper = _mod6924.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef6925;
  exports.useFlashListContext = _mod6876.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
