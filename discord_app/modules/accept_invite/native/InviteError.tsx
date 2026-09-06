// === Module 12721: InviteError ===

// Module 12721 (InviteError)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import shared from "shared" /* 4411 */;
import useThemeDefault from "useTheme" /* 4495 */;
import Text_Text from "Text/Text" /* 4556 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import GuildIcon from "GuildIcon" /* 5584 */;
import InviteErrorUtils from "InviteErrorUtils" /* 12724 */;
import _modDef12725 from "module_12725" /* 12725 */;
import noop from "module_19" /* 19 */;

const GuildIconDefault = GuildIcon;

require = fn;
function InviteErrorBase(invite) {
  ({ onPressClose: require, inviteError } = invite);
  const tmp = closure_11();
  let obj = shared;
  const tmp4Result = importDefault(obj.isThemeDark(useThemeDefault()) ? 12722 : 12723);
  let code;
  if (inviteError != null) {
    code = inviteError.code;
  }
  const descriptiveInviteError = InviteErrorUtils.getDescriptiveInviteError(code);
  if (invite.invite.state === constants3.BANNED) {
    const intl2 = tmp2(1114).intl;
    let stringResult = intl2.string(tmp2(1114).t["GzD/aa"]);
  } else {
    stringResult = undefined;
    if (descriptiveInviteError != null) {
      stringResult = descriptiveInviteError.description;
    }
    if (stringResult == null) {
      const intl = tmp2(1114).intl;
      stringResult = intl.string(tmp2(1114).t.FWkU6P);
    }
  }
  obj = { style: tmp.expiredImage, source: tmp4Result };
  const items = [React6(React3, obj), , , ];
  obj = { style: tmp.expiredTitle, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  let title;
  if (descriptiveInviteError != null) {
    title = descriptiveInviteError.title;
  }
  if (title == null) {
    const intl3 = tmp2(1114).intl;
    title = intl3.string(tmp2(1114).t.u9zxnX);
  }
  const obj1 = { children: null };
  obj.children = title;
  function handlePressClose() {
    require();
  }
  items[1] = React6(Text_Text.Text, obj);
  items[2] = React6(Text_Text.Text, { style: tmp.expiredBody, variant: "text-sm/medium", color: "text-default", children: stringResult });
  const obj3 = { variant: "primary", size: "lg", text: null, onPress: null };
  const intl4 = tmp2(1114).intl;
  obj3.text = intl4.string(util.t.wcqOoF);
  obj3.onPress = handlePressClose;
  items[3] = React6(components_Button_Button.Button, obj3);
  obj1.children = items;
  return closure_1_10(React7, obj1);
}
function InviteDisabledError(onPressClose) {
  onPressClose = onPressClose.onPressClose;
  const tmp = closure_11();
  const guild = onPressClose.invite.guild;
  if (null == guild) {
    return null;
  } else {
    function handlePressClose() {
      onPressClose();
    }
    let obj = { id: null, icon: null, size: 64, canAnimate: false };
    ({ id: obj2.id, icon: obj2.icon } = guild);
    obj = { children: null };
    const obj1 = { style: tmp.disabledView, children: null };
    const guildIconURL = obj.getGuildIconURL(obj);
    const obj2 = { style: tmp.disabledPauseIcon, source: _modDef12725 };
    const items = [React6(native.Icon, obj2), ];
    const obj3 = { style: tmp.guildIcon, icon: guildIconURL, size: GuildIcon.GuildIconSizes.XLARGE };
    items[1] = React6(GuildIconDefault, obj3);
    obj1.children = items;
    const items1 = [closure_1_10(React4, obj1), , , ];
    const obj4 = { style: tmp.disabledTitle, variant: "heading-xl/semibold", color: "text-feedback-critical", children: null };
    const intl = util.intl;
    obj4.children = intl.string(util.t.jlLX2Z);
    items1[1] = React6(Text_Text.Text, obj4);
    const obj5 = { style: tmp.disabledBody, variant: "text-md/normal", color: "text-default", children: null };
    const intl2 = util.intl;
    const obj6 = { articleLink: null };
    obj6.articleLink = HelpdeskUtilsDefault.getArticleURL(constants2.INVITE_DISABLED);
    obj5.children = intl2.format(util.t.RXSeLl, obj6);
    items1[2] = React6(Text_Text.Text, obj5);
    const obj7 = { variant: "primary", size: "lg", text: null, onPress: null };
    const intl3 = util.intl;
    obj7.text = intl3.string(util.t["yD/zkn"]);
    obj7.onPress = handlePressClose;
    items1[3] = React6(components_Button_Button.Button, obj7);
    obj.children = items1;
    return closure_1_10(React7, obj);
  }
}
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const Constants = fn(1074);
({ AbortCodes: hasOwnProperty, HelpdeskArticles: metroRequire, InviteStates: closure_7 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = { expiredImage: { marginTop: 32, marginBottom: 32 }, expiredTitle: { marginBottom: 8, backgroundColor: "transparent", textAlign: "center" }, expiredBody: { backgroundColor: "transparent", marginBottom: 24 }, disabledView: { justifyContent: "center", alignItems: "center" }, disabledPauseIcon: null, guildIcon: null, disabledTitle: null, disabledBody: null };
let size = { position: "absolute", alignSelf: "center", tintColor: nativeDefault.colors.WHITE, width: 42, height: 42 };
createStyles.disabledPauseIcon = size;
createStyles = { borderRadius: nativeDefault.radii.lg, opacity: 0.2, zIndex: -999 };
createStyles.guildIcon = createStyles;
createStyles.disabledTitle = { marginTop: 16, marginBottom: 8, textAlign: "center" };
createStyles.disabledBody = { textAlign: "center", marginBottom: 16 };
let closure_11 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/accept_invite/native/InviteError.tsx");

export default function InviteError(inviteError) {
  inviteError = inviteError.inviteError;
  if (null == inviteError) {
    let obj = {};
    const merged = Object.assign(inviteError);
    let tmp7 = React6(InviteErrorBase, obj);
  } else if (inviteError.code === constants.INVITES_DISABLED) {
    obj = {};
    const merged1 = Object.assign(inviteError);
    tmp7 = React6(InviteDisabledError, obj);
  } else {
    obj = {};
    const merged2 = Object.assign(inviteError);
    tmp7 = React6(InviteErrorBase, obj);
  }
  return tmp7;
};