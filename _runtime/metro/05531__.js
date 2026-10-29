// _runtime/metro/05531__.js
import ErrorMessages from "../05533_ErrorMessages.js";
import FlashList from "../05534_FlashList.js";
import _mod5554 from "05554__.js";
import _mod5555 from "05555__.js";
import _mod5593 from "05593__.js";
import RenderTargetOptions from "../05594_RenderTargetOptions.js";
import _modDef5595 from "05595__.js";
import _mod5596 from "05596__.js";
import Cancellable from "../05597_Cancellable.js";
import JSFPSMonitor from "../05598_JSFPSMonitor.js";
import _mod5600 from "05600__.js";
import runScrollBenchmark from "../05601_runScrollBenchmark.js";
import _mod5602 from "05602__.js";
import _mod5603 from "05603__.js";
import _modDef5604 from "05604__.js";
import LayoutCommitObserver from "../05605_LayoutCommitObserver.js";
import get_ActivityIndicator from "05532__.js";

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5593.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef5595;
  exports.useBenchmark = _mod5596.useBenchmark;
  exports.BenchmarkParams = _mod5596.BenchmarkParams;
  exports.BenchmarkResult = _mod5596.BenchmarkResult;
  exports.useDataMultiplier = _mod5600.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5554.useLayoutState;
  exports.useRecyclingState = _mod5602.useRecyclingState;
  exports.useMappingHelper = _mod5603.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5604;
  exports.useFlashListContext = _mod5555.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
