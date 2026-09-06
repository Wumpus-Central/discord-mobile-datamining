// === Module 10211: BugReporterFeatureActionSheet ===

// Module 10211 (BugReporterFeatureActionSheet)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let obj = { list: null, searchBar: null, sectionHeader: null };
obj = { paddingHorizontal: nativeDefault.space.PX_12 };
obj.list = obj;
const createStyles = { paddingHorizontal: nativeDefault.space.PX_12 };
obj.searchBar = createStyles;
obj.sectionHeader = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, justifyContent: "center" };
let closure_8 = createStyles.createStyles(obj);
let closure_9 = noop.memo((arg0) => {
  ({ title, height } = arg0);
  const obj = { style: null, children: null };
  const items = [closure_8().sectionHeader, { height }];
  obj.style = items;
  obj.children = timestampProducer(Text_Text.Text, { variant: "text-sm/bold", color: "text-muted", children: title });
  return timestampProducer(View, obj);
});
let closure_10 = noop.memo((item) => {
  item = item.item;
  const setFeature = item.setFeature;
  ({ feature, start, end } = item);
  let obj = item(10187);
  const featureId = obj.getFeatureId(item);
  const featureId1 = item(10187).getFeatureId(feature);
  obj = {
    start,
    end,
    label: item.name,
    onPress() {
      setFeature(item);
      ActionSheetActionCreatorsDefault.hideActionSheet();
    },
    trailing: null
  };
  obj = { selected: featureId === featureId1 };
  obj.trailing = closure_6(item(5689).FormRadio, obj);
  return closure_6(item(5605).TableRow, obj);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/bug_reporter/native/components/BugReporterFeatureActionSheet.tsx");

export default function BugReporterFeatureActionSheet(features) {
  features = features.features;
  const feature = features.feature;
  const setFeature = features.setFeature;
  let first;
  let items;
  let tmp = closure_8();
  const tmp2 = first(items.useState(""), 2);
  first = tmp2[0];
  items = [features, first];
  const memo = items.useMemo(() => {
    const found = features.filter((asana_inbox_id) => {
      let tmp = null != asana_inbox_id.asana_inbox_id;
      if (tmp) {
        let isEmptyResult = feature(setFeature[12]).isEmpty(first);
        if (!isEmptyResult) {
          let tmp2Result = feature(setFeature[13]);
          let str3;
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
          tmp2Result = feature(setFeature[13]);
          let str5;
          const formatted1 = first.toLowerCase();
          if (asana_inbox_id.squad != null) {
            str5 = str4.toLowerCase();
          }
          if (str5 == null) {
            str5 = "";
          }
          isEmptyResult = tmp2Result(formatted1, str5);
        }
        tmp = isEmptyResult;
        const obj = feature(setFeature[12]);
      }
      return tmp;
    });
    let obj = _modDef12;
    const entries = Object.entries(obj.groupBy(found, (squad) => squad.squad));
    obj = { items: null, sections: null };
    const mapped = entries.map((item) => {
      [, arr] = item;
      return arr.length;
    });
    obj.items = entries.map((item) => {
      [tmp, tmp2] = item;
      return { title, data };
    });
    obj.sections = mapped;
    return obj;
  }, items);
  items = memo.items;
  const tmp6 = feature(setFeature[15])();
  const height = tmp6;
  const items1 = [items, setFeature, feature];
  const items2 = [tmp6, items];
  const callback = items.useCallback((arg0, arg1) => timestampProducer(closure_10, { item: items[arg0].data[arg1], feature, setFeature, start: 0 === arg1, end: arg1 === items[arg0].data.length - 1 }), items1);
  const callback1 = items.useCallback((arg0) => timestampProducer(closure_9, { title: items[arg0].title, height }), items2);
  let obj = { scrollable: true, startExpanded: true, header: null, children: null };
  obj = { title: null };
  const intl = features(setFeature[18]).intl;
  obj.title = intl.string(features(setFeature[18]).t["77VVd8"]);
  obj.header = closure_6(features(setFeature[17]).BottomSheetTitleHeader, obj);
  obj = { style: tmp.searchBar, children: closure_6(features(setFeature[19]).SearchField, { size: "md", onChange: tmp2[1] }) };
  const items3 = [closure_6(height, obj), ];
  const obj1 = { style: tmp.list, inActionSheet: true, sections: memo.sections, itemSize: feature(setFeature[14])(), estimatedListSize: "windowSize", renderItem: callback, renderSectionHeader: callback1, sectionHeaderSize: tmp6, insetEnd: null };
  const tmp5 = feature(setFeature[14])();
  obj1.insetEnd = feature(setFeature[5]).space.PX_16 + feature(setFeature[11])().insets.bottom;
  items3[1] = closure_6(feature(setFeature[20]), obj1);
  obj.children = items3;
  return closure_7(features(setFeature[16]).BottomSheet, obj);
};