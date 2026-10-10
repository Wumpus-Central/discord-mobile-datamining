// === Module 6759: fastest_list/FastestList ===

// Module 6759 (fastest_list/FastestList)
import FastestListItemTypeDefault from "FastestListItemType" /* 6752 */;
import useFastestListPropsScrollReportingDefault from "useFastestListPropsScrollReporting" /* 6754 */;
import FastList from "FastList" /* 6760 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop_mod from "module_19" /* 19 */;

const require = globalThis.__r;

const useFastestListPropsEstimatedListSizeDefault = tmp43(6748);
require = fn;
function noop() {

}
let closure_3 = ["accessibilityLabel", "enabled", "estimatedListSize", "horizontal", "inActionSheet", "insetStart", "insetEnd", "itemSize", "keyboardDismissMode", "keyboardShouldPersistTaps", "keyExtractor", "listFooterSize", "listFooterAlwaysMounted", "listHeaderSize", "listHeaderAlwaysMounted", "onContentLengthChange", "onLayout", "preventNativeModalDismiss", "renderAhead", "renderItem", "renderListFooter", "renderListHeader", "renderSectionHeader", "renderSectionFooter", "scrollEventThrottle", "scrollIndicatorInsetEnd", "scrollIndicatorInsetStart", "sectionHeaderSize", "sectionHeaderIsSticky", "sectionFooterSize", "sections", "showsHorizontalScrollIndicator", "showsVerticalScrollIndicator", "style", "ref"];
let noop = noop_mod;
const RefreshControl = fn(17).RefreshControl;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/fastest_list/FastestList.ios.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function FastestList(arg0) {
  const cResult = require("c").c(92);
  if (cResult[0] !== arg0) {
    ({ accessibilityLabel, enabled, estimatedListSize, horizontal, inActionSheet, insetStart, insetEnd, itemSize, keyboardDismissMode, keyboardShouldPersistTaps, keyExtractor, listFooterSize, listFooterAlwaysMounted, listHeaderSize, listHeaderAlwaysMounted, onContentLengthChange, onLayout, preventNativeModalDismiss, renderAhead, renderItem, renderListFooter, renderListHeader, renderSectionHeader, renderSectionFooter, scrollEventThrottle, scrollIndicatorInsetEnd, scrollIndicatorInsetStart, sectionHeaderSize, sectionHeaderIsSticky, sectionFooterSize, sections, showsHorizontalScrollIndicator, showsVerticalScrollIndicator, style, ref } = arg0);
    const tmp5 = _objectWithoutProperties(arg0, closure_3);
    _require = keyExtractor;
    importDefault = onContentLengthChange;
    cResult[0] = arg0;
    cResult[1] = accessibilityLabel;
    cResult[2] = estimatedListSize;
    cResult[3] = inActionSheet;
    cResult[4] = insetEnd;
    cResult[5] = insetStart;
    cResult[6] = itemSize;
    cResult[7] = keyExtractor;
    cResult[8] = keyboardDismissMode;
    cResult[9] = keyboardShouldPersistTaps;
    cResult[10] = listFooterSize;
    cResult[11] = listHeaderSize;
    cResult[12] = onContentLengthChange;
    cResult[13] = onLayout;
    cResult[14] = preventNativeModalDismiss;
    cResult[15] = tmp5;
    cResult[16] = ref;
    cResult[17] = renderItem;
    cResult[18] = renderListFooter;
    cResult[19] = renderListHeader;
    cResult[20] = renderSectionFooter;
    cResult[21] = renderSectionHeader;
    cResult[22] = scrollEventThrottle;
    cResult[23] = scrollIndicatorInsetEnd;
    cResult[24] = scrollIndicatorInsetStart;
    cResult[25] = sectionFooterSize;
    cResult[26] = sectionHeaderSize;
    cResult[27] = sections;
    cResult[28] = showsHorizontalScrollIndicator;
    cResult[29] = showsVerticalScrollIndicator;
    cResult[30] = style;
    cResult[31] = horizontal;
    cResult[32] = listFooterAlwaysMounted;
    cResult[33] = listHeaderAlwaysMounted;
    cResult[34] = renderAhead;
    cResult[35] = sectionHeaderIsSticky;
    let tmp10 = horizontal;
    let tmp17 = scrollIndicatorInsetStart;
    let tmp18 = scrollIndicatorInsetEnd;
    let tmp26 = tmp5;
    let tmp27 = preventNativeModalDismiss;
    let tmp38 = inActionSheet;
    let tmp39 = estimatedListSize;
  } else {
    tmp39 = cResult[2];
    tmp38 = cResult[3];
    _require = cResult[7];
    importDefault = cResult[12];
    tmp27 = cResult[14];
    tmp26 = cResult[15];
    tmp18 = cResult[23];
    tmp17 = cResult[24];
    tmp10 = cResult[31];
  }
  dependencyMap = tmp41;
  const obj = require("c");
  ({ onScrollBeginDrag, onScrollEndDrag } = useFastestListPropsScrollReportingDefault(tmp26, undefined !== tmp10 && tmp10));
  if (cResult[36] === tmp39) {
    if (cResult[37] === tmp41) {
      let tmp45 = cResult[38];
    }
    useFastestListPropsEstimatedListSizeDefault(tmp45);
    if (cResult[39] !== keyExtractor) {
      class Be {
        constructor(arg0, arg1, arg2) {
          tmp = closure_0;
          tmp2 = closure_2;
          if (closure_0(closure_2[8]).FastListItemTypes.ITEM === arg0) {
            tmp12 = null;
            tmp11Result = undefined;
            if (closure_0 != null) {
              num3 = arg2;
              tmp14 = closure_1;
              if (arg2 == null) {
                num3 = -1;
              }
              tmp11Result = tmp11(closure_1(tmp2[9]).ITEM, arg1, num3);
            }
            return tmp11Result;
          } else if (tmp(tmp2[8]).FastListItemTypes.SECTION === arg0) {
            tmp8 = null;
            tmp7Result = undefined;
            if (closure_0 != null) {
              tmp10 = closure_1;
              num2 = -1;
              tmp7Result = tmp7(closure_1(tmp2[9]).SECTION_HEADER, arg1, -1);
            }
            return tmp7Result;
          } else if (tmp(tmp2[8]).FastListItemTypes.SECTION_FOOTER === arg0) {
            tmp4 = null;
            tmp3Result = undefined;
            if (closure_0 != null) {
              tmp6 = closure_1;
              num = -1;
              tmp3Result = tmp3(closure_1(tmp2[9]).SECTION_FOOTER, arg1, -1);
            }
            return tmp3Result;
          } else {
            return;
          }
        }
      }
      cResult[39] = keyExtractor;
      cResult[40] = Be;
    } else {
      class Be {
        constructor(arg0, arg1, arg2) {
          tmp = closure_0;
          tmp2 = closure_2;
          if (closure_0(closure_2[8]).FastListItemTypes.ITEM === arg0) {
            tmp12 = null;
            tmp11Result = undefined;
            if (closure_0 != null) {
              num3 = arg2;
              tmp14 = closure_1;
              if (arg2 == null) {
                num3 = -1;
              }
              tmp11Result = tmp11(closure_1(tmp2[9]).ITEM, arg1, num3);
            }
            return tmp11Result;
          } else if (tmp(tmp2[8]).FastListItemTypes.SECTION === arg0) {
            tmp8 = null;
            tmp7Result = undefined;
            if (closure_0 != null) {
              tmp10 = closure_1;
              num2 = -1;
              tmp7Result = tmp7(closure_1(tmp2[9]).SECTION_HEADER, arg1, -1);
            }
            return tmp7Result;
          } else if (tmp(tmp2[8]).FastListItemTypes.SECTION_FOOTER === arg0) {
            tmp4 = null;
            tmp3Result = undefined;
            if (closure_0 != null) {
              tmp6 = closure_1;
              num = -1;
              tmp3Result = tmp3(closure_1(tmp2[9]).SECTION_FOOTER, arg1, -1);
            }
            return tmp3Result;
          } else {
            return;
          }
        }
      }
    }
    if (null == tmp17) {
      class Be {
        constructor(arg0, arg1, arg2) {
          tmp = closure_0;
          tmp2 = closure_2;
          if (closure_0(closure_2[8]).FastListItemTypes.ITEM === arg0) {
            tmp12 = null;
            tmp11Result = undefined;
            if (closure_0 != null) {
              num3 = arg2;
              tmp14 = closure_1;
              if (arg2 == null) {
                num3 = -1;
              }
              tmp11Result = tmp11(closure_1(tmp2[9]).ITEM, arg1, num3);
            }
            return tmp11Result;
          } else if (tmp(tmp2[8]).FastListItemTypes.SECTION === arg0) {
            tmp8 = null;
            tmp7Result = undefined;
            if (closure_0 != null) {
              tmp10 = closure_1;
              num2 = -1;
              tmp7Result = tmp7(closure_1(tmp2[9]).SECTION_HEADER, arg1, -1);
            }
            return tmp7Result;
          } else if (tmp(tmp2[8]).FastListItemTypes.SECTION_FOOTER === arg0) {
            tmp4 = null;
            tmp3Result = undefined;
            if (closure_0 != null) {
              tmp6 = closure_1;
              num = -1;
              tmp3Result = tmp3(closure_1(tmp2[9]).SECTION_FOOTER, arg1, -1);
            }
            return tmp3Result;
          } else {
            return;
          }
        }
      }
      if (null == tmp18) {
        class Be {
          constructor(arg0, arg1, arg2) {
            tmp = closure_0;
            tmp2 = closure_2;
            if (closure_0(closure_2[8]).FastListItemTypes.ITEM === arg0) {
              tmp12 = null;
              tmp11Result = undefined;
              if (closure_0 != null) {
                num3 = arg2;
                tmp14 = closure_1;
                if (arg2 == null) {
                  num3 = -1;
                }
                tmp11Result = tmp11(closure_1(tmp2[9]).ITEM, arg1, num3);
              }
              return tmp11Result;
            } else if (tmp(tmp2[8]).FastListItemTypes.SECTION === arg0) {
              tmp8 = null;
              tmp7Result = undefined;
              if (closure_0 != null) {
                tmp10 = closure_1;
                num2 = -1;
                tmp7Result = tmp7(closure_1(tmp2[9]).SECTION_HEADER, arg1, -1);
              }
              return tmp7Result;
            } else if (tmp(tmp2[8]).FastListItemTypes.SECTION_FOOTER === arg0) {
              tmp4 = null;
              tmp3Result = undefined;
              if (closure_0 != null) {
                tmp6 = closure_1;
                num = -1;
                tmp3Result = tmp3(closure_1(tmp2[9]).SECTION_FOOTER, arg1, -1);
              }
              return tmp3Result;
            } else {
              return;
            }
          }
        }
        let tmp53;
        if (true === tmp27) {
          class Be {
            constructor(arg0, arg1, arg2) {
              tmp = closure_0;
              tmp2 = closure_2;
              if (closure_0(closure_2[8]).FastListItemTypes.ITEM === arg0) {
                tmp12 = null;
                tmp11Result = undefined;
                if (closure_0 != null) {
                  num3 = arg2;
                  tmp14 = closure_1;
                  if (arg2 == null) {
                    num3 = -1;
                  }
                  tmp11Result = tmp11(closure_1(tmp2[9]).ITEM, arg1, num3);
                }
                return tmp11Result;
              } else if (tmp(tmp2[8]).FastListItemTypes.SECTION === arg0) {
                tmp8 = null;
                tmp7Result = undefined;
                if (closure_0 != null) {
                  tmp10 = closure_1;
                  num2 = -1;
                  tmp7Result = tmp7(closure_1(tmp2[9]).SECTION_HEADER, arg1, -1);
                }
                return tmp7Result;
              } else if (tmp(tmp2[8]).FastListItemTypes.SECTION_FOOTER === arg0) {
                tmp4 = null;
                tmp3Result = undefined;
                if (closure_0 != null) {
                  tmp6 = closure_1;
                  num = -1;
                  tmp3Result = tmp3(closure_1(tmp2[9]).SECTION_FOOTER, arg1, -1);
                }
                return tmp3Result;
              } else {
                return;
              }
            }
          }
          if (true === tmp38) {
            class Be {
              constructor(arg0, arg1, arg2) {
                tmp = closure_0;
                tmp2 = closure_2;
                if (closure_0(closure_2[8]).FastListItemTypes.ITEM === arg0) {
                  tmp12 = null;
                  tmp11Result = undefined;
                  if (closure_0 != null) {
                    num3 = arg2;
                    tmp14 = closure_1;
                    if (arg2 == null) {
                      num3 = -1;
                    }
                    tmp11Result = tmp11(closure_1(tmp2[9]).ITEM, arg1, num3);
                  }
                  return tmp11Result;
                } else if (tmp(tmp2[8]).FastListItemTypes.SECTION === arg0) {
                  tmp8 = null;
                  tmp7Result = undefined;
                  if (closure_0 != null) {
                    tmp10 = closure_1;
                    num2 = -1;
                    tmp7Result = tmp7(closure_1(tmp2[9]).SECTION_HEADER, arg1, -1);
                  }
                  return tmp7Result;
                } else if (tmp(tmp2[8]).FastListItemTypes.SECTION_FOOTER === arg0) {
                  tmp4 = null;
                  tmp3Result = undefined;
                  if (closure_0 != null) {
                    tmp6 = closure_1;
                    num = -1;
                    tmp3Result = tmp3(closure_1(tmp2[9]).SECTION_FOOTER, arg1, -1);
                  }
                  return tmp3Result;
                } else {
                  return;
                }
              }
            }
            const obj2 = { refreshing: false, onRefresh: noop, tintColor: "transparent" };
            tmp53 = <RefreshControl refreshing={false} onRefresh={noop} tintColor="transparent" />;
          }
        }
        cResult[45] = tmp38;
        cResult[46] = tmp27;
        cResult[47] = tmp53;
      }
    }
    if (cResult[41] === tmp41) {
      class Be {
        constructor(arg0, arg1, arg2) {
          tmp = closure_0;
          tmp2 = closure_2;
          if (closure_0(closure_2[8]).FastListItemTypes.ITEM === arg0) {
            tmp12 = null;
            tmp11Result = undefined;
            if (closure_0 != null) {
              num3 = arg2;
              tmp14 = closure_1;
              if (arg2 == null) {
                num3 = -1;
              }
              tmp11Result = tmp11(closure_1(tmp2[9]).ITEM, arg1, num3);
            }
            return tmp11Result;
          } else if (tmp(tmp2[8]).FastListItemTypes.SECTION === arg0) {
            tmp8 = null;
            tmp7Result = undefined;
            if (closure_0 != null) {
              tmp10 = closure_1;
              num2 = -1;
              tmp7Result = tmp7(closure_1(tmp2[9]).SECTION_HEADER, arg1, -1);
            }
            return tmp7Result;
          } else if (tmp(tmp2[8]).FastListItemTypes.SECTION_FOOTER === arg0) {
            tmp4 = null;
            tmp3Result = undefined;
            if (closure_0 != null) {
              tmp6 = closure_1;
              num = -1;
              tmp3Result = tmp3(closure_1(tmp2[9]).SECTION_FOOTER, arg1, -1);
            }
            return tmp3Result;
          } else {
            return;
          }
        }
      }
    }
    if (tmp41) {
      class Be {
        constructor(arg0, arg1, arg2) {
          tmp = closure_0;
          tmp2 = closure_2;
          if (closure_0(closure_2[8]).FastListItemTypes.ITEM === arg0) {
            tmp12 = null;
            tmp11Result = undefined;
            if (closure_0 != null) {
              num3 = arg2;
              tmp14 = closure_1;
              if (arg2 == null) {
                num3 = -1;
              }
              tmp11Result = tmp11(closure_1(tmp2[9]).ITEM, arg1, num3);
            }
            return tmp11Result;
          } else if (tmp(tmp2[8]).FastListItemTypes.SECTION === arg0) {
            tmp8 = null;
            tmp7Result = undefined;
            if (closure_0 != null) {
              tmp10 = closure_1;
              num2 = -1;
              tmp7Result = tmp7(closure_1(tmp2[9]).SECTION_HEADER, arg1, -1);
            }
            return tmp7Result;
          } else if (tmp(tmp2[8]).FastListItemTypes.SECTION_FOOTER === arg0) {
            tmp4 = null;
            tmp3Result = undefined;
            if (closure_0 != null) {
              tmp6 = closure_1;
              num = -1;
              tmp3Result = tmp3(closure_1(tmp2[9]).SECTION_FOOTER, arg1, -1);
            }
            return tmp3Result;
          } else {
            return;
          }
        }
      }
      tmp50[0] = tmp17;
      tmp50[1] = tmp18;
    } else {
      class Be {
        constructor(arg0, arg1, arg2) {
          tmp = closure_0;
          tmp2 = closure_2;
          if (closure_0(closure_2[8]).FastListItemTypes.ITEM === arg0) {
            tmp12 = null;
            tmp11Result = undefined;
            if (closure_0 != null) {
              num3 = arg2;
              tmp14 = closure_1;
              if (arg2 == null) {
                num3 = -1;
              }
              tmp11Result = tmp11(closure_1(tmp2[9]).ITEM, arg1, num3);
            }
            return tmp11Result;
          } else if (tmp(tmp2[8]).FastListItemTypes.SECTION === arg0) {
            tmp8 = null;
            tmp7Result = undefined;
            if (closure_0 != null) {
              tmp10 = closure_1;
              num2 = -1;
              tmp7Result = tmp7(closure_1(tmp2[9]).SECTION_HEADER, arg1, -1);
            }
            return tmp7Result;
          } else if (tmp(tmp2[8]).FastListItemTypes.SECTION_FOOTER === arg0) {
            tmp4 = null;
            tmp3Result = undefined;
            if (closure_0 != null) {
              tmp6 = closure_1;
              num = -1;
              tmp3Result = tmp3(closure_1(tmp2[9]).SECTION_FOOTER, arg1, -1);
            }
            return tmp3Result;
          } else {
            return;
          }
        }
      }
      tmp50[0] = tmp17;
      tmp50[1] = tmp18;
    }
    cResult[41] = tmp41;
    cResult[42] = tmp18;
    cResult[43] = tmp17;
    cResult[44] = tmp50;
  }
  const obj3 = { estimatedListSize: tmp39, horizontal: undefined !== tmp10 && tmp10 };
  cResult[36] = tmp39;
  cResult[37] = undefined !== tmp10 && tmp10;
  cResult[38] = obj3;
  tmp45 = obj3;
  const tmp44 = useFastestListPropsScrollReportingDefault(tmp26, undefined !== tmp10 && tmp10);
}) : (function FastestList(inActionSheet) {
  ({ enabled, horizontal } = inActionSheet);
  ({ accessibilityLabel, estimatedListSize } = inActionSheet);
  if (horizontal === undefined) {
    horizontal = false;
  }
  inActionSheet = inActionSheet.inActionSheet;
  const keyExtractor = inActionSheet.keyExtractor;
  ({ listFooterAlwaysMounted, insetStart, insetEnd, itemSize, keyboardDismissMode, keyboardShouldPersistTaps, listFooterSize } = inActionSheet);
  if (listFooterAlwaysMounted === undefined) {
    listFooterAlwaysMounted = false;
  }
  ({ listHeaderAlwaysMounted, listHeaderSize } = inActionSheet);
  if (listHeaderAlwaysMounted === undefined) {
    listHeaderAlwaysMounted = false;
  }
  const onContentLengthChange = inActionSheet.onContentLengthChange;
  const preventNativeModalDismiss = inActionSheet.preventNativeModalDismiss;
  ({ renderAhead, onLayout } = inActionSheet);
  if (renderAhead === undefined) {
    renderAhead = "nominal";
  }
  const scrollIndicatorInsetEnd = inActionSheet.scrollIndicatorInsetEnd;
  const scrollIndicatorInsetStart = inActionSheet.scrollIndicatorInsetStart;
  ({ sectionHeaderIsSticky, renderItem, renderListFooter, renderListHeader, renderSectionHeader, renderSectionFooter, scrollEventThrottle, sectionHeaderSize } = inActionSheet);
  if (sectionHeaderIsSticky === undefined) {
    sectionHeaderIsSticky = true;
  }
  ({ sectionFooterSize, sections, showsHorizontalScrollIndicator, showsVerticalScrollIndicator, style, ref } = inActionSheet);
  const merged = Object.assign(inActionSheet, Object.assign({ accessibilityLabel: 0, enabled: 0, estimatedListSize: 0, horizontal: 0, inActionSheet: 0, insetStart: 0, insetEnd: 0, itemSize: 0, keyboardDismissMode: 0, keyboardShouldPersistTaps: 0, keyExtractor: 0, listFooterSize: 0, listFooterAlwaysMounted: 0, listHeaderSize: 0, listHeaderAlwaysMounted: 0, onContentLengthChange: 0, onLayout: 0, preventNativeModalDismiss: 0, renderAhead: 0, renderItem: 0, renderListFooter: 0, renderListHeader: 0, renderSectionHeader: 0, renderSectionFooter: 0, scrollEventThrottle: 0, scrollIndicatorInsetEnd: 0, scrollIndicatorInsetStart: 0, sectionHeaderSize: 0, sectionHeaderIsSticky: 0, sectionFooterSize: 0, sections: 0, showsHorizontalScrollIndicator: 0, showsVerticalScrollIndicator: 0, style: 0, ref: 0 }));
  ({ onScroll, onScrollBeginDrag, onScrollEndDrag } = inActionSheet(keyExtractor[6])(merged, horizontal));
  const items = [keyExtractor];
  let obj = scrollIndicatorInsetEnd;
  let tmp2 = inActionSheet;
  const tmp4 = inActionSheet(keyExtractor[6])(merged, horizontal);
  const items1 = [horizontal, scrollIndicatorInsetEnd, scrollIndicatorInsetStart];
  const callback = scrollIndicatorInsetEnd.useCallback((arg0, arg1, arg2) => {
    if (FastList.FastListItemTypes.ITEM === arg0) {
      let tmp11Result;
      if (keyExtractor != null) {
        let num3 = arg2;
        if (arg2 == null) {
          num3 = -1;
        }
        tmp11Result = tmp11(FastestListItemTypeDefault.ITEM, arg1, num3);
      }
      return tmp11Result;
    } else if (FastList.FastListItemTypes.SECTION === arg0) {
      let tmp7Result;
      if (keyExtractor != null) {
        tmp7Result = tmp7(FastestListItemTypeDefault.SECTION_HEADER, arg1, -1);
      }
      return tmp7Result;
    } else if (FastList.FastListItemTypes.SECTION_FOOTER === arg0) {
      let tmp3Result;
      if (keyExtractor != null) {
        tmp3Result = tmp3(FastestListItemTypeDefault.SECTION_FOOTER, arg1, -1);
      }
      return tmp3Result;
    }
  }, items);
  const memo = scrollIndicatorInsetEnd.useMemo(() => {
    if (horizontal) {
      const rect = { left: scrollIndicatorInsetStart, right: scrollIndicatorInsetEnd };
      let rect1 = rect;
    } else {
      rect1 = { top: scrollIndicatorInsetStart, bottom: scrollIndicatorInsetEnd };
    }
  }, items1);
  const items2 = [preventNativeModalDismiss, inActionSheet];
  const memo1 = scrollIndicatorInsetEnd.useMemo(() => {
    let tmp;
    if (true === preventNativeModalDismiss) {
      if (true === inActionSheet) {
        const obj = { refreshing: false, onRefresh: noop, tintColor: "transparent" };
        tmp = <RefreshControl refreshing={false} onRefresh={noop} tintColor="transparent" />;
      }
    }
    return tmp;
  }, items2);
  if ("animatedCallbacks" === merged.scrollReporting) {
    let AnimatedFastList = horizontal(tmp3[8]).AnimatedFastList;
  } else {
    AnimatedFastList = tmp2(tmp3[8]);
  }
  const items3 = [horizontal, onContentLengthChange];
  const obj2 = { accessibilityLabel, automaticallyAdjustsScrollIndicatorInsets: null == memo, batchesToRender: null, refreshControl: null, chunkBase: null, stickySectionsVariant: null, footerSize: null, getRecyclerKey: null, headerSize: null, horizontal: null, inActionSheet: null, insetStart: null, insetEnd: null, itemSize: null, keyboardDismissMode: null, keyboardShouldPersistTaps: null, onContentSizeChange: null, onLayout: null, onScroll: null, onScrollBeginDrag: null, onScrollEndDrag: null, optimizeListItemRender: true, ref: null, renderItem: null, renderFooter: null, renderHeader: null, renderSection: null, renderSectionFooter: null, scrollEventThrottle: null, scrollIndicatorInsets: null, scrollPosValue: null, sections: null, sectionSize: null, sectionFooterSize: null, showsHorizontalScrollIndicator: null, showsVerticalScrollIndicator: null, stickyHeaderFooter: null, style: null };
  const callback1 = obj.useCallback((arg0, arg1) => {
    if (onContentLengthChange != null) {
      let tmp2 = arg1;
      if (horizontal) {
        tmp2 = arg0;
      }
      tmp(tmp2);
    }
  }, items3);
  if ("nominal" !== renderAhead) {
    if ("half" === renderAhead) {
      let num = 14;
    } else {
      num = 16;
    }
  }
  obj2.batchesToRender = num;
  obj2.refreshControl = memo1;
  obj2.chunkBase = inActionSheet(keyExtractor[7])({ estimatedListSize, horizontal });
  let str3 = "disabled";
  if (sectionHeaderIsSticky) {
    str3 = "default";
  }
  obj2.stickySectionsVariant = str3;
  obj2.footerSize = listFooterSize;
  obj2.getRecyclerKey = callback;
  obj2.headerSize = listHeaderSize;
  obj2.horizontal = horizontal;
  obj2.inActionSheet = inActionSheet;
  obj2.insetStart = insetStart;
  obj2.insetEnd = insetEnd;
  obj2.itemSize = itemSize;
  obj2.keyboardDismissMode = keyboardDismissMode;
  obj2.keyboardShouldPersistTaps = keyboardShouldPersistTaps;
  let tmp12;
  if (null != onContentLengthChange) {
    tmp12 = callback1;
  }
  obj2.onContentSizeChange = tmp12;
  obj2.onLayout = onLayout;
  let tmp13;
  if ("animatedScrollPosition" !== merged.scrollReporting) {
    tmp13 = onScroll;
  }
  obj2.onScroll = tmp13;
  obj2.onScrollBeginDrag = onScrollBeginDrag;
  obj2.onScrollEndDrag = onScrollEndDrag;
  obj2.ref = ref;
  obj2.renderItem = renderItem;
  obj2.renderFooter = renderListFooter;
  obj2.renderHeader = renderListHeader;
  obj2.renderSection = renderSectionHeader;
  obj2.renderSectionFooter = renderSectionFooter;
  obj2.scrollEventThrottle = scrollEventThrottle;
  obj2.scrollIndicatorInsets = memo;
  let scrollPosition;
  if ("animatedScrollPosition" === merged.scrollReporting) {
    scrollPosition = merged.scrollPosition;
  }
  obj2.scrollPosValue = scrollPosition;
  obj2.sections = sections;
  obj2.sectionSize = sectionHeaderSize;
  obj2.sectionFooterSize = sectionFooterSize;
  obj2.showsHorizontalScrollIndicator = showsHorizontalScrollIndicator;
  obj2.showsVerticalScrollIndicator = showsVerticalScrollIndicator;
  if (!listHeaderAlwaysMounted) {
    listHeaderAlwaysMounted = listFooterAlwaysMounted;
  }
  obj2.stickyHeaderFooter = listHeaderAlwaysMounted;
  obj2.style = style;
  return <AnimatedFastList accessibilityLabel={accessibilityLabel} automaticallyAdjustsScrollIndicatorInsets={null == memo} batchesToRender={null} refreshControl={null} chunkBase={null} stickySectionsVariant={null} footerSize={null} getRecyclerKey={null} headerSize={null} horizontal={null} inActionSheet={null} insetStart={null} insetEnd={null} itemSize={null} keyboardDismissMode={null} keyboardShouldPersistTaps={null} onContentSizeChange={null} onLayout={null} onScroll={null} onScrollBeginDrag={null} onScrollEndDrag={null} optimizeListItemRender ref={null} renderItem={null} renderFooter={null} renderHeader={null} renderSection={null} renderSectionFooter={null} scrollEventThrottle={null} scrollIndicatorInsets={null} scrollPosValue={null} sections={null} sectionSize={null} sectionFooterSize={null} showsHorizontalScrollIndicator={null} showsVerticalScrollIndicator={null} stickyHeaderFooter={null} style={null} />;
});