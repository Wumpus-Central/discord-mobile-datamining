// === Module 17684: ChannelListFastList ===

// Module 17684 (ChannelListFastList)
import c from "c" /* 576 */;
import FastList from "FastList" /* 7167 */;
import useForwardedRefDefault from "useForwardedRef" /* 17685 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const FastListDefault = FastList;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/ChannelListFastList.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelListFastList(arg0) {
  const cResult = c.c(26);
  ({ endReachedThreshold, getItemSize, getRecyclerKey, getSectionFooterSize, getSectionHeaderSize, headerSize, initialScrollItem, initialScrollSection, insetEnd, listViewportHeight, onEndReached, onScroll, onScrollWorklet, renderAccessory, renderHeader, renderItem, renderSectionFooter, renderSectionHeader, scrollIndicatorInsetBottom, sections, waitFor, drawDistanceMode, ref } = arg0);
  const tmp5 = _slicedToArray(useForwardedRefDefault(ref), 2)[1];
  if (cResult[0] !== scrollIndicatorInsetBottom) {
    const obj2 = { bottom: scrollIndicatorInsetBottom };
    cResult[0] = scrollIndicatorInsetBottom;
    cResult[1] = obj2;
    let tmp6 = obj2;
  } else {
    tmp6 = cResult[1];
  }
  let num3 = 6;
  if ("viewport" === drawDistanceMode) {
    num3 = FastList.DEFAULT_BATCHES_TO_RENDER;
  }
  if (cResult[2] === endReachedThreshold) {
    if (cResult[3] === getItemSize) {
      if (cResult[4] === getRecyclerKey) {
        if (cResult[5] === getSectionFooterSize) {
          if (cResult[6] === getSectionHeaderSize) {
            if (cResult[7] === headerSize) {
              if (cResult[8] === initialScrollItem) {
                if (cResult[9] === initialScrollSection) {
                  if (cResult[10] === insetEnd) {
                    if (cResult[11] === listViewportHeight) {
                      if (cResult[12] === onEndReached) {
                        if (cResult[13] === onScroll) {
                          if (cResult[14] === onScrollWorklet) {
                            if (cResult[15] === renderAccessory) {
                              if (cResult[16] === renderHeader) {
                                if (cResult[17] === renderItem) {
                                  if (cResult[18] === renderSectionFooter) {
                                    if (cResult[19] === renderSectionHeader) {
                                      if (cResult[20] === tmp6) {
                                        if (cResult[21] === sections) {
                                          if (cResult[22] === tmp5) {
                                            if (cResult[23] === num3) {
                                              if (cResult[24] === waitFor) {
                                                let tmp7 = cResult[25];
                                              }
                                              return tmp7;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  const tmp8 = jsx(FastListDefault, { insetEnd, scrollIndicatorInsets: tmp6, waitFor, ref: tmp5, chunkBase: listViewportHeight, batchesToRender: num3, stickyHeaderFooter: true, renderHeader, headerSize, endReachedThreshold, onEndReached, renderAccessory, disableContentWrappers: true, sections, stickySectionsVariant: "disabled", renderSection: renderSectionHeader, sectionSize: getSectionHeaderSize, renderItem, itemSize: getItemSize, renderSectionFooter, sectionFooterSize: getSectionFooterSize, optimizeListItemRender: true, getRecyclerKey, initialScrollSection, initialScrollItem, initialScrollOrientation: "center", onScroll, onScrollWorklet });
  cResult[2] = endReachedThreshold;
  cResult[3] = getItemSize;
  cResult[4] = getRecyclerKey;
  cResult[5] = getSectionFooterSize;
  cResult[6] = getSectionHeaderSize;
  cResult[7] = headerSize;
  cResult[8] = initialScrollItem;
  cResult[9] = initialScrollSection;
  cResult[10] = insetEnd;
  cResult[11] = listViewportHeight;
  cResult[12] = onEndReached;
  cResult[13] = onScroll;
  cResult[14] = onScrollWorklet;
  cResult[15] = renderAccessory;
  cResult[16] = renderHeader;
  cResult[17] = renderItem;
  cResult[18] = renderSectionFooter;
  cResult[19] = renderSectionHeader;
  cResult[20] = tmp6;
  cResult[21] = sections;
  cResult[22] = tmp5;
  cResult[23] = num3;
  cResult[24] = waitFor;
  cResult[25] = tmp8;
  tmp7 = tmp8;
}) : (function ChannelListFastList(scrollIndicatorInsetBottom) {
  scrollIndicatorInsetBottom = scrollIndicatorInsetBottom.scrollIndicatorInsetBottom;
  ({ endReachedThreshold, getItemSize, getRecyclerKey, getSectionFooterSize, getSectionHeaderSize, headerSize, initialScrollItem, initialScrollSection, insetEnd, listViewportHeight, onEndReached, onScroll, onScrollWorklet, renderAccessory, renderHeader, renderItem, renderSectionFooter, renderSectionHeader, sections, waitFor, drawDistanceMode, ref } = scrollIndicatorInsetBottom);
  const items = [scrollIndicatorInsetBottom];
  const memo = noop.useMemo(() => ({ bottom: scrollIndicatorInsetBottom }), items);
  const obj = { insetEnd, scrollIndicatorInsets: memo, waitFor, ref: _slicedToArray(useForwardedRefDefault(ref), 2)[1], chunkBase: listViewportHeight, batchesToRender: null, stickyHeaderFooter: true, renderHeader: null, headerSize: null, endReachedThreshold: null, onEndReached: null, renderAccessory: null, disableContentWrappers: true, sections: null, stickySectionsVariant: "disabled", renderSection: null, sectionSize: null, renderItem: null, itemSize: null, renderSectionFooter: null, sectionFooterSize: null, optimizeListItemRender: true, getRecyclerKey: null, initialScrollSection: null, initialScrollItem: null, initialScrollOrientation: "center", onScroll: null, onScrollWorklet: null };
  let num = 6;
  if ("viewport" === drawDistanceMode) {
    num = FastList.DEFAULT_BATCHES_TO_RENDER;
  }
  obj.batchesToRender = num;
  obj.renderHeader = renderHeader;
  obj.headerSize = headerSize;
  obj.endReachedThreshold = endReachedThreshold;
  obj.onEndReached = onEndReached;
  obj.renderAccessory = renderAccessory;
  obj.sections = sections;
  obj.renderSection = renderSectionHeader;
  obj.sectionSize = getSectionHeaderSize;
  obj.renderItem = renderItem;
  obj.itemSize = getItemSize;
  obj.renderSectionFooter = renderSectionFooter;
  obj.sectionFooterSize = getSectionFooterSize;
  obj.getRecyclerKey = getRecyclerKey;
  obj.initialScrollSection = initialScrollSection;
  obj.initialScrollItem = initialScrollItem;
  obj.onScroll = onScroll;
  obj.onScrollWorklet = onScrollWorklet;
  return jsx(FastListDefault, { insetEnd, scrollIndicatorInsets: memo, waitFor, ref: _slicedToArray(useForwardedRefDefault(ref), 2)[1], chunkBase: listViewportHeight, batchesToRender: null, stickyHeaderFooter: true, renderHeader: null, headerSize: null, endReachedThreshold: null, onEndReached: null, renderAccessory: null, disableContentWrappers: true, sections: null, stickySectionsVariant: "disabled", renderSection: null, sectionSize: null, renderItem: null, itemSize: null, renderSectionFooter: null, sectionFooterSize: null, optimizeListItemRender: true, getRecyclerKey: null, initialScrollSection: null, initialScrollItem: null, initialScrollOrientation: "center", onScroll: null, onScrollWorklet: null });
}));