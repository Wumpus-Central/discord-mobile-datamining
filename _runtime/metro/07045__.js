// _runtime/metro/07045__.js
import ErrorMessages from "../07047_ErrorMessages.js";
import FlashList from "../07048_FlashList.js";
import _mod7068 from "07068__.js";
import _mod7069 from "07069__.js";
import _mod7107 from "07107__.js";
import RenderTargetOptions from "../07108_RenderTargetOptions.js";
import _modDef7109 from "07109__.js";
import _mod7110 from "07110__.js";
import Cancellable from "../07111_Cancellable.js";
import JSFPSMonitor from "../07112_JSFPSMonitor.js";
import _mod7114 from "07114__.js";
import runScrollBenchmark from "../07115_runScrollBenchmark.js";
import _mod7116 from "07116__.js";
import _mod7117 from "07117__.js";
import _modDef7118 from "07118__.js";
import LayoutCommitObserver from "../07119_LayoutCommitObserver.js";
import get_ActivityIndicator from "07046__.js";

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod7107.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef7109;
  exports.useBenchmark = _mod7110.useBenchmark;
  exports.BenchmarkParams = _mod7110.BenchmarkParams;
  exports.BenchmarkResult = _mod7110.BenchmarkResult;
  exports.useDataMultiplier = _mod7114.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod7068.useLayoutState;
  exports.useRecyclingState = _mod7116.useRecyclingState;
  exports.useMappingHelper = _mod7117.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef7118;
  exports.useFlashListContext = _mod7069.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
