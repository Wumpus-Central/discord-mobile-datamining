// === Module 13639: CheckpointMessagesStatsScreen ===

// Module 13639 (CheckpointMessagesStatsScreen)
import _mod17 from "module_17" /* 17 */;
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef3060 from "module_3060" /* 3060 */;
import _modDef3092 from "module_3092" /* 3092 */;
import CheckpointConstants from "CheckpointConstants" /* 6066 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 6437 */;
import ChatIcon from "ChatIcon" /* 8643 */;
import CheckpointEmphasisDefault from "CheckpointEmphasis" /* 13638 */;
import CheckpointStore from "CheckpointStore" /* 13421 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let obj = { container: { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 }, title: null, titleText: null, imageContainer: null, image: null, copy: null, number: null };
let obj2 = { width: "100%", flexGrow: 1, gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 };
obj.title = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.titleText = { flexShrink: 1 };
obj.imageContainer = { flexGrow: 1, height: "50%", justifyContent: "center", alignItems: "center" };
obj.image = { height: "100%", aspectRatio: 0.6498194945848376 };
obj.copy = { flexShrink: 1 };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.number = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointMessagesStatsScreen.tsx");

export default function CheckpointMessagesStatsScreen() {
  const tmp = closure_8();
  const items = [CheckpointStore];
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
    let wWKySP = _modDef3092["2BuyVC"];
    let tmp11 = importDefault;
  } else {
    wWKySP = _modDef3060.wWKySP;
    tmp11 = importDefault;
  }
  const stringResult = intl.string(wWKySP);
  let formatToPlainStringResult;
  if (!(rounded <= 0 && null != stateFromStores1)) {
    if (null != checkpointTopPercent) {
      const intl2 = util.intl;
      const obj3 = { percent: checkpointTopPercent };
      formatToPlainStringResult = intl2.formatToPlainString(tmp11(3092).wHn2YM, obj3);
    }
  }
  const obj4 = { style: tmp.container, children: null };
  const obj5 = { style: tmp.imageContainer, children: null };
  const tmp2Result = CheckpointStatsUtils;
  const obj6 = { animatedUri: null, staticUri: null, style: null };
  const tmp11Result = tmp11(13622);
  obj6.animatedUri = tmp11(13640);
  obj6.staticUri = tmp11(13641);
  obj6.style = tmp.image;
  obj5.children = timestampProducer(tmp11(13629), obj6);
  const items2 = [timestampProducer(View, obj5), ];
  const obj7 = { style: tmp.copy, children: null };
  const obj8 = { style: tmp.title, children: null };
  const items3 = [timestampProducer(ChatIcon.ChatIcon, { size: "xs", color: CHECKPOINT_PRIMARY }), ];
  const obj10 = { isStepHeading: true, variant: "heading-md/extrabold", style: tmp.titleText, children: null };
  const obj9 = { size: "xs", color: CHECKPOINT_PRIMARY };
  const tmp11Result4 = tmp11(13629);
  obj10.children = stringResult.toLocaleUpperCase();
  items3[1] = timestampProducer(tmp11(13624), obj10);
  obj8.children = items3;
  const items4 = [React5(View, obj8), , ];
  if (rounded <= 0 && null != stateFromStores1) {
    const obj11 = { value: stateFromStores1 };
    let tmp13Result = timestampProducer(tmp11(13636), obj11);
  } else {
    const obj12 = { accessible: true, accessibilityLabel: null, style: null, children: null };
    const _HermesInternal = HermesInternal;
    obj12.accessibilityLabel = "" + rounded + " " + stringResult;
    obj12.style = tmp.number;
    const obj13 = { end: rounded };
    obj12.children = timestampProducer(tmp11(13637), obj13);
    tmp13Result = timestampProducer(View, obj12);
  }
  items4[1] = tmp13Result;
  const obj14 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: null };
  const tmp11Result5 = tmp11(13624);
  if (rounded <= 0 && null != stateFromStores1) {
    const intl5 = util.intl;
    const obj15 = { numWords: CheckpointStatsUtils.formatCheckpointCompactNumber(stateFromStores1), numCopies: null };
    const tmp2Result4 = CheckpointStatsUtils;
    const tmp2Result5 = CheckpointStatsUtils;
    obj15.numCopies = tmp2Result5.formatCheckpointCompactNumber(CheckpointStatsUtils.getCheckpointOdysseyCopies(stateFromStores1));
    let formatToPlainStringResult1 = intl5.formatToPlainString(tmp11(3092).bAxEs2, obj15);
    const tmp2Result6 = CheckpointStatsUtils;
  } else if (null != checkpointTopPercent) {
    const intl4 = util.intl;
    const obj16 = {
      numMessages: rounded,
      percent: checkpointTopPercent,
      percentHook(children, arg1) {
          return closure_1_6(CheckpointEmphasisDefault, { children }, arg1);
        }
    };
    formatToPlainStringResult1 = intl4.format(tmp11(3092).TOMBAW, obj16);
  } else {
    const intl3 = util.intl;
    const obj17 = { numMessages: rounded };
    formatToPlainStringResult1 = intl3.format(tmp11(3092).cYCqz8, obj17);
  }
  const obj18 = { children: null };
  obj14.children = formatToPlainStringResult1;
  items4[2] = timestampProducer(tmp11(13624), obj14);
  obj7.children = items4;
  items2[1] = React5(View, obj7);
  obj4.children = items2;
  obj18.children = React5(View, obj4);
  return timestampProducer(tmp11Result, obj18);
};