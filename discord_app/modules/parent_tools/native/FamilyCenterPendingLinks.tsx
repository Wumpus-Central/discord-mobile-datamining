// === Module 15121: FamilyCenterPendingLinks ===

// Module 15121 (FamilyCenterPendingLinks)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import _modDef2565 from "module_2565" /* 2565 */;
import _modDef5006 from "module_5006" /* 5006 */;
import Text_Text from "Text/Text" /* 5087 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5941 */;
import useUserLinks from "useUserLinks" /* 7720 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 7721 */;
import useAgeSpecificText from "useAgeSpecificText" /* 11487 */;
import FamilyCenterLinkRowDefault from "FamilyCenterLinkRow" /* 15115 */;
import _modDef15120 from "module_15120" /* 15120 */;
import noop from "module_19" /* 19 */;

require = fn;
function FamilyCenterPendingLinkRow(otherUser) {
  const tmp = closure_9();
  otherUser.otherUser(7720);
  if (undefined === otherUser.otherUser) {
    return null;
  } else {
    if (tmp4) {
      const intl3 = tmp5(1126).intl;
      let str1;
      if (str != null) {
        str1 = str.toString();
      }
      const obj2 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
      const obj3 = { name: str1 };
      obj2.accessibilityLabel = intl3.formatToPlainString(_modDef2565.oUpA6X, obj3);
      obj2.onPress = function handleCancel() {
        ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(15124, dependencyMap.paths), { otherUser: str });
      };
      obj2.style = tmp.actionButton;
      const obj4 = { size: tmp5(1200).Icon.Sizes.SMALL, disableColor: true, source: _modDef15120 };
      obj2.children = closure_5(tmp5(1200).Icon, obj4);
      let tmp8Result = closure_5(tmp5(6191).PressableOpacity, obj2);
      let tmp14 = closure_5;
    } else {
      let tmp12Result = null;
      if (!tmp7) {
        const intl = tmp5(1126).intl;
        let str2;
        if (str != null) {
          str2 = str.toString();
        }
        const obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
        const obj5 = { name: str2 };
        obj.accessibilityLabel = intl.formatToPlainString(_modDef2565.jc1Ip7, obj5);
        obj.onPress = function handleAccept() {
          ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(15122, dependencyMap.paths), { otherUser: str });
        };
        const items = [, ];
        ({ actionButton: arr[0], actionButtonFirst: arr[1] } = tmp);
        obj.style = items;
        const obj6 = { size: tmp5(1200).Icon.Sizes.SMALL, disableColor: true, source: _modDef5006 };
        obj.children = closure_5(tmp5(1200).Icon, obj6);
        tmp12Result = closure_5(tmp5(6191).PressableOpacity, obj);
      }
      const items1 = [tmp12Result, ];
      tmp14 = closure_5;
      const intl2 = tmp5(1126).intl;
      let str3;
      if (str != null) {
        str3 = str.toString();
      }
      const obj7 = { children: null };
      const obj8 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
      const obj9 = { name: str3 };
      obj8.accessibilityLabel = intl2.formatToPlainString(_modDef2565["4GtllP"], obj9);
      obj8.onPress = function handleDecline() {
        ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(15123, dependencyMap.paths), { otherUser: str });
      };
      obj8.style = tmp.actionButton;
      const obj10 = { size: tmp5(1200).Icon.Sizes.SMALL, disableColor: true, source: _modDef15120 };
      obj8.children = tmp14(tmp5(1200).Icon, obj10);
      items1[1] = tmp14(tmp5(6191).PressableOpacity, obj8);
      obj7.children = items1;
      tmp8Result = closure_6(closure_7, obj7);
    }
    const obj11 = { otherUser: str, actions: tmp8Result };
    return tmp14(FamilyCenterLinkRowDefault, obj11);
  }
  tmp4 = useIsInAdultAgeGroupDefault();
}
const View = fn(17).View;
const UserLinkStatus = fn(7253).UserLinkStatus;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
let createStyles = fn(5091);
let obj2 = { container: { marginTop: 24 }, content: { display: "flex", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.md }, header: { marginBottom: 10 } };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { display: "flex", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.md };
createStyles = fn(5091);
let obj6 = { actionButton: null, actionButtonFirst: null };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center", height: 32, width: 32 };
obj6.actionButton = size;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterPendingLinks() {
  const cResult = c.c(17);
  const tmp4 = closure_8();
  const usersForLinkStatus = useUserLinks.useUsersForLinkStatus(UserLinkStatus.PENDING);
  if (cResult[0] !== usersForLinkStatus.length) {
    const intl = util.intl;
    const obj3 = { count: usersForLinkStatus.length };
    const formatToPlainStringResult = intl.formatToPlainString(_modDef2565.IkAgkG, obj3);
    cResult[0] = usersForLinkStatus.length;
    cResult[1] = formatToPlainStringResult;
    let tmp5 = formatToPlainStringResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== usersForLinkStatus.length) {
    const intl2 = util.intl;
    const obj4 = { count: usersForLinkStatus.length };
    const formatToPlainStringResult1 = intl2.formatToPlainString(_modDef2565.Q8XnAa, obj4);
    cResult[2] = usersForLinkStatus.length;
    cResult[3] = formatToPlainStringResult1;
    let tmp8 = formatToPlainStringResult1;
  } else {
    tmp8 = cResult[3];
  }
  const ageSpecificText = useAgeSpecificText.useAgeSpecificText(tmp5, tmp8);
  if (0 === usersForLinkStatus.length) {
    return null;
  } else {
    if (cResult[4] === ageSpecificText) {
      if (cResult[5] === tmp4.header) {
        let tmp12 = cResult[6];
      }
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
          const obj5 = { style: tmp30, children: null };
          const items = [tmp12, tmp21];
          obj5.children = items;
          const tmp28 = timestampProducer(View, obj5);
          cResult[13] = tmp4.container;
          cResult[14] = tmp12;
          cResult[15] = tmp21;
          cResult[16] = tmp28;
        }
        const obj6 = { style: tmp15, children: tmp16 };
        const tmp24 = hasOwnProperty(View, obj6);
        cResult[10] = tmp4.content;
        cResult[11] = tmp16;
        cResult[12] = tmp24;
      }
    }
    const obj7 = { style: tmp4.header, variant: "eyebrow", color: "text-default", children: ageSpecificText };
    const tmp14 = hasOwnProperty(Text_Text.Text, obj7);
    cResult[4] = ageSpecificText;
    cResult[5] = tmp4.header;
    cResult[6] = tmp14;
    tmp12 = tmp14;
  }
  const tmpResult = useAgeSpecificText;
}) : (function FamilyCenterPendingLinks() {
  const tmp = closure_8();
  const usersForLinkStatus = useUserLinks.useUsersForLinkStatus(UserLinkStatus.PENDING);
  useAgeSpecificText;
  const intl = util.intl;
  intl.formatToPlainString(_modDef2565.IkAgkG, { count: usersForLinkStatus.length });
  const intl2 = util.intl;
  let tmp7 = null;
  if (0 !== usersForLinkStatus.length) {
    const obj3 = { style: tmp.container, children: null };
    const obj4 = { style: tmp.header, variant: "eyebrow", color: "text-default", children: tmp6 };
    const items = [hasOwnProperty(Text_Text.Text, obj4), ];
    const obj5 = { style: tmp.content, children: usersForLinkStatus.map((otherUser) => closure_1_5(FamilyCenterPendingLinkRow, { otherUser }, "pending-" + otherUser.id)) };
    items[1] = hasOwnProperty(View, obj5);
    obj3.children = items;
    tmp7 = timestampProducer(View, obj3);
  }
  return tmp7;
});
obj6.actionButtonFirst = { marginRight: nativeDefault.space.PX_8 };
let closure_9 = createStyles.createStyles(obj6);
size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterPendingLinks.tsx");

export default tmp4;