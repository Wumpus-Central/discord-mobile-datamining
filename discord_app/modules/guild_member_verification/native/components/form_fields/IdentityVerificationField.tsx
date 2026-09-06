// discord_app/modules/guild_member_verification/native/components/form_fields/IdentityVerificationField.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import MemberVerificationTypes from "../../../MemberVerificationTypes.tsx";
import CheckmarkLargeIcon from "../../../../../design/components/Icon/native/redesign/generated/CheckmarkLargeIcon.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../../design/components/Button/native/Button.native.tsx";
import MobilePhoneIcon from "../../../../../design/components/Icon/native/redesign/generated/MobilePhoneIcon.tsx";
import EnvelopeIcon2 from "../../../../../design/components/Icon/native/redesign/generated/EnvelopeIcon.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
function BaseIdentityVerificationField(icon) {
  icon = icon.icon;
  ({ label, passesVerification, onPress } = icon);
  const tmp = closure_6();
  let obj = { style: tmp.container, children: null };
  let tmp4 = null;
  if (null != icon) {
    obj = { style: tmp.icon };
    tmp4 = React4(icon, obj);
  }
  const items = [tmp4, ,];
  obj = { style: null, variant: "text-md/medium", color: "mobile-text-heading-primary", children: label };
  const items1 = [tmp.label];
  obj.style = items1;
  items[1] = React4(Text_Text.Text, obj);
  if (passesVerification) {
    const obj1 = { style: tmp.verifiedContainer, accessible: true, accessibilityLabel: null, children: null };
    const intl2 = util.intl;
    obj1.accessibilityLabel = intl2.string(util.t.g62IJl);
    obj1.children = React4(CheckmarkLargeIcon.CheckmarkLargeIcon, { color: "status-positive" });
    let obj2 = obj1;
  } else {
    obj2 = { style: tmp.ctaButton, children: null };
    const obj3 = { variant: "primary", size: "sm", grow: true, text: null, onPress: null };
    const intl = util.intl;
    obj3.text = intl.string(util.t["13ofGu"]);
    obj3.onPress = onPress;
    obj2.children = React4(components_Button_Button.Button, obj3);
  }
  items[2] = React4(View, obj2);
  obj.children = items;
  return hasOwnProperty(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { container: null, icon: null, label: null, verifiedContainer: null, ctaButton: null };
createStyles = {
  padding: 8,
  marginTop: 8,
  borderRadius: nativeDefault.radii.sm,
  height: 48,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
createStyles.container = createStyles;
createStyles.icon = { marginLeft: 4, marginRight: 8 };
createStyles.label = { flex: 1, marginLeft: 4, lineHeight: 20 };
createStyles.verifiedContainer = {
  paddingVertical: 7,
  paddingHorizontal: 4,
  flexDirection: "row",
  alignItems: "center",
};
createStyles.ctaButton = { flexGrow: 0, alignSelf: "center", paddingHorizontal: 16 };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_member_verification/native/components/form_fields/IdentityVerificationField.tsx",
);

export default function IdentityVerificationField(arg0) {
  ({ platform, passesVerification } = arg0);
  if (MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL === platform) {
    const intl3 = util.intl;
    const string2 = intl3.string;
    let INsLgA = util.t;
    if (passesVerification) {
      INsLgA = INsLgA.INsLgA;
      let string2Result = string2(INsLgA);
    } else {
      string2Result = string2(INsLgA.c6EUJI);
    }
  } else {
    if (MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE === platform) {
      const intl2 = util.intl;
      const string = intl2.string;
      const t = util.t;
      if (passesVerification) {
        let stringResult = string(t["xO2XI/"]);
      } else {
        stringResult = string(t.woMjLV);
      }
      let stringResult1 = stringResult;
    } else {
      const intl = util.intl;
      stringResult1 = intl.string(util.t.mhv8BM);
    }
    if (MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL === platform) {
      let EnvelopeIcon = EnvelopeIcon2.EnvelopeIcon;
    } else if (MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE === platform) {
      EnvelopeIcon = MobilePhoneIcon.MobilePhoneIcon;
    } else {
      EnvelopeIcon = EnvelopeIcon2.EnvelopeIcon;
    }
    if (MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL === platform) {
      let fn = () => {
        require("EmailVerificationModalActionCreators").open();
      };
    } else {
      fn =
        MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE === platform
          ? () => {
              require("ModalActionCreators");
              const obj = { reason: require("PhoneActionCreators").ChangePhoneReason.GUILD_PHONE_REQUIRED };
              obj.pushLazy(require("asyncRequireImpl")(paths[12], paths.paths), obj);
            }
          : () => {};
    }
    let obj = { label: stringResult1, icon: EnvelopeIcon, passesVerification, onPress: fn };
    return React4(BaseIdentityVerificationField, obj);
  }
}
