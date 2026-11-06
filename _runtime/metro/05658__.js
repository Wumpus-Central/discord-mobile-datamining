// _runtime/metro/05658__.js
import ErrorMessages from "../05660_ErrorMessages.js";
import FlashList from "../05661_FlashList.js";
import _mod5681 from "05681__.js";
import _mod5682 from "05682__.js";
import _mod5720 from "05720__.js";
import RenderTargetOptions from "../05721_RenderTargetOptions.js";
import _modDef5722 from "05722__.js";
import _mod5723 from "05723__.js";
import Cancellable from "../05724_Cancellable.js";
import JSFPSMonitor from "../05725_JSFPSMonitor.js";
import _mod5727 from "05727__.js";
import runScrollBenchmark from "../05728_runScrollBenchmark.js";
import _mod5729 from "05729__.js";
import _mod5730 from "05730__.js";
import _modDef5731 from "05731__.js";
import LayoutCommitObserver from "../05732_LayoutCommitObserver.js";
import get_ActivityIndicator from "05659__.js";

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5720.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5722;
  exports.useBenchmark = _mod5723.useBenchmark;
  exports.BenchmarkParams = _mod5723.BenchmarkParams;
  exports.BenchmarkResult = _mod5723.BenchmarkResult;
  exports.useDataMultiplier = _mod5727.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5681.useLayoutState;
  exports.useRecyclingState = _mod5729.useRecyclingState;
  exports.useMappingHelper = _mod5730.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5731;
  exports.useFlashListContext = _mod5682.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
