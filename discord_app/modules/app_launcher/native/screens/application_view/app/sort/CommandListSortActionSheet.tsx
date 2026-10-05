// discord_app/modules/app_launcher/native/screens/application_view/app/sort/CommandListSortActionSheet.tsx
import Fragment from "../../../../../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import intl4 from "../../../../../../../intl/index.native.tsx";
import TableRadioRow from "../../../../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import TableRadioGroup2 from "../../../../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import BottomSheetTitleHeader2 from "../../../../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import Sheet_BottomSheet from "../../../../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import AppLauncherConstants from "../../../../../AppLauncherConstants.tsx";
import ArrowsUpDownIcon2 from "../../../../../../../design/components/Icon/native/redesign/generated/ArrowsUpDownIcon.tsx";
import react from "../../../../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let BottomSheet, onClose;

const CommandListSortOrder = AppLauncherConstants.CommandListSortOrder;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onClose) => {
      let intl2;
      let intl3;
      let onSortOptionPress;
      let sortOrder;
      const obj = onClose(576);
      const cResult = obj.c(8);
      onClose = onClose.onClose;
      ({ sortOrder, onSortOptionPress } = onClose);
      if (cResult[0] === onClose) {
        let tmp4;
        let tmp6;
        if (cResult[1] === onSortOptionPress) {
          tmp4 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const BottomSheetTitleHeader = tmp(6644).BottomSheetTitleHeader;
          ({ size: "sm", color: onSortOptionPress(587).colors.TEXT_DEFAULT });
          const ArrowsUpDownIcon = tmp(11775).ArrowsUpDownIcon;
          const intl = tmp(1126).intl;
          const tmp9 = <BottomSheetTitleHeader leading={null} title={intl.string(onClose(1126).t.yeYaHf)} />;
          cResult[3] = tmp9;
          tmp6 = tmp9;
        } else {
          tmp6 = cResult[3];
        }
        const _Symbol2 = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { label: intl2.string(onClose(1126).t.SzxiqK), value: CommandListSortOrder.POPULAR };
          intl2 = tmp(1126).intl;
          const items = [obj4];
          const obj5 = { label: intl3.string(onClose(1126).t.m8xsti), value: CommandListSortOrder.ALPHABETICAL };
          intl3 = tmp(1126).intl;
          items[1] = obj5;
          const mapped = items.map((label) => {
            const value = label.value;
            return jsx(onClose(dependencyMap[9]).TableRadioRow, { label: label.label, value }, value);
          });
          cResult[4] = mapped;
        }
        if (cResult[5] === tmp4) {
          let tmp13;
          if (cResult[6] === sortOrder) {
            tmp13 = cResult[7];
          }
          return tmp13;
        }
        BottomSheet = tmp(6645).BottomSheet;
        const tmp15 = (
          <BottomSheet startExpanded header={tmp6}>
            {null}
          </BottomSheet>
        );
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
    }
  : (sortOrder) => {
      let intl;
      let intl2;
      let intl3;
      let items;
      ({ onClose: require, onSortOptionPress: importDefault } = sortOrder);
      sortOrder = sortOrder.sortOrder;
      BottomSheet = Sheet_BottomSheet.BottomSheet;
      ({ leading: null, title: intl.string(intl4.t.yeYaHf) });
      const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
      ({ size: "sm", color: nativeDefault.colors.TEXT_DEFAULT });
      const ArrowsUpDownIcon = ArrowsUpDownIcon2.ArrowsUpDownIcon;
      intl = intl4.intl;
      ({
        hasIcons: false,
        value: sortOrder,
        onChange(arg0) {
          importDefault(arg0);
          require();
        },
        children: items.map((label) => {
          const value = label.value;
          return jsx(TableRadioRow.TableRadioRow, { label: label.label, value }, value);
        }),
      });
      const obj5 = { label: intl2.string(intl4.t.SzxiqK), value: CommandListSortOrder.POPULAR };
      const TableRadioGroup = TableRadioGroup2.TableRadioGroup;
      intl2 = intl4.intl;
      items = [obj5];
      const obj6 = { label: intl3.string(intl4.t.m8xsti), value: CommandListSortOrder.ALPHABETICAL };
      intl3 = intl4.intl;
      items[1] = obj6;
      return (
        <BottomSheet startExpanded header={null}>
          {null}
        </BottomSheet>
      );
    };
const result = size.fileFinishedImporting(
  "modules/app_launcher/native/screens/application_view/app/sort/CommandListSortActionSheet.tsx",
);

export default tmp3;
