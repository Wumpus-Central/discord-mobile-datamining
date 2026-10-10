// _runtime/metro/06531__.js
import ErrorMessages from "../06533_ErrorMessages.js";
import FlashList from "../06534_FlashList.js";
import _mod6554 from "06554__.js";
import _mod6555 from "06555__.js";
import _mod6593 from "06593__.js";
import RenderTargetOptions from "../06594_RenderTargetOptions.js";
import _modDef6595 from "06595__.js";
import _mod6596 from "06596__.js";
import Cancellable from "../06597_Cancellable.js";
import JSFPSMonitor from "../06598_JSFPSMonitor.js";
import _mod6600 from "06600__.js";
import runScrollBenchmark from "../06601_runScrollBenchmark.js";
import _mod6602 from "06602__.js";
import _mod6603 from "06603__.js";
import _modDef6604 from "06604__.js";
import LayoutCommitObserver from "../06605_LayoutCommitObserver.js";
import get_ActivityIndicator from "06532__.js";

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod6593.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef6595;
  exports.useBenchmark = _mod6596.useBenchmark;
  exports.BenchmarkParams = _mod6596.BenchmarkParams;
  exports.BenchmarkResult = _mod6596.BenchmarkResult;
  exports.useDataMultiplier = _mod6600.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod6554.useLayoutState;
  exports.useRecyclingState = _mod6602.useRecyclingState;
  exports.useMappingHelper = _mod6603.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef6604;
  exports.useFlashListContext = _mod6555.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
