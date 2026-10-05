// discord_app/modules/parent_tools/native/FamilyCenterDataConfirmation.tsx
import react2 from "../../../../_runtime/00576_react.js";
import intl37 from "../../../intl/index.native.tsx";
import _modDef2493 from "../FamilyCenter.messages.js";
import UserPlusIcon from "../../../design/components/Icon/native/redesign/generated/UserPlusIcon.tsx";
import ClockIcon from "../../../design/components/Icon/native/redesign/generated/ClockIcon.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import ForumIcon from "../../../design/components/Icon/native/redesign/generated/ForumIcon.tsx";
import TableRow2 from "../../../design/components/TableRow/native/TableRow.native.tsx";
import XSmallIcon from "../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import TableRowGroup2 from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import SettingsIcon from "../../../design/components/Icon/native/redesign/generated/SettingsIcon.tsx";
import CreditCardIcon from "../../../design/components/Icon/native/redesign/generated/CreditCardIcon.tsx";
import FlagIcon from "../../../design/components/Icon/native/redesign/generated/FlagIcon.tsx";
import ServerIcon from "../../../design/components/Icon/native/redesign/generated/ServerIcon.tsx";
import GiftIcon from "../../../design/components/Icon/native/redesign/generated/GiftIcon.tsx";
import useAgeSpecificText12 from "../hooks/useAgeSpecificText.tsx";
import PhoneIcon from "../../../design/components/Icon/native/redesign/generated/PhoneIcon.tsx";
import PiggyBankIcon from "../../../design/components/Icon/native/redesign/generated/PiggyBankIcon.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let items;
      let rows;
      let title;
      let tmp11;
      let tmp4;
      let tmp7;
      let obj = react2;
      const cResult = obj.c(10);
      ({ title, rows } = arg0);
      if (cResult[0] !== title) {
        const obj2 = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-muted", children: title };
        const tmp6 = _false(Text_Text.Text, obj2);
        cResult[0] = title;
        cResult[1] = tmp6;
        tmp4 = tmp6;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] !== rows) {
        let tmp9;
        const _Symbol = Symbol;
        let str = "react.memo_cache_sentinel";
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function l(header) {
            let Icon;
            let IconComponent;
            let description;
            let negative;
            let str;
            header = header.header;
            ({ description, IconComponent, negative } = header);
            const obj = {
              label: header,
              subLabel: description,
              icon: closure_1_3(Icon, { variant: str, IconComponent }),
            };
            const TableRow = TableRow2.TableRow;
            str = "default";
            Icon = TableRow2.TableRow.Icon;
            if (true === negative) {
              str = "text-status-dnd";
            }
            return closure_1_3(TableRow, obj, header);
          };
          cResult[4] = fn;
          tmp9 = fn;
        } else {
          tmp9 = cResult[4];
        }
        const mapped = rows.map(tmp9);
        cResult[2] = rows;
        cResult[3] = mapped;
        tmp7 = mapped;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[5] !== tmp7) {
        const obj3 = { hasIcons: true, children: tmp7 };
        const tmp13 = _false(TableRowGroup2.TableRowGroup, obj3);
        cResult[5] = tmp7;
        cResult[6] = tmp13;
        tmp11 = tmp13;
      } else {
        tmp11 = cResult[6];
      }
      if (cResult[7] === tmp4) {
        let tmp14;
        if (cResult[8] === tmp11) {
          tmp14 = cResult[9];
        }
        return tmp14;
      }
      const obj4 = { spacing: 8, children: items };
      items = [tmp4, tmp11];
      const tmp15 = React3(Stack_Stack.Stack, obj4);
      cResult[7] = tmp4;
      cResult[8] = tmp11;
      cResult[9] = tmp15;
      tmp14 = tmp15;
    }
  : (rows) => {
      let items;
      rows = rows.rows;
      const title = rows.title;
      let obj = { spacing: 8, children: items };
      const Stack = Stack_Stack.Stack;
      items = [
        _false(Text_Text.Text, {
          accessibilityRole: "header",
          variant: "text-sm/semibold",
          color: "text-muted",
          children: title,
        }),
      ];
      const obj2 = {
        hasIcons: true,
        children: rows.map((header) => {
          let Icon;
          let IconComponent;
          let description;
          let negative;
          let str;
          header = header.header;
          ({ description, IconComponent, negative } = header);
          const obj = {
            label: header,
            subLabel: description,
            icon: closure_1_3(Icon, { variant: str, IconComponent }),
          };
          const TableRow = TableRow2.TableRow;
          str = "default";
          Icon = TableRow2.TableRow.Icon;
          if (true === negative) {
            str = "text-status-dnd";
          }
          return closure_1_3(TableRow, obj, header);
        }),
      };
      const TableRowGroup = TableRowGroup2.TableRowGroup;
      items[1] = _false(TableRowGroup, obj2);
      return React3(Stack, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let intl28;
      let intl29;
      let intl30;
      let intl31;
      let items;
      let tmp10;
      let tmp13;
      let tmp14;
      let tmp19;
      let tmp20;
      let tmp25;
      let tmp26;
      let tmp31;
      let tmp32;
      let tmp37;
      let tmp38;
      let tmp43;
      let tmp44;
      let tmp49;
      let tmp50;
      let tmp55;
      let tmp56;
      let tmp61;
      let tmp62;
      let tmp67;
      let tmp68;
      let tmp7;
      let tmp73;
      let tmp74;
      let tmp79;
      let tmp82;
      let tmp83;
      let tmp86;
      let tmp87;
      let tmp88;
      let tmp89;
      let tmp92;
      let tmp93;
      let tmp96;
      const obj = react2;
      const cResult = obj.c(74);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl37.intl;
        const stringResult = intl.string(_modDef2493.CI1Env);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = intl37.intl;
        const stringResult1 = intl2.string(_modDef2493["ksze+o"]);
        cResult[1] = stringResult1;
        tmp7 = stringResult1;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = intl37.intl;
        const stringResult2 = intl3.string(_modDef2493["n73g+V"]);
        cResult[2] = stringResult2;
        tmp10 = stringResult2;
      } else {
        tmp10 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl4 = intl37.intl;
        const stringResult3 = intl4.string(_modDef2493["5x3taM"]);
        const intl5 = intl37.intl;
        const stringResult4 = intl5.string(_modDef2493.WZwGFX);
        cResult[3] = stringResult3;
        cResult[4] = stringResult4;
        tmp14 = stringResult4;
        tmp13 = stringResult3;
      } else {
        tmp13 = cResult[3];
        tmp14 = cResult[4];
      }
      const tmpResult = useAgeSpecificText12;
      const ageSpecificText = tmpResult.useAgeSpecificText(tmp13, tmp14);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl6 = intl37.intl;
        const stringResult5 = intl6.string(_modDef2493.FcKkcr);
        const intl7 = intl37.intl;
        const stringResult6 = intl7.string(_modDef2493.PQtDFk);
        cResult[5] = stringResult5;
        cResult[6] = stringResult6;
        tmp20 = stringResult6;
        tmp19 = stringResult5;
      } else {
        tmp19 = cResult[5];
        tmp20 = cResult[6];
      }
      const tmpResult11 = useAgeSpecificText12;
      const ageSpecificText1 = tmpResult11.useAgeSpecificText(tmp19, tmp20);
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const intl8 = intl37.intl;
        const stringResult7 = intl8.string(_modDef2493["dES/2r"]);
        const intl9 = intl37.intl;
        const stringResult8 = intl9.string(_modDef2493.ep6mdN);
        cResult[7] = stringResult7;
        cResult[8] = stringResult8;
        tmp26 = stringResult8;
        tmp25 = stringResult7;
      } else {
        tmp25 = cResult[7];
        tmp26 = cResult[8];
      }
      const tmpResult12 = useAgeSpecificText12;
      const ageSpecificText2 = tmpResult12.useAgeSpecificText(tmp25, tmp26);
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const intl10 = intl37.intl;
        const stringResult9 = intl10.string(_modDef2493.GWPcQg);
        const intl11 = intl37.intl;
        const stringResult10 = intl11.string(_modDef2493.yFnKIg);
        cResult[9] = stringResult10;
        cResult[10] = stringResult9;
        tmp32 = stringResult9;
        tmp31 = stringResult10;
      } else {
        tmp31 = cResult[9];
        tmp32 = cResult[10];
      }
      const tmpResult13 = useAgeSpecificText12;
      const ageSpecificText3 = tmpResult13.useAgeSpecificText(tmp32, tmp31);
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const intl12 = intl37.intl;
        const stringResult11 = intl12.string(_modDef2493["30+sih"]);
        const intl13 = intl37.intl;
        const stringResult12 = intl13.string(_modDef2493["0cuLn1"]);
        cResult[11] = stringResult11;
        cResult[12] = stringResult12;
        tmp38 = stringResult12;
        tmp37 = stringResult11;
      } else {
        tmp37 = cResult[11];
        tmp38 = cResult[12];
      }
      const tmpResult14 = useAgeSpecificText12;
      const ageSpecificText4 = tmpResult14.useAgeSpecificText(tmp37, tmp38);
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        const intl14 = intl37.intl;
        const stringResult13 = intl14.string(_modDef2493.tHTyRh);
        const intl15 = intl37.intl;
        const stringResult14 = intl15.string(_modDef2493.TeNlMb);
        cResult[13] = stringResult13;
        cResult[14] = stringResult14;
        tmp44 = stringResult14;
        tmp43 = stringResult13;
      } else {
        tmp43 = cResult[13];
        tmp44 = cResult[14];
      }
      const tmpResult15 = useAgeSpecificText12;
      const ageSpecificText5 = tmpResult15.useAgeSpecificText(tmp43, tmp44);
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        const intl16 = intl37.intl;
        const stringResult15 = intl16.string(_modDef2493.PfveQ6);
        const intl17 = intl37.intl;
        const stringResult16 = intl17.string(_modDef2493["f7ofm/"]);
        cResult[15] = stringResult15;
        cResult[16] = stringResult16;
        tmp50 = stringResult16;
        tmp49 = stringResult15;
      } else {
        tmp49 = cResult[15];
        tmp50 = cResult[16];
      }
      const tmpResult16 = useAgeSpecificText12;
      const ageSpecificText6 = tmpResult16.useAgeSpecificText(tmp49, tmp50);
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        const intl18 = intl37.intl;
        const stringResult17 = intl18.string(_modDef2493.MKeCj3);
        const intl19 = intl37.intl;
        const stringResult18 = intl19.string(_modDef2493.HdcGGl);
        cResult[17] = stringResult17;
        cResult[18] = stringResult18;
        tmp56 = stringResult18;
        tmp55 = stringResult17;
      } else {
        tmp55 = cResult[17];
        tmp56 = cResult[18];
      }
      const tmpResult17 = useAgeSpecificText12;
      const ageSpecificText7 = tmpResult17.useAgeSpecificText(tmp55, tmp56);
      if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
        const intl20 = intl37.intl;
        const stringResult19 = intl20.string(_modDef2493.wZejZr);
        const intl21 = intl37.intl;
        const stringResult20 = intl21.string(_modDef2493.tdgcf1);
        cResult[19] = stringResult19;
        cResult[20] = stringResult20;
        tmp62 = stringResult20;
        tmp61 = stringResult19;
      } else {
        tmp61 = cResult[19];
        tmp62 = cResult[20];
      }
      const tmpResult18 = useAgeSpecificText12;
      const ageSpecificText8 = tmpResult18.useAgeSpecificText(tmp61, tmp62);
      if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
        const intl22 = intl37.intl;
        const stringResult21 = intl22.string(_modDef2493.ASf7XN);
        const intl23 = intl37.intl;
        const stringResult22 = intl23.string(_modDef2493["82y87X"]);
        cResult[21] = stringResult21;
        cResult[22] = stringResult22;
        tmp68 = stringResult22;
        tmp67 = stringResult21;
      } else {
        tmp67 = cResult[21];
        tmp68 = cResult[22];
      }
      const tmpResult19 = useAgeSpecificText12;
      const ageSpecificText9 = tmpResult19.useAgeSpecificText(tmp67, tmp68);
      if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
        const intl24 = intl37.intl;
        const stringResult23 = intl24.string(_modDef2493["0QDVFN"]);
        const intl25 = intl37.intl;
        const stringResult24 = intl25.string(_modDef2493["1xBHHV"]);
        cResult[23] = stringResult23;
        cResult[24] = stringResult24;
        tmp74 = stringResult24;
        tmp73 = stringResult23;
      } else {
        tmp73 = cResult[23];
        tmp74 = cResult[24];
      }
      const tmpResult20 = useAgeSpecificText12;
      const ageSpecificText10 = tmpResult20.useAgeSpecificText(tmp73, tmp74);
      if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
        const intl26 = intl37.intl;
        const stringResult25 = intl26.string(_modDef2493["/zMYZX"]);
        cResult[25] = stringResult25;
        tmp79 = stringResult25;
      } else {
        tmp79 = cResult[25];
      }
      if (cResult[26] !== ageSpecificText) {
        const obj2 = { header: tmp79, description: ageSpecificText, IconComponent: UserPlusIcon.UserPlusIcon };
        cResult[26] = ageSpecificText;
        cResult[27] = obj2;
        tmp82 = obj2;
      } else {
        tmp82 = cResult[27];
      }
      if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
        const intl27 = intl37.intl;
        const stringResult26 = intl27.string(_modDef2493["44NEx6"]);
        cResult[28] = stringResult26;
        tmp83 = stringResult26;
      } else {
        tmp83 = cResult[28];
      }
      if (cResult[29] !== ageSpecificText1) {
        const obj3 = { header: tmp83, description: ageSpecificText1, IconComponent: ServerIcon.ServerIcon };
        cResult[29] = ageSpecificText1;
        cResult[30] = obj3;
        tmp86 = obj3;
      } else {
        tmp86 = cResult[30];
      }
      if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = {
          header: intl28.string(_modDef2493["Z3G+8h"]),
          description: intl29.string(_modDef2493.KBgArX),
          IconComponent: ForumIcon.ForumIcon,
        };
        intl28 = intl37.intl;
        intl29 = intl37.intl;
        const obj5 = {
          header: intl30.string(_modDef2493.GNs2ZH),
          description: intl31.string(_modDef2493.Ief2xc),
          IconComponent: PhoneIcon.PhoneIcon,
        };
        intl30 = intl37.intl;
        intl31 = intl37.intl;
        const intl32 = intl37.intl;
        const stringResult27 = intl32.string(_modDef2493.PjM3r5);
        cResult[31] = obj4;
        cResult[32] = obj5;
        cResult[33] = stringResult27;
        tmp89 = stringResult27;
        tmp88 = obj5;
        tmp87 = obj4;
      } else {
        tmp87 = cResult[31];
        tmp88 = cResult[32];
        tmp89 = cResult[33];
      }
      if (cResult[34] !== ageSpecificText2) {
        const obj6 = { header: tmp89, description: ageSpecificText2, IconComponent: CreditCardIcon.CreditCardIcon };
        cResult[34] = ageSpecificText2;
        cResult[35] = obj6;
        tmp92 = obj6;
      } else {
        tmp92 = cResult[35];
      }
      if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
        const intl33 = intl37.intl;
        const stringResult28 = intl33.string(_modDef2493.Fv3n8L);
        cResult[36] = stringResult28;
        tmp93 = stringResult28;
      } else {
        tmp93 = cResult[36];
      }
      if (cResult[37] !== ageSpecificText3) {
        const obj7 = { header: tmp93, description: ageSpecificText3, IconComponent: GiftIcon.GiftIcon };
        cResult[37] = ageSpecificText3;
        cResult[38] = obj7;
        tmp96 = obj7;
      } else {
        tmp96 = cResult[38];
      }
      if (cResult[39] === ageSpecificText5) {
        let tmp97;
        if (cResult[40] === ageSpecificText4) {
          tmp97 = cResult[41];
        }
        if (cResult[42] === tmp82) {
          if (cResult[43] === tmp86) {
            if (cResult[44] === tmp92) {
              if (cResult[45] === tmp96) {
                let tmp98;
                let tmp99;
                let tmp102;
                let tmp103;
                let tmp106;
                let tmp107;
                let tmp110;
                if (cResult[46] === tmp97) {
                  tmp98 = cResult[47];
                }
                const _Symbol = Symbol;
                if (cResult[48] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl34 = intl37.intl;
                  const stringResult29 = intl34.string(_modDef2493.kyT6pZ);
                  cResult[48] = stringResult29;
                  tmp99 = stringResult29;
                } else {
                  tmp99 = cResult[48];
                }
                if (cResult[49] !== ageSpecificText6) {
                  const obj8 = { header: tmp99, description: ageSpecificText6, IconComponent: ClockIcon.ClockIcon };
                  cResult[49] = ageSpecificText6;
                  cResult[50] = obj8;
                  tmp102 = obj8;
                } else {
                  tmp102 = cResult[50];
                }
                const _Symbol2 = Symbol;
                if (cResult[51] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl35 = intl37.intl;
                  const stringResult30 = intl35.string(_modDef2493["52ld7c"]);
                  cResult[51] = stringResult30;
                  tmp103 = stringResult30;
                } else {
                  tmp103 = cResult[51];
                }
                if (cResult[52] !== ageSpecificText7) {
                  const obj9 = {
                    header: tmp103,
                    description: ageSpecificText7,
                    IconComponent: PiggyBankIcon.PiggyBankIcon,
                  };
                  cResult[52] = ageSpecificText7;
                  cResult[53] = obj9;
                  tmp106 = obj9;
                } else {
                  tmp106 = cResult[53];
                }
                const _Symbol3 = Symbol;
                if (cResult[54] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl36 = intl37.intl;
                  const stringResult31 = intl36.string(_modDef2493.UCuHM8);
                  cResult[54] = stringResult31;
                  tmp107 = stringResult31;
                } else {
                  tmp107 = cResult[54];
                }
                if (cResult[55] !== ageSpecificText8) {
                  const obj10 = {
                    header: tmp107,
                    description: ageSpecificText8,
                    IconComponent: SettingsIcon.SettingsIcon,
                  };
                  cResult[55] = ageSpecificText8;
                  cResult[56] = obj10;
                  tmp110 = obj10;
                } else {
                  tmp110 = cResult[56];
                }
                if (cResult[57] === tmp102) {
                  if (cResult[58] === tmp106) {
                    let tmp111;
                    if (cResult[59] === tmp110) {
                      tmp111 = cResult[60];
                    }
                    if (cResult[61] === ageSpecificText10) {
                      let tmp112;
                      let tmp113;
                      let tmp117;
                      let tmp121;
                      if (cResult[62] === ageSpecificText9) {
                        tmp112 = cResult[63];
                      }
                      if (cResult[64] !== tmp98) {
                        const obj11 = { title: first, rows: tmp98 };
                        const tmp116 = _false(closure_5, obj11);
                        cResult[64] = tmp98;
                        cResult[65] = tmp116;
                        tmp113 = tmp116;
                      } else {
                        tmp113 = cResult[65];
                      }
                      if (cResult[66] !== tmp111) {
                        const obj12 = { title: tmp7, rows: tmp111 };
                        const tmp120 = _false(closure_5, obj12);
                        cResult[66] = tmp111;
                        cResult[67] = tmp120;
                        tmp117 = tmp120;
                      } else {
                        tmp117 = cResult[67];
                      }
                      if (cResult[68] !== tmp112) {
                        const obj13 = { title: tmp10, rows: tmp112 };
                        const tmp124 = _false(closure_5, obj13);
                        cResult[68] = tmp112;
                        cResult[69] = tmp124;
                        tmp121 = tmp124;
                      } else {
                        tmp121 = cResult[69];
                      }
                      if (cResult[70] === tmp113) {
                        if (cResult[71] === tmp117) {
                          let tmp125;
                          if (cResult[72] === tmp121) {
                            tmp125 = cResult[73];
                          }
                          return tmp125;
                        }
                      }
                      const obj14 = { spacing: 24, children: items };
                      items = [tmp113, tmp117, tmp121];
                      const tmp127 = React3(Stack_Stack.Stack, obj14);
                      cResult[70] = tmp113;
                      cResult[71] = tmp117;
                      cResult[72] = tmp121;
                      cResult[73] = tmp127;
                      tmp125 = tmp127;
                    }
                    const items1 = [
                      {
                        header: ageSpecificText9,
                        description: ageSpecificText10,
                        IconComponent: XSmallIcon.XSmallIcon,
                        negative: true,
                      },
                    ];
                    cResult[61] = ageSpecificText10;
                    cResult[62] = ageSpecificText9;
                    cResult[63] = items1;
                    tmp112 = items1;
                    const obj15 = {
                      header: ageSpecificText9,
                      description: ageSpecificText10,
                      IconComponent: XSmallIcon.XSmallIcon,
                      negative: true,
                    };
                  }
                }
                const items2 = [tmp102, tmp106, tmp110];
                cResult[57] = tmp102;
                cResult[58] = tmp106;
                cResult[59] = tmp110;
                cResult[60] = items2;
                tmp111 = items2;
              }
            }
          }
        }
        const items3 = [tmp82, tmp86, tmp87, tmp88, tmp92, tmp96, tmp97];
        cResult[42] = tmp82;
        cResult[43] = tmp86;
        cResult[44] = tmp92;
        cResult[45] = tmp96;
        cResult[46] = tmp97;
        cResult[47] = items3;
        tmp98 = items3;
      }
      const obj16 = { header: ageSpecificText4, description: ageSpecificText5, IconComponent: FlagIcon.FlagIcon };
      cResult[39] = ageSpecificText5;
      cResult[40] = ageSpecificText4;
      cResult[41] = obj16;
      tmp97 = obj16;
    }
  : () => {
      let intl26;
      let intl27;
      let intl28;
      let intl29;
      let intl30;
      let intl31;
      let intl32;
      let intl33;
      let intl34;
      let intl35;
      let intl36;
      let items2;
      let items3;
      const intl = intl37.intl;
      const stringResult = intl.string(_modDef2493.CI1Env);
      const intl2 = intl37.intl;
      const stringResult1 = intl2.string(_modDef2493["ksze+o"]);
      const intl3 = intl37.intl;
      const stringResult2 = intl3.string(_modDef2493["n73g+V"]);
      const useAgeSpecificText = useAgeSpecificText12.useAgeSpecificText;
      useAgeSpecificText12;
      const intl4 = intl37.intl;
      const stringResult3 = intl4.string(_modDef2493["5x3taM"]);
      const intl5 = intl37.intl;
      const ageSpecificText = useAgeSpecificText(stringResult3, intl5.string(_modDef2493.WZwGFX));
      const useAgeSpecificText2 = useAgeSpecificText12.useAgeSpecificText;
      useAgeSpecificText12;
      const intl6 = intl37.intl;
      const stringResult4 = intl6.string(_modDef2493.FcKkcr);
      const intl7 = intl37.intl;
      const ageSpecificText2 = useAgeSpecificText2(stringResult4, intl7.string(_modDef2493.PQtDFk));
      const useAgeSpecificText3 = useAgeSpecificText12.useAgeSpecificText;
      useAgeSpecificText12;
      const intl8 = intl37.intl;
      const stringResult5 = intl8.string(_modDef2493["dES/2r"]);
      const intl9 = intl37.intl;
      const ageSpecificText3 = useAgeSpecificText3(stringResult5, intl9.string(_modDef2493.ep6mdN));
      const useAgeSpecificText4 = useAgeSpecificText12.useAgeSpecificText;
      useAgeSpecificText12;
      const intl10 = intl37.intl;
      const stringResult6 = intl10.string(_modDef2493.GWPcQg);
      const intl11 = intl37.intl;
      const ageSpecificText4 = useAgeSpecificText4(stringResult6, intl11.string(_modDef2493.yFnKIg));
      const useAgeSpecificText5 = useAgeSpecificText12.useAgeSpecificText;
      useAgeSpecificText12;
      const intl12 = intl37.intl;
      const stringResult7 = intl12.string(_modDef2493["30+sih"]);
      const intl13 = intl37.intl;
      const ageSpecificText5 = useAgeSpecificText5(stringResult7, intl13.string(_modDef2493["0cuLn1"]));
      const useAgeSpecificText6 = useAgeSpecificText12.useAgeSpecificText;
      useAgeSpecificText12;
      const intl14 = intl37.intl;
      const stringResult8 = intl14.string(_modDef2493.tHTyRh);
      const intl15 = intl37.intl;
      const ageSpecificText6 = useAgeSpecificText6(stringResult8, intl15.string(_modDef2493.TeNlMb));
      const useAgeSpecificText7 = useAgeSpecificText12.useAgeSpecificText;
      useAgeSpecificText12;
      const intl16 = intl37.intl;
      const stringResult9 = intl16.string(_modDef2493.PfveQ6);
      const intl17 = intl37.intl;
      const ageSpecificText7 = useAgeSpecificText7(stringResult9, intl17.string(_modDef2493["f7ofm/"]));
      const useAgeSpecificText8 = useAgeSpecificText12.useAgeSpecificText;
      useAgeSpecificText12;
      const intl18 = intl37.intl;
      const stringResult10 = intl18.string(_modDef2493.MKeCj3);
      const intl19 = intl37.intl;
      const ageSpecificText8 = useAgeSpecificText8(stringResult10, intl19.string(_modDef2493.HdcGGl));
      const useAgeSpecificText9 = useAgeSpecificText12.useAgeSpecificText;
      useAgeSpecificText12;
      const intl20 = intl37.intl;
      const stringResult11 = intl20.string(_modDef2493.wZejZr);
      const intl21 = intl37.intl;
      const ageSpecificText9 = useAgeSpecificText9(stringResult11, intl21.string(_modDef2493.tdgcf1));
      const useAgeSpecificText10 = useAgeSpecificText12.useAgeSpecificText;
      useAgeSpecificText12;
      const intl22 = intl37.intl;
      const stringResult12 = intl22.string(_modDef2493.ASf7XN);
      const intl23 = intl37.intl;
      const ageSpecificText10 = useAgeSpecificText10(stringResult12, intl23.string(_modDef2493["82y87X"]));
      const useAgeSpecificText11 = useAgeSpecificText12.useAgeSpecificText;
      useAgeSpecificText12;
      const intl24 = intl37.intl;
      const stringResult13 = intl24.string(_modDef2493["0QDVFN"]);
      const intl25 = intl37.intl;
      const obj = {
        header: intl26.string(_modDef2493["/zMYZX"]),
        description: ageSpecificText,
        IconComponent: UserPlusIcon.UserPlusIcon,
      };
      const ageSpecificText11 = useAgeSpecificText11(stringResult13, intl25.string(_modDef2493["1xBHHV"]));
      intl26 = intl37.intl;
      const items = [obj, , , , , ,];
      const obj2 = {
        header: intl27.string(_modDef2493["44NEx6"]),
        description: ageSpecificText2,
        IconComponent: ServerIcon.ServerIcon,
      };
      intl27 = intl37.intl;
      items[1] = obj2;
      const obj3 = {
        header: intl28.string(_modDef2493["Z3G+8h"]),
        description: intl29.string(_modDef2493.KBgArX),
        IconComponent: ForumIcon.ForumIcon,
      };
      intl28 = intl37.intl;
      intl29 = intl37.intl;
      items[2] = obj3;
      const obj4 = {
        header: intl30.string(_modDef2493.GNs2ZH),
        description: intl31.string(_modDef2493.Ief2xc),
        IconComponent: PhoneIcon.PhoneIcon,
      };
      intl30 = intl37.intl;
      intl31 = intl37.intl;
      items[3] = obj4;
      const obj5 = {
        header: intl32.string(_modDef2493.PjM3r5),
        description: ageSpecificText3,
        IconComponent: CreditCardIcon.CreditCardIcon,
      };
      intl32 = intl37.intl;
      items[4] = obj5;
      const obj6 = {
        header: intl33.string(_modDef2493.Fv3n8L),
        description: ageSpecificText4,
        IconComponent: GiftIcon.GiftIcon,
      };
      intl33 = intl37.intl;
      items[5] = obj6;
      items[6] = { header: ageSpecificText5, description: ageSpecificText6, IconComponent: FlagIcon.FlagIcon };
      const obj8 = {
        header: intl34.string(_modDef2493.kyT6pZ),
        description: ageSpecificText7,
        IconComponent: ClockIcon.ClockIcon,
      };
      ({ header: ageSpecificText5, description: ageSpecificText6, IconComponent: FlagIcon.FlagIcon });
      intl34 = intl37.intl;
      const items1 = [obj8, ,];
      const obj9 = {
        header: intl35.string(_modDef2493["52ld7c"]),
        description: ageSpecificText8,
        IconComponent: PiggyBankIcon.PiggyBankIcon,
      };
      intl35 = intl37.intl;
      items1[1] = obj9;
      const obj10 = {
        header: intl36.string(_modDef2493.UCuHM8),
        description: ageSpecificText9,
        IconComponent: SettingsIcon.SettingsIcon,
      };
      intl36 = intl37.intl;
      items1[2] = obj10;
      const obj11 = { spacing: 24, children: items2 };
      const Stack = Stack_Stack.Stack;
      items2 = [
        _false(closure_5, { title: stringResult, rows: items }),
        _false(closure_5, { title: stringResult1, rows: items1 }),
      ];
      const obj12 = { title: stringResult2, rows: items3 };
      items3 = [
        {
          header: ageSpecificText10,
          description: ageSpecificText11,
          IconComponent: XSmallIcon.XSmallIcon,
          negative: true,
        },
      ];
      ({
        header: ageSpecificText10,
        description: ageSpecificText11,
        IconComponent: XSmallIcon.XSmallIcon,
        negative: true,
      });
      items2[2] = _false(closure_5, obj12);
      return React3(Stack, obj11);
    };
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterDataConfirmation.tsx");

export default tmp4;
