// discord_app/modules/devtools/native/components/screens/DevToolsDismissableContentsScreen.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import UserSettingsProtoActionCreators from "../../../../user_settings/UserSettingsProtoActionCreators.tsx";
import dismissible_content from "../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import TrashIcon from "../../../../../design/components/Icon/native/redesign/generated/TrashIcon.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import fuzzysearchDefault from "../../../../../../_runtime/05709_fuzzysearch.js";
import TableRow4 from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowArrow from "../../../../../design/components/TableRow/native/TableRowArrow.native.tsx";
import TableRowGroup3 from "../../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import SearchField from "../../../../../design/components/TextField/native/SearchField.native.tsx";
import TableSwitchRow3 from "../../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import SearchEmpty from "../../../../../design/components/Illustration/native/redesign/generated/SearchEmpty.tsx";
import DismissibleContentFrameworkActionCreators from "../../../../dismissible_content/DismissibleContentFrameworkActionCreators.tsx";
import toggleDismissibleContentDismissStateDefault from "../../../../dismissible_content/utils/toggleDismissibleContentDismissState.tsx";
import DoubleCheckmarkIcon from "../../../../../design/components/Icon/native/redesign/generated/DoubleCheckmarkIcon.tsx";
import _slicedToArray_mod from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../../_runtime/00019_react.js";
import DismissibleContentFrameworkStore from "../../../../dismissible_content/DismissibleContentFrameworkStore.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let importDefault;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
const f120467 = (localeCompare, arg1) => localeCompare.localeCompare(arg1);
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  contentContainer: obj3,
  headerSection: obj4,
  search: obj5,
  sectionHeader: obj6,
  emptyState: obj7,
};
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16 };
obj4 = { paddingBottom: nativeDefault.space.PX_16 };
obj5 = { paddingBottom: nativeDefault.space.PX_8 };
obj6 = { paddingBottom: nativeDefault.space.PX_8 };
obj7 = { marginVertical: nativeDefault.space.PX_32, justifyContent: "center", alignItems: "center" };
let closure_10 = createStyles(obj);
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let content;
        let end;
        let handleToggleDismissState;
        let isDismissed;
        let start;
        let tmp5;
        const obj = react2;
        const cResult = obj.c(8);
        ({ content, start, end } = arg0);
        const tmp4 = dismissible_content.DismissibleContent[content];
        if (cResult[0] !== tmp4) {
          const tmp7 = toggleDismissibleContentDismissStateDefault(tmp4);
          cResult[0] = tmp4;
          cResult[1] = tmp7;
          tmp5 = tmp7;
        } else {
          tmp5 = cResult[1];
        }
        ({ isDismissed, handleToggleDismissState } = tmp5);
        if (cResult[2] === content) {
          if (cResult[3] === end) {
            if (cResult[4] === handleToggleDismissState) {
              if (cResult[5] === isDismissed) {
                let tmp8;
                if (cResult[6] === start) {
                  tmp8 = cResult[7];
                }
                return tmp8;
              }
            }
          }
        }
        const tmp9 = metroImportDefault(TableSwitchRow3.TableSwitchRow, {
          start,
          end,
          onValueChange: handleToggleDismissState,
          value: isDismissed,
          label: content,
        });
        cResult[2] = content;
        cResult[3] = end;
        cResult[4] = handleToggleDismissState;
        cResult[5] = isDismissed;
        cResult[6] = start;
        cResult[7] = tmp9;
        tmp8 = tmp9;
      }
    : (content) => {
        let end;
        let handleToggleDismissState;
        let isDismissed;
        let start;
        const label = content.content;
        ({ start, end } = content);
        ({ isDismissed, handleToggleDismissState } = toggleDismissibleContentDismissStateDefault(
          dismissible_content.DismissibleContent[label],
        ));
        toggleDismissibleContentDismissStateDefault(dismissible_content.DismissibleContent[label]);
        return metroImportDefault(TableSwitchRow3.TableSwitchRow, { start, end, onValueChange, value, label });
      },
);
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = memo2(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let dailyCapOverridden;
        let initialSearchQuery;
        let items;
        let items1;
        let items2;
        let newUserMinAgeRequiredOverridden;
        let onSearchChange;
        let tmp5;
        let tmp8;
        const obj = react2;
        const cResult = obj.c(28);
        ({ dailyCapOverridden, newUserMinAgeRequiredOverridden, initialSearchQuery, onSearchChange } = arg0);
        const tmp4 = closure_10();
        if (cResult[0] !== dailyCapOverridden) {
          const obj2 = {
            onValueChange: DismissibleContentFrameworkActionCreators.overrideDismissibleContentFramework,
            value: dailyCapOverridden,
            label: "Daily limit",
            subLabel: "When enabled, bypass the daily limit of dismissible content shown",
          };
          const TableSwitchRow = TableSwitchRow3.TableSwitchRow;
          const tmp7 = metroImportDefault(TableSwitchRow, obj2);
          cResult[0] = dailyCapOverridden;
          cResult[1] = tmp7;
          tmp5 = tmp7;
        } else {
          tmp5 = cResult[1];
        }
        if (cResult[2] !== newUserMinAgeRequiredOverridden) {
          const obj3 = {
            onValueChange: DismissibleContentFrameworkActionCreators.overrideNewUserMinAgeRequired,
            value: newUserMinAgeRequiredOverridden,
            label: "New user account minimum age",
            subLabel: "When enabled, bypass the minimum age requirement for new user accounts",
          };
          const TableSwitchRow2 = TableSwitchRow3.TableSwitchRow;
          const tmp10 = metroImportDefault(TableSwitchRow2, obj3);
          cResult[2] = newUserMinAgeRequiredOverridden;
          cResult[3] = tmp10;
          tmp8 = tmp10;
        } else {
          tmp8 = cResult[3];
        }
        if (cResult[4] === tmp5) {
          let tmp11;
          if (cResult[5] === tmp8) {
            tmp11 = cResult[6];
          }
          if (cResult[7] === tmp4.headerSection) {
            let tmp13;
            let tmp18;
            let tmp21;
            let tmp24;
            let tmp28;
            if (cResult[8] === tmp11) {
              tmp13 = cResult[9];
            }
            const _Symbol = Symbol;
            if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
              const obj4 = {
                label: "Clear all dismissed dismissible contents",
                onPress: UserSettingsProtoActionCreators.clearDismissedContents,
                icon: metroImportDefault(TrashIcon.TrashIcon, {}),
                trailing: metroImportDefault(TableRowArrow.TableRowArrow, {}),
              };
              const TableRow = TableRow4.TableRow;
              const tmp20 = metroImportDefault(TableRow, obj4);
              cResult[10] = tmp20;
              tmp18 = tmp20;
            } else {
              tmp18 = cResult[10];
            }
            const _Symbol2 = Symbol;
            if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
              const obj5 = {
                label: "Clear all guild dismissed dismissible contents",
                onPress: UserSettingsProtoActionCreators.clearGuildDismissedContents,
                icon: metroImportDefault(TrashIcon.TrashIcon, {}),
                trailing: metroImportDefault(TableRowArrow.TableRowArrow, {}),
              };
              const TableRow2 = TableRow4.TableRow;
              const tmp23 = metroImportDefault(TableRow2, obj5);
              cResult[11] = tmp23;
              tmp21 = tmp23;
            } else {
              tmp21 = cResult[11];
            }
            const _Symbol3 = Symbol;
            if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
              const obj6 = { title: "Bulk actions", hasIcons: true, children: items };
              items = [tmp18, tmp21];
              const TableRowGroup = TableRowGroup3.TableRowGroup;
              const obj7 = {
                label: "Dismiss all dismissible contents",
                onPress: UserSettingsProtoActionCreators.checkAllDismissedContents,
                icon: metroImportDefault(DoubleCheckmarkIcon.DoubleCheckmarkIcon, {}),
                trailing: metroImportDefault(TableRowArrow.TableRowArrow, {}),
              };
              const TableRow3 = TableRow4.TableRow;
              items[2] = metroImportDefault(TableRow3, obj7);
              const tmp27 = metroImportAll(TableRowGroup, obj6);
              cResult[12] = tmp27;
              tmp24 = tmp27;
            } else {
              tmp24 = cResult[12];
            }
            if (cResult[13] !== tmp4.headerSection) {
              const obj8 = { style: tmp4.headerSection, children: tmp24 };
              const tmp31 = metroImportDefault(View, obj8);
              cResult[13] = tmp4.headerSection;
              cResult[14] = tmp31;
              tmp28 = tmp31;
            } else {
              tmp28 = cResult[14];
            }
            if (cResult[15] === initialSearchQuery) {
              let tmp32;
              if (cResult[16] === onSearchChange) {
                tmp32 = cResult[17];
              }
              if (cResult[18] === tmp4.search) {
                let tmp35;
                let tmp39;
                if (cResult[19] === tmp32) {
                  tmp35 = cResult[20];
                }
                if (cResult[21] !== tmp4.sectionHeader) {
                  const obj9 = {
                    style: tmp4.sectionHeader,
                    variant: "text-sm/semibold",
                    color: "text-default",
                    children: "Dismissible Contents",
                  };
                  const tmp41 = metroImportDefault(Text_Text.Text, obj9);
                  cResult[21] = tmp4.sectionHeader;
                  cResult[22] = tmp41;
                  tmp39 = tmp41;
                } else {
                  tmp39 = cResult[22];
                }
                if (cResult[23] === tmp35) {
                  if (cResult[24] === tmp39) {
                    if (cResult[25] === tmp13) {
                      let tmp42;
                      if (cResult[26] === tmp28) {
                        tmp42 = cResult[27];
                      }
                      return tmp42;
                    }
                  }
                }
                const obj10 = { children: items1 };
                items1 = [tmp13, tmp28, tmp35, tmp39];
                const tmp45 = metroImportAll(React4, obj10);
                cResult[23] = tmp35;
                cResult[24] = tmp39;
                cResult[25] = tmp13;
                cResult[26] = tmp28;
                cResult[27] = tmp45;
                tmp42 = tmp45;
              }
              const obj11 = { style: tmp4.search, children: tmp32 };
              const tmp38 = metroImportDefault(View, obj11);
              cResult[18] = tmp4.search;
              cResult[19] = tmp32;
              cResult[20] = tmp38;
              tmp35 = tmp38;
            }
            const obj12 = { size: "md", defaultValue: initialSearchQuery, onChange: onSearchChange };
            const tmp34 = metroImportDefault(SearchField.SearchField, obj12);
            cResult[15] = initialSearchQuery;
            cResult[16] = onSearchChange;
            cResult[17] = tmp34;
            tmp32 = tmp34;
          }
          const obj13 = { style: tmp4.headerSection, children: tmp11 };
          const tmp16 = metroImportDefault(View, obj13);
          cResult[7] = tmp4.headerSection;
          cResult[8] = tmp11;
          cResult[9] = tmp16;
          tmp13 = tmp16;
        }
        const obj14 = { title: "Global Overrides", hasIcons: false, children: items2 };
        items2 = [tmp5, tmp8];
        const tmp12 = metroImportAll(TableRowGroup3.TableRowGroup, obj14);
        cResult[4] = tmp5;
        cResult[5] = tmp8;
        cResult[6] = tmp12;
        tmp11 = tmp12;
      }
    : (arg0) => {
        let TableRowGroup;
        let TableRowGroup2;
        let dailyCapOverridden;
        let initialSearchQuery;
        let items;
        let items1;
        let items2;
        let newUserMinAgeRequiredOverridden;
        let obj3;
        let obj7;
        let onSearchChange;
        ({ dailyCapOverridden, newUserMinAgeRequiredOverridden, initialSearchQuery, onSearchChange } = arg0);
        const tmp = closure_10();
        const obj = { children: items1 };
        const obj2 = { style: tmp.headerSection, children: metroImportAll(TableRowGroup, obj3) };
        obj3 = { title: "Global Overrides", hasIcons: false, children: items };
        TableRowGroup = TableRowGroup3.TableRowGroup;
        const obj4 = {
          onValueChange: DismissibleContentFrameworkActionCreators.overrideDismissibleContentFramework,
          value: dailyCapOverridden,
          label: "Daily limit",
          subLabel: "When enabled, bypass the daily limit of dismissible content shown",
        };
        const TableSwitchRow = TableSwitchRow3.TableSwitchRow;
        items = [metroImportDefault(TableSwitchRow, obj4)];
        const obj5 = {
          onValueChange: DismissibleContentFrameworkActionCreators.overrideNewUserMinAgeRequired,
          value: newUserMinAgeRequiredOverridden,
          label: "New user account minimum age",
          subLabel: "When enabled, bypass the minimum age requirement for new user accounts",
        };
        const TableSwitchRow2 = TableSwitchRow3.TableSwitchRow;
        items[1] = metroImportDefault(TableSwitchRow2, obj5);
        items1 = [metroImportDefault(View, obj2), , ,];
        const obj6 = { style: tmp.headerSection, children: metroImportAll(TableRowGroup2, obj7) };
        obj7 = { title: "Bulk actions", hasIcons: true, children: items2 };
        TableRowGroup2 = TableRowGroup3.TableRowGroup;
        const obj8 = {
          label: "Clear all dismissed dismissible contents",
          onPress: UserSettingsProtoActionCreators.clearDismissedContents,
          icon: metroImportDefault(TrashIcon.TrashIcon, {}),
          trailing: metroImportDefault(TableRowArrow.TableRowArrow, {}),
        };
        const TableRow = TableRow4.TableRow;
        items2 = [metroImportDefault(TableRow, obj8), ,];
        const obj9 = {
          label: "Clear all guild dismissed dismissible contents",
          onPress: UserSettingsProtoActionCreators.clearGuildDismissedContents,
          icon: metroImportDefault(TrashIcon.TrashIcon, {}),
          trailing: metroImportDefault(TableRowArrow.TableRowArrow, {}),
        };
        const TableRow2 = TableRow4.TableRow;
        items2[1] = metroImportDefault(TableRow2, obj9);
        const obj10 = {
          label: "Dismiss all dismissible contents",
          onPress: UserSettingsProtoActionCreators.checkAllDismissedContents,
          icon: metroImportDefault(DoubleCheckmarkIcon.DoubleCheckmarkIcon, {}),
          trailing: metroImportDefault(TableRowArrow.TableRowArrow, {}),
        };
        const TableRow3 = TableRow4.TableRow;
        items2[2] = metroImportDefault(TableRow3, obj10);
        items1[1] = metroImportDefault(View, obj6);
        const obj11 = {
          style: tmp.search,
          children: metroImportDefault(SearchField.SearchField, {
            size: "md",
            defaultValue: initialSearchQuery,
            onChange: onSearchChange,
          }),
        };
        items1[2] = metroImportDefault(View, obj11);
        const obj12 = {
          style: tmp.sectionHeader,
          variant: "text-sm/semibold",
          color: "text-default",
          children: "Dismissible Contents",
        };
        items1[3] = metroImportDefault(Text_Text.Text, obj12);
        return metroImportAll(React4, obj);
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
const ListEmptyComponent = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let items;
      let obj3;
      let tmp11;
      let tmp5;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(4);
      const tmp4 = closure_10();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { style: obj3, variant: "heading-lg/semibold", children: "No results found" };
        obj3 = { marginBottom: nativeDefault.space.PX_16 };
        const Text = Text_Text.Text;
        const tmp9 = metroImportDefault(Text, obj2);
        const tmp10 = metroImportDefault(SearchEmpty.SearchEmpty, {});
        cResult[0] = tmp9;
        cResult[1] = tmp10;
        tmp5 = tmp9;
        tmp6 = tmp10;
      } else {
        [tmp5, tmp6] = cResult;
      }
      if (cResult[2] !== tmp4.emptyState) {
        const obj4 = { style: tmp4.emptyState, children: items };
        items = [tmp5, tmp6];
        const tmp14 = metroImportAll(View, obj4);
        cResult[2] = tmp4.emptyState;
        cResult[3] = tmp14;
        tmp11 = tmp14;
      } else {
        tmp11 = cResult[3];
      }
      return tmp11;
    }
  : () => {
      let items;
      let obj3;
      const obj = { style: closure_10().emptyState, children: items };
      const obj2 = { style: obj3, variant: "heading-lg/semibold", children: "No results found" };
      obj3 = { marginBottom: nativeDefault.space.PX_16 };
      const Text = Text_Text.Text;
      items = [metroImportDefault(Text, obj2), metroImportDefault(SearchEmpty.SearchEmpty, {})];
      return metroImportAll(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_3;
      let closure_5;
      let dailyCapOverridden;
      let first;
      let length;
      let newUserMinAgeRequiredOverridden;
      let ref;
      let tmp11;
      let tmp15;
      let tmp16;
      let tmp18;
      let tmp = ref;
      let obj = ref(first[8]);
      const cResult = obj.c(31);
      let tmp4 = closure_10();
      require("useSafeAreaInsets")();
      ref = react.useRef(null);
      importDefault = react.useRef(0);
      const obj3 = ref(first[24]);
      const tmp8 = _slicedToArray(obj3.useLocalStorageState("devtools-dc-search", ""), 2);
      const tmp2 = first;
      first = tmp8[0];
      _slicedToArray = tmp10;
      if (cResult[0] !== first) {
        const fn = function o() {
          let str = first;
          if (first == null) {
            str = "";
          }
          return str;
        };
        cResult[0] = first;
        cResult[1] = fn;
        tmp11 = fn;
      } else {
        tmp11 = cResult[1];
      }
      const first1 = tmp7(obj2.useState(tmp11), 1)[0];
      if (cResult[2] !== first) {
        class D {
          constructor() {
            let str = first;
            if (first == null) {
              str = "";
            }
            const items = [];
            const tmp = "" === str;
            for (const key10013 in dismissible_content.DismissibleContent) {
              let isNaNResult = tmp;
              if (!isNaNResult) {
                let tmp4 = fuzzysearchDefault;
                let formatted = str.toLowerCase();
                isNaNResult = tmp4(formatted, key10013.toLowerCase());
              }
              if (isNaNResult) {
                let _isNaN = isNaN;
                let _Number = Number;
                isNaNResult = isNaN(Number(key10013));
              }
              if (!isNaNResult) {
                continue;
              } else {
                let arr = items.push(key10013);
                continue;
              }
              continue;
            }
            const sorted = items.sort(f120467);
            return items;
          }
        }
        cResult[2] = first;
        cResult[3] = D;
      } else {
        class D {
          constructor() {
            let str = first;
            if (first == null) {
              str = "";
            }
            const items = [];
            const tmp = "" === str;
            for (const key10013 in dismissible_content.DismissibleContent) {
              let isNaNResult = tmp;
              if (!isNaNResult) {
                let tmp4 = fuzzysearchDefault;
                let formatted = str.toLowerCase();
                isNaNResult = tmp4(formatted, key10013.toLowerCase());
              }
              if (isNaNResult) {
                let _isNaN = isNaN;
                let _Number = Number;
                isNaNResult = isNaN(Number(key10013));
              }
              if (!isNaNResult) {
                continue;
              } else {
                let arr = items.push(key10013);
                continue;
              }
              continue;
            }
            const sorted = items.sort(f120467);
            return items;
          }
        }
      }
      [react, closure_5] = react.useState(D);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class D {
          constructor() {
            let str = first;
            if (first == null) {
              str = "";
            }
            const items = [];
            const tmp = "" === str;
            for (const key10013 in dismissible_content.DismissibleContent) {
              let isNaNResult = tmp;
              if (!isNaNResult) {
                let tmp4 = fuzzysearchDefault;
                let formatted = str.toLowerCase();
                isNaNResult = tmp4(formatted, key10013.toLowerCase());
              }
              if (isNaNResult) {
                let _isNaN = isNaN;
                let _Number = Number;
                isNaNResult = isNaN(Number(key10013));
              }
              if (!isNaNResult) {
                continue;
              } else {
                let arr = items.push(key10013);
                continue;
              }
              continue;
            }
            const sorted = items.sort(f120467);
            return items;
          }
        }
        let items = [M];
        const fn2 = function k() {
          return {
            dailyCapOverridden: M.dailyCapOverridden,
            newUserMinAgeRequiredOverridden: M.newUserMinAgeRequiredOverridden,
          };
        };
        cResult[4] = items;
        cResult[5] = fn2;
        tmp16 = fn2;
        tmp15 = items;
      } else {
        class D {
          constructor() {
            let str = first;
            if (first == null) {
              str = "";
            }
            const items = [];
            const tmp = "" === str;
            for (const key10013 in dismissible_content.DismissibleContent) {
              let isNaNResult = tmp;
              if (!isNaNResult) {
                let tmp4 = fuzzysearchDefault;
                let formatted = str.toLowerCase();
                isNaNResult = tmp4(formatted, key10013.toLowerCase());
              }
              if (isNaNResult) {
                let _isNaN = isNaN;
                let _Number = Number;
                isNaNResult = isNaN(Number(key10013));
              }
              if (!isNaNResult) {
                continue;
              } else {
                let arr = items.push(key10013);
                continue;
              }
              continue;
            }
            const sorted = items.sort(f120467);
            return items;
          }
        }
        tmp16 = cResult[5];
      }
      const tmpResult = tmp(tmp2[25]);
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp15, tmp16);
      ({ dailyCapOverridden, newUserMinAgeRequiredOverridden } = stateFromStoresObject);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor() {
            current = closure_1.current;
            animationFrame = requestAnimationFrame(() => {
              current = ref.current;
              if (current != null) {
                const obj = { offset: current, animated: false };
                current.scrollToOffset(obj);
              }
            });
            return;
          }
        }
        cResult[6] = M;
        tmp18 = M;
      } else {
        class M {
          constructor() {
            current = closure_1.current;
            animationFrame = requestAnimationFrame(() => {
              current = ref.current;
              if (current != null) {
                const obj = { offset: current, animated: false };
                current.scrollToOffset(obj);
              }
            });
            return;
          }
        }
      }
      M = tmp18;
      if (cResult[7] !== tmp8[1]) {
        class F {
          constructor(str) {
            closure_3(str);
            const items = [];
            const tmp3 = "" === str;
            for (const key10015 in dismissible_content.DismissibleContent) {
              let isNaNResult = tmp3;
              if (!isNaNResult) {
                let tmp6 = fuzzysearchDefault;
                let formatted = str.toLowerCase();
                isNaNResult = tmp6(formatted, key10015.toLowerCase());
              }
              if (isNaNResult) {
                let _isNaN = isNaN;
                let _Number = Number;
                isNaNResult = isNaN(Number(key10015));
              }
              if (!isNaNResult) {
                continue;
              } else {
                let arr = items.push(key10015);
                continue;
              }
              continue;
            }
            const sorted = items.sort(f120467);
            closure_5(items);
            M();
          }
        }
        cResult[7] = tmp8[1];
        cResult[8] = F;
      } else {
        class F {
          constructor(str) {
            closure_3(str);
            const items = [];
            const tmp3 = "" === str;
            for (const key10015 in dismissible_content.DismissibleContent) {
              let isNaNResult = tmp3;
              if (!isNaNResult) {
                let tmp6 = fuzzysearchDefault;
                let formatted = str.toLowerCase();
                isNaNResult = tmp6(formatted, key10015.toLowerCase());
              }
              if (isNaNResult) {
                let _isNaN = isNaN;
                let _Number = Number;
                isNaNResult = isNaN(Number(key10015));
              }
              if (!isNaNResult) {
                continue;
              } else {
                let arr = items.push(key10015);
                continue;
              }
              continue;
            }
            const sorted = items.sort(f120467);
            closure_5(items);
            M();
          }
        }
      }
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class N {
          constructor(nativeEvent) {
            ref.current = nativeEvent.nativeEvent.contentOffset.y;
          }
        }
        cResult[9] = N;
      } else {
        class N {
          constructor(nativeEvent) {
            ref.current = nativeEvent.nativeEvent.contentOffset.y;
          }
        }
      }
      if (cResult[10] === dailyCapOverridden) {
        class N {
          constructor(nativeEvent) {
            ref.current = nativeEvent.nativeEvent.contentOffset.y;
          }
        }
      }
      cResult[10] = dailyCapOverridden;
      cResult[11] = F;
      cResult[12] = first1;
      cResult[13] = newUserMinAgeRequiredOverridden;
      cResult[14] = closure_7(closure_12, {
        dailyCapOverridden,
        newUserMinAgeRequiredOverridden,
        initialSearchQuery: first1,
        onSearchChange: F,
      });
      closure_7(closure_12, {
        dailyCapOverridden,
        newUserMinAgeRequiredOverridden,
        initialSearchQuery: first1,
        onSearchChange: F,
      });
    }
  : () => {
      let FlashList;
      let callback1;
      let closure_3;
      let closure_6;
      let first1;
      let initialSearchQuery;
      let items4;
      let obj4;
      let tmp5;
      let tmp = callback1();
      const tmp2 = useSafeAreaInsetsDefault();
      const ref = initialSearchQuery.useRef(null);
      importDefault = initialSearchQuery.useRef(0);
      let obj = ref(9606);
      let tmp4 = _slicedToArray(obj.useLocalStorageState("devtools-dc-search", ""), 2);
      [dependencyMap, tmp5] = tmp4;
      _slicedToArray = tmp5;
      initialSearchQuery = _slicedToArray(
        initialSearchQuery.useState(() => {
          let str = dependencyMap;
          if (dependencyMap == null) {
            str = "";
          }
          return str;
        }),
        1,
      )[0];
      [first1, closure_6] = initialSearchQuery.useState(() => {
        let str = dependencyMap;
        if (dependencyMap == null) {
          str = "";
        }
        const items = [];
        const tmp = "" === str;
        for (const key10013 in dismissible_content.DismissibleContent) {
          let isNaNResult = tmp;
          if (!isNaNResult) {
            let tmp4 = fuzzysearchDefault;
            let formatted = str.toLowerCase();
            isNaNResult = tmp4(formatted, key10013.toLowerCase());
          }
          if (isNaNResult) {
            let _isNaN = isNaN;
            let _Number = Number;
            isNaNResult = isNaN(Number(key10013));
          }
          if (!isNaNResult) {
            continue;
          } else {
            let arr = items.push(key10013);
            continue;
          }
          continue;
        }
        const sorted = items.sort(f120467);
        return items;
      });
      let items = [closure_6];
      const obj2 = ref(504);
      const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => ({
        dailyCapOverridden: closure_6.dailyCapOverridden,
        newUserMinAgeRequiredOverridden: closure_6.newUserMinAgeRequiredOverridden,
      }));
      const dailyCapOverridden = stateFromStoresObject.dailyCapOverridden;
      const newUserMinAgeRequiredOverridden = stateFromStoresObject.newUserMinAgeRequiredOverridden;
      const callback = initialSearchQuery.useCallback(() => {
        let current = ref.current;
        const animationFrame = requestAnimationFrame(() => {
          current = ref.current;
          if (current != null) {
            const obj = { offset: current, animated: false };
            current.scrollToOffset(obj);
          }
        });
      }, []);
      const items1 = [tmp5, callback];
      callback1 = initialSearchQuery.useCallback((str) => {
        dependencyMap(str);
        const items = [];
        const tmp3 = "" === str;
        for (const key10015 in dismissible_content.DismissibleContent) {
          let isNaNResult = tmp3;
          if (!isNaNResult) {
            let tmp6 = fuzzysearchDefault;
            let formatted = str.toLowerCase();
            isNaNResult = tmp6(formatted, key10015.toLowerCase());
          }
          if (isNaNResult) {
            let _isNaN = isNaN;
            let _Number = Number;
            isNaNResult = isNaN(Number(key10015));
          }
          if (!isNaNResult) {
            continue;
          } else {
            let arr = items.push(key10015);
            continue;
          }
          continue;
        }
        const sorted = items.sort(f120467);
        closure_6(items);
        callback();
      }, items1);
      const items2 = [dailyCapOverridden, newUserMinAgeRequiredOverridden, initialSearchQuery, callback1];
      const callback2 = initialSearchQuery.useCallback((nativeEvent) => {
        ref.current = nativeEvent.nativeEvent.contentOffset.y;
      }, []);
      const items3 = [first1.length];
      const memo = initialSearchQuery.useMemo(() => {
        const obj = {
          dailyCapOverridden,
          newUserMinAgeRequiredOverridden,
          initialSearchQuery,
          onSearchChange: callback1,
        };
        return metroImportDefault(closure_12, obj);
      }, items2);
      const obj3 = { style: tmp.container, children: dailyCapOverridden(FlashList, obj4) };
      const callback3 = initialSearchQuery.useCallback((content) => {
        const index = content.index;
        const obj = { content: content.item, start: 0 === index, end: index === first1.length - 1 };
        return metroImportDefault(closure_11, obj);
      }, items3);
      obj4 = {
        ref,
        data: first1,
        contentContainerStyle: items4,
        keyboardShouldPersistTaps: "handled",
        keyboardDismissMode: "on-drag",
        automaticallyAdjustKeyboardInsets: true,
        ListHeaderComponent: memo,
        ListEmptyComponent,
        keyExtractor(arg0) {
          return arg0;
        },
        renderItem: callback3,
        onScroll: callback2,
        scrollEventThrottle: 16,
      };
      items4 = [tmp.contentContainer];
      const obj5 = { paddingBottom: tmp2.bottom + nativeDefault.space.PX_16 };
      FlashList = ref(8404).FlashList;
      items4[1] = obj5;
      return dailyCapOverridden(first1, obj3);
    };
const result = size.fileFinishedImporting(
  "modules/devtools/native/components/screens/DevToolsDismissableContentsScreen.tsx",
);

export default tmp5;
