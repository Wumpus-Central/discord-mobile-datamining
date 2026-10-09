// discord_app/modules/ato_alerts/native/components/LikelyAtoMoreTipsModalActionItems.tsx
import UserUtilsDefault from "../../../../utils/UserUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

const require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/ato_alerts/native/components/LikelyAtoMoreTipsModalActionItems.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function LikelyAtoMoreTipsModalActionItems(senderId) {
      const cResult = senderId(576).c(13);
      senderId = senderId.senderId;
      const handleMutePressed = senderId.handleMutePressed;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== senderId) {
        const fn = function l() {
          return UserStore.getUser(senderId);
        };
        const items1 = [senderId];
        cResult[1] = senderId;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp7 = items1;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const obj = senderId(576);
      const stateFromStores = senderId(504).useStateFromStores(first, tmp6, tmp7);
      if (cResult[4] !== stateFromStores) {
        const name = UserUtilsDefault.getName(stateFromStores);
        cResult[4] = stateFromStores;
        cResult[5] = name;
        let tmp9 = name;
      } else {
        tmp9 = cResult[5];
      }
      if (cResult[6] !== tmp9) {
        const intl = tmp(1126).intl;
        const obj2 = { username: tmp9 };
        const formatToPlainStringResult = intl.formatToPlainString(tmp(1126).t["F/ID+9"], obj2);
        cResult[6] = tmp9;
        cResult[7] = formatToPlainStringResult;
        let tmp12 = formatToPlainStringResult;
      } else {
        tmp12 = cResult[7];
      }
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const stringResult = intl2.string(tmp(1126).t.w2ve0t);
        cResult[8] = stringResult;
        let tmp14 = stringResult;
      } else {
        tmp14 = cResult[8];
      }
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp18 = jsx(tmp(10312).BellSlashIcon, {});
        cResult[9] = tmp18;
        let tmp16 = tmp18;
      } else {
        tmp16 = cResult[9];
      }
      if (cResult[10] === handleMutePressed) {
        if (cResult[11] === tmp12) {
          let tmp19 = cResult[12];
        }
        return tmp19;
      }
      const tmpResult = senderId(504);
      const tmp20 = jsx(senderId(6269).TableRowGroup, {
        hasIcons: true,
        children: jsx(senderId(6186).TableRow, {
          label: tmp12,
          subLabel: tmp14,
          onPress: handleMutePressed,
          icon: tmp16,
        }),
      });
      cResult[10] = handleMutePressed;
      cResult[11] = tmp12;
      cResult[12] = tmp20;
      tmp19 = tmp20;
      const obj4 = {
        hasIcons: true,
        children: jsx(senderId(6186).TableRow, {
          label: tmp12,
          subLabel: tmp14,
          onPress: handleMutePressed,
          icon: tmp16,
        }),
      };
    }
  : function LikelyAtoMoreTipsModalActionItems(senderId) {
      senderId = senderId.senderId;
      const items = [UserStore];
      const items1 = [senderId];
      const stateFromStores = senderId(504).useStateFromStores(items, () => UserStore.getUser(senderId), items1);
      const items2 = [stateFromStores];
      const memo = noop.useMemo(() => UserUtilsDefault.getName(stateFromStores), items2);
      const obj2 = { hasIcons: true, children: null };
      const obj3 = { label: null, subLabel: null, onPress: null, icon: null };
      const intl = senderId(1126).intl;
      obj3.label = intl.formatToPlainString(senderId(1126).t["F/ID+9"], { username: memo });
      const intl2 = senderId(1126).intl;
      obj3.subLabel = intl2.string(senderId(1126).t.w2ve0t);
      obj3.onPress = senderId.handleMutePressed;
      obj3.icon = jsx(senderId(10312).BellSlashIcon, {});
      obj2.children = jsx(senderId(6186).TableRow, { label: null, subLabel: null, onPress: null, icon: null });
      return jsx(senderId(6269).TableRowGroup, { hasIcons: true, children: null });
    };
