// === Module 14732: FamilyCenterPendingLinks ===

// Module 14732 (FamilyCenterPendingLinks)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import _modDef2493 from "module_2493" /* 2493 */;
import AssetRegistryDefault from "AssetRegistry" /* 4805 */;
import Text_Text from "Text/Text" /* 4886 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7049 */;
import useUserLinks from "useUserLinks" /* 8295 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8296 */;
import useAgeSpecificText from "useAgeSpecificText" /* 11531 */;
import FamilyCenterLinkRowDefault from "FamilyCenterLinkRow" /* 14726 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 14731 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj4;
let size;
function FamilyCenterPendingLinkRow(otherUser) {
  let Icon;
  let Icon2;
  let Icon3;
  let items;
  let obj10;
  let obj3;
  let obj4;
  let obj5;
  let obj6;
  let obj9;
  const str = otherUser.otherUser;
  const tmp = closure_9();
  const tmp4 = useIsInAdultAgeGroupDefault();
  str(8295);
  if (undefined === str) {
    return null;
  } else {
    let tmp8Result;
    let tmp14;
    if (tmp4) {
      const PressableOpacity3 = tmp5(5909).PressableOpacity;
      const intl3 = tmp5(1126).intl;
      const formatToPlainString3 = intl3.formatToPlainString;
      let str1;
      const oUpA6X = _modDef2493.oUpA6X;
      if (str != null) {
        str1 = str.toString();
      }
      let obj2 = {
        accessibilityRole: "button",
        accessibilityLabel: formatToPlainString3(oUpA6X, obj3),
        onPress() {
              const obj = ModalActionCreatorsDefault;
              const obj2 = { otherUser: str };
              obj.pushLazy(asyncRequire(14735, dependencyMap.paths), obj2);
            },
        style: tmp.actionButton,
        children: closure_5(Icon3, obj4)
      };
      obj3 = { name: str1 };
      obj4 = { size: str(1188).Icon.Sizes.SMALL, disableColor: true, source: AssetRegistryDefault2 };
      Icon3 = tmp5(1188).Icon;
      tmp8Result = closure_5(PressableOpacity3, obj2);
      tmp14 = closure_5;
    } else {
      let tmp12Result = null;
      if (!tmp7) {
        const PressableOpacity = tmp5(5909).PressableOpacity;
        const intl = tmp5(1126).intl;
        const formatToPlainString = intl.formatToPlainString;
        let str2;
        const jc1Ip7 = _modDef2493.jc1Ip7;
        if (str != null) {
          str2 = str.toString();
        }
        let obj = {
          accessibilityRole: "button",
          accessibilityLabel: formatToPlainString(jc1Ip7, obj5),
          onPress() {
                  const obj = ModalActionCreatorsDefault;
                  const obj2 = { otherUser: str };
                  obj.pushLazy(asyncRequire(14733, dependencyMap.paths), obj2);
                },
          style: items,
          children: closure_5(Icon, obj6)
        };
        items = [, ];
        obj5 = { name: str2 };
        ({ actionButton: arr[0], actionButtonFirst: arr[1] } = tmp);
        obj6 = { size: str(1188).Icon.Sizes.SMALL, disableColor: true, source: AssetRegistryDefault };
        Icon = tmp5(1188).Icon;
        tmp12Result = closure_5(PressableOpacity, obj);
      }
      const items1 = [tmp12Result, ];
      tmp14 = closure_5;
      const PressableOpacity2 = tmp5(5909).PressableOpacity;
      const intl2 = tmp5(1126).intl;
      const formatToPlainString2 = intl2.formatToPlainString;
      let str3;
      const v4GtllP = _modDef2493["4GtllP"];
      if (str != null) {
        str3 = str.toString();
      }
      const obj7 = { children: items1 };
      const obj8 = {
        accessibilityRole: "button",
        accessibilityLabel: formatToPlainString2(v4GtllP, obj9),
        onPress() {
              const obj = ModalActionCreatorsDefault;
              const obj2 = { otherUser: str };
              obj.pushLazy(asyncRequire(14734, dependencyMap.paths), obj2);
            },
        style: tmp.actionButton,
        children: tmp14(Icon2, obj10)
      };
      obj9 = { name: str3 };
      obj10 = { size: str(1188).Icon.Sizes.SMALL, disableColor: true, source: AssetRegistryDefault2 };
      Icon2 = tmp5(1188).Icon;
      items1[1] = tmp14(PressableOpacity2, obj8);
      tmp8Result = closure_6(closure_7, obj7);
    }
    const obj11 = { otherUser: str, actions: tmp8Result };
    return tmp14(FamilyCenterLinkRowDefault, obj11);
  }
}
const View = react_native.View;
const UserLinkStatus = FamilyCenterConstants.UserLinkStatus;
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { marginTop: 24 }, content: obj2, header: { marginBottom: 10 } };
obj2 = { display: "flex", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.md };
let closure_8 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let items;
  let tmp5;
  let tmp8;
  let obj = react2;
  const cResult = obj.c(17);
  const tmp4 = closure_8();
  const obj2 = useUserLinks;
  const usersForLinkStatus = obj2.useUsersForLinkStatus(UserLinkStatus.PENDING);
  if (cResult[0] !== usersForLinkStatus.length) {
    const intl = intl4.intl;
    const obj3 = { count: usersForLinkStatus.length };
    const formatToPlainStringResult = intl.formatToPlainString(_modDef2493.IkAgkG, obj3);
    cResult[0] = usersForLinkStatus.length;
    cResult[1] = formatToPlainStringResult;
    tmp5 = formatToPlainStringResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== usersForLinkStatus.length) {
    const intl2 = intl4.intl;
    const obj4 = { count: usersForLinkStatus.length };
    const formatToPlainStringResult1 = intl2.formatToPlainString(_modDef2493.Q8XnAa, obj4);
    cResult[2] = usersForLinkStatus.length;
    cResult[3] = formatToPlainStringResult1;
    tmp8 = formatToPlainStringResult1;
  } else {
    tmp8 = cResult[3];
  }
  const tmpResult = useAgeSpecificText;
  const ageSpecificText = tmpResult.useAgeSpecificText(tmp5, tmp8);
  if (0 === usersForLinkStatus.length) {
    return null;
  } else {
    if (cResult[4] === ageSpecificText) {
      let tmp12;
      if (cResult[5] === tmp4.header) {
        tmp12 = cResult[6];
      }
      const content = tmp4.content;
      if (cResult[7] !== usersForLinkStatus) {
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          class L {
            constructor(arg0) {
              obj = { otherUser: arg0 };
              return closure_1_5(closure_1_10, obj, "pending-" + arg0.id);
            }
          }
          cResult[9] = L;
        } else {
          class L {
            constructor(arg0) {
              obj = { otherUser: arg0 };
              return closure_1_5(closure_1_10, obj, "pending-" + arg0.id);
            }
          }
        }
        const mapped = usersForLinkStatus.map(L);
        cResult[7] = usersForLinkStatus;
        cResult[8] = mapped;
      } else {
        class L {
          constructor(arg0) {
            obj = { otherUser: arg0 };
            return closure_1_5(closure_1_10, obj, "pending-" + arg0.id);
          }
        }
      }
      if (cResult[10] === tmp4.content) {
        class L {
          constructor(arg0) {
            obj = { otherUser: arg0 };
            return closure_1_5(closure_1_10, obj, "pending-" + arg0.id);
          }
        }
        if (cResult[13] === tmp4.container) {
          class L {
            constructor(arg0) {
              obj = { otherUser: arg0 };
              return closure_1_5(closure_1_10, obj, "pending-" + arg0.id);
            }
          }
        }
        const obj5 = { style: tmp28, children: items };
        items = [tmp12, tmp19];
        cResult[13] = tmp4.container;
        cResult[14] = tmp12;
        cResult[15] = tmp19;
        cResult[16] = metroRequire(View, obj5);
        const tmp26 = metroRequire(View, obj5);
      }
      const obj6 = { style: content, children: tmp15 };
      cResult[10] = tmp4.content;
      cResult[11] = tmp15;
      cResult[12] = hasOwnProperty(View, obj6);
      const tmp22 = hasOwnProperty(View, obj6);
    }
    const obj7 = { style: tmp4.header, variant: "eyebrow", color: "text-default", children: ageSpecificText };
    const tmp14 = hasOwnProperty(Text_Text.Text, obj7);
    cResult[4] = ageSpecificText;
    cResult[5] = tmp4.header;
    cResult[6] = tmp14;
    tmp12 = tmp14;
  }
}) : (() => {
  let items;
  const tmp = closure_8();
  let obj = useUserLinks;
  const usersForLinkStatus = obj.useUsersForLinkStatus(UserLinkStatus.PENDING);
  useAgeSpecificText;
  const intl = intl4.intl;
  const obj2 = { count: usersForLinkStatus.length };
  intl.formatToPlainString(_modDef2493.IkAgkG, obj2);
  const intl2 = intl4.intl;
  let tmp7 = null;
  if (0 !== usersForLinkStatus.length) {
    const obj3 = { style: tmp.container, children: items };
    const obj4 = { style: tmp.header, variant: "eyebrow", color: "text-default", children: tmp6 };
    items = [hasOwnProperty(Text_Text.Text, obj4), ];
    const obj5 = {
      style: tmp.content,
      children: usersForLinkStatus.map((otherUser) => {
          const obj = { otherUser };
          return closure_1_5(FamilyCenterPendingLinkRow, obj, "pending-" + otherUser.id);
        })
    };
    items[1] = hasOwnProperty(View, obj5);
    tmp7 = metroRequire(View, obj3);
  }
  return tmp7;
});
createStyles = createStyles_mod;
let obj3 = { actionButton: size, actionButtonFirst: obj4 };
size = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center", height: 32, width: 32 };
createStyles = createStyles.createStyles;
obj4 = { marginRight: nativeDefault.space.PX_8 };
let closure_9 = createStyles(obj3);
size = size_mod;
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterPendingLinks.tsx");

export default tmp4;