// _runtime/metro/05623__.js
import ErrorMessages from "../05625_ErrorMessages.js";
import FlashList from "../05626_FlashList.js";
import _mod5646 from "05646__.js";
import _mod5647 from "05647__.js";
import _mod5685 from "05685__.js";
import RenderTargetOptions from "../05686_RenderTargetOptions.js";
import _modDef5687 from "05687__.js";
import _mod5688 from "05688__.js";
import Cancellable from "../05689_Cancellable.js";
import JSFPSMonitor from "../05690_JSFPSMonitor.js";
import _mod5692 from "05692__.js";
import runScrollBenchmark from "../05693_runScrollBenchmark.js";
import _mod5694 from "05694__.js";
import _mod5695 from "05695__.js";
import _modDef5696 from "05696__.js";
import LayoutCommitObserver from "../05697_LayoutCommitObserver.js";
import get_ActivityIndicator from "05624__.js";

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5685.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5687;
  exports.useBenchmark = _mod5688.useBenchmark;
  exports.BenchmarkParams = _mod5688.BenchmarkParams;
  exports.BenchmarkResult = _mod5688.BenchmarkResult;
  exports.useDataMultiplier = _mod5692.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5646.useLayoutState;
  exports.useRecyclingState = _mod5694.useRecyclingState;
  exports.useMappingHelper = _mod5695.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5696;
  exports.useFlashListContext = _mod5647.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
