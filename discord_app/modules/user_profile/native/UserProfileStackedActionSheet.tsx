// === Module 10841: UserProfileStackedActionSheet ===

// Module 10841 (UserProfileStackedActionSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import Text_Text from "Text/Text" /* 4886 */;
import Pressables from "Pressables" /* 5909 */;
import ArrowLargeLeftIcon from "ArrowLargeLeftIcon" /* 6014 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6645 */;
import Form from "Form" /* 8895 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, _require, data, dependencyMap, importDefault;

let c9;
let metroImportAll;
let obj2;
let obj3;
let size;
let closure_3 = ["data", "contentContainerStyle", "renderItem"];
let closure_4 = ["contentContainerStyle", "renderItem"];
let closure_5 = ["title", "children", "onBack"];
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, headerSpacer: size, list: { flex: 1 }, contentContainer: obj3, divider: { marginLeft: 64 } };
obj2 = { flexDirection: "row", marginHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
size = { width: nativeDefault.space.PX_24, height: nativeDefault.space.PX_24 };
obj3 = { marginHorizontal: nativeDefault.space.PX_16 };
let closure_10 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((data) => {
  let closure_1;
  let contentContainerStyle;
  let divider;
  let length;
  let renderItem;
  let tmp12;
  let tmp14;
  let tmp4;
  let tmp5;
  let obj = require("react");
  const cResult = obj.c(23);
  if (cResult[0] !== data) {
    data = data.data;
    _require = data;
    ({ contentContainerStyle, renderItem } = data);
    importDefault = renderItem;
    const tmp9 = _objectWithoutProperties(data, closure_3);
    cResult[0] = data;
    cResult[1] = contentContainerStyle;
    cResult[2] = data;
    cResult[3] = tmp9;
    cResult[4] = renderItem;
    tmp5 = tmp9;
    tmp4 = contentContainerStyle;
  } else {
    tmp4 = cResult[1];
    _require = cResult[2];
    tmp5 = cResult[3];
    importDefault = cResult[4];
  }
  const tmp10 = closure_10();
  dependencyMap = tmp10;
  const bottom = useSafeAreaInsetsDefault().bottom;
  if (cResult[5] !== tmp10.divider) {
    const fn = function v() {
      const obj = { style: divider.divider };
      return metroImportAll(Form.FormDivider, obj);
    };
    cResult[5] = tmp10.divider;
    cResult[6] = fn;
    tmp12 = fn;
  } else {
    tmp12 = cResult[6];
  }
  let num8 = 0;
  const tmpResult = require("PlatformUtils");
  if (tmpResult.isAndroid()) {
    num8 = nativeDefault.space.PX_16;
  }
  const sum = bottom + num8;
  if (cResult[7] !== sum) {
    const obj2 = { paddingBottom: sum };
    cResult[7] = sum;
    cResult[8] = obj2;
    tmp14 = obj2;
  } else {
    tmp14 = cResult[8];
  }
  if (cResult[9] === tmp4) {
    if (cResult[10] === tmp10.contentContainer) {
      let tmp15;
      if (cResult[11] === tmp14) {
        tmp15 = cResult[12];
      }
      if (cResult[13] === arr.length) {
        let tmp16;
        if (cResult[14] === renderItem) {
          tmp16 = cResult[15];
        }
        if (cResult[16] === arr) {
          if (cResult[17] === tmp5) {
            if (cResult[18] === tmp10.list) {
              if (cResult[19] === tmp12) {
                if (cResult[20] === tmp15) {
                  let tmp17;
                  if (cResult[21] === tmp16) {
                    tmp17 = cResult[22];
                  }
                  return tmp17;
                }
              }
            }
          }
        }
        class I {
          constructor(index) {
            index = index.index;
            const obj = { item: index.item, index, start: 0 === index, end: index === length.length - 1 };
            return closure_1(obj);
          }
        }
        const obj3 = { data: arr, style: tmp10.list, ItemSeparatorComponent: tmp12, contentContainerStyle: tmp15, renderItem: tmp16 };
        const BottomSheetFlatList = tmp(6112).BottomSheetFlatList;
        const merged = Object.assign(tmp5);
        const tmp21 = closure_8(BottomSheetFlatList, obj3);
        cResult[16] = arr;
        cResult[17] = tmp5;
        cResult[18] = tmp10.list;
        cResult[19] = tmp12;
        cResult[20] = tmp15;
        cResult[21] = tmp16;
        cResult[22] = tmp21;
        tmp17 = tmp21;
      }
      class I {
        constructor(index) {
          index = index.index;
          const obj = { item: index.item, index, start: 0 === index, end: index === length.length - 1 };
          return closure_1(obj);
        }
      }
      cResult[13] = arr.length;
      cResult[14] = renderItem;
      cResult[15] = I;
      tmp16 = I;
    }
  }
  const items = [tmp10.contentContainer, tmp14, tmp4];
  cResult[9] = tmp4;
  cResult[10] = tmp10.contentContainer;
  cResult[11] = tmp14;
  cResult[12] = items;
  tmp15 = items;
}) : ((data) => {
  let divider;
  let items;
  data = data.data;
  const renderItem = data.renderItem;
  const contentContainerStyle = data.contentContainerStyle;
  const merged = Object.assign(data, Object.assign({ data: 0, contentContainerStyle: 0, renderItem: 0 }));
  const tmp2 = closure_10();
  dependencyMap = tmp2;
  const bottom = renderItem(1618)().bottom;
  let obj = {
    data,
    style: tmp2.list,
    ItemSeparatorComponent() {
      const obj = { style: divider.divider };
      return metroImportAll(Form.FormDivider, obj);
    },
    contentContainerStyle: items,
    renderItem(index) {
      index = index.index;
      const obj = { item: index.item, index, start: 0 === index, end: index === data.length - 1 };
      return renderItem(obj);
    }
  };
  const BottomSheetFlatList = data(6112).BottomSheetFlatList;
  const merged1 = Object.assign(merged);
  items = [tmp2.contentContainer, , ];
  let num = 0;
  const obj2 = data(1369);
  const tmp3 = renderItem;
  if (obj2.isAndroid()) {
    num = tmp3(587).space.PX_16;
  }
  items[1] = { paddingBottom: bottom + num };
  items[2] = contentContainerStyle;
  return closure_8(BottomSheetFlatList, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let contentContainerStyle;
  let renderItem;
  let tmp11;
  let tmp12;
  let tmp4;
  let tmp5;
  let obj = require("react");
  const cResult = obj.c(13);
  const tmp = _require;
  if (cResult[0] !== arg0) {
    ({ contentContainerStyle, renderItem } = arg0);
    _require = renderItem;
    const tmp9 = _objectWithoutProperties(arg0, closure_4);
    cResult[0] = arg0;
    cResult[1] = contentContainerStyle;
    cResult[2] = tmp9;
    cResult[3] = renderItem;
    tmp5 = tmp9;
    tmp4 = contentContainerStyle;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    _require = cResult[3];
  }
  const tmp10 = closure_10();
  const divider = tmp10;
  if (cResult[4] !== renderItem) {
    const fn = function p(index) {
      index = index.index;
      const obj = { item: index.item, start: 0 === index, end: index === index.section.data.length - 1 };
      return closure_0(obj);
    };
    cResult[4] = renderItem;
    cResult[5] = fn;
    tmp11 = fn;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] !== tmp10.divider) {
    const fn2 = function v() {
      const obj = { style: divider.divider };
      return metroImportAll(Form.FormDivider, obj);
    };
    cResult[6] = tmp10.divider;
    cResult[7] = fn2;
    tmp12 = fn2;
  } else {
    tmp12 = cResult[7];
  }
  if (cResult[8] === tmp4) {
    if (cResult[9] === tmp5) {
      if (cResult[10] === tmp11) {
        let tmp13;
        if (cResult[11] === tmp12) {
          tmp13 = cResult[12];
        }
        return tmp13;
      }
    }
  }
  const obj2 = { contentContainerStyle: tmp4, renderItem: tmp11, ItemSeparatorComponent: tmp12 };
  const BottomSheetSectionList = tmp(6112).BottomSheetSectionList;
  const merged = Object.assign(tmp5);
  const tmp15 = closure_8(BottomSheetSectionList, obj2);
  cResult[8] = tmp4;
  cResult[9] = tmp5;
  cResult[10] = tmp11;
  cResult[11] = tmp12;
  cResult[12] = tmp15;
  tmp13 = tmp15;
}) : ((renderItem) => {
  renderItem = renderItem.renderItem;
  const contentContainerStyle = renderItem.contentContainerStyle;
  const merged = Object.assign(renderItem, Object.assign({ contentContainerStyle: 0, renderItem: 0 }));
  const divider = closure_10();
  let obj = {
    contentContainerStyle,
    renderItem(index) {
      index = index.index;
      const obj = { item: index.item, start: 0 === index, end: index === index.section.data.length - 1 };
      return renderItem(obj);
    },
    ItemSeparatorComponent() {
      const obj = { style: divider.divider };
      return metroImportAll(Form.FormDivider, obj);
    }
  };
  const BottomSheetSectionList = renderItem(6112).BottomSheetSectionList;
  const merged1 = Object.assign(merged);
  return closure_8(BottomSheetSectionList, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let intl;
  let items;
  let onBack;
  let title;
  let tmp13;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(27);
  if (cResult[0] !== arg0) {
    ({ title, children, onBack } = arg0);
    const tmp10 = _objectWithoutProperties(arg0, closure_5);
    cResult[0] = arg0;
    cResult[1] = children;
    cResult[2] = onBack;
    cResult[3] = tmp10;
    cResult[4] = title;
    tmp7 = title;
    tmp6 = tmp10;
    tmp5 = onBack;
    tmp4 = children;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
  }
  const tmp11 = closure_10();
  let str = "center";
  if (null != tmp5) {
    str = "space-between";
  }
  if (cResult[5] !== str) {
    const obj2 = { justifyContent: str };
    cResult[5] = str;
    cResult[6] = obj2;
    tmp13 = obj2;
  } else {
    tmp13 = cResult[6];
  }
  if (cResult[7] === tmp11.header) {
    let tmp14;
    if (cResult[8] === tmp13) {
      tmp14 = cResult[9];
    }
    if (cResult[10] === tmp5) {
      let tmp15;
      let tmp18;
      if (cResult[11] === null != tmp5) {
        tmp15 = cResult[12];
      }
      if (cResult[13] !== tmp7) {
        const obj3 = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: tmp7 };
        const tmp20 = metroImportAll(Text_Text.Text, obj3);
        cResult[13] = tmp7;
        cResult[14] = tmp20;
        tmp18 = tmp20;
      } else {
        tmp18 = cResult[14];
      }
      if (cResult[15] === null != tmp5) {
        let tmp21;
        if (cResult[16] === tmp11.headerSpacer) {
          tmp21 = cResult[17];
        }
        if (cResult[18] === tmp14) {
          if (cResult[19] === tmp15) {
            if (cResult[20] === tmp18) {
              let tmp25;
              if (cResult[21] === tmp21) {
                tmp25 = cResult[22];
              }
              if (cResult[23] === tmp4) {
                if (cResult[24] === tmp6) {
                  let tmp29;
                  if (cResult[25] === tmp25) {
                    tmp29 = cResult[26];
                  }
                  return tmp29;
                }
              }
              const obj4 = { header: tmp25, children: tmp4 };
              BottomSheet = Sheet_BottomSheet.BottomSheet;
              const merged = Object.assign(tmp6);
              const tmp34 = metroImportAll(BottomSheet, obj4);
              cResult[23] = tmp4;
              cResult[24] = tmp6;
              cResult[25] = tmp25;
              cResult[26] = tmp34;
              tmp29 = tmp34;
            }
          }
        }
        const obj5 = { style: tmp14, children: items };
        items = [tmp15, tmp18, tmp21];
        const tmp28 = React4(View, obj5);
        cResult[18] = tmp14;
        cResult[19] = tmp15;
        cResult[20] = tmp18;
        cResult[21] = tmp21;
        cResult[22] = tmp28;
        tmp25 = tmp28;
      }
      let tmp22 = tmp12;
      if (tmp22) {
        const obj6 = { style: tmp11.headerSpacer };
        tmp22 = metroImportAll(View, obj6);
      }
      cResult[15] = null != tmp5;
      cResult[16] = tmp11.headerSpacer;
      cResult[17] = tmp22;
      tmp21 = tmp22;
    }
    let tmp16 = tmp12;
    if (tmp16) {
      const obj7 = { accessibilityRole: "button", accessibilityLabel: intl.string(intl2.t["13/7kX"]), onPress: tmp5, children: metroImportAll(ArrowLargeLeftIcon.ArrowLargeLeftIcon, { size: "md" }) };
      const PressableOpacity = Pressables.PressableOpacity;
      intl = intl2.intl;
      tmp16 = metroImportAll(PressableOpacity, obj7);
    }
    cResult[10] = tmp5;
    cResult[11] = null != tmp5;
    cResult[12] = tmp16;
    tmp15 = tmp16;
  }
  const items1 = [tmp11.header, tmp13];
  cResult[7] = tmp11.header;
  cResult[8] = tmp13;
  cResult[9] = items1;
  tmp14 = items1;
}) : ((onBack) => {
  let children;
  let intl;
  let items1;
  let obj2;
  let title;
  onBack = onBack.onBack;
  ({ title, children } = onBack);
  const merged = Object.assign(onBack, Object.assign({ title: 0, children: 0, onBack: 0 }));
  const tmp2 = closure_10();
  let tmp4Result2 = null != onBack;
  const obj = { header: React4(View, obj2), children };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  const merged1 = Object.assign(merged);
  const items = [tmp2.header, ];
  let str = "center";
  if (tmp4Result2) {
    str = "space-between";
  }
  obj2 = { style: items, children: items1 };
  items[1] = { justifyContent: str };
  let tmp4Result = tmp4Result2;
  if (tmp4Result) {
    const obj3 = { accessibilityRole: "button", accessibilityLabel: intl.string(intl2.t["13/7kX"]), onPress: onBack, children: metroImportAll(ArrowLargeLeftIcon.ArrowLargeLeftIcon, { size: "md" }) };
    const PressableOpacity = Pressables.PressableOpacity;
    intl = intl2.intl;
    tmp4Result = metroImportAll(PressableOpacity, obj3);
  }
  items1 = [tmp4Result, metroImportAll(Text_Text.Text, { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title }), ];
  if (tmp4Result2) {
    const obj4 = { style: tmp2.headerSpacer };
    tmp4Result2 = metroImportAll(View, obj4);
  }
  items1[2] = tmp4Result2;
  return metroImportAll(BottomSheet, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileStackedActionSheet.tsx");

export default tmp7;
export const UserProfileStackedActionSheetList = tmp5;
export const UserProfileStackedActionSheetSectionList = tmp6;