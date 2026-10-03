// discord_app/modules/user_profile/native/UserProfileStackedActionSheet.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import ArrowLargeLeftIcon from "../../../design/components/Icon/native/redesign/generated/ArrowLargeLeftIcon.tsx";
import Sheet_BottomSheet from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import Form from "../../../design/void/Form/native/index.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = ["data", "contentContainerStyle", "renderItem"];
let closure_4 = ["contentContainerStyle", "renderItem"];
let closure_5 = ["title", "children", "onBack"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  header: { flexDirection: "row", marginHorizontal: nativeDefault.space.PX_16 },
  headerSpacer: null,
  list: null,
  contentContainer: null,
  divider: null,
};
let size = { width: nativeDefault.space.PX_24, height: nativeDefault.space.PX_24 };
obj2.headerSpacer = size;
obj2.list = { flex: 1 };
let obj3 = { flexDirection: "row", marginHorizontal: nativeDefault.space.PX_16 };
obj2.contentContainer = { marginHorizontal: nativeDefault.space.PX_16 };
obj2.divider = { marginLeft: 64 };
let closure_10 = createStyles.createStyles(obj2);
fn(558);
let obj4 = { marginHorizontal: nativeDefault.space.PX_16 };
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (data) => {
      const cResult = require("c").c(23);
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
        let tmp5 = tmp9;
        let tmp4 = contentContainerStyle;
      } else {
        tmp4 = cResult[1];
        _require = cResult[2];
        tmp5 = cResult[3];
        importDefault = cResult[4];
      }
      const tmp10 = closure_10();
      dependencyMap = tmp10;
      if (cResult[5] !== tmp10.divider) {
        const fn = function v() {
          return closure_2_8(Form.FormDivider, { style: divider.divider });
        };
        cResult[5] = tmp10.divider;
        cResult[6] = fn;
        let tmp12 = fn;
      } else {
        tmp12 = cResult[6];
      }
      const obj = require("c");
      let num8 = 0;
      if (tmpResult.isAndroid()) {
        num8 = nativeDefault.space.PX_16;
      }
      const sum = useSafeAreaInsetsDefault().bottom + num8;
      if (cResult[7] !== sum) {
        const obj2 = { paddingBottom: sum };
        cResult[7] = sum;
        cResult[8] = obj2;
        let tmp14 = obj2;
      } else {
        tmp14 = cResult[8];
      }
      if (cResult[9] === tmp4) {
        if (cResult[10] === tmp10.contentContainer) {
          if (cResult[11] === tmp14) {
            let tmp15 = cResult[12];
          }
          if (cResult[13] === arr.length) {
            if (cResult[14] === renderItem) {
              let tmp16 = cResult[15];
            }
            if (cResult[16] === arr) {
              if (cResult[17] === tmp5) {
                if (cResult[18] === tmp10.list) {
                  if (cResult[19] === tmp12) {
                    if (cResult[20] === tmp15) {
                      if (cResult[21] === tmp16) {
                        let tmp17 = cResult[22];
                      }
                      return tmp17;
                    }
                  }
                }
              }
            }
            class I {
              constructor(arg0) {
                index = data.index;
                obj = { item: data.item, index, start: 0 === index, end: index === closure_0.length - 1 };
                return closure_1(obj);
              }
            }
            const obj3 = {};
            const merged = Object.assign(tmp5);
            obj3.data = arr;
            obj3.style = tmp10.list;
            obj3.ItemSeparatorComponent = tmp12;
            obj3.contentContainerStyle = tmp15;
            obj3.renderItem = tmp16;
            const tmp21 = closure_8(tmp(6112).BottomSheetFlatList, obj3);
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
            constructor(arg0) {
              index = data.index;
              obj = { item: data.item, index, start: 0 === index, end: index === closure_0.length - 1 };
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
      tmpResult = require("PlatformUtils");
    }
  : (data) => {
      data = data.data;
      const renderItem = data.renderItem;
      const merged = Object.assign(data, Object.assign({ data: 0, contentContainerStyle: 0, renderItem: 0 }));
      const tmp2 = closure_10();
      dependencyMap = tmp2;
      const obj = {};
      const merged1 = Object.assign(merged);
      obj.data = data;
      obj.style = tmp2.list;
      obj.ItemSeparatorComponent = function ItemSeparatorComponent() {
        return closure_2_8(Form.FormDivider, { style: divider.divider });
      };
      const items = [tmp2.contentContainer, ,];
      let num = 0;
      if (obj2.isAndroid()) {
        num = renderItem(587).space.PX_16;
      }
      items[1] = { paddingBottom: renderItem(1618)().bottom + num };
      items[2] = data.contentContainerStyle;
      obj.contentContainerStyle = items;
      obj.renderItem = function renderItem(index) {
        index = index.index;
        return renderItem({ item: index.item, index, start: 0 === index, end: index === data.length - 1 });
      };
      return closure_8(data(6112).BottomSheetFlatList, obj);
    };
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = require("c").c(13);
      if (cResult[0] !== arg0) {
        ({ contentContainerStyle, renderItem } = arg0);
        _require = renderItem;
        const tmp9 = _objectWithoutProperties(arg0, closure_4);
        cResult[0] = arg0;
        cResult[1] = contentContainerStyle;
        cResult[2] = tmp9;
        cResult[3] = renderItem;
        let tmp5 = tmp9;
        let tmp4 = contentContainerStyle;
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
          return closure_0({ item: index.item, start: 0 === index, end: index === index.section.data.length - 1 });
        };
        cResult[4] = renderItem;
        cResult[5] = fn;
        let tmp11 = fn;
      } else {
        tmp11 = cResult[5];
      }
      if (cResult[6] !== tmp10.divider) {
        const fn2 = function v() {
          return closure_2_8(Form.FormDivider, { style: divider.divider });
        };
        cResult[6] = tmp10.divider;
        cResult[7] = fn2;
        let tmp12 = fn2;
      } else {
        tmp12 = cResult[7];
      }
      if (cResult[8] === tmp4) {
        if (cResult[9] === tmp5) {
          if (cResult[10] === tmp11) {
            if (cResult[11] === tmp12) {
              let tmp13 = cResult[12];
            }
            return tmp13;
          }
        }
      }
      const obj2 = {};
      const merged = Object.assign(tmp5);
      obj2.contentContainerStyle = tmp4;
      obj2.renderItem = tmp11;
      obj2.ItemSeparatorComponent = tmp12;
      const tmp15 = closure_8(require("BottomSheetModal").BottomSheetSectionList, obj2);
      cResult[8] = tmp4;
      cResult[9] = tmp5;
      cResult[10] = tmp11;
      cResult[11] = tmp12;
      cResult[12] = tmp15;
      tmp13 = tmp15;
      const obj = require("c");
    }
  : (renderItem) => {
      renderItem = renderItem.renderItem;
      const merged = Object.assign(renderItem, Object.assign({ contentContainerStyle: 0, renderItem: 0 }));
      const divider = closure_10();
      const obj = {};
      const merged1 = Object.assign(merged);
      obj.contentContainerStyle = renderItem.contentContainerStyle;
      obj.renderItem = function renderItem(index) {
        index = index.index;
        return renderItem({ item: index.item, start: 0 === index, end: index === index.section.data.length - 1 });
      };
      obj.ItemSeparatorComponent = function ItemSeparatorComponent() {
        return closure_2_8(Form.FormDivider, { style: divider.divider });
      };
      return closure_8(renderItem(6112).BottomSheetSectionList, obj);
    };
size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileStackedActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(27);
      if (cResult[0] !== arg0) {
        ({ title, children, onBack } = arg0);
        const tmp10 = _objectWithoutProperties(arg0, closure_5);
        cResult[0] = arg0;
        cResult[1] = children;
        cResult[2] = onBack;
        cResult[3] = tmp10;
        cResult[4] = title;
        let tmp7 = title;
        let tmp6 = tmp10;
        let tmp5 = onBack;
        let tmp4 = children;
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
        let tmp13 = obj2;
      } else {
        tmp13 = cResult[6];
      }
      if (cResult[7] === tmp11.header) {
        if (cResult[8] === tmp13) {
          let tmp14 = cResult[9];
        }
        if (cResult[10] === tmp5) {
          if (cResult[11] === tmp12) {
            let tmp15 = cResult[12];
          }
          if (cResult[13] !== tmp7) {
            const obj3 = {
              variant: "redesign/heading-18/bold",
              color: "mobile-text-heading-primary",
              accessibilityRole: "header",
              children: tmp7,
            };
            const tmp20 = closure_1_8(Text_Text.Text, obj3);
            cResult[13] = tmp7;
            cResult[14] = tmp20;
            let tmp18 = tmp20;
          } else {
            tmp18 = cResult[14];
          }
          if (cResult[15] === tmp12) {
            if (cResult[16] === tmp11.headerSpacer) {
              let tmp21 = cResult[17];
            }
            if (cResult[18] === tmp14) {
              if (cResult[19] === tmp15) {
                if (cResult[20] === tmp18) {
                  if (cResult[21] === tmp21) {
                    let tmp25 = cResult[22];
                  }
                  if (cResult[23] === tmp4) {
                    if (cResult[24] === tmp6) {
                      if (cResult[25] === tmp25) {
                        let tmp29 = cResult[26];
                      }
                      return tmp29;
                    }
                  }
                  const obj4 = {};
                  const merged = Object.assign(tmp6);
                  obj4.header = tmp25;
                  obj4.children = tmp4;
                  const tmp34 = closure_1_8(Sheet_BottomSheet.BottomSheet, obj4);
                  cResult[23] = tmp4;
                  cResult[24] = tmp6;
                  cResult[25] = tmp25;
                  cResult[26] = tmp34;
                  tmp29 = tmp34;
                }
              }
            }
            const obj5 = { style: tmp14, children: null };
            const items = [tmp15, tmp18, tmp21];
            obj5.children = items;
            const tmp28 = options(View, obj5);
            cResult[18] = tmp14;
            cResult[19] = tmp15;
            cResult[20] = tmp18;
            cResult[21] = tmp21;
            cResult[22] = tmp28;
            tmp25 = tmp28;
          }
          let tmp22 = tmp12;
          if (tmp12) {
            const obj6 = { style: tmp11.headerSpacer };
            tmp22 = closure_1_8(View, obj6);
          }
          cResult[15] = tmp12;
          cResult[16] = tmp11.headerSpacer;
          cResult[17] = tmp22;
          tmp21 = tmp22;
        }
        let tmp16 = tmp12;
        if (tmp12) {
          const obj7 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
          const intl = util.intl;
          obj7.accessibilityLabel = intl.string(util.t["13/7kX"]);
          obj7.onPress = tmp5;
          obj7.children = closure_1_8(ArrowLargeLeftIcon.ArrowLargeLeftIcon, { size: "md" });
          tmp16 = closure_1_8(Pressables.PressableOpacity, obj7);
        }
        cResult[10] = tmp5;
        cResult[11] = tmp12;
        cResult[12] = tmp16;
        tmp15 = tmp16;
      }
      const items1 = [tmp11.header, tmp13];
      cResult[7] = tmp11.header;
      cResult[8] = tmp13;
      cResult[9] = items1;
      tmp14 = items1;
    }
  : (onBack) => {
      onBack = onBack.onBack;
      ({ title, children } = onBack);
      const merged = Object.assign(onBack, Object.assign({ title: 0, children: 0, onBack: 0 }));
      const tmp2 = closure_10();
      let tmp4Result2 = null != onBack;
      const obj = {};
      const merged1 = Object.assign(merged);
      const items = [tmp2.header];
      let str = "center";
      if (tmp4Result2) {
        str = "space-between";
      }
      const obj2 = { style: items, children: null };
      items[1] = { justifyContent: str };
      let tmp4Result = tmp4Result2;
      if (tmp4Result2) {
        const obj3 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
        const intl = util.intl;
        obj3.accessibilityLabel = intl.string(util.t["13/7kX"]);
        obj3.onPress = onBack;
        obj3.children = closure_1_8(ArrowLargeLeftIcon.ArrowLargeLeftIcon, { size: "md" });
        tmp4Result = closure_1_8(Pressables.PressableOpacity, obj3);
      }
      const items1 = [
        tmp4Result,
        closure_1_8(Text_Text.Text, {
          variant: "redesign/heading-18/bold",
          color: "mobile-text-heading-primary",
          accessibilityRole: "header",
          children: title,
        }),
      ];
      if (tmp4Result2) {
        const obj4 = { style: tmp2.headerSpacer };
        tmp4Result2 = closure_1_8(View, obj4);
      }
      items1[2] = tmp4Result2;
      obj2.children = items1;
      obj.header = options(View, obj2);
      obj.children = children;
      return closure_1_8(Sheet_BottomSheet.BottomSheet, obj);
    };
export const UserProfileStackedActionSheetList = tmp4;
export const UserProfileStackedActionSheetSectionList = tmp5;
