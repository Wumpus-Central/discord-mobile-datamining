// discord_app/modules/parent_tools/native/FamilyCenterAcceptedLinks.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../_runtime/02000_asyncRequireImpl.js";
import _modDef2568 from "../FamilyCenter.messages.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import useUserLinks from "../hooks/useUserLinks.tsx";
import useIsInAdultAgeGroupDefault from "../hooks/useIsInAdultAgeGroup.tsx";
import FamilyCenterEmptyDefault from "FamilyCenterEmpty.tsx";
import FamilyCenterLinkRowDefault from "FamilyCenterLinkRow.tsx";
import _modDef15181 from "../../../../_runtime/metro/15181__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const util = intl(1126);
const Text_Text = intl(5088);
const useAgeSpecificText2 = intl(11533);
require = fn;
function FamilyCenterAcceptedLinkRow(otherUser) {
  let tmp4Result = null;
  if (undefined !== otherUser.otherUser) {
    const obj2 = { otherUser: str, actions: null };
    const intl = str(1126).intl;
    let str1;
    if (str != null) {
      str1 = str.toString();
    }
    const obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    const obj3 = { name: str1 };
    obj.accessibilityLabel = intl.formatToPlainString(_modDef2568.T7DUoU, obj3);
    obj.onPress = function handleDisconnect() {
      ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(15179, dependencyMap.paths), { otherUser: str });
    };
    obj.style = tmp.actionButton;
    const obj4 = { size: str(1200).Icon.Sizes.SMALL, disableColor: true, source: _modDef15181 };
    obj.children = closure_6(str(1200).Icon, obj4);
    obj2.actions = closure_6(str(6184).PressableOpacity, obj);
    tmp4Result = closure_6(FamilyCenterLinkRowDefault, obj2);
  }
  return tmp4Result;
}
const View = fn(17).View;
const FamilyCenterConstants = fn(7259);
({ MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS: closure_4, MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS: hasOwnProperty } =
  FamilyCenterConstants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let createStyles = fn(5092);
let obj2 = {
  container: { marginTop: 24 },
  content: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    borderRadius: nativeDefault.radii.md,
  },
  empty: { padding: 20, alignSelf: "center" },
  header: { marginBottom: 10 },
};
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = {
  display: "flex",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderRadius: nativeDefault.radii.md,
};
createStyles = fn(5092);
let obj6 = { actionButton: null };
let size = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
  borderRadius: nativeDefault.radii.round,
  alignItems: "center",
  justifyContent: "center",
  height: 32,
  width: 32,
};
obj6.actionButton = size;
let closure_9 = createStyles.createStyles(obj6);
size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterAcceptedLinks.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function FamilyCenterAcceptedLinks() {
      let intl = require;
      let stringResult = dependencyMap;
      const cResult = c.c(18);
      const tmp3 = closure_8();
      const tmp5 = useIsInAdultAgeGroupDefault();
      let activeLinkUsers = useUserLinks.useActiveLinkUsers();
      const tmp6 = tmp5 ? React4 : hasOwnProperty;
      if (cResult[0] === activeLinkUsers.length) {
        if (cResult[1] === tmp6) {
          let tmp7 = cResult[2];
          let tmp8 = cResult[3];
          let tmp9 = cResult[4];
        }
        const tmp7Result = tmp7(tmp8, tmp9);
        if (cResult[5] === tmp7Result) {
          if (cResult[6] === tmp3.header) {
            let tmp13 = cResult[7];
          }
          if (cResult[8] === activeLinkUsers) {
            if (cResult[9] === tmp3.empty) {
              if (cResult[11] === tmp3.content) {
                if (cResult[12] === tmp16) {
                  let tmp22 = cResult[13];
                }
                if (cResult[14] === tmp3.container) {
                  if (cResult[15] === tmp13) {
                    if (cResult[16] === tmp22) {
                      let tmp26 = cResult[17];
                    }
                    return tmp26;
                  }
                }
                const obj3 = { style: tmp3.container, children: null };
                const items = [tmp13, tmp22];
                obj3.children = items;
                const tmp29 = React5(View, obj3);
                cResult[14] = tmp3.container;
                cResult[15] = tmp13;
                cResult[16] = tmp22;
                cResult[17] = tmp29;
                tmp26 = tmp29;
              }
              const obj4 = { style: tmp3.content, children: cResult[10] };
              const tmp25 = timestampProducer(View, obj4);
              cResult[11] = tmp3.content;
              cResult[12] = cResult[10];
              cResult[13] = tmp25;
              tmp22 = tmp25;
            }
          }
          if (0 === activeLinkUsers.length) {
            const obj5 = { style: tmp3.empty, children: null };
            const obj6 = { text: null };
            intl = util.intl;
            stringResult = intl.string(_modDef2568.C4ScLD);
            obj6.text = stringResult;
            obj5.children = timestampProducer(FamilyCenterEmptyDefault, obj6);
            let mapped = timestampProducer(View, obj5);
            const tmp4Result = FamilyCenterEmptyDefault;
          } else {
            mapped = activeLinkUsers.map((otherUser) =>
              closure_1_6(FamilyCenterAcceptedLinkRow, { otherUser }, "accepted-" + otherUser.id),
            );
          }
          cResult[8] = activeLinkUsers;
          activeLinkUsers = tmp3.empty;
          cResult[9] = activeLinkUsers;
          cResult[10] = mapped;
        }
        const obj7 = { style: tmp3.header, variant: "eyebrow", color: "text-default", children: tmp7Result };
        const tmp15 = timestampProducer(Text_Text.Text, obj7);
        cResult[5] = tmp7Result;
        cResult[6] = tmp3.header;
        cResult[7] = tmp15;
        tmp13 = tmp15;
      }
      const obj8 = { count: activeLinkUsers.length, max: tmp6 };
      const useAgeSpecificText = useAgeSpecificText2.useAgeSpecificText;
      const intl2 = util.intl;
      const formatToPlainStringResult = intl2.formatToPlainString(_modDef2568["+tnO34"], obj8);
      const intl3 = util.intl;
      const formatToPlainStringResult1 = intl3.formatToPlainString(_modDef2568["pu6/U0"], obj8);
      cResult[0] = activeLinkUsers.length;
      cResult[1] = tmp6;
      cResult[2] = useAgeSpecificText;
      cResult[3] = formatToPlainStringResult;
      cResult[4] = formatToPlainStringResult1;
      tmp9 = formatToPlainStringResult1;
      tmp8 = formatToPlainStringResult;
      tmp7 = useAgeSpecificText;
    }
  : function FamilyCenterAcceptedLinks() {
      const tmp = closure_8();
      const tmp4 = useIsInAdultAgeGroupDefault();
      const activeLinkUsers = useUserLinks.useActiveLinkUsers();
      const obj2 = { count: activeLinkUsers.length, max: tmp4 ? React4 : hasOwnProperty };
      const intl = util.intl;
      const tmp5Result = useAgeSpecificText2;
      const intl2 = util.intl;
      const obj3 = { style: tmp.container, children: null };
      const ageSpecificText = tmp5Result.useAgeSpecificText(
        intl.formatToPlainString(_modDef2568["+tnO34"], obj2),
        intl2.formatToPlainString(_modDef2568["pu6/U0"], obj2),
      );
      const items = [
        timestampProducer(Text_Text.Text, {
          style: tmp.header,
          variant: "eyebrow",
          color: "text-default",
          children: ageSpecificText,
        }),
      ];
      const obj5 = { style: tmp.content, children: null };
      if (0 === activeLinkUsers.length) {
        const obj6 = { style: tmp.empty, children: null };
        const obj7 = { text: null };
        const intl3 = util.intl;
        obj7.text = intl3.string(_modDef2568.C4ScLD);
        obj6.children = timestampProducer(FamilyCenterEmptyDefault, obj7);
        let mapped = timestampProducer(View, obj6);
        const tmp2Result = FamilyCenterEmptyDefault;
      } else {
        mapped = activeLinkUsers.map((otherUser) =>
          closure_1_6(FamilyCenterAcceptedLinkRow, { otherUser }, "accepted-" + otherUser.id),
        );
      }
      obj5.children = mapped;
      items[1] = timestampProducer(View, obj5);
      obj3.children = items;
      return React5(View, obj3);
    };
