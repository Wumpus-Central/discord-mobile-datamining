// _runtime/metro/05530__.js
import ErrorMessages from "../05532_ErrorMessages.js";
import FlashList from "../05533_FlashList.js";
import _mod5553 from "05553__.js";
import _mod5554 from "05554__.js";
import _mod5592 from "05592__.js";
import RenderTargetOptions from "../05593_RenderTargetOptions.js";
import _modDef5594 from "05594__.js";
import _mod5595 from "05595__.js";
import Cancellable from "../05596_Cancellable.js";
import JSFPSMonitor from "../05597_JSFPSMonitor.js";
import _mod5599 from "05599__.js";
import runScrollBenchmark from "../05600_runScrollBenchmark.js";
import _mod5601 from "05601__.js";
import _mod5602 from "05602__.js";
import _modDef5603 from "05603__.js";
import LayoutCommitObserver from "../05604_LayoutCommitObserver.js";
import get_ActivityIndicator from "05531__.js";

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5592.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5594;
  exports.useBenchmark = _mod5595.useBenchmark;
  exports.BenchmarkParams = _mod5595.BenchmarkParams;
  exports.BenchmarkResult = _mod5595.BenchmarkResult;
  exports.useDataMultiplier = _mod5599.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5553.useLayoutState;
  exports.useRecyclingState = _mod5601.useRecyclingState;
  exports.useMappingHelper = _mod5602.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5603;
  exports.useFlashListContext = _mod5554.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
