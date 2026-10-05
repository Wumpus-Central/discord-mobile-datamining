// discord_app/modules/accept_invite/native/InviteError.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl5 from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import shared from "../../../design/shared.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import GuildIcon from "../../guild/native/GuildIcon.tsx";
import InviteErrorUtils from "../../../utils/InviteErrorUtils.tsx";
import AssetRegistryDefault from "../../../../_runtime/12392_AssetRegistry.js";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const GuildIconDefault = GuildIcon;
let importDefault;

let c10;
let c3;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let size;
({ Image: c3, View: closure_4 } = react_native);
({ AbortCodes: hasOwnProperty, HelpdeskArticles: metroRequire, InviteStates: metroImportDefault } = Constants);
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  expiredImage: { marginTop: 32, marginBottom: 32 },
  expiredTitle: { marginBottom: 8, backgroundColor: "transparent", textAlign: "center" },
  expiredBody: { backgroundColor: "transparent", marginBottom: 24 },
  disabledView: { justifyContent: "center", alignItems: "center" },
  disabledPauseIcon: size,
  guildIcon: obj2,
  disabledTitle: { marginTop: 16, marginBottom: 8, textAlign: "center" },
  disabledBody: { textAlign: "center", marginBottom: 16 },
};
size = { position: "absolute", alignSelf: "center", tintColor: nativeDefault.colors.WHITE, width: 42, height: 42 };
createStyles = createStyles.createStyles;
obj2 = { borderRadius: nativeDefault.radii.lg, opacity: 0.2, zIndex: -999 };
let closure_11 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (inviteError) => {
      let invite;
      let items;
      let onPress;
      let onPressClose;
      let stringResult;
      let tmp5;
      let tmp9;
      let obj = onPressClose(576);
      const cResult = obj.c(27);
      ({ invite, onPressClose } = inviteError);
      inviteError = inviteError.inviteError;
      const tmp4 = closure_11();
      if (cResult[0] !== onPressClose) {
        const fn = function l() {
          onPressClose();
        };
        cResult[0] = onPressClose;
        cResult[1] = fn;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      importDefault = tmp5;
      const tmpResult = onPressClose(4729);
      const tmp6Result = importDefault(tmpResult.isThemeDark(useThemeDefault()) ? 12389 : 12390);
      let code;
      if (inviteError != null) {
        code = inviteError.code;
      }
      if (cResult[2] !== code) {
        const tmpResult2 = onPressClose(12391);
        const descriptiveInviteError = tmpResult2.getDescriptiveInviteError(code);
        cResult[2] = code;
        cResult[3] = descriptiveInviteError;
        tmp9 = descriptiveInviteError;
      } else {
        tmp9 = cResult[3];
      }
      let description;
      const tmp11 = cResult[4];
      if (tmp9 != null) {
        description = tmp9.description;
      }
      if (tmp11 === description) {
        let tmp13;
        let tmp16;
        if (cResult[5] === invite.state) {
          tmp13 = cResult[6];
        }
        if (cResult[7] !== tmp5) {
          const fn2 = function z() {
            let intl;
            const obj = { variant: "primary", size: "lg", text: intl.string(intl5.t.wcqOoF), onPress };
            const Button = components_Button_Button.Button;
            intl = intl5.intl;
            return metroImportAll(Button, obj);
          };
          cResult[7] = tmp5;
          cResult[8] = fn2;
          tmp16 = fn2;
        } else {
          tmp16 = cResult[8];
        }
        if (cResult[9] === tmp6Result) {
          let tmp17;
          let tmp23;
          if (cResult[10] === tmp4.expiredImage) {
            tmp17 = cResult[11];
          }
          let title;
          const tmp21 = cResult[12];
          if (tmp9 != null) {
            title = tmp9.title;
          }
          if (tmp21 !== title) {
            let title1;
            if (tmp9 != null) {
              title1 = tmp9.title;
            }
            if (title1 == null) {
              const intl3 = onPressClose(1126).intl;
              title1 = intl3.string(onPressClose(1126).t.u9zxnX);
            }
            let title2;
            if (tmp9 != null) {
              title2 = tmp9.title;
            }
            cResult[12] = title2;
            cResult[13] = title1;
            tmp23 = title1;
          } else {
            tmp23 = cResult[13];
          }
          if (cResult[14] === tmp4.expiredTitle) {
            let tmp26;
            if (cResult[15] === tmp23) {
              tmp26 = cResult[16];
            }
            if (cResult[17] === tmp13) {
              let tmp29;
              let tmp32;
              if (cResult[18] === tmp4.expiredBody) {
                tmp29 = cResult[19];
              }
              if (cResult[20] !== tmp16) {
                const tmp16Result = tmp16();
                cResult[20] = tmp16;
                cResult[21] = tmp16Result;
                tmp32 = tmp16Result;
              } else {
                tmp32 = cResult[21];
              }
              if (cResult[22] === tmp32) {
                if (cResult[23] === tmp17) {
                  if (cResult[24] === tmp26) {
                    let tmp34;
                    if (cResult[25] === tmp29) {
                      tmp34 = cResult[26];
                    }
                    return tmp34;
                  }
                }
              }
              const obj2 = { children: items };
              items = [tmp17, tmp26, tmp29, tmp32];
              const tmp37 = closure_10(closure_9, obj2);
              cResult[22] = tmp32;
              cResult[23] = tmp17;
              cResult[24] = tmp26;
              cResult[25] = tmp29;
              cResult[26] = tmp37;
              tmp34 = tmp37;
            }
            const obj3 = { style: tmp4.expiredBody, variant: "text-sm/medium", color: "text-default", children: tmp13 };
            const tmp31 = closure_8(onPressClose(4886).Text, obj3);
            cResult[17] = tmp13;
            cResult[18] = tmp4.expiredBody;
            cResult[19] = tmp31;
            tmp29 = tmp31;
          }
          const obj4 = {
            style: tmp4.expiredTitle,
            variant: "heading-xl/extrabold",
            color: "mobile-text-heading-primary",
            children: tmp23,
          };
          const tmp28 = closure_8(onPressClose(4886).Text, obj4);
          cResult[14] = tmp4.expiredTitle;
          cResult[15] = tmp23;
          cResult[16] = tmp28;
          tmp26 = tmp28;
        }
        const obj5 = { style: tmp4.expiredImage, source: tmp6Result };
        const tmp20 = closure_8(closure_3, obj5);
        cResult[9] = tmp6Result;
        cResult[10] = tmp4.expiredImage;
        cResult[11] = tmp20;
        tmp17 = tmp20;
      }
      if (invite.state === constants3.BANNED) {
        const intl2 = onPressClose(1126).intl;
        stringResult = intl2.string(onPressClose(1126).t["GzD/aa"]);
      } else {
        stringResult = undefined;
        if (tmp9 != null) {
          stringResult = tmp9.description;
        }
        if (stringResult == null) {
          let intl = onPressClose(1126).intl;
          stringResult = intl.string(onPressClose(1126).t.FWkU6P);
        }
      }
      let description1;
      if (tmp9 != null) {
        description1 = tmp9.description;
      }
      cResult[4] = description1;
      cResult[5] = invite.state;
      cResult[6] = stringResult;
      tmp13 = stringResult;
    }
  : (invite) => {
      let closure_129_0;
      let intl4;
      let inviteError;
      let stringResult;
      let title;
      ({ onPressClose: closure_129_0, inviteError } = invite);
      invite = invite.invite;
      const tmp = closure_11();
      const obj = shared;
      let code;
      const tmp4Result = importDefault(obj.isThemeDark(useThemeDefault()) ? 12389 : 12390);
      const getDescriptiveInviteError = InviteErrorUtils.getDescriptiveInviteError;
      InviteErrorUtils;
      if (inviteError != null) {
        code = inviteError.code;
      }
      const descriptiveInviteError = getDescriptiveInviteError(code);
      if (invite.state === metroImportDefault.BANNED) {
        const intl2 = intl5.intl;
        stringResult = intl2.string(intl5.t["GzD/aa"]);
      } else {
        stringResult = undefined;
        if (descriptiveInviteError != null) {
          stringResult = descriptiveInviteError.description;
        }
        if (stringResult == null) {
          const intl = intl5.intl;
          stringResult = intl.string(intl5.t.FWkU6P);
        }
      }
      const items = [, , ,];
      const obj2 = { style: tmp.expiredImage, source: tmp4Result };
      items[0] = metroImportAll(_false, obj2);
      const obj3 = {
        style: tmp.expiredTitle,
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        children: title,
      };
      title = undefined;
      const Text = Text_Text.Text;
      if (descriptiveInviteError != null) {
        title = descriptiveInviteError.title;
      }
      if (title == null) {
        const intl3 = intl5.intl;
        title = intl3.string(intl5.t.u9zxnX);
      }
      function handlePressClose() {
        closure_1_0();
      }
      const obj4 = { children: items };
      items[1] = metroImportAll(Text, obj3);
      const obj5 = { style: tmp.expiredBody, variant: "text-sm/medium", color: "text-default", children: stringResult };
      items[2] = metroImportAll(Text_Text.Text, obj5);
      const obj6 = { variant: "primary", size: "lg", text: intl4.string(intl5.t.wcqOoF), onPress: handlePressClose };
      const Button = components_Button_Button.Button;
      intl4 = intl5.intl;
      items[3] = metroImportAll(Button, obj6);
      return authStore(React4, obj4);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onPressClose) => {
      let items;
      let onPress;
      let tmp5;
      let obj = onPressClose(576);
      const cResult = obj.c(30);
      onPressClose = onPressClose.onPressClose;
      const invite = onPressClose.invite;
      const tmp4 = closure_11();
      if (cResult[0] !== onPressClose) {
        const fn = function n() {
          onPressClose();
        };
        cResult[0] = onPressClose;
        cResult[1] = fn;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      importDefault = tmp5;
      const guild = invite.guild;
      if (null == guild) {
        return null;
      } else {
        if (cResult[2] === guild.icon) {
          let tmp6;
          if (cResult[3] === guild.id) {
            tmp6 = cResult[4];
          }
          if (cResult[5] !== tmp5) {
            class T {
              constructor() {
                let intl;
                const obj = { variant: "primary", size: "lg", text: intl.string(intl5.t["yD/zkn"]), onPress };
                const Button = components_Button_Button.Button;
                intl = intl5.intl;
                return metroImportAll(Button, obj);
              }
            }
            cResult[5] = tmp5;
            cResult[6] = T;
          } else {
            class T {
              constructor() {
                let intl;
                const obj = { variant: "primary", size: "lg", text: intl.string(intl5.t["yD/zkn"]), onPress };
                const Button = components_Button_Button.Button;
                intl = intl5.intl;
                return metroImportAll(Button, obj);
              }
            }
          }
          if (cResult[7] !== tmp4.disabledPauseIcon) {
            class T {
              constructor() {
                let intl;
                const obj = { variant: "primary", size: "lg", text: intl.string(intl5.t["yD/zkn"]), onPress };
                const Button = components_Button_Button.Button;
                intl = intl5.intl;
                return metroImportAll(Button, obj);
              }
            }
            const obj4 = { style: tmp4.disabledPauseIcon, source: AssetRegistryDefault };
            const Icon = tmp(1188).Icon;
            cResult[7] = tmp4.disabledPauseIcon;
            cResult[8] = closure_8(Icon, obj4);
            const tmp12 = closure_8(Icon, obj4);
          } else {
            class T {
              constructor() {
                let intl;
                const obj = { variant: "primary", size: "lg", text: intl.string(intl5.t["yD/zkn"]), onPress };
                const Button = components_Button_Button.Button;
                intl = intl5.intl;
                return metroImportAll(Button, obj);
              }
            }
          }
          if (cResult[9] === tmp6) {
            class T {
              constructor() {
                let intl;
                const obj = { variant: "primary", size: "lg", text: intl.string(intl5.t["yD/zkn"]), onPress };
                const Button = components_Button_Button.Button;
                intl = intl5.intl;
                return metroImportAll(Button, obj);
              }
            }
            if (cResult[12] === tmp4.disabledView) {
              class T {
                constructor() {
                  let intl;
                  const obj = { variant: "primary", size: "lg", text: intl.string(intl5.t["yD/zkn"]), onPress };
                  const Button = components_Button_Button.Button;
                  intl = intl5.intl;
                  return metroImportAll(Button, obj);
                }
              }
            }
            const obj5 = { style: tmp4.disabledView, children: items };
            items = [tmp10, tmp13];
            cResult[12] = tmp4.disabledView;
            cResult[13] = tmp10;
            cResult[14] = tmp13;
            cResult[15] = closure_10(closure_4, obj5);
            const tmp21 = closure_10(closure_4, obj5);
          }
          const obj6 = { style: tmp4.guildIcon, icon: tmp6, size: onPressClose(5971).GuildIconSizes.XLARGE };
          const tmp16 = GuildIconDefault;
          cResult[9] = tmp6;
          cResult[10] = tmp4.guildIcon;
          cResult[11] = closure_8(tmp16, obj6);
          const tmp17 = closure_8(tmp16, obj6);
        }
        const obj10 = { id: null, icon: null, size: 64, canAnimate: false };
        ({ id: obj3.id, icon: obj3.icon } = guild);
        const obj2 = AvatarUtilsDefault;
        const guildIconURL = obj2.getGuildIconURL(obj10);
        cResult[2] = guild.icon;
        cResult[3] = guild.id;
        cResult[4] = guildIconURL;
        tmp6 = guildIconURL;
      }
    }
  : (onPressClose) => {
      let RXSeLl;
      let format;
      let intl;
      let intl3;
      let items;
      let items1;
      let obj10;
      let obj11;
      onPressClose = onPressClose.onPressClose;
      const invite = onPressClose.invite;
      const tmp = closure_11();
      const guild = invite.guild;
      if (null == guild) {
        return null;
      } else {
        function handlePressClose() {
          onPressClose();
        }
        const obj3 = { id: null, icon: null, size: 64, canAnimate: false };
        ({ id: obj2.id, icon: obj2.icon } = guild);
        const obj4 = { children: items1 };
        const obj5 = { style: tmp.disabledView, children: items };
        const obj = AvatarUtilsDefault;
        const guildIconURL = obj.getGuildIconURL(obj3);
        const obj6 = { style: tmp.disabledPauseIcon, source: AssetRegistryDefault };
        const Icon = native.Icon;
        items = [metroImportAll(Icon, obj6)];
        const obj7 = { style: tmp.guildIcon, icon: guildIconURL, size: GuildIcon.GuildIconSizes.XLARGE };
        const tmp10 = GuildIconDefault;
        items[1] = metroImportAll(tmp10, obj7);
        items1 = [authStore(React3, obj5), , ,];
        const obj8 = {
          style: tmp.disabledTitle,
          variant: "heading-xl/semibold",
          color: "text-feedback-critical",
          children: intl.string(intl5.t.jlLX2Z),
        };
        const Text = Text_Text.Text;
        intl = intl5.intl;
        items1[1] = metroImportAll(Text, obj8);
        const obj9 = {
          style: tmp.disabledBody,
          variant: "text-md/normal",
          color: "text-default",
          children: format(RXSeLl, obj11),
        };
        const Text2 = Text_Text.Text;
        const intl2 = intl5.intl;
        format = intl2.format;
        obj11 = { articleLink: obj10.getArticleURL(metroRequire.INVITE_DISABLED) };
        RXSeLl = intl5.t.RXSeLl;
        obj10 = HelpdeskUtilsDefault;
        items1[2] = metroImportAll(Text2, obj9);
        const obj20 = {
          variant: "primary",
          size: "lg",
          text: intl3.string(intl5.t["yD/zkn"]),
          onPress: handlePressClose,
        };
        const Button = components_Button_Button.Button;
        intl3 = intl5.intl;
        items1[3] = metroImportAll(Button, obj20);
        return authStore(React4, obj4);
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (inviteError) => {
      let tmp2;
      const obj = react2;
      const cResult = obj.c(6);
      inviteError = inviteError.inviteError;
      if (null == inviteError) {
        let tmp16;
        if (cResult[0] !== inviteError) {
          const obj2 = {};
          const merged = Object.assign(inviteError);
          const tmp22 = metroImportAll(closure_12, obj2);
          cResult[0] = inviteError;
          cResult[1] = tmp22;
          tmp16 = tmp22;
        } else {
          tmp16 = cResult[1];
        }
        tmp2 = tmp16;
      } else if (inviteError.code === hasOwnProperty.INVITES_DISABLED) {
        let tmp9;
        if (cResult[2] !== inviteError) {
          const obj3 = {};
          const merged1 = Object.assign(inviteError);
          const tmp15 = metroImportAll(closure_13, obj3);
          cResult[2] = inviteError;
          cResult[3] = tmp15;
          tmp9 = tmp15;
        } else {
          tmp9 = cResult[3];
        }
        tmp2 = tmp9;
      } else if (cResult[4] !== inviteError) {
        const obj4 = {};
        const merged2 = Object.assign(inviteError);
        const tmp8 = metroImportAll(closure_12, obj4);
        cResult[4] = inviteError;
        cResult[5] = tmp8;
        tmp2 = tmp8;
      } else {
        tmp2 = cResult[5];
      }
      return tmp2;
    }
  : (inviteError) => {
      let tmp7;
      inviteError = inviteError.inviteError;
      if (null == inviteError) {
        const obj2 = {};
        const merged = Object.assign(inviteError);
        tmp7 = metroImportAll(closure_12, obj2);
      } else if (inviteError.code === hasOwnProperty.INVITES_DISABLED) {
        const obj3 = {};
        const merged1 = Object.assign(inviteError);
        tmp7 = metroImportAll(closure_13, obj3);
      } else {
        const obj = {};
        const merged2 = Object.assign(inviteError);
        tmp7 = metroImportAll(closure_12, obj);
      }
      return tmp7;
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/accept_invite/native/InviteError.tsx");

export default tmp7;
