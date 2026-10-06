// === Module 9849: SafetyToolsActionSheetHeader ===

// Module 9849 (SafetyToolsActionSheetHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import NavigatorHeader from "NavigatorHeader" /* 6017 */;
import SafetyToolsActionCreators from "SafetyToolsActionCreators" /* 9838 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { navbarContainer: { display: "flex", flexDirection: "row", justifyContent: "center" }, navbarLeft: obj2 };
obj2 = { position: "absolute", left: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((recipientId) => {
  let channelId;
  let items;
  let title;
  let obj = channelId(recipientId[6]);
  const cResult = obj.c(16);
  ({ title, channelId } = recipientId);
  recipientId = recipientId.recipientId;
  const warningId = recipientId.warningId;
  const warningType = recipientId.warningType;
  const hasBackButton = recipientId.hasBackButton;
  const tmp4 = closure_6();
  if (cResult[0] === channelId) {
    if (cResult[1] === recipientId) {
      if (cResult[2] === warningId) {
        let tmp5;
        let tmp6;
        if (cResult[3] === warningType) {
          tmp5 = cResult[4];
        }
        if (cResult[5] !== tmp5) {
          const tmpResult = channelId(recipientId[8]);
          const headerBackButton = tmpResult.getHeaderBackButton(tmp5);
          cResult[5] = tmp5;
          cResult[6] = headerBackButton;
          tmp6 = headerBackButton;
        } else {
          tmp6 = cResult[6];
        }
        if (cResult[7] === tmp6) {
          let tmp8;
          let tmp13;
          if (cResult[8] === tmp4.navbarLeft) {
            tmp8 = cResult[9];
          }
          if (cResult[10] !== title) {
            const obj2 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: title };
            const tmp15 = closure_4(channelId(recipientId[9]).Text, obj2);
            cResult[10] = title;
            cResult[11] = tmp15;
            tmp13 = tmp15;
          } else {
            tmp13 = cResult[11];
          }
          if (cResult[12] === tmp4.navbarContainer) {
            if (cResult[13] === (null != hasBackButton && tmp8)) {
              let tmp16;
              if (cResult[14] === tmp13) {
                tmp16 = cResult[15];
              }
              return tmp16;
            }
          }
          const obj3 = { style: tmp4.navbarContainer, children: items };
          items = [null != hasBackButton && tmp8, tmp13];
          const tmp19 = closure_5(warningType, obj3);
          cResult[12] = tmp4.navbarContainer;
          cResult[13] = null != hasBackButton && tmp8;
          cResult[14] = tmp13;
          cResult[15] = tmp19;
          tmp16 = tmp19;
        }
        const obj4 = { style: tmp4.navbarLeft };
        const tmp10 = closure_4(tmp6, obj4);
        cResult[7] = tmp6;
        cResult[8] = tmp4.navbarLeft;
        cResult[9] = tmp10;
        tmp8 = tmp10;
      }
    }
  }
  const fn = function o() {
    const obj = SafetyToolsActionCreators;
    const result = obj.openSafetyToolsActionSheet(channelId, recipientId, warningId, warningType);
  };
  cResult[0] = channelId;
  cResult[1] = recipientId;
  cResult[2] = warningId;
  cResult[3] = warningType;
  cResult[4] = fn;
  tmp5 = fn;
}) : ((channelId) => {
  let hasBackButton;
  let items2;
  let title;
  channelId = channelId.channelId;
  const recipientId = channelId.recipientId;
  const warningId = channelId.warningId;
  const warningType = channelId.warningType;
  ({ title, hasBackButton } = channelId);
  const tmp = closure_6();
  const navbarLeft = tmp;
  const items = [channelId, recipientId, warningId, warningType];
  const callback = warningId.useCallback(() => {
    const obj = SafetyToolsActionCreators;
    const result = obj.openSafetyToolsActionSheet(channelId, recipientId, warningId, warningType);
  }, items);
  const items1 = [callback, tmp.navbarLeft];
  let obj = { style: tmp.navbarContainer, children: items2 };
  let memo = null != hasBackButton;
  const tmp3 = callback;
  const tmp4 = warningType;
  if (memo) {
    memo = warningId.useMemo(() => {
      const obj = NavigatorHeader;
      const obj2 = { style: navbarLeft.navbarLeft };
      return React3(obj.getHeaderBackButton(callback), obj2);
    }, items1);
  }
  items2 = [memo, navbarLeft(channelId(recipientId[9]).Text, { variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: title })];
  return tmp3(tmp4, obj);
});
let result = size.fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsActionSheetHeader.tsx");

export default tmp3;