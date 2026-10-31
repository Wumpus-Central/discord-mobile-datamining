// _runtime/metro/05500__.js
import ErrorMessages from "../05502_ErrorMessages.js";
import FlashList from "../05503_FlashList.js";
import _mod5523 from "05523__.js";
import _mod5524 from "05524__.js";
import _mod5562 from "05562__.js";
import RenderTargetOptions from "../05563_RenderTargetOptions.js";
import _modDef5564 from "05564__.js";
import _mod5565 from "05565__.js";
import Cancellable from "../05566_Cancellable.js";
import JSFPSMonitor from "../05567_JSFPSMonitor.js";
import _mod5569 from "05569__.js";
import runScrollBenchmark from "../05570_runScrollBenchmark.js";
import _mod5571 from "05571__.js";
import _mod5572 from "05572__.js";
import _modDef5573 from "05573__.js";
import LayoutCommitObserver from "../05574_LayoutCommitObserver.js";
import get_ActivityIndicator from "05501__.js";

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5562.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5564;
  exports.useBenchmark = _mod5565.useBenchmark;
  exports.BenchmarkParams = _mod5565.BenchmarkParams;
  exports.BenchmarkResult = _mod5565.BenchmarkResult;
  exports.useDataMultiplier = _mod5569.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5523.useLayoutState;
  exports.useRecyclingState = _mod5571.useRecyclingState;
  exports.useMappingHelper = _mod5572.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5573;
  exports.useFlashListContext = _mod5524.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
