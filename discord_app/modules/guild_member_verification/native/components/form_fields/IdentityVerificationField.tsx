// discord_app/modules/guild_member_verification/native/components/form_fields/IdentityVerificationField.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import MemberVerificationTypes from "../../../MemberVerificationTypes.tsx";
import EnvelopeIcon from "../../../../../design/components/Icon/native/redesign/generated/EnvelopeIcon.tsx";
import MobilePhoneIcon2 from "../../../../../design/components/Icon/native/redesign/generated/MobilePhoneIcon.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const CheckmarkLargeIcon2 = CheckmarkLargeIcon(4583);
const Text_Text = CheckmarkLargeIcon(4892);
const components_Button_Button = CheckmarkLargeIcon(5601);
require = fn;
function getLabel(arg0, arg1) {
  if (MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL === arg0) {
    const intl3 = util.intl;
    const string2 = intl3.string;
    const t2 = util.t;
    if (arg1) {
      let string2Result = string2(t2.INsLgA);
    } else {
      string2Result = string2(t2.c6EUJI);
    }
    return string2Result;
  } else if (MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE === arg0) {
    const intl2 = util.intl;
    const string = intl2.string;
    const t = util.t;
    if (arg1) {
      let stringResult = string(t["xO2XI/"]);
    } else {
      stringResult = string(t.woMjLV);
    }
    return stringResult;
  } else {
    const intl = util.intl;
    return intl.string(util.t.mhv8BM);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  container: {
    padding: 8,
    marginTop: 8,
    borderRadius: nativeDefault.radii.sm,
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  },
  icon: { marginLeft: 4, marginRight: 8 },
  label: { flex: 1, marginLeft: 4, lineHeight: 20 },
  verifiedContainer: { paddingVertical: 7, paddingHorizontal: 4, flexDirection: "row", alignItems: "center" },
  ctaButton: { flexGrow: 0, alignSelf: "center", paddingHorizontal: 16 },
};
let closure_6 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let CheckmarkLargeIcon = require;
      let tmp = dependencyMap;
      const cResult = c.c(18);
      ({ label, passesVerification: verifiedContainer, onPress, icon } = arg0);
      const tmp3 = closure_6();
      if (cResult[0] === icon) {
        if (cResult[1] === tmp3.icon) {
          let tmp4 = cResult[2];
        }
        if (cResult[3] !== tmp3.label) {
          const items = [tmp3.label];
          cResult[3] = tmp3.label;
          cResult[4] = items;
          let tmp7 = items;
        } else {
          tmp7 = cResult[4];
        }
        if (cResult[5] === label) {
          if (cResult[6] === tmp7) {
            let tmp8 = cResult[7];
          }
          if (cResult[8] === onPress) {
            if (cResult[9] === verifiedContainer) {
              if (cResult[10] === tmp3.ctaButton) {
                if (cResult[11] === tmp3.verifiedContainer) {
                  if (cResult[13] === tmp3.container) {
                    if (cResult[14] === tmp4) {
                      if (cResult[15] === tmp8) {
                        if (cResult[16] === tmp11) {
                          let tmp16 = cResult[17];
                        }
                        return tmp16;
                      }
                    }
                  }
                  const obj2 = { style: tmp3.container, children: null };
                  const items1 = [tmp4, tmp8, cResult[12]];
                  obj2.children = items1;
                  const tmp19 = hasOwnProperty(View, obj2);
                  cResult[13] = tmp3.container;
                  cResult[14] = tmp4;
                  cResult[15] = tmp8;
                  cResult[16] = cResult[12];
                  cResult[17] = tmp19;
                  tmp16 = tmp19;
                }
              }
            }
          }
          if (verifiedContainer) {
            const obj3 = { style: tmp3.verifiedContainer, accessible: true, accessibilityLabel: null, children: null };
            const intl2 = util.intl;
            obj3.accessibilityLabel = intl2.string(util.t.g62IJl);
            CheckmarkLargeIcon = CheckmarkLargeIcon2.CheckmarkLargeIcon;
            tmp = React4(CheckmarkLargeIcon, { color: "status-positive" });
            obj3.children = tmp;
            let obj4 = obj3;
          } else {
            obj4 = { style: tmp3.ctaButton, children: null };
            const obj5 = { variant: "primary", size: "sm", grow: true, text: null, onPress: null };
            const intl = util.intl;
            obj5.text = intl.string(util.t["13ofGu"]);
            obj5.onPress = onPress;
            obj4.children = React4(components_Button_Button.Button, obj5);
          }
          const tmp12Result = React4(View, obj4);
          cResult[8] = onPress;
          cResult[9] = verifiedContainer;
          ({ ctaButton: tmp2[10], verifiedContainer } = tmp3);
          cResult[11] = verifiedContainer;
          cResult[12] = tmp12Result;
        }
        const obj6 = { style: tmp7, variant: "text-md/medium", color: "mobile-text-heading-primary", children: label };
        const tmp10 = React4(Text_Text.Text, obj6);
        cResult[5] = label;
        cResult[6] = tmp7;
        cResult[7] = tmp10;
        tmp8 = tmp10;
      }
      let tmp5 = null;
      if (null != icon) {
        const obj7 = { style: tmp3.icon };
        tmp5 = React4(icon, obj7);
      }
      cResult[0] = icon;
      cResult[1] = tmp3.icon;
      cResult[2] = tmp5;
      tmp4 = tmp5;
    }
  : (icon) => {
      icon = icon.icon;
      ({ label, passesVerification, onPress } = icon);
      const tmp = closure_6();
      const obj = { style: tmp.container, children: null };
      let tmp4 = null;
      if (null != icon) {
        const obj2 = { style: tmp.icon };
        tmp4 = React4(icon, obj2);
      }
      const items = [tmp4, ,];
      const obj3 = { style: null, variant: "text-md/medium", color: "mobile-text-heading-primary", children: label };
      const items1 = [tmp.label];
      obj3.style = items1;
      items[1] = React4(Text_Text.Text, obj3);
      if (passesVerification) {
        const obj4 = { style: tmp.verifiedContainer, accessible: true, accessibilityLabel: null, children: null };
        const intl2 = util.intl;
        obj4.accessibilityLabel = intl2.string(util.t.g62IJl);
        obj4.children = React4(CheckmarkLargeIcon2.CheckmarkLargeIcon, { color: "status-positive" });
        let obj5 = obj4;
      } else {
        obj5 = { style: tmp.ctaButton, children: null };
        const obj6 = { variant: "primary", size: "sm", grow: true, text: null, onPress: null };
        const intl = util.intl;
        obj6.text = intl.string(util.t["13ofGu"]);
        obj6.onPress = onPress;
        obj5.children = React4(components_Button_Button.Button, obj6);
      }
      items[2] = React4(View, obj5);
      obj.children = items;
      return hasOwnProperty(View, obj);
    };
