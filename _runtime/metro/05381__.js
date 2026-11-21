// _runtime/metro/05381__.js
import ErrorMessages from "../05383_ErrorMessages.js";
import FlashList from "../05384_FlashList.js";
import _mod5404 from "05404__.js";
import _mod5405 from "05405__.js";
import _mod5443 from "05443__.js";
import RenderTargetOptions from "../05444_RenderTargetOptions.js";
import _modDef5445 from "05445__.js";
import _mod5446 from "05446__.js";
import Cancellable from "../05447_Cancellable.js";
import JSFPSMonitor from "../05448_JSFPSMonitor.js";
import _mod5450 from "05450__.js";
import runScrollBenchmark from "../05451_runScrollBenchmark.js";
import _mod5452 from "05452__.js";
import _mod5453 from "05453__.js";
import _modDef5454 from "05454__.js";
import LayoutCommitObserver from "../05455_LayoutCommitObserver.js";
import get_ActivityIndicator from "05382__.js";

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5443.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5445;
  exports.useBenchmark = _mod5446.useBenchmark;
  exports.BenchmarkParams = _mod5446.BenchmarkParams;
  exports.BenchmarkResult = _mod5446.BenchmarkResult;
  exports.useDataMultiplier = _mod5450.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5404.useLayoutState;
  exports.useRecyclingState = _mod5452.useRecyclingState;
  exports.useMappingHelper = _mod5453.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5454;
  exports.useFlashListContext = _mod5405.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
