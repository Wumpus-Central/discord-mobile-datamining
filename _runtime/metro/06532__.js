// _runtime/metro/06532__.js
import ErrorMessages from "../06534_ErrorMessages.js";
import FlashList from "../06535_FlashList.js";
import _mod6555 from "06555__.js";
import _mod6556 from "06556__.js";
import _mod6594 from "06594__.js";
import RenderTargetOptions from "../06595_RenderTargetOptions.js";
import _modDef6596 from "06596__.js";
import _mod6597 from "06597__.js";
import Cancellable from "../06598_Cancellable.js";
import JSFPSMonitor from "../06599_JSFPSMonitor.js";
import _mod6601 from "06601__.js";
import runScrollBenchmark from "../06602_runScrollBenchmark.js";
import _mod6603 from "06603__.js";
import _mod6604 from "06604__.js";
import _modDef6605 from "06605__.js";
import LayoutCommitObserver from "../06606_LayoutCommitObserver.js";
import get_ActivityIndicator from "06533__.js";

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod6594.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef6596;
  exports.useBenchmark = _mod6597.useBenchmark;
  exports.BenchmarkParams = _mod6597.BenchmarkParams;
  exports.BenchmarkResult = _mod6597.BenchmarkResult;
  exports.useDataMultiplier = _mod6601.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod6555.useLayoutState;
  exports.useRecyclingState = _mod6603.useRecyclingState;
  exports.useMappingHelper = _mod6604.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef6605;
  exports.useFlashListContext = _mod6556.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
