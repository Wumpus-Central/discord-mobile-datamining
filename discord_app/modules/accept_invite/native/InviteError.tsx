// discord_app/modules/accept_invite/native/InviteError.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import shared from "../../../design/shared.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import GuildIcon from "../../guild/native/GuildIcon.tsx";
import InviteErrorUtils from "../../../utils/InviteErrorUtils.tsx";
import _modDef12440 from "../../../../_runtime/metro/12440__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const GuildIconDefault = GuildIcon;

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ AbortCodes: closure_4, HelpdeskArticles: hasOwnProperty, InviteStates: metroRequire } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  expiredImage: { marginTop: 32, marginBottom: 32 },
  expiredTitle: { marginBottom: 8, backgroundColor: "transparent", textAlign: "center" },
  expiredBody: { backgroundColor: "transparent", marginBottom: 24 },
  disabledView: { justifyContent: "center", alignItems: "center" },
  disabledPauseIcon: null,
  guildIcon: null,
  disabledTitle: null,
  disabledBody: null,
};
let size = { position: "absolute", alignSelf: "center", tintColor: nativeDefault.colors.WHITE, width: 42, height: 42 };
obj2.disabledPauseIcon = size;
obj2.guildIcon = { borderRadius: nativeDefault.radii.lg, opacity: 0.2, zIndex: -999 };
obj2.disabledTitle = { marginTop: 16, marginBottom: 8, textAlign: "center" };
obj2.disabledBody = { textAlign: "center", marginBottom: 16 };
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function InviteErrorBase(inviteError) {
      const cResult = onPressClose(576).c(27);
      ({ invite, onPressClose } = inviteError);
      inviteError = inviteError.inviteError;
      const tmp4 = closure_10();
      if (cResult[0] !== onPressClose) {
        function handlePressClose() {
          onPressClose();
        }
        cResult[0] = onPressClose;
        cResult[1] = handlePressClose;
        let tmp5 = handlePressClose;
      } else {
        tmp5 = cResult[1];
      }
      importDefault = tmp5;
      let obj = onPressClose(576);
      const tmp6Result = importDefault(onPressClose(4930).isThemeDark(useThemeDefault()) ? 12437 : 12438);
      let code;
      if (inviteError != null) {
        code = inviteError.code;
      }
      if (cResult[2] !== code) {
        const descriptiveInviteError = onPressClose(12439).getDescriptiveInviteError(code);
        cResult[2] = code;
        cResult[3] = descriptiveInviteError;
        let tmp9 = descriptiveInviteError;
        const tmpResult2 = onPressClose(12439);
      } else {
        tmp9 = cResult[3];
      }
      let description;
      if (tmp9 != null) {
        description = tmp9.description;
      }
      if (cResult[4] === description) {
        if (cResult[5] === invite.state) {
          let tmp12 = cResult[6];
        }
        if (cResult[7] !== tmp5) {
          function renderButton() {
            const obj = { variant: "primary", size: "lg", text: null, onPress: null };
            const intl = util.intl;
            obj.text = intl.string(util.t.wcqOoF);
            obj.onPress = onPress;
            return React5(components_Button_Button.Button, obj);
          }
          cResult[7] = tmp5;
          cResult[8] = renderButton;
          let tmp15 = renderButton;
        } else {
          tmp15 = cResult[8];
        }
        if (cResult[9] === tmp6Result) {
          if (cResult[10] === tmp4.expiredImage) {
            let tmp16 = cResult[11];
          }
          let title;
          if (tmp9 != null) {
            title = tmp9.title;
          }
          if (cResult[12] !== title) {
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
            let tmp20 = title1;
          } else {
            tmp20 = cResult[13];
          }
          if (cResult[14] === tmp4.expiredTitle) {
            if (cResult[15] === tmp20) {
              let tmp23 = cResult[16];
            }
            if (cResult[17] === tmp12) {
              if (cResult[18] === tmp4.expiredBody) {
                let tmp26 = cResult[19];
              }
              if (cResult[20] !== tmp15) {
                const tmp15Result = tmp15();
                cResult[20] = tmp15;
                cResult[21] = tmp15Result;
                let tmp29 = tmp15Result;
              } else {
                tmp29 = cResult[21];
              }
              if (cResult[22] === tmp29) {
                if (cResult[23] === tmp16) {
                  if (cResult[24] === tmp23) {
                    if (cResult[25] === tmp26) {
                      let tmp31 = cResult[26];
                    }
                    return tmp31;
                  }
                }
              }
              const obj2 = { children: null };
              const items = [tmp16, tmp23, tmp26, tmp29];
              obj2.children = items;
              const tmp34 = closure_9(closure_8, obj2);
              cResult[22] = tmp29;
              cResult[23] = tmp16;
              cResult[24] = tmp23;
              cResult[25] = tmp26;
              cResult[26] = tmp34;
              tmp31 = tmp34;
            }
            const obj3 = { style: tmp4.expiredBody, variant: "text-sm/medium", color: "text-default", children: tmp12 };
            const tmp28 = closure_7(onPressClose(5087).Text, obj3);
            cResult[17] = tmp12;
            cResult[18] = tmp4.expiredBody;
            cResult[19] = tmp28;
            tmp26 = tmp28;
          }
          const obj4 = {
            style: tmp4.expiredTitle,
            variant: "heading-xl/extrabold",
            color: "mobile-text-heading-primary",
            children: tmp20,
          };
          const tmp25 = closure_7(onPressClose(5087).Text, obj4);
          cResult[14] = tmp4.expiredTitle;
          cResult[15] = tmp20;
          cResult[16] = tmp25;
          tmp23 = tmp25;
        }
        const obj5 = { style: tmp4.expiredImage, source: tmp6Result };
        const tmp18 = closure_7(tmp6(6163), obj5);
        cResult[9] = tmp6Result;
        cResult[10] = tmp4.expiredImage;
        cResult[11] = tmp18;
        tmp16 = tmp18;
      }
      if (invite.state === constants3.BANNED) {
        const intl2 = onPressClose(1126).intl;
        let stringResult = intl2.string(onPressClose(1126).t["GzD/aa"]);
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
      tmp12 = stringResult;
      const tmpResult = onPressClose(4930);
    }
  : function InviteErrorBase(invite) {
      ({ onPressClose: require, inviteError } = invite);
      const tmp = closure_10();
      const tmp4Result = importDefault(shared.isThemeDark(useThemeDefault()) ? 12437 : 12438);
      let code;
      if (inviteError != null) {
        code = inviteError.code;
      }
      const descriptiveInviteError = InviteErrorUtils.getDescriptiveInviteError(code);
      if (invite.invite.state === constants3.BANNED) {
        const intl2 = util.intl;
        let stringResult = intl2.string(util.t["GzD/aa"]);
      } else {
        stringResult = undefined;
        if (descriptiveInviteError != null) {
          stringResult = descriptiveInviteError.description;
        }
        if (stringResult == null) {
          const intl = util.intl;
          stringResult = intl.string(util.t.FWkU6P);
        }
      }
      const items = [React5(FastImageDefault, { style: tmp.expiredImage, source: tmp4Result }), , ,];
      const obj3 = {
        style: tmp.expiredTitle,
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        children: null,
      };
      let title;
      if (descriptiveInviteError != null) {
        title = descriptiveInviteError.title;
      }
      if (title == null) {
        const intl3 = util.intl;
        title = intl3.string(util.t.u9zxnX);
      }
      const obj4 = { children: null };
      obj3.children = title;
      function handlePressClose() {
        require();
      }
      items[1] = React5(Text_Text.Text, obj3);
      items[2] = React5(Text_Text.Text, {
        style: tmp.expiredBody,
        variant: "text-sm/medium",
        color: "text-default",
        children: stringResult,
      });
      const obj6 = { variant: "primary", size: "lg", text: null, onPress: null };
      const intl4 = util.intl;
      obj6.text = intl4.string(util.t.wcqOoF);
      obj6.onPress = handlePressClose;
      items[3] = React5(components_Button_Button.Button, obj6);
      obj4.children = items;
      return options(closure_1_8, obj4);
    };
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function InviteDisabledError(onPressClose) {
      const cResult = onPressClose(576).c(30);
      onPressClose = onPressClose.onPressClose;
      const tmp4 = closure_10();
      if (cResult[0] !== onPressClose) {
        function handlePressClose() {
          onPressClose();
        }
        cResult[0] = onPressClose;
        cResult[1] = handlePressClose;
        let tmp5 = handlePressClose;
      } else {
        tmp5 = cResult[1];
      }
      importDefault = tmp5;
      guild = onPressClose.invite.guild;
      if (null == guild) {
        return null;
      } else {
        if (cResult[2] === guild.icon) {
          if (cResult[3] === guild.id) {
            let tmp6 = cResult[4];
          }
          if (cResult[5] !== tmp5) {
            function renderButton() {
              const obj = { variant: "primary", size: "lg", text: null, onPress: null };
              const intl = util.intl;
              obj.text = intl.string(util.t["yD/zkn"]);
              obj.onPress = onPress;
              return React5(components_Button_Button.Button, obj);
            }
            cResult[5] = tmp5;
            cResult[6] = renderButton;
            let tmp9 = renderButton;
          } else {
            tmp9 = cResult[6];
          }
          if (cResult[7] !== tmp4.disabledPauseIcon) {
            const obj4 = { style: tmp4.disabledPauseIcon, source: _modDef12440 };
            const tmp13 = closure_7(tmp(1200).Icon, obj4);
            cResult[7] = tmp4.disabledPauseIcon;
            cResult[8] = tmp13;
            let tmp10 = tmp13;
          } else {
            tmp10 = cResult[8];
          }
          if (cResult[9] === tmp6) {
            if (cResult[10] === tmp4.guildIcon) {
              let tmp14 = cResult[11];
            }
            if (cResult[12] === tmp4.disabledView) {
              if (cResult[13] === tmp10) {
                if (cResult[14] === tmp14) {
                  let tmp19 = cResult[15];
                }
                const _Symbol = Symbol;
                if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                  let intl = tmp(1126).intl;
                  const stringResult = intl.string(tmp(1126).t.jlLX2Z);
                  cResult[16] = stringResult;
                  let tmp24 = stringResult;
                } else {
                  tmp24 = cResult[16];
                }
                if (cResult[17] !== tmp4.disabledTitle) {
                  const obj5 = {
                    style: tmp4.disabledTitle,
                    variant: "heading-xl/semibold",
                    color: "text-feedback-critical",
                    children: tmp24,
                  };
                  const tmp28 = closure_7(tmp(5087).Text, obj5);
                  cResult[17] = tmp4.disabledTitle;
                  cResult[18] = tmp28;
                  let tmp26 = tmp28;
                } else {
                  tmp26 = cResult[18];
                }
                const _Symbol2 = Symbol;
                if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl2 = tmp(1126).intl;
                  const obj6 = { articleLink: HelpdeskUtilsDefault.getArticleURL(constants2.INVITE_DISABLED) };
                  const formatResult = intl2.format(tmp(1126).t.RXSeLl, obj6);
                  cResult[19] = formatResult;
                  let tmp29 = formatResult;
                } else {
                  tmp29 = cResult[19];
                }
                if (cResult[20] === tmp4.disabledBody) {
                  if (cResult[21] === tmp29) {
                    let tmp33 = cResult[22];
                  }
                  if (cResult[23] !== tmp9) {
                    const tmp9Result = tmp9();
                    cResult[23] = tmp9;
                    cResult[24] = tmp9Result;
                    let tmp36 = tmp9Result;
                  } else {
                    tmp36 = cResult[24];
                  }
                  if (cResult[25] === tmp33) {
                    if (cResult[26] === tmp36) {
                      if (cResult[27] === tmp19) {
                        if (cResult[28] === tmp26) {
                          let tmp38 = cResult[29];
                        }
                        return tmp38;
                      }
                    }
                  }
                  const obj7 = { children: null };
                  const items = [tmp19, tmp26, tmp33, tmp36];
                  obj7.children = items;
                  const tmp41 = closure_9(closure_8, obj7);
                  cResult[25] = tmp33;
                  cResult[26] = tmp36;
                  cResult[27] = tmp19;
                  cResult[28] = tmp26;
                  cResult[29] = tmp41;
                  tmp38 = tmp41;
                }
                const obj8 = {
                  style: tmp4.disabledBody,
                  variant: "text-md/normal",
                  color: "text-default",
                  children: tmp29,
                };
                const tmp35 = closure_7(tmp(5087).Text, obj8);
                cResult[20] = tmp4.disabledBody;
                cResult[21] = tmp29;
                cResult[22] = tmp35;
                tmp33 = tmp35;
              }
            }
            const obj10 = { style: tmp4.disabledView, children: null };
            const items1 = [tmp10, tmp14];
            obj10.children = items1;
            const tmp22 = closure_9(View, obj10);
            cResult[12] = tmp4.disabledView;
            cResult[13] = tmp10;
            cResult[14] = tmp14;
            cResult[15] = tmp22;
            tmp19 = tmp22;
          }
          const obj11 = { style: tmp4.guildIcon, icon: tmp6, size: tmp(6165).GuildIconSizes.XLARGE };
          const tmp18 = closure_7(GuildIconDefault, obj11);
          cResult[9] = tmp6;
          cResult[10] = tmp4.guildIcon;
          cResult[11] = tmp18;
          tmp14 = tmp18;
        }
        ({ id: obj3.id, icon: obj3.icon } = guild);
        const guildIconURL = AvatarUtilsDefault.getGuildIconURL({ id: null, icon: null, size: 64, canAnimate: false });
        cResult[2] = guild.icon;
        cResult[3] = guild.id;
        cResult[4] = guildIconURL;
        tmp6 = guildIconURL;
        const obj19 = { id: null, icon: null, size: 64, canAnimate: false };
      }
      let obj = onPressClose(576);
    }
  : function InviteDisabledError(onPressClose) {
      onPressClose = onPressClose.onPressClose;
      const tmp = closure_10();
      guild = onPressClose.invite.guild;
      if (null == guild) {
        return null;
      } else {
        function handlePressClose() {
          onPressClose();
        }
        ({ id: obj2.id, icon: obj2.icon } = guild);
        const obj4 = { children: null };
        const obj5 = { style: tmp.disabledView, children: null };
        const guildIconURL = AvatarUtilsDefault.getGuildIconURL({ id: null, icon: null, size: 64, canAnimate: false });
        const obj6 = { style: tmp.disabledPauseIcon, source: _modDef12440 };
        const items = [React5(native.Icon, obj6)];
        const obj7 = { style: tmp.guildIcon, icon: guildIconURL, size: null };
        const obj3 = { id: null, icon: null, size: 64, canAnimate: false };
        obj7.size = GuildIcon.GuildIconSizes.XLARGE;
        items[1] = React5(GuildIconDefault, obj7);
        obj5.children = items;
        const items1 = [options(View, obj5), , ,];
        const obj8 = {
          style: tmp.disabledTitle,
          variant: "heading-xl/semibold",
          color: "text-feedback-critical",
          children: null,
        };
        const intl = util.intl;
        obj8.children = intl.string(util.t.jlLX2Z);
        items1[1] = React5(Text_Text.Text, obj8);
        const obj9 = { style: tmp.disabledBody, variant: "text-md/normal", color: "text-default", children: null };
        const intl2 = util.intl;
        const obj11 = { articleLink: null };
        obj11.articleLink = HelpdeskUtilsDefault.getArticleURL(constants2.INVITE_DISABLED);
        obj9.children = intl2.format(util.t.RXSeLl, obj11);
        items1[2] = React5(Text_Text.Text, obj9);
        const obj20 = { variant: "primary", size: "lg", text: null, onPress: null };
        const intl3 = util.intl;
        obj20.text = intl3.string(util.t["yD/zkn"]);
        obj20.onPress = handlePressClose;
        items1[3] = React5(components_Button_Button.Button, obj20);
        obj4.children = items1;
        return options(closure_1_8, obj4);
      }
    };
