// discord_app/modules/accept_invite/native/InviteError.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import shared from "../../../design/shared.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import GuildIcon from "../../guild/native/GuildIcon.tsx";
import InviteErrorUtils from "../../../utils/InviteErrorUtils.tsx";
import _modDef12221 from "../../../../_runtime/metro/12221__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const GuildIconDefault = GuildIcon;

require = fn;
function InviteErrorBase(invite) {
  ({ onPressClose: require, inviteError } = invite);
  const tmp = closure_11();
  const tmp4Result = importDefault(shared.isThemeDark(useThemeDefault()) ? 12218 : 12219);
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
  const items = [React6(React3, { style: tmp.expiredImage, source: tmp4Result }), , ,];
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
  items[1] = React6(Text_Text.Text, obj3);
  items[2] = React6(Text_Text.Text, {
    style: tmp.expiredBody,
    variant: "text-sm/medium",
    color: "text-default",
    children: stringResult,
  });
  const obj6 = { variant: "primary", size: "lg", text: null, onPress: null };
  const intl4 = util.intl;
  obj6.text = intl4.string(util.t.wcqOoF);
  obj6.onPress = handlePressClose;
  items[3] = React6(components_Button_Button.Button, obj6);
  obj4.children = items;
  return closure_1_10(React7, obj4);
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
    ({ id: obj2.id, icon: obj2.icon } = guild);
    const obj4 = { children: null };
    const obj5 = { style: tmp.disabledView, children: null };
    const guildIconURL = AvatarUtilsDefault.getGuildIconURL({ id: null, icon: null, size: 64, canAnimate: false });
    const obj6 = { style: tmp.disabledPauseIcon, source: _modDef12221 };
    const items = [React6(native.Icon, obj6)];
    const obj7 = { style: tmp.guildIcon, icon: guildIconURL, size: null };
    const obj3 = { id: null, icon: null, size: 64, canAnimate: false };
    obj7.size = GuildIcon.GuildIconSizes.XLARGE;
    items[1] = React6(GuildIconDefault, obj7);
    obj5.children = items;
    const items1 = [closure_1_10(React4, obj5), , ,];
    const obj8 = {
      style: tmp.disabledTitle,
      variant: "heading-xl/semibold",
      color: "text-feedback-critical",
      children: null,
    };
    const intl = util.intl;
    obj8.children = intl.string(util.t.jlLX2Z);
    items1[1] = React6(Text_Text.Text, obj8);
    const obj9 = { style: tmp.disabledBody, variant: "text-md/normal", color: "text-default", children: null };
    const intl2 = util.intl;
    const obj11 = { articleLink: null };
    obj11.articleLink = HelpdeskUtilsDefault.getArticleURL(constants2.INVITE_DISABLED);
    obj9.children = intl2.format(util.t.RXSeLl, obj11);
    items1[2] = React6(Text_Text.Text, obj9);
    const obj20 = { variant: "primary", size: "lg", text: null, onPress: null };
    const intl3 = util.intl;
    obj20.text = intl3.string(util.t["yD/zkn"]);
    obj20.onPress = handlePressClose;
    items1[3] = React6(components_Button_Button.Button, obj20);
    obj4.children = items1;
    return closure_1_10(React7, obj4);
  }
}
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const Constants = fn(1074);
({ AbortCodes: hasOwnProperty, HelpdeskArticles: metroRequire, InviteStates: closure_7 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4829);
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
let closure_11 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/accept_invite/native/InviteError.tsx");

export default function InviteError(inviteError) {
  inviteError = inviteError.inviteError;
  if (null == inviteError) {
    const obj2 = {};
    const merged = Object.assign(inviteError);
    let tmp7 = React6(InviteErrorBase, obj2);
  } else if (inviteError.code === constants.INVITES_DISABLED) {
    const obj3 = {};
    const merged1 = Object.assign(inviteError);
    tmp7 = React6(InviteDisabledError, obj3);
  } else {
    const obj = {};
    const merged2 = Object.assign(inviteError);
    tmp7 = React6(InviteErrorBase, obj);
  }
  return tmp7;
}
