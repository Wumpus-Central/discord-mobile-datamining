// discord_app/modules/checkpoint/native/components/screens/CheckpointWelcomeScreen.tsx
import _mod17 from "../../../../../../_runtime/metro/00017__.js";
import initialize from "../../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import useWindowDimensionsDefault from "../../../../screen/useWindowDimensions.native.tsx";
import _modDef3285 from "../../../Checkpoint.messages.js";
import _modDef3317 from "../../../Checkpoint2026.messages.js";
import UserUtils from "../../../../../utils/UserUtils.tsx";
import CheckpointScreen from "../CheckpointScreen.tsx";
import useIsCheckpointWideDefault from "../../useIsCheckpointWide.tsx";
import CheckpointNavigationControls from "../CheckpointNavigationControls.tsx";
import TextWritingAnimation from "../TextWritingAnimation.tsx";
import CheckpointKnickKnacksDefault from "../CheckpointKnickKnacks.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import CheckpointConstants from "../../../CheckpointConstants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const CheckpointScreenDefault = CheckpointScreen;
const TextWritingAnimationDefault = TextWritingAnimation;

const View = _mod17.View;
({ CHECKPOINT_CONTROL_SIZE, CHECKPOINT_NAV_HEIGHT, CHECKPOINT_WIDE_HOME_START_GAP } = CheckpointConstants);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
let c7 = 100;
const PX_16 = nativeDefault.space.PX_16;
let closure_9 = 18 + CHECKPOINT_WIDE_HOME_START_GAP + CHECKPOINT_CONTROL_SIZE;
let obj = {
  container: { width: "100%", flexGrow: 1 },
  title: { transformOrigin: "left", width: 340 },
  oneLineTitle: { alignSelf: "stretch" },
  titleText: { textTransform: "uppercase", fontSize: 72, lineHeight: 72, letterSpacing: -2.88 },
  subtitle: { maxWidth: 327, marginTop: nativeDefault.space.PX_12 },
  content: { flex: 1, justifyContent: "center" },
  knickKnacks: null,
  wideContent: null,
  wideTitle: null,
  wideTitleText: null,
  wideSubtitle: null,
  wideSubtitleText: null,
};
let obj2 = { maxWidth: 327, marginTop: nativeDefault.space.PX_12 };
obj.knickKnacks = { marginTop: nativeDefault.space.PX_16 };
obj.wideContent = { flexGrow: 1, justifyContent: "center", alignItems: "center", paddingTop: CHECKPOINT_NAV_HEIGHT };
let obj3 = { marginTop: nativeDefault.space.PX_16 };
obj.wideTitle = { alignSelf: "stretch", marginVertical: -nativeDefault.space.PX_8 };
obj.wideTitleText = { textAlign: "center" };
let obj4 = { alignSelf: "stretch", marginVertical: -nativeDefault.space.PX_8 };
obj.wideSubtitle = { maxWidth: 558, marginTop: nativeDefault.space.PX_12 };
obj.wideSubtitleText = { textAlign: "center" };
let closure_10 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/CheckpointWelcomeScreen.tsx");

export default function CheckpointWelcomeScreen() {
  const tmp = closure_10();
  const bound = Math.min(useWindowDimensionsDefault().width / 392, 1);
  items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const name = UserUtils.useName(stateFromStores);
  const intl = util.intl;
  const stringResult = intl.string(_modDef3285["CdU/PF"]);
  let str = "Check\u200Bpoint";
  if ("Checkpoint" !== stringResult) {
    str = stringResult;
  }
  const tmp9 = useIsCheckpointWideDefault();
  const tmp10 = CheckpointScreen.useCheckpointScreenFrame().width >= 500;
  const tmp5Result = CheckpointScreen;
  const sum = PX_16 + Math.max(CheckpointNavigationControls.useCheckpointHomeControlsHeight(), closure_9);
  const tmp5Result2 = CheckpointNavigationControls;
  if (tmp9) {
    const obj3 = { centered: true, children: null };
    const obj4 = { style: null, children: null };
    const items1 = [tmp.wideContent];
    const obj5 = { paddingBottom: sum };
    items1[1] = obj5;
    obj4.style = items1;
    const obj6 = {
      isStepHeading: true,
      style: tmp.wideTitle,
      textStyle: null,
      text: null,
      accessibilityLabel: null,
      delay: null,
      variant: "display-lg",
      lineClamp: 1,
      adjustsFontSizeToFit: true,
    };
    const items2 = [,];
    ({ titleText: arr7[0], wideTitleText: arr7[1] } = tmp);
    obj6.textStyle = items2;
    obj6.text = str;
    obj6.accessibilityLabel = stringResult;
    obj6.delay = delay;
    const items3 = [hasOwnProperty(TextWritingAnimationDefault, obj6)];
    const obj7 = { style: null, textStyle: null, text: null, delay: null, variant: "heading-xl/medium" };
    ({ wideSubtitle: obj19.style, wideSubtitleText: obj19.textStyle } = tmp);
    const intl3 = util.intl;
    const obj8 = { username: name };
    obj7.text = intl3.formatToPlainString(_modDef3317.xhZ23b, obj8);
    obj7.delay = delay + TextWritingAnimation.DURATION;
    items3[1] = hasOwnProperty(TextWritingAnimationDefault, obj7);
    obj4.children = items3;
    obj3.children = timestampProducer(View, obj4);
    let obj15 = obj3;
    const tmp2Result4 = TextWritingAnimationDefault;
  } else {
    const obj9 = { style: null, children: null };
    const items4 = [tmp.container];
    const obj10 = { paddingBottom: sum };
    items4[1] = obj10;
    obj9.style = items4;
    const obj11 = { style: tmp.content, children: null };
    if (tmp10) {
      let oneLineTitle = tmp.oneLineTitle;
    } else {
      oneLineTitle = [tmp.title];
      const obj12 = { transform: null };
      const obj13 = { scale: bound };
      const items5 = [obj13];
      obj12.transform = items5;
      oneLineTitle[1] = obj12;
    }
    const obj14 = {
      isStepHeading: true,
      style: oneLineTitle,
      textStyle: tmp.titleText,
      text: str,
      accessibilityLabel: stringResult,
      delay,
      variant: "display-lg",
      lineClamp: null,
      adjustsFontSizeToFit: null,
    };
    let num;
    if (tmp10) {
      num = 1;
    }
    obj15 = { children: null };
    obj14.lineClamp = num;
    obj14.adjustsFontSizeToFit = tmp10;
    const items6 = [hasOwnProperty(TextWritingAnimationDefault, obj14), ,];
    const obj16 = { style: tmp.subtitle, text: null, delay: null, variant: "heading-xl/medium" };
    const tmp2Result5 = TextWritingAnimationDefault;
    const intl2 = util.intl;
    const obj17 = { username: name };
    obj16.text = intl2.formatToPlainString(_modDef3317.xhZ23b, obj17);
    obj16.delay = delay + TextWritingAnimation.DURATION;
    items6[1] = hasOwnProperty(TextWritingAnimationDefault, obj16);
    const obj18 = { style: tmp.knickKnacks };
    items6[2] = hasOwnProperty(CheckpointKnickKnacksDefault, obj18);
    obj11.children = items6;
    obj9.children = timestampProducer(View, obj11);
    obj15.children = hasOwnProperty(View, obj9);
    const tmp2Result6 = TextWritingAnimationDefault;
  }
  return hasOwnProperty(CheckpointScreenDefault, obj15);
}
