// === Module 12403: InviteError ===

// Module 12403 (InviteError)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1188 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import shared from "shared" /* 4735 */;
import useThemeDefault from "useTheme" /* 4797 */;
import Text_Text from "Text/Text" /* 4892 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import GuildIcon from "GuildIcon" /* 5978 */;
import InviteErrorUtils from "InviteErrorUtils" /* 12406 */;
import _modDef12407 from "module_12407" /* 12407 */;
import noop from "module_19" /* 19 */;

const GuildIconDefault = GuildIcon;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const Constants = fn(1085);
({ AbortCodes: hasOwnProperty, HelpdeskArticles: metroRequire, InviteStates: closure_7 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { expiredImage: { marginTop: 32, marginBottom: 32 }, expiredTitle: { marginBottom: 8, backgroundColor: "transparent", textAlign: "center" }, expiredBody: { backgroundColor: "transparent", marginBottom: 24 }, disabledView: { justifyContent: "center", alignItems: "center" }, disabledPauseIcon: null, guildIcon: null, disabledTitle: null, disabledBody: null };
let size = { position: "absolute", alignSelf: "center", tintColor: nativeDefault.colors.WHITE, width: 42, height: 42 };
obj2.disabledPauseIcon = size;
obj2.guildIcon = { borderRadius: nativeDefault.radii.lg, opacity: 0.2, zIndex: -999 };
obj2.disabledTitle = { marginTop: 16, marginBottom: 8, textAlign: "center" };
obj2.disabledBody = { textAlign: "center", marginBottom: 16 };
let closure_11 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((inviteError) => {
  const cResult = onPressClose(576).c(27);
  ({ invite, onPressClose } = inviteError);
  inviteError = inviteError.inviteError;
  const tmp4 = closure_11();
  if (cResult[0] !== onPressClose) {
    const fn = function l() {
      onPressClose();
    };
    cResult[0] = onPressClose;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  importDefault = tmp5;
  let obj = onPressClose(576);
  const tmp6Result = importDefault(onPressClose(4735).isThemeDark(useThemeDefault()) ? 12404 : 12405);
  let code;
  if (inviteError != null) {
    code = inviteError.code;
  }
  if (cResult[2] !== code) {
    const descriptiveInviteError = onPressClose(12406).getDescriptiveInviteError(code);
    cResult[2] = code;
    cResult[3] = descriptiveInviteError;
    let tmp9 = descriptiveInviteError;
    const tmpResult2 = onPressClose(12406);
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
      const fn2 = function z() {
        const obj = { variant: "primary", size: "lg", text: null, onPress: null };
        const intl = util.intl;
        obj.text = intl.string(util.t.wcqOoF);
        obj.onPress = onPress;
        return closure_2_8(components_Button_Button.Button, obj);
      };
      cResult[7] = tmp5;
      cResult[8] = fn2;
      let tmp15 = fn2;
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
        let tmp21 = title1;
      } else {
        tmp21 = cResult[13];
      }
      if (cResult[14] === tmp4.expiredTitle) {
        if (cResult[15] === tmp21) {
          let tmp24 = cResult[16];
        }
        if (cResult[17] === tmp12) {
          if (cResult[18] === tmp4.expiredBody) {
            let tmp27 = cResult[19];
          }
          if (cResult[20] !== tmp15) {
            const tmp15Result = tmp15();
            cResult[20] = tmp15;
            cResult[21] = tmp15Result;
            let tmp30 = tmp15Result;
          } else {
            tmp30 = cResult[21];
          }
          if (cResult[22] === tmp30) {
            if (cResult[23] === tmp16) {
              if (cResult[24] === tmp24) {
                if (cResult[25] === tmp27) {
                  let tmp32 = cResult[26];
                }
                return tmp32;
              }
            }
          }
          const obj2 = { children: null };
          const items = [tmp16, tmp24, tmp27, tmp30];
          obj2.children = items;
          const tmp35 = closure_10(closure_9, obj2);
          cResult[22] = tmp30;
          cResult[23] = tmp16;
          cResult[24] = tmp24;
          cResult[25] = tmp27;
          cResult[26] = tmp35;
          tmp32 = tmp35;
        }
        const obj3 = { style: tmp4.expiredBody, variant: "text-sm/medium", color: "text-default", children: tmp12 };
        const tmp29 = closure_8(onPressClose(4892).Text, obj3);
        cResult[17] = tmp12;
        cResult[18] = tmp4.expiredBody;
        cResult[19] = tmp29;
        tmp27 = tmp29;
      }
      const obj4 = { style: tmp4.expiredTitle, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp21 };
      const tmp26 = closure_8(onPressClose(4892).Text, obj4);
      cResult[14] = tmp4.expiredTitle;
      cResult[15] = tmp21;
      cResult[16] = tmp26;
      tmp24 = tmp26;
    }
    const obj5 = { style: tmp4.expiredImage, source: tmp6Result };
    const tmp19 = closure_8(closure_3, obj5);
    cResult[9] = tmp6Result;
    cResult[10] = tmp4.expiredImage;
    cResult[11] = tmp19;
    tmp16 = tmp19;
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
  const tmpResult = onPressClose(4735);
}) : ((invite) => {
  ({ onPressClose: require, inviteError } = invite);
  const tmp = closure_11();
  const tmp4Result = importDefault(shared.isThemeDark(useThemeDefault()) ? 12404 : 12405);
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
  const items = [closure_1_8(React3, { style: tmp.expiredImage, source: tmp4Result }), , , ];
  const obj3 = { style: tmp.expiredTitle, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
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
    _require();
  }
  items[1] = closure_1_8(Text_Text.Text, obj3);
  items[2] = closure_1_8(Text_Text.Text, { style: tmp.expiredBody, variant: "text-sm/medium", color: "text-default", children: stringResult });
  const obj6 = { variant: "primary", size: "lg", text: null, onPress: null };
  const intl4 = util.intl;
  obj6.text = intl4.string(util.t.wcqOoF);
  obj6.onPress = handlePressClose;
  items[3] = closure_1_8(components_Button_Button.Button, obj6);
  obj4.children = items;
  return v65535(options, obj4);
});
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((onPressClose) => {
  const cResult = onPressClose(576).c(30);
  onPressClose = onPressClose.onPressClose;
  const tmp4 = closure_11();
  if (cResult[0] !== onPressClose) {
    const fn = function n() {
      onPressClose();
    };
    cResult[0] = onPressClose;
    cResult[1] = fn;
    let tmp5 = fn;
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
        class T {
          constructor() {
            obj = { variant: "primary", size: "lg", text: null, onPress: null };
            intl = closure_0(closure_2[13]).intl;
            obj.text = intl.string(closure_0(closure_2[13]).t["yD/zkn"]);
            obj.onPress = closure_1;
            return jsx(closure_0(closure_2[14]).Button, obj);
          }
        }
        cResult[5] = tmp5;
        cResult[6] = T;
      } else {
        class T {
          constructor() {
            obj = { variant: "primary", size: "lg", text: null, onPress: null };
            intl = closure_0(closure_2[13]).intl;
            obj.text = intl.string(closure_0(closure_2[13]).t["yD/zkn"]);
            obj.onPress = closure_1;
            return jsx(closure_0(closure_2[14]).Button, obj);
          }
        }
      }
      if (cResult[7] !== tmp4.disabledPauseIcon) {
        class T {
          constructor() {
            obj = { variant: "primary", size: "lg", text: null, onPress: null };
            intl = closure_0(closure_2[13]).intl;
            obj.text = intl.string(closure_0(closure_2[13]).t["yD/zkn"]);
            obj.onPress = closure_1;
            return jsx(closure_0(closure_2[14]).Button, obj);
          }
        }
        const obj4 = { style: tmp4.disabledPauseIcon, source: _modDef12407 };
        const tmp12 = closure_8(tmp(1188).Icon, obj4);
        cResult[7] = tmp4.disabledPauseIcon;
        cResult[8] = tmp12;
      } else {
        class T {
          constructor() {
            obj = { variant: "primary", size: "lg", text: null, onPress: null };
            intl = closure_0(closure_2[13]).intl;
            obj.text = intl.string(closure_0(closure_2[13]).t["yD/zkn"]);
            obj.onPress = closure_1;
            return jsx(closure_0(closure_2[14]).Button, obj);
          }
        }
      }
      if (cResult[9] === tmp6) {
        class T {
          constructor() {
            obj = { variant: "primary", size: "lg", text: null, onPress: null };
            intl = closure_0(closure_2[13]).intl;
            obj.text = intl.string(closure_0(closure_2[13]).t["yD/zkn"]);
            obj.onPress = closure_1;
            return jsx(closure_0(closure_2[14]).Button, obj);
          }
        }
        if (cResult[12] === tmp4.disabledView) {
          class T {
            constructor() {
              obj = { variant: "primary", size: "lg", text: null, onPress: null };
              intl = closure_0(closure_2[13]).intl;
              obj.text = intl.string(closure_0(closure_2[13]).t["yD/zkn"]);
              obj.onPress = closure_1;
              return jsx(closure_0(closure_2[14]).Button, obj);
            }
          }
        }
        const obj5 = { style: tmp4.disabledView, children: null };
        const items = [tmp10, tmp13];
        obj5.children = items;
        const tmp21 = closure_10(closure_4, obj5);
        cResult[12] = tmp4.disabledView;
        cResult[13] = tmp10;
        cResult[14] = tmp13;
        cResult[15] = tmp21;
      }
      const obj6 = { style: tmp4.guildIcon, icon: tmp6, size: tmp(5978).GuildIconSizes.XLARGE };
      const tmp17 = closure_8(GuildIconDefault, obj6);
      cResult[9] = tmp6;
      cResult[10] = tmp4.guildIcon;
      cResult[11] = tmp17;
    }
    ({ id: obj3.id, icon: obj3.icon } = guild);
    const guildIconURL = AvatarUtilsDefault.getGuildIconURL({ id: null, icon: null, size: 64, canAnimate: false });
    cResult[2] = guild.icon;
    cResult[3] = guild.id;
    cResult[4] = guildIconURL;
    tmp6 = guildIconURL;
    const obj10 = { id: null, icon: null, size: 64, canAnimate: false };
  }
  let obj = onPressClose(576);
}) : ((onPressClose) => {
  onPressClose = onPressClose.onPressClose;
  const tmp = closure_11();
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
    const obj6 = { style: tmp.disabledPauseIcon, source: _modDef12407 };
    const items = [closure_1_8(native.Icon, obj6), ];
    const obj7 = { style: tmp.guildIcon, icon: guildIconURL, size: null };
    const obj3 = { id: null, icon: null, size: 64, canAnimate: false };
    obj7.size = GuildIcon.GuildIconSizes.XLARGE;
    items[1] = closure_1_8(GuildIconDefault, obj7);
    obj5.children = items;
    const items1 = [v65535(React4, obj5), , , ];
    const obj8 = { style: tmp.disabledTitle, variant: "heading-xl/semibold", color: "text-feedback-critical", children: null };
    const intl = util.intl;
    obj8.children = intl.string(util.t.jlLX2Z);
    items1[1] = closure_1_8(Text_Text.Text, obj8);
    const obj9 = { style: tmp.disabledBody, variant: "text-md/normal", color: "text-default", children: null };
    const intl2 = util.intl;
    const obj11 = { articleLink: null };
    obj11.articleLink = HelpdeskUtilsDefault.getArticleURL(constants2.INVITE_DISABLED);
    obj9.children = intl2.format(util.t.RXSeLl, obj11);
    items1[2] = closure_1_8(Text_Text.Text, obj9);
    const obj20 = { variant: "primary", size: "lg", text: null, onPress: null };
    const intl3 = util.intl;
    obj20.text = intl3.string(util.t["yD/zkn"]);
    obj20.onPress = handlePressClose;
    items1[3] = closure_1_8(components_Button_Button.Button, obj20);
    obj4.children = items1;
    return v65535(options, obj4);
  }
});
ReactCompilerGating = fn(558);
let obj3 = { borderRadius: nativeDefault.radii.lg, opacity: 0.2, zIndex: -999 };
size = fn(2);
const result = size.fileFinishedImporting("modules/accept_invite/native/InviteError.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((inviteError) => {
  const cResult = c.c(6);
  inviteError = inviteError.inviteError;
  if (null == inviteError) {
    if (cResult[0] !== inviteError) {
      const obj2 = {};
      const merged = Object.assign(inviteError);
      const tmp23 = closure_1_8(closure_12, obj2);
      cResult[0] = inviteError;
      cResult[1] = tmp23;
    }
  } else if (inviteError.code === constants.INVITES_DISABLED) {
    if (cResult[2] !== inviteError) {
      const obj3 = {};
      const merged1 = Object.assign(inviteError);
      const tmp15 = closure_1_8(closure_13, obj3);
      cResult[2] = inviteError;
      cResult[3] = tmp15;
    }
  } else {
    if (cResult[4] !== inviteError) {
      const obj4 = {};
      const merged2 = Object.assign(inviteError);
      const tmp8 = closure_1_8(closure_12, obj4);
      cResult[4] = inviteError;
      cResult[5] = tmp8;
      let tmp2 = tmp8;
    } else {
      tmp2 = cResult[5];
    }
    return tmp2;
  }
}) : ((inviteError) => {
  inviteError = inviteError.inviteError;
  if (null == inviteError) {
    const obj2 = {};
    const merged = Object.assign(inviteError);
    let tmp7 = closure_1_8(closure_12, obj2);
  } else if (inviteError.code === constants.INVITES_DISABLED) {
    const obj3 = {};
    const merged1 = Object.assign(inviteError);
    tmp7 = closure_1_8(closure_13, obj3);
  } else {
    const obj = {};
    const merged2 = Object.assign(inviteError);
    tmp7 = closure_1_8(closure_12, obj);
  }
  return tmp7;
});