// _runtime/metro/05806__.js
import ErrorMessages from "../05808_ErrorMessages.js";
import FlashList from "../05809_FlashList.js";
import _mod5829 from "05829__.js";
import _mod5830 from "05830__.js";
import _mod5868 from "05868__.js";
import RenderTargetOptions from "../05869_RenderTargetOptions.js";
import _modDef5870 from "05870__.js";
import _mod5871 from "05871__.js";
import Cancellable from "../05872_Cancellable.js";
import JSFPSMonitor from "../05873_JSFPSMonitor.js";
import _mod5875 from "05875__.js";
import runScrollBenchmark from "../05876_runScrollBenchmark.js";
import _mod5877 from "05877__.js";
import _mod5878 from "05878__.js";
import _modDef5879 from "05879__.js";
import LayoutCommitObserver from "../05880_LayoutCommitObserver.js";
import get_ActivityIndicator from "05807__.js";

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5868.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5870;
  exports.useBenchmark = _mod5871.useBenchmark;
  exports.BenchmarkParams = _mod5871.BenchmarkParams;
  exports.BenchmarkResult = _mod5871.BenchmarkResult;
  exports.useDataMultiplier = _mod5875.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5829.useLayoutState;
  exports.useRecyclingState = _mod5877.useRecyclingState;
  exports.useMappingHelper = _mod5878.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5879;
  exports.useFlashListContext = _mod5830.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
