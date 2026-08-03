import _slicedToArray from "_slicedToArray";
import importAllResult from "SearchField";
import { View } from "RedesignBottomSheetTitleHeaderBase";
import jsxProd from "set";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
let c4 = importAllResult;
({ jsx: closure_6, jsxs: error } = jsxProd);
let obj = { list: null, searchBar: null, sectionHeader: null };
obj = { paddingHorizontal: require("Themes").space.PX_12 };
obj[0] = obj;
createCacheKey = { paddingHorizontal: require("Themes").space.PX_12 };
obj[1] = createCacheKey;
obj[2] = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, justifyContent: "center" };
let closure_8 = createCacheKey.createStyles(obj);
let closure_9 = importAllResult.memo((arg0) => {
  let height;
  let title;
  ({ title, height } = arg0);
  const obj = { style: null, children: null };
  const items = [callback3().sectionHeader, { height }];
  obj[0] = items;
  obj[1] = callback(require(4189) /* Text */.Text, { variant: "text-sm/bold", color: "text-muted", children: title });
  return callback(View, obj);
});
let closure_10 = importAllResult.memo((item) => {
  let end;
  let feature;
  let start;
  item = item.item;
  const setFeature = item.setFeature;
  ({ feature, start, end } = item);
  let obj = item(10361);
  const featureId = obj.getFeatureId(item);
  const featureId1 = item(10361).getFeatureId(feature);
  obj = {
    start,
    end,
    label: item.name,
    onPress() {
      setFeature(item);
      setFeature(outer1_2[9]).hideActionSheet();
    },
    trailing: null
  };
  obj = { selected: featureId === featureId1 };
  obj[4] = callback(item(7661).FormRadio, obj);
  return callback(item(5224).TableRow, obj);
});
const obj2 = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, justifyContent: "center" };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/bug_reporter/native/components/BugReporterFeatureActionSheet.tsx");

export default function BugReporterFeatureActionSheet(features) {
  features = features.features;
  const feature = features.feature;
  const setFeature = features.setFeature;
  let first;
  let items;
  let c5;
  let tmp = callback3();
  const tmp2 = first(items.useState(""), 2);
  first = tmp2[0];
  items = [features, first];
  const memo = items.useMemo(() => {
    const found = features.filter((asana_inbox_id) => {
      let tmp = null != asana_inbox_id.asana_inbox_id;
      if (tmp) {
        let isEmptyResult = outer1_1(outer1_2[12]).isEmpty(_slicedToArray);
        if (!isEmptyResult) {
          let tmp2Result = tmp2(tmp3[13]);
          let str3;
          const formatted = str.toLowerCase();
          if (asana_inbox_id.name != null) {
            str3 = str2.toLowerCase();
          }
          if (str3 == null) {
            str3 = "";
          }
          isEmptyResult = tmp2Result(formatted, str3);
        }
        if (!isEmptyResult) {
          tmp2Result = tmp2(tmp3[13]);
          let str5;
          const formatted1 = str.toLowerCase();
          if (asana_inbox_id.squad != null) {
            str5 = str4.toLowerCase();
          }
          if (str5 == null) {
            str5 = "";
          }
          isEmptyResult = tmp2Result(formatted1, str5);
        }
        tmp = isEmptyResult;
        const obj = outer1_1(outer1_2[12]);
      }
      return tmp;
    });
    let obj = feature(setFeature[12]);
    const entries = Object.entries(obj.groupBy(found, (squad) => squad.squad));
    obj = { items: null, sections: null };
    const mapped = entries.map((arg0) => {
      let arr;
      [, arr] = arg0;
      return arr.length;
    });
    obj[0] = entries.map((arg0) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      return { title, data };
    });
    obj[1] = mapped;
    return obj;
  }, items);
  items = memo.items;
  const tmp6 = feature(setFeature[15])();
  c5 = tmp6;
  const items1 = [items, setFeature, feature];
  const items2 = [tmp6, items];
  const callback = items.useCallback((arg0, arg1) => outer1_6(outer1_10, { item: items[arg0].data[arg1], feature, setFeature, start: 0 === arg1, end: arg1 === items[arg0].data.length - 1 }), items1);
  const callback1 = items.useCallback((arg0) => outer1_6(outer1_9, { title: items[arg0].title, height: c5 }), items2);
  let obj = { scrollable: true, startExpanded: true, header: null, children: null };
  obj = { title: null };
  const intl = features(setFeature[18]).intl;
  obj[0] = intl.string(features(setFeature[18]).t["77VVd8"]);
  obj[2] = callback(features(setFeature[17]).BottomSheetTitleHeader, obj);
  obj = { style: tmp.searchBar, children: callback(features(setFeature[19]).SearchField, { size: "md", onChange: tmp2[1] }) };
  const items3 = [callback(c5, obj), ];
  const obj1 = { style: tmp.list, inActionSheet: true, sections: memo.sections, itemSize: feature(setFeature[14])(), estimatedListSize: "windowSize", renderItem: callback, renderSectionHeader: callback1, sectionHeaderSize: tmp6, insetEnd: null };
  const tmp5 = feature(setFeature[14])();
  obj1[8] = feature(setFeature[5]).space.PX_16 + feature(setFeature[11])().insets.bottom;
  items3[1] = callback(feature(setFeature[20]), obj1);
  obj[3] = items3;
  return callback2(features(setFeature[16]).BottomSheet, obj);
};