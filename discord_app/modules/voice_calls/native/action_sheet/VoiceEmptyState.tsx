// === Module 13781: VoiceEmptyState ===

// Module 13781 (VoiceEmptyState)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import _modDef13782 from "module_13782" /* 13782 */;
import JoinVoiceChannelButtonDefault from "JoinVoiceChannelButton" /* 13783 */;
import noop from "module_19" /* 19 */;
import TextStyles from "TextStyles" /* 5524 */;

require = fn;
const View = fn(17).View;
const Fonts = fn(1074).Fonts;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { container: { justifyContent: "center" }, button: { paddingHorizontal: 12, paddingTop: 16 }, emptyTitle: null, emptyBody: null };
createStyles = {};
const merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
createStyles.textTransform = "none";
createStyles.lineHeight = 24;
createStyles.emptyTitle = createStyles;
const obj1 = {};
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_SUBTLE, 16));
obj1.lineHeight = 20;
obj1.fontWeight = "600";
createStyles.emptyBody = obj1;
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceEmptyState.tsx");

export default function VoiceEmptyState(channel) {
  const tmp = closure_6();
  let obj = { style: null, children: null };
  const items = [tmp.container, ];
  obj = { paddingBottom: useSafeAreaInsetsDefault().bottom };
  items[1] = obj;
  obj.style = items;
  obj = { title: null, body: null, lightSource: null, darkSource: null, titleStyle: null, bodyStyle: null, imageStyle: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["/HABZo"]);
  const intl2 = util.intl;
  obj.body = intl2.string(util.t["5Jy2FY"]);
  obj.lightSource = _modDef13782;
  obj.darkSource = _modDef13782;
  ({ emptyTitle: obj3.titleStyle, emptyBody: obj3.bodyStyle } = tmp);
  obj.imageStyle = { marginBottom: 16, marginTop: 20 };
  const items1 = [React4(native.ThemedEmptyState, obj), React4(JoinVoiceChannelButtonDefault, { channel: channel.channel, style: tmp.button })];
  obj.children = items1;
  return hasOwnProperty(View, obj);
};