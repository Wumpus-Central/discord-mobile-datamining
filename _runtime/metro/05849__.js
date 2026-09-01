// _runtime/metro/05849__.js
import _mod5851 from "05851__.js";
import FlashList from "../05852_FlashList.js";
import useLayoutState from "../05872_useLayoutState.js";
import context from "../05873_context.js";
import _mod5911 from "05911__.js";
import _mod5912 from "05912__.js";
import FlashListDefault from "../05913_FlashList.js";
import getFormattedString from "../05914_getFormattedString.js";
import Cancellable from "../05915_Cancellable.js";
import JSFPSMonitor from "../05916_JSFPSMonitor.js";
import useDataMultiplier from "../05918_useDataMultiplier.js";
import runScrollBenchmark from "../05919_runScrollBenchmark.js";
import useRecyclingState from "../05920_useRecyclingState.js";
import useMappingHelper from "../05921_useMappingHelper.js";
import _modDef5922 from "05922__.js";
import LayoutCommitObserver from "../05923_LayoutCommitObserver.js";
import isNewArch from "../05850_isNewArch.js";

if (isNewArch.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5911.FlashListRef;
  exports.FlashListProps = _mod5912.FlashListProps;
  exports.ListRenderItem = _mod5912.ListRenderItem;
  exports.ListRenderItemInfo = _mod5912.ListRenderItemInfo;
  exports.RenderTarget = _mod5912.RenderTarget;
  exports.RenderTargetOptions = _mod5912.RenderTargetOptions;
  exports.AnimatedFlashList = FlashListDefault;
  exports.useBenchmark = getFormattedString.useBenchmark;
  exports.BenchmarkParams = getFormattedString.BenchmarkParams;
  exports.BenchmarkResult = getFormattedString.BenchmarkResult;
  exports.useDataMultiplier = useDataMultiplier.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = useLayoutState.useLayoutState;
  exports.useRecyclingState = useRecyclingState.useRecyclingState;
  exports.useMappingHelper = useMappingHelper.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef5922;
  exports.useFlashListContext = context.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(_mod5851.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}