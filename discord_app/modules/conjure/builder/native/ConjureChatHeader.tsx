// === Module 12531: ConjureChatHeader ===

// Module 12531 (ConjureChatHeader)
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1626 */;
import PressableNavigatorBackIcon from "PressableNavigatorBackIcon" /* 9793 */;
import ClientThemesOverrides from "ClientThemesOverrides" /* 9800 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const MIN_HEADER_HEIGHT = fn(9792).MIN_HEADER_HEIGHT;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5009);
let closure_8 = createStyles.createStyles((paddingTop) => {
  const obj = { header: { flexDirection: "row", alignItems: "center", flexShrink: 0, paddingTop, minHeight: paddingTop + MIN_HEADER_HEIGHT, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, title: null, actions: null, border: null };
  const obj2 = { flexDirection: "row", alignItems: "center", flexShrink: 0, paddingTop, minHeight: paddingTop + MIN_HEADER_HEIGHT, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  obj.title = { flex: 1, flexDirection: "row", alignItems: "center", paddingEnd: nativeDefault.space.PX_8 };
  const obj3 = { flex: 1, flexDirection: "row", alignItems: "center", paddingEnd: nativeDefault.space.PX_8 };
  obj.actions = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, marginEnd: nativeDefault.space.PX_16 };
  const obj5 = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj5.top = undefined;
  obj5.height = 1;
  obj5.backgroundColor = nativeDefault.colors.STANDALONE_CHANNEL_HEADER_BORDER;
  obj.border = obj5;
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureChatHeader.tsx");

export default function ConjureChatHeader(actions) {
  actions = actions.actions;
  ({ title, onBack, showBorder } = actions);
  const tmp2 = closure_8(useSafeAreaInsetsDefault().top);
  const obj2 = { style: null, children: null };
  const items = [tmp2.header, ClientThemesOverrides.useGradientTop()];
  obj2.style = items;
  let tmp6 = null;
  if (showBorder) {
    const obj3 = { style: tmp2.border };
    tmp6 = timestampProducer(React4, obj3);
  }
  const items1 = [tmp6, timestampProducer(PressableNavigatorBackIcon.PressableNavigatorBackIcon, { onPress: onBack }), timestampProducer(React4, { style: tmp2.title, children: title }), ];
  let tmp8Result = null;
  if (null != actions) {
    const obj5 = { style: tmp2.actions, children: actions };
    tmp8Result = timestampProducer(React4, obj5);
  }
  items1[3] = tmp8Result;
  obj2.children = items1;
  return React5(React4, obj2);
};