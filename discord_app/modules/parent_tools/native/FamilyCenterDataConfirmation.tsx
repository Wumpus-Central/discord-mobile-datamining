// discord_app/modules/parent_tools/native/FamilyCenterDataConfirmation.tsx
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import _modDef2565 from "../FamilyCenter.messages.js";
import UserPlusIcon from "../../../design/components/Icon/native/redesign/generated/UserPlusIcon.tsx";
import ClockIcon from "../../../design/components/Icon/native/redesign/generated/ClockIcon.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import TableRow from "../../../design/components/TableRow/native/TableRow.native.tsx";
import XSmallIcon from "../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import TableRowGroup from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import SettingsIcon from "../../../design/components/Icon/native/redesign/generated/SettingsIcon.tsx";
import CreditCardIcon from "../../../design/components/Icon/native/redesign/generated/CreditCardIcon.tsx";
import ForumIcon from "../../../design/components/Icon/native/redesign/generated/ForumIcon.tsx";
import ServerIcon from "../../../design/components/Icon/native/redesign/generated/ServerIcon.tsx";
import FlagIcon from "../../../design/components/Icon/native/redesign/generated/FlagIcon.tsx";
import useAgeSpecificText from "../hooks/useAgeSpecificText.tsx";
import PhoneIcon from "../../../design/components/Icon/native/redesign/generated/PhoneIcon.tsx";
import GiftIcon from "../../../design/components/Icon/native/redesign/generated/GiftIcon.tsx";
import PiggyBankIcon from "../../../design/components/Icon/native/redesign/generated/PiggyBankIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function RowGroup(arg0) {
      const cResult = c.c(10);
      ({ title, rows } = arg0);
      if (cResult[0] !== title) {
        const obj2 = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-muted", children: title };
        const tmp6 = React3(Text_Text.Text, obj2);
        cResult[0] = title;
        cResult[1] = tmp6;
        let tmp4 = tmp6;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] !== rows) {
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function l(header) {
            header = header.header;
            ({ description, IconComponent, negative } = header);
            const obj = { label: header, subLabel: description, icon: null };
            let str = "default";
            if (true === negative) {
              str = "text-status-dnd";
            }
            obj.icon = closure_1_3(TableRow.TableRow.Icon, { variant: str, IconComponent });
            return closure_1_3(TableRow.TableRow, obj, header);
          };
          cResult[4] = fn;
          let tmp9 = fn;
        } else {
          tmp9 = cResult[4];
        }
        const mapped = rows.map(tmp9);
        cResult[2] = rows;
        cResult[3] = mapped;
      } else {
        if (cResult[5] !== cResult[3]) {
          const obj3 = { hasIcons: true, children: tmp7 };
          const tmp14 = React3(TableRowGroup.TableRowGroup, obj3);
          cResult[5] = tmp7;
          cResult[6] = tmp14;
          let tmp12 = tmp14;
        } else {
          tmp12 = cResult[6];
        }
        if (cResult[7] === tmp4) {
          if (cResult[8] === tmp12) {
            let tmp15 = cResult[9];
          }
          return tmp15;
        }
        const obj4 = { spacing: 8, children: null };
        const items = [tmp4, tmp12];
        obj4.children = items;
        const tmp17 = React4(Stack_Stack.Stack, obj4);
        cResult[7] = tmp4;
        cResult[8] = tmp12;
        cResult[9] = tmp17;
        tmp15 = tmp17;
      }
    }
  : function RowGroup(children) {
      const rows = children.rows;
      let obj = { spacing: 8, children: null };
      const items = [
        React3(Text_Text.Text, {
          accessibilityRole: "header",
          variant: "text-sm/semibold",
          color: "text-muted",
          children: children.title,
        }),
        React3(TableRowGroup.TableRowGroup, {
          hasIcons: true,
          children: rows.map((header) => {
            header = header.header;
            ({ description, IconComponent, negative } = header);
            const obj = { label: header, subLabel: description, icon: null };
            let str = "default";
            if (true === negative) {
              str = "text-status-dnd";
            }
            obj.icon = closure_1_3(TableRow.TableRow.Icon, { variant: str, IconComponent });
            return closure_1_3(TableRow.TableRow, obj, header);
          }),
        }),
      ];
      obj.children = items;
      return React4(Stack_Stack.Stack, obj);
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterDataConfirmation.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function FamilyCenterDataConfirmation() {
      const cResult = c.c(74);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(_modDef2565.CI1Env);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = util.intl;
        const stringResult1 = intl2.string(_modDef2565["ksze+o"]);
        cResult[1] = stringResult1;
        let tmp7 = stringResult1;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = util.intl;
        const stringResult2 = intl3.string(_modDef2565["n73g+V"]);
        cResult[2] = stringResult2;
        let tmp10 = stringResult2;
      } else {
        tmp10 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl4 = util.intl;
        const stringResult3 = intl4.string(_modDef2565["5x3taM"]);
        const intl5 = util.intl;
        const stringResult4 = intl5.string(_modDef2565.WZwGFX);
        cResult[3] = stringResult3;
        cResult[4] = stringResult4;
        let tmp14 = stringResult4;
        let tmp13 = stringResult3;
      } else {
        tmp13 = cResult[3];
        tmp14 = cResult[4];
      }
      const ageSpecificText = useAgeSpecificText.useAgeSpecificText(tmp13, tmp14);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl6 = util.intl;
        const stringResult5 = intl6.string(_modDef2565.FcKkcr);
        const intl7 = util.intl;
        const stringResult6 = intl7.string(_modDef2565.PQtDFk);
        cResult[5] = stringResult5;
        cResult[6] = stringResult6;
        let tmp20 = stringResult6;
        let tmp19 = stringResult5;
      } else {
        tmp19 = cResult[5];
        tmp20 = cResult[6];
      }
      const tmpResult = useAgeSpecificText;
      const ageSpecificText1 = useAgeSpecificText.useAgeSpecificText(tmp19, tmp20);
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const intl8 = util.intl;
        const stringResult7 = intl8.string(_modDef2565["dES/2r"]);
        const intl9 = util.intl;
        const stringResult8 = intl9.string(_modDef2565.ep6mdN);
        cResult[7] = stringResult7;
        cResult[8] = stringResult8;
        let tmp26 = stringResult8;
        let tmp25 = stringResult7;
      } else {
        tmp25 = cResult[7];
        tmp26 = cResult[8];
      }
      const tmpResult11 = useAgeSpecificText;
      const ageSpecificText2 = useAgeSpecificText.useAgeSpecificText(tmp25, tmp26);
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const intl10 = util.intl;
        const stringResult9 = intl10.string(_modDef2565.GWPcQg);
        const intl11 = util.intl;
        const stringResult10 = intl11.string(_modDef2565.yFnKIg);
        cResult[9] = stringResult10;
        cResult[10] = stringResult9;
        let tmp32 = stringResult9;
        let tmp31 = stringResult10;
      } else {
        tmp31 = cResult[9];
        tmp32 = cResult[10];
      }
      const tmpResult12 = useAgeSpecificText;
      const ageSpecificText3 = useAgeSpecificText.useAgeSpecificText(tmp32, tmp31);
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const intl12 = util.intl;
        const stringResult11 = intl12.string(_modDef2565["30+sih"]);
        const intl13 = util.intl;
        const stringResult12 = intl13.string(_modDef2565["0cuLn1"]);
        cResult[11] = stringResult11;
        cResult[12] = stringResult12;
        let tmp38 = stringResult12;
        let tmp37 = stringResult11;
      } else {
        tmp37 = cResult[11];
        tmp38 = cResult[12];
      }
      const tmpResult13 = useAgeSpecificText;
      const ageSpecificText4 = useAgeSpecificText.useAgeSpecificText(tmp37, tmp38);
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        const intl14 = util.intl;
        const stringResult13 = intl14.string(_modDef2565.tHTyRh);
        const intl15 = util.intl;
        const stringResult14 = intl15.string(_modDef2565.TeNlMb);
        cResult[13] = stringResult13;
        cResult[14] = stringResult14;
        let tmp44 = stringResult14;
        let tmp43 = stringResult13;
      } else {
        tmp43 = cResult[13];
        tmp44 = cResult[14];
      }
      const tmpResult14 = useAgeSpecificText;
      const ageSpecificText5 = useAgeSpecificText.useAgeSpecificText(tmp43, tmp44);
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        const intl16 = util.intl;
        const stringResult15 = intl16.string(_modDef2565.PfveQ6);
        const intl17 = util.intl;
        const stringResult16 = intl17.string(_modDef2565["f7ofm/"]);
        cResult[15] = stringResult15;
        cResult[16] = stringResult16;
        let tmp50 = stringResult16;
        let tmp49 = stringResult15;
      } else {
        tmp49 = cResult[15];
        tmp50 = cResult[16];
      }
      const tmpResult15 = useAgeSpecificText;
      const ageSpecificText6 = useAgeSpecificText.useAgeSpecificText(tmp49, tmp50);
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        const intl18 = util.intl;
        const stringResult17 = intl18.string(_modDef2565.MKeCj3);
        const intl19 = util.intl;
        const stringResult18 = intl19.string(_modDef2565.HdcGGl);
        cResult[17] = stringResult17;
        cResult[18] = stringResult18;
        let tmp56 = stringResult18;
        let tmp55 = stringResult17;
      } else {
        tmp55 = cResult[17];
        tmp56 = cResult[18];
      }
      const tmpResult16 = useAgeSpecificText;
      const ageSpecificText7 = useAgeSpecificText.useAgeSpecificText(tmp55, tmp56);
      if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
        const intl20 = util.intl;
        const stringResult19 = intl20.string(_modDef2565.wZejZr);
        const intl21 = util.intl;
        const stringResult20 = intl21.string(_modDef2565.tdgcf1);
        cResult[19] = stringResult19;
        cResult[20] = stringResult20;
        let tmp62 = stringResult20;
        let tmp61 = stringResult19;
      } else {
        tmp61 = cResult[19];
        tmp62 = cResult[20];
      }
      const tmpResult17 = useAgeSpecificText;
      const ageSpecificText8 = useAgeSpecificText.useAgeSpecificText(tmp61, tmp62);
      if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
        const intl22 = util.intl;
        const stringResult21 = intl22.string(_modDef2565.ASf7XN);
        const intl23 = util.intl;
        const stringResult22 = intl23.string(_modDef2565["82y87X"]);
        cResult[21] = stringResult21;
        cResult[22] = stringResult22;
        let tmp68 = stringResult22;
        let tmp67 = stringResult21;
      } else {
        tmp67 = cResult[21];
        tmp68 = cResult[22];
      }
      const tmpResult18 = useAgeSpecificText;
      const ageSpecificText9 = useAgeSpecificText.useAgeSpecificText(tmp67, tmp68);
      if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
        const intl24 = util.intl;
        const stringResult23 = intl24.string(_modDef2565["0QDVFN"]);
        const intl25 = util.intl;
        const stringResult24 = intl25.string(_modDef2565["1xBHHV"]);
        cResult[23] = stringResult23;
        cResult[24] = stringResult24;
        let tmp74 = stringResult24;
        let tmp73 = stringResult23;
      } else {
        tmp73 = cResult[23];
        tmp74 = cResult[24];
      }
      const tmpResult19 = useAgeSpecificText;
      const ageSpecificText10 = useAgeSpecificText.useAgeSpecificText(tmp73, tmp74);
      if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
        const intl26 = util.intl;
        const stringResult25 = intl26.string(_modDef2565["/zMYZX"]);
        cResult[25] = stringResult25;
        let tmp79 = stringResult25;
      } else {
        tmp79 = cResult[25];
      }
      if (cResult[26] !== ageSpecificText) {
        const obj2 = { header: tmp79, description: ageSpecificText, IconComponent: UserPlusIcon.UserPlusIcon };
        cResult[26] = ageSpecificText;
        cResult[27] = obj2;
        let tmp82 = obj2;
      } else {
        tmp82 = cResult[27];
      }
      if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
        const intl27 = util.intl;
        const stringResult26 = intl27.string(_modDef2565["44NEx6"]);
        cResult[28] = stringResult26;
        let tmp83 = stringResult26;
      } else {
        tmp83 = cResult[28];
      }
      if (cResult[29] !== ageSpecificText1) {
        const obj3 = { header: tmp83, description: ageSpecificText1, IconComponent: ServerIcon.ServerIcon };
        cResult[29] = ageSpecificText1;
        cResult[30] = obj3;
        let tmp86 = obj3;
      } else {
        tmp86 = cResult[30];
      }
      if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { header: null, description: null, IconComponent: null };
        const intl28 = util.intl;
        obj4.header = intl28.string(_modDef2565["Z3G+8h"]);
        const intl29 = util.intl;
        obj4.description = intl29.string(_modDef2565.KBgArX);
        obj4.IconComponent = ForumIcon.ForumIcon;
        const obj5 = { header: null, description: null, IconComponent: null };
        const intl30 = util.intl;
        obj5.header = intl30.string(_modDef2565.GNs2ZH);
        const intl31 = util.intl;
        obj5.description = intl31.string(_modDef2565.Ief2xc);
        obj5.IconComponent = PhoneIcon.PhoneIcon;
        const intl32 = util.intl;
        const stringResult27 = intl32.string(_modDef2565.PjM3r5);
        cResult[31] = obj4;
        cResult[32] = obj5;
        cResult[33] = stringResult27;
        let tmp89 = stringResult27;
        let tmp88 = obj5;
        let tmp87 = obj4;
      } else {
        tmp87 = cResult[31];
        tmp88 = cResult[32];
        tmp89 = cResult[33];
      }
      if (cResult[34] !== ageSpecificText2) {
        const obj6 = { header: tmp89, description: ageSpecificText2, IconComponent: CreditCardIcon.CreditCardIcon };
        cResult[34] = ageSpecificText2;
        cResult[35] = obj6;
        let tmp92 = obj6;
      } else {
        tmp92 = cResult[35];
      }
      if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
        const intl33 = util.intl;
        const stringResult28 = intl33.string(_modDef2565.Fv3n8L);
        cResult[36] = stringResult28;
        let tmp93 = stringResult28;
      } else {
        tmp93 = cResult[36];
      }
      if (cResult[37] !== ageSpecificText3) {
        const obj7 = { header: tmp93, description: ageSpecificText3, IconComponent: GiftIcon.GiftIcon };
        cResult[37] = ageSpecificText3;
        cResult[38] = obj7;
        let tmp96 = obj7;
      } else {
        tmp96 = cResult[38];
      }
      if (cResult[39] === ageSpecificText5) {
        if (cResult[40] === ageSpecificText4) {
          let tmp97 = cResult[41];
        }
        if (cResult[42] === tmp82) {
          if (cResult[43] === tmp86) {
            if (cResult[44] === tmp92) {
              if (cResult[45] === tmp96) {
                if (cResult[46] === tmp97) {
                  let tmp98 = cResult[47];
                }
                const _Symbol = Symbol;
                if (cResult[48] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl34 = util.intl;
                  const stringResult29 = intl34.string(_modDef2565.kyT6pZ);
                  cResult[48] = stringResult29;
                  let tmp99 = stringResult29;
                } else {
                  tmp99 = cResult[48];
                }
                if (cResult[49] !== ageSpecificText6) {
                  const obj8 = { header: tmp99, description: ageSpecificText6, IconComponent: ClockIcon.ClockIcon };
                  cResult[49] = ageSpecificText6;
                  cResult[50] = obj8;
                  let tmp102 = obj8;
                } else {
                  tmp102 = cResult[50];
                }
                const _Symbol2 = Symbol;
                if (cResult[51] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl35 = util.intl;
                  const stringResult30 = intl35.string(_modDef2565["52ld7c"]);
                  cResult[51] = stringResult30;
                  let tmp103 = stringResult30;
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
                  let tmp106 = obj9;
                } else {
                  tmp106 = cResult[53];
                }
                const _Symbol3 = Symbol;
                if (cResult[54] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl36 = util.intl;
                  const stringResult31 = intl36.string(_modDef2565.UCuHM8);
                  cResult[54] = stringResult31;
                  let tmp107 = stringResult31;
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
                  let tmp110 = obj10;
                } else {
                  tmp110 = cResult[56];
                }
                if (cResult[57] === tmp102) {
                  if (cResult[58] === tmp106) {
                    if (cResult[59] === tmp110) {
                      let tmp111 = cResult[60];
                    }
                    if (cResult[61] === ageSpecificText10) {
                      if (cResult[62] === ageSpecificText9) {
                        let tmp112 = cResult[63];
                      }
                      if (cResult[64] !== tmp98) {
                        const obj11 = { title: first, rows: tmp98 };
                        const tmp116 = React3(closure_5, obj11);
                        cResult[64] = tmp98;
                        cResult[65] = tmp116;
                        let tmp113 = tmp116;
                      } else {
                        tmp113 = cResult[65];
                      }
                      if (cResult[66] !== tmp111) {
                        const obj12 = { title: tmp7, rows: tmp111 };
                        const tmp120 = React3(closure_5, obj12);
                        cResult[66] = tmp111;
                        cResult[67] = tmp120;
                        let tmp117 = tmp120;
                      } else {
                        tmp117 = cResult[67];
                      }
                      if (cResult[68] !== tmp112) {
                        const obj13 = { title: tmp10, rows: tmp112 };
                        const tmp124 = React3(closure_5, obj13);
                        cResult[68] = tmp112;
                        cResult[69] = tmp124;
                        let tmp121 = tmp124;
                      } else {
                        tmp121 = cResult[69];
                      }
                      if (cResult[70] === tmp113) {
                        if (cResult[71] === tmp117) {
                          if (cResult[72] === tmp121) {
                            let tmp125 = cResult[73];
                          }
                          return tmp125;
                        }
                      }
                      const obj14 = { spacing: 24, children: null };
                      const items = [tmp113, tmp117, tmp121];
                      obj14.children = items;
                      const tmp127 = React4(Stack_Stack.Stack, obj14);
                      cResult[70] = tmp113;
                      cResult[71] = tmp117;
                      cResult[72] = tmp121;
                      cResult[73] = tmp127;
                      tmp125 = tmp127;
                    }
                    const obj15 = {
                      header: ageSpecificText9,
                      description: ageSpecificText10,
                      IconComponent: XSmallIcon.XSmallIcon,
                      negative: true,
                    };
                    const items1 = [obj15];
                    cResult[61] = ageSpecificText10;
                    cResult[62] = ageSpecificText9;
                    cResult[63] = items1;
                    tmp112 = items1;
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
      const tmpResult20 = useAgeSpecificText;
    }
  : function FamilyCenterDataConfirmation() {
      const intl = util.intl;
      const intl2 = util.intl;
      const stringResult = intl.string(_modDef2565.CI1Env);
      const intl3 = util.intl;
      const stringResult1 = intl2.string(_modDef2565["ksze+o"]);
      const stringResult2 = intl3.string(_modDef2565["n73g+V"]);
      const intl4 = util.intl;
      const obj = useAgeSpecificText;
      const intl5 = util.intl;
      const ageSpecificText = obj.useAgeSpecificText(
        intl4.string(_modDef2565["5x3taM"]),
        intl5.string(_modDef2565.WZwGFX),
      );
      const stringResult3 = intl4.string(_modDef2565["5x3taM"]);
      const intl6 = util.intl;
      const obj2 = useAgeSpecificText;
      const intl7 = util.intl;
      const ageSpecificText1 = obj2.useAgeSpecificText(
        intl6.string(_modDef2565.FcKkcr),
        intl7.string(_modDef2565.PQtDFk),
      );
      const stringResult4 = intl6.string(_modDef2565.FcKkcr);
      const intl8 = util.intl;
      const obj3 = useAgeSpecificText;
      const intl9 = util.intl;
      const ageSpecificText2 = obj3.useAgeSpecificText(
        intl8.string(_modDef2565["dES/2r"]),
        intl9.string(_modDef2565.ep6mdN),
      );
      const stringResult5 = intl8.string(_modDef2565["dES/2r"]);
      const intl10 = util.intl;
      const obj4 = useAgeSpecificText;
      const intl11 = util.intl;
      const ageSpecificText3 = obj4.useAgeSpecificText(
        intl10.string(_modDef2565.GWPcQg),
        intl11.string(_modDef2565.yFnKIg),
      );
      const stringResult6 = intl10.string(_modDef2565.GWPcQg);
      const intl12 = util.intl;
      const obj5 = useAgeSpecificText;
      const intl13 = util.intl;
      const ageSpecificText4 = obj5.useAgeSpecificText(
        intl12.string(_modDef2565["30+sih"]),
        intl13.string(_modDef2565["0cuLn1"]),
      );
      const stringResult7 = intl12.string(_modDef2565["30+sih"]);
      const intl14 = util.intl;
      const obj6 = useAgeSpecificText;
      const intl15 = util.intl;
      const ageSpecificText5 = obj6.useAgeSpecificText(
        intl14.string(_modDef2565.tHTyRh),
        intl15.string(_modDef2565.TeNlMb),
      );
      const stringResult8 = intl14.string(_modDef2565.tHTyRh);
      const intl16 = util.intl;
      const obj7 = useAgeSpecificText;
      const intl17 = util.intl;
      const ageSpecificText6 = obj7.useAgeSpecificText(
        intl16.string(_modDef2565.PfveQ6),
        intl17.string(_modDef2565["f7ofm/"]),
      );
      const stringResult9 = intl16.string(_modDef2565.PfveQ6);
      const intl18 = util.intl;
      const obj8 = useAgeSpecificText;
      const intl19 = util.intl;
      const ageSpecificText7 = obj8.useAgeSpecificText(
        intl18.string(_modDef2565.MKeCj3),
        intl19.string(_modDef2565.HdcGGl),
      );
      const stringResult10 = intl18.string(_modDef2565.MKeCj3);
      const intl20 = util.intl;
      const obj9 = useAgeSpecificText;
      const intl21 = util.intl;
      const ageSpecificText8 = obj9.useAgeSpecificText(
        intl20.string(_modDef2565.wZejZr),
        intl21.string(_modDef2565.tdgcf1),
      );
      const stringResult11 = intl20.string(_modDef2565.wZejZr);
      const intl22 = util.intl;
      const obj10 = useAgeSpecificText;
      const intl23 = util.intl;
      const ageSpecificText9 = obj10.useAgeSpecificText(
        intl22.string(_modDef2565.ASf7XN),
        intl23.string(_modDef2565["82y87X"]),
      );
      const stringResult12 = intl22.string(_modDef2565.ASf7XN);
      const intl24 = util.intl;
      const obj11 = useAgeSpecificText;
      const intl25 = util.intl;
      const obj12 = { header: null, description: null, IconComponent: null };
      const ageSpecificText10 = obj11.useAgeSpecificText(
        intl24.string(_modDef2565["0QDVFN"]),
        intl25.string(_modDef2565["1xBHHV"]),
      );
      const intl26 = util.intl;
      obj12.header = intl26.string(_modDef2565["/zMYZX"]);
      obj12.description = ageSpecificText;
      obj12.IconComponent = UserPlusIcon.UserPlusIcon;
      const items = [obj12, , , , , ,];
      const obj13 = { header: null, description: null, IconComponent: null };
      const intl27 = util.intl;
      obj13.header = intl27.string(_modDef2565["44NEx6"]);
      obj13.description = ageSpecificText1;
      obj13.IconComponent = ServerIcon.ServerIcon;
      items[1] = obj13;
      const obj14 = { header: null, description: null, IconComponent: null };
      const intl28 = util.intl;
      obj14.header = intl28.string(_modDef2565["Z3G+8h"]);
      const intl29 = util.intl;
      obj14.description = intl29.string(_modDef2565.KBgArX);
      obj14.IconComponent = ForumIcon.ForumIcon;
      items[2] = obj14;
      const obj15 = { header: null, description: null, IconComponent: null };
      const intl30 = util.intl;
      obj15.header = intl30.string(_modDef2565.GNs2ZH);
      const intl31 = util.intl;
      obj15.description = intl31.string(_modDef2565.Ief2xc);
      obj15.IconComponent = PhoneIcon.PhoneIcon;
      items[3] = obj15;
      const obj16 = { header: null, description: null, IconComponent: null };
      const intl32 = util.intl;
      obj16.header = intl32.string(_modDef2565.PjM3r5);
      obj16.description = ageSpecificText2;
      obj16.IconComponent = CreditCardIcon.CreditCardIcon;
      items[4] = obj16;
      const obj17 = { header: null, description: null, IconComponent: null };
      const intl33 = util.intl;
      obj17.header = intl33.string(_modDef2565.Fv3n8L);
      obj17.description = ageSpecificText3;
      obj17.IconComponent = GiftIcon.GiftIcon;
      items[5] = obj17;
      const stringResult13 = intl24.string(_modDef2565["0QDVFN"]);
      items[6] = { header: ageSpecificText4, description: ageSpecificText5, IconComponent: FlagIcon.FlagIcon };
      const obj19 = { header: null, description: null, IconComponent: null };
      const intl34 = util.intl;
      obj19.header = intl34.string(_modDef2565.kyT6pZ);
      obj19.description = ageSpecificText6;
      obj19.IconComponent = ClockIcon.ClockIcon;
      const items1 = [obj19, ,];
      const obj20 = { header: null, description: null, IconComponent: null };
      const intl35 = util.intl;
      obj20.header = intl35.string(_modDef2565["52ld7c"]);
      obj20.description = ageSpecificText7;
      obj20.IconComponent = PiggyBankIcon.PiggyBankIcon;
      items1[1] = obj20;
      const obj21 = { header: null, description: null, IconComponent: null };
      const intl36 = util.intl;
      obj21.header = intl36.string(_modDef2565.UCuHM8);
      obj21.description = ageSpecificText8;
      obj21.IconComponent = SettingsIcon.SettingsIcon;
      items1[2] = obj21;
      const obj22 = { spacing: 24, children: null };
      const items2 = [
        React3(closure_5, { title: stringResult, rows: items }),
        React3(closure_5, { title: stringResult1, rows: items1 }),
      ];
      const obj23 = { title: stringResult2, rows: null };
      const obj18 = { header: ageSpecificText4, description: ageSpecificText5, IconComponent: FlagIcon.FlagIcon };
      const items3 = [
        {
          header: ageSpecificText9,
          description: ageSpecificText10,
          IconComponent: XSmallIcon.XSmallIcon,
          negative: true,
        },
      ];
      obj23.rows = items3;
      items2[2] = React3(closure_5, obj23);
      obj22.children = items2;
      return React4(Stack_Stack.Stack, obj22);
    };
