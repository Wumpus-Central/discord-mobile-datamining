// discord_app/modules/self_mod/shared/native/SafetyToolsActionSheetWrapper.tsx
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";

const require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsActionSheetWrapper.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = channelId(stateFromStores[4]).c(16);
      ({ headerTitle, hasHeaderBack, channelId } = arg0);
      ({ warningId, warningType, recipientId, children, onClose } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function s() {
          return ChannelStore.getChannel(channelId);
        };
        cResult[1] = channelId;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = channelId(stateFromStores[4]);
      stateFromStores = channelId(stateFromStores[5]).useStateFromStores(first, tmp6);
      if (cResult[3] === stateFromStores) {
        if (cResult[4] === onClose) {
          let tmp8 = cResult[5];
          let tmp9 = cResult[6];
        }
        const effect = noop.useEffect(tmp8, tmp9);
        if (cResult[7] === stateFromStores) {
          if (cResult[8] === channelId) {
            if (cResult[9] === children) {
              if (cResult[10] === hasHeaderBack) {
                if (cResult[11] === headerTitle) {
                  if (cResult[12] === recipientId) {
                    if (cResult[13] === warningId) {
                      if (cResult[14] === warningType) {
                        let tmp12 = cResult[15];
                      }
                      return tmp12;
                    }
                  }
                }
              }
            }
          }
        }
        let tmp13 = null;
        if (null != stateFromStores) {
          const obj2 = { showGradient: true, startExpanded: true, header: null, children: null };
          const obj3 = {
            recipientId,
            warningId,
            warningType,
            hasBackButton: hasHeaderBack,
            title: headerTitle,
            channelId,
          };
          obj2.header = jsx(onClose(tmp2[7]), {
            recipientId,
            warningId,
            warningType,
            hasBackButton: hasHeaderBack,
            title: headerTitle,
            channelId,
          });
          obj2.children = children;
          tmp13 = jsx(channelId(tmp2[6]).BottomSheet, {
            showGradient: true,
            startExpanded: true,
            header: null,
            children: null,
          });
        }
        cResult[7] = stateFromStores;
        cResult[8] = channelId;
        cResult[9] = children;
        cResult[10] = hasHeaderBack;
        cResult[11] = headerTitle;
        cResult[12] = recipientId;
        cResult[13] = warningId;
        cResult[14] = warningType;
        cResult[15] = tmp13;
        tmp12 = tmp13;
      }
      class T {
        constructor() {
          if (null == closure_2) {
            tmp = onClose;
            tmp2 = onClose();
          }
          return;
        }
      }
      const items1 = [stateFromStores, onClose];
      cResult[3] = stateFromStores;
      cResult[4] = onClose;
      cResult[5] = T;
      cResult[6] = items1;
      tmp9 = items1;
      tmp8 = T;
      const tmpResult = channelId(stateFromStores[5]);
    }
  : (channelId) => {
      channelId = channelId.channelId;
      const onClose = channelId.onClose;
      let stateFromStores;
      ({ headerTitle, hasHeaderBack, warningId, warningType, recipientId, children } = channelId);
      const items = [ChannelStore];
      stateFromStores = channelId(stateFromStores[5]).useStateFromStores(items, () =>
        ChannelStore.getChannel(channelId),
      );
      const items1 = [stateFromStores, onClose];
      const effect = noop.useEffect(() => {
        if (null == stateFromStores) {
          onClose();
        }
      }, items1);
      let tmp5 = null;
      if (null != stateFromStores) {
        const obj2 = { showGradient: true, startExpanded: true, header: null, children: null };
        const obj3 = {
          recipientId,
          warningId,
          warningType,
          hasBackButton: hasHeaderBack,
          title: headerTitle,
          channelId,
        };
        obj2.header = jsx(onClose(tmp2[7]), {
          recipientId,
          warningId,
          warningType,
          hasBackButton: hasHeaderBack,
          title: headerTitle,
          channelId,
        });
        obj2.children = children;
        tmp5 = jsx(channelId(tmp2[6]).BottomSheet, {
          showGradient: true,
          startExpanded: true,
          header: null,
          children: null,
        });
      }
      return tmp5;
    };