ReactCompilerGating = fn(558);
let obj3 = {
  padding: 8,
  marginTop: 8,
  borderRadius: nativeDefault.radii.sm,
  height: 48,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_member_verification/native/components/form_fields/IdentityVerificationField.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(12);
      ({ platform, passesVerification } = arg0);
      if (cResult[0] === passesVerification) {
        if (cResult[1] === platform) {
          let tmp4 = cResult[2];
        }
        if (cResult[3] !== platform) {
          if (MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL === platform) {
            let MobilePhoneIcon = EnvelopeIcon.EnvelopeIcon;
            cResult[3] = platform;
            cResult[4] = MobilePhoneIcon;
          } else if (MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE !== platform) {
            MobilePhoneIcon = EnvelopeIcon.EnvelopeIcon;
          }
          MobilePhoneIcon = MobilePhoneIcon2.MobilePhoneIcon;
        } else if (cResult[5] !== platform) {
          if (MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL === platform) {
            let fn = () => {
              require("EmailVerificationModalActionCreators").open();
            };
            cResult[5] = platform;
            cResult[6] = fn;
          } else if (MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE !== platform) {
            fn = () => {};
          }
          fn = () => {
            const obj2 = { reason: null };
            const obj = require("ModalActionCreators");
            obj2.reason = require("PhoneActionCreators").ChangePhoneReason.GUILD_PHONE_REQUIRED;
            obj.pushLazy(require("asyncRequireImpl")(paths[14], paths.paths), obj2);
          };
        } else {
          if (cResult[7] === cResult[6]) {
            if (cResult[8] === tmp6) {
              if (cResult[9] === tmp4) {
                if (cResult[10] === passesVerification) {
                  let tmp10 = cResult[11];
                }
                return tmp10;
              }
            }
          }
          const obj2 = { label: tmp4, icon: tmp6, passesVerification, onPress: cResult[6] };
          const tmp13 = React4(closure_7, obj2);
          cResult[7] = cResult[6];
          cResult[8] = tmp6;
          cResult[9] = tmp4;
          cResult[10] = passesVerification;
          cResult[11] = tmp13;
          tmp10 = tmp13;
        }
      }
      const tmp5 = getLabel(platform, passesVerification);
      cResult[0] = passesVerification;
      cResult[1] = platform;
      cResult[2] = tmp5;
      tmp4 = tmp5;
    }
  : (arg0) => {
      ({ platform, passesVerification } = arg0);
      const label = getLabel(platform, passesVerification);
      if (MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL === platform) {
        let icon = EnvelopeIcon.EnvelopeIcon;
      } else if (MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE === platform) {
        icon = MobilePhoneIcon2.MobilePhoneIcon;
      } else {
        icon = EnvelopeIcon.EnvelopeIcon;
      }
      if (MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL === platform) {
        let onPress = () => {
          require("EmailVerificationModalActionCreators").open();
        };
      } else {
        onPress =
          MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE === platform
            ? () => {
                const obj2 = { reason: null };
                const obj = require("ModalActionCreators");
                obj2.reason = require("PhoneActionCreators").ChangePhoneReason.GUILD_PHONE_REQUIRED;
                obj.pushLazy(require("asyncRequireImpl")(paths[14], paths.paths), obj2);
              }
            : () => {};
      }
      return React4(closure_7, { label, icon, passesVerification, onPress });
    };
