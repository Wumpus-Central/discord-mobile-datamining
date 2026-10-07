// discord_app/modules/self_mod/shared/native/SafetyToolsActionSheetHeader.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import SafetyToolsActionCreators from "../../SafetyToolsActionCreators.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  navbarContainer: { display: "flex", flexDirection: "row", justifyContent: "center" },
  navbarLeft: { position: "absolute", left: nativeDefault.space.PX_16 },
};
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { position: "absolute", left: nativeDefault.space.PX_16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsActionSheetHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (recipientId) => {
      const cResult = channelId(recipientId[6]).c(16);
      ({ title, channelId } = recipientId);
      recipientId = recipientId.recipientId;
      const warningId = recipientId.warningId;
      const warningType = recipientId.warningType;
      const tmp4 = closure_6();
      if (cResult[0] === channelId) {
        if (cResult[1] === recipientId) {
          if (cResult[2] === warningId) {
            if (cResult[3] === warningType) {
              let tmp5 = cResult[4];
            }
            if (cResult[5] !== tmp5) {
              const headerBackButton = channelId(tmp2[8]).getHeaderBackButton(tmp5);
              cResult[5] = tmp5;
              cResult[6] = headerBackButton;
              let tmp6 = headerBackButton;
              const tmpResult = channelId(tmp2[8]);
            } else {
              tmp6 = cResult[6];
            }
            if (cResult[7] === tmp6) {
              if (cResult[8] === tmp4.navbarLeft) {
                let tmp8 = cResult[9];
              }
              if (cResult[10] !== title) {
                const obj2 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: title };
                const tmp15 = closure_4(channelId(tmp2[9]).Text, obj2);
                cResult[10] = title;
                cResult[11] = tmp15;
                let tmp13 = tmp15;
              } else {
                tmp13 = cResult[11];
              }
              if (cResult[12] === tmp4.navbarContainer) {
                if (cResult[13] === tmp12) {
                  if (cResult[14] === tmp13) {
                    let tmp16 = cResult[15];
                  }
                  return tmp16;
                }
              }
              const obj3 = { style: tmp4.navbarContainer, children: null };
              const items = [null != recipientId.hasBackButton && tmp8, tmp13];
              obj3.children = items;
              const tmp19 = closure_5(warningType, obj3);
              cResult[12] = tmp4.navbarContainer;
              cResult[13] = null != recipientId.hasBackButton && tmp8;
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
        const result = SafetyToolsActionCreators.openSafetyToolsActionSheet(
          channelId,
          recipientId,
          warningId,
          warningType,
        );
      };
      cResult[0] = channelId;
      cResult[1] = recipientId;
      cResult[2] = warningId;
      cResult[3] = warningType;
      cResult[4] = fn;
      tmp5 = fn;
      const obj = channelId(recipientId[6]);
    }
  : (channelId) => {
      channelId = channelId.channelId;
      const recipientId = channelId.recipientId;
      const warningId = channelId.warningId;
      const warningType = channelId.warningType;
      ({ title, hasBackButton } = channelId);
      const tmp = closure_6();
      const navbarLeft = tmp;
      const items = [channelId, recipientId, warningId, warningType];
      const callback = warningId.useCallback(() => {
        const result = SafetyToolsActionCreators.openSafetyToolsActionSheet(
          channelId,
          recipientId,
          warningId,
          warningType,
        );
      }, items);
      const items1 = [callback, tmp.navbarLeft];
      const obj = { style: tmp.navbarContainer, children: null };
      let memo = null != hasBackButton;
      if (memo) {
        memo = warningId.useMemo(
          () => React4(NavigatorHeader.getHeaderBackButton(callback), { style: navbarLeft.navbarLeft }),
          items1,
        );
      }
      const items2 = [
        memo,
        navbarLeft(channelId(recipientId[9]).Text, {
          variant: "heading-lg/bold",
          color: "mobile-text-heading-primary",
          children: title,
        }),
      ];
      obj.children = items2;
      return callback(warningType, obj);
    };
