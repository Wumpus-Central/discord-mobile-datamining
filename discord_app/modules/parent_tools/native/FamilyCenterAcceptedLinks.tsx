// === Module 14739: FamilyCenterAcceptedLinks ===

// Module 14739 (FamilyCenterAcceptedLinks)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import _modDef2521 from "module_2521" /* 2521 */;
import Text_Text from "Text/Text" /* 4892 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import useUserLinks from "useUserLinks" /* 8328 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8329 */;
import useAgeSpecificText2 from "useAgeSpecificText" /* 11544 */;
import FamilyCenterEmptyDefault from "FamilyCenterEmpty" /* 14740 */;
import FamilyCenterLinkRowDefault from "FamilyCenterLinkRow" /* 14742 */;
import AssetRegistryDefault from "AssetRegistry" /* 14747 */;
import react from "react" /* 19 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7062 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let size;
function FamilyCenterAcceptedLinkRow(otherUser) {
  let Icon;
  let PressableOpacity;
  let obj;
  let obj3;
  let obj4;
  const str = otherUser.otherUser;
  let tmp4Result = null;
  if (undefined !== str) {
    let obj2 = { otherUser: str, actions: closure_6(PressableOpacity, obj) };
    const tmp7 = FamilyCenterLinkRowDefault;
    PressableOpacity = str(5916).PressableOpacity;
    const intl = str(1126).intl;
    const formatToPlainString = intl.formatToPlainString;
    let str1;
    const T7DUoU = _modDef2521.T7DUoU;
    if (str != null) {
      str1 = str.toString();
    }
    obj = {
      accessibilityRole: "button",
      accessibilityLabel: formatToPlainString(T7DUoU, obj3),
      onPress() {
          const obj = ModalActionCreatorsDefault;
          const obj2 = { otherUser: str };
          obj.pushLazy(asyncRequire(14745, dependencyMap.paths), obj2);
        },
      style: tmp.actionButton,
      children: closure_6(Icon, obj4)
    };
    obj3 = { name: str1 };
    obj4 = { size: str(1188).Icon.Sizes.SMALL, disableColor: true, source: AssetRegistryDefault };
    Icon = tmp8(1188).Icon;
    tmp4Result = closure_6(tmp7, obj2);
  }
  return tmp4Result;
}
const View = react_native.View;
({ MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS: closure_4, MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS: hasOwnProperty } = FamilyCenterConstants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { marginTop: 24 }, content: obj2, empty: { padding: 20, alignSelf: "center" }, header: { marginBottom: 10 } };
obj2 = { display: "flex", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.md };
let closure_8 = createStyles.createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let intl3;
  let items;
  let obj6;
  let tmp5Result;
  let obj = react2;
  const cResult = obj.c(18);
  const tmp4 = closure_8();
  const tmp6 = useIsInAdultAgeGroupDefault();
  const obj2 = useUserLinks;
  const activeLinkUsers = obj2.useActiveLinkUsers();
  const tmp7 = tmp6 ? React3 : hasOwnProperty;
  if (cResult[0] === activeLinkUsers.length) {
    let tmp8;
    let tmp9;
    let tmp10;
    if (cResult[1] === tmp7) {
      tmp8 = cResult[2];
      tmp9 = cResult[3];
      tmp10 = cResult[4];
    }
    const tmp8Result = tmp8(tmp9, tmp10);
    if (cResult[5] === tmp8Result) {
      let tmp14;
      let mapped;
      if (cResult[6] === tmp4.header) {
        tmp14 = cResult[7];
      }
      if (cResult[8] === activeLinkUsers) {
        let tmp17;
        if (cResult[9] === tmp4.empty) {
          tmp17 = cResult[10];
        }
        if (cResult[11] === tmp4.content) {
          let tmp22;
          if (cResult[12] === tmp17) {
            tmp22 = cResult[13];
          }
          if (cResult[14] === tmp4.container) {
            if (cResult[15] === tmp14) {
              let tmp26;
              if (cResult[16] === tmp22) {
                tmp26 = cResult[17];
              }
              return tmp26;
            }
          }
          const obj3 = { style: tmp4.container, children: items };
          items = [tmp14, tmp22];
          const tmp29 = metroImportDefault(View, obj3);
          cResult[14] = tmp4.container;
          cResult[15] = tmp14;
          cResult[16] = tmp22;
          cResult[17] = tmp29;
          tmp26 = tmp29;
        }
        const obj4 = { style: tmp4.content, children: tmp17 };
        const tmp25 = metroRequire(View, obj4);
        cResult[11] = tmp4.content;
        cResult[12] = tmp17;
        cResult[13] = tmp25;
        tmp22 = tmp25;
      }
      if (0 === activeLinkUsers.length) {
        const obj5 = { style: tmp4.empty, children: metroRequire(tmp5Result, obj6) };
        obj6 = { text: intl3.string(_modDef2521.C4ScLD) };
        tmp5Result = FamilyCenterEmptyDefault;
        intl3 = intl4.intl;
        mapped = metroRequire(View, obj5);
      } else {
        mapped = activeLinkUsers.map((otherUser) => {
          const obj = { otherUser };
          return closure_1_6(FamilyCenterAcceptedLinkRow, obj, "accepted-" + otherUser.id);
        });
      }
      cResult[8] = activeLinkUsers;
      cResult[9] = tmp4.empty;
      cResult[10] = mapped;
      tmp17 = mapped;
    }
    const obj7 = { style: tmp4.header, variant: "eyebrow", color: "text-default", children: tmp8Result };
    const tmp16 = metroRequire(Text_Text.Text, obj7);
    cResult[5] = tmp8Result;
    cResult[6] = tmp4.header;
    cResult[7] = tmp16;
    tmp14 = tmp16;
  }
  const obj8 = { count: activeLinkUsers.length, max: tmp7 };
  const useAgeSpecificText = useAgeSpecificText2.useAgeSpecificText;
  const intl = intl4.intl;
  const formatToPlainStringResult = intl.formatToPlainString(_modDef2521["+tnO34"], obj8);
  const intl2 = intl4.intl;
  const formatToPlainStringResult1 = intl2.formatToPlainString(_modDef2521["pu6/U0"], obj8);
  cResult[0] = activeLinkUsers.length;
  cResult[1] = tmp7;
  cResult[2] = useAgeSpecificText;
  cResult[3] = formatToPlainStringResult;
  cResult[4] = formatToPlainStringResult1;
  tmp10 = formatToPlainStringResult1;
  tmp9 = formatToPlainStringResult;
  tmp8 = useAgeSpecificText;
}) : (() => {
  let intl3;
  let items;
  let mapped;
  let obj7;
  let tmp2Result;
  const tmp = closure_8();
  const tmp4 = useIsInAdultAgeGroupDefault();
  let obj = useUserLinks;
  const activeLinkUsers = obj.useActiveLinkUsers();
  const obj2 = { count: activeLinkUsers.length, max: tmp4 ? React3 : hasOwnProperty };
  const useAgeSpecificText = useAgeSpecificText2.useAgeSpecificText;
  useAgeSpecificText2;
  const intl = intl4.intl;
  const formatToPlainStringResult = intl.formatToPlainString(_modDef2521["+tnO34"], obj2);
  const intl2 = intl4.intl;
  const obj3 = { style: tmp.container, children: items };
  const ageSpecificText = useAgeSpecificText(formatToPlainStringResult, intl2.formatToPlainString(_modDef2521["pu6/U0"], obj2));
  items = [, ];
  const obj4 = { style: tmp.header, variant: "eyebrow", color: "text-default", children: ageSpecificText };
  items[0] = metroRequire(Text_Text.Text, obj4);
  const obj5 = { style: tmp.content, children: mapped };
  if (0 === activeLinkUsers.length) {
    const obj6 = { style: tmp.empty, children: metroRequire(tmp2Result, obj7) };
    obj7 = { text: intl3.string(_modDef2521.C4ScLD) };
    tmp2Result = FamilyCenterEmptyDefault;
    intl3 = intl4.intl;
    mapped = metroRequire(View, obj6);
  } else {
    mapped = activeLinkUsers.map((otherUser) => {
      const obj = { otherUser };
      return closure_1_6(FamilyCenterAcceptedLinkRow, obj, "accepted-" + otherUser.id);
    });
  }
  items[1] = metroRequire(View, obj5);
  return metroImportDefault(View, obj3);
});
createStyles = createStyles_mod;
let obj3 = { actionButton: size };
size = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center", height: 32, width: 32 };
let closure_9 = createStyles.createStyles(obj3);
size = size_mod;
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterAcceptedLinks.tsx");

export default tmp5;