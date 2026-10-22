// _runtime/metro/05480__.js
import ErrorMessages from "../05482_ErrorMessages.js";
import FlashList from "../05483_FlashList.js";
import _mod5503 from "05503__.js";
import _mod5504 from "05504__.js";
import _mod5542 from "05542__.js";
import RenderTargetOptions from "../05543_RenderTargetOptions.js";
import _modDef5544 from "05544__.js";
import _mod5545 from "05545__.js";
import Cancellable from "../05546_Cancellable.js";
import JSFPSMonitor from "../05547_JSFPSMonitor.js";
import _mod5549 from "05549__.js";
import runScrollBenchmark from "../05550_runScrollBenchmark.js";
import _mod5551 from "05551__.js";
import _mod5552 from "05552__.js";
import _modDef5553 from "05553__.js";
import LayoutCommitObserver from "../05554_LayoutCommitObserver.js";
import get_ActivityIndicator from "05481__.js";

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5542.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5544;
  exports.useBenchmark = _mod5545.useBenchmark;
  exports.BenchmarkParams = _mod5545.BenchmarkParams;
  exports.BenchmarkResult = _mod5545.BenchmarkResult;
  exports.useDataMultiplier = _mod5549.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5503.useLayoutState;
  exports.useRecyclingState = _mod5551.useRecyclingState;
  exports.useMappingHelper = _mod5552.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5553;
  exports.useFlashListContext = _mod5504.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
