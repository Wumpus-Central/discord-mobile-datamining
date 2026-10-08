// === Module 17361: MessageRequestsScreenWithTabs ===

// Module 17361 (MessageRequestsScreenWithTabs)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import SegmentedControlState from "SegmentedControlState" /* 8505 */;
import SegmentedControl from "SegmentedControl" /* 8752 */;
import SegmentedControlPages from "SegmentedControlPages" /* 11211 */;
import TTIFirstContentfulPaint from "TTIFirstContentfulPaint" /* 11518 */;
import MessageRequestListDefault from "MessageRequestList" /* 17362 */;
import SpamMessageListDefault from "SpamMessageList" /* 17378 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const constants = { REQUEST: "REQUEST", SPAM: "SPAM" };
const createStyles = fn(5090);
let obj = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, messageRequestContent: { flex: 1 }, tabContainer: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj.tabContainer = { minHeight: 32, paddingHorizontal: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj4 = { minHeight: 32, paddingHorizontal: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsScreenWithTabs.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MessageRequestsScreenWithTabs(navigation) {
  const cResult = c.c(30);
  navigation = navigation.navigation;
  const tmp4 = closure_9();
  [tmp6, importDefault] = noop.useState(0);
  if (cResult[0] !== navigation) {
    const fn = function b(channelId) {
      return navigation.push("preview", { channelId });
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function y(nativeEvent) {
      importDefault(nativeEvent.nativeEvent.layout.width);
    };
    cResult[2] = fn2;
    let tmp8 = fn2;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["7RFcXZ"]);
    cResult[3] = stringResult;
    let tmp9 = stringResult;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== tmp7) {
    const obj2 = { label: tmp9, id: constants.REQUEST, page: null };
    const obj3 = { goToMessageRequestPreview: tmp7 };
    obj2.page = timestampProducer(MessageRequestListDefault, obj3);
    cResult[4] = tmp7;
    cResult[5] = obj2;
    let tmp11 = obj2;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t.ulKXHp);
    cResult[6] = stringResult1;
    let tmp15 = stringResult1;
  } else {
    tmp15 = cResult[6];
  }
  if (cResult[7] !== tmp7) {
    const obj4 = { label: tmp15, id: constants.SPAM, page: null };
    const obj5 = { goToMessageRequestPreview: tmp7 };
    obj4.page = timestampProducer(SpamMessageListDefault, obj5);
    cResult[7] = tmp7;
    cResult[8] = obj4;
    let tmp17 = obj4;
  } else {
    tmp17 = cResult[8];
  }
  if (cResult[9] === tmp11) {
    if (cResult[10] === tmp17) {
      let tmp21 = cResult[11];
    }
    if (cResult[12] === tmp6) {
      if (cResult[13] === tmp21) {
        let tmp22 = cResult[14];
      }
      const segmentedControlState = SegmentedControlState.useSegmentedControlState(tmp22);
      if (cResult[15] !== segmentedControlState) {
        const obj6 = { state: segmentedControlState };
        const tmp26 = timestampProducer(SegmentedControl.SegmentedControl, obj6);
        cResult[15] = segmentedControlState;
        cResult[16] = tmp26;
        let tmp24 = tmp26;
      } else {
        tmp24 = cResult[16];
      }
      if (cResult[17] === tmp4.tabContainer) {
        if (cResult[18] === tmp24) {
          let tmp27 = cResult[19];
        }
        if (cResult[20] !== segmentedControlState) {
          const obj7 = { state: segmentedControlState };
          const tmp33 = timestampProducer(SegmentedControlPages.SegmentedControlPages, obj7);
          cResult[20] = segmentedControlState;
          cResult[21] = tmp33;
          let tmp31 = tmp33;
        } else {
          tmp31 = cResult[21];
        }
        if (cResult[22] === tmp4.messageRequestContent) {
          if (cResult[23] === tmp31) {
            let tmp34 = cResult[24];
          }
          const _Symbol = Symbol;
          if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp40 = timestampProducer(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "message_requests" });
            cResult[25] = tmp40;
            let tmp38 = tmp40;
          } else {
            tmp38 = cResult[25];
          }
          if (cResult[26] === tmp4.container) {
            if (cResult[27] === tmp27) {
              if (cResult[28] === tmp34) {
                let tmp41 = cResult[29];
              }
              return tmp41;
            }
          }
          const obj8 = { style: tmp4.container, children: null };
          const items = [tmp27, tmp34, tmp38];
          obj8.children = items;
          const tmp44 = React5(View, obj8);
          cResult[26] = tmp4.container;
          cResult[27] = tmp27;
          cResult[28] = tmp34;
          cResult[29] = tmp44;
          tmp41 = tmp44;
        }
        const obj9 = { style: tmp4.messageRequestContent, children: tmp31 };
        const tmp37 = timestampProducer(View, obj9);
        cResult[22] = tmp4.messageRequestContent;
        cResult[23] = tmp31;
        cResult[24] = tmp37;
        tmp34 = tmp37;
      }
      const obj10 = { style: tmp4.tabContainer, onLayout: tmp8, children: tmp24 };
      const tmp30 = timestampProducer(View, obj10);
      cResult[17] = tmp4.tabContainer;
      cResult[18] = tmp24;
      cResult[19] = tmp30;
      tmp27 = tmp30;
      const tmpResult = SegmentedControlState;
    }
    const obj11 = { items: tmp21, pageWidth: tmp6, defaultIndex: 0 };
    cResult[12] = tmp6;
    cResult[13] = tmp21;
    cResult[14] = obj11;
    tmp22 = obj11;
  }
  const items1 = [tmp11, tmp17];
  cResult[9] = tmp11;
  cResult[10] = tmp17;
  cResult[11] = items1;
  tmp21 = items1;
  const tmp5 = _slicedToArray(noop.useState(0), 2);
}) : (function MessageRequestsScreenWithTabs(navigation) {
  navigation = navigation.navigation;
  closure_1 = undefined;
  const tmp = closure_9();
  [obj2.pageWidth, closure_1] = noop.useState(0);
  const items = [navigation];
  const callback = noop.useCallback((channelId) => navigation.push("preview", { channelId }), items);
  const callback1 = noop.useCallback((nativeEvent) => {
    closure_1(nativeEvent.nativeEvent.layout.width);
  }, []);
  const obj2 = { items: null, pageWidth: null, defaultIndex: 0 };
  const obj3 = { label: null, id: null, page: null };
  const intl = util.intl;
  obj3.label = intl.string(util.t["7RFcXZ"]);
  obj3.id = constants.REQUEST;
  obj3.page = timestampProducer(MessageRequestListDefault, { goToMessageRequestPreview: callback });
  const items1 = [obj3, ];
  const obj4 = { label: null, id: null, page: null };
  const intl2 = util.intl;
  obj4.label = intl2.string(util.t.ulKXHp);
  obj4.id = constants.SPAM;
  obj4.page = timestampProducer(SpamMessageListDefault, { goToMessageRequestPreview: callback });
  items1[1] = obj4;
  obj2.items = items1;
  const segmentedControlState = SegmentedControlState.useSegmentedControlState(obj2);
  const obj5 = { style: tmp.container, children: null };
  const items2 = [timestampProducer(View, { style: tmp.tabContainer, onLayout: callback1, children: timestampProducer(SegmentedControl.SegmentedControl, { state: segmentedControlState }) }), , ];
  const obj6 = { style: tmp.tabContainer, onLayout: callback1, children: timestampProducer(SegmentedControl.SegmentedControl, { state: segmentedControlState }) };
  items2[1] = timestampProducer(View, { style: tmp.messageRequestContent, children: timestampProducer(SegmentedControlPages.SegmentedControlPages, { state: segmentedControlState }) });
  items2[2] = timestampProducer(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "message_requests" });
  obj5.children = items2;
  return React5(View, obj5);
}));