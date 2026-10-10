// discord_app/modules/bug_reporter/native/components/BugReporterFeatureActionSheet.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import fuzzysearchDefault from "../../../../../_runtime/06094_fuzzysearch.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5092);
let obj = { list: { paddingHorizontal: nativeDefault.space.PX_12 }, searchBar: null, sectionHeader: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_12 };
obj.searchBar = { paddingHorizontal: nativeDefault.space.PX_12 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_12 };
obj.sectionHeader = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, justifyContent: "center" };
let closure_8 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_9 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function BugReporterFeatureHeader(arg0) {
        const cResult = c.c(10);
        ({ title, height } = arg0);
        const tmp4 = closure_8();
        if (cResult[0] !== height) {
          const obj2 = { height };
          cResult[0] = height;
          cResult[1] = obj2;
          let tmp5 = obj2;
        } else {
          tmp5 = cResult[1];
        }
        if (cResult[2] === tmp4.sectionHeader) {
          if (cResult[3] === tmp5) {
            let tmp6 = cResult[4];
          }
          if (cResult[5] !== title) {
            const obj3 = { variant: "text-sm/bold", color: "text-muted", children: title };
            const tmp9 = timestampProducer(Text_Text.Text, obj3);
            cResult[5] = title;
            cResult[6] = tmp9;
            let tmp7 = tmp9;
          } else {
            tmp7 = cResult[6];
          }
          if (cResult[7] === tmp6) {
            if (cResult[8] === tmp7) {
              let tmp10 = cResult[9];
            }
            return tmp10;
          }
          const obj4 = { style: tmp6, children: tmp7 };
          const tmp13 = timestampProducer(View, obj4);
          cResult[7] = tmp6;
          cResult[8] = tmp7;
          cResult[9] = tmp13;
          tmp10 = tmp13;
        }
        const items = [tmp4.sectionHeader, tmp5];
        cResult[2] = tmp4.sectionHeader;
        cResult[3] = tmp5;
        cResult[4] = items;
        tmp6 = items;
      }
    : function BugReporterFeatureHeader(arg0) {
        ({ title, height } = arg0);
        const obj = { style: null, children: null };
        const items = [closure_8().sectionHeader, { height }];
        obj.style = items;
        obj.children = timestampProducer(Text_Text.Text, {
          variant: "text-sm/bold",
          color: "text-muted",
          children: title,
        });
        return timestampProducer(View, obj);
      },
);
ReactCompilerGating = fn(558);
let closure_10 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function BugReporterFeature(item) {
        const cResult = item(576).c(16);
        item = item.item;
        ({ feature, setFeature } = item);
        ({ start, end } = item);
        if (cResult[0] !== item) {
          const featureId = tmp(12627).getFeatureId(item);
          cResult[0] = item;
          cResult[1] = featureId;
          let tmp4 = featureId;
          const tmpResult = tmp(12627);
        } else {
          tmp4 = cResult[1];
        }
        if (cResult[2] !== item) {
          const featureId1 = tmp(12627).getFeatureId(item);
          cResult[2] = item;
          cResult[3] = featureId1;
          let tmp6 = featureId1;
          const tmpResult3 = tmp(12627);
        } else {
          tmp6 = cResult[3];
        }
        if (cResult[4] !== feature) {
          const featureId2 = tmp(12627).getFeatureId(feature);
          cResult[4] = feature;
          cResult[5] = featureId2;
          let tmp8 = featureId2;
          const tmpResult4 = tmp(12627);
        } else {
          tmp8 = cResult[5];
        }
        if (cResult[6] === item) {
          if (cResult[7] === setFeature) {
            let tmp10 = cResult[8];
          }
          if (cResult[9] === end) {
            if (cResult[10] === item.name) {
              if (cResult[11] === start) {
                if (cResult[12] === tmp4) {
                  if (cResult[13] === tmp11) {
                    if (cResult[14] === tmp10) {
                      let tmp12 = cResult[15];
                    }
                    return tmp12;
                  }
                }
              }
            }
          }
          const obj2 = {
            start,
            end,
            value: tmp4,
            label: item.name,
            legacyCompat_selected: tmp6 === tmp8,
            legacyCompat_onPress: tmp10,
          };
          const tmp14 = closure_6(tmp(6261).TableRadioRow, obj2);
          cResult[9] = end;
          cResult[10] = item.name;
          cResult[11] = start;
          cResult[12] = tmp4;
          cResult[13] = tmp6 === tmp8;
          cResult[14] = tmp10;
          cResult[15] = tmp14;
          tmp12 = tmp14;
        }
        const fn = function v() {
          setFeature(item);
          ActionSheetActionCreatorsDefault.hideActionSheet();
        };
        cResult[6] = item;
        cResult[7] = setFeature;
        cResult[8] = fn;
        tmp10 = fn;
        const obj = item(576);
      }
    : function BugReporterFeature(item) {
        item = item.item;
        const setFeature = item.setFeature;
        ({ feature, start, end } = item);
        const obj = {
          start,
          end,
          value: item(12627).getFeatureId(item),
          label: item.name,
          legacyCompat_selected: null,
          legacyCompat_onPress: null,
        };
        const obj2 = item(12627);
        const featureId = item(12627).getFeatureId(item);
        const obj3 = item(12627);
        obj.legacyCompat_selected = featureId === item(12627).getFeatureId(feature);
        obj.legacyCompat_onPress = function legacyCompat_onPress() {
          setFeature(item);
          ActionSheetActionCreatorsDefault.hideActionSheet();
        };
        return closure_6(item(6261).TableRadioRow, obj);
      },
);
ReactCompilerGating = fn(558);
let obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, justifyContent: "center" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/bug_reporter/native/components/BugReporterFeatureActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function BugReporterFeatureActionSheet(setFeature) {
      const cResult = feature(first[7]).c(35);
      ({ features, feature } = setFeature);
      setFeature = setFeature.setFeature;
      const tmp4 = closure_8();
      let obj = feature(first[7]);
      first = items(height.useState(""), 2)[0];
      if (cResult[0] === features) {
        if (cResult[1] === first) {
          if (cResult[6] !== cResult[2]) {
            const mapped = arr.map((item) => items(item, 2)[1].length);
            cResult[6] = arr;
            cResult[7] = mapped;
            let tmp14 = mapped;
          } else {
            tmp14 = cResult[7];
          }
          if (cResult[8] !== cResult[2]) {
            const mapped1 = arr.map((item) => {
              const tmp = items(item, 2);
              return { title: tmp[0], data: tmp[1] };
            });
            cResult[8] = arr;
            cResult[9] = mapped1;
            let tmp16 = mapped1;
          } else {
            tmp16 = cResult[9];
          }
          if (cResult[10] === tmp16) {
            if (cResult[11] === tmp14) {
              let tmp18 = cResult[12];
            }
            items = tmp18.items;
            const sections = tmp18.sections;
            const tmp19 = tmp7(tmp2[15])();
            const tmp20 = tmp7(tmp2[16])();
            height = tmp20;
            if (cResult[13] === feature) {
              if (cResult[14] === items) {
                if (cResult[15] === setFeature) {
                  let tmp21 = cResult[16];
                }
                if (cResult[17] === items) {
                  if (cResult[18] === tmp20) {
                    let tmp22 = cResult[19];
                  }
                  class M {
                    constructor(arg0) {
                      obj = { title: items[setFeature].title, height: closure_4 };
                      return jsx(closure_9, obj);
                    }
                  }
                  if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                    const obj2 = { title: null };
                    class M {
                      constructor(arg0) {
                        obj = { title: items[setFeature].title, height: closure_4 };
                        return jsx(closure_9, obj);
                      }
                    }
                    const intl = feature(tmp2[18]).intl;
                    obj2.title = intl.string(feature(tmp2[18]).t["77VVd8"]);
                    class T {
                      constructor(arg0, arg1) {
                        obj = {
                          item: items[setFeature].data[arg1],
                          feature,
                          setFeature,
                          start: 0 === arg1,
                          end: arg1 === items[setFeature].data.length - 1,
                        };
                        return jsx(closure_10, obj);
                      }
                    }
                    let tmp24 = closure_6(tmp26, obj2);
                    const tmp27 = closure_6(tmp26, obj2);
                  } else {
                    tmp24 = cResult[20];
                  }
                  const _Symbol = Symbol;
                  class T {
                    constructor(arg0, arg1) {
                      obj = {
                        item: items[setFeature].data[arg1],
                        feature,
                        setFeature,
                        start: 0 === arg1,
                        end: arg1 === items[setFeature].data.length - 1,
                      };
                      return jsx(closure_10, obj);
                    }
                  }
                  if (cResult[22] !== tmp4.searchBar) {
                    class M {
                      constructor(arg0) {
                        obj = { title: items[setFeature].title, height: closure_4 };
                        return jsx(closure_9, obj);
                      }
                    }
                    tmp33[0] = tmp4.searchBar;
                    tmp33[1] = tmp29;
                    const tmp34 = closure_6(View, tmp33);
                    cResult[22] = tmp4.searchBar;
                    class T {
                      constructor(arg0, arg1) {
                        obj = {
                          item: items[setFeature].data[arg1],
                          feature,
                          setFeature,
                          start: 0 === arg1,
                          end: arg1 === items[setFeature].data.length - 1,
                        };
                        return jsx(closure_10, obj);
                      }
                    }
                    cResult[23] = tmp34;
                    let tmp30 = tmp34;
                  } else {
                    tmp30 = cResult[23];
                  }
                  const sum = tmp7(tmp2[5]).space.PX_16 + tmp8.bottom;
                  if (cResult[24] === tmp21) {
                    if (cResult[25] === tmp22) {
                      if (cResult[26] === tmp19) {
                        if (cResult[27] === tmp20) {
                          if (cResult[28] === sections) {
                            if (cResult[29] === tmp4.list) {
                              if (cResult[30] === sum) {
                                let tmp36 = cResult[31];
                              }
                              if (cResult[32] === tmp36) {
                                if (cResult[33] === tmp30) {
                                  let tmp39 = cResult[34];
                                }
                                return tmp39;
                              }
                              class M {
                                constructor(arg0) {
                                  obj = { title: items[setFeature].title, height: closure_4 };
                                  return jsx(closure_9, obj);
                                }
                              }
                              const obj3 = { scrollable: true, startExpanded: true, header: tmp24, children: null };
                              const items1 = [tmp30, tmp36];
                              class T {
                                constructor(arg0, arg1) {
                                  obj = {
                                    item: items[setFeature].data[arg1],
                                    feature,
                                    setFeature,
                                    start: 0 === arg1,
                                    end: arg1 === items[setFeature].data.length - 1,
                                  };
                                  return jsx(closure_10, obj);
                                }
                              }
                              const tmp40 = closure_7(feature(tmp2[21]).BottomSheet, obj3);
                              cResult[32] = tmp36;
                              cResult[33] = tmp30;
                              cResult[34] = tmp40;
                              tmp39 = tmp40;
                            }
                          }
                        }
                      }
                    }
                  }
                  const obj4 = {
                    style: tmp4.list,
                    inActionSheet: true,
                    sections,
                    itemSize: tmp19,
                    estimatedListSize: "windowSize",
                    renderItem: tmp21,
                    renderSectionHeader: tmp22,
                    sectionHeaderSize: tmp20,
                    insetEnd: sum,
                  };
                  const tmp38 = closure_6(tmp7(tmp2[20]), obj4);
                  cResult[24] = tmp21;
                  cResult[25] = tmp22;
                  cResult[26] = tmp19;
                  cResult[27] = tmp20;
                  cResult[28] = sections;
                  cResult[29] = tmp4.list;
                  cResult[30] = sum;
                  cResult[31] = tmp38;
                  tmp36 = tmp38;
                }
                class M {
                  constructor(arg0) {
                    obj = { title: items[setFeature].title, height: closure_4 };
                    return jsx(closure_9, obj);
                  }
                }
                cResult[17] = items;
                cResult[18] = tmp20;
                class T {
                  constructor(arg0, arg1) {
                    obj = {
                      item: items[setFeature].data[arg1],
                      feature,
                      setFeature,
                      start: 0 === arg1,
                      end: arg1 === items[setFeature].data.length - 1,
                    };
                    return jsx(closure_10, obj);
                  }
                }
                tmp22 = M;
              }
            }
            class T {
              constructor(arg0, arg1) {
                obj = {
                  item: items[setFeature].data[arg1],
                  feature,
                  setFeature,
                  start: 0 === arg1,
                  end: arg1 === items[setFeature].data.length - 1,
                };
                return jsx(closure_10, obj);
              }
            }
            cResult[13] = feature;
            cResult[14] = items;
            cResult[15] = setFeature;
            cResult[16] = T;
            tmp21 = T;
          }
          const obj5 = { items: tmp16, sections: tmp14 };
          cResult[11] = tmp14;
          cResult[12] = obj5;
          tmp18 = obj5;
        }
      }
      if (cResult[3] !== first) {
        class R {
          constructor(arg0) {
            tmp = null != setFeature.asana_inbox_id;
            if (tmp) {
              tmp2 = closure_1;
              tmp3 = closure_2;
              obj = closure_1(closure_2[13]);
              str = closure_2;
              isEmptyResult = obj.isEmpty(closure_2);
              if (!isEmptyResult) {
                tmp2Result = tmp2(tmp3[14]);
                str2 = setFeature.name;
                str3 = undefined;
                formatted = str.toLowerCase();
                if (str2 != null) {
                  str3 = str2.toLowerCase();
                }
                if (str3 == null) {
                  str3 = "";
                }
                isEmptyResult = tmp2Result(formatted, str3);
              }
              if (!isEmptyResult) {
                tmp2Result1 = tmp2(tmp3[14]);
                str4 = setFeature.squad;
                str5 = undefined;
                formatted1 = str.toLowerCase();
                if (str4 != null) {
                  str5 = str4.toLowerCase();
                }
                if (str5 == null) {
                  str5 = "";
                }
                isEmptyResult = tmp2Result1(formatted1, str5);
              }
              tmp = isEmptyResult;
            }
            return tmp;
          }
        }
        class M {
          constructor(arg0) {
            obj = { title: items[setFeature].title, height: closure_4 };
            return jsx(closure_9, obj);
          }
        }
        cResult[4] = R;
      } else {
        class R {
          constructor(arg0) {
            tmp = null != setFeature.asana_inbox_id;
            if (tmp) {
              tmp2 = closure_1;
              tmp3 = closure_2;
              obj = closure_1(closure_2[13]);
              str = closure_2;
              isEmptyResult = obj.isEmpty(closure_2);
              if (!isEmptyResult) {
                tmp2Result = tmp2(tmp3[14]);
                str2 = setFeature.name;
                str3 = undefined;
                formatted = str.toLowerCase();
                if (str2 != null) {
                  str3 = str2.toLowerCase();
                }
                if (str3 == null) {
                  str3 = "";
                }
                isEmptyResult = tmp2Result(formatted, str3);
              }
              if (!isEmptyResult) {
                tmp2Result1 = tmp2(tmp3[14]);
                str4 = setFeature.squad;
                str5 = undefined;
                formatted1 = str.toLowerCase();
                if (str4 != null) {
                  str5 = str4.toLowerCase();
                }
                if (str5 == null) {
                  str5 = "";
                }
                isEmptyResult = tmp2Result1(formatted1, str5);
              }
              tmp = isEmptyResult;
            }
            return tmp;
          }
        }
      }
      let entries = globalThis;
      const found = features.filter(R);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor(arg0) {
            tmp = null != setFeature.asana_inbox_id;
            if (tmp) {
              tmp2 = closure_1;
              tmp3 = closure_2;
              obj = closure_1(closure_2[13]);
              str = closure_2;
              isEmptyResult = obj.isEmpty(closure_2);
              if (!isEmptyResult) {
                tmp2Result = tmp2(tmp3[14]);
                str2 = setFeature.name;
                str3 = undefined;
                formatted = str.toLowerCase();
                if (str2 != null) {
                  str3 = str2.toLowerCase();
                }
                if (str3 == null) {
                  str3 = "";
                }
                isEmptyResult = tmp2Result(formatted, str3);
              }
              if (!isEmptyResult) {
                tmp2Result1 = tmp2(tmp3[14]);
                str4 = setFeature.squad;
                str5 = undefined;
                formatted1 = str.toLowerCase();
                if (str4 != null) {
                  str5 = str4.toLowerCase();
                }
                if (str5 == null) {
                  str5 = "";
                }
                isEmptyResult = tmp2Result1(formatted1, str5);
              }
              tmp = isEmptyResult;
            }
            return tmp;
          }
        }
        class M {
          constructor(arg0) {
            obj = { title: items[setFeature].title, height: closure_4 };
            return jsx(closure_9, obj);
          }
        }
      } else {
        class R {
          constructor(arg0) {
            tmp = null != setFeature.asana_inbox_id;
            if (tmp) {
              tmp2 = closure_1;
              tmp3 = closure_2;
              obj = closure_1(closure_2[13]);
              str = closure_2;
              isEmptyResult = obj.isEmpty(closure_2);
              if (!isEmptyResult) {
                tmp2Result = tmp2(tmp3[14]);
                str2 = setFeature.name;
                str3 = undefined;
                formatted = str.toLowerCase();
                if (str2 != null) {
                  str3 = str2.toLowerCase();
                }
                if (str3 == null) {
                  str3 = "";
                }
                isEmptyResult = tmp2Result(formatted, str3);
              }
              if (!isEmptyResult) {
                tmp2Result1 = tmp2(tmp3[14]);
                str4 = setFeature.squad;
                str5 = undefined;
                formatted1 = str.toLowerCase();
                if (str4 != null) {
                  str5 = str4.toLowerCase();
                }
                if (str5 == null) {
                  str5 = "";
                }
                isEmptyResult = tmp2Result1(formatted1, str5);
              }
              tmp = isEmptyResult;
            }
            return tmp;
          }
        }
      }
      const _Object = entries.Object;
      const tmp5 = items(height.useState(""), 2);
      entries = _Object.entries(setFeature(first[13]).groupBy(found, tmp13));
      cResult[0] = features;
      cResult[1] = first;
      cResult[2] = entries;
      const tmp7Result = setFeature(first[13]);
    }
  : function BugReporterFeatureActionSheet(features) {
      features = features.features;
      const feature = features.feature;
      const setFeature = features.setFeature;
      let first;
      let items;
      let tmp = closure_8();
      const tmp2 = first(items.useState(""), 2);
      first = tmp2[0];
      const items1 = [features, first];
      const memo = items.useMemo(() => {
        const found = features.filter((asana_inbox_id) => {
          let tmp = null != asana_inbox_id.asana_inbox_id;
          if (tmp) {
            let isEmptyResult = feature(setFeature[13]).isEmpty(first);
            if (!isEmptyResult) {
              let str3;
              const formatted = first.toLowerCase();
              if (asana_inbox_id.name != null) {
                str3 = str2.toLowerCase();
              }
              if (str3 == null) {
                str3 = "";
              }
              isEmptyResult = feature(setFeature[14])(formatted, str3);
              const tmp2Result = feature(setFeature[14]);
            }
            if (!isEmptyResult) {
              let str5;
              const formatted1 = first.toLowerCase();
              if (asana_inbox_id.squad != null) {
                str5 = str4.toLowerCase();
              }
              if (str5 == null) {
                str5 = "";
              }
              isEmptyResult = feature(setFeature[14])(formatted1, str5);
              const tmp2Result2 = feature(setFeature[14]);
            }
            tmp = isEmptyResult;
            const obj = feature(setFeature[13]);
          }
          return tmp;
        });
        const entries = Object.entries(_modDef12.groupBy(found, (squad) => squad.squad));
        const obj2 = { items: null, sections: null };
        const mapped = entries.map((item) => {
          [, arr] = item;
          return arr.length;
        });
        obj2.items = entries.map((item) => {
          [tmp, tmp2] = item;
          return { title, data };
        });
        obj2.sections = mapped;
        return obj2;
      }, items1);
      items = memo.items;
      const tmp6 = feature(setFeature[16])();
      height = tmp6;
      const items2 = [items, setFeature, feature];
      const items3 = [tmp6, items];
      const callback = items.useCallback(
        (arg0, arg1) =>
          timestampProducer(closure_10, {
            item: items[arg0].data[arg1],
            feature,
            setFeature,
            start: 0 === arg1,
            end: arg1 === items[arg0].data.length - 1,
          }),
        items2,
      );
      const callback1 = items.useCallback(
        (arg0) => timestampProducer(closure_9, { title: items[arg0].title, height }),
        items3,
      );
      let obj = { scrollable: true, startExpanded: true, header: null, children: null };
      let obj2 = { title: null };
      const intl = features(setFeature[18]).intl;
      obj2.title = intl.string(features(setFeature[18]).t["77VVd8"]);
      obj.header = closure_6(features(setFeature[17]).BottomSheetTitleHeader, obj2);
      const tmp5 = feature(setFeature[15])();
      const items4 = [
        closure_6(height, {
          style: tmp.searchBar,
          children: closure_6(features(setFeature[19]).SearchField, { size: "md", onChange: tmp2[1] }),
        }),
      ];
      const obj4 = {
        style: tmp.list,
        inActionSheet: true,
        sections: memo.sections,
        itemSize: tmp5,
        estimatedListSize: "windowSize",
        renderItem: callback,
        renderSectionHeader: callback1,
        sectionHeaderSize: tmp6,
        insetEnd: null,
      };
      const obj3 = {
        style: tmp.searchBar,
        children: closure_6(features(setFeature[19]).SearchField, { size: "md", onChange: tmp2[1] }),
      };
      obj4.insetEnd = feature(setFeature[5]).space.PX_16 + feature(setFeature[12])().insets.bottom;
      items4[1] = closure_6(feature(setFeature[20]), obj4);
      obj.children = items4;
      return closure_7(features(setFeature[21]).BottomSheet, obj);
    };
