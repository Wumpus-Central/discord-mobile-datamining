// === Module 6672: ConnectionCardView ===

// Module 6672 (ConnectionCardView)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import CircleCheckIcon from "CircleCheckIcon" /* 4792 */;
import Text_Text from "Text/Text" /* 4886 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let size;
({ View: c2, ActivityIndicator: c3 } = react_native);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: obj2, leftContent: obj3, icon: size, textContent: { flex: 1 }, connectedStatus: obj4 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, padding: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", flex: 1, marginRight: nativeDefault.space.PX_12 };
size = { width: 32, height: 32, marginRight: nativeDefault.space.PX_12, justifyContent: "center", alignItems: "center" };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_6 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let canConnect;
  let description;
  let displayName;
  let icon;
  let intl;
  let intl2;
  let isConnected;
  let isLoading;
  let items;
  let items1;
  let items2;
  let items3;
  let onConnect;
  const obj = react2;
  const cResult = obj.c(25);
  ({ displayName, description, icon, isLoading, isConnected, canConnect, onConnect } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === icon) {
    let tmp5;
    let tmp7;
    let tmp10;
    if (cResult[1] === tmp4.icon) {
      tmp5 = cResult[2];
    }
    if (cResult[3] !== displayName) {
      const obj2 = { variant: "text-md/medium", color: "text-strong", children: displayName };
      const tmp9 = React3(Text_Text.Text, obj2);
      cResult[3] = displayName;
      cResult[4] = tmp9;
      tmp7 = tmp9;
    } else {
      tmp7 = cResult[4];
    }
    if (cResult[5] !== description) {
      let tmp12 = null != description && description.length > 0;
      if (tmp12) {
        const obj3 = { variant: "text-sm/normal", color: "text-subtle", children: description };
        tmp12 = React3(Text_Text.Text, obj3);
      }
      cResult[5] = description;
      cResult[6] = tmp12;
      tmp10 = tmp12;
    } else {
      tmp10 = cResult[6];
    }
    if (cResult[7] === tmp4.textContent) {
      if (cResult[8] === tmp7) {
        let tmp14;
        if (cResult[9] === tmp10) {
          tmp14 = cResult[10];
        }
        if (cResult[11] === tmp4.leftContent) {
          if (cResult[12] === tmp5) {
            let tmp18;
            let tmp24;
            if (cResult[13] === tmp14) {
              tmp18 = cResult[14];
            }
            if (cResult[15] === canConnect) {
              if (cResult[16] === isConnected) {
                if (cResult[17] === isLoading) {
                  if (cResult[18] === onConnect) {
                    let tmp22;
                    if (cResult[19] === tmp4.connectedStatus) {
                      tmp22 = cResult[20];
                    }
                    if (cResult[21] === tmp4.card) {
                      if (cResult[22] === tmp18) {
                        let tmp30;
                        if (cResult[23] === tmp22) {
                          tmp30 = cResult[24];
                        }
                        return tmp30;
                      }
                    }
                    const obj4 = { style: tmp4.card, children: items };
                    items = [tmp18, tmp22];
                    const tmp33 = hasOwnProperty(React2, obj4);
                    cResult[21] = tmp4.card;
                    cResult[22] = tmp18;
                    cResult[23] = tmp22;
                    cResult[24] = tmp33;
                    tmp30 = tmp33;
                  }
                }
              }
            }
            if (isLoading) {
              tmp24 = React3(_false, { size: "small" });
            } else if (isConnected) {
              const obj5 = { style: tmp4.connectedStatus, children: items1 };
              const obj6 = { variant: "text-sm/medium", color: "text-feedback-positive", children: intl2.string(intl3.t["LV+CXH"]) };
              const Text = Text_Text.Text;
              intl2 = intl3.intl;
              items1 = [React3(Text, obj6), React3(CircleCheckIcon.CircleCheckIcon, { size: "sm", color: "status-positive" })];
              tmp24 = hasOwnProperty(React2, obj5);
            } else {
              const obj7 = { variant: "primary", size: "sm", onPress: onConnect, text: intl.string(intl3.t.S0W8Z5), disabled: !canConnect };
              const Button = components_Button_Button.Button;
              intl = intl3.intl;
              tmp24 = React3(Button, obj7);
            }
            cResult[15] = canConnect;
            cResult[16] = isConnected;
            cResult[17] = isLoading;
            cResult[18] = onConnect;
            cResult[19] = tmp4.connectedStatus;
            cResult[20] = tmp24;
            tmp22 = tmp24;
          }
        }
        const obj8 = { style: tmp4.leftContent, children: items2 };
        items2 = [tmp5, tmp14];
        const tmp21 = hasOwnProperty(React2, obj8);
        cResult[11] = tmp4.leftContent;
        cResult[12] = tmp5;
        cResult[13] = tmp14;
        cResult[14] = tmp21;
        tmp18 = tmp21;
      }
    }
    const obj9 = { style: tmp4.textContent, children: items3 };
    items3 = [tmp7, tmp10];
    const tmp17 = hasOwnProperty(React2, obj9);
    cResult[7] = tmp4.textContent;
    cResult[8] = tmp7;
    cResult[9] = tmp10;
    cResult[10] = tmp17;
    tmp14 = tmp17;
  }
  const obj10 = { style: tmp4.icon, children: icon };
  const tmp6 = React3(React2, obj10);
  cResult[0] = icon;
  cResult[1] = tmp4.icon;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : ((description) => {
  let canConnect;
  let displayName;
  let icon;
  let intl;
  let intl2;
  let isConnected;
  let isLoading;
  let items;
  let items1;
  let items2;
  let items3;
  let onConnect;
  let tmp4Result2;
  description = description.description;
  ({ displayName, icon, isLoading, isConnected, canConnect, onConnect } = description);
  const tmp = closure_6();
  const obj2 = { style: tmp.leftContent, children: items };
  items = [, ];
  const obj = { style: tmp.card, children: items2 };
  const obj3 = { style: tmp.icon, children: icon };
  items[0] = React3(React2, obj3);
  const obj4 = { style: tmp.textContent, children: items1 };
  items1 = [React3(Text_Text.Text, { variant: "text-md/medium", color: "text-strong", children: displayName }), ];
  let tmp4Result = null != description && description.length > 0;
  if (tmp4Result) {
    const obj5 = { variant: "text-sm/normal", color: "text-subtle", children: description };
    tmp4Result = React3(Text_Text.Text, obj5);
  }
  items1[1] = tmp4Result;
  items[1] = hasOwnProperty(React2, obj4);
  items2 = [hasOwnProperty(React2, obj2), ];
  if (isLoading) {
    tmp4Result2 = React3(_false, { size: "small" });
  } else if (isConnected) {
    const obj6 = { style: tmp.connectedStatus, children: items3 };
    const obj7 = { variant: "text-sm/medium", color: "text-feedback-positive", children: intl2.string(intl3.t["LV+CXH"]) };
    const Text = Text_Text.Text;
    intl2 = intl3.intl;
    items3 = [React3(Text, obj7), React3(CircleCheckIcon.CircleCheckIcon, { size: "sm", color: "status-positive" })];
    tmp4Result2 = hasOwnProperty(React2, obj6);
  } else {
    const obj8 = { variant: "primary", size: "sm", onPress: onConnect, text: intl.string(intl3.t.S0W8Z5), disabled: !canConnect };
    const Button = components_Button_Button.Button;
    intl = intl3.intl;
    tmp4Result2 = React3(Button, obj8);
  }
  items2[1] = tmp4Result2;
  return hasOwnProperty(React2, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_onboarding/native/ConnectionCardView.tsx");

export default tmp6;