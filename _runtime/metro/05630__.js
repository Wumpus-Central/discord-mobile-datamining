// _runtime/metro/05630__.js
import ErrorMessages from "../05632_ErrorMessages.js";
import FlashList from "../05633_FlashList.js";
import _mod5653 from "05653__.js";
import _mod5654 from "05654__.js";
import _mod5692 from "05692__.js";
import RenderTargetOptions from "../05693_RenderTargetOptions.js";
import _modDef5694 from "05694__.js";
import _mod5695 from "05695__.js";
import Cancellable from "../05696_Cancellable.js";
import JSFPSMonitor from "../05697_JSFPSMonitor.js";
import _mod5699 from "05699__.js";
import runScrollBenchmark from "../05700_runScrollBenchmark.js";
import _mod5701 from "05701__.js";
import _mod5702 from "05702__.js";
import _modDef5703 from "05703__.js";
import LayoutCommitObserver from "../05704_LayoutCommitObserver.js";
import get_ActivityIndicator from "05631__.js";

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5692.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5694;
  exports.useBenchmark = _mod5695.useBenchmark;
  exports.BenchmarkParams = _mod5695.BenchmarkParams;
  exports.BenchmarkResult = _mod5695.BenchmarkResult;
  exports.useDataMultiplier = _mod5699.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5653.useLayoutState;
  exports.useRecyclingState = _mod5701.useRecyclingState;
  exports.useMappingHelper = _mod5702.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5703;
  exports.useFlashListContext = _mod5654.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
