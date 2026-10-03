// discord_app/modules/devtools/native/components/screens/DevToolsActionSheetsScreen.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../../../_runtime/01987_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../../../actions/ModalActionCreators.tsx";
import TableRowGroup from "../../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import BottomSheetTitleHeader from "../../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import Sheet_BottomSheet from "../../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import SuspiciousDownloadModalActionCreatorsDefault from "../../../../suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx";
import BlockedDomainModalActionCreatorsDefault from "../../../../blocked_domains/BlockedDomainModalActionCreators.native.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  wrap: {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    flex: 1,
    paddingHorizontal: nativeDefault.space.PX_12,
  },
  contentContainer: null,
};
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  flex: 1,
  paddingHorizontal: nativeDefault.space.PX_12,
};
obj2.contentContainer = { paddingVertical: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj2);
let items = [
  {
    type: "blocked-domain",
    label: "Blocked Domain",
    description: "Shows a warning for potentially malicious domains",
    show() {
      return BlockedDomainModalActionCreatorsDefault.show("https://example-phishing-site.com/malicious-page");
    },
  },
  {
    type: "suspicious-download",
    label: "Suspicious Download",
    description: "Warns users about potentially dangerous file downloads",
    show() {
      return SuspiciousDownloadModalActionCreatorsDefault.show("https://suspicious-file.com/dangerous-file.exe");
    },
  },
  {
    type: "inappropriate-conversation",
    label: "Inappropriate Conversation",
    description: "Shows safety warning for inappropriate conversations",
    show() {
      return ModalActionCreatorsDefault.pushLazy(
        asyncRequireImpl(15598, dependencyMap.paths),
        {
          warningId: "test-warning-123",
          warningType: "inappropriate_conversation",
          senderId: "123456789",
          channelId: "987654321",
        },
        "INAPPROPRIATE_CONVERSATION_TAKEOVER_MODAL",
      );
    },
  },
];
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (selectedType) => {
      const cResult = selectedType(576).c(9);
      selectedType = selectedType.selectedType;
      const onSelect = selectedType.onSelect;
      if (cResult[0] !== onSelect) {
        const fn = function o(type) {
          ActionSheetActionCreatorsDefault.hideActionSheet("action-sheet-selector");
          onSelect(type.type);
          type.show();
        };
        cResult[0] = onSelect;
        cResult[1] = fn;
        let tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      dependencyMap = tmp4;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { title: "Select Action Sheet", subtitle: null };
        const _HermesInternal = HermesInternal;
        obj2.subtitle = "" + items.length + " options";
        const tmp8 = closure_7(tmp(6644).BottomSheetTitleHeader, obj2);
        cResult[2] = tmp8;
        let tmp5 = tmp8;
      } else {
        tmp5 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { paddingHorizontal: onSelect(587).space.PX_12 };
        cResult[3] = obj3;
        let tmp9 = obj3;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] === tmp4) {
        if (cResult[5] === selectedType) {
          let tmp11 = cResult[6];
        }
        if (cResult[7] !== tmp11) {
          const obj4 = { header: tmp5, children: null };
          const obj5 = { style: tmp9, children: null };
          const obj6 = { hasIcons: true, children: tmp11 };
          obj5.children = closure_7(tmp(6074).TableRowGroup, obj6);
          obj4.children = closure_7(closure_5, obj5);
          const tmp16 = closure_7(tmp(6645).BottomSheet, obj4);
          cResult[7] = tmp11;
          cResult[8] = tmp16;
          let tmp13 = tmp16;
        } else {
          tmp13 = cResult[8];
        }
        return tmp13;
      }
      const mapped = items.map((type, index) => {
        closure_0 = type;
        const obj = {
          icon: closure_1_7(selectedType(4803).WarningIcon, { size: "md" }),
          label: null,
          subLabel: null,
          onPress() {
            return closure_2(closure_0);
          },
          trailing: null,
          start: null,
          end: null,
        };
        ({ label: obj.label, description: obj.subLabel } = type);
        let tmpResult;
        if (closure_0 === type.type) {
          tmpResult = closure_1_7(selectedType(4577).CheckmarkLargeIcon, {
            size: "md",
            color: "text-feedback-positive",
          });
        }
        obj.trailing = tmpResult;
        obj.start = 0 === index;
        obj.end = index === length.length - 1;
        return closure_1_7(selectedType(5993).TableRow, obj, type.type);
      });
      cResult[4] = tmp4;
      cResult[5] = selectedType;
      cResult[6] = mapped;
      tmp11 = mapped;
      let obj = selectedType(576);
    }
  : (arg0) => {
      ({ selectedType: require, onSelect } = arg0);
      items = [onSelect];
      dependencyMap = noop.useCallback((type) => {
        ActionSheetActionCreatorsDefault.hideActionSheet("action-sheet-selector");
        onSelect(type.type);
        type.show();
      }, items);
      let obj = {
        header: closure_7(BottomSheetTitleHeader.BottomSheetTitleHeader, {
          title: "Select Action Sheet",
          subtitle: "" + items.length + " options",
        }),
        children: null,
      };
      const obj3 = { style: null, children: null };
      const obj2 = { title: "Select Action Sheet", subtitle: "" + items.length + " options" };
      obj3.style = { paddingHorizontal: onSelect(587).space.PX_12 };
      const obj4 = { paddingHorizontal: onSelect(587).space.PX_12 };
      obj3.children = closure_7(TableRowGroup.TableRowGroup, {
        hasIcons: true,
        children: items.map((type, index) => {
          closure_0 = type;
          const obj = {
            icon: closure_1_7(require("WarningIcon").WarningIcon, { size: "md" }),
            label: null,
            subLabel: null,
            onPress() {
              return closure_2(closure_0);
            },
            trailing: null,
            start: null,
            end: null,
          };
          ({ label: obj.label, description: obj.subLabel } = type);
          let tmpResult;
          if (closure_0 === type.type) {
            tmpResult = closure_1_7(require("CheckmarkLargeIcon").CheckmarkLargeIcon, {
              size: "md",
              color: "text-feedback-positive",
            });
          }
          obj.trailing = tmpResult;
          obj.start = 0 === index;
          obj.end = index === length.length - 1;
          return closure_1_7(require("TableRow").TableRow, obj, type.type);
        }),
      });
      obj.children = closure_7(closure_5, obj3);
      return closure_7(Sheet_BottomSheet.BottomSheet, obj);
    };
