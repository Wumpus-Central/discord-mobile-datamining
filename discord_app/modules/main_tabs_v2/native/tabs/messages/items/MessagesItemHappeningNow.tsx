// discord_app/modules/main_tabs_v2/native/tabs/messages/items/MessagesItemHappeningNow.tsx
import react_native from "../../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../../../design/tokens/native/useToken.tsx";
import CutoutBackgroundContext from "../../../../../../design/components/Icon/native/CutoutBackgroundContext.tsx";
import MobileVisualRefreshExperiment from "../../../../../themes/experiments/MobileVisualRefreshExperiment.tsx";
import HappeningNowDefault from "../../../shared_components/happening_now/HappeningNow.tsx";
import react from "../../../../../../../_runtime/00019_react.js";
import HappeningNowConstants from "../../../shared_components/happening_now/HappeningNowConstants.tsx";
import createStyles from "../../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

let listRef;

let HappeningNowItem;
let closure_4;
const View = react_native.View;
({ HAPPENING_NOW_CARD_HEIGHT: closure_4, HappeningNowItem } = HappeningNowConstants);
const jsx = Fragment.jsx;
const items = [, , , , , ,];
({
  LIVE_GUILD_STAGE: arr[0],
  VOICES: arr[1],
  EMBEDDED_ACTIVITY: arr[2],
  STREAMS: arr[3],
  ACTIVITIES: arr[4],
  USER_CUSTOM_STATUS: arr[5],
  USER: arr[6],
} = HappeningNowItem);
const set = new Set(items);
let closure_7 = createStyles.createStyles((height) => {
  const obj = { container: { height, paddingStart: nativeDefault.space.PX_8, overflow: "hidden" } };
  ({ height, paddingStart: nativeDefault.space.PX_8, overflow: "hidden" });
  return obj;
});
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (listRef) => {
        let tmp6;
        const obj = react2;
        const cResult = obj.c(5);
        listRef = listRef.listRef;
        const obj2 = useToken;
        const tmp5 = closure_7(
          React3 + obj2.useToken(nativeDefault.modules.mobile.MESSAGES_ITEM_HAPPENING_NOW_PADDING_BOTTOM),
        );
        if (cResult[0] !== listRef) {
          const tmp9 = jsx(HappeningNowDefault, { cards: set, listRef });
          cResult[0] = listRef;
          cResult[1] = tmp9;
          tmp6 = tmp9;
        } else {
          tmp6 = cResult[1];
        }
        if (cResult[2] === tmp5.container) {
          let tmp10;
          if (cResult[3] === tmp6) {
            tmp10 = cResult[4];
          }
          return tmp10;
        }
        const CutoutBackgroundProvider = CutoutBackgroundContext.CutoutBackgroundProvider;
        const tmp11 = <CutoutBackgroundProvider backgroundColor={null}>{null}</CutoutBackgroundProvider>;
        cResult[2] = tmp5.container;
        cResult[3] = tmp6;
        cResult[4] = tmp11;
        tmp10 = tmp11;
      }
    : (listRef) => {
        listRef = listRef.listRef;
        const obj = useToken;
        ({
          style: closure_7(
            React3 + obj.useToken(nativeDefault.modules.mobile.MESSAGES_ITEM_HAPPENING_NOW_PADDING_BOTTOM),
          ).container,
          collapsable: false,
          children: null,
        });
        const CutoutBackgroundProvider = CutoutBackgroundContext.CutoutBackgroundProvider;
        return <CutoutBackgroundProvider backgroundColor={null}>{null}</CutoutBackgroundProvider>;
      },
);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/tabs/messages/items/MessagesItemHappeningNow.tsx",
);

export default memoResult;
export const getMessagesItemHappeningNowHeight = function getMessagesItemHappeningNowHeight() {
  const obj = MobileVisualRefreshExperiment;
  return obj.resolveRefreshToken(nativeDefault.modules.mobile.MESSAGES_ITEM_HAPPENING_NOW_PADDING_BOTTOM) + React3;
};
