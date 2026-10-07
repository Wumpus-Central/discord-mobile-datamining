// discord_app/modules/fastest_list/FastestList.ios.tsx
import FastestListItemTypeDefault from "FastestListItemType.tsx";
import useFastestListPropsScrollReportingDefault from "props/useFastestListPropsScrollReporting.native.tsx";
import FastList from "../../lib/native/FastList.tsx";
import _objectWithoutProperties from "../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop_mod from "../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
function noop() {}
let closure_3 = [
  "accessibilityLabel",
  "enabled",
  "estimatedListSize",
  "horizontal",
  "inActionSheet",
  "insetStart",
  "insetEnd",
  "itemSize",
  "keyboardDismissMode",
  "keyboardShouldPersistTaps",
  "keyExtractor",
  "listFooterSize",
  "listFooterAlwaysMounted",
  "listHeaderSize",
  "listHeaderAlwaysMounted",
  "onContentLengthChange",
  "onLayout",
  "preventNativeModalDismiss",
  "renderAhead",
  "renderItem",
  "renderListFooter",
  "renderListHeader",
  "renderSectionHeader",
  "renderSectionFooter",
  "scrollEventThrottle",
  "scrollIndicatorInsetEnd",
  "scrollIndicatorInsetStart",
  "sectionHeaderSize",
  "sectionHeaderIsSticky",
  "sectionFooterSize",
  "sections",
  "showsHorizontalScrollIndicator",
  "showsVerticalScrollIndicator",
  "style",
];
let noop = noop_mod;
const RefreshControl = fn(17).RefreshControl;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/fastest_list/FastestList.ios.tsx");