ReactCompilerGating = fn(558);
let obj4 = { paddingVertical: nativeDefault.space.PX_16 };
let obj5 = {
  type: "blocked-domain",
  label: "Blocked Domain",
  description: "Shows a warning for potentially malicious domains",
  show() {
    return BlockedDomainModalActionCreatorsDefault.show("https://example-phishing-site.com/malicious-page");
  },
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsActionSheetsScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = selectedType(576).c(13);
      closure_9();
      [selectedType, importDefault] = noop.useState("blocked-domain");
      if (cResult[0] !== selectedType) {
        const found = items.find((type) => type.type === first);
        cResult[0] = selectedType;
        cResult[1] = found;
        let tmp7 = found;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] !== selectedType) {
        class T {
          constructor() {
            obj = closure_1(closure_2[13]);
            obj1 = { default: f71011 };
            obj4 = { selectedType: closure_0, onSelect: closure_1 };
            openLazyResult = obj.openLazy(Promise.resolve(obj1), "action-sheet-selector", obj4);
            return;
          }
        }
        cResult[2] = selectedType;
        cResult[3] = T;
      } else {
        class T {
          constructor() {
            obj = closure_1(closure_2[13]);
            obj1 = { default: f71011 };
            obj4 = { selectedType: closure_0, onSelect: closure_1 };
            openLazyResult = obj.openLazy(Promise.resolve(obj1), "action-sheet-selector", obj4);
            return;
          }
        }
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class T {
          constructor() {
            obj = closure_1(closure_2[13]);
            obj1 = { default: f71011 };
            obj4 = { selectedType: closure_0, onSelect: closure_1 };
            openLazyResult = obj.openLazy(Promise.resolve(obj1), "action-sheet-selector", obj4);
            return;
          }
        }
        const tmp12 = closure_7(tmp(4886).Text, { variant: "heading-lg/medium", children: "Action Sheets" });
        cResult[4] = tmp12;
        const tmp11 = tmp12;
      } else {
        class T {
          constructor() {
            obj = closure_1(closure_2[13]);
            obj1 = { default: f71011 };
            obj4 = { selectedType: closure_0, onSelect: closure_1 };
            openLazyResult = obj.openLazy(Promise.resolve(obj1), "action-sheet-selector", obj4);
            return;
          }
        }
      }
      if (cResult[5] === T) {
        class T {
          constructor() {
            obj = closure_1(closure_2[13]);
            obj1 = { default: f71011 };
            obj4 = { selectedType: closure_0, onSelect: closure_1 };
            openLazyResult = obj.openLazy(Promise.resolve(obj1), "action-sheet-selector", obj4);
            return;
          }
        }
      }
      const obj2 = { spacing: 16, children: null };
      const obj3 = { children: null };
      items = [tmp11];
      const obj4 = {
        description: "Tap an option to launch the action sheet immediately",
        hasIcons: false,
        children: closure_7(selectedType(5993).TableRow, {
          label: tmp7.label,
          subLabel: tmp7.description,
          arrow: true,
          onPress: T,
        }),
      };
      items[1] = closure_7(selectedType(6074).TableRowGroup, obj4);
      obj3.children = items;
      obj2.children = closure_8(selectedType(5995).Card, obj3);
      const obj = selectedType(576);
      const obj5 = { label: tmp7.label, subLabel: tmp7.description, arrow: true, onPress: T };
      cResult[5] = T;
      cResult[6] = tmp7.description;
      cResult[7] = tmp7.label;
      cResult[8] = closure_7(selectedType(5593).Stack, obj2);
      const tmp13 = closure_7(selectedType(5593).Stack, obj2);
    }
  : () => {
      const tmp = closure_9();
      [selectedType, onSelect] = noop.useState("blocked-domain");
      const found = items.find((type) => type.type === first);
      items = [selectedType];
      const obj = { style: tmp.wrap, contentContainerStyle: tmp.contentContainer, children: null };
      const callback = noop.useCallback(() => {
        ActionSheetActionCreatorsDefault.openLazy(Promise.resolve({ default: closure_11 }), "action-sheet-selector", {
          selectedType,
          onSelect,
        });
      }, items);
      const obj2 = { spacing: 16, children: null };
      const obj3 = { children: null };
      const items1 = [closure_7(selectedType(4886).Text, { variant: "heading-lg/medium", children: "Action Sheets" })];
      const obj4 = {
        description: "Tap an option to launch the action sheet immediately",
        hasIcons: false,
        children: closure_7(selectedType(5993).TableRow, {
          label: found.label,
          subLabel: found.description,
          arrow: true,
          onPress: callback,
        }),
      };
      items1[1] = closure_7(selectedType(6074).TableRowGroup, obj4);
      obj3.children = items1;
      obj2.children = closure_8(selectedType(5995).Card, obj3);
      obj.children = closure_7(selectedType(5593).Stack, obj2);
      return closure_7(closure_6, obj);
    };
