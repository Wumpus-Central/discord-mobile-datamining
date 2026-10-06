// === Module 5934: MemberVerificationAlert ===

// Module 5934 (MemberVerificationAlert)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4892 */;
import AlertDefault from "Alert" /* 5790 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let closure_3 = ["header", "icon", "subtitle", "buttons"];
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { headerImage: obj2, header: { marginTop: 8, marginBottom: 8, textAlign: "center" }, subtitle: { lineHeight: 18, marginBottom: 8, textAlign: "center" }, buttons: { marginTop: 16, marginBottom: 8, gap: 12 } };
obj2 = { marginLeft: "auto", marginRight: "auto", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.round, padding: 12, marginTop: 8, marginBottom: 8 };
let closure_8 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let buttons;
  let header;
  let icon;
  let items;
  let subtitle;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(24);
  if (cResult[0] !== arg0) {
    ({ header, icon, subtitle, buttons } = arg0);
    const tmp11 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = icon;
    cResult[2] = buttons;
    cResult[3] = header;
    cResult[4] = tmp11;
    cResult[5] = subtitle;
    tmp8 = subtitle;
    tmp7 = tmp11;
    tmp6 = header;
    tmp5 = buttons;
    tmp4 = icon;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
  }
  const tmp12 = closure_8();
  if (cResult[6] === tmp4) {
    let tmp13;
    if (cResult[7] === tmp12.headerImage) {
      tmp13 = cResult[8];
    }
    if (cResult[9] === tmp6) {
      let tmp17;
      if (cResult[10] === tmp12.header) {
        tmp17 = cResult[11];
      }
      if (cResult[12] === tmp12.subtitle) {
        let tmp20;
        if (cResult[13] === tmp8) {
          tmp20 = cResult[14];
        }
        if (cResult[15] === tmp5) {
          let tmp23;
          if (cResult[16] === tmp12.buttons) {
            tmp23 = cResult[17];
          }
          if (cResult[18] === tmp7) {
            if (cResult[19] === tmp13) {
              if (cResult[20] === tmp17) {
                if (cResult[21] === tmp20) {
                  let tmp27;
                  if (cResult[22] === tmp23) {
                    tmp27 = cResult[23];
                  }
                  return tmp27;
                }
              }
            }
          }
          const obj2 = { noDefaultButtons: true, children: items };
          const tmp30 = AlertDefault;
          const merged = Object.assign(tmp7);
          items = [tmp13, tmp17, tmp20, tmp23];
          const tmp34 = metroImportDefault(tmp30, obj2);
          cResult[18] = tmp7;
          cResult[19] = tmp13;
          cResult[20] = tmp17;
          cResult[21] = tmp20;
          cResult[22] = tmp23;
          cResult[23] = tmp34;
          tmp27 = tmp34;
        }
        const obj3 = { style: tmp12.buttons, children: tmp5 };
        const tmp26 = metroRequire(View, obj3);
        cResult[15] = tmp5;
        cResult[16] = tmp12.buttons;
        cResult[17] = tmp26;
        tmp23 = tmp26;
      }
      let tmp21 = null;
      if (null != tmp8) {
        const obj4 = { style: tmp12.subtitle, variant: "text-sm/medium", color: "text-default", children: tmp8 };
        tmp21 = metroRequire(Text_Text.Text, obj4);
      }
      cResult[12] = tmp12.subtitle;
      cResult[13] = tmp8;
      cResult[14] = tmp21;
      tmp20 = tmp21;
    }
    const obj5 = { style: tmp12.header, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: tmp6 };
    const tmp19 = metroRequire(Text_Text.Heading, obj5);
    cResult[9] = tmp6;
    cResult[10] = tmp12.header;
    cResult[11] = tmp19;
    tmp17 = tmp19;
  }
  let tmp14 = null;
  if (null != tmp4) {
    const obj6 = { style: tmp12.headerImage, children: metroRequire(tmp4, { size: "lg" }) };
    tmp14 = metroRequire(View, obj6);
  }
  cResult[6] = tmp4;
  cResult[7] = tmp12.headerImage;
  cResult[8] = tmp14;
  tmp13 = tmp14;
}) : ((arg0) => {
  let buttons;
  let header;
  let icon;
  let items;
  let subtitle;
  ({ icon, subtitle } = arg0);
  ({ header, buttons } = arg0);
  const merged = Object.assign(arg0, Object.assign({ header: 0, icon: 0, subtitle: 0, buttons: 0 }));
  const tmp2 = closure_8();
  const obj = { noDefaultButtons: true, children: items };
  const tmp5 = AlertDefault;
  const merged1 = Object.assign(merged);
  let tmp7 = null;
  if (null != icon) {
    const obj2 = { style: tmp2.headerImage, children: metroRequire(icon, { size: "lg" }) };
    tmp7 = metroRequire(View, obj2);
  }
  items = [tmp7, , , ];
  const obj3 = { style: tmp2.header, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: header };
  items[1] = metroRequire(Text_Text.Heading, obj3);
  let tmp10Result = null;
  if (null != subtitle) {
    const obj4 = { style: tmp2.subtitle, variant: "text-sm/medium", color: "text-default", children: subtitle };
    tmp10Result = metroRequire(Text_Text.Text, obj4);
  }
  items[2] = tmp10Result;
  const obj5 = { style: tmp2.buttons, children: buttons };
  items[3] = metroRequire(View, obj5);
  return metroImportDefault(tmp5, obj);
});
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlert.tsx");

export default tmp4;