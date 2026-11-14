// === Module 14508: CheckpointMessagesStatsScreen ===

// Module 14508 (CheckpointMessagesStatsScreen)
import _mod17 from "module_17" /* 17 */;
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef3285 from "module_3285" /* 3285 */;
import _modDef3317 from "module_3317" /* 3317 */;
import CheckpointConstants from "CheckpointConstants" /* 6377 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 6747 */;
import ChatIcon from "ChatIcon" /* 8069 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 14270 */;
import CheckpointTextDefault from "CheckpointText" /* 14271 */;
import CheckpointApngPlayerDefault from "CheckpointApngPlayer" /* 14273 */;
import useIsCheckpointWide from "useIsCheckpointWide" /* 14485 */;
import CheckpointGlobalStatNumberDefault from "CheckpointGlobalStatNumber" /* 14504 */;
import CheckpointCountUpStatNumberDefault from "CheckpointCountUpStatNumber" /* 14505 */;
import CheckpointNumberUtils from "CheckpointNumberUtils" /* 14506 */;
import CheckpointEmphasisDefault from "CheckpointEmphasis" /* 14507 */;
import _modDef14509 from "module_14509" /* 14509 */;
import _modDef14510 from "module_14510" /* 14510 */;
import CheckpointStore from "CheckpointStore" /* 14253 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

const useIsCheckpointWideDefault = useIsCheckpointWide;

const View = _mod17.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
let obj = { container: { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 }, title: null, titleText: null, imageContainer: null, image: null, copy: null, number: null, wideContainer: null, wideImageContainer: null, wideImage: null, wideCopy: null };
let obj2 = { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 };
obj.title = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.titleText = { flexShrink: 1 };
obj.imageContainer = { flexGrow: 1, height: "50%", justifyContent: "center", alignItems: "center" };
obj.image = { height: "100%", aspectRatio: 0.6498194945848376 };
obj.copy = { flexShrink: 1 };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.number = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
let obj4 = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
obj.wideContainer = { flexGrow: 1, flexDirection: "row", alignItems: "center", alignSelf: "center", width: "100%", maxWidth: useIsCheckpointWide.CHECKPOINT_WIDE_MAX_WIDTH };
let obj5 = { flexGrow: 1, flexDirection: "row", alignItems: "center", alignSelf: "center", width: "100%", maxWidth: useIsCheckpointWide.CHECKPOINT_WIDE_MAX_WIDTH };
obj.wideImageContainer = { width: "50%", alignSelf: "stretch", flexDirection: "row", justifyContent: "center", alignItems: "center", paddingRight: nativeDefault.space.PX_32 };
obj.wideImage = { maxHeight: 480 };
let obj6 = { width: "50%", alignSelf: "stretch", flexDirection: "row", justifyContent: "center", alignItems: "center", paddingRight: nativeDefault.space.PX_32 };
obj.wideCopy = { width: "50%", paddingLeft: nativeDefault.space.PX_32 };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointMessagesStatsScreen.tsx");

export default function CheckpointMessagesStatsScreen() {
  const tmp = closure_8();
  const tmp4 = useIsCheckpointWideDefault();
  items = [CheckpointStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    const stats = CheckpointStore.stats;
    let messages;
    if (stats != null) {
      messages = stats.messages;
    }
    return messages;
  });
  const items1 = [CheckpointStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => {
    const globalStats = CheckpointStore.globalStats;
    let numWordsSent;
    if (globalStats != null) {
      const messages = globalStats.messages;
      if (messages != null) {
        numWordsSent = messages.numWordsSent;
      }
    }
    return numWordsSent;
  });
  let num;
  if (stateFromStores != null) {
    num = stateFromStores.numMessagesSent;
  }
  if (num == null) {
    num = 0;
  }
  const rounded = Math.round(num);
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.numMessagesSentPercentile;
  }
  const checkpointTopPercent = CheckpointStatsUtils.getCheckpointTopPercent(prop);
  const intl = util.intl;
  if (rounded <= 0 && null != stateFromStores1) {
    let wWKySP = _modDef3317["2BuyVC"];
  } else {
    wWKySP = _modDef3285.wWKySP;
  }
  const tmp5Result = CheckpointStatsUtils;
  let formatToPlainStringResult;
  if (!(rounded <= 0 && null != stateFromStores1)) {
    if (null != checkpointTopPercent) {
      const intl2 = util.intl;
      const obj3 = { percent: checkpointTopPercent };
      formatToPlainStringResult = intl2.formatToPlainString(_modDef3317.wHn2YM, obj3);
    }
  }
  const obj4 = { centered: tmp4, children: null };
  const obj5 = { style: tmp4 ? tmp.wideContainer : tmp.container, children: null };
  const obj6 = { style: tmp4 ? tmp.wideImageContainer : tmp.imageContainer, children: null };
  const stringResult = intl.string(wWKySP);
  const obj7 = { animatedUri: null, staticUri: null, style: null };
  const tmp2Result = CheckpointScreenDefault;
  obj7.animatedUri = _modDef14509;
  obj7.staticUri = _modDef14510;
  const items2 = [tmp.image, ];
  let wideImage = tmp4;
  if (tmp4) {
    wideImage = tmp.wideImage;
  }
  items2[1] = wideImage;
  obj7.style = items2;
  obj6.children = timestampProducer(CheckpointApngPlayerDefault, obj7);
  const items3 = [timestampProducer(View, obj6), ];
  const obj8 = { style: tmp4 ? tmp.wideCopy : tmp.copy, children: null };
  const obj9 = { style: tmp.title, children: null };
  const items4 = [timestampProducer(ChatIcon.ChatIcon, { size: "xs", color: CHECKPOINT_PRIMARY }), ];
  const obj11 = { isStepHeading: true, variant: "heading-sm/semibold", style: tmp.titleText, children: null };
  const obj10 = { size: "xs", color: CHECKPOINT_PRIMARY };
  const tmp2Result4 = CheckpointApngPlayerDefault;
  obj11.children = stringResult.toLocaleUpperCase();
  items4[1] = timestampProducer(CheckpointTextDefault, obj11);
  obj9.children = items4;
  const items5 = [metroImportDefault(View, obj9), , ];
  if (rounded <= 0 && null != stateFromStores1) {
    const obj12 = { value: stateFromStores1 };
    let tmp13Result = timestampProducer(CheckpointGlobalStatNumberDefault, obj12);
  } else {
    const obj13 = { accessible: true, accessibilityLabel: CheckpointNumberUtils.formatCheckpointStatAccessibilityLabel("messages", rounded), style: tmp.number, children: null };
    const obj14 = { end: rounded };
    obj13.children = timestampProducer(CheckpointCountUpStatNumberDefault, obj14);
    tmp13Result = timestampProducer(View, obj13);
    const tmp5Result5 = CheckpointNumberUtils;
  }
  items5[1] = tmp13Result;
  const obj15 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: null };
  const tmp2Result5 = CheckpointTextDefault;
  if (rounded <= 0 && null != stateFromStores1) {
    const intl5 = util.intl;
    const obj16 = { numWords: CheckpointStatsUtils.formatCheckpointCompactNumber(stateFromStores1), numCopies: null };
    const tmp5Result6 = CheckpointStatsUtils;
    const tmp5Result7 = CheckpointStatsUtils;
    obj16.numCopies = tmp5Result7.formatCheckpointCompactNumber(CheckpointStatsUtils.getCheckpointOdysseyCopies(stateFromStores1));
    let formatToPlainStringResult1 = intl5.formatToPlainString(_modDef3317.bAxEs2, obj16);
    const tmp5Result8 = CheckpointStatsUtils;
  } else if (null != checkpointTopPercent) {
    const intl4 = util.intl;
    const obj17 = {
      percent: checkpointTopPercent,
      percentHook(children, arg1) {
          return closure_1_6(CheckpointEmphasisDefault, { children }, arg1);
        }
    };
    formatToPlainStringResult1 = intl4.format(_modDef3317.TOMBAW, obj17);
  } else {
    const intl3 = util.intl;
    const obj18 = { numMessages: rounded };
    formatToPlainStringResult1 = intl3.format(_modDef3317.cYCqz8, obj18);
  }
  obj15.children = formatToPlainStringResult1;
  items5[2] = timestampProducer(CheckpointTextDefault, obj15);
  obj8.children = items5;
  items3[1] = metroImportDefault(View, obj8);
  obj5.children = items3;
  obj4.children = metroImportDefault(View, obj5);
  return timestampProducer(tmp2Result, obj4);
};