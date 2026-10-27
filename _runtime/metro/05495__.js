// _runtime/metro/05495__.js
import ErrorMessages from "../05497_ErrorMessages.js";
import FlashList from "../05498_FlashList.js";
import _mod5518 from "05518__.js";
import _mod5519 from "05519__.js";
import _mod5557 from "05557__.js";
import RenderTargetOptions from "../05558_RenderTargetOptions.js";
import _modDef5559 from "05559__.js";
import _mod5560 from "05560__.js";
import Cancellable from "../05561_Cancellable.js";
import JSFPSMonitor from "../05562_JSFPSMonitor.js";
import _mod5564 from "05564__.js";
import runScrollBenchmark from "../05565_runScrollBenchmark.js";
import _mod5566 from "05566__.js";
import _mod5567 from "05567__.js";
import _modDef5568 from "05568__.js";
import LayoutCommitObserver from "../05569_LayoutCommitObserver.js";
import get_ActivityIndicator from "05496__.js";

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5557.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5559;
  exports.useBenchmark = _mod5560.useBenchmark;
  exports.BenchmarkParams = _mod5560.BenchmarkParams;
  exports.BenchmarkResult = _mod5560.BenchmarkResult;
  exports.useDataMultiplier = _mod5564.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5518.useLayoutState;
  exports.useRecyclingState = _mod5566.useRecyclingState;
  exports.useMappingHelper = _mod5567.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5568;
  exports.useFlashListContext = _mod5519.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
