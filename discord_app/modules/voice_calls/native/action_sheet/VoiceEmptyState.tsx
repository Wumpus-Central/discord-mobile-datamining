// discord_app/modules/voice_calls/native/action_sheet/VoiceEmptyState.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import _modDef13889 from "../../../../../_runtime/metro/13889__.js";
import JoinVoiceChannelButtonDefault from "JoinVoiceChannelButton.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import TextStyles_mod from "../../../rebrand/native/TextStyles.tsx";

require = fn;
const View = fn(17).View;
const Fonts = fn(1074).Fonts;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4638);
const obj2 = {
  container: { justifyContent: "center" },
  button: { paddingHorizontal: 12, paddingTop: 16 },
  emptyTitle: null,
  emptyBody: null,
};
const obj3 = {};
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
obj3.textTransform = "none";
obj3.lineHeight = 24;
obj2.emptyTitle = obj3;
let obj4 = {};
let TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_SUBTLE, 16));
obj4.lineHeight = 20;
obj4.fontWeight = "600";
obj2.emptyBody = obj4;
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceEmptyState.tsx");

export default function VoiceEmptyState(channel) {
  const tmp = closure_6();
  const obj = { style: null, children: null };
  const items = [tmp.container, { paddingBottom: useSafeAreaInsetsDefault().bottom }];
  obj.style = items;
  const obj4 = {
    title: null,
    body: null,
    lightSource: null,
    darkSource: null,
    titleStyle: null,
    bodyStyle: null,
    imageStyle: null,
  };
  const intl = util.intl;
  obj4.title = intl.string(util.t["/HABZo"]);
  const intl2 = util.intl;
  obj4.body = intl2.string(util.t["5Jy2FY"]);
  obj4.lightSource = _modDef13889;
  obj4.darkSource = _modDef13889;
  ({ emptyTitle: obj3.titleStyle, emptyBody: obj3.bodyStyle } = tmp);
  obj4.imageStyle = { marginBottom: 16, marginTop: 20 };
  const items1 = [
    React4(native.ThemedEmptyState, obj4),
    React4(JoinVoiceChannelButtonDefault, { channel: channel.channel, style: tmp.button }),
  ];
  obj.children = items1;
  return hasOwnProperty(View, obj);
}
