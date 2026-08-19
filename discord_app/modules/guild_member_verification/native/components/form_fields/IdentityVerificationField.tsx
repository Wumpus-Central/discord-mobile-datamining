// discord_app/modules/guild_member_verification/native/components/form_fields/IdentityVerificationField.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../../intl/index.native.tsx";
import MAX_RESULTS_PER_PAGE from "../../../MemberVerificationTypes.tsx";
import CheckmarkLargeIcon from "../../../../../design/components/Icon/native/redesign/generated/CheckmarkLargeIcon.tsx";
import Text from "../../../../../design/components/Text/native/Text.tsx";
import Button from "../../../../../design/components/Button/native/Button.native.tsx";
import MobilePhoneIcon from "../../../../../design/components/Icon/native/redesign/generated/MobilePhoneIcon.tsx";
import EnvelopeIcon2 from "../../../../../design/components/Icon/native/redesign/generated/EnvelopeIcon.tsx";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
function BaseIdentityVerificationField(icon) {
  icon = icon.icon;
  ({ label, passesVerification, onPress } = icon);
  const tmp = callback2();
  let obj = { style: tmp.container, children: null };
  let tmp4 = null;
  if (null != icon) {
    obj = { style: null };
    obj[0] = tmp.icon;
    tmp4 = callback(icon, obj);
  }
  const items = [tmp4, , ];
  const items1 = [tmp.label];
  items[1] = callback(Text.Text, { style: items1, variant: "text-md/medium", color: "mobile-text-heading-primary", children: label });
  obj = { style: null, children: null };
  if (passesVerification) {
    obj[0] = tmp.verifiedContainer;
    obj[1] = callback(CheckmarkLargeIcon.CheckmarkLargeIcon, { color: "status-positive" });
    let tmp9 = obj;
  } else {
    obj[0] = tmp.ctaButton;
    obj1 = { variant: "primary", size: "sm", grow: true, text: null, onPress: null };
    const intl = getSystemLocale.intl;
    obj1[3] = intl.string(getSystemLocale.t["13ofGu"]);
    obj1[4] = onPress;
    obj[1] = callback(Button.Button, obj1);
    tmp9 = obj;
  }
  items[2] = callback(View, tmp9);
  obj[1] = items;
  return callback(View, obj);
}
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
const createCacheKey = { padding: 8, marginTop: 8, borderRadius: ThemesDefault.radii.sm, height: 48, flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginLeft: 4, marginRight: 8 };
createCacheKey[2] = { flex: 1, marginLeft: 4, lineHeight: 20 };
createCacheKey[3] = { paddingVertical: 7, paddingHorizontal: 4, flexDirection: "row", alignItems: "center" };
createCacheKey[4] = { flexGrow: 0, alignSelf: "center", paddingHorizontal: 16 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/IdentityVerificationField.tsx");

export default function IdentityVerificationField(arg0) {
  ({ platform, passesVerification } = arg0);
  if (MAX_RESULTS_PER_PAGE.UserVerificationFieldPlatforms.EMAIL === platform) {
    const intl3 = getSystemLocale.intl;
    const string2 = intl3.string;
    let INsLgA = getSystemLocale.t;
    if (passesVerification) {
      INsLgA = INsLgA.INsLgA;
      let string2Result = string2(INsLgA);
    } else {
      string2Result = string2(INsLgA.c6EUJI);
    }
  } else {
    if (MAX_RESULTS_PER_PAGE.UserVerificationFieldPlatforms.PHONE === platform) {
      const intl2 = getSystemLocale.intl;
      const string = intl2.string;
      const t = getSystemLocale.t;
      if (passesVerification) {
        let stringResult = string(t["xO2XI/"]);
      } else {
        stringResult = string(t.woMjLV);
      }
      let stringResult1 = stringResult;
    } else {
      const intl = getSystemLocale.intl;
      stringResult1 = intl.string(getSystemLocale.t.mhv8BM);
    }
    if (MAX_RESULTS_PER_PAGE.UserVerificationFieldPlatforms.EMAIL === platform) {
      let EnvelopeIcon = EnvelopeIcon2.EnvelopeIcon;
    } else if (MAX_RESULTS_PER_PAGE.UserVerificationFieldPlatforms.PHONE === platform) {
      EnvelopeIcon = MobilePhoneIcon.MobilePhoneIcon;
    } else {
      EnvelopeIcon = EnvelopeIcon2.EnvelopeIcon;
    }
    if (MAX_RESULTS_PER_PAGE.UserVerificationFieldPlatforms.EMAIL === platform) {
      let fn = () => {
        callback2(paths[10]).open();
      };
    } else {
      fn = MAX_RESULTS_PER_PAGE.UserVerificationFieldPlatforms.PHONE === platform ? (() => {
        callback2(paths[11]);
        const obj = { reason: callback(paths[14]).ChangePhoneReason.GUILD_PHONE_REQUIRED };
        obj.pushLazy(callback(paths[13])(paths[12], paths.paths), obj);
      }) : (() => {

      });
    }
    let obj = { label: null, icon: null, passesVerification: null, onPress: null };
    obj[0] = stringResult1;
    obj[1] = EnvelopeIcon;
    obj[2] = passesVerification;
    obj[3] = fn;
    return callback(BaseIdentityVerificationField, obj);
  }
};