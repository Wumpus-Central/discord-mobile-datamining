// _runtime/metro/06344__.js
import ErrorMessages from "../06346_ErrorMessages.js";
import FlashList from "../06347_FlashList.js";
import _mod6367 from "06367__.js";
import _mod6368 from "06368__.js";
import _mod6406 from "06406__.js";
import RenderTargetOptions from "../06407_RenderTargetOptions.js";
import _modDef6408 from "06408__.js";
import _mod6409 from "06409__.js";
import Cancellable from "../06410_Cancellable.js";
import JSFPSMonitor from "../06411_JSFPSMonitor.js";
import _mod6413 from "06413__.js";
import runScrollBenchmark from "../06414_runScrollBenchmark.js";
import _mod6415 from "06415__.js";
import _mod6416 from "06416__.js";
import _modDef6417 from "06417__.js";
import LayoutCommitObserver from "../06418_LayoutCommitObserver.js";
import get_ActivityIndicator from "06345__.js";

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod6406.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef6408;
  exports.useBenchmark = _mod6409.useBenchmark;
  exports.BenchmarkParams = _mod6409.BenchmarkParams;
  exports.BenchmarkResult = _mod6409.BenchmarkResult;
  exports.useDataMultiplier = _mod6413.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod6367.useLayoutState;
  exports.useRecyclingState = _mod6415.useRecyclingState;
  exports.useMappingHelper = _mod6416.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef6417;
  exports.useFlashListContext = _mod6368.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
