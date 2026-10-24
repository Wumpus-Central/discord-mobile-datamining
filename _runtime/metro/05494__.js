// _runtime/metro/05494__.js
import ErrorMessages from "../05496_ErrorMessages.js";
import FlashList from "../05497_FlashList.js";
import _mod5517 from "05517__.js";
import _mod5518 from "05518__.js";
import _mod5556 from "05556__.js";
import RenderTargetOptions from "../05557_RenderTargetOptions.js";
import _modDef5558 from "05558__.js";
import _mod5559 from "05559__.js";
import Cancellable from "../05560_Cancellable.js";
import JSFPSMonitor from "../05561_JSFPSMonitor.js";
import _mod5563 from "05563__.js";
import runScrollBenchmark from "../05564_runScrollBenchmark.js";
import _mod5565 from "05565__.js";
import _mod5566 from "05566__.js";
import _modDef5567 from "05567__.js";
import LayoutCommitObserver from "../05568_LayoutCommitObserver.js";
import get_ActivityIndicator from "05495__.js";

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5556.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5558;
  exports.useBenchmark = _mod5559.useBenchmark;
  exports.BenchmarkParams = _mod5559.BenchmarkParams;
  exports.BenchmarkResult = _mod5559.BenchmarkResult;
  exports.useDataMultiplier = _mod5563.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5517.useLayoutState;
  exports.useRecyclingState = _mod5565.useRecyclingState;
  exports.useMappingHelper = _mod5566.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5567;
  exports.useFlashListContext = _mod5518.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
