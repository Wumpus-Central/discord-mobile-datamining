// _runtime/metro/06536__.js
import ErrorMessages from "../06538_ErrorMessages.js";
import FlashList from "../06539_FlashList.js";
import _mod6559 from "06559__.js";
import _mod6560 from "06560__.js";
import _mod6598 from "06598__.js";
import RenderTargetOptions from "../06599_RenderTargetOptions.js";
import _modDef6600 from "06600__.js";
import _mod6601 from "06601__.js";
import Cancellable from "../06602_Cancellable.js";
import JSFPSMonitor from "../06603_JSFPSMonitor.js";
import _mod6605 from "06605__.js";
import runScrollBenchmark from "../06606_runScrollBenchmark.js";
import _mod6607 from "06607__.js";
import _mod6608 from "06608__.js";
import _modDef6609 from "06609__.js";
import LayoutCommitObserver from "../06610_LayoutCommitObserver.js";
import get_ActivityIndicator from "06537__.js";

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod6598.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef6600;
  exports.useBenchmark = _mod6601.useBenchmark;
  exports.BenchmarkParams = _mod6601.BenchmarkParams;
  exports.BenchmarkResult = _mod6601.BenchmarkResult;
  exports.useDataMultiplier = _mod6605.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod6559.useLayoutState;
  exports.useRecyclingState = _mod6607.useRecyclingState;
  exports.useMappingHelper = _mod6608.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef6609;
  exports.useFlashListContext = _mod6560.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
