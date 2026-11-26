// _runtime/metro/05511__.js
import ErrorMessages from "../05513_ErrorMessages.js";
import FlashList from "../05514_FlashList.js";
import _mod5534 from "05534__.js";
import _mod5535 from "05535__.js";
import _mod5573 from "05573__.js";
import RenderTargetOptions from "../05574_RenderTargetOptions.js";
import _modDef5575 from "05575__.js";
import _mod5576 from "05576__.js";
import Cancellable from "../05577_Cancellable.js";
import JSFPSMonitor from "../05578_JSFPSMonitor.js";
import _mod5580 from "05580__.js";
import runScrollBenchmark from "../05581_runScrollBenchmark.js";
import _mod5582 from "05582__.js";
import _mod5583 from "05583__.js";
import _modDef5584 from "05584__.js";
import LayoutCommitObserver from "../05585_LayoutCommitObserver.js";
import get_ActivityIndicator from "05512__.js";

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5573.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5575;
  exports.useBenchmark = _mod5576.useBenchmark;
  exports.BenchmarkParams = _mod5576.BenchmarkParams;
  exports.BenchmarkResult = _mod5576.BenchmarkResult;
  exports.useDataMultiplier = _mod5580.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5534.useLayoutState;
  exports.useRecyclingState = _mod5582.useRecyclingState;
  exports.useMappingHelper = _mod5583.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5584;
  exports.useFlashListContext = _mod5535.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
