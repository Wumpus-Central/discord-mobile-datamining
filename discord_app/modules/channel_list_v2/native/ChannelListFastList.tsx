// === Module 16187: ChannelListFastList ===

// Module 16187 (ChannelListFastList)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import FastListDefault from "FastList" /* 6569 */;
import reactDefault from "react" /* 16188 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const memoResult = react.memo(react.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let endReachedThreshold;
  let footerSize;
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
  const cResult = obj.c(26);
  ({ endReachedThreshold, footerSize, getItemSize, getRecyclerKey, getSectionFooterSize, getSectionHeaderSize, headerSize, initialScrollItem, initialScrollSection, insetEnd, listViewportHeight, onEndReached, onScroll, onScrollWorklet, renderAccessory, renderHeader, renderItem, renderSectionFooter, renderSectionHeader, scrollIndicatorInsetBottom, sections, waitFor } = arg0);
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
    if (cResult[3] === footerSize) {
      if (cResult[4] === getItemSize) {
        if (cResult[5] === getRecyclerKey) {
          if (cResult[6] === getSectionFooterSize) {
            if (cResult[7] === getSectionHeaderSize) {
              if (cResult[8] === headerSize) {
                if (cResult[9] === initialScrollItem) {
                  if (cResult[10] === initialScrollSection) {
                    if (cResult[11] === insetEnd) {
                      if (cResult[12] === listViewportHeight) {
                        if (cResult[13] === onEndReached) {
                          if (cResult[14] === onScroll) {
                            if (cResult[15] === onScrollWorklet) {
                              if (cResult[16] === renderAccessory) {
                                if (cResult[17] === renderHeader) {
                                  if (cResult[18] === renderItem) {
                                    if (cResult[19] === renderSectionFooter) {
                                      if (cResult[20] === renderSectionHeader) {
                                        if (cResult[21] === tmp5) {
                                          if (cResult[22] === sections) {
                                            if (cResult[23] === tmp4) {
                                              let tmp6;
                                              if (cResult[24] === waitFor) {
                                                tmp6 = cResult[25];
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
  }
  const tmp7 = jsx(FastListDefault, { insetEnd, scrollIndicatorInsets: tmp5, waitFor, ref: tmp4, chunkBase: listViewportHeight, stickyHeaderFooter: true, renderHeader, headerSize, footerSize, endReachedThreshold, onEndReached, renderAccessory, disableContentWrappers: true, sections, stickySectionsVariant: "disabled", renderSection: renderSectionHeader, sectionSize: getSectionHeaderSize, renderItem, itemSize: getItemSize, renderSectionFooter, sectionFooterSize: getSectionFooterSize, optimizeListItemRender: true, getRecyclerKey, initialScrollSection, initialScrollItem, initialScrollOrientation: "center", onScroll, onScrollWorklet });
  cResult[2] = endReachedThreshold;
  cResult[3] = footerSize;
  cResult[4] = getItemSize;
  cResult[5] = getRecyclerKey;
  cResult[6] = getSectionFooterSize;
  cResult[7] = getSectionHeaderSize;
  cResult[8] = headerSize;
  cResult[9] = initialScrollItem;
  cResult[10] = initialScrollSection;
  cResult[11] = insetEnd;
  cResult[12] = listViewportHeight;
  cResult[13] = onEndReached;
  cResult[14] = onScroll;
  cResult[15] = onScrollWorklet;
  cResult[16] = renderAccessory;
  cResult[17] = renderHeader;
  cResult[18] = renderItem;
  cResult[19] = renderSectionFooter;
  cResult[20] = renderSectionHeader;
  cResult[21] = tmp5;
  cResult[22] = sections;
  cResult[23] = tmp4;
  cResult[24] = waitFor;
  cResult[25] = tmp7;
  tmp6 = tmp7;
}) : ((scrollIndicatorInsetBottom, arg1) => {
  let endReachedThreshold;
  let footerSize;
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
  ({ endReachedThreshold, footerSize, getItemSize, getRecyclerKey, getSectionFooterSize, getSectionHeaderSize, headerSize, initialScrollItem, initialScrollSection, insetEnd, listViewportHeight, onEndReached, onScroll, onScrollWorklet, renderAccessory, renderHeader, renderItem, renderSectionFooter, renderSectionHeader, sections, waitFor } = scrollIndicatorInsetBottom);
  const items = [scrollIndicatorInsetBottom];
  const ref = _slicedToArray(reactDefault(arg1), 2)[1];
  const scrollIndicatorInsets = react.useMemo(() => ({ bottom: scrollIndicatorInsetBottom }), items);
  return jsx(FastListDefault, { insetEnd, scrollIndicatorInsets, waitFor, ref, chunkBase, stickyHeaderFooter: true, renderHeader, headerSize, footerSize, endReachedThreshold, onEndReached, renderAccessory, disableContentWrappers: true, sections, stickySectionsVariant: "disabled", renderSection, sectionSize, renderItem, itemSize, renderSectionFooter, sectionFooterSize, optimizeListItemRender: true, getRecyclerKey, initialScrollSection, initialScrollItem, initialScrollOrientation: "center", onScroll, onScrollWorklet });
})));
const result = size.fileFinishedImporting("modules/channel_list_v2/native/ChannelListFastList.tsx");

export default memoResult;