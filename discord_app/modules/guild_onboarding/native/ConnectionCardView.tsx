// === Module 6866: ConnectionCardView ===

// Module 6866 (ConnectionCardView)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5088 */;
import components_Button_Button from "components/Button/Button" /* 5379 */;
import CircleCheckIcon from "CircleCheckIcon" /* 6867 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, ActivityIndicator: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5092);
let obj2 = { card: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, padding: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, leftContent: null, icon: null, textContent: null, connectedStatus: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, padding: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj2.leftContent = { flexDirection: "row", alignItems: "center", flex: 1, marginRight: nativeDefault.space.PX_12 };
let size = { width: 32, height: 32, marginRight: nativeDefault.space.PX_12, justifyContent: "center", alignItems: "center" };
obj2.icon = size;
obj2.textContent = { flex: 1 };
let obj4 = { flexDirection: "row", alignItems: "center", flex: 1, marginRight: nativeDefault.space.PX_12 };
obj2.connectedStatus = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding/native/ConnectionCardView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConnectionCardView(arg0) {
  const cResult = c.c(25);
  ({ displayName, description, icon, isLoading, isConnected, canConnect, onConnect } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === icon) {
    if (cResult[1] === tmp4.icon) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] !== displayName) {
      const obj2 = { variant: "text-md/medium", color: "text-strong", children: displayName };
      const tmp9 = React4(Text_Text.Text, obj2);
      cResult[3] = displayName;
      cResult[4] = tmp9;
      let tmp7 = tmp9;
    } else {
      tmp7 = cResult[4];
    }
    if (cResult[5] !== description) {
      let tmp12 = null != description;
      if (tmp12) {
        tmp12 = description.length > 0;
      }
      if (tmp12) {
        const obj3 = { variant: "text-sm/normal", color: "text-subtle", children: description };
        tmp12 = React4(Text_Text.Text, obj3);
      }
      cResult[5] = description;
      cResult[6] = tmp12;
      let tmp10 = tmp12;
    } else {
      tmp10 = cResult[6];
    }
    if (cResult[7] === tmp4.textContent) {
      if (cResult[8] === tmp7) {
        if (cResult[9] === tmp10) {
          let tmp14 = cResult[10];
        }
        if (cResult[11] === tmp4.leftContent) {
          if (cResult[12] === tmp5) {
            if (cResult[13] === tmp14) {
              let tmp18 = cResult[14];
            }
            if (cResult[15] === canConnect) {
              if (cResult[16] === isConnected) {
                if (cResult[17] === isLoading) {
                  if (cResult[18] === onConnect) {
                    if (cResult[19] === tmp4.connectedStatus) {
                      if (cResult[21] === tmp4.card) {
                        if (cResult[22] === tmp18) {
                          if (cResult[23] === tmp22) {
                            let tmp31 = cResult[24];
                          }
                          return tmp31;
                        }
                      }
                      const obj4 = { style: tmp4.card, children: null };
                      const items = [tmp18, cResult[20]];
                      obj4.children = items;
                      const tmp34 = hasOwnProperty(React2, obj4);
                      cResult[21] = tmp4.card;
                      cResult[22] = tmp18;
                      cResult[23] = cResult[20];
                      cResult[24] = tmp34;
                      tmp31 = tmp34;
                    }
                  }
                }
              }
            }
            if (isLoading) {
              let tmp24 = React4(React3, { size: "small" });
            } else if (isConnected) {
              const obj5 = { style: tmp4.connectedStatus, children: null };
              const obj6 = { variant: "text-sm/medium", color: "text-feedback-positive", children: null };
              const intl2 = util.intl;
              obj6.children = intl2.string(util.t["LV+CXH"]);
              const items1 = [React4(Text_Text.Text, obj6), React4(CircleCheckIcon.CircleCheckIcon, { size: "sm", color: "status-positive" })];
              obj5.children = items1;
              tmp24 = hasOwnProperty(React2, obj5);
            } else {
              const obj7 = { variant: "primary", size: "sm", onPress: onConnect, text: null, disabled: null };
              const intl = util.intl;
              obj7.text = intl.string(util.t.S0W8Z5);
              obj7.disabled = !canConnect;
              tmp24 = React4(components_Button_Button.Button, obj7);
            }
            cResult[15] = canConnect;
            cResult[16] = isConnected;
            cResult[17] = isLoading;
            cResult[18] = onConnect;
            onConnect = tmp4.connectedStatus;
            cResult[19] = onConnect;
            cResult[20] = tmp24;
          }
        }
        const obj8 = { style: tmp4.leftContent, children: null };
        const items2 = [tmp5, tmp14];
        obj8.children = items2;
        const tmp21 = hasOwnProperty(React2, obj8);
        cResult[11] = tmp4.leftContent;
        cResult[12] = tmp5;
        cResult[13] = tmp14;
        cResult[14] = tmp21;
        tmp18 = tmp21;
      }
    }
    const obj9 = { style: tmp4.textContent, children: null };
    const items3 = [tmp7, tmp10];
    obj9.children = items3;
    const tmp17 = hasOwnProperty(React2, obj9);
    cResult[7] = tmp4.textContent;
    cResult[8] = tmp7;
    cResult[9] = tmp10;
    cResult[10] = tmp17;
    tmp14 = tmp17;
  }
  const tmp6 = React4(React2, { style: tmp4.icon, children: icon });
  cResult[0] = icon;
  cResult[1] = tmp4.icon;
  cResult[2] = tmp6;
  tmp5 = tmp6;
  const obj10 = { style: tmp4.icon, children: icon };
}) : (function ConnectionCardView(description) {
  description = description.description;
  ({ displayName, icon, isLoading, isConnected, canConnect, onConnect } = description);
  const tmp = closure_6();
  const obj = { style: tmp.card, children: null };
  const obj2 = { style: tmp.leftContent, children: null };
  const items = [React4(React2, { style: tmp.icon, children: icon }), ];
  const obj4 = { style: tmp.textContent, children: null };
  const items1 = [React4(Text_Text.Text, { variant: "text-md/medium", color: "text-strong", children: displayName }), ];
  let tmp4Result = null != description;
  if (tmp4Result) {
    tmp4Result = description.length > 0;
  }
  if (tmp4Result) {
    const obj5 = { variant: "text-sm/normal", color: "text-subtle", children: description };
    tmp4Result = React4(Text_Text.Text, obj5);
  }
  items1[1] = tmp4Result;
  obj4.children = items1;
  items[1] = hasOwnProperty(React2, obj4);
  obj2.children = items;
  const items2 = [hasOwnProperty(React2, obj2), ];
  if (isLoading) {
    let tmp4Result2 = React4(React3, { size: "small" });
  } else if (isConnected) {
    const obj6 = { style: tmp.connectedStatus, children: null };
    const obj7 = { variant: "text-sm/medium", color: "text-feedback-positive", children: null };
    const intl2 = util.intl;
    obj7.children = intl2.string(util.t["LV+CXH"]);
    const items3 = [React4(Text_Text.Text, obj7), React4(CircleCheckIcon.CircleCheckIcon, { size: "sm", color: "status-positive" })];
    obj6.children = items3;
    tmp4Result2 = hasOwnProperty(React2, obj6);
  } else {
    const obj8 = { variant: "primary", size: "sm", onPress: onConnect, text: null, disabled: null };
    const intl = util.intl;
    obj8.text = intl.string(util.t.S0W8Z5);
    obj8.disabled = !canConnect;
    tmp4Result2 = React4(components_Button_Button.Button, obj8);
  }
  items2[1] = tmp4Result2;
  obj.children = items2;
  return hasOwnProperty(React2, obj);
});