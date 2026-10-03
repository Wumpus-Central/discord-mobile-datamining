// discord_app/modules/app_launcher/native/screens/application_view/app/sort/CommandListSortActionSheet.tsx
import nativeDefault from "../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../../../intl/index.native.tsx";
import TableRadioRow from "../../../../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import TableRadioGroup from "../../../../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import BottomSheetTitleHeader from "../../../../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import Sheet_BottomSheet from "../../../../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import ArrowsUpDownIcon from "../../../../../../../design/components/Icon/native/redesign/generated/ArrowsUpDownIcon.tsx";
import noop from "../../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const CommandListSortOrder = fn(11759).CommandListSortOrder;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/app_launcher/native/screens/application_view/app/sort/CommandListSortActionSheet.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (onClose) => {
      const cResult = onClose(576).c(8);
      onClose = onClose.onClose;
      ({ sortOrder, onSortOptionPress } = onClose);
      if (cResult[0] === onClose) {
        if (cResult[1] === onSortOptionPress) {
          let tmp4 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { leading: null, title: null };
          const obj3 = { size: "sm", color: onSortOptionPress(587).colors.TEXT_DEFAULT };
          obj2.leading = jsx(tmp(11775).ArrowsUpDownIcon, {
            size: "sm",
            color: onSortOptionPress(587).colors.TEXT_DEFAULT,
          });
          const intl = tmp(1126).intl;
          obj2.title = intl.string(tmp(1126).t.yeYaHf);
          const tmp9 = jsx(tmp(6644).BottomSheetTitleHeader, { leading: null, title: null });
          cResult[3] = tmp9;
          let tmp6 = tmp9;
        } else {
          tmp6 = cResult[3];
        }
        const _Symbol2 = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { label: null, value: null };
          const intl2 = tmp(1126).intl;
          obj4.label = intl2.string(tmp(1126).t.SzxiqK);
          obj4.value = CommandListSortOrder.POPULAR;
          const items = [obj4];
          const obj5 = { label: null, value: null };
          const intl3 = tmp(1126).intl;
          obj5.label = intl3.string(tmp(1126).t.m8xsti);
          obj5.value = CommandListSortOrder.ALPHABETICAL;
          items[1] = obj5;
          const mapped = items.map((label) => {
            value = label.value;
            return jsx(onClose(dependencyMap[9]).TableRadioRow, { label: label.label, value }, value);
          });
          cResult[4] = mapped;
          let tmp10 = mapped;
        } else {
          tmp10 = cResult[4];
        }
        if (cResult[5] === tmp4) {
          if (cResult[6] === sortOrder) {
            let tmp13 = cResult[7];
          }
          return tmp13;
        }
        const obj6 = { startExpanded: true, header: tmp6, children: null };
        const obj7 = { hasIcons: false, value: sortOrder, onChange: tmp4, children: tmp10 };
        obj6.children = jsx(tmp(6072).TableRadioGroup, {
          hasIcons: false,
          value: sortOrder,
          onChange: tmp4,
          children: tmp10,
        });
        const tmp15 = jsx(tmp(6645).BottomSheet, { startExpanded: true, header: tmp6, children: null });
        cResult[5] = tmp4;
        cResult[6] = sortOrder;
        cResult[7] = tmp15;
        tmp13 = tmp15;
      }
      const fn = function n(dependencyMap) {
        onSortOptionPress(dependencyMap);
        onClose();
      };
      cResult[0] = onClose;
      cResult[1] = onSortOptionPress;
      cResult[2] = fn;
      tmp4 = fn;
      const obj = onClose(576);
    }
  : (sortOrder) => {
      ({ onClose: require, onSortOptionPress: importDefault } = sortOrder);
      const obj = { startExpanded: true, header: null, children: null };
      const obj2 = {
        leading: jsx(ArrowsUpDownIcon.ArrowsUpDownIcon, { size: "sm", color: nativeDefault.colors.TEXT_DEFAULT }),
        title: null,
      };
      const intl = util.intl;
      obj2.title = intl.string(util.t.yeYaHf);
      obj.header = jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, {
        leading: jsx(ArrowsUpDownIcon.ArrowsUpDownIcon, { size: "sm", color: nativeDefault.colors.TEXT_DEFAULT }),
        title: null,
      });
      const obj4 = {
        hasIcons: false,
        value: sortOrder.sortOrder,
        onChange(arg0) {
          importDefault(arg0);
          require();
        },
        children: null,
      };
      const obj5 = { label: null, value: null };
      const intl2 = util.intl;
      obj5.label = intl2.string(util.t.SzxiqK);
      obj5.value = CommandListSortOrder.POPULAR;
      const items = [obj5];
      const obj6 = { label: null, value: null };
      const intl3 = util.intl;
      obj6.label = intl3.string(util.t.m8xsti);
      obj6.value = CommandListSortOrder.ALPHABETICAL;
      items[1] = obj6;
      obj4.children = items.map((label) => {
        value = label.value;
        return jsx(TableRadioRow.TableRadioRow, { label: label.label, value }, value);
      });
      obj.children = jsx(TableRadioGroup.TableRadioGroup, {
        hasIcons: false,
        value: sortOrder.sortOrder,
        onChange(arg0) {
          importDefault(arg0);
          require();
        },
        children: null,
      });
      return jsx(Sheet_BottomSheet.BottomSheet, { startExpanded: true, header: null, children: null });
    };
