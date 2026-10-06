// discord_app/modules/bug_reporter/native/components/BugReporterFeatureActionSheet.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import fuzzysearchDefault from "../../../../../_runtime/05709_fuzzysearch.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let BottomSheet, height, item;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { list: obj2, searchBar: obj3, sectionHeader: obj4 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_12 };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, justifyContent: "center" };
let closure_8 = createStyles(obj);
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let title;
        let tmp5;
        const obj = react2;
        const cResult = obj.c(10);
        ({ title, height } = arg0);
        const tmp4 = closure_8();
        if (cResult[0] !== height) {
          const obj2 = { height };
          cResult[0] = height;
          cResult[1] = obj2;
          tmp5 = obj2;
        } else {
          tmp5 = cResult[1];
        }
        if (cResult[2] === tmp4.sectionHeader) {
          let tmp6;
          let tmp7;
          if (cResult[3] === tmp5) {
            tmp6 = cResult[4];
          }
          if (cResult[5] !== title) {
            const obj3 = { variant: "text-sm/bold", color: "text-muted", children: title };
            const tmp9 = metroRequire(Text_Text.Text, obj3);
            cResult[5] = title;
            cResult[6] = tmp9;
            tmp7 = tmp9;
          } else {
            tmp7 = cResult[6];
          }
          if (cResult[7] === tmp6) {
            let tmp10;
            if (cResult[8] === tmp7) {
              tmp10 = cResult[9];
            }
            return tmp10;
          }
          const obj4 = { style: tmp6, children: tmp7 };
          const tmp13 = metroRequire(View, obj4);
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
    : (arg0) => {
        let items;
        let title;
        ({ title, height } = arg0);
        const obj = {
          style: items,
          children: metroRequire(Text_Text.Text, { variant: "text-sm/bold", color: "text-muted", children: title }),
        };
        items = [closure_8().sectionHeader, { height }];
        return metroRequire(View, obj);
      },
);
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = memo2(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (item) => {
        let end;
        let feature;
        let setFeature;
        let start;
        let tmp4;
        let tmp6;
        let tmp8;
        let obj = item(576);
        const cResult = obj.c(16);
        item = item.item;
        ({ feature, setFeature } = item);
        ({ start, end } = item);
        if (cResult[0] !== item) {
          const tmpResult = item(12542);
          const featureId = tmpResult.getFeatureId(item);
          cResult[0] = item;
          cResult[1] = featureId;
          tmp4 = featureId;
        } else {
          tmp4 = cResult[1];
        }
        const name = item.name;
        if (cResult[2] !== item) {
          const tmpResult3 = item(12542);
          const featureId1 = tmpResult3.getFeatureId(item);
          cResult[2] = item;
          cResult[3] = featureId1;
          tmp6 = featureId1;
        } else {
          tmp6 = cResult[3];
        }
        if (cResult[4] !== feature) {
          const tmpResult4 = item(12542);
          const featureId2 = tmpResult4.getFeatureId(feature);
          cResult[4] = feature;
          cResult[5] = featureId2;
          tmp8 = featureId2;
        } else {
          tmp8 = cResult[5];
        }
        if (cResult[6] === item) {
          let tmp10;
          if (cResult[7] === setFeature) {
            tmp10 = cResult[8];
          }
          if (cResult[9] === end) {
            if (cResult[10] === item.name) {
              if (cResult[11] === start) {
                if (cResult[12] === tmp4) {
                  if ((cResult[13] === tmp6) === tmp8) {
                    let tmp12;
                    if (cResult[14] === tmp10) {
                      tmp12 = cResult[15];
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
            label: name,
            legacyCompat_selected: tmp6 === tmp8,
            legacyCompat_onPress: tmp10,
          };
          const tmp14 = closure_6(item(6078).TableRadioRow, obj2);
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
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
        };
        cResult[6] = item;
        cResult[7] = setFeature;
        cResult[8] = fn;
        tmp10 = fn;
      }
    : (item) => {
        let end;
        let feature;
        let featureId;
        let obj2;
        let obj4;
        let start;
        item = item.item;
        const setFeature = item.setFeature;
        ({ feature, start, end } = item);
        let obj = {
          start,
          end,
          value: obj2.getFeatureId(item),
          label: item.name,
          legacyCompat_selected: featureId === obj4.getFeatureId(feature),
          legacyCompat_onPress() {
            setFeature(item);
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
          },
        };
        const TableRadioRow = item(6078).TableRadioRow;
        obj2 = item(12542);
        const obj3 = item(12542);
        featureId = obj3.getFeatureId(item);
        obj4 = item(12542);
        return closure_6(TableRadioRow, obj);
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (setFeature) => {
      let feature;
      let features;
      let first;
      let intl;
      let items;
      let obj = feature(first[7]);
      const cResult = obj.c(35);
      ({ features, feature } = setFeature);
      setFeature = setFeature.setFeature;
      const tmp4 = closure_8();
      first = items(height.useState(""), 2)[0];
      items(height.useState(""), 2);
      if (cResult[0] === features) {
        let arr;
        let tmp14;
        let tmp16;
        if (cResult[1] === first) {
          arr = cResult[2];
        }
        if (cResult[6] !== arr) {
          const mapped = arr.map((item) => items(item, 2)[1].length);
          cResult[6] = arr;
          cResult[7] = mapped;
          tmp14 = mapped;
        } else {
          tmp14 = cResult[7];
        }
        if (cResult[8] !== arr) {
          const mapped1 = arr.map((item) => {
            const tmp = items(item, 2);
            return { title: tmp[0], data: tmp[1] };
          });
          cResult[8] = arr;
          cResult[9] = mapped1;
          tmp16 = mapped1;
        } else {
          tmp16 = cResult[9];
        }
        if (cResult[10] === tmp16) {
          let tmp18;
          if (cResult[11] === tmp14) {
            tmp18 = cResult[12];
          }
          items = tmp18.items;
          const sections = tmp18.sections;
          const tmp19 = setFeature(first[15])();
          const tmp20 = setFeature(first[16])();
          height = tmp20;
          if (cResult[13] === feature) {
            if (cResult[14] === items) {
              let tmp21;
              if (cResult[15] === setFeature) {
                tmp21 = cResult[16];
              }
              if (cResult[17] === items) {
                let tmp22;
                let tmp24;
                let tmp30;
                if (cResult[18] === tmp20) {
                  tmp22 = cResult[19];
                }
                class M {
                  constructor(arg0) {
                    const obj = { title: items[arg0].title, height };
                    return metroRequire(closure_9, obj);
                  }
                }
                if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj2 = { title: intl.string(feature(first[18]).t["77VVd8"]) };
                  class M {
                    constructor(arg0) {
                      const obj = { title: items[arg0].title, height };
                      return metroRequire(closure_9, obj);
                    }
                  }
                  intl = feature(tmp2[18]).intl;
                  const tmp27 = closure_6(tmp26, obj2);
                  class T {
                    constructor(arg0, arg1) {
                      const obj = {
                        item: items[arg0].data[arg1],
                        feature,
                        setFeature,
                        start: 0 === arg1,
                        end: arg1 === items[arg0].data.length - 1,
                      };
                      return metroRequire(closure_10, obj);
                    }
                  }
                  tmp24 = tmp27;
                } else {
                  tmp24 = cResult[20];
                }
                const _Symbol = Symbol;
                class T {
                  constructor(arg0, arg1) {
                    const obj = {
                      item: items[arg0].data[arg1],
                      feature,
                      setFeature,
                      start: 0 === arg1,
                      end: arg1 === items[arg0].data.length - 1,
                    };
                    return metroRequire(closure_10, obj);
                  }
                }
                if (cResult[22] !== tmp4.searchBar) {
                  class M {
                    constructor(arg0) {
                      const obj = { title: items[arg0].title, height };
                      return metroRequire(closure_9, obj);
                    }
                  }
                  tmp33[0] = tmp4.searchBar;
                  tmp33[1] = tmp29;
                  const tmp34 = closure_6(View, tmp33);
                  cResult[22] = tmp4.searchBar;
                  class T {
                    constructor(arg0, arg1) {
                      const obj = {
                        item: items[arg0].data[arg1],
                        feature,
                        setFeature,
                        start: 0 === arg1,
                        end: arg1 === items[arg0].data.length - 1,
                      };
                      return metroRequire(closure_10, obj);
                    }
                  }
                  cResult[23] = tmp34;
                  tmp30 = tmp34;
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
                            let tmp36;
                            if (cResult[30] === sum) {
                              tmp36 = cResult[31];
                            }
                            if (cResult[32] === tmp36) {
                              let tmp39;
                              if (cResult[33] === tmp30) {
                                tmp39 = cResult[34];
                              }
                              return tmp39;
                            }
                            class M {
                              constructor(arg0) {
                                const obj = { title: items[arg0].title, height };
                                return metroRequire(closure_9, obj);
                              }
                            }
                            const items1 = [tmp30, tmp36];
                            const obj3 = { scrollable: true, startExpanded: true, header: tmp24, children: null };
                            class T {
                              constructor(arg0, arg1) {
                                const obj = {
                                  item: items[arg0].data[arg1],
                                  feature,
                                  setFeature,
                                  start: 0 === arg1,
                                  end: arg1 === items[arg0].data.length - 1,
                                };
                                return metroRequire(closure_10, obj);
                              }
                            }
                            const tmp40 = closure_7(feature(first[21]).BottomSheet, obj3);
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
                const tmp38 = closure_6(setFeature(first[20]), obj4);
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
                  const obj = { title: items[arg0].title, height };
                  return metroRequire(closure_9, obj);
                }
              }
              cResult[17] = items;
              cResult[18] = tmp20;
              class T {
                constructor(arg0, arg1) {
                  const obj = {
                    item: items[arg0].data[arg1],
                    feature,
                    setFeature,
                    start: 0 === arg1,
                    end: arg1 === items[arg0].data.length - 1,
                  };
                  return metroRequire(closure_10, obj);
                }
              }
              tmp22 = M;
            }
          }
          class T {
            constructor(arg0, arg1) {
              const obj = {
                item: items[arg0].data[arg1],
                feature,
                setFeature,
                start: 0 === arg1,
                end: arg1 === items[arg0].data.length - 1,
              };
              return metroRequire(closure_10, obj);
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
      if (cResult[3] !== first) {
        class H {
          constructor(asana_inbox_id) {
            let tmp = null != asana_inbox_id.asana_inbox_id;
            if (tmp) {
              const obj = _modDef12;
              let isEmptyResult = obj.isEmpty(first);
              if (!isEmptyResult) {
                let str3;
                const tmp2Result = fuzzysearchDefault;
                const formatted = first.toLowerCase();
                if (asana_inbox_id.name != null) {
                  str3 = str2.toLowerCase();
                }
                if (str3 == null) {
                  str3 = "";
                }
                isEmptyResult = tmp2Result(formatted, str3);
              }
              if (!isEmptyResult) {
                let str5;
                const tmp2Result2 = fuzzysearchDefault;
                const formatted1 = first.toLowerCase();
                if (asana_inbox_id.squad != null) {
                  str5 = str4.toLowerCase();
                }
                if (str5 == null) {
                  str5 = "";
                }
                isEmptyResult = tmp2Result2(formatted1, str5);
              }
              tmp = isEmptyResult;
            }
            return tmp;
          }
        }
        class M {
          constructor(arg0) {
            const obj = { title: items[arg0].title, height };
            return metroRequire(closure_9, obj);
          }
        }
        cResult[4] = H;
      } else {
        class H {
          constructor(asana_inbox_id) {
            let tmp = null != asana_inbox_id.asana_inbox_id;
            if (tmp) {
              const obj = _modDef12;
              let isEmptyResult = obj.isEmpty(first);
              if (!isEmptyResult) {
                let str3;
                const tmp2Result = fuzzysearchDefault;
                const formatted = first.toLowerCase();
                if (asana_inbox_id.name != null) {
                  str3 = str2.toLowerCase();
                }
                if (str3 == null) {
                  str3 = "";
                }
                isEmptyResult = tmp2Result(formatted, str3);
              }
              if (!isEmptyResult) {
                let str5;
                const tmp2Result2 = fuzzysearchDefault;
                const formatted1 = first.toLowerCase();
                if (asana_inbox_id.squad != null) {
                  str5 = str4.toLowerCase();
                }
                if (str5 == null) {
                  str5 = "";
                }
                isEmptyResult = tmp2Result2(formatted1, str5);
              }
              tmp = isEmptyResult;
            }
            return tmp;
          }
        }
      }
      const found = features.filter(H);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class H {
          constructor(asana_inbox_id) {
            let tmp = null != asana_inbox_id.asana_inbox_id;
            if (tmp) {
              const obj = _modDef12;
              let isEmptyResult = obj.isEmpty(first);
              if (!isEmptyResult) {
                let str3;
                const tmp2Result = fuzzysearchDefault;
                const formatted = first.toLowerCase();
                if (asana_inbox_id.name != null) {
                  str3 = str2.toLowerCase();
                }
                if (str3 == null) {
                  str3 = "";
                }
                isEmptyResult = tmp2Result(formatted, str3);
              }
              if (!isEmptyResult) {
                let str5;
                const tmp2Result2 = fuzzysearchDefault;
                const formatted1 = first.toLowerCase();
                if (asana_inbox_id.squad != null) {
                  str5 = str4.toLowerCase();
                }
                if (str5 == null) {
                  str5 = "";
                }
                isEmptyResult = tmp2Result2(formatted1, str5);
              }
              tmp = isEmptyResult;
            }
            return tmp;
          }
        }
        class M {
          constructor(arg0) {
            const obj = { title: items[arg0].title, height };
            return metroRequire(closure_9, obj);
          }
        }
      } else {
        class H {
          constructor(asana_inbox_id) {
            let tmp = null != asana_inbox_id.asana_inbox_id;
            if (tmp) {
              const obj = _modDef12;
              let isEmptyResult = obj.isEmpty(first);
              if (!isEmptyResult) {
                let str3;
                const tmp2Result = fuzzysearchDefault;
                const formatted = first.toLowerCase();
                if (asana_inbox_id.name != null) {
                  str3 = str2.toLowerCase();
                }
                if (str3 == null) {
                  str3 = "";
                }
                isEmptyResult = tmp2Result(formatted, str3);
              }
              if (!isEmptyResult) {
                let str5;
                const tmp2Result2 = fuzzysearchDefault;
                const formatted1 = first.toLowerCase();
                if (asana_inbox_id.squad != null) {
                  str5 = str4.toLowerCase();
                }
                if (str5 == null) {
                  str5 = "";
                }
                isEmptyResult = tmp2Result2(formatted1, str5);
              }
              tmp = isEmptyResult;
            }
            return tmp;
          }
        }
      }
      const tmp7Result = setFeature(first[13]);
      const entries1 = entries(tmp7Result.groupBy(found, tmp12));
      cResult[0] = features;
      cResult[1] = first;
      cResult[2] = entries1;
      arr = entries1;
    }
  : (features) => {
      let BottomSheetTitleHeader;
      let intl;
      let items4;
      let obj2;
      features = features.features;
      const feature = features.feature;
      const setFeature = features.setFeature;
      let first;
      let items;
      let tmp = closure_8();
      const tmp2 = first(items.useState(""), 2);
      first = tmp2[0];
      const items1 = [,];
      const tmp4 = tmp2[1];
      items1[0] = features;
      items1[1] = first;
      const insets = feature(setFeature[12])().insets;
      const memo = items.useMemo(() => {
        let mapped;
        const found = features.filter((asana_inbox_id) => {
          let tmp = null != asana_inbox_id.asana_inbox_id;
          if (tmp) {
            const obj = feature(setFeature[13]);
            let isEmptyResult = obj.isEmpty(first);
            if (!isEmptyResult) {
              let str3;
              const tmp2Result = feature(setFeature[14]);
              const formatted = first.toLowerCase();
              if (asana_inbox_id.name != null) {
                str3 = str2.toLowerCase();
              }
              if (str3 == null) {
                str3 = "";
              }
              isEmptyResult = tmp2Result(formatted, str3);
            }
            if (!isEmptyResult) {
              let str5;
              const tmp2Result2 = feature(setFeature[14]);
              const formatted1 = first.toLowerCase();
              if (asana_inbox_id.squad != null) {
                str5 = str4.toLowerCase();
              }
              if (str5 == null) {
                str5 = "";
              }
              isEmptyResult = tmp2Result2(formatted1, str5);
            }
            tmp = isEmptyResult;
          }
          return tmp;
        });
        let obj = _modDef12;
        const entries1 = entries(obj.groupBy(found, (squad) => squad.squad));
        const obj2 = {
          items: entries1.map((item) => {
            let tmp;
            let tmp2;
            [tmp, tmp2] = item;
            return { title, data };
          }),
          sections: mapped,
        };
        mapped = entries1.map((item) => {
          let arr;
          [, arr] = item;
          return arr.length;
        });
        return obj2;
      }, items1);
      items = memo.items;
      const sections = memo.sections;
      const tmp6 = feature(setFeature[15])();
      const tmp7 = feature(setFeature[16])();
      height = tmp7;
      const items2 = [items, setFeature, feature];
      const items3 = [tmp7, items];
      const callback = items.useCallback((arg0, arg1) => {
        const obj = {
          item: items[arg0].data[arg1],
          feature,
          setFeature,
          start: 0 === arg1,
          end: arg1 === items[arg0].data.length - 1,
        };
        return metroRequire(closure_10, obj);
      }, items2);
      const callback1 = items.useCallback((arg0) => {
        const obj = { title: items[arg0].title, height };
        return metroRequire(closure_9, obj);
      }, items3);
      let obj = {
        scrollable: true,
        startExpanded: true,
        header: closure_6(BottomSheetTitleHeader, obj2),
        children: items4,
      };
      BottomSheet = features(setFeature[21]).BottomSheet;
      obj2 = { title: intl.string(features(setFeature[18]).t["77VVd8"]) };
      BottomSheetTitleHeader = features(setFeature[17]).BottomSheetTitleHeader;
      intl = features(setFeature[18]).intl;
      items4 = [,];
      const obj3 = {
        style: tmp.searchBar,
        children: closure_6(features(setFeature[19]).SearchField, { size: "md", onChange: tmp4 }),
      };
      items4[0] = closure_6(height, obj3);
      const obj4 = {
        style: tmp.list,
        inActionSheet: true,
        sections,
        itemSize: tmp6,
        estimatedListSize: "windowSize",
        renderItem: callback,
        renderSectionHeader: callback1,
        sectionHeaderSize: tmp7,
        insetEnd: feature(setFeature[5]).space.PX_16 + insets.bottom,
      };
      const tmp10 = feature(setFeature[20]);
      items4[1] = closure_6(tmp10, obj4);
      return closure_7(BottomSheet, obj);
    };
const result = size.fileFinishedImporting("modules/bug_reporter/native/components/BugReporterFeatureActionSheet.tsx");

export default tmp5;
