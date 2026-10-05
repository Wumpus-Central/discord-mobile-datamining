// discord_app/modules/guild_member_verification/native/components/form_fields/IdentityVerificationField.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import intl4 from "../../../../../intl/index.native.tsx";
import CheckmarkLargeIcon from "../../../../../design/components/Icon/native/redesign/generated/CheckmarkLargeIcon.tsx";
import MemberVerificationTypes from "../../../MemberVerificationTypes.tsx";
import EnvelopeIcon2 from "../../../../../design/components/Icon/native/redesign/generated/EnvelopeIcon.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../../design/components/Button/native/Button.native.tsx";
import MobilePhoneIcon from "../../../../../design/components/Icon/native/redesign/generated/MobilePhoneIcon.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

let closure_4;
let hasOwnProperty;
let obj2;
const f91174 = () => {
  const obj = require("EmailVerificationModalActionCreators");
  obj.open();
};
const f91175 = () => {
  const pushLazy = require("ModalActionCreators").pushLazy;
  const obj = { reason: require("PhoneActionCreators").ChangePhoneReason.GUILD_PHONE_REQUIRED };
  require("ModalActionCreators");
  const tmp2 = require("asyncRequire")(paths[14], paths.paths);
  pushLazy(tmp2, obj);
};
const f91176 = () => {};
function getLabel(arg0, arg1) {
  if (MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL === arg0) {
    let string2Result;
    const intl3 = intl4.intl;
    const string2 = intl3.string;
    const t2 = intl4.t;
    if (arg1) {
      string2Result = string2(t2.INsLgA);
    } else {
      string2Result = string2(t2.c6EUJI);
    }
    return string2Result;
  } else if (MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE === arg0) {
    let stringResult;
    const intl2 = intl4.intl;
    const string = intl2.string;
    const t = intl4.t;
    if (arg1) {
      stringResult = string(t["xO2XI/"]);
    } else {
      stringResult = string(t.woMjLV);
    }
    return stringResult;
  } else {
    const intl = intl4.intl;
    return intl.string(intl4.t.mhv8BM);
  }
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = {
  container: obj2,
  icon: { marginLeft: 4, marginRight: 8 },
  label: { flex: 1, marginLeft: 4, lineHeight: 20 },
  verifiedContainer: { paddingVertical: 7, paddingHorizontal: 4, flexDirection: "row", alignItems: "center" },
  ctaButton: { flexGrow: 0, alignSelf: "center", paddingHorizontal: 16 },
};
obj2 = {
  padding: 8,
  marginTop: 8,
  borderRadius: nativeDefault.radii.sm,
  height: 48,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
let closure_6 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let Button;
      let icon;
      let intl;
      let intl2;
      let items1;
      let label;
      let obj5;
      let onPress;
      let passesVerification;
      const obj = react2;
      const cResult = obj.c(18);
      ({ label, passesVerification, onPress, icon } = arg0);
      const tmp4 = closure_6();
      if (cResult[0] === icon) {
        let tmp5;
        let tmp8;
        if (cResult[1] === tmp4.icon) {
          tmp5 = cResult[2];
        }
        if (cResult[3] !== tmp4.label) {
          const items = [tmp4.label];
          cResult[3] = tmp4.label;
          cResult[4] = items;
          tmp8 = items;
        } else {
          tmp8 = cResult[4];
        }
        if (cResult[5] === label) {
          let tmp9;
          let obj4;
          if (cResult[6] === tmp8) {
            tmp9 = cResult[7];
          }
          if (cResult[8] === onPress) {
            if (cResult[9] === passesVerification) {
              if (cResult[10] === tmp4.ctaButton) {
                let tmp12;
                if (cResult[11] === tmp4.verifiedContainer) {
                  tmp12 = cResult[12];
                }
                if (cResult[13] === tmp4.container) {
                  if (cResult[14] === tmp5) {
                    if (cResult[15] === tmp9) {
                      let tmp16;
                      if (cResult[16] === tmp12) {
                        tmp16 = cResult[17];
                      }
                      return tmp16;
                    }
                  }
                }
                const obj2 = { style: tmp4.container, children: items1 };
                items1 = [tmp5, tmp9, tmp12];
                const tmp19 = hasOwnProperty(View, obj2);
                cResult[13] = tmp4.container;
                cResult[14] = tmp5;
                cResult[15] = tmp9;
                cResult[16] = tmp12;
                cResult[17] = tmp19;
                tmp16 = tmp19;
              }
            }
          }
          if (passesVerification) {
            const obj3 = {
              style: tmp4.verifiedContainer,
              accessible: true,
              accessibilityLabel: intl2.string(intl4.t.g62IJl),
              children: React3(CheckmarkLargeIcon.CheckmarkLargeIcon, { color: "status-positive" }),
            };
            intl2 = intl4.intl;
            obj4 = obj3;
          } else {
            obj4 = { style: tmp4.ctaButton, children: React3(Button, obj5) };
            obj5 = { variant: "primary", size: "sm", grow: true, text: intl.string(intl4.t["13ofGu"]), onPress };
            Button = components_Button_Button.Button;
            intl = intl4.intl;
          }
          const tmp13Result = React3(View, obj4);
          cResult[8] = onPress;
          cResult[9] = passesVerification;
          cResult[10] = tmp4.ctaButton;
          cResult[11] = tmp4.verifiedContainer;
          cResult[12] = tmp13Result;
          tmp12 = tmp13Result;
        }
        const obj6 = { style: tmp8, variant: "text-md/medium", color: "mobile-text-heading-primary", children: label };
        const tmp11 = React3(Text_Text.Text, obj6);
        cResult[5] = label;
        cResult[6] = tmp8;
        cResult[7] = tmp11;
        tmp9 = tmp11;
      }
      let tmp6 = null;
      if (null != icon) {
        const obj7 = { style: tmp4.icon };
        tmp6 = React3(icon, obj7);
      }
      cResult[0] = icon;
      cResult[1] = tmp4.icon;
      cResult[2] = tmp6;
      tmp5 = tmp6;
    }
  : (icon) => {
      let Button;
      let intl;
      let intl2;
      let items;
      let items1;
      let label;
      let obj5;
      let obj6;
      let onPress;
      let passesVerification;
      icon = icon.icon;
      ({ label, passesVerification, onPress } = icon);
      const tmp = closure_6();
      let tmp4 = null;
      const obj = { style: tmp.container, children: items };
      if (null != icon) {
        const obj2 = { style: tmp.icon };
        tmp4 = React3(icon, obj2);
      }
      items = [tmp4, ,];
      const obj3 = { style: items1, variant: "text-md/medium", color: "mobile-text-heading-primary", children: label };
      items1 = [tmp.label];
      items[1] = React3(Text_Text.Text, obj3);
      if (passesVerification) {
        const obj4 = {
          style: tmp.verifiedContainer,
          accessible: true,
          accessibilityLabel: intl2.string(intl4.t.g62IJl),
          children: React3(CheckmarkLargeIcon.CheckmarkLargeIcon, { color: "status-positive" }),
        };
        intl2 = intl4.intl;
        obj5 = obj4;
      } else {
        obj5 = { style: tmp.ctaButton, children: React3(Button, obj6) };
        obj6 = { variant: "primary", size: "sm", grow: true, text: intl.string(intl4.t["13ofGu"]), onPress };
        Button = components_Button_Button.Button;
        intl = intl4.intl;
      }
      items[2] = React3(View, obj5);
      return hasOwnProperty(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let passesVerification;
      let platform;
      const obj = react2;
      const cResult = obj.c(12);
      ({ platform, passesVerification } = arg0);
      if (cResult[0] === passesVerification) {
        let tmp4;
        let tmp6;
        let tmp7;
        if (cResult[1] === platform) {
          tmp4 = cResult[2];
        }
        if (cResult[3] !== platform) {
          let EnvelopeIcon;
          if (MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL === platform) {
            EnvelopeIcon = EnvelopeIcon2.EnvelopeIcon;
          } else if (MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE === platform) {
            EnvelopeIcon = MobilePhoneIcon.MobilePhoneIcon;
          } else {
            EnvelopeIcon = EnvelopeIcon2.EnvelopeIcon;
          }
          cResult[3] = platform;
          cResult[4] = EnvelopeIcon;
          tmp6 = EnvelopeIcon;
        } else {
          tmp6 = cResult[4];
        }
        if (cResult[5] !== platform) {
          let fn;
          if (MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL === platform) {
            fn = f91174;
          } else {
            fn = MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE === platform ? f91175 : f91176;
          }
          cResult[5] = platform;
          cResult[6] = fn;
          tmp7 = fn;
        } else {
          tmp7 = cResult[6];
        }
        if (cResult[7] === tmp7) {
          if (cResult[8] === tmp6) {
            if (cResult[9] === tmp4) {
              let tmp8;
              if (cResult[10] === passesVerification) {
                tmp8 = cResult[11];
              }
              return tmp8;
            }
          }
        }
        const obj2 = { label: tmp4, icon: tmp6, passesVerification, onPress: tmp7 };
        const tmp11 = React3(closure_7, obj2);
        cResult[7] = tmp7;
        cResult[8] = tmp6;
        cResult[9] = tmp4;
        cResult[10] = passesVerification;
        cResult[11] = tmp11;
        tmp8 = tmp11;
      }
      const tmp5 = getLabel(platform, passesVerification);
      cResult[0] = passesVerification;
      cResult[1] = platform;
      cResult[2] = tmp5;
      tmp4 = tmp5;
    }
  : (arg0) => {
      let icon;
      let onPress;
      let passesVerification;
      let paths;
      let platform;
      ({ platform, passesVerification } = arg0);
      const label = getLabel(platform, passesVerification);
      if (MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL === platform) {
        icon = EnvelopeIcon2.EnvelopeIcon;
      } else if (MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE === platform) {
        icon = MobilePhoneIcon.MobilePhoneIcon;
      } else {
        icon = EnvelopeIcon2.EnvelopeIcon;
      }
      if (MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL === platform) {
        onPress = f91174;
      } else {
        onPress = MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE === platform ? f91175 : f91176;
      }
      return React3(closure_7, { label, icon, passesVerification, onPress });
    };
const result = size.fileFinishedImporting(
  "modules/guild_member_verification/native/components/form_fields/IdentityVerificationField.tsx",
);

export default tmp4;
