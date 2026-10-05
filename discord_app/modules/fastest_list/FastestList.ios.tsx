// discord_app/modules/fastest_list/FastestList.ios.tsx
import react_native from "../../../_runtime/00017_react-native.js";
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import useFastestListPropsEstimatedListSizeDefault from "props/useFastestListPropsEstimatedListSize.native.tsx";
import FastestListItemTypeDefault from "FastestListItemType.tsx";
import useFastestListPropsScrollReportingDefault from "props/useFastestListPropsScrollReporting.native.tsx";
import FastList from "../../lib/native/FastList.tsx";
import _objectWithoutProperties from "../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../_runtime/00019_react.js";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

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
const RefreshControl = react_native.RefreshControl;
const jsx = Fragment.jsx;
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0, ref) => {
        let accessibilityLabel;
        let closure_0;
        let closure_1;
        let closure_2;
        let enabled;
        let estimatedListSize;
        let horizontal;
        let inActionSheet;
        let insetEnd;
        let insetStart;
        let itemSize;
        let keyExtractor;
        let keyboardDismissMode;
        let keyboardShouldPersistTaps;
        let listFooterAlwaysMounted;
        let listFooterSize;
        let listHeaderAlwaysMounted;
        let listHeaderSize;
        let onContentLengthChange;
        let onLayout;
        let onScrollBeginDrag;
        let onScrollEndDrag;
        let preventNativeModalDismiss;
        let renderAhead;
        let renderItem;
        let renderListFooter;
        let renderListHeader;
        let renderSectionFooter;
        let renderSectionHeader;
        let scrollEventThrottle;
        let scrollIndicatorInsetEnd;
        let scrollIndicatorInsetStart;
        let sectionFooterSize;
        let sectionHeaderIsSticky;
        let sectionHeaderSize;
        let sections;
        let showsHorizontalScrollIndicator;
        let showsVerticalScrollIndicator;
        let style;
        let tmp10;
        let tmp11;
        let tmp12;
        let tmp13;
        let tmp14;
        let tmp15;
        let tmp16;
        let tmp17;
        let tmp18;
        let tmp19;
        let tmp20;
        let tmp21;
        let tmp22;
        let tmp23;
        let tmp24;
        let tmp25;
        let tmp26;
        let tmp27;
        let tmp28;
        let tmp30;
        let tmp31;
        let tmp32;
        let tmp33;
        let tmp35;
        let tmp36;
        let tmp37;
        let tmp38;
        let tmp39;
        let tmp40;
        let tmp8;
        let tmp9;
        let tmp2 = dependencyMap;
        const tmp = _require;
        const obj = require("react");
        const cResult = obj.c(91);
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
          let num3 = 2;
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
          tmp8 = renderAhead;
          tmp9 = listHeaderAlwaysMounted;
          tmp10 = listFooterAlwaysMounted;
          tmp11 = horizontal;
          tmp12 = style;
          tmp13 = showsVerticalScrollIndicator;
          tmp14 = showsHorizontalScrollIndicator;
          tmp15 = sections;
          tmp16 = sectionHeaderSize;
          tmp17 = sectionFooterSize;
          tmp18 = scrollIndicatorInsetStart;
          tmp19 = scrollIndicatorInsetEnd;
          tmp20 = scrollEventThrottle;
          tmp21 = renderSectionHeader;
          tmp22 = renderSectionFooter;
          tmp23 = renderListHeader;
          tmp24 = renderListFooter;
          tmp25 = renderItem;
          tmp26 = tmp6;
          tmp27 = preventNativeModalDismiss;
          tmp28 = onLayout;
          tmp30 = listHeaderSize;
          tmp31 = listFooterSize;
          tmp32 = keyboardShouldPersistTaps;
          tmp33 = keyboardDismissMode;
          tmp35 = itemSize;
          tmp36 = insetStart;
          tmp37 = insetEnd;
          tmp38 = inActionSheet;
          tmp39 = estimatedListSize;
          tmp40 = accessibilityLabel;
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
        const tmp42 = undefined !== tmp10 && tmp10;
        if (undefined !== tmp8) {
          str = tmp8;
        }
        ({ onScrollBeginDrag, onScrollEndDrag } = useFastestListPropsScrollReportingDefault(
          tmp26,
          undefined !== tmp11 && tmp11,
        ));
        useFastestListPropsScrollReportingDefault(tmp26, undefined !== tmp11 && tmp11);
        if (cResult[35] === tmp39) {
          let tmp47;
          let tmp49;
          if (cResult[36] === (undefined !== tmp11 && tmp11)) {
            tmp47 = cResult[37];
          }
          const tmp48 = useFastestListPropsEstimatedListSizeDefault(tmp47);
          if (cResult[38] !== keyExtractor) {
            function _e(arg0, arg1, arg2) {
              if (FastList.FastListItemTypes.ITEM === arg0) {
                let tmp11Result;
                if (closure_0 != null) {
                  let num3 = arg2;
                  const ITEM = FastestListItemTypeDefault.ITEM;
                  if (arg2 == null) {
                    num3 = -1;
                  }
                  tmp11Result = tmp11(ITEM, arg1, num3);
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
            tmp49 = _e;
          } else {
            tmp49 = cResult[39];
          }
          if (null != tmp18) {
            let rect1;
            if (undefined !== tmp11 && tmp11) {
              const rect = { left: tmp18, right: tmp19 };
              rect1 = rect;
            } else {
              rect1 = { top: tmp18, bottom: tmp19 };
            }
            cResult[40] = undefined !== tmp11 && tmp11;
            cResult[41] = tmp19;
            cResult[42] = tmp18;
            cResult[43] = rect1;
          }
          if (cResult[44] === tmp38) {
            let tmp53;
            let AnimatedFastList;
            if (cResult[45] === tmp27) {
              tmp53 = cResult[46];
            }
            if ("animatedCallbacks" === tmp26.scrollReporting) {
              AnimatedFastList = tmp(6569).AnimatedFastList;
            } else {
              AnimatedFastList = tmp44(6569);
            }
            if (cResult[47] === (undefined !== tmp11 && tmp11)) {
              let tmp58;
              let tmp60;
              if (cResult[48] === onContentLengthChange) {
                tmp58 = cResult[49];
              }
              if (cResult[50] !== str) {
                let num48;
                if ("nominal" !== str) {
                  if ("half" === str) {
                    num48 = 14;
                  } else {
                    num48 = 16;
                  }
                }
                cResult[50] = str;
                class Ge {
                  constructor(arg0, arg1) {
                    if (closure_1 != null) {
                      let tmp2 = arg1;
                      if (closure_2) {
                        tmp2 = arg0;
                      }
                      tmp(tmp2);
                    }
                  }
                }
                tmp60 = num48;
              } else {
                tmp60 = cResult[51];
              }
              class Ge {
                constructor(arg0, arg1) {
                  if (closure_1 != null) {
                    let tmp2 = arg1;
                    if (closure_2) {
                      tmp2 = arg0;
                    }
                    tmp(tmp2);
                  }
                }
              }
              let tmp61;
              if (null != onContentLengthChange) {
                tmp61 = tmp58;
              }
              let tmp62;
              if ("animatedScrollPosition" !== tmp26.scrollReporting) {
                tmp62 = tmp46;
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
                  if (cResult[54] === tmp48) {
                    if (cResult[55] === tmp49) {
                      if (cResult[56] === (undefined !== tmp11 && tmp11)) {
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
                                              if (cResult[68] === tmp53) {
                                                if (cResult[69] === tmp25) {
                                                  if (cResult[70] === tmp24) {
                                                    if (cResult[71] === tmp23) {
                                                      if (cResult[72] === tmp22) {
                                                        if (cResult[73] === tmp21) {
                                                          if (cResult[74] === tmp20) {
                                                            if (cResult[75] === tmp51) {
                                                              if (cResult[76] === tmp17) {
                                                                if (cResult[77] === tmp16) {
                                                                  if (cResult[78] === tmp15) {
                                                                    if (cResult[79] === tmp14) {
                                                                      if (cResult[80] === tmp13) {
                                                                        if (cResult[81] === tmp12) {
                                                                          if ((cResult[82] === null) == tmp51) {
                                                                            if (cResult[83] === tmp60) {
                                                                              if (cResult[84] === "disabled") {
                                                                                if (cResult[85] === tmp61) {
                                                                                  if (cResult[86] === tmp62) {
                                                                                    if (cResult[87] === ref) {
                                                                                      if (
                                                                                        cResult[88] === scrollPosition
                                                                                      ) {
                                                                                        let tmp65;
                                                                                        if (cResult[89] === tmp43) {
                                                                                          tmp65 = cResult[90];
                                                                                        }
                                                                                        return tmp65;
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
              const tmp67 = (
                <AnimatedFastList
                  accessibilityLabel={tmp40}
                  automaticallyAdjustsScrollIndicatorInsets={null == tmp51}
                  batchesToRender={tmp60}
                  refreshControl={tmp53}
                  chunkBase={tmp48}
                  stickySectionsVariant="disabled"
                  footerSize={tmp31}
                  getRecyclerKey={tmp49}
                  headerSize={tmp30}
                  horizontal={undefined !== tmp11 && tmp11}
                  inActionSheet={tmp38}
                  insetStart={tmp36}
                  insetEnd={tmp37}
                  itemSize={tmp35}
                  keyboardDismissMode={tmp33}
                  keyboardShouldPersistTaps={tmp32}
                  onContentSizeChange={tmp61}
                  onLayout={tmp28}
                  onScroll={tmp62}
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
                  scrollIndicatorInsets={tmp51}
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
              cResult[54] = tmp48;
              cResult[55] = tmp49;
              cResult[56] = undefined !== tmp11 && tmp11;
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
              cResult[68] = tmp53;
              cResult[69] = tmp25;
              cResult[70] = tmp24;
              cResult[71] = tmp23;
              cResult[72] = tmp22;
              cResult[73] = tmp21;
              cResult[74] = tmp20;
              cResult[75] = tmp51;
              cResult[76] = tmp17;
              cResult[77] = tmp16;
              cResult[78] = tmp15;
              cResult[79] = tmp14;
              cResult[80] = tmp13;
              cResult[81] = tmp12;
              cResult[82] = null == tmp51;
              cResult[83] = tmp60;
              cResult[84] = "disabled";
              cResult[85] = tmp61;
              cResult[86] = tmp62;
              cResult[87] = ref;
              cResult[88] = scrollPosition;
              cResult[89] = tmp43;
              cResult[90] = tmp67;
              tmp65 = tmp67;
            }
            class Ge {
              constructor(arg0, arg1) {
                if (closure_1 != null) {
                  let tmp2 = arg1;
                  if (closure_2) {
                    tmp2 = arg0;
                  }
                  tmp(tmp2);
                }
              }
            }
            cResult[47] = undefined !== tmp11 && tmp11;
            cResult[48] = onContentLengthChange;
            cResult[49] = Ge;
            tmp58 = Ge;
          }
          let tmp54;
          if (true === tmp27) {
            if (true === tmp38) {
              class Ge {
                constructor(arg0, arg1) {
                  if (closure_1 != null) {
                    let tmp2 = arg1;
                    if (closure_2) {
                      tmp2 = arg0;
                    }
                    tmp(tmp2);
                  }
                }
              }
              tmp54 = <RefreshControl refreshing={false} onRefresh={null} tintColor="transparent" />;
            }
          }
          cResult[44] = tmp38;
          cResult[45] = tmp27;
          cResult[46] = tmp54;
          tmp53 = tmp54;
        }
        const obj4 = { estimatedListSize: tmp39, horizontal: undefined !== tmp11 && tmp11 };
        cResult[35] = tmp39;
        cResult[36] = undefined !== tmp11 && tmp11;
        cResult[37] = obj4;
        tmp47 = obj4;
      }
    : (inActionSheet, ref) => {
        let accessibilityLabel;
        let enabled;
        let estimatedListSize;
        let horizontal;
        let insetEnd;
        let insetStart;
        let itemSize;
        let keyboardDismissMode;
        let keyboardShouldPersistTaps;
        let listFooterAlwaysMounted;
        let listFooterSize;
        let listHeaderAlwaysMounted;
        let listHeaderSize;
        let num;
        let onLayout;
        let onScroll;
        let onScrollBeginDrag;
        let onScrollEndDrag;
        let renderAhead;
        let renderItem;
        let renderListFooter;
        let renderListHeader;
        let renderSectionFooter;
        let renderSectionHeader;
        let scrollEventThrottle;
        let sectionFooterSize;
        let sectionHeaderIsSticky;
        let sectionHeaderSize;
        let sections;
        let showsHorizontalScrollIndicator;
        let showsVerticalScrollIndicator;
        let style;
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
        let tmp3 = keyExtractor;
        let tmp2 = inActionSheet;
        ({ onScroll, onScrollBeginDrag, onScrollEndDrag } = inActionSheet(keyExtractor[6])(merged, horizontal));
        const items = [keyExtractor];
        const items1 = [horizontal, scrollIndicatorInsetEnd, scrollIndicatorInsetStart];
        const tmp4 = inActionSheet(keyExtractor[6])(merged, horizontal);
        const tmp5 = inActionSheet(keyExtractor[7])({ estimatedListSize, horizontal });
        const callback = scrollIndicatorInsetEnd.useCallback((arg0, arg1, arg2) => {
          if (FastList.FastListItemTypes.ITEM === arg0) {
            let tmp11Result;
            if (keyExtractor != null) {
              let num3 = arg2;
              const ITEM = FastestListItemTypeDefault.ITEM;
              if (arg2 == null) {
                num3 = -1;
              }
              tmp11Result = tmp11(ITEM, arg1, num3);
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
          let tmp3;
          if (null != scrollIndicatorInsetStart) {
            let rect1;
            if (horizontal) {
              const rect = { left: scrollIndicatorInsetStart, right: scrollIndicatorInsetEnd };
              rect1 = rect;
            } else {
              rect1 = { top: scrollIndicatorInsetStart, bottom: scrollIndicatorInsetEnd };
            }
            tmp3 = rect1;
          }
          return tmp3;
        }, items1);
        const items2 = [preventNativeModalDismiss, inActionSheet];
        const memo1 = scrollIndicatorInsetEnd.useMemo(() => {
          let tmp;
          if (true === preventNativeModalDismiss) {
            if (true === inActionSheet) {
              tmp = <RefreshControl refreshing={false} onRefresh={noop} tintColor="transparent" />;
            }
          }
          return tmp;
        }, items2);
        const obj = scrollIndicatorInsetEnd;
        if ("animatedCallbacks" === merged.scrollReporting) {
          let AnimatedFastList = horizontal(tmp3[8]).AnimatedFastList;
        } else {
          AnimatedFastList = tmp2(tmp3[8]);
        }
        const items3 = [horizontal, onContentLengthChange];
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
            num = 14;
          } else {
            num = 16;
          }
        }
        let str3 = "disabled";
        if (sectionHeaderIsSticky) {
          str3 = "default";
        }
        let tmp12;
        if (null != onContentLengthChange) {
          tmp12 = callback1;
        }
        let tmp13;
        if ("animatedScrollPosition" !== merged.scrollReporting) {
          tmp13 = onScroll;
        }
        let scrollPosition;
        if ("animatedScrollPosition" === merged.scrollReporting) {
          scrollPosition = merged.scrollPosition;
        }
        if (!listHeaderAlwaysMounted) {
          listHeaderAlwaysMounted = listFooterAlwaysMounted;
        }
        return (
          <AnimatedFastList
            accessibilityLabel={accessibilityLabel}
            automaticallyAdjustsScrollIndicatorInsets={null == memo}
            batchesToRender={num}
            refreshControl={memo1}
            chunkBase={tmp5}
            stickySectionsVariant={str3}
            footerSize={listFooterSize}
            getRecyclerKey={callback}
            headerSize={listHeaderSize}
            horizontal={horizontal}
            inActionSheet={inActionSheet}
            insetStart={insetStart}
            insetEnd={insetEnd}
            itemSize={itemSize}
            keyboardDismissMode={keyboardDismissMode}
            keyboardShouldPersistTaps={keyboardShouldPersistTaps}
            onContentSizeChange={tmp12}
            onLayout={onLayout}
            onScroll={tmp13}
            onScrollBeginDrag={onScrollBeginDrag}
            onScrollEndDrag={onScrollEndDrag}
            optimizeListItemRender
            ref={ref}
            renderItem={renderItem}
            renderFooter={renderListFooter}
            renderHeader={renderListHeader}
            renderSection={renderSectionHeader}
            renderSectionFooter={renderSectionFooter}
            scrollEventThrottle={scrollEventThrottle}
            scrollIndicatorInsets={memo}
            scrollPosValue={scrollPosition}
            sections={sections}
            sectionSize={sectionHeaderSize}
            sectionFooterSize={sectionFooterSize}
            showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
            showsVerticalScrollIndicator={showsVerticalScrollIndicator}
            stickyHeaderFooter={listHeaderAlwaysMounted}
            style={style}
          />
        );
      },
);
const result = size.fileFinishedImporting("modules/fastest_list/FastestList.ios.tsx");

export default forwardRefResult;
