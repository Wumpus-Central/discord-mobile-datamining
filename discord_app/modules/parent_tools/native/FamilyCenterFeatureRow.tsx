// discord_app/modules/parent_tools/native/FamilyCenterFeatureRow.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef2493 from "../FamilyCenter.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import TableRow from "../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import EyeIcon from "../../../design/components/Icon/native/redesign/generated/EyeIcon.tsx";
import _modDef9522 from "../../../../_runtime/metro/09522__.js";
import useAgeSpecificText from "../hooks/useAgeSpecificText.tsx";
import _modDef12013 from "../../../../_runtime/metro/12013__.js";
import QrCodeIcon from "../../../design/components/Icon/native/redesign/generated/QrCodeIcon.tsx";
import _modDef14694 from "../../../../_runtime/metro/14694__.js";
import ChatCheckIcon from "../../../design/components/Icon/native/redesign/generated/ChatCheckIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4890);
let obj2 = { tableGroup: { marginTop: 20, marginBottom: nativeDefault.space.PX_24 } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { marginTop: 20, marginBottom: nativeDefault.space.PX_24 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterFeatureRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(25);
      const tmp4 = closure_6();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(_modDef2493.qITXhY);
        const intl2 = util.intl;
        const stringResult1 = intl2.string(_modDef2493.bmhCnL);
        cResult[0] = stringResult;
        cResult[1] = stringResult1;
        tmp5 = stringResult;
        tmp6 = stringResult1;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const ageSpecificText = useAgeSpecificText.useAgeSpecificText(tmp5, tmp6);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = util.intl;
        const stringResult2 = intl3.string(_modDef2493.t7SkFy);
        const intl4 = util.intl;
        const stringResult3 = intl4.string(_modDef2493["68zfxD"]);
        cResult[2] = stringResult2;
        cResult[3] = stringResult3;
        let tmp12 = stringResult3;
        let tmp11 = stringResult2;
      } else {
        tmp11 = cResult[2];
        tmp12 = cResult[3];
      }
      const tmpResult = useAgeSpecificText;
      const ageSpecificText1 = useAgeSpecificText.useAgeSpecificText(tmp11, tmp12);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl5 = util.intl;
        const stringResult4 = intl5.string(_modDef2493["+pi4Yt"]);
        const intl6 = util.intl;
        const stringResult5 = intl6.string(_modDef2493["1xPTwE"]);
        cResult[4] = stringResult4;
        cResult[5] = stringResult5;
        let tmp18 = stringResult5;
        let tmp17 = stringResult4;
      } else {
        tmp17 = cResult[4];
        tmp18 = cResult[5];
      }
      const tmpResult3 = useAgeSpecificText;
      const ageSpecificText2 = useAgeSpecificText.useAgeSpecificText(tmp17, tmp18);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const intl7 = util.intl;
        const stringResult6 = intl7.string(_modDef2493["001l3m"]);
        cResult[6] = stringResult6;
        let tmp23 = stringResult6;
      } else {
        tmp23 = cResult[6];
      }
      if (cResult[7] !== ageSpecificText) {
        const obj2 = {
          icon: _modDef14694,
          IconComponent: ChatCheckIcon.ChatCheckIcon,
          header: tmp23,
          description: ageSpecificText,
        };
        cResult[7] = ageSpecificText;
        cResult[8] = obj2;
        let tmp26 = obj2;
      } else {
        tmp26 = cResult[8];
      }
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const intl8 = util.intl;
        const stringResult7 = intl8.string(_modDef2493.yipAeP);
        cResult[9] = stringResult7;
        let tmp28 = stringResult7;
      } else {
        tmp28 = cResult[9];
      }
      if (cResult[10] !== ageSpecificText1) {
        const obj3 = {
          icon: _modDef12013,
          IconComponent: EyeIcon.EyeIcon,
          header: tmp28,
          description: ageSpecificText1,
        };
        cResult[10] = ageSpecificText1;
        cResult[11] = obj3;
        let tmp31 = obj3;
      } else {
        tmp31 = cResult[11];
      }
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const intl9 = util.intl;
        const stringResult8 = intl9.string(_modDef2493.hhOuMe);
        cResult[12] = stringResult8;
        let tmp33 = stringResult8;
      } else {
        tmp33 = cResult[12];
      }
      if (cResult[13] !== ageSpecificText2) {
        const obj4 = {
          icon: _modDef9522,
          IconComponent: QrCodeIcon.QrCodeIcon,
          header: tmp33,
          description: ageSpecificText2,
        };
        cResult[13] = ageSpecificText2;
        cResult[14] = obj4;
        let tmp36 = obj4;
      } else {
        tmp36 = cResult[14];
      }
      if (cResult[15] === tmp36) {
        if (cResult[16] === tmp26) {
          if (cResult[17] === tmp31) {
            let arr = cResult[18];
          }
          const _Symbol = Symbol;
          if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
            const obj5 = {
              accessibilityRole: "header",
              variant: "text-sm/semibold",
              color: "text-muted",
              children: null,
            };
            const intl10 = util.intl;
            obj5.children = intl10.string(_modDef2493["6JkHSg"]);
            const tmp41 = React4(Text_Text.Text, obj5);
            cResult[19] = tmp41;
            let tmp38 = tmp41;
          } else {
            tmp38 = cResult[19];
          }
          if (cResult[20] !== arr) {
            const obj6 = { spacing: 8, children: null };
            const items = [tmp38];
            const obj7 = {
              hasIcons: true,
              children: arr.map((header) => {
                header = header.header;
                ({ description, icon, IconComponent } = header);
                return closure_1_4(
                  TableRow.TableRow,
                  {
                    label: header,
                    subLabel: description,
                    icon: closure_1_4(TableRow.TableRow.Icon, { source: icon, IconComponent }),
                  },
                  header,
                );
              }),
            };
            items[1] = React4(TableRowGroup.TableRowGroup, obj7);
            obj6.children = items;
            const tmp45 = hasOwnProperty(Stack_Stack.Stack, obj6);
            cResult[20] = arr;
            cResult[21] = tmp45;
            let tmp42 = tmp45;
          } else {
            tmp42 = cResult[21];
          }
          if (cResult[22] === tmp4.tableGroup) {
            if (cResult[23] === tmp42) {
              let tmp46 = cResult[24];
            }
            return tmp46;
          }
          const obj8 = { style: tmp4.tableGroup, children: tmp42 };
          const tmp49 = React4(View, obj8);
          cResult[22] = tmp4.tableGroup;
          cResult[23] = tmp42;
          cResult[24] = tmp49;
          tmp46 = tmp49;
        }
      }
      const items1 = [tmp26, tmp31, tmp36];
      cResult[15] = tmp36;
      cResult[16] = tmp26;
      cResult[17] = tmp31;
      cResult[18] = items1;
      arr = items1;
      const tmpResult4 = useAgeSpecificText;
    }
  : () => {
      const tmp = closure_6();
      const intl = util.intl;
      const obj = useAgeSpecificText;
      const intl2 = util.intl;
      const ageSpecificText = obj.useAgeSpecificText(intl.string(_modDef2493.qITXhY), intl2.string(_modDef2493.bmhCnL));
      const stringResult = intl.string(_modDef2493.qITXhY);
      const intl3 = util.intl;
      const obj2 = useAgeSpecificText;
      const intl4 = util.intl;
      const ageSpecificText1 = obj2.useAgeSpecificText(
        intl3.string(_modDef2493.t7SkFy),
        intl4.string(_modDef2493["68zfxD"]),
      );
      const stringResult1 = intl3.string(_modDef2493.t7SkFy);
      const intl5 = util.intl;
      const obj3 = useAgeSpecificText;
      const intl6 = util.intl;
      const obj4 = { icon: null, IconComponent: null, header: null, description: null };
      const ageSpecificText2 = obj3.useAgeSpecificText(
        intl5.string(_modDef2493["+pi4Yt"]),
        intl6.string(_modDef2493["1xPTwE"]),
      );
      obj4.icon = _modDef14694;
      obj4.IconComponent = ChatCheckIcon.ChatCheckIcon;
      const intl7 = util.intl;
      obj4.header = intl7.string(_modDef2493["001l3m"]);
      obj4.description = ageSpecificText;
      const items = [obj4, ,];
      const obj5 = { icon: _modDef12013, IconComponent: EyeIcon.EyeIcon, header: null, description: null };
      const intl8 = util.intl;
      obj5.header = intl8.string(_modDef2493.yipAeP);
      obj5.description = ageSpecificText1;
      items[1] = obj5;
      const obj6 = { icon: _modDef9522, IconComponent: QrCodeIcon.QrCodeIcon, header: null, description: null };
      const intl9 = util.intl;
      obj6.header = intl9.string(_modDef2493.hhOuMe);
      obj6.description = ageSpecificText2;
      items[2] = obj6;
      const obj7 = { style: tmp.tableGroup, children: null };
      const obj8 = { spacing: 8, children: null };
      const obj9 = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-muted", children: null };
      const intl10 = util.intl;
      obj9.children = intl10.string(_modDef2493["6JkHSg"]);
      const items1 = [React4(Text_Text.Text, obj9)];
      const stringResult2 = intl5.string(_modDef2493["+pi4Yt"]);
      items1[1] = React4(TableRowGroup.TableRowGroup, {
        hasIcons: true,
        children: items.map((header) => {
          header = header.header;
          ({ description, icon, IconComponent } = header);
          return closure_1_4(
            TableRow.TableRow,
            {
              label: header,
              subLabel: description,
              icon: closure_1_4(TableRow.TableRow.Icon, { source: icon, IconComponent }),
            },
            header,
          );
        }),
      });
      obj8.children = items1;
      obj7.children = hasOwnProperty(Stack_Stack.Stack, obj8);
      return React4(View, obj7);
    };
