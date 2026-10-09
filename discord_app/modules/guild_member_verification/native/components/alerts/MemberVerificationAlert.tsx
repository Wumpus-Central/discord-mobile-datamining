// === Module 6119: MemberVerificationAlert ===

// Module 6119 (MemberVerificationAlert)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5087 */;
import common_AlertDefault from "common/Alert" /* 5395 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["header", "icon", "subtitle", "buttons"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { headerImage: { marginLeft: "auto", marginRight: "auto", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.round, padding: 12, marginTop: 8, marginBottom: 8 }, header: { marginTop: 8, marginBottom: 8, textAlign: "center" }, subtitle: { lineHeight: 18, marginBottom: 8, textAlign: "center" }, buttons: { marginTop: 16, marginBottom: 8, gap: 12 } };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { marginLeft: "auto", marginRight: "auto", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.round, padding: 12, marginTop: 8, marginBottom: 8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlert.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function MemberVerificationAlert(arg0) {
  const cResult = c.c(24);
  if (cResult[0] !== arg0) {
    ({ header, icon, subtitle, buttons } = arg0);
    const tmp11 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = icon;
    cResult[2] = buttons;
    cResult[3] = header;
    cResult[4] = tmp11;
    cResult[5] = subtitle;
    let tmp8 = subtitle;
    let tmp7 = tmp11;
    let tmp6 = header;
    let tmp5 = buttons;
    let tmp4 = icon;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
  }
  const tmp12 = closure_8();
  if (cResult[6] === tmp4) {
    if (cResult[7] === tmp12.headerImage) {
      let tmp13 = cResult[8];
    }
    if (cResult[9] === tmp6) {
      if (cResult[10] === tmp12.header) {
        let tmp17 = cResult[11];
      }
      if (cResult[12] === tmp12.subtitle) {
        if (cResult[13] === tmp8) {
          let tmp20 = cResult[14];
        }
        if (cResult[15] === tmp5) {
          if (cResult[16] === tmp12.buttons) {
            let tmp23 = cResult[17];
          }
          if (cResult[18] === tmp7) {
            if (cResult[19] === tmp13) {
              if (cResult[20] === tmp17) {
                if (cResult[21] === tmp20) {
                  if (cResult[22] === tmp23) {
                    let tmp27 = cResult[23];
                  }
                  return tmp27;
                }
              }
            }
          }
          const obj2 = {};
          const merged = Object.assign(tmp7);
          obj2.noDefaultButtons = true;
          const items = [tmp13, tmp17, tmp20, tmp23];
          obj2.children = items;
          const tmp34 = React5(common_AlertDefault, obj2);
          cResult[18] = tmp7;
          cResult[19] = tmp13;
          cResult[20] = tmp17;
          cResult[21] = tmp20;
          cResult[22] = tmp23;
          cResult[23] = tmp34;
          tmp27 = tmp34;
        }
        const obj3 = { style: tmp12.buttons, children: tmp5 };
        const tmp26 = timestampProducer(View, obj3);
        cResult[15] = tmp5;
        cResult[16] = tmp12.buttons;
        cResult[17] = tmp26;
        tmp23 = tmp26;
      }
      let tmp21 = null;
      if (null != tmp8) {
        const obj4 = { style: tmp12.subtitle, variant: "text-sm/medium", color: "text-default", children: tmp8 };
        tmp21 = timestampProducer(Text_Text.Text, obj4);
      }
      cResult[12] = tmp12.subtitle;
      cResult[13] = tmp8;
      cResult[14] = tmp21;
      tmp20 = tmp21;
    }
    const obj5 = { style: tmp12.header, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: tmp6 };
    const tmp19 = timestampProducer(Text_Text.Heading, obj5);
    cResult[9] = tmp6;
    cResult[10] = tmp12.header;
    cResult[11] = tmp19;
    tmp17 = tmp19;
  }
  let tmp14 = null;
  if (null != tmp4) {
    const obj6 = { style: tmp12.headerImage, children: timestampProducer(tmp4, { size: "lg" }) };
    tmp14 = timestampProducer(View, obj6);
  }
  cResult[6] = tmp4;
  cResult[7] = tmp12.headerImage;
  cResult[8] = tmp14;
  tmp13 = tmp14;
}) : (function MemberVerificationAlert(arg0) {
  ({ icon, subtitle } = arg0);
  ({ header, buttons } = arg0);
  const merged = Object.assign(arg0, Object.assign({ header: 0, icon: 0, subtitle: 0, buttons: 0 }));
  const tmp2 = closure_8();
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.noDefaultButtons = true;
  let tmp7 = null;
  if (null != icon) {
    const obj2 = { style: tmp2.headerImage, children: timestampProducer(icon, { size: "lg" }) };
    tmp7 = timestampProducer(View, obj2);
  }
  const items = [tmp7, timestampProducer(Text_Text.Heading, { style: tmp2.header, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: header }), , ];
  let tmp10Result = null;
  if (null != subtitle) {
    const obj4 = { style: tmp2.subtitle, variant: "text-sm/medium", color: "text-default", children: subtitle };
    tmp10Result = timestampProducer(Text_Text.Text, obj4);
  }
  items[2] = tmp10Result;
  items[3] = timestampProducer(View, { style: tmp2.buttons, children: buttons });
  obj.children = items;
  return React5(common_AlertDefault, obj);
});