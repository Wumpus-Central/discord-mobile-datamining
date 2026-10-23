// _runtime/metro/05492__.js
import ErrorMessages from "../05494_ErrorMessages.js";
import FlashList from "../05495_FlashList.js";
import _mod5515 from "05515__.js";
import _mod5516 from "05516__.js";
import _mod5554 from "05554__.js";
import RenderTargetOptions from "../05555_RenderTargetOptions.js";
import _modDef5556 from "05556__.js";
import _mod5557 from "05557__.js";
import Cancellable from "../05558_Cancellable.js";
import JSFPSMonitor from "../05559_JSFPSMonitor.js";
import _mod5561 from "05561__.js";
import runScrollBenchmark from "../05562_runScrollBenchmark.js";
import _mod5563 from "05563__.js";
import _mod5564 from "05564__.js";
import _modDef5565 from "05565__.js";
import LayoutCommitObserver from "../05566_LayoutCommitObserver.js";
import get_ActivityIndicator from "05493__.js";

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5554.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5556;
  exports.useBenchmark = _mod5557.useBenchmark;
  exports.BenchmarkParams = _mod5557.BenchmarkParams;
  exports.BenchmarkResult = _mod5557.BenchmarkResult;
  exports.useDataMultiplier = _mod5561.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5515.useLayoutState;
  exports.useRecyclingState = _mod5563.useRecyclingState;
  exports.useMappingHelper = _mod5564.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5565;
  exports.useFlashListContext = _mod5516.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
