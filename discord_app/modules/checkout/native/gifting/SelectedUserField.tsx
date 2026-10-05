// discord_app/modules/checkout/native/gifting/SelectedUserField.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl6 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import UserUtilsDefault from "../../../../utils/UserUtils.tsx";
import CircleXIcon from "../../../../design/components/Icon/native/redesign/generated/CircleXIcon.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import InputFieldContainer2 from "../../../../design/components/Input/native/InputFieldContainer.native.tsx";
import MagnifyingGlassIcon from "../../../../design/components/Icon/native/redesign/generated/MagnifyingGlassIcon.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
({ Pressable: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  content: { flexDirection: "row", overflow: "hidden", alignItems: "center", display: "flex" },
  opener: obj3,
  openerWithClearButton: { paddingRight: 0 },
  searchIcon: obj4,
  userPill: obj5,
  userPillText: { marginLeft: 6 },
  clearButton: obj6,
};
obj2 = { marginHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = {
  flexDirection: "row",
  alignItems: "center",
  flex: 1,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: 6,
};
obj4 = { marginRight: nativeDefault.space.PX_8 };
obj5 = {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.lg,
  paddingVertical: 6,
  paddingHorizontal: 6,
};
obj6 = {
  alignItems: "center",
  justifyContent: "center",
  minWidth: 44,
  minHeight: 44,
  paddingRight: nativeDefault.space.PX_16,
  paddingLeft: nativeDefault.space.PX_8,
};
let closure_7 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let formatToPlainString;
      let intl4;
      let items;
      let items1;
      let items2;
      let obj12;
      let obj6;
      let obj8;
      let obj9;
      let onPress;
      let selectedUser;
      let setSelectedUser;
      let v0Vb9FQ;
      const obj = react2;
      const cResult = obj.c(28);
      ({ selectedUser, onPress, setSelectedUser } = arg0);
      const tmp4 = closure_7();
      if (cResult[0] === tmp4.opener) {
        let tmp6;
        let tmp7;
        let tmp14;
        let tmp19;
        if (cResult[1] === (null != selectedUser && tmp4.openerWithClearButton)) {
          tmp6 = cResult[2];
        }
        if (cResult[3] !== selectedUser) {
          let combined;
          if (null != selectedUser) {
            const intl3 = intl6.intl;
            const _HermesInternal2 = HermesInternal;
            const stringResult = intl3.string(intl6.t.xFn72s);
            const obj2 = UserUtilsDefault;
            combined = "" + stringResult + ", " + obj2.getName(selectedUser);
          } else {
            const intl = intl6.intl;
            const stringResult1 = intl.string(intl6.t.xFn72s);
            const intl2 = intl6.intl;
            const _HermesInternal = HermesInternal;
            combined = "" + stringResult1 + ", " + intl2.string(intl6.t.R0vK0N);
          }
          cResult[3] = selectedUser;
          cResult[4] = combined;
          tmp7 = combined;
        } else {
          tmp7 = cResult[4];
        }
        if (cResult[5] !== tmp4.searchIcon) {
          const obj3 = { style: tmp4.searchIcon, size: "xs", color: "interactive-text-default" };
          const tmp16 = hasOwnProperty(MagnifyingGlassIcon.MagnifyingGlassIcon, obj3);
          cResult[5] = tmp4.searchIcon;
          cResult[6] = tmp16;
          tmp14 = tmp16;
        } else {
          tmp14 = cResult[6];
        }
        if (cResult[7] === selectedUser) {
          if (cResult[8] === tmp4.userPill) {
            let tmp17;
            if (cResult[9] === tmp4.userPillText) {
              tmp17 = cResult[10];
            }
            if (cResult[11] === onPress) {
              if (cResult[12] === tmp6) {
                if (cResult[13] === tmp7) {
                  if (cResult[14] === tmp14) {
                    let tmp24;
                    if (cResult[15] === tmp17) {
                      tmp24 = cResult[16];
                    }
                    if (cResult[17] === selectedUser) {
                      if (cResult[18] === setSelectedUser) {
                        let tmp28;
                        if (cResult[19] === tmp4.clearButton) {
                          tmp28 = cResult[20];
                        }
                        if (cResult[21] === tmp4.content) {
                          if (cResult[22] === tmp24) {
                            let tmp34;
                            if (cResult[23] === tmp28) {
                              tmp34 = cResult[24];
                            }
                            if (cResult[25] === tmp4.container) {
                              let tmp39;
                              if (cResult[26] === tmp34) {
                                tmp39 = cResult[27];
                              }
                              return tmp39;
                            }
                            const obj4 = { style: tmp4.container, children: tmp34 };
                            const tmp42 = hasOwnProperty(React3, obj4);
                            cResult[25] = tmp4.container;
                            cResult[26] = tmp34;
                            cResult[27] = tmp42;
                            tmp39 = tmp42;
                          }
                        }
                        const obj5 = { children: metroRequire(React3, obj6) };
                        obj6 = { style: tmp4.content, children: items };
                        items = [tmp24, tmp28];
                        const InputFieldContainer = InputFieldContainer2.InputFieldContainer;
                        const tmp38 = hasOwnProperty(InputFieldContainer, obj5);
                        cResult[21] = tmp4.content;
                        cResult[22] = tmp24;
                        cResult[23] = tmp28;
                        cResult[24] = tmp38;
                        tmp34 = tmp38;
                      }
                    }
                    let tmp29 = null;
                    if (null != selectedUser) {
                      const obj7 = {
                        style: tmp4.clearButton,
                        onPress() {
                          return setSelectedUser(undefined);
                        },
                        accessibilityRole: "button",
                        accessibilityLabel: formatToPlainString(v0Vb9FQ, obj9),
                        children: hasOwnProperty(CircleXIcon.CircleXIcon, { size: "xs" }),
                      };
                      const intl5 = intl6.intl;
                      formatToPlainString = intl5.formatToPlainString;
                      obj9 = { text: obj12.getName(selectedUser) };
                      v0Vb9FQ = intl6.t["0Vb9FQ"];
                      obj12 = UserUtilsDefault;
                      tmp29 = hasOwnProperty(_false, obj7);
                    }
                    cResult[17] = selectedUser;
                    cResult[18] = setSelectedUser;
                    cResult[19] = tmp4.clearButton;
                    cResult[20] = tmp29;
                    tmp28 = tmp29;
                  }
                }
              }
            }
            const obj10 = {
              style: tmp6,
              onPress,
              accessibilityRole: "button",
              accessibilityLabel: tmp7,
              children: items1,
            };
            items1 = [tmp14, tmp17];
            const tmp27 = metroRequire(_false, obj10);
            cResult[11] = onPress;
            cResult[12] = tmp6;
            cResult[13] = tmp7;
            cResult[14] = tmp14;
            cResult[15] = tmp17;
            cResult[16] = tmp27;
            tmp24 = tmp27;
          }
        }
        if (null != selectedUser) {
          const obj11 = { style: tmp4.userPill, children: items2 };
          const obj13 = { user: selectedUser, guildId: "Array", size: native.AvatarSizes.XSMALL_20 };
          const Avatar = native.Avatar;
          items2 = [hasOwnProperty(Avatar, obj13)];
          const obj14 = { variant: "text-md/medium", style: tmp4.userPillText, children: obj8.getName(selectedUser) };
          const Text2 = Text_Text.Text;
          obj8 = UserUtilsDefault;
          items2[1] = hasOwnProperty(Text2, obj14);
          tmp19 = metroRequire(React3, obj11);
        } else {
          const obj15 = {
            variant: "text-sm/semibold",
            color: "text-subtle",
            style: tmp4.userPillText,
            children: intl4.string(intl6.t.R0vK0N),
          };
          const Text = Text_Text.Text;
          intl4 = intl6.intl;
          tmp19 = hasOwnProperty(Text, obj15);
        }
        cResult[7] = selectedUser;
        cResult[8] = tmp4.userPill;
        cResult[9] = tmp4.userPillText;
        cResult[10] = tmp19;
        tmp17 = tmp19;
      }
      const items3 = [tmp4.opener, null != selectedUser && tmp4.openerWithClearButton];
      cResult[0] = tmp4.opener;
      cResult[1] = null != selectedUser && tmp4.openerWithClearButton;
      cResult[2] = items3;
      tmp6 = items3;
    }
  : (onPress) => {
      let InputFieldContainer;
      let closure_129_0;
      let combined;
      let formatToPlainString;
      let intl4;
      let items1;
      let items2;
      let items3;
      let obj10;
      let obj12;
      let obj13;
      let obj14;
      let selectedUser;
      let tmp2Result1;
      let v0Vb9FQ;
      ({ selectedUser, setSelectedUser: closure_129_0 } = onPress);
      onPress = onPress.onPress;
      const tmp = closure_7();
      const items = [tmp.opener];
      let openerWithClearButton = null != selectedUser;
      const obj = { style: tmp.container, children: hasOwnProperty(InputFieldContainer, obj14) };
      const obj2 = { style: tmp.content, children: items3 };
      InputFieldContainer = InputFieldContainer2.InputFieldContainer;
      if (openerWithClearButton) {
        openerWithClearButton = tmp.openerWithClearButton;
      }
      const obj3 = {
        style: items,
        onPress,
        accessibilityRole: "button",
        accessibilityLabel: combined,
        children: items1,
      };
      items[1] = openerWithClearButton;
      if (null != selectedUser) {
        const intl3 = intl6.intl;
        const _HermesInternal2 = HermesInternal;
        const stringResult = intl3.string(intl6.t.xFn72s);
        const obj4 = UserUtilsDefault;
        combined = "" + stringResult + ", " + obj4.getName(selectedUser);
      } else {
        const intl = intl6.intl;
        const stringResult1 = intl.string(intl6.t.xFn72s);
        const intl2 = intl6.intl;
        const _HermesInternal = HermesInternal;
        combined = "" + stringResult1 + ", " + intl2.string(intl6.t.R0vK0N);
      }
      items1 = [,];
      const obj5 = { style: tmp.searchIcon, size: "xs", color: "interactive-text-default" };
      items1[0] = hasOwnProperty(MagnifyingGlassIcon.MagnifyingGlassIcon, obj5);
      if (null != selectedUser) {
        const obj6 = { style: tmp.userPill, children: items2 };
        const obj7 = { user: selectedUser, guildId: "Array", size: native.AvatarSizes.XSMALL_20 };
        const Avatar = native.Avatar;
        items2 = [hasOwnProperty(Avatar, obj7)];
        const obj8 = { variant: "text-md/medium", style: tmp.userPillText, children: obj10.getName(selectedUser) };
        const Text2 = Text_Text.Text;
        obj10 = UserUtilsDefault;
        items2[1] = hasOwnProperty(Text2, obj8);
        tmp2Result1 = metroRequire(React3, obj6);
      } else {
        const obj9 = {
          variant: "text-sm/semibold",
          color: "text-subtle",
          style: tmp.userPillText,
          children: intl4.string(intl6.t.R0vK0N),
        };
        const Text = Text_Text.Text;
        intl4 = intl6.intl;
        tmp2Result1 = hasOwnProperty(Text, obj9);
      }
      items1[1] = tmp2Result1;
      items3 = [metroRequire(_false, obj3)];
      let tmp2Result = null;
      if (null != selectedUser) {
        const obj11 = {
          style: tmp.clearButton,
          onPress() {
            return closure_1_0(undefined);
          },
          accessibilityRole: "button",
          accessibilityLabel: formatToPlainString(v0Vb9FQ, obj12),
          children: hasOwnProperty(CircleXIcon.CircleXIcon, { size: "xs" }),
        };
        const intl5 = intl6.intl;
        formatToPlainString = intl5.formatToPlainString;
        obj12 = { text: obj13.getName(selectedUser) };
        v0Vb9FQ = intl6.t["0Vb9FQ"];
        obj13 = UserUtilsDefault;
        tmp2Result = hasOwnProperty(_false, obj11);
      }
      items3[1] = tmp2Result;
      obj14 = { children: metroRequire(React3, obj2) };
      return hasOwnProperty(React3, obj);
    };
const result = size.fileFinishedImporting("modules/checkout/native/gifting/SelectedUserField.tsx");

export default tmp6;
