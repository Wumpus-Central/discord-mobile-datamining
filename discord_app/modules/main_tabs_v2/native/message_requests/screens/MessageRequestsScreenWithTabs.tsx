// discord_app/modules/main_tabs_v2/native/message_requests/screens/MessageRequestsScreenWithTabs.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import intl5 from "../../../../../intl/index.native.tsx";
import SegmentedControlState from "../../../../../design/components/SegmentedControl/native/SegmentedControlState.native.tsx";
import SegmentedControl from "../../../../../design/components/SegmentedControl/native/SegmentedControl.native.tsx";
import SegmentedControlPages from "../../../../../design/components/SegmentedControl/native/SegmentedControlPages.native.tsx";
import TTIFirstContentfulPaint from "../../../../tti_analytics/native/TTIFirstContentfulPaint.tsx";
import MessageRequestListDefault from "../../../../message_request/native/MessageRequestList.tsx";
import SpamMessageListDefault from "../../../../message_request/native/spam/SpamMessageList.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let navigation;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const constants = { REQUEST: "REQUEST", SPAM: "SPAM" };
let createStyles = createStyles_mod;
let obj = { container: obj2, messageRequestContent: { flex: 1 }, tabContainer: obj3 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
obj3 = { minHeight: 32, paddingHorizontal: nativeDefault.space.PX_16 };
let closure_9 = createStyles(obj);
const memo = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (navigation) => {
        let closure_129_1;
        let items;
        let obj3;
        let obj5;
        let tmp11;
        let tmp15;
        let tmp17;
        let tmp6;
        let tmp7;
        let tmp8;
        let tmp9;
        let obj = react2;
        const cResult = obj.c(30);
        navigation = navigation.navigation;
        const tmp4 = closure_9();
        let tmp5 = _slicedToArray(react.useState(0), 2);
        [tmp6, closure_129_1] = tmp5;
        if (cResult[0] !== navigation) {
          const fn = function v(channelId) {
            const obj = { channelId };
            return navigation.push("preview", obj);
          };
          cResult[0] = navigation;
          cResult[1] = fn;
          tmp7 = fn;
        } else {
          tmp7 = cResult[1];
        }
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const fn2 = function y(nativeEvent) {
            closure_1_1(nativeEvent.nativeEvent.layout.width);
          };
          cResult[2] = fn2;
          tmp8 = fn2;
        } else {
          tmp8 = cResult[2];
        }
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          let intl = intl5.intl;
          let stringResult = intl.string(intl5.t["7RFcXZ"]);
          cResult[3] = stringResult;
          tmp9 = stringResult;
        } else {
          tmp9 = cResult[3];
        }
        if (cResult[4] !== tmp7) {
          let obj2 = { label: tmp9, id: constants.REQUEST, page: metroRequire(MessageRequestListDefault, obj3) };
          obj3 = { goToMessageRequestPreview: tmp7 };
          cResult[4] = tmp7;
          cResult[5] = obj2;
          tmp11 = obj2;
        } else {
          tmp11 = cResult[5];
        }
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          let intl2 = intl5.intl;
          const stringResult1 = intl2.string(intl5.t.ulKXHp);
          cResult[6] = stringResult1;
          tmp15 = stringResult1;
        } else {
          tmp15 = cResult[6];
        }
        if (cResult[7] !== tmp7) {
          let obj4 = { label: tmp15, id: constants.SPAM, page: metroRequire(SpamMessageListDefault, obj5) };
          obj5 = { goToMessageRequestPreview: tmp7 };
          cResult[7] = tmp7;
          cResult[8] = obj4;
          tmp17 = obj4;
        } else {
          tmp17 = cResult[8];
        }
        if (cResult[9] === tmp11) {
          let tmp21;
          if (cResult[10] === tmp17) {
            tmp21 = cResult[11];
          }
          if (cResult[12] === tmp6) {
            let tmp22;
            let tmp24;
            if (cResult[13] === tmp21) {
              tmp22 = cResult[14];
            }
            const tmpResult = SegmentedControlState;
            const segmentedControlState = tmpResult.useSegmentedControlState(tmp22);
            if (cResult[15] !== segmentedControlState) {
              let obj6 = { state: segmentedControlState };
              const tmp26 = metroRequire(SegmentedControl.SegmentedControl, obj6);
              cResult[15] = segmentedControlState;
              cResult[16] = tmp26;
              tmp24 = tmp26;
            } else {
              tmp24 = cResult[16];
            }
            if (cResult[17] === tmp4.tabContainer) {
              let tmp27;
              let tmp31;
              if (cResult[18] === tmp24) {
                tmp27 = cResult[19];
              }
              if (cResult[20] !== segmentedControlState) {
                let obj7 = { state: segmentedControlState };
                const tmp33 = metroRequire(SegmentedControlPages.SegmentedControlPages, obj7);
                cResult[20] = segmentedControlState;
                cResult[21] = tmp33;
                tmp31 = tmp33;
              } else {
                tmp31 = cResult[21];
              }
              if (cResult[22] === tmp4.messageRequestContent) {
                let tmp34;
                let tmp38;
                if (cResult[23] === tmp31) {
                  tmp34 = cResult[24];
                }
                const _Symbol = Symbol;
                if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp40 = metroRequire(TTIFirstContentfulPaint.TTIFirstContentfulPaint, {
                    label: "message_requests",
                  });
                  cResult[25] = tmp40;
                  tmp38 = tmp40;
                } else {
                  tmp38 = cResult[25];
                }
                if (cResult[26] === tmp4.container) {
                  if (cResult[27] === tmp27) {
                    let tmp41;
                    if (cResult[28] === tmp34) {
                      tmp41 = cResult[29];
                    }
                    return tmp41;
                  }
                }
                let obj8 = { style: tmp4.container, children: items };
                items = [tmp27, tmp34, tmp38];
                const tmp44 = metroImportDefault(View, obj8);
                cResult[26] = tmp4.container;
                cResult[27] = tmp27;
                cResult[28] = tmp34;
                cResult[29] = tmp44;
                tmp41 = tmp44;
              }
              let obj9 = { style: tmp4.messageRequestContent, children: tmp31 };
              const tmp37 = metroRequire(View, obj9);
              cResult[22] = tmp4.messageRequestContent;
              cResult[23] = tmp31;
              cResult[24] = tmp37;
              tmp34 = tmp37;
            }
            const obj10 = { style: tmp4.tabContainer, onLayout: tmp8, children: tmp24 };
            const tmp30 = metroRequire(View, obj10);
            cResult[17] = tmp4.tabContainer;
            cResult[18] = tmp24;
            cResult[19] = tmp30;
            tmp27 = tmp30;
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
      }
    : (navigation) => {
        let closure_1;
        let first;
        let intl;
        let intl2;
        let items1;
        let items2;
        navigation = navigation.navigation;
        closure_1 = undefined;
        const tmp = closure_9();
        [first, closure_1] = react.useState(0);
        const items = [navigation];
        const callback = react.useCallback((channelId) => {
          const obj = { channelId };
          return navigation.push("preview", obj);
        }, items);
        const callback1 = react.useCallback((nativeEvent) => {
          closure_1(nativeEvent.nativeEvent.layout.width);
        }, []);
        let obj = { items: items1, pageWidth: first, defaultIndex: 0 };
        const obj2 = {
          label: intl.string(intl5.t["7RFcXZ"]),
          id: constants.REQUEST,
          page: metroRequire(MessageRequestListDefault, { goToMessageRequestPreview: callback }),
        };
        const useSegmentedControlState = SegmentedControlState.useSegmentedControlState;
        SegmentedControlState;
        intl = intl5.intl;
        items1 = [obj2];
        const obj3 = {
          label: intl2.string(intl5.t.ulKXHp),
          id: constants.SPAM,
          page: metroRequire(SpamMessageListDefault, { goToMessageRequestPreview: callback }),
        };
        intl2 = intl5.intl;
        items1[1] = obj3;
        const segmentedControlState = useSegmentedControlState(obj);
        const obj4 = { style: tmp.container, children: items2 };
        items2 = [, ,];
        const obj5 = {
          style: tmp.tabContainer,
          onLayout: callback1,
          children: metroRequire(SegmentedControl.SegmentedControl, { state: segmentedControlState }),
        };
        items2[0] = metroRequire(View, obj5);
        const obj6 = {
          style: tmp.messageRequestContent,
          children: metroRequire(SegmentedControlPages.SegmentedControlPages, { state: segmentedControlState }),
        };
        items2[1] = metroRequire(View, obj6);
        items2[2] = metroRequire(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "message_requests" });
        return metroImportDefault(View, obj4);
      },
);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/message_requests/screens/MessageRequestsScreenWithTabs.tsx",
);

export default memoResult;