export default noop.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0, ref) => {
        const cResult = require("c").c(91);
        if (cResult[0] !== arg0) {
          ({
            accessibilityLabel,
            enabled,
            estimatedListSize,
            horizontal,
            inActionSheet,
            insetStart,
            insetEnd,
            itemSize,
            keyboardDismissMode,
            keyboardShouldPersistTaps,
            keyExtractor,
            listFooterSize,
            listFooterAlwaysMounted,
            listHeaderSize,
            listHeaderAlwaysMounted,
            onContentLengthChange,
            onLayout,
            preventNativeModalDismiss,
            renderAhead,
            renderItem,
            renderListFooter,
            renderListHeader,
            renderSectionHeader,
            renderSectionFooter,
            scrollEventThrottle,
            scrollIndicatorInsetEnd,
            scrollIndicatorInsetStart,
            sectionHeaderSize,
            sectionHeaderIsSticky,
            sectionFooterSize,
            sections,
            showsHorizontalScrollIndicator,
            showsVerticalScrollIndicator,
            style,
          } = arg0);
          const tmp6 = _objectWithoutProperties(arg0, closure_3);
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
          cResult[15] = tmp6;
          cResult[16] = renderItem;
          cResult[17] = renderListFooter;
          cResult[18] = renderListHeader;
          cResult[19] = renderSectionFooter;
          cResult[20] = renderSectionHeader;
          cResult[21] = scrollEventThrottle;
          cResult[22] = scrollIndicatorInsetEnd;
          cResult[23] = scrollIndicatorInsetStart;
          cResult[24] = sectionFooterSize;
          cResult[25] = sectionHeaderSize;
          cResult[26] = sections;
          cResult[27] = showsHorizontalScrollIndicator;
          cResult[28] = showsVerticalScrollIndicator;
          cResult[29] = style;
          cResult[30] = horizontal;
          cResult[31] = listFooterAlwaysMounted;
          cResult[32] = listHeaderAlwaysMounted;
          cResult[33] = renderAhead;
          cResult[34] = sectionHeaderIsSticky;
          let tmp7 = sectionHeaderIsSticky;
          let tmp8 = renderAhead;
          let tmp9 = listHeaderAlwaysMounted;
          let tmp10 = listFooterAlwaysMounted;
          let tmp11 = horizontal;
          let tmp12 = style;
          let tmp13 = showsVerticalScrollIndicator;
          let tmp14 = showsHorizontalScrollIndicator;
          let tmp15 = sections;
          let tmp16 = sectionHeaderSize;
          let tmp17 = sectionFooterSize;
          let tmp18 = scrollIndicatorInsetStart;
          let tmp19 = scrollIndicatorInsetEnd;
          let tmp20 = scrollEventThrottle;
          let tmp21 = renderSectionHeader;
          let tmp22 = renderSectionFooter;
          let tmp23 = renderListHeader;
          let tmp24 = renderListFooter;
          let tmp25 = renderItem;
          let tmp26 = tmp6;
          let tmp27 = preventNativeModalDismiss;
          let tmp28 = onLayout;
          let tmp30 = listHeaderSize;
          let tmp31 = listFooterSize;
          let tmp32 = keyboardShouldPersistTaps;
          let tmp33 = keyboardDismissMode;
          let tmp35 = itemSize;
          let tmp36 = insetStart;
          let tmp37 = insetEnd;
          let tmp38 = inActionSheet;
          let tmp39 = estimatedListSize;
          let tmp40 = accessibilityLabel;
        } else {
          tmp40 = cResult[1];
          tmp39 = cResult[2];
          tmp38 = cResult[3];
          tmp37 = cResult[4];
          tmp36 = cResult[5];
          tmp35 = cResult[6];
          _require = cResult[7];
          tmp33 = cResult[8];
          tmp32 = cResult[9];
          tmp31 = cResult[10];
          tmp30 = cResult[11];
          importDefault = cResult[12];
          tmp28 = cResult[13];
          tmp27 = cResult[14];
          tmp26 = cResult[15];
          tmp25 = cResult[16];
          tmp24 = cResult[17];
          tmp23 = cResult[18];
          tmp22 = cResult[19];
          tmp21 = cResult[20];
          tmp20 = cResult[21];
          tmp19 = cResult[22];
          tmp18 = cResult[23];
          tmp17 = cResult[24];
          tmp16 = cResult[25];
          tmp15 = cResult[26];
          tmp14 = cResult[27];
          tmp13 = cResult[28];
          tmp12 = cResult[29];
          tmp11 = cResult[30];
          tmp10 = cResult[31];
          tmp9 = cResult[32];
          tmp8 = cResult[33];
          tmp7 = cResult[34];
        }
        dependencyMap = tmp41;
        let tmp43 = undefined !== tmp9 && tmp9;
        let str = "nominal";
        if (undefined !== tmp8) {
          str = tmp8;
        }
        const obj = require("c");
        const tmp = _require;
        const tmp42 = undefined !== tmp10 && tmp10;
        const tmp44 = undefined === tmp7 || tmp7;
        ({ onScrollBeginDrag, onScrollEndDrag } = useFastestListPropsScrollReportingDefault(
          tmp26,
          undefined !== tmp11 && tmp11,
        ));
        if (cResult[35] === tmp39) {
          if (cResult[36] === tmp41) {
            let tmp48 = cResult[37];
          }
          const tmp49 = tmp45(6564)(tmp48);
          if (cResult[38] !== keyExtractor) {
            function _e(arg0, arg1, arg2) {
              if (FastList.FastListItemTypes.ITEM === arg0) {
                let tmp11Result;
                if (closure_0 != null) {
                  let num3 = arg2;
                  if (arg2 == null) {
                    num3 = -1;
                  }
                  tmp11Result = tmp11(FastestListItemTypeDefault.ITEM, arg1, num3);
                }
                return tmp11Result;
              } else if (FastList.FastListItemTypes.SECTION === arg0) {
                let tmp7Result;
                if (closure_0 != null) {
                  tmp7Result = tmp7(FastestListItemTypeDefault.SECTION_HEADER, arg1, -1);
                }
                return tmp7Result;
              } else if (FastList.FastListItemTypes.SECTION_FOOTER === arg0) {
                let tmp3Result;
                if (closure_0 != null) {
                  tmp3Result = tmp3(FastestListItemTypeDefault.SECTION_FOOTER, arg1, -1);
                }
                return tmp3Result;
              }
            }
            cResult[38] = keyExtractor;
            cResult[39] = _e;
            let tmp50 = _e;
          } else {
            tmp50 = cResult[39];
          }
          if (null == tmp18) {
            if (null == tmp19) {
              if (cResult[44] === tmp38) {
                if (cResult[45] === tmp27) {
                  let tmp54 = cResult[46];
                }
                if ("animatedCallbacks" === tmp26.scrollReporting) {
                  let AnimatedFastList = tmp(6576).AnimatedFastList;
                } else {
                  AnimatedFastList = tmp45(6576);
                }
                if (cResult[47] === tmp41) {
                  if (cResult[50] !== str) {
                    if ("nominal" === str) {
                      cResult[50] = str;
                      class Ge {
                        constructor(arg0, arg1) {
                          if (closure_1 != null) {
                            tmp2 = ref;
                            tmp3 = closure_2;
                            if (closure_2) {
                              tmp2 = arg0;
                            }
                            tmpResult = tmp(tmp2);
                          }
                          return;
                        }
                      }
                    }
                  } else {
                    let str5 = "disabled";
                    if (tmp44) {
                      str5 = "default";
                    }
                    class Ge {
                      constructor(arg0, arg1) {
                        if (closure_1 != null) {
                          tmp2 = ref;
                          tmp3 = closure_2;
                          if (closure_2) {
                            tmp2 = arg0;
                          }
                          tmpResult = tmp(tmp2);
                        }
                        return;
                      }
                    }
                    let tmp64;
                    if ("animatedScrollPosition" !== tmp26.scrollReporting) {
                      tmp64 = tmp47;
                    }
                    let scrollPosition;
                    if ("animatedScrollPosition" === tmp26.scrollReporting) {
                      scrollPosition = tmp26.scrollPosition;
                    }
                    if (!tmp43) {
                      tmp43 = tmp42;
                    }
                    if (cResult[52] === AnimatedFastList) {
                      if (cResult[53] === tmp40) {
                        if (cResult[54] === tmp49) {
                          if (cResult[55] === tmp50) {
                            if (cResult[56] === tmp41) {
                              if (cResult[57] === tmp38) {
                                if (cResult[58] === tmp37) {
                                  if (cResult[59] === tmp36) {
                                    if (cResult[60] === tmp35) {
                                      if (cResult[61] === tmp33) {
                                        if (cResult[62] === tmp32) {
                                          if (cResult[63] === tmp31) {
                                            if (cResult[64] === tmp30) {
                                              if (cResult[65] === tmp28) {
                                                if (cResult[66] === onScrollBeginDrag) {
                                                  if (cResult[67] === onScrollEndDrag) {
                                                    if (cResult[68] === tmp54) {
                                                      if (cResult[69] === tmp25) {
                                                        if (cResult[70] === tmp24) {
                                                          if (cResult[71] === tmp23) {
                                                            if (cResult[72] === tmp22) {
                                                              if (cResult[73] === tmp21) {
                                                                if (cResult[74] === tmp20) {
                                                                  if (cResult[75] === undefined) {
                                                                    if (cResult[76] === tmp17) {
                                                                      if (cResult[77] === tmp16) {
                                                                        if (cResult[78] === tmp15) {
                                                                          if (cResult[79] === tmp14) {
                                                                            if (cResult[80] === tmp13) {
                                                                              if (cResult[81] === tmp12) {
                                                                                if (cResult[82] === tmp60) {
                                                                                  if (cResult[83] === tmp61) {
                                                                                    if (cResult[84] === str5) {
                                                                                      if (cResult[85] === tmp63) {
                                                                                        if (cResult[86] === tmp64) {
                                                                                          if (cResult[87] === ref) {
                                                                                            if (
                                                                                              cResult[88] ===
                                                                                              scrollPosition
                                                                                            ) {
                                                                                              if (
                                                                                                cResult[89] === tmp43
                                                                                              ) {
                                                                                                let tmp67 = cResult[90];
                                                                                              }
                                                                                              return tmp67;
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
                    const obj2 = {
                      accessibilityLabel: tmp40,
                      automaticallyAdjustsScrollIndicatorInsets: tmp60,
                      batchesToRender: cResult[51],
                      refreshControl: tmp54,
                      chunkBase: tmp49,
                      stickySectionsVariant: str5,
                      footerSize: tmp31,
                      getRecyclerKey: tmp50,
                      headerSize: tmp30,
                      horizontal: tmp41,
                      inActionSheet: tmp38,
                      insetStart: tmp36,
                      insetEnd: tmp37,
                      itemSize: tmp35,
                      keyboardDismissMode: tmp33,
                      keyboardShouldPersistTaps: tmp32,
                      onContentSizeChange: undefined,
                      onLayout: tmp28,
                      onScroll: tmp64,
                      onScrollBeginDrag,
                      onScrollEndDrag,
                      optimizeListItemRender: true,
                      ref,
                      renderItem: tmp25,
                      renderFooter: tmp24,
                      renderHeader: tmp23,
                      renderSection: tmp21,
                      renderSectionFooter: tmp22,
                      scrollEventThrottle: tmp20,
                      scrollIndicatorInsets: undefined,
                      scrollPosValue: scrollPosition,
                      sections: tmp15,
                      sectionSize: tmp16,
                      sectionFooterSize: tmp17,
                      showsHorizontalScrollIndicator: tmp14,
                      showsVerticalScrollIndicator: tmp13,
                      stickyHeaderFooter: tmp43,
                      style: tmp12,
                    };
                    const tmp69 = (
                      <AnimatedFastList
                        accessibilityLabel={tmp40}
                        automaticallyAdjustsScrollIndicatorInsets={tmp60}
                        batchesToRender={cResult[51]}
                        refreshControl={tmp54}
                        chunkBase={tmp49}
                        stickySectionsVariant={str5}
                        footerSize={tmp31}
                        getRecyclerKey={tmp50}
                        headerSize={tmp30}
                        horizontal={tmp41}
                        inActionSheet={tmp38}
                        insetStart={tmp36}
                        insetEnd={tmp37}
                        itemSize={tmp35}
                        keyboardDismissMode={tmp33}
                        keyboardShouldPersistTaps={tmp32}
                        onContentSizeChange={undefined}
                        onLayout={tmp28}
                        onScroll={tmp64}
                        onScrollBeginDrag={onScrollBeginDrag}
                        onScrollEndDrag={onScrollEndDrag}
                        optimizeListItemRender
                        ref={ref}
                        renderItem={tmp25}
                        renderFooter={tmp24}
                        renderHeader={tmp23}
                        renderSection={tmp21}
                        renderSectionFooter={tmp22}
                        scrollEventThrottle={tmp20}
                        scrollIndicatorInsets={undefined}
                        scrollPosValue={scrollPosition}
                        sections={tmp15}
                        sectionSize={tmp16}
                        sectionFooterSize={tmp17}
                        showsHorizontalScrollIndicator={tmp14}
                        showsVerticalScrollIndicator={tmp13}
                        stickyHeaderFooter={tmp43}
                        style={tmp12}
                      />
                    );
                    cResult[52] = AnimatedFastList;
                    cResult[53] = tmp40;
                    cResult[54] = tmp49;
                    cResult[55] = tmp50;
                    cResult[56] = tmp41;
                    cResult[57] = tmp38;
                    cResult[58] = tmp37;
                    cResult[59] = tmp36;
                    cResult[60] = tmp35;
                    cResult[61] = tmp33;
                    cResult[62] = tmp32;
                    cResult[63] = tmp31;
                    cResult[64] = tmp30;
                    cResult[65] = tmp28;
                    cResult[66] = onScrollBeginDrag;
                    cResult[67] = onScrollEndDrag;
                    cResult[68] = tmp54;
                    cResult[69] = tmp25;
                    cResult[70] = tmp24;
                    cResult[71] = tmp23;
                    cResult[72] = tmp22;
                    cResult[73] = tmp21;
                    cResult[74] = tmp20;
                    cResult[75] = undefined;
                    cResult[76] = tmp17;
                    cResult[77] = tmp16;
                    cResult[78] = tmp15;
                    cResult[79] = tmp14;
                    cResult[80] = tmp13;
                    cResult[81] = tmp12;
                    cResult[82] = tmp60;
                    cResult[83] = cResult[51];
                    cResult[84] = str5;
                    cResult[85] = undefined;
                    cResult[86] = tmp64;
                    cResult[87] = ref;
                    cResult[88] = scrollPosition;
                    cResult[89] = tmp43;
                    cResult[90] = tmp69;
                    tmp67 = tmp69;
                  }
                }
                class Ge {
                  constructor(arg0, arg1) {
                    if (closure_1 != null) {
                      tmp2 = ref;
                      tmp3 = closure_2;
                      if (closure_2) {
                        tmp2 = arg0;
                      }
                      tmpResult = tmp(tmp2);
                    }
                    return;
                  }
                }
                cResult[47] = tmp41;
                cResult[48] = onContentLengthChange;
                cResult[49] = Ge;
              }
              let tmp55;
              if (true === tmp27) {
                if (true === tmp38) {
                  class Ge {
                    constructor(arg0, arg1) {
                      if (closure_1 != null) {
                        tmp2 = ref;
                        tmp3 = closure_2;
                        if (closure_2) {
                          tmp2 = arg0;
                        }
                        tmpResult = tmp(tmp2);
                      }
                      return;
                    }
                  }
                  tmp55 = <RefreshControl refreshing={false} onRefresh={null} tintColor="transparent" />;
                  const obj3 = { refreshing: false, onRefresh: null, tintColor: "transparent" };
                }
              }
              cResult[44] = tmp38;
              cResult[45] = tmp27;
              cResult[46] = tmp55;
              tmp54 = tmp55;
            }
          }
          if (tmp41) {
            const rect = { left: tmp18, right: tmp19 };
            let rect1 = rect;
          } else {
            rect1 = { top: tmp18, bottom: tmp19 };
          }
          cResult[40] = tmp41;
          cResult[41] = tmp19;
          cResult[42] = tmp18;
          cResult[43] = rect1;
        }
        const obj4 = { estimatedListSize: tmp39, horizontal: undefined !== tmp11 && tmp11 };
        cResult[35] = tmp39;
        cResult[36] = undefined !== tmp11 && tmp11;
        cResult[37] = obj4;
        tmp48 = obj4;
        const tmp46 = useFastestListPropsScrollReportingDefault(tmp26, undefined !== tmp11 && tmp11);
      }
    : (inActionSheet, ref) => {
        ({ enabled, horizontal } = inActionSheet);
        ({ accessibilityLabel, estimatedListSize } = inActionSheet);
        if (horizontal === undefined) {
          horizontal = false;
        }
        inActionSheet = inActionSheet.inActionSheet;
        const keyExtractor = inActionSheet.keyExtractor;
        ({
          listFooterAlwaysMounted,
          insetStart,
          insetEnd,
          itemSize,
          keyboardDismissMode,
          keyboardShouldPersistTaps,
          listFooterSize,
        } = inActionSheet);
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
        ({
          sectionHeaderIsSticky,
          renderItem,
          renderListFooter,
          renderListHeader,
          renderSectionHeader,
          renderSectionFooter,
          scrollEventThrottle,
          sectionHeaderSize,
        } = inActionSheet);
        if (sectionHeaderIsSticky === undefined) {
          sectionHeaderIsSticky = true;
        }
        ({ sectionFooterSize, sections, showsHorizontalScrollIndicator, showsVerticalScrollIndicator, style } =
          inActionSheet);
        const merged = Object.assign(
          inActionSheet,
          Object.assign({
            accessibilityLabel: 0,
            enabled: 0,
            estimatedListSize: 0,
            horizontal: 0,
            inActionSheet: 0,
            insetStart: 0,
            insetEnd: 0,
            itemSize: 0,
            keyboardDismissMode: 0,
            keyboardShouldPersistTaps: 0,
            keyExtractor: 0,
            listFooterSize: 0,
            listFooterAlwaysMounted: 0,
            listHeaderSize: 0,
            listHeaderAlwaysMounted: 0,
            onContentLengthChange: 0,
            onLayout: 0,
            preventNativeModalDismiss: 0,
            renderAhead: 0,
            renderItem: 0,
            renderListFooter: 0,
            renderListHeader: 0,
            renderSectionHeader: 0,
            renderSectionFooter: 0,
            scrollEventThrottle: 0,
            scrollIndicatorInsetEnd: 0,
            scrollIndicatorInsetStart: 0,
            sectionHeaderSize: 0,
            sectionHeaderIsSticky: 0,
            sectionFooterSize: 0,
            sections: 0,
            showsHorizontalScrollIndicator: 0,
            showsVerticalScrollIndicator: 0,
            style: 0,
          }),
        );
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
        const obj2 = {
          accessibilityLabel,
          automaticallyAdjustsScrollIndicatorInsets: null == memo,
          batchesToRender: null,
          refreshControl: null,
          chunkBase: null,
          stickySectionsVariant: null,
          footerSize: null,
          getRecyclerKey: null,
          headerSize: null,
          horizontal: null,
          inActionSheet: null,
          insetStart: null,
          insetEnd: null,
          itemSize: null,
          keyboardDismissMode: null,
          keyboardShouldPersistTaps: null,
          onContentSizeChange: null,
          onLayout: null,
          onScroll: null,
          onScrollBeginDrag: null,
          onScrollEndDrag: null,
          optimizeListItemRender: true,
          ref: null,
          renderItem: null,
          renderFooter: null,
          renderHeader: null,
          renderSection: null,
          renderSectionFooter: null,
          scrollEventThrottle: null,
          scrollIndicatorInsets: null,
          scrollPosValue: null,
          sections: null,
          sectionSize: null,
          sectionFooterSize: null,
          showsHorizontalScrollIndicator: null,
          showsVerticalScrollIndicator: null,
          stickyHeaderFooter: null,
          style: null,
        };
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
        return (
          <AnimatedFastList
            accessibilityLabel={accessibilityLabel}
            automaticallyAdjustsScrollIndicatorInsets={null == memo}
            batchesToRender={null}
            refreshControl={null}
            chunkBase={null}
            stickySectionsVariant={null}
            footerSize={null}
            getRecyclerKey={null}
            headerSize={null}
            horizontal={null}
            inActionSheet={null}
            insetStart={null}
            insetEnd={null}
            itemSize={null}
            keyboardDismissMode={null}
            keyboardShouldPersistTaps={null}
            onContentSizeChange={null}
            onLayout={null}
            onScroll={null}
            onScrollBeginDrag={null}
            onScrollEndDrag={null}
            optimizeListItemRender
            ref={null}
            renderItem={null}
            renderFooter={null}
            renderHeader={null}
            renderSection={null}
            renderSectionFooter={null}
            scrollEventThrottle={null}
            scrollIndicatorInsets={null}
            scrollPosValue={null}
            sections={null}
            sectionSize={null}
            sectionFooterSize={null}
            showsHorizontalScrollIndicator={null}
            showsVerticalScrollIndicator={null}
            stickyHeaderFooter={null}
            style={null}
          />
        );
      },
);
