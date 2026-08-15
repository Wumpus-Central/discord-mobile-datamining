// _runtime/metro/07036__.js
import isNewArch from "isNewArch";

if (isNewArch.isNewArch()) {
  exports.FlashList = require("FlashList").FlashList;
  exports.FlashListRef = require("module_7098").FlashListRef;
  exports.FlashListProps = require("module_7099").FlashListProps;
  exports.ListRenderItem = require("module_7099").ListRenderItem;
  exports.ListRenderItemInfo = require("module_7099").ListRenderItemInfo;
  exports.RenderTarget = require("module_7099").RenderTarget;
  exports.RenderTargetOptions = require("module_7099").RenderTargetOptions;
  exports.AnimatedFlashList = require("FlashList");
  exports.useBenchmark = require("getFormattedString").useBenchmark;
  exports.BenchmarkParams = require("getFormattedString").BenchmarkParams;
  exports.BenchmarkResult = require("getFormattedString").BenchmarkResult;
  exports.useDataMultiplier = require("useDataMultiplier").useDataMultiplier;
  exports.useFlatListBenchmark = require("runScrollBenchmark").useFlatListBenchmark;
  exports.FlatListBenchmarkParams = require("runScrollBenchmark").FlatListBenchmarkParams;
  exports.useLayoutState = require("useLayoutState").useLayoutState;
  exports.useRecyclingState = require("useRecyclingState").useRecyclingState;
  exports.useMappingHelper = require("useMappingHelper").useMappingHelper;
  exports.JSFPSMonitor = require("JSFPSMonitor").JSFPSMonitor;
  exports.JSFPSResult = require("JSFPSMonitor").JSFPSResult;
  exports.autoScroll = require("Cancellable").autoScroll;
  exports.Cancellable = require("Cancellable").Cancellable;
  exports.ViewToken = require("module_7109");
  exports.useFlashListContext = require("context").useFlashListContext;
  exports.LayoutCommitObserver = require("LayoutCommitObserver").LayoutCommitObserver;
  exports.LayoutCommitObserverProps = require("LayoutCommitObserver").LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(require("module_7038").ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}