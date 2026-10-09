// === Module 10184: SelectedUserField ===

// Module 10184 (SelectedUserField)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import UserUtilsDefault from "UserUtils" /* 4923 */;
import CircleXIcon from "CircleXIcon" /* 4998 */;
import Text_Text from "Text/Text" /* 5087 */;
import InputFieldContainer from "InputFieldContainer" /* 6299 */;
import MagnifyingGlassIcon from "MagnifyingGlassIcon" /* 6738 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5091);
let obj2 = { container: { marginHorizontal: nativeDefault.space.PX_16 }, content: { flexDirection: "row", overflow: "hidden", alignItems: "center", display: "flex" }, opener: null, openerWithClearButton: null, searchIcon: null, userPill: null, userPillText: null, clearButton: null };
let obj3 = { marginHorizontal: nativeDefault.space.PX_16 };
obj2.opener = { flexDirection: "row", alignItems: "center", flex: 1, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: 6 };
obj2.openerWithClearButton = { paddingRight: 0 };
let obj4 = { flexDirection: "row", alignItems: "center", flex: 1, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: 6 };
obj2.searchIcon = { marginRight: nativeDefault.space.PX_8 };
let obj5 = { marginRight: nativeDefault.space.PX_8 };
obj2.userPill = { flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, paddingVertical: 6, paddingHorizontal: 6 };
obj2.userPillText = { marginLeft: 6 };
let obj6 = { flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, paddingVertical: 6, paddingHorizontal: 6 };
obj2.clearButton = { alignItems: "center", justifyContent: "center", minWidth: 44, minHeight: 44, paddingRight: nativeDefault.space.PX_16, paddingLeft: nativeDefault.space.PX_8 };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj7 = { alignItems: "center", justifyContent: "center", minWidth: 44, minHeight: 44, paddingRight: nativeDefault.space.PX_16, paddingLeft: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkout/native/gifting/SelectedUserField.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function SelectedUserField(arg0) {
  const cResult = c.c(28);
  ({ selectedUser, onPress, setSelectedUser } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] === tmp4.opener) {
    if (cResult[1] === tmp5) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] !== selectedUser) {
      if (null != selectedUser) {
        const intl3 = util.intl;
        const stringResult = intl3.string(util.t.xFn72s);
        const _HermesInternal2 = HermesInternal;
        let combined = "" + stringResult + ", " + UserUtilsDefault.getName(selectedUser);
      } else {
        const intl = util.intl;
        const intl2 = util.intl;
        const _HermesInternal = HermesInternal;
        combined = "" + intl.string(util.t.xFn72s) + ", " + intl2.string(util.t.R0vK0N);
        const stringResult1 = intl.string(util.t.xFn72s);
      }
      cResult[3] = selectedUser;
      cResult[4] = combined;
    } else {
      if (cResult[5] !== tmp4.searchIcon) {
        const obj3 = { style: tmp4.searchIcon, size: "xs", color: "interactive-text-default" };
        const tmp17 = hasOwnProperty(MagnifyingGlassIcon.MagnifyingGlassIcon, obj3);
        cResult[5] = tmp4.searchIcon;
        cResult[6] = tmp17;
        let tmp15 = tmp17;
      } else {
        tmp15 = cResult[6];
      }
      if (cResult[7] === selectedUser) {
        if (cResult[8] === tmp4.userPill) {
          if (cResult[9] === tmp4.userPillText) {
            if (cResult[11] === onPress) {
              if (cResult[12] === tmp6) {
                if (cResult[13] === tmp7) {
                  if (cResult[14] === tmp15) {
                    if (cResult[15] === tmp18) {
                      let tmp26 = cResult[16];
                    }
                    if (cResult[17] === selectedUser) {
                      if (cResult[18] === setSelectedUser) {
                        if (cResult[19] === tmp4.clearButton) {
                          let tmp30 = cResult[20];
                        }
                        if (cResult[21] === tmp4.content) {
                          if (cResult[22] === tmp26) {
                            if (cResult[23] === tmp30) {
                              let tmp35 = cResult[24];
                            }
                            if (cResult[25] === tmp4.container) {
                              if (cResult[26] === tmp35) {
                                let tmp40 = cResult[27];
                              }
                              return tmp40;
                            }
                            const obj4 = { style: tmp4.container, children: tmp35 };
                            const tmp43 = hasOwnProperty(React4, obj4);
                            cResult[25] = tmp4.container;
                            cResult[26] = tmp35;
                            cResult[27] = tmp43;
                            tmp40 = tmp43;
                          }
                        }
                        const obj5 = { children: null };
                        const obj6 = { style: tmp4.content, children: null };
                        const items = [tmp26, tmp30];
                        obj6.children = items;
                        obj5.children = timestampProducer(React4, obj6);
                        const tmp39 = hasOwnProperty(InputFieldContainer.InputFieldContainer, obj5);
                        cResult[21] = tmp4.content;
                        cResult[22] = tmp26;
                        cResult[23] = tmp30;
                        cResult[24] = tmp39;
                        tmp35 = tmp39;
                      }
                    }
                    let tmp31 = null;
                    if (null != selectedUser) {
                      const obj7 = {
                        style: tmp4.clearButton,
                        onPress() {
                                              return setSelectedUser(undefined);
                                            },
                        accessibilityRole: "button",
                        accessibilityLabel: null,
                        children: null
                      };
                      const intl5 = util.intl;
                      const obj9 = { text: UserUtilsDefault.getName(selectedUser) };
                      obj7.accessibilityLabel = intl5.formatToPlainString(util.t["0Vb9FQ"], obj9);
                      obj7.children = hasOwnProperty(CircleXIcon.CircleXIcon, { size: "xs" });
                      tmp31 = hasOwnProperty(React3, obj7);
                    }
                    cResult[17] = selectedUser;
                    cResult[18] = setSelectedUser;
                    cResult[19] = tmp4.clearButton;
                    cResult[20] = tmp31;
                    tmp30 = tmp31;
                  }
                }
              }
            }
            const obj10 = { style: tmp6, onPress, accessibilityRole: "button", accessibilityLabel: tmp7, children: null };
            const items1 = [tmp15, cResult[10]];
            obj10.children = items1;
            const tmp29 = timestampProducer(React3, obj10);
            cResult[11] = onPress;
            cResult[12] = tmp6;
            cResult[13] = tmp7;
            cResult[14] = tmp15;
            cResult[15] = cResult[10];
            cResult[16] = tmp29;
            tmp26 = tmp29;
          }
        }
      }
      if (null != selectedUser) {
        const obj11 = { style: tmp4.userPill, children: null };
        const obj13 = { user: selectedUser, guildId: "Array", size: native.AvatarSizes.XSMALL_20 };
        const items2 = [hasOwnProperty(native.Avatar, obj13), ];
        const obj14 = { variant: "text-md/medium", style: tmp4.userPillText, children: UserUtilsDefault.getName(selectedUser) };
        items2[1] = hasOwnProperty(Text_Text.Text, obj14);
        obj11.children = items2;
        let tmp20 = timestampProducer(React4, obj11);
      } else {
        const obj15 = { variant: "text-sm/semibold", color: "text-subtle", style: tmp4.userPillText, children: null };
        const intl4 = util.intl;
        obj15.children = intl4.string(util.t.R0vK0N);
        tmp20 = hasOwnProperty(Text_Text.Text, obj15);
      }
      cResult[7] = selectedUser;
      cResult[8] = tmp4.userPill;
      cResult[9] = tmp4.userPillText;
      cResult[10] = tmp20;
    }
  }
  const items3 = [tmp4.opener, null != selectedUser && tmp4.openerWithClearButton];
  cResult[0] = tmp4.opener;
  cResult[1] = null != selectedUser && tmp4.openerWithClearButton;
  cResult[2] = items3;
  tmp6 = items3;
}) : (function SelectedUserField(onPress) {
  ({ selectedUser, setSelectedUser: require } = onPress);
  const tmp = closure_7();
  const obj = { style: tmp.container, children: null };
  const obj2 = { style: tmp.content, children: null };
  const items = [tmp.opener, ];
  let openerWithClearButton = null != selectedUser;
  if (openerWithClearButton) {
    openerWithClearButton = tmp.openerWithClearButton;
  }
  const obj3 = { style: items, onPress: onPress.onPress, accessibilityRole: "button", accessibilityLabel: null, children: null };
  items[1] = openerWithClearButton;
  if (null != selectedUser) {
    const intl3 = util.intl;
    const stringResult = intl3.string(util.t.xFn72s);
    const _HermesInternal2 = HermesInternal;
    let combined = "" + stringResult + ", " + UserUtilsDefault.getName(selectedUser);
  } else {
    const intl = util.intl;
    const intl2 = util.intl;
    const _HermesInternal = HermesInternal;
    combined = "" + intl.string(util.t.xFn72s) + ", " + intl2.string(util.t.R0vK0N);
    const stringResult1 = intl.string(util.t.xFn72s);
  }
  obj3.accessibilityLabel = combined;
  const items1 = [hasOwnProperty(MagnifyingGlassIcon.MagnifyingGlassIcon, { style: tmp.searchIcon, size: "xs", color: "interactive-text-default" }), ];
  if (null != selectedUser) {
    const obj6 = { style: tmp.userPill, children: null };
    const obj7 = { user: selectedUser, guildId: "Array", size: native.AvatarSizes.XSMALL_20 };
    const items2 = [hasOwnProperty(native.Avatar, obj7), ];
    const obj8 = { variant: "text-md/medium", style: tmp.userPillText, children: UserUtilsDefault.getName(selectedUser) };
    items2[1] = hasOwnProperty(Text_Text.Text, obj8);
    obj6.children = items2;
    let tmp2Result1 = timestampProducer(React4, obj6);
  } else {
    const obj9 = { variant: "text-sm/semibold", color: "text-subtle", style: tmp.userPillText, children: null };
    const intl4 = util.intl;
    obj9.children = intl4.string(util.t.R0vK0N);
    tmp2Result1 = hasOwnProperty(Text_Text.Text, obj9);
  }
  items1[1] = tmp2Result1;
  obj3.children = items1;
  const items3 = [timestampProducer(React3, obj3), ];
  let tmp2Result = null;
  if (null != selectedUser) {
    const obj11 = {
      style: tmp.clearButton,
      onPress() {
          return require(undefined);
        },
      accessibilityRole: "button",
      accessibilityLabel: null,
      children: null
    };
    const intl5 = util.intl;
    const obj12 = { text: UserUtilsDefault.getName(selectedUser) };
    obj11.accessibilityLabel = intl5.formatToPlainString(util.t["0Vb9FQ"], obj12);
    obj11.children = hasOwnProperty(CircleXIcon.CircleXIcon, { size: "xs" });
    tmp2Result = hasOwnProperty(React3, obj11);
  }
  items3[1] = tmp2Result;
  obj2.children = items3;
  obj.children = hasOwnProperty(InputFieldContainer.InputFieldContainer, { children: timestampProducer(React4, obj2) });
  return hasOwnProperty(React4, obj);
});