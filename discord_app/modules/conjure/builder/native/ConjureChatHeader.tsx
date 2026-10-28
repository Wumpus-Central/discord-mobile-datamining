// === Module 12327: ConjureChatHeader ===

// Module 12327 (ConjureChatHeader)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import PressableNavigatorBackIcon from "PressableNavigatorBackIcon" /* 9735 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const MIN_HEADER_HEIGHT = fn(9734).MIN_HEADER_HEIGHT;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5004);
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
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureChatHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureChatHeader(arg0) {
  const cResult = c.c(17);
  ({ title, actions, onBack, showBorder } = arg0);
  const tmp4 = closure_8(useSafeAreaInsetsDefault().top);
  if (cResult[0] === showBorder) {
    if (cResult[1] === tmp4.border) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] !== onBack) {
      const obj2 = { onPress: onBack };
      const tmp11 = timestampProducer(PressableNavigatorBackIcon.PressableNavigatorBackIcon, obj2);
      cResult[3] = onBack;
      cResult[4] = tmp11;
      let tmp9 = tmp11;
    } else {
      tmp9 = cResult[4];
    }
    if (cResult[5] === tmp4.title) {
      if (cResult[6] === title) {
        let tmp12 = cResult[7];
      }
      if (cResult[8] === actions) {
        if (cResult[9] === tmp4.actions) {
          let tmp16 = cResult[10];
        }
        if (cResult[11] === tmp4.header) {
          if (cResult[12] === tmp5) {
            if (cResult[13] === tmp9) {
              if (cResult[14] === tmp12) {
                if (cResult[15] === tmp16) {
                  let tmp20 = cResult[16];
                }
                return tmp20;
              }
            }
          }
        }
        const obj3 = { style: tmp4.header, children: null };
        const items = [tmp5, tmp9, tmp12, tmp16];
        obj3.children = items;
        const tmp23 = React5(React4, obj3);
        cResult[11] = tmp4.header;
        cResult[12] = tmp5;
        cResult[13] = tmp9;
        cResult[14] = tmp12;
        cResult[15] = tmp16;
        cResult[16] = tmp23;
        tmp20 = tmp23;
      }
      let tmp17 = null;
      if (null != actions) {
        const obj4 = { style: tmp4.actions, children: actions };
        tmp17 = timestampProducer(React4, obj4);
      }
      cResult[8] = actions;
      cResult[9] = tmp4.actions;
      cResult[10] = tmp17;
      tmp16 = tmp17;
    }
    const obj5 = { style: tmp4.title, children: title };
    const tmp15 = timestampProducer(React4, obj5);
    cResult[5] = tmp4.title;
    cResult[6] = title;
    cResult[7] = tmp15;
    tmp12 = tmp15;
  }
  let tmp6 = null;
  if (showBorder) {
    const obj6 = { style: tmp4.border };
    tmp6 = timestampProducer(React4, obj6);
  }
  cResult[0] = showBorder;
  cResult[1] = tmp4.border;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (function ConjureChatHeader(actions) {
  actions = actions.actions;
  ({ title, onBack, showBorder } = actions);
  const tmp2 = closure_8(useSafeAreaInsetsDefault().top);
  const obj = { style: tmp2.header, children: null };
  let tmp5 = null;
  if (showBorder) {
    const obj2 = { style: tmp2.border };
    tmp5 = timestampProducer(React4, obj2);
  }
  const items = [tmp5, timestampProducer(PressableNavigatorBackIcon.PressableNavigatorBackIcon, { onPress: onBack }), timestampProducer(React4, { style: tmp2.title, children: title }), ];
  let tmp7Result = null;
  if (null != actions) {
    const obj4 = { style: tmp2.actions, children: actions };
    tmp7Result = timestampProducer(React4, obj4);
  }
  items[3] = tmp7Result;
  obj.children = items;
  return React5(React4, obj);
});