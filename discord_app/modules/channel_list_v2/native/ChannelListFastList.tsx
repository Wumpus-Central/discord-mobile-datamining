// === Module 16227: ChannelListFastList ===

// Module 16227 (ChannelListFastList)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import FastListDefault from "FastList" /* 6576 */;
import reactDefault from "react" /* 16228 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const memoResult = react.memo(react.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let endReachedThreshold;
  let getItemSize;
  let getRecyclerKey;
  let getSectionFooterSize;
  let getSectionHeaderSize;
  let headerSize;
  let initialScrollItem;
  let initialScrollSection;
  let insetEnd;
  let listViewportHeight;
  let onEndReached;
  let onScroll;
  let onScrollWorklet;
  let renderAccessory;
  let renderHeader;
  let renderItem;
  let renderSectionFooter;
  let renderSectionHeader;
  let scrollIndicatorInsetBottom;
  let sections;
  let tmp5;
  let waitFor;
  const obj = react2;
  const cResult = obj.c(25);
  ({ endReachedThreshold, getItemSize, getRecyclerKey, getSectionFooterSize, getSectionHeaderSize, headerSize, initialScrollItem, initialScrollSection, insetEnd, listViewportHeight, onEndReached, onScroll, onScrollWorklet, renderAccessory, renderHeader, renderItem, renderSectionFooter, renderSectionHeader, scrollIndicatorInsetBottom, sections, waitFor } = arg0);
  const tmp4 = _slicedToArray(reactDefault(arg1), 2)[1];
  if (cResult[0] !== scrollIndicatorInsetBottom) {
    const obj2 = { bottom: scrollIndicatorInsetBottom };
    cResult[0] = scrollIndicatorInsetBottom;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
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
                                      if (cResult[20] === tmp5) {
                                        if (cResult[21] === sections) {
                                          if (cResult[22] === tmp4) {
                                            let tmp6;
                                            if (cResult[23] === waitFor) {
                                              tmp6 = cResult[24];
                                            }
                                            return tmp6;
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
  const tmp7 = jsx(FastListDefault, { insetEnd, scrollIndicatorInsets: tmp5, waitFor, ref: tmp4, chunkBase: listViewportHeight, stickyHeaderFooter: true, renderHeader, headerSize, endReachedThreshold, onEndReached, renderAccessory, disableContentWrappers: true, sections, stickySectionsVariant: "disabled", renderSection: renderSectionHeader, sectionSize: getSectionHeaderSize, renderItem, itemSize: getItemSize, renderSectionFooter, sectionFooterSize: getSectionFooterSize, optimizeListItemRender: true, getRecyclerKey, initialScrollSection, initialScrollItem, initialScrollOrientation: "center", onScroll, onScrollWorklet });
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
  cResult[20] = tmp5;
  cResult[21] = sections;
  cResult[22] = tmp4;
  cResult[23] = waitFor;
  cResult[24] = tmp7;
  tmp6 = tmp7;
}) : ((scrollIndicatorInsetBottom, arg1) => {
  let endReachedThreshold;
  let getItemSize;
  let getRecyclerKey;
  let getSectionFooterSize;
  let getSectionHeaderSize;
  let headerSize;
  let initialScrollItem;
  let initialScrollSection;
  let insetEnd;
  let listViewportHeight;
  let onEndReached;
  let onScroll;
  let onScrollWorklet;
  let renderAccessory;
  let renderHeader;
  let renderItem;
  let renderSectionFooter;
  let renderSectionHeader;
  let sections;
  let waitFor;
  scrollIndicatorInsetBottom = scrollIndicatorInsetBottom.scrollIndicatorInsetBottom;
  ({ endReachedThreshold, getItemSize, getRecyclerKey, getSectionFooterSize, getSectionHeaderSize, headerSize, initialScrollItem, initialScrollSection, insetEnd, listViewportHeight, onEndReached, onScroll, onScrollWorklet, renderAccessory, renderHeader, renderItem, renderSectionFooter, renderSectionHeader, sections, waitFor } = scrollIndicatorInsetBottom);
  const items = [scrollIndicatorInsetBottom];
  const ref = _slicedToArray(reactDefault(arg1), 2)[1];
  const scrollIndicatorInsets = react.useMemo(() => ({ bottom: scrollIndicatorInsetBottom }), items);
  return jsx(FastListDefault, { insetEnd, scrollIndicatorInsets, waitFor, ref, chunkBase, stickyHeaderFooter: true, renderHeader, headerSize, endReachedThreshold, onEndReached, renderAccessory, disableContentWrappers: true, sections, stickySectionsVariant: "disabled", renderSection, sectionSize, renderItem, itemSize, renderSectionFooter, sectionFooterSize, optimizeListItemRender: true, getRecyclerKey, initialScrollSection, initialScrollItem, initialScrollOrientation: "center", onScroll, onScrollWorklet });
})));
const result = size.fileFinishedImporting("modules/channel_list_v2/native/ChannelListFastList.tsx");

export default memoResult;