ReactCompilerGating = fn(558);
let obj3 = { borderRadius: nativeDefault.radii.lg, opacity: 0.2, zIndex: -999 };
size = fn(2);
const result = size.fileFinishedImporting("modules/accept_invite/native/InviteError.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function InviteError(inviteError) {
      const cResult = c.c(6);
      inviteError = inviteError.inviteError;
      if (null == inviteError) {
        if (cResult[0] !== inviteError) {
          const obj2 = {};
          const merged = Object.assign(inviteError);
          const tmp23 = React5(closure_11, obj2);
          cResult[0] = inviteError;
          cResult[1] = tmp23;
        }
      } else if (inviteError.code === constants.INVITES_DISABLED) {
        if (cResult[2] !== inviteError) {
          const obj3 = {};
          const merged1 = Object.assign(inviteError);
          const tmp15 = React5(closure_12, obj3);
          cResult[2] = inviteError;
          cResult[3] = tmp15;
        }
      } else {
        if (cResult[4] !== inviteError) {
          const obj4 = {};
          const merged2 = Object.assign(inviteError);
          const tmp8 = React5(closure_11, obj4);
          cResult[4] = inviteError;
          cResult[5] = tmp8;
          let tmp2 = tmp8;
        } else {
          tmp2 = cResult[5];
        }
        return tmp2;
      }
    }
  : function InviteError(inviteError) {
      inviteError = inviteError.inviteError;
      if (null == inviteError) {
        const obj2 = {};
        const merged = Object.assign(inviteError);
        let tmp7 = React5(closure_11, obj2);
      } else if (inviteError.code === constants.INVITES_DISABLED) {
        const obj3 = {};
        const merged1 = Object.assign(inviteError);
        tmp7 = React5(closure_12, obj3);
      } else {
        const obj = {};
        const merged2 = Object.assign(inviteError);
        tmp7 = React5(closure_11, obj);
      }
      return tmp7;
    };
