// === Module 16057: CheckpointNavigationControls ===

// Module 16057 (CheckpointNavigationControls)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import _modDef3034 from "module_3034" /* 3034 */;
import CheckpointTextDefault from "CheckpointText" /* 16042 */;
import CheckpointButtonDefault from "CheckpointButton" /* 16058 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import CheckpointConstants from "CheckpointConstants" /* 5052 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4827 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let obj = { container: null, homeContainer: null, link: null, routeControls: null, control: null, nextContainer: null, nextShadow: null, nextControl: null };
let rect = { position: "absolute", left: nativeDefault.space.PX_24, right: nativeDefault.space.PX_24, bottom: nativeDefault.space.PX_16 };
obj.container = rect;
obj.homeContainer = { gap: nativeDefault.space.PX_24 };
obj.link = { textDecorationLine: "underline" };
obj.routeControls = { flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj.control = { width: 48, height: 48, alignItems: "center", justifyContent: "center" };
obj.nextContainer = { width: 52, height: 52, paddingRight: 4, paddingBottom: 4 };
obj.nextShadow = { position: "absolute", top: 4, left: 4, right: 0, bottom: 0, backgroundColor: CheckpointConstants.CHECKPOINT_BUTTON_SHADOW };
let obj2 = { gap: nativeDefault.space.PX_24 };
obj.nextControl = { borderWidth: 2, borderColor: CHECKPOINT_PRIMARY, backgroundColor: nativeDefault.colors.BLACK };
let closure_9 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointNavigationControls.tsx");

export default function CheckpointNavigationControls(onNext) {
  onNext = onNext.onNext;
  ({ onBack, isTerminal, isHome } = onNext);
  const tmp = closure_9();
  _require = tmp;
  const rect = useSafeAreaInsetsDefault();
  const items = [tmp.container, { marginLeft: rect.left, marginRight: rect.right, marginBottom: rect.bottom }];
  let obj = { style: null, children: null };
  const items1 = [items, ];
  if (isHome) {
    items1[1] = tmp.homeContainer;
    obj.style = items1;
    const obj2 = { Icon: require("PlayIcon").PlayIcon, label: null, onPress: null };
    const intl3 = require("util").intl;
    obj2.label = intl3.string(require("util").t.I0v0Qv);
    obj2.onPress = onNext;
    const items2 = [closure_7(CheckpointButtonDefault, obj2), ];
    const obj3 = { variant: "text-sm/medium", children: null };
    const tmp2Result = CheckpointButtonDefault;
    const intl4 = require("util").intl;
    const obj4 = {
      learnMoreHook(children, arg1) {
          return React5(CheckpointTextDefault, {
            variant: "text-sm/medium",
            style: link.link,
            onPress() {
              const obj = closure_1_1(4518);
              return obj.openURL(closure_1_1(2108).getArticleURL(constants.CHECKPOINT));
            },
            accessibilityRole: "link",
            children
          }, arg1);
        }
    };
    obj3.children = intl4.format(_modDef3034.hcNhyq, obj4);
    items2[1] = closure_7(CheckpointTextDefault, obj3);
    obj.children = items2;
    let tmp10 = obj;
    const tmp2Result2 = CheckpointTextDefault;
  } else {
    items1[1] = tmp.routeControls;
    obj.style = items1;
    const obj5 = { style: tmp.control, onPress: onBack, accessibilityRole: "button", accessibilityLabel: null, children: null };
    const intl = require("util").intl;
    obj5.accessibilityLabel = intl.string(require("util").t["13/7kX"]);
    const obj6 = { color: CHECKPOINT_PRIMARY };
    obj5.children = closure_7(require("ArrowLargeLeftIcon").ArrowLargeLeftIcon, obj6);
    const items3 = [closure_7(closure_3, obj5), ];
    const obj7 = { style: tmp.nextContainer, children: null };
    const obj8 = { style: tmp.nextShadow };
    const items4 = [closure_7(closure_4, obj8), ];
    const obj9 = { style: null, onPress: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
    const items5 = [, ];
    ({ control: arr5[0], nextControl: arr5[1] } = tmp);
    obj9.style = items5;
    obj9.onPress = onNext;
    const intl2 = require("util").intl;
    const t = require("util").t;
    obj9.accessibilityLabel = intl2.string(isTerminal ? t.i4jeWR : t.PDTjLN);
    const obj10 = { color: CHECKPOINT_PRIMARY };
    obj9.children = closure_7(require("ArrowLargeRightIcon").ArrowLargeRightIcon, obj10);
    items4[1] = closure_7(closure_3, obj9);
    obj7.children = items4;
    items3[1] = closure_8(closure_4, obj7);
    obj.children = items3;
    tmp10 = obj;
  }
  return closure_8(closure_4, tmp10);
};