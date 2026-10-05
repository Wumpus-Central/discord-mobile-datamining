// discord_app/modules/instant_invite/native/action_sheet/invite_to_guilds/GuildInviteActionSheet.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import intl4 from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import SearchField2 from "../../../../../design/components/TextField/native/SearchField.native.tsx";
import BottomSheetTitleHeader2 from "../../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import Sheet_BottomSheet from "../../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import InstantInviteUtilsDefault from "../../../../../utils/InstantInviteUtils.tsx";
import AssetRegistryDefault from "../../../../../../_runtime/12793_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../../../_runtime/12794_AssetRegistry.js";
import GuildInviteRowDefault from "GuildInviteRow.tsx";
import _slicedToArray_mod from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let BottomSheet, dependencyMap, tmp3;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: obj2, searchbarWrapper: obj3, sectionTitle: obj4, emptyStateContainer: { margin: 24 } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { rowGap: 8, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj4 = { paddingBottom: 6, paddingTop: 24, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const ListEmptyComponent = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp5;
      let tmp6;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(4);
      const tmp4 = closure_8();
      const emptyStateContainer = tmp4.emptyStateContainer;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl4.intl;
        const stringResult = intl.string(intl4.t["2bfiLk"]);
        const intl2 = intl4.intl;
        const stringResult1 = intl2.string(intl4.t.V6nAfF);
        cResult[0] = stringResult;
        cResult[1] = stringResult1;
        tmp5 = stringResult;
        tmp6 = stringResult1;
      } else {
        [tmp5, tmp6] = cResult;
      }
      if (cResult[2] !== tmp4.emptyStateContainer) {
        const obj2 = {
          containerStyle: emptyStateContainer,
          title: tmp5,
          body: tmp6,
          darkSource: AssetRegistryDefault,
          lightSource: AssetRegistryDefault2,
        };
        const ThemedEmptyState = native.ThemedEmptyState;
        const tmp12 = metroRequire(ThemedEmptyState, obj2);
        cResult[2] = tmp4.emptyStateContainer;
        cResult[3] = tmp12;
        tmp9 = tmp12;
      } else {
        tmp9 = cResult[3];
      }
      return tmp9;
    }
  : () => {
      let intl;
      let intl2;
      const obj = {
        containerStyle: closure_8().emptyStateContainer,
        title: intl.string(intl4.t["2bfiLk"]),
        body: intl2.string(intl4.t.V6nAfF),
        darkSource: AssetRegistryDefault,
        lightSource: AssetRegistryDefault2,
      };
      const ThemedEmptyState = native.ThemedEmptyState;
      intl = intl4.intl;
      intl2 = intl4.intl;
      return metroRequire(ThemedEmptyState, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (recipientId) => {
      let arr;
      let arr2;
      let intl2;
      let items;
      let sectionTitle;
      let tmp = recipientId;
      let tmp2 = dependencyMap;
      let obj = recipientId(576);
      const cResult = obj.c(21);
      recipientId = recipientId.recipientId;
      const source = recipientId.source;
      const query = recipientId.query;
      const tmp4 = closure_8();
      dependencyMap = tmp4;
      const obj2 = recipientId(12790);
      [arr, arr2] = obj2.useServerInviteRows(recipientId, query);
      _slicedToArray(obj2.useServerInviteRows(recipientId, query), 2);
      if (cResult[0] === (0 === arr.length && 0 === arr2.length)) {
        if (cResult[1] === arr) {
          let tmp7;
          if (cResult[2] === arr2) {
            tmp7 = cResult[3];
          }
          if (cResult[4] === recipientId) {
            let tmp10;
            if (cResult[5] === source) {
              tmp10 = cResult[6];
            }
            if (cResult[7] !== tmp4) {
              class E {
                constructor(arg0) {
                  tmp = null;
                  if (recipientId.data.length > 0) {
                    tmp2 = jsx;
                    tmp3 = closure_0;
                    tmp4 = closure_2;
                    obj = { style: null, variant: "text-sm/semibold", color: "text-default", children: null };
                    tmp5 = closure_2;
                    obj.style = closure_2.sectionTitle;
                    obj.children = recipientId.title;
                    tmp = jsx(closure_0(closure_2[14]).Text, obj);
                  }
                  return tmp;
                }
              }
              class T {
                constructor(arg0) {
                  ({ item, start, end } = recipientId);
                  obj = { row: item, recipientId, source, start, end };
                  return jsx(closure_1(closure_2[13]), obj);
                }
              }
              cResult[8] = E;
            } else {
              class E {
                constructor(arg0) {
                  tmp = null;
                  if (recipientId.data.length > 0) {
                    tmp2 = jsx;
                    tmp3 = closure_0;
                    tmp4 = closure_2;
                    obj = { style: null, variant: "text-sm/semibold", color: "text-default", children: null };
                    tmp5 = closure_2;
                    obj.style = closure_2.sectionTitle;
                    obj.children = recipientId.title;
                    tmp = jsx(closure_0(closure_2[14]).Text, obj);
                  }
                  return tmp;
                }
              }
            }
            class T {
              constructor(arg0) {
                ({ item, start, end } = recipientId);
                obj = { row: item, recipientId, source, start, end };
                return jsx(closure_1(closure_2[13]), obj);
              }
            }
            const insets = source(6471)().insets;
            const tmp12 = source;
            if (0 !== arr.length) {
              class E {
                constructor(arg0) {
                  tmp = null;
                  if (recipientId.data.length > 0) {
                    tmp2 = jsx;
                    tmp3 = closure_0;
                    tmp4 = closure_2;
                    obj = { style: null, variant: "text-sm/semibold", color: "text-default", children: null };
                    tmp5 = closure_2;
                    obj.style = closure_2.sectionTitle;
                    obj.children = recipientId.title;
                    tmp = jsx(closure_0(closure_2[14]).Text, obj);
                  }
                  return tmp;
                }
              }
            }
            let closure_4 = tmp13;
            if (0 === arr.length) {
              class E {
                constructor(arg0) {
                  tmp = null;
                  if (recipientId.data.length > 0) {
                    tmp2 = jsx;
                    tmp3 = closure_0;
                    tmp4 = closure_2;
                    obj = { style: null, variant: "text-sm/semibold", color: "text-default", children: null };
                    tmp5 = closure_2;
                    obj.style = closure_2.sectionTitle;
                    obj.children = recipientId.title;
                    tmp = jsx(closure_0(closure_2[14]).Text, obj);
                  }
                  return tmp;
                }
              }
            }
            const sum = insets.bottom + tmp12(587).space.PX_16;
            if (cResult[9] === 0) {
              class E {
                constructor(arg0) {
                  tmp = null;
                  if (recipientId.data.length > 0) {
                    tmp2 = jsx;
                    tmp3 = closure_0;
                    tmp4 = closure_2;
                    obj = { style: null, variant: "text-sm/semibold", color: "text-default", children: null };
                    tmp5 = closure_2;
                    obj.style = closure_2.sectionTitle;
                    obj.children = recipientId.title;
                    tmp = jsx(closure_0(closure_2[14]).Text, obj);
                  }
                  return tmp;
                }
              }
              if ((cResult[12] === 0) === arr.length) {
                class E {
                  constructor(arg0) {
                    tmp = null;
                    if (recipientId.data.length > 0) {
                      tmp2 = jsx;
                      tmp3 = closure_0;
                      tmp4 = closure_2;
                      obj = { style: null, variant: "text-sm/semibold", color: "text-default", children: null };
                      tmp5 = closure_2;
                      obj.style = closure_2.sectionTitle;
                      obj.children = recipientId.title;
                      tmp = jsx(closure_0(closure_2[14]).Text, obj);
                    }
                    return tmp;
                  }
                }
                class T {
                  constructor(arg0) {
                    ({ item, start, end } = recipientId);
                    obj = { row: item, recipientId, source, start, end };
                    return jsx(closure_1(closure_2[13]), obj);
                  }
                }
                if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                  class A {
                    constructor(arg0) {
                      return recipientId.guild.id;
                    }
                  }
                  class T {
                    constructor(arg0) {
                      ({ item, start, end } = recipientId);
                      obj = { row: item, recipientId, source, start, end };
                      return jsx(closure_1(closure_2[13]), obj);
                    }
                  }
                } else {
                  class A {
                    constructor(arg0) {
                      return recipientId.guild.id;
                    }
                  }
                }
                if (cResult[16] === tmp10) {
                  class A {
                    constructor(arg0) {
                      return recipientId.guild.id;
                    }
                  }
                }
                const obj3 = {
                  renderItem: tmp10,
                  contentContainerStyle: tmp15,
                  sections: tmp7,
                  renderSectionHeader: tmp17,
                  stickySectionHeadersEnabled: true,
                  keyExtractor: A,
                  ListEmptyComponent,
                };
                cResult[16] = tmp10;
                cResult[17] = tmp7;
                cResult[18] = tmp15;
                cResult[19] = tmp17;
                cResult[20] = closure_6(tmp(10841).UserProfileStackedActionSheetSectionList, obj3);
                const tmp23 = closure_6(tmp(10841).UserProfileStackedActionSheetSectionList, obj3);
              }
              class T {
                constructor(arg0) {
                  ({ item, start, end } = recipientId);
                  obj = { row: item, recipientId, source, start, end };
                  return jsx(closure_1(closure_2[13]), obj);
                }
              }
              cResult[12] = 0 === arr.length;
              cResult[13] = E;
              cResult[14] = tmp17;
            }
            const obj4 = { paddingTop: 0, paddingBottom: sum };
            cResult[9] = 0;
            cResult[10] = sum;
            cResult[11] = obj4;
          }
          class T {
            constructor(arg0) {
              ({ item, start, end } = recipientId);
              obj = { row: item, recipientId, source, start, end };
              return jsx(closure_1(closure_2[13]), obj);
            }
          }
          cResult[4] = recipientId;
          cResult[5] = source;
          cResult[6] = T;
          tmp10 = T;
        }
      }
      if (0 === arr.length && 0 === arr2.length) {
        class A {
          constructor(arg0) {
            return recipientId.guild.id;
          }
        }
      } else {
        class A {
          constructor(arg0) {
            return recipientId.guild.id;
          }
        }
        const intl = tmp(1126).intl;
        class T {
          constructor(arg0) {
            ({ item, start, end } = recipientId);
            obj = { row: item, recipientId, source, start, end };
            return jsx(closure_1(closure_2[13]), obj);
          }
        }
        tmp8[0] = tmp9(tmp(1126).t["u+Ithu"]);
        tmp8[1] = arr;
        items = [tmp8];
        const obj5 = { title: intl2.string(tmp(1126).t["c5T+X/"]), data: arr2 };
        intl2 = tmp(1126).intl;
        items[1] = obj5;
      }
      cResult[0] = 0 === arr.length && 0 === arr2.length;
      cResult[1] = arr;
      cResult[2] = arr2;
      cResult[3] = items;
      tmp7 = items;
    }
  : (recipientId) => {
      let arr;
      let arr2;
      let closure_3;
      let intl;
      let intl2;
      let items;
      let obj3;
      let sectionTitle;
      recipientId = recipientId.recipientId;
      const source = recipientId.source;
      _slicedToArray = undefined;
      const query = recipientId.query;
      dependencyMap = closure_8();
      let tmp = recipientId;
      let tmp2 = dependencyMap;
      let obj = recipientId(12790);
      [arr, arr2] = obj.useServerInviteRows(recipientId, query);
      _slicedToArray(obj.useServerInviteRows(recipientId, query), 2);
      if (0 === arr.length) {
        if (0 === arr2.length) {
          items = [];
        }
        let tmp5 = 0 === arr.length;
        const insets = source(6471)().insets;
        const tmp4 = source;
        if (!tmp5) {
          tmp5 = 0 === arr2.length;
        }
        _slicedToArray = tmp5;
        let num = 0;
        const obj2 = {
          renderItem(arg0) {
            let end;
            let item;
            let start;
            ({ item, start, end } = arg0);
            const obj = { row: item, recipientId, source, start, end };
            return metroRequire(GuildInviteRowDefault, obj);
          },
          contentContainerStyle: obj3,
          sections: items,
          renderSectionHeader(section) {
            section = section.section;
            let tmp = null;
            if (!closure_3) {
              let tmp2 = null;
              if (section.data.length > 0) {
                const obj = {
                  style: sectionTitle.sectionTitle,
                  variant: "text-sm/semibold",
                  color: "text-default",
                  children: section.title,
                };
                tmp2 = metroRequire(Text_Text.Text, obj);
              }
              tmp = tmp2;
            }
            return tmp;
          },
          stickySectionHeadersEnabled: true,
          keyExtractor(guild) {
            return guild.guild.id;
          },
          ListEmptyComponent,
        };
        const UserProfileStackedActionSheetSectionList = tmp(10841).UserProfileStackedActionSheetSectionList;
        if (tmp5) {
          num = 24;
        }
        obj3 = { paddingTop: num, paddingBottom: insets.bottom + tmp4(587).space.PX_16 };
        return closure_6(UserProfileStackedActionSheetSectionList, obj2);
      }
      const obj4 = { title: intl.string(tmp(1126).t["u+Ithu"]), data: arr };
      intl = tmp(1126).intl;
      items = [obj4];
      const obj5 = { title: intl2.string(tmp(1126).t["c5T+X/"]), data: arr2 };
      intl2 = tmp(1126).intl;
      items[1] = obj5;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_129_0;
      let first;
      let format;
      let intl;
      let intl2;
      let items;
      let items1;
      let obj5;
      let recipientId;
      let source;
      let tmp11;
      let tmp14;
      let tmp19;
      let tmp6;
      let tmp8;
      let v4UyUHh;
      const obj = react2;
      const cResult = obj.c(14);
      ({ recipientId, source } = arg0);
      const tmp4 = closure_8();
      [tmp6, closure_129_0] = react.useState("");
      _slicedToArray(react.useState(""), 2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function h(arg0) {
          closure_1_0(arg0);
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { title: intl.string(intl4.t.HvoZQD) };
        const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
        intl = intl4.intl;
        const tmp10 = metroRequire(BottomSheetTitleHeader, obj2);
        cResult[1] = tmp10;
        tmp8 = tmp10;
      } else {
        tmp8 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { onChange: first, placeholder: intl2.string(intl4.t.uohsSv) };
        const SearchField = SearchField2.SearchField;
        intl2 = intl4.intl;
        const tmp13 = metroRequire(SearchField, obj3);
        cResult[2] = tmp13;
        tmp11 = tmp13;
      } else {
        tmp11 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { variant: "text-xs/medium", color: "text-subtle", children: format(v4UyUHh, obj5) };
        const Text = Text_Text.Text;
        const intl3 = intl4.intl;
        format = intl3.format;
        obj5 = { xDays: InstantInviteUtilsDefault.INVITE_OPTIONS_7_DAYS.label };
        v4UyUHh = intl4.t["4UyUHh"];
        const tmp18 = metroRequire(Text, obj4);
        cResult[3] = tmp18;
        tmp14 = tmp18;
      } else {
        tmp14 = cResult[3];
      }
      if (cResult[4] !== tmp4.searchbarWrapper) {
        const obj6 = { style: tmp4.searchbarWrapper, children: items };
        items = [tmp11, tmp14];
        const tmp22 = metroImportDefault(View, obj6);
        cResult[4] = tmp4.searchbarWrapper;
        cResult[5] = tmp22;
        tmp19 = tmp22;
      } else {
        tmp19 = cResult[5];
      }
      if (cResult[6] === tmp6) {
        if (cResult[7] === recipientId) {
          let tmp23;
          if (cResult[8] === source) {
            tmp23 = cResult[9];
          }
          if (cResult[10] === tmp4.content) {
            if (cResult[11] === tmp19) {
              let tmp25;
              if (cResult[12] === tmp23) {
                tmp25 = cResult[13];
              }
              return tmp25;
            }
          }
          const obj7 = {
            scrollable: true,
            startExpanded: true,
            header: tmp8,
            contentStyles: tmp4.content,
            children: items1,
          };
          items1 = [tmp19, tmp23];
          const tmp27 = metroImportDefault(Sheet_BottomSheet.BottomSheet, obj7);
          cResult[10] = tmp4.content;
          cResult[11] = tmp19;
          cResult[12] = tmp23;
          cResult[13] = tmp27;
          tmp25 = tmp27;
        }
      }
      const tmp24 = metroRequire(closure_10, { query: tmp6, recipientId, source });
      cResult[6] = tmp6;
      cResult[7] = recipientId;
      cResult[8] = source;
      cResult[9] = tmp24;
      tmp23 = tmp24;
    }
  : (arg0) => {
      let closure_0;
      let first;
      let format;
      let intl;
      let intl2;
      let items;
      let items1;
      let obj6;
      let recipientId;
      let source;
      let v4UyUHh;
      closure_0 = undefined;
      ({ recipientId, source } = arg0);
      const tmp = closure_8();
      [first, closure_0] = react.useState("");
      const obj = { title: intl.string(intl4.t.HvoZQD) };
      const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
      intl = intl4.intl;
      const obj2 = {
        scrollable: true,
        startExpanded: true,
        header: metroRequire(BottomSheetTitleHeader, obj),
        contentStyles: tmp.content,
        children: items1,
      };
      const obj3 = { style: tmp.searchbarWrapper, children: items };
      BottomSheet = Sheet_BottomSheet.BottomSheet;
      const obj4 = {
        onChange(arg0) {
          closure_0(arg0);
        },
        placeholder: intl2.string(intl4.t.uohsSv),
      };
      const SearchField = SearchField2.SearchField;
      intl2 = intl4.intl;
      items = [metroRequire(SearchField, obj4)];
      const obj5 = { variant: "text-xs/medium", color: "text-subtle", children: format(v4UyUHh, obj6) };
      const Text = Text_Text.Text;
      const intl3 = intl4.intl;
      format = intl3.format;
      obj6 = { xDays: InstantInviteUtilsDefault.INVITE_OPTIONS_7_DAYS.label };
      v4UyUHh = intl4.t["4UyUHh"];
      items[1] = metroRequire(Text, obj5);
      items1 = [metroImportDefault(View, obj3), metroRequire(closure_10, { query: first, recipientId, source })];
      return metroImportDefault(BottomSheet, obj2);
    };
const result = size.fileFinishedImporting(
  "modules/instant_invite/native/action_sheet/invite_to_guilds/GuildInviteActionSheet.tsx",
);

export default tmp4;
